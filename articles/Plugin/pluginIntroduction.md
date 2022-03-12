---
title: Plugin Introduction
date: 2022-02-13 12:11:00Z
categories:
    - Plugin
order: 1
---
# How it working
When Bbob cli run the commands, It first via build-in plugins to process, then third plugins.
## Command init
Mainly to Initialize the blog. etc. folder path, config.

## Command new <type>
Mainly new the blog, will create the article file. 

## Command generate
Mainly to generate the blog website. Must make sure `config.theme` is exists. It will run 4 stage.

## Command deploy
Mainly to deploy the blog website. Must generate first.

# Plugin Config
All plugin include build-in plugin, their config is save in `./configs/...`
```
// ./config/Hello.config.json
PluginHelper.getPluginJsonConfig<Config>("Hello", out Config? config);

// ./config/Hi.config.json
PluginHelper.getPluginJsonConfig<Config>("Hi", out Config? config);
```