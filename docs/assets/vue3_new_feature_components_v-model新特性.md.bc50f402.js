import{_ as s,c as n,o as a,a as l}from"./app.fbd6e7ea.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"v-model新特性","slug":"v-model新特性","link":"#v-model新特性","children":[]}],"relativePath":"vue3/new_feature/components/v-model新特性.md","lastUpdated":1676541305000}'),p={name:"vue3/new_feature/components/v-model新特性.md"},e=l(`<h3 id="v-model新特性" tabindex="-1">v-model新特性 <a class="header-anchor" href="#v-model新特性" aria-hidden="true">#</a></h3><p>vue中props的值子组件中是不允许改变的，但是vue提供了方法可以解决；在vue2中用的是<code>.sync</code>修饰符，而vue3中是新的写法； 用的是<code>v-model</code>修饰符。如下：</p><h5 id="父组件" tabindex="-1">父组件 <a class="header-anchor" href="#父组件" aria-hidden="true">#</a></h5><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">style</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;padding-bottom:50px&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">父元素--------{{ user }}</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#808080;">&lt;</span><span style="color:#F44747;">Child</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">v-model:msg</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;user&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&#39;ts&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">Child</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./piece/Child.vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> {</span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;">} </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">user</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;props初始值&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>其中组件Child中<strong>v-model:msg=&quot;user&quot;</strong> 与v-bind相比只是在v-bind前面加上v-mode；这样就可以子组件中改变<code>props</code>，改变后父组件与子组件的props值都会改变</p><hr><h5 id="子组件" tabindex="-1">子组件 <a class="header-anchor" href="#子组件" aria-hidden="true">#</a></h5><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">@click</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;headleFun&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">点击子元素改变props--------{{ msg }}</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&#39;ts&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#6A9955;">// props类型生声明必须在本页面内,不能写在其他页面</span></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Props</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">msg</span><span style="color:#D4D4D4;">:</span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 在ts中获取props的写法</span></span>
<span class="line"><span style="color:#DCDCAA;">withDefaults</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">defineProps</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Props</span><span style="color:#D4D4D4;">&gt;(),{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">msg:</span><span style="color:#CE9178;">&#39;&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 在ts中声明emit的写法</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">emit</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">defineEmits</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#D4D4D4;">  (</span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;">:</span><span style="color:#CE9178;">&#39;update:msg&#39;</span><span style="color:#D4D4D4;">,</span><span style="color:#9CDCFE;">params</span><span style="color:#D4D4D4;">:</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">):</span><span style="color:#4EC9B0;">void</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 点击触发函数</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">headleFun</span><span style="color:#D4D4D4;"> = () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">emit</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;update:msg&#39;</span><span style="color:#D4D4D4;">,</span><span style="color:#CE9178;">&#39;点击子元素props改变后的值&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>注意：ts中props与emit的写法</p>`,9),o=[e];function r(t,c,D,i,y,d){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{C as __pageData,b as default};
