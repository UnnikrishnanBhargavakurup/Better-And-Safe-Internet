#Better And Safe Internet
##Introduction

Following document is an idea for making internet safe and better for our day to day online activities. This is concept we can implement for a better and safe online experience for all internet users. 

This document is divided into three sessions. 

Issue we are trying to address
How we can make a difference?


##Issues we are trying to address

Sometime when we go through our favorite news portal we might see pictures of a dying baby or an accident which might ruin our mood, sometimes we can ignore it but sometimes it might bother for the whole day. We need a mechanism to filter out these kind of contents from the internet before we see it.

We should also make internet safe for our childrens. When they are in internet they can easily get access to sexuality explicit contents or violence. We need some way to prevent this happening to our children 

When we do shopping from commerce websites we might watching lot of products that are not at all interested to us. If the user is a men he might not be interested in seeing woman beauty products but the ecommerce provider don't have a clue about the visitor who is watching their site until he applies a filter. It would be a better shopping experience if the user can see products that are relevant to the user.

For advertiser they are showing their advisements to people without knowing what they really want. If they can figure out who is watching their ads they can give a better choice and increase the conversion rates.

When we read a blog sometimes we think it would be more easier if the contains is more comprehensive, so that we don't need to refer other websites to get more out of it. The blog site should have a mechanism to figure out the reading ability or the background of a user who is about to see their blog.

We need a mechanism to filter out irrelevant or unwanted content from the Internet by giving some preference information to the server so that the server can provide safe and better content to us.

The  preference can be what kind of content they want to filter out. What kind of content they are interested in, what is their reading ability (some kind of raking which will help the website to choose right version of the content for the user). What kind of advertisements they don’t want to see.
##How we can make a difference?

We can implement a user preference settings in browser which will send a user preference header along with the usual HTTP headers to the server. The server can respect the user preference and filter the content based on this new header.

We can add a new header as ‘Content-Filter’ with values as shown below.

Content-Filter : disturbing,violence,offensive,explicit

When server receive this header it can filter out similar content before sending the response.

We can also include more information in this header if we add the values as an integer with bit flags represents information to the server.
