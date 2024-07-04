import{_ as s,c as e,o as a,a as t}from"./app.6f306bdd.js";const n="/docs/assets/Omit1.300f4576.png",p="/docs/assets/Omit2.157aab80.png";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Omit<Type, Keys>","slug":"omit-type-keys","link":"#omit-type-keys","children":[]}],"relativePath":"typescript/内置公共类型/Omit.md","lastUpdated":1687339744000}'),l={name:"typescript/内置公共类型/Omit.md"},o=t('<h3 id="omit-type-keys" tabindex="-1">Omit&lt;Type, Keys&gt; <a class="header-anchor" href="#omit-type-keys" aria-hidden="true">#</a></h3><div class="s1">通过从Type中选择所有属性然后删除 Keys（字符串文字或字符串文字的联合）来构造一个类型。<code>Pick</code>的对立面 </div><img src="'+n+`" style="height:400px;"><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 实现的方式</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Omit</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">K</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">keyof</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">Pick</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">Exclude</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#569CD6;">keyof</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">K</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><img src="`+p+'" style="height:400px;">',5),c=[o];function r(i,y,D,d,_,m){return a(),e("div",null,c)}const C=s(l,[["render",r]]);export{u as __pageData,C as default};
