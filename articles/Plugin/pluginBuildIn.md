---
title: Build-In Plugins
date: 2022-02-13 14:12:37Z
---
# Introduction
Bbob will run build-in plugins first.

# Enable and Sort order by plugins
Build-in plugins default is no need sort order. It is compatible. But you want order or remove build-in plugin can go `config.buildInPlugins` settle.

# Build-In plugins
Bbob have build-in plugins to process data.
## MarkdownParser
To parse the .md file and register data to PluginHelper. Will register "markdown", "getYamlObject" and "linkInfo".

### `getYamlObject`:
This is function to get yaml from the current file.
```
public class Yaml
{
    public string? msg{get;set;}
}
PluginHelper.getRegisteredObject<Func<Type, object?>>("getYamlObject", out var getYamlObject)
if (getYamlObject != null)
{
    var y = getYamlObject(Yaml) as Yaml;
}
```

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
if target data null will no save to json file. etc toc is null:
```
{
    "title": "Hi",
    "date": "2022-02-13 12:11:00Z",
    "categories": [],
    "tags": [],
    "contentParsed": "",
}
```

## SortData
Will sort order about articles, categories and tags.
### Config
Can set the config `./configs/SortData.config.json`:
```
{
    "articles": [
        "Hello",
        "Hi",
        "God"
    ],
    "tags": [
        "tag1",
        "tag2"
    ]
}
```
It will sort by order in config.

Article with filename without extension `Hello` will first one.

Tags first element is `tag1`. If have tag no match in array, will let match success tag improve.

Categories will default sort.

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