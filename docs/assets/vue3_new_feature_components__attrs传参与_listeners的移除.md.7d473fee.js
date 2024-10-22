import{_ as s,c as n,o as a,a as l}from"./app.0da40ffe.js";const p="/docs/vue3img/v3ss.jpg";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"$attrs传参与$listeners的移除","slug":"attrs传参与-listeners的移除","link":"#attrs传参与-listeners的移除","children":[]},{"level":3,"title":"Parent组件(爷爷级组件)","slug":"parent组件-爷爷级组件","link":"#parent组件-爷爷级组件","children":[]},{"level":3,"title":"Child1组件(儿子级组件)","slug":"child1组件-儿子级组件","link":"#child1组件-儿子级组件","children":[]},{"level":3,"title":"Child2组件(孙子级组件)","slug":"child2组件-孙子级组件","link":"#child2组件-孙子级组件","children":[]},{"level":3,"title":"事件传递","slug":"事件传递","link":"#事件传递","children":[]}],"relativePath":"vue3/new_feature/components/$attrs传参与$listeners的移除.md","lastUpdated":1718959682000}'),e={name:"vue3/new_feature/components/$attrs传参与$listeners的移除.md"},o=l(`<h3 id="attrs传参与-listeners的移除" tabindex="-1">$attrs传参与$listeners的移除 <a class="header-anchor" href="#attrs传参与-listeners的移除" aria-hidden="true">#</a></h3><p>父子组件传参一般都是props，但是有父子下面还有嵌套的子组件如果都用props去传参的话会显得很麻烦，所有有了$attrs传递参数，在vue2中也有，但是在vue3中有了一些改变，所有在父组件的属性都会通过<code>$attrs</code>传入子组件，包括事件、style、class，在vue3中移除了<code>$listeners</code>，所以事件函数包含在$arrts中；代码如下:</p><h3 id="parent组件-爷爷级组件" tabindex="-1">Parent组件(爷爷级组件) <a class="header-anchor" href="#parent组件-爷爷级组件" aria-hidden="true">#</a></h3><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#F44747;">Child1</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">user-name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;张三&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">age</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;18&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">:sex</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;sexRef&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">@parent</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;parentUpdate&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&#39;ts&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> {</span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;">} </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">Child1</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./piece/Child1.vue&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">sexRef</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;男&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 孙子级组件触发</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">parentUpdate</span><span style="color:#D4D4D4;"> = () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;触发爷爷级组件&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>此时我将parent组件中只有userName、age、sex三个属性和<span style="color:red;font-weight:bold;">parent一个事件属性</span>传向子类</p><hr><h3 id="child1组件-儿子级组件" tabindex="-1">Child1组件(儿子级组件) <a class="header-anchor" href="#child1组件-儿子级组件" aria-hidden="true">#</a></h3><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dark-plus has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">child1:{{ userName }}</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">&lt;!-- </span></span>
<span class="line highlighted"><span style="color:#6A9955;">  此时$attrs只剩下age、sex属性和parent事件属性，</span></span>
<span class="line"><span style="color:#6A9955;">  因为下面props声明过userName,已经被&#39;消费&#39;掉了</span></span>
<span class="line"><span style="color:#6A9955;"> --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#808080;">&lt;</span><span style="color:#F44747;">Child2</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">v-bind</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;$attrs&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">@parent</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;parentUpdate&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&#39;ts&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">Child2</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./Child2.vue&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Props</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">userName</span><span style="color:#D4D4D4;">:</span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">withDefaults</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">defineProps</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Props</span><span style="color:#D4D4D4;">&gt;(),{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">userName:</span><span style="color:#CE9178;">&#39;&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//  如果emit声明了parent，那么$attrs只剩下age、sex两个属性，parent就不会传递给Child2了</span></span>
<span class="line"><span style="color:#6A9955;">//  const emit = defineEmits&lt;{</span></span>
<span class="line"><span style="color:#6A9955;">//    (e:&#39;parent&#39;):void</span></span>
<span class="line"><span style="color:#6A9955;">//  }&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 子组件触发</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">parentUpdate</span><span style="color:#D4D4D4;"> = () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;触发父级组件&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>Child1组件在props只声明了userName，那么$attrs中属性就是传过来的所有props减去在该页面已经声明的props和已声明的emit(剩余属性)；所有只剩下age、sex两个属性<span style="color:red;font-weight:bold;">和两个parent事件属性(一个爷爷组件的parent，一个自己的parent)</span>传给Child2了</p><hr><h3 id="child2组件-孙子级组件" tabindex="-1">Child2组件(孙子级组件) <a class="header-anchor" href="#child2组件-孙子级组件" aria-hidden="true">#</a></h3><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">&lt;!-- 下面已经声明过age属性,emit声明了parent事件，$attrs只剩下sex属性 --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">child2--{{ $attrs }}</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">@click</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;parent&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">点击触发父级及其父级以上的emit</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">/*父元素传过来的属性((隐式贯穿),子组件如果没有根节点不是单个组件，</span></span>
<span class="line"><span style="color:#6A9955;"> 是多个的话无法被继承;如果是单组件就会被继承(设置inheritAttrs: false后就不会继承)。*/</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">inheritAttrs:</span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;"> }</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&#39;ts&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">interface</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Props</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">   </span><span style="color:#9CDCFE;">age</span><span style="color:#D4D4D4;">:</span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;"> }</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">withDefaults</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">defineProps</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Props</span><span style="color:#D4D4D4;">&gt;(),{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">age:</span><span style="color:#CE9178;">&#39;&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;"> })</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/* parent事件一个数组，在$emit中是[爷爷级的parent,父子级的parent],</span></span>
<span class="line"><span style="color:#6A9955;">    所以声明后就去掉了$attrs的parent事件数组</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">emit</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">defineEmits</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#D4D4D4;">   (</span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;">:</span><span style="color:#CE9178;">&#39;parent&#39;</span><span style="color:#D4D4D4;">):</span><span style="color:#4EC9B0;">void</span></span>
<span class="line"><span style="color:#D4D4D4;"> }&gt;()</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// 触发父级组件</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">parent</span><span style="color:#D4D4D4;"> = () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">   </span><span style="color:#DCDCAA;">emit</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;parent&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;"> }</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>有个注意点，默认情况下，若是单一根节点组件，$attrs 中的所有属性都是直接自动继承自组件的根元素。而多根节点组件则不会如此，同时你也可以通过配置 inheritAttrs 选项来显式地关闭该行为</p><hr><h3 id="事件传递" tabindex="-1">事件传递 <a class="header-anchor" href="#事件传递" aria-hidden="true">#</a></h3><p>当在父组件自定义事件，若没有在子组件中声明时，将自动绑定在父组件的$attrs上；而当在子组件声明时，则不会在父组件的$attrs上出现。所以说$attrs传参有时候会比纯props方便的多，简单理解就是剩余属性，要减去props声明的和emit声明的。</p><p>下面是另一个例子：</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">&lt;!-- Par.vue --&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#F44747;">Pie1</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">@change</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;handleChange&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">Pie1</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./piece/pie1.vue&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">handleChange</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">target</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">&lt;!-- Pie1.vue --&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">select</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">option</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;1&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">Yesterday</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">option</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">option</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;2&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">Today</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">option</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">option</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;3&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">Tomorrow</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">option</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">select</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Par组件中的change事件会传到Pie1组件的根组件，前提是Pie1组件必须有跟元素,相当于父元素传过来的属性必须在子元素中得到‘消费‘,消费如下:</p><h4>1.Props的传递</h4><p class="cc">1.1 第一步：算出剩余属性 = (父props + 父事件) - 当前消费的props - 当前消费的emit</p><p class="cc">1.2 第二部：如果有跟节点, “剩余属性” 默认传递在根节点上(如果根节点你是“组件”也会默认传到上面)</p><p class="cc">1.3 第三部：在js中，剩余属性在 $attrs 中，如果其他元素要添加在标签上增加 v-bind=&quot;$attrs&quot;</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&#39;ts&#39;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#DCDCAA;">defineProps</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">a</span><span style="color:#D4D4D4;">:</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// a 属性被消费掉，还剩 b、gou</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;()</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">·</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;fgg&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">v-bind</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;$attrs&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">1111</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">v-bind</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;$attrs&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">2222</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="`+p+'" alt="Alt text"></p><h4>3.设置inheritAttrs:false，不让其透传</h4><p>详细请见官网<a href="https://cn.vuejs.org/guide/components/attrs.html" target="_blank" rel="noreferrer">透传 Attributes</a></p>',28),t=[o];function r(c,D,y,i,b,C){return a(),n("div",null,t)}const d=s(e,[["render",r]]);export{m as __pageData,d as default};
