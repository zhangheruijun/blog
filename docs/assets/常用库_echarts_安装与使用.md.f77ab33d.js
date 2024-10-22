import{_ as s,c as n,o as a,a as l}from"./app.0da40ffe.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"使用及其API","slug":"使用及其api","link":"#使用及其api","children":[]}],"relativePath":"常用库/echarts/安装与使用.md","lastUpdated":1692935108000}'),p={name:"常用库/echarts/安装与使用.md"},e=l(`<h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">pnpm</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">add</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">echarts</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="使用及其api" tabindex="-1">使用及其API <a class="header-anchor" href="#使用及其api" aria-hidden="true">#</a></h3><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;echatsRef&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ech-s&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#F44747;">/</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&#39;ts&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">myChart</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">echarts</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">ECharts</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// echarts实例</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">echatsRef</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">HTMLElement</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">null</span><span style="color:#D4D4D4;">&gt;() </span><span style="color:#6A9955;">// echarts对应的dom</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// dom渲染后才执行</span></span>
<span class="line"><span style="color:#DCDCAA;">onMounted</span><span style="color:#D4D4D4;">(()</span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">init</span><span style="color:#D4D4D4;">() </span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 页面卸载后</span></span>
<span class="line"><span style="color:#DCDCAA;">onUnmounted</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">myChart</span><span style="color:#D4D4D4;">?.</span><span style="color:#DCDCAA;">clear</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// 清空当前实例，会移除实例中所有的组件和图表。</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">myChart</span><span style="color:#D4D4D4;">?.</span><span style="color:#DCDCAA;">dispose</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// 销毁实例，销毁后实例无法再被使用。</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">init</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">:</span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">unit</span><span style="color:#D4D4D4;">:</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">myChart</span><span style="color:#D4D4D4;">?.</span><span style="color:#DCDCAA;">clear</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// 清空当前实例，会移除实例中所有的组件和图表。</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">myChart</span><span style="color:#D4D4D4;">?.</span><span style="color:#DCDCAA;">dispose</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// 销毁实例，销毁后实例无法再被使用。</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">container</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">echatsRef</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">myChart</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">echarts</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">init</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">container</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">as</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">HTMLElement</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">option</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">    ...</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 绘制图表</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">myChart</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">setOption</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">option</span><span style="color:#D4D4D4;">, </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,4),o=[e];function r(c,t,D,y,i,C){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{u as __pageData,m as default};
