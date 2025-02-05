---
title: 'Applescript to Generate Strong Passwords'
date: 2025-01-07T09:24:47-08:00
tags: ["Code","AppleScript"]
type: post
summary: "If you're a Mac user and need to generate unique strong passwords (you're not using the same password over and over, right? RIGHT!?!), give this AppleScript a try."
description: "If you're a Mac user and need to generate unique strong passwords, give this AppleScript a try."
---

I'd totally forgotten about this resource until I needed to create a strong password this morning.

If you're a Mac user and need to generate unique strong passwords (you're not using the same password over and over, right? RIGHT!?!), give this AppleScript a try.

It works especially well with [FastScripts](https://redsweater.com/fastscripts/) by [Daniel Jaklut](https://micro.blog/danielpunkass).

```applescript
property allowedCharacters : {33, 35, 36, 37, 38, 42, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122}
property givenPasswordLength : 21 -- sets the preferred password length

repeat while true
	try
		set givenPasswordLength to text returned of (display dialog "Enter desired password length:" with title "Password Generator" default answer givenPasswordLength)
		set givenPasswordLength to givenPasswordLength as integer
		if givenPasswordLength is not greater than 0 then error "Please enter a valid positive integer."
		exit repeat
	on error errMsg
		display alert "Error" message errMsg as warning
		return
	end try
end repeat

repeat while true
	try
		set generatedPassword to generatePassword()
		set dialogResult to (display dialog "New generated password:" & return & return & generatedPassword with title "Password Generator" buttons {"Cancel", "Refresh", "Copy"} default button "Copy" cancel button "Cancel")
		if button returned of dialogResult is "Copy" then
			set the clipboard to generatedPassword as string
			exit repeat
		else if button returned of dialogResult is "Cancel" then
			exit repeat
		end if
	on error errMsg
		display alert "Error" message errMsg as warning
		return
	end try
end repeat

on generatePassword()
	set generatedPassword to ""
	repeat givenPasswordLength times
		set randomCharacterPosition to random number from 1 to count allowedCharacters
		set generatedPassword to generatedPassword & (ASCII character item randomCharacterPosition of allowedCharacters)
	end repeat
	return generatedPassword
end generatePassword
```
