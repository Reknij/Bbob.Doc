---
title: Add theme or plugin
date: 2022-03-05 16:01:41
---
# Add the theme
To add theme, please use `add` command:
```
bbob add <option> <content>
```
## Add from address
If content is address:
```
bbob add --address https://yourAddress.com/bbob-theme-myTheme.zip
```

## Add from local
If content is local path:
```
bbob add --file ./bbob-theme-myTheme.zip
```

# Add the plugin
To add plugin, please use `add` command:
```
bbob add <option> <content>
```
## Add from address
If content is address:
```
bbob add --address https://yourAddress.com/bbob-plugin-myTheme.zip
```

## Add from local
If content is local path:
```
bbob add --file ./bbob-plugin-myTheme.zip
```

# Command Add
You will see add theme and plugin command is same. Command `add` will auto detect with file name what type of file (theme or plugin).