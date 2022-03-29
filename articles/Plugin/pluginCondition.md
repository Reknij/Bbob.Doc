---
title: PluginCondition
date: 2022-03-04 12:10:13
order: 6
---
# PluginCondition
It is attribute in class. Affects the sort order plugins.

# Usage
```
// Basic use:

[PluginCondition("otherPlugin")]
public class MyPlugin: IPlugin
{
    ...
}
```
It will check 'otherPlugin' is contain and enable or not. If 'otherPlugin' no contain or disable, will no run 'MyPlugin'.

If want check all plugin. Do like this:
```
[PluginCondition("*")]
public class MyPlugin: IPlugin
{
    ...
}
```
## ConditionType
### Require
It is default value. Must require 'otherPlugin'.
### OrderCheck
If 'otherPlugin' contain and enable, check sort order for it. No contain or disable also run 'MyPlugin'

## PluginOrder
### Any
Is is default value. It doesn't matter "Other Plugins" sort order.

### BeforeMe
```
[PluginCondition("otherPlugin", PluginStatus = PluginStatus.BeforeMe)]
public class MyPlugin: IPlugin
{
    ...
}
```
It will check 'otherPlugin' is contain and enable or not. If 'otherPlugin' no contain or disable, will no run 'MyPlugin'. 

And then 'otherPlugin' will run first than 'MyPlugin'.

### AfterMe
```
[PluginCondition("otherPlugin", PluginStatus = PluginStatus.AfterMe)]
public class MyPlugin: IPlugin
{
    ...
}
```
It will check 'otherPlugin' is contain and enable or not. If 'otherPlugin' no contain or disable, will no run 'MyPlugin'. 

And then 'MyPlugin' will run first than 'otherPlugin'.
## ShowWarning
If `ConditionType` set `Require` and get false because 'otherPlugin' no contain or disable, show the warning message. Default true.