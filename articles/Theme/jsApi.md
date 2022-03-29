---
title: JS api
date: 2022-02-13 11:07:15Z
categories:
    - Theme
order: 2
---
# Introduction
Js Api is the path for the theme to fetch data. Is a global variable in your theme.

Bbob provide a ts module to help you develop.

# Use it
For js project, you can access the global api from `window.Bbob`.

For ts project, you can import ts module of Bbob provide to use it.
```
//Bbob.ts path ./src/Bbob.ts
import Bbob from "./src/Bbob.ts
...
console.log(Bbob);
```

In the rest document will use the `Bbob` name to mean ts module.

# Object Bbob.blog
## Introduction
This is blog articles, categories, tags and nextFileLinks access place.

## Articles
The current articles is in the `Bbob.blog.links`. It is array of `LinkInfo` object. 

Array length is Bbob cli `config.blogCountOneTime`. If `config.allLink` value is `current` will save all articles in here.
```
for (int i = 0; i < Bbob.blog.links.length; i++){
    let link = Bbob.blog.links[i];
    console.log(`title: ${link.title}`)
    console.log(`date: ${link.date}`)
    console.log(`categories: ${link.categories}`)
    console.log(`tags: ${link.tags}`)
    console.log(`address: ${link.address}`)
}
```
`link.address` is url of article json. The article content is in the article json file.

## Categories
All category is save in `Bbob.blog.categories`. It is array of `string`.
```
for (int i = 0; i < Bbob.blog.categories.length; i++){
    let category = Bbob.blog.categories[i];
    console.log(`Category: ${category}`)
}
```

## Tags
All tag is save in `Bbob.blog.tags`. It is array of `string`.
```
for (int i = 0; i < Bbob.blog.tags.length; i++){
    let tag = Bbob.blog.tags[i];
    console.log(`Tag: ${tag}`)
}
```

## Next file links
If user no modify config, it will save 10 articles in the `Bbob.blog.links`. For more articles will save in the one json file. `Bbob.blog.nextFileLinks` is target file path array. Not recommend you access with array, Bbob provide the function to access them.
```
for (int i = 0; i < Bbob.blog.nextFileLinks.length; i++){
    let url = Bbob.blog.nextFileLinks[i];
    console.log(`Url: ${url}`)
}
```
If Bbob `config.allLink` value is `next`, all articles will save in the next file.

# Object Bbob.meta
## Introduction
Bbob meta is save in the `Bbob.meta`.

## Get meta
```
console.log(Bbob.meta.blogName);
console.log(Bbob.meta.author);
console.log(Bbob.meta.description);
console.log(Bbob.meta.about);
console.log(Bbob.meta.copyright);
```

## More meta
You can fetch more meta with:
```
console.log(Bbob.meta.extra.ExtraMeta1.hello)
console.log(Bbob.meta.extra.ExtraMeta2.HiMessage)
```

# Object `Bbob.api`
## Introduction
This is all Bbob provide functions.

## Bbob.api.nextLinkInfos()
This is function to access the next link infos file. It receive one function. If no more next file links will get false value.
```
Bbob.api.nextLinkInfos((nextLinkArray)=>{
    if (!nextLinkArray) return;
    for (int i = 0; i < nextLinkArray.length; i++){
        let link = nextLinkArray[i];
        console.log(`title: ${link.title}`)
        console.log(`date: ${link.date}`)
        console.log(`categories: ${link.categories}`)
        console.log(`tags: ${link.tags}`)
        console.log(`address: ${link.address}`)
    }
})
```

## Bbob.api.nextLinkInfosAsync()
`nextLinkInfos` async version.

## Bbob.api.resetNextLinkInfosOffset()
`Bbob.api.nextLinkInfos()` have a offset of `Bbob.blog.nextLink` inside. When `offset` value same nextFileLinks.length, nextLinksInfos callback function will receive false value. `Bbob.api.resetNextLinkInfosOffset()` can reset offset.
```
Bbob.api.resetNextLinkInfosOffset() //reset to zero
Bbob.api.resetNextLinkInfosOffset(3) //reset to three.
```

## Bbob.api.getArticleFromAddress()
To get the real content of article, must use this function.
```
Bbob.api.getArticleFromAddress(articleAddress, (link)=>{
    console.log(link.contentParsed)
    console.log(link.toc)
})
```

## Bbob.api.getArticleFromAddressAsync()
`getArticleFromAddress` async version.


## Bbob.api.getLinkInfosWithAddress()
To get all linkInfo with address. The address may be `tag`, `category` or `archive`.
```
Bbob.api.getLinkInfosWithTag(tagName, (linkArray)=>{
    if (!linkArray) return;
    for (int i = 0; i < linkArray.length; i++){
        let link = linkArray[i];
        console.log(`title: ${link.title}`)
        console.log(`date: ${link.date}`)
        console.log(`categories: ${link.categories}`)
        console.log(`tags: ${link.tags}`)
        console.log(`address: ${link.address}`)
    }
})
```

## Bbob.api.getLinkInfosWithAddressAsync()
`getLinkInfosWithAddress` async version.

## executeScriptElements()
To execute all script element of target element. It is use for execute when ajax get article and render `contentParsed` to container element.