---
title: More meta
date: 2022-02-13 13:37:46Z
categories:
    - Meta
---
# More meta
Bbob will read all file extension `.meta.json` from folder `metas` in current path of Bbob. Then save in the object name filename without extension. The object in save in the `Bbob.meta.extra` object.
```
meta1 path: ./metas/hello.meta.json
{
    "msg": "Hello World!"
}
meta2 path: ./metas/hi.meta.json
{
    "from": "Jinker"
}

console.log(Bbob.meta.extra.hello.msg) //hello.meta.json
console.log(Bbob.meta.extra.hi.from) //hi.meta.json
```

# Notification
meta file extension must `.meta.json`.