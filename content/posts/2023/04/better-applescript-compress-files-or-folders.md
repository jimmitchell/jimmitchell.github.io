---
title: 'A Better Applescript Compress Files or Folders'
date: 2023-04-14T09:24:09-07:00
tags: ["AppleScript","Automation","Code"]
type: post
summary: "I had the need to select several folders at once in the Mac OS Finder and zip them up as individual archives. This AppleScript was the solution I came up with."
---
A while ago, I created a simple AppleScript to compress files and folders by simply dropping them onto the applet. One of the readers left a comment asking for a way to achieve the following tasks:

> 1. Select a folder from Finder.
> 2. Store the folder name as “x”.
> 3. Compress all files and sub-folders within the folder “x”, including their paths.
> 4. Rename the resulting zip file as “x.zip”.
> 5. Delete all the files that were used to create the zip file.

With the help of ChatGPT – and because I wanted to be lazy about it – I came up with this solution to the challenge, which can be a great way to manage archives if that’s important to you.

I'll admit that ChatGPT did a decent job generating the AppleScript, but there were some bugs I had to fix manually. Nevertheless, it’s both scary and exciting to have a tool that can generate usable code.

As always, you can run this script using [FastScripts](https://readsweater.com/fastscripts) from your menu bar for quick and easy access.

```applescript
-- choose files or folders to archive since AppleScript can't seem to allow both at once...
set archiveOption to button returned of (display dialog "Archive files or folders?" buttons {"Cancel", "Folders", "Files"} default button 3)

-- now let's choose what we want to archive...
if archiveOption is "Files" then
    set selectedItems to choose file with prompt "Select files you want to compress:" with multiple selections allowed
else if archiveOption is "Folders" then
    set selectedItems to choose folder with prompt "Select folders you want to compress:" with multiple selections allowed
else if archiveOption is "Cancel" then
    return
end if

-- set the array of files or folders selected...
if the selectedItems is {} then
    return
else if (selectedItems count) is equal to 1 then
    set thePathFilename to the quoted form of POSIX path of (selectedItems as string)
else
    set thePathFilename to {}
    repeat with i from 1 to (selectedItems count)
        copy (quoted form of POSIX path of (item i of selectedItems as string)) & space to end of thePathFilename
    end repeat
    set thePathFilename to thePathFilename as string
end if

-- coerce a date string for the archive name
set currentDate to current date
set yearStr to year of currentDate as string
set monthStr to (month of currentDate as integer) as string
if length of monthStr = 1 then set monthStr to "0" & monthStr
set dayStr to day of currentDate as string
if length of dayStr = 1 then set dayStr to "0" & dayStr
set currentDateStr to yearStr & "-" & monthStr & "-" & dayStr

-- next, let's name our archive, which defaults to "Archive" & the currentDateStr we just coerced
set archiveName to text returned of (display dialog "Enter a name for your archive:" default answer "Archive " & currentDateStr buttons {"Cancel", "OK"} default button 2)

-- then, let's choose where to save the archive and compress it with the shell "zip" command
set archiveFile to POSIX path of (choose folder with prompt "Choose a location to save the archive:")
do shell script "cd " & quoted form of archiveFile & " && zip -r " & quoted form of archiveName & ".zip " & thePathFilename

-- finally, let's delete the files we just archived if we decide we don't need them around anymore.
set deleteFiles to button returned of (display dialog "Do you want to delete the original files?" buttons {"Yes", "No"} default button 2)
set deleteOption to false
if deleteFiles is "Yes" then
    set deleteOption to true
end if
if deleteOption is equal to true then
    if selectedItems is not {} then
        set fileList to {}
        repeat with itemPath in selectedItems
            set end of fileList to quoted form of POSIX path of itemPath
        end repeat
        
        repeat with fileItem in fileList
            do shell script "rm " & fileItem
        end repeat
    end if
end if
```