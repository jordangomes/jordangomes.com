(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,5],{288:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("e5418092",content,!0,{sourceMap:!1})},289:function(t,e,n){"use strict";n(288)},290:function(t,e,n){var r=n(82)(!1);r.push([t.i,"header.pageHeader[data-v-293d8cbe]{padding:0 10px;height:80px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}header.pageHeader a[data-v-293d8cbe]{text-decoration:none}header.pageHeader img[data-v-293d8cbe]{display:block;height:60px}header.pageHeader h1[data-v-293d8cbe]{font-size:1.6rem;font-weight:300;color:#fff;text-align:center}header.pageHeader div[data-v-293d8cbe]{width:60px}",""]),t.exports=r},291:function(t,e,n){"use strict";n.r(e);n(289);var r=n(53),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"pageHeader"},[n("NuxtLink",{attrs:{to:"/"}},[n("img",{attrs:{src:"/Logo512x512.png",alt:"JG Logo"}})]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[n("h1",[t._v("Jordan Gomes")])]),t._v(" "),n("div")],1)}),[],!1,null,"293d8cbe",null);e.default=component.exports},292:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("8cf4005e",content,!0,{sourceMap:!1})},295:function(t,e,n){"use strict";var r=n(5),o=n(3),c=n(67),l=n(26),d=n(37),f=n(12),m=n(4),v=n(209),h=n(144),k=n(296),y=n(297),x=n(84),w=n(298),_=[],I=o(_.sort),C=o(_.push),S=m((function(){_.sort(void 0)})),j=m((function(){_.sort(null)})),O=h("sort"),E=!m((function(){if(x)return x<70;if(!(k&&k>3)){if(y)return!0;if(w)return w<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)_.push({k:t+n,v:e})}for(_.sort((function(a,b){return b.v-a.v})),n=0;n<_.length;n++)t=_[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:S||!j||!O||!E},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(E)return void 0===t?I(e):I(e,t);var n,r,o=[],m=d(e);for(r=0;r<m;r++)r in e&&C(o,e[r]);for(v(o,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:f(e)>f(n)?1:-1}}(t)),n=o.length,r=0;r<n;)e[r]=o[r++];for(;r<m;)delete e[r++];return e}})},296:function(t,e,n){var r=n(66).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},297:function(t,e,n){var r=n(66);t.exports=/MSIE|Trident/.test(r)},298:function(t,e,n){var r=n(66).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},299:function(t,e,n){"use strict";n(292)},300:function(t,e,n){var r=n(82)(!1);r.push([t.i,"main.blogPosts .error[data-v-7d7100fe]{color:#000;font-size:1.2rem;text-align:center;margin:15px auto}ul.image-grid[data-v-7d7100fe]{list-style:none;display:flex;flex-wrap:wrap;justify-content:center;max-width:100%;padding:0}ul.image-grid li[data-v-7d7100fe]{height:auto;max-height:500px;max-width:100%;flex-shrink:1;position:relative}@media (min-height:750px) and (min-width:800px){ul.image-grid li[data-v-7d7100fe]{height:40vh}}ul.image-grid li:hover .song-overlay[data-v-7d7100fe]{display:flex;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0,0,0,.65);opacity:1;-webkit-animation-name:fadeInOpacity-data-v-7d7100fe;animation-name:fadeInOpacity-data-v-7d7100fe;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-duration:.5s;animation-duration:.5s}ul.image-grid li.active:hover .slideIn[data-v-7d7100fe]{-webkit-animation:none;animation:none}ul.image-grid li.active .song-overlay[data-v-7d7100fe]{display:flex;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0,0,0,.65);opacity:1;-webkit-animation-name:fadeInOpacity-data-v-7d7100fe;animation-name:fadeInOpacity-data-v-7d7100fe;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-duration:.5s;animation-duration:.5s}ul.image-grid li .song-overlay[data-v-7d7100fe]{overflow:hidden;position:absolute;width:100%;height:100%;opacity:0;align-items:center;justify-content:center;flex-direction:column;color:#fff}@-webkit-keyframes fadeInOpacity-data-v-7d7100fe{0%{opacity:0;-webkit-backdrop-filter:blur(0);backdrop-filter:blur(0)}to{opacity:1;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}}@keyframes fadeInOpacity-data-v-7d7100fe{0%{opacity:0;-webkit-backdrop-filter:blur(0);backdrop-filter:blur(0)}to{opacity:1;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}}ul.image-grid li .spotify-link[data-v-7d7100fe]{display:none}ul.image-grid li:hover .spotify-link[data-v-7d7100fe]{color:#fff;position:absolute;right:.5em;top:.5em;font-size:1.8rem;z-index:1;display:block}ul.image-grid li:hover .spotify-link svg[data-v-7d7100fe]{height:auto;vertical-align:top}ul.image-grid li .song-overlay p[data-v-7d7100fe]{color:#fff}ul.image-grid li .song-overlay .pause[data-v-7d7100fe],ul.image-grid li .song-overlay .play[data-v-7d7100fe]{background:none;border:none;outline:none;color:#fff;font-size:5rem}ul.image-grid li .song-overlay .song-name[data-v-7d7100fe]{max-width:80%;text-align:center;font-size:1.5rem}ul.image-grid li .song-overlay .song-artists[data-v-7d7100fe]{max-width:80%;text-align:center}img[data-v-7d7100fe]{max-height:100%;min-width:100%;max-width:100%;-o-object-fit:cover;object-fit:cover;vertical-align:bottom}ul.image-grid li:hover .slideIn[data-v-7d7100fe]{-webkit-animation-name:slideInElements-data-v-7d7100fe;animation-name:slideInElements-data-v-7d7100fe;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-duration:.3s;animation-duration:.3s}@-webkit-keyframes slideInElements-data-v-7d7100fe{0%{transform:translateY(-30px)}to{transform:translateY(0)}}@keyframes slideInElements-data-v-7d7100fe{0%{transform:translateY(-30px)}to{transform:translateY(0)}}",""]),t.exports=r},306:function(t,e,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("65535862",content,!0,{sourceMap:!1})},310:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(44),n(295),n(11),n(34),n(25),n(80)),c=n.n(o),l={data:function(){return{error:"",songs:[],playingSong:"",audio:""}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",o=[],e.prev=2,e.next=5,c.a.get("https://spotifyplaylist.apps.jordangomes.com/playlist");case 5:l=e.sent,r=l.data,o=r.sort((function(a,b){var t=new Date(Date.parse(a.added_at));return new Date(Date.parse(b.added_at))-t})),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(r),console.error(e.t0),n="Couldn't download the tunes right now :( please try again later";case 15:t.songs=o,t.error=n;case 17:case"end":return e.stop()}}),e,null,[[2,10]])})))()},created:function(){this.$fetch()},methods:{playSong:function(t){var e=this;this.songs.forEach((function(n){n.track.id==t&&(console.log("Playing ".concat(n.track.name)),""!==e.playingSong&&(e.$refs[e.playingSong][0].classList.remove("active"),e.audio.pause(),e.audio.currentTime=0),e.audio=new Audio(n.track.preview_url),e.audio.addEventListener("ended",(function(t){e.pauseSong()})),e.audio.play(),e.$refs[t][0].classList.add("active"))})),this.playingSong=t},pauseSong:function(){this.$refs[this.playingSong][0].classList.remove("active"),this.playingSong="",this.audio.pause(),this.audio.currentTime=0}}},d=(n(299),n(53)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[""!==t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),t._v(" "),""!==t.error?n("p",{staticClass:"error"},[n("button",{on:{click:t.$fetch}},[t._v("Refresh")])]):t._e(),t._v(" "),n("ul",{staticClass:"image-grid"},t._l(t.songs,(function(e){return n("li",{key:e.track.id,ref:e.track.id,refInFor:!0},[n("a",{staticClass:"spotify-link slideIn",attrs:{href:e.track.external_urls.spotify}},[n("font-awesome-icon",{attrs:{icon:["fab","spotify"]}})],1),t._v(" "),n("div",{staticClass:"song-overlay"},[e.track.id!=t.playingSong&&e.track.preview_url?n("button",{staticClass:"play slideIn",on:{click:function(n){return t.playSong(e.track.id)}}},[n("font-awesome-icon",{attrs:{icon:"play-circle"}})],1):t._e(),t._v(" "),e.track.id==t.playingSong?n("button",{staticClass:"pause",on:{click:function(e){return t.pauseSong()}}},[n("font-awesome-icon",{attrs:{icon:"pause-circle"}})],1):t._e(),t._v(" "),n("p",{staticClass:"song-name slideIn"},[t._v(t._s(e.track.name))]),t._v(" "),n("p",{staticClass:"song-artists slideIn"},t._l(e.track.artists,(function(r,o){return n("span",{key:r.id},[t._v("\n                      "+t._s(r.name)),o!=e.track.artists.length-1?n("span",[t._v(", ")]):t._e()])})),0)]),t._v(" "),n("img",{attrs:{src:e.track.album.images[0].url}})])})),0)])}),[],!1,null,"7d7100fe",null);e.default=component.exports},315:function(t,e,n){"use strict";n(306)},316:function(t,e,n){var r=n(82)(!1);r.push([t.i,"main.blogPosts[data-v-5305e2f8]{width:100%;min-height:calc(100vh - 80px);margin:0 auto;background-color:#fff;border-radius:0 0 0 0;padding:20px}main.blogPosts>h1[data-v-5305e2f8]{color:#000;text-align:center;margin:15px auto}",""]),t.exports=r},336:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(8),c=(n(44),{asyncData:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{error:"",songs:[],playingSong:"",audio:""});case 1:case"end":return t.stop()}}),t)})))()},beforeRouteLeave:function(t,e,n){"object"===Object(r.a)(this.$refs.musicGrid.audio)&&this.$refs.musicGrid.audio.pause(),n()},head:function(){return{title:"music"}},methods:{}}),l=(n(315),n(53)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PageHeader"),t._v(" "),n("main",{staticClass:"blogPosts"},[n("h1",[t._v("what im listening to")]),t._v(" "),n("client-only",[n("MusicGrid",{ref:"musicGrid"})],1)],1)],1)}),[],!1,null,"5305e2f8",null);e.default=component.exports;installComponents(component,{PageHeader:n(291).default,MusicGrid:n(310).default})}}]);