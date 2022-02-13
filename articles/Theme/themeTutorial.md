---
title: Theme development
date: 2022-02-12 23:00:28Z
categories:
    - Theme
---
# Custom theme
You can make the theme yourself. Can read the default theme code.
## Bbob js api
Theme is a website independent. It is using the js api to fetch blogs.

Bbob is provide ts module `Bbob.ts` in the folder `JSApi` in current path of Bbob to give you easy development. 

Copy `Bbob.ts` to your theme website project and import it. If you use ide or any editor have intellisense function, you will see the intellisense working.

### Theme make with vue3+vite
1. Copy `Bbob.ts` to `src` folder. Import it when use.
2. Copy the dist content of Bbob generate to the `Public` folder. import script in the `index.html`
    ```
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <script src="/bbob.js"></script>
            ...
        </head>
        <body>
        ...
        </body>
    </html>
    ```
3. If want preview run `npm run dev`
4. publish the theme remember remove dist content in `Public` folder and remove script tag in `index.html`
5. create `theme.json` file, is information about your theme.
    ```
    {
        "name": "themeName",
        "description: "Theme description",
        "author": "Who made it?"
    }
    ```

# Change theme
If theme done, try it now!

Change config:
```
{
    ...
    "theme": "myTheme"
    ...
}
```
Run generate:
```
//In window
./Bbob.exe g
```

# publicPath of theme
If want get publicPath value, please in js file write "B{publicPath}", Bbob cli will replace it will value publicPath. Value publicPath is end with '/'.
```
// publicPath is /sub/
console.log("my png file path: B{publicPath}png/hey.png");
//replace to
console.log("my png file path: /sub/png/hey.png")
```

# default theme
If you blog root url no the '/', please go to project default theme, clone it and change base in the vite.config.ts. Because them make with vue, can't change the publicPath after build.

# Notification
Generate command will auto insert bbob.js to your index.html. If you index.html file is no call `index.html`, modify your `theme.json`:
```
{
    "name": "themeName",
    "description: "Theme description",
    "author": "Who made it?",
    "index": "main.html" //here is your index.html file.
}
```