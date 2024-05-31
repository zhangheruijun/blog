import{_ as s,c as a,o as n,a as e}from"./app.47e3cb81.js";const p="/docs/assets/revert.817d4a83.jpg",C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"git/revert应用/基本用法.md","lastUpdated":1682326577000}'),l={name:"git/revert应用/基本用法.md"},t=e('<p>reset是回朔到指定的commit版本，指定的commit版本之后的操作commit都重置了。</p><p>revert是删除指定的commit操作的内容，指定的commit之前和之后commit操作都不受影响，与此同时这个操作也会作为一个commit进行提交。</p><p>git revert是用于“反做”某一个版本，以达到撤销该版本的修改的目的。比如，我们commit了三个版本（版本一、版本二、 版本三），突然发现版本二不行（如：有bug），想要撤销版本二，但又不想影响撤销版本三的提交，就可以用 git revert 命令来反做版本二，生成新的版本四，这个版本四里会保留版本三的东西，但撤销了版本二的东西。如下图所示</p><img src="'+p+`"><p>适用场景： 如果我们想撤销之前的某一版本，但是又想保留该目标版本后面的版本，记录下这整个版本变动流程，就可以用这种方法</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 使用“git revert -n 版本号”命令。如下命令，我们反做版本号为8b89621的版本：</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">revert</span><span style="color:#D4D4D4;"> -</span><span style="color:#9CDCFE;">n</span><span style="color:#D4D4D4;"> 8</span><span style="color:#9CDCFE;">b89621019c9adc6fc4d242cd41daeb13aeb9861</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 这里可能会出现冲突，那么需要手动修改冲突的文件。而且要git add 、git commit。</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">add</span><span style="color:#D4D4D4;"> .</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">commit</span><span style="color:#D4D4D4;"> -</span><span style="color:#9CDCFE;">m</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;处理冲突&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 推向远端&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">push</span><span style="color:#D4D4D4;"> --</span><span style="color:#9CDCFE;">force</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="注意事项" tabindex="-1">注意事项： <a class="header-anchor" href="#注意事项" aria-hidden="true">#</a></h4><p>1.少用revert，因为合并冲突怕会把后面提交的干掉，所有你对提交的必须清楚熟悉</p><p>2.如果每次修改的都互不相干文件，这样就不会有冲突，比较适合</p><p><a href="https://www.cnblogs.com/hbtmwangjin/articles/16253157.html" target="_blank" rel="noreferrer">点击详情</a></p>`,10),r=[t];function o(c,i,m,D,d,_){return n(),a("div",null,r)}const y=s(l,[["render",o]]);export{C as __pageData,y as default};
