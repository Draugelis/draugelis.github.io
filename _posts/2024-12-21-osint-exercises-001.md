---
title: OSINT Exercise 001
description: A write-up for OSINT Exercise 001 by Sofia Santos
date: 2024-12-21 20:00 +0300
categories: [OSINT]
tags: [osint, writeup]
---

# OSINT Exercise #001

Recently, I saw a [RAINBOLT's video "a fan told me i couldn't find her book"](https://www.youtube.com/watch?v=5RpiOeyYkMo) on Youtube. It was an interesting OSINT exercise where person has to find some flags from a provided photo. This lead me to discord [OSINT Exercises by Sofia Santos](https://gralhix.com/list-of-osint-exercises/). At first, I did a couple of them and it was really fun. Then I remembered that I still have this blog and decided to start my series of write-ups on these exercises. As a disclaimer, I must mention that I am intermediate in OSINT at best but I will (hopefully) get better with each exercise. 

Anyway, let's stop yapping and get into the first exercise. 

## Task description

**Task briefing:**
Below you can see a screenshot from a tweet containing a photo. It contains all the relevant information necessary to help you find the exact location.
Please identify the coordinates of where the photo was taken.

Click [here](https://gralhix.com/wp-content/uploads/2023/08/osint-exercise-001-big-picture.jpeg) for the photo without the Twitter border.

**Exercise level:**
For beginners: Hard
For experts: Medium

![tweet](/assets/img/posts/osint-exercises/001/tweet.png)
_Task Tweet (or is it 'X' nowadays?)_

## Process

By reading the photo caption, I immediately notice the city name 'Kiffa'. In Google Maps, there is a single match for this city name which is really fortunate (imagine checking N cities with the same name).

![kiffa_maps](/assets/img/posts/osint-exercises/001/kiffa_maps.png)
_Kiffa in Google Maps_

Alright, so we have a city name. It is time to find where the photo was taken. Just zoom in and find the spot, right? Well, not really, Kiffa has a population of 60,005 (2013 census, thanks Wikipedia), with this many inhabitants it would be 6th largest city by population in Lithuania. 

To find the location where the photo was taken, we'll need to consider few things from the tweet:
1. When was the photo taken?
2. What are the surroundings of the photo? 

The photo was taken in Feb 20, 2013. As for the surroundings, let's take a look at the photo once again:

![exercise_image_marked](/assets/img/posts/osint-exercises/001/exercise_001_image_marked.png)
_Marked photo

I've marked a few things here:
1. It looks like the road goes a bit downhill and uphill. It could be a feature of terrain or there might be a creek/river down there.
2. There are electricity poles going by the road and there are a few buildings behind.
3. There is a structure with a tree behind. The structure might be a building or a wall. 
4. There is a paved road with a wide gap to a building. In such areas paved roads could be reserved to main roads only.

In addition, it is worth noting that there is nothing besides trees in the horizon. Kiffa looks like a densly populated city which means that the photo was likely taken on the edge of the city. 

Typically, I would use street view to get a feel of the suroundings, however, there is not Google Street View coverage in Kiffa:

![street_view_coverage](/assets/img/posts/osint-exercises/001/street_view_coverage.png)
_No street view coverage_

In this case, I'll have to use satellite imagery only. It is time to move from Google Maps to Google Earth. Why? Google Earth allows to view historical satellite images whereas Maps do not (I think it used to but I might be imagining stuff at this point). 

In Google Earth, I've selected *Historical Imagery* and selecter nearest 2013 imagery to the tweet date (Feb 20, 2013) - Jul 18th, 2013. From the imagery and road markings it is easy to see which roads are *main* and paved. Let's mark some city edges and then zoom in:

![kiffa_marked_edges](/assets/img/posts/osint-exercises/001/kiffa_marked_edges.png)
_Kiffa City edges marked on the main roads_

Great, instead of scanning the whole city, I'll need to check just 4 areas which is a way better option. In these areas, there were two places that, at first glance, looked like potential finds:

![kiffa_potential_finds](/assets/img/posts/osint-exercises/001/kiffa_potential_finds.png)
_Potential finds marked_

After a closer look, the first potential find was a false flag since the road curves, there are trees that are not visible in the photo and, most important, there is no paved road. However, the second potential find looks more promising:

![kiffa_potential_find_2](/assets/img/posts/osint-exercises/001/kiffa_potential_find_2.png)
_Potential find #2_

This area lines up pretty well (there is even a river!). However, to verify whether this is a match, I need to compare satellite imagery with the photo.

![comparison](/assets/img/posts/osint-exercises/001/satellite_picture_comparison.png)
_Satellite and photo comparison_

Alright, so there are some marked spots with numbers. Let's review each one of them:
1. There is a tree behind a wall in satellite image and behind *some* structure in the photo. This might be the same tree as they don't really move (unless cut).
2. There are trees in the horizon. In addition, there is a river which would explain a change in elevation we can observe in the photo. 
3. There are some buildings on the left side of the road. In the satellite image we can we a road, however, in the photo it is hard to tell whether it exists (it might be *slightly* visible).
4. The gap between the building and the road!
5. The building itself
6. A building and a couple of walls.

Given these factors, the photo was taken at these coordinates:
<details>
    <summary>answer</summary>
    <p>16°36'34.25"N 11°23'52.10"W</p>
</details>

This was a fun exercise and interesting exercise. At the time of this write-up, there is a total of 30 exercises which will keep me occupied for a while. 
