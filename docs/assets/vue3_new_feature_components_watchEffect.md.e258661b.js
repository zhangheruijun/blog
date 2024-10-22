import{_ as s,c as n,o as a,a as l}from"./app.6f306bdd.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"watchEffect巧用","slug":"watcheffect巧用","link":"#watcheffect巧用","children":[]}],"relativePath":"vue3/new_feature/components/watchEffect.md","lastUpdated":1676627636000}'),p={name:"vue3/new_feature/components/watchEffect.md"},e=l(`<p>立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。</p><ul><li>类型</li></ul><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">watchEffect</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">effect</span><span style="color:#D4D4D4;">: (</span><span style="color:#9CDCFE;">onCleanup</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">OnCleanup</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">WatchEffectOptions</span></span>
<span class="line"><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">StopHandle</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">OnCleanup</span><span style="color:#D4D4D4;"> = (</span><span style="color:#DCDCAA;">cleanupFn</span><span style="color:#D4D4D4;">: () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">void</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">WatchEffectOptions</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">flush</span><span style="color:#D4D4D4;">?: </span><span style="color:#CE9178;">&#39;pre&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;post&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;sync&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// 默认：&#39;pre&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">onTrack</span><span style="color:#D4D4D4;">?: (</span><span style="color:#9CDCFE;">event</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">DebuggerEvent</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">void</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">onTrigger</span><span style="color:#D4D4D4;">?: (</span><span style="color:#9CDCFE;">event</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">DebuggerEvent</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">void</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">StopHandle</span><span style="color:#D4D4D4;"> = () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">void</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="watcheffect巧用" tabindex="-1">watchEffect巧用 <a class="header-anchor" href="#watcheffect巧用" aria-hidden="true">#</a></h3><p>利用watchEffect的非惰性执行，以及传入的onInvalidate函数，我们可以做什么事情了？ 场景一：平时我们定义一个定时器，或者监听某个事件，我们需要在mounted生命周期钩子函数内定义或者注册，然后组件销毁之前在beforeUnmount钩子函数里清除定时器或取消监听。这样做我们的逻辑被分散在两个生命周期，不利于维护和阅读。 如果我利用watchEffect，创造和销毁逻辑放在了一起，此时代码更加优雅易读~</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">watchEffect</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">reactive</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">onMounted</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">watchEffect</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">timeInter</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// 计时器</span></span>
<span class="line"><span style="color:#DCDCAA;">onMounted</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">    进入页面默认会执行一次；监听的值有变化时,</span></span>
<span class="line"><span style="color:#6A9955;">    onInvalidate也会执行一次,执行stop时(停止监听函数)也会执行,</span></span>
<span class="line"><span style="color:#6A9955;">    因为在页面卸载会隐式调用stop,所以onInvalidate可以顶替beforeUnmount</span></span>
<span class="line"><span style="color:#6A9955;">    也就是说onInvalidate在监听的数据变化之前调用一次;页面卸载的时候也会调用一次</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">timeInter</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">setTimeout</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;计时器&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  }, </span><span style="color:#B5CEA8;">5000</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">watchEffect</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#D4D4D4;">    (</span><span style="color:#9CDCFE;">onInvalidate</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">interCountup</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">Countup</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">36.23</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">countupRef</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">, {});</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">onInvalidate</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;组件卸载时触发&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#DCDCAA;">clearTimeout</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">timeInter</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">      });</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    { </span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">flush:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;post&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// 默认是pre</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 1. &#39;pre&#39; 指定的回调应该在渲染前被调用。它允许回调在模板运行前更新了其他值。dom更前(默认值)</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 2. &#39;post&#39; 值是可以用来将回调推迟到渲染之后的。如果回调需要通过 $refs 访问更新的 DOM 或子组件，那么则使用该值。dom更新后</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 3. &#39;sync&#39;; 可以监听同步的数据，不推荐</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 他们之间的顺序 :&#39;pre&#39; =&gt; &#39;DOM更新&#39; =&gt; &#39;post&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// watch与watch_watchEffect中的flush一样</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 缓冲回调不仅可以提高性能，还有助于保证数据的一致性。在执行数据更新的代码完成之前，侦听器不会被触发。</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  );</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"><span style="color:#6A9955;">// onBeforeUnmount(() =&gt; {</span></span>
<span class="line"><span style="color:#6A9955;">//   clearTimeout(timeInter);</span></span>
<span class="line"><span style="color:#6A9955;">// });</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,6),o=[e];function c(r,t,D,y,i,C){return a(),n("div",null,o)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};