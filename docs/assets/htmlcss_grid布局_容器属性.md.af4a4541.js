import{_ as s,c as a,o as n,a as l}from"./app.0da40ffe.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"(1)、grid-template-columns、grid-template-rows","slug":"_1-、grid-template-columns、grid-template-rows","link":"#_1-、grid-template-columns、grid-template-rows","children":[]},{"level":3,"title":"(2)、auto-fill 关键字","slug":"_2-、auto-fill-关键字","link":"#_2-、auto-fill-关键字","children":[]},{"level":3,"title":"(3)、fr 关键字","slug":"_3-、fr-关键字","link":"#_3-、fr-关键字","children":[]},{"level":3,"title":"(4)、minmax()","slug":"_4-、minmax","link":"#_4-、minmax","children":[]},{"level":3,"title":"(5)、auto 关键字","slug":"_5-、auto-关键字","link":"#_5-、auto-关键字","children":[]},{"level":3,"title":"(6)、row-gap、column-gap、grid-gap 属性","slug":"_6-、row-gap、column-gap、grid-gap-属性","link":"#_6-、row-gap、column-gap、grid-gap-属性","children":[]},{"level":3,"title":"(7)、grid-auto-flow 属性","slug":"_7-、grid-auto-flow-属性","link":"#_7-、grid-auto-flow-属性","children":[]},{"level":3,"title":"(8)、justify-items、align-items、place-items 属性","slug":"_8-、justify-items、align-items、place-items-属性","link":"#_8-、justify-items、align-items、place-items-属性","children":[]},{"level":3,"title":"justify-content、align-content、place-content 属性","slug":"justify-content、align-content、place-content-属性","link":"#justify-content、align-content、place-content-属性","children":[]}],"relativePath":"htmlcss/grid布局/容器属性.md","lastUpdated":1701676419000}'),p={name:"htmlcss/grid布局/容器属性.md"},e=l(`<h3 id="_1-、grid-template-columns、grid-template-rows" tabindex="-1">(1)、grid-template-columns、grid-template-rows <a class="header-anchor" href="#_1-、grid-template-columns、grid-template-rows" aria-hidden="true">#</a></h3><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">.grid-container</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">display</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">grid</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">grid-template-columns</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">100px</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">200px</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">300px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">grid-template-rows</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">40px</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">50px</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">60px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>1.容器指定了网格布局以后，接着就要划分行和列。grid-template-columns属性定义每一列的列宽，grid-template-rows属性定义每一行的行高。</p><p>2.可以设置百分比。grid-template-columns: 33.33% 33.33% 33.33%</p><p>3.复写同样的值非常麻烦，尤其网格很多时。这时，可以使用repeat()函数，简化重复的,</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">.container</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">display</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">grid</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">grid-template-columns</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">repeat</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">33.33%</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">grid-template-rows</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">repeat</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">33.33%</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><span>repeat()接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。</span></p><h3 id="_2-、auto-fill-关键字" tabindex="-1">(2)、auto-fill 关键字 <a class="header-anchor" href="#_2-、auto-fill-关键字" aria-hidden="true">#</a></h3><p>有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">.grid-container</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">display</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">grid</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">grid-template-columns</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">repeat</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">auto-fill</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">100px</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面代码表示每列宽度100px，然后自动填充，直到容器不能放置更多的列。</p><h3 id="_3-、fr-关键字" tabindex="-1">(3)、fr 关键字 <a class="header-anchor" href="#_3-、fr-关键字" aria-hidden="true">#</a></h3><p>为了方便表示比例关系，网格布局提供了fr关键字（fraction 的缩写，意为&quot;片段&quot;）。如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">.container</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">display</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">grid</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">grid-template-columns</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1fr</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1fr</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面代码表示每列宽度100px，然后自动填充，直到容器不能放置更多的列。</p><p>fr可以与绝对长度的单位结合使用，这时会非常方便。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">.container</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">display</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">grid</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">grid-template-columns</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">150px</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1fr</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">2fr</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面代码表示,第一列的宽度为150像素，第二列的宽度是第三列的一半。</p><h3 id="_4-、minmax" tabindex="-1">(4)、minmax() <a class="header-anchor" href="#_4-、minmax" aria-hidden="true">#</a></h3><p>minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">grid-template-columns</span><span style="color:#D4D4D4;">: 1fr 1fr minmax(100px, 1fr);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>面代码中，minmax(100px, 1fr)表示列宽不小于100px，不大于1fr。</p><h3 id="_5-、auto-关键字" tabindex="-1">(5)、auto 关键字 <a class="header-anchor" href="#_5-、auto-关键字" aria-hidden="true">#</a></h3><p>auto关键字表示由浏览器自己决定长度。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">grid-template-columns</span><span style="color:#D4D4D4;">: 100px auto 100px;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了min-width，且这个值大于最大宽度。</p><h3 id="_6-、row-gap、column-gap、grid-gap-属性" tabindex="-1">(6)、row-gap、column-gap、grid-gap 属性 <a class="header-anchor" href="#_6-、row-gap、column-gap、grid-gap-属性" aria-hidden="true">#</a></h3><p>row-gap属性设置行与行的间隔（行间距），column-gap属性设置列与列的间隔（列间距）。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">.container</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">row-gap</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">20px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">column-gap</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">20px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面代码中，row-gap用于设置行间距，column-gap用于设置列间距。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">grid-gap</span><span style="color:#D4D4D4;">: &lt;</span><span style="color:#569CD6;">row-gap</span><span style="color:#D4D4D4;">&gt; &lt;</span><span style="color:#569CD6;">column-gap</span><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_7-、grid-auto-flow-属性" tabindex="-1">(7)、grid-auto-flow 属性 <a class="header-anchor" href="#_7-、grid-auto-flow-属性" aria-hidden="true">#</a></h3><p>划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是&quot;先行后列&quot;，即先填满第一行，再开始放入第二行，即下图数字的顺序。</p><p>这个顺序由grid-auto-flow属性决定，默认值是row，即&quot;先行后列&quot;。也可以将它设成column，变成&quot;先列后行&quot;。</p><h3 id="_8-、justify-items、align-items、place-items-属性" tabindex="-1">(8)、justify-items、align-items、place-items 属性 <a class="header-anchor" href="#_8-、justify-items、align-items、place-items-属性" aria-hidden="true">#</a></h3><p>justify-items属性设置单元格内容的水平位置（左中右），align-items属性设置单元格内容的垂直位置（上中下）。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">.container</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">justify-items</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">start</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">end</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">center</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">stretch</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">align-items</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">start</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">end</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">center</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">stretch</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这两个属性的写法完全相同，都可以取下面这些值</p><ul><li>start：对齐单元格的起始边缘。</li><li>center：单元格内部居中。</li><li>end：对齐单元格的结束边缘。</li><li>stretch：拉伸，占满单元格的整个宽度（默认值）</li></ul><p>place-items属性是align-items属性和justify-items属性的合并简写形式。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">place-items</span><span style="color:#D4D4D4;">: &lt;</span><span style="color:#569CD6;">align-items</span><span style="color:#D4D4D4;">&gt; &lt;</span><span style="color:#569CD6;">justify-items</span><span style="color:#D4D4D4;">&gt;;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="justify-content、align-content、place-content-属性" tabindex="-1">justify-content、align-content、place-content 属性 <a class="header-anchor" href="#justify-content、align-content、place-content-属性" aria-hidden="true">#</a></h3><p>justify-content属性是整个内容区域在容器里面的水平位置（左中右），align-content属性是整个内容区域的垂直位置（上中下）。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">.container</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">justify-content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">start</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">end</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">center</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">stretch</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">space-around</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">space-between</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">space-evenly</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">align-content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">start</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">end</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">center</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">stretch</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">space-around</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">space-between</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">space-evenly</span><span style="color:#D4D4D4;">;  </span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>详细点击<a href="https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html" target="_blank" rel="noreferrer">阮一峰grid布局</a></p>`,45),o=[e];function t(r,c,i,D,d,y){return n(),a("div",null,o)}const b=s(p,[["render",t]]);export{m as __pageData,b as default};
