(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{255:function(t,e,r){var content=r(257);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("e5418092",content,!0,{sourceMap:!1})},256:function(t,e,r){"use strict";r(255)},257:function(t,e,r){(e=r(41)(!1)).push([t.i,"header.pageHeader[data-v-293d8cbe]{padding:0 10px;height:80px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}header.pageHeader a[data-v-293d8cbe]{text-decoration:none}header.pageHeader img[data-v-293d8cbe]{display:block;height:60px}header.pageHeader h1[data-v-293d8cbe]{font-size:1.6rem;font-weight:300;color:#fff;text-align:center}header.pageHeader div[data-v-293d8cbe]{width:60px}",""]),t.exports=e},258:function(t,e,r){"use strict";r.r(e);r(256);var n=r(31),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"pageHeader"},[e("NuxtLink",{attrs:{to:"/"}},[e("img",{attrs:{src:"/Logo512x512.png",alt:"JG Logo"}})]),this._v(" "),e("NuxtLink",{attrs:{to:"/"}},[e("h1",[this._v("Jordan Gomes")])]),this._v(" "),e("div")],1)}),[],!1,null,"293d8cbe",null);e.default=component.exports},264:function(t,e,r){var content=r(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("0b37dc43",content,!0,{sourceMap:!1})},273:function(t,e,r){"use strict";r(264)},274:function(t,e,r){(e=r(41)(!1)).push([t.i,"main.blogPosts{width:100vw;min-height:calc(100vh - 80px);margin:0 auto;background-color:#fff;border-radius:0 0 0 0;padding:20px}main.blogPosts>div.contain-header{color:#000;max-width:70rem;width:90vw;margin:15px auto}main.blogPosts>div.contain-header h1{color:#000}main.blogPosts>div.contain-header img{max-width:300px}ul.article-list{display:flex;flex-direction:column;max-width:70rem;width:90vw;margin:0 auto;padding:0}ul.article-list>li{list-style:none;background-color:#f8f8f8;padding:20px;border-radius:10px}ul.article-list>li a{color:#000;text-decoration:none}ul.article-list>li a img{max-width:100px;margin-right:10px;float:left}h3,h4,h5,ul.article-list>li h2{color:#000;font-weight:300;text-decoration:none}",""]),t.exports=e},297:function(t,e,r){"use strict";r.r(e);r(32);var n=r(6),o={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).where({"author.name":{$regex:[n.author,"i"]}}).without("body").sortBy("createdAt","asc").fetch();case 3:return o=e.sent,e.abrupt("return",{articles:o});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},l=(r(273),r(31)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PageHeader"),t._v(" "),r("main",{staticClass:"blogPosts"},[r("div",{staticClass:"contain-header"},[r("h1",[t._v(t._s(t.articles[0].author.name))]),t._v(" "),r("img",{attrs:{src:t.articles[0].author.image}}),t._v(" "),r("p",[t._v("Bio: "+t._s(t.articles[0].author.bio))]),t._v(" "),r("br"),t._v(" "),r("h3",[t._v("Here are a list of articles by "+t._s(t.articles[0].author.name)+":")])]),t._v(" "),r("ul",{staticClass:"article-list"},t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("img",{attrs:{src:article.img}}),t._v(" "),r("div",[r("h2",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v("by "+t._s(article.author.name))]),t._v(" "),r("p",[t._v(t._s(article.description))])])])],1)})),0)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(258).default})}}]);