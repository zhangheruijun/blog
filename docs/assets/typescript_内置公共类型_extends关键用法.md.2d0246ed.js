import{_ as s,c as n,o as a,a as p}from"./app.95841843.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"泛型用法(分配条件用法)","slug":"泛型用法-分配条件用法","link":"#泛型用法-分配条件用法","children":[]}],"relativePath":"typescript/内置公共类型/extends关键用法.md","lastUpdated":1716544854000}'),l={name:"typescript/内置公共类型/extends关键用法.md"},e=p(`<h3 id="泛型用法-分配条件用法" tabindex="-1">泛型用法(分配条件用法) <a class="header-anchor" href="#泛型用法-分配条件用法" aria-hidden="true">#</a></h3><p>示例：</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">A1</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;"> ? </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> : </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// string </span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">A2</span><span style="color:#D4D4D4;"> = (</span><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;y&#39;</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;"> ? </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> : </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">P</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;"> ? </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> : </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">A3</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">P</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;y&#39;</span><span style="color:#D4D4D4;">&gt; </span><span style="color:#6A9955;">// string | number</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p> A1和A2是extends条件判断的普通用法，和上面的判断方法一样, &#39;y&#39; extends &#39;x&#39; 值为假，所以 &#39;x&#39; | &#39;y&#39; extends &#39;x&#39; 值为假。 </p><p> P是带参数的T的泛型类型，它的表达式和A1, A2的形式完全相同，A3是泛型类型P传入参数&#39;x&#39; | &#39;y&#39;得到的类型，如果将&#39;x&#39; | &#39;y&#39;带入泛型类的表达式，可以看到和A2类型的形式是完全一样的，那是不是说明，A3和A2的类型就是完全一样的呢 </p><p>是不一样的</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">P</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;"> ? </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> : </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">A3</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">P</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;y&#39;</span><span style="color:#D4D4D4;">&gt;  </span><span style="color:#6A9955;">// A3的类型是 string | number</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这种表现确实有些反直觉，这种反直觉的结果的原因就是所谓的<strong>分配条件类型</strong>（Distributive Conditional Types）</p><p> 对于使用extends关键字的条件类型（即上面的三元表达式类型），如果extends前面的参数是一个泛型类型，当传入该参数的是联合类型时，则使用分配律计算最终的结果。分配率是指，将联合类型的联合项拆成单项，分别带入条件类型，然后将每个单项带入得到的结果再联合起来，得到最终的判断结果。 </p><p>还是用上面的例子说明：</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">P</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;"> ? </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> : </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">A3</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">P</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;y&#39;</span><span style="color:#D4D4D4;">&gt;  </span><span style="color:#6A9955;">// A3的类型是 string | number</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p> 该例子中，extends的前面参数是T，T是一个泛型参数，在A3的定义中，给T传入的是 &#39;x&#39; 和 &#39;y&#39; 的联合类型 <code>&#39;x&#39; | &#39;y&#39;</code>, 满足分配律，于是&#39;x&#39;和&#39;y&#39;被拆开，分别代入<code>P&lt;T&gt;</code>: </p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#4FC1FF;">P</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;y&#39;</span><span style="color:#D4D4D4;">&gt; </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">P</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;">&gt; | </span><span style="color:#4FC1FF;">P</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">&#39;y&#39;</span><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>&#39;x&#39;代入得到</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;"> ? </span><span style="color:#9CDCFE;">string</span><span style="color:#D4D4D4;"> : </span><span style="color:#9CDCFE;">number</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">string</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>&#39;y&#39;代入得到</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#CE9178;">&#39;y&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;"> ? </span><span style="color:#9CDCFE;">string</span><span style="color:#D4D4D4;"> : </span><span style="color:#9CDCFE;">number</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">number</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后将每一项代入得到的结果联合起来，得到 string | number</p><h4 id="通常-分配性是期望的行为。为了避免这种行为-您可以extends用方括号将关键字的每一侧括起来。" tabindex="-1">通常，分配性是期望的行为。为了避免这种行为，您可以extends用方括号将关键字的每一侧括起来。 <a class="header-anchor" href="#通常-分配性是期望的行为。为了避免这种行为-您可以extends用方括号将关键字的每一侧括起来。" aria-hidden="true">#</a></h4><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">ToArrayNonDist</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Type</span><span style="color:#D4D4D4;">&gt; = [</span><span style="color:#4EC9B0;">Type</span><span style="color:#D4D4D4;">] </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> [</span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;">] ? </span><span style="color:#4EC9B0;">Type</span><span style="color:#D4D4D4;">[] : </span><span style="color:#4EC9B0;">never</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#6A9955;">// &#39;ArrOfStrOrNum&#39;不再是一个联合类型</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">ArrOfStrOrNum</span><span style="color:#D4D4D4;"> = </span><span style="color:#4EC9B0;">ToArrayNonDist</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">&gt;; </span><span style="color:#6A9955;">// type ArrOfStrOrNum = (string | number)[]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>总之，满足两个要点即可适用分配律：第一，<strong>参数是泛型类型</strong>，第二，<strong>代入参数的是联合类型</strong>,第三，<strong>代入参数没有用中括号包起来</strong></p>`,21),o=[e];function t(r,c,D,y,i,d){return a(),n("div",null,o)}const b=s(l,[["render",t]]);export{u as __pageData,b as default};
