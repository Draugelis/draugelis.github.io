---
title: OSINT Exercise 005
description: A write-up for OSINT Exercise 005 by Sofia Santos
date: 2025-01-01 11:00 +0300
categories: [OSINT]
tags: [osint, writeup]
---

# OSINT Exercise #005

This is a write-up for an "[OSINT Exercise 005 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-005/)"

## Task description

**Task briefing:**

The image below is a screenshot from a zoo live cam. It was taken on January 15, 2023 at around 2pm local time.
Please answer the questions below:

a) In which zoo are these polar bears located?

b) What was the temperature at the time of the screenshot?

c) What were the exact coordinates of where the bears were lying down?

Click [here](https://gralhix.com/wp-content/uploads/2023/08/osintexercise005.webp) to open the photo on a new tab.

**Exercise level:**

For beginners: a) Hard, b) Medium, c) Hard

For experts: a) Medium, b) Easy, c) Medium

![task_photo](/assets/img/posts/osint-exercises/005/task_photo.png)
_Polar bears in a zoo_

## Process

The specific zoo search started with searching for "Polar bear zoo live cam" which returned a couple of zoos that have polar bear live cams. The first was San Diego Zoo that has similar surroundings as in the picture but the environment was not identical as in the task photo:

![sandiego_zoo_live_cam](/assets/img/posts/osint-exercises/005/sandiego_zoo_live_cam.png)
_San Diego Zoo_

I watched the stream a bit longer, hoping to see a polar bear, and then noticed that the camera had moved. This suggested that there might be a camera angle matching the task photo. My next step was to determine if there were any live cam recordings I could scan to confirm whether it was the correct zoo. I found [this](https://www.youtube.com/watch?v=CpsQzkGobTA) 9 hour video of polar bear cam in San Diego Zoo. I spot checked some camera angles as there were multiple and at [2:49:57](https://www.youtube.com/live/CpsQzkGobTA?si=S-ZwBu3mjqYnQbsS&t=10197) I saw this:

![sandiego_zoo_live_cam_recording](/assets/img/posts/osint-exercises/005/sandiego_zoo_live_cam_recording.png)
_Live Polar Bear Cam - San Diego Zoo_

The objects from the photo are visible on this camera angle:

![image_comparison](/assets/img/posts/osint-exercises/005/sandiego_zoo_comparison.png)
_Live stream and photo comparison_

Let's break this down a bit:
1. Boulder has the same/similar shape and matching texture (at least partially)
2. There is a stump
3. There is a ramp made out of rocks (it appears in other angles making it easier to identify)
4. There is a tree with the same branches and at an angle
5. The edge in front of the boulder has a curve. 

Alright, considering all of these factors, I am convinced that the photo was taken from San Diego Zoo live cam. 

Finding the temperature at the time of the screenshot should be a matter of finding the Zoo exact location/address and finding a source for historical weather data. Typing "San Diego Zoo Polar Bears" brings to [Polar Bear Plunge](https://maps.app.goo.gl/sdnXP3ZHUKQh98JB6) at Zoo Pl, San Diego, CA 92101, United States. As for the weather data, I've found [Weather Underground](https://www.wunderground.com/history) that has past weather data. I've searched for searched data on January 15, 2023 at San Diego, CA 92101.

Here's the data from around January 15, 2023 around 2pm local time:
| Time       | Temperature | Dew Point | Humidity | Wind  | Wind Speed | Wind Gust | Pressure | Precip. | Condition       |
|------------|-------------|-----------|----------|-------|------------|-----------|----------|---------|-----------------|
| 1:51 PM    | 62 °F       | 52 °F     | 70 %     | SW    | 9 mph      | 0 mph     | 29.87 in | 0.0 in  | Cloudy          |
| 2:28 PM    | 61 °F       | 53 °F     | 75 %     | SW    | 10 mph     | 17 mph    | 29.87 in | 0.0 in  | Cloudy          |
| 2:40 PM    | 59 °F       | 53 °F     | 81 %     | NNW   | 7 mph      | 0 mph     | 29.87 in | 0.0 in  | Light Rain      |
| 2:51 PM    | 57 °F       | 53 °F     | 87 %     | N     | 8 mph      | 0 mph     | 29.87 in | 0.1 in  | Rain            |

So the temperature then was around 61-62°F or ~16°C.

Alright, moving to the exact coordinates of where the bears were lying down. Since it is known where polar bear enclosure is located in San Diego Zoo, let's pin-point the exact location in Google Earth:

![bear_location](/assets/img/posts/osint-exercises/005/bear_location.png)
_Location of the polar bears_


## Answers:
a) San Diego Zoo

b) 61-62°F or ~16°C.

c) 32°44'4.07"N 117°9'16.53"W (bear 1) and 32°44'4.01"N 117°9'16.55"W (bear 2)