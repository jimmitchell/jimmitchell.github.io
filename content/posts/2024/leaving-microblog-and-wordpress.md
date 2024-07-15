---
title: "Why I'm Leaving Micro.blog and WordPress Behind"
date: 2024-07-15T07:00:00-07:00
tags: ["Micro.blog","WordPress","Hugo","Website"]
summary: "I've chosen to move away from other platforms and begin usin Hugo with GitHub Pages to run my website."
---

I've finally pulled the trigger to begin spinning down both my Micro.blog and WordPress sites in favor of a single site (this one) published using Hugo that's deployed to GitHub Pages.

## Cost

It's time to scale back what I spend to be online as much as I can. I'm not strapped for cash, but why should I spend where I don't have to? I have the technical chops for it and understand Hugo quite well thanks to the top-notch [documentation](https://gohugo.io/documentation/), so it made sense I should consider it for a publishing workflow.

[Hugo](https://gohugo.io) is an active open source project with a really vibrant community. [GitHub Pages](https://pages.github.com) is free with super-robust infrastructure backed by Microsoft. I don't see either of them going away anytime soon, so it was a compelling reason to use the combination as a hosting solution.

Ditching Micro.blog and a self-hosted WordPress site on a dedicated VPS in favor of Hugo and GitHub Pages will end up saving me roughly $100 a year. No, it's not a lot. But every penny counts in this self-imposed challenge. Throw in the very rare $30 update for MarsEdit I won't have to pay anymore, and it adds a little extra savings.

## Reliability

Publishing my content through someone else's platform puts me at their mercy.

I really love the Micro.blog community and have met some super-awesome people because of it. But to be honest, the platform is 100% indie and has it's challenges when it comes to stability. It's frustrating when the platform goes down and takes a couple hours to recover.

I'm not knocking Manton and the rest of the team in any way. They've been wonderful to me and many other demanding Micro.blog users like me. But, I'm sometimes left with the impression of "_Oh well, it went down again_" when the system finally does recover. As someone paying for a service, this doesn't sit well with me.

Personally, I'd prefer to see efforts go towards hardening stability over introducing AI features. But that's just what I think, and it's not my platform to make the priorities for. I've gotten good use out of Micro.blog and it was the stepping stone to learn more about Hugo. Plus, did I mention the people? Yeah, the people...

WordPress was great to use in the early years. I learned how to write PHP and eventually other code because of it. Lately it's become a huge, bloated behemoth of a platform and I only see it getting worse. Don't get me started on the Gutenberg editor. That was a bad choice for the platform if ever there was one. I'm team classic editor all the way.

The only way I've been able to get decent performance out of WordPress is to run my own VPS and tune it as much as I can with aggressive caching along with Cloudflare. Then there's the security considerations of the platform. It's a lot of effort to keep it all maintained and hardened. I have the technical chops for it, but the effort is not worth the returns of a simple blog.

## Convenience

Publishing a Hugo site, I can put the content up on any web server I choose when I want to. I don't need to export from a proprietary format and convert it to another. Hugo simply outputs static HTML from Markdown. I can move that output anywhere. If I had to run my site locally from a Rasperry Pi or old MacMini for some reason, I could do that with minimal effort.

Because content is written in Markdown and stored as text files, there are no databases to worry about. Typing the simple `hugo` terminal command publishes everything for me in the blink of an eye. A few git commands in the terminal commits and publishes the output to GitHub Pages with the [deployment workflow from the Hugo documentation](https://gohugo.io/hosting-and-deployment/hosting-on-github/). It's pretty slick.

## The Cons

There's still some friction I need to get used to. Writing in a plain text editor rather than a dedicated Mac app like MarsEdit feels a little weird since I've been doing it that way for so many years.

This post was written using iA Writer. Once I'm happy with it, I'll copy it to my Hugo project's post folder. With iA Writer, thanks to iCloud, I can write pretty much anywhere I want, including my phone. I couldn't write from my phone with MarsEdit.

The only real challenge is being able to publish a post from anywhere, like I could with Micro.blog and WordPress. Instead, I have to publish from a single machine where my Github project is kept. I think I'm okay with that. It forces me to take the time to write, proof, edit, and re-edit my content before publishing it.

I've enjoyed my time on Micro.blog and WordPress, but I think it's time for a new beginning publishing with Hugo.

Tell me your thoughts on [Mastodon](https://mastodon.social/@jimmitchell/112792227346102025).