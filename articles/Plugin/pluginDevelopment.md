---
title: Plugin Development
date: 2022-02-13 12:17:49Z
categories:
    - Plugin
---
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

# Command `init`
To implement `init`:
```
public void InitCommand()
{
    Console.WriteLine("Bbob cli have running the init command");
}
```

# Command `new`
To implement `new`:
```
public void NewCommand(string filePath, ref string content, NewTypes types = NewTypes.blog){
    Console.WriteLine("Bbob cli have running the new command");
    Console.WriteLine("New command option is " + types);
    content += "HelloWorld"
}
```

# Command `generate`
`generate` command have four stage to run. First `Initialize` stage, then run `Process` stage, after Process stage will run `Parse` stage. And the last stage is `FinalProcess`.
```
public void GenerateCommand(string filePath, string distribution, GenerationStage stage){
    if (stage != Generation.Initialize) return;
    if (Path.GetExtension(filePath) != ".txt") return;
    Console.WriteLine(File.ReadAllText(filePath));
}
```

## `Initialize` stage
`Initialize` stage is let your plugin register data. Not recommend you get data in this stage.
```
public void GenerateCommand(string filePath, string distribution, GenerationStage stage){
    if (stage == GenerationStage.Initialize)
    {
        PluginHelper.registerObject("msg", "HelloWorld");
    }
}
```

## `Process` stage
`Process` stage is let your plugin process data.
```
public void GenerateCommand(string filePath, string distribution, GenerationStage stage){
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

## `Parse` stage
`Parse` stage is let your plugin parse data.
```
public void GenerateCommand(string filePath, string distribution, GenerationStage stage){
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

## `FinalProcess` stage
`FinalProcess` stage is let your plugin parse data.
```
public void GenerateCommand(string filePath, string distribution, GenerationStage stage){
    if (stage == GenerationStage.FinalProcess)
    {
        PluginHelper.modifyRegisteredObject<string>("contentParsed", (ref string cp)=>{
            cp = $"{cp}";
        });
    }
}
```