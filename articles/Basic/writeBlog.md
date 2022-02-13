---
title: Write the article.
date: 2022-02-12 21:48:37Z
categories:
    - Basic
---
# Change title for your articles
You can change the article title. It no a file name.

First open the target article you want modify, you can see the yaml front matter start and end with `---`.
```
//Example
---
title: Hello World
date: 2022-02-12 21:48:37Z
---
```
Change title to `Hello Jinker` like this:
```
---
title: Hello Jinker
date: 2022-02-12 21:48:37Z
---
```
# Date
You can change date if you want update article date to you want.

Change 2022 year to 2021 year:
```
---
title: Hello World
date: 2021-02-12 21:48:37Z
---
```

# Add categories to your articles
You can add the any categories to your article.
Also modify in article with front matter.
```
---
title: Hello World
date: 2022-02-12 21:48:37Z
categories:
    - Life
    - Network
---
```
It will added `Life` and `Network` category to you article.

# Add tags to your articles
You can add the any tags to your article. It same with add categories.
```
---
title: Hello World
date: 2022-02-12 21:48:37Z
tags:
    - Birthday
    - happy
---
```
It will added `Birthday` and `happy` tag to you article.

# Notification
## Yaml
The front matter is must true format for Yaml.

It will error if like this:
```
---
title: Hello World
date: 2022-02-12 21:48:37Z
tags:
 - Birthday
  - happy
- happy
---
---
```

## Start and end
Start and end front matter are `---`

It will error if like this:
```
--
...
---
or this

----
...
----
```

True for front matter:
```
---
...
---
```