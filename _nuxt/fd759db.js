(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,5],{288:function(t,e,r){var content=r(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("e5418092",content,!0,{sourceMap:!1})},289:function(t,e,r){"use strict";r(288)},290:function(t,e,r){var o=r(82)(!1);o.push([t.i,"header.pageHeader[data-v-293d8cbe]{padding:0 10px;height:80px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}header.pageHeader a[data-v-293d8cbe]{text-decoration:none}header.pageHeader img[data-v-293d8cbe]{display:block;height:60px}header.pageHeader h1[data-v-293d8cbe]{font-size:1.6rem;font-weight:300;color:#fff;text-align:center}header.pageHeader div[data-v-293d8cbe]{width:60px}",""]),t.exports=o},291:function(t,e,r){"use strict";r.r(e);r(289);var o=r(53),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"pageHeader"},[r("NuxtLink",{attrs:{to:"/"}},[r("img",{attrs:{src:"/Logo512x512.png",alt:"JG Logo"}})]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[r("h1",[t._v("Jordan Gomes")])]),t._v(" "),r("div")],1)}),[],!1,null,"293d8cbe",null);e.default=component.exports},293:function(t,e,r){var content=r(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("9e468ee4",content,!0,{sourceMap:!1})},301:function(t,e,r){"use strict";r(293)},302:function(t,e,r){var o=r(82)(!1);o.push([t.i,"a[data-v-ceaccc3a]{text-decoration:none;color:#000}a>div[data-v-ceaccc3a]{max-width:300px}a>div>p[data-v-ceaccc3a]{text-align:justify}img[data-v-ceaccc3a]{max-width:100px;border-radius:50%}",""]),t.exports=o},308:function(t,e,r){var content=r(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("083745fe",content,!0,{sourceMap:!1})},311:function(t,e,r){"use strict";r.r(e);var o={props:{author:{type:Object,required:!0}}},n=(r(301),r(53)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("NuxtLink",{attrs:{to:"/blog/author/"+t.author.name}},[r("div",[r("h4",[t._v("Author")]),t._v(" "),r("img",{attrs:{src:t.author.image}}),t._v(" "),r("p",[t._v(t._s(t.author.name))]),t._v(" "),r("p",[t._v(t._s(t.author.bio))])])])}),[],!1,null,"ceaccc3a",null);e.default=component.exports},319:function(t,e,r){"use strict";r(308)},320:function(t,e,r){var o=r(82)(!1);o.push([t.i,".blogPosts{width:100%;min-height:calc(100vh - 80px);margin:0 auto;background-color:#fff;border-radius:0 0 0 0;padding:20px}.blogPosts article{display:flex;flex-direction:column;max-width:70rem;width:90vw;margin:0 auto;padding:0}.blogPosts article p{margin-top:.3em;word-wrap:break-word}.blogPosts article h1,h2,h3,h4,h5,h6{color:#000}.blogPosts article p.postUpdated{color:#444}.blogPosts article p.postDescription{color:#444;font-style:italic}.blogPosts article>img{max-width:100%;padding-bottom:20px}.nuxt-content-highlight{position:relative}.nuxt-content-highlight .filename{position:absolute;right:0;color:hsla(0,0%,100%,.8);font-weight:300;padding:5px 10px;z-index:10}",""]),t.exports=o},338:function(t,e,r){"use strict";r.r(e);var o=r(8),n=(r(35),r(46),r(44),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,e.next=3,r("articles",o.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},head:function(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description},{hid:"og:title",name:"og:title",content:this.article.title},{hid:"og:type",name:"og:type",content:"article"},{hid:"og:image",name:"og:image",content:"https://jordangomes.com".concat(this.article.img)},{hid:"og:description",name:"og:description",content:this.article.description}]}}}),c=(r(319),r(53)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PageHeader"),t._v(" "),r("main",{staticClass:"blogPosts"},[r("article",[r("img",{attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("p",{staticClass:"postDescription"},[t._v(t._s(t.article.description))]),t._v(" "),r("p",{staticClass:"postUpdated"},[t._v("Article last updated: "+t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),r("br"),t._v(" "),r("nuxt-content",{attrs:{document:t.article}}),t._v(" "),r("br"),t._v(" "),r("author",{attrs:{author:t.article.author}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(291).default,Author:r(311).default})}}]);