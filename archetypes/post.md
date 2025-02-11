---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: {{ .Date }}
summary: ""
description: ""
tags: [""]
url: "/{{ .File.ContentBaseName }}/"
type: post
draft: true
---
