import{_ as s,c as n,o as a,a as e}from"./app.95841843.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"完整流程示例","slug":"完整流程示例","link":"#完整流程示例","children":[]}],"relativePath":"git/sparse-checkout应用/基本用法.md","lastUpdated":1737081387000}'),p={name:"git/sparse-checkout应用/基本用法.md"},l=e(`<p><code>git sparse-checkout</code> 是 Git 的功能之一，用于在不克隆整个代码仓库的情况下，只检出仓库中指定的目录或文件。这对大型仓库（如单体仓库）非常有用，可以显著减少本地磁盘占用并提高操作效率。</p><h3 id="完整流程示例" tabindex="-1">完整流程示例 <a class="header-anchor" href="#完整流程示例" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;"># 克隆仓库</span></span>
<span class="line"><span style="color:#D4D4D4;">git clone &lt;repo-url&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">cd repo</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"># 启用稀疏模式</span></span>
<span class="line"><span style="color:#D4D4D4;">git sparse-checkout init</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"># 检出 src 和 docs 目录</span></span>
<span class="line"><span style="color:#D4D4D4;">git sparse-checkout set src docs</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"># 添加 config 目录</span></span>
<span class="line"><span style="color:#D4D4D4;">git sparse-checkout add config</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"># 查看当前稀疏规则</span></span>
<span class="line"><span style="color:#D4D4D4;">cat .git/info/sparse-checkout</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"># 删除现有规则并切换到新的路径集合</span></span>
<span class="line"><span style="color:#D4D4D4;">git sparse-checkout set tests</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"># 禁用稀疏模式，恢复完整检出</span></span>
<span class="line"><span style="color:#D4D4D4;">git sparse-checkout disable</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,3),c=[l];function r(o,t,i,D,b,u){return a(),n("div",null,c)}const _=s(p,[["render",r]]);export{m as __pageData,_ as default};
