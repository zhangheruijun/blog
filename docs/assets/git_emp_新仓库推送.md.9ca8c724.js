import{_ as s,c as a,o as n,a as p}from"./app.6f306bdd.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"git/emp/新仓库推送.md","lastUpdated":1694685176000}'),l={name:"git/emp/新仓库推送.md"},o=p(`<p>新建的仓库，如果推送到新建的仓库，会有到以下的操作</p><h4 id="_1-创建-git-仓库" tabindex="-1">1.创建 git 仓库: <a class="header-anchor" href="#_1-创建-git-仓库" aria-hidden="true">#</a></h4><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">mkdir</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">vue3</span><span style="color:#D4D4D4;">-</span><span style="color:#9CDCFE;">cli</span><span style="color:#D4D4D4;">-</span><span style="color:#9CDCFE;">template</span></span>
<span class="line"><span style="color:#9CDCFE;">cd</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">vue3</span><span style="color:#D4D4D4;">-</span><span style="color:#9CDCFE;">cli</span><span style="color:#D4D4D4;">-</span><span style="color:#9CDCFE;">template</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">init</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#9CDCFE;">touch</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">README</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">md</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">add</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">README</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">md</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">commit</span><span style="color:#D4D4D4;"> -</span><span style="color:#9CDCFE;">m</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;first commit&quot;</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">remote</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">add</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">origin</span><span style="color:#D4D4D4;"> </span><span style="color:#C8C8C8;">https</span><span style="color:#D4D4D4;">:</span><span style="color:#6A9955;">//xxxxxxxxxxx</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">push</span><span style="color:#D4D4D4;"> -</span><span style="color:#9CDCFE;">u</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">origin</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;master&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="_2-已有仓库" tabindex="-1">2.已有仓库? <a class="header-anchor" href="#_2-已有仓库" aria-hidden="true">#</a></h4><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">cd</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">existing_git_repo</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">remote</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">add</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">origin</span><span style="color:#D4D4D4;"> </span><span style="color:#C8C8C8;">https</span><span style="color:#D4D4D4;">:</span><span style="color:#6A9955;">//xxxxxxxx</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">push</span><span style="color:#D4D4D4;"> -</span><span style="color:#9CDCFE;">u</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">origin</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;master&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,5),e=[o];function t(r,c,D,i,C,y){return n(),a("div",null,e)}const E=s(l,[["render",t]]);export{u as __pageData,E as default};
