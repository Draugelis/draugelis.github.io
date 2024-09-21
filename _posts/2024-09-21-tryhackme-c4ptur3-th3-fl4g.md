---
title: TryHackMe - c4ptur3-th3-fl4g
description: A write-up for the c4ptur3-th3-fl4g Room on TryHackMe
date: 2024-09-14 13:00 +0300
categories: [TryHackMe, CTF]
tags: [tryhackme, writeup, ctf]
---

# TryHackMe: c4ptur3-th3-fl4g

Link to the room: [TryHackMe](https://tryhackme.com/r/room/c4ptur3th3fl4g)

## Walkthrough

This write-up is for the **c4ptur3-th3-fl4g** Room on TryHackMe, which is a beginner-level CTF challenge.

- [Task 1: Translation & Shifting](#task-1-translation--shifting)
- [Task 2: Spectrograms](#task-2-spectrograms)
- [Task 3: Steganography](#task-3-steganography)
- [Task 4: Security through Obscurity](#task-4-security-through-obscurity)

---
### Task 1: Translation & Shifting
#### Description
> Translate, shift and decode the following;
>
> Answers are all case sensitive.

#### Process
Let's address each question separately:

---
> **c4n y0u c4p7u23 7h3 f149?**

This is a [leet (1337) speak](https://en.wikipedia.org/wiki/Leet), where letters are replaced by similarly looking numbers:

- `0` -> `o` 
- `1` -> `l`
- `2` -> `r` (`R`)
- `3` -> `e` (`E`)
- `4` -> `a` (`A`)
- `7` -> `t` (`T`)
- `9` -> `g`

Considering this, the answer is:
<details>
    <summary>Click to expand</summary>
    <p>can you capture the flag?</p>
</details><br>

---
> **01101100 01100101 01110100 01110011 00100000 01110100 01110010 01111001 00100000 01110011 01101111 01101101 01100101 00100000 01100010 01101001 01101110 01100001 01110010 01111001 00100000 01101111 01110101 01110100 00100001**

Since there are a bunch of 1's and 0's (bits), it is easy to see that it is binary. Bits are grouped into bytes (8 bits = 1 byte), and this may be binary representation of ASCII letters. 

Using [dcode](https://www.dcode.fr/cipher-identifier) to [convert binary to numbers](https://www.dcode.fr/binary-code):

Input:
> 01101100 01100101 01110100 01110011 00100000 01110100 01110010 01111001 00100000 01110011 01101111 01101101 01100101 00100000 01100010 01101001 01101110 01100001 01110010 01111001 00100000 01101111 01110101 01110100 00100001

Output:
> 108 101 116 115 32 116 114 121 32 115 111 109 101 32 98 105 110 97 114 121 32 111 117 116 33

Now, [convert numbers to ASCII letters](https://www.dcode.fr/ascii-code):

Input:
> 108 101 116 115 32 116 114 121 32 115 111 109 101 32 98 105 110 97 114 121 32 111 117 116 33

Output/Answer:
<details>
    <summary>Click to expand</summary>
    <p>lets try some binary out!</p>
</details><br>

---
> **MJQXGZJTGIQGS4ZAON2XAZLSEBRW63LNN5XCA2LOEBBVIRRHOM======**

This looks like a Base64/Base32 cipher. [dcode](https://www.dcode.fr/cipher-identifier) identifies this as Base32. You can decode Base64/Base32 in the terminal or use an online tool.

```sh
echo "MJQXGZJTGIQGS4ZAON2XAZLSEBRW63LNN5XCA2LOEBBVIRRHOM======" | base32 -d
```

Output/Answer:
<details>
    <summary>Click to expand</summary>
    <p>base32 is super common in CTF's</p>
</details><br>

---
> **RWFjaCBCYXNlNjQgZGlnaXQgcmVwcmVzZW50cyBleGFjdGx5IDYgYml0cyBvZiBkYXRhLg==**

This one is similar to the last cipher. Since the character range is wider (including lowercase letters), it looks like Base64. Let's decode it using a terminal or an online tool like [dcode](https://www.dcode.fr/base-64-coding).

```sh
echo "RWFjaCBCYXNlNjQgZGlnaXQgcmVwcmVzZW50cyBleGFjdGx5IDYgYml0cyBvZiBkYXRhLg==" | base64 -d
```

Output/Answer:
<details>
    <summary>Click to expand</summary>
    <p>Each Base64 digit represents exactly 6 bits of data.</p>
</details><br>

---
> **68 65 78 61 64 65 63 69 6d 61 6c 20 6f 72 20 62 61 73 65 31 36 3f**

This cipher is hexadecimal (base16) representation of ASCII letters. This will be a 2-step process - hex to decimal, then decimal to ASCII.

##### Step 1: Hex to Decimal
Input:
> 68 65 78 61 64 65 63 69 6d 61 6c 20 6f 72 20 62 61 73 65 31 36 3f

Output:
> 104 101 120 97 100 101 99 105 109 97 108 32 111 114 32 98 97 115 101 49 54 63 

##### Step 2: Decimal to ASCII
Input:
> 104 101 120 97 100 101 99 105 109 97 108 32 111 114 32 98 97 115 101 49 54 63 

Output/Answer:
<details>
    <summary>Click to expand</summary>
    <p>hexadecimal or base16?</p>
</details><br>

---
> **Ebgngr zr 13 cynprf!**

The number '13' suggests this is a ROT-13 cipher where all letters are rotated by 13 positions in the alphabet. Let's use [dcode ROT-13 cipher](https://www.dcode.fr/rot-13-cipher) to solve this.

Input:
> Ebgngr zr 13 cynprf!

Output/Answer:
<details>
    <summary>Click to expand</summary>
    <p>Rotate me 13 places!</p>
</details><br>

---
> ***@F DA:? >6 C:89E C@F?5 323J C:89E C@F?5 Wcf E:>6DX**

This one is a bit tricky, but [dcode cipher identifier](https://www.dcode.fr/cipher-identifier) suggests ROT-47 as the most likely cipher. ROT-47 is similar to ROT-13, but letters are rotated by 47 positions rather than 13.

Input:
> *@F DA:? >6 C:89E C@F?5 323J C:89E C@F?5 Wcf E:>6DX

Output/Answer:
<details>
    <summary>Click to expand</summary>
    <p>You spin me right round baby right round (47 times)</p>
</details><br>

---
> **\- . .-.. . -.-. --- -- -- ..- -. .. -.-. .- - .. --- -.**
> \
> **\. -. -.-. --- -.. .. -. --.**

This is Morse code. To decode it, I will use [dcode Morse Code decoder](https://www.dcode.fr/morse-code).

Input:
> \- . .-.. . -.-. --- -- -- ..- -. .. -.-. .- - .. --- -. / . -. -.-. --- -.. .. -. --.

Output/Answer:
<details>
    <summary>Click to expand</summary>
    <p>TELECOMMUNICATION ENCODING</p>
</details><br>

---
> **85 110 112 97 99 107 32 116 104 105 115 32 66 67 68**

This looks like an ASCII representation in decimal numbers. Similar to binary and hexadecimal, it can be easily converted.

Output/Answer:
<details>
    <summary>Click to expand</summary>
    <p>Unpack this BCD</p>
</details><br>

---
> **LS0tLS0g...LS0gLS0tLS0gLi0tLS0=**
(Shortened for more pleasurable view)

This doesn't look familiar, but since there is a `=` at the end, it is likely Base64. Let's decode it to find out.

```sh
echo "LS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLi0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0=" | \
base64 -d
```

Output:
```
----- .---- .---- ----- ----- .---- .---- .....
```

Alright, so we have a chain of ciphers. The first step is Base64, which decodes to Morse code. Let's decipher that Morse code.

##### Morse Code Output:
> **0110011001100101 ....**

This represents the conversion from Morse code to Binary. Now, let's proceed further.

##### Step 1: Binary to Bytes
I’ll group the bits into bytes:
> 01100110 01100101 ....

##### Step 2: Binary to Decimal
Output:
> 102 101 ...

##### Step 3: Decimal to ASCII
The resulting ASCII output is:
> fe  \`\_ \`  \` \`e bh  \` \`d ba  \`\_h hf  \`\_f  \`\_ \` ba  \` \`e  \`\_c  \`\_d  \` \`d ba hf ba hg  \`\_d  \` \`e ba  \` \`e  \` \`c  \`\_d hh  \`\_f  \`\_d  \`\_ \`  \` \`c ce ce ce

This output resembles a chain of ciphers we've encountered, suggesting it might be encoded with ROT-47.

##### Step 4: ROT-47 Decoding
The output after applying ROT-47 is:
> 76 101 116 39 115 32 109 97 107 101 32 116 104 105 115 32 97 32 98 105 116 32 116 114 105 99 107 105 101 114 46 46 46

##### Step 5: Decimal to ASCII
Now, let's convert these decimal numbers to ASCII, yielding our final answer.

##### Summary of the Cipher Chain
The sequence of conversions was:
Base64 -> Morse code -> Binary -> Decimal -> ASCII -> ROT-47 -> Decimal -> ASCII

##### Final Answer:
<details>
    <summary>Click to expand</summary>
    <p>Let's make this a bit trickier...</p>
</details><br>


---
### Task 2: Spectrograms
#### Description
> A spectrogram is a visual representation of the spectrum of frequencies of a signal as it varies with time. When applied to an audio signal, spectrograms are sometimes called sonographs, voiceprints, or voicegrams. When the data is represented in a 3D plot they may be called waterfalls. 

#### Process
This task includes a downloadable WAV format file. The audio in the file doesn’t sound like anything comprehensible at first. I decided to open this file in [Audacity](https://www.audacityteam.org/) and view the spectrogram:

1. **Open the WAV file in Audacity.**
2. **Switch to the Spectrogram view:**
   - Click on the track name (usually on the left side of the track).
   - Select "Spectrogram" from the dropdown menu.
3. **Analyze the spectrogram:**
   - Look for any visual patterns or anomalies that may indicate hidden information or messages.

By examining the spectrogram, you will see the following:

![Audacity Spectrogram](/assets/img/posts/tryhackme-c4ptur3th3fl4g/audacity-spectrogram.png)
_Audacity Spectrogram_

Answer:
<details>
    <summary>Click to expand</summary>
    <p>Super Secret Message</p>
</details><br>

---
### Task 3: Steganography
#### Description
> Steganography is the practice of concealing a file, message, image, or video within another file, message, image, or video.

#### Process
This task has a downloadable image file:

![Task 3 image](/assets/img/posts/tryhackme-c4ptur3th3fl4g/stegosteg_1559008553457.jpg)
_Task 3 image_

For this image, I will use the `steghide` tool:

```sh
$ steghide info stegosteg_1559008553457.jpg

"stegosteg_1559008553457.jpg":
  format: jpeg
  capacity: 2.5 KB
Try to get information about embedded data ? (y/n) y
Enter passphrase: 
  embedded file "steganopayload2248.txt":
    size: 13.0 Byte
    encrypted: rijndael-128, cbc
    compressed: yes
```

Alright, so there is an embedded file named `steganopayload2248.txt`.

```sh
$ steghide extract -sf stegosteg_1559008553457.jpg
Enter passphrase: 
wrote extracted data to "steganopayload2248.txt".

$ cat steganopayload2248.txt
```

Answer:
<details>
    <summary>Click to expand</summary>
    <p>SpaghettiSteg</p>
</details><br>

---
### Task 4: Security through obscurity
#### Description
> Security through obscurity is the reliance in security engineering on the secrecy of the design or implementation as the main method of providing security for a system or component of a system.

#### Process
The downloadable file for this task is an image:

![Task 4 image](/assets/img/posts/tryhackme-c4ptur3th3fl4g/meme_1559010886025.jpg)
_Task 4 image_

Since it is an image, let's try using `steghide` again:

```sh
$ steghide info meme_1559010886025.jpg 
"meme_1559010886025.jpg":
  format: jpeg
  capacity: 3.4 KB
Try to get information about embedded data ? (y/n) y
Enter passphrase: 
steghide: could not extract any data with that passphrase!
```

Nothing there, at least without a password. The first question is "*Download and get 'inside' the file. What is the first filename & extension?*". So I decided to run `file` and `exiv2`, but nothing popped up. Finally, I figured to run the `strings` command:

```sh
$ strings meme_1559010886025.jpg
...
IEND
<second answer> 
<fist answer>
```

Both answers were hidden at the end of the file. Great!

First answer:
<details>
    <summary>Click to expand</summary>
    <p>hackerchat.png</p>
</details><br>

Second answer:
<details>
    <summary>Click to expand</summary>
    <p>AHH_YOU_FOUND_ME!</p>
</details><br>
