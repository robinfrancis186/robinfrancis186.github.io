import _, { createElement as Xt } from "react";
var E = function() {
  return E = Object.assign || function(t) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, E.apply(this, arguments);
};
function oe(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, s = t.length, o; n < s; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var x = "-ms-", ge = "-moz-", S = "-webkit-", Et = "comm", je = "rule", tt = "decl", er = "@import", tr = "@namespace", Rt = "@keyframes", rr = "@layer", Nt = Math.abs, rt = String.fromCharCode, Ke = Object.assign;
function nr(e, t) {
  return $(e, 0) ^ 45 ? (((t << 2 ^ $(e, 0)) << 2 ^ $(e, 1)) << 2 ^ $(e, 2)) << 2 ^ $(e, 3) : 0;
}
function kt(e) {
  return e.trim();
}
function W(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function l(e, t, r) {
  return e.replace(t, r);
}
function _e(e, t, r) {
  return e.indexOf(t, r);
}
function $(e, t) {
  return e.charCodeAt(t) | 0;
}
function X(e, t, r) {
  return e.slice(t, r);
}
function G(e) {
  return e.length;
}
function $t(e) {
  return e.length;
}
function le(e, t) {
  return t.push(e), e;
}
function sr(e, t) {
  return e.map(t).join("");
}
function dt(e, t) {
  return e.filter(function(r) {
    return !W(r, t);
  });
}
var De = 1, ie = 1, Ot = 0, j = 0, N = 0, fe = "";
function Me(e, t, r, n, s, o, i, f) {
  return { value: e, root: t, parent: r, type: n, props: s, children: o, line: De, column: ie, length: i, return: "", siblings: f };
}
function H(e, t) {
  return Ke(Me("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function se(e) {
  for (; e.root; )
    e = H(e.root, { children: [e] });
  le(e, e.siblings);
}
function or() {
  return N;
}
function ir() {
  return N = j > 0 ? $(fe, --j) : 0, ie--, N === 10 && (ie = 1, De--), N;
}
function F() {
  return N = j < Ot ? $(fe, j++) : 0, ie++, N === 10 && (ie = 1, De++), N;
}
function K() {
  return $(fe, j);
}
function Pe() {
  return j;
}
function Ge(e, t) {
  return X(fe, e, t);
}
function ye(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ar(e) {
  return De = ie = 1, Ot = G(fe = e), j = 0, [];
}
function cr(e) {
  return fe = "", e;
}
function Be(e) {
  return kt(Ge(j - 1, Ue(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ur(e) {
  for (; (N = K()) && N < 33; )
    F();
  return ye(e) > 2 || ye(N) > 3 ? "" : " ";
}
function fr(e, t) {
  for (; --t && F() && !(N < 48 || N > 102 || N > 57 && N < 65 || N > 70 && N < 97); )
    ;
  return Ge(e, Pe() + (t < 6 && K() == 32 && F() == 32));
}
function Ue(e) {
  for (; F(); )
    switch (N) {
      // ] ) " '
      case e:
        return j;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ue(N);
        break;
      // (
      case 40:
        e === 41 && Ue(e);
        break;
      // \
      case 92:
        F();
        break;
    }
  return j;
}
function hr(e, t) {
  for (; F() && e + N !== 57; )
    if (e + N === 84 && K() === 47)
      break;
  return "/*" + Ge(t, j - 1) + "*" + rt(e === 47 ? e : F());
}
function pr(e) {
  for (; !ye(K()); )
    F();
  return Ge(e, j);
}
function lr(e) {
  return cr(Ee("", null, null, null, [""], e = ar(e), 0, [0], e));
}
function Ee(e, t, r, n, s, o, i, f, c) {
  for (var d = 0, h = 0, m = i, A = 0, b = 0, y = 0, w = 1, k = 1, R = 1, P = 0, I = "", u = s, v = o, g = n, a = I; k; )
    switch (y = P, P = F()) {
      // (
      case 40:
        if (y != 108 && $(a, m - 1) == 58) {
          _e(a += l(Be(P), "&", "&\f"), "&\f", Nt(d ? f[d - 1] : 0)) != -1 && (R = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        a += Be(P);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        a += ur(y);
        break;
      // \
      case 92:
        a += fr(Pe() - 1, 7);
        continue;
      // /
      case 47:
        switch (K()) {
          case 42:
          case 47:
            le(dr(hr(F(), Pe()), t, r, c), c), (ye(y || 1) == 5 || ye(K() || 1) == 5) && G(a) && X(a, -1, void 0) !== " " && (a += " ");
            break;
          default:
            a += "/";
        }
        break;
      // {
      case 123 * w:
        f[d++] = G(a) * R;
      // } ; \0
      case 125 * w:
      case 59:
      case 0:
        switch (P) {
          // \0 }
          case 0:
          case 125:
            k = 0;
          // ;
          case 59 + h:
            R == -1 && (a = l(a, /\f/g, "")), b > 0 && (G(a) - m || w === 0 && y === 47) && le(b > 32 ? mt(a + ";", n, r, m - 1, c) : mt(l(a, " ", "") + ";", n, r, m - 2, c), c);
            break;
          // @ ;
          case 59:
            a += ";";
          // { rule/at-rule
          default:
            if (le(g = gt(a, t, r, d, h, s, f, I, u = [], v = [], m, o), o), P === 123)
              if (h === 0)
                Ee(a, t, g, g, u, o, m, f, v);
              else {
                switch (A) {
                  // c(ontainer)
                  case 99:
                    if ($(a, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if ($(a, 2) === 97) break;
                  default:
                    h = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                h ? Ee(e, g, g, n && le(gt(e, g, g, 0, 0, s, f, I, s, u = [], m, v), v), s, v, m, f, n ? u : v) : Ee(a, g, g, g, [""], v, 0, f, v);
              }
        }
        d = h = b = 0, w = R = 1, I = a = "", m = i;
        break;
      // :
      case 58:
        m = 1 + G(a), b = y;
      default:
        if (w < 1) {
          if (P == 123)
            --w;
          else if (P == 125 && w++ == 0 && ir() == 125)
            continue;
        }
        switch (a += rt(P), P * w) {
          // &
          case 38:
            R = h > 0 ? 1 : (a += "\f", -1);
            break;
          // ,
          case 44:
            f[d++] = (G(a) - 1) * R, R = 1;
            break;
          // @
          case 64:
            K() === 45 && (a += Be(F())), A = K(), h = m = G(I = a += pr(Pe())), P++;
            break;
          // -
          case 45:
            y === 45 && G(a) == 2 && (w = 0);
        }
    }
  return o;
}
function gt(e, t, r, n, s, o, i, f, c, d, h, m) {
  for (var A = s - 1, b = s === 0 ? o : [""], y = $t(b), w = 0, k = 0, R = 0; w < n; ++w)
    for (var P = 0, I = X(e, A + 1, A = Nt(k = i[w])), u = e; P < y; ++P)
      (u = kt(k > 0 ? b[P] + " " + I : l(I, /&\f/g, b[P]))) && (c[R++] = u);
  return Me(e, t, r, s === 0 ? je : f, c, d, h, m);
}
function dr(e, t, r, n) {
  return Me(e, t, r, Et, rt(or()), X(e, 2, -2), 0, n);
}
function mt(e, t, r, n, s) {
  return Me(e, t, r, tt, X(e, 0, n), X(e, n + 1, -1), n, s);
}
function Tt(e, t, r) {
  switch (nr(e, t)) {
    // color-adjust
    case 5103:
      return S + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return S + e + e;
    // mask-composite
    case 4855:
      return S + e.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + e;
    // tab-size
    case 4789:
      return ge + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return S + e + ge + e + x + e + e;
    // writing-mode
    case 5936:
      switch ($(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return S + e + x + l(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return S + e + x + l(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return S + e + x + l(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return S + e + x + e + e;
    // order
    case 6165:
      return S + e + x + "flex-" + e + e;
    // align-items
    case 5187:
      return S + e + l(e, /(\w+).+(:[^]+)/, S + "box-$1$2" + x + "flex-$1$2") + e;
    // align-self
    case 5443:
      return S + e + x + "flex-item-" + l(e, /flex-|-self/g, "") + (W(e, /flex-|baseline/) ? "" : x + "grid-row-" + l(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return S + e + x + "flex-line-pack" + l(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return S + e + x + l(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return S + e + x + l(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return S + "box-" + l(e, "-grow", "") + S + e + x + l(e, "grow", "positive") + e;
    // transition
    case 4554:
      return S + l(e, /([^-])(transform)/g, "$1" + S + "$2") + e;
    // cursor
    case 6187:
      return l(l(l(e, /(zoom-|grab)/, S + "$1"), /(image-set)/, S + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return l(e, /(image-set\([^]*)/, S + "$1$`$1");
    // justify-content
    case 4968:
      return l(l(e, /(.+:)(flex-)?(.*)/, S + "box-pack:$3" + x + "flex-pack:$3"), /space-between/, "justify") + S + e + e;
    // justify-self
    case 4200:
      if (!W(e, /flex-|baseline/)) return x + "grid-column-align" + X(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return x + l(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, s) {
        return t = s, W(n.props, /grid-\w+-end/);
      }) ? ~_e(e + (r = r[t].value), "span", 0) ? e : x + l(e, "-start", "") + e + x + "grid-row-span:" + (~_e(r, "span", 0) ? W(r, /\d+/) : +W(r, /\d+/) - +W(e, /\d+/)) + ";" : x + l(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return W(n.props, /grid-\w+-start/);
      }) ? e : x + l(l(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return l(e, /(.+)-inline(.+)/, S + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (G(e) - 1 - t > 6)
        switch ($(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if ($(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return l(e, /(.+:)(.+)-([^]+)/, "$1" + S + "$2-$3$1" + ge + ($(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~_e(e, "stretch", 0) ? Tt(l(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return l(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, s, o, i, f, c, d) {
        return x + s + ":" + o + d + (i ? x + s + "-span:" + (f ? c : +c - +o) + d : "") + e;
      });
    // position: sticky
    case 4949:
      if ($(e, t + 6) === 121)
        return l(e, ":", ":" + S) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch ($(e, $(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return l(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + S + ($(e, 14) === 45 ? "inline-" : "") + "box$3$1" + S + "$2$3$1" + x + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return l(e, ":", ":" + x) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return l(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function ke(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function gr(e, t, r, n) {
  switch (e.type) {
    case rr:
      if (e.children.length) break;
    case er:
    case tr:
    case tt:
      return e.return = e.return || e.value;
    case Et:
      return "";
    case Rt:
      return e.return = e.value + "{" + ke(e.children, n) + "}";
    case je:
      if (!G(e.value = e.props.join(","))) return "";
  }
  return G(r = ke(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function mr(e) {
  var t = $t(e);
  return function(r, n, s, o) {
    for (var i = "", f = 0; f < t; f++)
      i += e[f](r, n, s, o) || "";
    return i;
  };
}
function yr(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function vr(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case tt:
        e.return = Tt(e.value, e.length, r);
        return;
      case Rt:
        return ke([H(e, { value: l(e.value, "@", "@" + S) })], n);
      case je:
        if (e.length)
          return sr(r = e.props, function(s) {
            switch (W(s, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                se(H(e, { props: [l(s, /:(read-\w+)/, ":" + ge + "$1")] })), se(H(e, { props: [s] })), Ke(e, { props: dt(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                se(H(e, { props: [l(s, /:(plac\w+)/, ":" + S + "input-$1")] })), se(H(e, { props: [l(s, /:(plac\w+)/, ":" + ge + "$1")] })), se(H(e, { props: [l(s, /:(plac\w+)/, x + "input-$1")] })), se(H(e, { props: [s] })), Ke(e, { props: dt(r, n) });
                break;
            }
            return "";
          });
    }
}
var Sr = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, V = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", jt = "active", $e = "data-styled-version", ae = "6.3.11", nt = `/*!sc*/
`, me = typeof window < "u" && typeof document < "u", br = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), wr = {};
function T(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""));
}
var Re = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), Ne = 1, de = function(e) {
  if (Re.has(e)) return Re.get(e);
  for (; Oe.has(Ne); ) Ne++;
  var t = Ne++;
  return Re.set(e, t), Oe.set(t, e), t;
}, Cr = function(e, t) {
  Ne = t + 1, Re.set(e, t), Oe.set(t, e);
}, st = Object.freeze([]), ce = Object.freeze({});
function ot(e, t, r) {
  return r === void 0 && (r = ce), e.theme !== r.theme && e.theme || t || r.theme;
}
var Dt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]), Ar = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ir = /(^-|-$)/g;
function yt(e) {
  return e.replace(Ar, "-").replace(Ir, "");
}
var xr = /(a)(d)/gi, vt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ve(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = vt(t % 52) + r;
  return (vt(t % 52) + r).replace(xr, "$1-$2");
}
var We, Z = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Mt = function(e) {
  return Z(5381, e);
};
function it(e) {
  return Ve(Mt(e) >>> 0);
}
function Gt(e) {
  return e.displayName || e.name || "Component";
}
function Ye(e) {
  return typeof e == "string" && !0;
}
var Ft = typeof Symbol == "function" && Symbol.for, zt = Ft ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, _r = Ft ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Pr = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Er = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Lt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Rr = ((We = {})[_r] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, We[zt] = Lt, We);
function St(e) {
  return ("type" in (t = e) && t.type.$$typeof) === zt ? Lt : "$$typeof" in e ? Rr[e.$$typeof] : Pr;
  var t;
}
var Nr = Object.defineProperty, kr = Object.getOwnPropertyNames, bt = Object.getOwnPropertySymbols, $r = Object.getOwnPropertyDescriptor, Or = Object.getPrototypeOf, wt = Object.prototype;
function at(e, t, r) {
  if (typeof t != "string") {
    if (wt) {
      var n = Or(t);
      n && n !== wt && at(e, n, r);
    }
    var s = kr(t);
    bt && (s = s.concat(bt(t)));
    for (var o = St(e), i = St(t), f = 0; f < s.length; ++f) {
      var c = s[f];
      if (!(c in Er || r && r[c] || i && c in i || o && c in o)) {
        var d = $r(t, c);
        try {
          Nr(e, c, d);
        } catch {
        }
      }
    }
  }
  return e;
}
function ee(e) {
  return typeof e == "function";
}
function ct(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Q(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ve(e, t) {
  return e.join(t || "");
}
function Se(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ze(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Se(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = Ze(e[n], t[n]);
  else if (Se(t)) for (var n in t) e[n] = Ze(e[n], t[n]);
  return e;
}
function ut(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Tr = (function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t, this._cGroup = 0, this._cIndex = 0;
  }
  return e.prototype.indexOfGroup = function(t) {
    if (t === this._cGroup) return this._cIndex;
    var r = this._cIndex;
    if (t > this._cGroup) for (var n = this._cGroup; n < t; n++) r += this.groupSizes[n];
    else for (n = this._cGroup - 1; n >= t; n--) r -= this.groupSizes[n];
    return this._cGroup = t, this._cIndex = r, r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, s = n.length, o = s; t >= o; ) if ((o <<= 1) < 0) throw T(16, "".concat(t));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
      for (var i = s; i < o; i++) this.groupSizes[i] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), c = 0, d = (i = 0, r.length); i < d; i++) this.tag.insertRule(f, r[i]) && (this.groupSizes[t]++, f++, c++);
    c > 0 && this._cGroup > t && (this._cIndex += c);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), s = n + r;
      this.groupSizes[t] = 0;
      for (var o = n; o < s; o++) this.tag.deleteRule(n);
      r > 0 && this._cGroup > t && (this._cIndex -= r);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], s = this.indexOfGroup(t), o = s + n, i = s; i < o; i++) r += this.tag.getRule(i) + nt;
    return r;
  }, e;
})(), jr = "style[".concat(V, "][").concat($e, '="').concat(ae, '"]'), Dr = new RegExp("^".concat(V, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ct = function(e) {
  return typeof ShadowRoot < "u" && e instanceof ShadowRoot || "host" in e && e.nodeType === 11;
}, Je = function(e) {
  if (!e) return document;
  if (Ct(e)) return e;
  if ("getRootNode" in e) {
    var t = e.getRootNode();
    if (Ct(t)) return t;
  }
  return document;
}, Mr = function(e, t, r) {
  for (var n, s = r.split(","), o = 0, i = s.length; o < i; o++) (n = s[o]) && e.registerName(t, n);
}, Gr = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(nt), s = [], o = 0, i = n.length; o < i; o++) {
    var f = n[o].trim();
    if (f) {
      var c = f.match(Dr);
      if (c) {
        var d = 0 | parseInt(c[1], 10), h = c[2];
        d !== 0 && (Cr(h, d), Mr(e, h, c[3]), e.getTag().insertRules(d, s)), s.length = 0;
      } else s.push(f);
    }
  }
}, qe = function(e) {
  for (var t = Je(e.options.target).querySelectorAll(jr), r = 0, n = t.length; r < n; r++) {
    var s = t[r];
    s && s.getAttribute(V) !== jt && (Gr(e, s), s.parentNode && s.parentNode.removeChild(s));
  }
};
function Qe() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Bt = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), s = (function(f) {
    var c = Array.from(f.querySelectorAll("style[".concat(V, "]")));
    return c[c.length - 1];
  })(r), o = s !== void 0 ? s.nextSibling : null;
  n.setAttribute(V, jt), n.setAttribute($e, ae);
  var i = Qe();
  return i && n.setAttribute("nonce", i), r.insertBefore(n, o), n;
}, Fr = (function() {
  function e(t) {
    this.element = Bt(t), this.element.appendChild(document.createTextNode("")), this.sheet = (function(r) {
      var n;
      if (r.sheet) return r.sheet;
      for (var s = (n = r.getRootNode().styleSheets) !== null && n !== void 0 ? n : document.styleSheets, o = 0, i = s.length; o < i; o++) {
        var f = s[o];
        if (f.ownerNode === r) return f;
      }
      throw T(17);
    })(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
})(), zr = (function() {
  function e(t) {
    this.element = Bt(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
})(), Lr = (function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (t === this.length ? this.rules.push(r) : this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
})(), At = me, Br = { isServer: !me, useCSSOMInjection: !br }, ue = (function() {
  function e(t, r, n) {
    t === void 0 && (t = ce), r === void 0 && (r = {});
    var s = this;
    this.options = E(E({}, Br), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && me && At && (At = !1, qe(this)), ut(this, function() {
      return (function(o) {
        for (var i = o.getTag(), f = i.length, c = "", d = function(m) {
          var A = (function(R) {
            return Oe.get(R);
          })(m);
          if (A === void 0) return "continue";
          var b = o.names.get(A);
          if (b === void 0 || !b.size) return "continue";
          var y = i.getGroup(m);
          if (y.length === 0) return "continue";
          var w = V + ".g" + m + '[id="' + A + '"]', k = "";
          b.forEach(function(R) {
            R.length > 0 && (k += R + ",");
          }), c += y + w + '{content:"' + k + '"}' + nt;
        }, h = 0; h < f; h++) d(h);
        return c;
      })(s);
    });
  }
  return e.registerId = function(t) {
    return de(t);
  }, e.prototype.rehydrate = function() {
    !this.server && me && qe(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    r === void 0 && (r = !0);
    var n = new e(E(E({}, this.options), t), this.gs, r && this.names || void 0);
    return !this.server && me && t.target !== this.options.target && Je(this.options.target) !== Je(t.target) && qe(n), n;
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = (function(r) {
      var n = r.useCSSOMInjection, s = r.target;
      return r.isServer ? new Lr(s) : n ? new Fr(s) : new zr(s);
    })(this.options), new Tr(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    var n, s;
    return (s = (n = this.names.get(t)) === null || n === void 0 ? void 0 : n.has(r)) !== null && s !== void 0 && s;
  }, e.prototype.registerName = function(t, r) {
    de(t);
    var n = this.names.get(t);
    n ? n.add(r) : this.names.set(t, /* @__PURE__ */ new Set([r]));
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(de(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(de(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
})(), Wr = /&/g, Y = 47, J = 42;
function It(e) {
  if (e.indexOf("}") === -1) return !1;
  for (var t = e.length, r = 0, n = 0, s = !1, o = 0; o < t; o++) {
    var i = e.charCodeAt(o);
    if (n !== 0 || s || i !== Y || e.charCodeAt(o + 1) !== J) if (s) i === J && e.charCodeAt(o + 1) === Y && (s = !1, o++);
    else if (i !== 34 && i !== 39 || o !== 0 && e.charCodeAt(o - 1) === 92) {
      if (n === 0) {
        if (i === 123) r++;
        else if (i === 125 && --r < 0) return !0;
      }
    } else n === 0 ? n = i : n === i && (n = 0);
    else s = !0, o++;
  }
  return r !== 0 || n !== 0;
}
function Wt(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Wt(r.children, t)), r;
  });
}
function Yt(e) {
  var t, r, n, s = e === void 0 ? ce : e, o = s.options, i = o === void 0 ? ce : o, f = s.plugins, c = f === void 0 ? st : f, d = function(y, w, k) {
    return k.startsWith(r) && k.endsWith(r) && k.replaceAll(r, "").length > 0 ? ".".concat(t) : y;
  }, h = c.slice();
  h.push(function(y) {
    y.type === je && y.value.includes("&") && (n || (n = new RegExp("\\".concat(r, "\\b"), "g")), y.props[0] = y.props[0].replace(Wr, r).replace(n, d));
  }), i.prefix && h.push(vr), h.push(gr);
  var m = [], A = mr(h.concat(yr(function(y) {
    return m.push(y);
  }))), b = function(y, w, k, R) {
    w === void 0 && (w = ""), k === void 0 && (k = ""), R === void 0 && (R = "&"), t = R, r = w, n = void 0;
    var P = (function(u) {
      if (!It(u)) return u;
      for (var v = u.length, g = "", a = 0, p = 0, O = 0, D = !1, C = 0; C < v; C++) {
        var M = u.charCodeAt(C);
        if (O !== 0 || D || M !== Y || u.charCodeAt(C + 1) !== J) if (D) M === J && u.charCodeAt(C + 1) === Y && (D = !1, C++);
        else if (M !== 34 && M !== 39 || C !== 0 && u.charCodeAt(C - 1) === 92) {
          if (O === 0) if (M === 123) p++;
          else if (M === 125) {
            if (--p < 0) {
              for (var z = C + 1; z < v; ) {
                var be = u.charCodeAt(z);
                if (be === 59 || be === 10) break;
                z++;
              }
              z < v && u.charCodeAt(z) === 59 && z++, p = 0, C = z - 1, a = z;
              continue;
            }
            p === 0 && (g += u.substring(a, C + 1), a = C + 1);
          } else M === 59 && p === 0 && (g += u.substring(a, C + 1), a = C + 1);
        } else O === 0 ? O = M : O === M && (O = 0);
        else D = !0, C++;
      }
      if (a < v) {
        var we = u.substring(a);
        It(we) || (g += we);
      }
      return g;
    })((function(u) {
      if (u.indexOf("//") === -1) return u;
      for (var v = u.length, g = [], a = 0, p = 0, O = 0, D = 0; p < v; ) {
        var C = u.charCodeAt(p);
        if (C !== 34 && C !== 39 || p !== 0 && u.charCodeAt(p - 1) === 92) if (O === 0) if (C === Y && p + 1 < v && u.charCodeAt(p + 1) === J) {
          for (p += 2; p + 1 < v && (u.charCodeAt(p) !== J || u.charCodeAt(p + 1) !== Y); ) p++;
          p += 2;
        } else if (C === 40 && p >= 3 && (32 | u.charCodeAt(p - 1)) == 108 && (32 | u.charCodeAt(p - 2)) == 114 && (32 | u.charCodeAt(p - 3)) == 117) D = 1, p++;
        else if (D > 0) C === 41 ? D-- : C === 40 && D++, p++;
        else if (C === J && p + 1 < v && u.charCodeAt(p + 1) === Y) p > a && g.push(u.substring(a, p)), a = p += 2;
        else if (C === Y && p + 1 < v && u.charCodeAt(p + 1) === Y) {
          for (p > a && g.push(u.substring(a, p)); p < v && u.charCodeAt(p) !== 10; ) p++;
          a = p;
        } else p++;
        else p++;
        else O === 0 ? O = C : O === C && (O = 0), p++;
      }
      return a === 0 ? u : (a < v && g.push(u.substring(a)), g.join(""));
    })(y)), I = lr(k || w ? "".concat(k, " ").concat(w, " { ").concat(P, " }") : P);
    return i.namespace && (I = Wt(I, i.namespace)), m = [], ke(I, A), m;
  };
  return b.hash = c.length ? c.reduce(function(y, w) {
    return w.name || T(15), Z(y, w.name);
  }, 5381).toString() : "", b;
}
var qt = new ue(), Xe = Yt(), ft = _.createContext({ shouldForwardProp: void 0, styleSheet: qt, stylis: Xe }), en = ft.Consumer, Yr = _.createContext(void 0);
function Te() {
  return _.useContext(ft);
}
function qr(e) {
  if (!_.useMemo) return e.children;
  var t = Te().styleSheet, r = _.useMemo(function() {
    var o = t;
    return e.sheet ? o = e.sheet : e.target && (o = o.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (o = o.reconstructWithOptions({ useCSSOMInjection: !1 })), o;
  }, [e.disableCSSOMInjection, e.sheet, e.target, t]), n = _.useMemo(function() {
    return Yt({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: e.stylisPlugins });
  }, [e.enableVendorPrefixes, e.namespace, e.stylisPlugins]), s = _.useMemo(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: r, stylis: n };
  }, [e.shouldForwardProp, r, n]);
  return _.createElement(ft.Provider, { value: s }, _.createElement(Yr.Provider, { value: n }, e.children));
}
var Ht = (function() {
  function e(t, r) {
    var n = this;
    this.inject = function(s, o) {
      o === void 0 && (o = Xe);
      var i = n.name + o.hash;
      s.hasNameForId(n.id, i) || s.insertRules(n.id, i, o(n.rules, i, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, ut(this, function() {
      throw T(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Xe), this.name + t.hash;
  }, e;
})();
function Hr(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || e in Sr || e.startsWith("--") ? String(t).trim() : "".concat(t, "px");
}
var Kr = function(e) {
  return e >= "A" && e <= "Z";
};
function xt(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    Kr(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Kt = function(e) {
  return e == null || e === !1 || e === "";
}, Ut = function(e) {
  var t = [];
  for (var r in e) {
    var n = e[r];
    e.hasOwnProperty(r) && !Kt(n) && (Array.isArray(n) && n.isCss || ee(n) ? t.push("".concat(xt(r), ":"), n, ";") : Se(n) ? t.push.apply(t, oe(oe(["".concat(r, " {")], Ut(n), !1), ["}"], !1)) : t.push("".concat(xt(r), ": ").concat(Hr(r, n), ";")));
  }
  return t;
};
function U(e, t, r, n, s) {
  if (s === void 0 && (s = []), typeof e == "string") return e && s.push(e), s;
  if (Kt(e)) return s;
  if (ct(e)) return s.push(".".concat(e.styledComponentId)), s;
  if (ee(e)) {
    if (!ee(i = e) || i.prototype && i.prototype.isReactComponent || !t) return s.push(e), s;
    var o = e(t);
    return U(o, t, r, n, s);
  }
  var i;
  if (e instanceof Ht) return r ? (e.inject(r, n), s.push(e.getName(n))) : s.push(e), s;
  if (Se(e)) {
    for (var f = Ut(e), c = 0; c < f.length; c++) s.push(f[c]);
    return s;
  }
  if (!Array.isArray(e)) return s.push(e.toString()), s;
  for (c = 0; c < e.length; c++) U(e[c], t, r, n, s);
  return s;
}
function Vt(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (ee(r) && !ct(r)) return !1;
  }
  return !0;
}
var Ur = Mt(ae), Vr = (function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Vt(t), this.componentId = r, this.baseHash = Z(Ur, r), this.baseStyle = n, ue.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var s = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n).className : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) s = Q(s, this.staticRulesId);
    else {
      var o = ve(U(this.rules, t, r, n)), i = Ve(Z(this.baseHash, o) >>> 0);
      if (!r.hasNameForId(this.componentId, i)) {
        var f = n(o, ".".concat(i), void 0, this.componentId);
        r.insertRules(this.componentId, i, f);
      }
      s = Q(s, i), this.staticRulesId = i;
    }
    else {
      for (var c = Z(this.baseHash, n.hash), d = "", h = 0; h < this.rules.length; h++) {
        var m = this.rules[h];
        if (typeof m == "string") d += m;
        else if (m) {
          var A = ve(U(m, t, r, n));
          c = Z(Z(c, String(h)), A), d += A;
        }
      }
      if (d) {
        var b = Ve(c >>> 0);
        if (!r.hasNameForId(this.componentId, b)) {
          var y = n(d, ".".concat(b), void 0, this.componentId);
          r.insertRules(this.componentId, b, y);
        }
        s = Q(s, b);
      }
    }
    return { className: s, css: typeof window > "u" ? r.getTag().getGroup(de(this.componentId)) : "" };
  }, e;
})(), te = _.createContext(void 0), tn = te.Consumer;
function rn() {
  var e = _.useContext(te);
  if (!e) throw T(18);
  return e;
}
function nn(e) {
  var t = _.useContext(te), r = _.useMemo(function() {
    return (function(n, s) {
      if (!n) throw T(14);
      if (ee(n)) {
        var o = n(s);
        return o;
      }
      if (Array.isArray(n) || typeof n != "object") throw T(8);
      return s ? E(E({}, s), n) : n;
    })(e.theme, t);
  }, [e.theme, t]);
  return e.children ? _.createElement(te.Provider, { value: r }, e.children) : null;
}
var He = {};
function Zr(e, t, r) {
  var n = ct(e), s = e, o = !Ye(e), i = t.attrs, f = i === void 0 ? st : i, c = t.componentId, d = c === void 0 ? (function(u, v) {
    var g = typeof u != "string" ? "sc" : yt(u);
    He[g] = (He[g] || 0) + 1;
    var a = "".concat(g, "-").concat(it(ae + g + He[g]));
    return v ? "".concat(v, "-").concat(a) : a;
  })(t.displayName, t.parentComponentId) : c, h = t.displayName, m = h === void 0 ? (function(u) {
    return Ye(u) ? "styled.".concat(u) : "Styled(".concat(Gt(u), ")");
  })(e) : h, A = t.displayName && t.componentId ? "".concat(yt(t.displayName), "-").concat(t.componentId) : t.componentId || d, b = n && s.attrs ? s.attrs.concat(f).filter(Boolean) : f, y = t.shouldForwardProp;
  if (n && s.shouldForwardProp) {
    var w = s.shouldForwardProp;
    if (t.shouldForwardProp) {
      var k = t.shouldForwardProp;
      y = function(u, v) {
        return w(u, v) && k(u, v);
      };
    } else y = w;
  }
  var R = new Vr(r, A, n ? s.componentStyle : void 0);
  function P(u, v) {
    return (function(g, a, p) {
      var O = g.attrs, D = g.componentStyle, C = g.defaultProps, M = g.foldedComponentIds, z = g.styledComponentId, be = g.target, we = _.useContext(te), Jt = Te(), Fe = g.shouldForwardProp || Jt.shouldForwardProp, pt = ot(a, we, C) || ce, L = (function(Ae, re, Ie) {
        for (var pe, B = E(E({}, re), { className: void 0, theme: Ie }), Le = 0; Le < Ae.length; Le += 1) {
          var xe = ee(pe = Ae[Le]) ? pe(B) : pe;
          for (var ne in xe) ne === "className" ? B.className = Q(B.className, xe[ne]) : ne === "style" ? B.style = E(E({}, B.style), xe[ne]) : B[ne] = xe[ne];
        }
        return "className" in re && typeof re.className == "string" && (B.className = Q(B.className, re.className)), B;
      })(O, a, pt), Ce = L.as || be, he = {};
      for (var q in L) L[q] === void 0 || q[0] === "$" || q === "as" || q === "theme" && L.theme === pt || (q === "forwardedAs" ? he.as = L.forwardedAs : Fe && !Fe(q, Ce) || (he[q] = L[q]));
      var Qt = (function(Ae, re) {
        var Ie = Te(), pe = Ae.generateAndInjectStyles(re, Ie.styleSheet, Ie.stylis);
        return pe;
      })(D, L), lt = Qt.className, ze = Q(M, z);
      return lt && (ze += " " + lt), L.className && (ze += " " + L.className), he[Ye(Ce) && !Dt.has(Ce) ? "class" : "className"] = ze, p && (he.ref = p), Xt(Ce, he);
    })(I, u, v);
  }
  P.displayName = m;
  var I = _.forwardRef(P);
  return I.attrs = b, I.componentStyle = R, I.displayName = m, I.shouldForwardProp = y, I.foldedComponentIds = n ? Q(s.foldedComponentIds, s.styledComponentId) : "", I.styledComponentId = A, I.target = n ? s.target : e, Object.defineProperty(I, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(u) {
    this._foldedDefaultProps = n ? (function(v) {
      for (var g = [], a = 1; a < arguments.length; a++) g[a - 1] = arguments[a];
      for (var p = 0, O = g; p < O.length; p++) Ze(v, O[p], !0);
      return v;
    })({}, s.defaultProps, u) : u;
  } }), ut(I, function() {
    return ".".concat(I.styledComponentId);
  }), o && at(I, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), I;
}
function _t(e, t) {
  for (var r = [e[0]], n = 0, s = t.length; n < s; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var Pt = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function ht(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (ee(e) || Se(e)) return Pt(U(_t(st, oe([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? U(n) : Pt(U(_t(n, t)));
}
function et(e, t, r) {
  if (r === void 0 && (r = ce), !t) throw T(1, t);
  var n = function(s) {
    for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
    return e(t, r, ht.apply(void 0, oe([s], o, !1)));
  };
  return n.attrs = function(s) {
    return et(e, t, E(E({}, r), { attrs: Array.prototype.concat(r.attrs, s).filter(Boolean) }));
  }, n.withConfig = function(s) {
    return et(e, t, E(E({}, r), s));
  }, n;
}
var Zt = function(e) {
  return et(Zr, e);
}, Jr = Zt;
Dt.forEach(function(e) {
  Jr[e] = Zt(e);
});
var Qr = (function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Vt(t), ue.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, r, n, s) {
    var o = s(ve(U(this.rules, r, n, s)), ""), i = this.componentId + t;
    n.insertRules(i, i, o);
  }, e.prototype.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, r, n, s) {
    t > 2 && ue.registerId(this.componentId + t);
    var o = this.componentId + t;
    this.isStatic ? n.hasNameForId(o, o) || this.createStyles(t, r, n, s) : (this.removeStyles(t, n), this.createStyles(t, r, n, s));
  }, e;
})();
function sn(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = ht.apply(void 0, oe([e], t, !1)), s = "sc-global-".concat(it(JSON.stringify(n))), o = new Qr(n, s), i = /* @__PURE__ */ new WeakMap(), f = function(d) {
    var h = Te(), m = _.useContext(te), A = i.get(h.styleSheet);
    return A === void 0 && (A = h.styleSheet.allocateGSInstance(s), i.set(h.styleSheet, A)), (typeof window > "u" || !h.styleSheet.server) && c(A, d, h.styleSheet, m, h.stylis), _.useLayoutEffect(function() {
      return h.styleSheet.server || c(A, d, h.styleSheet, m, h.stylis), function() {
        var b;
        o.removeStyles(A, h.styleSheet), b = h.styleSheet.options.target, typeof document < "u" && (b ?? document).querySelectorAll('style[data-styled-global="'.concat(s, '"]')).forEach(function(y) {
          return y.remove();
        });
      };
    }, [A, d, h.styleSheet, m, h.stylis]), null;
  };
  function c(d, h, m, A, b) {
    if (o.isStatic) o.renderStyles(d, wr, m, b);
    else {
      var y = E(E({}, h), { theme: ot(h, A, f.defaultProps) });
      o.renderStyles(d, y, m, b);
    }
  }
  return _.memo(f);
}
function on(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = ve(ht.apply(void 0, oe([e], t, !1))), s = it(n);
  return new Ht(s, n);
}
function an(e) {
  var t = _.forwardRef(function(r, n) {
    var s = ot(r, _.useContext(te), e.defaultProps);
    return _.createElement(e, E(E({}, r), { theme: s, ref: n }));
  });
  return t.displayName = "WithTheme(".concat(Gt(e), ")"), at(t, e);
}
var cn = (function() {
  function e() {
    var t = this;
    this._emitSheetCSS = function() {
      var r = t.instance.toString();
      if (!r) return "";
      var n = Qe(), s = ve([n && 'nonce="'.concat(n, '"'), "".concat(V, '="true"'), "".concat($e, '="').concat(ae, '"')].filter(Boolean), " ");
      return "<style ".concat(s, ">").concat(r, "</style>");
    }, this.getStyleTags = function() {
      if (t.sealed) throw T(2);
      return t._emitSheetCSS();
    }, this.getStyleElement = function() {
      var r;
      if (t.sealed) throw T(2);
      var n = t.instance.toString();
      if (!n) return [];
      var s = ((r = {})[V] = "", r[$e] = ae, r.dangerouslySetInnerHTML = { __html: n }, r), o = Qe();
      return o && (s.nonce = o), [_.createElement("style", E({}, s, { key: "sc-0-0" }))];
    }, this.seal = function() {
      t.sealed = !0;
    }, this.instance = new ue({ isServer: !0 }), this.sealed = !1;
  }
  return e.prototype.collectStyles = function(t) {
    if (this.sealed) throw T(2);
    return _.createElement(qr, { sheet: this.instance }, t);
  }, e.prototype.interleaveWithNodeStream = function(t) {
    throw T(3);
  }, e;
})(), un = { StyleSheet: ue, mainSheet: qt };
export {
  cn as ServerStyleSheet,
  en as StyleSheetConsumer,
  ft as StyleSheetContext,
  qr as StyleSheetManager,
  tn as ThemeConsumer,
  te as ThemeContext,
  nn as ThemeProvider,
  un as __PRIVATE__,
  sn as createGlobalStyle,
  ht as css,
  Jr as default,
  ct as isStyledComponent,
  on as keyframes,
  Jr as styled,
  rn as useTheme,
  ae as version,
  an as withTheme
};
