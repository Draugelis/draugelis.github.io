---
title: TryHackMe Room - OhSINT
description: A write-up for the OhSINT room on TryHackMe
date: 2024-08-30 20:00 +0300
categories: [TryHackMe]
tags: [tryhackme, writeup]
---

# TryHackMe Room: OhSINT

Link to the room: [TryHackMe](https://tryhackme.com/r/room/ohsint)

## Walkthrough

This room has only a single task file, which is a Windows XP wallpaper ("[Bliss](https://en.wikipedia.org/wiki/Bliss_(photograph))"):

![taskfile](/assets/img/posts/tryhackme-ohsint/taskfile.jpg)
_OhSINT Task File_

On the left side of the image, we can see some *corruption* (purple bits). The file is in JPEG format, which can be used to hide information within it (see [Stegonography](https://en.wikipedia.org/wiki/Steganography)). 

```sh
$ file WindowsXP_1551719014755.jpg
WindowsXP_1551719014755.jpg: JPEG image data, baseline, precision 8, 1920x1080, components 3
```

### Metadata

Let’s start by checking the image data using `exiv2`:

```sh
$ exiv2 WindowsXP_1551719014755.jpg
File name       : WindowsXP_1551719014755.jpg
File size       : 234081 Bytes
MIME type       : image/jpeg
Image size      : 1920 x 1080
WindowsXP_1551719014755.jpg: No Exif data found in the file

exiv2 -p a WindowsXP_1551719014755.jpg                                                                 1 ↵
Xmp.exif.GPSLatitude                         XmpText    13  54,17.687778N
Xmp.exif.GPSLongitude                        XmpText    12  2,15.022104W
Xmp.tiff.Copyright                           LangAlt     1  lang="x-default" OWoodflint
```

From the metadata, we obtained GPS coordinates and the username `OWoodflint`, which might belong to the target.

### Steghide

Now, let's use `steghide` to extract information from the image:
```sh
$ steghide info WindowsXP_1551719014755.jpg
"WindowsXP_1551719014755.jpg":
  format: jpeg
  capacity: 14.9 KB
Try to get information about embedded data ? (y/n) y
Enter passphrase: <blank>
steghide: could not extract any data with that passphrase!
```

Alright, a passphrase is required to access the embedded data. For now, let's leave it and explore other resources.

### Google

I’ll Google "OWoodflint" to see what comes up. Here are the top 3 results:
1. GitHub account: https://github.com/OWoodfl1nt
2. X (previously Twitter) account: https://x.com/owoodflint
3. WordPress site: https://oliverwoodflint.wordpress.com/author/owoodflint/

Let’s check each of these sites for more information.

#### GitHub
On GitHub, there is only one repository named `people_finder`, which includes a `README.md` that provides some answers for the TryHackMe room.
```markdown
# people_finder

Hi all, I am from London, I like taking photos and open source projects. 

Follow me on twitter: @OWoodflint

This project is a new social network for taking photos in your home town.

Project starting soon! Email me if you want to help out: OWoodflint@gmail.com

https://oliverwoodflint.wordpress.com/
```

Great! This `README` addresses a couple of the room’s questions:
> What city is this person in?
>
> What is his personal email address?
>
> What site did you find his email address on?
{: .prompt-info }

There are a total of 5 commits in this repository, but they all contain the same information as the current `README`.

#### X/Twitter
Moving forward, here is OWoodflint's Twitter profile:
![taskfile](/assets/img/posts/tryhackme-ohsint/twitter.png)
_OhSINT Twitter profile_

The picture provides an answer to the first room question:
> What is this user's avatar of?
{: .prompt-info }

Additionally, he posted the BSSID, so let’s find the answer to the next question:
> What is the SSID of the WAP he connected to?
{: .prompt-info}

To find more information, I visited [WiGLE](https://wigle.net/) and searched for the BSSID `B4:5D:50:AA:86:41`. I focused on the London area, as mentioned in the GitHub README. After conducting the search, the result was "UnileverWIFI".

#### WordPress site

The WordPress site immediately answers another question from the room:
> Where has he gone on holiday?
{: .prompt-info }
![taskfile](/assets/img/posts/tryhackme-ohsint/wordpress.png)
_OhSINT WordPress Site_

### Password

Alright, there's just one question left:
> What is the person's password?
{: .prompt-info }

I reviewed all the information I had, but I got a bit stuck. Finally, I used the hint: "Check the Source Code." I checked GitHub again but found nothing. Then, I returned to the WordPress site, right-clicked, selected "View Page Source," and started examining the source code. After a minute, I discovered this:
```html
<p>Im in New York right now, so I will update this site right away with new photos!</p>

<p style="color:#ffffff;" class="has-text-color">pennYDr0pper.!</p>
```

The `color:#ffffff` is quite amusing because it means you can reveal the password by selecting the text in the browser:
![taskfile](/assets/img/posts/tryhackme-ohsint/password.png)
_OhSINT WordPress Site_

The room is completed! Out of curiosity, I tried using the password with steghide, but unfortunately, it didn't work. This means either there is no additional information to discover or the password was incorrect. Either way, the room is completed. It’s normal to explore dead ends; otherwise, you won't know they are dead ends. ;)