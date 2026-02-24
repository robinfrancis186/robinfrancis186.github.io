import fr from "react";
import hr from "react-dom";
var Ke = {};
var yt = fr, cr = hr;
function d(n) {
  var l = "https://react.dev/errors/" + n;
  if (1 < arguments.length) {
    l += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var e = 2; e < arguments.length; e++)
      l += "&args[]=" + encodeURIComponent(arguments[e]);
  }
  return "Minified React error #" + n + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Tt = /* @__PURE__ */ Symbol.for("react.transitional.element"), Et = /* @__PURE__ */ Symbol.for("react.portal"), xt = /* @__PURE__ */ Symbol.for("react.fragment"), Rt = /* @__PURE__ */ Symbol.for("react.strict_mode"), wt = /* @__PURE__ */ Symbol.for("react.profiler"), Ct = /* @__PURE__ */ Symbol.for("react.consumer"), he = /* @__PURE__ */ Symbol.for("react.context"), me = /* @__PURE__ */ Symbol.for("react.forward_ref"), ce = /* @__PURE__ */ Symbol.for("react.suspense"), pe = /* @__PURE__ */ Symbol.for("react.suspense_list"), qe = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), or = /* @__PURE__ */ Symbol.for("react.scope"), Ft = /* @__PURE__ */ Symbol.for("react.activity"), sr = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), dr = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), gr = /* @__PURE__ */ Symbol.for("react.view_transition"), Gi = Symbol.iterator;
