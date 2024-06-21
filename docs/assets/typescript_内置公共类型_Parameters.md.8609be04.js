import{_ as s,c as a,o as e,a as n}from"./app.fbd6e7ea.js";const p="/docs/assets/Parameters1.170b964f.png";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Parameters<Type>","slug":"parameters-type","link":"#parameters-type","children":[]}],"relativePath":"typescript/内置公共类型/Parameters.md","lastUpdated":1687339744000}'),t={name:"typescript/内置公共类型/Parameters.md"},l=n('<h3 id="parameters-type" tabindex="-1">Parameters&lt;Type&gt; <a class="header-anchor" href="#parameters-type" aria-hidden="true">#</a></h3><div class="s1">从函数类型 Type 的参数中使用的类型构造元组类型。</div><img src="'+p+`" style="height:400px;"><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 实现的方式</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Parameters</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> (...</span><span style="color:#9CDCFE;">args</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  (...</span><span style="color:#9CDCFE;">args</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">infer</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">P</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;"> ? </span><span style="color:#4EC9B0;">P</span><span style="color:#D4D4D4;"> : </span><span style="color:#4EC9B0;">never</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,4),r=[l];function o(c,D,y,i,d,_){return e(),a("div",null,r)}const u=s(t,[["render",o]]);export{C as __pageData,u as default};
