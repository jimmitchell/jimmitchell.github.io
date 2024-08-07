---
title: 'Applescript to Toggle the Desktop'
date: 2010-10-16T19:53:10-07:00
tags: ['AppleScript','Code']
summary: "An AppleScript I use to quickly toggle desktop visibility for taking screenshots and recording screencasts that I thought might be useful for others."
---
Here’s an AppleScript I use to quickly toggle desktop visibility for taking screenshots and recording screencasts that I thought might be useful for others.

Copy the source below and paste the code into your AppleScript editor of choice, compile and save. As always, scripts like this work best using [FastScripts](http://www.red-sweater.com/fastscripts/) from Red Sweater Software.

```applescript	
tell application "System Events"
	set frontMostApp to name of the first process whose frontmost is true
end tell
try
	set theDefault to ((do shell script "defaults read com.apple.finder CreateDesktop") as integer) as boolean
on error -- if the default value doesn't already exist, create it.
	do shell script "defaults write com.apple.finder CreateDesktop 1"
	set theDefault to ((do shell script "defaults read com.apple.finder CreateDesktop") as integer) as boolean
end try
do shell script "defaults write com.apple.finder CreateDesktop " & (((not theDefault) as integer) as string)
tell application "Finder" to quit
delay 1
tell application "Finder" to launch
tell application frontMostApp to activate
```	

_Note: This single script turns off the desktop if it’s on, and turns it on if it’s off - just to clear up the question should it need to be asked._