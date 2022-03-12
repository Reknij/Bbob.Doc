---
title: Quick Start
date: 2022-02-12 21:47:09Z
categories:
    - Basic
order: 3
---
# Initialize the Bbob
You can run the command in CMD/Bash:
```
Run in cmd.exe or powershell:

./Bbob.exe i
```
It will initialize the Bbob. 

The command `i` is alias for `init`. So, type the full command is:
```
Run in cmd.exe or powershell:

./Bbob.exe init
```

# New the blog
You can run the command in CMD/Bash:
```
Run in cmd.exe or powershell:

./Bbob.exe n
```
It is new command with default option '--blog'. It same as `n -b`
It will be create the new blog file with name date time now. The file in the `articles` folder in current path of Bbob. 

The command `n -b` is alias for `new --blog`. So, type the full command is:
```
Run in cmd.exe or powershell:

./Bbob.exe new --blog
```

# Generation for your blog
Run the command:
```
Run in cmd.exe or powershell:

./Bbob.exe g
```
It will generate the blog to the `dist` folder in the current path of Bbob. If you no change the default config for theme, it will select default theme to generate.

You can run the command preview to preview it:
```
./Bbob.exe preview
```

The command `g` is alias for `generate`. So, type the full command is:
```
Run in cmd.exe or powershell:

./Bbob.exe generate
```