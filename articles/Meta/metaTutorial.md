---
title: Meta configuration
date: 2022-02-13 12:02:58Z
categories:
    - Meta
order: 1
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
console.log(Bbob.meta.blogCountOneTime);
console.log(Bbob.meta.allLink);
console.log(Bbob.meta.baseUrl);
```

# Where is the default metadata generated from?
Default meta will generated from your `config.json`.