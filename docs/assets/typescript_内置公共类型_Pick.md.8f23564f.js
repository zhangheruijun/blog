import{_ as s,c as n,o as a,a as p}from"./app.fbd6e7ea.js";const l="/docs/assets/Pick1.a9755ecf.png",e="/docs/assets/Pick2.979832c4.png";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Pick<Type, Keys>","slug":"pick-type-keys","link":"#pick-type-keys","children":[]}],"relativePath":"typescript/内置公共类型/Pick.md","lastUpdated":1688720761000}'),o={name:"typescript/内置公共类型/Pick.md"},t=p('<h3 id="pick-type-keys" tabindex="-1">Pick&lt;Type, Keys&gt; <a class="header-anchor" href="#pick-type-keys" aria-hidden="true">#</a></h3><div class="s1">通过从type中选择一组属性 Keys（字符串文字或字符串文字的联合）来构造一个类型。 </div><img src="'+l+`" style="height:400px;"><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 实现的方式</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Pick</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">K</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">keyof</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt; = {</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#4EC9B0;">P</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">in</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">K</span><span style="color:#D4D4D4;">]: </span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">[</span><span style="color:#4EC9B0;">P</span><span style="color:#D4D4D4;">];</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><img src="`+e+`" style="height:400px;"><p>在Pick中取不存在的属性会报错,但是Omit不会报错</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">A</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">:</span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">age</span><span style="color:#D4D4D4;">:</span><span style="color:#4EC9B0;">number</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">PickCust</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Pick</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">A</span><span style="color:#D4D4D4;">,</span><span style="color:#CE9178;">&#39;sex&#39;</span><span style="color:#D4D4D4;">&gt; </span><span style="color:#6A9955;">// error 类型“&quot;sex&quot;”不满足约束“keyof A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">OmitCust</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">Omit</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">A</span><span style="color:#D4D4D4;">,</span><span style="color:#CE9178;">&#39;sex&#39;</span><span style="color:#D4D4D4;">&gt; </span><span style="color:#6A9955;">// 不会报错,值也不会受到影响</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,7),c=[t];function r(D,i,y,d,u,C){return a(),n("div",null,c)}const b=s(o,[["render",r]]);export{m as __pageData,b as default};
