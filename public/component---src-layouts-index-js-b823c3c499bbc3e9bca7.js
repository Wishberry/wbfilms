webpackJsonp([0x67ef26645b2a,60335399758886],{139:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}},layoutContext:{}}},297:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),l=r(o),i=n(305),u=r(i),c=n(139),f=r(c);t.default=function(e){return l.default.createElement(u.default,a({},e,f.default))},e.exports=t.default},399:function(e,t,n){function r(e){return null===e||void 0===e}function a(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function o(e,t,n){var o,f;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=l.call(e),t=l.call(t),c(e,t,n));if(a(e)){if(!a(t))return!1;if(e.length!==t.length)return!1;for(o=0;o<e.length;o++)if(e[o]!==t[o])return!1;return!0}try{var s=i(e),d=i(t)}catch(e){return!1}if(s.length!=d.length)return!1;for(s.sort(),d.sort(),o=s.length-1;o>=0;o--)if(s[o]!=d[o])return!1;for(o=s.length-1;o>=0;o--)if(f=s[o],!c(e[f],t[f],n))return!1;return typeof e==typeof t}var l=Array.prototype.slice,i=n(401),u=n(400),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:o(e,t,n))}},400:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var a="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=a?n:r,t.supported=n,t.unsupported=r},401:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},585:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=r(f),d=n(3),T=r(d),E=n(628),p=r(E),m=n(399),A=r(m),y=n(586),b=n(246),h=function(e){var t,n;return n=t=function(t){function n(){return o(this,n),l(this,t.apply(this,arguments))}return i(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,A.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},a,this.mapNestedChildrenToProps(n,o))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,l=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return u({},a,(t={},t[r.type]=l,t.titleAttributes=u({},o),t));case b.TAG_NAMES.BODY:return u({},a,{bodyAttributes:u({},o)});case b.TAG_NAMES.HTML:return u({},a,{htmlAttributes:u({},o)})}return u({},a,(n={},n[r.type]=u({},o),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,l=o.children,i=a(o,["children"]),u=(0,y.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,l),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:l});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:l})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=a(t,["children"]),o=u({},r);return n&&(o=this.mapChildrenToProps(n,o)),s.default.createElement(e,o)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.default.Component),t.propTypes={base:T.default.object,bodyAttributes:T.default.object,children:T.default.oneOfType([T.default.arrayOf(T.default.node),T.default.node]),defaultTitle:T.default.string,defer:T.default.bool,encodeSpecialCharacters:T.default.bool,htmlAttributes:T.default.object,link:T.default.arrayOf(T.default.object),meta:T.default.arrayOf(T.default.object),noscript:T.default.arrayOf(T.default.object),onChangeClientState:T.default.func,script:T.default.arrayOf(T.default.object),style:T.default.arrayOf(T.default.object),title:T.default.string,titleAttributes:T.default.object,titleTemplate:T.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},v=function(){return null},S=(0,p.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(v),_=h(S);_.renderStatic=_.rewind,t.Helmet=_,t.default=_},246:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},586:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(1),i=r(l),u=n(6),c=r(u),f=n(246),s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=A(e,f.TAG_NAMES.TITLE),n=A(e,f.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=A(e,f.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return A(e,f.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},p=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[f.TAG_NAMES.BASE]}).map(function(e){return e[f.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a],l=o.toLowerCase();if(e.indexOf(l)!==-1&&n[l])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&_("Helmet: "+e+' should be of type "Array". Instead found type "'+a(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var a={};n.filter(function(e){for(var n=void 0,o=Object.keys(e),l=0;l<o.length;l++){var i=o[l],u=i.toLowerCase();t.indexOf(u)===-1||n===f.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===f.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(i)===-1||i!==f.TAG_PROPERTIES.INNER_HTML&&i!==f.TAG_PROPERTIES.CSS_TEXT&&i!==f.TAG_PROPERTIES.ITEM_PROP||(n=i)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][c]&&(a[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(a),l=0;l<o.length;l++){var i=o[l],u=(0,c.default)({},r[i],a[i]);r[i]=u}return e},[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:p([f.TAG_PROPERTIES.HREF],e),bodyAttributes:E(f.ATTRIBUTE_NAMES.BODY,e),defer:A(e,f.HELMET_PROPS.DEFER),encode:A(e,f.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(f.ATTRIBUTE_NAMES.HTML,e),linkTags:m(f.TAG_NAMES.LINK,[f.TAG_PROPERTIES.REL,f.TAG_PROPERTIES.HREF],e),metaTags:m(f.TAG_NAMES.META,[f.TAG_PROPERTIES.NAME,f.TAG_PROPERTIES.CHARSET,f.TAG_PROPERTIES.HTTPEQUIV,f.TAG_PROPERTIES.PROPERTY,f.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(f.TAG_NAMES.NOSCRIPT,[f.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:m(f.TAG_NAMES.SCRIPT,[f.TAG_PROPERTIES.SRC,f.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(f.TAG_NAMES.STYLE,[f.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:E(f.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),h=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,_=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},N=null,P=function(e){N&&S(N),e.defer?N=v(function(){g(e,function(){N=null})}):(g(e),N=null)},g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,l=e.metaTags,i=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,s=e.styleTags,d=e.title,T=e.titleAttributes;M(f.TAG_NAMES.BODY,r),M(f.TAG_NAMES.HTML,a),R(d,T);var E={baseTag:C(f.TAG_NAMES.BASE,n),linkTags:C(f.TAG_NAMES.LINK,o),metaTags:C(f.TAG_NAMES.META,l),noscriptTags:C(f.TAG_NAMES.NOSCRIPT,i),scriptTags:C(f.TAG_NAMES.SCRIPT,c),styleTags:C(f.TAG_NAMES.STYLE,s)},p={},m={};Object.keys(E).forEach(function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(m[e]=E[e].oldTags)}),t&&t(),u(e,p,m)},O=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=O(e)),M(f.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(f.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),l=Object.keys(t),i=0;i<l.length;i++){var u=l[i],c=t[u]||"";n.getAttribute(u)!==c&&n.setAttribute(u,c),a.indexOf(u)===-1&&a.push(u);var s=o.indexOf(u);s!==-1&&o.splice(s,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute(f.HELMET_ATTRIBUTE):n.getAttribute(f.HELMET_ATTRIBUTE)!==l.join(",")&&n.setAttribute(f.HELMET_ATTRIBUTE,l.join(","))}},C=function(e,t){var n=document.head||document.querySelector(f.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+f.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],l=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===f.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===f.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var i="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,i)}n.setAttribute(f.HELMET_ATTRIBUTE,"true"),a.some(function(e,t){return l=t,n.isEqualNode(e)})?a.splice(l,1):o.push(n)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return n.appendChild(e)}),{oldTags:a,newTags:o}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},w=function(e,t,n,r){var a=I(n),o=O(t);return a?"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+a+">"+s(o,r)+"</"+e+">":"<"+e+" "+f.HELMET_ATTRIBUTE+'="true">'+s(o,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var a=Object.keys(r).filter(function(e){return!(e===f.TAG_PROPERTIES.INNER_HTML||e===f.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var a="undefined"==typeof r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a},""),o=r.innerHTML||r.cssText||"",l=f.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+a+(l?"/>":">"+o+"</"+e+">")},"")},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.REACT_TAG_MAP[n]||n]=e[n],t},t)},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.HTML_TAG_MAP[n]||n]=e[n],t},t)},H=function(e,t,n){var r,a=(r={key:t},r[f.HELMET_ATTRIBUTE]=!0,r),o=G(n,a);return[i.default.createElement(f.TAG_NAMES.TITLE,o,t)]},j=function(e,t){return t.map(function(t,n){var r,a=(r={key:n},r[f.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=f.REACT_TAG_MAP[e]||e;if(n===f.TAG_PROPERTIES.INNER_HTML||n===f.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]}),i.default.createElement(e,a)})},x=function(e,t,n){switch(e){case f.TAG_NAMES.TITLE:return{toComponent:function(){return H(e,t.title,t.titleAttributes,n)},toString:function(){return w(e,t.title,t.titleAttributes,n)}};case f.ATTRIBUTE_NAMES.BODY:case f.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return G(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return j(e,t)},toString:function(){return L(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,l=e.metaTags,i=e.noscriptTags,u=e.scriptTags,c=e.styleTags,s=e.title,d=void 0===s?"":s,T=e.titleAttributes;return{base:x(f.TAG_NAMES.BASE,t,r),bodyAttributes:x(f.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(f.ATTRIBUTE_NAMES.HTML,a,r),link:x(f.TAG_NAMES.LINK,o,r),meta:x(f.TAG_NAMES.META,l,r),noscript:x(f.TAG_NAMES.NOSCRIPT,i,r),script:x(f.TAG_NAMES.SCRIPT,u,r),style:x(f.TAG_NAMES.STYLE,c,r),title:x(f.TAG_NAMES.TITLE,{title:d,titleAttributes:T},r)}};t.convertReactPropstoHtmlAttributes=k,t.handleClientStateChange=P,t.mapStateOnServer=U,t.reducePropsToState=y,t.requestAnimationFrame=v,t.warn=_}).call(t,function(){return this}())},628:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),u=r(i),c=n(135),f=r(c),s=n(660),d=r(s);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function s(){E=e(T.map(function(e){return e.props})),p.canUseDOM?t(E):n&&(E=n(E))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var T=[],E=void 0,p=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.peek=function(){return E},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=E;return E=void 0,T=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){T.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=T.indexOf(this);T.splice(e,1),s()},t.prototype.render=function(){return u.default.createElement(c,this.props)},t}(i.Component);return p.displayName="SideEffect("+r(c)+")",p.canUseDOM=f.default.canUseDOM,p}}},660:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),l=Object.keys(t);if(o.length!==l.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var c=o[u];if(!i(c))return!1;var f=e[c],s=t[c];if(a=n?n.call(r,f,s,c):void 0,a===!1||void 0===a&&f!==s)return!1}return!0}},302:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),l=n(9),i=r(l),u=n(267),c=r(u),f=n(56),s=r(f),d=n(670),T=r(d),E=n(673),p=r(E),m=n(685),A=r(m),y=n(684),b=r(y),h=function(e){e.siteTitle;return o.default.createElement("div",null,o.default.createElement("div",{className:"footer"},o.default.createElement("div",{className:"footer-top"},o.default.createElement("div",{className:"footer-logo"},o.default.createElement("img",{src:c.default,alt:"logo"})),o.default.createElement("div",{className:"footer-nav"},o.default.createElement(i.default,{to:"/about",className:"footer-nav-link"},"About Us"),o.default.createElement(i.default,{to:"/",className:"footer-nav-link"},"Films"),o.default.createElement(i.default,{to:"/privacy-policy",className:"footer-nav-link"},"Privacy Policy"),o.default.createElement("div",{className:"footer-nav-title"})),o.default.createElement("div",{className:"footer-nav"},o.default.createElement(i.default,{to:"/",className:"footer-nav-link"},"Investor Corner"),o.default.createElement(i.default,{to:"/",className:"footer-nav-link"},"Press"),o.default.createElement(i.default,{to:"/",className:"footer-nav-link"},"FAQs"),o.default.createElement("div",{className:"footer-nav-title"}),o.default.createElement("div",{className:"footer-nav-banner"},o.default.createElement("img",{src:s.default,alt:"coming soon"}))),o.default.createElement("div",{className:"footer-contact"},o.default.createElement("div",{className:"footer-divider"}),o.default.createElement("div",{className:"footer-contact-us"},o.default.createElement("div",{className:"footer-nav-title"},"Contact Us"),o.default.createElement("span",null,"102/103 Matharu Arcade, Subhash road,"),o.default.createElement("span",null,"Vile Parle (E), Mumbai 400057"),o.default.createElement("span",null,"info@wishberry.in | +9122-49426200")))),o.default.createElement("div",{className:"footer-bottom"},o.default.createElement("div",{className:"footer-info"},o.default.createElement("div",{className:"info"},"©2016 All Rights Reserved Wishberry Online Services Pvt. Ltd. (CIN: U74300MH2009PTC191803)")),o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:T.default,alt:"facebook"})),o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:p.default,alt:"facebook"})),o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:A.default,alt:"facebook"})),o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:b.default,alt:"facebook"})))),o.default.createElement("div",{className:"footer-mobile"},o.default.createElement("div",{className:"footer-mobile-logo"},o.default.createElement("img",{src:c.default,alt:"logo"})),o.default.createElement("div",{className:"footer-nav-mobile"},o.default.createElement(i.default,{to:"/about",className:"footer-nav-link-mobile"},"About Us"),o.default.createElement(i.default,{to:"/",className:"footer-nav-link-mobile"},"Films"),o.default.createElement(i.default,{to:"/privacy-policy",className:"footer-nav-link-mobile"},"Privacy Policy")),o.default.createElement("div",{className:"footer-nav-mobile"},o.default.createElement(i.default,{to:"/",className:"footer-nav-link-mobile"},"Investor Corner"),o.default.createElement(i.default,{to:"/",className:"footer-nav-link-mobile"},"Press"),o.default.createElement(i.default,{to:"/",className:"footer-nav-link-mobile"},"FAQs"),o.default.createElement("div",{className:"footer-nav-banner"},o.default.createElement("img",{src:s.default,alt:"coming soon"}))),o.default.createElement("div",{className:"footer-contact"},o.default.createElement("div",{className:"footer-divider"}),o.default.createElement("div",{className:"footer-contact-us"},o.default.createElement("div",{className:"footer-nav-title"},"Contact Us"),o.default.createElement("span",null,"102/103 Matharu Arcade, Subhash road,"),o.default.createElement("span",null,"Vile Parle (E), Mumbai 400057"),o.default.createElement("span",null,"info@wishberry.in | +9122-49426200"))),o.default.createElement("div",{className:"footer-mobile-info"},"©2016 All Rights Reserved Wishberry Online Services Pvt. Ltd.",o.default.createElement("br",null),"(CIN: U74300MH2009PTC191803)"),o.default.createElement("div",{className:"footer-mobile-social"},o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:T.default,alt:"facebook"})),o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:p.default,alt:"facebook"})),o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:A.default,alt:"facebook"})),o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:b.default,alt:"facebook"})))),o.default.createElement("script",{src:"https://cdn1.pdmntn.com/a/4JQNDStMr.js"}))};t.default=h,e.exports=t.default},670:function(e,t,n){e.exports=n.p+"static/facebook.dbb8c7ed.png"},673:function(e,t,n){e.exports=n.p+"static/instagram.99660c98.png"},684:function(e,t,n){e.exports=n.p+"static/twitter.5fb665b0.png"},685:function(e,t,n){e.exports=n.p+"static/youtube.b9bfd984.png"},421:function(e,t){},422:function(e,t){},423:function(e,t){},424:function(e,t){},425:function(e,t){},305:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=n(1),o=r(a),l=n(3),i=r(l),u=n(585),c=r(u),f=n(24),s=(r(f),n(302)),d=r(s);n(425),n(428),n(427),n(421),n(422),n(426),n(424),n(423);var T=function(e){var t=e.children;e.data;return o.default.createElement("div",null,o.default.createElement(c.default,{title:"Wishberry Films",meta:[{name:"description",content:"Wishberry Films website"},{name:"keywords",content:"wishberry, film, invest"}]}),o.default.createElement("div",null,t()),o.default.createElement(d.default,null))};T.propTypes={children:i.default.func},t.default=T;t.query="** extracted graphql fragment **"},426:function(e,t){},427:function(e,t){},428:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-b823c3c499bbc3e9bca7.js.map