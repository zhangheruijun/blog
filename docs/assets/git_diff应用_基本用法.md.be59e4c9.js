import{_ as s,c as n,o as a,a as e}from"./app.95841843.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"git/diff应用/基本用法.md","lastUpdated":1682326577000}'),l={name:"git/diff应用/基本用法.md"},p=e(`<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus has-diff" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 1.比较工作区与暂存区的差异</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 2.比较暂存区与版本库的差异</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">diff</span><span style="color:#D4D4D4;"> --</span><span style="color:#9CDCFE;">cached</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 3.比较工作区(指定分支)与版本库的差异,相当于 branch_name 分之与当前的版本库的差异</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">diff</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#9CDCFE;">branch_name</span><span style="color:#D4D4D4;">&gt; </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,1),c=[p];function t(o,r,i,d,_,D){return a(),n("div",null,c)}const u=s(l,[["render",t]]);export{m as __pageData,u as default};
