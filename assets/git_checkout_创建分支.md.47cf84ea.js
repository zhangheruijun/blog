import{_ as s,c as n,o as a,a as l}from"./app.47e3cb81.js";const p="/docs/assets/che.3b462735.png",d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"切换分支","slug":"切换分支","link":"#切换分支","children":[]},{"level":2,"title":"创建分支","slug":"创建分支","link":"#创建分支","children":[{"level":3,"title":"1.创建空的远程分支","slug":"_1-创建空的远程分支","link":"#_1-创建空的远程分支","children":[]},{"level":3,"title":"2.以已有的远程分支为源创建新的远程分支","slug":"_2-以已有的远程分支为源创建新的远程分支","link":"#_2-以已有的远程分支为源创建新的远程分支","children":[]}]}],"relativePath":"git/checkout/创建分支.md","lastUpdated":1682069979000}'),e={name:"git/checkout/创建分支.md"},o=l('<h2 id="切换分支" tabindex="-1">切换分支 <a class="header-anchor" href="#切换分支" aria-hidden="true">#</a></h2><p>使用 checkout 切换分支时，先从本地库查找分支，在本地库没找到时，就去远程库中查找，在远程库也没有找到就会报错 <img src="'+p+`"></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 语法 </span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">checkout</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">分支名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 比如：切换分支到feature_01</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">checkout</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">feature_01</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="创建分支" tabindex="-1">创建分支 <a class="header-anchor" href="#创建分支" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 是以当前分支为起点创建一个新的分支时，主要会用到以下两个命令 </span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">branch</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">分支名</span><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 1.以当前分支为起点创建新的分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">checkout</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">分支名</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// 2.然后在切换到新创建的分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">checkout</span><span style="color:#D4D4D4;"> -</span><span style="color:#9CDCFE;">b</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">分支名</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// 1与2的合并操作</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 比如创建feature_02分支</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">checkout</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">feature_02</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="创建远程分支是以当前分支为根基创建的-所以在创建的时候切换到自己的要复制的分支" tabindex="-1">创建远程分支是以当前分支为根基创建的，所以在创建的时候切换到自己的要复制的分支 <a class="header-anchor" href="#创建远程分支是以当前分支为根基创建的-所以在创建的时候切换到自己的要复制的分支" aria-hidden="true">#</a></h4><h3 id="_1-创建空的远程分支" tabindex="-1">1.创建空的远程分支 <a class="header-anchor" href="#_1-创建空的远程分支" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 创建空的远程分支</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">checkout</span><span style="color:#D4D4D4;"> -</span><span style="color:#9CDCFE;">b</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">分支名</span><span style="color:#D4D4D4;">;  </span><span style="color:#6A9955;">// 创建分支</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">push</span><span style="color:#D4D4D4;"> --</span><span style="color:#9CDCFE;">set</span><span style="color:#D4D4D4;">-</span><span style="color:#9CDCFE;">upstream</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">origin</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">分支名</span><span style="color:#D4D4D4;">;  </span><span style="color:#6A9955;">// 提交分支到远程仓库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 例如创建远程分支master_branch</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">checkout</span><span style="color:#D4D4D4;"> -</span><span style="color:#9CDCFE;">b</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">master_branch</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">push</span><span style="color:#D4D4D4;"> --</span><span style="color:#9CDCFE;">set</span><span style="color:#D4D4D4;">-</span><span style="color:#9CDCFE;">upstream</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">origin</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">master_branch</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2-以已有的远程分支为源创建新的远程分支" tabindex="-1">2.以已有的远程分支为源创建新的远程分支 <a class="header-anchor" href="#_2-以已有的远程分支为源创建新的远程分支" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 以已有的远程分支为源创建新的远程分支</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">checkout</span><span style="color:#D4D4D4;"> -</span><span style="color:#9CDCFE;">b</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">分支名</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">origin</span><span style="color:#D4D4D4;">/</span><span style="color:#9CDCFE;">已有的远程分支</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// 创建分支(这一步也是基于远程分支创建本地分支,等同于克隆远程分支到本地)</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">push</span><span style="color:#D4D4D4;"> --</span><span style="color:#9CDCFE;">set</span><span style="color:#D4D4D4;">-</span><span style="color:#9CDCFE;">upstream</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">origin</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">分支名</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// 提交分支到远程仓库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 例如将已有的master为源创建远程分支master_branch</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">checkout</span><span style="color:#D4D4D4;"> -</span><span style="color:#9CDCFE;">b</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">master_branch</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">origin</span><span style="color:#D4D4D4;">/</span><span style="color:#9CDCFE;">master</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">push</span><span style="color:#D4D4D4;"> --</span><span style="color:#9CDCFE;">set</span><span style="color:#D4D4D4;">-</span><span style="color:#9CDCFE;">upstream</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">origin</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">master_branch</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>详细参考<a href="https://blog.csdn.net/linyichao123/article/details/128359279" target="_blank" rel="noreferrer">git中checkout</a></p>`,11),r=[o];function c(t,D,i,y,C,b){return a(),n("div",null,r)}const h=s(e,[["render",c]]);export{d as __pageData,h as default};
