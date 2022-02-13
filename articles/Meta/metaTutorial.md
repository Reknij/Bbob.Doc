---
title: Meta configuration
date: 2022-02-13 12:02:58Z
categories:
    - Meta
---
# Introduction
Bbob cli all meta data is save in the `Bbob.meta` object.

# Bbob default meta
```
console.log(Bbob.meta.blogName);
console.log(Bbob.meta.author);
console.log(Bbob.meta.description);
console.log(Bbob.meta.about);
console.log(Bbob.meta.copyright);
```

# Where is the default metadata generated from?
Default meta will generated from your `config.json`.