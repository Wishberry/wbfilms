// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/ankur/work/wbfilms/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/ankur/work/wbfilms/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/ankur/work/wbfilms/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ankur/work/wbfilms/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/ankur/work/wbfilms/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/ankur/work/wbfilms/.cache/json/layout-index.json"),
  "404.json": require("/Users/ankur/work/wbfilms/.cache/json/404.json"),
  "about.json": require("/Users/ankur/work/wbfilms/.cache/json/about.json"),
  "index.json": require("/Users/ankur/work/wbfilms/.cache/json/index.json"),
  "page-2.json": require("/Users/ankur/work/wbfilms/.cache/json/page-2.json"),
  "404-html.json": require("/Users/ankur/work/wbfilms/.cache/json/404-html.json")
}