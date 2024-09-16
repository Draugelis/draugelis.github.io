---
title: TryHackMe - Sakura Room
description: A write-up for the Sakura Room on TryHackMe
date: 2024-09-01 11:00 +0300
categories: [TryHackMe]
tags: [tryhackme, writeup]
---

# TryHackMe: Sakura Room

Link to the room: [TryHackMe](https://tryhackme.com/r/room/sakura)

## Walkthrough

This write-up will be divided into sections according to the tasks in the Sakura Room.
- [Task 1: Introduction](#task-1-introduction)
- [Task 2: Tip-off](#task-2-tip-off)
- [Task 3: Reconnaissance](#task-3-reconnaissance)
- [Task 4: Unveil](#task-4-unveil)
- [Task 5: Taunt](#task-5-taunt)
- [Task 6: Homebound](#task-6-homebound)


---
### Task 1: Introduction

There is nothing much in this task besides the background for this room:
#### Background
> This room is designed to test a wide variety of different OSINT techniques. With a bit of research, most beginner OSINT practitioners should be able to complete these challenges. This room will take you through a sample OSINT investigation in which you will be asked to identify a number of identifiers and other pieces of information in order to help catch a cybercriminal. Each section will include some pretext to help guide you in the right direction, as well as one or more questions that need to be answered in order to continue on with the investigation. Although all of the flags are staged, this room was created using working knowledge from having led and assisted in OSINT investigations both in the public and private sector. 
> 
> NOTE: All answers can be obtained via passive OSINT techniques, DO NOT attempt any active techniques such as reaching out to account owners, password resets, etc to solve these challenges.
> 
> If you have any other questions, comments, or suggestions, please reach out to us at @OSINTDojo on Twitter.

#### Instructions
> Ready to get started? Type in "Let's Go!" in the answer box below to continue.

#### Answer
<details>
    <summary>Are you ready to begin?</summary>
    <p>Let's Go!</p>
</details>

---
### Task 2: Tip-off

#### Background
> The OSINT Dojo recently found themselves the victim of a cyber attack. It seems that there is no major damage, and there does not appear to be any other significant indicators of compromise on any of our systems. However during forensic analysis our admins found an image left behind by the cybercriminals. Perhaps it contains some clues that could allow us to determine who the attackers were? 
>
> We've copied the image left by the attacker, you can view it in your browser [here](https://raw.githubusercontent.com/OsintDojo/public/3f178408909bc1aae7ea2f51126984a8813b0901/sakurapwnedletter.svg).


#### Instructions
> Images can contain a treasure trove of information, both on the surface as well as embedded within the file itself. You might find information such as when a photo was created, what software was used, author and copyright information, as well as other metadata significant to an investigation. In order to answer the following question, you will need to thoroughly analyze the image found by the OSINT Dojo administrators in order to obtain basic information on the attacker.

#### Process

The link in *background* leads to an SVG image:

![sakurapwnedletter](/assets/img/posts/tryhackme-sakuraroom/sakurapwnedletter.png)
_Sakura Room Pwned letter_

Since it is an SVG image, the image metadata can be accessed by viewing the page source (right-click > "View Page Source"). This reveals the SVG tags:
```xml
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="116.29175mm"
   height="174.61578mm"
   viewBox="0 0 116.29175 174.61578"
   version="1.1"
   id="svg8"
   inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)"
   sodipodi:docname="pwnedletter.svg"
   inkscape:export-filename="/home/SakuraSnowAngelAiko/Desktop/pwnedletter.png"
   inkscape:export-xdpi="96"
   inkscape:export-ydpi="96">
```

Here, we can see that the image was made using [Inkscape](https://inkscape.org/), and more interestingly, the target's username: `SakuraSnowAngelAiko`.
```xml
inkscape:export-filename="/home/SakuraSnowAngelAiko/Desktop/pwnedletter.png"
```

This is the only question in this task, so let's move forward.

#### Answer
<details>
    <summary>What username does the attacker go by?</summary>
    <p>SakuraSnowAngelAiko</p>
</details>

---
### Task 3: Reconnaissance

#### Background
> It appears that our attacker made a fatal mistake in their operational security. They seem to have reused their username across other social media platforms as well. This should make it far easier for us to gather additional information on them by locating their other social media accounts. 

#### Instructions
> Most digital platforms have some sort of username field. Many people become attached to their usernames, and may therefore use it across a number of platforms, making it easy to find other accounts owned by the same person when the username is unique enough. This can be especially helpful on platforms such as on job hunting sites where a user is more likely to provide real information about themselves, such as their full name or location information.
> 
> A quick search on a reputable search engine can help find matching usernames on other platforms, and there are also a large number of specialty tools that exist for that very same purpose. Keep in mind, that sometimes a platform will not show up in either the search engine results or in the specialized username searches due to false negatives. In some cases you need to manually check the site yourself to be 100% positive if the account exists or not. In order to answer the following questions, use the attacker's username found in Task 2 to expand the OSINT investigation onto other platforms in order to gather additional identifying information on the attacker. Be wary of any false positives!

#### Process
As the instructions suggest, let's start by searching for "SakuraSnowAngelAiko" on Google. This yields a GitHub and X/Twitter page:
1. GitHub: [https://github.com/sakurasnowangelaiko](https://github.com/sakurasnowangelaiko)
2. X/Twitter: [https://x.com/sakuraloveraiko](https://x.com/sakuraloveraiko)

Let's review these two accounts!

##### Github
Information from GitHub
- There are 9 repositories: 6 forks and 3 created by the target.
- The 3 repositories created by the target are:
  - [IO](https://github.com/sakurasnowangelaiko/IO) - Appears to be Java code written while learning Java.
  - [ETH](https://github.com/sakurasnowangelaiko/ETH) - Contains a single `miningscript` file with a URI: `stratum://ethwallet.workerid:password@miningpool:port`. Initially (in the first commit of this repo), the file contained: `stratum://0xa102397dbeeBeFD8cD2F73A89122fCdB53abB6ef.Aiko:pswd@eu1.ethermine.org:4444`.
  - [PGP](https://github.com/sakurasnowangelaiko/PGP) - Contains a public PGP key.

```text
-----BEGIN PGP PUBLIC KEY BLOCK-----

mQGNBGALrAYBDACsGmhcjKRelsBCNXwWvP5mN7saMKsKzDwGOCBBMViON52nqRyd
HivLsWdwN2UwRXlfJoxCM5+QlxRpzrJlkIgAXGD23z0ot+S7R7tZ8Yq2HvSe5JJL
FzoZjCph1VsvMfNIPYFcufbwjJzvBAG00Js0rBj5t1EHaXK6rtJz6UMZ4n+B2Vm9
LIx8VihIU9QfjGAyyvX735ZS1zMhEyNGQmusrDpahvIwjqEChVa4hyVIAOg7p5Fm
t6TzxhSPhNIpAtCDIYL1WdonRDgQ3VrtG5S/dTNbzDGdvAg13B8EEH00d+VqOTpu
fnR4GnKFep52czHVkBkrNY1tL5ZyYxHUFaSfYWh9FI2RUGQSbCihAIzKSP26mFeH
HPFmxrvStovcols4f1tOA6bF+GbkkDj+MUgvrUZWbeXbRvyoKTJNonhcf5bMz/D5
6StORyd15O+iiLLRyi5Xf6I2RRHPfp7A4TsuH4+aOxoVaMxgCFZb7cMXNqDpeJO1
/idzm0HUkCiP6Z0AEQEAAbQgU2FrdXJhU25vd0FuZ2VsODNAcHJvdG9ubWFpbC5j
b22JAdQEEwEKAD4WIQSmUZ8nO/iOkSaw9MXs3Q/SlBEEUAUCYAusBgIbAwUJA8Hp
ugULCQgHAgYVCgkICwIEFgIDAQIeAQIXgAAKCRDs3Q/SlBEEUP/9C/0b6aWQhTr7
0Jgf68KnS8nTXLJeoi5S9+moP/GVvw1dsfLoHkJYXuIc/fne2Y1y4qjvEdSCtAIs
rqReXnolyyqCWS2e70YsQ9Sgg0JG4o7rOVojKJNzuHDWQ944yhGk6zjC54qHba6+
37F9erDy+xRQS9BSgEFf2C60Fe00i+vpOWipqYAc1VGaUxHNrVYn8FuO1sIRTIo7
10LRlbUHVgZvDIRRl1dyFbF8B7oxrZZe9eWQGURjXEVg07nh1V5UzekRv7qLsVyg
sTV3mxodvxgw3KmrxU9FsFSKY9Cdu8vN9IvFJWQQj++rnzyyTUCUmxSB9Y/L9wRx
4+7DSpfV1e4bGOZKY+KQqipYypUX1AFMHeb2RKVvjK5DzMDq6CQs73jqq/vlYdp4
kNsucdZKEKn2eVjJIon75OvE5cusOlOjZuR93+w5Cmf4q6DhpXSUT1APO16R1eue
8mPTmCra9dEmzAMsnLEPSPXN5tzdxcDqHvvIDtj8M3l2iRyD6v1NeZa5AY0EYAus
BgEMAN4mK70jRDxwnjQd8AJS133VncYT43gehVmkKaZOAFaxoZtmR6oJbiTwj+bl
fV1IlXP5lI8OJBZ2YPEvLEBhuqeFQjEIG4Suk3p/HUaIXaVhiIjFRzoxoIZGM1Mh
XKRsqc3Zd3LLg1Gir7smKSMv8qIlgnZZrOTcpWX9Qh9Od/MqtCRyg5Rt8FibtKFI
Y0j4pvjGszEvwurHqS0Jxxzdd+jOsfgTewFAy1/93scmmCg7mqUQV79DbaDL4JZv
vCd3rxX08JyMwdRcOveR3JJERsLN9v8xPv/dsJhS+yaBH+F2vXQEldXEOazwdJhj
ddXCVNzmTCIZ85S/lXWLLUa6I1WCcf4s8ffDv9Z3F21Hw64aAWEA+H3v+tvS9pxv
I63/4u2T2o4pu/M489R+pV/9W7jQydeE6kCyRDG1doTVJBi1WzhtEqXZ3ssSZXpb
bGuUcDLbqgCLLpk62Es9QQzKVTXf3ykOOFWaeqE2aLCjVbpi1AZEQ7lmxtco/M+D
VzJSmwARAQABiQG8BBgBCgAmFiEEplGfJzv4jpEmsPTF7N0P0pQRBFAFAmALrAYC
GwwFCQPB6boACgkQ7N0P0pQRBFBC3wv/VhJMzYmW6fKraBSL4jDF6oiGEhcd6xT4
DuvmpZWJ234aVlqqpsTnDQMWyiRTsIpIoMq3nxvIIXa+V612nRCBJUzuICRSxVOc
Ii21givVUzKTaClyaibyVVuSp0YBJcspap5U16PQcgq12QAZynq9Kx040aDklxR/
NC2kFS0rkqqkku2R5aR4t2vCbwqJng4bw8A2oVbde5OXLk4Sem9VEhQMdK/v/Egc
FT8ScMLfUs6WEHORjlkJNZ11Hg5G//pmLeh+bimi8Xd2fHAIhISCZ9xI6I75ArCJ
XvAfk9a0RASnLq4Gq9Y4L2oDlnrcAC0f1keyUbdvUAM3tZg+Xdatsg6/OWsK/dy1
IzGWFwTbKx8Boirx1xd5XmxSV6GdxF9n2/KPXoYxsCf7gUTqmXaI6WTfsQHGEqj5
vEAVomMlitCuPm2SSYnRkcgZG22fgq6randig/JpsHbToBtP0PEj+bacdSte29gJ
23pRnPKc+41cwL3oq8yb/Fhj+biohgIp
=grbk
-----END PGP PUBLIC KEY BLOCK-----
```

##### X/Twitter
There are 7 posts on Twitter. Here are each of those posts:

---
![Sooo close to home! Can't wait to finally be back! :)](/assets/img/posts/tryhackme-sakuraroom/sakuraroom-twitter-1.png)
_Twitter post_

This is a satellite view of Fukushima, Japan.

![Fukushima](/assets/img/posts/tryhackme-sakuraroom/fukushima.png)
_Fukushima, Japan_

---
![Silly me, I forgot to introduce myself!](/assets/img/posts/tryhackme-sakuraroom/sakuraroom-twitter-2.png)
_Twitter post_

Based on `@AikoAbe3`, the target's name might be Aiko Abe.

---
![My final layover, time to relax!](/assets/img/posts/tryhackme-sakuraroom/sakuraroom-twitter-3.png)
_Twitter post_

This post contains a photo of a "First Class Lounge / Sakura Lounge." To find the exact location, I first focused on the "JAL" logo and, using Google Image Search, discovered that it is the logo of "Japan Airlines":

![Google Image Search](/assets/img/posts/tryhackme-sakuraroom/google-image-search.png)
_Google Image Search_

Then, I searched for "Japan Airlines Sakura Lounge entrance" on Google and found a similar entrance:

![Japan Airlines Sakura Lounge](/assets/img/posts/tryhackme-sakuraroom/JALSakuraLounge.png)
_Japan Airlines Sakura Lounge_

This image is from a [Culture Guru](https://cultureguru.nl/index.php/2017/08/02/japan-airlines-sakura-lounge-at-haneda-airport-international-terminal/) blog post about the Japan Airlines Sakura Lounge at **Haneda Airport** (Tokyo International Airport). Let's compare the target's photo with Culture Guru's photo for potential matches.

![Japan Airlines Sakura Lounge](/assets/img/posts/tryhackme-sakuraroom/JALSakuraLounge-2.png)
_Japan Airlines Sakura Lounge_

Here are the similarities between these two photos:
1. The logo has a similar/identical placement on the wall.
2. The wall has the same design.
3. The wall has a similar/identical color.
4. There are 13 horizontal wooden lines near the logo.
5. There is a single lamp above the further wall (on the right) and a horizontal profile on the ceiling.
6. There is a vertical line behind the further wall.
7. In the target's picture, on the right side, there are "flakes" on the glass that are more visible in Culture Guru's photo.

Based on these details, I believe that the target was in the Japan Airlines Sakura Lounge at Haneda Airport.

---
![Post chain](/assets/img/posts/tryhackme-sakuraroom/sakuraroom-twitter-4.png)
_Twitter posts_

This is a chain of posts (the posts are out of order in the screenshot). The text post "Anyone who wants them will have to do a real DEEP search to find where I PASTEd them" suggests that `Deep Paste` was used (similar to [PasteBin](https://pastebin.com/)). Unfortunately, the Deep Paste service used for this room has been down for a while (months or even years), so I had to find the answer from other write-ups :(

Here is the DeepPaste note from another write-up:

![Deep Paste](/assets/img/posts/tryhackme-sakuraroom/deep-paste.png)
_Deep Paste_

---
![Checking out some last minute cherry blossoms before heading home!](/assets/img/posts/tryhackme-sakuraroom/sakuraroom-twitter-5.png)
_Twitter posts_

This is the last Twitter post, which contains an image of cherry blossoms.

---
In this section, a lot of information was gathered, and we will return to some of these posts. Now, let's focus on the task questions:

- What is the full email address used by the attacker?
  
  To answer this, I will use [`pgpdump`](https://manpages.org/pgpdump):
```sh
$ pgpdump publickey
...removed text...
Old: User ID Packet(tag 13)(32 bytes)
        User ID - SakuraSnowAngel83@protonmail.com
...removed text...
```

- What is the attacker's full real name?

  This answer will be based on the introduction post (`@AikoAbe3`).


#### Answers
<details>
    <summary>What is the full email address used by the attacker?</summary>
    <p>SakuraSnowAngel83@protonmail.com</p>
</details>

<details>
    <summary>What is the attacker's full real name?</summary>
    <p>Aiko Abe</p>
</details>

---
### Task 4: Unveil

#### Background
> It seems the cybercriminal is aware that we are on to them. As we were investigating into their Github account we observed indicators that the account owner had already begun editing and deleting information in order to throw us off their trail. It is likely that they were removing this information because it contained some sort of data that would add to our investigation. Perhaps there is a way to retrieve the original information that they provided? 

#### Instructions
> On some platforms, the edited or removed content may be unrecoverable unless the page was cached or archived on another platform. However, other platforms may possess built-in functionality to view the history of edits, deletions, or insertions. When available this audit history allows investigators to locate information that was once included, possibly by mistake or oversight, and then removed by the user. Such content is often quite valuable in the course of an investigation. In order to answer the below questions, you will need to perform a deeper dive into the attacker's Github account for any additional information that may have been altered or removed. You will then utilize this information to trace some of the attacker's cryptocurrency transactions.

#### Process
To answer the questions in this task, I will return to the target's [ETH](https://github.com/sakurasnowangelaiko/ETH) repository, which, as mentioned previously, has a single file with two commits:
1. [Initial commit: 5d83f7b](https://github.com/sakurasnowangelaiko/ETH/commit/5d83f7bb37c2048bb5b9eb29bb95ec1603c40135): `stratum://0xa102397dbeeBeFD8cD2F73A89122fCdB53abB6ef.Aiko:pswd@eu1.ethermine.org:4444`
2. [Redacted commit: d507757](https://github.com/sakurasnowangelaiko/ETH/commit/d507757d5d2208d0124783a8a670239ce19b806c): `stratum://ethwallet.workerid:password@miningpool:port`

This provides the following answers:
- **Crypto Currency**: [Ethereum](https://en.wikipedia.org/wiki/Ethereum) (`ETH` is an abbreviation for Ethereum)
- **Wallet Address**: `0xa102397dbeeBeFD8cD2F73A89122fCdB53abB6ef`

To find other answers, I will use [EtherScan](https://etherscan.io/) and search by the target's wallet address. For the date in question (January 23, 2023), there was a [single transaction](https://etherscan.io/tx/0xde6bf2f4ee82f9176a2c491aef75737e4a2c7be38e48bdedbc10aba5dbb996fd) from the Ethermine wallet.

In addition, there are 3 transactions where the target exchanged ETH for Tether:
- [`0x6559fcc264aeba0d5497c808654a1e2b049ba7f4ab28ebdf04c54c91e9d6ded9`](https://etherscan.io/tx/0x6559fcc264aeba0d5497c808654a1e2b049ba7f4ab28ebdf04c54c91e9d6ded9)
- [`0xc057104cc5637d9d5e57befcca345e8ecd6d6050506de6f32bc4e0e2bff2843a`](https://etherscan.io/tx/0xc057104cc5637d9d5e57befcca345e8ecd6d6050506de6f32bc4e0e2bff2843a)
- [`0xf6fdb0b2d865907e1e9ee77553288a84bc1d54a3ffc82131313d180489067bde`](https://etherscan.io/tx/0xf6fdb0b2d865907e1e9ee77553288a84bc1d54a3ffc82131313d180489067bde)


#### Answers
<details>
    <summary>What cryptocurrency does the attacker own a cryptocurrency wallet for?</summary>
    <p>Ethereum</p>
</details>

<details>
    <summary>What is the attacker's cryptocurrency wallet address?</summary>
    <p>0xa102397dbeeBeFD8cD2F73A89122fCdB53abB6ef</p>
</details>

<details>
    <summary>What mining pool did the attacker receive payments from on January 23, 2021 UTC?</summary>
    <p>Ethermine</p>
</details>

<details>
    <summary>What other cryptocurrency did the attacker exchange with using their cryptocurrency wallet?</summary>
    <p>Tether</p>
</details>

---
### Task 5: Taunt

#### Background
> Just as we thought, the cybercriminal is fully aware that we are gathering information about them after their attack. They were even so brazen as to message the OSINT Dojo on Twitter and taunt us for our efforts. The Twitter account which they used appears to use a different username than what we were previously tracking, maybe there is some additional information we can locate to get an idea of where they are heading to next?
>
> We've taken a screenshot of the message sent to us by the attacker, you can view it in your browser [here](https://raw.githubusercontent.com/OsintDojo/public/main/taunt.png).

#### Instructions
> Although many users share their username across different platforms, it isn't uncommon for users to also have alternative accounts that they keep entirely separate, such as for investigations, trolling, or just as a way to separate their personal and public lives. These alternative accounts might contain information not seen in their other accounts, and should also be investigated thoroughly. In order to answer the following questions, you will need to view the screenshot of the message sent by the attacker to the OSINT Dojo on Twitter and use it to locate additional information on the attacker's Twitter account. You will then need to follow the leads from the Twitter account to the Dark Web and other platforms in order to discover additional information.

#### Process
Here is the image from "Background":

![Taunt message](/assets/img/posts/tryhackme-sakuraroom/sakuraroom-taunt-message.png)
_Taunt message_

Alright, the first answer for this task comes from the previous findings (Twitter handle). The second answer will have to be guessed due to DeepPaste being down for a while. However, we can work on the third question: "What is the BSSID for the attacker's home WiFi?"

From DeepPaste, it is known that the target's home WiFi SSID is "DK1F-G." To find the BSSID, I am using [WiGLE](https://wigle.net/) Advanced Search, where "Net ID" is the BSSID we are looking for:

![WiGLE](/assets/img/posts/tryhackme-sakuraroom/wigle.png)
_WiGLE Advanced Search_

#### Answers
<details>
    <summary>What is the attacker's current Twitter handle?</summary>
    <p>SakuraLoverAiko</p>
</details>

<details>
    <summary>What is the URL for the location where the attacker saved their WiFi SSIDs and passwords?</summary>
    <p>http://deepv2w7p33xa4pwxzwi2ps4j62gfxpyp44ezjbmpttxz3owlsp4ljid.onion</p>
</details>

<details>
    <summary>What is the BSSID for the attacker's Home WiFi?</summary>
    <p>84:AF:EC:34:FC:F8</p>
</details>

---
### Task 6: Homebound

#### Background
> Based on their tweets, it appears our cybercriminal is indeed heading home as they claimed. Their Twitter account seems to have plenty of photos which should allow us to piece together their route back home. If we follow the trail of breadcrumbs they left behind, we should be able to track their movements from one location to the next back all the way to their final destination. Once we can identify their final stops, we can identify which law enforcement organization we should forward our findings to.

#### Instructions
> In OSINT, there is oftentimes no "smoking gun" that points to a clear and definitive answer. Instead, an OSINT analyst must learn to synthesize multiple pieces of intelligence in order to make a conclusion of what is likely, unlikely, or possible. By leveraging all available data, an analyst can make more informed decisions and perhaps even minimize the size of data gaps. In order to answer the following questions, use the information collected from the attacker's Twitter account, as well as information obtained from previous parts of the investigation to track the attacker back to the place they call home.

#### Process
I will start with the first question: "What airport is closest to the location the attacker shared a photo from prior to getting on their flight?" by returning to the last Twitter post:

![Checking out some last minute cherry blossoms before heading home!](/assets/img/posts/tryhackme-sakuraroom/sakuraroom-twitter-5.png)
_Twitter post_

The goal with this post is to find the location where the photo was taken. It is important to look for objects that stand out, and fortunately, there is one object in the background:

![Background object](/assets/img/posts/tryhackme-sakuraroom/sakuraroom-object-in-the-background.png)
_Background object_

Some people may recognize the [Washington Monument](https://en.wikipedia.org/wiki/Washington_Monument), which is located in Washington D.C., United States. If you don't know what this object is, you can use image search or try searching for the object description on Google:
- Image search on Bing

![Bing Image Search](/assets/img/posts/tryhackme-sakuraroom/bing-image-search.png)
_Bing Image Search_

- Searching for the object description

![Description in Google](/assets/img/posts/tryhackme-sakuraroom/description-in-google.png)
_Description in Google_

Alright, since I am certain that the picture was taken in Washington D.C., let's search for nearby airports. A helpful Wikipedia article is [List of airports serving Washington, D.C.](https://en.wikipedia.org/wiki/List_of_airports_serving_Washington,_D.C.).

Moving on to the second question: "What airport did the attacker have their last layover in?" Previously, I found that the Sakura Lounge is in Haneda Airport, so I need to look up the [IATA Airport Code](https://en.wikipedia.org/wiki/IATA_airport_code) for Haneda.

Furthermore, the next question is: "What lake can be seen on the map shared by the attacker as they were on their final flight home?" During the review of Twitter posts, I found that the image of the map is a satellite view of Fukushima. There is a large lake near Fukushima named Lake Inawashiro.

![Lake Inawashiro](/assets/img/posts/tryhackme-sakuraroom/lake-inawashiro.png)
_Lake Inawashiro_

Finally, the last question is: "What city does the attacker likely consider 'home'?" For this answer, I will refer to [WiGLE](https://wigle.net/) Advanced Search. WiGLE has an option to view networks on the map, which points to Hirosaki:

![WiGLE map](/assets/img/posts/tryhackme-sakuraroom/wigle-map.png)
_WiGLE map_


#### Answers
<details>
    <summary>What airport is closest to the location the attacker shared a photo from prior to getting on their flight?</summary>
    <p>DCA</p>
</details>

<details>
    <summary>What airport did the attacker have their last layover in?</summary>
    <p>HND</p>
</details>

<details>
    <summary>What lake can be seen in the map shared by the attacker as they were on their final flight home?</summary>
    <p>Lake Inawashiro</p>
</details>

<details>
    <summary>What city does the attacker likely consider "home"?</summary>
    <p>Hirosaki</p>
</details>
