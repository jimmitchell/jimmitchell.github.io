---
title: "mnml Theme v2.8.15 Released"
date: "2026-09-12T09:03:12-07:00"
categories: ["Posts"]
---
I've not given **mnml** much love for a while and a handful of needed fixes have piled up. The latest version (v2.8.15) is now out, and here's what's corrected in this release...

### The Mobile Menu

The mobile menu had a shift to it that always bugged me — open it, and the page behind would jump. Turns out the nav was getting pulled out of the page layout when the menu opened, which collapsed the header and yanked everything below it up. The page could also keep scrolling behind the open menu, so closing it would land you somewhere other than where you started. Both are sorted now, along with better keyboard and screen reader handling: focus stays in the menu while it's open, and Escape closes it.

### Search

Search results were being rendered in a way that would run any markup in a post title. If you use search on your site, this one's worth updating for.

### Older and Newer Links

Post navigation used to dead-end at New Year… Micro.blog stores posts in per-year folders, which Hugo treats as separate sections, so the last post of a year had no Newer link and the first post of the next had no Older. The chain runs straight through now.

### Accessibility and Translations

- A skip-to-content link
- A focus outline on the archive year filter
- An accessible name on the back-to-top button
- Smooth scrolling now respects reduced-motion preferences
- Archive month headings are finally localized — they'd been showing English on every translated site. New strings added across all twelve languages.

**And a small one:** a brand new blog with no posts yet no longer renders "© - 2026" in the footer.

As always, you can upgrade through your plugins listing at your convenience. A full list of changes can be found [here](https://github.com/jimmitchell/mnml/compare/2.8.6...2.8.15).

Report any issues you run into by [email](mailto:hello@jimmitchell.org).

Enjoy!
