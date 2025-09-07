---
title: OSINT Exercise 007
description: A write-up for OSINT Exercise 007 by Sofia Santos
date: 2025-01-01T15:00:00+03:00
categories: [OSINT]
series: [OSINT Exercise]
tags: [Write-up, OSINT, gralhix]
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

![task_photo](/posts/osint-exercises/007/task_photo.png "Task photo")

## Process

Let's start with the reverse image search. The statue was immediately found by Google Image Search:

![google-image-search](/posts/osint-exercises/007/google_image_search.png)  
_Google Image Search_

From the similar images, it appears that the photo was taken at the Vasco da Gama shopping center in Lisbon, Portugal.

Moving forward, to find the year, my initial idea is to use Google Street View and look at past dates. Street view snapshots from 2009, 2014, and 2015 have different trees in front of the shopping center:

![street-view-2015](/posts/osint-exercises/007/street_view_2015.png "Street View on Jan, 2015")

Then there is another street view snapshot from 2018 where the trees were replaced:

![street-view-2018](/posts/osint-exercises/007/street_view_2018.png "Street View on Aug, 2018")

Now the trees look more similar to the task photo. Moving a year forward, street view snapshot from 2019 has event more similar trees:

![street-view-2019](/posts/osint-exercises/007/street_view_2019.png "Street View on Oct, 2019")

In addition, on the other side, a snapshot from 2019 has the same poster, whereas snapshots from other dates do not:

![street-view-2019-2](/posts/osint-exercises/007/street_view_2019_2.png "Street View on Oct, 2019")

The poster states that the exhibition will take place starting on April 19, 2019. This suggests that the photo was taken around 2019. Photo sphere from 2020 show a different poster, further confirming that the photo was taken in 2019:

![photosphere-2020](assets/img/posts/osint-exercises/007/photosphere_2020.png "Photo Sphere 2020")

Furthermore, Google Street View allows to move closer to the poster to see the link to a website in a readable resolution:

![street-view-2019-3](/posts/osint-exercises/007/street_view_2019_3.png "Street View on Oct, 2019")

So the website is www[.]tutankamon[.]pt

## Answers
a) Vasco da Gama shopping center entrance in Lisbon, Portugal (38°46'03.5"N 9°05'45.9"W)

b) 2019

c) www[.]tutankamon[.]pt