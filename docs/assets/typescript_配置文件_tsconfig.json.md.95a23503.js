import{_ as s,c as n,o as a,a as p}from"./app.0da40ffe.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"typescript/配置文件/tsconfig.json.md","lastUpdated":1693304145000}'),l={name:"typescript/配置文件/tsconfig.json.md"},e=p(`<p>下面列举一些重要的配置</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;compilerOptions&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/* Visit https://aka.ms/tsconfig to read more about this file */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/* 语言与环境 */</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/* ts编译成js后的语法是es5语法,比如const会编译成var,一般都是做兼容处理要设置 */</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;target&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;ES5&quot;</span><span style="color:#D4D4D4;">,          </span></span>
<span class="line"><span style="color:#D4D4D4;">    </span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/* 指定要包含在编译中的库文件,用于辅助开发代码提示,生成d.ts;比如console会有log提示 */</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/* 一般默认会开启,也相当于白名单 */</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// &quot;lib&quot;: [],   </span></span>
<span class="line"><span style="color:#D4D4D4;">    </span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/* 禁用包含任何库文件，包括默认的lib.d.ts */</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// &quot;noLib&quot;: true,                 </span></span>
<span class="line"><span style="color:#D4D4D4;">    </span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/* Modules */</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 把代码编译成esmodule的形式,也可以设置成cjs</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;module&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;ESNext&quot;</span><span style="color:#D4D4D4;">,   </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 指定源文件中的根文件夹</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// &quot;rootDir&quot;:&quot;./&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/* 指定TypeScript如何从给定的模块说明符中查找文件,默认就是node */</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// &quot;moduleResolution&quot;: &quot;node&quot;,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// baseUrl&quot;: &quot;./src&quot;, </span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/* 代表import查找模块,先从src这个文件下去查找,如果找不到就从node_modules里面去找,一般设置 &quot;baseUrl&quot;: &quot;.&quot; */</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 解析非相对模块的基地址，默认是当前目录</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;baseUrl&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;.&quot;</span><span style="color:#D4D4D4;">, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/* 路径别名,比如 import A from &#39;@/components/A.vue&#39;,等同于 import A from &#39;./src/components/A.vue&#39;  */</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// baseUrl与paths一般都是组合用</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;paths&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;@/*&quot;</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&quot;./src/*&quot;</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;declaration&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// 生成相应的 &#39;.d.ts&#39; 文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;outDir&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;dist&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// 指定输出目录,ts打包所在的目录,否则会生成在对应的ts文件所在目录</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/* 1.指定哪些文件要被边编译成js,否则默认当前目录下除了exclude之外的所有.ts, .d.ts,.tsx文件</span></span>
<span class="line"><span style="color:#6A9955;">    比如下面指定了3个类型,只有这三个文件的类型才被编译成js </span></span>
<span class="line"><span style="color:#6A9955;">     2.在include中的文件也会有ts代码提示</span></span>
<span class="line"><span style="color:#6A9955;">     3.如果不指或者不写include,那么会编译所有文件</span></span>
<span class="line"><span style="color:#6A9955;">  */</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;include&quot;</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&quot;env.d.ts&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;src/**/*&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;src/**/*.vue&quot;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/* 指定哪些文件不被编译成js,与include相反 </span></span>
<span class="line"><span style="color:#6A9955;">     下面表示 src/api目录下的所有文件都不会被编译,像是个黑名单</span></span>
<span class="line"><span style="color:#6A9955;">  */</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;exclude&quot;</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&quot;./src/api/**&quot;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 指定个别文件编译，只能写文件名，开发中一般用include就可以了</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;files&quot;</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&quot;a.ts&quot;</span><span style="color:#D4D4D4;">,</span><span style="color:#CE9178;">&quot;b.ts&quot;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">//用于继承另一个tsconfig.json文件的配置,一般项目大的时候，把配置文件拆分了，就可以继承</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;extends&quot;</span><span style="color:#D4D4D4;">:</span><span style="color:#CE9178;">&quot;./tsconfig.app.json&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/*指定工程引用依赖。在项目开发中，有时候为了方便将前端项目和后端node项目放在同一个目录下开发，两个项目依赖同一个配置文件和通用文件，但我们希望前后端项目进行灵活的分别打包，那么我们可以进行如下配置：*/</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;references&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./tsconfig.node.json&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;path&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./tsconfig.app.json&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div>`,2),o=[e];function c(r,t,D,i,u,b){return a(),n("div",null,o)}const q=s(l,[["render",c]]);export{m as __pageData,q as default};
