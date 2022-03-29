---
title: Deploy Blog
date: 2022-02-23 14:03:00
order: 7
---
# Deploy
You can deploy your blog easy with oneline command:
```
bbob d
```
It will deploy with your distribution folder. So, make sure you already generate blog.

You can also run generate command with deploy option:
```
bbob g -d
```
Deploy command will run with plugins.

## GitDeploy
Bbob already build-in GitDeploy plugin to let you easy deploy distribution with git.

It is run the git local to push the local repository to remote repository. Please make sure you already setup ssh local.

First, write repository url in `configs/GitDeploy.config.json`
```
// ./configs/GitDeploy.config.json
{
    "repos": "yourRepository",
    "branch": "yourBranch",
    "message": "your commit message"
}
```
`branch` and `message` is default `main` and datetime now.

Run deploy command to see result.
```
bbob d
```

### Type
GitDeploy have operation with target type.
#### GitHub
Write github type:
```
// ./configs/GitDeploy.config.json
{
    "repos": "yourRepository",
    "branch": "yourBranch",
    "message": "your commit message",
    "type": "github"
}
```
It will Copy `index.html` file and rename to `404.html` before push to github.