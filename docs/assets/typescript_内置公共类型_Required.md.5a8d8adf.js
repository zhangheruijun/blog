import{_ as s,c as e,o as a,a as n}from"./app.0da40ffe.js";const p="/docs/assets/Required1.e1bfadc6.png",l="/docs/assets/Required2.ede50534.png";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Required<Type>","slug":"required-type","link":"#required-type","children":[]}],"relativePath":"typescript/内置公共类型/Required.md","lastUpdated":1687339744000}'),t={name:"typescript/内置公共类型/Required.md"},r=n('<h3 id="required-type" tabindex="-1">Required&lt;Type&gt; <a class="header-anchor" href="#required-type" aria-hidden="true">#</a></h3><div class="s1">构造一个类型，其中 Type 的所有属性都设置为必选。<code>Partial</code>的对立面 </div><img src="'+p+`" style="height:400px;"><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 实现的方式</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Partial</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt; = {</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#4EC9B0;">P</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">in</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">keyof</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">]-?: </span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">[</span><span style="color:#4EC9B0;">P</span><span style="color:#D4D4D4;">]; </span><span style="color:#6A9955;">// ts中的&#39;-&#39;,就相当于减去后面的符号</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><img src="`+l+'" style="height:400px;">',5),o=[r];function c(i,d,y,D,_,u){return a(),e("div",null,o)}const b=s(t,[["render",c]]);export{h as __pageData,b as default};
