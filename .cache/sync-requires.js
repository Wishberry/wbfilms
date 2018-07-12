// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/ankur/work/wbfilms/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/ankur/work/wbfilms/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/ankur/work/wbfilms/src/pages/about.js")),
  "component---src-pages-film-chippa-js": preferDefault(require("/Users/ankur/work/wbfilms/src/pages/film/chippa.js")),
  "component---src-pages-film-chuskit-js": preferDefault(require("/Users/ankur/work/wbfilms/src/pages/film/chuskit.js")),
  "component---src-pages-film-sap-js": preferDefault(require("/Users/ankur/work/wbfilms/src/pages/film/sap.js")),
  "component---src-pages-film-zollywood-js": preferDefault(require("/Users/ankur/work/wbfilms/src/pages/film/zollywood.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ankur/work/wbfilms/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/ankur/work/wbfilms/src/pages/page-2.js")),
  "component---src-pages-privacy-policy-js": preferDefault(require("/Users/ankur/work/wbfilms/src/pages/privacy-policy.js")),
  "component---src-pages-submit-js": preferDefault(require("/Users/ankur/work/wbfilms/src/pages/submit.js"))
}

exports.json = {
  "layout-index.json": require("/Users/ankur/work/wbfilms/.cache/json/layout-index.json"),
  "404.json": require("/Users/ankur/work/wbfilms/.cache/json/404.json"),
  "about.json": require("/Users/ankur/work/wbfilms/.cache/json/about.json"),
  "film-chippa.json": require("/Users/ankur/work/wbfilms/.cache/json/film-chippa.json"),
  "film-chuskit.json": require("/Users/ankur/work/wbfilms/.cache/json/film-chuskit.json"),
  "film-sap.json": require("/Users/ankur/work/wbfilms/.cache/json/film-sap.json"),
  "film-zollywood.json": require("/Users/ankur/work/wbfilms/.cache/json/film-zollywood.json"),
  "index.json": require("/Users/ankur/work/wbfilms/.cache/json/index.json"),
  "page-2.json": require("/Users/ankur/work/wbfilms/.cache/json/page-2.json"),
  "privacy-policy.json": require("/Users/ankur/work/wbfilms/.cache/json/privacy-policy.json"),
  "submit.json": require("/Users/ankur/work/wbfilms/.cache/json/submit.json"),
  "404-html.json": require("/Users/ankur/work/wbfilms/.cache/json/404-html.json")
}