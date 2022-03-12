---
title: Extensions of function
date: 2022-02-23 18:37:52
categories:
    - Plugin
order: 5
---
# Extensions of function
Bbob have provide few function to improve your development efficiency.

## IsPropertyExists
This function is used by check property of object is exists or not.

Check exists only:
```
using Bbob.Plugin;
dynamic obj = "Hello";
Console.WriteLine(IsPropertyExists(obj, "Length"));
// output 'True'
```

Check exists by given type. <b>If property exists but property type match fail, it will return false</b>
```
using Bbob.Plugin;
dynamic obj = "Hello";
Console.WriteLine(IsPropertyExists<string>(obj, "Length"));
// output 'False'
```

Check exists by given type, and get property with given type. <b>If property exists but property type match fail, it will return false and property will set default(T)</b>
```
using Bbob.Plugin;
dynamic obj = "Hello";
Console.WriteLine(IsPropertyExists<int>(obj, "Length", out int length));
Console.WriteLine(length)
// output 'True' and '5'
```