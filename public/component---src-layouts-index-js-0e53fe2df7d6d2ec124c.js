webpackJsonp([0x67ef26645b2a,60335399758886],{138:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}},layoutContext:{}}},296:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),l=r(o),i=n(305),c=r(i),u=n(138),s=r(u);t.default=function(e){return l.default.createElement(c.default,a({},e,s.default))},e.exports=t.default},399:function(e,t,n){function r(e){return null===e||void 0===e}function a(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function o(e,t,n){var o,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=l.call(e),t=l.call(t),u(e,t,n));if(a(e)){if(!a(t))return!1;if(e.length!==t.length)return!1;for(o=0;o<e.length;o++)if(e[o]!==t[o])return!1;return!0}try{var f=i(e),d=i(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),o=f.length-1;o>=0;o--)if(f[o]!=d[o])return!1;for(o=f.length-1;o>=0;o--)if(s=f[o],!u(e[s],t[s],n))return!1;return typeof e==typeof t}var l=Array.prototype.slice,i=n(401),c=n(400),u=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:o(e,t,n))}},400:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var a="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=a?n:r,t.supported=n,t.unsupported=r},401:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},585:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),d=n(3),p=r(d),E=n(628),m=r(E),T=n(399),A=r(T),h=n(586),b=n(245),y=function(e){var t,n;return n=t=function(t){function n(){return o(this,n),l(this,t.apply(this,arguments))}return i(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,A.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},a,this.mapNestedChildrenToProps(n,o))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,l=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return c({},a,(t={},t[r.type]=l,t.titleAttributes=c({},o),t));case b.TAG_NAMES.BODY:return c({},a,{bodyAttributes:c({},o)});case b.TAG_NAMES.HTML:return c({},a,{htmlAttributes:c({},o)})}return c({},a,(n={},n[r.type]=c({},o),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,l=o.children,i=a(o,["children"]),c=(0,h.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,l),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:l});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:l})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=a(t,["children"]),o=c({},r);return n&&(o=this.mapChildrenToProps(n,o)),f.default.createElement(e,o)},u(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},v=function(){return null},S=(0,m.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(v),_=y(S);_.renderStatic=_.rewind,t.Helmet=_,t.default=_},245:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},586:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(1),i=r(l),c=n(6),u=r(c),s=n(245),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=A(e,s.TAG_NAMES.TITLE),n=A(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=A(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return A(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},m=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a],l=o.toLowerCase();if(e.indexOf(l)!==-1&&n[l])return t.concat(n)}return t},[])},T=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&_("Helmet: "+e+' should be of type "Array". Instead found type "'+a(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var a={};n.filter(function(e){for(var n=void 0,o=Object.keys(e),l=0;l<o.length;l++){var i=o[l],c=i.toLowerCase();t.indexOf(c)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(i)===-1||i!==s.TAG_PROPERTIES.INNER_HTML&&i!==s.TAG_PROPERTIES.CSS_TEXT&&i!==s.TAG_PROPERTIES.ITEM_PROP||(n=i)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(a),l=0;l<o.length;l++){var i=o[l],c=(0,u.default)({},r[i],a[i]);r[i]=c}return e},[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=function(e){return{baseTag:m([s.TAG_PROPERTIES.HREF],e),bodyAttributes:E(s.ATTRIBUTE_NAMES.BODY,e),defer:A(e,s.HELMET_PROPS.DEFER),encode:A(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(s.ATTRIBUTE_NAMES.HTML,e),linkTags:T(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:T(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:T(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:E(s.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),y=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,_=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},N=null,g=function(e){N&&S(N),e.defer?N=v(function(){O(e,function(){N=null})}):(O(e),N=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,l=e.metaTags,i=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;R(s.TAG_NAMES.BODY,r),R(s.TAG_NAMES.HTML,a),M(d,p);var E={baseTag:C(s.TAG_NAMES.BASE,n),linkTags:C(s.TAG_NAMES.LINK,o),metaTags:C(s.TAG_NAMES.META,l),noscriptTags:C(s.TAG_NAMES.NOSCRIPT,i),scriptTags:C(s.TAG_NAMES.SCRIPT,u),styleTags:C(s.TAG_NAMES.STYLE,f)},m={},T={};Object.keys(E).forEach(function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(T[e]=E[e].oldTags)}),t&&t(),c(e,m,T)},P=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),R(s.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),l=Object.keys(t),i=0;i<l.length;i++){var c=l[i],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),a.indexOf(c)===-1&&a.push(c);var f=o.indexOf(c);f!==-1&&o.splice(f,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==l.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,l.join(","))}},C=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],l=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var i="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,i)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),a.some(function(e,t){return l=t,n.isEqualNode(e)})?a.splice(l,1):o.push(n)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return n.appendChild(e)}),{oldTags:a,newTags:o}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},w=function(e,t,n,r){var a=I(n),o=P(t);return a?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+">"+f(o,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(o,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var a=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var a="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+a:a},""),o=r.innerHTML||r.cssText||"",l=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+(l?"/>":">"+o+"</"+e+">")},"")},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},j=function(e,t,n){var r,a=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),o=k(n,a);return[i.default.createElement(s.TAG_NAMES.TITLE,o,t)]},H=function(e,t){return t.map(function(t,n){var r,a=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]}),i.default.createElement(e,a)})},x=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return j(e,t.title,t.titleAttributes,n)},toString:function(){return w(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return k(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return L(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,l=e.metaTags,i=e.noscriptTags,c=e.scriptTags,u=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:x(s.TAG_NAMES.BASE,t,r),bodyAttributes:x(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(s.ATTRIBUTE_NAMES.HTML,a,r),link:x(s.TAG_NAMES.LINK,o,r),meta:x(s.TAG_NAMES.META,l,r),noscript:x(s.TAG_NAMES.NOSCRIPT,i,r),script:x(s.TAG_NAMES.SCRIPT,c,r),style:x(s.TAG_NAMES.STYLE,u,r),title:x(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=g,t.mapStateOnServer=U,t.reducePropsToState=h,t.requestAnimationFrame=v,t.warn=_}).call(t,function(){return this}())},628:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),c=r(i),u=n(134),s=r(u),f=n(660),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function f(){E=e(p.map(function(e){return e.props})),m.canUseDOM?t(E):n&&(E=n(E))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var p=[],E=void 0,m=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.peek=function(){return E},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=E;return E=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return c.default.createElement(u,this.props)},t}(i.Component);return m.displayName="SideEffect("+r(u)+")",m.canUseDOM=s.default.canUseDOM,m}}},660:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),l=Object.keys(t);if(o.length!==l.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var u=o[c];if(!i(u))return!1;var s=e[u],f=t[u];if(a=n?n.call(r,s,f,u):void 0,a===!1||void 0===a&&s!==f)return!1}return!0}},301:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),l=n(9),i=r(l),c=n(266),u=r(c),s=n(56),f=r(s),d=n(670),p=r(d),E=n(673),m=r(E),T=n(685),A=r(T),h=n(684),b=r(h),y=function(e){e.siteTitle;return o.default.createElement("div",null,o.default.createElement("div",{className:"footer"},o.default.createElement("div",{className:"footer-top"},o.default.createElement("div",{className:"footer-logo"},o.default.createElement("img",{src:u.default,alt:"logo"})),o.default.createElement("div",{className:"footer-nav"},o.default.createElement(i.default,{to:"/about",className:"footer-nav-link"},"About Us"),o.default.createElement(i.default,{to:"/",className:"footer-nav-link"},"Films"),o.default.createElement(i.default,{to:"/",className:"footer-nav-link"},"Privacy Policy"),o.default.createElement("div",{className:"footer-nav-title"})),o.default.createElement("div",{className:"footer-nav"},o.default.createElement(i.default,{to:"/",className:"footer-nav-link"},"Investor Corner"),o.default.createElement(i.default,{to:"/",className:"footer-nav-link"},"Press"),o.default.createElement(i.default,{to:"/",className:"footer-nav-link"},"FAQs"),o.default.createElement("div",{className:"footer-nav-title"}),o.default.createElement("div",{className:"footer-nav-banner"},o.default.createElement("img",{src:f.default,alt:"coming soon"}))),o.default.createElement("div",{className:"footer-contact"},o.default.createElement("div",{className:"footer-divider"}),o.default.createElement("div",{className:"footer-contact-us"},o.default.createElement("div",{className:"footer-nav-title"},"Contact Us"),o.default.createElement("span",null,"102/103 Matharu Arcade, Subhash road,"),o.default.createElement("span",null,"Vile Parle (E), Mumbai 400057"),o.default.createElement("span",null,"info@wishberry.in | +9122-49426200")))),o.default.createElement("div",{className:"footer-bottom"},o.default.createElement("div",{className:"footer-info"},o.default.createElement("div",{className:"info"},"©2016 All Rights Reserved Wishberry Online Services Pvt. Ltd. (CIN: U74300MH2009PTC191803)")),o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:p.default,alt:"facebook"})),o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:m.default,alt:"facebook"})),o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:A.default,alt:"facebook"})),o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:b.default,alt:"facebook"})))),o.default.createElement("div",{className:"footer-mobile"},o.default.createElement("div",{className:"footer-mobile-logo"},o.default.createElement("img",{src:u.default,alt:"logo"})),o.default.createElement("div",{className:"footer-nav-mobile"},o.default.createElement(i.default,{to:"/about",className:"footer-nav-link-mobile"},"About Us"),o.default.createElement(i.default,{to:"/",className:"footer-nav-link-mobile"},"Films"),o.default.createElement(i.default,{to:"/",className:"footer-nav-link-mobile"},"Privacy Policy")),o.default.createElement("div",{className:"footer-nav-mobile"},o.default.createElement(i.default,{to:"/",className:"footer-nav-link-mobile"},"Investor Corner"),o.default.createElement(i.default,{to:"/",className:"footer-nav-link-mobile"},"Press"),o.default.createElement(i.default,{to:"/",className:"footer-nav-link-mobile"},"FAQs"),o.default.createElement("div",{className:"footer-nav-banner"},o.default.createElement("img",{src:f.default,alt:"coming soon"}))),o.default.createElement("div",{className:"footer-contact"},o.default.createElement("div",{className:"footer-divider"}),o.default.createElement("div",{className:"footer-contact-us"},o.default.createElement("div",{className:"footer-nav-title"},"Contact Us"),o.default.createElement("span",null,"102/103 Matharu Arcade, Subhash road,"),o.default.createElement("span",null,"Vile Parle (E), Mumbai 400057"),o.default.createElement("span",null,"info@wishberry.in | +9122-49426200"))),o.default.createElement("div",{className:"footer-mobile-info"},"©2016 All Rights Reserved Wishberry Online Services Pvt. Ltd.",o.default.createElement("br",null),"(CIN: U74300MH2009PTC191803)"),o.default.createElement("div",{className:"footer-mobile-social"},o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:p.default,alt:"facebook"})),o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:m.default,alt:"facebook"})),o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:A.default,alt:"facebook"})),o.default.createElement("a",{className:"footer-social-link"},o.default.createElement("img",{src:b.default,alt:"facebook"})))))};t.default=y,e.exports=t.default},302:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),c=r(i),u=n(9),s=r(u),f=n(31),d=r(f),p=n(266),E=r(p),m=n(676),T=(r(m),n(675)),A=(r(T),n(667)),h=(r(A),n(56)),b=r(h),y=function(e){function t(n){a(this,t);var r=o(this,e.call(this,n));return r.componentDidMount=function(){window.addEventListener("scroll",r.handleScroll)},r.componentWillUnmount=function(){window.removeEventListener("scroll",r.handleScroll)},r.handleScroll=function(e){var t=window.pageYOffset;t>0?r.setState({fixed:!0}):r.setState({fixed:!1})},r.toggleMenu=function(){var e=!r.state.menuOpen;r.setState({menuOpen:e})},r.closeMenu=function(){r.setState({menuOpen:!1})},r.state={fixed:!1,menuOpen:!1},r}return l(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:this.state.fixed?"header fixed":"header"},c.default.createElement(s.default,{to:"/",style:{height:"100%"}},c.default.createElement("div",{className:"logo"},c.default.createElement("img",{src:this.state.fixed||this.state.menuOpen?d.default:E.default,alt:"Logo"}))),c.default.createElement("div",{className:"header-nav"},c.default.createElement(s.default,{className:"header-link",activeClassName:"header-link-active",to:"/about"},"About Us"),c.default.createElement(s.default,{disabled:!0,className:"header-link",activeClassName:"header-link-active",to:"#"},c.default.createElement("img",{className:"header-link-soon left",src:b.default,alt:"coming-soon"}),"Films"),c.default.createElement(s.default,{disabled:!0,className:"header-link",activeClassName:"header-link-active",to:"#"},c.default.createElement("img",{className:"header-link-soon",src:b.default,alt:"coming-soon"}),"Investor Corner")),c.default.createElement("div",{className:"header-nav-mobile"},c.default.createElement("a",{className:"nav-link",onClick:this.toggleMenu},c.default.createElement("div",{id:"nav-icon",className:this.state.menuOpen?"open":""},c.default.createElement("span",null),c.default.createElement("span",null),c.default.createElement("span",null))),c.default.createElement("div",{className:this.state.menuOpen?"menu-backdrop":"menu-backdrop hidden",onClick:this.closeMenu}),c.default.createElement("div",{className:this.state.menuOpen?"drawer":"drawer hidden"},c.default.createElement(s.default,{className:"header-link-mobile",activeClassName:"header-link-active",to:"/about"},"About Us"),c.default.createElement(s.default,{className:"header-link-mobile",disabled:!0,activeClassName:"header-link-active",to:"#"},"Films",c.default.createElement("img",{className:"header-link-soon",src:b.default,alt:"coming-soon"})),c.default.createElement(s.default,{className:"header-link-mobile",disabled:!0,activeClassName:"header-link-active",to:"#"},"Investor Corner",c.default.createElement("img",{className:"header-link-soon",src:b.default,alt:"coming-soon"})))))},t}(c.default.PureComponent);t.default=y,e.exports=t.default},667:function(e,t,n){e.exports=n.p+"static/close.4cdc352d.png"},670:function(e,t,n){e.exports=n.p+"static/facebook.dbb8c7ed.png"},673:function(e,t,n){e.exports=n.p+"static/instagram.99660c98.png"},266:function(e,t,n){e.exports=n.p+"static/logo-white-1.e3c3b5d3.png"},31:function(e,t,n){e.exports=n.p+"static/logo.f00368f1.png"},675:function(e,t,n){e.exports=n.p+"static/menu-black.7c2aed7d.png"},676:function(e,t,n){e.exports=n.p+"static/menu-white.b502a8b4.png"},684:function(e,t,n){e.exports=n.p+"static/twitter.5fb665b0.png"},685:function(e,t,n){e.exports=n.p+"static/youtube.b9bfd984.png"},421:function(e,t){},422:function(e,t){},423:function(e,t){},424:function(e,t){},425:function(e,t){},305:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=n(1),o=r(a),l=n(3),i=r(l),c=n(585),u=r(c),s=n(302),f=r(s),d=n(301),p=r(d);n(425),n(428),n(427),n(421),n(422),n(426),n(424),n(423);var E=function(e){var t=e.children,n=e.data;return o.default.createElement("div",null,o.default.createElement(u.default,{title:"Wishberry Films",meta:[{name:"description",content:"Wishberry Films website"},{name:"keywords",content:"wishberry, film, invest"}]}),o.default.createElement(f.default,{siteTitle:n.site.siteMetadata.title}),o.default.createElement("div",null,t()),o.default.createElement(p.default,null))};E.propTypes={children:i.default.func},t.default=E;t.query="** extracted graphql fragment **"},426:function(e,t){},427:function(e,t){},428:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-0e53fe2df7d6d2ec124c.js.map