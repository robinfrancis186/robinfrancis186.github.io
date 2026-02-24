var u = {};
var y = /* @__PURE__ */ Symbol.for("react.transitional.element"), I = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.fragment"), $ = /* @__PURE__ */ Symbol.for("react.strict_mode"), Y = /* @__PURE__ */ Symbol.for("react.profiler"), L = /* @__PURE__ */ Symbol.for("react.consumer"), U = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), D = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), S = Symbol.iterator;
function q(e) {
  return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
}
var O = {
  isMounted: function() {
    return !1;
  },
  enqueueForceUpdate: function() {
  },
  enqueueReplaceState: function() {
  },
  enqueueSetState: function() {
  }
}, w = Object.assign, P = {};
function _(e, t, n) {
  this.props = e, this.context = t, this.refs = P, this.updater = n || O;
}
_.prototype.isReactComponent = {};
_.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
_.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function H() {
}
H.prototype = _.prototype;
function R(e, t, n) {
  this.props = e, this.context = t, this.refs = P, this.updater = n || O;
}
var T = R.prototype = new H();
T.constructor = R;
w(T, _.prototype);
T.isPureReactComponent = !0;
var A = Array.isArray;
function E() {
}
var i = { H: null, A: null, T: null, S: null }, N = Object.prototype.hasOwnProperty;
function m(e, t, n) {
  var r = n.ref;
  return {
    $$typeof: y,
    type: e,
    key: t,
    ref: r !== void 0 ? r : null,
    props: n
  };
}
function z(e, t) {
  return m(e.type, t, e.props);
}
function C(e) {
  return typeof e == "object" && e !== null && e.$$typeof === y;
}
function G(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var d = /\/+/g;
function v(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? G("" + e.key) : t.toString(36);
}
function K(e) {
  switch (e.status) {
    case "fulfilled":
      return e.value;
    case "rejected":
      throw e.reason;
    default:
      switch (typeof e.status == "string" ? e.then(E, E) : (e.status = "pending", e.then(
        function(t) {
          e.status === "pending" && (e.status = "fulfilled", e.value = t);
        },
        function(t) {
          e.status === "pending" && (e.status = "rejected", e.reason = t);
        }
      )), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.reason;
      }
  }
  throw e;
}
function p(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var f = !1;
  if (e === null) f = !0;
  else
    switch (s) {
      case "bigint":
      case "string":
      case "number":
        f = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case y:
          case I:
            f = !0;
            break;
          case g:
            return f = e._init, p(
              f(e._payload),
              t,
              n,
              r,
              o
            );
        }
    }
  if (f)
    return o = o(e), f = r === "" ? "." + v(e, 0) : r, A(o) ? (n = "", f != null && (n = f.replace(d, "$&/") + "/"), p(o, t, n, "", function(j) {
      return j;
    })) : o != null && (C(o) && (o = z(
      o,
      n + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(
        d,
        "$&/"
      ) + "/") + f
    )), t.push(o)), 1;
  f = 0;
  var a = r === "" ? "." : r + ":";
  if (A(e))
    for (var c = 0; c < e.length; c++)
      r = e[c], s = a + v(r, c), f += p(
        r,
        t,
        n,
        s,
        o
      );
  else if (c = q(e), typeof c == "function")
    for (e = c.call(e), c = 0; !(r = e.next()).done; )
      r = r.value, s = a + v(r, c++), f += p(
        r,
        t,
        n,
        s,
        o
      );
  else if (s === "object") {
    if (typeof e.then == "function")
      return p(
        K(e),
        t,
        n,
        r,
        o
      );
    throw t = String(e), Error(
      "Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."
    );
  }
  return f;
}
function l(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return p(e, r, "", "", function(s) {
    return t.call(n, s, o++);
  }), r;
}
function W(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(
      function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
      },
      function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
      }
    ), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var h = typeof reportError == "function" ? reportError : function(e) {
  if (typeof window == "object" && typeof window.ErrorEvent == "function") {
    var t = new window.ErrorEvent("error", {
      bubbles: !0,
      cancelable: !0,
      message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
      error: e
    });
    if (!window.dispatchEvent(t)) return;
  } else if (typeof process == "object" && typeof process.emit == "function") {
    process.emit("uncaughtException", e);
    return;
  }
  console.error(e);
}, B = {
  map: l,
  forEach: function(e, t, n) {
    l(
      e,
      function() {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function(e) {
    var t = 0;
    return l(e, function() {
      t++;
    }), t;
  },
  toArray: function(e) {
    return l(e, function(t) {
      return t;
    }) || [];
  },
  only: function(e) {
    if (!C(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  }
}, Q = u.Activity = b, V = u.Children = B, X = u.Component = _, Z = u.Fragment = M, J = u.Profiler = Y, F = u.PureComponent = R, ee = u.StrictMode = $, te = u.Suspense = x, re = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, ne = u.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function(e) {
    return i.H.useMemoCache(e);
  }
}, ue = u.cache = function(e) {
  return function() {
    return e.apply(null, arguments);
  };
}, oe = u.cacheSignal = function() {
  return null;
}, se = u.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error(
      "The argument must be a React element, but you passed " + e + "."
    );
  var r = w({}, e.props), o = e.key;
  if (t != null)
    for (s in t.key !== void 0 && (o = "" + t.key), t)
      !N.call(t, s) || s === "key" || s === "__self" || s === "__source" || s === "ref" && t.ref === void 0 || (r[s] = t[s]);
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    for (var f = Array(s), a = 0; a < s; a++)
      f[a] = arguments[a + 2];
    r.children = f;
  }
  return m(e.type, o, r);
}, fe = u.createContext = function(e) {
  return e = {
    $$typeof: U,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  }, e.Provider = e, e.Consumer = {
    $$typeof: L,
    _context: e
  }, e;
}, ie = u.createElement = function(e, t, n) {
  var r, o = {}, s = null;
  if (t != null)
    for (r in t.key !== void 0 && (s = "" + t.key), t)
      N.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (o[r] = t[r]);
  var f = arguments.length - 2;
  if (f === 1) o.children = n;
  else if (1 < f) {
    for (var a = Array(f), c = 0; c < f; c++)
      a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in f = e.defaultProps, f)
      o[r] === void 0 && (o[r] = f[r]);
  return m(e, s, o);
}, ce = u.createRef = function() {
  return { current: null };
}, ae = u.forwardRef = function(e) {
  return { $$typeof: k, render: e };
}, pe = u.isValidElement = C, _e = u.lazy = function(e) {
  return {
    $$typeof: g,
    _payload: { _status: -1, _result: e },
    _init: W
  };
}, le = u.memo = function(e, t) {
  return {
    $$typeof: D,
    type: e,
    compare: t === void 0 ? null : t
  };
}, ve = u.startTransition = function(e) {
  var t = i.T, n = {};
  i.T = n;
  try {
    var r = e(), o = i.S;
    o !== null && o(n, r), typeof r == "object" && r !== null && typeof r.then == "function" && r.then(E, h);
  } catch (s) {
    h(s);
  } finally {
    t !== null && n.types !== null && (t.types = n.types), i.T = t;
  }
}, Ee = u.unstable_useCacheRefresh = function() {
  return i.H.useCacheRefresh();
}, ye = u.use = function(e) {
  return i.H.use(e);
}, Re = u.useActionState = function(e, t, n) {
  return i.H.useActionState(e, t, n);
}, Te = u.useCallback = function(e, t) {
  return i.H.useCallback(e, t);
}, me = u.useContext = function(e) {
  return i.H.useContext(e);
}, Ce = u.useDebugValue = function() {
}, Se = u.useDeferredValue = function(e, t) {
  return i.H.useDeferredValue(e, t);
}, Ae = u.useEffect = function(e, t) {
  return i.H.useEffect(e, t);
}, de = u.useEffectEvent = function(e) {
  return i.H.useEffectEvent(e);
}, he = u.useId = function() {
  return i.H.useId();
}, ge = u.useImperativeHandle = function(e, t, n) {
  return i.H.useImperativeHandle(e, t, n);
}, Oe = u.useInsertionEffect = function(e, t) {
  return i.H.useInsertionEffect(e, t);
}, we = u.useLayoutEffect = function(e, t) {
  return i.H.useLayoutEffect(e, t);
}, Pe = u.useMemo = function(e, t) {
  return i.H.useMemo(e, t);
}, He = u.useOptimistic = function(e, t) {
  return i.H.useOptimistic(e, t);
}, Ne = u.useReducer = function(e, t, n) {
  return i.H.useReducer(e, t, n);
}, je = u.useRef = function(e) {
  return i.H.useRef(e);
}, Ie = u.useState = function(e) {
  return i.H.useState(e);
}, Me = u.useSyncExternalStore = function(e, t, n) {
  return i.H.useSyncExternalStore(
    e,
    t,
    n
  );
}, $e = u.useTransition = function() {
  return i.H.useTransition();
}, Ye = u.version = "19.2.4";
export {
  Q as Activity,
  V as Children,
  X as Component,
  Z as Fragment,
  J as Profiler,
  F as PureComponent,
  ee as StrictMode,
  te as Suspense,
  re as __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  ne as __COMPILER_RUNTIME,
  ue as cache,
  oe as cacheSignal,
  se as cloneElement,
  fe as createContext,
  ie as createElement,
  ce as createRef,
  u as default,
  ae as forwardRef,
  pe as isValidElement,
  _e as lazy,
  le as memo,
  ve as startTransition,
  Ee as unstable_useCacheRefresh,
  ye as use,
  Re as useActionState,
  Te as useCallback,
  me as useContext,
  Ce as useDebugValue,
  Se as useDeferredValue,
  Ae as useEffect,
  de as useEffectEvent,
  he as useId,
  ge as useImperativeHandle,
  Oe as useInsertionEffect,
  we as useLayoutEffect,
  Pe as useMemo,
  He as useOptimistic,
  Ne as useReducer,
  je as useRef,
  Ie as useState,
  Me as useSyncExternalStore,
  $e as useTransition,
  Ye as version
};
