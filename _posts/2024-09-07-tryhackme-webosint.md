---
title: TryHackMe - WebOSINT
description: A write-up for the WebOSINT Room on TryHackMe
date: 2024-09-07 12:30 +0300
categories: [TryHackMe, OSINT]
tags: [tryhackme, writeup, osint]
---

# TryHackMe: WebOSINT

Link to the room: [TryHackMe](https://tryhackme.com/r/room/webosint)

## Walkthrough

This write-up will be divided into sections according to the tasks in the WebOSINT Room.
- [Task 1: When A Website Does Not Exist](#task-1-when-a-website-does-not-exist)
- [Task 2: Whois Registration](#task-2-whois-registration)
- [Task 3: Ghosts of Websites Past](#task-3-ghosts-of-websites-past)
- [Task 4: Digging into DNS](#task-4-digging-into-dns)
- [Task 5: Taking Off The Training Wheels](#task-5-taking-off-the-training-wheels)
- [Task 6: Taking A Peek Under The Hood Of A Website](#task-6-taking-a-peek-under-the-hood-of-a-website)
- [Task 7: Final Exam: Connect the Dots](#task-7-final-exam-connect-the-dots)
- [Task 8: Debriefing](#task-8-debriefing)
- [Task 9: Wrap-up](#task-9-wrap-up)

---
### Task 1: When A Website Does Not Exist
#### Description
> What's the first thing you do when you are given the name of a business to check out? Fire up the ol' web browser, find the website and check it out, right?
>
> What if the website, or even the entire business, no longer exists?
> 
> That does NOT mean it's the end of the road.
> 
> OSINT researchers may still be able to connect the dots and find useful information on such organizations.
> 
> Your job is to find as much information as you can about the website RepublicofKoffee.com.
> 
> **Spoiler alert** the website doesn't exist, and if it does by the time you read this, the website in its current form is not our target.
> 
> One way to collect information about a website without directly visiting it is to simply do a search for it.
> 
> Note: Sometimes plugging a website into the search bar will send you directly to the site. Avoid this by putting the site in quote marks. Also note that this will only return results where the full domain name is written out on the website.
> 
> Go ahead and google "RepublicOfKoffee.com" with and without quote marks, just to see what happens.

#### Process
As the description mentions, the first step is to look up "RepublicofKoffee.com" on Google. There is a result pointing to [RepublicofKoffee.com](https://republicofkoffee.com); however, the page just shows the domain "republicofkoffee.com." In other words, the site is obsolete. The other Google results point to WebOSINT room write-ups and some other tools that will be used in this room. 

#### Answers
<details>
    <summary>Click To Complete</summary>
    <p>No answer needed</p>
</details>

---
### Task 2: Whois Registration
#### Description
> Just because nothing shows up when you visit 'RepublicOfKoffee.com,' doesn't mean that someone doesn't own the domain. In fact, if there is any kind of landing page at all, even a spammy one, then you can be sure that someone does, in fact, own it. But is it currently owned by the same person that used it for the time period we are interested in? We may or may not be able to figure that out, but it's worth a look.
> 
> We can confirm current registration status with a whois lookup.
> 
> A 'whois' lookup is the most basic form of domain recon available. There are multiple websites that will do it for you as well.
> 
> Personally, I recommend just going directly to [Namecheap WHOIS Tool](https://www.namecheap.com/domains/whois/). This should tell you the current hosting company used and name servers. Looking at the raw data option will show further details.
> 
> We're looking for any data we might be able to use as pivot points. Maybe an email address? Or better yet, a physical address or phone number?
> 
> Technically these are required in order to register any domain, but most domain registrars offer some kind of privacy protection for a trivial fee, if not free.
> 
> Anyway, let's see what we can find out!

#### Process
The description recommends using [Namecheap WHOIS Tool](https://www.namecheap.com/domains/whois/); however, I used `whois` in the terminal. Let's take a look at the information we have available:
```sh 
$ whois republicofkoffee.com

...
Registrar: NAMECHEAP INC
Registrar IANA ID: 1068
Registrar Abuse Contact Email: abuse@namecheap.com
Registrar Abuse Contact Phone: +1.9854014545
...
Registrant Name: Redacted for Privacy
...
Registrant Country: IS
...
Name Server: ns1.brainydns.com
Name Server: ns2.brainydns.com
...
```

All of this information should be enough to address the questions in this task.

#### Answers
<details>
    <summary>What is the name of the company the domain was registered with?</summary>
    <p>Namecheap Inc</p>
</details>

<details>
    <summary>What phone number is listed for the registration company? (do not include country code or special characters/spaces)</summary>
    <p>9854014545</p>
</details>

<details>
    <summary>What is the first nameserver listed for the site?</summary>
    <p>ns1.brainydns.com</p>
</details>

<details>
    <summary>What is listed for the name of the registrant?</summary>
    <p>redacted for privacy</p>
</details>

<details>
    <summary>What country is listed for the registrant?</summary>
    <p>Iceland</p>
</details>

---
### Task 3: Ghosts of Websites Past
#### Description
> Don't be discouraged when your initial searches on a website turn up empty.
> 
> That's where Archive.org and the Internet Wayback Machine come into play.
> 
> Do yourself a favor and install the archive.org browser extension that will automatically pull up an option to search for a site on the Wayback Machine when it fails to load in the web browser.
> 
> Either with the browser extension, or just by going to archive.org and searching for it, see what snapshots are available of our target domain, RepublicOfKoffee.com.
> 
> Looking at the historical information available for the site, you should be able to answer the following questions without too much trouble.

#### Process
Just like the description advises, I am going to [archive.org](https://archive.org/) and looking for republicofkoffee.com in the Wayback Machine. There are a lot of snapshots dating from 2021 to 2024, and some from the end of 2015 to 2016:

![Wayback Machine](/assets/img/posts/tryhackme-webosint/wayback.png)
_Wayback Machine snapshots_

Usually, I go for the oldest snapshots as the newer snapshots may lead to the same blank page. Here is a snapshot from December 31, 2015 - [link](https://web.archive.org/web/20151231104520/http://www.republicofkoffee.com/).

This snapshot leads to a WordPress blog:

![republicofkoffee_1](/assets/img/posts/tryhackme-webosint/republicofkoffee_1.png)
_2015 December 31 snapshot #1_

![republicofkoffee_2](/assets/img/posts/tryhackme-webosint/republicofkoffee_2.png)
_2015 December 31 snapshot #2_

Let's open one of the posts for additional details:

![republicofkoffee_post_1](/assets/img/posts/tryhackme-webosint/republicofkoffee_post_1.png)
_"Cafe Zorba, Chosun University area" Post_

This post is enough to answer the questions for this task, so let's get into it. Just a quick note — for the last one, I had to search "*{city}* national park temple" on Google.

#### Answers
<details>
    <summary>What is the first name of the blog's author?</summary>
    <p>Steve</p>
</details>

<details>
    <summary>What city and country was the author writing from?</summary>
    <p>Gwangju, South Korea</p>
</details>

<details>
    <summary>[Research] What is the name (in English) of the temple inside the National Park the author frequently visits?</summary>
    <p>Jeungsimsa Temple</p>
</details>

---
### Task 4: Digging into DNS
#### Description
> So far we've gathered some good info about the content that was on our target website, even though it hasn't been live for several years.
> 
> But what about technical details?
> 
> That's where ViewDNS.info comes in.
> 
> ViewDNS.info provides a convenient UI for looking up registration information on a target website. Using this information, it may be possible to draw certain conclusions that are not clearly spelled out, such as whether the website is hosted on a shared or dedicated IP address. The answer to this question can imply things about the website's budget as well as traffic.
> 
> Take a look at the search options available and see if you can answer these questions.

#### Process
I went to [ViewDNS.info](https://ViewDNS.info/) and, at first, used the IP History lookup. Here are the oldest 5 IP addresses:

| IP Address        | Location      | IP Address Owner        | Last seen on this IP |
|-------------------|---------------|-------------------------|----------------------|
| 99.83.154.118     | United States | AMAZON-02               | 2022-02-09           |
| 192.64.119.238    | United States | NAMECHEAP-NET           | 2022-01-01           |
| 69.64.147.10      | United States | RIGHTSIDE               | 2017-07-30           |
| 173.248.188.152   | United States | WEHOSTWEBSITES-COM      | 2016-10-03           |
| 173.248.187.2     | United States | WEHOSTWEBSITES-COM      | 2016-02-01           |

Since the questions in this task ask about the IP used in October 2016, let's look up other domains with `173.248.188.152` using Reverse IP Lookup. It returned 74 domains, which leads to the conclusion that the IP is shared rather than dedicated.


#### Answers
<details>
    <summary>What was RepublicOfKoffee.com's IP address as of October 2016?</summary>
    <p>173.248.188.152</p>
</details>

<details>
    <summary>Based on the other domains hosted on the same IP address, what kind of hosting service can we safely assume our target uses?</summary>
    <p>shared</p>
</details>

---
### Task 5: Taking Off The Training Wheels
#### Description
> Congratulations on making it this far.
> 
> You'll need all of the skills you've learned so far for this task.
> 
> All I have for you, is a domain:
> *heat[dot]net*
> 
> Good luck!

#### Process
Alright, the process here will be the same as in the last few tasks. I will go with `whois`, Wayback Machine, and ViewDNS.

WHOIS data:
```sh
$ whois heat.net

...
Name Server: NS1.HEAT.NET
Name Server: NS2.HEAT.NET
...
```

ViewDNS IP History:

| IP Address       | Location      | IP Address Owner  | Last seen on this IP |
|------------------|---------------|-------------------|----------------------|
| 208.117.87.195   | United States | ATLANTIC-NET-1    | 2024-09-07           |
| 74.116.2.147     | United States | PERFORMIVE        | 2019-06-19           |
| 72.52.192.240    | United States | LIQUIDWEB         | 2011-12-19           |


ViewDNS Reverse IP Lookup:

```
Reverse IP results for 208.117.87.195
==============

There are 43 domains hosted on this server.
The complete listing of these is below:
```

Considering 43 domains, this must be a shared server.

Wayback Machine:

![Wayback Machine: heat.net](/assets/img/posts/tryhackme-webosint/wayback-heat-net-timeline.png)
_heat.net Wayback Machine timeline_

Alright, so the website dates back to June 1, 1997.

Now, let's take a look at the last snapshot of 2001 ([July 6, 2001](https://web.archive.org/web/20010706211455/http://www.heat.net/)):

![heat.net 2001 July 6th](/assets/img/posts/tryhackme-webosint/heat_net_2001_07_06.png)
_heat.net July 6, 2001_

The page mentions "10SIX", so I looked up "10SIX heat.net" on Google, which brought me to the [SegaSoft Wikipedia article](https://en.wikipedia.org/wiki/SegaSoft).

Finally, since the last question asks for the *first header on the site on the last capture of 2010*, let's check out [the last snapshot of 2010](https://web.archive.org/web/20101230184331/heat.net):

![heat.net 2010 December 30th](/assets/img/posts/tryhackme-webosint/heat_net_2010_12_30.png)
_heat.net December 30, 2010_

#### Answers
<details>
    <summary>What is the second nameserver listed for the domain?</summary>
    <p>ns2.heat.net</p>
</details>

<details>
    <summary>What IP address was the domain listed on as of December 2011?</summary>
    <p>72.52.192.240</p>
</details>

<details>
    <summary>Based on domains that share the same IP, what kind of hosting service is the domain owner using?</summary>
    <p>shared</p>
</details>

<details>
    <summary>On what date was the site first captured by the internet archive? (MM/DD/YY format)</summary>
    <p>06/01/97</p>
</details>

<details>
    <summary>What is the first sentence of the first body paragraph from the final capture of 2001?</summary>
    <p>After years of great online gaming, it’s time to say good-bye.</p>
</details>

<details>
    <summary>Using your search engine skills, what was the name of the company that was responsible for the original version of the site?</summary>
    <p>SegaSoft</p>
</details>

<details>
    <summary>What does the first header on the site on the last capture of 2010 say?</summary>
    <p>Heat.net – Heating and Cooling</p>
</details>

---
### Task 6: Taking A Peek Under The Hood Of A Website
#### Description
> Isn't it kind of interesting how the website disappeared for a period of time and came back?
> 
> Clearly the purpose of the site is different now. Let's roll up our sleeves and figure out what's going on.
> 
> First, do you have any gut feelings about this site? What is your overall impression? Does it feel like a legitimate source of information?
> 
> Why?
> 
> You might consider some of the following points:
> 
> * Language - What grade level is the writing? Does it seem to be written by a native English speaker?
> * UX - Is it user friendly? Is the design modern?
> * What pages does the site have?
> 
> I can tell you that this website conforms well to antiquated search engine optimization (SEO) best practices. You can read more about [SEO best practices on ahrefs](https://ahrefs.com/blog/seo-best-practices/) if you like before you continue.
> 
> Technical Research
> 
> Often, clues about a website and its creator/owner may be unintentionally left behind in the source code of the website. Pretty much every web browser will have a method of doing this. It is well worth taking the time to become acquainted with how this works in your browser of choice. For Chrome on MacOS, you'll go to the top menu bar and choose View > Developer > View Source.
> 
> *Note: This also works on sites you visit within Archive.org's Wayback Machine.*
> 
> Once the source code of the page loads, it's time to look around. You don't have to understand HTML, CSS, or Javascript to read notes that the developers left behind for themselves. In HTML, comments begin with the characters <!--. Here's an example of what a forgotten comment might look like in practice:
> 
> `<!--Don't forget to email Bob Loblaw when the site goes live at bob@fakeemail.com-->`
> 
> As easy as that may be to read, if it was buried inside a gigantic page full of code it could still be easy to miss. That's where ctrl-F comes in. Here are some good things to search for with ctrl-f:
> 
> 
> | Search Term | Explanation               | More information                       |
> |-------------|---------------------------|----------------------------------------|
> | <!--        | Comments                  | See above                              |
> | @           | Email addresses           | Pivoting from an Email address         |
> | ca-pub      | Google Publisher ID       | Google’s Description                   |
> | ua-         | Google AdSense ID         | Bellingcat Tutorial                    |
> | .jpg        | Also try other image file extensions | Likely to reveal more directory structure |
> 
> 
> Finding any of the above data gives you a potential pivot point. The Bellingcat article linked above goes into more detail on how exactly to do it but you don't have to overcomplicate things!
> 
> You can always just take any of the above information and plug it back into your favorite search engine and you may just strike gold!
> 
> Ready to put this all into practice? 
> 
> These following questions refer to heat[dot]net/36/need-to-hire-a-commercial-heating-contractor/
> 
> Have at it!

#### Process

The first step is to head to [the article from the description](https://www.heat.net/36/need-to-hire-a-commercial-heating-contractor/) and review the content. For the links in the article, I just counted them—5 internal links and a single link to purchase.org

After that, I went to the page source (right mouse click > "View Page Source"). For the Google Analytics, I found this part:

```html
<script type="text/javascript">
window.google_analytics_uacct = "UA-251372-24";
</script>
```

To check whether other sites used this Google Analytics code, I went to [nerdydata.com](https://www.nerdydata.com/reports/), but no sites were listed.

Finally, for affiliate links, I checked eBay links; however, they did not contain any affiliate codes.

#### Answers
<details>
    <summary>How many internal links are in the text of the article?</summary>
    <p>5</p>
</details>

<details>
    <summary>How many external links are in the text of the article?</summary>
    <p>1</p>
</details>

<details>
    <summary>Website in the article's only external link (that isn't an ad)</summary>
    <p>purchase.org</p>
</details>

<details>
    <summary>Try to find the Google Analytics code linked to the site</summary>
    <p>UA-251372-24</p>
</details>

<details>
    <summary>Is the Google Analytics code in use on another website? Yay or nay</summary>
    <p>nay</p>
</details>

<details>
    <summary>Does the link to this website have any obvious affiliate codes embedded with it? Yay or Nay</summary>
    <p>nay</p>
</details>

---
### Task 7: Final Exam: Connect the Dots
#### Description
> Experienced OSINT researchers will tell you that chasing rabbit holes all day and night without being able to make some solid connections is not OSINT.
> 
> OSINT refers to the patterns that start to emerge as we connect the dots in the analysis of the data. 
> 
> Congrats! you found that our target, heat[.]net, links to an interesting external site. A question remains though: Why???
> 
> There is no affiliate code in the link, so there is no obvious financial connection between the two. Maybe there's another kind of connection.
> 
> This is your final exam, and there is exactly one question.
> 
> Get busy!

#### Process
Alright, this task likely refers to `purchase.org` from the previous task and hints that DNS records may help to find the connection. Let's go to [ViewDNS.info](https://viewdns.info/) and do an IP lookup for both sites.

IP History for both [heat.net](https://viewdns.info/iphistory/?domain=heat.net) and [purchase.org](https://viewdns.info/iphistory/?domain=purchase.org) shows the same hosting provider (LIQUIDWEB) back in 2012:

heat.net:

| IP Address       | Location      | IP Address Owner  | Last seen on this IP |
|------------------|---------------|-------------------|----------------------|
| 72.52.192.240    | United States | LIQUIDWEB         | 2011-12-19           |

purchase.org:

| IP Address       | Location      | IP Address Owner  | Last seen on this IP |
|------------------|---------------|-------------------|----------------------|
| 72.52.193.127    | United States | LIQUIDWEB         | 2012-11-16           |

#### Answers
<details>
    <summary>Use the tools in Task 4 to confirm the link between the two sites. Try hard to figure it out without the hint.</summary>
    <p>Liquid Web, L.L.C</p>
</details>

---
### Task 8: Debriefing
#### Description
> Congratulations on completing the challenge! In fact, it is highly probable that both of these sites are owned and operated by the same entity.
> 
> Let's unpack this.
> 
> Although there are loads of advertisements on our target website, that is probably a tiny percentage of the money this site makes.
> 
> It would require further investigation to confirm this but it's a good bet that the creators of these two sites make most of their money by functioning as what's called a private blog network (PBN). PBNs exist for one purpose: to convince the search engine algorithms that another site should rank higher in the search engine results.
> 
> Modern search engines work by mapping the internet by its links. This gets extremely complicated very quickly, but as a generalization they work on a few assumptions:
> 
>     How well a site answers users' questions on a topic can be evaluated by the incoming, outgoing, and internal links it has. The presence of a lot of links to website A from websites B, C, D, and E is taken as a sign that website A is authoritative on the topic. Outgoing links are treated a little differently. Too many outgoing links can hurt a site's ranking, but search engines also assume that a website with too few outgoing links is probably not answering users' questions very well either.
>     How authoritative the websites are that are sending and receiving links. If your site gets plugged in a New York Times article, that will earn far more ‘Google juice’ than a plug on CedarHillsHomeownersAssociation.xyz.
>     Relevance of the incoming links to a site. A link to a site from top tier websites like the New York Times is always going to be a very good thing. Almost as good, though, would be a link from a reputable website dedicated to the same topic as yours. The relevance of the language used in the hyperlink itself is also an important part of this consideration.
> 
> Let's say we are creating a new website. In order to get some SEO juice flowing to it, we'll need to get another website to start linking to our site as fast as possible. A common (white hat) method of doing this would be volunteering to write free blog articles on other websites in exchange for links back to your site.
> 
> As you can imagine, this takes a lot of time. It is a long term endeavor that could take six months or so to see results, depending on how much competition there is for the keywords you are targeting.
> 
> Thinking like a hacker here, what's a good way to give your new website (called 'money site') a faster boost in the search engine rankings? Highlight the below section once you have an idea in your head.
> 
> By setting up a separate website that is completely under your control and exists for the sole purpose of telling search engines that your main site should rank higher in searches than it rightfully deserves.
> 
> That's right, heat[.]net, in its current form is probably not designed for human eyes at all. It is designed primarily to trick the search engines into placing purchase[.]org higher in the search results than it would have otherwise.
> 
> Purchase[.]org appears to be a drop shipping e-commerce site, which probably earns its owner substantially more money than heat[.]net. It needs that sweet sweet SEO juice to push it up the search engine results pages (AKA SERPs) though.
> 
> Is all of this ethical? Good question. Google, for one, would clearly define this practice as black hat and is constantly trying to improve its algorithms to penalize sites that do this kind of thing. As of this writing, though, it is not illegal.
> 
> Is the site a scam? It is worth considering how much time and effort that goes into setting up a PBN. A PBN ideally has a minimum of 50 pages of unique, natural-sounding and on-topic articles. That's a lot of time and effort that went into getting a fast, short-term bump in the rankings, rather than into other aspects of the business, or even something as simple and affordable as pay-per-click marketing.
> 
> On the other hand, you might be surprised to learn just how common it is for websites to hire SEO agencies. Some of these agencies, whether they admit it or not, have hundreds of PBNs and a staff of writers (usually offshore) pumping out content designed solely for the consumption of the search algorithms.

#### Answers
<details>
    <summary>Click To Complete</summary>
    <p>No answer needed</p>
</details>

---
### Task 9: Wrap-up
#### Description
> A little web OSINT knowledge can go a long way in online investigations. A few examples of where it comes into play include any kind of business OSINT, online scams, or even political journalism. If you would like to see a prime example of this kind of research being put into practice, I highly recommend checking out NixIntel's expose [linking antifa.com to Russia](https://nixintel.info/osint/website-osint-whats-the-link-between-antifa-com-and-russia/), which is an amazing case study.
> 
> Make sure to check out the other OSINT boxes out there such as:
> 
>     The [Searchlight IMINT Room](https://tryhackme.com/room/searchlightosint) and [Geolocation](https://tryhackme.com/room/geolocatingimages) for Geolocation and Image Analysis
>     The [Google Dork](https://tryhackme.com/room/googledorking) room for advanced search engine operators
>     The [OhSINT](https://tryhackme.com/room/ohsint) room for a little extra IMINT practice
> 
> There are also two fantastic podcasts that every OSINT practitioner should regularly listen to. The [OSINT Curious](https://osintcurio.us/) podcast and [The Privacy, Security, & OSINT Show](https://inteltechniques.com/podcast.html). 
> 
> Finally, a solid paid option for OSINT training that won't break the bank is [TheOSINTion](https://www.theosintion.com/). If you enjoyed the content of this room you would LOVE the [Business OSINT](https://www.theosintion.com/courses/business-osint/) course they offer. I have no affiliation with the course other than being a satisfied customer.

#### Answers
<details>
    <summary>Update me..</summary>
    <p>No answer needed</p>
</details>
