const e = "react-dom", r = "19.2.4", s = "React package for working with the DOM.", t = "index.js", c = { type: "git", url: "https://github.com/facebook/react.git", directory: "packages/react-dom" }, a = ["react"], o = "MIT", i = { url: "https://github.com/facebook/react/issues" }, j = "https://react.dev/", v = { scheduler: "^0.27.0" }, n = { react: "^19.2.4" }, d = ["LICENSE", "README.md", "client.js", "client.react-server.js", "index.js", "profiling.js", "profiling.react-server.js", "react-dom.react-server.js", "server.browser.js", "server.bun.js", "server.edge.js", "server.js", "server.node.js", "server.react-server.js", "static.browser.js", "static.edge.js", "static.js", "static.node.js", "static.react-server.js", "test-utils.js", "cjs/"], l = { ".": { "react-server": "./react-dom.react-server.js", default: "./index.js" }, "./client": { "react-server": "./client.react-server.js", default: "./client.js" }, "./server": { "react-server": "./server.react-server.js", workerd: "./server.edge.js", bun: "./server.bun.js", deno: "./server.browser.js", worker: "./server.browser.js", node: "./server.node.js", "edge-light": "./server.edge.js", browser: "./server.browser.js", default: "./server.node.js" }, "./server.browser": { "react-server": "./server.react-server.js", default: "./server.browser.js" }, "./server.bun": { "react-server": "./server.react-server.js", default: "./server.bun.js" }, "./server.edge": { "react-server": "./server.react-server.js", default: "./server.edge.js" }, "./server.node": { "react-server": "./server.react-server.js", default: "./server.node.js" }, "./static": { "react-server": "./static.react-server.js", workerd: "./static.edge.js", deno: "./static.browser.js", worker: "./static.browser.js", node: "./static.node.js", "edge-light": "./static.edge.js", browser: "./static.browser.js", default: "./static.node.js" }, "./static.browser": { "react-server": "./static.react-server.js", default: "./static.browser.js" }, "./static.edge": { "react-server": "./static.react-server.js", default: "./static.edge.js" }, "./static.node": { "react-server": "./static.react-server.js", default: "./static.node.js" }, "./profiling": { "react-server": "./profiling.react-server.js", default: "./profiling.js" }, "./test-utils": "./test-utils.js", "./package.json": "./package.json" }, g = { "./server.js": "./server.browser.js", "./static.js": "./static.browser.js" }, u = {
  name: e,
  version: r,
  description: s,
  main: t,
  repository: c,
  keywords: a,
  license: o,
  bugs: i,
  homepage: j,
  dependencies: v,
  peerDependencies: n,
  files: d,
  exports: l,
  browser: g
};
export {
  g as browser,
  i as bugs,
  u as default,
  v as dependencies,
  s as description,
  l as exports,
  d as files,
  j as homepage,
  a as keywords,
  o as license,
  t as main,
  e as name,
  n as peerDependencies,
  c as repository,
  r as version
};
