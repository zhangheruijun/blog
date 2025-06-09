import{_ as p,c as e,o as t,a}from"./app.5b8334ac.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"注意事项/事项/基本注意事项.md","lastUpdated":1745735065000}'),s={name:"注意事项/事项/基本注意事项.md"},n=a(`<p>1、 dev环境、test环境、product环境必须一致</p><p>2、 图片预览大小测试</p><p>3、 上传大小测试；最小值、最大值测试</p><p>4、 echarts中数据为0时的百分比；数据为0时的展示方式(值差距过大导致小的数据展示不出来)</p><p>5、 展示的数据要看大小效果，不要满屏都是</p><p>6、任何小数的加减乘除都会有&#39;浮点运算&#39; 一定要做保留小数操作 </p><p>7、页面跳转时： 1、每次导航要清掉正在进行中的接口； 2、echarts可以不用做loading效果，其他要做比如-滚动插件 </p><p>8、百分比的时候，考虑0和1的情况，还有小数情况</p><p>9、改数据写使用 FIXME 标记</p><p>10、canvas的画布里面的内容超出了怎么显示(比如图片)</p><p>11、狐火 （-moz）兼容性</p><p>12、涉及到调用接口的地方，要考虑loading，要防止频繁点击、误触、上一次接口结果还没出来这次有点击了造成展示错误等</p><p>13、封装组件尽量使用props </p><p>14、任何代码只要重复，都抽成公共方法</p><p>15、v-html中如果出现英文, 会出现不换行的情况，使用 word-break: break-all 解决</p><p>16、css单位用的自适应vw、rem等，那么像素就不准确，特别是在大屏中，所有要用js获取最终大小，最好用百分比计算（能用百分比就不用固定像素）</p><p>17、loading、暂无数据 考虑抽成公共的模块</p><p>18、className 在props中结构会产生class字段,会影响子元素的样式</p><p>19、所有接口请求都要考虑loading(比如按钮、列表、搜索等...)</p><pre>20、在计算机科学中，存储单位之间的关系如下：
    b (bit): 比特，是最小的数据单位; 简称 &#39;位&#39;; 1位 = 1bit 。
    B (Byte): 字节，1 字节等于 8 比特。
    KB (Kilobyte): 千字节，1 KB 等于 1024 字节。
    MB (Megabyte): 兆字节，1 MB 等于 1024 KB。
    GB (Gigabyte): 吉字节，1 GB 等于 1024 MB。
    具体关系可以总结为：
    1 B = 8 b
    1 KB = 1024 B
    1 MB = 1024 KB
    1 GB = 1024 MB
</pre>`,20),_=[n];function o(r,c,d,i,l,B){return t(),e("div",null,_)}const h=p(s,[["render",o]]);export{b as __pageData,h as default};
