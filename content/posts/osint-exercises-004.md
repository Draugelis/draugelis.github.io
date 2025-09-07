---
title: OSINT Exercise 004
description: A write-up for OSINT Exercise 004 by Sofia Santos
date: 2024-12-23T11:00:00+03:00
categories: [OSINT]
series: [OSINT Exercise]
tags: [Write-up, OSINT, gralhix]
---

# OSINT Exercise #004

This post is a write-up for an "[OSINT Exercise 004 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-004/)"

## Task description

**Task briefing:**

This is a photo of a resort located on an island.

a) What is the name of the resort?

b) What are the coordinates of the island?

c) In which cardinal direction was the camera facing when the photo was taken?

Click [here](https://gralhix.com/wp-content/uploads/2023/08/osint-exercise-004-big-picture.jpg) to open the photo on a new tab.

**Exercise level:**

For beginners: a) Easy, b) Easy, c) Medium
For experts: a) Easy, b) Easy, c) Easy

![task_photo](/posts/osint-exercises/004/task_photo.png "Island photo")

## Process

The briefing mentions that the island is a resort, therefore, this photo might be used for resort's presence on the internet. Let's try checking that by using [Google Reverse Image Search](https://images.google.com/):

![google_image_search](/posts/osint-exercises/004/google_image_search.png "Google Reverse Image Search")

Great, it found "Oan Resort" which will be the first answer. Moving to the second question, I'll look up "Oan Resort" on Google Maps.

![google_maps](/posts/osint-exercises/004/google_maps.png "Island on Google Maps")

This leads to `7°21'47.30"N 151°45'21.65"E` (Oan Island, Wonip, Chuuk, Micronesia).

Finally, we need to find cardinal direction the camera was facing. For this I am using Google Earth as it allows to change camera angle similar to the photo. I need to find an angle where these islands show up behind Oan Island:

![islands_in_the_background](/posts/osint-exercises/004/islands_in_the_background.png "Islands in the background")

Since there are few islands around, there were two angles to try. After a minute, I got this angle that lined up pretty well:

![google_earth_and_photo_comparison](/posts/osint-exercises/004/comparison.png "Google Earth and photo comparison")

Based on Google Earth compass, I can say that camera (or more likely a drone with a camera) was facing North-West when photo was taken.

![thats_all_folks](/posts/osint-exercises/004/thats_all_folks.png "That's all folks!")
