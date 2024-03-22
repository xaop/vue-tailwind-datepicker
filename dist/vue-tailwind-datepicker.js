(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('.vtd-datepicker-overlay.open:before{display:block;opacity:.5}.vtd-datepicker:before{--vtd-datepicker: 0px;content:"";position:absolute;top:0;height:1rem;width:1rem;border-width:1px;border-color:#0000001a;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:is(.dark .vtd-datepicker):before{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.vtd-datepicker:before{transform:translate(50%,-50%) rotate(-45deg);-webkit-clip-path:polygon(calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker)));clip-path:polygon(calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker)))}.vtd-datepicker.place-left:before{left:.25rem}:is(.dark .vtd-datepicker.place-left):before{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.vtd-datepicker.place-right:before{right:1.25rem}:is(.dark .vtd-datepicker.place-right):before{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}')),document.head.appendChild(r)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { cloneVNode as Jt, h as ve, Fragment as xe, inject as De, provide as se, ref as J, onMounted as ot, watchEffect as _e, computed as ue, defineComponent as de, onUnmounted as et, Teleport as Xt, reactive as ht, shallowRef as Qt, openBlock as z, createElementBlock as Z, createElementVNode as Y, withDirectives as me, vShow as pe, toDisplayString as ae, renderList as Ke, withModifiers as $e, unref as le, createCommentVNode as ye, createVNode as ee, TransitionGroup as eo, withCtx as Fe, normalizeClass as Te, Transition as yt, nextTick as He, watch as it, isProxy as to, createBlock as Ue, renderSlot as ct, mergeProps as oo, vModelText as ro } from "vue";
function Oe(e, r, ...u) {
  if (e in r) {
    let a = r[e];
    return typeof a == "function" ? a(...u) : a;
  }
  let t = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(r).map((a) => `"${a}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, Oe), t;
}
var ze = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ze || {}), ao = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ao || {});
function Pe({ visible: e = !0, features: r = 0, ourProps: u, theirProps: t, ...a }) {
  var n;
  let v = gt(t, u), s = Object.assign(a, { props: v });
  if (e || r & 2 && v.static)
    return st(s);
  if (r & 1) {
    let h = (n = v.unmount) == null || n ? 0 : 1;
    return Oe(h, { 0() {
      return null;
    }, 1() {
      return st({ ...a, props: { ...v, hidden: !0, style: { display: "none" } } });
    } });
  }
  return st(s);
}
function st({ props: e, attrs: r, slots: u, slot: t, name: a }) {
  var n, v;
  let { as: s, ...h } = no(e, ["unmount", "static"]), c = (n = u.default) == null ? void 0 : n.call(u, t), g = {};
  if (t) {
    let b = !1, S = [];
    for (let [V, I] of Object.entries(t))
      typeof I == "boolean" && (b = !0), I === !0 && S.push(V);
    b && (g["data-headlessui-state"] = S.join(" "));
  }
  if (s === "template") {
    if (c = bt(c ?? []), Object.keys(h).length > 0 || Object.keys(r).length > 0) {
      let [b, ...S] = c ?? [];
      if (!so(b) || S.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${a} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(h).concat(Object.keys(r)).map((x) => x.trim()).filter((x, D, E) => E.indexOf(x) === D).sort((x, D) => x.localeCompare(D)).map((x) => `  - ${x}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((x) => `  - ${x}`).join(`
`)].join(`
`));
      let V = gt((v = b.props) != null ? v : {}, h), I = Jt(b, V);
      for (let x in V)
        x.startsWith("on") && (I.props || (I.props = {}), I.props[x] = V[x]);
      return I;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return ve(s, Object.assign({}, h, g), { default: () => c });
}
function bt(e) {
  return e.flatMap((r) => r.type === xe ? bt(r.children) : [r]);
}
function gt(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let r = {}, u = {};
  for (let t of e)
    for (let a in t)
      a.startsWith("on") && typeof t[a] == "function" ? (u[a] != null || (u[a] = []), u[a].push(t[a])) : r[a] = t[a];
  if (r.disabled || r["aria-disabled"])
    return Object.assign(r, Object.fromEntries(Object.keys(u).map((t) => [t, void 0])));
  for (let t in u)
    Object.assign(r, { [t](a, ...n) {
      let v = u[t];
      for (let s of v) {
        if (a instanceof Event && a.defaultPrevented)
          return;
        s(a, ...n);
      }
    } });
  return r;
}
function no(e, r = []) {
  let u = Object.assign({}, e);
  for (let t of r)
    t in u && delete u[t];
  return u;
}
function so(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let lo = 0;
function uo() {
  return ++lo;
}
function Be() {
  return uo();
}
var Ve = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ve || {});
function H(e) {
  var r;
  return e == null || e.value == null ? null : (r = e.value.$el) != null ? r : e.value;
}
let xt = Symbol("Context");
var Le = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Le || {});
function wt() {
  return De(xt, null);
}
function io(e) {
  se(xt, e);
}
function ft(e, r) {
  if (e)
    return e;
  let u = r ?? "button";
  if (typeof u == "string" && u.toLowerCase() === "button")
    return "button";
}
function co(e, r) {
  let u = J(ft(e.value.type, e.value.as));
  return ot(() => {
    u.value = ft(e.value.type, e.value.as);
  }), _e(() => {
    var t;
    u.value || H(r) && H(r) instanceof HTMLButtonElement && !((t = H(r)) != null && t.hasAttribute("type")) && (u.value = "button");
  }), u;
}
var fo = Object.defineProperty, mo = (e, r, u) => r in e ? fo(e, r, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[r] = u, mt = (e, r, u) => (mo(e, typeof r != "symbol" ? r + "" : r, u), u);
class po {
  constructor() {
    mt(this, "current", this.detect()), mt(this, "currentId", 0);
  }
  set(r) {
    this.current !== r && (this.currentId = 0, this.current = r);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let rt = new po();
function Ae(e) {
  if (rt.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let r = H(e);
    if (r)
      return r.ownerDocument;
  }
  return document;
}
let lt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Me = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Me || {}), tt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(tt || {}), vo = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(vo || {});
function at(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(lt)).sort((r, u) => Math.sign((r.tabIndex || Number.MAX_SAFE_INTEGER) - (u.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var dt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(dt || {});
function kt(e, r = 0) {
  var u;
  return e === ((u = Ae(e)) == null ? void 0 : u.body) ? !1 : Oe(r, { 0() {
    return e.matches(lt);
  }, 1() {
    let t = e;
    for (; t !== null; ) {
      if (t.matches(lt))
        return !0;
      t = t.parentElement;
    }
    return !1;
  } });
}
var ho = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(ho || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let yo = ["textarea", "input"].join(",");
function bo(e) {
  var r, u;
  return (u = (r = e == null ? void 0 : e.matches) == null ? void 0 : r.call(e, yo)) != null ? u : !1;
}
function go(e, r = (u) => u) {
  return e.slice().sort((u, t) => {
    let a = r(u), n = r(t);
    if (a === null || n === null)
      return 0;
    let v = a.compareDocumentPosition(n);
    return v & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : v & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ee(e, r, { sorted: u = !0, relativeTo: t = null, skipElements: a = [] } = {}) {
  var n;
  let v = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, s = Array.isArray(e) ? u ? go(e) : e : at(e);
  a.length > 0 && s.length > 1 && (s = s.filter((I) => !a.includes(I))), t = t ?? v.activeElement;
  let h = (() => {
    if (r & 5)
      return 1;
    if (r & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = (() => {
    if (r & 1)
      return 0;
    if (r & 2)
      return Math.max(0, s.indexOf(t)) - 1;
    if (r & 4)
      return Math.max(0, s.indexOf(t)) + 1;
    if (r & 8)
      return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), g = r & 32 ? { preventScroll: !0 } : {}, b = 0, S = s.length, V;
  do {
    if (b >= S || b + S <= 0)
      return 0;
    let I = c + b;
    if (r & 16)
      I = (I + S) % S;
    else {
      if (I < 0)
        return 3;
      if (I >= S)
        return 1;
    }
    V = s[I], V == null || V.focus(g), b += h;
  } while (V !== v.activeElement);
  return r & 6 && bo(V) && V.select(), 2;
}
function Ge(e, r, u) {
  rt.isServer || _e((t) => {
    document.addEventListener(e, r, u), t(() => document.removeEventListener(e, r, u));
  });
}
function jt(e, r, u) {
  rt.isServer || _e((t) => {
    window.addEventListener(e, r, u), t(() => window.removeEventListener(e, r, u));
  });
}
function xo(e, r, u = ue(() => !0)) {
  function t(n, v) {
    if (!u.value || n.defaultPrevented)
      return;
    let s = v(n);
    if (s === null || !s.getRootNode().contains(s))
      return;
    let h = function c(g) {
      return typeof g == "function" ? c(g()) : Array.isArray(g) || g instanceof Set ? g : [g];
    }(e);
    for (let c of h) {
      if (c === null)
        continue;
      let g = c instanceof HTMLElement ? c : H(c);
      if (g != null && g.contains(s) || n.composed && n.composedPath().includes(g))
        return;
    }
    return !kt(s, dt.Loose) && s.tabIndex !== -1 && n.preventDefault(), r(n, s);
  }
  let a = J(null);
  Ge("pointerdown", (n) => {
    var v, s;
    u.value && (a.value = ((s = (v = n.composedPath) == null ? void 0 : v.call(n)) == null ? void 0 : s[0]) || n.target);
  }, !0), Ge("mousedown", (n) => {
    var v, s;
    u.value && (a.value = ((s = (v = n.composedPath) == null ? void 0 : v.call(n)) == null ? void 0 : s[0]) || n.target);
  }, !0), Ge("click", (n) => {
    a.value && (t(n, () => a.value), a.value = null);
  }, !0), Ge("touchend", (n) => t(n, () => n.target instanceof HTMLElement ? n.target : null), !0), jt("blur", (n) => t(n, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ne = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ne || {});
let We = de({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: r, attrs: u }) {
  return () => {
    let { features: t, ...a } = e, n = { "aria-hidden": (t & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(t & 4) === 4 && (t & 2) !== 2 && { display: "none" } } };
    return Pe({ ourProps: n, theirProps: a, slot: {}, attrs: u, slots: r, name: "Hidden" });
  };
} });
var Se = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Se || {});
function _t() {
  let e = J(0);
  return jt("keydown", (r) => {
    r.key === "Tab" && (e.value = r.shiftKey ? 1 : 0);
  }), e;
}
function wo(e, r, u, t) {
  rt.isServer || _e((a) => {
    e = e ?? window, e.addEventListener(r, u, t), a(() => e.removeEventListener(r, u, t));
  });
}
let $t = Symbol("ForcePortalRootContext");
function ko() {
  return De($t, !1);
}
de({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: r, attrs: u }) {
  return se($t, e.force), () => {
    let { force: t, ...a } = e;
    return Pe({ theirProps: a, ourProps: {}, slot: {}, slots: r, attrs: u, name: "ForcePortalRoot" });
  };
} });
function jo(e) {
  let r = Ae(e);
  if (!r) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let u = r.getElementById("headlessui-portal-root");
  if (u)
    return u;
  let t = r.createElement("div");
  return t.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(t);
}
de({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: r, attrs: u }) {
  let t = J(null), a = ue(() => Ae(t)), n = ko(), v = De(Mt, null), s = J(n === !0 || v == null ? jo(t.value) : v.resolveTarget());
  _e(() => {
    n || v != null && (s.value = v.resolveTarget());
  });
  let h = De(ut, null);
  return ot(() => {
    let c = H(t);
    c && h && et(h.register(c));
  }), et(() => {
    var c, g;
    let b = (c = a.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
    b && s.value === b && s.value.children.length <= 0 && ((g = s.value.parentElement) == null || g.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let c = { ref: t, "data-headlessui-portal": "" };
    return ve(Xt, { to: s.value }, Pe({ ourProps: c, theirProps: e, slot: {}, attrs: u, slots: r, name: "Portal" }));
  };
} });
let ut = Symbol("PortalParentContext");
function _o() {
  let e = De(ut, null), r = J([]);
  function u(n) {
    return r.value.push(n), e && e.register(n), () => t(n);
  }
  function t(n) {
    let v = r.value.indexOf(n);
    v !== -1 && r.value.splice(v, 1), e && e.unregister(n);
  }
  let a = { register: u, unregister: t, portals: r };
  return [r, de({ name: "PortalWrapper", setup(n, { slots: v }) {
    return se(ut, a), () => {
      var s;
      return (s = v.default) == null ? void 0 : s.call(v);
    };
  } })];
}
let Mt = Symbol("PortalGroupContext");
de({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: r, slots: u }) {
  let t = ht({ resolveTarget() {
    return e.target;
  } });
  return se(Mt, t), () => {
    let { target: a, ...n } = e;
    return Pe({ theirProps: n, ourProps: {}, slot: {}, attrs: r, slots: u, name: "PortalGroup" });
  };
} });
function $o({ defaultContainers: e = [], portals: r, mainTreeNodeRef: u } = {}) {
  let t = J(null), a = Ae(t);
  function n() {
    var v;
    let s = [];
    for (let h of e)
      h !== null && (h instanceof HTMLElement ? s.push(h) : "value" in h && h.value instanceof HTMLElement && s.push(h.value));
    if (r != null && r.value)
      for (let h of r.value)
        s.push(h);
    for (let h of (v = a == null ? void 0 : a.querySelectorAll("html > *, body > *")) != null ? v : [])
      h !== document.body && h !== document.head && h instanceof HTMLElement && h.id !== "headlessui-portal-root" && (h.contains(H(t)) || s.some((c) => h.contains(c)) || s.push(h));
    return s;
  }
  return { resolveContainers: n, contains(v) {
    return n().some((s) => s.contains(v));
  }, mainTreeNodeRef: t, MainTreeNode() {
    return u != null ? null : ve(We, { features: Ne.Hidden, ref: t });
  } };
}
function Mo() {
  let e = J(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return ve(We, { features: Ne.Hidden, ref: e });
  } };
}
var So = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(So || {});
let St = Symbol("PopoverContext");
function nt(e) {
  let r = De(St, null);
  if (r === null) {
    let u = new Error(`<${e} /> is missing a parent <${Vt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u, nt), u;
  }
  return r;
}
let Dt = Symbol("PopoverGroupContext");
function Ot() {
  return De(Dt, null);
}
let Pt = Symbol("PopoverPanelContext");
function Do() {
  return De(Pt, null);
}
let Vt = de({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: r, attrs: u, expose: t }) {
  var a;
  let n = J(null);
  t({ el: n, $el: n });
  let v = J(1), s = J(null), h = J(null), c = J(null), g = J(null), b = ue(() => Ae(n)), S = ue(() => {
    var T, O;
    if (!H(s) || !H(g))
      return !1;
    for (let q of document.querySelectorAll("body > *"))
      if (Number(q == null ? void 0 : q.contains(H(s))) ^ Number(q == null ? void 0 : q.contains(H(g))))
        return !0;
    let l = at(), o = l.indexOf(H(s)), R = (o + l.length - 1) % l.length, N = (o + 1) % l.length, _ = l[R], K = l[N];
    return !((T = H(g)) != null && T.contains(_)) && !((O = H(g)) != null && O.contains(K));
  }), V = { popoverState: v, buttonId: J(null), panelId: J(null), panel: g, button: s, isPortalled: S, beforePanelSentinel: h, afterPanelSentinel: c, togglePopover() {
    v.value = Oe(v.value, { 0: 1, 1: 0 });
  }, closePopover() {
    v.value !== 1 && (v.value = 1);
  }, close(T) {
    V.closePopover();
    let O = (() => T ? T instanceof HTMLElement ? T : T.value instanceof HTMLElement ? H(T) : H(V.button) : H(V.button))();
    O == null || O.focus();
  } };
  se(St, V), io(ue(() => Oe(v.value, { 0: Le.Open, 1: Le.Closed })));
  let I = { buttonId: V.buttonId, panelId: V.panelId, close() {
    V.closePopover();
  } }, x = Ot(), D = x == null ? void 0 : x.registerPopover, [E, k] = _o(), w = $o({ mainTreeNodeRef: x == null ? void 0 : x.mainTreeNodeRef, portals: E, defaultContainers: [s, g] });
  function P() {
    var T, O, l, o;
    return (o = x == null ? void 0 : x.isFocusWithinPopoverGroup()) != null ? o : ((T = b.value) == null ? void 0 : T.activeElement) && (((O = H(s)) == null ? void 0 : O.contains(b.value.activeElement)) || ((l = H(g)) == null ? void 0 : l.contains(b.value.activeElement)));
  }
  return _e(() => D == null ? void 0 : D(I)), wo((a = b.value) == null ? void 0 : a.defaultView, "focus", (T) => {
    var O, l;
    T.target !== window && T.target instanceof HTMLElement && v.value === 0 && (P() || s && g && (w.contains(T.target) || (O = H(V.beforePanelSentinel)) != null && O.contains(T.target) || (l = H(V.afterPanelSentinel)) != null && l.contains(T.target) || V.closePopover()));
  }, !0), xo(w.resolveContainers, (T, O) => {
    var l;
    V.closePopover(), kt(O, dt.Loose) || (T.preventDefault(), (l = H(s)) == null || l.focus());
  }, ue(() => v.value === 0)), () => {
    let T = { open: v.value === 0, close: V.close };
    return ve(xe, [ve(k, {}, () => Pe({ theirProps: { ...e, ...u }, ourProps: { ref: n }, slot: T, slots: r, attrs: u, name: "Popover" })), ve(w.MainTreeNode)]);
  };
} }), Oo = de({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Be()}` } }, inheritAttrs: !1, setup(e, { attrs: r, slots: u, expose: t }) {
  let a = nt("PopoverButton"), n = ue(() => Ae(a.button));
  t({ el: a.button, $el: a.button }), ot(() => {
    a.buttonId.value = e.id;
  }), et(() => {
    a.buttonId.value = null;
  });
  let v = Ot(), s = v == null ? void 0 : v.closeOthers, h = Do(), c = ue(() => h === null ? !1 : h.value === a.panelId.value), g = J(null), b = `headlessui-focus-sentinel-${Be()}`;
  c.value || _e(() => {
    a.button.value = g.value;
  });
  let S = co(ue(() => ({ as: e.as, type: r.type })), g);
  function V(w) {
    var P, T, O, l, o;
    if (c.value) {
      if (a.popoverState.value === 1)
        return;
      switch (w.key) {
        case Ve.Space:
        case Ve.Enter:
          w.preventDefault(), (T = (P = w.target).click) == null || T.call(P), a.closePopover(), (O = H(a.button)) == null || O.focus();
          break;
      }
    } else
      switch (w.key) {
        case Ve.Space:
        case Ve.Enter:
          w.preventDefault(), w.stopPropagation(), a.popoverState.value === 1 && (s == null || s(a.buttonId.value)), a.togglePopover();
          break;
        case Ve.Escape:
          if (a.popoverState.value !== 0)
            return s == null ? void 0 : s(a.buttonId.value);
          if (!H(a.button) || (l = n.value) != null && l.activeElement && !((o = H(a.button)) != null && o.contains(n.value.activeElement)))
            return;
          w.preventDefault(), w.stopPropagation(), a.closePopover();
          break;
      }
  }
  function I(w) {
    c.value || w.key === Ve.Space && w.preventDefault();
  }
  function x(w) {
    var P, T;
    e.disabled || (c.value ? (a.closePopover(), (P = H(a.button)) == null || P.focus()) : (w.preventDefault(), w.stopPropagation(), a.popoverState.value === 1 && (s == null || s(a.buttonId.value)), a.togglePopover(), (T = H(a.button)) == null || T.focus()));
  }
  function D(w) {
    w.preventDefault(), w.stopPropagation();
  }
  let E = _t();
  function k() {
    let w = H(a.panel);
    if (!w)
      return;
    function P() {
      Oe(E.value, { [Se.Forwards]: () => Ee(w, Me.First), [Se.Backwards]: () => Ee(w, Me.Last) }) === tt.Error && Ee(at().filter((T) => T.dataset.headlessuiFocusGuard !== "true"), Oe(E.value, { [Se.Forwards]: Me.Next, [Se.Backwards]: Me.Previous }), { relativeTo: H(a.button) });
    }
    P();
  }
  return () => {
    let w = a.popoverState.value === 0, P = { open: w }, { id: T, ...O } = e, l = c.value ? { ref: g, type: S.value, onKeydown: V, onClick: x } : { ref: g, id: T, type: S.value, "aria-expanded": a.popoverState.value === 0, "aria-controls": H(a.panel) ? a.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: V, onKeyup: I, onClick: x, onMousedown: D };
    return ve(xe, [Pe({ ourProps: l, theirProps: { ...r, ...O }, slot: P, attrs: r, slots: u, name: "PopoverButton" }), w && !c.value && a.isPortalled.value && ve(We, { id: b, features: Ne.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: k })]);
  };
} }), Po = de({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: r, slots: u }) {
  let t = nt("PopoverOverlay"), a = `headlessui-popover-overlay-${Be()}`, n = wt(), v = ue(() => n !== null ? (n.value & Le.Open) === Le.Open : t.popoverState.value === 0);
  function s() {
    t.closePopover();
  }
  return () => {
    let h = { open: t.popoverState.value === 0 };
    return Pe({ ourProps: { id: a, "aria-hidden": !0, onClick: s }, theirProps: e, slot: h, attrs: r, slots: u, features: ze.RenderStrategy | ze.Static, visible: v.value, name: "PopoverOverlay" });
  };
} }), Vo = de({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Be()}` } }, inheritAttrs: !1, setup(e, { attrs: r, slots: u, expose: t }) {
  let { focus: a } = e, n = nt("PopoverPanel"), v = ue(() => Ae(n.panel)), s = `headlessui-focus-sentinel-before-${Be()}`, h = `headlessui-focus-sentinel-after-${Be()}`;
  t({ el: n.panel, $el: n.panel }), ot(() => {
    n.panelId.value = e.id;
  }), et(() => {
    n.panelId.value = null;
  }), se(Pt, n.panelId), _e(() => {
    var D, E;
    if (!a || n.popoverState.value !== 0 || !n.panel)
      return;
    let k = (D = v.value) == null ? void 0 : D.activeElement;
    (E = H(n.panel)) != null && E.contains(k) || Ee(H(n.panel), Me.First);
  });
  let c = wt(), g = ue(() => c !== null ? (c.value & Le.Open) === Le.Open : n.popoverState.value === 0);
  function b(D) {
    var E, k;
    switch (D.key) {
      case Ve.Escape:
        if (n.popoverState.value !== 0 || !H(n.panel) || v.value && !((E = H(n.panel)) != null && E.contains(v.value.activeElement)))
          return;
        D.preventDefault(), D.stopPropagation(), n.closePopover(), (k = H(n.button)) == null || k.focus();
        break;
    }
  }
  function S(D) {
    var E, k, w, P, T;
    let O = D.relatedTarget;
    O && H(n.panel) && ((E = H(n.panel)) != null && E.contains(O) || (n.closePopover(), ((w = (k = H(n.beforePanelSentinel)) == null ? void 0 : k.contains) != null && w.call(k, O) || (T = (P = H(n.afterPanelSentinel)) == null ? void 0 : P.contains) != null && T.call(P, O)) && O.focus({ preventScroll: !0 })));
  }
  let V = _t();
  function I() {
    let D = H(n.panel);
    if (!D)
      return;
    function E() {
      Oe(V.value, { [Se.Forwards]: () => {
        var k;
        Ee(D, Me.First) === tt.Error && ((k = H(n.afterPanelSentinel)) == null || k.focus());
      }, [Se.Backwards]: () => {
        var k;
        (k = H(n.button)) == null || k.focus({ preventScroll: !0 });
      } });
    }
    E();
  }
  function x() {
    let D = H(n.panel);
    if (!D)
      return;
    function E() {
      Oe(V.value, { [Se.Forwards]: () => {
        let k = H(n.button), w = H(n.panel);
        if (!k)
          return;
        let P = at(), T = P.indexOf(k), O = P.slice(0, T + 1), l = [...P.slice(T + 1), ...O];
        for (let o of l.slice())
          if (o.dataset.headlessuiFocusGuard === "true" || w != null && w.contains(o)) {
            let R = l.indexOf(o);
            R !== -1 && l.splice(R, 1);
          }
        Ee(l, Me.First, { sorted: !1 });
      }, [Se.Backwards]: () => {
        var k;
        Ee(D, Me.Previous) === tt.Error && ((k = H(n.button)) == null || k.focus());
      } });
    }
    E();
  }
  return () => {
    let D = { open: n.popoverState.value === 0, close: n.close }, { id: E, focus: k, ...w } = e, P = { ref: n.panel, id: E, onKeydown: b, onFocusout: a && n.popoverState.value === 0 ? S : void 0, tabIndex: -1 };
    return Pe({ ourProps: P, theirProps: { ...r, ...w }, attrs: r, slot: D, slots: { ...u, default: (...T) => {
      var O;
      return [ve(xe, [g.value && n.isPortalled.value && ve(We, { id: s, ref: n.beforePanelSentinel, features: Ne.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: I }), (O = u.default) == null ? void 0 : O.call(u, ...T), g.value && n.isPortalled.value && ve(We, { id: h, ref: n.afterPanelSentinel, features: Ne.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: x })])];
    } }, features: ze.RenderStrategy | ze.Static, visible: g.value, name: "PopoverPanel" });
  };
} });
de({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: r, slots: u, expose: t }) {
  let a = J(null), n = Qt([]), v = ue(() => Ae(a)), s = Mo();
  t({ el: a, $el: a });
  function h(S) {
    let V = n.value.indexOf(S);
    V !== -1 && n.value.splice(V, 1);
  }
  function c(S) {
    return n.value.push(S), () => {
      h(S);
    };
  }
  function g() {
    var S;
    let V = v.value;
    if (!V)
      return !1;
    let I = V.activeElement;
    return (S = H(a)) != null && S.contains(I) ? !0 : n.value.some((x) => {
      var D, E;
      return ((D = V.getElementById(x.buttonId.value)) == null ? void 0 : D.contains(I)) || ((E = V.getElementById(x.panelId.value)) == null ? void 0 : E.contains(I));
    });
  }
  function b(S) {
    for (let V of n.value)
      V.buttonId.value !== S && V.close();
  }
  return se(Dt, { registerPopover: c, unregisterPopover: h, isFocusWithinPopoverGroup: g, closeOthers: b, mainTreeNodeRef: s.mainTreeNodeRef }), () => ve(xe, [Pe({ ourProps: { ref: a }, theirProps: { ...e, ...r }, slot: {}, attrs: r, slots: u, name: "PopoverGroup" }), ve(s.MainTreeNode)]);
} });
var Ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ce(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tt = { exports: {} };
(function(e, r) {
  (function(u, t) {
    e.exports = t();
  })(Ye, function() {
    var u = 1e3, t = 6e4, a = 36e5, n = "millisecond", v = "second", s = "minute", h = "hour", c = "day", g = "week", b = "month", S = "quarter", V = "year", I = "date", x = "Invalid Date", D = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, E = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, k = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(C) {
      var y = ["th", "st", "nd", "rd"], M = C % 100;
      return "[" + C + (y[(M - 20) % 10] || y[M] || y[0]) + "]";
    } }, w = function(C, y, M) {
      var A = String(C);
      return !A || A.length >= y ? C : "" + Array(y + 1 - A.length).join(M) + C;
    }, P = { s: w, z: function(C) {
      var y = -C.utcOffset(), M = Math.abs(y), A = Math.floor(M / 60), $ = M % 60;
      return (y <= 0 ? "+" : "-") + w(A, 2, "0") + ":" + w($, 2, "0");
    }, m: function C(y, M) {
      if (y.date() < M.date())
        return -C(M, y);
      var A = 12 * (M.year() - y.year()) + (M.month() - y.month()), $ = y.clone().add(A, b), B = M - $ < 0, F = y.clone().add(A + (B ? -1 : 1), b);
      return +(-(A + (M - $) / (B ? $ - F : F - $)) || 0);
    }, a: function(C) {
      return C < 0 ? Math.ceil(C) || 0 : Math.floor(C);
    }, p: function(C) {
      return { M: b, y: V, w: g, d: c, D: I, h, m: s, s: v, ms: n, Q: S }[C] || String(C || "").toLowerCase().replace(/s$/, "");
    }, u: function(C) {
      return C === void 0;
    } }, T = "en", O = {};
    O[T] = k;
    var l = "$isDayjsObject", o = function(C) {
      return C instanceof K || !(!C || !C[l]);
    }, R = function C(y, M, A) {
      var $;
      if (!y)
        return T;
      if (typeof y == "string") {
        var B = y.toLowerCase();
        O[B] && ($ = B), M && (O[B] = M, $ = B);
        var F = y.split("-");
        if (!$ && F.length > 1)
          return C(F[0]);
      } else {
        var G = y.name;
        O[G] = y, $ = G;
      }
      return !A && $ && (T = $), $ || !A && T;
    }, N = function(C, y) {
      if (o(C))
        return C.clone();
      var M = typeof y == "object" ? y : {};
      return M.date = C, M.args = arguments, new K(M);
    }, _ = P;
    _.l = R, _.i = o, _.w = function(C, y) {
      return N(C, { locale: y.$L, utc: y.$u, x: y.$x, $offset: y.$offset });
    };
    var K = function() {
      function C(M) {
        this.$L = R(M.locale, null, !0), this.parse(M), this.$x = this.$x || M.x || {}, this[l] = !0;
      }
      var y = C.prototype;
      return y.parse = function(M) {
        this.$d = function(A) {
          var $ = A.date, B = A.utc;
          if ($ === null)
            return /* @__PURE__ */ new Date(NaN);
          if (_.u($))
            return /* @__PURE__ */ new Date();
          if ($ instanceof Date)
            return new Date($);
          if (typeof $ == "string" && !/Z$/i.test($)) {
            var F = $.match(D);
            if (F) {
              var G = F[2] - 1 || 0, Q = (F[7] || "0").substring(0, 3);
              return B ? new Date(Date.UTC(F[1], G, F[3] || 1, F[4] || 0, F[5] || 0, F[6] || 0, Q)) : new Date(F[1], G, F[3] || 1, F[4] || 0, F[5] || 0, F[6] || 0, Q);
            }
          }
          return new Date($);
        }(M), this.init();
      }, y.init = function() {
        var M = this.$d;
        this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
      }, y.$utils = function() {
        return _;
      }, y.isValid = function() {
        return this.$d.toString() !== x;
      }, y.isSame = function(M, A) {
        var $ = N(M);
        return this.startOf(A) <= $ && $ <= this.endOf(A);
      }, y.isAfter = function(M, A) {
        return N(M) < this.startOf(A);
      }, y.isBefore = function(M, A) {
        return this.endOf(A) < N(M);
      }, y.$g = function(M, A, $) {
        return _.u(M) ? this[A] : this.set($, M);
      }, y.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, y.valueOf = function() {
        return this.$d.getTime();
      }, y.startOf = function(M, A) {
        var $ = this, B = !!_.u(A) || A, F = _.p(M), G = function(he, re) {
          var fe = _.w($.$u ? Date.UTC($.$y, re, he) : new Date($.$y, re, he), $);
          return B ? fe : fe.endOf(c);
        }, Q = function(he, re) {
          return _.w($.toDate()[he].apply($.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(re)), $);
        }, te = this.$W, oe = this.$M, ie = this.$D, we = "set" + (this.$u ? "UTC" : "");
        switch (F) {
          case V:
            return B ? G(1, 0) : G(31, 11);
          case b:
            return B ? G(1, oe) : G(0, oe + 1);
          case g:
            var ne = this.$locale().weekStart || 0, be = (te < ne ? te + 7 : te) - ne;
            return G(B ? ie - be : ie + (6 - be), oe);
          case c:
          case I:
            return Q(we + "Hours", 0);
          case h:
            return Q(we + "Minutes", 1);
          case s:
            return Q(we + "Seconds", 2);
          case v:
            return Q(we + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, y.endOf = function(M) {
        return this.startOf(M, !1);
      }, y.$set = function(M, A) {
        var $, B = _.p(M), F = "set" + (this.$u ? "UTC" : ""), G = ($ = {}, $[c] = F + "Date", $[I] = F + "Date", $[b] = F + "Month", $[V] = F + "FullYear", $[h] = F + "Hours", $[s] = F + "Minutes", $[v] = F + "Seconds", $[n] = F + "Milliseconds", $)[B], Q = B === c ? this.$D + (A - this.$W) : A;
        if (B === b || B === V) {
          var te = this.clone().set(I, 1);
          te.$d[G](Q), te.init(), this.$d = te.set(I, Math.min(this.$D, te.daysInMonth())).$d;
        } else
          G && this.$d[G](Q);
        return this.init(), this;
      }, y.set = function(M, A) {
        return this.clone().$set(M, A);
      }, y.get = function(M) {
        return this[_.p(M)]();
      }, y.add = function(M, A) {
        var $, B = this;
        M = Number(M);
        var F = _.p(A), G = function(oe) {
          var ie = N(B);
          return _.w(ie.date(ie.date() + Math.round(oe * M)), B);
        };
        if (F === b)
          return this.set(b, this.$M + M);
        if (F === V)
          return this.set(V, this.$y + M);
        if (F === c)
          return G(1);
        if (F === g)
          return G(7);
        var Q = ($ = {}, $[s] = t, $[h] = a, $[v] = u, $)[F] || 1, te = this.$d.getTime() + M * Q;
        return _.w(te, this);
      }, y.subtract = function(M, A) {
        return this.add(-1 * M, A);
      }, y.format = function(M) {
        var A = this, $ = this.$locale();
        if (!this.isValid())
          return $.invalidDate || x;
        var B = M || "YYYY-MM-DDTHH:mm:ssZ", F = _.z(this), G = this.$H, Q = this.$m, te = this.$M, oe = $.weekdays, ie = $.months, we = $.meridiem, ne = function(re, fe, ge, ke) {
          return re && (re[fe] || re(A, B)) || ge[fe].slice(0, ke);
        }, be = function(re) {
          return _.s(G % 12 || 12, re, "0");
        }, he = we || function(re, fe, ge) {
          var ke = re < 12 ? "AM" : "PM";
          return ge ? ke.toLowerCase() : ke;
        };
        return B.replace(E, function(re, fe) {
          return fe || function(ge) {
            switch (ge) {
              case "YY":
                return String(A.$y).slice(-2);
              case "YYYY":
                return _.s(A.$y, 4, "0");
              case "M":
                return te + 1;
              case "MM":
                return _.s(te + 1, 2, "0");
              case "MMM":
                return ne($.monthsShort, te, ie, 3);
              case "MMMM":
                return ne(ie, te);
              case "D":
                return A.$D;
              case "DD":
                return _.s(A.$D, 2, "0");
              case "d":
                return String(A.$W);
              case "dd":
                return ne($.weekdaysMin, A.$W, oe, 2);
              case "ddd":
                return ne($.weekdaysShort, A.$W, oe, 3);
              case "dddd":
                return oe[A.$W];
              case "H":
                return String(G);
              case "HH":
                return _.s(G, 2, "0");
              case "h":
                return be(1);
              case "hh":
                return be(2);
              case "a":
                return he(G, Q, !0);
              case "A":
                return he(G, Q, !1);
              case "m":
                return String(Q);
              case "mm":
                return _.s(Q, 2, "0");
              case "s":
                return String(A.$s);
              case "ss":
                return _.s(A.$s, 2, "0");
              case "SSS":
                return _.s(A.$ms, 3, "0");
              case "Z":
                return F;
            }
            return null;
          }(re) || F.replace(":", "");
        });
      }, y.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, y.diff = function(M, A, $) {
        var B, F = this, G = _.p(A), Q = N(M), te = (Q.utcOffset() - this.utcOffset()) * t, oe = this - Q, ie = function() {
          return _.m(F, Q);
        };
        switch (G) {
          case V:
            B = ie() / 12;
            break;
          case b:
            B = ie();
            break;
          case S:
            B = ie() / 3;
            break;
          case g:
            B = (oe - te) / 6048e5;
            break;
          case c:
            B = (oe - te) / 864e5;
            break;
          case h:
            B = oe / a;
            break;
          case s:
            B = oe / t;
            break;
          case v:
            B = oe / u;
            break;
          default:
            B = oe;
        }
        return $ ? B : _.a(B);
      }, y.daysInMonth = function() {
        return this.endOf(b).$D;
      }, y.$locale = function() {
        return O[this.$L];
      }, y.locale = function(M, A) {
        if (!M)
          return this.$L;
        var $ = this.clone(), B = R(M, A, !0);
        return B && ($.$L = B), $;
      }, y.clone = function() {
        return _.w(this.$d, this);
      }, y.toDate = function() {
        return new Date(this.valueOf());
      }, y.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, y.toISOString = function() {
        return this.$d.toISOString();
      }, y.toString = function() {
        return this.$d.toUTCString();
      }, C;
    }(), q = K.prototype;
    return N.prototype = q, [["$ms", n], ["$s", v], ["$m", s], ["$H", h], ["$W", c], ["$M", b], ["$y", V], ["$D", I]].forEach(function(C) {
      q[C[1]] = function(y) {
        return this.$g(y, C[0], C[1]);
      };
    }), N.extend = function(C, y) {
      return C.$i || (C(y, K, N), C.$i = !0), N;
    }, N.locale = R, N.isDayjs = o, N.unix = function(C) {
      return N(1e3 * C);
    }, N.en = O[T], N.Ls = O, N.p = {}, N;
  });
})(Tt);
var To = Tt.exports;
const i = /* @__PURE__ */ Ce(To);
var At = { exports: {} };
(function(e, r) {
  (function(u, t) {
    e.exports = t();
  })(Ye, function() {
    return function(u, t, a) {
      var n = t.prototype, v = function(b) {
        return b && (b.indexOf ? b : b.s);
      }, s = function(b, S, V, I, x) {
        var D = b.name ? b : b.$locale(), E = v(D[S]), k = v(D[V]), w = E || k.map(function(T) {
          return T.slice(0, I);
        });
        if (!x)
          return w;
        var P = D.weekStart;
        return w.map(function(T, O) {
          return w[(O + (P || 0)) % 7];
        });
      }, h = function() {
        return a.Ls[a.locale()];
      }, c = function(b, S) {
        return b.formats[S] || function(V) {
          return V.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(I, x, D) {
            return x || D.slice(1);
          });
        }(b.formats[S.toUpperCase()]);
      }, g = function() {
        var b = this;
        return { months: function(S) {
          return S ? S.format("MMMM") : s(b, "months");
        }, monthsShort: function(S) {
          return S ? S.format("MMM") : s(b, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return b.$locale().weekStart || 0;
        }, weekdays: function(S) {
          return S ? S.format("dddd") : s(b, "weekdays");
        }, weekdaysMin: function(S) {
          return S ? S.format("dd") : s(b, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(S) {
          return S ? S.format("ddd") : s(b, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(S) {
          return c(b.$locale(), S);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      n.localeData = function() {
        return g.bind(this)();
      }, a.localeData = function() {
        var b = h();
        return { firstDayOfWeek: function() {
          return b.weekStart || 0;
        }, weekdays: function() {
          return a.weekdays();
        }, weekdaysShort: function() {
          return a.weekdaysShort();
        }, weekdaysMin: function() {
          return a.weekdaysMin();
        }, months: function() {
          return a.months();
        }, monthsShort: function() {
          return a.monthsShort();
        }, longDateFormat: function(S) {
          return c(b, S);
        }, meridiem: b.meridiem, ordinal: b.ordinal };
      }, a.months = function() {
        return s(h(), "months");
      }, a.monthsShort = function() {
        return s(h(), "monthsShort", "months", 3);
      }, a.weekdays = function(b) {
        return s(h(), "weekdays", null, null, b);
      }, a.weekdaysShort = function(b) {
        return s(h(), "weekdaysShort", "weekdays", 3, b);
      }, a.weekdaysMin = function(b) {
        return s(h(), "weekdaysMin", "weekdays", 2, b);
      };
    };
  });
})(At);
var Ao = At.exports;
const Yo = /* @__PURE__ */ Ce(Ao);
var Yt = { exports: {} };
(function(e, r) {
  (function(u, t) {
    e.exports = t();
  })(Ye, function() {
    var u = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, a, n) {
      var v = a.prototype, s = v.format;
      n.en.formats = u, v.format = function(h) {
        h === void 0 && (h = "YYYY-MM-DDTHH:mm:ssZ");
        var c = this.$locale().formats, g = function(b, S) {
          return b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(V, I, x) {
            var D = x && x.toUpperCase();
            return I || S[x] || u[x] || S[D].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(E, k, w) {
              return k || w.slice(1);
            });
          });
        }(h, c === void 0 ? {} : c);
        return s.call(this, g);
      };
    };
  });
})(Yt);
var Co = Yt.exports;
const Eo = /* @__PURE__ */ Ce(Co);
var Ct = { exports: {} };
(function(e, r) {
  (function(u, t) {
    e.exports = t();
  })(Ye, function() {
    var u = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d\d/, n = /\d\d?/, v = /\d*[^-_:/,()\s\d]+/, s = {}, h = function(x) {
      return (x = +x) + (x > 68 ? 1900 : 2e3);
    }, c = function(x) {
      return function(D) {
        this[x] = +D;
      };
    }, g = [/[+-]\d\d:?(\d\d)?|Z/, function(x) {
      (this.zone || (this.zone = {})).offset = function(D) {
        if (!D || D === "Z")
          return 0;
        var E = D.match(/([+-]|\d\d)/g), k = 60 * E[1] + (+E[2] || 0);
        return k === 0 ? 0 : E[0] === "+" ? -k : k;
      }(x);
    }], b = function(x) {
      var D = s[x];
      return D && (D.indexOf ? D : D.s.concat(D.f));
    }, S = function(x, D) {
      var E, k = s.meridiem;
      if (k) {
        for (var w = 1; w <= 24; w += 1)
          if (x.indexOf(k(w, 0, D)) > -1) {
            E = w > 12;
            break;
          }
      } else
        E = x === (D ? "pm" : "PM");
      return E;
    }, V = { A: [v, function(x) {
      this.afternoon = S(x, !1);
    }], a: [v, function(x) {
      this.afternoon = S(x, !0);
    }], S: [/\d/, function(x) {
      this.milliseconds = 100 * +x;
    }], SS: [a, function(x) {
      this.milliseconds = 10 * +x;
    }], SSS: [/\d{3}/, function(x) {
      this.milliseconds = +x;
    }], s: [n, c("seconds")], ss: [n, c("seconds")], m: [n, c("minutes")], mm: [n, c("minutes")], H: [n, c("hours")], h: [n, c("hours")], HH: [n, c("hours")], hh: [n, c("hours")], D: [n, c("day")], DD: [a, c("day")], Do: [v, function(x) {
      var D = s.ordinal, E = x.match(/\d+/);
      if (this.day = E[0], D)
        for (var k = 1; k <= 31; k += 1)
          D(k).replace(/\[|\]/g, "") === x && (this.day = k);
    }], M: [n, c("month")], MM: [a, c("month")], MMM: [v, function(x) {
      var D = b("months"), E = (b("monthsShort") || D.map(function(k) {
        return k.slice(0, 3);
      })).indexOf(x) + 1;
      if (E < 1)
        throw new Error();
      this.month = E % 12 || E;
    }], MMMM: [v, function(x) {
      var D = b("months").indexOf(x) + 1;
      if (D < 1)
        throw new Error();
      this.month = D % 12 || D;
    }], Y: [/[+-]?\d+/, c("year")], YY: [a, function(x) {
      this.year = h(x);
    }], YYYY: [/\d{4}/, c("year")], Z: g, ZZ: g };
    function I(x) {
      var D, E;
      D = x, E = s && s.formats;
      for (var k = (x = D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(R, N, _) {
        var K = _ && _.toUpperCase();
        return N || E[_] || u[_] || E[K].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(q, C, y) {
          return C || y.slice(1);
        });
      })).match(t), w = k.length, P = 0; P < w; P += 1) {
        var T = k[P], O = V[T], l = O && O[0], o = O && O[1];
        k[P] = o ? { regex: l, parser: o } : T.replace(/^\[|\]$/g, "");
      }
      return function(R) {
        for (var N = {}, _ = 0, K = 0; _ < w; _ += 1) {
          var q = k[_];
          if (typeof q == "string")
            K += q.length;
          else {
            var C = q.regex, y = q.parser, M = R.slice(K), A = C.exec(M)[0];
            y.call(N, A), R = R.replace(A, "");
          }
        }
        return function($) {
          var B = $.afternoon;
          if (B !== void 0) {
            var F = $.hours;
            B ? F < 12 && ($.hours += 12) : F === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(N), N;
      };
    }
    return function(x, D, E) {
      E.p.customParseFormat = !0, x && x.parseTwoDigitYear && (h = x.parseTwoDigitYear);
      var k = D.prototype, w = k.parse;
      k.parse = function(P) {
        var T = P.date, O = P.utc, l = P.args;
        this.$u = O;
        var o = l[1];
        if (typeof o == "string") {
          var R = l[2] === !0, N = l[3] === !0, _ = R || N, K = l[2];
          N && (K = l[2]), s = this.$locale(), !R && K && (s = E.Ls[K]), this.$d = function(M, A, $) {
            try {
              if (["x", "X"].indexOf(A) > -1)
                return new Date((A === "X" ? 1e3 : 1) * M);
              var B = I(A)(M), F = B.year, G = B.month, Q = B.day, te = B.hours, oe = B.minutes, ie = B.seconds, we = B.milliseconds, ne = B.zone, be = /* @__PURE__ */ new Date(), he = Q || (F || G ? 1 : be.getDate()), re = F || be.getFullYear(), fe = 0;
              F && !G || (fe = G > 0 ? G - 1 : be.getMonth());
              var ge = te || 0, ke = oe || 0, Re = ie || 0, Ie = we || 0;
              return ne ? new Date(Date.UTC(re, fe, he, ge, ke, Re, Ie + 60 * ne.offset * 1e3)) : $ ? new Date(Date.UTC(re, fe, he, ge, ke, Re, Ie)) : new Date(re, fe, he, ge, ke, Re, Ie);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(T, o, O), this.init(), K && K !== !0 && (this.$L = this.locale(K).$L), _ && T != this.format(o) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
        } else if (o instanceof Array)
          for (var q = o.length, C = 1; C <= q; C += 1) {
            l[1] = o[C - 1];
            var y = E.apply(this, l);
            if (y.isValid()) {
              this.$d = y.$d, this.$L = y.$L, this.init();
              break;
            }
            C === q && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          w.call(this, P);
      };
    };
  });
})(Ct);
var Lo = Ct.exports;
const Fo = /* @__PURE__ */ Ce(Lo);
var Et = { exports: {} };
(function(e, r) {
  (function(u, t) {
    e.exports = t();
  })(Ye, function() {
    return function(u, t, a) {
      t.prototype.isToday = function() {
        var n = "YYYY-MM-DD", v = a();
        return this.format(n) === v.format(n);
      };
    };
  });
})(Et);
var Bo = Et.exports;
const No = /* @__PURE__ */ Ce(Bo);
var Lt = { exports: {} };
(function(e, r) {
  (function(u, t) {
    e.exports = t();
  })(Ye, function() {
    return function(u, t, a) {
      t.prototype.isBetween = function(n, v, s, h) {
        var c = a(n), g = a(v), b = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (b ? this.isAfter(c, s) : !this.isBefore(c, s)) && (S ? this.isBefore(g, s) : !this.isAfter(g, s)) || (b ? this.isBefore(c, s) : !this.isAfter(c, s)) && (S ? this.isAfter(g, s) : !this.isBefore(g, s));
      };
    };
  });
})(Lt);
var Ro = Lt.exports;
const Io = /* @__PURE__ */ Ce(Ro);
var Ft = { exports: {} };
(function(e, r) {
  (function(u, t) {
    e.exports = t();
  })(Ye, function() {
    var u, t, a = 1e3, n = 6e4, v = 36e5, s = 864e5, h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = 31536e6, g = 2628e6, b = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, S = { years: c, months: g, days: s, hours: v, minutes: n, seconds: a, milliseconds: 1, weeks: 6048e5 }, V = function(O) {
      return O instanceof P;
    }, I = function(O, l, o) {
      return new P(O, o, l.$l);
    }, x = function(O) {
      return t.p(O) + "s";
    }, D = function(O) {
      return O < 0;
    }, E = function(O) {
      return D(O) ? Math.ceil(O) : Math.floor(O);
    }, k = function(O) {
      return Math.abs(O);
    }, w = function(O, l) {
      return O ? D(O) ? { negative: !0, format: "" + k(O) + l } : { negative: !1, format: "" + O + l } : { negative: !1, format: "" };
    }, P = function() {
      function O(o, R, N) {
        var _ = this;
        if (this.$d = {}, this.$l = N, o === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), R)
          return I(o * S[x(R)], this);
        if (typeof o == "number")
          return this.$ms = o, this.parseFromMilliseconds(), this;
        if (typeof o == "object")
          return Object.keys(o).forEach(function(C) {
            _.$d[x(C)] = o[C];
          }), this.calMilliseconds(), this;
        if (typeof o == "string") {
          var K = o.match(b);
          if (K) {
            var q = K.slice(2).map(function(C) {
              return C != null ? Number(C) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var l = O.prototype;
      return l.calMilliseconds = function() {
        var o = this;
        this.$ms = Object.keys(this.$d).reduce(function(R, N) {
          return R + (o.$d[N] || 0) * S[N];
        }, 0);
      }, l.parseFromMilliseconds = function() {
        var o = this.$ms;
        this.$d.years = E(o / c), o %= c, this.$d.months = E(o / g), o %= g, this.$d.days = E(o / s), o %= s, this.$d.hours = E(o / v), o %= v, this.$d.minutes = E(o / n), o %= n, this.$d.seconds = E(o / a), o %= a, this.$d.milliseconds = o;
      }, l.toISOString = function() {
        var o = w(this.$d.years, "Y"), R = w(this.$d.months, "M"), N = +this.$d.days || 0;
        this.$d.weeks && (N += 7 * this.$d.weeks);
        var _ = w(N, "D"), K = w(this.$d.hours, "H"), q = w(this.$d.minutes, "M"), C = this.$d.seconds || 0;
        this.$d.milliseconds && (C += this.$d.milliseconds / 1e3, C = Math.round(1e3 * C) / 1e3);
        var y = w(C, "S"), M = o.negative || R.negative || _.negative || K.negative || q.negative || y.negative, A = K.format || q.format || y.format ? "T" : "", $ = (M ? "-" : "") + "P" + o.format + R.format + _.format + A + K.format + q.format + y.format;
        return $ === "P" || $ === "-P" ? "P0D" : $;
      }, l.toJSON = function() {
        return this.toISOString();
      }, l.format = function(o) {
        var R = o || "YYYY-MM-DDTHH:mm:ss", N = { Y: this.$d.years, YY: t.s(this.$d.years, 2, "0"), YYYY: t.s(this.$d.years, 4, "0"), M: this.$d.months, MM: t.s(this.$d.months, 2, "0"), D: this.$d.days, DD: t.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: t.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: t.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: t.s(this.$d.seconds, 2, "0"), SSS: t.s(this.$d.milliseconds, 3, "0") };
        return R.replace(h, function(_, K) {
          return K || String(N[_]);
        });
      }, l.as = function(o) {
        return this.$ms / S[x(o)];
      }, l.get = function(o) {
        var R = this.$ms, N = x(o);
        return N === "milliseconds" ? R %= 1e3 : R = N === "weeks" ? E(R / S[N]) : this.$d[N], R || 0;
      }, l.add = function(o, R, N) {
        var _;
        return _ = R ? o * S[x(R)] : V(o) ? o.$ms : I(o, this).$ms, I(this.$ms + _ * (N ? -1 : 1), this);
      }, l.subtract = function(o, R) {
        return this.add(o, R, !0);
      }, l.locale = function(o) {
        var R = this.clone();
        return R.$l = o, R;
      }, l.clone = function() {
        return I(this.$ms, this);
      }, l.humanize = function(o) {
        return u().add(this.$ms, "ms").locale(this.$l).fromNow(!o);
      }, l.valueOf = function() {
        return this.asMilliseconds();
      }, l.milliseconds = function() {
        return this.get("milliseconds");
      }, l.asMilliseconds = function() {
        return this.as("milliseconds");
      }, l.seconds = function() {
        return this.get("seconds");
      }, l.asSeconds = function() {
        return this.as("seconds");
      }, l.minutes = function() {
        return this.get("minutes");
      }, l.asMinutes = function() {
        return this.as("minutes");
      }, l.hours = function() {
        return this.get("hours");
      }, l.asHours = function() {
        return this.as("hours");
      }, l.days = function() {
        return this.get("days");
      }, l.asDays = function() {
        return this.as("days");
      }, l.weeks = function() {
        return this.get("weeks");
      }, l.asWeeks = function() {
        return this.as("weeks");
      }, l.months = function() {
        return this.get("months");
      }, l.asMonths = function() {
        return this.as("months");
      }, l.years = function() {
        return this.get("years");
      }, l.asYears = function() {
        return this.as("years");
      }, O;
    }(), T = function(O, l, o) {
      return O.add(l.years() * o, "y").add(l.months() * o, "M").add(l.days() * o, "d").add(l.hours() * o, "h").add(l.minutes() * o, "m").add(l.seconds() * o, "s").add(l.milliseconds() * o, "ms");
    };
    return function(O, l, o) {
      u = o, t = o().$utils(), o.duration = function(_, K) {
        var q = o.locale();
        return I(_, { $l: q }, K);
      }, o.isDuration = V;
      var R = l.prototype.add, N = l.prototype.subtract;
      l.prototype.add = function(_, K) {
        return V(_) ? T(this, _, 1) : R.bind(this)(_, K);
      }, l.prototype.subtract = function(_, K) {
        return V(_) ? T(this, _, -1) : N.bind(this)(_, K);
      };
    };
  });
})(Ft);
var Ho = Ft.exports;
const Uo = /* @__PURE__ */ Ce(Ho);
var Bt = { exports: {} };
(function(e, r) {
  (function(u, t) {
    e.exports = t();
  })(Ye, function() {
    var u = "week", t = "year";
    return function(a, n, v) {
      var s = n.prototype;
      s.week = function(h) {
        if (h === void 0 && (h = null), h !== null)
          return this.add(7 * (h - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var g = v(this).startOf(t).add(1, t).date(c), b = v(this).endOf(u);
          if (g.isBefore(b))
            return 1;
        }
        var S = v(this).startOf(t).date(c).startOf(u).subtract(1, "millisecond"), V = this.diff(S, u, !0);
        return V < 0 ? v(this).startOf("week").week() : Math.ceil(V);
      }, s.weeks = function(h) {
        return h === void 0 && (h = null), this.week(h);
      };
    };
  });
})(Bt);
var zo = Bt.exports;
const Wo = /* @__PURE__ */ Ce(zo);
function je(e, r) {
  const u = De(e, r);
  if (!u)
    throw new Error(`Could not resolve ${e.description}`);
  return u;
}
const pt = Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({ "../node_modules/dayjs/esm/locale/af.js": () => import("./af-3f5e3754.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/am.js": () => import("./am-bc833d79.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-dz.js": () => import("./ar-dz-2b677c27.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-iq.js": () => import("./ar-iq-9280b179.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-kw.js": () => import("./ar-kw-06673fb3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-ly.js": () => import("./ar-ly-b364c556.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-ma.js": () => import("./ar-ma-e9b96f88.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-sa.js": () => import("./ar-sa-920b6966.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-tn.js": () => import("./ar-tn-5d2ebe87.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar.js": () => import("./ar-a3aa818f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/az.js": () => import("./az-659b56f9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/be.js": () => import("./be-3b4f9783.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bg.js": () => import("./bg-0672cd7d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bi.js": () => import("./bi-951682c2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bm.js": () => import("./bm-9d7e855b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bn-bd.js": () => import("./bn-bd-087a7a1c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bn.js": () => import("./bn-0c0acd44.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bo.js": () => import("./bo-19632568.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/br.js": () => import("./br-5a3443b7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bs.js": () => import("./bs-ad641200.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ca.js": () => import("./ca-035ea682.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cs.js": () => import("./cs-debeec9e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cv.js": () => import("./cv-dcf48c54.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cy.js": () => import("./cy-daa2e33d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/da.js": () => import("./da-dc449cac.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de-at.js": () => import("./de-at-5acf665a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de-ch.js": () => import("./de-ch-6b981a67.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de.js": () => import("./de-77586bc3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/dv.js": () => import("./dv-65849a7f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/el.js": () => import("./el-ae4ad393.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-au.js": () => import("./en-au-8c36e702.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-ca.js": () => import("./en-ca-c5437740.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-gb.js": () => import("./en-gb-c2cc134a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-ie.js": () => import("./en-ie-d3ac9ac2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-il.js": () => import("./en-il-6dd24280.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-in.js": () => import("./en-in-2f2879f3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-nz.js": () => import("./en-nz-c996ce95.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-sg.js": () => import("./en-sg-278f7244.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-tt.js": () => import("./en-tt-dcca6678.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en.js": () => import("./en-4402d6fc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/eo.js": () => import("./eo-2b962c7e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-do.js": () => import("./es-do-e5ec18dc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-mx.js": () => import("./es-mx-0b0fdda9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-pr.js": () => import("./es-pr-ecf92870.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-us.js": () => import("./es-us-9a974819.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es.js": () => import("./es-542d397d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/et.js": () => import("./et-cc745c6f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/eu.js": () => import("./eu-1819a0bf.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fa.js": () => import("./fa-759da5ca.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fi.js": () => import("./fi-48c34162.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fo.js": () => import("./fo-1a56e22a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr-ca.js": () => import("./fr-ca-a08d1ab6.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr-ch.js": () => import("./fr-ch-9e54ac3f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr.js": () => import("./fr-34da226b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fy.js": () => import("./fy-32e86ec3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ga.js": () => import("./ga-5443425a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gd.js": () => import("./gd-525324a8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gl.js": () => import("./gl-ecd4c576.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gom-latn.js": () => import("./gom-latn-0de894a4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gu.js": () => import("./gu-f8a9ff06.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/he.js": () => import("./he-c3d5738f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hi.js": () => import("./hi-06d9d378.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hr.js": () => import("./hr-df6e22c2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ht.js": () => import("./ht-560ce1fa.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hu.js": () => import("./hu-36659a19.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hy-am.js": () => import("./hy-am-ec1e6b6f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/id.js": () => import("./id-e83ede43.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/is.js": () => import("./is-112d618e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/it-ch.js": () => import("./it-ch-74dc20fb.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/it.js": () => import("./it-a9bef34d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ja.js": () => import("./ja-81ac0bce.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/jv.js": () => import("./jv-eb80b191.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ka.js": () => import("./ka-408178cc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/kk.js": () => import("./kk-7182d80c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/km.js": () => import("./km-c8d90f37.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/kn.js": () => import("./kn-1ef13da8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ko.js": () => import("./ko-d74dbac1.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ku.js": () => import("./ku-217c312b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ky.js": () => import("./ky-9beeab3e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lb.js": () => import("./lb-bbb0769c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lo.js": () => import("./lo-c0a222fc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lt.js": () => import("./lt-7733040c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lv.js": () => import("./lv-8456bf8c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/me.js": () => import("./me-60049fb4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mi.js": () => import("./mi-a00211ea.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mk.js": () => import("./mk-750f2eb3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ml.js": () => import("./ml-3d864495.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mn.js": () => import("./mn-c3b569a5.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mr.js": () => import("./mr-caa70638.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ms-my.js": () => import("./ms-my-9edfd210.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ms.js": () => import("./ms-8a0b04c8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mt.js": () => import("./mt-5924bb24.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/my.js": () => import("./my-7ec0e79b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nb.js": () => import("./nb-55474232.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ne.js": () => import("./ne-28b71d4d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nl-be.js": () => import("./nl-be-ab2f9375.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nl.js": () => import("./nl-f2df7562.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nn.js": () => import("./nn-ae0c69b8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/oc-lnc.js": () => import("./oc-lnc-e86add7d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pa-in.js": () => import("./pa-in-58db4e88.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pl.js": () => import("./pl-6123f464.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pt-br.js": () => import("./pt-br-72da3648.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pt.js": () => import("./pt-6d21f766.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/rn.js": () => import("./rn-fe91690b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ro.js": () => import("./ro-f0333df1.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ru.js": () => import("./ru-8092165f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/rw.js": () => import("./rw-8e49f17e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sd.js": () => import("./sd-f5f464cc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/se.js": () => import("./se-d0247819.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/si.js": () => import("./si-23229411.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sk.js": () => import("./sk-2ae651e5.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sl.js": () => import("./sl-d651cb86.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sq.js": () => import("./sq-851e451a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sr-cyrl.js": () => import("./sr-cyrl-150c337e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sr.js": () => import("./sr-26ffbdc9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ss.js": () => import("./ss-70c27ddd.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sv-fi.js": () => import("./sv-fi-53a8b8bd.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sv.js": () => import("./sv-bf43bdc9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sw.js": () => import("./sw-3c86b419.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ta.js": () => import("./ta-dde447c0.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/te.js": () => import("./te-d039e67a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tet.js": () => import("./tet-2478e8c8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tg.js": () => import("./tg-374d7196.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/th.js": () => import("./th-cfb73f82.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tk.js": () => import("./tk-6502e590.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tl-ph.js": () => import("./tl-ph-f36e80af.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tlh.js": () => import("./tlh-6d81a812.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tr.js": () => import("./tr-1608d107.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzl.js": () => import("./tzl-e019f0a0.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzm-latn.js": () => import("./tzm-latn-4a3fedcb.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzm.js": () => import("./tzm-9a26d476.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ug-cn.js": () => import("./ug-cn-7370b4b7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uk.js": () => import("./uk-f2be452c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ur.js": () => import("./ur-5e01f781.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uz-latn.js": () => import("./uz-latn-ec9b852e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uz.js": () => import("./uz-f44d7936.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/vi.js": () => import("./vi-8106a30d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/x-pseudo.js": () => import("./x-pseudo-20ac0200.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/yo.js": () => import("./yo-45cb4db7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-cn.js": () => import("./zh-cn-7af2941c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-hk.js": () => import("./zh-hk-857b348c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-tw.js": () => import("./zh-tw-58dac95d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh.js": () => import("./zh-26803c4f.js").then((e) => e.default) })).map(
    ([e, r]) => {
      var u;
      return [(u = e.match(/([\w-]*)\.js$/)) == null ? void 0 : u[1], r];
    }
  )
), Ko = { class: "flex justify-between items-center px-2 py-1.5" }, Go = { class: "flex-shrink-0" }, Zo = { class: "inline-flex rounded-full" }, qo = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Jo = ["d"], Xo = { class: "px-1.5 space-x-1.5 flex flex-1" }, Qo = { class: "flex-1 flex rounded-md" }, er = ["textContent"], tr = { class: "flex-1 flex rounded-md" }, or = ["textContent"], rr = { class: "flex-shrink-0" }, ar = { class: "inline-flex rounded-full" }, nr = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, sr = ["d"], Ze = /* @__PURE__ */ de({
  __name: "Header",
  props: {
    panel: {},
    calendar: {}
  },
  setup(e) {
    return (r, u) => (z(), Z("div", Ko, [
      Y("div", Go, [
        me(Y("span", Zo, [
          Y("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: u[0] || (u[0] = (t) => r.panel.calendar ? r.calendar.onPrevious() : r.calendar.onPreviousYear())
          }, [
            (z(), Z("svg", qo, [
              Y("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: r.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
              }, null, 8, Jo)
            ]))
          ])
        ], 512), [
          [pe, r.panel.calendar || r.panel.year]
        ])
      ]),
      Y("div", Xo, [
        Y("span", Qo, [
          Y("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: u[1] || (u[1] = (t) => r.calendar.openMonth()),
            textContent: ae(r.calendar.month)
          }, null, 8, er)
        ]),
        Y("span", tr, [
          Y("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: u[2] || (u[2] = (t) => r.calendar.openYear()),
            textContent: ae(r.calendar.year)
          }, null, 8, or)
        ])
      ]),
      Y("div", rr, [
        me(Y("span", ar, [
          Y("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: u[3] || (u[3] = (t) => r.panel.calendar ? r.calendar.onNext() : r.calendar.onNextYear())
          }, [
            (z(), Z("svg", nr, [
              Y("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: r.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
              }, null, 8, sr)
            ]))
          ])
        ], 512), [
          [pe, r.panel.calendar || r.panel.year]
        ])
      ])
    ]));
  }
}), Nt = Symbol("isBetweenRange"), Rt = Symbol(
  "betweenRangeClasses"
), It = Symbol("datepickerClasses"), Ht = Symbol("atMouseOver"), Ut = Symbol("setToToday"), zt = Symbol("setToYesterday"), Wt = Symbol("setToLastDay"), Kt = Symbol("setToThisMonth"), Gt = Symbol("setToLastMonth"), Zt = Symbol("setToCustomShortcut"), lr = {
  key: 0,
  class: "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/[.1] order-last sm:order-none dark:border-vtd-secondary-700/[1] sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0 sm:w-auto"
}, ur = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, dr = ["onClick", "textContent"], ir = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, vt = /* @__PURE__ */ de({
  __name: "Shortcut",
  props: {
    shortcuts: { type: [Boolean, Function] },
    close: { type: Function },
    asRange: { type: Boolean },
    asSingle: { type: Boolean },
    i18n: {}
  },
  setup(e) {
    const r = e, u = je(Ut), t = je(zt), a = je(Wt), n = je(Kt), v = je(Gt), s = je(Zt), h = ue(() => typeof r.shortcuts == "function" ? r.shortcuts() : !1);
    return (c, g) => r.asRange && r.asSingle || r.asRange && !r.asSingle ? (z(), Z("div", lr, [
      h.value ? (z(), Z("ol", ur, [
        (z(!0), Z(xe, null, Ke(h.value, (b, S) => (z(), Z("li", { key: S }, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: $e((V) => le(s)(b, c.close), ["prevent"]),
            textContent: ae(b.label)
          }, null, 8, dr)
        ]))), 128))
      ])) : (z(), Z("ol", ir, [
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: g[0] || (g[0] = $e((b) => le(u)(c.close), ["prevent"]))
          }, ae(r.i18n.today), 1)
        ]),
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: g[1] || (g[1] = $e((b) => le(t)(c.close), ["prevent"]))
          }, ae(r.i18n.yesterday), 1)
        ]),
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: g[2] || (g[2] = $e((b) => le(a)(7, c.close), ["prevent"]))
          }, ae(r.i18n.past(7)), 1)
        ]),
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: g[3] || (g[3] = $e((b) => le(a)(30, c.close), ["prevent"]))
          }, ae(r.i18n.past(30)), 1)
        ]),
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: g[4] || (g[4] = $e((b) => le(n)(c.close), ["prevent"]))
          }, ae(r.i18n.currentMonth), 1)
        ]),
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: g[5] || (g[5] = $e((b) => le(v)(c.close), ["prevent"]))
          }, ae(r.i18n.pastMonth), 1)
        ])
      ]))
    ])) : ye("", !0);
  }
}), cr = { class: "grid grid-cols-7 gap-y-0.5 my-1" }, fr = {
  key: 0,
  class: "col-span-7 border-b relative dark:border-vtd-secondary-600"
}, mr = { class: "absolute -left-2 top-1/2 -translate-y-2/4 bg-white dark:bg-vtd-secondary-800 text-[8px] pr-2 text-vtd-secondary-400" }, pr = ["data-tooltip"], vr = ["disabled", "data-date", "onClick", "onMouseenter", "onFocusin", "textContent"], qe = /* @__PURE__ */ de({
  __name: "Calendar",
  props: {
    calendar: {},
    weeks: {},
    weekNumber: { type: Boolean },
    asRange: { type: Boolean }
  },
  emits: ["updateDate"],
  setup(e, { emit: r }) {
    const u = r, t = je(Nt), a = je(Rt), n = je(It), v = je(Ht);
    return (s, h) => (z(), Z("div", cr, [
      ee(eo, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: Fe(() => [
          (z(!0), Z(xe, null, Ke(s.calendar.date(), (c, g) => (z(), Z(xe, { key: g }, [
            g % 7 === 0 && s.weekNumber ? (z(), Z("div", fr, [
              Y("span", mr, ae(c.week()), 1)
            ])) : ye("", !0),
            Y("div", {
              class: Te(["relative", { "vtd-tooltip": s.asRange && c.duration() }]),
              "data-tooltip": `${c.duration()}`
            }, [
              ee(yt, {
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "enter-active-class": "transition-opacity ease-out duration-200",
                "leave-active-class": "transition-opacity ease-in duration-150",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: Fe(() => [
                  le(t)(c) || c.hovered() ? (z(), Z("span", {
                    key: 0,
                    class: Te(["absolute bg-vtd-primary-100 bg-opacity-60 dark:bg-vtd-secondary-700 dark:bg-opacity-50", le(a)(c)])
                  }, null, 2)) : ye("", !0)
                ]),
                _: 2
              }, 1024),
              Y("button", {
                type: "button",
                class: Te(["vtd-datepicker-date relative w-[2.7rem] h-[2.7rem] lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm", [
                  le(n)(c),
                  s.asRange ? "transition-all" : "transition-colors"
                ]]),
                disabled: c.disabled || c.inRange(),
                "data-date": c.toDate(),
                onClick: (b) => u("updateDate", c),
                onMouseenter: (b) => le(v)(c),
                onFocusin: (b) => le(v)(c),
                textContent: ae(c.date())
              }, null, 42, vr)
            ], 10, pr)
          ], 64))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), hr = { class: "flex flex-wrap" }, yr = { class: "flex rounded-md mt-1.5" }, br = ["onClick", "textContent"], Je = /* @__PURE__ */ de({
  __name: "Year",
  props: {
    years: {}
  },
  emits: ["updateYear"],
  setup(e, { emit: r }) {
    const u = r;
    return (t, a) => (z(), Z("div", hr, [
      (z(!0), Z(xe, null, Ke(t.years, (n, v) => (z(), Z("div", {
        key: v,
        class: "w-1/2 px-0.5"
      }, [
        Y("span", yr, [
          Y("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            onClick: (s) => u("updateYear", n),
            textContent: ae(n)
          }, null, 8, br)
        ])
      ]))), 128))
    ]));
  }
}), gr = { class: "grid grid-cols-7 py-2 mt-0.5" }, xr = ["textContent"], Xe = /* @__PURE__ */ de({
  __name: "Week",
  props: {
    weeks: {}
  },
  setup(e) {
    return (r, u) => (z(), Z("div", gr, [
      (z(!0), Z(xe, null, Ke(r.weeks, (t, a) => (z(), Z("div", {
        key: a,
        class: "text-vtd-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default dark:text-vtd-secondary-400"
      }, [
        Y("span", {
          textContent: ae(t)
        }, null, 8, xr)
      ]))), 128))
    ]));
  }
}), wr = { class: "flex flex-wrap mt-1.5" }, kr = { class: "flex rounded-md mt-1.5" }, jr = ["onClick", "textContent"], Qe = /* @__PURE__ */ de({
  __name: "Month",
  props: {
    months: {}
  },
  emits: ["updateMonth"],
  setup(e, { emit: r }) {
    const u = r;
    return (t, a) => (z(), Z("div", wr, [
      (z(!0), Z(xe, null, Ke(t.months, (n, v) => (z(), Z("div", {
        key: v,
        class: "w-1/2 px-0.5"
      }, [
        Y("span", kr, [
          Y("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            onClick: (s) => u("updateMonth", v),
            textContent: ae(n)
          }, null, 8, jr)
        ])
      ]))), 128))
    ]));
  }
});
function _r() {
  const e = (s) => {
    const h = [], c = s.localeData().firstDayOfWeek();
    for (let g = 0; g <= s.date(0 - c).day(); g++)
      h.push(s.date(0).subtract(g, "day"));
    return h.sort((g, b) => g.date() - b.date());
  };
  return {
    usePreviousDate: e,
    useCurrentDate: (s) => Array.from(
      {
        length: s.daysInMonth()
      },
      (h, c) => s.date(c + 1)
    ),
    useNextDate: (s) => {
      const h = [];
      for (let c = 1; c <= 42 - (e(s).length + s.daysInMonth()); c++)
        h.push(s.date(c).month(s.month()).add(1, "month"));
      return h;
    },
    useDisableDate: (s, { disableDate: h }) => typeof h == "function" ? h(s.toDate()) : !1,
    useBetweenRange: (s, { previous: h, next: c }) => {
      const g = h.isAfter(c, "date") ? "(]" : "[)";
      return !!(s.isBetween(h, c, "date", g) && !s.off);
    },
    useToValueFromString: (s, { formatter: h }) => s.format(h.date),
    useToValueFromArray: ({ previous: s, next: h }, {
      formatter: c,
      separator: g
    }) => `${s.format(c.date)}${g}${h.format(
      c.date
    )}`
  };
}
function $r() {
  return {
    useVisibleViewport: (r) => {
      if (r) {
        const { right: u } = r.getBoundingClientRect(), t = window.innerWidth || document.documentElement.clientWidth;
        return u > t;
      } else
        return null;
    }
  };
}
const Mr = ["disabled", "placeholder", "onKeyup"], Sr = { class: "absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden" }, Dr = ["disabled"], Or = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Pr = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, Vr = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, Tr = { class: "flex flex-wrap lg:flex-nowrap" }, Ar = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, Yr = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, Cr = /* @__PURE__ */ Y("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), Er = [
  Cr
], Lr = { class: "px-0.5 sm:px-2" }, Fr = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, Br = { class: "px-0.5 sm:px-2" }, Nr = { key: 0 }, Rr = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, Ir = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, Hr = ["disabled", "onClick", "textContent"], Ur = ["onClick", "textContent"], zr = {
  key: 1,
  class: "sm:hidden"
}, Wr = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, Kr = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, Gr = ["onClick", "textContent"], Zr = {
  key: 1,
  class: "flex"
}, qr = { class: "bg-white rounded-lg shadow-sm border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]" }, Jr = { class: "flex flex-wrap lg:flex-nowrap" }, Xr = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, Qr = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, ea = /* @__PURE__ */ Y("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), ta = [
  ea
], oa = { class: "px-0.5 sm:px-2" }, ra = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, aa = { class: "px-0.5 sm:px-2" }, na = { key: 0 }, sa = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, la = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, ua = ["disabled", "textContent"], da = /* @__PURE__ */ de({
  __name: "VueTailwindDatePicker",
  props: {
    noInput: { type: Boolean },
    overlay: { type: Boolean },
    asSingle: { type: Boolean },
    useRange: { type: Boolean },
    placeholder: { default: "" },
    i18n: { default: "en" },
    inputClasses: { default: "" },
    disabled: { type: Boolean, default: !1 },
    disableInRange: { type: Boolean, default: !1 },
    disableDate: { type: [Boolean, Function], default: !1 },
    autoApply: { type: Boolean, default: !0 },
    shortcuts: { type: [Boolean, Function], default: !0 },
    separator: { default: " ~ " },
    formatter: { default: () => ({
      date: "YYYY-MM-DD HH:mm:ss",
      month: "MMM"
    }) },
    startFrom: { default: () => /* @__PURE__ */ new Date() },
    weekdaysSize: { default: "short" },
    weekNumber: { type: Boolean, default: !1 },
    options: { default: () => ({
      shortcuts: {
        today: "Today",
        yesterday: "Yesterday",
        past: (e) => `Last ${e} Days`,
        currentMonth: "This Month",
        pastMonth: "Last Month"
      },
      footer: {
        apply: "Apply",
        cancel: "Cancel"
      }
    }) },
    modelValue: { default: () => [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()] }
  },
  emits: ["update:modelValue", "selectMonth", "selectYear", "selectRightMonth", "selectRightYear", "clickPrev", "clickNext", "clickRightPrev", "clickRightNext"],
  setup(e, { expose: r, emit: u }) {
    const t = e, a = u, {
      useCurrentDate: n,
      useDisableDate: v,
      useBetweenRange: s,
      useNextDate: h,
      usePreviousDate: c,
      useToValueFromArray: g,
      useToValueFromString: b
    } = _r(), { useVisibleViewport: S } = $r();
    i.extend(Yo), i.extend(Eo), i.extend(Fo), i.extend(No), i.extend(Io), i.extend(Uo), i.extend(Wo);
    const V = J(null), I = J(null), x = J(null), D = J(""), E = J(null), k = J(""), w = J([]), P = J([]), T = J(null), O = J(null), l = ht({
      previous: {
        calendar: !0,
        month: !1,
        year: !1
      },
      next: {
        calendar: !0,
        month: !1,
        year: !1
      }
    }), o = J({
      previous: i(),
      next: i().add(1, "month"),
      year: {
        previous: i().year(),
        next: i().year()
      },
      weeks: t.weekdaysSize === "min" ? i.weekdaysMin() : i.weekdaysShort(),
      months: t.formatter.month === "MMM" ? i.monthsShort() : i.months()
    }), R = ue(() => o.value.weeks), N = ue(() => o.value.months), _ = ue(() => {
      const { previous: p, next: f, year: m } = le(o);
      return {
        previous: {
          date: () => c(p).concat(n(p)).concat(h(p)).map((d) => (Object.assign(d, {
            today: d.isToday(),
            active: p.month() === d.month(),
            off: p.month() !== d.month(),
            sunday: d.day() === 0,
            disabled: v(d, t) && !M(d),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return p.month() !== d.month();
            },
            hovered: () => y() && w.value.length > 1 ? (d.isBetween(
              w.value[0],
              w.value[1],
              "date",
              "()"
            ) || d.isBetween(
              w.value[1],
              w.value[0],
              "date",
              "(]"
            )) && p.month() === d.month() : !1,
            duration: () => !1
          }), d)),
          month: p && p.format(t.formatter.month),
          year: p && p.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (d, j) => m.previous + j
          ),
          onPrevious: () => {
            o.value.previous = p.subtract(1, "month"), a("clickPrev", o.value.previous);
          },
          onNext: () => {
            o.value.previous = p.add(1, "month"), p.diff(f, "month") === -1 && (o.value.next = f.add(1, "month")), a("clickNext", o.value.previous);
          },
          onPreviousYear: () => {
            o.value.year.previous = o.value.year.previous - 12;
          },
          onNextYear: () => {
            o.value.year.previous = o.value.year.previous + 12;
          },
          openMonth: () => {
            l.previous.month = !l.previous.month, l.previous.year = !1, l.previous.calendar = !l.previous.month;
          },
          setMonth: (d) => {
            o.value.previous = p.month(d), l.previous.month = !l.previous.month, l.previous.year = !1, l.previous.calendar = !l.previous.month, a("selectMonth", o.value.previous), He(() => {
              (o.value.next.isSame(o.value.previous, "month") || o.value.next.isBefore(o.value.previous)) && (o.value.next = o.value.previous.add(1, "month")), o.value.year.next = o.value.next.year();
            });
          },
          openYear: () => {
            l.previous.year = !l.previous.year, l.previous.month = !1, l.previous.calendar = !l.previous.year;
          },
          setYear: (d) => {
            o.value.previous = p.year(d), l.previous.year = !l.previous.year, l.previous.calendar = !l.previous.year, a("selectYear", o.value.previous), He(() => {
              (o.value.next.isSame(o.value.previous, "month") || o.value.next.isBefore(o.value.previous)) && (o.value.next = o.value.previous.add(1, "month")), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year();
            });
          }
        },
        next: {
          date: () => c(f).concat(n(f)).concat(h(f)).map((d) => (Object.assign(d, {
            today: d.isToday(),
            active: f.month() === d.month(),
            off: f.month() !== d.month(),
            sunday: d.day() === 0,
            disabled: v(d, t) && !M(d),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return f.month() !== d.month();
            },
            hovered: () => w.value.length > 1 ? (d.isBetween(
              w.value[0],
              w.value[1],
              "date",
              "()"
            ) || d.isBetween(
              w.value[1],
              w.value[0],
              "date",
              "(]"
            )) && f.month() === d.month() : !1,
            duration: () => !1
          }), d)),
          month: f && f.format(t.formatter.month),
          year: f && f.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (d, j) => m.next + j
          ),
          onPrevious: () => {
            o.value.next = f.subtract(1, "month"), f.diff(p, "month") === 1 && (o.value.previous = p.subtract(1, "month")), a("clickRightPrev", o.value.next);
          },
          onNext: () => {
            o.value.next = f.add(1, "month"), a("clickRightNext", o.value.next);
          },
          onPreviousYear: () => {
            o.value.year.next = o.value.year.next - 12;
          },
          onNextYear: () => {
            o.value.year.next = o.value.year.next + 12;
          },
          openMonth: () => {
            l.next.month = !l.next.month, l.next.year = !1, l.next.calendar = !l.next.month;
          },
          setMonth: (d) => {
            o.value.next = f.month(d), l.next.month = !l.next.month, l.next.year = !1, l.next.calendar = !l.next.month, a("selectRightMonth", o.value.next), He(() => {
              (o.value.previous.isSame(o.value.next, "month") || o.value.previous.isAfter(o.value.next)) && (o.value.previous = o.value.next.subtract(
                1,
                "month"
              )), o.value.year.previous = o.value.previous.year();
            });
          },
          openYear: () => {
            l.next.year = !l.next.year, l.next.month = !1, l.next.calendar = !l.next.year;
          },
          setYear: (d) => {
            o.value.next = f.year(d), l.next.year = !l.next.year, l.next.month = !1, l.next.calendar = !l.next.year, a("selectRightYear", o.value.next), He(() => {
              (o.value.previous.isSame(o.value.next, "month") || o.value.previous.isAfter(o.value.next)) && (o.value.previous = o.value.next.subtract(
                1,
                "month"
              )), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year();
            });
          }
        }
      };
    }), K = J(!1);
    setTimeout(() => {
      K.value = !0;
    }, 250);
    function q() {
      return i().localeData().firstDayOfWeek();
    }
    function C(p) {
      const f = [...p], m = f.shift();
      return [...f, m];
    }
    function y() {
      return !t.useRange && !t.asSingle ? !0 : !t.useRange && t.asSingle ? !1 : t.useRange && !t.asSingle ? !0 : !!(t.useRange && t.asSingle);
    }
    function M(p) {
      if (t.disableInRange || k.value === "")
        return !1;
      let f, m;
      if (Array.isArray(t.modelValue)) {
        const [d, j] = t.modelValue;
        f = d, m = j;
      } else if (typeof t.modelValue == "object") {
        if (t.modelValue) {
          const [d, j] = Object.values(t.modelValue);
          f = d, m = j;
        }
      } else {
        const [d, j] = t.modelValue.split(t.separator);
        f = d, m = j;
      }
      return p.isBetween(
        i(f, t.formatter.date, !0),
        i(m, t.formatter.date, !0),
        "date",
        "[]"
      );
    }
    function A() {
      T.value = null, O.value = null, w.value = [], E.value = null;
    }
    function $() {
      if (k.value = "", Array.isArray(t.modelValue))
        a("update:modelValue", []);
      else if (typeof t.modelValue == "object") {
        const p = {}, [f, m] = Object.keys(t.modelValue);
        p[f] = "", p[m] = "", a("update:modelValue", p);
      } else
        a("update:modelValue", "");
      P.value = [], I.value && I.value.focus();
    }
    r({ clearPicker: $ });
    function B() {
      if (y()) {
        const [p, f] = k.value.split(t.separator), [m, d] = [
          i(p, t.formatter.date, !0),
          i(f, t.formatter.date, !0)
        ];
        if (m.isValid() && d.isValid())
          if (F(m), F(d), Array.isArray(t.modelValue))
            a("update:modelValue", [p, f]);
          else if (typeof t.modelValue == "object") {
            const j = {}, [L, W] = Object.keys(t.modelValue);
            j[L] = p, j[W] = f, a("update:modelValue", j);
          } else
            a(
              "update:modelValue",
              g(
                {
                  previous: m,
                  next: d
                },
                t
              )
            );
      } else {
        const p = i(k.value, t.formatter.date, !0);
        if (p.isValid())
          if (F(p), Array.isArray(t.modelValue))
            a("update:modelValue", [k.value]);
          else if (typeof t.modelValue == "object") {
            const f = {}, [m] = Object.keys(t.modelValue);
            f[m] = k.value, a("update:modelValue", f);
          } else
            a("update:modelValue", k.value);
      }
    }
    function F(p, f) {
      if (y())
        if (T.value)
          if (O.value = p, t.autoApply) {
            p.isBefore(T.value) ? k.value = g(
              {
                previous: p,
                next: T.value
              },
              t
            ) : k.value = g(
              {
                previous: T.value,
                next: p
              },
              t
            );
            const [m, d] = k.value.split(t.separator);
            if (Array.isArray(t.modelValue))
              a("update:modelValue", [
                i(m, t.formatter.date, !0).format(t.formatter.date),
                i(d, t.formatter.date, !0).format(t.formatter.date)
              ]);
            else if (typeof t.modelValue == "object") {
              const j = {}, [L, W] = Object.keys(t.modelValue);
              j[L] = m, j[W] = d, a("update:modelValue", j);
            } else
              a(
                "update:modelValue",
                g(
                  {
                    previous: i(m, t.formatter.date, !0),
                    next: i(d, t.formatter.date, !0)
                  },
                  t
                )
              );
            f && f(), P.value = [], i(m, t.formatter.date, !0).isSame(
              i(d, t.formatter.date, !0),
              "month"
            ) || (o.value.previous = i(m, t.formatter.date, !0), o.value.next = i(d, t.formatter.date, !0)), A();
          } else {
            T.value.isAfter(p, "month") ? P.value = [p, T.value] : P.value = [T.value, p];
            const [m, d] = P.value;
            m.isSame(d, "month") || (o.value.previous = m, o.value.next = d), A();
          }
        else
          P.value = [], T.value = p, E.value = p, w.value.push(p), P.value.push(p), o.value.previous = p, o.value.next.isSame(p, "month") && (o.value.previous = o.value.next, o.value.next = p.add(1, "month"));
      else if (t.autoApply) {
        if (k.value = b(p, t), Array.isArray(t.modelValue))
          a("update:modelValue", [k.value]);
        else if (typeof t.modelValue == "object") {
          const m = {}, [d] = Object.keys(t.modelValue);
          m[d] = k.value, a("update:modelValue", m);
        } else
          a("update:modelValue", k.value);
        f && f(), P.value = [], A();
      } else
        P.value = [p], A();
    }
    function G(p) {
      if (P.value.length < 1)
        return !1;
      let f;
      if (y()) {
        const [m, d] = P.value;
        d.isBefore(m) ? f = g(
          {
            previous: d,
            next: m
          },
          t
        ) : f = g(
          {
            previous: m,
            next: d
          },
          t
        );
      } else {
        const [m] = P.value;
        f = m;
      }
      if (y()) {
        const [m, d] = f.split(t.separator);
        if (Array.isArray(t.modelValue))
          a("update:modelValue", [
            i(m, t.formatter.date, !0).format(t.formatter.date),
            i(d, t.formatter.date, !0).format(t.formatter.date)
          ]);
        else if (typeof t.modelValue == "object") {
          const j = {}, [L, W] = Object.keys(t.modelValue);
          j[L] = m, j[W] = d, a("update:modelValue", j);
        } else
          a(
            "update:modelValue",
            g(
              {
                previous: i(m, t.formatter.date, !0),
                next: i(d, t.formatter.date, !0)
              },
              t
            )
          );
        k.value = f;
      } else if (k.value = f.format(t.formatter.date), Array.isArray(t.modelValue))
        a("update:modelValue", [k.value]);
      else if (typeof t.modelValue == "object") {
        const m = {}, [d] = Object.keys(t.modelValue);
        m[d] = k.value, a("update:modelValue", m);
      } else
        a("update:modelValue", k.value);
      p && p();
    }
    function Q(p) {
      if (!y())
        return !1;
      if (T.value)
        w.value = [T.value, p];
      else
        return w.value = [], !1;
    }
    function te(p) {
      if (T.value && t.autoApply)
        return !1;
      let f, m;
      if (w.value.length > 1) {
        const [d, j] = w.value;
        f = i(d, t.formatter.date, !0), m = i(j, t.formatter.date, !0);
      } else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          const [d, j] = t.modelValue;
          f = d && i(d, t.formatter.date, !0), m = j && i(j, t.formatter.date, !0);
        } else {
          const [d, j] = P.value;
          f = i(d, t.formatter.date, !0), m = i(j, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [d, j] = Object.values(t.modelValue);
            f = d && i(d, t.formatter.date, !0), m = j && i(j, t.formatter.date, !0);
          }
        } else {
          const [d, j] = P.value;
          f = i(d, t.formatter.date, !0), m = i(j, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        const [d, j] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        f = d && i(d, t.formatter.date, !0), m = j && i(j, t.formatter.date, !0);
      } else {
        const [d, j] = P.value;
        f = i(d, t.formatter.date, !0), m = i(j, t.formatter.date, !0);
      }
      return f && m ? s(p, {
        previous: f,
        next: m
      }) : !1;
    }
    function oe(p) {
      const { today: f, active: m, off: d, disabled: j } = p;
      let L, W, ce;
      if (y())
        if (Array.isArray(t.modelValue))
          if (E.value) {
            const [U, X] = w.value;
            W = U && i(U, t.formatter.date, !0), ce = X && i(X, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [U, X] = t.modelValue;
            W = U && i(U, t.formatter.date, !0), ce = X && i(X, t.formatter.date, !0);
          } else {
            const [U, X] = P.value;
            W = U && i(U, t.formatter.date, !0), ce = X && i(X, t.formatter.date, !0);
          }
        else if (typeof t.modelValue == "object")
          if (E.value) {
            const [U, X] = w.value;
            W = U && i(U, t.formatter.date, !0), ce = X && i(X, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [U, X] = t.modelValue ? Object.values(t.modelValue) : [null, null];
            W = U && i(U, t.formatter.date, !0), ce = X && i(X, t.formatter.date, !0);
          } else {
            const [U, X] = P.value;
            W = U && i(U, t.formatter.date, !0), ce = X && i(X, t.formatter.date, !0);
          }
        else if (E.value) {
          const [U, X] = w.value;
          W = U && i(U, t.formatter.date, !0), ce = X && i(X, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [U, X] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
          W = U && i(U, t.formatter.date, !0), ce = X && i(X, t.formatter.date, !0);
        } else {
          const [U, X] = P.value;
          W = U && i(U, t.formatter.date, !0), ce = X && i(X, t.formatter.date, !0);
        }
      else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          if (t.modelValue.length > 0) {
            const [U] = t.modelValue;
            W = i(U, t.formatter.date, !0);
          }
        } else {
          const [U] = P.value;
          W = U && i(U, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [U] = Object.values(t.modelValue);
            W = i(U, t.formatter.date, !0);
          }
        } else {
          const [U] = P.value;
          W = U && i(U, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        if (t.modelValue) {
          const [U] = t.modelValue.split(t.separator);
          W = i(U, t.formatter.date, !0);
        }
      } else {
        const [U] = P.value;
        W = U && i(U, t.formatter.date, !0);
      }
      return m && (L = f ? "text-vtd-primary-500 font-semibold dark:text-vtd-primary-400 rounded-full focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50" : j ? "text-vtd-secondary-600 font-normal disabled:text-vtd-secondary-500 disabled:cursor-not-allowed rounded-full" : p.isBetween(W, ce, "date", "()") ? "text-vtd-secondary-700 font-medium dark:text-vtd-secondary-100 rounded-full" : "text-vtd-secondary-600 font-medium dark:text-vtd-secondary-200 rounded-full"), d && (L = "text-vtd-secondary-400 font-light disabled:cursor-not-allowed"), W && ce && !d ? (p.isSame(W, "date") && (L = ce.isAfter(W, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed", W.isSame(ce, "date") && (L = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed")), p.isSame(ce, "date") && (L = ce.isAfter(W, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed", W.isSame(ce, "date") && (L = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"))) : W && p.isSame(W, "date") && !d && (L = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"), L;
    }
    function ie(p) {
      let f, m, d;
      if (f = "", !y())
        return f;
      if (Array.isArray(t.modelValue))
        if (w.value.length > 1) {
          const [j, L] = w.value;
          m = j && i(j, t.formatter.date, !0), d = L && i(L, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [j, L] = t.modelValue;
          m = j && i(j, t.formatter.date, !0), d = L && i(L, t.formatter.date, !0);
        } else {
          const [j, L] = P.value;
          m = j && i(j, t.formatter.date, !0), d = L && i(L, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (w.value.length > 1) {
          const [j, L] = w.value;
          m = j && i(j, t.formatter.date, !0), d = L && i(L, t.formatter.date, !0);
        } else if (t.autoApply) {
          if (t.modelValue) {
            const [j, L] = Object.values(t.modelValue);
            m = j && i(j, t.formatter.date, !0), d = L && i(L, t.formatter.date, !0);
          }
        } else {
          const [j, L] = P.value;
          m = j && i(j, t.formatter.date, !0), d = L && i(L, t.formatter.date, !0);
        }
      else if (w.value.length > 1) {
        const [j, L] = w.value;
        m = j && i(j, t.formatter.date, !0), d = L && i(L, t.formatter.date, !0);
      } else if (t.autoApply) {
        const [j, L] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        m = j && i(j, t.formatter.date, !0), d = L && i(L, t.formatter.date, !0);
      } else {
        const [j, L] = P.value;
        m = j && i(j, t.formatter.date, !0), d = L && i(L, t.formatter.date, !0);
      }
      return m && d && (p.isSame(m, "date") ? (d.isBefore(m) && (f += " rounded-r-full inset-0"), m.isBefore(d) && (f += " rounded-l-full inset-0")) : p.isSame(d, "date") ? (d.isBefore(m) && (f += " rounded-l-full inset-0"), m.isBefore(d) && (f += " rounded-r-full inset-0")) : f += " inset-0"), f;
    }
    function we(p, f) {
      o.value.previous = i(p, t.formatter.date, !0), o.value.next = i(f, t.formatter.date, !0), (i.duration(o.value.next.diff(o.value.previous)).get("months") === 2 || i.duration(o.value.next.diff(o.value.previous)).get("months") === 1 && i.duration(o.value.next.diff(o.value.previous)).get("days") === 7) && (o.value.next = o.value.next.subtract(1, "month")), (o.value.next.isSame(o.value.previous, "month") || o.value.next.isBefore(o.value.previous)) && (o.value.next = o.value.previous.add(1, "month"));
    }
    function ne(p, f) {
      if (y())
        if (t.autoApply) {
          if (Array.isArray(t.modelValue))
            a("update:modelValue", [p, f]);
          else if (typeof t.modelValue == "object") {
            const m = {}, [d, j] = Object.keys(t.modelValue);
            m[d] = p, m[j] = f, a("update:modelValue", m);
          } else
            a(
              "update:modelValue",
              g(
                {
                  previous: i(p, t.formatter.date, !0),
                  next: i(f, t.formatter.date, !0)
                },
                t
              )
            );
          k.value = `${p}${t.separator}${f}`;
        } else
          P.value = [
            i(p, t.formatter.date, !0),
            i(f, t.formatter.date, !0)
          ];
      else if (t.autoApply) {
        if (Array.isArray(t.modelValue))
          a("update:modelValue", [p]);
        else if (typeof t.modelValue == "object") {
          const m = {}, [d] = Object.keys(t.modelValue);
          m[d] = p, a("update:modelValue", m);
        } else
          a("update:modelValue", p);
        k.value = p;
      } else
        P.value = [
          i(p, t.formatter.date, !0),
          i(f, t.formatter.date, !0)
        ];
      we(p, f);
    }
    function be(p) {
      const f = i().format(t.formatter.date), m = i().format(t.formatter.date);
      ne(f, m), p && p();
    }
    function he(p) {
      const f = i().subtract(1, "day").format(t.formatter.date), m = i().subtract(1, "day").format(t.formatter.date);
      ne(f, m), p && p();
    }
    function re(p, f) {
      const m = i().subtract(p - 1, "day").format(t.formatter.date), d = i().format(t.formatter.date);
      ne(m, d), f && f();
    }
    function fe(p) {
      const f = i().date(1).format(t.formatter.date), m = i().date(i().daysInMonth()).format(t.formatter.date);
      ne(f, m), p && p();
    }
    function ge(p) {
      const f = i().date(1).subtract(1, "month").format(t.formatter.date), m = i().date(0).format(t.formatter.date);
      ne(f, m), p && p();
    }
    function ke(p, f) {
      const [m, d] = p.atClick(), j = i(m).format(t.formatter.date), L = i(d).format(t.formatter.date);
      ne(j, L), f && f();
    }
    it(
      () => P.value,
      (p) => {
        p.length > 0 && (l.previous.calendar = !0, l.previous.month = !1, l.previous.year = !1, l.next.calendar = !0, l.next.month = !1, l.next.year = !1);
      }
    ), _e(() => {
      t.placeholder ? D.value = t.placeholder : y() ? D.value = `${t.formatter.date}${t.separator}${t.formatter.date}` : D.value = t.formatter.date;
    }), i.locale(t.i18n), it(() => t.i18n, () => i.locale(t.i18n)), _e(() => {
      const p = t.i18n, f = t.modelValue;
      He(async () => {
        if (p in pt) {
          const L = await pt[p]();
          i.locale(L, void 0, !0), i.locale(p);
        }
        let m, d;
        if (y()) {
          if (Array.isArray(f)) {
            if (f.length > 0) {
              const [L, W] = f;
              m = i(L, t.formatter.date, !0), d = i(W, t.formatter.date, !0);
            }
          } else if (typeof f == "object") {
            if (!to(f))
              try {
                Object.keys(f);
              } catch {
                console.warn(
                  "[Vue Tailwind Datepicker]: It looks like you want to use Object as the argument %cv-model",
                  "font-style: italic; color: #42b883;",
                  ", but you pass it undefined or null."
                ), console.warn(
                  "[Vue Tailwind Datepicker]: We has replace with %c{ startDate: '', endDate: '' }",
                  "font-style: italic; color: #42b883;",
                  ", but you can replace manually."
                ), a("update:modelValue", {
                  startDate: "",
                  endDate: ""
                });
              }
            if (f) {
              const [L, W] = Object.values(f);
              m = L && i(L, t.formatter.date, !0), d = W && i(W, t.formatter.date, !0);
            }
          } else if (f) {
            const [L, W] = f.split(t.separator);
            m = i(L, t.formatter.date, !0), d = i(W, t.formatter.date, !0);
          }
          m && d ? (k.value = g(
            {
              previous: m,
              next: d
            },
            t
          ), d.isBefore(m, "month") ? (o.value.previous = d, o.value.next = m, o.value.year.previous = d.year(), o.value.year.next = m.year()) : d.isSame(m, "month") ? (o.value.previous = m, o.value.next = d.add(1, "month"), o.value.year.previous = m.year(), o.value.year.next = m.add(1, "year").year()) : (o.value.previous = m, o.value.next = d, o.value.year.previous = m.year(), o.value.year.next = d.year()), t.autoApply || (P.value = [m, d])) : (o.value.previous = i(t.startFrom), o.value.next = i(t.startFrom).add(1, "month"), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year());
        } else {
          if (Array.isArray(f)) {
            if (f.length > 0) {
              const [L] = f;
              m = i(L, t.formatter.date, !0);
            }
          } else if (typeof f == "object") {
            if (f) {
              const [L] = Object.values(f);
              m = i(L, t.formatter.date, !0);
            }
          } else if (f.length) {
            const [L] = f.split(t.separator);
            m = i(L, t.formatter.date, !0);
          }
          m && m.isValid() ? (k.value = b(m, t), o.value.previous = m, o.value.next = m.add(1, "month"), o.value.year.previous = m.year(), o.value.year.next = m.add(1, "year").year(), t.autoApply || (P.value = [m])) : (o.value.previous = i(t.startFrom), o.value.next = i(t.startFrom).add(1, "month"), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year());
        }
        const j = t.weekdaysSize === "min" ? i.weekdaysMin() : i.weekdaysShort();
        o.value.weeks = q() ? C(j) : j, o.value.months = t.formatter.month === "MMM" ? i.monthsShort() : i.months();
      });
    });
    function Re(p) {
      return p && x.value === null && (x.value = S(V.value)), p && x.value ? "place-right" : "place-left";
    }
    function Ie(p) {
      return p && x.value === null && (x.value = S(V.value)), x.value ? "left-auto right-0" : "left-0 right-auto";
    }
    return se(Nt, te), se(Rt, ie), se(It, oe), se(Ht, Q), se(Ut, be), se(zt, he), se(Wt, re), se(Kt, fe), se(Gt, ge), se(Zt, ke), (p, f) => t.noInput ? K.value ? (z(), Z("div", Zr, [
      Y("div", qr, [
        Y("div", Jr, [
          t.shortcuts ? (z(), Ue(vt, {
            key: 0,
            shortcuts: t.shortcuts,
            "as-range": y(),
            "as-single": t.asSingle,
            i18n: t.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : ye("", !0),
          Y("div", Xr, [
            y() && !t.asSingle ? (z(), Z("div", Qr, ta)) : ye("", !0),
            Y("div", {
              class: Te(["relative w-full lg:w-80 overflow-hidden", {
                "mb-3 sm:mb-0 sm:mr-2 md:w-1/2": y() && !t.asSingle
              }])
            }, [
              ee(Ze, {
                panel: l.previous,
                calendar: _.value.previous
              }, null, 8, ["panel", "calendar"]),
              Y("div", oa, [
                me(ee(Qe, {
                  months: N.value,
                  onUpdateMonth: _.value.previous.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [pe, l.previous.month]
                ]),
                me(ee(Je, {
                  years: _.value.previous.years(),
                  onUpdateYear: _.value.previous.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [pe, l.previous.year]
                ]),
                me(Y("div", null, [
                  ee(Xe, { weeks: R.value }, null, 8, ["weeks"]),
                  ee(qe, {
                    calendar: _.value.previous,
                    weeks: R.value,
                    "as-range": y(),
                    "week-number": p.weekNumber,
                    onUpdateDate: f[3] || (f[3] = (m) => F(m))
                  }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
                ], 512), [
                  [pe, l.previous.calendar]
                ])
              ])
            ], 2),
            y() && !t.asSingle ? (z(), Z("div", ra, [
              ee(Ze, {
                "as-prev-or-next": "",
                panel: l.next,
                calendar: _.value.next
              }, null, 8, ["panel", "calendar"]),
              Y("div", aa, [
                me(ee(Qe, {
                  months: N.value,
                  onUpdateMonth: _.value.next.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [pe, l.next.month]
                ]),
                me(ee(Je, {
                  "as-prev-or-next": "",
                  years: _.value.next.years(),
                  onUpdateYear: _.value.next.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [pe, l.next.year]
                ]),
                me(Y("div", null, [
                  ee(Xe, { weeks: R.value }, null, 8, ["weeks"]),
                  ee(qe, {
                    "as-prev-or-next": "",
                    calendar: _.value.next,
                    weeks: R.value,
                    "as-range": y(),
                    "week-number": p.weekNumber,
                    onUpdateDate: f[4] || (f[4] = (m) => F(m))
                  }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
                ], 512), [
                  [pe, l.next.calendar]
                ])
              ])
            ])) : ye("", !0)
          ])
        ]),
        t.autoApply ? ye("", !0) : (z(), Z("div", na, [
          Y("div", sa, [
            Y("div", la, [
              Y("button", {
                type: "button",
                class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                disabled: t.asSingle ? P.value.length < 1 : P.value.length < 2,
                onClick: f[5] || (f[5] = (m) => G()),
                textContent: ae(t.options.footer.apply)
              }, null, 8, ua)
            ])
          ])
        ]))
      ])
    ])) : ye("", !0) : (z(), Ue(le(Vt), {
      key: 0,
      id: "vtd",
      as: "div",
      class: "relative w-full"
    }, {
      default: Fe(({ open: m }) => [
        t.overlay && !t.disabled ? (z(), Ue(le(Po), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : ye("", !0),
        ee(le(Oo), {
          as: "label",
          class: "relative block"
        }, {
          default: Fe(() => [
            ct(p.$slots, "default", {
              value: k.value,
              placeholder: D.value,
              clear: $
            }, () => [
              me(Y("input", oo({
                ref_key: "VtdInputRef",
                ref: I
              }, p.$attrs, {
                "onUpdate:modelValue": f[0] || (f[0] = (d) => k.value = d),
                type: "text",
                class: ["relative block w-full", [
                  t.disabled ? "cursor-default opacity-50" : "opacity-100",
                  p.inputClasses || "pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20"
                ]],
                disabled: t.disabled,
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other",
                placeholder: D.value,
                onKeyup: $e(B, ["stop"]),
                onKeydown: f[1] || (f[1] = $e(() => {
                }, ["stop"]))
              }), null, 16, Mr), [
                [ro, k.value]
              ]),
              Y("div", Sr, [
                Y("button", {
                  type: "button",
                  disabled: t.disabled,
                  class: Te([
                    t.disabled ? "cursor-default opacity-50" : "opacity-100",
                    "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md"
                  ]),
                  onClick: f[2] || (f[2] = (d) => {
                    var j;
                    return t.disabled ? !1 : k.value ? $() : (j = I.value) == null ? void 0 : j.focus();
                  })
                }, [
                  ct(p.$slots, "inputIcon", { value: k.value }, () => [
                    (z(), Z("svg", Or, [
                      k.value ? (z(), Z("path", Pr)) : (z(), Z("path", Vr))
                    ]))
                  ])
                ], 10, Dr)
              ])
            ])
          ]),
          _: 3
        }),
        ee(yt, {
          "enter-from-class": "opacity-0 translate-y-3",
          "enter-to-class": "opacity-100 translate-y-0",
          "enter-active-class": "transform transition ease-out duration-200",
          "leave-active-class": "transform transition ease-in duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 translate-y-3"
        }, {
          default: Fe(() => [
            t.disabled ? ye("", !0) : (z(), Ue(le(Vo), {
              key: 0,
              as: "div",
              class: "relative z-50"
            }, {
              default: Fe(({ close: d }) => [
                Y("div", {
                  class: Te(["absolute z-50 top-full sm:mt-2.5", Ie(m)])
                }, [
                  Y("div", {
                    ref_key: "VtdRef",
                    ref: V,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    Y("div", {
                      class: Te(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", Re(m)])
                    }, [
                      Y("div", Tr, [
                        t.shortcuts ? (z(), Ue(vt, {
                          key: 0,
                          shortcuts: t.shortcuts,
                          "as-range": y(),
                          "as-single": t.asSingle,
                          i18n: t.options.shortcuts,
                          close: d
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : ye("", !0),
                        Y("div", Ar, [
                          y() && !t.asSingle ? (z(), Z("div", Yr, Er)) : ye("", !0),
                          Y("div", {
                            class: Te(["relative overflow-hidden", {
                              "mb-3 sm:mb-0 sm:mr-2 w-full md:w-1/2 lg:w-80": y() && !t.asSingle,
                              "w-full": !y() && t.asSingle
                            }])
                          }, [
                            ee(Ze, {
                              panel: l.previous,
                              calendar: _.value.previous
                            }, null, 8, ["panel", "calendar"]),
                            Y("div", Lr, [
                              me(ee(Qe, {
                                months: N.value,
                                onUpdateMonth: _.value.previous.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [pe, l.previous.month]
                              ]),
                              me(ee(Je, {
                                years: _.value.previous.years(),
                                onUpdateYear: _.value.previous.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [pe, l.previous.year]
                              ]),
                              me(Y("div", null, [
                                ee(Xe, { weeks: R.value }, null, 8, ["weeks"]),
                                ee(qe, {
                                  calendar: _.value.previous,
                                  weeks: R.value,
                                  "as-range": y(),
                                  "week-number": p.weekNumber,
                                  onUpdateDate: (j) => F(j, d)
                                }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                              ], 512), [
                                [pe, l.previous.calendar]
                              ])
                            ])
                          ], 2),
                          y() && !t.asSingle ? (z(), Z("div", Fr, [
                            ee(Ze, {
                              "as-prev-or-next": "",
                              panel: l.next,
                              calendar: _.value.next
                            }, null, 8, ["panel", "calendar"]),
                            Y("div", Br, [
                              me(ee(Qe, {
                                months: N.value,
                                onUpdateMonth: _.value.next.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [pe, l.next.month]
                              ]),
                              me(ee(Je, {
                                "as-prev-or-next": "",
                                years: _.value.next.years(),
                                onUpdateYear: _.value.next.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [pe, l.next.year]
                              ]),
                              me(Y("div", null, [
                                ee(Xe, { weeks: R.value }, null, 8, ["weeks"]),
                                ee(qe, {
                                  "as-prev-or-next": "",
                                  calendar: _.value.next,
                                  weeks: R.value,
                                  "as-range": y(),
                                  "week-number": p.weekNumber,
                                  onUpdateDate: (j) => F(j, d)
                                }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                              ], 512), [
                                [pe, l.next.calendar]
                              ])
                            ])
                          ])) : ye("", !0)
                        ])
                      ]),
                      t.autoApply ? (z(), Z("div", zr, [
                        Y("div", Wr, [
                          Y("div", Kr, [
                            Y("button", {
                              type: "button",
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              onClick: (j) => d(),
                              textContent: ae(t.options.footer.cancel)
                            }, null, 8, Gr)
                          ])
                        ])
                      ])) : (z(), Z("div", Nr, [
                        Y("div", Rr, [
                          Y("div", Ir, [
                            Y("button", {
                              type: "button",
                              class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                              disabled: t.asSingle ? P.value.length < 1 : P.value.length < 2,
                              onClick: (j) => G(d),
                              textContent: ae(t.options.footer.apply)
                            }, null, 8, Hr),
                            Y("button", {
                              type: "button",
                              class: "mt-3 away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              onClick: (j) => d(),
                              textContent: ae(t.options.footer.cancel)
                            }, null, 8, Ur)
                          ])
                        ])
                      ]))
                    ], 2)
                  ], 512)
                ], 2)
              ]),
              _: 2
            }, 1024))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }));
  }
});
const qt = /* @__PURE__ */ (() => {
  const e = da;
  return e.install = (r) => {
    r.component("VueTailwindDatepicker", e);
  }, e;
})(), ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qt
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(ia).forEach(([e, r]) => {
  e !== "default" && (qt[e] = r);
});
export {
  qt as default
};
