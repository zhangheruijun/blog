import{_ as s,c as n,o as a,a as l}from"./app.95841843.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"htmlcss/css属性/webkit-scrollbar滚动条.md","lastUpdated":1737081387000}'),p={name:"htmlcss/css属性/webkit-scrollbar滚动条.md"},e=l(`<div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">/* 去掉滚动条 */</span></span>
<span class="line"><span style="color:#D7BA7D;">.not-scrollbar</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/* 兼容火狐浏览器(去掉火狐浏览器的滚动条) */</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">scrollbar-width</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">none</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  ::-webkit-scrollbar {</span></span>
<span class="line"><span style="color:#D4D4D4;">    width: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">!important</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">height</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">!important</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">transparent</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,1),o=[e];function r(c,t,D,i,b,y){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{d as __pageData,m as default};
