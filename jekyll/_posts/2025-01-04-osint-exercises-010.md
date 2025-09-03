---
title: OSINT Exercise 010
description: A write-up for OSINT Exercise 010 by Sofia Santos
date: 2025-01-04 21:30 +0300
categories: [OSINT]
tags: [osint, writeup, gralhix]
---

# OSINT Exercise #010

This is a write-up for an "[OSINT Exercise 010 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-010/)"

## Task description

**Task briefing:**

A Twitter user shared three photos of an event.

Please answer the following questions:

a) Which event is being celebrated in the photos?

b) Which two photos were taken by the same person?

c) The two photos mentioned above were taken in the same city. The photographer was previously in a different city. Find out the name of that city.

Click [here](https://gralhix.com/wp-content/uploads/2023/08/osintexercise010.webp) to open the photo in a new tab.

**Exercise level:**

For beginners: a) Easy, b) Easy, c) Hard

For experts: a) Easy, b) Easy, c) Medium

![task-photo](/assets/img/posts/osint-exercises/010/task-photo.png)
_Task image_

## Process

Let’s start by searching online for *Zangbeto dolls*, as they are mentioned in the post. [This New York Post article](https://nypost.com/2018/09/27/voodoo-festival-shows-strength-of-traditions/) refers to the event as the *Zangbeto Voodoo Festival*, while [The Collector](https://www.thecollector.com/zangbeto-voodoo-dance/) mentions the *Zangbeto masquerade* and the *Vodun Festival*. These names sound quite similar and convey the same idea, so *Zangbeto Voodoo Festival* seems to be the most fitting term.

To determine which two photos were taken by the same person, the source for each photo must be identified. I started by finding the original post on X/Twitter so I could access the full pictures, which makes reverse image search easier:

![tweet-1](/assets/img/posts/osint-exercises/010/tweet-1.png)
_First photo_

![tweet-2](/assets/img/posts/osint-exercises/010/tweet-2.png)
_Second photo_

![tweet-3](/assets/img/posts/osint-exercises/010/tweet-3.png)
_Third photo_

Alright, now let's find the sources using reverse image search.

- For the first photo, I found a [Getty Images](https://www.gettyimages.ca/detail/news-photo/zangbetto-performs-during-a-voodoo-ceremony-on-january-9-news-photo/146328923) page with credits to Dan Kitwood.

- For the second photo, I found a [blog post](https://adventurousgina.com/travel/f/a-trip-down-memory-lane--benin%E2%80%99s-voodoo-dancers) of someone visiting a small village near Ouidah, Benin.

- For the third photo, I found another [Getty Images](https://www.gettyimages.com/detail/news-photo/nigerian-voodoo-spirits-walk-the-streets-on-january-10-2012-news-photo/146313089) page with credits to the same Dan Kitwood.

Alright, so it is now known that the photographer is Dan Kitwood, who took the first and third photos in Ouidah, Benin. These photos were taken on January 09, 2012, and January 10, 2012, respectively.

Since both photos were found on Getty Images, it is worth searching for more of their photos on the same site. I used the [search tool](https://www.gettyimages.ca/search/photographer?photographer=Dan%20Kitwood&assettype=image&begindate=2012-01-01&enddate=2012-01-10&recency=daterange&sort=mostpopular&license=rf%2Crm) and filtered to show photos taken between 01/01/2012 and 01/10/2012. Here is the location timeline for this time range:

- January 01, 2012 - January 04, 2012: **London, United Kingdom**
- January 06, 2012: **Ganvie, Benin** and **Cotonou, Benin**

## Answers

a) Zangbeto Voodoo Festival

b) First and third photos

c) Ganvie and/or Cotonou in Benin
