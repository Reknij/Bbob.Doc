---
title: Quick Start
date: 2022-02-12 21:47:09Z
categories:
    - Basic
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

./Bbob.exe n b
```

It will be create the new blog file with name date time now. The file in the `articles` folder in current path of Bbob. 

The command `n b` is alias for `new blog`. So, type the full command is:
```
Run in cmd.exe or powershell:

./Bbob.exe new blog
```

# Generation for your blog
Run the command:
```
Run in cmd.exe or powershell:

./Bbob.exe g
```
It will generate the blog to the `dist` folder in the current path of Bbob. If you no change the default config for theme, it will select default theme to generate.

Now, you can use the any static file server tool to see you blog.

<b>Bbob does not currently support to preview you blog. You can install anywhere to preview</b>
```
npm install -g anywhere
anywhere 1234 //start it with port 1234
```

The command `g` is alias for `generate`. So, type the full command is:
```
Run in cmd.exe or powershell:

./Bbob.exe generate
```

# Notification
I will using aliases for the rest of document.