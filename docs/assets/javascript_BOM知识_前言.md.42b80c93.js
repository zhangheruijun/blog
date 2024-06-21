import{_ as e,c as t,o as i,a as l}from"./app.fbd6e7ea.js";const d="/docs/assets/b1.791cb754.jpg",a="/docs/assets/b2.31283f6e.jpg";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"left和top分析：","slug":"left和top分析","link":"#left和top分析","children":[]},{"level":3,"title":"width和height分析","slug":"width和height分析","link":"#width和height分析","children":[]},{"level":3,"title":"注意: client只对块级元素生效","slug":"注意-client只对块级元素生效","link":"#注意-client只对块级元素生效","children":[]},{"level":3,"title":"关系图","slug":"关系图","link":"#关系图","children":[]}],"relativePath":"javascript/BOM知识/前言.md","lastUpdated":1685549242000}'),h={name:"javascript/BOM知识/前言.md"},n=l('<img src="'+d+'" style="height:200px;"><h3 id="left和top分析" tabindex="-1">left和top分析： <a class="header-anchor" href="#left和top分析" aria-hidden="true">#</a></h3><ul><li> scrollLeft: 左边滚动的长度; scrollTop: 上边滚动的长度; </li><li> offsetLeft: 当前元素距离有定位的父盒子左边的距离；offsetTop: 当前元素距离有定位的父盒子上边的距离,都是以定位父元素的padding最外层，border最内层为基准 </li><li> clientLeft: 左边边框的宽度；clientTop: 上边边框的宽度 </li></ul><h3 id="width和height分析" tabindex="-1">width和height分析 <a class="header-anchor" href="#width和height分析" aria-hidden="true">#</a></h3><ul><li> scrollWidth/Height: 内容 + padding </li><li> offsetWidth/Height: 内容 + padding + border </li><li> clientWidth/Height: 内容 + padding </li></ul><div class="list red">三大家族返回的属性将会对值取整。如果需要小数值，使用 Element.getBoundingClientRect().</div><div class="list red">Element.getBoundingClientRect().width/height = width/height + padding + border</div><div class="list red">Element.getBoundingClientRect().width/height与offsetWidth/Height其实是相等的</div><h3 id="注意-client只对块级元素生效" tabindex="-1">注意: client只对块级元素生效 <a class="header-anchor" href="#注意-client只对块级元素生效" aria-hidden="true">#</a></h3><h3 id="关系图" tabindex="-1">关系图 <a class="header-anchor" href="#关系图" aria-hidden="true">#</a></h3><img src="'+a+'">',11),s=[n];function r(c,o,_,g,p,f){return i(),t("div",null,s)}const v=e(h,[["render",r]]);export{m as __pageData,v as default};
