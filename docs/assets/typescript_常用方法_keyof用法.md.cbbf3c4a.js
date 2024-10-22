import{_ as s,c as n,o as a,a as p}from"./app.0da40ffe.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"获取对象类型的key值，作为联合类型","slug":"获取对象类型的key值-作为联合类型","link":"#获取对象类型的key值-作为联合类型","children":[]}],"relativePath":"typescript/常用方法/keyof用法.md","lastUpdated":1688639464000}'),l={name:"typescript/常用方法/keyof用法.md"},e=p(`<h3 id="获取对象类型的key值-作为联合类型" tabindex="-1">获取对象类型的key值，作为联合类型 <a class="header-anchor" href="#获取对象类型的key值-作为联合类型" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 枚举</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">enum</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Direction</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#4FC1FF;">Up</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#4FC1FF;">Down</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#4FC1FF;">Left</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#4FC1FF;">Right</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">union1</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">keyof</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">typeof</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">Direction</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// // type union1 = &quot;Up&quot; | &quot;Down&quot; | &quot;Left&quot; | &quot;Right&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 接口(获取对象类型的key的联合类型)</span></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">DirectionObj</span><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">North</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">East</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">South</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">West</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">union2</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">keyof</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">DirectionObj</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// type union2 = &quot;North&quot; | &quot;East&quot; | &quot;South&quot; | &quot;West&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>如果类型具有索引签名</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Arrayish</span><span style="color:#D4D4D4;"> = { [</span><span style="color:#9CDCFE;">n</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">]: </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;"> };</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">A</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">keyof</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Arrayish</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// type A = number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Mapish</span><span style="color:#D4D4D4;"> = { [</span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">]: </span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;"> };</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">M</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">keyof</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Mapish</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// type M = string | number</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,4),o=[e];function t(r,c,D,y,i,u){return a(),n("div",null,o)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};
