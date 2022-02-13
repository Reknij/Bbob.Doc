---
title: Plugin Helper
date: 2022-02-13 13:01:54Z
categories:
    - Plugin
---
# Introduction
PluginHelper is the most important tool for developing plugins.

## PluginHelper.registerObject()
You can register object via this function.
```
string message = "Hello, World";
PluginHelper.registerObject("msg", message);
```
Registered object can via `PluginHelper.getRegisteredObject<T>()` to get it.

## PluginHelper.getRegisteredObject<T>()
You can get object via this function.
```
if (PluginHelper.getRegisteredObject<string>("msg", out string? message) && message != null)
{
    Console.WriteLine(message);
}
```

## PluginHelper.modifyRegisteredObject<T>()
You can modify object via this function.
```
if (PluginHelper.modifyRegisteredObject<string>("msg", (ref string? message)=>{
    message = "Hello, Jinker!";
});
if (PluginHelper.getRegisteredObject<string>("msg", out string? newMessage) && newMessage != null)
{
    Console.WriteLine(newMessage);
}
```

## PluginHelper.getPluginJsonConfig<T>()
You can modify object via this function.
```
public class Config
{
    public string? msg{get;set;}
}
if (PluginHelper.getPluginJsonConfig<Config>("pluginName", out Config? config) && config != null)
{
    if (config.msg != null)
    {
        Console.WriteLine(config.msg);
    }
}
```

## PluginHelper.savePluginJsonConfig<T>()
You can modify object via this function.
```
public class Config
{
    public string? msg{get;set;}
}
Config config = new Config();
config.msg = "Hello, World!";
PluginHelper.savePluginJsonConfig<Config>("pluginName", config);
```

## Sort functions
To sort the articles, categories and tags. You can change them with your custom function. They is delegates.

### Sort articles
```
PluginHelper.sortArticles = (LinkInfo article1, LinkInfo article2)=>{
    ...
}
```

### Sort categories
```
PluginHelper.sortCategories = (KeyValuePair<string, List<LinkInfo>> category1, KeyValuePair<string, List<LinkInfo>> category2)=>{
    ...
}
```

### Sort tags
```
PluginHelper.sortTags = (KeyValuePair<string, List<LinkInfo>> tag1, KeyValuePair<string, List<LinkInfo>> tag2)=>{
    ...
}
```