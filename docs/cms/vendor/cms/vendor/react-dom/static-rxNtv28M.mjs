import ra from "react";
import ia from "react-dom";
var Gl = {};
var xt = ra, aa = ia;
function y(n) {
  var l = "https://react.dev/errors/" + n;
  if (1 < arguments.length) {
    l += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var e = 2; e < arguments.length; e++)
      l += "&args[]=" + encodeURIComponent(arguments[e]);
  }
  return "Minified React error #" + n + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ti = /* @__PURE__ */ Symbol.for("react.transitional.element"), ri = /* @__PURE__ */ Symbol.for("react.portal"), ii = /* @__PURE__ */ Symbol.for("react.fragment"), ai = /* @__PURE__ */ Symbol.for("react.strict_mode"), ui = /* @__PURE__ */ Symbol.for("react.profiler"), ci = /* @__PURE__ */ Symbol.for("react.consumer"), xe = /* @__PURE__ */ Symbol.for("react.context"), St = /* @__PURE__ */ Symbol.for("react.forward_ref"), Se = /* @__PURE__ */ Symbol.for("react.suspense"), Ft = /* @__PURE__ */ Symbol.for("react.suspense_list"), Pt = /* @__PURE__ */ Symbol.for("react.memo"), Fe = /* @__PURE__ */ Symbol.for("react.lazy"), ua = /* @__PURE__ */ Symbol.for("react.scope"), fi = /* @__PURE__ */ Symbol.for("react.activity"), ca = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), fa = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), oa = /* @__PURE__ */ Symbol.for("react.view_transition"), Er = Symbol.iterator;
