import{_ as s,c as a,o as n,a as e}from"./app.47e3cb81.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"typescript/常用方法/交叉类型.md","lastUpdated":1688720761000}'),p={name:"typescript/常用方法/交叉类型.md"},t=e(`<p>两个键值相同的交差,如果一方为可选属性另一方为必选属性，那么是以必选属性为准</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 交叉后是以必选属性为准</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">A</span><span style="color:#D4D4D4;"> = { </span><span style="color:#9CDCFE;">a</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> } &amp; { </span><span style="color:#9CDCFE;">a</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> } </span><span style="color:#6A9955;">// { a: string }</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,2),l=[t];function o(r,c,i,_,d,D){return n(),a("div",null,l)}const u=s(p,[["render",o]]);export{m as __pageData,u as default};
