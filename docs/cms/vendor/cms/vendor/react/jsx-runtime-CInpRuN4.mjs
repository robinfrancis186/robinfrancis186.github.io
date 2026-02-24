var l = {};
var E = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
function v(a, r, t) {
  var s = null;
  if (t !== void 0 && (s = "" + t), r.key !== void 0 && (s = "" + r.key), "key" in r) {
    t = {};
    for (var e in r)
      e !== "key" && (t[e] = r[e]);
  } else t = r;
  return r = t.ref, {
    $$typeof: E,
    type: a,
    key: s,
    ref: r !== void 0 ? r : null,
    props: t
  };
}
var u = l.Fragment = n, x = l.jsx = v, d = l.jsxs = v;
export {
  u as Fragment,
  l as default,
  x as jsx,
  d as jsxs
};
