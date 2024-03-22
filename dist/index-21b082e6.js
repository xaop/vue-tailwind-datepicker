import K from "./en-4402d6fc.js";
var Z = 60, z = Z * 60, V = z * 24, Q = V * 7, I = 1e3, F = Z * I, R = z * I, X = V * I, q = Q * I, x = "millisecond", w = "second", E = "minute", A = "hour", m = "day", Y = "week", D = "month", P = "quarter", y = "year", C = "date", tt = "YYYY-MM-DDTHH:mm:ssZ", b = "Invalid Date", rt = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, et = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, W = function(t, e, n) {
  var r = String(t);
  return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
}, nt = function(t) {
  var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), a = n % 60;
  return (e <= 0 ? "+" : "-") + W(r, 2, "0") + ":" + W(a, 2, "0");
}, at = function u(t, e) {
  if (t.date() < e.date())
    return -u(e, t);
  var n = (e.year() - t.year()) * 12 + (e.month() - t.month()), r = t.clone().add(n, D), a = e - r < 0, i = t.clone().add(n + (a ? -1 : 1), D);
  return +(-(n + (e - r) / (a ? r - i : i - r)) || 0);
}, it = function(t) {
  return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
}, st = function(t) {
  var e = {
    M: D,
    y,
    w: Y,
    d: m,
    D: C,
    h: A,
    m: E,
    s: w,
    ms: x,
    Q: P
  };
  return e[t] || String(t || "").toLowerCase().replace(/s$/, "");
}, ut = function(t) {
  return t === void 0;
};
const ot = {
  s: W,
  z: nt,
  m: at,
  a: it,
  p: st,
  u: ut
};
var N = "en", g = {};
g[N] = K;
var G = "$isDayjsObject", j = function(t) {
  return t instanceof k || !!(t && t[G]);
}, U = function u(t, e, n) {
  var r;
  if (!t)
    return N;
  if (typeof t == "string") {
    var a = t.toLowerCase();
    g[a] && (r = a), e && (g[a] = e, r = a);
    var i = t.split("-");
    if (!r && i.length > 1)
      return u(i[0]);
  } else {
    var o = t.name;
    g[o] = t, r = o;
  }
  return !n && r && (N = r), r || !n && N;
}, $ = function(t, e) {
  if (j(t))
    return t.clone();
  var n = typeof e == "object" ? e : {};
  return n.date = t, n.args = arguments, new k(n);
}, ct = function(t, e) {
  return $(t, {
    locale: e.$L,
    utc: e.$u,
    x: e.$x,
    $offset: e.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, s = ot;
s.l = U;
s.i = j;
s.w = ct;
var ft = function(t) {
  var e = t.date, n = t.utc;
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  if (s.u(e))
    return /* @__PURE__ */ new Date();
  if (e instanceof Date)
    return new Date(e);
  if (typeof e == "string" && !/Z$/i.test(e)) {
    var r = e.match(rt);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return n ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(e);
}, k = /* @__PURE__ */ function() {
  function u(e) {
    this.$L = U(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[G] = !0;
  }
  var t = u.prototype;
  return t.parse = function(n) {
    this.$d = ft(n), this.init();
  }, t.init = function() {
    var n = this.$d;
    this.$y = n.getFullYear(), this.$M = n.getMonth(), this.$D = n.getDate(), this.$W = n.getDay(), this.$H = n.getHours(), this.$m = n.getMinutes(), this.$s = n.getSeconds(), this.$ms = n.getMilliseconds();
  }, t.$utils = function() {
    return s;
  }, t.isValid = function() {
    return this.$d.toString() !== b;
  }, t.isSame = function(n, r) {
    var a = $(n);
    return this.startOf(r) <= a && a <= this.endOf(r);
  }, t.isAfter = function(n, r) {
    return $(n) < this.startOf(r);
  }, t.isBefore = function(n, r) {
    return this.endOf(r) < $(n);
  }, t.$g = function(n, r, a) {
    return s.u(n) ? this[r] : this.set(a, n);
  }, t.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, t.valueOf = function() {
    return this.$d.getTime();
  }, t.startOf = function(n, r) {
    var a = this, i = s.u(r) ? !0 : r, o = s.p(n), c = function(p, S) {
      var l = s.w(a.$u ? Date.UTC(a.$y, S, p) : new Date(a.$y, S, p), a);
      return i ? l : l.endOf(m);
    }, v = function(p, S) {
      var l = [0, 0, 0, 0], _ = [23, 59, 59, 999];
      return s.w(a.toDate()[p].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? l : _).slice(S)
      ), a);
    }, f = this.$W, d = this.$M, h = this.$D, M = "set" + (this.$u ? "UTC" : "");
    switch (o) {
      case y:
        return i ? c(1, 0) : c(31, 11);
      case D:
        return i ? c(1, d) : c(0, d + 1);
      case Y: {
        var O = this.$locale().weekStart || 0, L = (f < O ? f + 7 : f) - O;
        return c(i ? h - L : h + (6 - L), d);
      }
      case m:
      case C:
        return v(M + "Hours", 0);
      case A:
        return v(M + "Minutes", 1);
      case E:
        return v(M + "Seconds", 2);
      case w:
        return v(M + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, t.endOf = function(n) {
    return this.startOf(n, !1);
  }, t.$set = function(n, r) {
    var a, i = s.p(n), o = "set" + (this.$u ? "UTC" : ""), c = (a = {}, a[m] = o + "Date", a[C] = o + "Date", a[D] = o + "Month", a[y] = o + "FullYear", a[A] = o + "Hours", a[E] = o + "Minutes", a[w] = o + "Seconds", a[x] = o + "Milliseconds", a)[i], v = i === m ? this.$D + (r - this.$W) : r;
    if (i === D || i === y) {
      var f = this.clone().set(C, 1);
      f.$d[c](v), f.init(), this.$d = f.set(C, Math.min(this.$D, f.daysInMonth())).$d;
    } else
      c && this.$d[c](v);
    return this.init(), this;
  }, t.set = function(n, r) {
    return this.clone().$set(n, r);
  }, t.get = function(n) {
    return this[s.p(n)]();
  }, t.add = function(n, r) {
    var a = this, i;
    n = Number(n);
    var o = s.p(r), c = function(h) {
      var M = $(a);
      return s.w(M.date(M.date() + Math.round(h * n)), a);
    };
    if (o === D)
      return this.set(D, this.$M + n);
    if (o === y)
      return this.set(y, this.$y + n);
    if (o === m)
      return c(1);
    if (o === Y)
      return c(7);
    var v = (i = {}, i[E] = F, i[A] = R, i[w] = I, i)[o] || 1, f = this.$d.getTime() + n * v;
    return s.w(f, this);
  }, t.subtract = function(n, r) {
    return this.add(n * -1, r);
  }, t.format = function(n) {
    var r = this, a = this.$locale();
    if (!this.isValid())
      return a.invalidDate || b;
    var i = n || tt, o = s.z(this), c = this.$H, v = this.$m, f = this.$M, d = a.weekdays, h = a.months, M = a.meridiem, O = function(l, _, H, B) {
      return l && (l[_] || l(r, i)) || H[_].slice(0, B);
    }, L = function(l) {
      return s.s(c % 12 || 12, l, "0");
    }, T = M || function(S, l, _) {
      var H = S < 12 ? "AM" : "PM";
      return _ ? H.toLowerCase() : H;
    }, p = function(l) {
      switch (l) {
        case "YY":
          return String(r.$y).slice(-2);
        case "YYYY":
          return s.s(r.$y, 4, "0");
        case "M":
          return f + 1;
        case "MM":
          return s.s(f + 1, 2, "0");
        case "MMM":
          return O(a.monthsShort, f, h, 3);
        case "MMMM":
          return O(h, f);
        case "D":
          return r.$D;
        case "DD":
          return s.s(r.$D, 2, "0");
        case "d":
          return String(r.$W);
        case "dd":
          return O(a.weekdaysMin, r.$W, d, 2);
        case "ddd":
          return O(a.weekdaysShort, r.$W, d, 3);
        case "dddd":
          return d[r.$W];
        case "H":
          return String(c);
        case "HH":
          return s.s(c, 2, "0");
        case "h":
          return L(1);
        case "hh":
          return L(2);
        case "a":
          return T(c, v, !0);
        case "A":
          return T(c, v, !1);
        case "m":
          return String(v);
        case "mm":
          return s.s(v, 2, "0");
        case "s":
          return String(r.$s);
        case "ss":
          return s.s(r.$s, 2, "0");
        case "SSS":
          return s.s(r.$ms, 3, "0");
        case "Z":
          return o;
      }
      return null;
    };
    return i.replace(et, function(S, l) {
      return l || p(S) || o.replace(":", "");
    });
  }, t.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, t.diff = function(n, r, a) {
    var i = this, o = s.p(r), c = $(n), v = (c.utcOffset() - this.utcOffset()) * F, f = this - c, d = function() {
      return s.m(i, c);
    }, h;
    switch (o) {
      case y:
        h = d() / 12;
        break;
      case D:
        h = d();
        break;
      case P:
        h = d() / 3;
        break;
      case Y:
        h = (f - v) / q;
        break;
      case m:
        h = (f - v) / X;
        break;
      case A:
        h = f / R;
        break;
      case E:
        h = f / F;
        break;
      case w:
        h = f / I;
        break;
      default:
        h = f;
        break;
    }
    return a ? h : s.a(h);
  }, t.daysInMonth = function() {
    return this.endOf(D).$D;
  }, t.$locale = function() {
    return g[this.$L];
  }, t.locale = function(n, r) {
    if (!n)
      return this.$L;
    var a = this.clone(), i = U(n, r, !0);
    return i && (a.$L = i), a;
  }, t.clone = function() {
    return s.w(this.$d, this);
  }, t.toDate = function() {
    return new Date(this.valueOf());
  }, t.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, t.toISOString = function() {
    return this.$d.toISOString();
  }, t.toString = function() {
    return this.$d.toUTCString();
  }, u;
}(), J = k.prototype;
$.prototype = J;
[["$ms", x], ["$s", w], ["$m", E], ["$H", A], ["$W", m], ["$M", D], ["$y", y], ["$D", C]].forEach(function(u) {
  J[u[1]] = function(t) {
    return this.$g(t, u[0], u[1]);
  };
});
$.extend = function(u, t) {
  return u.$i || (u(t, k, $), u.$i = !0), $;
};
$.locale = U;
$.isDayjs = j;
$.unix = function(u) {
  return $(u * 1e3);
};
$.en = g[N];
$.Ls = g;
$.p = {};
export {
  $ as d
};
