---
title: Plugin Helper
date: 2022-02-13 13:01:54Z
categories:
    - Plugin
order: 2
---
# Introduction
PluginHelper is the most important tool for developing plugins.

## registerObject()
You can register object via this function.
```
string message = "Hello, World";
PluginHelper.registerObject("msg", message);
```
Registered object can via `PluginHelper.getRegisteredObject<T>()` to get it.

## getRegisteredObject<T>()
You can get object via this function.
```
if (PluginHelper.getRegisteredObject<string>("msg", out string? message) && message != null)
{
    Console.WriteLine(message);
}
```

## modifyRegisteredObject<T>()
You can modify object via this function.
```
if (PluginHelper.modifyRegisteredObject<string>("msg", (ref string? message)=>{
    message = "Hello, Jinker!";
});
if (PluginHelper.getRegisteredObject<string>("msg", out string? newMessage) && newMessage != null)
{
    Console.WriteLine(newMessage);
}
```

## unregisterObject()
Unregister target object.
```
bool isSuccess = unregisterObject("objectName");    
```

## getPluginJsonConfig<T>()
You can modify object via this function.
```
public class Config
{
    public string? msg{get;set;}
}
if (PluginHelper.getPluginJsonConfig<Config>("pluginName", out Config? config) && config != null)
{
    if (config.msg != null)
    {
        Console.WriteLine(config.msg);
    }
}
```
if skip pluginName will use your plugin name.

## savePluginJsonConfig<T>()
You can modify object via this function.
```
public class Config
{
    public string? msg{get;set;}
}
Config config = new Config();
config.msg = "Hello, World!";
PluginHelper.savePluginJsonConfig<Config>("pluginName", config);
```
if skip pluginName will use your plugin name.

## isPluginJsonConfigExists()
Check config is exists or not. if skip plugin name will use your plugin name.
```
bool exists = isPluginJsonConfigExists("PluginName");
```

## registerMeta()
Register meta through plugin. If skip meta name will use plugin name.
```
registerMeta("metaName", objectMeta);
```

## unregisterMeta()
Unregister meta. If skip meta name will use plugin name.
```
unregisterMeta("metaName")
```

## getThemeInfo<T>()
Get current theme info.
```
class Info
{
    public string? name{get;set;}
}
Info info = getThemeInfo<Info>();
```

## isTargetPluginDone()
Check plugin is done or not.
```
bool isDone = isTargetPluginDone("pluginName")
string[] plugins = new string[]
{
    "pluginName1",
    "pluginName2",
    "pluginName3"
}
bool isAllDone = isTargetPluginDone(plugins)
```

## isTargetPluginEnable()
Check plugin enable or disable
```
bool isEnable = isTargetPluginEnable("pluginName")
```

## isTargetPluginEnableAndDone()
Return true if plugin enable and done.
```
bool isEnableDone = isTargetPluginEnableAndDone("pluginName")
isEnableDone = isTargetPluginEnable("samePluginName") && isTargetPluginDone("samePluginName") //same with these
```

## isTargetPluginLoaded()
Return true if plugin loaded, otherwise false.
```
bool isLoaded = isTargetPluginLoaded("targetPlugin");
string[] plugins = new string[]
{
    "pluginName1",
    "pluginName2",
    "pluginName3"
}
bool isAllLoaded = isTargetPluginLoaded(plugins);
```

## ConfigBbob
Config of Bbob-Cli.

## BaseDirectory
Base path of Bbob-Cli. It is full path.

## CurrentDirectory
Current path of you running Bbob-Cli. It is full path.

## ThemePath
Path of theme folder.

## DistributionDirectory
Path of distribution. It is full path.

## ExecutingCommandResult
Set the result to let Bbob known what operation continue.
```
ExecutingCommandResult = new CommandResult("message of operation", CommandOperation.RunMeAgain);
```