---
title: Enable or Disable target plugin
date: 2022-02-28 13:23:31
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

# Short name
You can enter short name to `enable` or `disable`:
```
bbob enable plugin-hello //bbob-plugin-hello
bbob disable plugin-sayHi //bbob-plugin-sayHi
```

# Direct operation
Normally Bbob will check target plugin exists or not. But sometime want direct enable/disable with plugin name:
```
// in window.exe
./Bbob.exe enable [option] <pluginName>
./Bbob.exe disable [option] <pluginName>
```
Add option '-d' if `<pluginName>` not exists, Bbob also execute.