---
title: "mnml Theme Update - Photos Page Redux"
date: "2025-01-17T06:00:34-07:00"
url: "/2025/01/17/mnml-theme-update-photos-page/"
---
Hot on the tail of [yesterday's **mnml** update](/2025/01/16/mnml-theme-update-photos-page/), I've released another update (v2.2.1) that better handles the loading and resizing of images when changing the size of your browser window.

Go to your Micro.blog plugins page to update.

Also, if you'd like the photo grid to *not quite* be full width, here's a trick to make it just a little narrower, like [I'm doing on my photos page](/photos/). After setting the full width photos page option, add this CSS snippet to your Micro.blog Custom CSS (Design > Open Theme > Custom CSS) and save it...

```css
main.photos-wide {
    max-width: 80rem;
}
```
That's it. Adjust the max-width value to your liking. You can use either "px" or "rem" values. 1rem equals 10px in this theme, so 80rem is equal to 800px in the example above.

Other ideas are in the works. Keep an eye out if you're using **mnml**... 🤓
