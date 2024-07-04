import{_ as s,c as n,o as a,a as p}from"./app.6f306bdd.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"htmlcss/杂项/不定高的圆角.md","lastUpdated":1698402766000}'),l={name:"htmlcss/杂项/不定高的圆角.md"},e=p(`<p>在css中设置边框圆角时，高度不固定，那么可以用动态设置</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">div</span><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">width</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">100px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/* 高度可能是变化的 */</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">height</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">100px</span><span style="color:#D4D4D4;">; </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/* border-radius: 100px; */</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">border-radius</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">calc</span><span style="color:#D4D4D4;">(Infinity * </span><span style="color:#B5CEA8;">1px</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,2),o=[e];function c(r,t,D,i,_,d){return a(),n("div",null,o)}const u=s(l,[["render",c]]);export{b as __pageData,u as default};
