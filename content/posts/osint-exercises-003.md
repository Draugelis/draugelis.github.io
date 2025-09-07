---
title: OSINT Exercise 003
description: A write-up for OSINT Exercise 003 by Sofia Santos
date: 2024-12-22T10:00:00+03:00
categories: [OSINT]
series: [OSINT Exercise]
tags: [Write-up, OSINT, gralhix]
---

# OSINT Exercise #003

This post is a write-up for an "[OSINT Exercise 003 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-003/)"

## Task description

**Task briefing:**

In April 2017 Mohamed Abdullahi Farmaajo, the then president of Somalia, visited Turkey. A news agency published a photo where he was seen shaking hands with Recep Tayyip Erdoğan, the country’s president. The article did not disclose where the photo was taken. Your task is to find out the name and coordinates of the location seen below.

Click [here](https://gralhix.com/wp-content/uploads/2023/08/osint-exercise-003-picture.jpg) to see the photo on its own.

**Exercise level:**

For beginners: Medium
For experts: Easy

![task_photo](/posts/osint-exercises/003/task_photo.png "Somalia President visits Turkey")

## Process

The task calls to find where president of Somalia met Turkish president. The first thing to do is to search for something like "Somali Turkish president meeting 2017" to find more photos since such event must have photos from other angles that reveal the environment. Furtunately, that is the case here:

![somali_turkey_president_meeting](/posts/osint-exercises/003/somaliturkeypresidentmeeting.png "Somali-Turkish President meeting")

It looks that there was another president visiting in the past/future in a few photos, however, the door in the backdrop looks the same. We even have the same photo from the task. This leads me to believe that the building in the background is used to greet more diplomats by Erdoğan. Where can a president of a country meet foreign presidents? Likely in their Presidental Palace or Office. Let's hop back to a search engine and look for "Turkish Presidential Palace" or "Turkish Presidential Office". The search for both queries points to [Presidential Complex in Ankara](https://en.wikipedia.org/wiki/Presidential_Complex_(Turkey)).

Great, among the search, I found a [Dail Mail article](https://www.dailymail.co.uk/news/article-4419762/A-tyrant-palace-three-times-White-House.html) with this picture:

![presidential_complex_door](/posts/osint-exercises/003/presidential_complex_door.png "Turkish Presidential Complex Door")

This entrance lines up really well, this is probably the place where the photo was taken. Let's compare them just in case:

![photo_comparison](/posts/osint-exercises/003/entrancephotocomparison.png "Entrance Photo comparison")

In the picture above, I've marked a couple of areas that match in both images:
1. The door/entrance has the same features:
    - The coat of arms at the top section
    - Two golden disks on the door
    - The lines on the door match (count and shape)
    - Golden triming (I don't know what is the term for this, my apologies) on the side of the door sides - the number and color matches
2. Glass booths from both sides of the entrance
3. Three marble pillars on each side of the door

Okay, now I am convinced that it is the same place. Now it is time to hop into Google Maps and search for this area. Unfortunately, the presidential complex does not have multiple photo spheres all over the place nor street view. However, there is a photo sphere from the statue across the street:

![presidential_complex_photo_sphere](/posts/osint-exercises/003/presidential_complex_photo_sphere.png "Photo sphere from across the street")

The building checks out and the entrance looks similar. My guess that Somali president walked the blue carpet from the gate to this specific entrance where the photo was taken. This gate shows up in other photos where foreign presidents visit Turkey. 

Alright, I think I found it. The last step is to pin point coordiates of this entrance:
{{< spoiler >}}
39°55'51.99"N 32°47'58.43"E
{{< /spoiler >}}


Thank you for reading this, let me know if you had a different process for completing this task.
