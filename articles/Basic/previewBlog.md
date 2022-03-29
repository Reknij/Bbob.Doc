---
title: Preview Blog
date: 2022-02-23 14:03:06
order: 6
---
# Preview blog
You can run the command to preview your blog:
```
bbob p
```
Before run the preview, you must generate blog first.

You can run the generate command with preview option:
```
bbob g -p
```

## Stop preview
To stop the preview, you can enter Ctrl + C to stop the preview.

## Change the default port
Default preview port is 3000, if you want change it please go `config.previewPort` to modify it. `previewPort` must in 1024 - 49151.

## Change host include port
If you want change host without modify config. Please do like this:
```
bbob p --host http://localhost:1777
```
It will listen in host `localhost` with port `1777`.