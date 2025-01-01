---
title: OSINT Exercise 007
description: A write-up for OSINT Exercise 007 by Sofia Santos
date: 2025-01-01 15:00 +0300
categories: [OSINT]
tags: [osint, writeup]
---

# OSINT Exercise #007

This is a write-up for an "[OSINT Exercise 007 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-007/)"

## Task description

**Task briefing:**

The photo below was taken a few years ago in a beautiful city.

Your task is to find the answers to the following questions:

a) Where was the photo taken?

b) In which year was the photo taken?

c) The big poster on the right contained a link to a website. What was the link?

Click [here](https://gralhix.com/wp-content/uploads/2023/08/osint-exercise-007-big-picture.png) to open photo on a new window.

**Exercise level:**

For beginners: a) Easy, b) Medium, c) Hard

For experts: a) Easy, b) Medium, c) Medium

![task_photo](/assets/img/posts/osint-exercises/007/task_photo.png)
_Task photo_

## Process

Let's start with the reverse image search. The statue was immediately found by Google Image Search:

![google_image_search](/assets/img/posts/osint-exercises/007/google_image_search.png)  
_Google Image Search_

From the similar images, it appears that the photo was taken at the Vasco da Gama shopping center in Lisbon, Portugal.

Moving forward, to find the year, my initial idea is to use Google Street View and look at past dates. Street view snapshots from 2009, 2014, and 2015 have different trees in front of the shopping center:

![street_view_2015](/assets/img/posts/osint-exercises/007/street_view_2015.png)
_Street View on Jan, 2015_

Then there is another street view snapshot from 2018 where the trees were replaced:

![street_view_2018](/assets/img/posts/osint-exercises/007/street_view_2018.png)
_Street View on Aug, 2018_

Now the trees look more similar to the task photo. Moving a year forward, street view snapshot from 2019 has event more similar trees:

![street_view_2019](/assets/img/posts/osint-exercises/007/street_view_2019.png)
_Street View on Oct, 2019_

In addition, on the other side, a snapshot from 2019 has the same poster, whereas snapshots from other dates do not:

![street_view_2019-2](/assets/img/posts/osint-exercises/007/street_view_2019_2.png)
_Street View on Oct, 2019_

The poster states that the exhibition will take place starting on April 19, 2019. This suggests that the photo was taken around 2019. Photo sphere from 2020 show a different poster, further confirming that the photo was taken in 2019:

![photosphere_2020](assets/img/posts/osint-exercises/007/photosphere_2020.png)
_Photo Sphere 2020_

Furthermore, Google Street View allows to move closer to the poster to see the link to a website in a readable resolution:

![street_view_2019-3](/assets/img/posts/osint-exercises/007/street_view_2019_3.png)
_Street View on Oct, 2019_

So the website is www[.]tutankamon[.]pt

## Answers:
a) Vasco da Gama shopping center entrance in Lisbon, Portugal (38°46'03.5"N 9°05'45.9"W)

b) 2019

c) www[.]tutankamon[.]pt