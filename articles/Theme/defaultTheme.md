---
title: Default theme
date: 2022-03-28 14:04:55
order: 3
---
# Language
Default theme is supports multiple languages. Example, change to chinese:
```
// ./metas/defaultTheme.meta.json
{
    "language": "zh"
}
```
## language-code
Write the code of your language to meta.

| Code  | Corresponding Language |
| ----- | ---------------------- |
| ar    | Arabic                 |
| de    | German                 |
| en    | English                |
| es    | Spanish                |
| fr    | French                 |
| ja    | Japanese               |
| ko    | Korean                 |
| ko    | Korean                 |
| ru    | Russian                |
| zh    | Chinese                |
| zh-CN | Simplified Chinese     |
| zh-TW | Traditional Chinese    |

## Notice
Some languages is translate by google translate. If has some wrong welcome to pull request.

# Avatar
Set your avatar at your blog.
```
// ./metas/defaultTheme.meta.json
{
    "avatar": {
        "source": "https://yourAvatarImageUrl/avatar.png"
    }
}
```

## Type
Default type is `square`. If you want your avatar is circle, change type to `circle`.
```
// ./metas/defaultTheme.meta.json
{
    "avatar": {
        "source": "https://yourAvatarImageUrl/avatar.png"
        "type": "circle"
    }
}
```

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