function _t(n) {
  return n === null || typeof n != "object" ? null : (n = Gi && n[Gi] || n["@@iterator"], typeof n == "function" ? n : null);
}
var ql = Array.isArray;
function Xi(n, l) {
  var e = n.length & 3, i = n.length - e, t = l;
  for (l = 0; l < i; ) {
    var r = n.charCodeAt(l) & 255 | (n.charCodeAt(++l) & 255) << 8 | (n.charCodeAt(++l) & 255) << 16 | (n.charCodeAt(++l) & 255) << 24;
    ++l, r = 3432918353 * (r & 65535) + ((3432918353 * (r >>> 16) & 65535) << 16) & 4294967295, r = r << 15 | r >>> 17, r = 461845907 * (r & 65535) + ((461845907 * (r >>> 16) & 65535) << 16) & 4294967295, t ^= r, t = t << 13 | t >>> 19, t = 5 * (t & 65535) + ((5 * (t >>> 16) & 65535) << 16) & 4294967295, t = (t & 65535) + 27492 + (((t >>> 16) + 58964 & 65535) << 16);
  }
  switch (r = 0, e) {
    case 3:
      r ^= (n.charCodeAt(l + 2) & 255) << 16;
    case 2:
      r ^= (n.charCodeAt(l + 1) & 255) << 8;
    case 1:
      r ^= n.charCodeAt(l) & 255, r = 3432918353 * (r & 65535) + ((3432918353 * (r >>> 16) & 65535) << 16) & 4294967295, r = r << 15 | r >>> 17, t ^= 461845907 * (r & 65535) + ((461845907 * (r >>> 16) & 65535) << 16) & 4294967295;
  }
  return t ^= n.length, t ^= t >>> 16, t = 2246822507 * (t & 65535) + ((2246822507 * (t >>> 16) & 65535) << 16) & 4294967295, t ^= t >>> 13, t = 3266489909 * (t & 65535) + ((3266489909 * (t >>> 16) & 65535) << 16) & 4294967295, (t ^ t >>> 16) >>> 0;
}
var J = Object.assign, I = Object.prototype.hasOwnProperty, vr = RegExp(
  "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
), Zi = {}, Ji = {};
function je(n) {
  return I.call(Ji, n) ? !0 : I.call(Zi, n) ? !1 : vr.test(n) ? Ji[n] = !0 : (Zi[n] = !0, !1);
}
var br = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
), yr = /* @__PURE__ */ new Map([
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
]), Tr = /["'&<>]/;
function T(n) {
  if (typeof n == "boolean" || typeof n == "number" || typeof n == "bigint")
    return "" + n;
  n = "" + n;
  var l = Tr.exec(n);
  if (l) {
    var e = "", i, t = 0;
    for (i = l.index; i < n.length; i++) {
      switch (n.charCodeAt(i)) {
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
      t !== i && (e += n.slice(t, i)), t = i + 1, e += l;
    }
    n = t !== i ? e + n.slice(t, i) : e;
  }
  return n;
}
var Er = /([A-Z])/g, xr = /^ms-/, Rr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function gl(n) {
  return Rr.test("" + n) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : n;
}
var Hn = yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, At = cr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, wr = {
  pending: !1,
  data: null,
  method: null,
  action: null
}, un = At.d;
At.d = {
  f: un.f,
  r: un.r,
  D: Ur,
  C: Yr,
  L: Gr,
  m: Xr,
  X: Jr,
  S: Zr,
  M: Qr
};
var K = [], Xn = null, It = /(<\/|<)(s)(cript)/gi;
function Mt(n, l, e, i) {
  return "" + l + (e === "s" ? "\\u0073" : "\\u0053") + i;
}
function Cr(n, l, e, i, t) {
  return {
    idPrefix: n === void 0 ? "" : n,
    nextFormID: 0,
    streamingFormat: 0,
    bootstrapScriptContent: e,
    bootstrapScripts: i,
    bootstrapModules: t,
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
function N(n, l, e, i) {
  return {
    insertionMode: n,
    selectedValue: l,
    tagScope: e,
    viewTransition: i
  };
}
function Qi(n, l, e) {
  var i = n.tagScope & -25;
  switch (l) {
    case "noscript":
      return N(2, null, i | 1, null);
    case "select":
      return N(
        2,
        e.value != null ? e.value : e.defaultValue,
        i,
        null
      );
    case "svg":
      return N(4, null, i, null);
    case "picture":
      return N(2, null, i | 2, null);
    case "math":
      return N(5, null, i, null);
    case "foreignObject":
      return N(2, null, i, null);
    case "table":
      return N(6, null, i, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return N(7, null, i, null);
    case "colgroup":
      return N(9, null, i, null);
    case "tr":
      return N(8, null, i, null);
    case "head":
      if (2 > n.insertionMode)
        return N(3, null, i, null);
      break;
    case "html":
      if (n.insertionMode === 0)
        return N(1, null, i, null);
  }
  return 6 <= n.insertionMode || 2 > n.insertionMode ? N(2, null, i, null) : n.tagScope !== i ? N(
    n.insertionMode,
    n.selectedValue,
    i,
    null
  ) : n;
}
function Pt(n) {
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
function ze(n, l) {
  return l.tagScope & 32 && (n.instructions |= 128), N(
    l.insertionMode,
    l.selectedValue,
    l.tagScope | 12,
    Pt(l.viewTransition)
  );
}
function Zl(n, l) {
  n = Pt(l.viewTransition);
  var e = l.tagScope | 16;
  return n !== null && n.share !== "none" && (e |= 64), N(
    l.insertionMode,
    l.selectedValue,
    e,
    n
  );
}
var Vi = /* @__PURE__ */ new Map();
function St(n, l) {
  if (typeof l != "object") throw Error(d(62));
  var e = !0, i;
  for (i in l)
    if (I.call(l, i)) {
      var t = l[i];
      if (t != null && typeof t != "boolean" && t !== "") {
        if (i.indexOf("--") === 0) {
          var r = T(i);
          t = T(("" + t).trim());
        } else
          r = Vi.get(i), r === void 0 && (r = T(
            i.replace(Er, "-$1").toLowerCase().replace(xr, "-ms-")
          ), Vi.set(i, r)), t = typeof t == "number" ? t === 0 || br.has(i) ? "" + t : t + "px" : T(("" + t).trim());
        e ? (e = !1, n.push(' style="', r, ":", t)) : n.push(";", r, ":", t);
      }
    }
  e || n.push('"');
}
function Be(n, l, e) {
  e && typeof e != "function" && typeof e != "symbol" && n.push(" ", l, '=""');
}
function U(n, l, e) {
  typeof e != "function" && typeof e != "symbol" && typeof e != "boolean" && n.push(" ", l, '="', T(e), '"');
}
var Ot = T(
  "javascript:throw new Error('React form unexpectedly submitted.')"
);
function Se(n, l) {
  this.push('<input type="hidden"'), kt(n), U(this, "name", l), U(this, "value", n), this.push("/>");
}
function kt(n) {
  if (typeof n != "string") throw Error(d(480));
}
function Lt(n, l) {
  if (typeof l.$$FORM_ACTION == "function") {
    var e = n.nextFormID++;
    n = n.idPrefix + e;
    try {
      var i = l.$$FORM_ACTION(n);
      if (i) {
        var t = i.data;
        t?.forEach(kt);
      }
      return i;
    } catch (r) {
      if (typeof r == "object" && r !== null && typeof r.then == "function")
        throw r;
    }
  }
  return null;
}
function Ki(n, l, e, i, t, r, a, h) {
  var u = null;
  if (typeof i == "function") {
    var f = Lt(l, i);
    f !== null ? (h = f.name, i = f.action || "", t = f.encType, r = f.method, a = f.target, u = f.data) : (n.push(" ", "formAction", '="', Ot, '"'), a = r = t = i = h = null, Dt(l, e));
  }
  return h != null && C(n, "name", h), i != null && C(n, "formAction", i), t != null && C(n, "formEncType", t), r != null && C(n, "formMethod", r), a != null && C(n, "formTarget", a), u;
}
function C(n, l, e) {
  switch (l) {
    case "className":
      U(n, "class", e);
      break;
    case "tabIndex":
      U(n, "tabindex", e);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      U(n, l, e);
      break;
    case "style":
      St(n, e);
      break;
    case "src":
    case "href":
      if (e === "") break;
    case "action":
    case "formAction":
      if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean")
        break;
      e = gl("" + e), n.push(" ", l, '="', T(e), '"');
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
      Be(n, l.toLowerCase(), e);
      break;
    case "xlinkHref":
      if (typeof e == "function" || typeof e == "symbol" || typeof e == "boolean")
        break;
      e = gl("" + e), n.push(" ", "xlink:href", '="', T(e), '"');
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      typeof e != "function" && typeof e != "symbol" && n.push(" ", l, '="', T(e), '"');
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
      e && typeof e != "function" && typeof e != "symbol" && n.push(" ", l, '=""');
      break;
    case "capture":
    case "download":
      e === !0 ? n.push(" ", l, '=""') : e !== !1 && typeof e != "function" && typeof e != "symbol" && n.push(" ", l, '="', T(e), '"');
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e && n.push(" ", l, '="', T(e), '"');
      break;
    case "rowSpan":
    case "start":
      typeof e == "function" || typeof e == "symbol" || isNaN(e) || n.push(" ", l, '="', T(e), '"');
      break;
    case "xlinkActuate":
      U(n, "xlink:actuate", e);
      break;
    case "xlinkArcrole":
      U(n, "xlink:arcrole", e);
      break;
    case "xlinkRole":
      U(n, "xlink:role", e);
      break;
    case "xlinkShow":
      U(n, "xlink:show", e);
      break;
    case "xlinkTitle":
      U(n, "xlink:title", e);
      break;
    case "xlinkType":
      U(n, "xlink:type", e);
      break;
    case "xmlBase":
      U(n, "xml:base", e);
      break;
    case "xmlLang":
      U(n, "xml:lang", e);
      break;
    case "xmlSpace":
      U(n, "xml:space", e);
      break;
    default:
      if ((!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = yr.get(l) || l, je(l))) {
        switch (typeof e) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            var i = l.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") return;
        }
        n.push(" ", l, '="', T(e), '"');
      }
  }
}
function Q(n, l, e) {
  if (l != null) {
    if (e != null) throw Error(d(60));
    if (typeof l != "object" || !("__html" in l))
      throw Error(d(61));
    l = l.__html, l != null && n.push("" + l);
  }
}
function Fr(n) {
  var l = "";
  return yt.Children.forEach(n, function(e) {
    e != null && (l += e);
  }), l;
}
function Dt(n, l) {
  if ((n.instructions & 16) === 0) {
    n.instructions |= 16;
    var e = l.preamble, i = l.bootstrapChunks;
    (e.htmlChunks || e.headChunks) && i.length === 0 ? (i.push(l.startInlineScript), Jl(i, n), i.push(
      ">",
      `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`,
      "<\/script>"
    )) : i.unshift(
      l.startInlineScript,
      ">",
      `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`,
      "<\/script>"
    );
  }
}
function Y(n, l) {
  n.push(O("link"));
  for (var e in l)
    if (I.call(l, e)) {
      var i = l[e];
      if (i != null)
        switch (e) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(d(399, "link"));
          default:
            C(n, e, i);
        }
    }
  return n.push("/>"), null;
}
var mi = /(<\/|<)(s)(tyle)/gi;
function pi(n, l, e, i) {
  return "" + l + (e === "s" ? "\\73 " : "\\53 ") + i;
}
function Wn(n, l, e) {
  n.push(O(e));
  for (var i in l)
    if (I.call(l, i)) {
      var t = l[i];
      if (t != null)
        switch (i) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(d(399, e));
          default:
            C(n, i, t);
        }
    }
  return n.push("/>"), null;
}
function qi(n, l) {
  n.push(O("title"));
  var e = null, i = null, t;
  for (t in l)
    if (I.call(l, t)) {
      var r = l[t];
      if (r != null)
        switch (t) {
          case "children":
            e = r;
            break;
          case "dangerouslySetInnerHTML":
            i = r;
            break;
          default:
            C(n, t, r);
        }
    }
  return n.push(">"), l = Array.isArray(e) ? 2 > e.length ? e[0] : null : e, typeof l != "function" && typeof l != "symbol" && l !== null && l !== void 0 && n.push(T("" + l)), Q(n, i, e), n.push(Pn("title")), null;
}
function jl(n, l) {
  n.push(O("script"));
  var e = null, i = null, t;
  for (t in l)
    if (I.call(l, t)) {
      var r = l[t];
      if (r != null)
        switch (t) {
          case "children":
            e = r;
            break;
          case "dangerouslySetInnerHTML":
            i = r;
            break;
          default:
            C(n, t, r);
        }
    }
  return n.push(">"), Q(n, i, e), typeof e == "string" && n.push(("" + e).replace(It, Mt)), n.push(Pn("script")), null;
}
function Oe(n, l, e) {
  n.push(O(e));
  var i = e = null, t;
  for (t in l)
    if (I.call(l, t)) {
      var r = l[t];
      if (r != null)
        switch (t) {
          case "children":
            e = r;
            break;
          case "dangerouslySetInnerHTML":
            i = r;
            break;
          default:
            C(n, t, r);
        }
    }
  return n.push(">"), Q(n, i, e), e;
}
function Yl(n, l, e) {
  n.push(O(e));
  var i = e = null, t;
  for (t in l)
    if (I.call(l, t)) {
      var r = l[t];
      if (r != null)
        switch (t) {
          case "children":
            e = r;
            break;
          case "dangerouslySetInnerHTML":
            i = r;
            break;
          default:
            C(n, t, r);
        }
    }
  return n.push(">"), Q(n, i, e), typeof e == "string" ? (n.push(T(e)), null) : e;
}
var _r = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ji = /* @__PURE__ */ new Map();
function O(n) {
  var l = ji.get(n);
  if (l === void 0) {
    if (!_r.test(n))
      throw Error(d(65, n));
    l = "<" + n, ji.set(n, l);
  }
  return l;
}
function Ar(n, l, e, i, t, r, a, h, u) {
  switch (l) {
    case "div":
    case "span":
    case "svg":
    case "path":
      break;
    case "a":
      n.push(O("a"));
      var f = null, c = null, o;
      for (o in e)
        if (I.call(e, o)) {
          var s = e[o];
          if (s != null)
            switch (o) {
              case "children":
                f = s;
                break;
              case "dangerouslySetInnerHTML":
                c = s;
                break;
              case "href":
                s === "" ? U(n, "href", "") : C(n, o, s);
                break;
              default:
                C(n, o, s);
            }
        }
      if (n.push(">"), Q(n, c, f), typeof f == "string") {
        n.push(T(f));
        var g = null;
      } else g = f;
      return g;
    case "g":
    case "p":
    case "li":
      break;
    case "select":
      n.push(O("select"));
      var E = null, y = null, b;
      for (b in e)
        if (I.call(e, b)) {
          var v = e[b];
          if (v != null)
            switch (b) {
              case "children":
                E = v;
                break;
              case "dangerouslySetInnerHTML":
                y = v;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                C(
                  n,
                  b,
                  v
                );
            }
        }
      return n.push(">"), Q(n, y, E), E;
    case "option":
      var x = h.selectedValue;
      n.push(O("option"));
      var M = null, P = null, R = null, F = null, en;
      for (en in e)
        if (I.call(e, en)) {
          var $ = e[en];
          if ($ != null)
            switch (en) {
              case "children":
                M = $;
                break;
              case "selected":
                R = $;
                break;
              case "dangerouslySetInnerHTML":
                F = $;
                break;
              case "value":
                P = $;
              default:
                C(
                  n,
                  en,
                  $
                );
            }
        }
      if (x != null) {
        var w = P !== null ? "" + P : Fr(M);
        if (ql(x)) {
          for (var tn = 0; tn < x.length; tn++)
            if ("" + x[tn] === w) {
              n.push(' selected=""');
              break;
            }
        } else
          "" + x === w && n.push(' selected=""');
      } else R && n.push(' selected=""');
      return n.push(">"), Q(n, F, M), M;
    case "textarea":
      n.push(O("textarea"));
      var A = null, B = null, H = null, S;
      for (S in e)
        if (I.call(e, S)) {
          var hn = e[S];
          if (hn != null)
            switch (S) {
              case "children":
                H = hn;
                break;
              case "value":
                A = hn;
                break;
              case "defaultValue":
                B = hn;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(d(91));
              default:
                C(
                  n,
                  S,
                  hn
                );
            }
        }
      if (A === null && B !== null && (A = B), n.push(">"), H != null) {
        if (A != null) throw Error(d(92));
        if (ql(H)) {
          if (1 < H.length)
            throw Error(d(93));
          A = "" + H[0];
        }
        A = "" + H;
      }
      return typeof A == "string" && A[0] === `
` && n.push(`
`), A !== null && n.push(T("" + A)), null;
    case "input":
      n.push(O("input"));
      var Il = null, Qn = null, Ml = null, Pl = null, p = null, cn = null, nn = null, ln = null, on = null, sn;
      for (sn in e)
        if (I.call(e, sn)) {
          var k = e[sn];
          if (k != null)
            switch (sn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(399, "input"));
              case "name":
                Il = k;
                break;
              case "formAction":
                Qn = k;
                break;
              case "formEncType":
                Ml = k;
                break;
              case "formMethod":
                Pl = k;
                break;
              case "formTarget":
                p = k;
                break;
              case "defaultChecked":
                on = k;
                break;
              case "defaultValue":
                nn = k;
                break;
              case "checked":
                ln = k;
                break;
              case "value":
                cn = k;
                break;
              default:
                C(
                  n,
                  sn,
                  k
                );
            }
        }
      var xn = Ki(
        n,
        i,
        t,
        Qn,
        Ml,
        Pl,
        p,
        Il
      );
      return ln !== null ? Be(n, "checked", ln) : on !== null && Be(n, "checked", on), cn !== null ? C(n, "value", cn) : nn !== null && C(n, "value", nn), n.push("/>"), xn?.forEach(Se, n), null;
    case "button":
      n.push(O("button"));
      var Vn = null, ci = null, oi = null, si = null, di = null, gi = null, vi = null, Kn;
      for (Kn in e)
        if (I.call(e, Kn)) {
          var rn = e[Kn];
          if (rn != null)
            switch (Kn) {
              case "children":
                Vn = rn;
                break;
              case "dangerouslySetInnerHTML":
                ci = rn;
                break;
              case "name":
                oi = rn;
                break;
              case "formAction":
                si = rn;
                break;
              case "formEncType":
                di = rn;
                break;
              case "formMethod":
                gi = rn;
                break;
              case "formTarget":
                vi = rn;
                break;
              default:
                C(
                  n,
                  Kn,
                  rn
                );
            }
        }
      var bi = Ki(
        n,
        i,
        t,
        si,
        di,
        gi,
        vi,
        oi
      );
      if (n.push(">"), bi?.forEach(Se, n), Q(n, ci, Vn), typeof Vn == "string") {
        n.push(T(Vn));
        var yi = null;
      } else yi = Vn;
      return yi;
    case "form":
      n.push(O("form"));
      var mn = null, Ti = null, Rn = null, pn = null, qn = null, jn = null, $n;
      for ($n in e)
        if (I.call(e, $n)) {
          var dn = e[$n];
          if (dn != null)
            switch ($n) {
              case "children":
                mn = dn;
                break;
              case "dangerouslySetInnerHTML":
                Ti = dn;
                break;
              case "action":
                Rn = dn;
                break;
              case "encType":
                pn = dn;
                break;
              case "method":
                qn = dn;
                break;
              case "target":
                jn = dn;
                break;
              default:
                C(
                  n,
                  $n,
                  dn
                );
            }
        }
      var be = null, ye = null;
      if (typeof Rn == "function") {
        var wn = Lt(
          i,
          Rn
        );
        wn !== null ? (Rn = wn.action || "", pn = wn.encType, qn = wn.method, jn = wn.target, be = wn.data, ye = wn.name) : (n.push(
          " ",
          "action",
          '="',
          Ot,
          '"'
        ), jn = qn = pn = Rn = null, Dt(i, t));
      }
      if (Rn != null && C(n, "action", Rn), pn != null && C(n, "encType", pn), qn != null && C(n, "method", qn), jn != null && C(n, "target", jn), n.push(">"), ye !== null && (n.push('<input type="hidden"'), U(n, "name", ye), n.push("/>"), be?.forEach(Se, n)), Q(n, Ti, mn), typeof mn == "string") {
        n.push(T(mn));
        var Ei = null;
      } else Ei = mn;
      return Ei;
    case "menuitem":
      n.push(O("menuitem"));
      for (var Sl in e)
        if (I.call(e, Sl)) {
          var xi = e[Sl];
          if (xi != null)
            switch (Sl) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(400));
              default:
                C(
                  n,
                  Sl,
                  xi
                );
            }
        }
      return n.push(">"), null;
    case "object":
      n.push(O("object"));
      var nl = null, Ri = null, ll;
      for (ll in e)
        if (I.call(e, ll)) {
          var el = e[ll];
          if (el != null)
            switch (ll) {
              case "children":
                nl = el;
                break;
              case "dangerouslySetInnerHTML":
                Ri = el;
                break;
              case "data":
                var wi = gl("" + el);
                if (wi === "") break;
                n.push(
                  " ",
                  "data",
                  '="',
                  T(wi),
                  '"'
                );
                break;
              default:
                C(
                  n,
                  ll,
                  el
                );
            }
        }
      if (n.push(">"), Q(n, Ri, nl), typeof nl == "string") {
        n.push(T(nl));
        var Ci = null;
      } else Ci = nl;
      return Ci;
    case "title":
      var qt = h.tagScope & 1, jt = h.tagScope & 4;
      if (h.insertionMode === 4 || qt || e.itemProp != null)
        var Te = qi(
          n,
          e
        );
      else
        jt ? Te = null : (qi(t.hoistableChunks, e), Te = void 0);
      return Te;
    case "link":
      var $t = h.tagScope & 1, nr = h.tagScope & 4, lr = e.rel, gn = e.href, Ol = e.precedence;
      if (h.insertionMode === 4 || $t || e.itemProp != null || typeof lr != "string" || typeof gn != "string" || gn === "") {
        Y(n, e);
        var il = null;
      } else if (e.rel === "stylesheet")
        if (typeof Ol != "string" || e.disabled != null || e.onLoad || e.onError)
          il = Y(
            n,
            e
          );
        else {
          var kn = t.styles.get(Ol), kl = i.styleResources.hasOwnProperty(gn) ? i.styleResources[gn] : void 0;
          if (kl !== null) {
            i.styleResources[gn] = null, kn || (kn = {
              precedence: T(Ol),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, t.styles.set(Ol, kn));
            var Ll = {
              state: 0,
              props: J({}, e, {
                "data-precedence": e.precedence,
                precedence: null
              })
            };
            if (kl) {
              kl.length === 2 && vl(Ll.props, kl);
              var Ee = t.preloads.stylesheets.get(gn);
              Ee && 0 < Ee.length ? Ee.length = 0 : Ll.state = 1;
            }
            kn.sheets.set(gn, Ll), a && a.stylesheets.add(Ll);
          } else if (kn) {
            var Fi = kn.sheets.get(gn);
            Fi && a && a.stylesheets.add(Fi);
          }
          u && n.push("<!-- -->"), il = null;
        }
      else
        e.onLoad || e.onError ? il = Y(
          n,
          e
        ) : (u && n.push("<!-- -->"), il = nr ? null : Y(t.hoistableChunks, e));
      return il;
    case "script":
      var er = h.tagScope & 1, xe = e.async;
      if (typeof e.src != "string" || !e.src || !xe || typeof xe == "function" || typeof xe == "symbol" || e.onLoad || e.onError || h.insertionMode === 4 || er || e.itemProp != null)
        var _i = jl(
          n,
          e
        );
      else {
        var Dl = e.src;
        if (e.type === "module")
          var Nl = i.moduleScriptResources, Ai = t.preloads.moduleScripts;
        else
          Nl = i.scriptResources, Ai = t.preloads.scripts;
        var zl = Nl.hasOwnProperty(Dl) ? Nl[Dl] : void 0;
        if (zl !== null) {
          Nl[Dl] = null;
          var Re = e;
          if (zl) {
            zl.length === 2 && (Re = J({}, e), vl(Re, zl));
            var Ii = Ai.get(Dl);
            Ii && (Ii.length = 0);
          }
          var Mi = [];
          t.scripts.add(Mi), jl(Mi, Re);
        }
        u && n.push("<!-- -->"), _i = null;
      }
      return _i;
    case "style":
      var ir = h.tagScope & 1, Bl = e.precedence, Ln = e.href, tr = e.nonce;
      if (h.insertionMode === 4 || ir || e.itemProp != null || typeof Bl != "string" || typeof Ln != "string" || Ln === "") {
        n.push(O("style"));
        var Dn = null, Pi = null, tl;
        for (tl in e)
          if (I.call(e, tl)) {
            var Hl = e[tl];
            if (Hl != null)
              switch (tl) {
                case "children":
                  Dn = Hl;
                  break;
                case "dangerouslySetInnerHTML":
                  Pi = Hl;
                  break;
                default:
                  C(
                    n,
                    tl,
                    Hl
                  );
              }
          }
        n.push(">");
        var rl = Array.isArray(Dn) ? 2 > Dn.length ? Dn[0] : null : Dn;
        typeof rl != "function" && typeof rl != "symbol" && rl !== null && rl !== void 0 && n.push(("" + rl).replace(mi, pi)), Q(n, Pi, Dn), n.push(Pn("style"));
        var Si = null;
      } else {
        var Cn = t.styles.get(Bl);
        if ((i.styleResources.hasOwnProperty(Ln) ? i.styleResources[Ln] : void 0) !== null) {
          i.styleResources[Ln] = null, Cn || (Cn = {
            precedence: T(Bl),
            rules: [],
            hrefs: [],
            sheets: /* @__PURE__ */ new Map()
          }, t.styles.set(Bl, Cn));
          var Oi = t.nonce.style;
          if (!Oi || Oi === tr) {
            Cn.hrefs.push(T(Ln));
            var ki = Cn.rules, Nn = null, Li = null, Wl;
            for (Wl in e)
              if (I.call(e, Wl)) {
                var we = e[Wl];
                if (we != null)
                  switch (Wl) {
                    case "children":
                      Nn = we;
                      break;
                    case "dangerouslySetInnerHTML":
                      Li = we;
                  }
              }
            var al = Array.isArray(Nn) ? 2 > Nn.length ? Nn[0] : null : Nn;
            typeof al != "function" && typeof al != "symbol" && al !== null && al !== void 0 && ki.push(
              ("" + al).replace(mi, pi)
            ), Q(ki, Li, Nn);
          }
        }
        Cn && a && a.styles.add(Cn), u && n.push("<!-- -->"), Si = void 0;
      }
      return Si;
    case "meta":
      var rr = h.tagScope & 1, ar = h.tagScope & 4;
      if (h.insertionMode === 4 || rr || e.itemProp != null)
        var Di = Wn(
          n,
          e,
          "meta"
        );
      else
        u && n.push("<!-- -->"), Di = ar ? null : typeof e.charSet == "string" ? Wn(t.charsetChunks, e, "meta") : e.name === "viewport" ? Wn(t.viewportChunks, e, "meta") : Wn(t.hoistableChunks, e, "meta");
      return Di;
    case "listing":
    case "pre":
      n.push(O(l));
      var ul = null, fl = null, hl;
      for (hl in e)
        if (I.call(e, hl)) {
          var Ul = e[hl];
          if (Ul != null)
            switch (hl) {
              case "children":
                ul = Ul;
                break;
              case "dangerouslySetInnerHTML":
                fl = Ul;
                break;
              default:
                C(
                  n,
                  hl,
                  Ul
                );
            }
        }
      if (n.push(">"), fl != null) {
        if (ul != null) throw Error(d(60));
        if (typeof fl != "object" || !("__html" in fl))
          throw Error(d(61));
        var Fn = fl.__html;
        Fn != null && (typeof Fn == "string" && 0 < Fn.length && Fn[0] === `
` ? n.push(`
`, Fn) : n.push("" + Fn));
      }
      return typeof ul == "string" && ul[0] === `
` && n.push(`
`), ul;
    case "img":
      var ur = h.tagScope & 3, W = e.src, D = e.srcSet;
      if (!(e.loading === "lazy" || !W && !D || typeof W != "string" && W != null || typeof D != "string" && D != null || e.fetchPriority === "low" || ur) && (typeof W != "string" || W[4] !== ":" || W[0] !== "d" && W[0] !== "D" || W[1] !== "a" && W[1] !== "A" || W[2] !== "t" && W[2] !== "T" || W[3] !== "a" && W[3] !== "A") && (typeof D != "string" || D[4] !== ":" || D[0] !== "d" && D[0] !== "D" || D[1] !== "a" && D[1] !== "A" || D[2] !== "t" && D[2] !== "T" || D[3] !== "a" && D[3] !== "A")) {
        a !== null && h.tagScope & 64 && (a.suspenseyImages = !0);
        var Ni = typeof e.sizes == "string" ? e.sizes : void 0, zn = D ? D + `
` + (Ni || "") : W, Ce = t.preloads.images, _n = Ce.get(zn);
        if (_n)
          (e.fetchPriority === "high" || 10 > t.highImagePreloads.size) && (Ce.delete(zn), t.highImagePreloads.add(_n));
        else if (!i.imageResources.hasOwnProperty(zn)) {
          i.imageResources[zn] = K;
          var Fe = e.crossOrigin, zi = typeof Fe == "string" ? Fe === "use-credentials" ? Fe : "" : void 0, An = t.headers, _e;
          An && 0 < An.remainingCapacity && typeof e.srcSet != "string" && (e.fetchPriority === "high" || 500 > An.highImagePreloads.length) && (_e = ne(W, "image", {
            imageSrcSet: e.srcSet,
            imageSizes: e.sizes,
            crossOrigin: zi,
            integrity: e.integrity,
            nonce: e.nonce,
            type: e.type,
            fetchPriority: e.fetchPriority,
            referrerPolicy: e.refererPolicy
          }), 0 <= (An.remainingCapacity -= _e.length + 2)) ? (t.resets.image[zn] = K, An.highImagePreloads && (An.highImagePreloads += ", "), An.highImagePreloads += _e) : (_n = [], Y(_n, {
            rel: "preload",
            as: "image",
            href: D ? void 0 : W,
            imageSrcSet: D,
            imageSizes: Ni,
            crossOrigin: zi,
            integrity: e.integrity,
            type: e.type,
            fetchPriority: e.fetchPriority,
            referrerPolicy: e.referrerPolicy
          }), e.fetchPriority === "high" || 10 > t.highImagePreloads.size ? t.highImagePreloads.add(_n) : (t.bulkPreloads.add(_n), Ce.set(zn, _n)));
        }
      }
      return Wn(n, e, "img");
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
      return Wn(n, e, l);
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
      if (2 > h.insertionMode) {
        var Ae = r || t.preamble;
        if (Ae.headChunks)
          throw Error(d(545, "`<head>`"));
        r !== null && n.push("<!--head-->"), Ae.headChunks = [];
        var Bi = Oe(
          Ae.headChunks,
          e,
          "head"
        );
      } else
        Bi = Yl(
          n,
          e,
          "head"
        );
      return Bi;
    case "body":
      if (2 > h.insertionMode) {
        var Ie = r || t.preamble;
        if (Ie.bodyChunks)
          throw Error(d(545, "`<body>`"));
        r !== null && n.push("<!--body-->"), Ie.bodyChunks = [];
        var Hi = Oe(
          Ie.bodyChunks,
          e,
          "body"
        );
      } else
        Hi = Yl(
          n,
          e,
          "body"
        );
      return Hi;
    case "html":
      if (h.insertionMode === 0) {
        var Me = r || t.preamble;
        if (Me.htmlChunks)
          throw Error(d(545, "`<html>`"));
        r !== null && n.push("<!--html-->"), Me.htmlChunks = [""];
        var Wi = Oe(
          Me.htmlChunks,
          e,
          "html"
        );
      } else
        Wi = Yl(
          n,
          e,
          "html"
        );
      return Wi;
    default:
      if (l.indexOf("-") !== -1) {
        n.push(O(l));
        var Pe = null, Ui = null, Bn;
        for (Bn in e)
          if (I.call(e, Bn)) {
            var q = e[Bn];
            if (q != null) {
              var Yi = Bn;
              switch (Bn) {
                case "children":
                  Pe = q;
                  break;
                case "dangerouslySetInnerHTML":
                  Ui = q;
                  break;
                case "style":
                  St(n, q);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "ref":
                  break;
                case "className":
                  Yi = "class";
                default:
                  if (je(Bn) && typeof q != "function" && typeof q != "symbol" && q !== !1) {
                    if (q === !0) q = "";
                    else if (typeof q == "object") continue;
                    n.push(
                      " ",
                      Yi,
                      '="',
                      T(q),
                      '"'
                    );
                  }
              }
            }
          }
        return n.push(">"), Q(n, Ui, Pe), Pe;
      }
  }
  return Yl(n, e, l);
}
var $i = /* @__PURE__ */ new Map();
function Pn(n) {
  var l = $i.get(n);
  return l === void 0 && (l = "</" + n + ">", $i.set(n, l)), l;
}
function nt(n, l) {
  n = n.preamble, n.htmlChunks === null && l.htmlChunks && (n.htmlChunks = l.htmlChunks), n.headChunks === null && l.headChunks && (n.headChunks = l.headChunks), n.bodyChunks === null && l.bodyChunks && (n.bodyChunks = l.bodyChunks);
}
function Nt(n, l) {
  l = l.bootstrapChunks;
  for (var e = 0; e < l.length - 1; e++)
    n.push(l[e]);
  return e < l.length ? (e = l[e], l.length = 0, n.push(e)) : !0;
}
function lt(n, l, e) {
  if (n.push('<!--$?--><template id="'), e === null) throw Error(d(395));
  return n.push(l.boundaryPrefix), l = e.toString(16), n.push(l), n.push('"></template>');
}
function Ir(n, l, e, i) {
  switch (e.insertionMode) {
    case 0:
    case 1:
    case 3:
    case 2:
      return n.push('<div hidden id="'), n.push(l.segmentPrefix), l = i.toString(16), n.push(l), n.push('">');
    case 4:
      return n.push('<svg aria-hidden="true" style="display:none" id="'), n.push(l.segmentPrefix), l = i.toString(16), n.push(l), n.push('">');
    case 5:
      return n.push('<math aria-hidden="true" style="display:none" id="'), n.push(l.segmentPrefix), l = i.toString(16), n.push(l), n.push('">');
    case 6:
      return n.push('<table hidden id="'), n.push(l.segmentPrefix), l = i.toString(16), n.push(l), n.push('">');
    case 7:
      return n.push('<table hidden><tbody id="'), n.push(l.segmentPrefix), l = i.toString(16), n.push(l), n.push('">');
    case 8:
      return n.push('<table hidden><tr id="'), n.push(l.segmentPrefix), l = i.toString(16), n.push(l), n.push('">');
    case 9:
      return n.push('<table hidden><colgroup id="'), n.push(l.segmentPrefix), l = i.toString(16), n.push(l), n.push('">');
    default:
      throw Error(d(397));
  }
}
function Mr(n, l) {
  switch (l.insertionMode) {
    case 0:
    case 1:
    case 3:
    case 2:
      return n.push("</div>");
    case 4:
      return n.push("</svg>");
    case 5:
      return n.push("</math>");
    case 6:
      return n.push("</table>");
    case 7:
      return n.push("</tbody></table>");
    case 8:
      return n.push("</tr></table>");
    case 9:
      return n.push("</colgroup></table>");
    default:
      throw Error(d(397));
  }
}
var Pr = /[<\u2028\u2029]/g;
function Sr(n) {
  return JSON.stringify(n).replace(
    Pr,
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
var Or = /[&><\u2028\u2029]/g;
function sl(n) {
  return JSON.stringify(n).replace(
    Or,
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
var $l = !1, He = !0;
function kr(n) {
  var l = n.rules, e = n.hrefs, i = 0;
  if (e.length) {
    for (this.push(Xn.startInlineStyle), this.push(' media="not all" data-precedence="'), this.push(n.precedence), this.push('" data-href="'); i < e.length - 1; i++)
      this.push(e[i]), this.push(" ");
    for (this.push(e[i]), this.push('">'), i = 0; i < l.length; i++) this.push(l[i]);
    He = this.push("</style>"), $l = !0, l.length = 0, e.length = 0;
  }
}
function Lr(n) {
  return n.state !== 2 ? $l = !0 : !1;
}
function zt(n, l, e) {
  return $l = !1, He = !0, Xn = e, l.styles.forEach(kr, n), Xn = null, l.stylesheets.forEach(Lr), $l && (e.stylesToHoist = !0), He;
}
function j(n) {
  for (var l = 0; l < n.length; l++) this.push(n[l]);
  n.length = 0;
}
var bn = [];
function Dr(n) {
  Y(bn, n.props);
  for (var l = 0; l < bn.length; l++)
    this.push(bn[l]);
  bn.length = 0, n.state = 2;
}
function Nr(n) {
  var l = 0 < n.sheets.size;
  n.sheets.forEach(Dr, this), n.sheets.clear();
  var e = n.rules, i = n.hrefs;
  if (!l || i.length) {
    if (this.push(Xn.startInlineStyle), this.push(' data-precedence="'), this.push(n.precedence), n = 0, i.length) {
      for (this.push('" data-href="'); n < i.length - 1; n++)
        this.push(i[n]), this.push(" ");
      this.push(i[n]);
    }
    for (this.push('">'), n = 0; n < e.length; n++)
      this.push(e[n]);
    this.push("</style>"), e.length = 0, i.length = 0;
  }
}
function zr(n) {
  if (n.state === 0) {
    n.state = 1;
    var l = n.props;
    for (Y(bn, {
      rel: "preload",
      as: "style",
      href: n.props.href,
      crossOrigin: l.crossOrigin,
      fetchPriority: l.fetchPriority,
      integrity: l.integrity,
      media: l.media,
      hrefLang: l.hrefLang,
      referrerPolicy: l.referrerPolicy
    }), n = 0; n < bn.length; n++)
      this.push(bn[n]);
    bn.length = 0;
  }
}
function Br(n) {
  n.sheets.forEach(zr, this), n.sheets.clear();
}
function Jl(n, l) {
  (l.instructions & 32) === 0 && (l.instructions |= 32, n.push(
    ' id="',
    T("_" + l.idPrefix + "R_"),
    '"'
  ));
}
function Hr(n, l) {
  n.push("[");
  var e = "[";
  l.stylesheets.forEach(function(i) {
    if (i.state !== 2)
      if (i.state === 3)
        n.push(e), i = sl(
          "" + i.props.href
        ), n.push(i), n.push("]"), e = ",[";
      else {
        n.push(e);
        var t = i.props["data-precedence"], r = i.props, a = gl("" + i.props.href);
        a = sl(a), n.push(a), t = "" + t, n.push(","), t = sl(t), n.push(t);
        for (var h in r)
          if (I.call(r, h) && (t = r[h], t != null))
            switch (h) {
              case "href":
              case "rel":
              case "precedence":
              case "data-precedence":
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(399, "link"));
              default:
                Wr(
                  n,
                  h,
                  t
                );
            }
        n.push("]"), e = ",[", i.state = 3;
      }
  }), n.push("]");
}
function Wr(n, l, e) {
  var i = l.toLowerCase();
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
      i = "class", l = "" + e;
      break;
    case "hidden":
      if (e === !1) return;
      l = "";
      break;
    case "src":
    case "href":
      e = gl(e), l = "" + e;
      break;
    default:
      if (2 < l.length && (l[0] === "o" || l[0] === "O") && (l[1] === "n" || l[1] === "N") || !je(l))
        return;
      l = "" + e;
  }
  n.push(","), i = sl(i), n.push(i), n.push(","), i = sl(l), n.push(i);
}
function We() {
  return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set(), suspenseyImages: !1 };
}
function Ur(n) {
  var l = z || null;
  if (l) {
    var e = l.resumableState, i = l.renderState;
    if (typeof n == "string" && n) {
      if (!e.dnsResources.hasOwnProperty(n)) {
        e.dnsResources[n] = null, e = i.headers;
        var t, r;
        (r = e && 0 < e.remainingCapacity) && (r = (t = "<" + ("" + n).replace(
          $e,
          ni
        ) + ">; rel=dns-prefetch", 0 <= (e.remainingCapacity -= t.length + 2))), r ? (i.resets.dns[n] = null, e.preconnects && (e.preconnects += ", "), e.preconnects += t) : (t = [], Y(t, { href: n, rel: "dns-prefetch" }), i.preconnects.add(t));
      }
      On(l);
    }
  } else un.D(n);
}
function Yr(n, l) {
  var e = z || null;
  if (e) {
    var i = e.resumableState, t = e.renderState;
    if (typeof n == "string" && n) {
      var r = l === "use-credentials" ? "credentials" : typeof l == "string" ? "anonymous" : "default";
      if (!i.connectResources[r].hasOwnProperty(n)) {
        i.connectResources[r][n] = null, i = t.headers;
        var a, h;
        if (h = i && 0 < i.remainingCapacity) {
          if (h = "<" + ("" + n).replace(
            $e,
            ni
          ) + ">; rel=preconnect", typeof l == "string") {
            var u = ("" + l).replace(
              Ue,
              Ye
            );
            h += '; crossorigin="' + u + '"';
          }
          h = (a = h, 0 <= (i.remainingCapacity -= a.length + 2));
        }
        h ? (t.resets.connect[r][n] = null, i.preconnects && (i.preconnects += ", "), i.preconnects += a) : (r = [], Y(r, {
          rel: "preconnect",
          href: n,
          crossOrigin: l
        }), t.preconnects.add(r));
      }
      On(e);
    }
  } else un.C(n, l);
}
function Gr(n, l, e) {
  var i = z || null;
  if (i) {
    var t = i.resumableState, r = i.renderState;
    if (l && n) {
      switch (l) {
        case "image":
          if (e)
            var a = e.imageSrcSet, h = e.imageSizes, u = e.fetchPriority;
          var f = a ? a + `
` + (h || "") : n;
          if (t.imageResources.hasOwnProperty(f)) return;
          t.imageResources[f] = K, t = r.headers;
          var c;
          t && 0 < t.remainingCapacity && typeof a != "string" && u === "high" && (c = ne(n, l, e), 0 <= (t.remainingCapacity -= c.length + 2)) ? (r.resets.image[f] = K, t.highImagePreloads && (t.highImagePreloads += ", "), t.highImagePreloads += c) : (t = [], Y(
            t,
            J(
              { rel: "preload", href: a ? void 0 : n, as: l },
              e
            )
          ), u === "high" ? r.highImagePreloads.add(t) : (r.bulkPreloads.add(t), r.preloads.images.set(f, t)));
          break;
        case "style":
          if (t.styleResources.hasOwnProperty(n)) return;
          a = [], Y(
            a,
            J({ rel: "preload", href: n, as: l }, e)
          ), t.styleResources[n] = !e || typeof e.crossOrigin != "string" && typeof e.integrity != "string" ? K : [e.crossOrigin, e.integrity], r.preloads.stylesheets.set(n, a), r.bulkPreloads.add(a);
          break;
        case "script":
          if (t.scriptResources.hasOwnProperty(n)) return;
          a = [], r.preloads.scripts.set(n, a), r.bulkPreloads.add(a), Y(
            a,
            J({ rel: "preload", href: n, as: l }, e)
          ), t.scriptResources[n] = !e || typeof e.crossOrigin != "string" && typeof e.integrity != "string" ? K : [e.crossOrigin, e.integrity];
          break;
        default:
          if (t.unknownResources.hasOwnProperty(l)) {
            if (a = t.unknownResources[l], a.hasOwnProperty(n))
              return;
          } else
            a = {}, t.unknownResources[l] = a;
          a[n] = K, (t = r.headers) && 0 < t.remainingCapacity && l === "font" && (f = ne(n, l, e), 0 <= (t.remainingCapacity -= f.length + 2)) ? (r.resets.font[n] = K, t.fontPreloads && (t.fontPreloads += ", "), t.fontPreloads += f) : (t = [], n = J({ rel: "preload", href: n, as: l }, e), Y(t, n), l) === "font" ? r.fontPreloads.add(t) : r.bulkPreloads.add(t);
      }
      On(i);
    }
  } else un.L(n, l, e);
}
function Xr(n, l) {
  var e = z || null;
  if (e) {
    var i = e.resumableState, t = e.renderState;
    if (n) {
      var r = l && typeof l.as == "string" ? l.as : "script";
      switch (r) {
        case "script":
          if (i.moduleScriptResources.hasOwnProperty(n)) return;
          r = [], i.moduleScriptResources[n] = !l || typeof l.crossOrigin != "string" && typeof l.integrity != "string" ? K : [l.crossOrigin, l.integrity], t.preloads.moduleScripts.set(n, r);
          break;
        default:
          if (i.moduleUnknownResources.hasOwnProperty(r)) {
            var a = i.unknownResources[r];
            if (a.hasOwnProperty(n)) return;
          } else
            a = {}, i.moduleUnknownResources[r] = a;
          r = [], a[n] = K;
      }
      Y(r, J({ rel: "modulepreload", href: n }, l)), t.bulkPreloads.add(r), On(e);
    }
  } else un.m(n, l);
}
function Zr(n, l, e) {
  var i = z || null;
  if (i) {
    var t = i.resumableState, r = i.renderState;
    if (n) {
      l = l || "default";
      var a = r.styles.get(l), h = t.styleResources.hasOwnProperty(n) ? t.styleResources[n] : void 0;
      h !== null && (t.styleResources[n] = null, a || (a = {
        precedence: T(l),
        rules: [],
        hrefs: [],
        sheets: /* @__PURE__ */ new Map()
      }, r.styles.set(l, a)), l = {
        state: 0,
        props: J(
          { rel: "stylesheet", href: n, "data-precedence": l },
          e
        )
      }, h && (h.length === 2 && vl(l.props, h), (r = r.preloads.stylesheets.get(n)) && 0 < r.length ? r.length = 0 : l.state = 1), a.sheets.set(n, l), On(i));
    }
  } else un.S(n, l, e);
}
function Jr(n, l) {
  var e = z || null;
  if (e) {
    var i = e.resumableState, t = e.renderState;
    if (n) {
      var r = i.scriptResources.hasOwnProperty(n) ? i.scriptResources[n] : void 0;
      r !== null && (i.scriptResources[n] = null, l = J({ src: n, async: !0 }, l), r && (r.length === 2 && vl(l, r), n = t.preloads.scripts.get(n)) && (n.length = 0), n = [], t.scripts.add(n), jl(n, l), On(e));
    }
  } else un.X(n, l);
}
function Qr(n, l) {
  var e = z || null;
  if (e) {
    var i = e.resumableState, t = e.renderState;
    if (n) {
      var r = i.moduleScriptResources.hasOwnProperty(
        n
      ) ? i.moduleScriptResources[n] : void 0;
      r !== null && (i.moduleScriptResources[n] = null, l = J({ src: n, type: "module", async: !0 }, l), r && (r.length === 2 && vl(l, r), n = t.preloads.moduleScripts.get(n)) && (n.length = 0), n = [], t.scripts.add(n), jl(n, l), On(e));
    }
  } else un.M(n, l);
}
function vl(n, l) {
  n.crossOrigin == null && (n.crossOrigin = l[0]), n.integrity == null && (n.integrity = l[1]);
}
function ne(n, l, e) {
  n = ("" + n).replace(
    $e,
    ni
  ), l = ("" + l).replace(
    Ue,
    Ye
  ), l = "<" + n + '>; rel=preload; as="' + l + '"';
  for (var i in e)
    I.call(e, i) && (n = e[i], typeof n == "string" && (l += "; " + i.toLowerCase() + '="' + ("" + n).replace(
      Ue,
      Ye
    ) + '"'));
  return l;
}
var $e = /[<>\r\n]/g;
function ni(n) {
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
var Ue = /["';,\r\n]/g;
function Ye(n) {
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
function Vr(n) {
  this.styles.add(n);
}
function Kr(n) {
  this.stylesheets.add(n);
}
function Zn(n, l) {
  l.styles.forEach(Vr, n), l.stylesheets.forEach(Kr, n), l.suspenseyImages && (n.suspenseyImages = !0);
}
function mr(n, l) {
  var e = n.idPrefix, i = [], t = n.bootstrapScriptContent, r = n.bootstrapScripts, a = n.bootstrapModules;
  t !== void 0 && (i.push("<script"), Jl(i, n), i.push(
    ">",
    ("" + t).replace(It, Mt),
    "<\/script>"
  )), t = e + "P:";
  var h = e + "S:";
  e += "B:";
  var u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set(), y = {
    images: /* @__PURE__ */ new Map(),
    stylesheets: /* @__PURE__ */ new Map(),
    scripts: /* @__PURE__ */ new Map(),
    moduleScripts: /* @__PURE__ */ new Map()
  };
  if (r !== void 0)
    for (var b = 0; b < r.length; b++) {
      var v = r[b], x, M = void 0, P = void 0, R = {
        rel: "preload",
        as: "script",
        fetchPriority: "low",
        nonce: void 0
      };
      typeof v == "string" ? R.href = x = v : (R.href = x = v.src, R.integrity = P = typeof v.integrity == "string" ? v.integrity : void 0, R.crossOrigin = M = typeof v == "string" || v.crossOrigin == null ? void 0 : v.crossOrigin === "use-credentials" ? "use-credentials" : ""), v = n;
      var F = x;
      v.scriptResources[F] = null, v.moduleScriptResources[F] = null, v = [], Y(v, R), s.add(v), i.push('<script src="', T(x), '"'), typeof P == "string" && i.push(
        ' integrity="',
        T(P),
        '"'
      ), typeof M == "string" && i.push(
        ' crossorigin="',
        T(M),
        '"'
      ), Jl(i, n), i.push(' async=""><\/script>');
    }
  if (a !== void 0)
    for (r = 0; r < a.length; r++)
      R = a[r], M = x = void 0, P = {
        rel: "modulepreload",
        fetchPriority: "low",
        nonce: void 0
      }, typeof R == "string" ? P.href = b = R : (P.href = b = R.src, P.integrity = M = typeof R.integrity == "string" ? R.integrity : void 0, P.crossOrigin = x = typeof R == "string" || R.crossOrigin == null ? void 0 : R.crossOrigin === "use-credentials" ? "use-credentials" : ""), R = n, v = b, R.scriptResources[v] = null, R.moduleScriptResources[v] = null, R = [], Y(R, P), s.add(R), i.push(
        '<script type="module" src="',
        T(b),
        '"'
      ), typeof M == "string" && i.push(
        ' integrity="',
        T(M),
        '"'
      ), typeof x == "string" && i.push(
        ' crossorigin="',
        T(x),
        '"'
      ), Jl(i, n), i.push(' async=""><\/script>');
  return {
    placeholderPrefix: t,
    segmentPrefix: h,
    boundaryPrefix: e,
    startInlineScript: "<script",
    startInlineStyle: "<style",
    preamble: { htmlChunks: null, headChunks: null, bodyChunks: null },
    externalRuntimeScript: null,
    bootstrapChunks: i,
    importMapChunks: [],
    onHeaders: void 0,
    headers: null,
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
    preconnects: u,
    fontPreloads: f,
    highImagePreloads: c,
    styles: o,
    bootstrapScripts: s,
    scripts: g,
    bulkPreloads: E,
    preloads: y,
    nonce: { script: void 0, style: void 0 },
    stylesToHoist: !1,
    generateStaticMarkup: l
  };
}
function et(n, l, e, i) {
  return e.generateStaticMarkup ? (n.push(T(l)), !1) : (l === "" ? n = i : (i && n.push("<!-- -->"), n.push(T(l)), n = !0), n);
}
function dl(n, l, e, i) {
  l.generateStaticMarkup || e && i && n.push("<!-- -->");
}
var pr = Function.prototype.bind, qr = /* @__PURE__ */ Symbol.for("react.client.reference");
function le(n) {
  if (n == null) return null;
  if (typeof n == "function")
    return n.$$typeof === qr ? null : n.displayName || n.name || null;
  if (typeof n == "string") return n;
  switch (n) {
    case xt:
      return "Fragment";
    case wt:
      return "Profiler";
    case Rt:
      return "StrictMode";
    case ce:
      return "Suspense";
    case pe:
      return "SuspenseList";
    case Ft:
      return "Activity";
  }
  if (typeof n == "object")
    switch (n.$$typeof) {
      case Et:
        return "Portal";
      case he:
        return n.displayName || "Context";
      case Ct:
        return (n._context.displayName || "Context") + ".Consumer";
      case me:
        var l = n.render;
        return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case qe:
        return l = n.displayName || null, l !== null ? l : le(n.type) || "Memo";
      case oe:
        l = n._payload, n = n._init;
        try {
          return le(n(l));
        } catch {
        }
    }
  return null;
}
var it = {}, In = null;
function se(n, l) {
  if (n !== l) {
    n.context._currentValue2 = n.parentValue, n = n.parent;
    var e = l.parent;
    if (n === null) {
      if (e !== null) throw Error(d(401));
    } else {
      if (e === null) throw Error(d(401));
      se(n, e);
    }
    l.context._currentValue2 = l.value;
  }
}
function Bt(n) {
  n.context._currentValue2 = n.parentValue, n = n.parent, n !== null && Bt(n);
}
function Ht(n) {
  var l = n.parent;
  l !== null && Ht(l), n.context._currentValue2 = n.value;
}
function Wt(n, l) {
  if (n.context._currentValue2 = n.parentValue, n = n.parent, n === null) throw Error(d(402));
  n.depth === l.depth ? se(n, l) : Wt(n, l);
}
function Ut(n, l) {
  var e = l.parent;
  if (e === null) throw Error(d(402));
  n.depth === e.depth ? se(n, e) : Ut(n, e), l.context._currentValue2 = l.value;
}
function vn(n) {
  var l = In;
  l !== n && (l === null ? Ht(n) : n === null ? Bt(l) : l.depth === n.depth ? se(l, n) : l.depth > n.depth ? Wt(l, n) : Ut(l, n), In = n);
}
var tt = {
  enqueueSetState: function(n, l) {
    n = n._reactInternals, n.queue !== null && n.queue.push(l);
  },
  enqueueReplaceState: function(n, l) {
    n = n._reactInternals, n.replace = !0, n.queue = [l];
  },
  enqueueForceUpdate: function() {
  }
}, jr = { id: 1, overflow: "" };
function Mn(n, l, e) {
  var i = n.id;
  n = n.overflow;
  var t = 32 - Ql(i) - 1;
  i &= ~(1 << t), e += 1;
  var r = 32 - Ql(l) + t;
  if (30 < r) {
    var a = t - t % 5;
    return r = (i & (1 << a) - 1).toString(32), i >>= a, t -= a, {
      id: 1 << 32 - Ql(l) + t | e << t | i,
      overflow: r + n
    };
  }
  return {
    id: 1 << r | e << t | i,
    overflow: n
  };
}
var Ql = Math.clz32 ? Math.clz32 : la, $r = Math.log, na = Math.LN2;
function la(n) {
  return n >>>= 0, n === 0 ? 32 : 31 - ($r(n) / na | 0) | 0;
}
function Z() {
}
var V = Error(d(460));
function ea(n, l, e) {
  switch (e = n[e], e === void 0 ? n.push(l) : e !== l && (l.then(Z, Z), l = e), l.status) {
    case "fulfilled":
      return l.value;
    case "rejected":
      throw l.reason;
    default:
      switch (typeof l.status == "string" ? l.then(Z, Z) : (n = l, n.status = "pending", n.then(
        function(i) {
          if (l.status === "pending") {
            var t = l;
            t.status = "fulfilled", t.value = i;
          }
        },
        function(i) {
          if (l.status === "pending") {
            var t = l;
            t.status = "rejected", t.reason = i;
          }
        }
      )), l.status) {
        case "fulfilled":
          return l.value;
        case "rejected":
          throw l.reason;
      }
      throw Vl = l, V;
  }
}
var Vl = null;
function ee() {
  if (Vl === null) throw Error(d(459));
  var n = Vl;
  return Vl = null, n;
}
function ia(n, l) {
  return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
}
var ta = typeof Object.is == "function" ? Object.is : ia, fn = null, li = null, ei = null, ii = null, Kl = null, _ = null, cl = !1, ie = !1, bl = 0, yl = 0, Tl = -1, te = 0, Gn = null, yn = null, de = 0;
function an() {
  if (fn === null)
    throw Error(d(321));
  return fn;
}
function rt() {
  if (0 < de) throw Error(d(312));
  return { memoizedState: null, queue: null, next: null };
}
function ti() {
  return _ === null ? Kl === null ? (cl = !1, Kl = _ = rt()) : (cl = !0, _ = Kl) : _.next === null ? (cl = !1, _ = _.next = rt()) : (cl = !0, _ = _.next), _;
}
function Yn() {
  var n = Gn;
  return Gn = null, n;
}
function El() {
  ii = ei = li = fn = null, ie = !1, Kl = null, de = 0, _ = yn = null;
}
function Yt(n, l) {
  return typeof l == "function" ? l(n) : l;
}
function at(n, l, e) {
  if (fn = an(), _ = ti(), cl) {
    var i = _.queue;
    if (l = i.dispatch, yn !== null && (e = yn.get(i), e !== void 0)) {
      yn.delete(i), i = _.memoizedState;
      do
        i = n(i, e.action), e = e.next;
      while (e !== null);
      return _.memoizedState = i, [i, l];
    }
    return [_.memoizedState, l];
  }
  return n = n === Yt ? typeof l == "function" ? l() : l : e !== void 0 ? e(l) : l, _.memoizedState = n, n = _.queue = { last: null, dispatch: null }, n = n.dispatch = ra.bind(
    null,
    fn,
    n
  ), [_.memoizedState, n];
}
function ut(n, l) {
  if (fn = an(), _ = ti(), l = l === void 0 ? null : l, _ !== null) {
    var e = _.memoizedState;
    if (e !== null && l !== null) {
      var i = e[1];
      n: if (i === null) i = !1;
      else {
        for (var t = 0; t < i.length && t < l.length; t++)
          if (!ta(l[t], i[t])) {
            i = !1;
            break n;
          }
        i = !0;
      }
      if (i) return e[0];
    }
  }
  return n = n(), _.memoizedState = [n, l], n;
}
function ra(n, l, e) {
  if (25 <= de) throw Error(d(301));
  if (n === fn)
    if (ie = !0, n = { action: e, next: null }, yn === null && (yn = /* @__PURE__ */ new Map()), e = yn.get(l), e === void 0)
      yn.set(l, n);
    else {
      for (l = e; l.next !== null; ) l = l.next;
      l.next = n;
    }
}
function aa() {
  throw Error(d(440));
}
function ua() {
  throw Error(d(394));
}
function fa() {
  throw Error(d(479));
}
function ft(n, l, e) {
  an();
  var i = yl++, t = ei;
  if (typeof n.$$FORM_ACTION == "function") {
    var r = null, a = ii;
    t = t.formState;
    var h = n.$$IS_SIGNATURE_EQUAL;
    if (t !== null && typeof h == "function") {
      var u = t[1];
      h.call(n, t[2], t[3]) && (r = e !== void 0 ? "p" + e : "k" + Xi(
        JSON.stringify([a, null, i]),
        0
      ), u === r && (Tl = i, l = t[0]));
    }
    var f = n.bind(null, l);
    return n = function(o) {
      f(o);
    }, typeof f.$$FORM_ACTION == "function" && (n.$$FORM_ACTION = function(o) {
      o = f.$$FORM_ACTION(o), e !== void 0 && (e += "", o.action = e);
      var s = o.data;
      return s && (r === null && (r = e !== void 0 ? "p" + e : "k" + Xi(
        JSON.stringify([
          a,
          null,
          i
        ]),
        0
      )), s.append("$ACTION_KEY", r)), o;
    }), [l, n, !1];
  }
  var c = n.bind(null, l);
  return [
    l,
    function(o) {
      c(o);
    },
    !1
  ];
}
function Gt(n) {
  var l = te;
  return te += 1, Gn === null && (Gn = []), ea(Gn, n, l);
}
function ha() {
  throw Error(d(393));
}
var ht = {
  readContext: function(n) {
    return n._currentValue2;
  },
  use: function(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return Gt(n);
      if (n.$$typeof === he)
        return n._currentValue2;
    }
    throw Error(d(438, String(n)));
  },
  useContext: function(n) {
    return an(), n._currentValue2;
  },
  useMemo: ut,
  useReducer: at,
  useRef: function(n) {
    fn = an(), _ = ti();
    var l = _.memoizedState;
    return l === null ? (n = { current: n }, _.memoizedState = n) : l;
  },
  useState: function(n) {
    return at(Yt, n);
  },
  useInsertionEffect: Z,
  useLayoutEffect: Z,
  useCallback: function(n, l) {
    return ut(function() {
      return n;
    }, l);
  },
  useImperativeHandle: Z,
  useEffect: Z,
  useDebugValue: Z,
  useDeferredValue: function(n, l) {
    return an(), l !== void 0 ? l : n;
  },
  useTransition: function() {
    return an(), [!1, ua];
  },
  useId: function() {
    var n = li.treeContext, l = n.overflow;
    n = n.id, n = (n & ~(1 << 32 - Ql(n) - 1)).toString(32) + l;
    var e = ml;
    if (e === null) throw Error(d(404));
    return l = bl++, n = "_" + e.idPrefix + "R_" + n, 0 < l && (n += "H" + l.toString(32)), n + "_";
  },
  useSyncExternalStore: function(n, l, e) {
    if (e === void 0)
      throw Error(d(407));
    return e();
  },
  useOptimistic: function(n) {
    return an(), [n, fa];
  },
  useActionState: ft,
  useFormState: ft,
  useHostTransitionStatus: function() {
    return an(), wr;
  },
  useMemoCache: function(n) {
    for (var l = Array(n), e = 0; e < n; e++)
      l[e] = dr;
    return l;
  },
  useCacheRefresh: function() {
    return ha;
  },
  useEffectEvent: function() {
    return aa;
  }
}, ml = null, ca = {
  getCacheForType: function() {
    throw Error(d(248));
  },
  cacheSignal: function() {
    throw Error(d(248));
  }
}, ke, ct;
function Un(n) {
  if (ke === void 0)
    try {
      throw Error();
    } catch (e) {
      var l = e.stack.trim().match(/\n( *(at )?)/);
      ke = l && l[1] || "", ct = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
  return `
` + ke + n + ct;
}
var Le = !1;
function Gl(n, l) {
  if (!n || Le) return "";
  Le = !0;
  var e = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var i = {
      DetermineComponentFrameRoot: function() {
        try {
          if (l) {
            var o = function() {
              throw Error();
            };
            if (Object.defineProperty(o.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(o, []);
              } catch (g) {
                var s = g;
              }
              Reflect.construct(n, [], o);
            } else {
              try {
                o.call();
              } catch (g) {
                s = g;
              }
              n.call(o.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (g) {
              s = g;
            }
            (o = n()) && typeof o.catch == "function" && o.catch(function() {
            });
          }
        } catch (g) {
          if (g && s && typeof g.stack == "string")
            return [g.stack, s.stack];
        }
        return [null, null];
      }
    };
    i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var t = Object.getOwnPropertyDescriptor(
      i.DetermineComponentFrameRoot,
      "name"
    );
    t && t.configurable && Object.defineProperty(
      i.DetermineComponentFrameRoot,
      "name",
      { value: "DetermineComponentFrameRoot" }
    );
    var r = i.DetermineComponentFrameRoot(), a = r[0], h = r[1];
    if (a && h) {
      var u = a.split(`
`), f = h.split(`
`);
      for (t = i = 0; i < u.length && !u[i].includes("DetermineComponentFrameRoot"); )
        i++;
      for (; t < f.length && !f[t].includes(
        "DetermineComponentFrameRoot"
      ); )
        t++;
      if (i === u.length || t === f.length)
        for (i = u.length - 1, t = f.length - 1; 1 <= i && 0 <= t && u[i] !== f[t]; )
          t--;
      for (; 1 <= i && 0 <= t; i--, t--)
        if (u[i] !== f[t]) {
          if (i !== 1 || t !== 1)
            do
              if (i--, t--, 0 > t || u[i] !== f[t]) {
                var c = `
` + u[i].replace(" at new ", " at ");
                return n.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", n.displayName)), c;
              }
            while (1 <= i && 0 <= t);
          break;
        }
    }
  } finally {
    Le = !1, Error.prepareStackTrace = e;
  }
  return (e = n ? n.displayName || n.name : "") ? Un(e) : "";
}
function Xt(n) {
  if (typeof n == "string") return Un(n);
  if (typeof n == "function")
    return n.prototype && n.prototype.isReactComponent ? Gl(n, !0) : Gl(n, !1);
  if (typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case me:
        return Gl(n.render, !1);
      case qe:
        return Gl(n.type, !1);
      case oe:
        var l = n, e = l._payload;
        l = l._init;
        try {
          n = l(e);
        } catch {
          return Un("Lazy");
        }
        return Xt(n);
    }
    if (typeof n.name == "string") {
      n: {
        e = n.name, l = n.env;
        var i = n.debugLocation;
        if (i != null && (n = Error.prepareStackTrace, Error.prepareStackTrace = void 0, i = i.stack, Error.prepareStackTrace = n, i.startsWith(`Error: react-stack-top-frame
`) && (i = i.slice(29)), n = i.indexOf(`
`), n !== -1 && (i = i.slice(n + 1)), n = i.indexOf("react_stack_bottom_frame"), n !== -1 && (n = i.lastIndexOf(`
`, n)), n = n !== -1 ? i = i.slice(0, n) : "", i = n.lastIndexOf(`
`), n = i === -1 ? n : n.slice(i + 1), n.indexOf(e) !== -1)) {
          e = `
` + n;
          break n;
        }
        e = Un(
          e + (l ? " [" + l + "]" : "")
        );
      }
      return e;
    }
  }
  switch (n) {
    case pe:
      return Un("SuspenseList");
    case ce:
      return Un("Suspense");
  }
  return "";
}
function Jn(n, l) {
  return (500 < l.byteSize || !1) && l.contentPreamble === null;
}
function oa(n) {
  if (typeof n == "object" && n !== null && typeof n.environmentName == "string") {
    var l = n.environmentName;
    n = [n].slice(0), typeof n[0] == "string" ? n.splice(
      0,
      1,
      "[%s] " + n[0],
      " " + l + " "
    ) : n.splice(0, 0, "[%s]", " " + l + " "), n.unshift(console), l = pr.apply(console.error, n), l();
  } else console.error(n);
  return null;
}
function sa(n, l, e, i, t, r, a, h, u, f, c) {
  var o = /* @__PURE__ */ new Set();
  this.destination = null, this.flushScheduled = !1, this.resumableState = n, this.renderState = l, this.rootFormatContext = e, this.progressiveChunkSize = i === void 0 ? 12800 : i, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = o, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = t === void 0 ? oa : t, this.onPostpone = f === void 0 ? Z : f, this.onAllReady = r === void 0 ? Z : r, this.onShellReady = a === void 0 ? Z : a, this.onShellError = h === void 0 ? Z : h, this.onFatalError = u === void 0 ? Z : u, this.formState = c === void 0 ? null : c;
}
function da(n, l, e, i, t, r, a, h, u, f, c, o) {
  return l = new sa(
    l,
    e,
    i,
    t,
    r,
    a,
    h,
    u,
    f,
    c,
    o
  ), e = Sn(
    l,
    0,
    null,
    i,
    !1,
    !1
  ), e.parentFlushed = !0, n = re(
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
    i,
    null,
    jr,
    null,
    null
  ), xl(n), l.pingedTasks.push(n), l;
}
var z = null;
function Zt(n, l) {
  n.pingedTasks.push(l), n.pingedTasks.length === 1 && (n.flushScheduled = n.destination !== null, Vt(n));
}
function ri(n, l, e, i, t) {
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
    contentState: We(),
    fallbackState: We(),
    contentPreamble: i,
    fallbackPreamble: t,
    trackedContentKeyPath: null,
    trackedFallbackNode: null
  }, l !== null && (l.pendingTasks++, i = l.boundaries, i !== null && (n.allPendingTasks++, e.pendingTasks++, i.push(e)), n = l.inheritedHoistables, n !== null && Zn(e.contentState, n)), e;
}
function re(n, l, e, i, t, r, a, h, u, f, c, o, s, g, E) {
  n.allPendingTasks++, t === null ? n.pendingRootTasks++ : t.pendingTasks++, g !== null && g.pendingTasks++;
  var y = {
    replay: null,
    node: e,
    childIndex: i,
    ping: function() {
      return Zt(n, y);
    },
    blockedBoundary: t,
    blockedSegment: r,
    blockedPreamble: a,
    hoistableState: h,
    abortSet: u,
    keyPath: f,
    formatContext: c,
    context: o,
    treeContext: s,
    row: g,
    componentStack: E,
    thenableState: l
  };
  return u.add(y), y;
}
function Jt(n, l, e, i, t, r, a, h, u, f, c, o, s, g) {
  n.allPendingTasks++, r === null ? n.pendingRootTasks++ : r.pendingTasks++, s !== null && s.pendingTasks++, e.pendingTasks++;
  var E = {
    replay: e,
    node: i,
    childIndex: t,
    ping: function() {
      return Zt(n, E);
    },
    blockedBoundary: r,
    blockedSegment: null,
    blockedPreamble: null,
    hoistableState: a,
    abortSet: h,
    keyPath: u,
    formatContext: f,
    context: c,
    treeContext: o,
    row: s,
    componentStack: g,
    thenableState: l
  };
  return h.add(E), E;
}
function Sn(n, l, e, i, t, r) {
  return {
    status: 0,
    parentFlushed: !1,
    id: -1,
    index: l,
    chunks: [],
    children: [],
    preambleChildren: [],
    parentFormatContext: i,
    boundary: e,
    lastPushedText: t,
    textEmbedded: r
  };
}
function xl(n) {
  var l = n.node;
  typeof l == "object" && l !== null && l.$$typeof === Tt && (n.componentStack = { parent: n.componentStack, type: l.type });
}
function Ge(n) {
  return n === null ? null : { parent: n.parent, type: "Suspense Fallback" };
}
function Tn(n) {
  var l = {};
  return n && Object.defineProperty(l, "componentStack", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      try {
        var e = "", i = n;
        do
          e += Xt(i.type), i = i.parent;
        while (i);
        var t = e;
      } catch (r) {
        t = `
Error generating stack: ` + r.message + `
` + r.stack;
      }
      return Object.defineProperty(l, "componentStack", {
        value: t
      }), t;
    }
  }), l;
}
function G(n, l, e) {
  if (n = n.onError, l = n(l, e), l == null || typeof l == "string") return l;
}
function Rl(n, l) {
  var e = n.onShellError, i = n.onFatalError;
  e(l), i(l), n.destination !== null ? (n.status = 14, n.destination.destroy(l)) : (n.status = 13, n.fatalError = l);
}
function X(n, l) {
  ai(n, l.next, l.hoistables);
}
function ai(n, l, e) {
  for (; l !== null; ) {
    e !== null && (Zn(l.hoistables, e), l.inheritedHoistables = e);
    var i = l.boundaries;
    if (i !== null) {
      l.boundaries = null;
      for (var t = 0; t < i.length; t++) {
        var r = i[t];
        e !== null && Zn(r.contentState, e), En(n, r, null, null);
      }
    }
    if (l.pendingTasks--, 0 < l.pendingTasks) break;
    e = l.hoistables, l = l.next;
  }
}
function Xe(n, l) {
  var e = l.boundaries;
  if (e !== null && l.pendingTasks === e.length) {
    for (var i = !0, t = 0; t < e.length; t++) {
      var r = e[t];
      if (r.pendingTasks !== 1 || r.parentFlushed || Jn(n, r)) {
        i = !1;
        break;
      }
    }
    i && ai(n, l, l.hoistables);
  }
}
function ol(n) {
  var l = {
    pendingTasks: 1,
    boundaries: null,
    hoistables: We(),
    inheritedHoistables: null,
    together: !1,
    next: null
  };
  return n !== null && 0 < n.pendingTasks && (l.pendingTasks++, l.boundaries = [], n.next = l), l;
}
function ot(n, l, e, i, t) {
  var r = l.keyPath, a = l.treeContext, h = l.row;
  l.keyPath = e, e = i.length;
  var u = null;
  if (l.replay !== null) {
    var f = l.replay.slots;
    if (f !== null && typeof f == "object")
      for (var c = 0; c < e; c++) {
        var o = t !== "backwards" && t !== "unstable_legacy-backwards" ? c : e - 1 - c, s = i[o];
        l.row = u = ol(
          u
        ), l.treeContext = Mn(a, e, o);
        var g = f[o];
        typeof g == "number" ? (ge(n, l, g, s, o), delete f[o]) : L(n, l, s, o), --u.pendingTasks === 0 && X(n, u);
      }
    else
      for (f = 0; f < e; f++)
        c = t !== "backwards" && t !== "unstable_legacy-backwards" ? f : e - 1 - f, o = i[c], l.row = u = ol(u), l.treeContext = Mn(a, e, c), L(n, l, o, c), --u.pendingTasks === 0 && X(n, u);
  } else if (t !== "backwards" && t !== "unstable_legacy-backwards")
    for (t = 0; t < e; t++)
      f = i[t], l.row = u = ol(u), l.treeContext = Mn(
        a,
        e,
        t
      ), L(n, l, f, t), --u.pendingTasks === 0 && X(n, u);
  else {
    for (t = l.blockedSegment, f = t.children.length, c = t.chunks.length, o = e - 1; 0 <= o; o--) {
      s = i[o], l.row = u = ol(
        u
      ), l.treeContext = Mn(a, e, o), g = Sn(
        n,
        c,
        null,
        l.formatContext,
        o === 0 ? t.lastPushedText : !0,
        !0
      ), t.children.splice(f, 0, g), l.blockedSegment = g;
      try {
        L(n, l, s, o), dl(
          g.chunks,
          n.renderState,
          g.lastPushedText,
          g.textEmbedded
        ), g.status = 1, --u.pendingTasks === 0 && X(n, u);
      } catch (E) {
        throw g.status = n.status === 12 ? 3 : 4, E;
      }
    }
    l.blockedSegment = t, t.lastPushedText = !1;
  }
  h !== null && u !== null && 0 < u.pendingTasks && (h.pendingTasks++, u.next = h), l.treeContext = a, l.row = h, l.keyPath = r;
}
function st(n, l, e, i, t, r) {
  var a = l.thenableState;
  for (l.thenableState = null, fn = {}, li = l, ei = n, ii = e, yl = bl = 0, Tl = -1, te = 0, Gn = a, n = i(t, r); ie; )
    ie = !1, yl = bl = 0, Tl = -1, te = 0, de += 1, _ = null, n = i(t, r);
  return El(), n;
}
function dt(n, l, e, i, t, r, a) {
  var h = !1;
  if (r !== 0 && n.formState !== null) {
    var u = l.blockedSegment;
    if (u !== null) {
      h = !0, u = u.chunks;
      for (var f = 0; f < r; f++)
        f === a ? u.push("<!--F!-->") : u.push("<!--F-->");
    }
  }
  r = l.keyPath, l.keyPath = e, t ? (e = l.treeContext, l.treeContext = Mn(e, 1, 0), L(n, l, i, -1), l.treeContext = e) : h ? L(n, l, i, -1) : m(n, l, i, -1), l.keyPath = r;
}
function ae(n, l, e, i, t, r) {
  if (typeof i == "function")
    if (i.prototype && i.prototype.isReactComponent) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var h in t)
          h !== "ref" && (a[h] = t[h]);
      }
      var u = i.defaultProps;
      if (u) {
        a === t && (a = J({}, a, t));
        for (var f in u)
          a[f] === void 0 && (a[f] = u[f]);
      }
      t = a, a = it, u = i.contextType, typeof u == "object" && u !== null && (a = u._currentValue2), a = new i(t, a);
      var c = a.state !== void 0 ? a.state : null;
      if (a.updater = tt, a.props = t, a.state = c, u = { queue: [], replace: !1 }, a._reactInternals = u, r = i.contextType, a.context = typeof r == "object" && r !== null ? r._currentValue2 : it, r = i.getDerivedStateFromProps, typeof r == "function" && (r = r(t, c), c = r == null ? c : J({}, c, r), a.state = c), typeof i.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function"))
        if (i = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), i !== a.state && tt.enqueueReplaceState(
          a,
          a.state,
          null
        ), u.queue !== null && 0 < u.queue.length)
          if (i = u.queue, r = u.replace, u.queue = null, u.replace = !1, r && i.length === 1)
            a.state = i[0];
          else {
            for (u = r ? i[0] : a.state, c = !0, r = r ? 1 : 0; r < i.length; r++)
              f = i[r], f = typeof f == "function" ? f.call(a, u, t, void 0) : f, f != null && (c ? (c = !1, u = J({}, u, f)) : J(u, f));
            a.state = u;
          }
        else u.queue = null;
      if (i = a.render(), n.status === 12) throw null;
      t = l.keyPath, l.keyPath = e, m(n, l, i, -1), l.keyPath = t;
    } else {
      if (i = st(n, l, e, i, t, void 0), n.status === 12) throw null;
      dt(
        n,
        l,
        e,
        i,
        bl !== 0,
        yl,
        Tl
      );
    }
  else if (typeof i == "string")
    if (a = l.blockedSegment, a === null)
      a = t.children, u = l.formatContext, c = l.keyPath, l.formatContext = Qi(u, i, t), l.keyPath = e, L(n, l, a, -1), l.formatContext = u, l.keyPath = c;
    else {
      if (c = Ar(
        a.chunks,
        i,
        t,
        n.resumableState,
        n.renderState,
        l.blockedPreamble,
        l.hoistableState,
        l.formatContext,
        a.lastPushedText
      ), a.lastPushedText = !1, u = l.formatContext, r = l.keyPath, l.keyPath = e, (l.formatContext = Qi(u, i, t)).insertionMode === 3) {
        e = Sn(
          n,
          0,
          null,
          l.formatContext,
          !1,
          !1
        ), a.preambleChildren.push(e), l.blockedSegment = e;
        try {
          e.status = 6, L(n, l, c, -1), dl(
            e.chunks,
            n.renderState,
            e.lastPushedText,
            e.textEmbedded
          ), e.status = 1;
        } finally {
          l.blockedSegment = a;
        }
      } else L(n, l, c, -1);
      l.formatContext = u, l.keyPath = r;
      n: {
        switch (l = a.chunks, n = n.resumableState, i) {
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
        l.push(Pn(i));
      }
      a.lastPushedText = !1;
    }
  else {
    switch (i) {
      case sr:
      case Rt:
      case wt:
      case xt:
        i = l.keyPath, l.keyPath = e, m(n, l, t.children, -1), l.keyPath = i;
        return;
      case Ft:
        i = l.blockedSegment, i === null ? t.mode !== "hidden" && (i = l.keyPath, l.keyPath = e, L(n, l, t.children, -1), l.keyPath = i) : t.mode !== "hidden" && (n.renderState.generateStaticMarkup || i.chunks.push("<!--&-->"), i.lastPushedText = !1, a = l.keyPath, l.keyPath = e, L(n, l, t.children, -1), l.keyPath = a, n.renderState.generateStaticMarkup || i.chunks.push("<!--/&-->"), i.lastPushedText = !1);
        return;
      case pe:
        n: {
          if (i = t.children, t = t.revealOrder, t === "forwards" || t === "backwards" || t === "unstable_legacy-backwards") {
            if (ql(i)) {
              ot(n, l, e, i, t);
              break n;
            }
            if ((a = _t(i)) && (a = a.call(i))) {
              if (u = a.next(), !u.done) {
                do
                  u = a.next();
                while (!u.done);
                ot(n, l, e, i, t);
              }
              break n;
            }
          }
          t === "together" ? (t = l.keyPath, a = l.row, u = l.row = ol(null), u.boundaries = [], u.together = !0, l.keyPath = e, m(n, l, i, -1), --u.pendingTasks === 0 && X(n, u), l.keyPath = t, l.row = a, a !== null && 0 < u.pendingTasks && (a.pendingTasks++, u.next = a)) : (t = l.keyPath, l.keyPath = e, m(n, l, i, -1), l.keyPath = t);
        }
        return;
      case gr:
      case or:
        throw Error(d(343));
      case ce:
        n: if (l.replay !== null) {
          i = l.keyPath, a = l.formatContext, u = l.row, l.keyPath = e, l.formatContext = Zl(
            n.resumableState,
            a
          ), l.row = null, e = t.children;
          try {
            L(n, l, e, -1);
          } finally {
            l.keyPath = i, l.formatContext = a, l.row = u;
          }
        } else {
          i = l.keyPath, r = l.formatContext;
          var o = l.row, s = l.blockedBoundary;
          f = l.blockedPreamble;
          var g = l.hoistableState;
          h = l.blockedSegment;
          var E = t.fallback;
          t = t.children;
          var y = /* @__PURE__ */ new Set(), b = ri(
            n,
            l.row,
            y,
            null,
            null
          );
          n.trackedPostpones !== null && (b.trackedContentKeyPath = e);
          var v = Sn(
            n,
            h.chunks.length,
            b,
            l.formatContext,
            !1,
            !1
          );
          h.children.push(v), h.lastPushedText = !1;
          var x = Sn(
            n,
            0,
            null,
            l.formatContext,
            !1,
            !1
          );
          if (x.parentFlushed = !0, n.trackedPostpones !== null) {
            a = l.componentStack, u = [e[0], "Suspense Fallback", e[2]], c = [u[1], u[2], [], null], n.trackedPostpones.workingMap.set(u, c), b.trackedFallbackNode = c, l.blockedSegment = v, l.blockedPreamble = b.fallbackPreamble, l.keyPath = u, l.formatContext = ze(
              n.resumableState,
              r
            ), l.componentStack = Ge(a), v.status = 6;
            try {
              L(n, l, E, -1), dl(
                v.chunks,
                n.renderState,
                v.lastPushedText,
                v.textEmbedded
              ), v.status = 1;
            } catch (M) {
              throw v.status = n.status === 12 ? 3 : 4, M;
            } finally {
              l.blockedSegment = h, l.blockedPreamble = f, l.keyPath = i, l.formatContext = r;
            }
            l = re(
              n,
              null,
              t,
              -1,
              b,
              x,
              b.contentPreamble,
              b.contentState,
              l.abortSet,
              e,
              Zl(
                n.resumableState,
                l.formatContext
              ),
              l.context,
              l.treeContext,
              null,
              a
            ), xl(l), n.pingedTasks.push(l);
          } else {
            l.blockedBoundary = b, l.blockedPreamble = b.contentPreamble, l.hoistableState = b.contentState, l.blockedSegment = x, l.keyPath = e, l.formatContext = Zl(
              n.resumableState,
              r
            ), l.row = null, x.status = 6;
            try {
              if (L(n, l, t, -1), dl(
                x.chunks,
                n.renderState,
                x.lastPushedText,
                x.textEmbedded
              ), x.status = 1, wl(b, x), b.pendingTasks === 0 && b.status === 0) {
                if (b.status = 1, !Jn(n, b)) {
                  o !== null && --o.pendingTasks === 0 && X(n, o), n.pendingRootTasks === 0 && l.blockedPreamble && Al(n);
                  break n;
                }
              } else
                o !== null && o.together && Xe(n, o);
            } catch (M) {
              b.status = 4, n.status === 12 ? (x.status = 3, a = n.fatalError) : (x.status = 4, a = M), u = Tn(l.componentStack), c = G(
                n,
                a,
                u
              ), b.errorDigest = c, ui(n, b);
            } finally {
              l.blockedBoundary = s, l.blockedPreamble = f, l.hoistableState = g, l.blockedSegment = h, l.keyPath = i, l.formatContext = r, l.row = o;
            }
            l = re(
              n,
              null,
              E,
              -1,
              s,
              v,
              b.fallbackPreamble,
              b.fallbackState,
              y,
              [e[0], "Suspense Fallback", e[2]],
              ze(
                n.resumableState,
                l.formatContext
              ),
              l.context,
              l.treeContext,
              l.row,
              Ge(
                l.componentStack
              )
            ), xl(l), n.pingedTasks.push(l);
          }
        }
        return;
    }
    if (typeof i == "object" && i !== null)
      switch (i.$$typeof) {
        case me:
          if ("ref" in t)
            for (E in a = {}, t)
              E !== "ref" && (a[E] = t[E]);
          else a = t;
          i = st(
            n,
            l,
            e,
            i.render,
            a,
            r
          ), dt(
            n,
            l,
            e,
            i,
            bl !== 0,
            yl,
            Tl
          );
          return;
        case qe:
          ae(n, l, e, i.type, t, r);
          return;
        case he:
          if (u = t.children, a = l.keyPath, t = t.value, c = i._currentValue2, i._currentValue2 = t, r = In, In = i = {
            parent: r,
            depth: r === null ? 0 : r.depth + 1,
            context: i,
            parentValue: c,
            value: t
          }, l.context = i, l.keyPath = e, m(n, l, u, -1), n = In, n === null) throw Error(d(403));
          n.context._currentValue2 = n.parentValue, n = In = n.parent, l.context = n, l.keyPath = a;
          return;
        case Ct:
          t = t.children, i = t(i._context._currentValue2), t = l.keyPath, l.keyPath = e, m(n, l, i, -1), l.keyPath = t;
          return;
        case oe:
          if (a = i._init, i = a(i._payload), n.status === 12) throw null;
          ae(n, l, e, i, t, r);
          return;
      }
    throw Error(
      d(130, i == null ? i : typeof i, "")
    );
  }
}
function ge(n, l, e, i, t) {
  var r = l.replay, a = l.blockedBoundary, h = Sn(
    n,
    0,
    null,
    l.formatContext,
    !1,
    !1
  );
  h.id = e, h.parentFlushed = !0;
  try {
    l.replay = null, l.blockedSegment = h, L(n, l, i, t), h.status = 1, a === null ? n.completedRootSegment = h : (wl(a, h), a.parentFlushed && n.partialBoundaries.push(a));
  } finally {
    l.replay = r, l.blockedSegment = null;
  }
}
function m(n, l, e, i) {
  l.replay !== null && typeof l.replay.slots == "number" ? ge(n, l, l.replay.slots, e, i) : (l.node = e, l.childIndex = i, e = l.componentStack, xl(l), Ze(n, l), l.componentStack = e);
}
function Ze(n, l) {
  var e = l.node, i = l.childIndex;
  if (e !== null) {
    if (typeof e == "object") {
      switch (e.$$typeof) {
        case Tt:
          var t = e.type, r = e.key, a = e.props;
          e = a.ref;
          var h = e !== void 0 ? e : null, u = le(t), f = r ?? (i === -1 ? 0 : i);
          if (r = [l.keyPath, u, f], l.replay !== null)
            n: {
              var c = l.replay;
              for (i = c.nodes, e = 0; e < i.length; e++) {
                var o = i[e];
                if (f === o[1]) {
                  if (o.length === 4) {
                    if (u !== null && u !== o[0])
                      throw Error(
                        d(490, o[0], u)
                      );
                    var s = o[2];
                    u = o[3], f = l.node, l.replay = {
                      nodes: s,
                      slots: u,
                      pendingTasks: 1
                    };
                    try {
                      if (ae(n, l, r, t, a, h), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
                        throw Error(d(488));
                      l.replay.pendingTasks--;
                    } catch (F) {
                      if (typeof F == "object" && F !== null && (F === V || typeof F.then == "function"))
                        throw l.node === f ? l.replay = c : i.splice(e, 1), F;
                      l.replay.pendingTasks--, a = Tn(l.componentStack), r = n, n = l.blockedBoundary, t = F, a = G(r, t, a), _l(
                        r,
                        n,
                        s,
                        u,
                        t,
                        a
                      );
                    }
                    l.replay = c;
                  } else {
                    if (t !== ce)
                      throw Error(
                        d(
                          490,
                          "Suspense",
                          le(t) || "Unknown"
                        )
                      );
                    l: {
                      c = void 0, t = o[5], h = o[2], u = o[3], f = o[4] === null ? [] : o[4][2], o = o[4] === null ? null : o[4][3];
                      var g = l.keyPath, E = l.formatContext, y = l.row, b = l.replay, v = l.blockedBoundary, x = l.hoistableState, M = a.children, P = a.fallback, R = /* @__PURE__ */ new Set();
                      a = ri(
                        n,
                        l.row,
                        R,
                        null,
                        null
                      ), a.parentFlushed = !0, a.rootSegmentID = t, l.blockedBoundary = a, l.hoistableState = a.contentState, l.keyPath = r, l.formatContext = Zl(
                        n.resumableState,
                        E
                      ), l.row = null, l.replay = {
                        nodes: h,
                        slots: u,
                        pendingTasks: 1
                      };
                      try {
                        if (L(n, l, M, -1), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
                          throw Error(d(488));
                        if (l.replay.pendingTasks--, a.pendingTasks === 0 && a.status === 0) {
                          a.status = 1, n.completedBoundaries.push(a);
                          break l;
                        }
                      } catch (F) {
                        a.status = 4, s = Tn(l.componentStack), c = G(
                          n,
                          F,
                          s
                        ), a.errorDigest = c, l.replay.pendingTasks--, n.clientRenderedBoundaries.push(a);
                      } finally {
                        l.blockedBoundary = v, l.hoistableState = x, l.replay = b, l.keyPath = g, l.formatContext = E, l.row = y;
                      }
                      s = Jt(
                        n,
                        null,
                        {
                          nodes: f,
                          slots: o,
                          pendingTasks: 0
                        },
                        P,
                        -1,
                        v,
                        a.fallbackState,
                        R,
                        [r[0], "Suspense Fallback", r[2]],
                        ze(
                          n.resumableState,
                          l.formatContext
                        ),
                        l.context,
                        l.treeContext,
                        l.row,
                        Ge(
                          l.componentStack
                        )
                      ), xl(s), n.pingedTasks.push(s);
                    }
                  }
                  i.splice(e, 1);
                  break n;
                }
              }
            }
          else ae(n, l, r, t, a, h);
          return;
        case Et:
          throw Error(d(257));
        case oe:
          if (s = e._init, e = s(e._payload), n.status === 12) throw null;
          m(n, l, e, i);
          return;
      }
      if (ql(e)) {
        Je(n, l, e, i);
        return;
      }
      if ((s = _t(e)) && (s = s.call(e))) {
        if (e = s.next(), !e.done) {
          a = [];
          do
            a.push(e.value), e = s.next();
          while (!e.done);
          Je(n, l, a, i);
        }
        return;
      }
      if (typeof e.then == "function")
        return l.thenableState = null, m(n, l, Gt(e), i);
      if (e.$$typeof === he)
        return m(
          n,
          l,
          e._currentValue2,
          i
        );
      throw i = Object.prototype.toString.call(e), Error(
        d(
          31,
          i === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : i
        )
      );
    }
    typeof e == "string" ? (i = l.blockedSegment, i !== null && (i.lastPushedText = et(
      i.chunks,
      e,
      n.renderState,
      i.lastPushedText
    ))) : (typeof e == "number" || typeof e == "bigint") && (i = l.blockedSegment, i !== null && (i.lastPushedText = et(
      i.chunks,
      "" + e,
      n.renderState,
      i.lastPushedText
    )));
  }
}
function Je(n, l, e, i) {
  var t = l.keyPath;
  if (i !== -1 && (l.keyPath = [l.keyPath, "Fragment", i], l.replay !== null)) {
    for (var r = l.replay, a = r.nodes, h = 0; h < a.length; h++) {
      var u = a[h];
      if (u[1] === i) {
        i = u[2], u = u[3], l.replay = { nodes: i, slots: u, pendingTasks: 1 };
        try {
          if (Je(n, l, e, -1), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
            throw Error(d(488));
          l.replay.pendingTasks--;
        } catch (o) {
          if (typeof o == "object" && o !== null && (o === V || typeof o.then == "function"))
            throw o;
          l.replay.pendingTasks--, e = Tn(l.componentStack);
          var f = l.blockedBoundary, c = o;
          e = G(n, c, e), _l(
            n,
            f,
            i,
            u,
            c,
            e
          );
        }
        l.replay = r, a.splice(h, 1);
        break;
      }
    }
    l.keyPath = t;
    return;
  }
  if (r = l.treeContext, a = e.length, l.replay !== null && (h = l.replay.slots, h !== null && typeof h == "object")) {
    for (i = 0; i < a; i++)
      u = e[i], l.treeContext = Mn(r, a, i), f = h[i], typeof f == "number" ? (ge(n, l, f, u, i), delete h[i]) : L(n, l, u, i);
    l.treeContext = r, l.keyPath = t;
    return;
  }
  for (h = 0; h < a; h++)
    i = e[h], l.treeContext = Mn(r, a, h), L(n, l, i, h);
  l.treeContext = r, l.keyPath = t;
}
function Qt(n, l, e) {
  if (e.status = 5, e.rootSegmentID = n.nextSegmentId++, n = e.trackedContentKeyPath, n === null) throw Error(d(486));
  var i = e.trackedFallbackNode, t = [], r = l.workingMap.get(n);
  return r === void 0 ? (e = [
    n[1],
    n[2],
    t,
    null,
    i,
    e.rootSegmentID
  ], l.workingMap.set(n, e), fe(e, n[0], l), e) : (r[4] = i, r[5] = e.rootSegmentID, r);
}
function Qe(n, l, e, i) {
  i.status = 5;
  var t = e.keyPath, r = e.blockedBoundary;
  if (r === null)
    i.id = n.nextSegmentId++, l.rootSlots = i.id, n.completedRootSegment !== null && (n.completedRootSegment.status = 5);
  else {
    if (r !== null && r.status === 0) {
      var a = Qt(
        n,
        l,
        r
      );
      if (r.trackedContentKeyPath === t && e.childIndex === -1) {
        i.id === -1 && (i.id = i.parentFlushed ? r.rootSegmentID : n.nextSegmentId++), a[3] = i.id;
        return;
      }
    }
    if (i.id === -1 && (i.id = i.parentFlushed && r !== null ? r.rootSegmentID : n.nextSegmentId++), e.childIndex === -1)
      t === null ? l.rootSlots = i.id : (e = l.workingMap.get(t), e === void 0 ? (e = [t[1], t[2], [], i.id], fe(e, t[0], l)) : e[3] = i.id);
    else {
      if (t === null) {
        if (n = l.rootSlots, n === null)
          n = l.rootSlots = {};
        else if (typeof n == "number")
          throw Error(d(491));
      } else if (r = l.workingMap, a = r.get(t), a === void 0)
        n = {}, a = [t[1], t[2], [], n], r.set(t, a), fe(a, t[0], l);
      else if (n = a[3], n === null)
        n = a[3] = {};
      else if (typeof n == "number")
        throw Error(d(491));
      n[e.childIndex] = i.id;
    }
  }
}
function ui(n, l) {
  n = n.trackedPostpones, n !== null && (l = l.trackedContentKeyPath, l !== null && (l = n.workingMap.get(l), l !== void 0 && (l.length = 4, l[2] = [], l[3] = null)));
}
function gt(n, l, e) {
  return Jt(
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
function vt(n, l, e) {
  var i = l.blockedSegment, t = Sn(
    n,
    i.chunks.length,
    null,
    l.formatContext,
    i.lastPushedText,
    !0
  );
  return i.children.push(t), i.lastPushedText = !1, re(
    n,
    e,
    l.node,
    l.childIndex,
    l.blockedBoundary,
    t,
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
function L(n, l, e, i) {
  var t = l.formatContext, r = l.context, a = l.keyPath, h = l.treeContext, u = l.componentStack, f = l.blockedSegment;
  if (f === null) {
    f = l.replay;
    try {
      return m(n, l, e, i);
    } catch (s) {
      if (El(), e = s === V ? ee() : s, n.status !== 12 && typeof e == "object" && e !== null) {
        if (typeof e.then == "function") {
          i = s === V ? Yn() : null, n = gt(n, l, i).ping, e.then(n, n), l.formatContext = t, l.context = r, l.keyPath = a, l.treeContext = h, l.componentStack = u, l.replay = f, vn(r);
          return;
        }
        if (e.message === "Maximum call stack size exceeded") {
          e = s === V ? Yn() : null, e = gt(n, l, e), n.pingedTasks.push(e), l.formatContext = t, l.context = r, l.keyPath = a, l.treeContext = h, l.componentStack = u, l.replay = f, vn(r);
          return;
        }
      }
    }
  } else {
    var c = f.children.length, o = f.chunks.length;
    try {
      return m(n, l, e, i);
    } catch (s) {
      if (El(), f.children.length = c, f.chunks.length = o, e = s === V ? ee() : s, n.status !== 12 && typeof e == "object" && e !== null) {
        if (typeof e.then == "function") {
          f = e, e = s === V ? Yn() : null, n = vt(n, l, e).ping, f.then(n, n), l.formatContext = t, l.context = r, l.keyPath = a, l.treeContext = h, l.componentStack = u, vn(r);
          return;
        }
        if (e.message === "Maximum call stack size exceeded") {
          f = s === V ? Yn() : null, f = vt(n, l, f), n.pingedTasks.push(f), l.formatContext = t, l.context = r, l.keyPath = a, l.treeContext = h, l.componentStack = u, vn(r);
          return;
        }
      }
    }
  }
  throw l.formatContext = t, l.context = r, l.keyPath = a, l.treeContext = h, vn(r), e;
}
function ga(n) {
  var l = n.blockedBoundary, e = n.blockedSegment;
  e !== null && (e.status = 3, En(this, l, n.row, e));
}
function _l(n, l, e, i, t, r) {
  for (var a = 0; a < e.length; a++) {
    var h = e[a];
    if (h.length === 4)
      _l(
        n,
        l,
        h[2],
        h[3],
        t,
        r
      );
    else {
      h = h[5];
      var u = n, f = r, c = ri(
        u,
        null,
        /* @__PURE__ */ new Set(),
        null,
        null
      );
      c.parentFlushed = !0, c.rootSegmentID = h, c.status = 4, c.errorDigest = f, c.parentFlushed && u.clientRenderedBoundaries.push(c);
    }
  }
  if (e.length = 0, i !== null) {
    if (l === null) throw Error(d(487));
    if (l.status !== 4 && (l.status = 4, l.errorDigest = r, l.parentFlushed && n.clientRenderedBoundaries.push(l)), typeof i == "object") for (var o in i) delete i[o];
  }
}
function Ve(n, l, e) {
  var i = n.blockedBoundary, t = n.blockedSegment;
  if (t !== null) {
    if (t.status === 6) return;
    t.status = 3;
  }
  var r = Tn(n.componentStack);
  if (i === null) {
    if (l.status !== 13 && l.status !== 14) {
      if (i = n.replay, i === null) {
        l.trackedPostpones !== null && t !== null ? (i = l.trackedPostpones, G(l, e, r), Qe(l, i, n, t), En(l, null, n.row, t)) : (G(l, e, r), Rl(l, e));
        return;
      }
      i.pendingTasks--, i.pendingTasks === 0 && 0 < i.nodes.length && (t = G(l, e, r), _l(
        l,
        null,
        i.nodes,
        i.slots,
        e,
        t
      )), l.pendingRootTasks--, l.pendingRootTasks === 0 && hi(l);
    }
  } else {
    var a = l.trackedPostpones;
    if (i.status !== 4) {
      if (a !== null && t !== null)
        return G(l, e, r), Qe(l, a, n, t), i.fallbackAbortableTasks.forEach(function(h) {
          return Ve(h, l, e);
        }), i.fallbackAbortableTasks.clear(), En(l, i, n.row, t);
      i.status = 4, t = G(l, e, r), i.status = 4, i.errorDigest = t, ui(l, i), i.parentFlushed && l.clientRenderedBoundaries.push(i);
    }
    i.pendingTasks--, t = i.row, t !== null && --t.pendingTasks === 0 && X(l, t), i.fallbackAbortableTasks.forEach(function(h) {
      return Ve(h, l, e);
    }), i.fallbackAbortableTasks.clear();
  }
  n = n.row, n !== null && --n.pendingTasks === 0 && X(l, n), l.allPendingTasks--, l.allPendingTasks === 0 && ue(l);
}
function fi(n, l) {
  try {
    var e = n.renderState, i = e.onHeaders;
    if (i) {
      var t = e.headers;
      if (t) {
        e.headers = null;
        var r = t.preconnects;
        if (t.fontPreloads && (r && (r += ", "), r += t.fontPreloads), t.highImagePreloads && (r && (r += ", "), r += t.highImagePreloads), !l) {
          var a = e.styles.values(), h = a.next();
          n: for (; 0 < t.remainingCapacity && !h.done; h = a.next())
            for (var u = h.value.sheets.values(), f = u.next(); 0 < t.remainingCapacity && !f.done; f = u.next()) {
              var c = f.value, o = c.props, s = o.href, g = c.props, E = ne(g.href, "style", {
                crossOrigin: g.crossOrigin,
                integrity: g.integrity,
                nonce: g.nonce,
                type: g.type,
                fetchPriority: g.fetchPriority,
                referrerPolicy: g.referrerPolicy,
                media: g.media
              });
              if (0 <= (t.remainingCapacity -= E.length + 2))
                e.resets.style[s] = K, r && (r += ", "), r += E, e.resets.style[s] = typeof o.crossOrigin == "string" || typeof o.integrity == "string" ? [o.crossOrigin, o.integrity] : K;
              else break n;
            }
        }
        i(r ? { Link: r } : {});
      }
    }
  } catch (y) {
    G(n, y, {});
  }
}
function hi(n) {
  n.trackedPostpones === null && fi(n, !0), n.trackedPostpones === null && Al(n), n.onShellError = Z, n = n.onShellReady, n();
}
function ue(n) {
  fi(
    n,
    n.trackedPostpones === null ? !0 : n.completedRootSegment === null || n.completedRootSegment.status !== 5
  ), Al(n), n = n.onAllReady, n();
}
function wl(n, l) {
  if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null && l.children[0].id === -1) {
    var e = l.children[0];
    e.id = l.id, e.parentFlushed = !0, e.status !== 1 && e.status !== 3 && e.status !== 4 || wl(n, e);
  } else n.completedSegments.push(l);
}
function En(n, l, e, i) {
  if (e !== null && (--e.pendingTasks === 0 ? X(n, e) : e.together && Xe(n, e)), n.allPendingTasks--, l === null) {
    if (i !== null && i.parentFlushed) {
      if (n.completedRootSegment !== null)
        throw Error(d(389));
      n.completedRootSegment = i;
    }
    n.pendingRootTasks--, n.pendingRootTasks === 0 && hi(n);
  } else if (l.pendingTasks--, l.status !== 4)
    if (l.pendingTasks === 0) {
      if (l.status === 0 && (l.status = 1), i !== null && i.parentFlushed && (i.status === 1 || i.status === 3) && wl(l, i), l.parentFlushed && n.completedBoundaries.push(l), l.status === 1)
        e = l.row, e !== null && Zn(e.hoistables, l.contentState), Jn(n, l) || (l.fallbackAbortableTasks.forEach(ga, n), l.fallbackAbortableTasks.clear(), e !== null && --e.pendingTasks === 0 && X(n, e)), n.pendingRootTasks === 0 && n.trackedPostpones === null && l.contentPreamble !== null && Al(n);
      else if (l.status === 5 && (l = l.row, l !== null)) {
        if (n.trackedPostpones !== null) {
          e = n.trackedPostpones;
          var t = l.next;
          if (t !== null && (i = t.boundaries, i !== null))
            for (t.boundaries = null, t = 0; t < i.length; t++) {
              var r = i[t];
              Qt(n, e, r), En(n, r, null, null);
            }
        }
        --l.pendingTasks === 0 && X(n, l);
      }
    } else
      i === null || !i.parentFlushed || i.status !== 1 && i.status !== 3 || (wl(l, i), l.completedSegments.length === 1 && l.parentFlushed && n.partialBoundaries.push(l)), l = l.row, l !== null && l.together && Xe(n, l);
  n.allPendingTasks === 0 && ue(n);
}
function Vt(n) {
  if (n.status !== 14 && n.status !== 13) {
    var l = In, e = Hn.H;
    Hn.H = ht;
    var i = Hn.A;
    Hn.A = ca;
    var t = z;
    z = n;
    var r = ml;
    ml = n.resumableState;
    try {
      var a = n.pingedTasks, h;
      for (h = 0; h < a.length; h++) {
        var u = a[h], f = n, c = u.blockedSegment;
        if (c === null) {
          var o = f;
          if (u.replay.pendingTasks !== 0) {
            vn(u.context);
            try {
              if (typeof u.replay.slots == "number" ? ge(
                o,
                u,
                u.replay.slots,
                u.node,
                u.childIndex
              ) : Ze(o, u), u.replay.pendingTasks === 1 && 0 < u.replay.nodes.length)
                throw Error(d(488));
              u.replay.pendingTasks--, u.abortSet.delete(u), En(
                o,
                u.blockedBoundary,
                u.row,
                null
              );
            } catch (S) {
              El();
              var s = S === V ? ee() : S;
              if (typeof s == "object" && s !== null && typeof s.then == "function") {
                var g = u.ping;
                s.then(g, g), u.thenableState = S === V ? Yn() : null;
              } else {
                u.replay.pendingTasks--, u.abortSet.delete(u);
                var E = Tn(u.componentStack);
                f = void 0;
                var y = o, b = u.blockedBoundary, v = o.status === 12 ? o.fatalError : s, x = u.replay.nodes, M = u.replay.slots;
                f = G(
                  y,
                  v,
                  E
                ), _l(
                  y,
                  b,
                  x,
                  M,
                  v,
                  f
                ), o.pendingRootTasks--, o.pendingRootTasks === 0 && hi(o), o.allPendingTasks--, o.allPendingTasks === 0 && ue(o);
              }
            }
          }
        } else if (o = void 0, y = c, y.status === 0) {
          y.status = 6, vn(u.context);
          var P = y.children.length, R = y.chunks.length;
          try {
            Ze(f, u), dl(
              y.chunks,
              f.renderState,
              y.lastPushedText,
              y.textEmbedded
            ), u.abortSet.delete(u), y.status = 1, En(
              f,
              u.blockedBoundary,
              u.row,
              y
            );
          } catch (S) {
            El(), y.children.length = P, y.chunks.length = R;
            var F = S === V ? ee() : f.status === 12 ? f.fatalError : S;
            if (f.status === 12 && f.trackedPostpones !== null) {
              var en = f.trackedPostpones, $ = Tn(u.componentStack);
              u.abortSet.delete(u), G(f, F, $), Qe(f, en, u, y), En(
                f,
                u.blockedBoundary,
                u.row,
                y
              );
            } else if (typeof F == "object" && F !== null && typeof F.then == "function") {
              y.status = 0, u.thenableState = S === V ? Yn() : null;
              var w = u.ping;
              F.then(w, w);
            } else {
              var tn = Tn(u.componentStack);
              u.abortSet.delete(u), y.status = 4;
              var A = u.blockedBoundary, B = u.row;
              if (B !== null && --B.pendingTasks === 0 && X(f, B), f.allPendingTasks--, o = G(
                f,
                F,
                tn
              ), A === null) Rl(f, F);
              else if (A.pendingTasks--, A.status !== 4) {
                A.status = 4, A.errorDigest = o, ui(f, A);
                var H = A.row;
                H !== null && --H.pendingTasks === 0 && X(f, H), A.parentFlushed && f.clientRenderedBoundaries.push(A), f.pendingRootTasks === 0 && f.trackedPostpones === null && A.contentPreamble !== null && Al(f);
              }
              f.allPendingTasks === 0 && ue(f);
            }
          }
        }
      }
      a.splice(0, h), n.destination !== null && ve(n, n.destination);
    } catch (S) {
      G(n, S, {}), Rl(n, S);
    } finally {
      ml = r, Hn.H = e, Hn.A = i, e === ht && vn(l), z = t;
    }
  }
}
function De(n, l, e) {
  l.preambleChildren.length && e.push(l.preambleChildren);
  for (var i = !1, t = 0; t < l.children.length; t++)
    i = Kt(
      n,
      l.children[t],
      e
    ) || i;
  return i;
}
function Kt(n, l, e) {
  var i = l.boundary;
  if (i === null)
    return De(
      n,
      l,
      e
    );
  var t = i.contentPreamble, r = i.fallbackPreamble;
  if (t === null || r === null) return !1;
  switch (i.status) {
    case 1:
      if (nt(n.renderState, t), n.byteSize += i.byteSize, l = i.completedSegments[0], !l) throw Error(d(391));
      return De(
        n,
        l,
        e
      );
    case 5:
      if (n.trackedPostpones !== null) return !0;
    case 4:
      if (l.status === 1)
        return nt(n.renderState, r), De(
          n,
          l,
          e
        );
    default:
      return !0;
  }
}
function Al(n) {
  if (n.completedRootSegment && n.completedPreambleSegments === null) {
    var l = [], e = n.byteSize, i = Kt(
      n,
      n.completedRootSegment,
      l
    ), t = n.renderState.preamble;
    i === !1 || t.headChunks && t.bodyChunks ? n.completedPreambleSegments = l : n.byteSize = e;
  }
}
function Xl(n, l, e, i) {
  switch (e.parentFlushed = !0, e.status) {
    case 0:
      e.id = n.nextSegmentId++;
    case 5:
      return i = e.id, e.lastPushedText = !1, e.textEmbedded = !1, n = n.renderState, l.push('<template id="'), l.push(n.placeholderPrefix), n = i.toString(16), l.push(n), l.push('"></template>');
    case 1:
      e.status = 2;
      var t = !0, r = e.chunks, a = 0;
      e = e.children;
      for (var h = 0; h < e.length; h++) {
        for (t = e[h]; a < t.index; a++)
          l.push(r[a]);
        t = Fl(n, l, t, i);
      }
      for (; a < r.length - 1; a++)
        l.push(r[a]);
      return a < r.length && (t = l.push(r[a])), t;
    case 3:
      return !0;
    default:
      throw Error(d(390));
  }
}
var Cl = 0;
function Fl(n, l, e, i) {
  var t = e.boundary;
  if (t === null)
    return Xl(n, l, e, i);
  if (t.parentFlushed = !0, t.status === 4) {
    var r = t.row;
    return r !== null && --r.pendingTasks === 0 && X(n, r), n.renderState.generateStaticMarkup || (t = t.errorDigest, l.push("<!--$!-->"), l.push("<template"), t && (l.push(' data-dgst="'), t = T(t), l.push(t), l.push('"')), l.push("></template>")), Xl(n, l, e, i), n = n.renderState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
  }
  if (t.status !== 1)
    return t.status === 0 && (t.rootSegmentID = n.nextSegmentId++), 0 < t.completedSegments.length && n.partialBoundaries.push(t), lt(
      l,
      n.renderState,
      t.rootSegmentID
    ), i && Zn(i, t.fallbackState), Xl(n, l, e, i), l.push("<!--/$-->");
  if (!pl && Jn(n, t) && Cl + t.byteSize > n.progressiveChunkSize)
    return t.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(t), lt(
      l,
      n.renderState,
      t.rootSegmentID
    ), Xl(n, l, e, i), l.push("<!--/$-->");
  if (Cl += t.byteSize, i && Zn(i, t.contentState), e = t.row, e !== null && Jn(n, t) && --e.pendingTasks === 0 && X(n, e), n.renderState.generateStaticMarkup || l.push("<!--$-->"), e = t.completedSegments, e.length !== 1) throw Error(d(391));
  return Fl(n, l, e[0], i), n = n.renderState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
}
function Ne(n, l, e, i) {
  return Ir(
    l,
    n.renderState,
    e.parentFormatContext,
    e.id
  ), Fl(n, l, e, i), Mr(l, e.parentFormatContext);
}
function bt(n, l, e) {
  Cl = e.byteSize;
  for (var i = e.completedSegments, t = 0; t < i.length; t++)
    mt(
      n,
      l,
      e,
      i[t]
    );
  i.length = 0, i = e.row, i !== null && Jn(n, e) && --i.pendingTasks === 0 && X(n, i), zt(
    l,
    e.contentState,
    n.renderState
  ), i = n.resumableState, n = n.renderState, t = e.rootSegmentID, e = e.contentState;
  var r = n.stylesToHoist;
  return n.stylesToHoist = !1, l.push(n.startInlineScript), l.push(">"), r ? ((i.instructions & 4) === 0 && (i.instructions |= 4, l.push(
    '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'
  )), (i.instructions & 2) === 0 && (i.instructions |= 2, l.push(
    `$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`
  )), (i.instructions & 8) === 0 ? (i.instructions |= 8, l.push(
    `$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`
  )) : l.push('$RR("')) : ((i.instructions & 2) === 0 && (i.instructions |= 2, l.push(
    `$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`
  )), l.push('$RC("')), i = t.toString(16), l.push(n.boundaryPrefix), l.push(i), l.push('","'), l.push(n.segmentPrefix), l.push(i), r ? (l.push('",'), Hr(l, e)) : l.push('"'), e = l.push(")<\/script>"), Nt(l, n) && e;
}
function mt(n, l, e, i) {
  if (i.status === 2) return !0;
  var t = e.contentState, r = i.id;
  if (r === -1) {
    if ((i.id = e.rootSegmentID) === -1)
      throw Error(d(392));
    return Ne(n, l, i, t);
  }
  return r === e.rootSegmentID ? Ne(n, l, i, t) : (Ne(n, l, i, t), e = n.resumableState, n = n.renderState, l.push(n.startInlineScript), l.push(">"), (e.instructions & 1) === 0 ? (e.instructions |= 1, l.push(
    '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
  )) : l.push('$RS("'), l.push(n.segmentPrefix), r = r.toString(16), l.push(r), l.push('","'), l.push(n.placeholderPrefix), l.push(r), l = l.push('")<\/script>'), l);
}
var pl = !1;
function ve(n, l) {
  try {
    if (!(0 < n.pendingRootTasks)) {
      var e, i = n.completedRootSegment;
      if (i !== null) {
        if (i.status === 5) return;
        var t = n.completedPreambleSegments;
        if (t === null) return;
        Cl = n.byteSize;
        var r = n.resumableState, a = n.renderState, h = a.preamble, u = h.htmlChunks, f = h.headChunks, c;
        if (u) {
          for (c = 0; c < u.length; c++)
            l.push(u[c]);
          if (f)
            for (c = 0; c < f.length; c++)
              l.push(f[c]);
          else {
            var o = O("head");
            l.push(o), l.push(">");
          }
        } else if (f)
          for (c = 0; c < f.length; c++)
            l.push(f[c]);
        var s = a.charsetChunks;
        for (c = 0; c < s.length; c++)
          l.push(s[c]);
        s.length = 0, a.preconnects.forEach(j, l), a.preconnects.clear();
        var g = a.viewportChunks;
        for (c = 0; c < g.length; c++)
          l.push(g[c]);
        g.length = 0, a.fontPreloads.forEach(j, l), a.fontPreloads.clear(), a.highImagePreloads.forEach(j, l), a.highImagePreloads.clear(), Xn = a, a.styles.forEach(Nr, l), Xn = null;
        var E = a.importMapChunks;
        for (c = 0; c < E.length; c++)
          l.push(E[c]);
        E.length = 0, a.bootstrapScripts.forEach(j, l), a.scripts.forEach(j, l), a.scripts.clear(), a.bulkPreloads.forEach(j, l), a.bulkPreloads.clear(), r.instructions |= 32;
        var y = a.hoistableChunks;
        for (c = 0; c < y.length; c++)
          l.push(y[c]);
        for (r = y.length = 0; r < t.length; r++) {
          var b = t[r];
          for (a = 0; a < b.length; a++)
            Fl(n, l, b[a], null);
        }
        var v = n.renderState.preamble, x = v.headChunks;
        if (v.htmlChunks || x) {
          var M = Pn("head");
          l.push(M);
        }
        var P = v.bodyChunks;
        if (P)
          for (t = 0; t < P.length; t++)
            l.push(P[t]);
        Fl(n, l, i, null), n.completedRootSegment = null;
        var R = n.renderState;
        if (n.allPendingTasks !== 0 || n.clientRenderedBoundaries.length !== 0 || n.completedBoundaries.length !== 0 || n.trackedPostpones !== null && (n.trackedPostpones.rootNodes.length !== 0 || n.trackedPostpones.rootSlots !== null)) {
          var F = n.resumableState;
          if ((F.instructions & 64) === 0) {
            if (F.instructions |= 64, l.push(R.startInlineScript), (F.instructions & 32) === 0) {
              F.instructions |= 32;
              var en = "_" + F.idPrefix + "R_";
              l.push(' id="');
              var $ = T(en);
              l.push($), l.push('"');
            }
            l.push(">"), l.push(
              "requestAnimationFrame(function(){$RT=performance.now()});"
            ), l.push("<\/script>");
          }
        }
        Nt(l, R);
      }
      var w = n.renderState;
      i = 0;
      var tn = w.viewportChunks;
      for (i = 0; i < tn.length; i++)
        l.push(tn[i]);
      tn.length = 0, w.preconnects.forEach(j, l), w.preconnects.clear(), w.fontPreloads.forEach(j, l), w.fontPreloads.clear(), w.highImagePreloads.forEach(
        j,
        l
      ), w.highImagePreloads.clear(), w.styles.forEach(Br, l), w.scripts.forEach(j, l), w.scripts.clear(), w.bulkPreloads.forEach(j, l), w.bulkPreloads.clear();
      var A = w.hoistableChunks;
      for (i = 0; i < A.length; i++)
        l.push(A[i]);
      A.length = 0;
      var B = n.clientRenderedBoundaries;
      for (e = 0; e < B.length; e++) {
        var H = B[e];
        w = l;
        var S = n.resumableState, hn = n.renderState, Il = H.rootSegmentID, Qn = H.errorDigest;
        w.push(hn.startInlineScript), w.push(">"), (S.instructions & 4) === 0 ? (S.instructions |= 4, w.push(
          '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
        )) : w.push('$RX("'), w.push(hn.boundaryPrefix);
        var Ml = Il.toString(16);
        if (w.push(Ml), w.push('"'), Qn) {
          w.push(",");
          var Pl = Sr(
            Qn || ""
          );
          w.push(Pl);
        }
        var p = w.push(")<\/script>");
        if (!p) {
          n.destination = null, e++, B.splice(0, e);
          return;
        }
      }
      B.splice(0, e);
      var cn = n.completedBoundaries;
      for (e = 0; e < cn.length; e++)
        if (!bt(n, l, cn[e])) {
          n.destination = null, e++, cn.splice(0, e);
          return;
        }
      cn.splice(0, e), pl = !0;
      var nn = n.partialBoundaries;
      for (e = 0; e < nn.length; e++) {
        var ln = nn[e];
        n: {
          B = n, H = l, Cl = ln.byteSize;
          var on = ln.completedSegments;
          for (p = 0; p < on.length; p++)
            if (!mt(
              B,
              H,
              ln,
              on[p]
            )) {
              p++, on.splice(0, p);
              var sn = !1;
              break n;
            }
          on.splice(0, p);
          var k = ln.row;
          k !== null && k.together && ln.pendingTasks === 1 && (k.pendingTasks === 1 ? ai(
            B,
            k,
            k.hoistables
          ) : k.pendingTasks--), sn = zt(
            H,
            ln.contentState,
            B.renderState
          );
        }
        if (!sn) {
          n.destination = null, e++, nn.splice(0, e);
          return;
        }
      }
      nn.splice(0, e), pl = !1;
      var xn = n.completedBoundaries;
      for (e = 0; e < xn.length; e++)
        if (!bt(n, l, xn[e])) {
          n.destination = null, e++, xn.splice(0, e);
          return;
        }
      xn.splice(0, e);
    }
  } finally {
    pl = !1, n.allPendingTasks === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && (n.flushScheduled = !1, e = n.resumableState, e.hasBody && (nn = Pn("body"), l.push(nn)), e.hasHtml && (e = Pn("html"), l.push(e)), n.status = 14, l.push(null), n.destination = null);
  }
}
function On(n) {
  if (n.flushScheduled === !1 && n.pingedTasks.length === 0 && n.destination !== null) {
    n.flushScheduled = !0;
    var l = n.destination;
    l ? ve(n, l) : n.flushScheduled = !1;
  }
}
function va(n, l) {
  if (n.status === 13)
    n.status = 14, l.destroy(n.fatalError);
  else if (n.status !== 14 && n.destination === null) {
    n.destination = l;
    try {
      ve(n, l);
    } catch (e) {
      G(n, e, {}), Rl(n, e);
    }
  }
}
function ba(n, l) {
  (n.status === 11 || n.status === 10) && (n.status = 12);
  try {
    var e = n.abortableTasks;
    if (0 < e.size) {
      var i = l === void 0 ? Error(d(432)) : typeof l == "object" && l !== null && typeof l.then == "function" ? Error(d(530)) : l;
      n.fatalError = i, e.forEach(function(t) {
        return Ve(t, n, i);
      }), e.clear();
    }
    n.destination !== null && ve(n, n.destination);
  } catch (t) {
    G(n, t, {}), Rl(n, t);
  }
}
function fe(n, l, e) {
  if (l === null) e.rootNodes.push(n);
  else {
    var i = e.workingMap, t = i.get(l);
    t === void 0 && (t = [l[1], l[2], [], null], i.set(l, t), fe(t, l[0], e)), t[2].push(n);
  }
}
function ya() {
}
function pt(n, l, e, i) {
  var t = !1, r = null, a = "", h = !1;
  if (l = Cr(l ? l.identifierPrefix : void 0), n = da(
    n,
    l,
    mr(l, e),
    N(0, null, 0, null),
    1 / 0,
    ya,
    void 0,
    function() {
      h = !0;
    },
    void 0,
    void 0,
    void 0
  ), n.flushScheduled = n.destination !== null, Vt(n), n.status === 10 && (n.status = 11), n.trackedPostpones === null && fi(n, n.pendingRootTasks === 0), ba(n, i), va(n, {
    push: function(u) {
      return u !== null && (a += u), !0;
    },
    destroy: function(u) {
      t = !0, r = u;
    }
  }), t && r !== i) throw r;
  if (!h) throw Error(d(426));
  return a;
}
var xa = Ke.renderToStaticMarkup = function(n, l) {
  return pt(
    n,
    l,
    !0,
    'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
  );
}, Ra = Ke.renderToString = function(n, l) {
  return pt(
    n,
    l,
    !1,
    'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
  );
}, wa = Ke.version = "19.2.4";
export {
  Ke as default,
  xa as renderToStaticMarkup,
  Ra as renderToString,
  wa as version
};
