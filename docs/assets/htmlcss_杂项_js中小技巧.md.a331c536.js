import{_ as s,c as n,o as a,a as l}from"./app.95841843.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"htmlcss/杂项/js中小技巧.md","lastUpdated":1695113274000}'),p={name:"htmlcss/杂项/js中小技巧.md"},e=l(`<h4 id="_1-通过条件判断增加对象属性" tabindex="-1">1. 通过条件判断增加对象属性 <a class="header-anchor" href="#_1-通过条件判断增加对象属性" aria-hidden="true">#</a></h4><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">isAdd</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">obj</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">name:</span><span style="color:#CE9178;">&#39;张三&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">age:</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">18</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  ...(</span><span style="color:#9CDCFE;">isAdd</span><span style="color:#D4D4D4;"> &amp;&amp; {</span><span style="color:#9CDCFE;">sex:</span><span style="color:#CE9178;">&#39;男&#39;</span><span style="color:#D4D4D4;">})</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 结果</span></span>
<span class="line"><span style="color:#6A9955;">// obj = {</span></span>
<span class="line"><span style="color:#6A9955;">//   name:&#39;张三&#39;,</span></span>
<span class="line"><span style="color:#6A9955;">//   age: 18,</span></span>
<span class="line"><span style="color:#6A9955;">// }</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,2),o=[e];function c(r,t,i,D,d,_){return a(),n("div",null,o)}const m=s(p,[["render",c]]);export{y as __pageData,m as default};
