---
title: "Using Phosphor Icons for Micro.blog Navigation"
date: "2025-05-26T11:24:11-07:00"
---
This post walks through how I'm using Phosphor icons for the Mastodon, Github and Search navigation links on my blog using the <strong>mnml</strong> theme.<!--more-->

While <strong>mnml</strong> supports the use of icons in page and navigation titles now, I wanted to use only icons when browsed on desktop screens, but use the actual page title links without icons for the mobile responsive menu...

<figure>
<img src="/media/2025/sitemenu.png" alt="A webpage menu bar features the name 'Jim Mitchell' alongside links labeled 'Now,' 'Projects,' 'Photos,' 'Archive,' and icons for social media and search functions." title="SiteMenu.png" border="0" width="700" height="119" />
<img src="/media/2025/8cbc86d7b6.jpg" width="600" height="600" alt="Auto-generated description: A smartphone displaying a minimalist website menu against a vibrant, colorful background." >
<figcaption>Desktop navigation with icons, mobile navigation with links.</figcaption>
</figure>

<h3>First, the Disclaimers...</h3>

This method <em>might</em> work for other themes. I haven't tested it nor can I support other themes.

With some tweaks, you could probably use the <a href="https://micro.blog/account/plugins/view/74">Font Awesome Plugin</a> for your icons instead. This tutorial doesn't cover that.

Before you publish my code to your live site, I <strong>very strongly</strong> encourage you to try it out on your Micro.blog test site first. I can't be held responsible for anything breaking.

Also, <strong>don't</strong> change your theme styles directly. It's best to use the Micro.blog Custom CSS option to apply styles.

<h3>Let's Do This!</h3>

The first step is to decide which Phosphor Icons for Micro.blog set you want to use. My example uses the "<a href="https://micro.blog/account/plugins/view/150">Regular</a>" set.

You should also get the Unicode values of the icons you want to use from the <a href="https://phosphoricons.com/">Phosphor Icons website</a> in advance. See comments in the code below about using Unicode values.

<figure>
<img src="/media/2025/mastodonunicode.png" alt="A user interface displays various options for hte Phosphor Mastodon icon with the Unicode value highlighted." title="MastodonUnicode.png" border="0" width="700" height="100" />
<figcaption>Note the circled "U+ED68" Unicode value for the Mastodon icon. These are what you want.</figcaption>
</figure>

The next step is to create your pages and get their url. In this example, I've created a Mastodon page with redirect.

<figure>
<img src="/media/2025/pageredirect.png" alt="A webpage interface shows options for redirecting to a Mastodon page with a checkbox to include the page in blog navigation." title="PageRedirect.png" border="0" width="700" height="216" />
<figcaption>Note the "/mastodon" url and that I've included the page in my blog navigation. I've done the same for a Github redirect and the local Search page.</figcaption>
</figure>

With all the pages I want to use icons for published, knowing their urls, and having icon Unicode values, the final step is to add this CSS to my Micro.blog Custom CSS.

Follow along with the comments in the styles to understand what each declaration does. You should be changing the ``a[href$="/url/"]`` selectors to match your own urls.

```css
/* first, let's move the actual nav links off page way to the left */
.nav-item a[href$="/mastodon/"],
.nav-item a[href$="/github/"],
.nav-item a[href$="/search/"] {
	text-indent: -9999px;
	display: inline-block;
	line-height: 1;
}

/* add icons to the ":after" pseudo element, set their text indent to 0 */
.nav-item a[href$="/mastodon/"]:after,
.nav-item a[href$="/github/"]:after,
.nav-item a[href$="/search/"]:after {
	color: var(--accent-3);
	font-family: "Phosphor"; /* Note: the font family will be different based on which plugin you use */
	text-indent: 0;
	display: flex;
	justify-content: flex-end;
	margin-left: auto;
	line-height: 0;
}

/* adjust icon left margins after the first icon to look better */
.nav-item > a[href$="/github/"],
.nav-item > a[href$="/search/"] {
	margin-left: -.75rem;
}

/* remove text underline on hover for desktop because it just doesn't look right to me. */
.nav-item > a[href$="/mastodon/"]:hover,
.nav-item > a[href$="/github/"]:hover,
.nav-item > a[href$="/search/"]:hover {
	text-decoration: none;
}

/*
Set the element "content" to the font unicode from the Phosphor icon site.
To get this, find the "U+XXXX" value of the icon and use the "XXXX" value.
Example: "U+ED68" for the Mastodon icon is equal to "\ed68" for content.
Refer to the Mastodon screenshot above.
*/
.nav-item a[href$="/mastodon/"]:after {
  content: "\ed68";
}
.nav-item a[href$="/github/"]:after {
  content: "\e576";
}
.nav-item a[href$="/search/"]:after {
	content: "\e30c";
}

/* use specific brand colors on hover, because it looks better */
.nav-item a[href$="/mastodon/"]:hover:after {
	color: #563acc;
}
.nav-item a[href$="/github/"]:hover:after {
	color: #08872b;
}
.nav-item a[href$="/search/"]:hover:after {
  color: var(--link-hover);
}

/* use specific brand colors on hover in dark mode, because it looks even better */
@media (prefers-color-scheme: dark) {
	.nav-item a[href$="/mastodon/"]:hover:after {
		color: #858afa;
	}
	.nav-item a[href$="/github/"]:hover:after {
		color: #5fed83;
	}
}

/*
finally, for the mobile responsive main menu,
remove the icons and "unhide" the navigation link text.
*/
@media only screen and (max-width: 768px) {
	.nav-item a[href$="/mastodon/"],
	.nav-item a[href$="/github/"],
	.nav-item a[href$="/search/"] {
		text-indent: 0;
		display: block;
		margin: 0;
	}
	.nav-item a[href$="/mastodon/"]:after,
	.nav-item a[href$="/github/"]:after,
	.nav-item a[href$="/search/"]:after {
		content: "";
	}
	
	/* add link text-underline back since we're not using icons anymore */
	.nav-item > a[href$="/mastodon/"]:hover,
	.nav-item > a[href$="/github/"]:hover,
	.nav-item > a[href$="/search/"]:hover {
		text-decoration: underline;
	}
}
```
That's all there is to it.

The styles may look scary, but they're not really.

I'm happy to answer questions, but hope you can understand if I decline to write or tweak styles for your specific needs. Use my <a href="/contact/">contact page</a> to get in touch with questions.

Of course, if you <em>really</em> wanted me to write code for you, I might be convinced should you decide to <a href="https://buymeacoffee.com/jim.mitchell">buy me a coffee</a> or two...or three. Or maybe you decide what it's worth to you. 😁

Happy style hacking!
