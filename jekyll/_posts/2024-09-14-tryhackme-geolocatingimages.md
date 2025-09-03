---
title: TryHackMe - Geolocating Images
description: A write-up for the Geolocating Images Room on TryHackMe
date: 2024-09-14 13:00 +0300
categories: [TryHackMe, OSINT]
tags: [tryhackme, writeup, osint]
---

# TryHackMe: Geolocating Images

Link to the room: [TryHackMe](https://tryhackme.com/r/room/geolocatingimages)

## Walkthrough

- [Task 1: Getting Started](#task-1-getting-started)
- [Task 2: Getting our feet wet - where is this?](#task-2-getting-our-feet-wet---where-is-this)
- [Task 3: Geolocating Images 101](#task-3-geolocating-images-101)
- [Task 4: Now your turn](#task-4-now-your-turn)
- [Task 5: Helpful tips for geolocating](#task-5-helpful-tips-for-geolocating)
- [Task 6: Your turn, again!](#task-6-your-turn-again)
- [Task 7: Your turn, what can you see?](#task-7-your-turn-what-can-you-see)
- [Task 8: You're done!](#task-8-youre-done)

---
### Task 1: Getting Started
#### Description
> This tutorial will show you how to geolocate images, from easy things to much harder things.
> 
> Our first thought about geolocating images is "where does this image appear on the internet?"
> After all, an image may be on a website named "ILoveEgypt.com"!
> 
> To do this, we use a reverse image searching program. There are many out there on the internet, but the order from how good they are to worst goes:
> 
> 1 Yandex
> 
> 2 Yandex
>
> 3 Yandex
> 
> ...
>
> 101 Yandex
> 
> 102 Bing
> 
> 103 Google
> 
> The reason why Google is 103 and not in the first 101 results is that Yandex is a million times better.
> Yandex is to Google what a formula 1 racing car is to the $200 car you brought off your friend Ivan who claims the car isn't stolen but you've had police tailing you all week.
> 
> It really is night and day. There is no comparison to be made. Use Yandex first, and then a hundred more times. Then after Yandex, use Bing. Then Google. I cannot stress enough how much of a joke Google reverse image search is. It should be your last resort.
> 
> When you reverse image search with Google, Google tries to find the exact match of that image. With Yandex, it's almost as if Yandex knows what your image is of straight away and shows you other images of the same thing to reinforce the idea that it knows.
> 
> Here's a fun experiment. Take a picture of yourself right now. You must have other pictures online of yourself. Google reverse image search will likely never find you if you have never uploaded the image.
> 
> Yandex can likely work out who you are and show you other images of yourself.
> 
> Yandex uses AI to reverse image search, whereas it feels like Google is doing a simple "if IMG_0657 = [Position 1 of image database]: return" against all the images it has.
> 
> For more on Yandex vs Bing vs Google, check out Bellingcat's analysis:
> 
> https://www.bellingcat.com/resources/how-tos/2019/12/26/guide-to-using-reverse-image-search-for-investigations/
> 
> **All images needed for this walkthrough are in the zip folder.**\

#### Answers
<details>
    <summary>Download the zip file</summary>
    <p>No answer needed</p>
</details>

---
### Task 2: Getting our feet wet - where is this?
#### Description
> Where is image 1?
> 
> (Use Google Reverse Search and revel in all the airplanes it shows you, which by the way, isn't the right answer).
> 
> Try Yandex Reverse Image search. Look at the differences!

#### Process
Here is Image 1:

![Image 1](/assets/img/posts/tryhackme-geolocatingimages/1.jpeg)
_Image 1_

I tried using Google Reverse Image Search, and the first result was another write-up for this TryHackMe room (it is 1,684 days old at the time of me writing this!). There are some similar images that point to Cloud Gate in Chicago, US, or Karamay, China:

![Google Reverse Image Search - Image 1](/assets/img/posts/tryhackme-geolocatingimages/image_1_google_rev_img_search.png)
_Google Reverse Image Search - Image 1_

Alright, the sculpture in Chicago has buildings around it; however, Image 1 has an empty background. Therefore, I believe it is in China. Regardless, let's try checking Yandex Reverse Image Search to compare the results:

![Yandex Reverse Image Search - Image 1](/assets/img/posts/tryhackme-geolocatingimages/image_1_yandex_rev_img_search.png)
_Yandex Reverse Image Search - Image 1_

Great, both Google and Yandex point to China!

#### Answers
<details>
    <summary>Where in the world is image 1? The answer is the country name.</summary>
    <p>China</p>
</details>

---
### Task 3: Geolocating Images 101
#### Description
> Okay, now we know what reverse image searching program to use. Let's try to actually look at the picture now to figure out where it is!
> 
> Let's say we have a webcam we found on [Shodan.io](https://shodan.io/):
> 
> [https://padcam.liverpool.ac.uk/cgi-bin/guestimage.html](https://padcam.liverpool.ac.uk/cgi-bin/guestimage.html)
>
> ![Task 3 description - Image 1](/assets/img/posts/tryhackme-geolocatingimages/task_3_description_image_1.png)
> 
> Where is this camera?
> 
> The first thing we notice is the weird crest & title with a black bar (and possibly text) underneath it.
> 
> Second thing is the logo, "Kaplan".
> 
> The third thing is that there is a glass building next to a concrete building.
> 
> And finally, we have what appears to be a highway next to the glass building. Because it's a webcam, we can see cars moving quickly!
> 
> Putting this into a reverse image search program shows nothing.
> 
> Now, something important to note is the name of the webcam. The URL points to [Liverpool.ac.uk](https://liverpool.ac.uk/), which is a university in Liverpool.
> 
> If we just had an IP address, we could try to geolocate it using an online tool, checking the ASN number or finding it on Shodan.
> 
> Googling "Kaplan University of Liverpool" leads us to a news article about a new building. If we take a look at the image, it looks approximately similar to the one we saw.
>
> ![Task 3 description - Image 2](/assets/img/posts/tryhackme-geolocatingimages/task_3_description_image_2.png)
> 
> Rows of long glasses with a little bit of overhang.
> 
> Luckily for us, Liverpool have captioned the image.
> 
> "The proposed new Liverpool International College facility"
> 
> If we google Liverpool International College we get:
> 
> https://www.google.com/maps/place/University+of+Liverpool+International+College/@53.4062447,-2.9625347,17z/data=!4m5!3m4!1s0x487b211eda1b2f5f:0xc226c2ccfb209504!8m2!3d53.4060784!4d-2.9605928
> 
> ![Task 3 description - Image 3](/assets/img/posts/tryhackme-geolocatingimages/task_3_description_image_3.png)
>
> Which is our building! But it's not built yet... What gives?
> 
> In the bottom right hand corner, Google tells us the image was captured in June 2019.
> 
> ![Task 3 description - Image 4](/assets/img/posts/tryhackme-geolocatingimages/task_3_description_image_4.png)
>
> So Google maps hasn't updated yet.
> 
> If we turn the camera around on Google maps, we can see where the live webcam should be.
> 
> ![Task 3 description - Image 5](/assets/img/posts/tryhackme-geolocatingimages/task_3_description_image_5.png)
>
> Somewhere on this building!
> 
> When geolocating an image, we want to point out big landmarks we can easily find on a map. Road layouts, business names, The Empire States Building.

#### Answers
<details>
    <summary></summary>
    <p>No answer needed</p>
</details>

---
### Task 4: Now your turn
#### Description
> Where was image 2 taken? Specifically, I'm looking for the name of the place that has likely set up the webcam. You'll know it when you see it!
> 
> Please do not use reverse image searches for this!

#### Process
Here is the second room image:

![Image 2](/assets/img/posts/tryhackme-geolocatingimages/2.png)
_Image 2_

This looks like a camera feed. Let's take note of the visible text:
- N SHEFFIELD AV 

![North Sheffield Avenue](/assets/img/posts/tryhackme-geolocatingimages/n_sheffield_av.png)
_North Sheffield Avenue_

- W ADDISON ST 

![West Addison Street](/assets/img/posts/tryhackme-geolocatingimages/w_addison_st.png)
_West Addison Street_

- SPORTS CORNER

![Sports Corner](/assets/img/posts/tryhackme-geolocatingimages/sports_corner.png)
_Sports Corner_

Alright, my first instinct is to look up "W Addison St N Sheffield Av Sports Corner" on Google. Google brought me to [The Sports Corner in Chicago, United States](https://maps.app.goo.gl/x1gRpeajzZ4N2a3b8). Here is the Street View at this location:

![Street View: The Sports Corner in Chicago, United States](/assets/img/posts/tryhackme-geolocatingimages/sports_corner_street_view.png)
_Street View: The Sports Corner in Chicago, United States_

On the other side of the street, there is a "Wrigleyville Sports" store where the photo was taken:

![Wrigleyville Sports](/assets/img/posts/tryhackme-geolocatingimages/wrigleyville_sports.png)
_Wrigleyville Sports_

#### Answers
<details>
    <summary>Where was image 2 taken?</summary>
    <p>Wrigleyville Sports</p>
</details>

---
### Task 5: Helpful tips for geolocating
#### Description
> Wow, congrats! I found a webcam on [Shodan.io](https://shodan.io/) and took this screenshot, you just geolocated your first image 😎
> 
> It's important to know what is and isn't likely to be in a country. For example, it is unlikely for a regular Catholic church to appear in places where Budhism / islam is the most popular religeion.
> 
> The language used on the shops and vehicles matter too. We can use Google translate to predict what language it could be.
> 
> Which side of the road the cars are on, the license plates (you normally can find out what country or state the license plate is from), the markings on the road (different countries have different markings), the style of traffic lights, the clothing choices of those walking around.
> 
> To be good at geolocation, we've got to open our eyes to all that could be. In your country, for example, it may be common to wear coats during the winter periods. However, in other countries it may not be (think Australia).
> 
> Even the smallest of things that we wouldn't normally think twice about can reveal to us the possible location.
> 
> One of the more obvious ways we can geolocate an image is to look at the image details. Does it contain EXIF data?
> 
> What about where it was posted - is there a location tagged on social media?

#### Answers
<details>
    <summary>Read the above material</summary>
    <p>No answer needed</p>
</details>

---
### Task 6: Your turn, again!
#### Description
> Please do not try to use reverse image searches for this one! Pay close attention to what is in the image.
> 
> I want you to answer with the name of the place the webcam is facing.
> 
> Note: the name of this location on Google Maps is not the right answer. If you take that location name and paste it back into search, you'll find out there's about a million of them. To make this harder, I'm looking for the name that specifically identifies this location. When you enter this name, it'll be the only one that turns up on Google Maps.

#### Process
Here is Image 3:

![Image 3](/assets/img/posts/tryhackme-geolocatingimages/3.png)
_Image 3_

Alright, so we have a camera view of a park with some buildings and a cityscape. These are the details that are noticeable first:

- Tower

![Image 3 Tower](/assets/img/posts/tryhackme-geolocatingimages/image-3-tower.png)
_Image 3 Tower_

- River

![Image 3 River](/assets/img/posts/tryhackme-geolocatingimages/image-3-river.png)
_Image 3 River_

- Building with a dome roof

![Image 3 Building](/assets/img/posts/tryhackme-geolocatingimages/image-3-building.png)
_Image 3 Building_

In addition, the weather looks rainy. It is likely autumn or early winter as the trees no longer have leaves.

I started by Googling "tower" and "building near camera." The building search did not get me anywhere; however, the tower search was a bit better. I tried these keywords:
- "Y shape TV tower" (at first, it looked like a TV tower)
    - This led me to Tokyo TV tower, but it was not it. The surroundings did not seem to match.
- "Reverse Y tower"
- "Triangle tower"
- "Tower" (a very basic search)

The last search brought up the Eiffel Tower:

![Google - Tower](/assets/img/posts/tryhackme-geolocatingimages/google-tower.png)
_Google: Tower_

Let's compare Paris satellite view with the image:

![Paris and Image 3 comparison](/assets/img/posts/tryhackme-geolocatingimages/paris-image-3-comparison.png)
_Paris and Image 3 comparison_

There is a potential that the image is from Paris. Now, let's find the park where the image was taken. For this, I am following the river and looking for green areas with buildings in them. I found an approximate location in Google Earth 3D view:

![Google Earth Paris 3D View](/assets/img/posts/tryhackme-geolocatingimages/google-earth-paris-3d.png)
_Google Earth Paris 3D View_

Then I decided to move back until I saw a hill and got here:

![Google Earth Paris 3D View](/assets/img/posts/tryhackme-geolocatingimages/google-earth-paris-3d-2.png)
_Google Earth Paris 3D View_

So the building with the dome roof is the "Equatorial Table Dome" (*Coupole de la Table Équatoriale*).

The image seems to be taken from a tower at the Laboratory for Space Studies and Instrumentation in Astrophysics (*Laboratoire D'études Spatiales Et D'instrumentation En Astrophysique*), as the view is quite high. Finally, to find the answer, I went to the Paris Observatory Practical Information page ([lesia.obspm.fr](https://lesia.obspm.fr/-Informations-pratiques-.html)) and found this header (in the translated page):
> 2. Access to the **Meudon Observatory**

#### Answers
<details>
    <summary>Where was image 3 taken?</summary>
    <p>Meudon Observatory</p>
</details>

---
### Task 7: Your turn, what can you see?
#### Description
> Look at image 4. What do you see? What can you observe? 

#### Process
Here is the final image for this room:

![Image 4](/assets/img/posts/tryhackme-geolocatingimages/4.png)
_Image 4_

The first noticeable thing is that the picture is from a camera in the United Kingdom because of the color of the [license plates](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_the_United_Kingdom) and the car side.

There is a 3-way intersection with a guard (in military uniform?) standing near the obelisk:

![Image 4 statue](/assets/img/posts/tryhackme-geolocatingimages/image-4-statue.png)
_Image 4 Statue_

In addition, the obelisk has a sitting person statue.

Now let's find the location where the picture was taken. The gray car on the right looks like a taxi. After a reverse image search, I found that it is a TX4 (or a different TX series) London Cab. Additionally, the first letter of the license plate is "L," which means that [the car was registered in London](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_the_United_Kingdom#Great_Britain):

![London Cab](/assets/img/posts/tryhackme-geolocatingimages/london-cab.png)
_London Cab_

I searched for "London 3-way intersection" in DuckDuckGo Images (my default search engine) and found this gem:

![DuckDuckGo Search](/assets/img/posts/tryhackme-geolocatingimages/ddg-search.png)
_DuckDuckGo Search_

This looks like the same intersection from the other side. I think I got really lucky here as I could not get the same results using Google.

Alright, the statue says:

> TO
>
> _ _ ONSLOWFORD _ A
>
> _ _ _ _ BY HIS FRIENDS
>
> AND ADMIRERS

After searching for "London statue Onslowford," I found that it is the *Edward Onslow Ford monument*. Now, let's check it out in Google Street View:

![Edward Onslow Ford monument](/assets/img/posts/tryhackme-geolocatingimages/onslow-monument-street-view.png)
_Edward Onslow Ford monument_

This seems to align with the provided image. I also found the camera that streams this street!

![Image 4 Camera](/assets/img/posts/tryhackme-geolocatingimages/image-4-camera.png)
_Image 4 Camera_

Alright, as the stock image I found on DuckDuckGo said, it is a "Famous intersection." Apparently, it is an intersection from The Beatles' Abbey Road album cover. And yes, the image is from Abbey Road.

You can see the live stream of this camera on the [Abbey Road website](https://www.abbeyroad.com/Crossing).

#### Answers
<details>
    <summary>Where is image 4 taken?</summary>
    <p>Abbey Road</p>
</details>

---
### Task 8: You're done!
#### Description
> And that's it!
> 
> Check out Bellingcat for more on geolocation:
> 
> https://www.bellingcat.com/news/2020/01/21/geolocating-venezuelan-lawmakers-in-europe
> 
> Alternatively, play a lot of Geoguesser!
> 
> https://geoguessr.com/

#### Answers
<details>
    <summary>Check out the links above!</summary>
    <p>No answer needed</p>
</details>
