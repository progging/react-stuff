function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var n,t,u=e(require("styled-components")),r=e(require("react")),f=function(e,n,t){if(void 0===t)return"";if(Array.isArray(t)){if(1===t.length||2===t.length||4===t.length)return e+": "+t.map(function(e){return e*n+"px"}).join(" ")+";";throw new Error("Array must contain either 1, 2, or 4 elements")}return e+": "+t*n+"px;"},i=Object.freeze(["\n  ","\n  ","\n"]),o=u.div(i,function(e){return f("padding",e.theme?e.theme.baseUnitPx:8,e.padding)},function(e){return f("margin",e.theme?e.theme.baseUnitPx:8,e.margin)}),c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=1/0,l="[object Symbol]",d=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,x=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,s="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",p="["+s+"]",b="\\d+",g="[a-z\\xdf-\\xf6\\xf8-\\xff]",y="[^\\ud800-\\udfff"+s+b+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",m="(?:\\ud83c[\\udde6-\\uddff]){2}",h="[\\ud800-\\udbff][\\udc00-\\udfff]",j="[A-Z\\xc0-\\xd6\\xd8-\\xde]",O="(?:"+g+"|"+y+")",A="(?:"+j+"|"+y+")",E="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",v="[\\ufe0e\\ufe0f]?"+E+"(?:\\u200d(?:"+["[^\\ud800-\\udfff]",m,h].join("|")+")[\\ufe0e\\ufe0f]?"+E+")*",z="(?:"+["[\\u2700-\\u27bf]",m,h].join("|")+")"+v,U=RegExp("['’]","g"),w=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]","g"),I=RegExp([j+"?"+g+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[p,j,"$"].join("|")+")",A+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[p,j+O,"$"].join("|")+")",j+"?"+O+"+(?:['’](?:d|ll|m|re|s|t|ve))?",j+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",b,z].join("|"),"g"),S=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,L="object"==typeof c&&c&&c.Object===Object&&c,Z="object"==typeof self&&self&&self.Object===Object&&self,T=L||Z||Function("return this")(),N=(n={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==n?void 0:n[e]}),R=Object.prototype.toString,C=T.Symbol,F=C?C.prototype:void 0,D=F?F.toString:void 0;function P(e){return null==e?"":function(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&R.call(e)==l}(e))return D?D.call(e):"";var n=e+"";return"0"==n&&1/e==-a?"-0":n}(e)}var G=(t=function(e,n,t){return e+(t?"-":"")+n.toLowerCase()},function(e){return function(e,n,t,u){for(var r=-1,f=e?e.length:0;++r<f;)t=n(t,e[r],r,e);return t}(function(e,n,t){return e=P(e),void 0===(n=n)?function(e){return S.test(e)}(e)?function(e){return e.match(I)||[]}(e):function(e){return e.match(d)||[]}(e):e.match(n)||[]}(function(e){return(e=P(e))&&e.replace(x,N).replace(w,"")}(e).replace(U,"")),t,"")}),k=Object.freeze(["\n  display: ",";\n  ","\n"]),Y=u.div(k,function(e){return e.inlineFlex?"inline-flex":"flex"},function(e){return e.css.map(function(e){return e.cssProp+": "+e.val+";"}).join(" ")}),q=function(e){var n=e.children,t=e.className,u=e.style,f=e.inlineFlex,i=function(e,n){var t={};for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&-1===n.indexOf(u)&&(t[u]=e[u]);return t}(e,["children","className","style","inlineFlex"]),o=Object.keys(i).map(function(e){return{cssProp:G(e),val:i[e]}});return r.createElement(Y,{style:u,className:t,inlineFlex:f,css:o},n)};exports.Spacing=function(e){return r.createElement(o,{padding:e.padding,margin:e.margin},e.children)},exports.Flex=q,exports.FlexToolbar=function(e){return r.createElement(q,{justifyContent:"space-between",alignItems:"center",style:{width:"100%"}},e.children)};
//# sourceMappingURL=react-stuff.js.map