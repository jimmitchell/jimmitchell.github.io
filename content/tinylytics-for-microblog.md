---
title: "Tinylytics for Micro.blog"
---
This page answers questions about my [Tinylytics for Micro.blog](https://micro.blog/account/plugins/view/101) plugin.

## Configuring the Plugin

The settings below configure different aspects of the Tinylytics for Micro.blog plugin and add the options to the embedded script if enabled. I encourage you to experiment with the different settings to see what they do.

<a href="/media/2024/tinylytics-for-micro-blog.webp" target="_blank"><img src="/media/2024/tinylytics-for-micro-blog.webp" width="700" height="443" alt="The Tinylytics for Micro.blog settings panel." loading="lazy"></a>

## What the Settings Do

* **Tinylytics Site Id** -- This is your unique site id & embed code which can be found near the bottom of your site configuration page on Tinylytics. For the plugin to work, a site id must be entered in the plugin settings.
* **Show Hits?** -- This setting enables the display of how many hits your site has recieved overall, as well as for the unique page hits when adding the shortcode to a page. More on shortcodes later.
* **Link to your public stats?** -- If you've enabled public stats in your Tinylytics site configuration, enabling this option will add a link to your public stats page. If disabled, it simply links back to the main Tinylytics site.
* **Public Stats Label** -- This lets you set custom link text if you choose to display the link to your public stats.
* **Show uptime?** -- Uptime is a premium feature for paying Tinylytics subscribers. If you have a premium membership and want to display uptime, enable this option. If you do not have a premium membership, it's recommended that you leave this option disabled.
* **Show country flags?** -- This option will display the country flags of visitors to your site in either the footer embed code or a shortcode added to a page. Again, more on shortcodes below.
* **Show Kudos?** -- Kudos allow users to leave feedback about the post or page they're viewing. Enabling this option will allow you to add the Kudo shortcode to a page or post that users can interact with. Leaving disabled will prevent Kudos from being displayed.
* **Kudos label** -- You can add a custom label to the Kudos counter as either text or an emoji. If you leave this option empty, a 👋 emoji will be shown by default.
* **Show Webring?** -- This option enables the Tinylytics webring feature that will display a link to another Indie Webring site. This is a great way to help your readers discover other blogger's content.
* **Webring label** -- You can set a custom webring lable for the link that's displayed. If nothing is set, 🕸️💍 will be displayed.
* **Show webring avatar?** -- A new feature in version 3.1 and later, this will display a webring's avatar to the left of your webring label.

## The Footer Embed Code

With the plugin installed and a site id entered at a minimum, Tinylytics for Micro.blog will track your site hits. If you want to display the stats on your site for others to see, you'll want to add the footer embed code to your Micro.blog **Custom Footer** area (Design > Edit Footer). This requires copying and pasting this code snippet and updating your footer:

```go
{{ partial "tinyhits/embed.html" (dict "context" . ) }}
```

A properly pasted embed code looks like this:

<img src="/media/2023/footer-partial-example.png" alt="Custom Footer Embed Code" style="border:1px solid #ddd;" loading="lazy" />

## Page and Post Shortcodes

If you'd like to avoid making changes to your theme template files, you can use select shortcodes instead. To add a kudos, post view counter or country flags to a post, simply add them using the following shortcodes:

```go
{{</* tinykudos */>}}
{{</* tinyhits */>}}
{{</* tinyflags */>}}
```

An example of using shortcodes looks something like this:

<img src="/media/2023/shortcode-example.png" alt="Shortcode example" title="shortcode-example.png" border="0" style="border:1px solid #ddd;" loading="lazy" />

## Making Things Look Good

The styles below are what I use on my site. You can use them as a starting point for yours. The code should be pasted in the Custom CSS area of your Micro.blog site. If you have any questions, <a href="mailto:hello@jimmitchell.org">contact me</a> through email. Remember, donating gets you priority support. 😁

```css
/* Copy and paste these style into your Micro.blog "Custom CSS" settings */

.tiny_uptime,
.tiny_counter {
	display:inline-block;
}
.tiny_uptime::before {
	content: " · ";
}
.tiny_countries {
	display: block;
	line-height:1;
	margin:15px auto 0 auto;
}
.tiny_webring {
	display:block;
}
a.tinylytics_webring {
	display:inline;
	line-height:30px;
}
.tinylytics_webring_avatar {
	border-radius: 6px;
	width: 30px;
	height: 30px;
	vertical-align: middle;
	margin-right: 6px;
	background: #fff;
}
```
