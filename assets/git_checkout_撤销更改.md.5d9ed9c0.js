import{_ as s}from"./chunks/gitbg.8a5c34bc.js";import{_ as a,c as n,o as p,a as e}from"./app.47e3cb81.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"git/checkout/撤销更改.md","lastUpdated":1682326577000}'),l={name:"git/checkout/撤销更改.md"},o=e('<img src="'+s+`"><p>在工作区，修改、删除、新增文件会在工作区变成红色表示，图上如所示，可以通过git status查看</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 撤销指定文件</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">checkout</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">a</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">js</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">b</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">js</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">c</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">js</span><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 指定文件名撤销</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 撤所有文件</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">checkout</span><span style="color:#D4D4D4;"> .   </span><span style="color:#6A9955;">// 点(.)代表所有，撤销所有</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,3),t=[o];function c(r,i,D,_,d,y){return p(),n("div",null,t)}const b=a(l,[["render",c]]);export{m as __pageData,b as default};
