import{_ as s,c as n,o as a,a as p}from"./app.6f306bdd.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"typescript/常用方法/函数重载.md","lastUpdated":1716544854000}'),l={name:"typescript/常用方法/函数重载.md"},o=p(`<p>某些 JavaScript 函数可以以各种参数计数和类型进行调用。例如，您可以编写一个函数来生成Date采用时间戳（一个参数）或月/日/年规范（三个参数）的 。</p><p>在 TypeScript 中，我们可以通过编写重载签名来指定可以以不同方式调用的函数。为此，请编写一定数量的函数签名（通常是两个或更多），然后是函数体</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">makeDate</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">timestamp</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">Date</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">makeDate</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">m</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">d</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">y</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">Date</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">makeDate</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">mOrTimestamp</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">d</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">y</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">Date</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">d</span><span style="color:#D4D4D4;"> !== </span><span style="color:#569CD6;">undefined</span><span style="color:#D4D4D4;"> &amp;&amp; </span><span style="color:#9CDCFE;">y</span><span style="color:#D4D4D4;"> !== </span><span style="color:#569CD6;">undefined</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">Date</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">y</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">mOrTimestamp</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">d</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  } </span><span style="color:#C586C0;">else</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">Date</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">mOrTimestamp</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">d1</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">makeDate</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">12345678</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">d2</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">makeDate</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">d3</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">makeDate</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">); </span><span style="color:#6A9955;">// No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 函数重载一般用function去调用, 不用const f = () =&gt; void 这种 ☆☆☆☆☆</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在此示例中，我们编写了两个重载：一个接受一个参数，另一个接受三个参数。前两个签名称为重载签名。</p><p>然后，我们编写了一个具有兼容签名的函数实现。函数有一个实现签名，但不能直接调用该签名。即使我们在必需的参数之后编写了一个带有两个可选参数的函数，但不能用两个参数来调用它！</p>`,5),e=[o];function D(t,r,c,y,C,i){return a(),n("div",null,e)}const b=s(l,[["render",D]]);export{u as __pageData,b as default};
