(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{EtCU:function(e,t,r){"use strict";var n=r("Wbzz");t.a=function(){return Object(n.useStaticQuery)("318001574").site.siteMetadata}},GIzu:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("qhky"),c=r("Wbzz"),i=r("EtCU");t.a=function(e){var t=e.title,r=void 0===t?"":t,n=e.description,l=void 0===n?"":n,f=e.pathname,s=void 0===f?"":f,u=e.image,p=void 0===u?"":u,b=e.children,d=void 0===b?null:b,g=Object(i.a)(),m=g.siteTitle,h=g.siteTitleAlt,y=g.siteUrl,v=g.siteDescription,w=g.siteLanguage,k=g.siteImage,O=g.author,j={title:r||h,description:l||v,url:""+y+(s||""),image:""+y+(p||k)};return a.a.createElement(o.Helmet,{title:r,defaultTitle:h,titleTemplate:"%s | "+m},a.a.createElement("html",{lang:w}),a.a.createElement("meta",{name:"description",content:j.description}),a.a.createElement("meta",{name:"image",content:j.image}),a.a.createElement("meta",{property:"og:title",content:j.title}),a.a.createElement("meta",{property:"og:url",content:j.url}),a.a.createElement("meta",{property:"og:description",content:j.description}),a.a.createElement("meta",{property:"og:image",content:j.image}),a.a.createElement("meta",{property:"og:type",content:"website"}),a.a.createElement("meta",{property:"og:image:alt",content:j.description}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:title",content:j.title}),a.a.createElement("meta",{name:"twitter:url",content:j.url}),a.a.createElement("meta",{name:"twitter:description",content:j.description}),a.a.createElement("meta",{name:"twitter:image",content:j.image}),a.a.createElement("meta",{name:"twitter:image:alt",content:j.description}),a.a.createElement("meta",{name:"twitter:creator",content:O}),a.a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:Object(c.withPrefix)("/favicon-32x32.png")}),a.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:Object(c.withPrefix)("/favicon-16x16.png")}),a.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:Object(c.withPrefix)("/apple-touch-icon.png")}),d)}},Q3iF:function(e,t,r){"use strict";var n=r("rePB"),a=r("q1tI"),o=r.n(a),c=r("qKvR"),i=r("2A+t"),l=r("izhR"),f=(r("c95Q"),r("GIzu")),s=r("dq5L"),u=r("Wbzz"),p=r("n/Q7"),b=function(e){var t=e.nav,r=Object(s.a)().basePath;return Object(i.c)(o.a.Fragment,null,t&&t.length>0&&Object(i.c)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((function(e){return Object(i.c)(l.e,{key:e.slug,as:u.Link,activeClassName:"active",to:Object(p.a)("/"+r+"/"+e.slug)},e.title)}))))},d=r("EtCU"),g=function(){var e=Object(d.a)().siteTitle,t=Object(s.a)().basePath;return Object(i.c)(u.Link,{to:Object(p.a)("/"+t),"aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},Object(i.c)("h1",{sx:{my:0,fontWeight:"medium",fontSize:[3,4]}},e))},m=function(){var e=Object(s.a)().externalLinks;return Object(i.c)(o.a.Fragment,null,e&&e.length>0&&Object(i.c)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"]}},e.map((function(e){return Object(i.c)(l.e,{key:e.url,href:e.url},e.name)}))))},h=function(){var e=Object(s.a)().navigation;return Object(i.c)("header",{sx:{mb:[5,6]}},Object(i.c)(l.c,{sx:{alignItems:"center",justifyContent:"space-between"}},Object(i.c)(g,null)),Object(i.c)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},Object(i.c)(b,{nav:e}),Object(i.c)(m,null)))},y=function(){var e=Object(d.a)().siteTitle;return Object(i.c)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},Object(i.c)("div",null,"© ",(new Date).getFullYear()," by ",e,". All rights reserved."))},v=r("wx14"),w=r("JX7q"),k=r("dI71");function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function I(e,t,r){return(I=x()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&j(a,r.prototype),a}).apply(null,arguments)}function E(e){var t="function"==typeof Map?new Map:void 0;return(E=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return I(e,arguments,O(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),j(n,e)})(e)}var S=function(e){function t(t){var r;return r=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/master/src/internalHelpers/errors.md#"+t+" for more information.")||this,Object(w.a)(r)}return Object(k.a)(t,e),t}(E(Error));function z(e){return Math.round(255*e)}function P(e,t,r){return z(e)+","+z(t)+","+z(r)}function F(e,t,r,n){if(void 0===n&&(n=P),0===t)return n(r,r,r);var a=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,c=o*(1-Math.abs(a%2-1)),i=0,l=0,f=0;a>=0&&a<1?(i=o,l=c):a>=1&&a<2?(i=c,l=o):a>=2&&a<3?(l=o,f=c):a>=3&&a<4?(l=c,f=o):a>=4&&a<5?(i=c,f=o):a>=5&&a<6&&(i=o,f=c);var s=r-o/2;return n(i+s,l+s,f+s)}var q={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var D=/^#[a-fA-F0-9]{6}$/,C=/^#[a-fA-F0-9]{8}$/,A=/^#[a-fA-F0-9]{3}$/,L=/^#[a-fA-F0-9]{4}$/,R=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,_=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,M=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,T=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function $(e){if("string"!=typeof e)throw new S(3);var t=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return q[t]?"#"+q[t]:e}(e);if(t.match(D))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(C)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(A))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(L)){var n=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:n}}var a=R.exec(t);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var o=_.exec(t);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])};var c=M.exec(t);if(c){var i="rgb("+F(parseInt(""+c[1],10),parseInt(""+c[2],10)/100,parseInt(""+c[3],10)/100)+")",l=R.exec(i);if(!l)throw new S(4,t,i);return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10)}}var f=T.exec(t);if(f){var s="rgb("+F(parseInt(""+f[1],10),parseInt(""+f[2],10)/100,parseInt(""+f[3],10)/100)+")",u=R.exec(s);if(!u)throw new S(4,t,s);return{red:parseInt(""+u[1],10),green:parseInt(""+u[2],10),blue:parseInt(""+u[3],10),alpha:parseFloat(""+f[4])}}throw new S(5)}var Q=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function W(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function N(e,t,r){if("number"==typeof e&&"number"==typeof t&&"number"==typeof r)return Q("#"+W(e)+W(t)+W(r));if("object"==typeof e&&void 0===t&&void 0===r)return Q("#"+W(e.red)+W(e.green)+W(e.blue));throw new S(6)}function U(e,t,r,n){if("string"==typeof e&&"number"==typeof t){var a=$(e);return"rgba("+a.red+","+a.green+","+a.blue+","+t+")"}if("number"==typeof e&&"number"==typeof t&&"number"==typeof r&&"number"==typeof n)return n>=1?N(e,t,r):"rgba("+e+","+t+","+r+","+n+")";if("object"==typeof e&&void 0===t&&void 0===r&&void 0===n)return e.alpha>=1?N(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new S(7)}function B(e){return function e(t,r,n){return function(){var a=n.concat(Array.prototype.slice.call(arguments));return a.length>=r?t.apply(this,a):e(t,r,a)}}(e,e.length,[])}function G(e,t,r){if("transparent"===t)return r;if("transparent"===r)return t;if(0===e)return r;var n=$(t),a=Object(v.a)({},n,{alpha:"number"==typeof n.alpha?n.alpha:1}),o=$(r),c=Object(v.a)({},o,{alpha:"number"==typeof o.alpha?o.alpha:1}),i=a.alpha-c.alpha,l=2*parseFloat(e)-1,f=((l*i==-1?l:l+i)/(1+l*i)+1)/2,s=1-f;return U({red:Math.floor(a.red*f+c.red*s),green:Math.floor(a.green*f+c.green*s),blue:Math.floor(a.blue*f+c.blue*s),alpha:a.alpha*(parseFloat(e)/1)+c.alpha*(1-parseFloat(e)/1)})}var H=B(G);function J(e,t){return"transparent"===t?t:H(parseFloat(e),"rgb(255, 255, 255)",t)}var K=B(J);var V=r("ZdEh"),X=function(e,t){return Object(V.b)(e,"colors."+t,t).replace(/^var\(--(\w+)(.*?), /,"").replace(/\)/,"")},Y=function(e,t){return function(r){return K(t,X(r,e))}},Z={"[data-name='live-editor']":{fontSize:1,"textarea, pre":{padding:function(e){return e.space[3]+" !important"}}},"[data-name='live-preview']":{padding:function(e){return"calc("+e.space[2]+" + 10px) !important"},backgroundColor:Y("primary",.7)},".prism-code":{fontSize:[1,1,2],padding:3,webkitOverflowScrolling:"touch",backgroundColor:"transparent",overflow:"initial",float:"left",minWidth:"100%",mb:0,'&[data-linenumber="false"]':{".token-line":{pl:3}}},".token":{display:"inline-block"},"p > code, li > code":{bg:"gray.2",color:"gray.8",px:2,py:1,borderRadius:"2px"},".gatsby-highlight":{fontSize:[1,1,2],position:"relative",webkitOverflowScrolling:"touch",bg:"rgb(1, 22, 39)",overflow:"auto",borderRadius:"2px",mx:[0,0,0,-3],".token-line":{mx:-3},"pre.language-":{mt:0},"pre.language-noLineNumbers":{mt:0},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 0.25rem 0.25rem",color:"black",fontSize:"12px",letterSpacing:"0.025rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",top:0},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-xml"]:before':{content:'"xml"',background:"#005a9c",color:"white"},'pre[class~="language-svg"]:before':{content:'"svg"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-yml']:before":{content:"'yml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:Y("primary",.7),color:"black",fontSize:0,px:3,py:2,fontFamily:"monospace",mx:[0,0,0,-3]},"[data-name='live-preview'], [data-name='live-editor']":{mx:[0,0,0,-3],fontSize:[1,1,2]},".token-line":{pr:3},".highlight-line":{backgroundColor:"rgb(2, 55, 81)",borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}}},ee=r("zLVn");function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ne={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}},ae=function(e){var t=e.children,r=Object(ee.a)(e,["children"]);return Object(i.c)("a",Object.assign({},r,{sx:re({},ne),href:"#skip-nav","data-skip-link":"true"}),t)};function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.children,r=e.className,n=void 0===r?"":r;return Object(i.c)(o.a.Fragment,null,Object(i.c)(c.a,{styles:function(e){return{"*":{boxSizing:"inherit"},html:{WebkitTextSizeAdjust:"100%"},img:{borderStyle:"none"},pre:{fontFamily:"monospace",fontSize:"1em"},"[hidden]":{display:"none"},"::selection":{backgroundColor:e.colors.text,color:e.colors.background},a:{transition:"all 0.3s ease-in-out",color:"text"}}}}),Object(i.c)(f.a,null),Object(i.c)(ae,null,"Skip to content"),Object(i.c)(l.b,null,Object(i.c)(h,null),Object(i.c)(l.a,{id:"skip-nav",sx:ce({},Z),className:n},t),Object(i.c)(y,null)))}},c95Q:function(e,t,r){},"n/Q7":function(e,t,r){"use strict";t.a=function(e){return e.replace(/\/\/+/g,"/")}}}]);
//# sourceMappingURL=aed2e917f30c051bccba91aa15989a75fd0bd633-b39acc9c4328781d291f.js.map