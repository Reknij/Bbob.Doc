---
title: Generate blog
date: 2022-02-12 22:30:40Z
categories:
    - Basic
---
# Generate
Run the command
```
//In window.
./Bbob.exe g
```
It will generate the blog with target theme. If no modify theme in config, it will use default theme.

The result is in the `dist` folder in the current path Bbob.

# Change the theme
You can change the theme in the config file `config.json` in the current path of Bbob.
```
{
    "theme": "customTheme"
}
```
<b>Please make sure target theme is exists.</b>

# Change information about blog
You can change the information in the config. Please see the document config to learn.

# Change base url
The base url is '/', may be somebody wanne change it. You can change it in the config.publicPath.
```
//config.json
{
    ...
    publicPath: '/NewPath'
    ...
}
```