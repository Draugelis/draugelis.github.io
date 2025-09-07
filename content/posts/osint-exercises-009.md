---
title: OSINT Exercise 009
description: A write-up for OSINT Exercise 009 by Sofia Santos
date: 2025-01-04T10:30:00+03:00
categories: [OSINT]
series: [OSINT Exercise]
tags: [Write-up, OSINT, gralhix]
---

# OSINT Exercise #009

This is a write-up for an "[OSINT Exercise 009 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-009/)"

## Task description

Task briefing:

The video below was shared by the Visit Tirana Twitter account on February 16, 2023.

Please answer the following questions:

a) To the best of your knowledge, at what time was the video recorded?

b) Find the coordinates of where the person was walking at the time of the recording.

(In the event that the tweet gets deleted here is the saved [video](https://www.youtube.com/shorts/axC30cE_O-4) and a [screenshot](https://gralhix.com/wp-content/uploads/2023/08/osintexercise009.png) of the tweet)

Exercise level:

For beginners: a) Hard, b) Hard

For experts: a) Medium, b) Medium

## Process

The video was uploaded on February 16, 2023; however, it is not guaranteed that it was recorded on the same day. First, I would like to confirm whether the video could have been filmed in February 2023. To do this, I am examining weather data for that date, sunset times, and what people are wearing in the video.

I found weather and sunset data on [Weather Spark](https://weatherspark.com/h/d/84331/2023/2/16/Historical-Weather-on-Thursday-February-16-2023-in-Tirana-Albania#Figures-SolarDay), which reveals that the sun was at 0° at 5:15 PM, and the temperature at that time was around 11°C (52°F). Looking at the video, it can be seen that people are wearing jackets and gloves while riding bicycles. This type of attire makes sense for such weather:

![people-with-jackets](/posts/osint-exercises/009/tirana-jackets.png "People with jackets")

In addition, I found [this infographic](https://starwalk.space/en/infographics/twilight-and-magic-hours), which suggests that such a sky color could occur during _Golden Hour_, which occurs roughly 30 minutes before and after the sun is at 0°. Considering this, I estimate that the video was recorded at 5:15 PM ± 30 minutes.

{{< notice note >}}
**UPDATE**: After completing these exercises, I like to review others' answers, and my approach with the sunset time is not entirely correct. On the video author's Instagram profile, the video was posted at 4:48 PM, which means that the video might have been recorded a couple of minutes before this time. Even though my approximation was close, I should have gone to the video source. I recommend watching [the walkthrough video](https://www.youtube.com/watch?v=FJiOkWQtdYw) by Sofia Santos for more insights.
{{< /notice >}}

Alright, now let's determine the location where the person was walking. Since the camera is facing the sunset, the walking direction must have been west. I decided to reverse image search the first tall building in the video:

![tallbuilding](/posts/osint-exercises/009/tallbuilding.png "Tall building from the video")

Perhaps I got lucky because Google Image Search (which sometimes is not that great) immediately identified the location as the "Garden Building" in Tirana:

![google-image-search](/posts/osint-exercises/009/google-image-search.png "Google Image Search")

To confirm whether the location matches, I need to use Google Street View and look around. However, after opening Street View in the area, I don't see the "Garden Building" because the latest Street View imagery there is from 2016, and [the building's construction occurred between March 2018 and February 2021](https://en.wikipedia.org/wiki/Tirana_Garden_Building).

Fortunately, there are other buildings in the video, such as this one:

![other-building](/posts/osint-exercises/009/other-building.png "Other building")

Additionally, here's satellite imagery of the area that looks similar to the video:

![satellite-imagery](/posts/osint-exercises/009/satellite-imagery.png "Satellite imagery + Google's 3D rendering")

Now, it is just a matter of pinpointing the location where the person was walking.

## Answers

a) 5:15 PM ± 30 minutes

b) 41°19'36.6"N 19°48'25.0"E (at the start of the video) 
