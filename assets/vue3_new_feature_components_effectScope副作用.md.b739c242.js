import{_ as s,c as n,o as a,a as p}from"./app.47e3cb81.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"effectScope()","slug":"effectscope","link":"#effectscope","children":[]},{"level":3,"title":"getCurrentScope()","slug":"getcurrentscope","link":"#getcurrentscope","children":[]},{"level":3,"title":"onScopeDispose()","slug":"onscopedispose","link":"#onscopedispose","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"Index.vue","slug":"index-vue","link":"#index-vue","children":[]},{"level":3,"title":"useEffectScope.ts","slug":"useeffectscope-ts","link":"#useeffectscope-ts","children":[]}],"relativePath":"vue3/new_feature/components/effectScope副作用.md","lastUpdated":1676878078000}'),l={name:"vue3/new_feature/components/effectScope副作用.md"},e=p(`<h3 id="effectscope" tabindex="-1">effectScope() <a class="header-anchor" href="#effectscope" aria-hidden="true">#</a></h3><p>创建一个 effect 作用域，可以捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理。对于该 API 的使用细节，请查阅对应的 <a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0041-reactivity-effect-scope.md" target="_blank" rel="noreferrer">RFC</a>。</p><ul><li>类型</li></ul><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">effectScope</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">detached</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">EffectScope</span></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">EffectScope</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">run</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt;(</span><span style="color:#DCDCAA;">fn</span><span style="color:#D4D4D4;">: () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">undefined</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// 如果作用域不活跃就为 undefined</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">stop</span><span style="color:#D4D4D4;">(): </span><span style="color:#4EC9B0;">void</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="getcurrentscope" tabindex="-1">getCurrentScope() <a class="header-anchor" href="#getcurrentscope" aria-hidden="true">#</a></h3><p>如果有的话，返回当前活跃的effect 作用域。</p><ul><li>类型</li></ul><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">getCurrentScope</span><span style="color:#D4D4D4;">(): </span><span style="color:#4EC9B0;">EffectScope</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">undefined</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="onscopedispose" tabindex="-1">onScopeDispose() <a class="header-anchor" href="#onscopedispose" aria-hidden="true">#</a></h3><p>在当前活跃的 effect 作用域上注册一个处理回调函数。当相关的 effect 作用域停止时会调用这个回调函数。</p><p>这个方法可以作为可复用的组合式函数中 onUnmounted 的替代品，它并不与组件耦合，因为每一个 Vue 组件的 setup() 函数也是在一个 effect 作用域中调用的</p><ul><li>类型</li></ul><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">onScopeDispose</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">fn</span><span style="color:#D4D4D4;">: () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">void</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h3><p>在封装hooks的时候，比如watch、computed、watchEffect等会产生副作用，这是要单独创造effect，便于清理内存。如下</p><h3 id="index-vue" tabindex="-1">Index.vue <a class="header-anchor" href="#index-vue" aria-hidden="true">#</a></h3><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">&lt;!-- Index.vue --&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">@click</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;onList&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">{{ x }}--{{ numData?.num2 }}--{{ numData?.num4 }}</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">onUnmounted</span><span style="color:#D4D4D4;">,</span><span style="color:#9CDCFE;">onBeforeUnmount</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">useEffectScope</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@/hooks/useEffectScope&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useRouter</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue-router&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">router</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useRouter</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> { </span><span style="color:#4FC1FF;">x</span><span style="color:#D4D4D4;">, </span><span style="color:#4FC1FF;">numData</span><span style="color:#D4D4D4;">, </span><span style="color:#4FC1FF;">dispose</span><span style="color:#D4D4D4;"> } = </span><span style="color:#DCDCAA;">useEffectScope</span><span style="color:#D4D4D4;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">onList</span><span style="color:#D4D4D4;"> = () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// x.value = 20;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">push</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/test&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 查看副作用清除</span></span>
<span class="line"><span style="color:#DCDCAA;">onBeforeUnmount</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">dispose</span><span style="color:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="useeffectscope-ts" tabindex="-1">useEffectScope.ts <a class="header-anchor" href="#useeffectscope-ts" aria-hidden="true">#</a></h3><p>下面申明的computed副作用会在组件卸载自动清空内存，如果不用effectScope，组价卸载不会清空内存， 造成内存泄露，特别是多个组件引用该hooks，一定要注意。</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// @/src/hooks/useEffectScope.ts</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">computed</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">Ref</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">ComputedRef</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">effectScope</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">onScopeDispose</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">getCurrentScope</span></span>
<span class="line"><span style="color:#D4D4D4;">} </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Backinter</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">x</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Ref</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">&gt;;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">numData</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    | {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">num2</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">ComputedRef</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">&gt;;</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">num4</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">ComputedRef</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">&gt;;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    | </span><span style="color:#9CDCFE;">undefined</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">dispose</span><span style="color:#D4D4D4;">: () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">useMousePosition</span><span style="color:#D4D4D4;">(): </span><span style="color:#4EC9B0;">Backinter</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">scope</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">effectScope</span><span style="color:#D4D4D4;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">x</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">&gt;(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">numData</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">scope</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">run</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// computed、watch、watchEffect等副作用有缓存,会收集到effects 中。在组件卸载时这些副作用会自动清除。</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">num2</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">computed</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">x</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;"> * </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">num4</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">computed</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">x</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;"> * </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onScopeDispose</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;副作用关闭时,等同于onUnmounted函数&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    });</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">num2</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">num4</span><span style="color:#D4D4D4;"> };</span></span>
<span class="line"><span style="color:#D4D4D4;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">dispose</span><span style="color:#D4D4D4;"> = () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 查看effectScope是否自动清除</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">setTimeout</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">getCurrentScope</span><span style="color:#D4D4D4;">()); </span><span style="color:#6A9955;">// undefined</span></span>
<span class="line"><span style="color:#D4D4D4;">    }, </span><span style="color:#B5CEA8;">1000</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 处理掉当前作用域内的所有 effect</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// scope.stop();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">x</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">numData</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">dispose</span><span style="color:#D4D4D4;"> };</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div>`,20),o=[e];function c(D,r,t,y,i,u){return a(),n("div",null,o)}const d=s(l,[["render",c]]);export{b as __pageData,d as default};
