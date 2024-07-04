import{_ as s,c as n,o as a,a as l}from"./app.6f306bdd.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]}],"relativePath":"常用库/echarts/水波纹图.md","lastUpdated":1692935108000}'),p={name:"常用库/echarts/水波纹图.md"},e=l(`<h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">pnpm</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">add</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">echarts</span><span style="color:#D4D4D4;">-</span><span style="color:#9CDCFE;">liquidfill</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 引入方法</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">*</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">as</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">echarts</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;echarts&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;echarts-liquidfill&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C8C8C8;">series</span><span style="color:#D4D4D4;">:[</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;liquidFill&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">radius</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;85%&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">center</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&quot;50%&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;40%&quot;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// waveAnimation: true, //波动动画，默认true</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// animationDuration: 0, // 动画时间</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// amplitude: 0, //波动幅度</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// animationDurationUpdate: 0, // 动画更新时间</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// data: [0.5, 0.4, { //具体设置每一个水波的样式</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">//   value: 0.5, // 值</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">//   direction: &#39;left&#39;, //波动方向：left、right</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">//   itemStyle: {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">//     color: &#39;red&#39; //颜色</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">//   }</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// },], //波纹条数及具体数值</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// color: [&#39;red&#39;, &#39;#0f0&#39;, &#39;rgb(0, 0, 255)&#39;],	//波纹颜色	    	        </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">itemStyle</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">opacity:</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">0.6</span><span style="color:#D4D4D4;">	</span><span style="color:#6A9955;">//透明度</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">emphasis</span><span style="color:#D4D4D4;">: { </span><span style="color:#6A9955;">//强调的效果</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">itemStyle:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">opacity:</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">0.9</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">backgroundStyle</span><span style="color:#D4D4D4;">: { </span><span style="color:#6A9955;">//背景样式</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">borderWidth:</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">borderColor:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;red&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">color:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;yellow&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">outline</span><span style="color:#D4D4D4;">: { </span><span style="color:#6A9955;">//外边线样式</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">show:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// 是否显示外边线</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">label</span><span style="color:#D4D4D4;">: {</span><span style="color:#6A9955;">//文字样式</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">position:</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">&#39;38%&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;40%&#39;</span><span style="color:#D4D4D4;">], </span><span style="color:#6A9955;">//位置</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">formatter</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;ECharts</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Liquid Fill&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">fontSize:</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">40</span><span style="color:#D4D4D4;">,</span><span style="color:#6A9955;">//字体大小</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">color:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#D94854&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">//颜色</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div>`,2),o=[e];function r(c,D,t,y,i,b){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{u as __pageData,m as default};
