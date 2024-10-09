---
title: 'Applescript to Add Empty Files in the macOS Finder'
date: 2011-08-12T08:20:45-07:00
type: "post"
tags: ["AppleScript","Automation","Code"]
summary: "I needed to create a bunch of txt files in a folder, but needed a way to do it quickly."
---
Today I had the need to add a bunch of named text files to a folder in the Finder on my Mac.

I found it a major pain to open BBEdit, make a new document, save it to where I wanted it, and then manually copy & rename the file back in the Finder. A lot of effort just to get 7 or 8 empty files with different names.

So, I threw together this little AppleScript to add empty files instead. The gist is once launched in the Finder (_using [FastScripts](https://redsweater.com/fastscripts) by Red Sweater naturally with keystroke: cmd+option+shift+N_), a dialog pops up that lets you enter a file title. Then the Finder creates that file in the front-most window. If no window is open, the file is added to your Desktop.

I found this to be more than twice as fast as the “traditional” method of making several files. Hopefully, it can help you out too. Remember, use it with FastScripts for quick keystroke access. Save as a script in the “Finder” scripts folder (`“~/Library/Scripts/Applications/Finder/”`).

Here’s the code. Download the source, open up and copy/paste into AppleScript Editor and save…

```applescript
property defaultFileName : "newFile.txt"
tell me to activate
set theFileName to text returned of (display dialog "Enter a file name:" default answer defaultFileName)
tell application "Finder"
    activate
    if the (count of windows) is not 0 then
        set theFolder to (folder of the front window) as text
        set theFolder to POSIX path of theFolder
    else
        set theFolder to POSIX path of (get path to desktop)
    end if
    set addedFile to (theFolder & theFileName)
    do shell script "touch '" & addedFile & "'"
    if the (count of windows) is not 0 then
        set addedFile to (POSIX file addedFile) as alias
        select addedFile
    end if
end tell
```