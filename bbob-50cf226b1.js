let offset=0;const api={resetNextLinkInfosOffset(n){n||(n=0);offset=n},nextLinkInfos(n){blog.nextFileLinks&&offset<blog.nextFileLinks.length?(ajaxRequest("get",blog.nextFileLinks[offset],n),offset++):n(!1)},getArticleFromAddress(n,t){ajaxRequest("get",n,t)},getLinkInfosWithAddress(n,t){ajaxRequest("get",n,t)},executeScriptElements(n){const t=n.querySelectorAll("script");Array.from(t).forEach(n=>{const t=document.createElement("script");Array.from(n.attributes).forEach(n=>{t.setAttribute(n.name,n.value)});t.text=n.text;n.parentNode.replaceChild(t,n)})}};let ajaxRequest=function(n,t,i){let r=new XMLHttpRequest;r.open(n,t,!0);r.send(null);r.onreadystatechange=function(){r.readyState==4&&r.status==200&&i(JSON.parse(r.responseText))}};const blog={links:[],nextFileLinks:["/Bbob.Doc/bbob-assets/nextLinkInfoFiles/next-7889aec23.js"],archives:[{text:"2022",address:"/Bbob.Doc/bbob-assets/archives/2022-7889aec23.json"}],categories:[{text:"Basic",address:"/Bbob.Doc/bbob-assets/categories/Basic-681aa64da.json"},{text:"Meta",address:"/Bbob.Doc/bbob-assets/categories/Meta-3bc703afb.json"},{text:"Theme",address:"/Bbob.Doc/bbob-assets/categories/Theme-5e7ad3612.json"},{text:"Plugin",address:"/Bbob.Doc/bbob-assets/categories/Plugin-b12716ab4.json"}],tags:[]},meta={blogName:"Bbob - Documents",author:"Jinker",description:"Here is document about Bbob",about:"Bbob is serverless blog framework write in C#.",copyright:'© 2022 Jinker Powered by <a class="bbob-project-link" href="https://github.com/Reknij/Bbob">Bbob<\/a> & documents',blogCountOneTime:3,allLink:"next",baseUrl:"/Bbob.Doc/",lastBuild:"2022-03-20 21:03:39",extra:{shortAddress:{startOfAddress:"/Bbob.Doc/bbob-assets/articles/",endOfAddress:".json"},extraLinks:[{name:"Sitemap",address:"/sitemap-html.html"}]}};var Bbob={blog,meta,api}