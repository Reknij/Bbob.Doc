---
title: Configuration
date: 2022-02-12 22:37:33Z
categories:
    - Basic
---
# Config.json
When run the command `init`, it will create the default config to config.json file in the current path of Bbob.

Look like:
```
{
    "theme": "default",
    "author": "Jinker",
    "description": "Nothing description...",
    "about": "Nothing about...",
    "blogName": "Bbob - Serverless Blog Framework",
    "blogCountOneTime": 10,
    "recursion": false,
    "buildInPlugins": [
        "BuildWebArticleJson",
        "MarkdownParser",
        "SortData"
    ]
}
```

# Configuration
## Theme
Default theme is `default`, change to you want. Please make sure theme exists.

## Author
Write your name to:
```
"author": "Mr.Handsome"
```

## Description
Write description about your blog:
```
"description": "I so happy to write blogs."
```

## About
Write about message for your blog.
```
"about": "My blog is powered by Bbob."
```

## Blog name
Change the blog name to you want.
```
"blogName": "Jinker's Blog"
```

## Blog count in one time
This is about your blog site showing the blog count and getting the next blog count. Minimum is 3.
```
"blogCountOneTime": 6
```

## All Link
Default is `false`. If value is `current`:
```
"allLink": "current"
```
Will save all articles into `JSApi.Bbob.blog.links`.

If value is `next`:
```
"allLink": "next"
```
Will save all articles into next file in `JSApi.Bbob.blog.nextFileLinks`. To get it via `JSApi.Bbob.api.nextLinkInfos()`.

If value no `false`, Bbob cli will ignore `config.blogCountOneTime`.

## Recursion
Enable recursive fetching of articles. Default is false.
```
"recursion": true
```

Articles path like:
```
1: ./articles/HelloWorld.md
2: ./articles/HelloJinker.md
3: ./articles/NewFolder/HelloMan.md
4: ./articles/CustomFolder/HeyBoy.md
```
Bbob will read path 1 and 2 only if value false. If value true will read all path.

## Public path
Change base url website of blog.
```
"publicPath": "/newPath"
```
browse example: 'www.baseurl.com/newPath'.

## Build-in plugins
Enabled build-in plugins and sort order
```
// Remove SortData build-in plugin. When run generation will no sorting.
"buildInPlugins": [
        "BuildWebArticleJson",
        "MarkdownParser"
    ]
```