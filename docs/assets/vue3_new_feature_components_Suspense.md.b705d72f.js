import{_ as s,c as n,o as a,a as l}from"./app.0da40ffe.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Suspense","slug":"suspense","link":"#suspense","children":[]},{"level":3,"title":"加载中状态","slug":"加载中状态","link":"#加载中状态","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"vue3/new_feature/components/Suspense.md","lastUpdated":1676541305000}'),p={name:"vue3/new_feature/components/Suspense.md"},e=l(`<h3 id="suspense" tabindex="-1">Suspense <a class="header-anchor" href="#suspense" aria-hidden="true">#</a></h3><p style="color:#e2b630;">▽ 实验性功能</p><p style="color:#e2b630;"><code> Suspense </code> 是一项实验性功能。它不一定会最终成为稳定功能，并且在稳定之前相关 API 也可能会发生变化 </p><p><code>&lt; Suspense &gt;</code>是一个内置组件，用来在组件树中协调对异步依赖的处理。它让我们可以在组件树上层等待下层的多个嵌套异步依赖项解析完成，并可以在等待时渲染一个加载状态。</p><p><code>&lt; Suspense &gt;</code>可以等待的异步依赖有两种：</p><p>1.带有异步 setup() 钩子的组件。这也包含了使用 <code>&lt; script setup &gt;</code> 时有顶层 <code>await</code> 表达式的组件。</p><p>2.<a href="https://cn.vuejs.org/guide/components/async.html" target="_blank" rel="noreferrer">异步组件</a>。</p><h3 id="加载中状态" tabindex="-1">加载中状态 <a class="header-anchor" href="#加载中状态" aria-hidden="true">#</a></h3><p><code>&lt; Suspense &gt;</code>组件有两个插槽：<code>#default </code>和 <code>#fallback</code>。两个插槽都只允许一个直接子节点。在可能的时候都将显示默认槽中的节点。否则将显示后备槽中的节点；看代码</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#F44747;">suspense</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">&lt;!-- 具有深层异步依赖的组件 --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;</span><span style="color:#F44747;">Child</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">&lt;!-- 在 #fallback 插槽中显示 “loading...” --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#D4D4D4;"> #</span><span style="color:#9CDCFE;">fallback</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">span</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">loading...</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">span</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;/</span><span style="color:#F44747;">suspense</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">Child</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./piece/Child.vue&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">我是异步组件</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#6A9955;">// setup顶层用await，就形成了异步组件，等待3s后才展示异步组件</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">a</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Promise</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">resolve</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setTimeout</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">100</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  }, </span><span style="color:#B5CEA8;">3000</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">a</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>界面开始展示‘loading...‘，过了3s后才展示‘我是异步组件‘</strong></p><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://cn.vuejs.org/guide/built-ins/suspense.html" target="_blank" rel="noreferrer">Suspense</a></li></ul>`,14),o=[e];function t(r,c,D,i,y,u){return a(),n("div",null,o)}const C=s(p,[["render",t]]);export{b as __pageData,C as default};
