---
title: Build-In Plugins
date: 2022-02-13 14:12:37Z
categories:
    - Plugin
order: 4
---
# Introduction
Bbob will run build-in plugins first.

# Enable and Sort order by plugins
Build-in plugins default is no need sort order. It is compatible. But you want order or remove build-in plugin can go `config.buildInPlugins` settle.

# Build-In plugins
Bbob have build-in plugins to process data.
## MarkdownParser
To parse the .md file and register data to PluginHelper. Will register "markdown", "getYamlObject" and "linkInfo".

## BuildWebArticleJson
To build the article json to the web file.

Target file will be like:
```
{
    "title": "Hi",
    "date": "2022-02-13 12:11:00Z",
    "categories": [],
    "tags": [],
    "contentParsed": "",
    "toc": ""
}
```
Can set config in config file `BuildWebArticleJson.config.json`:
```
{
    "shortAddress": false
}
```
if `shortAddress` true, article json file address is short address. And meta.extra.shortAddress have the full address text.
```
//false
"address": "/bbob.assests/articles/helloWorld.ed23a19bd.json

//true
"address": "helloWorld.ed23a19bd"

//get full address with short address:
const shortAddress = Bbob.meta.extra.shortAddress; //If shortAddress is false will no set this meta.
let full = `${shortAddress.startOfAddress}${address}${${shortAddress.endOfAddress}`
```
## GitDeploy
Run by `deploy` command. Can deploy your blog with git.

First make the config file to `configs` folder. Name it `GitDeploy.config.json`.
```
// ./configs/GitDeploy.config.json
{
    "repos": "yourGitRepository",
    "branch": "yourBranch",
    "message": "commit message"
}
```
If you ignore 'branch', it will default `main`.

If you ignore 'message', it will default date time of update.

### Type
Have build-in type to process distribution.
```
// ./configs/GitDeploy.config.json
{
    "repos": "yourGitRepository",
    "branch": "yourBranch",
    "message": "commit message",
    "type": "theType"
}
```
Currently types have `github`.

## ArticleStatusDetect
If article file front matter have property `draft` and value is `True`, generate will skip this file.
```
// ./articles/hello.md
---
...
draft: true
...
---
```
If article file front matter have property `important` and value is `True`, generate will stop generation.
```
// ./articles/hello.md
---
...
important: true
...
---
```

## CopyToDist
If exists directory 'MyFiles' at your current path, generate will copy all files or directory in 'MyFiles' to distribution.

## SitemapGenerator
Generate the sitemap and add robots.txt to reference to sitemap.txt path.

sitemap.txt content is list of article address path. SitemapGenerator require theme support. Please make sure theme.json have object `articleBaseUrl`. It is address of theme web page. Example, visit `https://mydomain.com/article?address=ARTICLE_URL` will get page of article, so theme.json must set `articleBaseUrl` be `/article?address=`.

SitemapGenerator will generate list of article address, the address is get from plugin `BuildWebArticleJson`. And make sure theme support. For example, Bbob default theme url to show article is `https://mydomain.com/article?address=ARTICLE_ADDRESS_HERE`.

Example address generate from `BuildWebArticleJson` is `/bbob.assets/articles/helloWorld.ed23a19bd.json`
article address in sitemap.txt content is `domain` + `articleBaseUrl` + address:
```
//sitemap.txt
https://mydomain.com/article?address=/bbob.assets/articles/helloWorld.ed23a19bd.json
```
SitemapGenerator will replace url to redirect url in sitemap.txt, so real content in sitemap.txt will like this:
```
//sitemap.txt
https://mydomain.com/?/article&address=/bbob.assets/articles/helloWorld.ed23a19bd.json
```
And then SitemapGenerator will insert script to index.html it will auto replace redirect url to real url. This is because seo of google does like 404 page. And generated blog website is single page app. Is mainly for github host.

Can off the redirect url in config:
```
// ./configs/SitemapGenerator.config.json
{
    "redirectUrl": false
}
```

Function is get from:
>https://github.com/rafgraph/spa-github-pages

## LinkProcess
Process the object 'article' to link in 'blog' object.
Will sort the articles and register object 'links' sorted.

You can set `order` in article file front matter.
```
---
...
order: 1
---
```
It will sort by order:
- have order article sort higher than no have order.
- compare two article order, order lower article sort higher.

## CategoryProcess
Process category from 'links' object.

Config:
```
{
    "mode": "default" // set to folder to use folder name category.
    "sort": [
        "category1",
        "category2"
    ] // sort the categories
}
```

## TagProcess
Process tag from 'links' object

Config:
```
{
    "sort": [
        "tag1",
        "tag2"
    ] // sort the tags
}
```

## ArchiveProcess
Process archive from 'links' object

## ExtraLinks
Auto register meta `extraLinks`. Will provide `Dictionary<string, object>` in generate `initialize` stage. Other plugin can add link to Dictionary.

## MarkdownStyle
To let your article have style. Can config:
```
// ./configs/MarkdownStyle.config.json
{
    "mode": "light" //or dark
}
```