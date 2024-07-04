import{_ as s,c as t,o as a,a as n}from"./app.6f306bdd.js";const e="/docs/assets/Extract1.252f5bf3.png",p="/docs/assets/Extract2.c458215f.png";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Extract<Type, Union>","slug":"extract-type-union","link":"#extract-type-union","children":[]}],"relativePath":"typescript/内置公共类型/Extract.md","lastUpdated":1687339744000}'),o={name:"typescript/内置公共类型/Extract.md"},l=n('<h3 id="extract-type-union" tabindex="-1">Extract&lt;Type, Union&gt; <a class="header-anchor" href="#extract-type-union" aria-hidden="true">#</a></h3><div class="s1">通过从 Type 中提取所有可分配给 Union 的联合成员来构造一个类型。相当于type与Union的交集</div><img src="'+e+`" style="height:400px;"><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 实现的方式</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Extract</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">U</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">U</span><span style="color:#D4D4D4;"> ? </span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;"> : </span><span style="color:#4EC9B0;">never</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// never 代表空</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><img src="`+p+'" style="height:400px;">',5),c=[l];function r(i,d,_,y,D,x){return a(),t("div",null,c)}const m=s(o,[["render",r]]);export{h as __pageData,m as default};
