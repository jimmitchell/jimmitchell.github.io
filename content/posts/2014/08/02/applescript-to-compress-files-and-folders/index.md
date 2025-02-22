---
title: 'AppleScript to Compress Files and Folders'
date: 2014-08-02T15:59:31-08:00
tags: ["AppleScript","Code"]
type: post
url: "/2014/08/02/applescript-to-compress-files-and-folders/"
summary: "I had the need to select several folders at once in the Mac OS Finder and zip them up as individual archives. This AppleScript to compress files and folders was the solution I came up with."
description: "I had the need to select several folders at once in the Mac OS Finder and zip them up as individual archives."
---

I had the need to select several folders at once in the Mac OS Finder and zip them up as individual archives. This AppleScript to compress files and folders was the solution I came up with.

The script compresses each item selected into its own archive, and works with both folders and files.

```applescript
tell application "Finder"
	set theList to selection
	repeat with i from 1 to (count of theList)
		set theItem to (item i of theList) as alias
		set itemPath to quoted form of POSIX path of theItem
		set fileName to name of theItem
		set theFolder to POSIX path of (container of theItem as alias)
		set zipFile to quoted form of (theFolder & fileName & ".zip")
		do shell script "zip -jr " & zipFile & " " & itemPath
	end repeat
end tell
```

As always, you’ll get the best results when used with [FastScripts](http://www.red-sweater.com/fastscripts/) by [Red Sweater Software](http://www.red-sweater.com/).