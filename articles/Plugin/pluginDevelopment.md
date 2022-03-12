---
title: Plugin Development
date: 2022-02-13 12:17:49Z
categories:
    - Plugin
order: 3
---
# Install classlib from Nuget
Latest version is v1.1.0. Is compatible with Bbob Cli v1.3.0+
```
dotnet add package Bbob.Plugin --version 1.1.0
```

# Interface
To develop plugin must implement interface. You can find the `IPlugin.dll` from current path Bbob.

Interface have default implement <b>(No do anything)</b>, If your plugin no use target command, can no implement them.
```
public class MyPlugin: IPlugin
{
    ...
}
```
# PluginHelper
PluginHelper is important tool for developing. Please see PluginHelper document.

# PluginHelper build-in objects
PluginHelper have build-in objects when invoke some commands.
## Command generate
It will build-in 'blog' object. This object will processed to js api.

# Command init
To implement `init`:
```
public void InitCommand()
{
    Console.WriteLine("Bbob cli have running the init command");
}
```

# Command new
To implement `new`:
```
public void NewCommand(string filePath, ref string content, NewTypes types = NewTypes.blog){
    Console.WriteLine("Bbob cli have running the new command");
    Console.WriteLine("New command option is " + types);
    content += "HelloWorld"
}
```

# Command generate
`generate` command have four stage to run. First `Initialize` stage, then run `Process` stage, after Process stage will run `Parse` stage. And the last stage is `FinalProcess`.
```
public void GenerateCommand(string filePath, GenerationStage stage){
    if (stage != Generation.Initialize) return;
    if (Path.GetExtension(filePath) != ".txt") return;
    Console.WriteLine(File.ReadAllText(filePath));
}
```

## Initialize stage
`Initialize` stage is let your plugin register data. Not recommend you get data in this stage.
```
public void GenerateCommand(string filePath, GenerationStage stage){
    if (stage == GenerationStage.Initialize)
    {
        PluginHelper.registerObject("msg", "HelloWorld");
    }
}
```

## Process stage
`Process` stage is let your plugin process data.
```
public void GenerateCommand(string filePath, GenerationStage stage){
    if (stage == GenerationStage.Process)
    {
        PluginHelper.getRegisteredObject<string>("msg", out string? msg);
        if (msg != null)
        {
            Console.WriteLine(msg);
        }
    }
}
```

## Parse stage
`Parse` stage is let your plugin parse data.
```
public void GenerateCommand(string filePath, GenerationStage stage){
    if (stage == GenerationStage.Parse)
    {
        PluginHelper.getRegisteredObject<string>("msg", out string? msg);
        if (msg != null)
        {
            PluginHelper.registerObject("contentParsed", $"\"Message\": {msg}");
        }
    }
}
```

## FinalProcess stage
`FinalProcess` stage is let your plugin parse data.
```
public void GenerateCommand(string filePath, GenerationStage stage){
    if (stage == GenerationStage.FinalProcess)
    {
        PluginHelper.modifyRegisteredObject<string>("contentParsed", (ref string cp)=>{
            cp = $"{cp}";
        });
    }
}
```
## Confirm stage
`Confirm` stage is let you access data, and in this stage is promise not write data.
```
public void GenerateCommand(string filePath, GenerationStage stage){
    if (stage == GenerationStage.FinalProcess)
    {
        PluginHelper.modifyRegisteredObject<string>("contentParsed", (ref string cp)=>{
            cp = $"{cp}";
        });
    }
}
```

# Command deploy
Run the command to deploy your blog website. Bbob have build-in GitDeploy plugin, please check for more information.
To implement `init`:
```
public void DeployCommand()
{
    Console.WriteLine("Bbob cli have running the deploy command");
}
```

# Command Complete
If want doing something when command complete:
```
public void CommandComplete(Commands c)
{
    Console.WriteLine($"{c} complete");
}
```
## Notice
CommandComplete invoke when all plugin invoke.
