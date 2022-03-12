---
title: Enable or Disable target plugin
date: 2022-02-28 13:23:31
categories:
    - Basic
---
# Enable plugin
```
// in window.exe
./Bbob.exe enable <pluginName>
```

# Disable plugin
```
// in window.exe
./Bbob.exe disable <pluginName>
```

# Direct operation
Normally Bbob will check target plugin exists or not. But sometime want direct enable/disable with plugin name:
```
// in window.exe
./Bbob.exe enable [option] <pluginName>
./Bbob.exe disable [option] <pluginName>
```
Add option '-d' if `<pluginName>` not exists, Bbob also execute.