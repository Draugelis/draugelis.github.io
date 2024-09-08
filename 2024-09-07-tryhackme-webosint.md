---
title: TryHackMe - WebOSINT
description: A write-up for the WebOSINT Room on TryHackMe
date: 2024-09-07 12:30 +0300
categories: [TryHackMe]
tags: [tryhackme, writeup]
---

# TryHackMe: WebOSING

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
As the description mentions, the first step is to look up "RepublicofKoffee.com" on Google. There is a result pointing to [RepublicofKoffee.com](https://republicofkoffee.com), however, the page just shows the domain "republicofkoffee.com". In other words, the site is obsolete. The other Google results point to WebOSINT room write-ups and some other tools that will be used in this room. 

#### Answers
> No answer needed
{: .prompt-info }

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
The description recommends using [Namecheap WHOIS Tool](https://www.namecheap.com/domains/whois/), however, I used `whois` in the terminal. Let's take a look at the information we have available: 
```sh 
$ whois republicofkoffee.com

% IANA WHOIS server
% for more information on IANA, visit http://www.iana.org
% This query returned 1 object

refer:        whois.verisign-grs.com

domain:       COM

organisation: VeriSign Global Registry Services
address:      12061 Bluemont Way
address:      Reston VA 20190
address:      United States of America (the)

contact:      administrative
name:         Registry Customer Service
organisation: VeriSign Global Registry Services
address:      12061 Bluemont Way
address:      Reston VA 20190
address:      United States of America (the)
phone:        +1 703 925-6999
fax-no:       +1 703 948 3978
e-mail:       info@verisign-grs.com

contact:      technical
name:         Registry Customer Service
organisation: VeriSign Global Registry Services
address:      12061 Bluemont Way
address:      Reston VA 20190
address:      United States of America (the)
phone:        +1 703 925-6999
fax-no:       +1 703 948 3978
e-mail:       info@verisign-grs.com

nserver:      A.GTLD-SERVERS.NET 192.5.6.30 2001:503:a83e:0:0:0:2:30
nserver:      B.GTLD-SERVERS.NET 192.33.14.30 2001:503:231d:0:0:0:2:30
nserver:      C.GTLD-SERVERS.NET 192.26.92.30 2001:503:83eb:0:0:0:0:30
nserver:      D.GTLD-SERVERS.NET 192.31.80.30 2001:500:856e:0:0:0:0:30
nserver:      E.GTLD-SERVERS.NET 192.12.94.30 2001:502:1ca1:0:0:0:0:30
nserver:      F.GTLD-SERVERS.NET 192.35.51.30 2001:503:d414:0:0:0:0:30
nserver:      G.GTLD-SERVERS.NET 192.42.93.30 2001:503:eea3:0:0:0:0:30
nserver:      H.GTLD-SERVERS.NET 192.54.112.30 2001:502:8cc:0:0:0:0:30
nserver:      I.GTLD-SERVERS.NET 192.43.172.30 2001:503:39c1:0:0:0:0:30
nserver:      J.GTLD-SERVERS.NET 192.48.79.30 2001:502:7094:0:0:0:0:30
nserver:      K.GTLD-SERVERS.NET 192.52.178.30 2001:503:d2d:0:0:0:0:30
nserver:      L.GTLD-SERVERS.NET 192.41.162.30 2001:500:d937:0:0:0:0:30
nserver:      M.GTLD-SERVERS.NET 192.55.83.30 2001:501:b1f9:0:0:0:0:30
ds-rdata:     19718 13 2 8acbb0cd28f41250a80a491389424d341522d946b0da0c0291f2d3d771d7805a

whois:        whois.verisign-grs.com

status:       ACTIVE
remarks:      Registration information: http://www.verisigninc.com

created:      1985-01-01
changed:      2023-12-07
source:       IANA

# whois.verisign-grs.com

   Domain Name: REPUBLICOFKOFFEE.COM
   Registry Domain ID: 2582024072_DOMAIN_COM-VRSN
   Registrar WHOIS Server: whois.namecheap.com
   Registrar URL: http://www.namecheap.com
   Updated Date: 2024-01-11T02:08:15Z
   Creation Date: 2021-01-01T17:33:07Z
   Registry Expiry Date: 2025-01-01T17:33:07Z
   Registrar: NameCheap, Inc.
   Registrar IANA ID: 1068
   Registrar Abuse Contact Email: abuse@namecheap.com
   Registrar Abuse Contact Phone: +1.6613102107
   Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
   Name Server: NS1.BRAINYDNS.COM
   Name Server: NS2.BRAINYDNS.COM
   DNSSEC: unsigned
   URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/
>>> Last update of whois database: 2024-09-07T10:03:58Z <<<

# whois.namecheap.com

Domain name: republicofkoffee.com
Registry Domain ID: 2582024072_DOMAIN_COM-VRSN
Registrar WHOIS Server: whois.namecheap.com
Registrar URL: http://www.namecheap.com
Updated Date: 2024-01-11T02:08:15.56Z
Creation Date: 2021-01-01T17:33:07.00Z
Registrar Registration Expiration Date: 2025-01-01T17:33:07.00Z
Registrar: NAMECHEAP INC
Registrar IANA ID: 1068
Registrar Abuse Contact Email: abuse@namecheap.com
Registrar Abuse Contact Phone: +1.9854014545
Reseller: NAMECHEAP INC
Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
Registry Registrant ID: 
Registrant Name: Redacted for Privacy
Registrant Organization: Privacy service provided by Withheld for Privacy ehf
Registrant Street: Kalkofnsvegur 2 
Registrant City: Reykjavik
Registrant State/Province: Capital Region
Registrant Postal Code: 101
Registrant Country: IS
Registrant Phone: +354.4212434
Registrant Phone Ext: 
Registrant Fax: 
Registrant Fax Ext: 
Registrant Email: 744b407022364a2f8212bb43b0f7edf8.protect@withheldforprivacy.com
Registry Admin ID: 
Admin Name: Redacted for Privacy
Admin Organization: Privacy service provided by Withheld for Privacy ehf
Admin Street: Kalkofnsvegur 2 
Admin City: Reykjavik
Admin State/Province: Capital Region
Admin Postal Code: 101
Admin Country: IS
Admin Phone: +354.4212434
Admin Phone Ext: 
Admin Fax: 
Admin Fax Ext: 
Admin Email: 744b407022364a2f8212bb43b0f7edf8.protect@withheldforprivacy.com
Registry Tech ID: 
Tech Name: Redacted for Privacy
Tech Organization: Privacy service provided by Withheld for Privacy ehf
Tech Street: Kalkofnsvegur 2 
Tech City: Reykjavik
Tech State/Province: Capital Region
Tech Postal Code: 101
Tech Country: IS
Tech Phone: +354.4212434
Tech Phone Ext: 
Tech Fax: 
Tech Fax Ext: 
Tech Email: 744b407022364a2f8212bb43b0f7edf8.protect@withheldforprivacy.com
Name Server: ns1.brainydns.com
Name Server: ns2.brainydns.com
DNSSEC: unsigned
URL of the ICANN WHOIS Data Problem Reporting System: http://wdprs.internic.net/
>>> Last update of WHOIS database: 2024-09-06T11:57:37.57Z <<<
```

All of this information should be enough to address the questions in this task. 

#### Answers
> What is the name of the company the domain was registered with?
> 
> Namecheap Inc
{: .prompt-info }

> What phone number is listed for the registration company? (do not include country code or special characters/spaces)
> 
> 9854014545
{: .prompt-info }

> What is the first nameserver listed for the site?
> 
> ns1.brainydns.com
{: .prompt-info }

> What is listed for the name of the registrant?
> 
> redacted for privacy
{: .prompt-info }

> What country is listed for the registrant?
> 
> Iceland
{: .prompt-info }

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
Just like description advises, I am going to [archive.org](https://archive.org/) and looking for republicofkoffee.com in the Wayback Machine. There are a lot of snapshots dating from 2021 to 2024, and some from end of 2015 to 2016:

![Wayback Machine](/assets/img/posts/tryhackme-webosint/wayback.png)
_Wayback Machine snapshots_

Usually, I go for the oldest snapshots as the newer snapshots may lead to the same blank page. Here is a snapshot from 2015 Dec 31 - [link](https://web.archive.org/web/20151231104520/http://www.republicofkoffee.com/)

This snapshot leads to a Wordpress blog:

![republicofkoffee_1](/assets/img/posts/tryhackme-webosint/republicofkoffee_1.png)
_2015 December 31 snapshot #1_

![republicofkoffee_2](/assets/img/posts/tryhackme-webosint/republicofkoffee_2.png)
_2015 December 31 snapshot #2_

Let's open one of the posts for additional details:

![republicofkoffee_post_1](/assets/img/posts/tryhackme-webosint/republicofkoffee_post_1.png)
_"Cafe Zorba, Chosun University area" Post_


This post is enough to answer the questions for this task, so let's get into it. Just a quick note - for the last one, I had to search "*{city}* national park temple" on Google.

#### Answers
> What is the first name of the blog's author?
> 
> Steve
{: .prompt-info }

> What city and country was the author writing from?
> 
> Gwangju, South Korea
{: .prompt-info }

> [Research] What is the name (in English) of the temple inside the National Park the author frequently visits?
>
> Jeungsimsa Temple
{: .prompt-info }

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
I went to [ViewDNS.info](https://ViewDNS.info/) and, at first, used IP History lookup. Here are the oldest 5 IP addresses:
| IP Address        | Location      | IP Address Owner        | Last seen on this IP |
|-------------------|---------------|-------------------------|----------------------|
| 99.83.154.118     | United States | AMAZON-02               | 2022-02-09           |
| 192.64.119.238    | United States | NAMECHEAP-NET           | 2022-01-01           |
| 69.64.147.10      | United States | RIGHTSIDE               | 2017-07-30           |
| 173.248.188.152   | United States | WEHOSTWEBSITES-COM      | 2016-10-03           |
| 173.248.187.2     | United States | WEHOSTWEBSITES-COM      | 2016-02-01           |

Since the questions in this task ask about IP used in October 2016, let's lookup other domains with `173.248.188.152` using Reverse IP Lookup. It returned 74 domains which leads to the conclusion that the IP is shared rather than dedicated. 


#### Answers
> What was RepublicOfKoffee.com's IP address as of October 2016?
> 
> 173.248.188.152
{: .prompt-info }

> Based on the other domains hosted on the same IP address, what kind of hosting service can we safely assume our target uses?
> 
> shared
{: .prompt-info }

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

% IANA WHOIS server
% for more information on IANA, visit http://www.iana.org
% This query returned 1 object

refer:        whois.verisign-grs.com

domain:       NET

organisation: VeriSign Global Registry Services
address:      12061 Bluemont Way
address:      Reston VA 20190
address:      United States of America (the)

contact:      administrative
name:         Registry Customer Service
organisation: VeriSign Global Registry Services
address:      12061 Bluemont Way
address:      Reston VA 20190
address:      United States of America (the)
phone:        +1 703 925-6999
fax-no:       +1 703 948 3978
e-mail:       info@verisign-grs.com

contact:      technical
name:         Registry Customer Service
organisation: VeriSign Global Registry Services
address:      12061 Bluemont Way
address:      Reston VA 20190
address:      United States of America (the)
phone:        +1 703 925-6999
fax-no:       +1 703 948 3978
e-mail:       info@verisign-grs.com

nserver:      A.GTLD-SERVERS.NET 192.5.6.30 2001:503:a83e:0:0:0:2:30
nserver:      B.GTLD-SERVERS.NET 192.33.14.30 2001:503:231d:0:0:0:2:30
nserver:      C.GTLD-SERVERS.NET 192.26.92.30 2001:503:83eb:0:0:0:0:30
nserver:      D.GTLD-SERVERS.NET 192.31.80.30 2001:500:856e:0:0:0:0:30
nserver:      E.GTLD-SERVERS.NET 192.12.94.30 2001:502:1ca1:0:0:0:0:30
nserver:      F.GTLD-SERVERS.NET 192.35.51.30 2001:503:d414:0:0:0:0:30
nserver:      G.GTLD-SERVERS.NET 192.42.93.30 2001:503:eea3:0:0:0:0:30
nserver:      H.GTLD-SERVERS.NET 192.54.112.30 2001:502:8cc:0:0:0:0:30
nserver:      I.GTLD-SERVERS.NET 192.43.172.30 2001:503:39c1:0:0:0:0:30
nserver:      J.GTLD-SERVERS.NET 192.48.79.30 2001:502:7094:0:0:0:0:30
nserver:      K.GTLD-SERVERS.NET 192.52.178.30 2001:503:d2d:0:0:0:0:30
nserver:      L.GTLD-SERVERS.NET 192.41.162.30 2001:500:d937:0:0:0:0:30
nserver:      M.GTLD-SERVERS.NET 192.55.83.30 2001:501:b1f9:0:0:0:0:30
ds-rdata:     37331 13 2 2f0bec2d6f79dfbd1d08fd21a3af92d0e39a4b9ef1e3f4111fff282490da453b

whois:        whois.verisign-grs.com

status:       ACTIVE
remarks:      Registration information: http://www.verisigninc.com

created:      1985-01-01
changed:      2023-11-08
source:       IANA

# whois.verisign-grs.com

   Domain Name: HEAT.NET
   Registry Domain ID: 4878759_DOMAIN_NET-VRSN
   Registrar WHOIS Server: whois.godaddy.com
   Registrar URL: http://www.godaddy.com
   Updated Date: 2024-01-30T14:02:40Z
   Creation Date: 1997-02-03T05:00:00Z
   Registry Expiry Date: 2025-02-04T05:00:00Z
   Registrar: GoDaddy.com, LLC
   Registrar IANA ID: 146
   Registrar Abuse Contact Email: abuse@godaddy.com
   Registrar Abuse Contact Phone: 480-624-2505
   Domain Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited
   Domain Status: clientRenewProhibited https://icann.org/epp#clientRenewProhibited
   Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
   Domain Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited
   Name Server: NS1.HEAT.NET
   Name Server: NS2.HEAT.NET
   DNSSEC: unsigned
   URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/
>>> Last update of whois database: 2024-09-07T17:23:59Z <<<

# whois.godaddy.com

Domain Name: HEAT.NET
Registry Domain ID: 4878759_DOMAIN_NET-VRSN
Registrar WHOIS Server: whois.godaddy.com
Registrar URL: https://www.godaddy.com
Updated Date: 2024-01-30T09:02:39Z
Creation Date: 1997-02-03T00:00:00Z
Registrar Registration Expiration Date: 2025-02-04T00:00:00Z
Registrar: GoDaddy.com, LLC
Registrar IANA ID: 146
Registrar Abuse Contact Email: abuse@godaddy.com
Registrar Abuse Contact Phone: +1.4806242505
Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
Domain Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited
Domain Status: clientRenewProhibited https://icann.org/epp#clientRenewProhibited
Domain Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited
Registry Registrant ID: Not Available From Registry
Registrant Name: Registration Private
Registrant Organization: Domains By Proxy, LLC
Registrant Street: DomainsByProxy.com
Registrant Street: 100 S. Mill Ave, Suite 1600
Registrant City: Tempe
Registrant State/Province: Arizona
Registrant Postal Code: 85281
Registrant Country: US
Registrant Phone: +1.4806242599
Registrant Phone Ext:
Registrant Fax: 
Registrant Fax Ext:
Registrant Email: Select Contact Domain Holder link at https://www.godaddy.com/whois/results.aspx?domain=HEAT.NET
Registry Admin ID: Not Available From Registry
Admin Name: Registration Private
Admin Organization: Domains By Proxy, LLC
Admin Street: DomainsByProxy.com
Admin Street: 100 S. Mill Ave, Suite 1600
Admin City: Tempe
Admin State/Province: Arizona
Admin Postal Code: 85281
Admin Country: US
Admin Phone: +1.4806242599
Admin Phone Ext:
Admin Fax: 
Admin Fax Ext:
Admin Email: Select Contact Domain Holder link at https://www.godaddy.com/whois/results.aspx?domain=HEAT.NET
Registry Tech ID: Not Available From Registry
Tech Name: Registration Private
Tech Organization: Domains By Proxy, LLC
Tech Street: DomainsByProxy.com
Tech Street: 100 S. Mill Ave, Suite 1600
Tech City: Tempe
Tech State/Province: Arizona
Tech Postal Code: 85281
Tech Country: US
Tech Phone: +1.4806242599
Tech Phone Ext:
Tech Fax: 
Tech Fax Ext:
Tech Email: Select Contact Domain Holder link at https://www.godaddy.com/whois/results.aspx?domain=HEAT.NET
Name Server: NS1.HEAT.NET
Name Server: NS2.HEAT.NET
DNSSEC: unsigned
URL of the ICANN WHOIS Data Problem Reporting System: http://wdprs.internic.net/
>>> Last update of WHOIS database: 2024-09-07T17:24:10Z <<<
```



#### Answers
> What is the second nameserver listed for the domain?
> 
> xxx
{: .prompt-info }

> What IP address was the domain listed on as of December 2011?
> 
> xxx
{: .prompt-info }

> Based on domains that share the same IP, what kind of hosting service is the domain owner using?
> 
> xxx
{: .prompt-info }

> On what date did was the site first captured by the internet archive? (MM/DD/YY format)
> 
> xxx
{: .prompt-info }

> What is the first sentence of the first body paragraph from the final capture of 2001?
> 
> xxx
{: .prompt-info }

> Using your search engine skills, what was the name of the company that was responsible for the original version of the site? 
> 
> xxx
{: .prompt-info }

> What does the first header on the site on the last capture of 2010 say?
> 
> xxx
{: .prompt-info }

---
### Task 6: Taking A Peek Under The Hood Of A Website
#### Description

#### Process

#### Answers

---
### Task 7: Final Exam: Connect the Dots
#### Description

#### Process

#### Answers

---
### Task 8: Debriefing
#### Description

#### Process

#### Answers

---
### Task 9: Wrap-up
#### Description

#### Process

#### Answers
