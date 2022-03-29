---
title: Generate blog
date: 2022-02-12 22:30:40Z
order: 5
---
# Generate
Run the command
```
bbob g
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
The base url is '/', may be somebody wanne change it. You can change it in the config.baseUrl.
```
//config.json
{
    ...
    baseUrl: '/NewPath'
    ...
}
```

# Deploy
Run the command generate with option deploy:
```
//In window.
bbob g deploy
```
Also known as:
```
//In window.
bbob g -d
```

# Preview
Run the command generate with option preview:
```
bbob g preview
```
Also known as:
```
bbob g -p
```