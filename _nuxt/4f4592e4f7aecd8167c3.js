(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{363:function(t,e,r){"use strict";r.r(e);r(84);var s=r(19),a=r.n(s),n=r(28),i=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"wrapper"}},[r("header",[r("div",{staticClass:"inner"},[r("h2",[t._v(t._s(t.$store.state.aboutMeData.header))]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.$store.state.aboutMeData.teaser)}})])]),t._v(" "),r("div",{staticClass:"wrapper"},[r("div",{staticClass:"inner"},t._l(t.$store.state.aboutMeData.articles,function(e,s){return r("div",[r("h3",{staticClass:"major"},[t._v(t._s(e.header))]),t._v(" "),r("span",{class:"image "+(s%2!=0?"right":"left")},[r("img",{attrs:{src:e.image,alt:e.header}})]),t._v(" "),r("div",{domProps:{innerHTML:t._s(e.teaser)}}),t._v(" "),e.text?r("div",{domProps:{innerHTML:t._s(e.text)}}):t._e()])}))])])},[],!1,null,null,null);i.options.__file="About-me.vue";var o,u={components:{AboutMe:i.exports},mounted:function(){this.$store.commit("setBannerVisible",!1)},fetch:(o=a()(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,e.params,t.next=3,r.dispatch("getAboutMeData");case 3:case"end":return t.stop()}},t,this)})),function(t){return o.apply(this,arguments)})},c=Object(n.a)(u,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("AboutMe")],1)},[],!1,null,null,null);c.options.__file="about.vue";e.default=c.exports}}]);