import{_ as t,c as a,o as e,a as i}from"./app.47e3cb81.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1. clientHeight和clientWidth(不包含滚动条)","slug":"_1-clientheight和clientwidth-不包含滚动条","link":"#_1-clientheight和clientwidth-不包含滚动条","children":[]},{"level":3,"title":"2.clientLeft和ClientTop（只读）","slug":"_2-clientleft和clienttop-只读","link":"#_2-clientleft和clienttop-只读","children":[]}],"relativePath":"javascript/BOM知识/client家族.md","lastUpdated":1685584113000}'),d={name:"javascript/BOM知识/client家族.md"},l=i('<h3 id="_1-clientheight和clientwidth-不包含滚动条" tabindex="-1" data-v-da65f575>1. clientHeight和clientWidth(不包含滚动条) <a class="header-anchor" href="#_1-clientheight和clientwidth-不包含滚动条" aria-hidden="true" data-v-da65f575>#</a></h3><div class="a" data-v-da65f575>元素的可见高度，包括元素的内容区和内边距的高度 元素的可见宽度，包括元素的内容区和内边距的宽度</div><div class="text1" data-v-da65f575>表示元素节点的 CSS 高度（单位像素），只对块级元素生效，对于行内元素返回0。如果块级元素没有设置 CSS 高度，则返回实际高度。 <p data-v-da65f575>除了元素本身的高度，它还包括padding部分，但是不包括border、margin。如果有水平滚动条，还要减去水平滚动条的高度。注意，这个值始终是整数，如果是小数会被四舍五入。</p><p data-v-da65f575>Element.clientWidth属性返回元素节点的 CSS 宽度，同样只对块级元素有效，也是只包括元素本身的宽度和padding，如果有垂直滚动条，还要减去垂直滚动条的宽度。 <span class="r" data-v-da65f575>必须是块级元素</span></p></div><div class="list" data-v-da65f575>clientWidth: css的宽度(不包括溢出的宽度) + padding</div><div class="list" data-v-da65f575>clientHeight: css的高度(不包括溢出的高度) + padding</div><h3 id="_2-clientleft和clienttop-只读" tabindex="-1" data-v-da65f575>2.clientLeft和ClientTop（只读） <a class="header-anchor" href="#_2-clientleft和clienttop-只读" aria-hidden="true" data-v-da65f575>#</a></h3><div class="a" data-v-da65f575>属性等于元素节点左边框（left border）的宽度（单位像素），不包括左侧的padding和margin。如果没有设置左边框，或者是行内元素（display: inline），该属性返回0。该属性总是返回整数值，如果是小数，会四舍五入</div><span class="r" data-v-da65f575>三大家族中只有scroll有动态变化的数据，offsetLeft、offsetTop是进页面后固定的，不会随着滚动而改变大小</span><div class="list" data-v-da65f575>clientLeft: 左边框宽度</div><div class="list" data-v-da65f575>ClientTop: 上边框宽度</div><p data-v-da65f575><span class="r" data-v-da65f575></span></p>',11),n=[l];function c(s,_,p,r,f,o){return e(),a("div",null,n)}const g=t(d,[["render",c],["__scopeId","data-v-da65f575"]]);export{h as __pageData,g as default};
