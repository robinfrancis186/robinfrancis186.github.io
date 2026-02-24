import y from "react";
var i = {};
var s = y;
function l(e) {
  var r = "https://react.dev/errors/" + e;
  if (1 < arguments.length) {
    r += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var t = 2; t < arguments.length; t++)
      r += "&args[]=" + encodeURIComponent(arguments[t]);
  }
  return "Minified React error #" + e + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function a() {
}
var n = {
  d: {
    f: a,
    r: function() {
      throw Error(l(522));
    },
    D: a,
    C: a,
    L: a,
    m: a,
    X: a,
    S: a,
    M: a
  },
  p: 0,
  findDOMNode: null
}, v = /* @__PURE__ */ Symbol.for("react.portal");
function o(e, r, t) {
  var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: v,
    key: f == null ? null : "" + f,
    children: e,
    containerInfo: r,
    implementation: t
  };
}
var c = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function u(e, r) {
  if (e === "font") return "";
  if (typeof r == "string")
    return r === "use-credentials" ? r : "";
}
var _ = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, S = i.createPortal = function(e, r) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11)
    throw Error(l(299));
  return o(e, r, null, t);
}, O = i.flushSync = function(e) {
  var r = c.T, t = n.p;
  try {
    if (c.T = null, n.p = 2, e) return e();
  } finally {
    c.T = r, n.p = t, n.d.f();
  }
}, R = i.preconnect = function(e, r) {
  typeof e == "string" && (r ? (r = r.crossOrigin, r = typeof r == "string" ? r === "use-credentials" ? r : "" : void 0) : r = null, n.d.C(e, r));
}, T = i.prefetchDNS = function(e) {
  typeof e == "string" && n.d.D(e);
}, N = i.preinit = function(e, r) {
  if (typeof e == "string" && r && typeof r.as == "string") {
    var t = r.as, f = u(t, r.crossOrigin), g = typeof r.integrity == "string" ? r.integrity : void 0, d = typeof r.fetchPriority == "string" ? r.fetchPriority : void 0;
    t === "style" ? n.d.S(
      e,
      typeof r.precedence == "string" ? r.precedence : void 0,
      {
        crossOrigin: f,
        integrity: g,
        fetchPriority: d
      }
    ) : t === "script" && n.d.X(e, {
      crossOrigin: f,
      integrity: g,
      fetchPriority: d,
      nonce: typeof r.nonce == "string" ? r.nonce : void 0
    });
  }
}, E = i.preinitModule = function(e, r) {
  if (typeof e == "string")
    if (typeof r == "object" && r !== null) {
      if (r.as == null || r.as === "script") {
        var t = u(
          r.as,
          r.crossOrigin
        );
        n.d.M(e, {
          crossOrigin: t,
          integrity: typeof r.integrity == "string" ? r.integrity : void 0,
          nonce: typeof r.nonce == "string" ? r.nonce : void 0
        });
      }
    } else r == null && n.d.M(e);
}, P = i.preload = function(e, r) {
  if (typeof e == "string" && typeof r == "object" && r !== null && typeof r.as == "string") {
    var t = r.as, f = u(t, r.crossOrigin);
    n.d.L(e, t, {
      crossOrigin: f,
      integrity: typeof r.integrity == "string" ? r.integrity : void 0,
      nonce: typeof r.nonce == "string" ? r.nonce : void 0,
      type: typeof r.type == "string" ? r.type : void 0,
      fetchPriority: typeof r.fetchPriority == "string" ? r.fetchPriority : void 0,
      referrerPolicy: typeof r.referrerPolicy == "string" ? r.referrerPolicy : void 0,
      imageSrcSet: typeof r.imageSrcSet == "string" ? r.imageSrcSet : void 0,
      imageSizes: typeof r.imageSizes == "string" ? r.imageSizes : void 0,
      media: typeof r.media == "string" ? r.media : void 0
    });
  }
}, h = i.preloadModule = function(e, r) {
  if (typeof e == "string")
    if (r) {
      var t = u(r.as, r.crossOrigin);
      n.d.m(e, {
        as: typeof r.as == "string" && r.as !== "script" ? r.as : void 0,
        crossOrigin: t,
        integrity: typeof r.integrity == "string" ? r.integrity : void 0
      });
    } else n.d.m(e);
}, A = i.requestFormReset = function(e) {
  n.d.r(e);
}, D = i.unstable_batchedUpdates = function(e, r) {
  return e(r);
}, U = i.useFormState = function(e, r, t) {
  return c.H.useFormState(e, r, t);
}, p = i.useFormStatus = function() {
  return c.H.useHostTransitionStatus();
}, M = i.version = "19.2.4";
export {
  _ as __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  S as createPortal,
  i as default,
  O as flushSync,
  R as preconnect,
  T as prefetchDNS,
  N as preinit,
  E as preinitModule,
  P as preload,
  h as preloadModule,
  A as requestFormReset,
  D as unstable_batchedUpdates,
  U as useFormState,
  p as useFormStatus,
  M as version
};
