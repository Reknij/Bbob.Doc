---
title: Preview Blog
date: 2022-02-23 14:03:06
categories:
    - Basic
order: 6
---
# Preview blog
You can run the command to preview your blog:
```
//In window.
./Bbob.exe p
```
Before run the preview, you must generate blog first.

You can run the generate command with preview option:
```
//In window.
./Bbob.exe g -p
```

## Stop preview
To stop the preview, you can enter Ctrl + C to stop the preview.

## Change the port
Default preview port is 3000, if you want change it please go `config.previewPort` to modify it. `previewPort` must in 1024 - 49151.