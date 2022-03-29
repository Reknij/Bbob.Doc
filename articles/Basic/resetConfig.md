---
title: Reset Config
date: 2022-02-23 18:27:51
order: 9
---
# Reset Config
Some time we want reset target config to default, etc. reset `config.BuildInPlugins` to default to add all new build-in plugins.

You can run the command to easy reset:
```
bbob rc configName
```

Example, we want reset `config.BuildInPlugins`:
```
bbob rc BuildInPlugins
```
It will reset `config.BuildInPlugins` to default config, default config is enable all build-in plugins.

<b>configName is ignore letter size, you can also type 'buildinplugins', it working too.</b>

# Full command of reset config
command `rc` is short command, the full command is:
```
bbob reset-config configName
```