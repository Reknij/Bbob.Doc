---
title: Default theme
date: 2022-03-28 14:04:55
order: 3
---
# Mode
## Dark
If you want change to dark mode, please create meta file:
```
// ./metas/defaultTheme.meta.json
{
    "mode": "dark"
}
```

# Background
If you want set image or video for your blog background. Please do like this:
```
// ./metas/defaultTheme.meta.json
{
    "background": {
        "sourceH": "source for horizontal",
        "sourceV": "source for vertical",
        "isVideo": false
    }
}
```
Example, set the image:
```
// ./metas/defaultTheme.meta.json
{
    "background": {
        "sourceH": "https://your/image/url/file-1920x1080.png",
        "sourceV": "ttps://your/image/url/file-1080x1920.png",
        "isVideo": false
    }
}
```
Or set the video:
```
// ./metas/defaultTheme.meta.json
{
    "background": {
        "sourceH": "https://your/video/url/file-1920x1080.mp4",
        "sourceV": "ttps://your/video/url/file-1080x1920.webm",
        "isVideo": true
    }
}
```
Video only support `mp4`, `webm` and `ogg`.