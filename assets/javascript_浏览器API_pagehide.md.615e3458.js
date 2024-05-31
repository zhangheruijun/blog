import{_ as s,c as a,o as n,a as e}from"./app.47e3cb81.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/浏览器API/pagehide.md","lastUpdated":1690788699000}'),p={name:"javascript/浏览器API/pagehide.md"},l=e(`<h4 id="当浏览器在显示与会话历史记录不同的页面的过程中隐藏当前页面时-pagehide-页面隐藏-事件会被发送到一个window-。例如-当用户单击浏览器的-后退-按钮时-当前页面在显示上一页之前会收到一个pagehide-页面隐藏-事件。" tabindex="-1">当浏览器在显示与会话历史记录不同的页面的过程中隐藏当前页面时，pagehide(页面隐藏) 事件会被发送到一个Window 。例如，当用户单击浏览器的“后退”按钮时，当前页面在显示上一页之前会收到一个pagehide(页面隐藏) 事件。 <a class="header-anchor" href="#当浏览器在显示与会话历史记录不同的页面的过程中隐藏当前页面时-pagehide-页面隐藏-事件会被发送到一个window-。例如-当用户单击浏览器的-后退-按钮时-当前页面在显示上一页之前会收到一个pagehide-页面隐藏-事件。" aria-hidden="true">#</a></h4><p>页面隐藏、不可见的时候会调用此API,兼容Safari浏览器用的,一般配合visibleStateState一起使用</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">window</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">addEventListener</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;pagehide&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  (</span><span style="color:#9CDCFE;">event</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// Safari浏览器隐藏时</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>详情点击<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/pagehide_event">MDN</a></p>`,4),o=[l];function t(r,i,c,d,D,_){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{b as __pageData,u as default};
