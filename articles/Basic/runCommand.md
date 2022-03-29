---
title: Run Command
date: 2022-03-28 14:29:12
order: 8
---
# What is it used for
Some plugin have provide custom command. You can use this command to run their custom command.
```
bbob run <pluginName> [customCommand [args]]
```

# Example
`CategoryProcess` build-in plugin can configurate category is from article file or folder name of article. Default is use categories from article file.
```
// ./configs/CategoryProcess.config.json
{
    "mode": "default"
}

// ./articles/nices/hello.md
---
title: hello
date: 2022-03-28 14:29:12
categories:
    - basic
    - test
---
# Start writing.
```
Example, will get categories from `hello.md`, it categories is `basic` and `test`. If change config mode to `folder`, will get categories `nices`, it is folder name of article.

## change config without config file.
Use `run` command:
```
bbob run CategoryProcess config mode folder
```
It will change config mode to `folder`.

`config` in command is custom command of `CategoryProcess`. And `mode` and `folder` is args for custom command.

## Run mode
Basic use `run` command in oneline is too cumbersome if more commands:
```
> bbob run GitDeploy config repos myReposUrl
...
> bbob run GitDeploy config branch myReposBranch
...
> bbob run GitDeploy config message commitMessage
...
```
You can enter `run` mode to simplify:
```
> bbob run GitDeploy
[GITDEPLOY]: config repos myReposUrl
[GITDEPLOY]: config branch myReposBranch
[GITDEPLOY]: config message commitMessage
```
To exit `run` mode. Please enter `exit` command:
```
> bbob run GitDeploy
[GITDEPLOY]: config repos myReposUrl
[GITDEPLOY]: exit

Custom command mode exited.
```

## Notice
`run` command `pluginName` is ignore upper or letter.
```
bbob run GitDeploy config repos myReposUrl
```
is same with:
```
bbob run gitdeploy config repos myReposUrl
```
or
```
bbob run gitDEPLoy config repos myReposUrl
```