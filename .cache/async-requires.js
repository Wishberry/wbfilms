// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/ankur/work/wbfilms/src/pages/404.js"),
  "component---src-pages-about-js": require("gatsby-module-loader?name=component---src-pages-about-js!/Users/ankur/work/wbfilms/src/pages/about.js"),
  "component---src-pages-film-js": require("gatsby-module-loader?name=component---src-pages-film-js!/Users/ankur/work/wbfilms/src/pages/film.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/ankur/work/wbfilms/src/pages/index.js"),
  "component---src-pages-page-2-js": require("gatsby-module-loader?name=component---src-pages-page-2-js!/Users/ankur/work/wbfilms/src/pages/page-2.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/ankur/work/wbfilms/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/ankur/work/wbfilms/.cache/json/404.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/ankur/work/wbfilms/.cache/json/about.json"),
  "film.json": require("gatsby-module-loader?name=path---film!/Users/ankur/work/wbfilms/.cache/json/film.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/ankur/work/wbfilms/.cache/json/index.json"),
  "page-2.json": require("gatsby-module-loader?name=path---page-2!/Users/ankur/work/wbfilms/.cache/json/page-2.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/ankur/work/wbfilms/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/ankur/work/wbfilms/.cache/layouts/index.js")
}