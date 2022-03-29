---
title: Quick Start
date: 2022-02-12 21:47:09Z
order: 3
---
# Initialize the Bbob
You can run the command in CMD/Bash:
```
bbob i
```
It will initialize the Bbob. 

The command `i` is alias for `init`. So, type the full command is:
```
bbob init
```

# New the blog
You can run the command in CMD/Bash:
```
bbob n
```
It is new command with default option '--blog'. It same as `n -b`
It will be create the new blog file with name date time now. The file in the `articles` folder in current path of Bbob. 

The command `n -b` is alias for `new --blog`. So, type the full command is:
```
bbob new --blog
```

# Generation for your blog
Run the command:
```
bbob g
```
It will generate the blog to the `dist` folder in the current path of Bbob. If you no change the default config for theme, it will select default theme to generate.

You can run the command preview to preview it:
```
bbob preview
```

The command `g` is alias for `generate`. So, type the full command is:
```
bbob generate
```