function oi(n) {
  return n === null || typeof n != "object" ? null : (n = Er && n[Er] || n["@@iterator"], typeof n == "function" ? n : null);
}
var he = Array.isArray;
function wr(n, l) {
  var e = n.length & 3, t = n.length - e, r = l;
  for (l = 0; l < t; ) {
    var i = n.charCodeAt(l) & 255 | (n.charCodeAt(++l) & 255) << 8 | (n.charCodeAt(++l) & 255) << 16 | (n.charCodeAt(++l) & 255) << 24;
    ++l, i = 3432918353 * (i & 65535) + ((3432918353 * (i >>> 16) & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, i = 461845907 * (i & 65535) + ((461845907 * (i >>> 16) & 65535) << 16) & 4294967295, r ^= i, r = r << 13 | r >>> 19, r = 5 * (r & 65535) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295, r = (r & 65535) + 27492 + (((r >>> 16) + 58964 & 65535) << 16);
  }
  switch (i = 0, e) {
    case 3:
      i ^= (n.charCodeAt(l + 2) & 255) << 16;
    case 2:
      i ^= (n.charCodeAt(l + 1) & 255) << 8;
    case 1:
      i ^= n.charCodeAt(l) & 255, i = 3432918353 * (i & 65535) + ((3432918353 * (i >>> 16) & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, r ^= 461845907 * (i & 65535) + ((461845907 * (i >>> 16) & 65535) << 16) & 4294967295;
  }
  return r ^= n.length, r ^= r >>> 16, r = 2246822507 * (r & 65535) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, r ^= r >>> 13, r = 3266489909 * (r & 65535) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, (r ^ r >>> 16) >>> 0;
}
var hi = new MessageChannel(), di = [];
hi.port1.onmessage = function() {
  var n = di.shift();
  n && n();
};
function At(n) {
  di.push(n), hi.port2.postMessage(null);
}
function ha(n) {
  setTimeout(function() {
    throw n;
  });
}
var da = Promise, si = typeof queueMicrotask == "function" ? queueMicrotask : function(n) {
  da.resolve(null).then(n).catch(ha);
}, p = null, j = 0;
function d(n, l) {
  if (l.byteLength !== 0)
    if (2048 < l.byteLength)
      0 < j && (n.enqueue(
        new Uint8Array(p.buffer, 0, j)
      ), p = new Uint8Array(2048), j = 0), n.enqueue(l);
    else {
      var e = p.length - j;
      e < l.byteLength && (e === 0 ? n.enqueue(p) : (p.set(l.subarray(0, e), j), n.enqueue(p), l = l.subarray(e)), p = new Uint8Array(2048), j = 0), p.set(l, j), j += l.byteLength;
    }
}
function S(n, l) {
  return d(n, l), !0;
}
function me(n) {
  p && 0 < j && (n.enqueue(new Uint8Array(p.buffer, 0, j)), p = null, j = 0);
}
var gi = new TextEncoder();
function v(n) {
  return gi.encode(n);
}
function s(n) {
  return gi.encode(n);
}
function sa(n) {
  return n.byteLength;
}
function vi(n, l) {
  typeof n.error == "function" ? n.error(l) : n.close();
}
var K = Object.assign, k = Object.prototype.hasOwnProperty, ga = RegExp(
  "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
), Cr = {}, Rr = {};
function kt(n) {
  return k.call(Rr, n) ? !0 : k.call(Cr, n) ? !1 : ga.test(n) ? Rr[n] = !0 : (Cr[n] = !0, !1);
}
var va = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
), ba = /* @__PURE__ */ new Map([
  ["acceptCharset", "accept-charset"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
  ["crossOrigin", "crossorigin"],
  ["accentHeight", "accent-height"],
  ["alignmentBaseline", "alignment-baseline"],
  ["arabicForm", "arabic-form"],
  ["baselineShift", "baseline-shift"],
  ["capHeight", "cap-height"],
  ["clipPath", "clip-path"],
  ["clipRule", "clip-rule"],
  ["colorInterpolation", "color-interpolation"],
  ["colorInterpolationFilters", "color-interpolation-filters"],
  ["colorProfile", "color-profile"],
  ["colorRendering", "color-rendering"],
  ["dominantBaseline", "dominant-baseline"],
  ["enableBackground", "enable-background"],
  ["fillOpacity", "fill-opacity"],
  ["fillRule", "fill-rule"],
  ["floodColor", "flood-color"],
  ["floodOpacity", "flood-opacity"],
  ["fontFamily", "font-family"],
  ["fontSize", "font-size"],
  ["fontSizeAdjust", "font-size-adjust"],
  ["fontStretch", "font-stretch"],
  ["fontStyle", "font-style"],
  ["fontVariant", "font-variant"],
  ["fontWeight", "font-weight"],
  ["glyphName", "glyph-name"],
  ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
  ["glyphOrientationVertical", "glyph-orientation-vertical"],
  ["horizAdvX", "horiz-adv-x"],
  ["horizOriginX", "horiz-origin-x"],
  ["imageRendering", "image-rendering"],
  ["letterSpacing", "letter-spacing"],
  ["lightingColor", "lighting-color"],
  ["markerEnd", "marker-end"],
  ["markerMid", "marker-mid"],
  ["markerStart", "marker-start"],
  ["overlinePosition", "overline-position"],
  ["overlineThickness", "overline-thickness"],
  ["paintOrder", "paint-order"],
  ["panose-1", "panose-1"],
  ["pointerEvents", "pointer-events"],
  ["renderingIntent", "rendering-intent"],
  ["shapeRendering", "shape-rendering"],
  ["stopColor", "stop-color"],
  ["stopOpacity", "stop-opacity"],
  ["strikethroughPosition", "strikethrough-position"],
  ["strikethroughThickness", "strikethrough-thickness"],
  ["strokeDasharray", "stroke-dasharray"],
  ["strokeDashoffset", "stroke-dashoffset"],
  ["strokeLinecap", "stroke-linecap"],
  ["strokeLinejoin", "stroke-linejoin"],
  ["strokeMiterlimit", "stroke-miterlimit"],
  ["strokeOpacity", "stroke-opacity"],
  ["strokeWidth", "stroke-width"],
  ["textAnchor", "text-anchor"],
  ["textDecoration", "text-decoration"],
  ["textRendering", "text-rendering"],
  ["transformOrigin", "transform-origin"],
  ["underlinePosition", "underline-position"],
  ["underlineThickness", "underline-thickness"],
  ["unicodeBidi", "unicode-bidi"],
  ["unicodeRange", "unicode-range"],
  ["unitsPerEm", "units-per-em"],
  ["vAlphabetic", "v-alphabetic"],
  ["vHanging", "v-hanging"],
  ["vIdeographic", "v-ideographic"],
  ["vMathematical", "v-mathematical"],
  ["vectorEffect", "vector-effect"],
  ["vertAdvY", "vert-adv-y"],
  ["vertOriginX", "vert-origin-x"],
  ["vertOriginY", "vert-origin-y"],
  ["wordSpacing", "word-spacing"],
  ["writingMode", "writing-mode"],
  ["xmlnsXlink", "xmlns:xlink"],
  ["xHeight", "x-height"]
]), ya = /["'&<>]/;
function E(n) {
  if (typeof n == "boolean" || typeof n == "number" || typeof n == "bigint")
    return "" + n;
  n = "" + n;
  var l = ya.exec(n);
  if (l) {
    var e = "", t, r = 0;
    for (t = l.index; t < n.length; t++) {
      switch (n.charCodeAt(t)) {
        case 34:
          l = "&quot;";
          break;
        case 38:
          l = "&amp;";
          break;
        case 39:
          l = "&#x27;";
          break;
        case 60:
          l = "&lt;";
          break;
        case 62:
          l = "&gt;";
          break;
        default:
          continue;
      }
      r !== t && (e += n.slice(r, t)), r = t + 1, e += l;
    }
    n = r !== t ? e + n.slice(r, t) : e;
  }
  return n;
}
var Ta = /([A-Z])/g, Ea = /^ms-/, wa = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function Al(n) {
  return wa.test("" + n) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : n;
}
var qn = xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, bi = aa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ca = {
  pending: !1,
  data: null,
  method: null,
  action: null
}, En = bi.d;
bi.d = {
  f: En.f,
  r: En.r,
  D: rc,
  C: ic,
  L: ac,
  m: uc,
  X: fc,
  S: cc,
  M: oc
};
var tn = [], el = null;
s('"></template>');
var Ra = s("<script"), de = s("<\/script>"), xa = s('<script src="'), Sa = s('<script type="module" src="'), xr = s(' nonce="'), Sr = s(' integrity="'), Fr = s(' crossorigin="'), Pr = s(' async=""><\/script>'), Fa = s("<style"), it = /(<\/|<)(s)(cript)/gi;
function at(n, l, e, t) {
  return "" + l + (e === "s" ? "\\u0073" : "\\u0053") + t;
}
var Pa = s(
  '<script type="importmap">'
), Aa = s("<\/script>");
function Pe(n, l, e, t, r, i) {
  e = typeof l == "string" ? l : l && l.script;
  var a = e === void 0 ? Ra : s(
    '<script nonce="' + E(e) + '"'
  ), c = typeof l == "string" ? void 0 : l && l.style, u = c === void 0 ? Fa : s(
    '<style nonce="' + E(c) + '"'
  ), f = n.idPrefix, o = [], h = n.bootstrapScriptContent, g = n.bootstrapScripts, b = n.bootstrapModules;
  if (h !== void 0 && (o.push(a), ie(o, n), o.push(
    I,
    v(
      ("" + h).replace(it, at)
    ),
    de
  )), h = [], t !== void 0 && (h.push(Pa), h.push(
    v(
      ("" + JSON.stringify(t)).replace(it, at)
    )
  ), h.push(Aa)), t = r ? {
    preconnects: "",
    fontPreloads: "",
    highImagePreloads: "",
    remainingCapacity: 2 + (typeof i == "number" ? i : 2e3)
  } : null, r = {
    placeholderPrefix: s(f + "P:"),
    segmentPrefix: s(f + "S:"),
    boundaryPrefix: s(f + "B:"),
    startInlineScript: a,
    startInlineStyle: u,
    preamble: kl(),
    externalRuntimeScript: null,
    bootstrapChunks: o,
    importMapChunks: h,
    onHeaders: r,
    headers: t,
    resets: {
      font: {},
      dns: {},
      connect: { default: {}, anonymous: {}, credentials: {} },
      image: {},
      style: {}
    },
    charsetChunks: [],
    viewportChunks: [],
    hoistableChunks: [],
    preconnects: /* @__PURE__ */ new Set(),
    fontPreloads: /* @__PURE__ */ new Set(),
    highImagePreloads: /* @__PURE__ */ new Set(),
    styles: /* @__PURE__ */ new Map(),
    bootstrapScripts: /* @__PURE__ */ new Set(),
    scripts: /* @__PURE__ */ new Set(),
    bulkPreloads: /* @__PURE__ */ new Set(),
    preloads: {
      images: /* @__PURE__ */ new Map(),
      stylesheets: /* @__PURE__ */ new Map(),
      scripts: /* @__PURE__ */ new Map(),
      moduleScripts: /* @__PURE__ */ new Map()
    },
    nonce: { script: e, style: c },
    hoistableState: null,
    stylesToHoist: !1
  }, g !== void 0)
    for (t = 0; t < g.length; t++)
      f = g[t], c = a = void 0, u = {
        rel: "preload",
        as: "script",
        fetchPriority: "low",
        nonce: l
      }, typeof f == "string" ? u.href = i = f : (u.href = i = f.src, u.integrity = c = typeof f.integrity == "string" ? f.integrity : void 0, u.crossOrigin = a = typeof f == "string" || f.crossOrigin == null ? void 0 : f.crossOrigin === "use-credentials" ? "use-credentials" : ""), f = n, h = i, f.scriptResources[h] = null, f.moduleScriptResources[h] = null, f = [], U(f, u), r.bootstrapScripts.add(f), o.push(
        xa,
        v(E(i)),
        O
      ), e && o.push(
        xr,
        v(E(e)),
        O
      ), typeof c == "string" && o.push(
        Sr,
        v(E(c)),
        O
      ), typeof a == "string" && o.push(
        Fr,
        v(E(a)),
        O
      ), ie(o, n), o.push(Pr);
  if (b !== void 0)
    for (l = 0; l < b.length; l++)
      c = b[l], i = t = void 0, a = {
        rel: "modulepreload",
        fetchPriority: "low",
        nonce: e
      }, typeof c == "string" ? a.href = g = c : (a.href = g = c.src, a.integrity = i = typeof c.integrity == "string" ? c.integrity : void 0, a.crossOrigin = t = typeof c == "string" || c.crossOrigin == null ? void 0 : c.crossOrigin === "use-credentials" ? "use-credentials" : ""), c = n, u = g, c.scriptResources[u] = null, c.moduleScriptResources[u] = null, c = [], U(c, a), r.bootstrapScripts.add(c), o.push(
        Sa,
        v(E(g)),
        O
      ), e && o.push(
        xr,
        v(E(e)),
        O
      ), typeof i == "string" && o.push(
        Sr,
        v(E(i)),
        O
      ), typeof t == "string" && o.push(
        Fr,
        v(E(t)),
        O
      ), ie(o, n), o.push(Pr);
  return r;
}
function yi(n, l, e, t, r) {
  return {
    idPrefix: n === void 0 ? "" : n,
    nextFormID: 0,
    streamingFormat: 0,
    bootstrapScriptContent: e,
    bootstrapScripts: t,
    bootstrapModules: r,
    instructions: 0,
    hasBody: !1,
    hasHtml: !1,
    unknownResources: {},
    dnsResources: {},
    connectResources: { default: {}, anonymous: {}, credentials: {} },
    imageResources: {},
    styleResources: {},
    scriptResources: {},
    moduleUnknownResources: {},
    moduleScriptResources: {}
  };
}
function kl() {
  return { htmlChunks: null, headChunks: null, bodyChunks: null };
}
function z(n, l, e, t) {
  return {
    insertionMode: n,
    selectedValue: l,
    tagScope: e,
    viewTransition: t
  };
}
function Ti(n) {
  return z(
    n === "http://www.w3.org/2000/svg" ? 4 : n === "http://www.w3.org/1998/Math/MathML" ? 5 : 0,
    null,
    0,
    null
  );
}
function Ar(n, l, e) {
  var t = n.tagScope & -25;
  switch (l) {
    case "noscript":
      return z(2, null, t | 1, null);
    case "select":
      return z(
        2,
        e.value != null ? e.value : e.defaultValue,
        t,
        null
      );
    case "svg":
      return z(4, null, t, null);
    case "picture":
      return z(2, null, t | 2, null);
    case "math":
      return z(5, null, t, null);
    case "foreignObject":
      return z(2, null, t, null);
    case "table":
      return z(6, null, t, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return z(7, null, t, null);
    case "colgroup":
      return z(9, null, t, null);
    case "tr":
      return z(8, null, t, null);
    case "head":
      if (2 > n.insertionMode)
        return z(3, null, t, null);
      break;
    case "html":
      if (n.insertionMode === 0)
        return z(1, null, t, null);
  }
  return 6 <= n.insertionMode || 2 > n.insertionMode ? z(2, null, t, null) : n.tagScope !== t ? z(
    n.insertionMode,
    n.selectedValue,
    t,
    null
  ) : n;
}
function Ei(n) {
  return n === null ? null : {
    update: n.update,
    enter: "none",
    exit: "none",
    share: n.update,
    name: n.autoName,
    autoName: n.autoName,
    nameIdx: 0
  };
}
function ut(n, l) {
  return l.tagScope & 32 && (n.instructions |= 128), z(
    l.insertionMode,
    l.selectedValue,
    l.tagScope | 12,
    Ei(l.viewTransition)
  );
}
function re(n, l) {
  n = Ei(l.viewTransition);
  var e = l.tagScope | 16;
  return n !== null && n.share !== "none" && (e |= 64), z(
    l.insertionMode,
    l.selectedValue,
    e,
    n
  );
}
var dn = s("<!-- -->");
function kr(n, l, e, t) {
  return l === "" ? t : (t && n.push(dn), n.push(v(E(l))), !0);
}
var Mr = /* @__PURE__ */ new Map(), ka = s(' style="'), Ir = s(":"), Ma = s(";");
function wi(n, l) {
  if (typeof l != "object") throw Error(y(62));
  var e = !0, t;
  for (t in l)
    if (k.call(l, t)) {
      var r = l[t];
      if (r != null && typeof r != "boolean" && r !== "") {
        if (t.indexOf("--") === 0) {
          var i = v(E(t));
          r = v(
            E(("" + r).trim())
          );
        } else
          i = Mr.get(t), i === void 0 && (i = s(
            E(
              t.replace(Ta, "-$1").toLowerCase().replace(Ea, "-ms-")
            )
          ), Mr.set(t, i)), r = typeof r == "number" ? r === 0 || va.has(t) ? v("" + r) : v(r + "px") : v(
            E(("" + r).trim())
          );
        e ? (e = !1, n.push(
          ka,
          i,
          Ir,
          r
        )) : n.push(Ma, i, Ir, r);
      }
    }
  e || n.push(O);
}
var Z = s(" "), en = s('="'), O = s('"'), ct = s('=""');
function ft(n, l, e) {
  e && typeof e != "function" && typeof e != "symbol" && n.push(Z, v(l), ct);
}
function W(n, l, e) {
  typeof e != "function" && typeof e != "symbol" && typeof e != "boolean" && n.push(
    Z,
    v(l),
    en,
    v(E(e)),
    O
  );
}
var Ci = s(
  E(
    "javascript:throw new Error('React form unexpectedly submitted.')"
  )
), Ri = s('<input type="hidden"');
function qe(n, l) {
  this.push(Ri), xi(n), W(this, "name", l), W(this, "value", n), this.push(Ml);
}
function xi(n) {
  if (typeof n != "string") throw Error(y(480));
}
function Si(n, l) {
  if (typeof l.$$FORM_ACTION == "function") {
    var e = n.nextFormID++;
    n = n.idPrefix + e;
    try {
      var t = l.$$FORM_ACTION(n);
      if (t) {
        var r = t.data;
        r?.forEach(xi);
      }
      return t;
    } catch (i) {
      if (typeof i == "object" && i !== null && typeof i.then == "function")
        throw i;
    }
  }
  return null;
}
function Or(n, l, e, t, r, i, a, c) {
  var u = null;
  if (typeof t == "function") {
    var f = Si(l, t);
    f !== null ? (c = f.name, t = f.action || "", r = f.encType, i = f.method, a = f.target, u = f.data) : (n.push(
      Z,
      v("formAction"),
      en,
      Ci,
      O
    ), a = i = r = t = c = null, Fi(l, e));
  }
  return c != null && x(n, "name", c), t != null && x(n, "formAction", t), r != null && x(n, "formEncType", r), i != null && x(n, "formMethod", i), a != null && x(n, "formTarget", a), u;
}
function x(n, l, e) {
  switch (l) {
    case "className":
      W(n, "class", e);
      break;
    case "tabIndex":
      W(n, "tabindex", e);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      W(n, l, e);
      break;
    case "style":
      wi(n, e);
      break;
    case "src":
    case "href":
      if (e === "") break;
    case "action":
    case "formAction":
      if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean")
        break;
      e = Al("" + e), n.push(
        Z,
        v(l),
        en,
        v(E(e)),
        O
      );
      break;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "ref":
      break;
    case "autoFocus":
    case "multiple":
    case "muted":
      ft(n, l.toLowerCase(), e);
      break;
    case "xlinkHref":
      if (typeof e == "function" || typeof e == "symbol" || typeof e == "boolean")
        break;
      e = Al("" + e), n.push(
        Z,
        v("xlink:href"),
        en,
        v(E(e)),
        O
      );
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      typeof e != "function" && typeof e != "symbol" && n.push(
        Z,
        v(l),
        en,
        v(E(e)),
        O
      );
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      e && typeof e != "function" && typeof e != "symbol" && n.push(
        Z,
        v(l),
        ct
      );
      break;
    case "capture":
    case "download":
      e === !0 ? n.push(
        Z,
        v(l),
        ct
      ) : e !== !1 && typeof e != "function" && typeof e != "symbol" && n.push(
        Z,
        v(l),
        en,
        v(E(e)),
        O
      );
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e && n.push(
        Z,
        v(l),
        en,
        v(E(e)),
        O
      );
      break;
    case "rowSpan":
    case "start":
      typeof e == "function" || typeof e == "symbol" || isNaN(e) || n.push(
        Z,
        v(l),
        en,
        v(E(e)),
        O
      );
      break;
    case "xlinkActuate":
      W(n, "xlink:actuate", e);
      break;
    case "xlinkArcrole":
      W(n, "xlink:arcrole", e);
      break;
    case "xlinkRole":
      W(n, "xlink:role", e);
      break;
    case "xlinkShow":
      W(n, "xlink:show", e);
      break;
    case "xlinkTitle":
      W(n, "xlink:title", e);
      break;
    case "xlinkType":
      W(n, "xlink:type", e);
      break;
    case "xmlBase":
      W(n, "xml:base", e);
      break;
    case "xmlLang":
      W(n, "xml:lang", e);
      break;
    case "xmlSpace":
      W(n, "xml:space", e);
      break;
    default:
      if ((!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = ba.get(l) || l, kt(l))) {
        switch (typeof e) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            var t = l.toLowerCase().slice(0, 5);
            if (t !== "data-" && t !== "aria-") return;
        }
        n.push(
          Z,
          v(l),
          en,
          v(E(e)),
          O
        );
      }
  }
}
var I = s(">"), Ml = s("/>");
function q(n, l, e) {
  if (l != null) {
    if (e != null) throw Error(y(60));
    if (typeof l != "object" || !("__html" in l))
      throw Error(y(61));
    l = l.__html, l != null && n.push(v("" + l));
  }
}
function Ia(n) {
  var l = "";
  return xt.Children.forEach(n, function(e) {
    e != null && (l += e);
  }), l;
}
var pe = s(' selected=""'), _r = s(
  `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`
);
function Fi(n, l) {
  if ((n.instructions & 16) === 0) {
    n.instructions |= 16;
    var e = l.preamble, t = l.bootstrapChunks;
    (e.htmlChunks || e.headChunks) && t.length === 0 ? (t.push(l.startInlineScript), ie(t, n), t.push(
      I,
      _r,
      de
    )) : t.unshift(
      l.startInlineScript,
      I,
      _r,
      de
    );
  }
}
var Oa = s("<!--F!-->"), _a = s("<!--F-->");
function U(n, l) {
  n.push(L("link"));
  for (var e in l)
    if (k.call(l, e)) {
      var t = l[e];
      if (t != null)
        switch (e) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(y(399, "link"));
          default:
            x(n, e, t);
        }
    }
  return n.push(Ml), null;
}
var Lr = /(<\/|<)(s)(tyle)/gi;
function Br(n, l, e, t) {
  return "" + l + (e === "s" ? "\\73 " : "\\53 ") + t;
}
function pn(n, l, e) {
  n.push(L(e));
  for (var t in l)
    if (k.call(l, t)) {
      var r = l[t];
      if (r != null)
        switch (t) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(y(399, e));
          default:
            x(n, t, r);
        }
    }
  return n.push(Ml), null;
}
function Nr(n, l) {
  n.push(L("title"));
  var e = null, t = null, r;
  for (r in l)
    if (k.call(l, r)) {
      var i = l[r];
      if (i != null)
        switch (r) {
          case "children":
            e = i;
            break;
          case "dangerouslySetInnerHTML":
            t = i;
            break;
          default:
            x(n, r, i);
        }
    }
  return n.push(I), l = Array.isArray(e) ? 2 > e.length ? e[0] : null : e, typeof l != "function" && typeof l != "symbol" && l !== null && l !== void 0 && n.push(v(E("" + l))), q(n, t, e), n.push(Gn("title")), null;
}
var La = s("<!--head-->"), Ba = s("<!--body-->"), Na = s("<!--html-->");
function se(n, l) {
  n.push(L("script"));
  var e = null, t = null, r;
  for (r in l)
    if (k.call(l, r)) {
      var i = l[r];
      if (i != null)
        switch (r) {
          case "children":
            e = i;
            break;
          case "dangerouslySetInnerHTML":
            t = i;
            break;
          default:
            x(n, r, i);
        }
    }
  return n.push(I), q(n, t, e), typeof e == "string" && n.push(
    v(("" + e).replace(it, at))
  ), n.push(Gn("script")), null;
}
function je(n, l, e) {
  n.push(L(e));
  var t = e = null, r;
  for (r in l)
    if (k.call(l, r)) {
      var i = l[r];
      if (i != null)
        switch (r) {
          case "children":
            e = i;
            break;
          case "dangerouslySetInnerHTML":
            t = i;
            break;
          default:
            x(n, r, i);
        }
    }
  return n.push(I), q(n, t, e), e;
}
function le(n, l, e) {
  n.push(L(e));
  var t = e = null, r;
  for (r in l)
    if (k.call(l, r)) {
      var i = l[r];
      if (i != null)
        switch (r) {
          case "children":
            e = i;
            break;
          case "dangerouslySetInnerHTML":
            t = i;
            break;
          default:
            x(n, r, i);
        }
    }
  return n.push(I), q(n, t, e), typeof e == "string" ? (n.push(v(E(e))), null) : e;
}
var $e = s(`
`), za = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, zr = /* @__PURE__ */ new Map();
function L(n) {
  var l = zr.get(n);
  if (l === void 0) {
    if (!za.test(n))
      throw Error(y(65, n));
    l = s("<" + n), zr.set(n, l);
  }
  return l;
}
var Da = s("<!DOCTYPE html>");
function Ha(n, l, e, t, r, i, a, c, u) {
  switch (l) {
    case "div":
    case "span":
    case "svg":
    case "path":
      break;
    case "a":
      n.push(L("a"));
      var f = null, o = null, h;
      for (h in e)
        if (k.call(e, h)) {
          var g = e[h];
          if (g != null)
            switch (h) {
              case "children":
                f = g;
                break;
              case "dangerouslySetInnerHTML":
                o = g;
                break;
              case "href":
                g === "" ? W(n, "href", "") : x(n, h, g);
                break;
              default:
                x(n, h, g);
            }
        }
      if (n.push(I), q(n, o, f), typeof f == "string") {
        n.push(v(E(f)));
        var b = null;
      } else b = f;
      return b;
    case "g":
    case "p":
    case "li":
      break;
    case "select":
      n.push(L("select"));
      var R = null, w = null, C;
      for (C in e)
        if (k.call(e, C)) {
          var M = e[C];
          if (M != null)
            switch (C) {
              case "children":
                R = M;
                break;
              case "dangerouslySetInnerHTML":
                w = M;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                x(
                  n,
                  C,
                  M
                );
            }
        }
      return n.push(I), q(n, w, R), R;
    case "option":
      var F = c.selectedValue;
      n.push(L("option"));
      var X = null, m = null, sn = null, T = null, un;
      for (un in e)
        if (k.call(e, un)) {
          var nn = e[un];
          if (nn != null)
            switch (un) {
              case "children":
                X = nn;
                break;
              case "selected":
                sn = nn;
                break;
              case "dangerouslySetInnerHTML":
                T = nn;
                break;
              case "value":
                m = nn;
              default:
                x(
                  n,
                  un,
                  nn
                );
            }
        }
      if (F != null) {
        var Q = m !== null ? "" + m : Ia(X);
        if (he(F)) {
          for (var cn = 0; cn < F.length; cn++)
            if ("" + F[cn] === Q) {
              n.push(pe);
              break;
            }
        } else
          "" + F === Q && n.push(pe);
      } else sn && n.push(pe);
      return n.push(I), q(n, T, X), X;
    case "textarea":
      n.push(L("textarea"));
      var A = null, gn = null, ln = null, _;
      for (_ in e)
        if (k.call(e, _)) {
          var V = e[_];
          if (V != null)
            switch (_) {
              case "children":
                ln = V;
                break;
              case "value":
                A = V;
                break;
              case "defaultValue":
                gn = V;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(y(91));
              default:
                x(
                  n,
                  _,
                  V
                );
            }
        }
      if (A === null && gn !== null && (A = gn), n.push(I), ln != null) {
        if (A != null) throw Error(y(92));
        if (he(ln)) {
          if (1 < ln.length)
            throw Error(y(93));
          A = "" + ln[0];
        }
        A = "" + ln;
      }
      return typeof A == "string" && A[0] === `
` && n.push($e), A !== null && n.push(
        v(E("" + A))
      ), null;
    case "input":
      n.push(L("input"));
      var In = null, On = null, bn = null, _n = null, il = null, vn = null, Cn = null, Le = null, Be = null, al;
      for (al in e)
        if (k.call(e, al)) {
          var fn = e[al];
          if (fn != null)
            switch (al) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(y(399, "input"));
              case "name":
                In = fn;
                break;
              case "formAction":
                On = fn;
                break;
              case "formEncType":
                bn = fn;
                break;
              case "formMethod":
                _n = fn;
                break;
              case "formTarget":
                il = fn;
                break;
              case "defaultChecked":
                Be = fn;
                break;
              case "defaultValue":
                Cn = fn;
                break;
              case "checked":
                Le = fn;
                break;
              case "value":
                vn = fn;
                break;
              default:
                x(
                  n,
                  al,
                  fn
                );
            }
        }
      var Ut = Or(
        n,
        t,
        r,
        On,
        bn,
        _n,
        il,
        In
      );
      return Le !== null ? ft(n, "checked", Le) : Be !== null && ft(n, "checked", Be), vn !== null ? x(n, "value", vn) : Cn !== null && x(n, "value", Cn), n.push(Ml), Ut?.forEach(qe, n), null;
    case "button":
      n.push(L("button"));
      var ul = null, Gt = null, Yt = null, Xt = null, Zt = null, Jt = null, Qt = null, cl;
      for (cl in e)
        if (k.call(e, cl)) {
          var yn = e[cl];
          if (yn != null)
            switch (cl) {
              case "children":
                ul = yn;
                break;
              case "dangerouslySetInnerHTML":
                Gt = yn;
                break;
              case "name":
                Yt = yn;
                break;
              case "formAction":
                Xt = yn;
                break;
              case "formEncType":
                Zt = yn;
                break;
              case "formMethod":
                Jt = yn;
                break;
              case "formTarget":
                Qt = yn;
                break;
              default:
                x(
                  n,
                  cl,
                  yn
                );
            }
        }
      var Vt = Or(
        n,
        t,
        r,
        Xt,
        Zt,
        Jt,
        Qt,
        Yt
      );
      if (n.push(I), Vt?.forEach(qe, n), q(n, Gt, ul), typeof ul == "string") {
        n.push(
          v(E(ul))
        );
        var Kt = null;
      } else Kt = ul;
      return Kt;
    case "form":
      n.push(L("form"));
      var fl = null, mt = null, Ln = null, ol = null, hl = null, dl = null, sl;
      for (sl in e)
        if (k.call(e, sl)) {
          var Rn = e[sl];
          if (Rn != null)
            switch (sl) {
              case "children":
                fl = Rn;
                break;
              case "dangerouslySetInnerHTML":
                mt = Rn;
                break;
              case "action":
                Ln = Rn;
                break;
              case "encType":
                ol = Rn;
                break;
              case "method":
                hl = Rn;
                break;
              case "target":
                dl = Rn;
                break;
              default:
                x(
                  n,
                  sl,
                  Rn
                );
            }
        }
      var Ne = null, ze = null;
      if (typeof Ln == "function") {
        var Bn = Si(
          t,
          Ln
        );
        Bn !== null ? (Ln = Bn.action || "", ol = Bn.encType, hl = Bn.method, dl = Bn.target, Ne = Bn.data, ze = Bn.name) : (n.push(
          Z,
          v("action"),
          en,
          Ci,
          O
        ), dl = hl = ol = Ln = null, Fi(t, r));
      }
      if (Ln != null && x(n, "action", Ln), ol != null && x(n, "encType", ol), hl != null && x(n, "method", hl), dl != null && x(n, "target", dl), n.push(I), ze !== null && (n.push(Ri), W(n, "name", ze), n.push(Ml), Ne?.forEach(qe, n)), q(n, mt, fl), typeof fl == "string") {
        n.push(
          v(E(fl))
        );
        var qt = null;
      } else qt = fl;
      return qt;
    case "menuitem":
      n.push(L("menuitem"));
      for (var Zl in e)
        if (k.call(e, Zl)) {
          var pt = e[Zl];
          if (pt != null)
            switch (Zl) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(y(400));
              default:
                x(
                  n,
                  Zl,
                  pt
                );
            }
        }
      return n.push(I), null;
    case "object":
      n.push(L("object"));
      var gl = null, jt = null, vl;
      for (vl in e)
        if (k.call(e, vl)) {
          var bl = e[vl];
          if (bl != null)
            switch (vl) {
              case "children":
                gl = bl;
                break;
              case "dangerouslySetInnerHTML":
                jt = bl;
                break;
              case "data":
                var $t = Al("" + bl);
                if ($t === "") break;
                n.push(
                  Z,
                  v("data"),
                  en,
                  v(E($t)),
                  O
                );
                break;
              default:
                x(
                  n,
                  vl,
                  bl
                );
            }
        }
      if (n.push(I), q(n, jt, gl), typeof gl == "string") {
        n.push(
          v(E(gl))
        );
        var nr = null;
      } else nr = gl;
      return nr;
    case "title":
      var Vi = c.tagScope & 1, Ki = c.tagScope & 4;
      if (c.insertionMode === 4 || Vi || e.itemProp != null)
        var De = Nr(
          n,
          e
        );
      else
        Ki ? De = null : (Nr(r.hoistableChunks, e), De = void 0);
      return De;
    case "link":
      var mi = c.tagScope & 1, qi = c.tagScope & 4, pi = e.rel, xn = e.href, Jl = e.precedence;
      if (c.insertionMode === 4 || mi || e.itemProp != null || typeof pi != "string" || typeof xn != "string" || xn === "") {
        U(n, e);
        var yl = null;
      } else if (e.rel === "stylesheet")
        if (typeof Jl != "string" || e.disabled != null || e.onLoad || e.onError)
          yl = U(
            n,
            e
          );
        else {
          var Zn = r.styles.get(Jl), Ql = t.styleResources.hasOwnProperty(xn) ? t.styleResources[xn] : void 0;
          if (Ql !== null) {
            t.styleResources[xn] = null, Zn || (Zn = {
              precedence: v(E(Jl)),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, r.styles.set(Jl, Zn));
            var Vl = {
              state: 0,
              props: K({}, e, {
                "data-precedence": e.precedence,
                precedence: null
              })
            };
            if (Ql) {
              Ql.length === 2 && Il(Vl.props, Ql);
              var He = r.preloads.stylesheets.get(xn);
              He && 0 < He.length ? He.length = 0 : Vl.state = 1;
            }
            Zn.sheets.set(xn, Vl), a && a.stylesheets.add(Vl);
          } else if (Zn) {
            var lr = Zn.sheets.get(xn);
            lr && a && a.stylesheets.add(lr);
          }
          u && n.push(dn), yl = null;
        }
      else
        e.onLoad || e.onError ? yl = U(
          n,
          e
        ) : (u && n.push(dn), yl = qi ? null : U(r.hoistableChunks, e));
      return yl;
    case "script":
      var ji = c.tagScope & 1, We = e.async;
      if (typeof e.src != "string" || !e.src || !We || typeof We == "function" || typeof We == "symbol" || e.onLoad || e.onError || c.insertionMode === 4 || ji || e.itemProp != null)
        var er = se(
          n,
          e
        );
      else {
        var Kl = e.src;
        if (e.type === "module")
          var ml = t.moduleScriptResources, tr = r.preloads.moduleScripts;
        else
          ml = t.scriptResources, tr = r.preloads.scripts;
        var ql = ml.hasOwnProperty(Kl) ? ml[Kl] : void 0;
        if (ql !== null) {
          ml[Kl] = null;
          var Ue = e;
          if (ql) {
            ql.length === 2 && (Ue = K({}, e), Il(Ue, ql));
            var rr = tr.get(Kl);
            rr && (rr.length = 0);
          }
          var ir = [];
          r.scripts.add(ir), se(ir, Ue);
        }
        u && n.push(dn), er = null;
      }
      return er;
    case "style":
      var $i = c.tagScope & 1, pl = e.precedence, Jn = e.href, na = e.nonce;
      if (c.insertionMode === 4 || $i || e.itemProp != null || typeof pl != "string" || typeof Jn != "string" || Jn === "") {
        n.push(L("style"));
        var Qn = null, ar = null, Tl;
        for (Tl in e)
          if (k.call(e, Tl)) {
            var jl = e[Tl];
            if (jl != null)
              switch (Tl) {
                case "children":
                  Qn = jl;
                  break;
                case "dangerouslySetInnerHTML":
                  ar = jl;
                  break;
                default:
                  x(
                    n,
                    Tl,
                    jl
                  );
              }
          }
        n.push(I);
        var El = Array.isArray(Qn) ? 2 > Qn.length ? Qn[0] : null : Qn;
        typeof El != "function" && typeof El != "symbol" && El !== null && El !== void 0 && n.push(
          v(("" + El).replace(Lr, Br))
        ), q(n, ar, Qn), n.push(Gn("style"));
        var ur = null;
      } else {
        var Nn = r.styles.get(pl);
        if ((t.styleResources.hasOwnProperty(Jn) ? t.styleResources[Jn] : void 0) !== null) {
          t.styleResources[Jn] = null, Nn || (Nn = {
            precedence: v(
              E(pl)
            ),
            rules: [],
            hrefs: [],
            sheets: /* @__PURE__ */ new Map()
          }, r.styles.set(pl, Nn));
          var cr = r.nonce.style;
          if (!cr || cr === na) {
            Nn.hrefs.push(
              v(E(Jn))
            );
            var fr = Nn.rules, Vn = null, or = null, $l;
            for ($l in e)
              if (k.call(e, $l)) {
                var Ge = e[$l];
                if (Ge != null)
                  switch ($l) {
                    case "children":
                      Vn = Ge;
                      break;
                    case "dangerouslySetInnerHTML":
                      or = Ge;
                  }
              }
            var wl = Array.isArray(Vn) ? 2 > Vn.length ? Vn[0] : null : Vn;
            typeof wl != "function" && typeof wl != "symbol" && wl !== null && wl !== void 0 && fr.push(
              v(
                ("" + wl).replace(Lr, Br)
              )
            ), q(fr, or, Vn);
          }
        }
        Nn && a && a.styles.add(Nn), u && n.push(dn), ur = void 0;
      }
      return ur;
    case "meta":
      var la = c.tagScope & 1, ea = c.tagScope & 4;
      if (c.insertionMode === 4 || la || e.itemProp != null)
        var hr = pn(
          n,
          e,
          "meta"
        );
      else
        u && n.push(dn), hr = ea ? null : typeof e.charSet == "string" ? pn(r.charsetChunks, e, "meta") : e.name === "viewport" ? pn(r.viewportChunks, e, "meta") : pn(r.hoistableChunks, e, "meta");
      return hr;
    case "listing":
    case "pre":
      n.push(L(l));
      var Cl = null, Rl = null, xl;
      for (xl in e)
        if (k.call(e, xl)) {
          var ne = e[xl];
          if (ne != null)
            switch (xl) {
              case "children":
                Cl = ne;
                break;
              case "dangerouslySetInnerHTML":
                Rl = ne;
                break;
              default:
                x(
                  n,
                  xl,
                  ne
                );
            }
        }
      if (n.push(I), Rl != null) {
        if (Cl != null) throw Error(y(60));
        if (typeof Rl != "object" || !("__html" in Rl))
          throw Error(y(61));
        var zn = Rl.__html;
        zn != null && (typeof zn == "string" && 0 < zn.length && zn[0] === `
` ? n.push($e, v(zn)) : n.push(v("" + zn)));
      }
      return typeof Cl == "string" && Cl[0] === `
` && n.push($e), Cl;
    case "img":
      var ta = c.tagScope & 3, H = e.src, N = e.srcSet;
      if (!(e.loading === "lazy" || !H && !N || typeof H != "string" && H != null || typeof N != "string" && N != null || e.fetchPriority === "low" || ta) && (typeof H != "string" || H[4] !== ":" || H[0] !== "d" && H[0] !== "D" || H[1] !== "a" && H[1] !== "A" || H[2] !== "t" && H[2] !== "T" || H[3] !== "a" && H[3] !== "A") && (typeof N != "string" || N[4] !== ":" || N[0] !== "d" && N[0] !== "D" || N[1] !== "a" && N[1] !== "A" || N[2] !== "t" && N[2] !== "T" || N[3] !== "a" && N[3] !== "A")) {
        a !== null && c.tagScope & 64 && (a.suspenseyImages = !0);
        var dr = typeof e.sizes == "string" ? e.sizes : void 0, Kn = N ? N + `
` + (dr || "") : H, Ye = r.preloads.images, Dn = Ye.get(Kn);
        if (Dn)
          (e.fetchPriority === "high" || 10 > r.highImagePreloads.size) && (Ye.delete(Kn), r.highImagePreloads.add(Dn));
        else if (!t.imageResources.hasOwnProperty(Kn)) {
          t.imageResources[Kn] = tn;
          var Xe = e.crossOrigin, sr = typeof Xe == "string" ? Xe === "use-credentials" ? Xe : "" : void 0, Hn = r.headers, Ze;
          Hn && 0 < Hn.remainingCapacity && typeof e.srcSet != "string" && (e.fetchPriority === "high" || 500 > Hn.highImagePreloads.length) && (Ze = ve(H, "image", {
            imageSrcSet: e.srcSet,
            imageSizes: e.sizes,
            crossOrigin: sr,
            integrity: e.integrity,
            nonce: e.nonce,
            type: e.type,
            fetchPriority: e.fetchPriority,
            referrerPolicy: e.refererPolicy
          }), 0 <= (Hn.remainingCapacity -= Ze.length + 2)) ? (r.resets.image[Kn] = tn, Hn.highImagePreloads && (Hn.highImagePreloads += ", "), Hn.highImagePreloads += Ze) : (Dn = [], U(Dn, {
            rel: "preload",
            as: "image",
            href: N ? void 0 : H,
            imageSrcSet: N,
            imageSizes: dr,
            crossOrigin: sr,
            integrity: e.integrity,
            type: e.type,
            fetchPriority: e.fetchPriority,
            referrerPolicy: e.referrerPolicy
          }), e.fetchPriority === "high" || 10 > r.highImagePreloads.size ? r.highImagePreloads.add(Dn) : (r.bulkPreloads.add(Dn), Ye.set(Kn, Dn)));
        }
      }
      return pn(n, e, "img");
    case "base":
    case "area":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "param":
    case "source":
    case "track":
    case "wbr":
      return pn(n, e, l);
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      break;
    case "head":
      if (2 > c.insertionMode) {
        var Je = i || r.preamble;
        if (Je.headChunks)
          throw Error(y(545, "`<head>`"));
        i !== null && n.push(La), Je.headChunks = [];
        var gr = je(
          Je.headChunks,
          e,
          "head"
        );
      } else
        gr = le(
          n,
          e,
          "head"
        );
      return gr;
    case "body":
      if (2 > c.insertionMode) {
        var Qe = i || r.preamble;
        if (Qe.bodyChunks)
          throw Error(y(545, "`<body>`"));
        i !== null && n.push(Ba), Qe.bodyChunks = [];
        var vr = je(
          Qe.bodyChunks,
          e,
          "body"
        );
      } else
        vr = le(
          n,
          e,
          "body"
        );
      return vr;
    case "html":
      if (c.insertionMode === 0) {
        var Ve = i || r.preamble;
        if (Ve.htmlChunks)
          throw Error(y(545, "`<html>`"));
        i !== null && n.push(Na), Ve.htmlChunks = [Da];
        var br = je(
          Ve.htmlChunks,
          e,
          "html"
        );
      } else
        br = le(
          n,
          e,
          "html"
        );
      return br;
    default:
      if (l.indexOf("-") !== -1) {
        n.push(L(l));
        var Ke = null, yr = null, mn;
        for (mn in e)
          if (k.call(e, mn)) {
            var on = e[mn];
            if (on != null) {
              var Tr = mn;
              switch (mn) {
                case "children":
                  Ke = on;
                  break;
                case "dangerouslySetInnerHTML":
                  yr = on;
                  break;
                case "style":
                  wi(n, on);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "ref":
                  break;
                case "className":
                  Tr = "class";
                default:
                  if (kt(mn) && typeof on != "function" && typeof on != "symbol" && on !== !1) {
                    if (on === !0) on = "";
                    else if (typeof on == "object") continue;
                    n.push(
                      Z,
                      v(Tr),
                      en,
                      v(E(on)),
                      O
                    );
                  }
              }
            }
          }
        return n.push(I), q(n, yr, Ke), Ke;
      }
  }
  return le(n, e, l);
}
var Dr = /* @__PURE__ */ new Map();
function Gn(n) {
  var l = Dr.get(n);
  return l === void 0 && (l = s("</" + n + ">"), Dr.set(n, l)), l;
}
function Hr(n, l) {
  n = n.preamble, n.htmlChunks === null && l.htmlChunks && (n.htmlChunks = l.htmlChunks), n.headChunks === null && l.headChunks && (n.headChunks = l.headChunks), n.bodyChunks === null && l.bodyChunks && (n.bodyChunks = l.bodyChunks);
}
function Pi(n, l) {
  l = l.bootstrapChunks;
  for (var e = 0; e < l.length - 1; e++)
    d(n, l[e]);
  return e < l.length ? (e = l[e], l.length = 0, S(n, e)) : !0;
}
var Wa = s(
  "requestAnimationFrame(function(){$RT=performance.now()});"
), Ua = s('<template id="'), Ga = s('"></template>'), Ya = s("<!--&-->"), Xa = s("<!--/&-->"), Za = s("<!--$-->"), Ja = s(
  '<!--$?--><template id="'
), Qa = s('"></template>'), Va = s("<!--$!-->"), Ka = s("<!--/$-->"), ma = s("<template"), qa = s('"'), pa = s(' data-dgst="');
s(' data-msg="');
s(' data-stck="');
s(' data-cstck="');
var ja = s("></template>");
function Wr(n, l, e) {
  if (d(n, Ja), e === null) throw Error(y(395));
  return d(n, l.boundaryPrefix), d(n, v(e.toString(16))), S(n, Qa);
}
var $a = s('<div hidden id="'), nu = s('">'), lu = s("</div>"), eu = s(
  '<svg aria-hidden="true" style="display:none" id="'
), tu = s('">'), ru = s("</svg>"), iu = s(
  '<math aria-hidden="true" style="display:none" id="'
), au = s('">'), uu = s("</math>"), cu = s('<table hidden id="'), fu = s('">'), ou = s("</table>"), hu = s('<table hidden><tbody id="'), du = s('">'), su = s("</tbody></table>"), gu = s('<table hidden><tr id="'), vu = s('">'), bu = s("</tr></table>"), yu = s(
  '<table hidden><colgroup id="'
), Tu = s('">'), Eu = s("</colgroup></table>");
function wu(n, l, e, t) {
  switch (e.insertionMode) {
    case 0:
    case 1:
    case 3:
    case 2:
      return d(n, $a), d(n, l.segmentPrefix), d(n, v(t.toString(16))), S(n, nu);
    case 4:
      return d(n, eu), d(n, l.segmentPrefix), d(n, v(t.toString(16))), S(n, tu);
    case 5:
      return d(n, iu), d(n, l.segmentPrefix), d(n, v(t.toString(16))), S(n, au);
    case 6:
      return d(n, cu), d(n, l.segmentPrefix), d(n, v(t.toString(16))), S(n, fu);
    case 7:
      return d(n, hu), d(n, l.segmentPrefix), d(n, v(t.toString(16))), S(n, du);
    case 8:
      return d(n, gu), d(n, l.segmentPrefix), d(n, v(t.toString(16))), S(n, vu);
    case 9:
      return d(n, yu), d(n, l.segmentPrefix), d(n, v(t.toString(16))), S(n, Tu);
    default:
      throw Error(y(397));
  }
}
function Cu(n, l) {
  switch (l.insertionMode) {
    case 0:
    case 1:
    case 3:
    case 2:
      return S(n, lu);
    case 4:
      return S(n, ru);
    case 5:
      return S(n, uu);
    case 6:
      return S(n, ou);
    case 7:
      return S(n, su);
    case 8:
      return S(n, bu);
    case 9:
      return S(n, Eu);
    default:
      throw Error(y(397));
  }
}
var Ru = s(
  '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
), xu = s('$RS("'), Su = s('","'), Fu = s('")<\/script>');
s('<template data-rsi="" data-sid="');
s('" data-pid="');
var Ur = s(
  `$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`
);
v(
  `$RV=function(A,g){function k(a,b){var e=a.getAttribute(b);e&&(b=a.style,l.push(a,b.viewTransitionName,b.viewTransitionClass),"auto"!==e&&(b.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+K++ +"_"),b.viewTransitionName=a,B=!0)}var B=!1,K=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var h=g[f].querySelectorAll("[vt-share]"),d=0;d<h.length;d++){var c=h[d];m.set(c.getAttribute("vt-name"),c)}var u=[];for(h=0;h<g.length;h+=2){var C=g[h],x=C.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){c=C;for(f=0;c;){if(8===c.nodeType){var r=c.data;if("/$"===r)if(0===f)break;else f--;else"$"!==r&&"$?"!==r&&"$~"!==r&&"$!"!==r||f++}else if(1===c.nodeType){d=c;var D=d.getAttribute("vt-name"),y=m.get(D);k(d,y?"vt-share":"vt-exit");y&&(k(y,"vt-share"),m.set(D,null));var E=d.querySelectorAll("[vt-share]");for(d=0;d<E.length;d++){var F=E[d],G=F.getAttribute("vt-name"),
H=m.get(G);H&&(k(F,"vt-share"),k(H,"vt-share"),m.set(G,null))}}c=c.nextSibling}for(var I=g[h+1],t=I.firstElementChild;t;)null!==m.get(t.getAttribute("vt-name"))&&k(t,"vt-enter"),t=t.nextElementSibling;c=x;do for(var n=c.firstElementChild;n;){var J=n.getAttribute("vt-update");J&&"none"!==J&&!l.includes(n)&&k(n,"vt-update");n=n.nextElementSibling}while((c=c.parentNode)&&1===c.nodeType&&"none"!==c.getAttribute("vt-update"));u.push.apply(u,I.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(B){var z=
document.__reactViewTransition=document.startViewTransition({update:function(){A(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],b={},e=0;e<u.length;b={g:b.g},e++)if(b.g=u[e],!b.g.complete){var p=b.g.getBoundingClientRect();0<p.bottom&&0<p.right&&p.top<window.innerHeight&&p.left<window.innerWidth&&(p=new Promise(function(w){return function(q){w.g.addEventListener("load",q);w.g.addEventListener("error",q)}}(b)),a.push(p))}return Promise.race([Promise.all(a),new Promise(function(w){var q=
performance.now();setTimeout(w,2300>q&&2E3<q?2300-q:500)})])},types:[]});z.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var b=l[a],e=b.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===b.getAttribute("style")&&b.removeAttribute("style")}});z.finished.finally(function(){document.__reactViewTransition===z&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}A(g)}.bind(null,$RV);`
);
var Pu = s('$RC("'), Au = s(
  `$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`
), ku = s('$RR("'), Mu = s('","'), Iu = s('",'), Ou = s('"'), _u = s(")<\/script>");
s('<template data-rci="" data-bid="');
s('<template data-rri="" data-bid="');
s('" data-sid="');
s('" data-sty="');
var Lu = s(
  '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'
), Bu = s(
  '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
), Nu = s('$RX("'), zu = s('"'), Du = s(","), Hu = s(")<\/script>");
s('<template data-rxi="" data-bid="');
s('" data-dgst="');
s('" data-msg="');
s('" data-stck="');
s('" data-cstck="');
var Wu = /[<\u2028\u2029]/g;
function Uu(n) {
  return JSON.stringify(n).replace(
    Wu,
    function(l) {
      switch (l) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
  );
}
var Gu = /[&><\u2028\u2029]/g;
function Pl(n) {
  return JSON.stringify(n).replace(
    Gu,
    function(l) {
      switch (l) {
        case "&":
          return "\\u0026";
        case ">":
          return "\\u003e";
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
  );
}
var Yu = s(
  ' media="not all" data-precedence="'
), Xu = s('" data-href="'), Zu = s('">'), Ju = s("</style>"), ge = !1, ot = !0;
function Qu(n) {
  var l = n.rules, e = n.hrefs, t = 0;
  if (e.length) {
    for (d(this, el.startInlineStyle), d(this, Yu), d(this, n.precedence), d(this, Xu); t < e.length - 1; t++)
      d(this, e[t]), d(this, ki);
    for (d(this, e[t]), d(this, Zu), t = 0; t < l.length; t++) d(this, l[t]);
    ot = S(
      this,
      Ju
    ), ge = !0, l.length = 0, e.length = 0;
  }
}
function Vu(n) {
  return n.state !== 2 ? ge = !0 : !1;
}
function Ai(n, l, e) {
  return ge = !1, ot = !0, el = e, l.styles.forEach(Qu, n), el = null, l.stylesheets.forEach(Vu), ge && (e.stylesToHoist = !0), ot;
}
function hn(n) {
  for (var l = 0; l < n.length; l++) d(this, n[l]);
  n.length = 0;
}
var Fn = [];
function Ku(n) {
  U(Fn, n.props);
  for (var l = 0; l < Fn.length; l++)
    d(this, Fn[l]);
  Fn.length = 0, n.state = 2;
}
var mu = s(' data-precedence="'), qu = s('" data-href="'), ki = s(" "), pu = s('">'), ju = s("</style>");
function $u(n) {
  var l = 0 < n.sheets.size;
  n.sheets.forEach(Ku, this), n.sheets.clear();
  var e = n.rules, t = n.hrefs;
  if (!l || t.length) {
    if (d(this, el.startInlineStyle), d(this, mu), d(this, n.precedence), n = 0, t.length) {
      for (d(this, qu); n < t.length - 1; n++)
        d(this, t[n]), d(this, ki);
      d(this, t[n]);
    }
    for (d(this, pu), n = 0; n < e.length; n++)
      d(this, e[n]);
    d(this, ju), e.length = 0, t.length = 0;
  }
}
function nc(n) {
  if (n.state === 0) {
    n.state = 1;
    var l = n.props;
    for (U(Fn, {
      rel: "preload",
      as: "style",
      href: n.props.href,
      crossOrigin: l.crossOrigin,
      fetchPriority: l.fetchPriority,
      integrity: l.integrity,
      media: l.media,
      hrefLang: l.hrefLang,
      referrerPolicy: l.referrerPolicy
    }), n = 0; n < Fn.length; n++)
      d(this, Fn[n]);
    Fn.length = 0;
  }
}
function lc(n) {
  n.sheets.forEach(nc, this), n.sheets.clear();
}
s('<link rel="expect" href="#');
s('" blocking="render"/>');
var Mi = s(' id="');
function ie(n, l) {
  (l.instructions & 32) === 0 && (l.instructions |= 32, n.push(
    Mi,
    v(E("_" + l.idPrefix + "R_")),
    O
  ));
}
var Gr = s("["), Yr = s(",["), ht = s(","), nt = s("]");
function ec(n, l) {
  d(n, Gr);
  var e = Gr;
  l.stylesheets.forEach(function(t) {
    if (t.state !== 2)
      if (t.state === 3)
        d(n, e), d(
          n,
          v(
            Pl("" + t.props.href)
          )
        ), d(n, nt), e = Yr;
      else {
        d(n, e);
        var r = t.props["data-precedence"], i = t.props, a = Al("" + t.props.href);
        d(
          n,
          v(Pl(a))
        ), r = "" + r, d(n, ht), d(
          n,
          v(Pl(r))
        );
        for (var c in i)
          if (k.call(i, c) && (r = i[c], r != null))
            switch (c) {
              case "href":
              case "rel":
              case "precedence":
              case "data-precedence":
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(y(399, "link"));
              default:
                tc(
                  n,
                  c,
                  r
                );
            }
        d(n, nt), e = Yr, t.state = 3;
      }
  }), d(n, nt);
}
function tc(n, l, e) {
  var t = l.toLowerCase();
  switch (typeof e) {
    case "function":
    case "symbol":
      return;
  }
  switch (l) {
    case "innerHTML":
    case "dangerouslySetInnerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "style":
    case "ref":
      return;
    case "className":
      t = "class", l = "" + e;
      break;
    case "hidden":
      if (e === !1) return;
      l = "";
      break;
    case "src":
    case "href":
      e = Al(e), l = "" + e;
      break;
    default:
      if (2 < l.length && (l[0] === "o" || l[0] === "O") && (l[1] === "n" || l[1] === "N") || !kt(l))
        return;
      l = "" + e;
  }
  d(n, ht), d(
    n,
    v(Pl(t))
  ), d(n, ht), d(
    n,
    v(Pl(l))
  );
}
function dt() {
  return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set(), suspenseyImages: !1 };
}
function rc(n) {
  var l = D || null;
  if (l) {
    var e = l.resumableState, t = l.renderState;
    if (typeof n == "string" && n) {
      if (!e.dnsResources.hasOwnProperty(n)) {
        e.dnsResources[n] = null, e = t.headers;
        var r, i;
        (i = e && 0 < e.remainingCapacity) && (i = (r = "<" + ("" + n).replace(
          Mt,
          It
        ) + ">; rel=dns-prefetch", 0 <= (e.remainingCapacity -= r.length + 2))), i ? (t.resets.dns[n] = null, e.preconnects && (e.preconnects += ", "), e.preconnects += r) : (r = [], U(r, { href: n, rel: "dns-prefetch" }), t.preconnects.add(r));
      }
      Xn(l);
    }
  } else En.D(n);
}
function ic(n, l) {
  var e = D || null;
  if (e) {
    var t = e.resumableState, r = e.renderState;
    if (typeof n == "string" && n) {
      var i = l === "use-credentials" ? "credentials" : typeof l == "string" ? "anonymous" : "default";
      if (!t.connectResources[i].hasOwnProperty(n)) {
        t.connectResources[i][n] = null, t = r.headers;
        var a, c;
        if (c = t && 0 < t.remainingCapacity) {
          if (c = "<" + ("" + n).replace(
            Mt,
            It
          ) + ">; rel=preconnect", typeof l == "string") {
            var u = ("" + l).replace(
              st,
              gt
            );
            c += '; crossorigin="' + u + '"';
          }
          c = (a = c, 0 <= (t.remainingCapacity -= a.length + 2));
        }
        c ? (r.resets.connect[i][n] = null, t.preconnects && (t.preconnects += ", "), t.preconnects += a) : (i = [], U(i, {
          rel: "preconnect",
          href: n,
          crossOrigin: l
        }), r.preconnects.add(i));
      }
      Xn(e);
    }
  } else En.C(n, l);
}
function ac(n, l, e) {
  var t = D || null;
  if (t) {
    var r = t.resumableState, i = t.renderState;
    if (l && n) {
      switch (l) {
        case "image":
          if (e)
            var a = e.imageSrcSet, c = e.imageSizes, u = e.fetchPriority;
          var f = a ? a + `
` + (c || "") : n;
          if (r.imageResources.hasOwnProperty(f)) return;
          r.imageResources[f] = tn, r = i.headers;
          var o;
          r && 0 < r.remainingCapacity && typeof a != "string" && u === "high" && (o = ve(n, l, e), 0 <= (r.remainingCapacity -= o.length + 2)) ? (i.resets.image[f] = tn, r.highImagePreloads && (r.highImagePreloads += ", "), r.highImagePreloads += o) : (r = [], U(
            r,
            K(
              { rel: "preload", href: a ? void 0 : n, as: l },
              e
            )
          ), u === "high" ? i.highImagePreloads.add(r) : (i.bulkPreloads.add(r), i.preloads.images.set(f, r)));
          break;
        case "style":
          if (r.styleResources.hasOwnProperty(n)) return;
          a = [], U(
            a,
            K({ rel: "preload", href: n, as: l }, e)
          ), r.styleResources[n] = !e || typeof e.crossOrigin != "string" && typeof e.integrity != "string" ? tn : [e.crossOrigin, e.integrity], i.preloads.stylesheets.set(n, a), i.bulkPreloads.add(a);
          break;
        case "script":
          if (r.scriptResources.hasOwnProperty(n)) return;
          a = [], i.preloads.scripts.set(n, a), i.bulkPreloads.add(a), U(
            a,
            K({ rel: "preload", href: n, as: l }, e)
          ), r.scriptResources[n] = !e || typeof e.crossOrigin != "string" && typeof e.integrity != "string" ? tn : [e.crossOrigin, e.integrity];
          break;
        default:
          if (r.unknownResources.hasOwnProperty(l)) {
            if (a = r.unknownResources[l], a.hasOwnProperty(n))
              return;
          } else
            a = {}, r.unknownResources[l] = a;
          a[n] = tn, (r = i.headers) && 0 < r.remainingCapacity && l === "font" && (f = ve(n, l, e), 0 <= (r.remainingCapacity -= f.length + 2)) ? (i.resets.font[n] = tn, r.fontPreloads && (r.fontPreloads += ", "), r.fontPreloads += f) : (r = [], n = K({ rel: "preload", href: n, as: l }, e), U(r, n), l) === "font" ? i.fontPreloads.add(r) : i.bulkPreloads.add(r);
      }
      Xn(t);
    }
  } else En.L(n, l, e);
}
function uc(n, l) {
  var e = D || null;
  if (e) {
    var t = e.resumableState, r = e.renderState;
    if (n) {
      var i = l && typeof l.as == "string" ? l.as : "script";
      switch (i) {
        case "script":
          if (t.moduleScriptResources.hasOwnProperty(n)) return;
          i = [], t.moduleScriptResources[n] = !l || typeof l.crossOrigin != "string" && typeof l.integrity != "string" ? tn : [l.crossOrigin, l.integrity], r.preloads.moduleScripts.set(n, i);
          break;
        default:
          if (t.moduleUnknownResources.hasOwnProperty(i)) {
            var a = t.unknownResources[i];
            if (a.hasOwnProperty(n)) return;
          } else
            a = {}, t.moduleUnknownResources[i] = a;
          i = [], a[n] = tn;
      }
      U(i, K({ rel: "modulepreload", href: n }, l)), r.bulkPreloads.add(i), Xn(e);
    }
  } else En.m(n, l);
}
function cc(n, l, e) {
  var t = D || null;
  if (t) {
    var r = t.resumableState, i = t.renderState;
    if (n) {
      l = l || "default";
      var a = i.styles.get(l), c = r.styleResources.hasOwnProperty(n) ? r.styleResources[n] : void 0;
      c !== null && (r.styleResources[n] = null, a || (a = {
        precedence: v(E(l)),
        rules: [],
        hrefs: [],
        sheets: /* @__PURE__ */ new Map()
      }, i.styles.set(l, a)), l = {
        state: 0,
        props: K(
          { rel: "stylesheet", href: n, "data-precedence": l },
          e
        )
      }, c && (c.length === 2 && Il(l.props, c), (i = i.preloads.stylesheets.get(n)) && 0 < i.length ? i.length = 0 : l.state = 1), a.sheets.set(n, l), Xn(t));
    }
  } else En.S(n, l, e);
}
function fc(n, l) {
  var e = D || null;
  if (e) {
    var t = e.resumableState, r = e.renderState;
    if (n) {
      var i = t.scriptResources.hasOwnProperty(n) ? t.scriptResources[n] : void 0;
      i !== null && (t.scriptResources[n] = null, l = K({ src: n, async: !0 }, l), i && (i.length === 2 && Il(l, i), n = r.preloads.scripts.get(n)) && (n.length = 0), n = [], r.scripts.add(n), se(n, l), Xn(e));
    }
  } else En.X(n, l);
}
function oc(n, l) {
  var e = D || null;
  if (e) {
    var t = e.resumableState, r = e.renderState;
    if (n) {
      var i = t.moduleScriptResources.hasOwnProperty(
        n
      ) ? t.moduleScriptResources[n] : void 0;
      i !== null && (t.moduleScriptResources[n] = null, l = K({ src: n, type: "module", async: !0 }, l), i && (i.length === 2 && Il(l, i), n = r.preloads.moduleScripts.get(n)) && (n.length = 0), n = [], r.scripts.add(n), se(n, l), Xn(e));
    }
  } else En.M(n, l);
}
function Il(n, l) {
  n.crossOrigin == null && (n.crossOrigin = l[0]), n.integrity == null && (n.integrity = l[1]);
}
function ve(n, l, e) {
  n = ("" + n).replace(
    Mt,
    It
  ), l = ("" + l).replace(
    st,
    gt
  ), l = "<" + n + '>; rel=preload; as="' + l + '"';
  for (var t in e)
    k.call(e, t) && (n = e[t], typeof n == "string" && (l += "; " + t.toLowerCase() + '="' + ("" + n).replace(
      st,
      gt
    ) + '"'));
  return l;
}
var Mt = /[<>\r\n]/g;
function It(n) {
  switch (n) {
    case "<":
      return "%3C";
    case ">":
      return "%3E";
    case `
`:
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error(
        "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
      );
  }
}
var st = /["';,\r\n]/g;
function gt(n) {
  switch (n) {
    case '"':
      return "%22";
    case "'":
      return "%27";
    case ";":
      return "%3B";
    case ",":
      return "%2C";
    case `
`:
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error(
        "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
      );
  }
}
function hc(n) {
  this.styles.add(n);
}
function dc(n) {
  this.stylesheets.add(n);
}
function tl(n, l) {
  l.styles.forEach(hc, n), l.stylesheets.forEach(dc, n), l.suspenseyImages && (n.suspenseyImages = !0);
}
function Ii(n) {
  return 0 < n.stylesheets.size || n.suspenseyImages;
}
var sc = Function.prototype.bind, gc = /* @__PURE__ */ Symbol.for("react.client.reference");
function be(n) {
  if (n == null) return null;
  if (typeof n == "function")
    return n.$$typeof === gc ? null : n.displayName || n.name || null;
  if (typeof n == "string") return n;
  switch (n) {
    case ii:
      return "Fragment";
    case ui:
      return "Profiler";
    case ai:
      return "StrictMode";
    case Se:
      return "Suspense";
    case Ft:
      return "SuspenseList";
    case fi:
      return "Activity";
  }
  if (typeof n == "object")
    switch (n.$$typeof) {
      case ri:
        return "Portal";
      case xe:
        return n.displayName || "Context";
      case ci:
        return (n._context.displayName || "Context") + ".Consumer";
      case St:
        var l = n.render;
        return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Pt:
        return l = n.displayName || null, l !== null ? l : be(n.type) || "Memo";
      case Fe:
        l = n._payload, n = n._init;
        try {
          return be(n(l));
        } catch {
        }
    }
  return null;
}
var Xr = {}, Wn = null;
function Ae(n, l) {
  if (n !== l) {
    n.context._currentValue = n.parentValue, n = n.parent;
    var e = l.parent;
    if (n === null) {
      if (e !== null) throw Error(y(401));
    } else {
      if (e === null) throw Error(y(401));
      Ae(n, e);
    }
    l.context._currentValue = l.value;
  }
}
function Oi(n) {
  n.context._currentValue = n.parentValue, n = n.parent, n !== null && Oi(n);
}
function _i(n) {
  var l = n.parent;
  l !== null && _i(l), n.context._currentValue = n.value;
}
function Li(n, l) {
  if (n.context._currentValue = n.parentValue, n = n.parent, n === null) throw Error(y(402));
  n.depth === l.depth ? Ae(n, l) : Li(n, l);
}
function Bi(n, l) {
  var e = l.parent;
  if (e === null) throw Error(y(402));
  n.depth === e.depth ? Ae(n, e) : Bi(n, e), l.context._currentValue = l.value;
}
function Sn(n) {
  var l = Wn;
  l !== n && (l === null ? _i(n) : n === null ? Oi(l) : l.depth === n.depth ? Ae(l, n) : l.depth > n.depth ? Li(l, n) : Bi(l, n), Wn = n);
}
var Zr = {
  enqueueSetState: function(n, l) {
    n = n._reactInternals, n.queue !== null && n.queue.push(l);
  },
  enqueueReplaceState: function(n, l) {
    n = n._reactInternals, n.replace = !0, n.queue = [l];
  },
  enqueueForceUpdate: function() {
  }
}, vt = { id: 1, overflow: "" };
function Un(n, l, e) {
  var t = n.id;
  n = n.overflow;
  var r = 32 - ae(t) - 1;
  t &= ~(1 << r), e += 1;
  var i = 32 - ae(l) + r;
  if (30 < i) {
    var a = r - r % 5;
    return i = (t & (1 << a) - 1).toString(32), t >>= a, r -= a, {
      id: 1 << 32 - ae(l) + r | e << r | t,
      overflow: i + n
    };
  }
  return {
    id: 1 << i | e << r | t,
    overflow: n
  };
}
var ae = Math.clz32 ? Math.clz32 : yc, vc = Math.log, bc = Math.LN2;
function yc(n) {
  return n >>>= 0, n === 0 ? 32 : 31 - (vc(n) / bc | 0) | 0;
}
function J() {
}
var $ = Error(y(460));
function Tc(n, l, e) {
  switch (e = n[e], e === void 0 ? n.push(l) : e !== l && (l.then(J, J), l = e), l.status) {
    case "fulfilled":
      return l.value;
    case "rejected":
      throw l.reason;
    default:
      switch (typeof l.status == "string" ? l.then(J, J) : (n = l, n.status = "pending", n.then(
        function(t) {
          if (l.status === "pending") {
            var r = l;
            r.status = "fulfilled", r.value = t;
          }
        },
        function(t) {
          if (l.status === "pending") {
            var r = l;
            r.status = "rejected", r.reason = t;
          }
        }
      )), l.status) {
        case "fulfilled":
          return l.value;
        case "rejected":
          throw l.reason;
      }
      throw ue = l, $;
  }
}
var ue = null;
function ye() {
  if (ue === null) throw Error(y(459));
  var n = ue;
  return ue = null, n;
}
function Ec(n, l) {
  return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
}
var wc = typeof Object.is == "function" ? Object.is : Ec, wn = null, Ot = null, _t = null, Lt = null, ce = null, P = null, Sl = !1, Te = !1, Ol = 0, _l = 0, Ll = -1, Ee = 0, nl = null, Pn = null, ke = 0;
function Tn() {
  if (wn === null)
    throw Error(y(321));
  return wn;
}
function Jr() {
  if (0 < ke) throw Error(y(312));
  return { memoizedState: null, queue: null, next: null };
}
function Bt() {
  return P === null ? ce === null ? (Sl = !1, ce = P = Jr()) : (Sl = !0, P = ce) : P.next === null ? (Sl = !1, P = P.next = Jr()) : (Sl = !0, P = P.next), P;
}
function $n() {
  var n = nl;
  return nl = null, n;
}
function Bl() {
  Lt = _t = Ot = wn = null, Te = !1, ce = null, ke = 0, P = Pn = null;
}
function Ni(n, l) {
  return typeof l == "function" ? l(n) : l;
}
function Qr(n, l, e) {
  if (wn = Tn(), P = Bt(), Sl) {
    var t = P.queue;
    if (l = t.dispatch, Pn !== null && (e = Pn.get(t), e !== void 0)) {
      Pn.delete(t), t = P.memoizedState;
      do
        t = n(t, e.action), e = e.next;
      while (e !== null);
      return P.memoizedState = t, [t, l];
    }
    return [P.memoizedState, l];
  }
  return n = n === Ni ? typeof l == "function" ? l() : l : e !== void 0 ? e(l) : l, P.memoizedState = n, n = P.queue = { last: null, dispatch: null }, n = n.dispatch = Cc.bind(
    null,
    wn,
    n
  ), [P.memoizedState, n];
}
function Vr(n, l) {
  if (wn = Tn(), P = Bt(), l = l === void 0 ? null : l, P !== null) {
    var e = P.memoizedState;
    if (e !== null && l !== null) {
      var t = e[1];
      n: if (t === null) t = !1;
      else {
        for (var r = 0; r < t.length && r < l.length; r++)
          if (!wc(l[r], t[r])) {
            t = !1;
            break n;
          }
        t = !0;
      }
      if (t) return e[0];
    }
  }
  return n = n(), P.memoizedState = [n, l], n;
}
function Cc(n, l, e) {
  if (25 <= ke) throw Error(y(301));
  if (n === wn)
    if (Te = !0, n = { action: e, next: null }, Pn === null && (Pn = /* @__PURE__ */ new Map()), e = Pn.get(l), e === void 0)
      Pn.set(l, n);
    else {
      for (l = e; l.next !== null; ) l = l.next;
      l.next = n;
    }
}
function Rc() {
  throw Error(y(440));
}
function xc() {
  throw Error(y(394));
}
function Sc() {
  throw Error(y(479));
}
function Kr(n, l, e) {
  Tn();
  var t = _l++, r = _t;
  if (typeof n.$$FORM_ACTION == "function") {
    var i = null, a = Lt;
    r = r.formState;
    var c = n.$$IS_SIGNATURE_EQUAL;
    if (r !== null && typeof c == "function") {
      var u = r[1];
      c.call(n, r[2], r[3]) && (i = e !== void 0 ? "p" + e : "k" + wr(
        JSON.stringify([a, null, t]),
        0
      ), u === i && (Ll = t, l = r[0]));
    }
    var f = n.bind(null, l);
    return n = function(h) {
      f(h);
    }, typeof f.$$FORM_ACTION == "function" && (n.$$FORM_ACTION = function(h) {
      h = f.$$FORM_ACTION(h), e !== void 0 && (e += "", h.action = e);
      var g = h.data;
      return g && (i === null && (i = e !== void 0 ? "p" + e : "k" + wr(
        JSON.stringify([
          a,
          null,
          t
        ]),
        0
      )), g.append("$ACTION_KEY", i)), h;
    }), [l, n, !1];
  }
  var o = n.bind(null, l);
  return [
    l,
    function(h) {
      o(h);
    },
    !1
  ];
}
function zi(n) {
  var l = Ee;
  return Ee += 1, nl === null && (nl = []), Tc(nl, n, l);
}
function Fc() {
  throw Error(y(393));
}
var mr = {
  readContext: function(n) {
    return n._currentValue;
  },
  use: function(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return zi(n);
      if (n.$$typeof === xe) return n._currentValue;
    }
    throw Error(y(438, String(n)));
  },
  useContext: function(n) {
    return Tn(), n._currentValue;
  },
  useMemo: Vr,
  useReducer: Qr,
  useRef: function(n) {
    wn = Tn(), P = Bt();
    var l = P.memoizedState;
    return l === null ? (n = { current: n }, P.memoizedState = n) : l;
  },
  useState: function(n) {
    return Qr(Ni, n);
  },
  useInsertionEffect: J,
  useLayoutEffect: J,
  useCallback: function(n, l) {
    return Vr(function() {
      return n;
    }, l);
  },
  useImperativeHandle: J,
  useEffect: J,
  useDebugValue: J,
  useDeferredValue: function(n, l) {
    return Tn(), l !== void 0 ? l : n;
  },
  useTransition: function() {
    return Tn(), [!1, xc];
  },
  useId: function() {
    var n = Ot.treeContext, l = n.overflow;
    n = n.id, n = (n & ~(1 << 32 - ae(n) - 1)).toString(32) + l;
    var e = fe;
    if (e === null) throw Error(y(404));
    return l = Ol++, n = "_" + e.idPrefix + "R_" + n, 0 < l && (n += "H" + l.toString(32)), n + "_";
  },
  useSyncExternalStore: function(n, l, e) {
    if (e === void 0)
      throw Error(y(407));
    return e();
  },
  useOptimistic: function(n) {
    return Tn(), [n, Sc];
  },
  useActionState: Kr,
  useFormState: Kr,
  useHostTransitionStatus: function() {
    return Tn(), Ca;
  },
  useMemoCache: function(n) {
    for (var l = Array(n), e = 0; e < n; e++)
      l[e] = fa;
    return l;
  },
  useCacheRefresh: function() {
    return Fc;
  },
  useEffectEvent: function() {
    return Rc;
  }
}, fe = null, Pc = {
  getCacheForType: function() {
    throw Error(y(248));
  },
  cacheSignal: function() {
    throw Error(y(248));
  }
}, lt, qr;
function jn(n) {
  if (lt === void 0)
    try {
      throw Error();
    } catch (e) {
      var l = e.stack.trim().match(/\n( *(at )?)/);
      lt = l && l[1] || "", qr = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
  return `
` + lt + n + qr;
}
var et = !1;
function ee(n, l) {
  if (!n || et) return "";
  et = !0;
  var e = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var t = {
      DetermineComponentFrameRoot: function() {
        try {
          if (l) {
            var h = function() {
              throw Error();
            };
            if (Object.defineProperty(h.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(h, []);
              } catch (b) {
                var g = b;
              }
              Reflect.construct(n, [], h);
            } else {
              try {
                h.call();
              } catch (b) {
                g = b;
              }
              n.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (b) {
              g = b;
            }
            (h = n()) && typeof h.catch == "function" && h.catch(function() {
            });
          }
        } catch (b) {
          if (b && g && typeof b.stack == "string")
            return [b.stack, g.stack];
        }
        return [null, null];
      }
    };
    t.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var r = Object.getOwnPropertyDescriptor(
      t.DetermineComponentFrameRoot,
      "name"
    );
    r && r.configurable && Object.defineProperty(
      t.DetermineComponentFrameRoot,
      "name",
      { value: "DetermineComponentFrameRoot" }
    );
    var i = t.DetermineComponentFrameRoot(), a = i[0], c = i[1];
    if (a && c) {
      var u = a.split(`
`), f = c.split(`
`);
      for (r = t = 0; t < u.length && !u[t].includes("DetermineComponentFrameRoot"); )
        t++;
      for (; r < f.length && !f[r].includes(
        "DetermineComponentFrameRoot"
      ); )
        r++;
      if (t === u.length || r === f.length)
        for (t = u.length - 1, r = f.length - 1; 1 <= t && 0 <= r && u[t] !== f[r]; )
          r--;
      for (; 1 <= t && 0 <= r; t--, r--)
        if (u[t] !== f[r]) {
          if (t !== 1 || r !== 1)
            do
              if (t--, r--, 0 > r || u[t] !== f[r]) {
                var o = `
` + u[t].replace(" at new ", " at ");
                return n.displayName && o.includes("<anonymous>") && (o = o.replace("<anonymous>", n.displayName)), o;
              }
            while (1 <= t && 0 <= r);
          break;
        }
    }
  } finally {
    et = !1, Error.prepareStackTrace = e;
  }
  return (e = n ? n.displayName || n.name : "") ? jn(e) : "";
}
function Di(n) {
  if (typeof n == "string") return jn(n);
  if (typeof n == "function")
    return n.prototype && n.prototype.isReactComponent ? ee(n, !0) : ee(n, !1);
  if (typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case St:
        return ee(n.render, !1);
      case Pt:
        return ee(n.type, !1);
      case Fe:
        var l = n, e = l._payload;
        l = l._init;
        try {
          n = l(e);
        } catch {
          return jn("Lazy");
        }
        return Di(n);
    }
    if (typeof n.name == "string") {
      n: {
        e = n.name, l = n.env;
        var t = n.debugLocation;
        if (t != null && (n = Error.prepareStackTrace, Error.prepareStackTrace = void 0, t = t.stack, Error.prepareStackTrace = n, t.startsWith(`Error: react-stack-top-frame
`) && (t = t.slice(29)), n = t.indexOf(`
`), n !== -1 && (t = t.slice(n + 1)), n = t.indexOf("react_stack_bottom_frame"), n !== -1 && (n = t.lastIndexOf(`
`, n)), n = n !== -1 ? t = t.slice(0, n) : "", t = n.lastIndexOf(`
`), n = t === -1 ? n : n.slice(t + 1), n.indexOf(e) !== -1)) {
          e = `
` + n;
          break n;
        }
        e = jn(
          e + (l ? " [" + l + "]" : "")
        );
      }
      return e;
    }
  }
  switch (n) {
    case Ft:
      return jn("SuspenseList");
    case Se:
      return jn("Suspense");
  }
  return "";
}
function rl(n, l) {
  return (500 < l.byteSize || Ii(l.contentState)) && l.contentPreamble === null;
}
function Ac(n) {
  if (typeof n == "object" && n !== null && typeof n.environmentName == "string") {
    var l = n.environmentName;
    n = [n].slice(0), typeof n[0] == "string" ? n.splice(
      0,
      1,
      "%c%s%c " + n[0],
      "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
      " " + l + " ",
      ""
    ) : n.splice(
      0,
      0,
      "%c%s%c",
      "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
      " " + l + " ",
      ""
    ), n.unshift(console), l = sc.apply(console.error, n), l();
  } else console.error(n);
  return null;
}
function Hi(n, l, e, t, r, i, a, c, u, f, o) {
  var h = /* @__PURE__ */ new Set();
  this.destination = null, this.flushScheduled = !1, this.resumableState = n, this.renderState = l, this.rootFormatContext = e, this.progressiveChunkSize = t === void 0 ? 12800 : t, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = h, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = r === void 0 ? Ac : r, this.onPostpone = f === void 0 ? J : f, this.onAllReady = i === void 0 ? J : i, this.onShellReady = a === void 0 ? J : a, this.onShellError = c === void 0 ? J : c, this.onFatalError = u === void 0 ? J : u, this.formState = o === void 0 ? null : o;
}
function Wi(n, l, e, t, r, i, a, c, u, f, o, h) {
  return l = new Hi(
    l,
    e,
    t,
    r,
    i,
    a,
    c,
    u,
    f,
    o,
    h
  ), e = An(
    l,
    0,
    null,
    t,
    !1,
    !1
  ), e.parentFlushed = !0, n = zl(
    l,
    null,
    n,
    -1,
    null,
    e,
    null,
    null,
    l.abortableTasks,
    null,
    t,
    null,
    vt,
    null,
    null
  ), Yn(n), l.pingedTasks.push(n), l;
}
function kc(n, l, e, t, r, i, a, c, u, f, o) {
  return n = Wi(
    n,
    l,
    e,
    t,
    r,
    i,
    a,
    c,
    u,
    f,
    o,
    void 0
  ), n.trackedPostpones = {
    workingMap: /* @__PURE__ */ new Map(),
    rootNodes: [],
    rootSlots: null
  }, n;
}
function Ui(n, l, e, t, r, i, a, c, u) {
  return e = new Hi(
    l.resumableState,
    e,
    l.rootFormatContext,
    l.progressiveChunkSize,
    t,
    r,
    i,
    a,
    c,
    u,
    null
  ), e.nextSegmentId = l.nextSegmentId, typeof l.replaySlots == "number" ? (t = An(
    e,
    0,
    null,
    l.rootFormatContext,
    !1,
    !1
  ), t.parentFlushed = !0, n = zl(
    e,
    null,
    n,
    -1,
    null,
    t,
    null,
    null,
    e.abortableTasks,
    null,
    l.rootFormatContext,
    null,
    vt,
    null,
    null
  ), Yn(n), e.pingedTasks.push(n), e) : (n = Nt(
    e,
    null,
    {
      nodes: l.replayNodes,
      slots: l.replaySlots,
      pendingTasks: 0
    },
    n,
    -1,
    null,
    null,
    e.abortableTasks,
    null,
    l.rootFormatContext,
    null,
    vt,
    null,
    null
  ), Yn(n), e.pingedTasks.push(n), e);
}
function Mc(n, l, e, t, r, i, a, c, u) {
  return n = Ui(
    n,
    l,
    e,
    t,
    r,
    i,
    a,
    c,
    u
  ), n.trackedPostpones = {
    workingMap: /* @__PURE__ */ new Map(),
    rootNodes: [],
    rootSlots: null
  }, n;
}
var D = null;
function Gi(n, l) {
  n.pingedTasks.push(l), n.pingedTasks.length === 1 && (n.flushScheduled = n.destination !== null, n.trackedPostpones !== null || n.status === 10 ? si(function() {
    return Rt(n);
  }) : At(function() {
    return Rt(n);
  }));
}
function Nl(n, l, e, t, r) {
  return e = {
    status: 0,
    rootSegmentID: -1,
    parentFlushed: !1,
    pendingTasks: 0,
    row: l,
    completedSegments: [],
    byteSize: 0,
    fallbackAbortableTasks: e,
    errorDigest: null,
    contentState: dt(),
    fallbackState: dt(),
    contentPreamble: t,
    fallbackPreamble: r,
    trackedContentKeyPath: null,
    trackedFallbackNode: null
  }, l !== null && (l.pendingTasks++, t = l.boundaries, t !== null && (n.allPendingTasks++, e.pendingTasks++, t.push(e)), n = l.inheritedHoistables, n !== null && tl(e.contentState, n)), e;
}
function zl(n, l, e, t, r, i, a, c, u, f, o, h, g, b, R) {
  n.allPendingTasks++, r === null ? n.pendingRootTasks++ : r.pendingTasks++, b !== null && b.pendingTasks++;
  var w = {
    replay: null,
    node: e,
    childIndex: t,
    ping: function() {
      return Gi(n, w);
    },
    blockedBoundary: r,
    blockedSegment: i,
    blockedPreamble: a,
    hoistableState: c,
    abortSet: u,
    keyPath: f,
    formatContext: o,
    context: h,
    treeContext: g,
    row: b,
    componentStack: R,
    thenableState: l
  };
  return u.add(w), w;
}
function Nt(n, l, e, t, r, i, a, c, u, f, o, h, g, b) {
  n.allPendingTasks++, i === null ? n.pendingRootTasks++ : i.pendingTasks++, g !== null && g.pendingTasks++, e.pendingTasks++;
  var R = {
    replay: e,
    node: t,
    childIndex: r,
    ping: function() {
      return Gi(n, R);
    },
    blockedBoundary: i,
    blockedSegment: null,
    blockedPreamble: null,
    hoistableState: a,
    abortSet: c,
    keyPath: u,
    formatContext: f,
    context: o,
    treeContext: h,
    row: g,
    componentStack: b,
    thenableState: l
  };
  return c.add(R), R;
}
function An(n, l, e, t, r, i) {
  return {
    status: 0,
    parentFlushed: !1,
    id: -1,
    index: l,
    chunks: [],
    children: [],
    preambleChildren: [],
    parentFormatContext: t,
    boundary: e,
    lastPushedText: r,
    textEmbedded: i
  };
}
function Yn(n) {
  var l = n.node;
  typeof l == "object" && l !== null && l.$$typeof === ti && (n.componentStack = { parent: n.componentStack, type: l.type });
}
function bt(n) {
  return n === null ? null : { parent: n.parent, type: "Suspense Fallback" };
}
function kn(n) {
  var l = {};
  return n && Object.defineProperty(l, "componentStack", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      try {
        var e = "", t = n;
        do
          e += Di(t.type), t = t.parent;
        while (t);
        var r = e;
      } catch (i) {
        r = `
Error generating stack: ` + i.message + `
` + i.stack;
      }
      return Object.defineProperty(l, "componentStack", {
        value: r
      }), r;
    }
  }), l;
}
function G(n, l, e) {
  if (n = n.onError, l = n(l, e), l == null || typeof l == "string") return l;
}
function Dl(n, l) {
  var e = n.onShellError, t = n.onFatalError;
  e(l), t(l), n.destination !== null ? (n.status = 14, vi(n.destination, l)) : (n.status = 13, n.fatalError = l);
}
function Y(n, l) {
  zt(n, l.next, l.hoistables);
}
function zt(n, l, e) {
  for (; l !== null; ) {
    e !== null && (tl(l.hoistables, e), l.inheritedHoistables = e);
    var t = l.boundaries;
    if (t !== null) {
      l.boundaries = null;
      for (var r = 0; r < t.length; r++) {
        var i = t[r];
        e !== null && tl(i.contentState, e), Mn(n, i, null, null);
      }
    }
    if (l.pendingTasks--, 0 < l.pendingTasks) break;
    e = l.hoistables, l = l.next;
  }
}
function yt(n, l) {
  var e = l.boundaries;
  if (e !== null && l.pendingTasks === e.length) {
    for (var t = !0, r = 0; r < e.length; r++) {
      var i = e[r];
      if (i.pendingTasks !== 1 || i.parentFlushed || rl(n, i)) {
        t = !1;
        break;
      }
    }
    t && zt(n, l, l.hoistables);
  }
}
function Fl(n) {
  var l = {
    pendingTasks: 1,
    boundaries: null,
    hoistables: dt(),
    inheritedHoistables: null,
    together: !1,
    next: null
  };
  return n !== null && 0 < n.pendingTasks && (l.pendingTasks++, l.boundaries = [], n.next = l), l;
}
function pr(n, l, e, t, r) {
  var i = l.keyPath, a = l.treeContext, c = l.row;
  l.keyPath = e, e = t.length;
  var u = null;
  if (l.replay !== null) {
    var f = l.replay.slots;
    if (f !== null && typeof f == "object")
      for (var o = 0; o < e; o++) {
        var h = r !== "backwards" && r !== "unstable_legacy-backwards" ? o : e - 1 - o, g = t[h];
        l.row = u = Fl(
          u
        ), l.treeContext = Un(a, e, h);
        var b = f[h];
        typeof b == "number" ? (Me(n, l, b, g, h), delete f[h]) : B(n, l, g, h), --u.pendingTasks === 0 && Y(n, u);
      }
    else
      for (f = 0; f < e; f++)
        o = r !== "backwards" && r !== "unstable_legacy-backwards" ? f : e - 1 - f, h = t[o], l.row = u = Fl(u), l.treeContext = Un(a, e, o), B(n, l, h, o), --u.pendingTasks === 0 && Y(n, u);
  } else if (r !== "backwards" && r !== "unstable_legacy-backwards")
    for (r = 0; r < e; r++)
      f = t[r], l.row = u = Fl(u), l.treeContext = Un(
        a,
        e,
        r
      ), B(n, l, f, r), --u.pendingTasks === 0 && Y(n, u);
  else {
    for (r = l.blockedSegment, f = r.children.length, o = r.chunks.length, h = e - 1; 0 <= h; h--) {
      g = t[h], l.row = u = Fl(
        u
      ), l.treeContext = Un(a, e, h), b = An(
        n,
        o,
        null,
        l.formatContext,
        h === 0 ? r.lastPushedText : !0,
        !0
      ), r.children.splice(f, 0, b), l.blockedSegment = b;
      try {
        B(n, l, g, h), b.lastPushedText && b.textEmbedded && b.chunks.push(dn), b.status = 1, ll(n, l.blockedBoundary, b), --u.pendingTasks === 0 && Y(n, u);
      } catch (R) {
        throw b.status = n.status === 12 ? 3 : 4, R;
      }
    }
    l.blockedSegment = r, r.lastPushedText = !1;
  }
  c !== null && u !== null && 0 < u.pendingTasks && (c.pendingTasks++, u.next = c), l.treeContext = a, l.row = c, l.keyPath = i;
}
function jr(n, l, e, t, r, i) {
  var a = l.thenableState;
  for (l.thenableState = null, wn = {}, Ot = l, _t = n, Lt = e, _l = Ol = 0, Ll = -1, Ee = 0, nl = a, n = t(r, i); Te; )
    Te = !1, _l = Ol = 0, Ll = -1, Ee = 0, ke += 1, P = null, n = t(r, i);
  return Bl(), n;
}
function $r(n, l, e, t, r, i, a) {
  var c = !1;
  if (i !== 0 && n.formState !== null) {
    var u = l.blockedSegment;
    if (u !== null) {
      c = !0, u = u.chunks;
      for (var f = 0; f < i; f++)
        f === a ? u.push(Oa) : u.push(_a);
    }
  }
  i = l.keyPath, l.keyPath = e, r ? (e = l.treeContext, l.treeContext = Un(e, 1, 0), B(n, l, t, -1), l.treeContext = e) : c ? B(n, l, t, -1) : rn(n, l, t, -1), l.keyPath = i;
}
function we(n, l, e, t, r, i) {
  if (typeof t == "function")
    if (t.prototype && t.prototype.isReactComponent) {
      var a = r;
      if ("ref" in r) {
        a = {};
        for (var c in r)
          c !== "ref" && (a[c] = r[c]);
      }
      var u = t.defaultProps;
      if (u) {
        a === r && (a = K({}, a, r));
        for (var f in u)
          a[f] === void 0 && (a[f] = u[f]);
      }
      r = a, a = Xr, u = t.contextType, typeof u == "object" && u !== null && (a = u._currentValue), a = new t(r, a);
      var o = a.state !== void 0 ? a.state : null;
      if (a.updater = Zr, a.props = r, a.state = o, u = { queue: [], replace: !1 }, a._reactInternals = u, i = t.contextType, a.context = typeof i == "object" && i !== null ? i._currentValue : Xr, i = t.getDerivedStateFromProps, typeof i == "function" && (i = i(r, o), o = i == null ? o : K({}, o, i), a.state = o), typeof t.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function"))
        if (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Zr.enqueueReplaceState(
          a,
          a.state,
          null
        ), u.queue !== null && 0 < u.queue.length)
          if (t = u.queue, i = u.replace, u.queue = null, u.replace = !1, i && t.length === 1)
            a.state = t[0];
          else {
            for (u = i ? t[0] : a.state, o = !0, i = i ? 1 : 0; i < t.length; i++)
              f = t[i], f = typeof f == "function" ? f.call(a, u, r, void 0) : f, f != null && (o ? (o = !1, u = K({}, u, f)) : K(u, f));
            a.state = u;
          }
        else u.queue = null;
      if (t = a.render(), n.status === 12) throw null;
      r = l.keyPath, l.keyPath = e, rn(n, l, t, -1), l.keyPath = r;
    } else {
      if (t = jr(n, l, e, t, r, void 0), n.status === 12) throw null;
      $r(
        n,
        l,
        e,
        t,
        Ol !== 0,
        _l,
        Ll
      );
    }
  else if (typeof t == "string")
    if (a = l.blockedSegment, a === null)
      a = r.children, u = l.formatContext, o = l.keyPath, l.formatContext = Ar(u, t, r), l.keyPath = e, B(n, l, a, -1), l.formatContext = u, l.keyPath = o;
    else {
      if (o = Ha(
        a.chunks,
        t,
        r,
        n.resumableState,
        n.renderState,
        l.blockedPreamble,
        l.hoistableState,
        l.formatContext,
        a.lastPushedText
      ), a.lastPushedText = !1, u = l.formatContext, i = l.keyPath, l.keyPath = e, (l.formatContext = Ar(u, t, r)).insertionMode === 3) {
        e = An(
          n,
          0,
          null,
          l.formatContext,
          !1,
          !1
        ), a.preambleChildren.push(e), l.blockedSegment = e;
        try {
          e.status = 6, B(n, l, o, -1), e.lastPushedText && e.textEmbedded && e.chunks.push(dn), e.status = 1, ll(n, l.blockedBoundary, e);
        } finally {
          l.blockedSegment = a;
        }
      } else B(n, l, o, -1);
      l.formatContext = u, l.keyPath = i;
      n: {
        switch (l = a.chunks, n = n.resumableState, t) {
          case "title":
          case "style":
          case "script":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break n;
          case "body":
            if (1 >= u.insertionMode) {
              n.hasBody = !0;
              break n;
            }
            break;
          case "html":
            if (u.insertionMode === 0) {
              n.hasHtml = !0;
              break n;
            }
            break;
          case "head":
            if (1 >= u.insertionMode) break n;
        }
        l.push(Gn(t));
      }
      a.lastPushedText = !1;
    }
  else {
    switch (t) {
      case ca:
      case ai:
      case ui:
      case ii:
        t = l.keyPath, l.keyPath = e, rn(n, l, r.children, -1), l.keyPath = t;
        return;
      case fi:
        t = l.blockedSegment, t === null ? r.mode !== "hidden" && (t = l.keyPath, l.keyPath = e, B(n, l, r.children, -1), l.keyPath = t) : r.mode !== "hidden" && (t.chunks.push(Ya), t.lastPushedText = !1, a = l.keyPath, l.keyPath = e, B(n, l, r.children, -1), l.keyPath = a, t.chunks.push(Xa), t.lastPushedText = !1);
        return;
      case Ft:
        n: {
          if (t = r.children, r = r.revealOrder, r === "forwards" || r === "backwards" || r === "unstable_legacy-backwards") {
            if (he(t)) {
              pr(n, l, e, t, r);
              break n;
            }
            if ((a = oi(t)) && (a = a.call(t))) {
              if (u = a.next(), !u.done) {
                do
                  u = a.next();
                while (!u.done);
                pr(n, l, e, t, r);
              }
              break n;
            }
          }
          r === "together" ? (r = l.keyPath, a = l.row, u = l.row = Fl(null), u.boundaries = [], u.together = !0, l.keyPath = e, rn(n, l, t, -1), --u.pendingTasks === 0 && Y(n, u), l.keyPath = r, l.row = a, a !== null && 0 < u.pendingTasks && (a.pendingTasks++, u.next = a)) : (r = l.keyPath, l.keyPath = e, rn(n, l, t, -1), l.keyPath = r);
        }
        return;
      case oa:
      case ua:
        throw Error(y(343));
      case Se:
        n: if (l.replay !== null) {
          t = l.keyPath, a = l.formatContext, u = l.row, l.keyPath = e, l.formatContext = re(
            n.resumableState,
            a
          ), l.row = null, e = r.children;
          try {
            B(n, l, e, -1);
          } finally {
            l.keyPath = t, l.formatContext = a, l.row = u;
          }
        } else {
          t = l.keyPath, i = l.formatContext;
          var h = l.row;
          f = l.blockedBoundary, c = l.blockedPreamble;
          var g = l.hoistableState, b = l.blockedSegment, R = r.fallback;
          r = r.children;
          var w = /* @__PURE__ */ new Set(), C = 2 > l.formatContext.insertionMode ? Nl(
            n,
            l.row,
            w,
            kl(),
            kl()
          ) : Nl(
            n,
            l.row,
            w,
            null,
            null
          );
          n.trackedPostpones !== null && (C.trackedContentKeyPath = e);
          var M = An(
            n,
            b.chunks.length,
            C,
            l.formatContext,
            !1,
            !1
          );
          b.children.push(M), b.lastPushedText = !1;
          var F = An(
            n,
            0,
            null,
            l.formatContext,
            !1,
            !1
          );
          if (F.parentFlushed = !0, n.trackedPostpones !== null) {
            a = l.componentStack, u = [e[0], "Suspense Fallback", e[2]], o = [u[1], u[2], [], null], n.trackedPostpones.workingMap.set(u, o), C.trackedFallbackNode = o, l.blockedSegment = M, l.blockedPreamble = C.fallbackPreamble, l.keyPath = u, l.formatContext = ut(
              n.resumableState,
              i
            ), l.componentStack = bt(a), M.status = 6;
            try {
              B(n, l, R, -1), M.lastPushedText && M.textEmbedded && M.chunks.push(dn), M.status = 1, ll(n, f, M);
            } catch (X) {
              throw M.status = n.status === 12 ? 3 : 4, X;
            } finally {
              l.blockedSegment = b, l.blockedPreamble = c, l.keyPath = t, l.formatContext = i;
            }
            l = zl(
              n,
              null,
              r,
              -1,
              C,
              F,
              C.contentPreamble,
              C.contentState,
              l.abortSet,
              e,
              re(
                n.resumableState,
                l.formatContext
              ),
              l.context,
              l.treeContext,
              null,
              a
            ), Yn(l), n.pingedTasks.push(l);
          } else {
            l.blockedBoundary = C, l.blockedPreamble = C.contentPreamble, l.hoistableState = C.contentState, l.blockedSegment = F, l.keyPath = e, l.formatContext = re(
              n.resumableState,
              i
            ), l.row = null, F.status = 6;
            try {
              if (B(n, l, r, -1), F.lastPushedText && F.textEmbedded && F.chunks.push(dn), F.status = 1, ll(n, C, F), Hl(C, F), C.pendingTasks === 0 && C.status === 0) {
                if (C.status = 1, !rl(n, C)) {
                  h !== null && --h.pendingTasks === 0 && Y(n, h), n.pendingRootTasks === 0 && l.blockedPreamble && Xl(n);
                  break n;
                }
              } else
                h !== null && h.together && yt(n, h);
            } catch (X) {
              C.status = 4, n.status === 12 ? (F.status = 3, a = n.fatalError) : (F.status = 4, a = X), u = kn(l.componentStack), o = G(
                n,
                a,
                u
              ), C.errorDigest = o, Dt(n, C);
            } finally {
              l.blockedBoundary = f, l.blockedPreamble = c, l.hoistableState = g, l.blockedSegment = b, l.keyPath = t, l.formatContext = i, l.row = h;
            }
            l = zl(
              n,
              null,
              R,
              -1,
              f,
              M,
              C.fallbackPreamble,
              C.fallbackState,
              w,
              [e[0], "Suspense Fallback", e[2]],
              ut(
                n.resumableState,
                l.formatContext
              ),
              l.context,
              l.treeContext,
              l.row,
              bt(
                l.componentStack
              )
            ), Yn(l), n.pingedTasks.push(l);
          }
        }
        return;
    }
    if (typeof t == "object" && t !== null)
      switch (t.$$typeof) {
        case St:
          if ("ref" in r)
            for (b in a = {}, r)
              b !== "ref" && (a[b] = r[b]);
          else a = r;
          t = jr(
            n,
            l,
            e,
            t.render,
            a,
            i
          ), $r(
            n,
            l,
            e,
            t,
            Ol !== 0,
            _l,
            Ll
          );
          return;
        case Pt:
          we(n, l, e, t.type, r, i);
          return;
        case xe:
          if (u = r.children, a = l.keyPath, r = r.value, o = t._currentValue, t._currentValue = r, i = Wn, Wn = t = {
            parent: i,
            depth: i === null ? 0 : i.depth + 1,
            context: t,
            parentValue: o,
            value: r
          }, l.context = t, l.keyPath = e, rn(n, l, u, -1), n = Wn, n === null) throw Error(y(403));
          n.context._currentValue = n.parentValue, n = Wn = n.parent, l.context = n, l.keyPath = a;
          return;
        case ci:
          r = r.children, t = r(t._context._currentValue), r = l.keyPath, l.keyPath = e, rn(n, l, t, -1), l.keyPath = r;
          return;
        case Fe:
          if (a = t._init, t = a(t._payload), n.status === 12) throw null;
          we(n, l, e, t, r, i);
          return;
      }
    throw Error(
      y(130, t == null ? t : typeof t, "")
    );
  }
}
function Me(n, l, e, t, r) {
  var i = l.replay, a = l.blockedBoundary, c = An(
    n,
    0,
    null,
    l.formatContext,
    !1,
    !1
  );
  c.id = e, c.parentFlushed = !0;
  try {
    l.replay = null, l.blockedSegment = c, B(n, l, t, r), c.status = 1, ll(n, a, c), a === null ? n.completedRootSegment = c : (Hl(a, c), a.parentFlushed && n.partialBoundaries.push(a));
  } finally {
    l.replay = i, l.blockedSegment = null;
  }
}
function rn(n, l, e, t) {
  l.replay !== null && typeof l.replay.slots == "number" ? Me(n, l, l.replay.slots, e, t) : (l.node = e, l.childIndex = t, e = l.componentStack, Yn(l), Tt(n, l), l.componentStack = e);
}
function Tt(n, l) {
  var e = l.node, t = l.childIndex;
  if (e !== null) {
    if (typeof e == "object") {
      switch (e.$$typeof) {
        case ti:
          var r = e.type, i = e.key, a = e.props;
          e = a.ref;
          var c = e !== void 0 ? e : null, u = be(r), f = i ?? (t === -1 ? 0 : t);
          if (i = [l.keyPath, u, f], l.replay !== null)
            n: {
              var o = l.replay;
              for (t = o.nodes, e = 0; e < t.length; e++) {
                var h = t[e];
                if (f === h[1]) {
                  if (h.length === 4) {
                    if (u !== null && u !== h[0])
                      throw Error(
                        y(490, h[0], u)
                      );
                    var g = h[2];
                    u = h[3], f = l.node, l.replay = {
                      nodes: g,
                      slots: u,
                      pendingTasks: 1
                    };
                    try {
                      if (we(n, l, i, r, a, c), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
                        throw Error(y(488));
                      l.replay.pendingTasks--;
                    } catch (T) {
                      if (typeof T == "object" && T !== null && (T === $ || typeof T.then == "function"))
                        throw l.node === f ? l.replay = o : t.splice(e, 1), T;
                      l.replay.pendingTasks--, a = kn(l.componentStack), i = n, n = l.blockedBoundary, r = T, a = G(i, r, a), Yl(
                        i,
                        n,
                        g,
                        u,
                        r,
                        a
                      );
                    }
                    l.replay = o;
                  } else {
                    if (r !== Se)
                      throw Error(
                        y(
                          490,
                          "Suspense",
                          be(r) || "Unknown"
                        )
                      );
                    l: {
                      o = void 0, r = h[5], c = h[2], u = h[3], f = h[4] === null ? [] : h[4][2], h = h[4] === null ? null : h[4][3];
                      var b = l.keyPath, R = l.formatContext, w = l.row, C = l.replay, M = l.blockedBoundary, F = l.hoistableState, X = a.children, m = a.fallback, sn = /* @__PURE__ */ new Set();
                      a = 2 > l.formatContext.insertionMode ? Nl(
                        n,
                        l.row,
                        sn,
                        kl(),
                        kl()
                      ) : Nl(
                        n,
                        l.row,
                        sn,
                        null,
                        null
                      ), a.parentFlushed = !0, a.rootSegmentID = r, l.blockedBoundary = a, l.hoistableState = a.contentState, l.keyPath = i, l.formatContext = re(
                        n.resumableState,
                        R
                      ), l.row = null, l.replay = {
                        nodes: c,
                        slots: u,
                        pendingTasks: 1
                      };
                      try {
                        if (B(n, l, X, -1), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
                          throw Error(y(488));
                        if (l.replay.pendingTasks--, a.pendingTasks === 0 && a.status === 0) {
                          a.status = 1, n.completedBoundaries.push(a);
                          break l;
                        }
                      } catch (T) {
                        a.status = 4, g = kn(l.componentStack), o = G(
                          n,
                          T,
                          g
                        ), a.errorDigest = o, l.replay.pendingTasks--, n.clientRenderedBoundaries.push(a);
                      } finally {
                        l.blockedBoundary = M, l.hoistableState = F, l.replay = C, l.keyPath = b, l.formatContext = R, l.row = w;
                      }
                      g = Nt(
                        n,
                        null,
                        {
                          nodes: f,
                          slots: h,
                          pendingTasks: 0
                        },
                        m,
                        -1,
                        M,
                        a.fallbackState,
                        sn,
                        [i[0], "Suspense Fallback", i[2]],
                        ut(
                          n.resumableState,
                          l.formatContext
                        ),
                        l.context,
                        l.treeContext,
                        l.row,
                        bt(
                          l.componentStack
                        )
                      ), Yn(g), n.pingedTasks.push(g);
                    }
                  }
                  t.splice(e, 1);
                  break n;
                }
              }
            }
          else we(n, l, i, r, a, c);
          return;
        case ri:
          throw Error(y(257));
        case Fe:
          if (g = e._init, e = g(e._payload), n.status === 12) throw null;
          rn(n, l, e, t);
          return;
      }
      if (he(e)) {
        Et(n, l, e, t);
        return;
      }
      if ((g = oi(e)) && (g = g.call(e))) {
        if (e = g.next(), !e.done) {
          a = [];
          do
            a.push(e.value), e = g.next();
          while (!e.done);
          Et(n, l, a, t);
        }
        return;
      }
      if (typeof e.then == "function")
        return l.thenableState = null, rn(n, l, zi(e), t);
      if (e.$$typeof === xe)
        return rn(
          n,
          l,
          e._currentValue,
          t
        );
      throw t = Object.prototype.toString.call(e), Error(
        y(
          31,
          t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
        )
      );
    }
    typeof e == "string" ? (t = l.blockedSegment, t !== null && (t.lastPushedText = kr(
      t.chunks,
      e,
      n.renderState,
      t.lastPushedText
    ))) : (typeof e == "number" || typeof e == "bigint") && (t = l.blockedSegment, t !== null && (t.lastPushedText = kr(
      t.chunks,
      "" + e,
      n.renderState,
      t.lastPushedText
    )));
  }
}
function Et(n, l, e, t) {
  var r = l.keyPath;
  if (t !== -1 && (l.keyPath = [l.keyPath, "Fragment", t], l.replay !== null)) {
    for (var i = l.replay, a = i.nodes, c = 0; c < a.length; c++) {
      var u = a[c];
      if (u[1] === t) {
        t = u[2], u = u[3], l.replay = { nodes: t, slots: u, pendingTasks: 1 };
        try {
          if (Et(n, l, e, -1), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
            throw Error(y(488));
          l.replay.pendingTasks--;
        } catch (h) {
          if (typeof h == "object" && h !== null && (h === $ || typeof h.then == "function"))
            throw h;
          l.replay.pendingTasks--, e = kn(l.componentStack);
          var f = l.blockedBoundary, o = h;
          e = G(n, o, e), Yl(
            n,
            f,
            t,
            u,
            o,
            e
          );
        }
        l.replay = i, a.splice(c, 1);
        break;
      }
    }
    l.keyPath = r;
    return;
  }
  if (i = l.treeContext, a = e.length, l.replay !== null && (c = l.replay.slots, c !== null && typeof c == "object")) {
    for (t = 0; t < a; t++)
      u = e[t], l.treeContext = Un(i, a, t), f = c[t], typeof f == "number" ? (Me(n, l, f, u, t), delete c[t]) : B(n, l, u, t);
    l.treeContext = i, l.keyPath = r;
    return;
  }
  for (c = 0; c < a; c++)
    t = e[c], l.treeContext = Un(i, a, c), B(n, l, t, c);
  l.treeContext = i, l.keyPath = r;
}
function Yi(n, l, e) {
  if (e.status = 5, e.rootSegmentID = n.nextSegmentId++, n = e.trackedContentKeyPath, n === null) throw Error(y(486));
  var t = e.trackedFallbackNode, r = [], i = l.workingMap.get(n);
  return i === void 0 ? (e = [
    n[1],
    n[2],
    r,
    null,
    t,
    e.rootSegmentID
  ], l.workingMap.set(n, e), Re(e, n[0], l), e) : (i[4] = t, i[5] = e.rootSegmentID, i);
}
function wt(n, l, e, t) {
  t.status = 5;
  var r = e.keyPath, i = e.blockedBoundary;
  if (i === null)
    t.id = n.nextSegmentId++, l.rootSlots = t.id, n.completedRootSegment !== null && (n.completedRootSegment.status = 5);
  else {
    if (i !== null && i.status === 0) {
      var a = Yi(
        n,
        l,
        i
      );
      if (i.trackedContentKeyPath === r && e.childIndex === -1) {
        t.id === -1 && (t.id = t.parentFlushed ? i.rootSegmentID : n.nextSegmentId++), a[3] = t.id;
        return;
      }
    }
    if (t.id === -1 && (t.id = t.parentFlushed && i !== null ? i.rootSegmentID : n.nextSegmentId++), e.childIndex === -1)
      r === null ? l.rootSlots = t.id : (e = l.workingMap.get(r), e === void 0 ? (e = [r[1], r[2], [], t.id], Re(e, r[0], l)) : e[3] = t.id);
    else {
      if (r === null) {
        if (n = l.rootSlots, n === null)
          n = l.rootSlots = {};
        else if (typeof n == "number")
          throw Error(y(491));
      } else if (i = l.workingMap, a = i.get(r), a === void 0)
        n = {}, a = [r[1], r[2], [], n], i.set(r, a), Re(a, r[0], l);
      else if (n = a[3], n === null)
        n = a[3] = {};
      else if (typeof n == "number")
        throw Error(y(491));
      n[e.childIndex] = t.id;
    }
  }
}
function Dt(n, l) {
  n = n.trackedPostpones, n !== null && (l = l.trackedContentKeyPath, l !== null && (l = n.workingMap.get(l), l !== void 0 && (l.length = 4, l[2] = [], l[3] = null)));
}
function ni(n, l, e) {
  return Nt(
    n,
    e,
    l.replay,
    l.node,
    l.childIndex,
    l.blockedBoundary,
    l.hoistableState,
    l.abortSet,
    l.keyPath,
    l.formatContext,
    l.context,
    l.treeContext,
    l.row,
    l.componentStack
  );
}
function li(n, l, e) {
  var t = l.blockedSegment, r = An(
    n,
    t.chunks.length,
    null,
    l.formatContext,
    t.lastPushedText,
    !0
  );
  return t.children.push(r), t.lastPushedText = !1, zl(
    n,
    e,
    l.node,
    l.childIndex,
    l.blockedBoundary,
    r,
    l.blockedPreamble,
    l.hoistableState,
    l.abortSet,
    l.keyPath,
    l.formatContext,
    l.context,
    l.treeContext,
    l.row,
    l.componentStack
  );
}
function B(n, l, e, t) {
  var r = l.formatContext, i = l.context, a = l.keyPath, c = l.treeContext, u = l.componentStack, f = l.blockedSegment;
  if (f === null) {
    f = l.replay;
    try {
      return rn(n, l, e, t);
    } catch (g) {
      if (Bl(), e = g === $ ? ye() : g, n.status !== 12 && typeof e == "object" && e !== null) {
        if (typeof e.then == "function") {
          t = g === $ ? $n() : null, n = ni(n, l, t).ping, e.then(n, n), l.formatContext = r, l.context = i, l.keyPath = a, l.treeContext = c, l.componentStack = u, l.replay = f, Sn(i);
          return;
        }
        if (e.message === "Maximum call stack size exceeded") {
          e = g === $ ? $n() : null, e = ni(n, l, e), n.pingedTasks.push(e), l.formatContext = r, l.context = i, l.keyPath = a, l.treeContext = c, l.componentStack = u, l.replay = f, Sn(i);
          return;
        }
      }
    }
  } else {
    var o = f.children.length, h = f.chunks.length;
    try {
      return rn(n, l, e, t);
    } catch (g) {
      if (Bl(), f.children.length = o, f.chunks.length = h, e = g === $ ? ye() : g, n.status !== 12 && typeof e == "object" && e !== null) {
        if (typeof e.then == "function") {
          f = e, e = g === $ ? $n() : null, n = li(n, l, e).ping, f.then(n, n), l.formatContext = r, l.context = i, l.keyPath = a, l.treeContext = c, l.componentStack = u, Sn(i);
          return;
        }
        if (e.message === "Maximum call stack size exceeded") {
          f = g === $ ? $n() : null, f = li(n, l, f), n.pingedTasks.push(f), l.formatContext = r, l.context = i, l.keyPath = a, l.treeContext = c, l.componentStack = u, Sn(i);
          return;
        }
      }
    }
  }
  throw l.formatContext = r, l.context = i, l.keyPath = a, l.treeContext = c, Sn(i), e;
}
function Ic(n) {
  var l = n.blockedBoundary, e = n.blockedSegment;
  e !== null && (e.status = 3, Mn(this, l, n.row, e));
}
function Yl(n, l, e, t, r, i) {
  for (var a = 0; a < e.length; a++) {
    var c = e[a];
    if (c.length === 4)
      Yl(
        n,
        l,
        c[2],
        c[3],
        r,
        i
      );
    else {
      c = c[5];
      var u = n, f = i, o = Nl(
        u,
        null,
        /* @__PURE__ */ new Set(),
        null,
        null
      );
      o.parentFlushed = !0, o.rootSegmentID = c, o.status = 4, o.errorDigest = f, o.parentFlushed && u.clientRenderedBoundaries.push(o);
    }
  }
  if (e.length = 0, t !== null) {
    if (l === null) throw Error(y(487));
    if (l.status !== 4 && (l.status = 4, l.errorDigest = i, l.parentFlushed && n.clientRenderedBoundaries.push(l)), typeof t == "object") for (var h in t) delete t[h];
  }
}
function Ct(n, l, e) {
  var t = n.blockedBoundary, r = n.blockedSegment;
  if (r !== null) {
    if (r.status === 6) return;
    r.status = 3;
  }
  var i = kn(n.componentStack);
  if (t === null) {
    if (l.status !== 13 && l.status !== 14) {
      if (t = n.replay, t === null) {
        l.trackedPostpones !== null && r !== null ? (t = l.trackedPostpones, G(l, e, i), wt(l, t, n, r), Mn(l, null, n.row, r)) : (G(l, e, i), Dl(l, e));
        return;
      }
      t.pendingTasks--, t.pendingTasks === 0 && 0 < t.nodes.length && (r = G(l, e, i), Yl(
        l,
        null,
        t.nodes,
        t.slots,
        e,
        r
      )), l.pendingRootTasks--, l.pendingRootTasks === 0 && Wt(l);
    }
  } else {
    var a = l.trackedPostpones;
    if (t.status !== 4) {
      if (a !== null && r !== null)
        return G(l, e, i), wt(l, a, n, r), t.fallbackAbortableTasks.forEach(function(c) {
          return Ct(c, l, e);
        }), t.fallbackAbortableTasks.clear(), Mn(l, t, n.row, r);
      t.status = 4, r = G(l, e, i), t.status = 4, t.errorDigest = r, Dt(l, t), t.parentFlushed && l.clientRenderedBoundaries.push(t);
    }
    t.pendingTasks--, r = t.row, r !== null && --r.pendingTasks === 0 && Y(l, r), t.fallbackAbortableTasks.forEach(function(c) {
      return Ct(c, l, e);
    }), t.fallbackAbortableTasks.clear();
  }
  n = n.row, n !== null && --n.pendingTasks === 0 && Y(l, n), l.allPendingTasks--, l.allPendingTasks === 0 && Ce(l);
}
function Ht(n, l) {
  try {
    var e = n.renderState, t = e.onHeaders;
    if (t) {
      var r = e.headers;
      if (r) {
        e.headers = null;
        var i = r.preconnects;
        if (r.fontPreloads && (i && (i += ", "), i += r.fontPreloads), r.highImagePreloads && (i && (i += ", "), i += r.highImagePreloads), !l) {
          var a = e.styles.values(), c = a.next();
          n: for (; 0 < r.remainingCapacity && !c.done; c = a.next())
            for (var u = c.value.sheets.values(), f = u.next(); 0 < r.remainingCapacity && !f.done; f = u.next()) {
              var o = f.value, h = o.props, g = h.href, b = o.props, R = ve(b.href, "style", {
                crossOrigin: b.crossOrigin,
                integrity: b.integrity,
                nonce: b.nonce,
                type: b.type,
                fetchPriority: b.fetchPriority,
                referrerPolicy: b.referrerPolicy,
                media: b.media
              });
              if (0 <= (r.remainingCapacity -= R.length + 2))
                e.resets.style[g] = tn, i && (i += ", "), i += R, e.resets.style[g] = typeof h.crossOrigin == "string" || typeof h.integrity == "string" ? [h.crossOrigin, h.integrity] : tn;
              else break n;
            }
        }
        t(i ? { Link: i } : {});
      }
    }
  } catch (w) {
    G(n, w, {});
  }
}
function Wt(n) {
  n.trackedPostpones === null && Ht(n, !0), n.trackedPostpones === null && Xl(n), n.onShellError = J, n = n.onShellReady, n();
}
function Ce(n) {
  Ht(
    n,
    n.trackedPostpones === null ? !0 : n.completedRootSegment === null || n.completedRootSegment.status !== 5
  ), Xl(n), n = n.onAllReady, n();
}
function Hl(n, l) {
  if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null && l.children[0].id === -1) {
    var e = l.children[0];
    e.id = l.id, e.parentFlushed = !0, e.status !== 1 && e.status !== 3 && e.status !== 4 || Hl(n, e);
  } else n.completedSegments.push(l);
}
function ll(n, l, e) {
  if (sa !== null) {
    e = e.chunks;
    for (var t = 0, r = 0; r < e.length; r++)
      t += e[r].byteLength;
    l === null ? n.byteSize += t : l.byteSize += t;
  }
}
function Mn(n, l, e, t) {
  if (e !== null && (--e.pendingTasks === 0 ? Y(n, e) : e.together && yt(n, e)), n.allPendingTasks--, l === null) {
    if (t !== null && t.parentFlushed) {
      if (n.completedRootSegment !== null)
        throw Error(y(389));
      n.completedRootSegment = t;
    }
    n.pendingRootTasks--, n.pendingRootTasks === 0 && Wt(n);
  } else if (l.pendingTasks--, l.status !== 4)
    if (l.pendingTasks === 0) {
      if (l.status === 0 && (l.status = 1), t !== null && t.parentFlushed && (t.status === 1 || t.status === 3) && Hl(l, t), l.parentFlushed && n.completedBoundaries.push(l), l.status === 1)
        e = l.row, e !== null && tl(e.hoistables, l.contentState), rl(n, l) || (l.fallbackAbortableTasks.forEach(Ic, n), l.fallbackAbortableTasks.clear(), e !== null && --e.pendingTasks === 0 && Y(n, e)), n.pendingRootTasks === 0 && n.trackedPostpones === null && l.contentPreamble !== null && Xl(n);
      else if (l.status === 5 && (l = l.row, l !== null)) {
        if (n.trackedPostpones !== null) {
          e = n.trackedPostpones;
          var r = l.next;
          if (r !== null && (t = r.boundaries, t !== null))
            for (r.boundaries = null, r = 0; r < t.length; r++) {
              var i = t[r];
              Yi(n, e, i), Mn(n, i, null, null);
            }
        }
        --l.pendingTasks === 0 && Y(n, l);
      }
    } else
      t === null || !t.parentFlushed || t.status !== 1 && t.status !== 3 || (Hl(l, t), l.completedSegments.length === 1 && l.parentFlushed && n.partialBoundaries.push(l)), l = l.row, l !== null && l.together && yt(n, l);
  n.allPendingTasks === 0 && Ce(n);
}
function Rt(n) {
  if (n.status !== 14 && n.status !== 13) {
    var l = Wn, e = qn.H;
    qn.H = mr;
    var t = qn.A;
    qn.A = Pc;
    var r = D;
    D = n;
    var i = fe;
    fe = n.resumableState;
    try {
      var a = n.pingedTasks, c;
      for (c = 0; c < a.length; c++) {
        var u = a[c], f = n, o = u.blockedSegment;
        if (o === null) {
          var h = f;
          if (u.replay.pendingTasks !== 0) {
            Sn(u.context);
            try {
              if (typeof u.replay.slots == "number" ? Me(
                h,
                u,
                u.replay.slots,
                u.node,
                u.childIndex
              ) : Tt(h, u), u.replay.pendingTasks === 1 && 0 < u.replay.nodes.length)
                throw Error(y(488));
              u.replay.pendingTasks--, u.abortSet.delete(u), Mn(
                h,
                u.blockedBoundary,
                u.row,
                null
              );
            } catch (_) {
              Bl();
              var g = _ === $ ? ye() : _;
              if (typeof g == "object" && g !== null && typeof g.then == "function") {
                var b = u.ping;
                g.then(b, b), u.thenableState = _ === $ ? $n() : null;
              } else {
                u.replay.pendingTasks--, u.abortSet.delete(u);
                var R = kn(u.componentStack);
                f = void 0;
                var w = h, C = u.blockedBoundary, M = h.status === 12 ? h.fatalError : g, F = u.replay.nodes, X = u.replay.slots;
                f = G(
                  w,
                  M,
                  R
                ), Yl(
                  w,
                  C,
                  F,
                  X,
                  M,
                  f
                ), h.pendingRootTasks--, h.pendingRootTasks === 0 && Wt(h), h.allPendingTasks--, h.allPendingTasks === 0 && Ce(h);
              }
            }
          }
        } else if (h = void 0, w = o, w.status === 0) {
          w.status = 6, Sn(u.context);
          var m = w.children.length, sn = w.chunks.length;
          try {
            Tt(f, u), w.lastPushedText && w.textEmbedded && w.chunks.push(dn), u.abortSet.delete(u), w.status = 1, ll(f, u.blockedBoundary, w), Mn(
              f,
              u.blockedBoundary,
              u.row,
              w
            );
          } catch (_) {
            Bl(), w.children.length = m, w.chunks.length = sn;
            var T = _ === $ ? ye() : f.status === 12 ? f.fatalError : _;
            if (f.status === 12 && f.trackedPostpones !== null) {
              var un = f.trackedPostpones, nn = kn(u.componentStack);
              u.abortSet.delete(u), G(f, T, nn), wt(f, un, u, w), Mn(
                f,
                u.blockedBoundary,
                u.row,
                w
              );
            } else if (typeof T == "object" && T !== null && typeof T.then == "function") {
              w.status = 0, u.thenableState = _ === $ ? $n() : null;
              var Q = u.ping;
              T.then(Q, Q);
            } else {
              var cn = kn(u.componentStack);
              u.abortSet.delete(u), w.status = 4;
              var A = u.blockedBoundary, gn = u.row;
              if (gn !== null && --gn.pendingTasks === 0 && Y(f, gn), f.allPendingTasks--, h = G(
                f,
                T,
                cn
              ), A === null) Dl(f, T);
              else if (A.pendingTasks--, A.status !== 4) {
                A.status = 4, A.errorDigest = h, Dt(f, A);
                var ln = A.row;
                ln !== null && --ln.pendingTasks === 0 && Y(f, ln), A.parentFlushed && f.clientRenderedBoundaries.push(A), f.pendingRootTasks === 0 && f.trackedPostpones === null && A.contentPreamble !== null && Xl(f);
              }
              f.allPendingTasks === 0 && Ce(f);
            }
          }
        }
      }
      a.splice(0, c), n.destination !== null && Ie(n, n.destination);
    } catch (_) {
      G(n, _, {}), Dl(n, _);
    } finally {
      fe = i, qn.H = e, qn.A = t, e === mr && Sn(l), D = r;
    }
  }
}
function tt(n, l, e) {
  l.preambleChildren.length && e.push(l.preambleChildren);
  for (var t = !1, r = 0; r < l.children.length; r++)
    t = Xi(
      n,
      l.children[r],
      e
    ) || t;
  return t;
}
function Xi(n, l, e) {
  var t = l.boundary;
  if (t === null)
    return tt(
      n,
      l,
      e
    );
  var r = t.contentPreamble, i = t.fallbackPreamble;
  if (r === null || i === null) return !1;
  switch (t.status) {
    case 1:
      if (Hr(n.renderState, r), n.byteSize += t.byteSize, l = t.completedSegments[0], !l) throw Error(y(391));
      return tt(
        n,
        l,
        e
      );
    case 5:
      if (n.trackedPostpones !== null) return !0;
    case 4:
      if (l.status === 1)
        return Hr(n.renderState, i), tt(
          n,
          l,
          e
        );
    default:
      return !0;
  }
}
function Xl(n) {
  if (n.completedRootSegment && n.completedPreambleSegments === null) {
    var l = [], e = n.byteSize, t = Xi(
      n,
      n.completedRootSegment,
      l
    ), r = n.renderState.preamble;
    t === !1 || r.headChunks && r.bodyChunks ? n.completedPreambleSegments = l : n.byteSize = e;
  }
}
function te(n, l, e, t) {
  switch (e.parentFlushed = !0, e.status) {
    case 0:
      e.id = n.nextSegmentId++;
    case 5:
      return t = e.id, e.lastPushedText = !1, e.textEmbedded = !1, n = n.renderState, d(l, Ua), d(l, n.placeholderPrefix), n = v(t.toString(16)), d(l, n), S(l, Ga);
    case 1:
      e.status = 2;
      var r = !0, i = e.chunks, a = 0;
      e = e.children;
      for (var c = 0; c < e.length; c++) {
        for (r = e[c]; a < r.index; a++)
          d(l, i[a]);
        r = Ul(n, l, r, t);
      }
      for (; a < i.length - 1; a++)
        d(l, i[a]);
      return a < i.length && (r = S(l, i[a])), r;
    case 3:
      return !0;
    default:
      throw Error(y(390));
  }
}
var Wl = 0;
function Ul(n, l, e, t) {
  var r = e.boundary;
  if (r === null)
    return te(n, l, e, t);
  if (r.parentFlushed = !0, r.status === 4) {
    var i = r.row;
    i !== null && --i.pendingTasks === 0 && Y(n, i), r = r.errorDigest, S(l, Va), d(l, ma), r && (d(l, pa), d(l, v(E(r))), d(
      l,
      qa
    )), S(l, ja), te(n, l, e, t);
  } else if (r.status !== 1)
    r.status === 0 && (r.rootSegmentID = n.nextSegmentId++), 0 < r.completedSegments.length && n.partialBoundaries.push(r), Wr(
      l,
      n.renderState,
      r.rootSegmentID
    ), t && tl(t, r.fallbackState), te(n, l, e, t);
  else if (!oe && rl(n, r) && (Wl + r.byteSize > n.progressiveChunkSize || Ii(r.contentState)))
    r.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(r), Wr(
      l,
      n.renderState,
      r.rootSegmentID
    ), te(n, l, e, t);
  else {
    if (Wl += r.byteSize, t && tl(t, r.contentState), e = r.row, e !== null && rl(n, r) && --e.pendingTasks === 0 && Y(n, e), S(l, Za), e = r.completedSegments, e.length !== 1) throw Error(y(391));
    Ul(n, l, e[0], t);
  }
  return S(l, Ka);
}
function rt(n, l, e, t) {
  return wu(
    l,
    n.renderState,
    e.parentFormatContext,
    e.id
  ), Ul(n, l, e, t), Cu(l, e.parentFormatContext);
}
function ei(n, l, e) {
  Wl = e.byteSize;
  for (var t = e.completedSegments, r = 0; r < t.length; r++)
    Zi(
      n,
      l,
      e,
      t[r]
    );
  t.length = 0, t = e.row, t !== null && rl(n, e) && --t.pendingTasks === 0 && Y(n, t), Ai(
    l,
    e.contentState,
    n.renderState
  ), t = n.resumableState, n = n.renderState, r = e.rootSegmentID, e = e.contentState;
  var i = n.stylesToHoist;
  return n.stylesToHoist = !1, d(l, n.startInlineScript), d(l, I), i ? ((t.instructions & 4) === 0 && (t.instructions |= 4, d(l, Lu)), (t.instructions & 2) === 0 && (t.instructions |= 2, d(l, Ur)), (t.instructions & 8) === 0 ? (t.instructions |= 8, d(l, Au)) : d(l, ku)) : ((t.instructions & 2) === 0 && (t.instructions |= 2, d(l, Ur)), d(l, Pu)), t = v(r.toString(16)), d(l, n.boundaryPrefix), d(l, t), d(l, Mu), d(l, n.segmentPrefix), d(l, t), i ? (d(l, Iu), ec(l, e)) : d(l, Ou), e = S(l, _u), Pi(l, n) && e;
}
function Zi(n, l, e, t) {
  if (t.status === 2) return !0;
  var r = e.contentState, i = t.id;
  if (i === -1) {
    if ((t.id = e.rootSegmentID) === -1)
      throw Error(y(392));
    return rt(n, l, t, r);
  }
  return i === e.rootSegmentID ? rt(n, l, t, r) : (rt(n, l, t, r), e = n.resumableState, n = n.renderState, d(l, n.startInlineScript), d(l, I), (e.instructions & 1) === 0 ? (e.instructions |= 1, d(l, Ru)) : d(l, xu), d(l, n.segmentPrefix), i = v(i.toString(16)), d(l, i), d(l, Su), d(l, n.placeholderPrefix), d(l, i), l = S(l, Fu), l);
}
var oe = !1;
function Ie(n, l) {
  p = new Uint8Array(2048), j = 0;
  try {
    if (!(0 < n.pendingRootTasks)) {
      var e, t = n.completedRootSegment;
      if (t !== null) {
        if (t.status === 5) return;
        var r = n.completedPreambleSegments;
        if (r === null) return;
        Wl = n.byteSize;
        var i = n.resumableState, a = n.renderState, c = a.preamble, u = c.htmlChunks, f = c.headChunks, o;
        if (u) {
          for (o = 0; o < u.length; o++)
            d(l, u[o]);
          if (f)
            for (o = 0; o < f.length; o++)
              d(l, f[o]);
          else
            d(l, L("head")), d(l, I);
        } else if (f)
          for (o = 0; o < f.length; o++)
            d(l, f[o]);
        var h = a.charsetChunks;
        for (o = 0; o < h.length; o++)
          d(l, h[o]);
        h.length = 0, a.preconnects.forEach(hn, l), a.preconnects.clear();
        var g = a.viewportChunks;
        for (o = 0; o < g.length; o++)
          d(l, g[o]);
        g.length = 0, a.fontPreloads.forEach(hn, l), a.fontPreloads.clear(), a.highImagePreloads.forEach(hn, l), a.highImagePreloads.clear(), el = a, a.styles.forEach($u, l), el = null;
        var b = a.importMapChunks;
        for (o = 0; o < b.length; o++)
          d(l, b[o]);
        b.length = 0, a.bootstrapScripts.forEach(hn, l), a.scripts.forEach(hn, l), a.scripts.clear(), a.bulkPreloads.forEach(hn, l), a.bulkPreloads.clear(), u || f || (i.instructions |= 32);
        var R = a.hoistableChunks;
        for (o = 0; o < R.length; o++)
          d(l, R[o]);
        for (i = R.length = 0; i < r.length; i++) {
          var w = r[i];
          for (a = 0; a < w.length; a++)
            Ul(n, l, w[a], null);
        }
        var C = n.renderState.preamble, M = C.headChunks;
        (C.htmlChunks || M) && d(l, Gn("head"));
        var F = C.bodyChunks;
        if (F)
          for (r = 0; r < F.length; r++)
            d(l, F[r]);
        Ul(n, l, t, null), n.completedRootSegment = null;
        var X = n.renderState;
        if (n.allPendingTasks !== 0 || n.clientRenderedBoundaries.length !== 0 || n.completedBoundaries.length !== 0 || n.trackedPostpones !== null && (n.trackedPostpones.rootNodes.length !== 0 || n.trackedPostpones.rootSlots !== null)) {
          var m = n.resumableState;
          if ((m.instructions & 64) === 0) {
            if (m.instructions |= 64, d(l, X.startInlineScript), (m.instructions & 32) === 0) {
              m.instructions |= 32;
              var sn = "_" + m.idPrefix + "R_";
              d(l, Mi), d(
                l,
                v(E(sn))
              ), d(l, O);
            }
            d(l, I), d(l, Wa), S(l, de);
          }
        }
        Pi(l, X);
      }
      var T = n.renderState;
      t = 0;
      var un = T.viewportChunks;
      for (t = 0; t < un.length; t++)
        d(l, un[t]);
      un.length = 0, T.preconnects.forEach(hn, l), T.preconnects.clear(), T.fontPreloads.forEach(hn, l), T.fontPreloads.clear(), T.highImagePreloads.forEach(
        hn,
        l
      ), T.highImagePreloads.clear(), T.styles.forEach(lc, l), T.scripts.forEach(hn, l), T.scripts.clear(), T.bulkPreloads.forEach(hn, l), T.bulkPreloads.clear();
      var nn = T.hoistableChunks;
      for (t = 0; t < nn.length; t++)
        d(l, nn[t]);
      nn.length = 0;
      var Q = n.clientRenderedBoundaries;
      for (e = 0; e < Q.length; e++) {
        var cn = Q[e];
        T = l;
        var A = n.resumableState, gn = n.renderState, ln = cn.rootSegmentID, _ = cn.errorDigest;
        d(
          T,
          gn.startInlineScript
        ), d(T, I), (A.instructions & 4) === 0 ? (A.instructions |= 4, d(T, Bu)) : d(T, Nu), d(T, gn.boundaryPrefix), d(T, v(ln.toString(16))), d(T, zu), _ && (d(
          T,
          Du
        ), d(
          T,
          v(
            Uu(_ || "")
          )
        ));
        var V = S(
          T,
          Hu
        );
        if (!V) {
          n.destination = null, e++, Q.splice(0, e);
          return;
        }
      }
      Q.splice(0, e);
      var In = n.completedBoundaries;
      for (e = 0; e < In.length; e++)
        if (!ei(n, l, In[e])) {
          n.destination = null, e++, In.splice(0, e);
          return;
        }
      In.splice(0, e), me(l), p = new Uint8Array(2048), j = 0, oe = !0;
      var On = n.partialBoundaries;
      for (e = 0; e < On.length; e++) {
        var bn = On[e];
        n: {
          Q = n, cn = l, Wl = bn.byteSize;
          var _n = bn.completedSegments;
          for (V = 0; V < _n.length; V++)
            if (!Zi(
              Q,
              cn,
              bn,
              _n[V]
            )) {
              V++, _n.splice(0, V);
              var il = !1;
              break n;
            }
          _n.splice(0, V);
          var vn = bn.row;
          vn !== null && vn.together && bn.pendingTasks === 1 && (vn.pendingTasks === 1 ? zt(
            Q,
            vn,
            vn.hoistables
          ) : vn.pendingTasks--), il = Ai(
            cn,
            bn.contentState,
            Q.renderState
          );
        }
        if (!il) {
          n.destination = null, e++, On.splice(0, e);
          return;
        }
      }
      On.splice(0, e), oe = !1;
      var Cn = n.completedBoundaries;
      for (e = 0; e < Cn.length; e++)
        if (!ei(n, l, Cn[e])) {
          n.destination = null, e++, Cn.splice(0, e);
          return;
        }
      Cn.splice(0, e);
    }
  } finally {
    oe = !1, n.allPendingTasks === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 ? (n.flushScheduled = !1, e = n.resumableState, e.hasBody && d(l, Gn("body")), e.hasHtml && d(l, Gn("html")), me(l), n.status = 14, l.close(), n.destination = null) : me(l);
  }
}
function Oe(n) {
  n.flushScheduled = n.destination !== null, si(function() {
    return Rt(n);
  }), At(function() {
    n.status === 10 && (n.status = 11), n.trackedPostpones === null && Ht(n, n.pendingRootTasks === 0);
  });
}
function Xn(n) {
  n.flushScheduled === !1 && n.pingedTasks.length === 0 && n.destination !== null && (n.flushScheduled = !0, At(function() {
    var l = n.destination;
    l ? Ie(n, l) : n.flushScheduled = !1;
  }));
}
function _e(n, l) {
  if (n.status === 13)
    n.status = 14, vi(l, n.fatalError);
  else if (n.status !== 14 && n.destination === null) {
    n.destination = l;
    try {
      Ie(n, l);
    } catch (e) {
      G(n, e, {}), Dl(n, e);
    }
  }
}
function an(n, l) {
  (n.status === 11 || n.status === 10) && (n.status = 12);
  try {
    var e = n.abortableTasks;
    if (0 < e.size) {
      var t = l === void 0 ? Error(y(432)) : typeof l == "object" && l !== null && typeof l.then == "function" ? Error(y(530)) : l;
      n.fatalError = t, e.forEach(function(r) {
        return Ct(r, n, t);
      }), e.clear();
    }
    n.destination !== null && Ie(n, n.destination);
  } catch (r) {
    G(n, r, {}), Dl(n, r);
  }
}
function Re(n, l, e) {
  if (l === null) e.rootNodes.push(n);
  else {
    var t = e.workingMap, r = t.get(l);
    r === void 0 && (r = [l[1], l[2], [], null], t.set(l, r), Re(r, l[0], e)), r[2].push(n);
  }
}
function Ji(n) {
  var l = n.trackedPostpones;
  if (l === null || l.rootNodes.length === 0 && l.rootSlots === null)
    return n.trackedPostpones = null;
  if (n.completedRootSegment === null || n.completedRootSegment.status !== 5 && n.completedPreambleSegments !== null) {
    var e = n.nextSegmentId, t = l.rootSlots, r = n.resumableState;
    r.bootstrapScriptContent = void 0, r.bootstrapScripts = void 0, r.bootstrapModules = void 0;
  } else {
    e = 0, t = -1, r = n.resumableState;
    var i = n.renderState;
    r.nextFormID = 0, r.hasBody = !1, r.hasHtml = !1, r.unknownResources = { font: i.resets.font }, r.dnsResources = i.resets.dns, r.connectResources = i.resets.connect, r.imageResources = i.resets.image, r.styleResources = i.resets.style, r.scriptResources = {}, r.moduleUnknownResources = {}, r.moduleScriptResources = {}, r.instructions = 0;
  }
  return {
    nextSegmentId: e,
    rootFormatContext: n.rootFormatContext,
    progressiveChunkSize: n.progressiveChunkSize,
    resumableState: n.resumableState,
    replayNodes: l.rootNodes,
    replaySlots: t
  };
}
function Qi() {
  var n = xt.version;
  if (n !== "19.2.4")
    throw Error(
      y(
        527,
        n,
        "19.2.4"
      )
    );
}
Qi();
Qi();
var Lc = Gl.prerender = function(n, l) {
  return new Promise(function(e, t) {
    var r = l ? l.onHeaders : void 0, i;
    r && (i = function(o) {
      r(new Headers(o));
    });
    var a = yi(
      l ? l.identifierPrefix : void 0,
      l ? l.unstable_externalRuntimeSrc : void 0,
      l ? l.bootstrapScriptContent : void 0,
      l ? l.bootstrapScripts : void 0,
      l ? l.bootstrapModules : void 0
    ), c = kc(
      n,
      a,
      Pe(
        a,
        void 0,
        l ? l.unstable_externalRuntimeSrc : void 0,
        l ? l.importMap : void 0,
        i,
        l ? l.maxHeadersLength : void 0
      ),
      Ti(l ? l.namespaceURI : void 0),
      l ? l.progressiveChunkSize : void 0,
      l ? l.onError : void 0,
      function() {
        var o = new ReadableStream(
          {
            type: "bytes",
            pull: function(h) {
              _e(c, h);
            },
            cancel: function(h) {
              c.destination = null, an(c, h);
            }
          },
          { highWaterMark: 0 }
        );
        o = { postponed: Ji(c), prelude: o }, e(o);
      },
      void 0,
      void 0,
      t,
      l ? l.onPostpone : void 0
    );
    if (l && l.signal) {
      var u = l.signal;
      if (u.aborted) an(c, u.reason);
      else {
        var f = function() {
          an(c, u.reason), u.removeEventListener("abort", f);
        };
        u.addEventListener("abort", f);
      }
    }
    Oe(c);
  });
}, Bc = Gl.renderToReadableStream = function(n, l) {
  return new Promise(function(e, t) {
    var r, i, a = new Promise(function(b, R) {
      i = b, r = R;
    }), c = l ? l.onHeaders : void 0, u;
    c && (u = function(b) {
      c(new Headers(b));
    });
    var f = yi(
      l ? l.identifierPrefix : void 0,
      l ? l.unstable_externalRuntimeSrc : void 0,
      l ? l.bootstrapScriptContent : void 0,
      l ? l.bootstrapScripts : void 0,
      l ? l.bootstrapModules : void 0
    ), o = Wi(
      n,
      f,
      Pe(
        f,
        l ? l.nonce : void 0,
        l ? l.unstable_externalRuntimeSrc : void 0,
        l ? l.importMap : void 0,
        u,
        l ? l.maxHeadersLength : void 0
      ),
      Ti(l ? l.namespaceURI : void 0),
      l ? l.progressiveChunkSize : void 0,
      l ? l.onError : void 0,
      i,
      function() {
        var b = new ReadableStream(
          {
            type: "bytes",
            pull: function(R) {
              _e(o, R);
            },
            cancel: function(R) {
              o.destination = null, an(o, R);
            }
          },
          { highWaterMark: 0 }
        );
        b.allReady = a, e(b);
      },
      function(b) {
        a.catch(function() {
        }), t(b);
      },
      r,
      l ? l.onPostpone : void 0,
      l ? l.formState : void 0
    );
    if (l && l.signal) {
      var h = l.signal;
      if (h.aborted) an(o, h.reason);
      else {
        var g = function() {
          an(o, h.reason), h.removeEventListener("abort", g);
        };
        h.addEventListener("abort", g);
      }
    }
    Oe(o);
  });
}, Nc = Gl.resume = function(n, l, e) {
  return new Promise(function(t, r) {
    var i, a, c = new Promise(function(h, g) {
      a = h, i = g;
    }), u = Ui(
      n,
      l,
      Pe(
        l.resumableState,
        e ? e.nonce : void 0,
        void 0,
        void 0,
        void 0,
        void 0
      ),
      e ? e.onError : void 0,
      a,
      function() {
        var h = new ReadableStream(
          {
            type: "bytes",
            pull: function(g) {
              _e(u, g);
            },
            cancel: function(g) {
              u.destination = null, an(u, g);
            }
          },
          { highWaterMark: 0 }
        );
        h.allReady = c, t(h);
      },
      function(h) {
        c.catch(function() {
        }), r(h);
      },
      i,
      e ? e.onPostpone : void 0
    );
    if (e && e.signal) {
      var f = e.signal;
      if (f.aborted) an(u, f.reason);
      else {
        var o = function() {
          an(u, f.reason), f.removeEventListener("abort", o);
        };
        f.addEventListener("abort", o);
      }
    }
    Oe(u);
  });
}, zc = Gl.resumeAndPrerender = function(n, l, e) {
  return new Promise(function(t, r) {
    var i = Mc(
      n,
      l,
      Pe(
        l.resumableState,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0
      ),
      e ? e.onError : void 0,
      function() {
        var u = new ReadableStream(
          {
            type: "bytes",
            pull: function(f) {
              _e(i, f);
            },
            cancel: function(f) {
              i.destination = null, an(i, f);
            }
          },
          { highWaterMark: 0 }
        );
        u = { postponed: Ji(i), prelude: u }, t(u);
      },
      void 0,
      void 0,
      r,
      e ? e.onPostpone : void 0
    );
    if (e && e.signal) {
      var a = e.signal;
      if (a.aborted) an(i, a.reason);
      else {
        var c = function() {
          an(i, a.reason), a.removeEventListener("abort", c);
        };
        a.addEventListener("abort", c);
      }
    }
    Oe(i);
  });
}, Dc = Gl.version = "19.2.4";
export {
  Gl as default,
  Lc as prerender,
  Bc as renderToReadableStream,
  Nc as resume,
  zc as resumeAndPrerender,
  Dc as version
};
