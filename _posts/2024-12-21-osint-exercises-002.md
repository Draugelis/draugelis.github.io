---
title: OSINT Exercise 002
description: A write-up for OSINT Exercise 002 by Sofia Santos
date: 2024-12-21 22:00 +0300
categories: [OSINT]
tags: [OSINT, writeup]
---

# OSINT Exercise #002

This post is a write-up for an "[OSINT Exercise 002 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-002/)"

## Task description

**Task briefing:**
The photo below was shared on social media. It clearly depicts a train station.
Please answer the following questions:

a) What is the name of the train station seen in the photo?
b) What is the name and height of the tallest structure seen in the photo?

Click [here](https://gralhix.com/wp-content/uploads/2024/09/osint-exercise-002-big-picture.png) to open the photo on a new page.

**Exercise level:**
For beginners: a) Easy, b) Hard
For experts: a) Easy, b) Medium

![exercise_photo](/assets/img/posts/osint-exercises/002/exercise_photo.png)
_Task photo_

## Process

The photo has "Flinders Street" text written on several signs, therefore, it must the station name. Eitherway, let's use Google Maps and search for "Flinders Street Station". It brings us to a train station in Melbourne, Australia. A quick look at one of the photo spheres in the area brings a familiar view:
![photo_sphere](/assets/img/posts/osint-exercises/002/photo_sphere.png)
_Photo Sphere_

Since the skyscrapers match the photo, it is quite safe to say that the train station in the photo is [Flinders Street railway station](https://en.wikipedia.org/wiki/Flinders_Street_railway_station)

Alright, the station name was the easy part. Now let's find the name and height on the tallest structure seen in the photo. In the photo, there are a couple of visible buildings:

![structures](/assets/img/posts/osint-exercises/002/structures.png)
_Structures_

From the photo is difficult to tell which building is the tallest. In the photo dark building with red board on top does not appear tallest whereas in Google Earth it is noticeably taller than "HWT" and "IBM" buildings. I am still not certain whether tower on the left or dark building on the right is taller. It is time to search building heights in the area to find out. 

When searching for "Melbourne building heights", I've found [this neat page by Luke Butler](https://lbutler.github.io/MelbBuildingHeights/) which has the data we are looking for:

![building_heights](/assets/img/posts/osint-exercises/002/building_heights.png)
_Building heigts map_

Based on this map, it appears that the Arts Centre Melbourne Spire (tower on the left) is the highest structure (150,54 m), however, there is no information on the dark building on the right, so let's try finding its' name and height. 

Back to Google Maps, it can be seen that the name of the building is "FOCUS Apartments". Searching for "FOCUS apartments Melbourne height" returns several news articles stating that this building's height is 167 metres... and [urban.com.au](https://www.urban.com.au/buildings/focus-melbourne-81-city-road-southbank) statement that its' height is 157 metres. Regardless of 167 or 157, that's taller than Arts Centre Melbourne Spire nearby.

For (b) question, I say "FOCUS Apartments" standing at 167 metres tall. 

## Conclusion

This exercise seems a bit easier than [the first one](https://gralhix.com/list-of-osint-exercises/osint-exercise-001/) but that doesn't make it less enjoyable. I can recommend doing one of these [OSINT Exercises](https://gralhix.com/list-of-osint-exercises/) to anyone who is interested in such things.
