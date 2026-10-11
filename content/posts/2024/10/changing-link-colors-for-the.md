---
title: "Changing Link Colors for the mnml Theme"
date: "2024-10-27T13:06:53-07:00"
---
Since this question will likely come sooner or later...

When I was developing [mnml](https://micro.blog/account/plugins/view/138), I wanted to give users the ability to set their own link colors for both light and dark modes. However, in my testing, there were challenges that would have caused colors a user set to get overwritten if I needed to release an update. So, another approach was needed.<!--more-->

If you end up using mnml yourself and want to change link colors, here's how you do it...

In your Micro.blog custom CSS settings, add the following CSS snippet, adjusting the hex colors as you like. This example gets you a nice <span style="color:#ee4692">magenta</span> color for both light and dark modes.

```css
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: light;
    --link: #ee4692;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --link: #ee4692;
  }
}
```

This lets you keep your preferred colors and lets me enhance the theme without suddenly surprising you. Win-win.
