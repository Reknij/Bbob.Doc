---
title: Add theme or plugin
date: 2022-03-05 16:01:41
order: 10
---
# Add the content
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

# Plugin or Theme?
It will auto check content is plugin or theme. Example, this command will add plugin:
```
bbob add --file ./bbob-plugin-myPlugin.zip
```

# Add to global
If you want add content to global directory not current directory. Please add the option `-g` or `--global`
```
bbob add --file --global ./bbob-plugin-myPlugin.zip
```

# Replace not overwrite
If content is exists, default is overwrite, but something you want replace it not overwrite. Please add option `-r` or `--replace`.
```
bbob add --file --replace ./bbob-plugin-myPlugin.zip
```
Is is same with:
```
bbob remove bbob-plugin-myPlugin
bbob add --file ./bbob-plugin-myPlugin.zip
```

# Short name
`add` or `remove` can enter short name of content. It will auto add `bbob-` to front of name.
```
bbob add --file ./plugin-myPlugin.zip //bbob-plugin-myPlugin
bbob remove bbob-theme-myTheme //bbob-theme-myTheme
```

# Command Add
You will see add theme and plugin command is same. Command `add` will auto detect with file name what type of file (theme or plugin).