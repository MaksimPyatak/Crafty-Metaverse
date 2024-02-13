;(function () {
   const t = document.createElement('link').relList
   if (t && t.supports && t.supports('modulepreload')) return
   for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n)
   new MutationObserver((n) => {
      for (const r of n)
         if (r.type === 'childList')
            for (const l of r.addedNodes)
               l.tagName === 'LINK' && l.rel === 'modulepreload' && i(l)
   }).observe(document, { childList: !0, subtree: !0 })
   function s(n) {
      const r = {}
      return (
         n.integrity && (r.integrity = n.integrity),
         n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
         n.crossOrigin === 'use-credentials'
            ? (r.credentials = 'include')
            : n.crossOrigin === 'anonymous'
            ? (r.credentials = 'omit')
            : (r.credentials = 'same-origin'),
         r
      )
   }
   function i(n) {
      if (n.ep) return
      n.ep = !0
      const r = s(n)
      fetch(n.href, r)
   }
})()
/**
 * @vue/shared v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Js(e, t) {
   const s = new Set(e.split(','))
   return t ? (i) => s.has(i.toLowerCase()) : (i) => s.has(i)
}
const ne = {},
   dt = [],
   xe = () => {},
   Ar = () => !1,
   os = (e) =>
      e.charCodeAt(0) === 111 &&
      e.charCodeAt(1) === 110 &&
      (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
   Zs = (e) => e.startsWith('onUpdate:'),
   ce = Object.assign,
   Qs = (e, t) => {
      const s = e.indexOf(t)
      s > -1 && e.splice(s, 1)
   },
   zr = Object.prototype.hasOwnProperty,
   Z = (e, t) => zr.call(e, t),
   U = Array.isArray,
   ct = (e) => as(e) === '[object Map]',
   bn = (e) => as(e) === '[object Set]',
   q = (e) => typeof e == 'function',
   oe = (e) => typeof e == 'string',
   wt = (e) => typeof e == 'symbol',
   re = (e) => e !== null && typeof e == 'object',
   wn = (e) => (re(e) || q(e)) && q(e.then) && q(e.catch),
   yn = Object.prototype.toString,
   as = (e) => yn.call(e),
   Br = (e) => as(e).slice(8, -1),
   Sn = (e) => as(e) === '[object Object]',
   ei = (e) =>
      oe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
   Tt = Js(
      ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
   ),
   ds = (e) => {
      const t = Object.create(null)
      return (s) => t[s] || (t[s] = e(s))
   },
   Rr = /-(\w)/g,
   ht = ds((e) => e.replace(Rr, (t, s) => (s ? s.toUpperCase() : ''))),
   Nr = /\B([A-Z])/g,
   yt = ds((e) => e.replace(Nr, '-$1').toLowerCase()),
   _n = ds((e) => e.charAt(0).toUpperCase() + e.slice(1)),
   Ss = ds((e) => (e ? `on${_n(e)}` : '')),
   Ke = (e, t) => !Object.is(e, t),
   _s = (e, t) => {
      for (let s = 0; s < e.length; s++) e[s](t)
   },
   Jt = (e, t, s) => {
      Object.defineProperty(e, t, {
         configurable: !0,
         enumerable: !1,
         value: s
      })
   },
   Dr = (e) => {
      const t = parseFloat(e)
      return isNaN(t) ? e : t
   }
let Ai
const xn = () =>
   Ai ||
   (Ai =
      typeof globalThis < 'u'
         ? globalThis
         : typeof self < 'u'
         ? self
         : typeof window < 'u'
         ? window
         : typeof global < 'u'
         ? global
         : {})
function ti(e) {
   if (U(e)) {
      const t = {}
      for (let s = 0; s < e.length; s++) {
         const i = e[s],
            n = oe(i) ? Gr(i) : ti(i)
         if (n) for (const r in n) t[r] = n[r]
      }
      return t
   } else if (oe(e) || re(e)) return e
}
const $r = /;(?![^(]*\))/g,
   Fr = /:([^]+)/,
   Vr = /\/\*[^]*?\*\//g
function Gr(e) {
   const t = {}
   return (
      e
         .replace(Vr, '')
         .split($r)
         .forEach((s) => {
            if (s) {
               const i = s.split(Fr)
               i.length > 1 && (t[i[0].trim()] = i[1].trim())
            }
         }),
      t
   )
}
function mt(e) {
   let t = ''
   if (oe(e)) t = e
   else if (U(e))
      for (let s = 0; s < e.length; s++) {
         const i = mt(e[s])
         i && (t += i + ' ')
      }
   else if (re(e)) for (const s in e) e[s] && (t += s + ' ')
   return t.trim()
}
const Hr =
      'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
   jr = Js(Hr)
function Tn(e) {
   return !!e || e === ''
}
const En = (e) =>
      oe(e)
         ? e
         : e == null
         ? ''
         : U(e) || (re(e) && (e.toString === yn || !q(e.toString)))
         ? JSON.stringify(e, Cn, 2)
         : String(e),
   Cn = (e, t) =>
      t && t.__v_isRef
         ? Cn(e, t.value)
         : ct(t)
         ? {
              [`Map(${t.size})`]: [...t.entries()].reduce(
                 (s, [i, n], r) => ((s[xs(i, r) + ' =>'] = n), s),
                 {}
              )
           }
         : bn(t)
         ? { [`Set(${t.size})`]: [...t.values()].map((s) => xs(s)) }
         : wt(t)
         ? xs(t)
         : re(t) && !U(t) && !Sn(t)
         ? String(t)
         : t,
   xs = (e, t = '') => {
      var s
      return wt(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
   }
/**
 * @vue/reactivity v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ee
class Wr {
   constructor(t = !1) {
      ;(this.detached = t),
         (this._active = !0),
         (this.effects = []),
         (this.cleanups = []),
         (this.parent = Ee),
         !t &&
            Ee &&
            (this.index = (Ee.scopes || (Ee.scopes = [])).push(this) - 1)
   }
   get active() {
      return this._active
   }
   run(t) {
      if (this._active) {
         const s = Ee
         try {
            return (Ee = this), t()
         } finally {
            Ee = s
         }
      }
   }
   on() {
      Ee = this
   }
   off() {
      Ee = this.parent
   }
   stop(t) {
      if (this._active) {
         let s, i
         for (s = 0, i = this.effects.length; s < i; s++) this.effects[s].stop()
         for (s = 0, i = this.cleanups.length; s < i; s++) this.cleanups[s]()
         if (this.scopes)
            for (s = 0, i = this.scopes.length; s < i; s++)
               this.scopes[s].stop(!0)
         if (!this.detached && this.parent && !t) {
            const n = this.parent.scopes.pop()
            n &&
               n !== this &&
               ((this.parent.scopes[this.index] = n), (n.index = this.index))
         }
         ;(this.parent = void 0), (this._active = !1)
      }
   }
}
function kr(e, t = Ee) {
   t && t.active && t.effects.push(e)
}
function Ur() {
   return Ee
}
let tt
class si {
   constructor(t, s, i, n) {
      ;(this.fn = t),
         (this.trigger = s),
         (this.scheduler = i),
         (this.active = !0),
         (this.deps = []),
         (this._dirtyLevel = 4),
         (this._trackId = 0),
         (this._runnings = 0),
         (this._shouldSchedule = !1),
         (this._depsLength = 0),
         kr(this, n)
   }
   get dirty() {
      if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
         ;(this._dirtyLevel = 1), nt()
         for (let t = 0; t < this._depsLength; t++) {
            const s = this.deps[t]
            if (s.computed && (qr(s.computed), this._dirtyLevel >= 4)) break
         }
         this._dirtyLevel === 1 && (this._dirtyLevel = 0), rt()
      }
      return this._dirtyLevel >= 4
   }
   set dirty(t) {
      this._dirtyLevel = t ? 4 : 0
   }
   run() {
      if (((this._dirtyLevel = 0), !this.active)) return this.fn()
      let t = Ue,
         s = tt
      try {
         return (Ue = !0), (tt = this), this._runnings++, zi(this), this.fn()
      } finally {
         Bi(this), this._runnings--, (tt = s), (Ue = t)
      }
   }
   stop() {
      var t
      this.active &&
         (zi(this),
         Bi(this),
         (t = this.onStop) == null || t.call(this),
         (this.active = !1))
   }
}
function qr(e) {
   return e.value
}
function zi(e) {
   e._trackId++, (e._depsLength = 0)
}
function Bi(e) {
   if (e.deps.length > e._depsLength) {
      for (let t = e._depsLength; t < e.deps.length; t++) Pn(e.deps[t], e)
      e.deps.length = e._depsLength
   }
}
function Pn(e, t) {
   const s = e.get(t)
   s !== void 0 &&
      t._trackId !== s &&
      (e.delete(t), e.size === 0 && e.cleanup())
}
let Ue = !0,
   Ns = 0
const Mn = []
function nt() {
   Mn.push(Ue), (Ue = !1)
}
function rt() {
   const e = Mn.pop()
   Ue = e === void 0 ? !0 : e
}
function ii() {
   Ns++
}
function ni() {
   for (Ns--; !Ns && Ds.length; ) Ds.shift()()
}
function In(e, t, s) {
   if (t.get(e) !== e._trackId) {
      t.set(e, e._trackId)
      const i = e.deps[e._depsLength]
      i !== t ? (i && Pn(i, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
   }
}
const Ds = []
function On(e, t, s) {
   ii()
   for (const i of e.keys()) {
      let n
      i._dirtyLevel < t &&
         (n ?? (n = e.get(i) === i._trackId)) &&
         (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0),
         (i._dirtyLevel = t)),
         i._shouldSchedule &&
            (n ?? (n = e.get(i) === i._trackId)) &&
            (i.trigger(),
            (!i._runnings || i.allowRecurse) &&
               i._dirtyLevel !== 2 &&
               ((i._shouldSchedule = !1), i.scheduler && Ds.push(i.scheduler)))
   }
   ni()
}
const Ln = (e, t) => {
      const s = new Map()
      return (s.cleanup = e), (s.computed = t), s
   },
   $s = new WeakMap(),
   st = Symbol(''),
   Fs = Symbol('')
function ve(e, t, s) {
   if (Ue && tt) {
      let i = $s.get(e)
      i || $s.set(e, (i = new Map()))
      let n = i.get(s)
      n || i.set(s, (n = Ln(() => i.delete(s)))), In(tt, n)
   }
}
function De(e, t, s, i, n, r) {
   const l = $s.get(e)
   if (!l) return
   let a = []
   if (t === 'clear') a = [...l.values()]
   else if (s === 'length' && U(e)) {
      const o = Number(i)
      l.forEach((c, d) => {
         ;(d === 'length' || (!wt(d) && d >= o)) && a.push(c)
      })
   } else
      switch ((s !== void 0 && a.push(l.get(s)), t)) {
         case 'add':
            U(e)
               ? ei(s) && a.push(l.get('length'))
               : (a.push(l.get(st)), ct(e) && a.push(l.get(Fs)))
            break
         case 'delete':
            U(e) || (a.push(l.get(st)), ct(e) && a.push(l.get(Fs)))
            break
         case 'set':
            ct(e) && a.push(l.get(st))
            break
      }
   ii()
   for (const o of a) o && On(o, 4)
   ni()
}
const Kr = Js('__proto__,__v_isRef,__isVue'),
   An = new Set(
      Object.getOwnPropertyNames(Symbol)
         .filter((e) => e !== 'arguments' && e !== 'caller')
         .map((e) => Symbol[e])
         .filter(wt)
   ),
   Ri = Yr()
function Yr() {
   const e = {}
   return (
      ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
         e[t] = function (...s) {
            const i = Q(this)
            for (let r = 0, l = this.length; r < l; r++) ve(i, 'get', r + '')
            const n = i[t](...s)
            return n === -1 || n === !1 ? i[t](...s.map(Q)) : n
         }
      }),
      ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
         e[t] = function (...s) {
            nt(), ii()
            const i = Q(this)[t].apply(this, s)
            return ni(), rt(), i
         }
      }),
      e
   )
}
function Xr(e) {
   const t = Q(this)
   return ve(t, 'has', e), t.hasOwnProperty(e)
}
class zn {
   constructor(t = !1, s = !1) {
      ;(this._isReadonly = t), (this._shallow = s)
   }
   get(t, s, i) {
      const n = this._isReadonly,
         r = this._shallow
      if (s === '__v_isReactive') return !n
      if (s === '__v_isReadonly') return n
      if (s === '__v_isShallow') return r
      if (s === '__v_raw')
         return i === (n ? (r ? dl : Dn) : r ? Nn : Rn).get(t) ||
            Object.getPrototypeOf(t) === Object.getPrototypeOf(i)
            ? t
            : void 0
      const l = U(t)
      if (!n) {
         if (l && Z(Ri, s)) return Reflect.get(Ri, s, i)
         if (s === 'hasOwnProperty') return Xr
      }
      const a = Reflect.get(t, s, i)
      return (wt(s) ? An.has(s) : Kr(s)) || (n || ve(t, 'get', s), r)
         ? a
         : be(a)
         ? l && ei(s)
            ? a
            : a.value
         : re(a)
         ? n
            ? $n(a)
            : oi(a)
         : a
   }
}
class Bn extends zn {
   constructor(t = !1) {
      super(!1, t)
   }
   set(t, s, i, n) {
      let r = t[s]
      if (!this._shallow) {
         const o = gt(r)
         if (
            (!Zt(i) && !gt(i) && ((r = Q(r)), (i = Q(i))),
            !U(t) && be(r) && !be(i))
         )
            return o ? !1 : ((r.value = i), !0)
      }
      const l = U(t) && ei(s) ? Number(s) < t.length : Z(t, s),
         a = Reflect.set(t, s, i, n)
      return (
         t === Q(n) &&
            (l ? Ke(i, r) && De(t, 'set', s, i) : De(t, 'add', s, i)),
         a
      )
   }
   deleteProperty(t, s) {
      const i = Z(t, s)
      t[s]
      const n = Reflect.deleteProperty(t, s)
      return n && i && De(t, 'delete', s, void 0), n
   }
   has(t, s) {
      const i = Reflect.has(t, s)
      return (!wt(s) || !An.has(s)) && ve(t, 'has', s), i
   }
   ownKeys(t) {
      return ve(t, 'iterate', U(t) ? 'length' : st), Reflect.ownKeys(t)
   }
}
class Jr extends zn {
   constructor(t = !1) {
      super(!0, t)
   }
   set(t, s) {
      return !0
   }
   deleteProperty(t, s) {
      return !0
   }
}
const Zr = new Bn(),
   Qr = new Jr(),
   el = new Bn(!0),
   ri = (e) => e,
   cs = (e) => Reflect.getPrototypeOf(e)
function Dt(e, t, s = !1, i = !1) {
   e = e.__v_raw
   const n = Q(e),
      r = Q(t)
   s || (Ke(t, r) && ve(n, 'get', t), ve(n, 'get', r))
   const { has: l } = cs(n),
      a = i ? ri : s ? di : It
   if (l.call(n, t)) return a(e.get(t))
   if (l.call(n, r)) return a(e.get(r))
   e !== n && e.get(t)
}
function $t(e, t = !1) {
   const s = this.__v_raw,
      i = Q(s),
      n = Q(e)
   return (
      t || (Ke(e, n) && ve(i, 'has', e), ve(i, 'has', n)),
      e === n ? s.has(e) : s.has(e) || s.has(n)
   )
}
function Ft(e, t = !1) {
   return (
      (e = e.__v_raw), !t && ve(Q(e), 'iterate', st), Reflect.get(e, 'size', e)
   )
}
function Ni(e) {
   e = Q(e)
   const t = Q(this)
   return cs(t).has.call(t, e) || (t.add(e), De(t, 'add', e, e)), this
}
function Di(e, t) {
   t = Q(t)
   const s = Q(this),
      { has: i, get: n } = cs(s)
   let r = i.call(s, e)
   r || ((e = Q(e)), (r = i.call(s, e)))
   const l = n.call(s, e)
   return (
      s.set(e, t), r ? Ke(t, l) && De(s, 'set', e, t) : De(s, 'add', e, t), this
   )
}
function $i(e) {
   const t = Q(this),
      { has: s, get: i } = cs(t)
   let n = s.call(t, e)
   n || ((e = Q(e)), (n = s.call(t, e))), i && i.call(t, e)
   const r = t.delete(e)
   return n && De(t, 'delete', e, void 0), r
}
function Fi() {
   const e = Q(this),
      t = e.size !== 0,
      s = e.clear()
   return t && De(e, 'clear', void 0, void 0), s
}
function Vt(e, t) {
   return function (i, n) {
      const r = this,
         l = r.__v_raw,
         a = Q(l),
         o = t ? ri : e ? di : It
      return (
         !e && ve(a, 'iterate', st),
         l.forEach((c, d) => i.call(n, o(c), o(d), r))
      )
   }
}
function Gt(e, t, s) {
   return function (...i) {
      const n = this.__v_raw,
         r = Q(n),
         l = ct(r),
         a = e === 'entries' || (e === Symbol.iterator && l),
         o = e === 'keys' && l,
         c = n[e](...i),
         d = s ? ri : t ? di : It
      return (
         !t && ve(r, 'iterate', o ? Fs : st),
         {
            next() {
               const { value: f, done: h } = c.next()
               return h
                  ? { value: f, done: h }
                  : { value: a ? [d(f[0]), d(f[1])] : d(f), done: h }
            },
            [Symbol.iterator]() {
               return this
            }
         }
      )
   }
}
function Ve(e) {
   return function (...t) {
      return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
   }
}
function tl() {
   const e = {
         get(r) {
            return Dt(this, r)
         },
         get size() {
            return Ft(this)
         },
         has: $t,
         add: Ni,
         set: Di,
         delete: $i,
         clear: Fi,
         forEach: Vt(!1, !1)
      },
      t = {
         get(r) {
            return Dt(this, r, !1, !0)
         },
         get size() {
            return Ft(this)
         },
         has: $t,
         add: Ni,
         set: Di,
         delete: $i,
         clear: Fi,
         forEach: Vt(!1, !0)
      },
      s = {
         get(r) {
            return Dt(this, r, !0)
         },
         get size() {
            return Ft(this, !0)
         },
         has(r) {
            return $t.call(this, r, !0)
         },
         add: Ve('add'),
         set: Ve('set'),
         delete: Ve('delete'),
         clear: Ve('clear'),
         forEach: Vt(!0, !1)
      },
      i = {
         get(r) {
            return Dt(this, r, !0, !0)
         },
         get size() {
            return Ft(this, !0)
         },
         has(r) {
            return $t.call(this, r, !0)
         },
         add: Ve('add'),
         set: Ve('set'),
         delete: Ve('delete'),
         clear: Ve('clear'),
         forEach: Vt(!0, !0)
      }
   return (
      ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
         ;(e[r] = Gt(r, !1, !1)),
            (s[r] = Gt(r, !0, !1)),
            (t[r] = Gt(r, !1, !0)),
            (i[r] = Gt(r, !0, !0))
      }),
      [e, s, t, i]
   )
}
const [sl, il, nl, rl] = tl()
function li(e, t) {
   const s = t ? (e ? rl : nl) : e ? il : sl
   return (i, n, r) =>
      n === '__v_isReactive'
         ? !e
         : n === '__v_isReadonly'
         ? e
         : n === '__v_raw'
         ? i
         : Reflect.get(Z(s, n) && n in i ? s : i, n, r)
}
const ll = { get: li(!1, !1) },
   ol = { get: li(!1, !0) },
   al = { get: li(!0, !1) },
   Rn = new WeakMap(),
   Nn = new WeakMap(),
   Dn = new WeakMap(),
   dl = new WeakMap()
function cl(e) {
   switch (e) {
      case 'Object':
      case 'Array':
         return 1
      case 'Map':
      case 'Set':
      case 'WeakMap':
      case 'WeakSet':
         return 2
      default:
         return 0
   }
}
function fl(e) {
   return e.__v_skip || !Object.isExtensible(e) ? 0 : cl(Br(e))
}
function oi(e) {
   return gt(e) ? e : ai(e, !1, Zr, ll, Rn)
}
function ul(e) {
   return ai(e, !1, el, ol, Nn)
}
function $n(e) {
   return ai(e, !0, Qr, al, Dn)
}
function ai(e, t, s, i, n) {
   if (!re(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
   const r = n.get(e)
   if (r) return r
   const l = fl(e)
   if (l === 0) return e
   const a = new Proxy(e, l === 2 ? i : s)
   return n.set(e, a), a
}
function ft(e) {
   return gt(e) ? ft(e.__v_raw) : !!(e && e.__v_isReactive)
}
function gt(e) {
   return !!(e && e.__v_isReadonly)
}
function Zt(e) {
   return !!(e && e.__v_isShallow)
}
function Fn(e) {
   return ft(e) || gt(e)
}
function Q(e) {
   const t = e && e.__v_raw
   return t ? Q(t) : e
}
function Vn(e) {
   return Object.isExtensible(e) && Jt(e, '__v_skip', !0), e
}
const It = (e) => (re(e) ? oi(e) : e),
   di = (e) => (re(e) ? $n(e) : e)
class Gn {
   constructor(t, s, i, n) {
      ;(this._setter = s),
         (this.dep = void 0),
         (this.__v_isRef = !0),
         (this.__v_isReadonly = !1),
         (this.effect = new si(
            () => t(this._value),
            () => kt(this, this.effect._dirtyLevel === 2 ? 2 : 3)
         )),
         (this.effect.computed = this),
         (this.effect.active = this._cacheable = !n),
         (this.__v_isReadonly = i)
   }
   get value() {
      const t = Q(this)
      return (
         (!t._cacheable || t.effect.dirty) &&
            Ke(t._value, (t._value = t.effect.run())) &&
            kt(t, 4),
         Hn(t),
         t.effect._dirtyLevel >= 2 && kt(t, 2),
         t._value
      )
   }
   set value(t) {
      this._setter(t)
   }
   get _dirty() {
      return this.effect.dirty
   }
   set _dirty(t) {
      this.effect.dirty = t
   }
}
function pl(e, t, s = !1) {
   let i, n
   const r = q(e)
   return (
      r ? ((i = e), (n = xe)) : ((i = e.get), (n = e.set)),
      new Gn(i, n, r || !n, s)
   )
}
function Hn(e) {
   var t
   Ue &&
      tt &&
      ((e = Q(e)),
      In(
         tt,
         (t = e.dep) != null
            ? t
            : (e.dep = Ln(() => (e.dep = void 0), e instanceof Gn ? e : void 0))
      ))
}
function kt(e, t = 4, s) {
   e = Q(e)
   const i = e.dep
   i && On(i, t)
}
function be(e) {
   return !!(e && e.__v_isRef === !0)
}
function ue(e) {
   return hl(e, !1)
}
function hl(e, t) {
   return be(e) ? e : new ml(e, t)
}
class ml {
   constructor(t, s) {
      ;(this.__v_isShallow = s),
         (this.dep = void 0),
         (this.__v_isRef = !0),
         (this._rawValue = s ? t : Q(t)),
         (this._value = s ? t : It(t))
   }
   get value() {
      return Hn(this), this._value
   }
   set value(t) {
      const s = this.__v_isShallow || Zt(t) || gt(t)
      ;(t = s ? t : Q(t)),
         Ke(t, this._rawValue) &&
            ((this._rawValue = t), (this._value = s ? t : It(t)), kt(this, 4))
   }
}
function Vs(e) {
   return be(e) ? e.value : e
}
const gl = {
   get: (e, t, s) => Vs(Reflect.get(e, t, s)),
   set: (e, t, s, i) => {
      const n = e[t]
      return be(n) && !be(s) ? ((n.value = s), !0) : Reflect.set(e, t, s, i)
   }
}
function jn(e) {
   return ft(e) ? e : new Proxy(e, gl)
}
/**
 * @vue/runtime-core v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function qe(e, t, s, i) {
   let n
   try {
      n = i ? e(...i) : e()
   } catch (r) {
      fs(r, t, s)
   }
   return n
}
function Me(e, t, s, i) {
   if (q(e)) {
      const r = qe(e, t, s, i)
      return (
         r &&
            wn(r) &&
            r.catch((l) => {
               fs(l, t, s)
            }),
         r
      )
   }
   const n = []
   for (let r = 0; r < e.length; r++) n.push(Me(e[r], t, s, i))
   return n
}
function fs(e, t, s, i = !0) {
   const n = t ? t.vnode : null
   if (t) {
      let r = t.parent
      const l = t.proxy,
         a = `https://vuejs.org/error-reference/#runtime-${s}`
      for (; r; ) {
         const c = r.ec
         if (c) {
            for (let d = 0; d < c.length; d++) if (c[d](e, l, a) === !1) return
         }
         r = r.parent
      }
      const o = t.appContext.config.errorHandler
      if (o) {
         qe(o, null, 10, [e, l, a])
         return
      }
   }
   vl(e, s, n, i)
}
function vl(e, t, s, i = !0) {
   console.error(e)
}
let Ot = !1,
   Gs = !1
const de = []
let Ae = 0
const ut = []
let He = null,
   et = 0
const Wn = Promise.resolve()
let ci = null
function kn(e) {
   const t = ci || Wn
   return e ? t.then(this ? e.bind(this) : e) : t
}
function bl(e) {
   let t = Ae + 1,
      s = de.length
   for (; t < s; ) {
      const i = (t + s) >>> 1,
         n = de[i],
         r = Lt(n)
      r < e || (r === e && n.pre) ? (t = i + 1) : (s = i)
   }
   return t
}
function fi(e) {
   ;(!de.length || !de.includes(e, Ot && e.allowRecurse ? Ae + 1 : Ae)) &&
      (e.id == null ? de.push(e) : de.splice(bl(e.id), 0, e), Un())
}
function Un() {
   !Ot && !Gs && ((Gs = !0), (ci = Wn.then(Kn)))
}
function wl(e) {
   const t = de.indexOf(e)
   t > Ae && de.splice(t, 1)
}
function yl(e) {
   U(e)
      ? ut.push(...e)
      : (!He || !He.includes(e, e.allowRecurse ? et + 1 : et)) && ut.push(e),
      Un()
}
function Vi(e, t, s = Ot ? Ae + 1 : 0) {
   for (; s < de.length; s++) {
      const i = de[s]
      if (i && i.pre) {
         if (e && i.id !== e.uid) continue
         de.splice(s, 1), s--, i()
      }
   }
}
function qn(e) {
   if (ut.length) {
      const t = [...new Set(ut)].sort((s, i) => Lt(s) - Lt(i))
      if (((ut.length = 0), He)) {
         He.push(...t)
         return
      }
      for (He = t, et = 0; et < He.length; et++) He[et]()
      ;(He = null), (et = 0)
   }
}
const Lt = (e) => (e.id == null ? 1 / 0 : e.id),
   Sl = (e, t) => {
      const s = Lt(e) - Lt(t)
      if (s === 0) {
         if (e.pre && !t.pre) return -1
         if (t.pre && !e.pre) return 1
      }
      return s
   }
function Kn(e) {
   ;(Gs = !1), (Ot = !0), de.sort(Sl)
   try {
      for (Ae = 0; Ae < de.length; Ae++) {
         const t = de[Ae]
         t && t.active !== !1 && qe(t, null, 14)
      }
   } finally {
      ;(Ae = 0),
         (de.length = 0),
         qn(),
         (Ot = !1),
         (ci = null),
         (de.length || ut.length) && Kn()
   }
}
function _l(e, t, ...s) {
   if (e.isUnmounted) return
   const i = e.vnode.props || ne
   let n = s
   const r = t.startsWith('update:'),
      l = r && t.slice(7)
   if (l && l in i) {
      const d = `${l === 'modelValue' ? 'model' : l}Modifiers`,
         { number: f, trim: h } = i[d] || ne
      h && (n = s.map((m) => (oe(m) ? m.trim() : m))), f && (n = s.map(Dr))
   }
   let a,
      o = i[(a = Ss(t))] || i[(a = Ss(ht(t)))]
   !o && r && (o = i[(a = Ss(yt(t)))]), o && Me(o, e, 6, n)
   const c = i[a + 'Once']
   if (c) {
      if (!e.emitted) e.emitted = {}
      else if (e.emitted[a]) return
      ;(e.emitted[a] = !0), Me(c, e, 6, n)
   }
}
function Yn(e, t, s = !1) {
   const i = t.emitsCache,
      n = i.get(e)
   if (n !== void 0) return n
   const r = e.emits
   let l = {},
      a = !1
   if (!q(e)) {
      const o = (c) => {
         const d = Yn(c, t, !0)
         d && ((a = !0), ce(l, d))
      }
      !s && t.mixins.length && t.mixins.forEach(o),
         e.extends && o(e.extends),
         e.mixins && e.mixins.forEach(o)
   }
   return !r && !a
      ? (re(e) && i.set(e, null), null)
      : (U(r) ? r.forEach((o) => (l[o] = null)) : ce(l, r),
        re(e) && i.set(e, l),
        l)
}
function us(e, t) {
   return !e || !os(t)
      ? !1
      : ((t = t.slice(2).replace(/Once$/, '')),
        Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, yt(t)) || Z(e, t))
}
let ge = null,
   ps = null
function Qt(e) {
   const t = ge
   return (ge = e), (ps = (e && e.type.__scopeId) || null), t
}
function ui(e) {
   ps = e
}
function pi() {
   ps = null
}
function es(e, t = ge, s) {
   if (!t || e._n) return e
   const i = (...n) => {
      i._d && Xi(-1)
      const r = Qt(t)
      let l
      try {
         l = e(...n)
      } finally {
         Qt(r), i._d && Xi(1)
      }
      return l
   }
   return (i._n = !0), (i._c = !0), (i._d = !0), i
}
function Ts(e) {
   const {
      type: t,
      vnode: s,
      proxy: i,
      withProxy: n,
      props: r,
      propsOptions: [l],
      slots: a,
      attrs: o,
      emit: c,
      render: d,
      renderCache: f,
      data: h,
      setupState: m,
      ctx: v,
      inheritAttrs: b
   } = e
   let z, _
   const D = Qt(e)
   try {
      if (s.shapeFlag & 4) {
         const O = n || i,
            B = O
         ;(z = Le(d.call(B, O, f, r, m, h, v))), (_ = o)
      } else {
         const O = t
         ;(z = Le(
            O.length > 1 ? O(r, { attrs: o, slots: a, emit: c }) : O(r, null)
         )),
            (_ = t.props ? o : xl(o))
      }
   } catch (O) {
      ;(Mt.length = 0), fs(O, e, 1), (z = le(vt))
   }
   let w = z
   if (_ && b !== !1) {
      const O = Object.keys(_),
         { shapeFlag: B } = w
      O.length && B & 7 && (l && O.some(Zs) && (_ = Tl(_, l)), (w = bt(w, _)))
   }
   return (
      s.dirs &&
         ((w = bt(w)), (w.dirs = w.dirs ? w.dirs.concat(s.dirs) : s.dirs)),
      s.transition && (w.transition = s.transition),
      (z = w),
      Qt(D),
      z
   )
}
const xl = (e) => {
      let t
      for (const s in e)
         (s === 'class' || s === 'style' || os(s)) &&
            ((t || (t = {}))[s] = e[s])
      return t
   },
   Tl = (e, t) => {
      const s = {}
      for (const i in e) (!Zs(i) || !(i.slice(9) in t)) && (s[i] = e[i])
      return s
   }
function El(e, t, s) {
   const { props: i, children: n, component: r } = e,
      { props: l, children: a, patchFlag: o } = t,
      c = r.emitsOptions
   if (t.dirs || t.transition) return !0
   if (s && o >= 0) {
      if (o & 1024) return !0
      if (o & 16) return i ? Gi(i, l, c) : !!l
      if (o & 8) {
         const d = t.dynamicProps
         for (let f = 0; f < d.length; f++) {
            const h = d[f]
            if (l[h] !== i[h] && !us(c, h)) return !0
         }
      }
   } else
      return (n || a) && (!a || !a.$stable)
         ? !0
         : i === l
         ? !1
         : i
         ? l
            ? Gi(i, l, c)
            : !0
         : !!l
   return !1
}
function Gi(e, t, s) {
   const i = Object.keys(t)
   if (i.length !== Object.keys(e).length) return !0
   for (let n = 0; n < i.length; n++) {
      const r = i[n]
      if (t[r] !== e[r] && !us(s, r)) return !0
   }
   return !1
}
function Cl({ vnode: e, parent: t }, s) {
   for (; t; ) {
      const i = t.subTree
      if (
         (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)
      )
         ((e = t.vnode).el = s), (t = t.parent)
      else break
   }
}
const Pl = Symbol.for('v-ndc'),
   Ml = (e) => e.__isSuspense
function Il(e, t) {
   t && t.pendingBranch
      ? U(e)
         ? t.effects.push(...e)
         : t.effects.push(e)
      : yl(e)
}
const Ol = Symbol.for('v-scx'),
   Ll = () => qt(Ol),
   Ht = {}
function Ut(e, t, s) {
   return Xn(e, t, s)
}
function Xn(
   e,
   t,
   { immediate: s, deep: i, flush: n, once: r, onTrack: l, onTrigger: a } = ne
) {
   if (t && r) {
      const N = t
      t = (...se) => {
         N(...se), B()
      }
   }
   const o = pe,
      c = (N) => (i === !0 ? N : at(N, i === !1 ? 1 : void 0))
   let d,
      f = !1,
      h = !1
   if (
      (be(e)
         ? ((d = () => e.value), (f = Zt(e)))
         : ft(e)
         ? ((d = () => c(e)), (f = !0))
         : U(e)
         ? ((h = !0),
           (f = e.some((N) => ft(N) || Zt(N))),
           (d = () =>
              e.map((N) => {
                 if (be(N)) return N.value
                 if (ft(N)) return c(N)
                 if (q(N)) return qe(N, o, 2)
              })))
         : q(e)
         ? t
            ? (d = () => qe(e, o, 2))
            : (d = () => (m && m(), Me(e, o, 3, [v])))
         : (d = xe),
      t && i)
   ) {
      const N = d
      d = () => at(N())
   }
   let m,
      v = (N) => {
         m = w.onStop = () => {
            qe(N, o, 4), (m = w.onStop = void 0)
         }
      },
      b
   if (vs)
      if (
         ((v = xe),
         t ? s && Me(t, o, 3, [d(), h ? [] : void 0, v]) : d(),
         n === 'sync')
      ) {
         const N = Ll()
         b = N.__watcherHandles || (N.__watcherHandles = [])
      } else return xe
   let z = h ? new Array(e.length).fill(Ht) : Ht
   const _ = () => {
      if (!(!w.active || !w.dirty))
         if (t) {
            const N = w.run()
            ;(i || f || (h ? N.some((se, V) => Ke(se, z[V])) : Ke(N, z))) &&
               (m && m(),
               Me(t, o, 3, [
                  N,
                  z === Ht ? void 0 : h && z[0] === Ht ? [] : z,
                  v
               ]),
               (z = N))
         } else w.run()
   }
   _.allowRecurse = !!t
   let D
   n === 'sync'
      ? (D = _)
      : n === 'post'
      ? (D = () => he(_, o && o.suspense))
      : ((_.pre = !0), o && (_.id = o.uid), (D = () => fi(_)))
   const w = new si(d, xe, D),
      O = Ur(),
      B = () => {
         w.stop(), O && Qs(O.effects, w)
      }
   return (
      t
         ? s
            ? _()
            : (z = w.run())
         : n === 'post'
         ? he(w.run.bind(w), o && o.suspense)
         : w.run(),
      b && b.push(B),
      B
   )
}
function Al(e, t, s) {
   const i = this.proxy,
      n = oe(e) ? (e.includes('.') ? Jn(i, e) : () => i[e]) : e.bind(i, i)
   let r
   q(t) ? (r = t) : ((r = t.handler), (s = t))
   const l = Bt(this),
      a = Xn(n, r.bind(i), s)
   return l(), a
}
function Jn(e, t) {
   const s = t.split('.')
   return () => {
      let i = e
      for (let n = 0; n < s.length && i; n++) i = i[s[n]]
      return i
   }
}
function at(e, t, s = 0, i) {
   if (!re(e) || e.__v_skip) return e
   if (t && t > 0) {
      if (s >= t) return e
      s++
   }
   if (((i = i || new Set()), i.has(e))) return e
   if ((i.add(e), be(e))) at(e.value, t, s, i)
   else if (U(e)) for (let n = 0; n < e.length; n++) at(e[n], t, s, i)
   else if (bn(e) || ct(e))
      e.forEach((n) => {
         at(n, t, s, i)
      })
   else if (Sn(e)) for (const n in e) at(e[n], t, s, i)
   return e
}
function Ze(e, t, s, i) {
   const n = e.dirs,
      r = t && t.dirs
   for (let l = 0; l < n.length; l++) {
      const a = n[l]
      r && (a.oldValue = r[l].value)
      let o = a.dir[i]
      o && (nt(), Me(o, s, 8, [e.el, a, e, t]), rt())
   }
}
const Et = (e) => !!e.type.__asyncLoader,
   Zn = (e) => e.type.__isKeepAlive
function zl(e, t) {
   Qn(e, 'a', t)
}
function Bl(e, t) {
   Qn(e, 'da', t)
}
function Qn(e, t, s = pe) {
   const i =
      e.__wdc ||
      (e.__wdc = () => {
         let n = s
         for (; n; ) {
            if (n.isDeactivated) return
            n = n.parent
         }
         return e()
      })
   if ((hs(t, i, s), s)) {
      let n = s.parent
      for (; n && n.parent; )
         Zn(n.parent.vnode) && Rl(i, t, s, n), (n = n.parent)
   }
}
function Rl(e, t, s, i) {
   const n = hs(t, e, i, !0)
   tr(() => {
      Qs(i[t], n)
   }, s)
}
function hs(e, t, s = pe, i = !1) {
   if (s) {
      const n = s[e] || (s[e] = []),
         r =
            t.__weh ||
            (t.__weh = (...l) => {
               if (s.isUnmounted) return
               nt()
               const a = Bt(s),
                  o = Me(t, s, e, l)
               return a(), rt(), o
            })
      return i ? n.unshift(r) : n.push(r), r
   }
}
const Fe =
      (e) =>
      (t, s = pe) =>
         (!vs || e === 'sp') && hs(e, (...i) => t(...i), s),
   Nl = Fe('bm'),
   hi = Fe('m'),
   er = Fe('bu'),
   mi = Fe('u'),
   gi = Fe('bum'),
   tr = Fe('um'),
   Dl = Fe('sp'),
   $l = Fe('rtg'),
   Fl = Fe('rtc')
function Vl(e, t = pe) {
   hs('ec', e, t)
}
function sr(e, t, s, i) {
   let n
   const r = s && s[i]
   if (U(e) || oe(e)) {
      n = new Array(e.length)
      for (let l = 0, a = e.length; l < a; l++)
         n[l] = t(e[l], l, void 0, r && r[l])
   } else if (typeof e == 'number') {
      n = new Array(e)
      for (let l = 0; l < e; l++) n[l] = t(l + 1, l, void 0, r && r[l])
   } else if (re(e))
      if (e[Symbol.iterator])
         n = Array.from(e, (l, a) => t(l, a, void 0, r && r[a]))
      else {
         const l = Object.keys(e)
         n = new Array(l.length)
         for (let a = 0, o = l.length; a < o; a++) {
            const c = l[a]
            n[a] = t(e[c], c, a, r && r[a])
         }
      }
   else n = []
   return s && (s[i] = n), n
}
function Gl(e, t, s = {}, i, n) {
   if (ge.isCE || (ge.parent && Et(ge.parent) && ge.parent.isCE))
      return t !== 'default' && (s.name = t), le('slot', s, i && i())
   let r = e[t]
   r && r._c && (r._d = !1), $e()
   const l = r && ir(r(s)),
      a = oo(
         me,
         { key: s.key || (l && l.key) || `_${t}` },
         l || (i ? i() : []),
         l && e._ === 1 ? 64 : -2
      )
   return (
      !n && a.scopeId && (a.slotScopeIds = [a.scopeId + '-s']),
      r && r._c && (r._d = !0),
      a
   )
}
function ir(e) {
   return e.some((t) =>
      ss(t) ? !(t.type === vt || (t.type === me && !ir(t.children))) : !0
   )
      ? e
      : null
}
const Hs = (e) => (e ? (mr(e) ? _i(e) || e.proxy : Hs(e.parent)) : null),
   Ct = ce(Object.create(null), {
      $: (e) => e,
      $el: (e) => e.vnode.el,
      $data: (e) => e.data,
      $props: (e) => e.props,
      $attrs: (e) => e.attrs,
      $slots: (e) => e.slots,
      $refs: (e) => e.refs,
      $parent: (e) => Hs(e.parent),
      $root: (e) => Hs(e.root),
      $emit: (e) => e.emit,
      $options: (e) => vi(e),
      $forceUpdate: (e) =>
         e.f ||
         (e.f = () => {
            ;(e.effect.dirty = !0), fi(e.update)
         }),
      $nextTick: (e) => e.n || (e.n = kn.bind(e.proxy)),
      $watch: (e) => Al.bind(e)
   }),
   Es = (e, t) => e !== ne && !e.__isScriptSetup && Z(e, t),
   Hl = {
      get({ _: e }, t) {
         const {
            ctx: s,
            setupState: i,
            data: n,
            props: r,
            accessCache: l,
            type: a,
            appContext: o
         } = e
         let c
         if (t[0] !== '$') {
            const m = l[t]
            if (m !== void 0)
               switch (m) {
                  case 1:
                     return i[t]
                  case 2:
                     return n[t]
                  case 4:
                     return s[t]
                  case 3:
                     return r[t]
               }
            else {
               if (Es(i, t)) return (l[t] = 1), i[t]
               if (n !== ne && Z(n, t)) return (l[t] = 2), n[t]
               if ((c = e.propsOptions[0]) && Z(c, t)) return (l[t] = 3), r[t]
               if (s !== ne && Z(s, t)) return (l[t] = 4), s[t]
               js && (l[t] = 0)
            }
         }
         const d = Ct[t]
         let f, h
         if (d) return t === '$attrs' && ve(e, 'get', t), d(e)
         if ((f = a.__cssModules) && (f = f[t])) return f
         if (s !== ne && Z(s, t)) return (l[t] = 4), s[t]
         if (((h = o.config.globalProperties), Z(h, t))) return h[t]
      },
      set({ _: e }, t, s) {
         const { data: i, setupState: n, ctx: r } = e
         return Es(n, t)
            ? ((n[t] = s), !0)
            : i !== ne && Z(i, t)
            ? ((i[t] = s), !0)
            : Z(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((r[t] = s), !0)
      },
      has(
         {
            _: {
               data: e,
               setupState: t,
               accessCache: s,
               ctx: i,
               appContext: n,
               propsOptions: r
            }
         },
         l
      ) {
         let a
         return (
            !!s[l] ||
            (e !== ne && Z(e, l)) ||
            Es(t, l) ||
            ((a = r[0]) && Z(a, l)) ||
            Z(i, l) ||
            Z(Ct, l) ||
            Z(n.config.globalProperties, l)
         )
      },
      defineProperty(e, t, s) {
         return (
            s.get != null
               ? (e._.accessCache[t] = 0)
               : Z(s, 'value') && this.set(e, t, s.value, null),
            Reflect.defineProperty(e, t, s)
         )
      }
   }
function Hi(e) {
   return U(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e
}
let js = !0
function jl(e) {
   const t = vi(e),
      s = e.proxy,
      i = e.ctx
   ;(js = !1), t.beforeCreate && ji(t.beforeCreate, e, 'bc')
   const {
      data: n,
      computed: r,
      methods: l,
      watch: a,
      provide: o,
      inject: c,
      created: d,
      beforeMount: f,
      mounted: h,
      beforeUpdate: m,
      updated: v,
      activated: b,
      deactivated: z,
      beforeDestroy: _,
      beforeUnmount: D,
      destroyed: w,
      unmounted: O,
      render: B,
      renderTracked: N,
      renderTriggered: se,
      errorCaptured: V,
      serverPrefetch: A,
      expose: P,
      inheritAttrs: F,
      components: E,
      directives: M,
      filters: $
   } = t
   if ((c && Wl(c, i, null), l))
      for (const Y in l) {
         const K = l[Y]
         q(K) && (i[Y] = K.bind(s))
      }
   if (n) {
      const Y = n.call(s, s)
      re(Y) && (e.data = oi(Y))
   }
   if (((js = !0), r))
      for (const Y in r) {
         const K = r[Y],
            ee = q(K) ? K.bind(s, s) : q(K.get) ? K.get.bind(s, s) : xe,
            Je = !q(K) && q(K.set) ? K.set.bind(s) : xe,
            Be = vr({ get: ee, set: Je })
         Object.defineProperty(i, Y, {
            enumerable: !0,
            configurable: !0,
            get: () => Be.value,
            set: (_e) => (Be.value = _e)
         })
      }
   if (a) for (const Y in a) nr(a[Y], i, s, Y)
   if (o) {
      const Y = q(o) ? o.call(s) : o
      Reflect.ownKeys(Y).forEach((K) => {
         bi(K, Y[K])
      })
   }
   d && ji(d, e, 'c')
   function W(Y, K) {
      U(K) ? K.forEach((ee) => Y(ee.bind(s))) : K && Y(K.bind(s))
   }
   if (
      (W(Nl, f),
      W(hi, h),
      W(er, m),
      W(mi, v),
      W(zl, b),
      W(Bl, z),
      W(Vl, V),
      W(Fl, N),
      W($l, se),
      W(gi, D),
      W(tr, O),
      W(Dl, A),
      U(P))
   )
      if (P.length) {
         const Y = e.exposed || (e.exposed = {})
         P.forEach((K) => {
            Object.defineProperty(Y, K, {
               get: () => s[K],
               set: (ee) => (s[K] = ee)
            })
         })
      } else e.exposed || (e.exposed = {})
   B && e.render === xe && (e.render = B),
      F != null && (e.inheritAttrs = F),
      E && (e.components = E),
      M && (e.directives = M)
}
function Wl(e, t, s = xe) {
   U(e) && (e = Ws(e))
   for (const i in e) {
      const n = e[i]
      let r
      re(n)
         ? 'default' in n
            ? (r = qt(n.from || i, n.default, !0))
            : (r = qt(n.from || i))
         : (r = qt(n)),
         be(r)
            ? Object.defineProperty(t, i, {
                 enumerable: !0,
                 configurable: !0,
                 get: () => r.value,
                 set: (l) => (r.value = l)
              })
            : (t[i] = r)
   }
}
function ji(e, t, s) {
   Me(U(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, s)
}
function nr(e, t, s, i) {
   const n = i.includes('.') ? Jn(s, i) : () => s[i]
   if (oe(e)) {
      const r = t[e]
      q(r) && Ut(n, r)
   } else if (q(e)) Ut(n, e.bind(s))
   else if (re(e))
      if (U(e)) e.forEach((r) => nr(r, t, s, i))
      else {
         const r = q(e.handler) ? e.handler.bind(s) : t[e.handler]
         q(r) && Ut(n, r, e)
      }
}
function vi(e) {
   const t = e.type,
      { mixins: s, extends: i } = t,
      {
         mixins: n,
         optionsCache: r,
         config: { optionMergeStrategies: l }
      } = e.appContext,
      a = r.get(t)
   let o
   return (
      a
         ? (o = a)
         : !n.length && !s && !i
         ? (o = t)
         : ((o = {}),
           n.length && n.forEach((c) => ts(o, c, l, !0)),
           ts(o, t, l)),
      re(t) && r.set(t, o),
      o
   )
}
function ts(e, t, s, i = !1) {
   const { mixins: n, extends: r } = t
   r && ts(e, r, s, !0), n && n.forEach((l) => ts(e, l, s, !0))
   for (const l in t)
      if (!(i && l === 'expose')) {
         const a = kl[l] || (s && s[l])
         e[l] = a ? a(e[l], t[l]) : t[l]
      }
   return e
}
const kl = {
   data: Wi,
   props: ki,
   emits: ki,
   methods: xt,
   computed: xt,
   beforeCreate: fe,
   created: fe,
   beforeMount: fe,
   mounted: fe,
   beforeUpdate: fe,
   updated: fe,
   beforeDestroy: fe,
   beforeUnmount: fe,
   destroyed: fe,
   unmounted: fe,
   activated: fe,
   deactivated: fe,
   errorCaptured: fe,
   serverPrefetch: fe,
   components: xt,
   directives: xt,
   watch: ql,
   provide: Wi,
   inject: Ul
}
function Wi(e, t) {
   return t
      ? e
         ? function () {
              return ce(
                 q(e) ? e.call(this, this) : e,
                 q(t) ? t.call(this, this) : t
              )
           }
         : t
      : e
}
function Ul(e, t) {
   return xt(Ws(e), Ws(t))
}
function Ws(e) {
   if (U(e)) {
      const t = {}
      for (let s = 0; s < e.length; s++) t[e[s]] = e[s]
      return t
   }
   return e
}
function fe(e, t) {
   return e ? [...new Set([].concat(e, t))] : t
}
function xt(e, t) {
   return e ? ce(Object.create(null), e, t) : t
}
function ki(e, t) {
   return e
      ? U(e) && U(t)
         ? [...new Set([...e, ...t])]
         : ce(Object.create(null), Hi(e), Hi(t ?? {}))
      : t
}
function ql(e, t) {
   if (!e) return t
   if (!t) return e
   const s = ce(Object.create(null), e)
   for (const i in t) s[i] = fe(e[i], t[i])
   return s
}
function rr() {
   return {
      app: null,
      config: {
         isNativeTag: Ar,
         performance: !1,
         globalProperties: {},
         optionMergeStrategies: {},
         errorHandler: void 0,
         warnHandler: void 0,
         compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: Object.create(null),
      optionsCache: new WeakMap(),
      propsCache: new WeakMap(),
      emitsCache: new WeakMap()
   }
}
let Kl = 0
function Yl(e, t) {
   return function (i, n = null) {
      q(i) || (i = ce({}, i)), n != null && !re(n) && (n = null)
      const r = rr(),
         l = new WeakSet()
      let a = !1
      const o = (r.app = {
         _uid: Kl++,
         _component: i,
         _props: n,
         _container: null,
         _context: r,
         _instance: null,
         version: So,
         get config() {
            return r.config
         },
         set config(c) {},
         use(c, ...d) {
            return (
               l.has(c) ||
                  (c && q(c.install)
                     ? (l.add(c), c.install(o, ...d))
                     : q(c) && (l.add(c), c(o, ...d))),
               o
            )
         },
         mixin(c) {
            return r.mixins.includes(c) || r.mixins.push(c), o
         },
         component(c, d) {
            return d ? ((r.components[c] = d), o) : r.components[c]
         },
         directive(c, d) {
            return d ? ((r.directives[c] = d), o) : r.directives[c]
         },
         mount(c, d, f) {
            if (!a) {
               const h = le(i, n)
               return (
                  (h.appContext = r),
                  f === !0 ? (f = 'svg') : f === !1 && (f = void 0),
                  d && t ? t(h, c) : e(h, c, f),
                  (a = !0),
                  (o._container = c),
                  (c.__vue_app__ = o),
                  _i(h.component) || h.component.proxy
               )
            }
         },
         unmount() {
            a && (e(null, o._container), delete o._container.__vue_app__)
         },
         provide(c, d) {
            return (r.provides[c] = d), o
         },
         runWithContext(c) {
            const d = Pt
            Pt = o
            try {
               return c()
            } finally {
               Pt = d
            }
         }
      })
      return o
   }
}
let Pt = null
function bi(e, t) {
   if (pe) {
      let s = pe.provides
      const i = pe.parent && pe.parent.provides
      i === s && (s = pe.provides = Object.create(i)), (s[e] = t)
   }
}
function qt(e, t, s = !1) {
   const i = pe || ge
   if (i || Pt) {
      const n = i
         ? i.parent == null
            ? i.vnode.appContext && i.vnode.appContext.provides
            : i.parent.provides
         : Pt._context.provides
      if (n && e in n) return n[e]
      if (arguments.length > 1) return s && q(t) ? t.call(i && i.proxy) : t
   }
}
function Xl(e, t, s, i = !1) {
   const n = {},
      r = {}
   Jt(r, gs, 1), (e.propsDefaults = Object.create(null)), lr(e, t, n, r)
   for (const l in e.propsOptions[0]) l in n || (n[l] = void 0)
   s ? (e.props = i ? n : ul(n)) : e.type.props ? (e.props = n) : (e.props = r),
      (e.attrs = r)
}
function Jl(e, t, s, i) {
   const {
         props: n,
         attrs: r,
         vnode: { patchFlag: l }
      } = e,
      a = Q(n),
      [o] = e.propsOptions
   let c = !1
   if ((i || l > 0) && !(l & 16)) {
      if (l & 8) {
         const d = e.vnode.dynamicProps
         for (let f = 0; f < d.length; f++) {
            let h = d[f]
            if (us(e.emitsOptions, h)) continue
            const m = t[h]
            if (o)
               if (Z(r, h)) m !== r[h] && ((r[h] = m), (c = !0))
               else {
                  const v = ht(h)
                  n[v] = ks(o, a, v, m, e, !1)
               }
            else m !== r[h] && ((r[h] = m), (c = !0))
         }
      }
   } else {
      lr(e, t, n, r) && (c = !0)
      let d
      for (const f in a)
         (!t || (!Z(t, f) && ((d = yt(f)) === f || !Z(t, d)))) &&
            (o
               ? s &&
                 (s[f] !== void 0 || s[d] !== void 0) &&
                 (n[f] = ks(o, a, f, void 0, e, !0))
               : delete n[f])
      if (r !== a)
         for (const f in r) (!t || !Z(t, f)) && (delete r[f], (c = !0))
   }
   c && De(e, 'set', '$attrs')
}
function lr(e, t, s, i) {
   const [n, r] = e.propsOptions
   let l = !1,
      a
   if (t)
      for (let o in t) {
         if (Tt(o)) continue
         const c = t[o]
         let d
         n && Z(n, (d = ht(o)))
            ? !r || !r.includes(d)
               ? (s[d] = c)
               : ((a || (a = {}))[d] = c)
            : us(e.emitsOptions, o) ||
              ((!(o in i) || c !== i[o]) && ((i[o] = c), (l = !0)))
      }
   if (r) {
      const o = Q(s),
         c = a || ne
      for (let d = 0; d < r.length; d++) {
         const f = r[d]
         s[f] = ks(n, o, f, c[f], e, !Z(c, f))
      }
   }
   return l
}
function ks(e, t, s, i, n, r) {
   const l = e[s]
   if (l != null) {
      const a = Z(l, 'default')
      if (a && i === void 0) {
         const o = l.default
         if (l.type !== Function && !l.skipFactory && q(o)) {
            const { propsDefaults: c } = n
            if (s in c) i = c[s]
            else {
               const d = Bt(n)
               ;(i = c[s] = o.call(null, t)), d()
            }
         } else i = o
      }
      l[0] &&
         (r && !a ? (i = !1) : l[1] && (i === '' || i === yt(s)) && (i = !0))
   }
   return i
}
function or(e, t, s = !1) {
   const i = t.propsCache,
      n = i.get(e)
   if (n) return n
   const r = e.props,
      l = {},
      a = []
   let o = !1
   if (!q(e)) {
      const d = (f) => {
         o = !0
         const [h, m] = or(f, t, !0)
         ce(l, h), m && a.push(...m)
      }
      !s && t.mixins.length && t.mixins.forEach(d),
         e.extends && d(e.extends),
         e.mixins && e.mixins.forEach(d)
   }
   if (!r && !o) return re(e) && i.set(e, dt), dt
   if (U(r))
      for (let d = 0; d < r.length; d++) {
         const f = ht(r[d])
         Ui(f) && (l[f] = ne)
      }
   else if (r)
      for (const d in r) {
         const f = ht(d)
         if (Ui(f)) {
            const h = r[d],
               m = (l[f] = U(h) || q(h) ? { type: h } : ce({}, h))
            if (m) {
               const v = Yi(Boolean, m.type),
                  b = Yi(String, m.type)
               ;(m[0] = v > -1),
                  (m[1] = b < 0 || v < b),
                  (v > -1 || Z(m, 'default')) && a.push(f)
            }
         }
      }
   const c = [l, a]
   return re(e) && i.set(e, c), c
}
function Ui(e) {
   return e[0] !== '$' && !Tt(e)
}
function qi(e) {
   const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
   return t ? t[2] : e === null ? 'null' : ''
}
function Ki(e, t) {
   return qi(e) === qi(t)
}
function Yi(e, t) {
   return U(t) ? t.findIndex((s) => Ki(s, e)) : q(t) && Ki(t, e) ? 0 : -1
}
const ar = (e) => e[0] === '_' || e === '$stable',
   wi = (e) => (U(e) ? e.map(Le) : [Le(e)]),
   Zl = (e, t, s) => {
      if (t._n) return t
      const i = es((...n) => wi(t(...n)), s)
      return (i._c = !1), i
   },
   dr = (e, t, s) => {
      const i = e._ctx
      for (const n in e) {
         if (ar(n)) continue
         const r = e[n]
         if (q(r)) t[n] = Zl(n, r, i)
         else if (r != null) {
            const l = wi(r)
            t[n] = () => l
         }
      }
   },
   cr = (e, t) => {
      const s = wi(t)
      e.slots.default = () => s
   },
   Ql = (e, t) => {
      if (e.vnode.shapeFlag & 32) {
         const s = t._
         s ? ((e.slots = Q(t)), Jt(t, '_', s)) : dr(t, (e.slots = {}))
      } else (e.slots = {}), t && cr(e, t)
      Jt(e.slots, gs, 1)
   },
   eo = (e, t, s) => {
      const { vnode: i, slots: n } = e
      let r = !0,
         l = ne
      if (i.shapeFlag & 32) {
         const a = t._
         a
            ? s && a === 1
               ? (r = !1)
               : (ce(n, t), !s && a === 1 && delete n._)
            : ((r = !t.$stable), dr(t, n)),
            (l = t)
      } else t && (cr(e, t), (l = { default: 1 }))
      if (r) for (const a in n) !ar(a) && l[a] == null && delete n[a]
   }
function Us(e, t, s, i, n = !1) {
   if (U(e)) {
      e.forEach((h, m) => Us(h, t && (U(t) ? t[m] : t), s, i, n))
      return
   }
   if (Et(i) && !n) return
   const r = i.shapeFlag & 4 ? _i(i.component) || i.component.proxy : i.el,
      l = n ? null : r,
      { i: a, r: o } = e,
      c = t && t.r,
      d = a.refs === ne ? (a.refs = {}) : a.refs,
      f = a.setupState
   if (
      (c != null &&
         c !== o &&
         (oe(c)
            ? ((d[c] = null), Z(f, c) && (f[c] = null))
            : be(c) && (c.value = null)),
      q(o))
   )
      qe(o, a, 12, [l, d])
   else {
      const h = oe(o),
         m = be(o)
      if (h || m) {
         const v = () => {
            if (e.f) {
               const b = h ? (Z(f, o) ? f[o] : d[o]) : o.value
               n
                  ? U(b) && Qs(b, r)
                  : U(b)
                  ? b.includes(r) || b.push(r)
                  : h
                  ? ((d[o] = [r]), Z(f, o) && (f[o] = d[o]))
                  : ((o.value = [r]), e.k && (d[e.k] = o.value))
            } else
               h
                  ? ((d[o] = l), Z(f, o) && (f[o] = l))
                  : m && ((o.value = l), e.k && (d[e.k] = l))
         }
         l ? ((v.id = -1), he(v, s)) : v()
      }
   }
}
const he = Il
function to(e) {
   return so(e)
}
function so(e, t) {
   const s = xn()
   s.__VUE__ = !0
   const {
         insert: i,
         remove: n,
         patchProp: r,
         createElement: l,
         createText: a,
         createComment: o,
         setText: c,
         setElementText: d,
         parentNode: f,
         nextSibling: h,
         setScopeId: m = xe,
         insertStaticContent: v
      } = e,
      b = (
         u,
         p,
         g,
         y = null,
         S = null,
         C = null,
         L = void 0,
         T = null,
         I = !!p.dynamicChildren
      ) => {
         if (u === p) return
         u && !_t(u, p) && ((y = Nt(u)), _e(u, S, C, !0), (u = null)),
            p.patchFlag === -2 && ((I = !1), (p.dynamicChildren = null))
         const { type: x, ref: R, shapeFlag: j } = p
         switch (x) {
            case ms:
               z(u, p, g, y)
               break
            case vt:
               _(u, p, g, y)
               break
            case Kt:
               u == null && D(p, g, y, L)
               break
            case me:
               E(u, p, g, y, S, C, L, T, I)
               break
            default:
               j & 1
                  ? B(u, p, g, y, S, C, L, T, I)
                  : j & 6
                  ? M(u, p, g, y, S, C, L, T, I)
                  : (j & 64 || j & 128) &&
                    x.process(u, p, g, y, S, C, L, T, I, lt)
         }
         R != null && S && Us(R, u && u.ref, C, p || u, !p)
      },
      z = (u, p, g, y) => {
         if (u == null) i((p.el = a(p.children)), g, y)
         else {
            const S = (p.el = u.el)
            p.children !== u.children && c(S, p.children)
         }
      },
      _ = (u, p, g, y) => {
         u == null ? i((p.el = o(p.children || '')), g, y) : (p.el = u.el)
      },
      D = (u, p, g, y) => {
         ;[u.el, u.anchor] = v(u.children, p, g, y, u.el, u.anchor)
      },
      w = ({ el: u, anchor: p }, g, y) => {
         let S
         for (; u && u !== p; ) (S = h(u)), i(u, g, y), (u = S)
         i(p, g, y)
      },
      O = ({ el: u, anchor: p }) => {
         let g
         for (; u && u !== p; ) (g = h(u)), n(u), (u = g)
         n(p)
      },
      B = (u, p, g, y, S, C, L, T, I) => {
         p.type === 'svg' ? (L = 'svg') : p.type === 'math' && (L = 'mathml'),
            u == null ? N(p, g, y, S, C, L, T, I) : A(u, p, S, C, L, T, I)
      },
      N = (u, p, g, y, S, C, L, T) => {
         let I, x
         const { props: R, shapeFlag: j, transition: G, dirs: k } = u
         if (
            ((I = u.el = l(u.type, C, R && R.is, R)),
            j & 8
               ? d(I, u.children)
               : j & 16 && V(u.children, I, null, y, S, Cs(u, C), L, T),
            k && Ze(u, null, y, 'created'),
            se(I, u, u.scopeId, L, y),
            R)
         ) {
            for (const te in R)
               te !== 'value' &&
                  !Tt(te) &&
                  r(I, te, null, R[te], C, u.children, y, S, Re)
            'value' in R && r(I, 'value', null, R.value, C),
               (x = R.onVnodeBeforeMount) && Oe(x, y, u)
         }
         k && Ze(u, null, y, 'beforeMount')
         const X = io(S, G)
         X && G.beforeEnter(I),
            i(I, p, g),
            ((x = R && R.onVnodeMounted) || X || k) &&
               he(() => {
                  x && Oe(x, y, u),
                     X && G.enter(I),
                     k && Ze(u, null, y, 'mounted')
               }, S)
      },
      se = (u, p, g, y, S) => {
         if ((g && m(u, g), y)) for (let C = 0; C < y.length; C++) m(u, y[C])
         if (S) {
            let C = S.subTree
            if (p === C) {
               const L = S.vnode
               se(u, L, L.scopeId, L.slotScopeIds, S.parent)
            }
         }
      },
      V = (u, p, g, y, S, C, L, T, I = 0) => {
         for (let x = I; x < u.length; x++) {
            const R = (u[x] = T ? je(u[x]) : Le(u[x]))
            b(null, R, p, g, y, S, C, L, T)
         }
      },
      A = (u, p, g, y, S, C, L) => {
         const T = (p.el = u.el)
         let { patchFlag: I, dynamicChildren: x, dirs: R } = p
         I |= u.patchFlag & 16
         const j = u.props || ne,
            G = p.props || ne
         let k
         if (
            (g && Qe(g, !1),
            (k = G.onVnodeBeforeUpdate) && Oe(k, g, p, u),
            R && Ze(p, u, g, 'beforeUpdate'),
            g && Qe(g, !0),
            x
               ? P(u.dynamicChildren, x, T, g, y, Cs(p, S), C)
               : L || K(u, p, T, null, g, y, Cs(p, S), C, !1),
            I > 0)
         ) {
            if (I & 16) F(T, p, j, G, g, y, S)
            else if (
               (I & 2 && j.class !== G.class && r(T, 'class', null, G.class, S),
               I & 4 && r(T, 'style', j.style, G.style, S),
               I & 8)
            ) {
               const X = p.dynamicProps
               for (let te = 0; te < X.length; te++) {
                  const ie = X[te],
                     ae = j[ie],
                     Te = G[ie]
                  ;(Te !== ae || ie === 'value') &&
                     r(T, ie, ae, Te, S, u.children, g, y, Re)
               }
            }
            I & 1 && u.children !== p.children && d(T, p.children)
         } else !L && x == null && F(T, p, j, G, g, y, S)
         ;((k = G.onVnodeUpdated) || R) &&
            he(() => {
               k && Oe(k, g, p, u), R && Ze(p, u, g, 'updated')
            }, y)
      },
      P = (u, p, g, y, S, C, L) => {
         for (let T = 0; T < p.length; T++) {
            const I = u[T],
               x = p[T],
               R =
                  I.el && (I.type === me || !_t(I, x) || I.shapeFlag & 70)
                     ? f(I.el)
                     : g
            b(I, x, R, null, y, S, C, L, !0)
         }
      },
      F = (u, p, g, y, S, C, L) => {
         if (g !== y) {
            if (g !== ne)
               for (const T in g)
                  !Tt(T) &&
                     !(T in y) &&
                     r(u, T, g[T], null, L, p.children, S, C, Re)
            for (const T in y) {
               if (Tt(T)) continue
               const I = y[T],
                  x = g[T]
               I !== x &&
                  T !== 'value' &&
                  r(u, T, x, I, L, p.children, S, C, Re)
            }
            'value' in y && r(u, 'value', g.value, y.value, L)
         }
      },
      E = (u, p, g, y, S, C, L, T, I) => {
         const x = (p.el = u ? u.el : a('')),
            R = (p.anchor = u ? u.anchor : a(''))
         let { patchFlag: j, dynamicChildren: G, slotScopeIds: k } = p
         k && (T = T ? T.concat(k) : k),
            u == null
               ? (i(x, g, y),
                 i(R, g, y),
                 V(p.children || [], g, R, S, C, L, T, I))
               : j > 0 && j & 64 && G && u.dynamicChildren
               ? (P(u.dynamicChildren, G, g, S, C, L, T),
                 (p.key != null || (S && p === S.subTree)) && fr(u, p, !0))
               : K(u, p, g, R, S, C, L, T, I)
      },
      M = (u, p, g, y, S, C, L, T, I) => {
         ;(p.slotScopeIds = T),
            u == null
               ? p.shapeFlag & 512
                  ? S.ctx.activate(p, g, y, L, I)
                  : $(p, g, y, S, C, L, I)
               : H(u, p, I)
      },
      $ = (u, p, g, y, S, C, L) => {
         const T = (u.component = mo(u, y, S))
         if ((Zn(u) && (T.ctx.renderer = lt), go(T), T.asyncDep)) {
            if ((S && S.registerDep(T, W), !u.el)) {
               const I = (T.subTree = le(vt))
               _(null, I, p, g)
            }
         } else W(T, u, p, g, S, C, L)
      },
      H = (u, p, g) => {
         const y = (p.component = u.component)
         if (El(u, p, g))
            if (y.asyncDep && !y.asyncResolved) {
               Y(y, p, g)
               return
            } else (y.next = p), wl(y.update), (y.effect.dirty = !0), y.update()
         else (p.el = u.el), (y.vnode = p)
      },
      W = (u, p, g, y, S, C, L) => {
         const T = () => {
               if (u.isMounted) {
                  let { next: R, bu: j, u: G, parent: k, vnode: X } = u
                  {
                     const ot = ur(u)
                     if (ot) {
                        R && ((R.el = X.el), Y(u, R, L)),
                           ot.asyncDep.then(() => {
                              u.isUnmounted || T()
                           })
                        return
                     }
                  }
                  let te = R,
                     ie
                  Qe(u, !1),
                     R ? ((R.el = X.el), Y(u, R, L)) : (R = X),
                     j && _s(j),
                     (ie = R.props && R.props.onVnodeBeforeUpdate) &&
                        Oe(ie, k, R, X),
                     Qe(u, !0)
                  const ae = Ts(u),
                     Te = u.subTree
                  ;(u.subTree = ae),
                     b(Te, ae, f(Te.el), Nt(Te), u, S, C),
                     (R.el = ae.el),
                     te === null && Cl(u, ae.el),
                     G && he(G, S),
                     (ie = R.props && R.props.onVnodeUpdated) &&
                        he(() => Oe(ie, k, R, X), S)
               } else {
                  let R
                  const { el: j, props: G } = p,
                     { bm: k, m: X, parent: te } = u,
                     ie = Et(p)
                  if (
                     (Qe(u, !1),
                     k && _s(k),
                     !ie && (R = G && G.onVnodeBeforeMount) && Oe(R, te, p),
                     Qe(u, !0),
                     j && ys)
                  ) {
                     const ae = () => {
                        ;(u.subTree = Ts(u)), ys(j, u.subTree, u, S, null)
                     }
                     ie
                        ? p.type
                             .__asyncLoader()
                             .then(() => !u.isUnmounted && ae())
                        : ae()
                  } else {
                     const ae = (u.subTree = Ts(u))
                     b(null, ae, g, y, u, S, C), (p.el = ae.el)
                  }
                  if ((X && he(X, S), !ie && (R = G && G.onVnodeMounted))) {
                     const ae = p
                     he(() => Oe(R, te, ae), S)
                  }
                  ;(p.shapeFlag & 256 ||
                     (te && Et(te.vnode) && te.vnode.shapeFlag & 256)) &&
                     u.a &&
                     he(u.a, S),
                     (u.isMounted = !0),
                     (p = g = y = null)
               }
            },
            I = (u.effect = new si(T, xe, () => fi(x), u.scope)),
            x = (u.update = () => {
               I.dirty && I.run()
            })
         ;(x.id = u.uid), Qe(u, !0), x()
      },
      Y = (u, p, g) => {
         p.component = u
         const y = u.vnode.props
         ;(u.vnode = p),
            (u.next = null),
            Jl(u, p.props, y, g),
            eo(u, p.children, g),
            nt(),
            Vi(u),
            rt()
      },
      K = (u, p, g, y, S, C, L, T, I = !1) => {
         const x = u && u.children,
            R = u ? u.shapeFlag : 0,
            j = p.children,
            { patchFlag: G, shapeFlag: k } = p
         if (G > 0) {
            if (G & 128) {
               Je(x, j, g, y, S, C, L, T, I)
               return
            } else if (G & 256) {
               ee(x, j, g, y, S, C, L, T, I)
               return
            }
         }
         k & 8
            ? (R & 16 && Re(x, S, C), j !== x && d(g, j))
            : R & 16
            ? k & 16
               ? Je(x, j, g, y, S, C, L, T, I)
               : Re(x, S, C, !0)
            : (R & 8 && d(g, ''), k & 16 && V(j, g, y, S, C, L, T, I))
      },
      ee = (u, p, g, y, S, C, L, T, I) => {
         ;(u = u || dt), (p = p || dt)
         const x = u.length,
            R = p.length,
            j = Math.min(x, R)
         let G
         for (G = 0; G < j; G++) {
            const k = (p[G] = I ? je(p[G]) : Le(p[G]))
            b(u[G], k, g, null, S, C, L, T, I)
         }
         x > R ? Re(u, S, C, !0, !1, j) : V(p, g, y, S, C, L, T, I, j)
      },
      Je = (u, p, g, y, S, C, L, T, I) => {
         let x = 0
         const R = p.length
         let j = u.length - 1,
            G = R - 1
         for (; x <= j && x <= G; ) {
            const k = u[x],
               X = (p[x] = I ? je(p[x]) : Le(p[x]))
            if (_t(k, X)) b(k, X, g, null, S, C, L, T, I)
            else break
            x++
         }
         for (; x <= j && x <= G; ) {
            const k = u[j],
               X = (p[G] = I ? je(p[G]) : Le(p[G]))
            if (_t(k, X)) b(k, X, g, null, S, C, L, T, I)
            else break
            j--, G--
         }
         if (x > j) {
            if (x <= G) {
               const k = G + 1,
                  X = k < R ? p[k].el : y
               for (; x <= G; )
                  b(
                     null,
                     (p[x] = I ? je(p[x]) : Le(p[x])),
                     g,
                     X,
                     S,
                     C,
                     L,
                     T,
                     I
                  ),
                     x++
            }
         } else if (x > G) for (; x <= j; ) _e(u[x], S, C, !0), x++
         else {
            const k = x,
               X = x,
               te = new Map()
            for (x = X; x <= G; x++) {
               const ye = (p[x] = I ? je(p[x]) : Le(p[x]))
               ye.key != null && te.set(ye.key, x)
            }
            let ie,
               ae = 0
            const Te = G - X + 1
            let ot = !1,
               Ii = 0
            const St = new Array(Te)
            for (x = 0; x < Te; x++) St[x] = 0
            for (x = k; x <= j; x++) {
               const ye = u[x]
               if (ae >= Te) {
                  _e(ye, S, C, !0)
                  continue
               }
               let Ie
               if (ye.key != null) Ie = te.get(ye.key)
               else
                  for (ie = X; ie <= G; ie++)
                     if (St[ie - X] === 0 && _t(ye, p[ie])) {
                        Ie = ie
                        break
                     }
               Ie === void 0
                  ? _e(ye, S, C, !0)
                  : ((St[Ie - X] = x + 1),
                    Ie >= Ii ? (Ii = Ie) : (ot = !0),
                    b(ye, p[Ie], g, null, S, C, L, T, I),
                    ae++)
            }
            const Oi = ot ? no(St) : dt
            for (ie = Oi.length - 1, x = Te - 1; x >= 0; x--) {
               const ye = X + x,
                  Ie = p[ye],
                  Li = ye + 1 < R ? p[ye + 1].el : y
               St[x] === 0
                  ? b(null, Ie, g, Li, S, C, L, T, I)
                  : ot && (ie < 0 || x !== Oi[ie] ? Be(Ie, g, Li, 2) : ie--)
            }
         }
      },
      Be = (u, p, g, y, S = null) => {
         const { el: C, type: L, transition: T, children: I, shapeFlag: x } = u
         if (x & 6) {
            Be(u.component.subTree, p, g, y)
            return
         }
         if (x & 128) {
            u.suspense.move(p, g, y)
            return
         }
         if (x & 64) {
            L.move(u, p, g, lt)
            return
         }
         if (L === me) {
            i(C, p, g)
            for (let j = 0; j < I.length; j++) Be(I[j], p, g, y)
            i(u.anchor, p, g)
            return
         }
         if (L === Kt) {
            w(u, p, g)
            return
         }
         if (y !== 2 && x & 1 && T)
            if (y === 0) T.beforeEnter(C), i(C, p, g), he(() => T.enter(C), S)
            else {
               const { leave: j, delayLeave: G, afterLeave: k } = T,
                  X = () => i(C, p, g),
                  te = () => {
                     j(C, () => {
                        X(), k && k()
                     })
                  }
               G ? G(C, X, te) : te()
            }
         else i(C, p, g)
      },
      _e = (u, p, g, y = !1, S = !1) => {
         const {
            type: C,
            props: L,
            ref: T,
            children: I,
            dynamicChildren: x,
            shapeFlag: R,
            patchFlag: j,
            dirs: G
         } = u
         if ((T != null && Us(T, null, g, u, !0), R & 256)) {
            p.ctx.deactivate(u)
            return
         }
         const k = R & 1 && G,
            X = !Et(u)
         let te
         if ((X && (te = L && L.onVnodeBeforeUnmount) && Oe(te, p, u), R & 6))
            Lr(u.component, g, y)
         else {
            if (R & 128) {
               u.suspense.unmount(g, y)
               return
            }
            k && Ze(u, null, p, 'beforeUnmount'),
               R & 64
                  ? u.type.remove(u, p, g, S, lt, y)
                  : x && (C !== me || (j > 0 && j & 64))
                  ? Re(x, p, g, !1, !0)
                  : ((C === me && j & 384) || (!S && R & 16)) && Re(I, p, g),
               y && Pi(u)
         }
         ;((X && (te = L && L.onVnodeUnmounted)) || k) &&
            he(() => {
               te && Oe(te, p, u), k && Ze(u, null, p, 'unmounted')
            }, g)
      },
      Pi = (u) => {
         const { type: p, el: g, anchor: y, transition: S } = u
         if (p === me) {
            Or(g, y)
            return
         }
         if (p === Kt) {
            O(u)
            return
         }
         const C = () => {
            n(g), S && !S.persisted && S.afterLeave && S.afterLeave()
         }
         if (u.shapeFlag & 1 && S && !S.persisted) {
            const { leave: L, delayLeave: T } = S,
               I = () => L(g, C)
            T ? T(u.el, C, I) : I()
         } else C()
      },
      Or = (u, p) => {
         let g
         for (; u !== p; ) (g = h(u)), n(u), (u = g)
         n(p)
      },
      Lr = (u, p, g) => {
         const { bum: y, scope: S, update: C, subTree: L, um: T } = u
         y && _s(y),
            S.stop(),
            C && ((C.active = !1), _e(L, u, p, g)),
            T && he(T, p),
            he(() => {
               u.isUnmounted = !0
            }, p),
            p &&
               p.pendingBranch &&
               !p.isUnmounted &&
               u.asyncDep &&
               !u.asyncResolved &&
               u.suspenseId === p.pendingId &&
               (p.deps--, p.deps === 0 && p.resolve())
      },
      Re = (u, p, g, y = !1, S = !1, C = 0) => {
         for (let L = C; L < u.length; L++) _e(u[L], p, g, y, S)
      },
      Nt = (u) =>
         u.shapeFlag & 6
            ? Nt(u.component.subTree)
            : u.shapeFlag & 128
            ? u.suspense.next()
            : h(u.anchor || u.el)
   let bs = !1
   const Mi = (u, p, g) => {
         u == null
            ? p._vnode && _e(p._vnode, null, null, !0)
            : b(p._vnode || null, u, p, null, null, null, g),
            bs || ((bs = !0), Vi(), qn(), (bs = !1)),
            (p._vnode = u)
      },
      lt = {
         p: b,
         um: _e,
         m: Be,
         r: Pi,
         mt: $,
         mc: V,
         pc: K,
         pbc: P,
         n: Nt,
         o: e
      }
   let ws, ys
   return (
      t && ([ws, ys] = t(lt)),
      { render: Mi, hydrate: ws, createApp: Yl(Mi, ws) }
   )
}
function Cs({ type: e, props: t }, s) {
   return (s === 'svg' && e === 'foreignObject') ||
      (s === 'mathml' &&
         e === 'annotation-xml' &&
         t &&
         t.encoding &&
         t.encoding.includes('html'))
      ? void 0
      : s
}
function Qe({ effect: e, update: t }, s) {
   e.allowRecurse = t.allowRecurse = s
}
function io(e, t) {
   return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function fr(e, t, s = !1) {
   const i = e.children,
      n = t.children
   if (U(i) && U(n))
      for (let r = 0; r < i.length; r++) {
         const l = i[r]
         let a = n[r]
         a.shapeFlag & 1 &&
            !a.dynamicChildren &&
            ((a.patchFlag <= 0 || a.patchFlag === 32) &&
               ((a = n[r] = je(n[r])), (a.el = l.el)),
            s || fr(l, a)),
            a.type === ms && (a.el = l.el)
      }
}
function no(e) {
   const t = e.slice(),
      s = [0]
   let i, n, r, l, a
   const o = e.length
   for (i = 0; i < o; i++) {
      const c = e[i]
      if (c !== 0) {
         if (((n = s[s.length - 1]), e[n] < c)) {
            ;(t[i] = n), s.push(i)
            continue
         }
         for (r = 0, l = s.length - 1; r < l; )
            (a = (r + l) >> 1), e[s[a]] < c ? (r = a + 1) : (l = a)
         c < e[s[r]] && (r > 0 && (t[i] = s[r - 1]), (s[r] = i))
      }
   }
   for (r = s.length, l = s[r - 1]; r-- > 0; ) (s[r] = l), (l = t[l])
   return s
}
function ur(e) {
   const t = e.subTree.component
   if (t) return t.asyncDep && !t.asyncResolved ? t : ur(t)
}
const ro = (e) => e.__isTeleport,
   me = Symbol.for('v-fgt'),
   ms = Symbol.for('v-txt'),
   vt = Symbol.for('v-cmt'),
   Kt = Symbol.for('v-stc'),
   Mt = []
let Pe = null
function $e(e = !1) {
   Mt.push((Pe = e ? null : []))
}
function lo() {
   Mt.pop(), (Pe = Mt[Mt.length - 1] || null)
}
let At = 1
function Xi(e) {
   At += e
}
function pr(e) {
   return (
      (e.dynamicChildren = At > 0 ? Pe || dt : null),
      lo(),
      At > 0 && Pe && Pe.push(e),
      e
   )
}
function Ye(e, t, s, i, n, r) {
   return pr(J(e, t, s, i, n, r, !0))
}
function oo(e, t, s, i, n) {
   return pr(le(e, t, s, i, n, !0))
}
function ss(e) {
   return e ? e.__v_isVNode === !0 : !1
}
function _t(e, t) {
   return e.type === t.type && e.key === t.key
}
const gs = '__vInternal',
   hr = ({ key: e }) => e ?? null,
   Yt = ({ ref: e, ref_key: t, ref_for: s }) => (
      typeof e == 'number' && (e = '' + e),
      e != null
         ? oe(e) || be(e) || q(e)
            ? { i: ge, r: e, k: t, f: !!s }
            : e
         : null
   )
function J(
   e,
   t = null,
   s = null,
   i = 0,
   n = null,
   r = e === me ? 0 : 1,
   l = !1,
   a = !1
) {
   const o = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e,
      props: t,
      key: t && hr(t),
      ref: t && Yt(t),
      scopeId: ps,
      slotScopeIds: null,
      children: s,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: r,
      patchFlag: i,
      dynamicProps: n,
      dynamicChildren: null,
      appContext: null,
      ctx: ge
   }
   return (
      a
         ? (Si(o, s), r & 128 && e.normalize(o))
         : s && (o.shapeFlag |= oe(s) ? 8 : 16),
      At > 0 &&
         !l &&
         Pe &&
         (o.patchFlag > 0 || r & 6) &&
         o.patchFlag !== 32 &&
         Pe.push(o),
      o
   )
}
const le = ao
function ao(e, t = null, s = null, i = 0, n = null, r = !1) {
   if (((!e || e === Pl) && (e = vt), ss(e))) {
      const a = bt(e, t, !0)
      return (
         s && Si(a, s),
         At > 0 &&
            !r &&
            Pe &&
            (a.shapeFlag & 6 ? (Pe[Pe.indexOf(e)] = a) : Pe.push(a)),
         (a.patchFlag |= -2),
         a
      )
   }
   if ((yo(e) && (e = e.__vccOpts), t)) {
      t = co(t)
      let { class: a, style: o } = t
      a && !oe(a) && (t.class = mt(a)),
         re(o) && (Fn(o) && !U(o) && (o = ce({}, o)), (t.style = ti(o)))
   }
   const l = oe(e) ? 1 : Ml(e) ? 128 : ro(e) ? 64 : re(e) ? 4 : q(e) ? 2 : 0
   return J(e, t, s, i, n, l, r, !0)
}
function co(e) {
   return e ? (Fn(e) || gs in e ? ce({}, e) : e) : null
}
function bt(e, t, s = !1) {
   const { props: i, ref: n, patchFlag: r, children: l } = e,
      a = t ? uo(i || {}, t) : i
   return {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: a,
      key: a && hr(a),
      ref:
         t && t.ref
            ? s && n
               ? U(n)
                  ? n.concat(Yt(t))
                  : [n, Yt(t)]
               : Yt(t)
            : n,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== me ? (r === -1 ? 16 : r | 16) : r,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: e.transition,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && bt(e.ssContent),
      ssFallback: e.ssFallback && bt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
   }
}
function yi(e = ' ', t = 0) {
   return le(ms, null, e, t)
}
function fo(e, t) {
   const s = le(Kt, null, e)
   return (s.staticCount = t), s
}
function Le(e) {
   return e == null || typeof e == 'boolean'
      ? le(vt)
      : U(e)
      ? le(me, null, e.slice())
      : typeof e == 'object'
      ? je(e)
      : le(ms, null, String(e))
}
function je(e) {
   return (e.el === null && e.patchFlag !== -1) || e.memo ? e : bt(e)
}
function Si(e, t) {
   let s = 0
   const { shapeFlag: i } = e
   if (t == null) t = null
   else if (U(t)) s = 16
   else if (typeof t == 'object')
      if (i & 65) {
         const n = t.default
         n && (n._c && (n._d = !1), Si(e, n()), n._c && (n._d = !0))
         return
      } else {
         s = 32
         const n = t._
         !n && !(gs in t)
            ? (t._ctx = ge)
            : n === 3 &&
              ge &&
              (ge.slots._ === 1
                 ? (t._ = 1)
                 : ((t._ = 2), (e.patchFlag |= 1024)))
      }
   else
      q(t)
         ? ((t = { default: t, _ctx: ge }), (s = 32))
         : ((t = String(t)), i & 64 ? ((s = 16), (t = [yi(t)])) : (s = 8))
   ;(e.children = t), (e.shapeFlag |= s)
}
function uo(...e) {
   const t = {}
   for (let s = 0; s < e.length; s++) {
      const i = e[s]
      for (const n in i)
         if (n === 'class')
            t.class !== i.class && (t.class = mt([t.class, i.class]))
         else if (n === 'style') t.style = ti([t.style, i.style])
         else if (os(n)) {
            const r = t[n],
               l = i[n]
            l &&
               r !== l &&
               !(U(r) && r.includes(l)) &&
               (t[n] = r ? [].concat(r, l) : l)
         } else n !== '' && (t[n] = i[n])
   }
   return t
}
function Oe(e, t, s, i = null) {
   Me(e, t, 7, [s, i])
}
const po = rr()
let ho = 0
function mo(e, t, s) {
   const i = e.type,
      n = (t ? t.appContext : e.appContext) || po,
      r = {
         uid: ho++,
         vnode: e,
         type: i,
         parent: t,
         appContext: n,
         root: null,
         next: null,
         subTree: null,
         effect: null,
         update: null,
         scope: new Wr(!0),
         render: null,
         proxy: null,
         exposed: null,
         exposeProxy: null,
         withProxy: null,
         provides: t ? t.provides : Object.create(n.provides),
         accessCache: null,
         renderCache: [],
         components: null,
         directives: null,
         propsOptions: or(i, n),
         emitsOptions: Yn(i, n),
         emit: null,
         emitted: null,
         propsDefaults: ne,
         inheritAttrs: i.inheritAttrs,
         ctx: ne,
         data: ne,
         props: ne,
         attrs: ne,
         slots: ne,
         refs: ne,
         setupState: ne,
         setupContext: null,
         attrsProxy: null,
         slotsProxy: null,
         suspense: s,
         suspenseId: s ? s.pendingId : 0,
         asyncDep: null,
         asyncResolved: !1,
         isMounted: !1,
         isUnmounted: !1,
         isDeactivated: !1,
         bc: null,
         c: null,
         bm: null,
         m: null,
         bu: null,
         u: null,
         um: null,
         bum: null,
         da: null,
         a: null,
         rtg: null,
         rtc: null,
         ec: null,
         sp: null
      }
   return (
      (r.ctx = { _: r }),
      (r.root = t ? t.root : r),
      (r.emit = _l.bind(null, r)),
      e.ce && e.ce(r),
      r
   )
}
let pe = null,
   is,
   qs
{
   const e = xn(),
      t = (s, i) => {
         let n
         return (
            (n = e[s]) || (n = e[s] = []),
            n.push(i),
            (r) => {
               n.length > 1 ? n.forEach((l) => l(r)) : n[0](r)
            }
         )
      }
   ;(is = t('__VUE_INSTANCE_SETTERS__', (s) => (pe = s))),
      (qs = t('__VUE_SSR_SETTERS__', (s) => (vs = s)))
}
const Bt = (e) => {
      const t = pe
      return (
         is(e),
         e.scope.on(),
         () => {
            e.scope.off(), is(t)
         }
      )
   },
   Ji = () => {
      pe && pe.scope.off(), is(null)
   }
function mr(e) {
   return e.vnode.shapeFlag & 4
}
let vs = !1
function go(e, t = !1) {
   t && qs(t)
   const { props: s, children: i } = e.vnode,
      n = mr(e)
   Xl(e, s, n, t), Ql(e, i)
   const r = n ? vo(e, t) : void 0
   return t && qs(!1), r
}
function vo(e, t) {
   const s = e.type
   ;(e.accessCache = Object.create(null)), (e.proxy = Vn(new Proxy(e.ctx, Hl)))
   const { setup: i } = s
   if (i) {
      const n = (e.setupContext = i.length > 1 ? wo(e) : null),
         r = Bt(e)
      nt()
      const l = qe(i, e, 0, [e.props, n])
      if ((rt(), r(), wn(l))) {
         if ((l.then(Ji, Ji), t))
            return l
               .then((a) => {
                  Zi(e, a, t)
               })
               .catch((a) => {
                  fs(a, e, 0)
               })
         e.asyncDep = l
      } else Zi(e, l, t)
   } else gr(e, t)
}
function Zi(e, t, s) {
   q(t)
      ? e.type.__ssrInlineRender
         ? (e.ssrRender = t)
         : (e.render = t)
      : re(t) && (e.setupState = jn(t)),
      gr(e, s)
}
let Qi
function gr(e, t, s) {
   const i = e.type
   if (!e.render) {
      if (!t && Qi && !i.render) {
         const n = i.template || vi(e).template
         if (n) {
            const { isCustomElement: r, compilerOptions: l } =
                  e.appContext.config,
               { delimiters: a, compilerOptions: o } = i,
               c = ce(ce({ isCustomElement: r, delimiters: a }, l), o)
            i.render = Qi(n, c)
         }
      }
      e.render = i.render || xe
   }
   {
      const n = Bt(e)
      nt()
      try {
         jl(e)
      } finally {
         rt(), n()
      }
   }
}
function bo(e) {
   return (
      e.attrsProxy ||
      (e.attrsProxy = new Proxy(e.attrs, {
         get(t, s) {
            return ve(e, 'get', '$attrs'), t[s]
         }
      }))
   )
}
function wo(e) {
   const t = (s) => {
      e.exposed = s || {}
   }
   return {
      get attrs() {
         return bo(e)
      },
      slots: e.slots,
      emit: e.emit,
      expose: t
   }
}
function _i(e) {
   if (e.exposed)
      return (
         e.exposeProxy ||
         (e.exposeProxy = new Proxy(jn(Vn(e.exposed)), {
            get(t, s) {
               if (s in t) return t[s]
               if (s in Ct) return Ct[s](e)
            },
            has(t, s) {
               return s in t || s in Ct
            }
         }))
      )
}
function yo(e) {
   return q(e) && '__vccOpts' in e
}
const vr = (e, t) => pl(e, t, vs)
function Ce(e, t, s) {
   const i = arguments.length
   return i === 2
      ? re(t) && !U(t)
         ? ss(t)
            ? le(e, null, [t])
            : le(e, t)
         : le(e, null, t)
      : (i > 3
           ? (s = Array.prototype.slice.call(arguments, 2))
           : i === 3 && ss(s) && (s = [s]),
        le(e, t, s))
}
const So = '3.4.18'
/**
 * @vue/runtime-dom v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const _o = 'http://www.w3.org/2000/svg',
   xo = 'http://www.w3.org/1998/Math/MathML',
   We = typeof document < 'u' ? document : null,
   en = We && We.createElement('template'),
   To = {
      insert: (e, t, s) => {
         t.insertBefore(e, s || null)
      },
      remove: (e) => {
         const t = e.parentNode
         t && t.removeChild(e)
      },
      createElement: (e, t, s, i) => {
         const n =
            t === 'svg'
               ? We.createElementNS(_o, e)
               : t === 'mathml'
               ? We.createElementNS(xo, e)
               : We.createElement(e, s ? { is: s } : void 0)
         return (
            e === 'select' &&
               i &&
               i.multiple != null &&
               n.setAttribute('multiple', i.multiple),
            n
         )
      },
      createText: (e) => We.createTextNode(e),
      createComment: (e) => We.createComment(e),
      setText: (e, t) => {
         e.nodeValue = t
      },
      setElementText: (e, t) => {
         e.textContent = t
      },
      parentNode: (e) => e.parentNode,
      nextSibling: (e) => e.nextSibling,
      querySelector: (e) => We.querySelector(e),
      setScopeId(e, t) {
         e.setAttribute(t, '')
      },
      insertStaticContent(e, t, s, i, n, r) {
         const l = s ? s.previousSibling : t.lastChild
         if (n && (n === r || n.nextSibling))
            for (
               ;
               t.insertBefore(n.cloneNode(!0), s),
                  !(n === r || !(n = n.nextSibling));

            );
         else {
            en.innerHTML =
               i === 'svg'
                  ? `<svg>${e}</svg>`
                  : i === 'mathml'
                  ? `<math>${e}</math>`
                  : e
            const a = en.content
            if (i === 'svg' || i === 'mathml') {
               const o = a.firstChild
               for (; o.firstChild; ) a.appendChild(o.firstChild)
               a.removeChild(o)
            }
            t.insertBefore(a, s)
         }
         return [
            l ? l.nextSibling : t.firstChild,
            s ? s.previousSibling : t.lastChild
         ]
      }
   },
   Eo = Symbol('_vtc')
function Co(e, t, s) {
   const i = e[Eo]
   i && (t = (t ? [t, ...i] : [...i]).join(' ')),
      t == null
         ? e.removeAttribute('class')
         : s
         ? e.setAttribute('class', t)
         : (e.className = t)
}
const tn = Symbol('_vod'),
   Po = Symbol(''),
   Mo = /(^|;)\s*display\s*:/
function Io(e, t, s) {
   const i = e.style,
      n = oe(s),
      r = i.display
   let l = !1
   if (s && !n) {
      if (t && !oe(t)) for (const a in t) s[a] == null && Ks(i, a, '')
      for (const a in s) a === 'display' && (l = !0), Ks(i, a, s[a])
   } else if (n) {
      if (t !== s) {
         const a = i[Po]
         a && (s += ';' + a), (i.cssText = s), (l = Mo.test(s))
      }
   } else t && e.removeAttribute('style')
   tn in e && ((e[tn] = l ? i.display : ''), (i.display = r))
}
const sn = /\s*!important$/
function Ks(e, t, s) {
   if (U(s)) s.forEach((i) => Ks(e, t, i))
   else if ((s == null && (s = ''), t.startsWith('--'))) e.setProperty(t, s)
   else {
      const i = Oo(e, t)
      sn.test(s)
         ? e.setProperty(yt(i), s.replace(sn, ''), 'important')
         : (e[i] = s)
   }
}
const nn = ['Webkit', 'Moz', 'ms'],
   Ps = {}
function Oo(e, t) {
   const s = Ps[t]
   if (s) return s
   let i = ht(t)
   if (i !== 'filter' && i in e) return (Ps[t] = i)
   i = _n(i)
   for (let n = 0; n < nn.length; n++) {
      const r = nn[n] + i
      if (r in e) return (Ps[t] = r)
   }
   return t
}
const rn = 'http://www.w3.org/1999/xlink'
function Lo(e, t, s, i, n) {
   if (i && t.startsWith('xlink:'))
      s == null
         ? e.removeAttributeNS(rn, t.slice(6, t.length))
         : e.setAttributeNS(rn, t, s)
   else {
      const r = jr(t)
      s == null || (r && !Tn(s))
         ? e.removeAttribute(t)
         : e.setAttribute(t, r ? '' : s)
   }
}
function Ao(e, t, s, i, n, r, l) {
   if (t === 'innerHTML' || t === 'textContent') {
      i && l(i, n, r), (e[t] = s ?? '')
      return
   }
   const a = e.tagName
   if (t === 'value' && a !== 'PROGRESS' && !a.includes('-')) {
      e._value = s
      const c = a === 'OPTION' ? e.getAttribute('value') : e.value,
         d = s ?? ''
      c !== d && (e.value = d), s == null && e.removeAttribute(t)
      return
   }
   let o = !1
   if (s === '' || s == null) {
      const c = typeof e[t]
      c === 'boolean'
         ? (s = Tn(s))
         : s == null && c === 'string'
         ? ((s = ''), (o = !0))
         : c === 'number' && ((s = 0), (o = !0))
   }
   try {
      e[t] = s
   } catch {}
   o && e.removeAttribute(t)
}
function zo(e, t, s, i) {
   e.addEventListener(t, s, i)
}
function Bo(e, t, s, i) {
   e.removeEventListener(t, s, i)
}
const ln = Symbol('_vei')
function Ro(e, t, s, i, n = null) {
   const r = e[ln] || (e[ln] = {}),
      l = r[t]
   if (i && l) l.value = i
   else {
      const [a, o] = No(t)
      if (i) {
         const c = (r[t] = Fo(i, n))
         zo(e, a, c, o)
      } else l && (Bo(e, a, l, o), (r[t] = void 0))
   }
}
const on = /(?:Once|Passive|Capture)$/
function No(e) {
   let t
   if (on.test(e)) {
      t = {}
      let i
      for (; (i = e.match(on)); )
         (e = e.slice(0, e.length - i[0].length)), (t[i[0].toLowerCase()] = !0)
   }
   return [e[2] === ':' ? e.slice(3) : yt(e.slice(2)), t]
}
let Ms = 0
const Do = Promise.resolve(),
   $o = () => Ms || (Do.then(() => (Ms = 0)), (Ms = Date.now()))
function Fo(e, t) {
   const s = (i) => {
      if (!i._vts) i._vts = Date.now()
      else if (i._vts <= s.attached) return
      Me(Vo(i, s.value), t, 5, [i])
   }
   return (s.value = e), (s.attached = $o()), s
}
function Vo(e, t) {
   if (U(t)) {
      const s = e.stopImmediatePropagation
      return (
         (e.stopImmediatePropagation = () => {
            s.call(e), (e._stopped = !0)
         }),
         t.map((i) => (n) => !n._stopped && i && i(n))
      )
   } else return t
}
const an = (e) =>
      e.charCodeAt(0) === 111 &&
      e.charCodeAt(1) === 110 &&
      e.charCodeAt(2) > 96 &&
      e.charCodeAt(2) < 123,
   Go = (e, t, s, i, n, r, l, a, o) => {
      const c = n === 'svg'
      t === 'class'
         ? Co(e, i, c)
         : t === 'style'
         ? Io(e, s, i)
         : os(t)
         ? Zs(t) || Ro(e, t, s, i, l)
         : (
              t[0] === '.'
                 ? ((t = t.slice(1)), !0)
                 : t[0] === '^'
                 ? ((t = t.slice(1)), !1)
                 : Ho(e, t, i, c)
           )
         ? Ao(e, t, i, r, l, a, o)
         : (t === 'true-value'
              ? (e._trueValue = i)
              : t === 'false-value' && (e._falseValue = i),
           Lo(e, t, i, c))
   }
function Ho(e, t, s, i) {
   if (i)
      return !!(
         t === 'innerHTML' ||
         t === 'textContent' ||
         (t in e && an(t) && q(s))
      )
   if (
      t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA')
   )
      return !1
   if (t === 'width' || t === 'height') {
      const n = e.tagName
      if (n === 'IMG' || n === 'VIDEO' || n === 'CANVAS' || n === 'SOURCE')
         return !1
   }
   return an(t) && oe(s) ? !1 : t in e
}
const jo = ce({ patchProp: Go }, To)
let dn
function Wo() {
   return dn || (dn = to(jo))
}
const ko = (...e) => {
   const t = Wo().createApp(...e),
      { mount: s } = t
   return (
      (t.mount = (i) => {
         const n = qo(i)
         if (!n) return
         const r = t._component
         !q(r) && !r.render && !r.template && (r.template = n.innerHTML),
            (n.innerHTML = '')
         const l = s(n, !1, Uo(n))
         return (
            n instanceof Element &&
               (n.removeAttribute('v-cloak'), n.setAttribute('data-v-app', '')),
            l
         )
      }),
      t
   )
}
function Uo(e) {
   if (e instanceof SVGElement) return 'svg'
   if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
      return 'mathml'
}
function qo(e) {
   return oe(e) ? document.querySelector(e) : e
}
const Ko = '/Crafty-Metaverse/assets/burger-menu-bg-GdNZy52n.webp',
   Yo = '/Crafty-Metaverse/assets/burger-menu-bg-IhL75K6H.png',
   Rt = (e, t) => {
      const s = e.__vccOpts || e
      for (const [i, n] of t) s[i] = n
      return s
   },
   Xo = {},
   Jo = {
      width: '26',
      height: '26',
      viewBox: '0 0 26 26',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
   },
   Zo = J(
      'path',
      {
         d: 'M1.91663 1.9165L24.0833 24.0832V10.361L15.6388 1.9165V24.0832H1.91663V1.9165Z',
         stroke: 'white',
         'stroke-width': '3',
         'stroke-linejoin': 'round'
      },
      null,
      -1
   ),
   Qo = [Zo]
function ea(e, t) {
   return $e(), Ye('svg', Jo, Qo)
}
const ta = Rt(Xo, [['render', ea]])
function cn() {
   var i
   const e = document.createElement('div')
   ;(e.style.visibility = 'hidden'),
      (e.style.overflow = 'scroll'),
      document.body.appendChild(e)
   const t = document.createElement('div')
   e.appendChild(t)
   const s = e.offsetWidth - t.offsetWidth
   return (i = e.parentNode) == null || i.removeChild(e), s
}
function sa(e) {
   const t = document.documentElement,
      s = document.querySelector('.header')
   e
      ? ((t.style.overflow = 'hidden'),
        (t.style.paddingRight = `${cn()}px`),
        (s.style.paddingRight = `${cn()}px`))
      : ((t.style.overflow = ''),
        (t.style.paddingRight = ''),
        (s.style.paddingRight = ''))
}
const br = (e) => (ui('data-v-5a4de7eb'), (e = e()), pi(), e),
   ia = { class: 'header' },
   na = { class: 'header__container' },
   ra = { class: 'header__logo-box', href: '#' },
   la = { class: 'nav__list' },
   oa = ['href'],
   aa = br(() =>
      J(
         'div',
         { class: 'nav__bg' },
         [
            J('picture', null, [
               J('source', { src: Ko, type: 'image/webp' }),
               J('img', { class: 'nav__bg-img', src: Yo })
            ])
         ],
         -1
      )
   ),
   da = br(() => J('span', null, null, -1)),
   ca = [da],
   fa = {
      __name: 'TheHeader',
      setup(e) {
         const t = [
               { id: 1, text: 'Home', link: '#' },
               { id: 2, text: 'About Us', link: '#' },
               { id: 3, text: 'White paper', link: '#' },
               { id: 4, text: 'Tokenomics', link: '#' },
               { id: 5, text: 'Road Map', link: '#' },
               { id: 6, text: 'How to buy', link: '#' },
               { id: 7, text: 'Buy', link: '#' }
            ],
            s = ue(!1)
         function i() {
            ;(s.value = !s.value), sa(s.value)
         }
         return (n, r) => (
            $e(),
            Ye('header', ia, [
               J('div', na, [
                  J('a', ra, [le(ta)]),
                  J(
                     'nav',
                     {
                        class: mt([
                           'header__nav nav',
                           { header__nav_show: s.value }
                        ])
                     },
                     [
                        J('ul', la, [
                           ($e(),
                           Ye(
                              me,
                              null,
                              sr(t, (l) =>
                                 J(
                                    'li',
                                    { class: 'nav__list-item', key: l.id },
                                    [
                                       J(
                                          'a',
                                          {
                                             class: 'nav__list-link',
                                             href: l.link
                                          },
                                          En(l.text),
                                          9,
                                          oa
                                       )
                                    ]
                                 )
                              ),
                              64
                           ))
                        ]),
                        aa
                     ],
                     2
                  ),
                  J(
                     'div',
                     {
                        class: mt([
                           'header__burger-menu',
                           { 'header__burger-menu_active': s.value }
                        ]),
                        onClick: i
                     },
                     ca,
                     2
                  )
               ])
            ])
         )
      }
   },
   ua = Rt(fa, [['__scopeId', 'data-v-5a4de7eb']]),
   pa = '/Crafty-Metaverse/assets/bg-_lz1YLZb.webp',
   ha = '/Crafty-Metaverse/assets/bg-TyDkn5Kw.png',
   ma = '/Crafty-Metaverse/assets/liners-udcb_GK3.webp',
   ga = '/Crafty-Metaverse/assets/liners-8oyxoyf8.png',
   va = { class: 'button' },
   ba = {
      __name: 'TheButton',
      props: ['border'],
      setup(e) {
         return (t, s) => (
            $e(),
            Ye(
               'div',
               { class: mt({ 'button-wrapper': e.border }) },
               [J('button', va, [Gl(t.$slots, 'default', {}, void 0, !0)])],
               2
            )
         )
      }
   },
   wa = Rt(ba, [['__scopeId', 'data-v-5672dcfc']]),
   xi = (e) => (ui('data-v-eeb67065'), (e = e()), pi(), e),
   ya = { class: 'main-section' },
   Sa = xi(() =>
      J(
         'div',
         { class: 'main-section__bg-block' },
         [
            J('picture', null, [
               J('source', { src: pa, type: 'image/webp' }),
               J('img', {
                  class: 'main-section__bg-img',
                  src: ha,
                  alt: 'Bacground image',
                  width: '1920',
                  height: '1024'
               })
            ])
         ],
         -1
      )
   ),
   _a = xi(() => J('div', { class: 'main-section__blures-block' }, null, -1)),
   xa = { class: 'main-section__container' },
   Ta = { class: 'main-section__liner-img-box' },
   Ea = xi(() =>
      J(
         'picture',
         null,
         [
            J('source', { src: ma, type: 'image/webp' }),
            J('img', {
               class: 'main-section__liner-img',
               src: ga,
               alt: 'Blure',
               width: '1348',
               height: '476'
            })
         ],
         -1
      )
   ),
   Ca = { class: 'main-section__content' },
   Pa = fo(
      '<div class="main-section__title-box" data-v-eeb67065><div class="main-section__subtitle" data-v-eeb67065>Crafty Metaverse</div><h1 class="main-section__title" data-v-eeb67065>A SHARED, IMMERSIVE MULTI-BLOCKCHAIN BASED <span class="main-section__title-star" data-v-eeb67065><svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-eeb67065><path d="M23 0L26.2527 19.7473L46 23L26.2527 26.2527L23 46L19.7473 26.2527L0 23L19.7473 19.7473L23 0Z" fill="white" data-v-eeb67065></path></svg></span> METAVERSE ECOSYSTEM</h1></div>',
      1
   ),
   Ma = {
      __name: 'MainSection',
      setup(e) {
         return (t, s) => (
            $e(),
            Ye('section', ya, [
               Sa,
               _a,
               J('div', xa, [
                  J('div', Ta, [
                     Ea,
                     J('div', Ca, [
                        Pa,
                        le(
                           wa,
                           { class: 'main-section__button', border: !0 },
                           { default: es(() => [yi('Invest Now')]), _: 1 }
                        )
                     ])
                  ])
               ])
            ])
         )
      }
   },
   Ia = Rt(Ma, [['__scopeId', 'data-v-eeb67065']]),
   Oa = '/Crafty-Metaverse/assets/bg-z_gySxoG.webp',
   La = '/Crafty-Metaverse/assets/bg-1YT-4dD0.png'
function fn(e) {
   return (
      e !== null &&
      typeof e == 'object' &&
      'constructor' in e &&
      e.constructor === Object
   )
}
function Ti(e, t) {
   e === void 0 && (e = {}),
      t === void 0 && (t = {}),
      Object.keys(t).forEach((s) => {
         typeof e[s] > 'u'
            ? (e[s] = t[s])
            : fn(t[s]) &&
              fn(e[s]) &&
              Object.keys(t[s]).length > 0 &&
              Ti(e[s], t[s])
      })
}
const wr = {
   body: {},
   addEventListener() {},
   removeEventListener() {},
   activeElement: { blur() {}, nodeName: '' },
   querySelector() {
      return null
   },
   querySelectorAll() {
      return []
   },
   getElementById() {
      return null
   },
   createEvent() {
      return { initEvent() {} }
   },
   createElement() {
      return {
         children: [],
         childNodes: [],
         style: {},
         setAttribute() {},
         getElementsByTagName() {
            return []
         }
      }
   },
   createElementNS() {
      return {}
   },
   importNode() {
      return null
   },
   location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
   }
}
function Xe() {
   const e = typeof document < 'u' ? document : {}
   return Ti(e, wr), e
}
const Aa = {
   document: wr,
   navigator: { userAgent: '' },
   location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
   },
   history: { replaceState() {}, pushState() {}, go() {}, back() {} },
   CustomEvent: function () {
      return this
   },
   addEventListener() {},
   removeEventListener() {},
   getComputedStyle() {
      return {
         getPropertyValue() {
            return ''
         }
      }
   },
   Image() {},
   Date() {},
   screen: {},
   setTimeout() {},
   clearTimeout() {},
   matchMedia() {
      return {}
   },
   requestAnimationFrame(e) {
      return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0)
   },
   cancelAnimationFrame(e) {
      typeof setTimeout > 'u' || clearTimeout(e)
   }
}
function we() {
   const e = typeof window < 'u' ? window : {}
   return Ti(e, Aa), e
}
function Ge(e) {
   return (
      e === void 0 && (e = ''),
      e
         .trim()
         .split(' ')
         .filter((t) => !!t.trim())
   )
}
function za(e) {
   const t = e
   Object.keys(t).forEach((s) => {
      try {
         t[s] = null
      } catch {}
      try {
         delete t[s]
      } catch {}
   })
}
function ns(e, t) {
   return t === void 0 && (t = 0), setTimeout(e, t)
}
function rs() {
   return Date.now()
}
function Ba(e) {
   const t = we()
   let s
   return (
      t.getComputedStyle && (s = t.getComputedStyle(e, null)),
      !s && e.currentStyle && (s = e.currentStyle),
      s || (s = e.style),
      s
   )
}
function Ra(e, t) {
   t === void 0 && (t = 'x')
   const s = we()
   let i, n, r
   const l = Ba(e)
   return (
      s.WebKitCSSMatrix
         ? ((n = l.transform || l.webkitTransform),
           n.split(',').length > 6 &&
              (n = n
                 .split(', ')
                 .map((a) => a.replace(',', '.'))
                 .join(', ')),
           (r = new s.WebKitCSSMatrix(n === 'none' ? '' : n)))
         : ((r =
              l.MozTransform ||
              l.OTransform ||
              l.MsTransform ||
              l.msTransform ||
              l.transform ||
              l
                 .getPropertyValue('transform')
                 .replace('translate(', 'matrix(1, 0, 0, 1,')),
           (i = r.toString().split(','))),
      t === 'x' &&
         (s.WebKitCSSMatrix
            ? (n = r.m41)
            : i.length === 16
            ? (n = parseFloat(i[12]))
            : (n = parseFloat(i[4]))),
      t === 'y' &&
         (s.WebKitCSSMatrix
            ? (n = r.m42)
            : i.length === 16
            ? (n = parseFloat(i[13]))
            : (n = parseFloat(i[5]))),
      n || 0
   )
}
function jt(e) {
   return (
      typeof e == 'object' &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === 'Object'
   )
}
function Na(e) {
   return typeof window < 'u' && typeof window.HTMLElement < 'u'
      ? e instanceof HTMLElement
      : e && (e.nodeType === 1 || e.nodeType === 11)
}
function Se() {
   const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ['__proto__', 'constructor', 'prototype']
   for (let s = 1; s < arguments.length; s += 1) {
      const i = s < 0 || arguments.length <= s ? void 0 : arguments[s]
      if (i != null && !Na(i)) {
         const n = Object.keys(Object(i)).filter((r) => t.indexOf(r) < 0)
         for (let r = 0, l = n.length; r < l; r += 1) {
            const a = n[r],
               o = Object.getOwnPropertyDescriptor(i, a)
            o !== void 0 &&
               o.enumerable &&
               (jt(e[a]) && jt(i[a])
                  ? i[a].__swiper__
                     ? (e[a] = i[a])
                     : Se(e[a], i[a])
                  : !jt(e[a]) && jt(i[a])
                  ? ((e[a] = {}),
                    i[a].__swiper__ ? (e[a] = i[a]) : Se(e[a], i[a]))
                  : (e[a] = i[a]))
         }
      }
   }
   return e
}
function Wt(e, t, s) {
   e.style.setProperty(t, s)
}
function yr(e) {
   let { swiper: t, targetPosition: s, side: i } = e
   const n = we(),
      r = -t.translate
   let l = null,
      a
   const o = t.params.speed
   ;(t.wrapperEl.style.scrollSnapType = 'none'),
      n.cancelAnimationFrame(t.cssModeFrameID)
   const c = s > r ? 'next' : 'prev',
      d = (h, m) => (c === 'next' && h >= m) || (c === 'prev' && h <= m),
      f = () => {
         ;(a = new Date().getTime()), l === null && (l = a)
         const h = Math.max(Math.min((a - l) / o, 1), 0),
            m = 0.5 - Math.cos(h * Math.PI) / 2
         let v = r + m * (s - r)
         if ((d(v, s) && (v = s), t.wrapperEl.scrollTo({ [i]: v }), d(v, s))) {
            ;(t.wrapperEl.style.overflow = 'hidden'),
               (t.wrapperEl.style.scrollSnapType = ''),
               setTimeout(() => {
                  ;(t.wrapperEl.style.overflow = ''),
                     t.wrapperEl.scrollTo({ [i]: v })
               }),
               n.cancelAnimationFrame(t.cssModeFrameID)
            return
         }
         t.cssModeFrameID = n.requestAnimationFrame(f)
      }
   f()
}
function ze(e, t) {
   return t === void 0 && (t = ''), [...e.children].filter((s) => s.matches(t))
}
function ls(e) {
   try {
      console.warn(e)
      return
   } catch {}
}
function zt(e, t) {
   t === void 0 && (t = [])
   const s = document.createElement(e)
   return s.classList.add(...(Array.isArray(t) ? t : Ge(t))), s
}
function Da(e) {
   const t = we(),
      s = Xe(),
      i = e.getBoundingClientRect(),
      n = s.body,
      r = e.clientTop || n.clientTop || 0,
      l = e.clientLeft || n.clientLeft || 0,
      a = e === t ? t.scrollY : e.scrollTop,
      o = e === t ? t.scrollX : e.scrollLeft
   return { top: i.top + a - r, left: i.left + o - l }
}
function $a(e, t) {
   const s = []
   for (; e.previousElementSibling; ) {
      const i = e.previousElementSibling
      t ? i.matches(t) && s.push(i) : s.push(i), (e = i)
   }
   return s
}
function Fa(e, t) {
   const s = []
   for (; e.nextElementSibling; ) {
      const i = e.nextElementSibling
      t ? i.matches(t) && s.push(i) : s.push(i), (e = i)
   }
   return s
}
function ke(e, t) {
   return we().getComputedStyle(e, null).getPropertyValue(t)
}
function un(e) {
   let t = e,
      s
   if (t) {
      for (s = 0; (t = t.previousSibling) !== null; )
         t.nodeType === 1 && (s += 1)
      return s
   }
}
function Va(e, t) {
   const s = []
   let i = e.parentElement
   for (; i; ) t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement)
   return s
}
function pn(e, t, s) {
   const i = we()
   return s
      ? e[t === 'width' ? 'offsetWidth' : 'offsetHeight'] +
           parseFloat(
              i
                 .getComputedStyle(e, null)
                 .getPropertyValue(
                    t === 'width' ? 'margin-right' : 'margin-top'
                 )
           ) +
           parseFloat(
              i
                 .getComputedStyle(e, null)
                 .getPropertyValue(
                    t === 'width' ? 'margin-left' : 'margin-bottom'
                 )
           )
      : e.offsetWidth
}
function Ga(e) {
   return (Array.isArray(e) ? e : [e]).filter((t) => !!t)
}
let Is
function Ha() {
   const e = we(),
      t = Xe()
   return {
      smoothScroll:
         t.documentElement &&
         t.documentElement.style &&
         'scrollBehavior' in t.documentElement.style,
      touch: !!(
         'ontouchstart' in e ||
         (e.DocumentTouch && t instanceof e.DocumentTouch)
      )
   }
}
function Sr() {
   return Is || (Is = Ha()), Is
}
let Os
function ja(e) {
   let { userAgent: t } = e === void 0 ? {} : e
   const s = Sr(),
      i = we(),
      n = i.navigator.platform,
      r = t || i.navigator.userAgent,
      l = { ios: !1, android: !1 },
      a = i.screen.width,
      o = i.screen.height,
      c = r.match(/(Android);?[\s\/]+([\d.]+)?/)
   let d = r.match(/(iPad).*OS\s([\d_]+)/)
   const f = r.match(/(iPod)(.*OS\s([\d_]+))?/),
      h = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      m = n === 'Win32'
   let v = n === 'MacIntel'
   const b = [
      '1024x1366',
      '1366x1024',
      '834x1194',
      '1194x834',
      '834x1112',
      '1112x834',
      '768x1024',
      '1024x768',
      '820x1180',
      '1180x820',
      '810x1080',
      '1080x810'
   ]
   return (
      !d &&
         v &&
         s.touch &&
         b.indexOf(`${a}x${o}`) >= 0 &&
         ((d = r.match(/(Version)\/([\d.]+)/)),
         d || (d = [0, 1, '13_0_0']),
         (v = !1)),
      c && !m && ((l.os = 'android'), (l.android = !0)),
      (d || h || f) && ((l.os = 'ios'), (l.ios = !0)),
      l
   )
}
function _r(e) {
   return e === void 0 && (e = {}), Os || (Os = ja(e)), Os
}
let Ls
function Wa() {
   const e = we(),
      t = _r()
   let s = !1
   function i() {
      const a = e.navigator.userAgent.toLowerCase()
      return (
         a.indexOf('safari') >= 0 &&
         a.indexOf('chrome') < 0 &&
         a.indexOf('android') < 0
      )
   }
   if (i()) {
      const a = String(e.navigator.userAgent)
      if (a.includes('Version/')) {
         const [o, c] = a
            .split('Version/')[1]
            .split(' ')[0]
            .split('.')
            .map((d) => Number(d))
         s = o < 16 || (o === 16 && c < 2)
      }
   }
   const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
         e.navigator.userAgent
      ),
      r = i(),
      l = r || (n && t.ios)
   return {
      isSafari: s || r,
      needPerspectiveFix: s,
      need3dFix: l,
      isWebView: n
   }
}
function ka() {
   return Ls || (Ls = Wa()), Ls
}
function Ua(e) {
   let { swiper: t, on: s, emit: i } = e
   const n = we()
   let r = null,
      l = null
   const a = () => {
         !t || t.destroyed || !t.initialized || (i('beforeResize'), i('resize'))
      },
      o = () => {
         !t ||
            t.destroyed ||
            !t.initialized ||
            ((r = new ResizeObserver((f) => {
               l = n.requestAnimationFrame(() => {
                  const { width: h, height: m } = t
                  let v = h,
                     b = m
                  f.forEach((z) => {
                     let { contentBoxSize: _, contentRect: D, target: w } = z
                     ;(w && w !== t.el) ||
                        ((v = D ? D.width : (_[0] || _).inlineSize),
                        (b = D ? D.height : (_[0] || _).blockSize))
                  }),
                     (v !== h || b !== m) && a()
               })
            })),
            r.observe(t.el))
      },
      c = () => {
         l && n.cancelAnimationFrame(l),
            r && r.unobserve && t.el && (r.unobserve(t.el), (r = null))
      },
      d = () => {
         !t || t.destroyed || !t.initialized || i('orientationchange')
      }
   s('init', () => {
      if (t.params.resizeObserver && typeof n.ResizeObserver < 'u') {
         o()
         return
      }
      n.addEventListener('resize', a),
         n.addEventListener('orientationchange', d)
   }),
      s('destroy', () => {
         c(),
            n.removeEventListener('resize', a),
            n.removeEventListener('orientationchange', d)
      })
}
function qa(e) {
   let { swiper: t, extendParams: s, on: i, emit: n } = e
   const r = [],
      l = we(),
      a = function (d, f) {
         f === void 0 && (f = {})
         const h = l.MutationObserver || l.WebkitMutationObserver,
            m = new h((v) => {
               if (t.__preventObserver__) return
               if (v.length === 1) {
                  n('observerUpdate', v[0])
                  return
               }
               const b = function () {
                  n('observerUpdate', v[0])
               }
               l.requestAnimationFrame
                  ? l.requestAnimationFrame(b)
                  : l.setTimeout(b, 0)
            })
         m.observe(d, {
            attributes: typeof f.attributes > 'u' ? !0 : f.attributes,
            childList: typeof f.childList > 'u' ? !0 : f.childList,
            characterData: typeof f.characterData > 'u' ? !0 : f.characterData
         }),
            r.push(m)
      },
      o = () => {
         if (t.params.observer) {
            if (t.params.observeParents) {
               const d = Va(t.hostEl)
               for (let f = 0; f < d.length; f += 1) a(d[f])
            }
            a(t.hostEl, { childList: t.params.observeSlideChildren }),
               a(t.wrapperEl, { attributes: !1 })
         }
      },
      c = () => {
         r.forEach((d) => {
            d.disconnect()
         }),
            r.splice(0, r.length)
      }
   s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      i('init', o),
      i('destroy', c)
}
var Ka = {
   on(e, t, s) {
      const i = this
      if (!i.eventsListeners || i.destroyed || typeof t != 'function') return i
      const n = s ? 'unshift' : 'push'
      return (
         e.split(' ').forEach((r) => {
            i.eventsListeners[r] || (i.eventsListeners[r] = []),
               i.eventsListeners[r][n](t)
         }),
         i
      )
   },
   once(e, t, s) {
      const i = this
      if (!i.eventsListeners || i.destroyed || typeof t != 'function') return i
      function n() {
         i.off(e, n), n.__emitterProxy && delete n.__emitterProxy
         for (var r = arguments.length, l = new Array(r), a = 0; a < r; a++)
            l[a] = arguments[a]
         t.apply(i, l)
      }
      return (n.__emitterProxy = t), i.on(e, n, s)
   },
   onAny(e, t) {
      const s = this
      if (!s.eventsListeners || s.destroyed || typeof e != 'function') return s
      const i = t ? 'unshift' : 'push'
      return (
         s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
      )
   },
   offAny(e) {
      const t = this
      if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t
      const s = t.eventsAnyListeners.indexOf(e)
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
   },
   off(e, t) {
      const s = this
      return (
         !s.eventsListeners ||
            s.destroyed ||
            !s.eventsListeners ||
            e.split(' ').forEach((i) => {
               typeof t > 'u'
                  ? (s.eventsListeners[i] = [])
                  : s.eventsListeners[i] &&
                    s.eventsListeners[i].forEach((n, r) => {
                       ;(n === t ||
                          (n.__emitterProxy && n.__emitterProxy === t)) &&
                          s.eventsListeners[i].splice(r, 1)
                    })
            }),
         s
      )
   },
   emit() {
      const e = this
      if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e
      let t, s, i
      for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
         r[l] = arguments[l]
      return (
         typeof r[0] == 'string' || Array.isArray(r[0])
            ? ((t = r[0]), (s = r.slice(1, r.length)), (i = e))
            : ((t = r[0].events), (s = r[0].data), (i = r[0].context || e)),
         s.unshift(i),
         (Array.isArray(t) ? t : t.split(' ')).forEach((o) => {
            e.eventsAnyListeners &&
               e.eventsAnyListeners.length &&
               e.eventsAnyListeners.forEach((c) => {
                  c.apply(i, [o, ...s])
               }),
               e.eventsListeners &&
                  e.eventsListeners[o] &&
                  e.eventsListeners[o].forEach((c) => {
                     c.apply(i, s)
                  })
         }),
         e
      )
   }
}
function Ya() {
   const e = this
   let t, s
   const i = e.el
   typeof e.params.width < 'u' && e.params.width !== null
      ? (t = e.params.width)
      : (t = i.clientWidth),
      typeof e.params.height < 'u' && e.params.height !== null
         ? (s = e.params.height)
         : (s = i.clientHeight),
      !((t === 0 && e.isHorizontal()) || (s === 0 && e.isVertical())) &&
         ((t =
            t -
            parseInt(ke(i, 'padding-left') || 0, 10) -
            parseInt(ke(i, 'padding-right') || 0, 10)),
         (s =
            s -
            parseInt(ke(i, 'padding-top') || 0, 10) -
            parseInt(ke(i, 'padding-bottom') || 0, 10)),
         Number.isNaN(t) && (t = 0),
         Number.isNaN(s) && (s = 0),
         Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s
         }))
}
function Xa() {
   const e = this
   function t(P, F) {
      return parseFloat(P.getPropertyValue(e.getDirectionLabel(F)) || 0)
   }
   const s = e.params,
      { wrapperEl: i, slidesEl: n, size: r, rtlTranslate: l, wrongRTL: a } = e,
      o = e.virtual && s.virtual.enabled,
      c = o ? e.virtual.slides.length : e.slides.length,
      d = ze(n, `.${e.params.slideClass}, swiper-slide`),
      f = o ? e.virtual.slides.length : d.length
   let h = []
   const m = [],
      v = []
   let b = s.slidesOffsetBefore
   typeof b == 'function' && (b = s.slidesOffsetBefore.call(e))
   let z = s.slidesOffsetAfter
   typeof z == 'function' && (z = s.slidesOffsetAfter.call(e))
   const _ = e.snapGrid.length,
      D = e.slidesGrid.length
   let w = s.spaceBetween,
      O = -b,
      B = 0,
      N = 0
   if (typeof r > 'u') return
   typeof w == 'string' && w.indexOf('%') >= 0
      ? (w = (parseFloat(w.replace('%', '')) / 100) * r)
      : typeof w == 'string' && (w = parseFloat(w)),
      (e.virtualSize = -w),
      d.forEach((P) => {
         l ? (P.style.marginLeft = '') : (P.style.marginRight = ''),
            (P.style.marginBottom = ''),
            (P.style.marginTop = '')
      }),
      s.centeredSlides &&
         s.cssMode &&
         (Wt(i, '--swiper-centered-offset-before', ''),
         Wt(i, '--swiper-centered-offset-after', ''))
   const se = s.grid && s.grid.rows > 1 && e.grid
   se ? e.grid.initSlides(d) : e.grid && e.grid.unsetSlides()
   let V
   const A =
      s.slidesPerView === 'auto' &&
      s.breakpoints &&
      Object.keys(s.breakpoints).filter(
         (P) => typeof s.breakpoints[P].slidesPerView < 'u'
      ).length > 0
   for (let P = 0; P < f; P += 1) {
      V = 0
      let F
      if (
         (d[P] && (F = d[P]),
         se && e.grid.updateSlide(P, F, d),
         !(d[P] && ke(F, 'display') === 'none'))
      ) {
         if (s.slidesPerView === 'auto') {
            A && (d[P].style[e.getDirectionLabel('width')] = '')
            const E = getComputedStyle(F),
               M = F.style.transform,
               $ = F.style.webkitTransform
            if (
               (M && (F.style.transform = 'none'),
               $ && (F.style.webkitTransform = 'none'),
               s.roundLengths)
            )
               V = e.isHorizontal() ? pn(F, 'width', !0) : pn(F, 'height', !0)
            else {
               const H = t(E, 'width'),
                  W = t(E, 'padding-left'),
                  Y = t(E, 'padding-right'),
                  K = t(E, 'margin-left'),
                  ee = t(E, 'margin-right'),
                  Je = E.getPropertyValue('box-sizing')
               if (Je && Je === 'border-box') V = H + K + ee
               else {
                  const { clientWidth: Be, offsetWidth: _e } = F
                  V = H + W + Y + K + ee + (_e - Be)
               }
            }
            M && (F.style.transform = M),
               $ && (F.style.webkitTransform = $),
               s.roundLengths && (V = Math.floor(V))
         } else
            (V = (r - (s.slidesPerView - 1) * w) / s.slidesPerView),
               s.roundLengths && (V = Math.floor(V)),
               d[P] && (d[P].style[e.getDirectionLabel('width')] = `${V}px`)
         d[P] && (d[P].swiperSlideSize = V),
            v.push(V),
            s.centeredSlides
               ? ((O = O + V / 2 + B / 2 + w),
                 B === 0 && P !== 0 && (O = O - r / 2 - w),
                 P === 0 && (O = O - r / 2 - w),
                 Math.abs(O) < 1 / 1e3 && (O = 0),
                 s.roundLengths && (O = Math.floor(O)),
                 N % s.slidesPerGroup === 0 && h.push(O),
                 m.push(O))
               : (s.roundLengths && (O = Math.floor(O)),
                 (N - Math.min(e.params.slidesPerGroupSkip, N)) %
                    e.params.slidesPerGroup ===
                    0 && h.push(O),
                 m.push(O),
                 (O = O + V + w)),
            (e.virtualSize += V + w),
            (B = V),
            (N += 1)
      }
   }
   if (
      ((e.virtualSize = Math.max(e.virtualSize, r) + z),
      l &&
         a &&
         (s.effect === 'slide' || s.effect === 'coverflow') &&
         (i.style.width = `${e.virtualSize + w}px`),
      s.setWrapperSize &&
         (i.style[e.getDirectionLabel('width')] = `${e.virtualSize + w}px`),
      se && e.grid.updateWrapperSize(V, h),
      !s.centeredSlides)
   ) {
      const P = []
      for (let F = 0; F < h.length; F += 1) {
         let E = h[F]
         s.roundLengths && (E = Math.floor(E)),
            h[F] <= e.virtualSize - r && P.push(E)
      }
      ;(h = P),
         Math.floor(e.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 &&
            h.push(e.virtualSize - r)
   }
   if (o && s.loop) {
      const P = v[0] + w
      if (s.slidesPerGroup > 1) {
         const F = Math.ceil(
               (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  s.slidesPerGroup
            ),
            E = P * s.slidesPerGroup
         for (let M = 0; M < F; M += 1) h.push(h[h.length - 1] + E)
      }
      for (
         let F = 0;
         F < e.virtual.slidesBefore + e.virtual.slidesAfter;
         F += 1
      )
         s.slidesPerGroup === 1 && h.push(h[h.length - 1] + P),
            m.push(m[m.length - 1] + P),
            (e.virtualSize += P)
   }
   if ((h.length === 0 && (h = [0]), w !== 0)) {
      const P =
         e.isHorizontal() && l
            ? 'marginLeft'
            : e.getDirectionLabel('marginRight')
      d.filter((F, E) =>
         !s.cssMode || s.loop ? !0 : E !== d.length - 1
      ).forEach((F) => {
         F.style[P] = `${w}px`
      })
   }
   if (s.centeredSlides && s.centeredSlidesBounds) {
      let P = 0
      v.forEach((E) => {
         P += E + (w || 0)
      }),
         (P -= w)
      const F = P - r
      h = h.map((E) => (E <= 0 ? -b : E > F ? F + z : E))
   }
   if (s.centerInsufficientSlides) {
      let P = 0
      if (
         (v.forEach((F) => {
            P += F + (w || 0)
         }),
         (P -= w),
         P < r)
      ) {
         const F = (r - P) / 2
         h.forEach((E, M) => {
            h[M] = E - F
         }),
            m.forEach((E, M) => {
               m[M] = E + F
            })
      }
   }
   if (
      (Object.assign(e, {
         slides: d,
         snapGrid: h,
         slidesGrid: m,
         slidesSizesGrid: v
      }),
      s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
   ) {
      Wt(i, '--swiper-centered-offset-before', `${-h[0]}px`),
         Wt(
            i,
            '--swiper-centered-offset-after',
            `${e.size / 2 - v[v.length - 1] / 2}px`
         )
      const P = -e.snapGrid[0],
         F = -e.slidesGrid[0]
      ;(e.snapGrid = e.snapGrid.map((E) => E + P)),
         (e.slidesGrid = e.slidesGrid.map((E) => E + F))
   }
   if (
      (f !== c && e.emit('slidesLengthChange'),
      h.length !== _ &&
         (e.params.watchOverflow && e.checkOverflow(),
         e.emit('snapGridLengthChange')),
      m.length !== D && e.emit('slidesGridLengthChange'),
      s.watchSlidesProgress && e.updateSlidesOffset(),
      e.emit('slidesUpdated'),
      !o && !s.cssMode && (s.effect === 'slide' || s.effect === 'fade'))
   ) {
      const P = `${s.containerModifierClass}backface-hidden`,
         F = e.el.classList.contains(P)
      f <= s.maxBackfaceHiddenSlides
         ? F || e.el.classList.add(P)
         : F && e.el.classList.remove(P)
   }
}
function Ja(e) {
   const t = this,
      s = [],
      i = t.virtual && t.params.virtual.enabled
   let n = 0,
      r
   typeof e == 'number'
      ? t.setTransition(e)
      : e === !0 && t.setTransition(t.params.speed)
   const l = (a) => (i ? t.slides[t.getSlideIndexByData(a)] : t.slides[a])
   if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
      if (t.params.centeredSlides)
         (t.visibleSlides || []).forEach((a) => {
            s.push(a)
         })
      else
         for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
            const a = t.activeIndex + r
            if (a > t.slides.length && !i) break
            s.push(l(a))
         }
   else s.push(l(t.activeIndex))
   for (r = 0; r < s.length; r += 1)
      if (typeof s[r] < 'u') {
         const a = s[r].offsetHeight
         n = a > n ? a : n
      }
   ;(n || n === 0) && (t.wrapperEl.style.height = `${n}px`)
}
function Za() {
   const e = this,
      t = e.slides,
      s = e.isElement
         ? e.isHorizontal()
            ? e.wrapperEl.offsetLeft
            : e.wrapperEl.offsetTop
         : 0
   for (let i = 0; i < t.length; i += 1)
      t[i].swiperSlideOffset =
         (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
         s -
         e.cssOverflowAdjustment()
}
function Qa(e) {
   e === void 0 && (e = (this && this.translate) || 0)
   const t = this,
      s = t.params,
      { slides: i, rtlTranslate: n, snapGrid: r } = t
   if (i.length === 0) return
   typeof i[0].swiperSlideOffset > 'u' && t.updateSlidesOffset()
   let l = -e
   n && (l = e),
      i.forEach((o) => {
         o.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass)
      }),
      (t.visibleSlidesIndexes = []),
      (t.visibleSlides = [])
   let a = s.spaceBetween
   typeof a == 'string' && a.indexOf('%') >= 0
      ? (a = (parseFloat(a.replace('%', '')) / 100) * t.size)
      : typeof a == 'string' && (a = parseFloat(a))
   for (let o = 0; o < i.length; o += 1) {
      const c = i[o]
      let d = c.swiperSlideOffset
      s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset)
      const f =
            (l + (s.centeredSlides ? t.minTranslate() : 0) - d) /
            (c.swiperSlideSize + a),
         h =
            (l - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
            (c.swiperSlideSize + a),
         m = -(l - d),
         v = m + t.slidesSizesGrid[o],
         b = m >= 0 && m <= t.size - t.slidesSizesGrid[o]
      ;((m >= 0 && m < t.size - 1) ||
         (v > 1 && v <= t.size) ||
         (m <= 0 && v >= t.size)) &&
         (t.visibleSlides.push(c),
         t.visibleSlidesIndexes.push(o),
         i[o].classList.add(s.slideVisibleClass)),
         b && i[o].classList.add(s.slideFullyVisibleClass),
         (c.progress = n ? -f : f),
         (c.originalProgress = n ? -h : h)
   }
}
function ed(e) {
   const t = this
   if (typeof e > 'u') {
      const d = t.rtlTranslate ? -1 : 1
      e = (t && t.translate && t.translate * d) || 0
   }
   const s = t.params,
      i = t.maxTranslate() - t.minTranslate()
   let { progress: n, isBeginning: r, isEnd: l, progressLoop: a } = t
   const o = r,
      c = l
   if (i === 0) (n = 0), (r = !0), (l = !0)
   else {
      n = (e - t.minTranslate()) / i
      const d = Math.abs(e - t.minTranslate()) < 1,
         f = Math.abs(e - t.maxTranslate()) < 1
      ;(r = d || n <= 0), (l = f || n >= 1), d && (n = 0), f && (n = 1)
   }
   if (s.loop) {
      const d = t.getSlideIndexByData(0),
         f = t.getSlideIndexByData(t.slides.length - 1),
         h = t.slidesGrid[d],
         m = t.slidesGrid[f],
         v = t.slidesGrid[t.slidesGrid.length - 1],
         b = Math.abs(e)
      b >= h ? (a = (b - h) / v) : (a = (b + v - m) / v), a > 1 && (a -= 1)
   }
   Object.assign(t, { progress: n, progressLoop: a, isBeginning: r, isEnd: l }),
      (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
         t.updateSlidesProgress(e),
      r && !o && t.emit('reachBeginning toEdge'),
      l && !c && t.emit('reachEnd toEdge'),
      ((o && !r) || (c && !l)) && t.emit('fromEdge'),
      t.emit('progress', n)
}
function td() {
   const e = this,
      { slides: t, params: s, slidesEl: i, activeIndex: n } = e,
      r = e.virtual && s.virtual.enabled,
      l = e.grid && s.grid && s.grid.rows > 1,
      a = (f) => ze(i, `.${s.slideClass}${f}, swiper-slide${f}`)[0]
   t.forEach((f) => {
      f.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
   })
   let o, c, d
   if (r)
      if (s.loop) {
         let f = n - e.virtual.slidesBefore
         f < 0 && (f = e.virtual.slides.length + f),
            f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
            (o = a(`[data-swiper-slide-index="${f}"]`))
      } else o = a(`[data-swiper-slide-index="${n}"]`)
   else
      l
         ? ((o = t.filter((f) => f.column === n)[0]),
           (d = t.filter((f) => f.column === n + 1)[0]),
           (c = t.filter((f) => f.column === n - 1)[0]))
         : (o = t[n])
   o &&
      (o.classList.add(s.slideActiveClass),
      l
         ? (d && d.classList.add(s.slideNextClass),
           c && c.classList.add(s.slidePrevClass))
         : ((d = Fa(o, `.${s.slideClass}, swiper-slide`)[0]),
           s.loop && !d && (d = t[0]),
           d && d.classList.add(s.slideNextClass),
           (c = $a(o, `.${s.slideClass}, swiper-slide`)[0]),
           s.loop && !c === 0 && (c = t[t.length - 1]),
           c && c.classList.add(s.slidePrevClass))),
      e.emitSlidesClasses()
}
const Xt = (e, t) => {
      if (!e || e.destroyed || !e.params) return
      const s = () =>
            e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`,
         i = t.closest(s())
      if (i) {
         let n = i.querySelector(`.${e.params.lazyPreloaderClass}`)
         !n &&
            e.isElement &&
            (i.shadowRoot
               ? (n = i.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                 ))
               : requestAnimationFrame(() => {
                    i.shadowRoot &&
                       ((n = i.shadowRoot.querySelector(
                          `.${e.params.lazyPreloaderClass}`
                       )),
                       n && n.remove())
                 })),
            n && n.remove()
      }
   },
   As = (e, t) => {
      if (!e.slides[t]) return
      const s = e.slides[t].querySelector('[loading="lazy"]')
      s && s.removeAttribute('loading')
   },
   Ys = (e) => {
      if (!e || e.destroyed || !e.params) return
      let t = e.params.lazyPreloadPrevNext
      const s = e.slides.length
      if (!s || !t || t < 0) return
      t = Math.min(t, s)
      const i =
            e.params.slidesPerView === 'auto'
               ? e.slidesPerViewDynamic()
               : Math.ceil(e.params.slidesPerView),
         n = e.activeIndex
      if (e.params.grid && e.params.grid.rows > 1) {
         const l = n,
            a = [l - t]
         a.push(...Array.from({ length: t }).map((o, c) => l + i + c)),
            e.slides.forEach((o, c) => {
               a.includes(o.column) && As(e, c)
            })
         return
      }
      const r = n + i - 1
      if (e.params.rewind || e.params.loop)
         for (let l = n - t; l <= r + t; l += 1) {
            const a = ((l % s) + s) % s
            ;(a < n || a > r) && As(e, a)
         }
      else
         for (let l = Math.max(n - t, 0); l <= Math.min(r + t, s - 1); l += 1)
            l !== n && (l > r || l < n) && As(e, l)
   }
function sd(e) {
   const { slidesGrid: t, params: s } = e,
      i = e.rtlTranslate ? e.translate : -e.translate
   let n
   for (let r = 0; r < t.length; r += 1)
      typeof t[r + 1] < 'u'
         ? i >= t[r] && i < t[r + 1] - (t[r + 1] - t[r]) / 2
            ? (n = r)
            : i >= t[r] && i < t[r + 1] && (n = r + 1)
         : i >= t[r] && (n = r)
   return s.normalizeSlideIndex && (n < 0 || typeof n > 'u') && (n = 0), n
}
function id(e) {
   const t = this,
      s = t.rtlTranslate ? t.translate : -t.translate,
      { snapGrid: i, params: n, activeIndex: r, realIndex: l, snapIndex: a } = t
   let o = e,
      c
   const d = (m) => {
      let v = m - t.virtual.slidesBefore
      return (
         v < 0 && (v = t.virtual.slides.length + v),
         v >= t.virtual.slides.length && (v -= t.virtual.slides.length),
         v
      )
   }
   if ((typeof o > 'u' && (o = sd(t)), i.indexOf(s) >= 0)) c = i.indexOf(s)
   else {
      const m = Math.min(n.slidesPerGroupSkip, o)
      c = m + Math.floor((o - m) / n.slidesPerGroup)
   }
   if ((c >= i.length && (c = i.length - 1), o === r && !t.params.loop)) {
      c !== a && ((t.snapIndex = c), t.emit('snapIndexChange'))
      return
   }
   if (o === r && t.params.loop && t.virtual && t.params.virtual.enabled) {
      t.realIndex = d(o)
      return
   }
   const f = t.grid && n.grid && n.grid.rows > 1
   let h
   if (t.virtual && n.virtual.enabled && n.loop) h = d(o)
   else if (f) {
      const m = t.slides.filter((b) => b.column === o)[0]
      let v = parseInt(m.getAttribute('data-swiper-slide-index'), 10)
      Number.isNaN(v) && (v = Math.max(t.slides.indexOf(m), 0)),
         (h = Math.floor(v / n.grid.rows))
   } else if (t.slides[o]) {
      const m = t.slides[o].getAttribute('data-swiper-slide-index')
      m ? (h = parseInt(m, 10)) : (h = o)
   } else h = o
   Object.assign(t, {
      previousSnapIndex: a,
      snapIndex: c,
      previousRealIndex: l,
      realIndex: h,
      previousIndex: r,
      activeIndex: o
   }),
      t.initialized && Ys(t),
      t.emit('activeIndexChange'),
      t.emit('snapIndexChange'),
      (t.initialized || t.params.runCallbacksOnInit) &&
         (l !== h && t.emit('realIndexChange'), t.emit('slideChange'))
}
function nd(e, t) {
   const s = this,
      i = s.params
   let n = e.closest(`.${i.slideClass}, swiper-slide`)
   !n &&
      s.isElement &&
      t &&
      t.length > 1 &&
      t.includes(e) &&
      [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
         !n &&
            a.matches &&
            a.matches(`.${i.slideClass}, swiper-slide`) &&
            (n = a)
      })
   let r = !1,
      l
   if (n) {
      for (let a = 0; a < s.slides.length; a += 1)
         if (s.slides[a] === n) {
            ;(r = !0), (l = a)
            break
         }
   }
   if (n && r)
      (s.clickedSlide = n),
         s.virtual && s.params.virtual.enabled
            ? (s.clickedIndex = parseInt(
                 n.getAttribute('data-swiper-slide-index'),
                 10
              ))
            : (s.clickedIndex = l)
   else {
      ;(s.clickedSlide = void 0), (s.clickedIndex = void 0)
      return
   }
   i.slideToClickedSlide &&
      s.clickedIndex !== void 0 &&
      s.clickedIndex !== s.activeIndex &&
      s.slideToClickedSlide()
}
var rd = {
   updateSize: Ya,
   updateSlides: Xa,
   updateAutoHeight: Ja,
   updateSlidesOffset: Za,
   updateSlidesProgress: Qa,
   updateProgress: ed,
   updateSlidesClasses: td,
   updateActiveIndex: id,
   updateClickedSlide: nd
}
function ld(e) {
   e === void 0 && (e = this.isHorizontal() ? 'x' : 'y')
   const t = this,
      { params: s, rtlTranslate: i, translate: n, wrapperEl: r } = t
   if (s.virtualTranslate) return i ? -n : n
   if (s.cssMode) return n
   let l = Ra(r, e)
   return (l += t.cssOverflowAdjustment()), i && (l = -l), l || 0
}
function od(e, t) {
   const s = this,
      { rtlTranslate: i, params: n, wrapperEl: r, progress: l } = s
   let a = 0,
      o = 0
   const c = 0
   s.isHorizontal() ? (a = i ? -e : e) : (o = e),
      n.roundLengths && ((a = Math.floor(a)), (o = Math.floor(o))),
      (s.previousTranslate = s.translate),
      (s.translate = s.isHorizontal() ? a : o),
      n.cssMode
         ? (r[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = s.isHorizontal()
              ? -a
              : -o)
         : n.virtualTranslate ||
           (s.isHorizontal()
              ? (a -= s.cssOverflowAdjustment())
              : (o -= s.cssOverflowAdjustment()),
           (r.style.transform = `translate3d(${a}px, ${o}px, ${c}px)`))
   let d
   const f = s.maxTranslate() - s.minTranslate()
   f === 0 ? (d = 0) : (d = (e - s.minTranslate()) / f),
      d !== l && s.updateProgress(e),
      s.emit('setTranslate', s.translate, t)
}
function ad() {
   return -this.snapGrid[0]
}
function dd() {
   return -this.snapGrid[this.snapGrid.length - 1]
}
function cd(e, t, s, i, n) {
   e === void 0 && (e = 0),
      t === void 0 && (t = this.params.speed),
      s === void 0 && (s = !0),
      i === void 0 && (i = !0)
   const r = this,
      { params: l, wrapperEl: a } = r
   if (r.animating && l.preventInteractionOnTransition) return !1
   const o = r.minTranslate(),
      c = r.maxTranslate()
   let d
   if (
      (i && e > o ? (d = o) : i && e < c ? (d = c) : (d = e),
      r.updateProgress(d),
      l.cssMode)
   ) {
      const f = r.isHorizontal()
      if (t === 0) a[f ? 'scrollLeft' : 'scrollTop'] = -d
      else {
         if (!r.support.smoothScroll)
            return (
               yr({ swiper: r, targetPosition: -d, side: f ? 'left' : 'top' }),
               !0
            )
         a.scrollTo({ [f ? 'left' : 'top']: -d, behavior: 'smooth' })
      }
      return !0
   }
   return (
      t === 0
         ? (r.setTransition(0),
           r.setTranslate(d),
           s &&
              (r.emit('beforeTransitionStart', t, n), r.emit('transitionEnd')))
         : (r.setTransition(t),
           r.setTranslate(d),
           s &&
              (r.emit('beforeTransitionStart', t, n),
              r.emit('transitionStart')),
           r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                 (r.onTranslateToWrapperTransitionEnd = function (h) {
                    !r ||
                       r.destroyed ||
                       (h.target === this &&
                          (r.wrapperEl.removeEventListener(
                             'transitionend',
                             r.onTranslateToWrapperTransitionEnd
                          ),
                          (r.onTranslateToWrapperTransitionEnd = null),
                          delete r.onTranslateToWrapperTransitionEnd,
                          s && r.emit('transitionEnd')))
                 }),
              r.wrapperEl.addEventListener(
                 'transitionend',
                 r.onTranslateToWrapperTransitionEnd
              ))),
      !0
   )
}
var fd = {
   getTranslate: ld,
   setTranslate: od,
   minTranslate: ad,
   maxTranslate: dd,
   translateTo: cd
}
function ud(e, t) {
   const s = this
   s.params.cssMode ||
      ((s.wrapperEl.style.transitionDuration = `${e}ms`),
      (s.wrapperEl.style.transitionDelay = e === 0 ? '0ms' : '')),
      s.emit('setTransition', e, t)
}
function xr(e) {
   let { swiper: t, runCallbacks: s, direction: i, step: n } = e
   const { activeIndex: r, previousIndex: l } = t
   let a = i
   if (
      (a || (r > l ? (a = 'next') : r < l ? (a = 'prev') : (a = 'reset')),
      t.emit(`transition${n}`),
      s && r !== l)
   ) {
      if (a === 'reset') {
         t.emit(`slideResetTransition${n}`)
         return
      }
      t.emit(`slideChangeTransition${n}`),
         a === 'next'
            ? t.emit(`slideNextTransition${n}`)
            : t.emit(`slidePrevTransition${n}`)
   }
}
function pd(e, t) {
   e === void 0 && (e = !0)
   const s = this,
      { params: i } = s
   i.cssMode ||
      (i.autoHeight && s.updateAutoHeight(),
      xr({ swiper: s, runCallbacks: e, direction: t, step: 'Start' }))
}
function hd(e, t) {
   e === void 0 && (e = !0)
   const s = this,
      { params: i } = s
   ;(s.animating = !1),
      !i.cssMode &&
         (s.setTransition(0),
         xr({ swiper: s, runCallbacks: e, direction: t, step: 'End' }))
}
var md = { setTransition: ud, transitionStart: pd, transitionEnd: hd }
function gd(e, t, s, i, n) {
   e === void 0 && (e = 0),
      t === void 0 && (t = this.params.speed),
      s === void 0 && (s = !0),
      typeof e == 'string' && (e = parseInt(e, 10))
   const r = this
   let l = e
   l < 0 && (l = 0)
   const {
      params: a,
      snapGrid: o,
      slidesGrid: c,
      previousIndex: d,
      activeIndex: f,
      rtlTranslate: h,
      wrapperEl: m,
      enabled: v
   } = r
   if (
      (r.animating && a.preventInteractionOnTransition) ||
      (!v && !i && !n) ||
      r.destroyed
   )
      return !1
   const b = Math.min(r.params.slidesPerGroupSkip, l)
   let z = b + Math.floor((l - b) / r.params.slidesPerGroup)
   z >= o.length && (z = o.length - 1)
   const _ = -o[z]
   if (a.normalizeSlideIndex)
      for (let w = 0; w < c.length; w += 1) {
         const O = -Math.floor(_ * 100),
            B = Math.floor(c[w] * 100),
            N = Math.floor(c[w + 1] * 100)
         typeof c[w + 1] < 'u'
            ? O >= B && O < N - (N - B) / 2
               ? (l = w)
               : O >= B && O < N && (l = w + 1)
            : O >= B && (l = w)
      }
   if (
      r.initialized &&
      l !== f &&
      ((!r.allowSlideNext &&
         (h
            ? _ > r.translate && _ > r.minTranslate()
            : _ < r.translate && _ < r.minTranslate())) ||
         (!r.allowSlidePrev &&
            _ > r.translate &&
            _ > r.maxTranslate() &&
            (f || 0) !== l))
   )
      return !1
   l !== (d || 0) && s && r.emit('beforeSlideChangeStart'), r.updateProgress(_)
   let D
   if (
      (l > f ? (D = 'next') : l < f ? (D = 'prev') : (D = 'reset'),
      (h && -_ === r.translate) || (!h && _ === r.translate))
   )
      return (
         r.updateActiveIndex(l),
         a.autoHeight && r.updateAutoHeight(),
         r.updateSlidesClasses(),
         a.effect !== 'slide' && r.setTranslate(_),
         D !== 'reset' && (r.transitionStart(s, D), r.transitionEnd(s, D)),
         !1
      )
   if (a.cssMode) {
      const w = r.isHorizontal(),
         O = h ? _ : -_
      if (t === 0) {
         const B = r.virtual && r.params.virtual.enabled
         B &&
            ((r.wrapperEl.style.scrollSnapType = 'none'),
            (r._immediateVirtual = !0)),
            B && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
               ? ((r._cssModeVirtualInitialSet = !0),
                 requestAnimationFrame(() => {
                    m[w ? 'scrollLeft' : 'scrollTop'] = O
                 }))
               : (m[w ? 'scrollLeft' : 'scrollTop'] = O),
            B &&
               requestAnimationFrame(() => {
                  ;(r.wrapperEl.style.scrollSnapType = ''),
                     (r._immediateVirtual = !1)
               })
      } else {
         if (!r.support.smoothScroll)
            return (
               yr({ swiper: r, targetPosition: O, side: w ? 'left' : 'top' }),
               !0
            )
         m.scrollTo({ [w ? 'left' : 'top']: O, behavior: 'smooth' })
      }
      return !0
   }
   return (
      r.setTransition(t),
      r.setTranslate(_),
      r.updateActiveIndex(l),
      r.updateSlidesClasses(),
      r.emit('beforeTransitionStart', t, i),
      r.transitionStart(s, D),
      t === 0
         ? r.transitionEnd(s, D)
         : r.animating ||
           ((r.animating = !0),
           r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (O) {
                 !r ||
                    r.destroyed ||
                    (O.target === this &&
                       (r.wrapperEl.removeEventListener(
                          'transitionend',
                          r.onSlideToWrapperTransitionEnd
                       ),
                       (r.onSlideToWrapperTransitionEnd = null),
                       delete r.onSlideToWrapperTransitionEnd,
                       r.transitionEnd(s, D)))
              }),
           r.wrapperEl.addEventListener(
              'transitionend',
              r.onSlideToWrapperTransitionEnd
           )),
      !0
   )
}
function vd(e, t, s, i) {
   e === void 0 && (e = 0),
      t === void 0 && (t = this.params.speed),
      s === void 0 && (s = !0),
      typeof e == 'string' && (e = parseInt(e, 10))
   const n = this
   if (n.destroyed) return
   const r = n.grid && n.params.grid && n.params.grid.rows > 1
   let l = e
   if (n.params.loop)
      if (n.virtual && n.params.virtual.enabled) l = l + n.virtual.slidesBefore
      else {
         let a
         if (r) {
            const h = l * n.params.grid.rows
            a = n.slides.filter(
               (m) => m.getAttribute('data-swiper-slide-index') * 1 === h
            )[0].column
         } else a = n.getSlideIndexByData(l)
         const o = r
               ? Math.ceil(n.slides.length / n.params.grid.rows)
               : n.slides.length,
            { centeredSlides: c } = n.params
         let d = n.params.slidesPerView
         d === 'auto'
            ? (d = n.slidesPerViewDynamic())
            : ((d = Math.ceil(parseFloat(n.params.slidesPerView, 10))),
              c && d % 2 === 0 && (d = d + 1))
         let f = o - a < d
         if ((c && (f = f || a < Math.ceil(d / 2)), f)) {
            const h = c
               ? a < n.activeIndex
                  ? 'prev'
                  : 'next'
               : a - n.activeIndex - 1 < n.params.slidesPerView
               ? 'next'
               : 'prev'
            n.loopFix({
               direction: h,
               slideTo: !0,
               activeSlideIndex: h === 'next' ? a + 1 : a - o + 1,
               slideRealIndex: h === 'next' ? n.realIndex : void 0
            })
         }
         if (r) {
            const h = l * n.params.grid.rows
            l = n.slides.filter(
               (m) => m.getAttribute('data-swiper-slide-index') * 1 === h
            )[0].column
         } else l = n.getSlideIndexByData(l)
      }
   return (
      requestAnimationFrame(() => {
         n.slideTo(l, t, s, i)
      }),
      n
   )
}
function bd(e, t, s) {
   e === void 0 && (e = this.params.speed), t === void 0 && (t = !0)
   const i = this,
      { enabled: n, params: r, animating: l } = i
   if (!n || i.destroyed) return i
   let a = r.slidesPerGroup
   r.slidesPerView === 'auto' &&
      r.slidesPerGroup === 1 &&
      r.slidesPerGroupAuto &&
      (a = Math.max(i.slidesPerViewDynamic('current', !0), 1))
   const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : a,
      c = i.virtual && r.virtual.enabled
   if (r.loop) {
      if (l && !c && r.loopPreventsSliding) return !1
      if (
         (i.loopFix({ direction: 'next' }),
         (i._clientLeft = i.wrapperEl.clientLeft),
         i.activeIndex === i.slides.length - 1 && r.cssMode)
      )
         return (
            requestAnimationFrame(() => {
               i.slideTo(i.activeIndex + o, e, t, s)
            }),
            !0
         )
   }
   return r.rewind && i.isEnd
      ? i.slideTo(0, e, t, s)
      : i.slideTo(i.activeIndex + o, e, t, s)
}
function wd(e, t, s) {
   e === void 0 && (e = this.params.speed), t === void 0 && (t = !0)
   const i = this,
      {
         params: n,
         snapGrid: r,
         slidesGrid: l,
         rtlTranslate: a,
         enabled: o,
         animating: c
      } = i
   if (!o || i.destroyed) return i
   const d = i.virtual && n.virtual.enabled
   if (n.loop) {
      if (c && !d && n.loopPreventsSliding) return !1
      i.loopFix({ direction: 'prev' }), (i._clientLeft = i.wrapperEl.clientLeft)
   }
   const f = a ? i.translate : -i.translate
   function h(_) {
      return _ < 0 ? -Math.floor(Math.abs(_)) : Math.floor(_)
   }
   const m = h(f),
      v = r.map((_) => h(_))
   let b = r[v.indexOf(m) - 1]
   if (typeof b > 'u' && n.cssMode) {
      let _
      r.forEach((D, w) => {
         m >= D && (_ = w)
      }),
         typeof _ < 'u' && (b = r[_ > 0 ? _ - 1 : _])
   }
   let z = 0
   if (
      (typeof b < 'u' &&
         ((z = l.indexOf(b)),
         z < 0 && (z = i.activeIndex - 1),
         n.slidesPerView === 'auto' &&
            n.slidesPerGroup === 1 &&
            n.slidesPerGroupAuto &&
            ((z = z - i.slidesPerViewDynamic('previous', !0) + 1),
            (z = Math.max(z, 0)))),
      n.rewind && i.isBeginning)
   ) {
      const _ =
         i.params.virtual && i.params.virtual.enabled && i.virtual
            ? i.virtual.slides.length - 1
            : i.slides.length - 1
      return i.slideTo(_, e, t, s)
   } else if (n.loop && i.activeIndex === 0 && n.cssMode)
      return (
         requestAnimationFrame(() => {
            i.slideTo(z, e, t, s)
         }),
         !0
      )
   return i.slideTo(z, e, t, s)
}
function yd(e, t, s) {
   e === void 0 && (e = this.params.speed), t === void 0 && (t = !0)
   const i = this
   if (!i.destroyed) return i.slideTo(i.activeIndex, e, t, s)
}
function Sd(e, t, s, i) {
   e === void 0 && (e = this.params.speed),
      t === void 0 && (t = !0),
      i === void 0 && (i = 0.5)
   const n = this
   if (n.destroyed) return
   let r = n.activeIndex
   const l = Math.min(n.params.slidesPerGroupSkip, r),
      a = l + Math.floor((r - l) / n.params.slidesPerGroup),
      o = n.rtlTranslate ? n.translate : -n.translate
   if (o >= n.snapGrid[a]) {
      const c = n.snapGrid[a],
         d = n.snapGrid[a + 1]
      o - c > (d - c) * i && (r += n.params.slidesPerGroup)
   } else {
      const c = n.snapGrid[a - 1],
         d = n.snapGrid[a]
      o - c <= (d - c) * i && (r -= n.params.slidesPerGroup)
   }
   return (
      (r = Math.max(r, 0)),
      (r = Math.min(r, n.slidesGrid.length - 1)),
      n.slideTo(r, e, t, s)
   )
}
function _d() {
   const e = this
   if (e.destroyed) return
   const { params: t, slidesEl: s } = e,
      i =
         t.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : t.slidesPerView
   let n = e.clickedIndex,
      r
   const l = e.isElement ? 'swiper-slide' : `.${t.slideClass}`
   if (t.loop) {
      if (e.animating) return
      ;(r = parseInt(
         e.clickedSlide.getAttribute('data-swiper-slide-index'),
         10
      )),
         t.centeredSlides
            ? n < e.loopedSlides - i / 2 ||
              n > e.slides.length - e.loopedSlides + i / 2
               ? (e.loopFix(),
                 (n = e.getSlideIndex(
                    ze(s, `${l}[data-swiper-slide-index="${r}"]`)[0]
                 )),
                 ns(() => {
                    e.slideTo(n)
                 }))
               : e.slideTo(n)
            : n > e.slides.length - i
            ? (e.loopFix(),
              (n = e.getSlideIndex(
                 ze(s, `${l}[data-swiper-slide-index="${r}"]`)[0]
              )),
              ns(() => {
                 e.slideTo(n)
              }))
            : e.slideTo(n)
   } else e.slideTo(n)
}
var xd = {
   slideTo: gd,
   slideToLoop: vd,
   slideNext: bd,
   slidePrev: wd,
   slideReset: yd,
   slideToClosest: Sd,
   slideToClickedSlide: _d
}
function Td(e) {
   const t = this,
      { params: s, slidesEl: i } = t
   if (!s.loop || (t.virtual && t.params.virtual.enabled)) return
   const n = () => {
         ze(i, `.${s.slideClass}, swiper-slide`).forEach((f, h) => {
            f.setAttribute('data-swiper-slide-index', h)
         })
      },
      r = t.grid && s.grid && s.grid.rows > 1,
      l = s.slidesPerGroup * (r ? s.grid.rows : 1),
      a = t.slides.length % l !== 0,
      o = r && t.slides.length % s.grid.rows !== 0,
      c = (d) => {
         for (let f = 0; f < d; f += 1) {
            const h = t.isElement
               ? zt('swiper-slide', [s.slideBlankClass])
               : zt('div', [s.slideClass, s.slideBlankClass])
            t.slidesEl.append(h)
         }
      }
   if (a) {
      if (s.loopAddBlankSlides) {
         const d = l - (t.slides.length % l)
         c(d), t.recalcSlides(), t.updateSlides()
      } else
         ls(
            'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
         )
      n()
   } else if (o) {
      if (s.loopAddBlankSlides) {
         const d = s.grid.rows - (t.slides.length % s.grid.rows)
         c(d), t.recalcSlides(), t.updateSlides()
      } else
         ls(
            'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
         )
      n()
   } else n()
   t.loopFix({
      slideRealIndex: e,
      direction: s.centeredSlides ? void 0 : 'next'
   })
}
function Ed(e) {
   let {
      slideRealIndex: t,
      slideTo: s = !0,
      direction: i,
      setTranslate: n,
      activeSlideIndex: r,
      byController: l,
      byMousewheel: a
   } = e === void 0 ? {} : e
   const o = this
   if (!o.params.loop) return
   o.emit('beforeLoopFix')
   const {
         slides: c,
         allowSlidePrev: d,
         allowSlideNext: f,
         slidesEl: h,
         params: m
      } = o,
      { centeredSlides: v } = m
   if (
      ((o.allowSlidePrev = !0),
      (o.allowSlideNext = !0),
      o.virtual && m.virtual.enabled)
   ) {
      s &&
         (!m.centeredSlides && o.snapIndex === 0
            ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
            : m.centeredSlides && o.snapIndex < m.slidesPerView
            ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
            : o.snapIndex === o.snapGrid.length - 1 &&
              o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
         (o.allowSlidePrev = d),
         (o.allowSlideNext = f),
         o.emit('loopFix')
      return
   }
   let b = m.slidesPerView
   b === 'auto'
      ? (b = o.slidesPerViewDynamic())
      : ((b = Math.ceil(parseFloat(m.slidesPerView, 10))),
        v && b % 2 === 0 && (b = b + 1))
   const z = m.slidesPerGroupAuto ? b : m.slidesPerGroup
   let _ = z
   _ % z !== 0 && (_ += z - (_ % z)),
      (_ += m.loopAdditionalSlides),
      (o.loopedSlides = _)
   const D = o.grid && m.grid && m.grid.rows > 1
   c.length < b + _
      ? ls(
           'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
        )
      : D &&
        m.grid.fill === 'row' &&
        ls(
           'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
        )
   const w = [],
      O = []
   let B = o.activeIndex
   typeof r > 'u'
      ? (r = o.getSlideIndex(
           c.filter((M) => M.classList.contains(m.slideActiveClass))[0]
        ))
      : (B = r)
   const N = i === 'next' || !i,
      se = i === 'prev' || !i
   let V = 0,
      A = 0
   const P = D ? Math.ceil(c.length / m.grid.rows) : c.length,
      E = (D ? c[r].column : r) + (v && typeof n > 'u' ? -b / 2 + 0.5 : 0)
   if (E < _) {
      V = Math.max(_ - E, z)
      for (let M = 0; M < _ - E; M += 1) {
         const $ = M - Math.floor(M / P) * P
         if (D) {
            const H = P - $ - 1
            for (let W = c.length - 1; W >= 0; W -= 1)
               c[W].column === H && w.push(W)
         } else w.push(P - $ - 1)
      }
   } else if (E + b > P - _) {
      A = Math.max(E - (P - _ * 2), z)
      for (let M = 0; M < A; M += 1) {
         const $ = M - Math.floor(M / P) * P
         D
            ? c.forEach((H, W) => {
                 H.column === $ && O.push(W)
              })
            : O.push($)
      }
   }
   if (
      ((o.__preventObserver__ = !0),
      requestAnimationFrame(() => {
         o.__preventObserver__ = !1
      }),
      se &&
         w.forEach((M) => {
            ;(c[M].swiperLoopMoveDOM = !0),
               h.prepend(c[M]),
               (c[M].swiperLoopMoveDOM = !1)
         }),
      N &&
         O.forEach((M) => {
            ;(c[M].swiperLoopMoveDOM = !0),
               h.append(c[M]),
               (c[M].swiperLoopMoveDOM = !1)
         }),
      o.recalcSlides(),
      m.slidesPerView === 'auto'
         ? o.updateSlides()
         : D &&
           ((w.length > 0 && se) || (O.length > 0 && N)) &&
           o.slides.forEach((M, $) => {
              o.grid.updateSlide($, M, o.slides)
           }),
      m.watchSlidesProgress && o.updateSlidesOffset(),
      s)
   ) {
      if (w.length > 0 && se) {
         if (typeof t > 'u') {
            const M = o.slidesGrid[B],
               H = o.slidesGrid[B + V] - M
            a
               ? o.setTranslate(o.translate - H)
               : (o.slideTo(B + V, 0, !1, !0),
                 n &&
                    ((o.touchEventsData.startTranslate =
                       o.touchEventsData.startTranslate - H),
                    (o.touchEventsData.currentTranslate =
                       o.touchEventsData.currentTranslate - H)))
         } else if (n) {
            const M = D ? w.length / m.grid.rows : w.length
            o.slideTo(o.activeIndex + M, 0, !1, !0),
               (o.touchEventsData.currentTranslate = o.translate)
         }
      } else if (O.length > 0 && N)
         if (typeof t > 'u') {
            const M = o.slidesGrid[B],
               H = o.slidesGrid[B - A] - M
            a
               ? o.setTranslate(o.translate - H)
               : (o.slideTo(B - A, 0, !1, !0),
                 n &&
                    ((o.touchEventsData.startTranslate =
                       o.touchEventsData.startTranslate - H),
                    (o.touchEventsData.currentTranslate =
                       o.touchEventsData.currentTranslate - H)))
         } else {
            const M = D ? O.length / m.grid.rows : O.length
            o.slideTo(o.activeIndex - M, 0, !1, !0)
         }
   }
   if (
      ((o.allowSlidePrev = d),
      (o.allowSlideNext = f),
      o.controller && o.controller.control && !l)
   ) {
      const M = {
         slideRealIndex: t,
         direction: i,
         setTranslate: n,
         activeSlideIndex: r,
         byController: !0
      }
      Array.isArray(o.controller.control)
         ? o.controller.control.forEach(($) => {
              !$.destroyed &&
                 $.params.loop &&
                 $.loopFix({
                    ...M,
                    slideTo: $.params.slidesPerView === m.slidesPerView ? s : !1
                 })
           })
         : o.controller.control instanceof o.constructor &&
           o.controller.control.params.loop &&
           o.controller.control.loopFix({
              ...M,
              slideTo:
                 o.controller.control.params.slidesPerView === m.slidesPerView
                    ? s
                    : !1
           })
   }
   o.emit('loopFix')
}
function Cd() {
   const e = this,
      { params: t, slidesEl: s } = e
   if (!t.loop || (e.virtual && e.params.virtual.enabled)) return
   e.recalcSlides()
   const i = []
   e.slides.forEach((n) => {
      const r =
         typeof n.swiperSlideIndex > 'u'
            ? n.getAttribute('data-swiper-slide-index') * 1
            : n.swiperSlideIndex
      i[r] = n
   }),
      e.slides.forEach((n) => {
         n.removeAttribute('data-swiper-slide-index')
      }),
      i.forEach((n) => {
         s.append(n)
      }),
      e.recalcSlides(),
      e.slideTo(e.realIndex, 0)
}
var Pd = { loopCreate: Td, loopFix: Ed, loopDestroy: Cd }
function Md(e) {
   const t = this
   if (
      !t.params.simulateTouch ||
      (t.params.watchOverflow && t.isLocked) ||
      t.params.cssMode
   )
      return
   const s = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl
   t.isElement && (t.__preventObserver__ = !0),
      (s.style.cursor = 'move'),
      (s.style.cursor = e ? 'grabbing' : 'grab'),
      t.isElement &&
         requestAnimationFrame(() => {
            t.__preventObserver__ = !1
         })
}
function Id() {
   const e = this
   ;(e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode ||
      (e.isElement && (e.__preventObserver__ = !0),
      (e[
         e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
      ].style.cursor = ''),
      e.isElement &&
         requestAnimationFrame(() => {
            e.__preventObserver__ = !1
         }))
}
var Od = { setGrabCursor: Md, unsetGrabCursor: Id }
function Ld(e, t) {
   t === void 0 && (t = this)
   function s(i) {
      if (!i || i === Xe() || i === we()) return null
      i.assignedSlot && (i = i.assignedSlot)
      const n = i.closest(e)
      return !n && !i.getRootNode ? null : n || s(i.getRootNode().host)
   }
   return s(t)
}
function hn(e, t, s) {
   const i = we(),
      { params: n } = e,
      r = n.edgeSwipeDetection,
      l = n.edgeSwipeThreshold
   return r && (s <= l || s >= i.innerWidth - l)
      ? r === 'prevent'
         ? (t.preventDefault(), !0)
         : !1
      : !0
}
function Ad(e) {
   const t = this,
      s = Xe()
   let i = e
   i.originalEvent && (i = i.originalEvent)
   const n = t.touchEventsData
   if (i.type === 'pointerdown') {
      if (n.pointerId !== null && n.pointerId !== i.pointerId) return
      n.pointerId = i.pointerId
   } else
      i.type === 'touchstart' &&
         i.targetTouches.length === 1 &&
         (n.touchId = i.targetTouches[0].identifier)
   if (i.type === 'touchstart') {
      hn(t, i, i.targetTouches[0].pageX)
      return
   }
   const { params: r, touches: l, enabled: a } = t
   if (
      !a ||
      (!r.simulateTouch && i.pointerType === 'mouse') ||
      (t.animating && r.preventInteractionOnTransition)
   )
      return
   !t.animating && r.cssMode && r.loop && t.loopFix()
   let o = i.target
   if (
      (r.touchEventsTarget === 'wrapper' && !t.wrapperEl.contains(o)) ||
      ('which' in i && i.which === 3) ||
      ('button' in i && i.button > 0) ||
      (n.isTouched && n.isMoved)
   )
      return
   const c = !!r.noSwipingClass && r.noSwipingClass !== '',
      d = i.composedPath ? i.composedPath() : i.path
   c && i.target && i.target.shadowRoot && d && (o = d[0])
   const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
      h = !!(i.target && i.target.shadowRoot)
   if (r.noSwiping && (h ? Ld(f, o) : o.closest(f))) {
      t.allowClick = !0
      return
   }
   if (r.swipeHandler && !o.closest(r.swipeHandler)) return
   ;(l.currentX = i.pageX), (l.currentY = i.pageY)
   const m = l.currentX,
      v = l.currentY
   if (!hn(t, i, m)) return
   Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
   }),
      (l.startX = m),
      (l.startY = v),
      (n.touchStartTime = rs()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      r.threshold > 0 && (n.allowThresholdMove = !1)
   let b = !0
   o.matches(n.focusableElements) &&
      ((b = !1), o.nodeName === 'SELECT' && (n.isTouched = !1)),
      s.activeElement &&
         s.activeElement.matches(n.focusableElements) &&
         s.activeElement !== o &&
         s.activeElement.blur()
   const z = b && t.allowTouchMove && r.touchStartPreventDefault
   ;(r.touchStartForcePreventDefault || z) &&
      !o.isContentEditable &&
      i.preventDefault(),
      r.freeMode &&
         r.freeMode.enabled &&
         t.freeMode &&
         t.animating &&
         !r.cssMode &&
         t.freeMode.onTouchStart(),
      t.emit('touchStart', i)
}
function zd(e) {
   const t = Xe(),
      s = this,
      i = s.touchEventsData,
      { params: n, touches: r, rtlTranslate: l, enabled: a } = s
   if (!a || (!n.simulateTouch && e.pointerType === 'mouse')) return
   let o = e
   if (
      (o.originalEvent && (o = o.originalEvent),
      o.type === 'pointermove' &&
         (i.touchId !== null || o.pointerId !== i.pointerId))
   )
      return
   let c
   if (o.type === 'touchmove') {
      if (
         ((c = [...o.changedTouches].filter(
            (N) => N.identifier === i.touchId
         )[0]),
         !c || c.identifier !== i.touchId)
      )
         return
   } else c = o
   if (!i.isTouched) {
      i.startMoving && i.isScrolling && s.emit('touchMoveOpposite', o)
      return
   }
   const d = c.pageX,
      f = c.pageY
   if (o.preventedByNestedSwiper) {
      ;(r.startX = d), (r.startY = f)
      return
   }
   if (!s.allowTouchMove) {
      o.target.matches(i.focusableElements) || (s.allowClick = !1),
         i.isTouched &&
            (Object.assign(r, {
               startX: d,
               startY: f,
               currentX: d,
               currentY: f
            }),
            (i.touchStartTime = rs()))
      return
   }
   if (n.touchReleaseOnEdges && !n.loop) {
      if (s.isVertical()) {
         if (
            (f < r.startY && s.translate <= s.maxTranslate()) ||
            (f > r.startY && s.translate >= s.minTranslate())
         ) {
            ;(i.isTouched = !1), (i.isMoved = !1)
            return
         }
      } else if (
         (d < r.startX && s.translate <= s.maxTranslate()) ||
         (d > r.startX && s.translate >= s.minTranslate())
      )
         return
   }
   if (
      t.activeElement &&
      o.target === t.activeElement &&
      o.target.matches(i.focusableElements)
   ) {
      ;(i.isMoved = !0), (s.allowClick = !1)
      return
   }
   i.allowTouchCallbacks && s.emit('touchMove', o),
      (r.previousX = r.currentX),
      (r.previousY = r.currentY),
      (r.currentX = d),
      (r.currentY = f)
   const h = r.currentX - r.startX,
      m = r.currentY - r.startY
   if (s.params.threshold && Math.sqrt(h ** 2 + m ** 2) < s.params.threshold)
      return
   if (typeof i.isScrolling > 'u') {
      let N
      ;(s.isHorizontal() && r.currentY === r.startY) ||
      (s.isVertical() && r.currentX === r.startX)
         ? (i.isScrolling = !1)
         : h * h + m * m >= 25 &&
           ((N = (Math.atan2(Math.abs(m), Math.abs(h)) * 180) / Math.PI),
           (i.isScrolling = s.isHorizontal()
              ? N > n.touchAngle
              : 90 - N > n.touchAngle))
   }
   if (
      (i.isScrolling && s.emit('touchMoveOpposite', o),
      typeof i.startMoving > 'u' &&
         (r.currentX !== r.startX || r.currentY !== r.startY) &&
         (i.startMoving = !0),
      i.isScrolling)
   ) {
      i.isTouched = !1
      return
   }
   if (!i.startMoving) return
   ;(s.allowClick = !1),
      !n.cssMode && o.cancelable && o.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && o.stopPropagation()
   let v = s.isHorizontal() ? h : m,
      b = s.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY
   n.oneWayMovement &&
      ((v = Math.abs(v) * (l ? 1 : -1)), (b = Math.abs(b) * (l ? 1 : -1))),
      (r.diff = v),
      (v *= n.touchRatio),
      l && ((v = -v), (b = -b))
   const z = s.touchesDirection
   ;(s.swipeDirection = v > 0 ? 'prev' : 'next'),
      (s.touchesDirection = b > 0 ? 'prev' : 'next')
   const _ = s.params.loop && !n.cssMode,
      D =
         (s.touchesDirection === 'next' && s.allowSlideNext) ||
         (s.touchesDirection === 'prev' && s.allowSlidePrev)
   if (!i.isMoved) {
      if (
         (_ && D && s.loopFix({ direction: s.swipeDirection }),
         (i.startTranslate = s.getTranslate()),
         s.setTransition(0),
         s.animating)
      ) {
         const N = new window.CustomEvent('transitionend', {
            bubbles: !0,
            cancelable: !0
         })
         s.wrapperEl.dispatchEvent(N)
      }
      ;(i.allowMomentumBounce = !1),
         n.grabCursor &&
            (s.allowSlideNext === !0 || s.allowSlidePrev === !0) &&
            s.setGrabCursor(!0),
         s.emit('sliderFirstMove', o)
   }
   let w
   if (
      (new Date().getTime(),
      i.isMoved &&
         i.allowThresholdMove &&
         z !== s.touchesDirection &&
         _ &&
         D &&
         Math.abs(v) >= 1)
   ) {
      Object.assign(r, {
         startX: d,
         startY: f,
         currentX: d,
         currentY: f,
         startTranslate: i.currentTranslate
      }),
         (i.loopSwapReset = !0),
         (i.startTranslate = i.currentTranslate)
      return
   }
   s.emit('sliderMove', o),
      (i.isMoved = !0),
      (i.currentTranslate = v + i.startTranslate)
   let O = !0,
      B = n.resistanceRatio
   if (
      (n.touchReleaseOnEdges && (B = 0),
      v > 0
         ? (_ &&
              D &&
              !w &&
              i.allowThresholdMove &&
              i.currentTranslate >
                 (n.centeredSlides
                    ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1]
                    : s.minTranslate()) &&
              s.loopFix({
                 direction: 'prev',
                 setTranslate: !0,
                 activeSlideIndex: 0
              }),
           i.currentTranslate > s.minTranslate() &&
              ((O = !1),
              n.resistance &&
                 (i.currentTranslate =
                    s.minTranslate() -
                    1 +
                    (-s.minTranslate() + i.startTranslate + v) ** B)))
         : v < 0 &&
           (_ &&
              D &&
              !w &&
              i.allowThresholdMove &&
              i.currentTranslate <
                 (n.centeredSlides
                    ? s.maxTranslate() +
                      s.slidesSizesGrid[s.slidesSizesGrid.length - 1]
                    : s.maxTranslate()) &&
              s.loopFix({
                 direction: 'next',
                 setTranslate: !0,
                 activeSlideIndex:
                    s.slides.length -
                    (n.slidesPerView === 'auto'
                       ? s.slidesPerViewDynamic()
                       : Math.ceil(parseFloat(n.slidesPerView, 10)))
              }),
           i.currentTranslate < s.maxTranslate() &&
              ((O = !1),
              n.resistance &&
                 (i.currentTranslate =
                    s.maxTranslate() +
                    1 -
                    (s.maxTranslate() - i.startTranslate - v) ** B))),
      O && (o.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
         s.swipeDirection === 'next' &&
         i.currentTranslate < i.startTranslate &&
         (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
         s.swipeDirection === 'prev' &&
         i.currentTranslate > i.startTranslate &&
         (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
         !s.allowSlideNext &&
         (i.currentTranslate = i.startTranslate),
      n.threshold > 0)
   )
      if (Math.abs(v) > n.threshold || i.allowThresholdMove) {
         if (!i.allowThresholdMove) {
            ;(i.allowThresholdMove = !0),
               (r.startX = r.currentX),
               (r.startY = r.currentY),
               (i.currentTranslate = i.startTranslate),
               (r.diff = s.isHorizontal()
                  ? r.currentX - r.startX
                  : r.currentY - r.startY)
            return
         }
      } else {
         i.currentTranslate = i.startTranslate
         return
      }
   !n.followFinger ||
      n.cssMode ||
      (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
         n.watchSlidesProgress) &&
         (s.updateActiveIndex(), s.updateSlidesClasses()),
      n.freeMode &&
         n.freeMode.enabled &&
         s.freeMode &&
         s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate))
}
function Bd(e) {
   const t = this,
      s = t.touchEventsData
   let i = e
   i.originalEvent && (i = i.originalEvent)
   let n
   if (i.type === 'touchend' || i.type === 'touchcancel') {
      if (
         ((n = [...i.changedTouches].filter(
            (B) => B.identifier === s.touchId
         )[0]),
         !n || n.identifier !== s.touchId)
      )
         return
   } else {
      if (s.touchId !== null || i.pointerId !== s.pointerId) return
      n = i
   }
   if (
      ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(
         i.type
      ) &&
      !(
         ['pointercancel', 'contextmenu'].includes(i.type) &&
         (t.browser.isSafari || t.browser.isWebView)
      )
   )
      return
   ;(s.pointerId = null), (s.touchId = null)
   const {
      params: l,
      touches: a,
      rtlTranslate: o,
      slidesGrid: c,
      enabled: d
   } = t
   if (!d || (!l.simulateTouch && i.pointerType === 'mouse')) return
   if (
      (s.allowTouchCallbacks && t.emit('touchEnd', i),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
   ) {
      s.isMoved && l.grabCursor && t.setGrabCursor(!1),
         (s.isMoved = !1),
         (s.startMoving = !1)
      return
   }
   l.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
      t.setGrabCursor(!1)
   const f = rs(),
      h = f - s.touchStartTime
   if (t.allowClick) {
      const B = i.path || (i.composedPath && i.composedPath())
      t.updateClickedSlide((B && B[0]) || i.target, B),
         t.emit('tap click', i),
         h < 300 &&
            f - s.lastClickTime < 300 &&
            t.emit('doubleTap doubleClick', i)
   }
   if (
      ((s.lastClickTime = rs()),
      ns(() => {
         t.destroyed || (t.allowClick = !0)
      }),
      !s.isTouched ||
         !s.isMoved ||
         !t.swipeDirection ||
         (a.diff === 0 && !s.loopSwapReset) ||
         (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
   ) {
      ;(s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1)
      return
   }
   ;(s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1)
   let m
   if (
      (l.followFinger
         ? (m = o ? t.translate : -t.translate)
         : (m = -s.currentTranslate),
      l.cssMode)
   )
      return
   if (l.freeMode && l.freeMode.enabled) {
      t.freeMode.onTouchEnd({ currentPos: m })
      return
   }
   const v = m >= -t.maxTranslate() && !t.params.loop
   let b = 0,
      z = t.slidesSizesGrid[0]
   for (
      let B = 0;
      B < c.length;
      B += B < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
   ) {
      const N = B < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup
      typeof c[B + N] < 'u'
         ? (v || (m >= c[B] && m < c[B + N])) &&
           ((b = B), (z = c[B + N] - c[B]))
         : (v || m >= c[B]) &&
           ((b = B), (z = c[c.length - 1] - c[c.length - 2]))
   }
   let _ = null,
      D = null
   l.rewind &&
      (t.isBeginning
         ? (D =
              l.virtual && l.virtual.enabled && t.virtual
                 ? t.virtual.slides.length - 1
                 : t.slides.length - 1)
         : t.isEnd && (_ = 0))
   const w = (m - c[b]) / z,
      O = b < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup
   if (h > l.longSwipesMs) {
      if (!l.longSwipes) {
         t.slideTo(t.activeIndex)
         return
      }
      t.swipeDirection === 'next' &&
         (w >= l.longSwipesRatio
            ? t.slideTo(l.rewind && t.isEnd ? _ : b + O)
            : t.slideTo(b)),
         t.swipeDirection === 'prev' &&
            (w > 1 - l.longSwipesRatio
               ? t.slideTo(b + O)
               : D !== null && w < 0 && Math.abs(w) > l.longSwipesRatio
               ? t.slideTo(D)
               : t.slideTo(b))
   } else {
      if (!l.shortSwipes) {
         t.slideTo(t.activeIndex)
         return
      }
      t.navigation &&
      (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl)
         ? i.target === t.navigation.nextEl
            ? t.slideTo(b + O)
            : t.slideTo(b)
         : (t.swipeDirection === 'next' && t.slideTo(_ !== null ? _ : b + O),
           t.swipeDirection === 'prev' && t.slideTo(D !== null ? D : b))
   }
}
function mn() {
   const e = this,
      { params: t, el: s } = e
   if (s && s.offsetWidth === 0) return
   t.breakpoints && e.setBreakpoint()
   const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e,
      l = e.virtual && e.params.virtual.enabled
   ;(e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses()
   const a = l && t.loop
   ;(t.slidesPerView === 'auto' || t.slidesPerView > 1) &&
   e.isEnd &&
   !e.isBeginning &&
   !e.params.centeredSlides &&
   !a
      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
      : e.params.loop && !l
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay &&
         e.autoplay.running &&
         e.autoplay.paused &&
         (clearTimeout(e.autoplay.resizeTimeout),
         (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
               e.autoplay.running &&
               e.autoplay.paused &&
               e.autoplay.resume()
         }, 500))),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = i),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
}
function Rd(e) {
   const t = this
   t.enabled &&
      (t.allowClick ||
         (t.params.preventClicks && e.preventDefault(),
         t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())))
}
function Nd() {
   const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: i } = e
   if (!i) return
   ;(e.previousTranslate = e.translate),
      e.isHorizontal()
         ? (e.translate = -t.scrollLeft)
         : (e.translate = -t.scrollTop),
      e.translate === 0 && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses()
   let n
   const r = e.maxTranslate() - e.minTranslate()
   r === 0 ? (n = 0) : (n = (e.translate - e.minTranslate()) / r),
      n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit('setTranslate', e.translate, !1)
}
function Dd(e) {
   const t = this
   Xt(t, e.target),
      !(
         t.params.cssMode ||
         (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)
      ) && t.update()
}
function $d() {
   const e = this
   e.documentTouchHandlerProceeded ||
      ((e.documentTouchHandlerProceeded = !0),
      e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'))
}
const Tr = (e, t) => {
   const s = Xe(),
      { params: i, el: n, wrapperEl: r, device: l } = e,
      a = !!i.nested,
      o = t === 'on' ? 'addEventListener' : 'removeEventListener',
      c = t
   s[o]('touchstart', e.onDocumentTouchStart, { passive: !1, capture: a }),
      n[o]('touchstart', e.onTouchStart, { passive: !1 }),
      n[o]('pointerdown', e.onTouchStart, { passive: !1 }),
      s[o]('touchmove', e.onTouchMove, { passive: !1, capture: a }),
      s[o]('pointermove', e.onTouchMove, { passive: !1, capture: a }),
      s[o]('touchend', e.onTouchEnd, { passive: !0 }),
      s[o]('pointerup', e.onTouchEnd, { passive: !0 }),
      s[o]('pointercancel', e.onTouchEnd, { passive: !0 }),
      s[o]('touchcancel', e.onTouchEnd, { passive: !0 }),
      s[o]('pointerout', e.onTouchEnd, { passive: !0 }),
      s[o]('pointerleave', e.onTouchEnd, { passive: !0 }),
      s[o]('contextmenu', e.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
         n[o]('click', e.onClick, !0),
      i.cssMode && r[o]('scroll', e.onScroll),
      i.updateOnWindowResize
         ? e[c](
              l.ios || l.android
                 ? 'resize orientationchange observerUpdate'
                 : 'resize observerUpdate',
              mn,
              !0
           )
         : e[c]('observerUpdate', mn, !0),
      n[o]('load', e.onLoad, { capture: !0 })
}
function Fd() {
   const e = this,
      { params: t } = e
   ;(e.onTouchStart = Ad.bind(e)),
      (e.onTouchMove = zd.bind(e)),
      (e.onTouchEnd = Bd.bind(e)),
      (e.onDocumentTouchStart = $d.bind(e)),
      t.cssMode && (e.onScroll = Nd.bind(e)),
      (e.onClick = Rd.bind(e)),
      (e.onLoad = Dd.bind(e)),
      Tr(e, 'on')
}
function Vd() {
   Tr(this, 'off')
}
var Gd = { attachEvents: Fd, detachEvents: Vd }
const gn = (e, t) => e.grid && t.grid && t.grid.rows > 1
function Hd() {
   const e = this,
      { realIndex: t, initialized: s, params: i, el: n } = e,
      r = i.breakpoints
   if (!r || (r && Object.keys(r).length === 0)) return
   const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el)
   if (!l || e.currentBreakpoint === l) return
   const o = (l in r ? r[l] : void 0) || e.originalParams,
      c = gn(e, i),
      d = gn(e, o),
      f = i.enabled
   c && !d
      ? (n.classList.remove(
           `${i.containerModifierClass}grid`,
           `${i.containerModifierClass}grid-column`
        ),
        e.emitContainerClasses())
      : !c &&
        d &&
        (n.classList.add(`${i.containerModifierClass}grid`),
        ((o.grid.fill && o.grid.fill === 'column') ||
           (!o.grid.fill && i.grid.fill === 'column')) &&
           n.classList.add(`${i.containerModifierClass}grid-column`),
        e.emitContainerClasses()),
      ['navigation', 'pagination', 'scrollbar'].forEach((_) => {
         if (typeof o[_] > 'u') return
         const D = i[_] && i[_].enabled,
            w = o[_] && o[_].enabled
         D && !w && e[_].disable(), !D && w && e[_].enable()
      })
   const h = o.direction && o.direction !== i.direction,
      m = i.loop && (o.slidesPerView !== i.slidesPerView || h),
      v = i.loop
   h && s && e.changeDirection(), Se(e.params, o)
   const b = e.params.enabled,
      z = e.params.loop
   Object.assign(e, {
      allowTouchMove: e.params.allowTouchMove,
      allowSlideNext: e.params.allowSlideNext,
      allowSlidePrev: e.params.allowSlidePrev
   }),
      f && !b ? e.disable() : !f && b && e.enable(),
      (e.currentBreakpoint = l),
      e.emit('_beforeBreakpoint', o),
      s &&
         (m
            ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
            : !v && z
            ? (e.loopCreate(t), e.updateSlides())
            : v && !z && e.loopDestroy()),
      e.emit('breakpoint', o)
}
function jd(e, t, s) {
   if ((t === void 0 && (t = 'window'), !e || (t === 'container' && !s))) return
   let i = !1
   const n = we(),
      r = t === 'window' ? n.innerHeight : s.clientHeight,
      l = Object.keys(e).map((a) => {
         if (typeof a == 'string' && a.indexOf('@') === 0) {
            const o = parseFloat(a.substr(1))
            return { value: r * o, point: a }
         }
         return { value: a, point: a }
      })
   l.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10))
   for (let a = 0; a < l.length; a += 1) {
      const { point: o, value: c } = l[a]
      t === 'window'
         ? n.matchMedia(`(min-width: ${c}px)`).matches && (i = o)
         : c <= s.clientWidth && (i = o)
   }
   return i || 'max'
}
var Wd = { setBreakpoint: Hd, getBreakpoint: jd }
function kd(e, t) {
   const s = []
   return (
      e.forEach((i) => {
         typeof i == 'object'
            ? Object.keys(i).forEach((n) => {
                 i[n] && s.push(t + n)
              })
            : typeof i == 'string' && s.push(t + i)
      }),
      s
   )
}
function Ud() {
   const e = this,
      { classNames: t, params: s, rtl: i, el: n, device: r } = e,
      l = kd(
         [
            'initialized',
            s.direction,
            { 'free-mode': e.params.freeMode && s.freeMode.enabled },
            { autoheight: s.autoHeight },
            { rtl: i },
            { grid: s.grid && s.grid.rows > 1 },
            {
               'grid-column':
                  s.grid && s.grid.rows > 1 && s.grid.fill === 'column'
            },
            { android: r.android },
            { ios: r.ios },
            { 'css-mode': s.cssMode },
            { centered: s.cssMode && s.centeredSlides },
            { 'watch-progress': s.watchSlidesProgress }
         ],
         s.containerModifierClass
      )
   t.push(...l), n.classList.add(...t), e.emitContainerClasses()
}
function qd() {
   const e = this,
      { el: t, classNames: s } = e
   t.classList.remove(...s), e.emitContainerClasses()
}
var Kd = { addClasses: Ud, removeClasses: qd }
function Yd() {
   const e = this,
      { isLocked: t, params: s } = e,
      { slidesOffsetBefore: i } = s
   if (i) {
      const n = e.slides.length - 1,
         r = e.slidesGrid[n] + e.slidesSizesGrid[n] + i * 2
      e.isLocked = e.size > r
   } else e.isLocked = e.snapGrid.length === 1
   s.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
      s.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
      t && t !== e.isLocked && (e.isEnd = !1),
      t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock')
}
var Xd = { checkOverflow: Yd },
   Xs = {
      init: !0,
      direction: 'horizontal',
      oneWayMovement: !1,
      swiperElementNodeName: 'SWIPER-CONTAINER',
      touchEventsTarget: 'wrapper',
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: 'swiper',
      enabled: !0,
      focusableElements:
         'input, select, option, textarea, button, video, label',
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: 'slide',
      breakpoints: void 0,
      breakpointsBase: 'window',
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: 'swiper-',
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-blank',
      slideActiveClass: 'swiper-slide-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideFullyVisibleClass: 'swiper-slide-fully-visible',
      slideNextClass: 'swiper-slide-next',
      slidePrevClass: 'swiper-slide-prev',
      wrapperClass: 'swiper-wrapper',
      lazyPreloaderClass: 'swiper-lazy-preloader',
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1
   }
function Jd(e, t) {
   return function (i) {
      i === void 0 && (i = {})
      const n = Object.keys(i)[0],
         r = i[n]
      if (typeof r != 'object' || r === null) {
         Se(t, i)
         return
      }
      if (
         (e[n] === !0 && (e[n] = { enabled: !0 }),
         n === 'navigation' &&
            e[n] &&
            e[n].enabled &&
            !e[n].prevEl &&
            !e[n].nextEl &&
            (e[n].auto = !0),
         ['pagination', 'scrollbar'].indexOf(n) >= 0 &&
            e[n] &&
            e[n].enabled &&
            !e[n].el &&
            (e[n].auto = !0),
         !(n in e && 'enabled' in r))
      ) {
         Se(t, i)
         return
      }
      typeof e[n] == 'object' && !('enabled' in e[n]) && (e[n].enabled = !0),
         e[n] || (e[n] = { enabled: !1 }),
         Se(t, i)
   }
}
const zs = {
      eventsEmitter: Ka,
      update: rd,
      translate: fd,
      transition: md,
      slide: xd,
      loop: Pd,
      grabCursor: Od,
      events: Gd,
      breakpoints: Wd,
      checkOverflow: Xd,
      classes: Kd
   },
   Bs = {}
let Ei = class Ne {
   constructor() {
      let t, s
      for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++)
         n[r] = arguments[r]
      n.length === 1 &&
      n[0].constructor &&
      Object.prototype.toString.call(n[0]).slice(8, -1) === 'Object'
         ? (s = n[0])
         : ([t, s] = n),
         s || (s = {}),
         (s = Se({}, s)),
         t && !s.el && (s.el = t)
      const l = Xe()
      if (
         s.el &&
         typeof s.el == 'string' &&
         l.querySelectorAll(s.el).length > 1
      ) {
         const d = []
         return (
            l.querySelectorAll(s.el).forEach((f) => {
               const h = Se({}, s, { el: f })
               d.push(new Ne(h))
            }),
            d
         )
      }
      const a = this
      ;(a.__swiper__ = !0),
         (a.support = Sr()),
         (a.device = _r({ userAgent: s.userAgent })),
         (a.browser = ka()),
         (a.eventsListeners = {}),
         (a.eventsAnyListeners = []),
         (a.modules = [...a.__modules__]),
         s.modules && Array.isArray(s.modules) && a.modules.push(...s.modules)
      const o = {}
      a.modules.forEach((d) => {
         d({
            params: s,
            swiper: a,
            extendParams: Jd(s, o),
            on: a.on.bind(a),
            once: a.once.bind(a),
            off: a.off.bind(a),
            emit: a.emit.bind(a)
         })
      })
      const c = Se({}, Xs, o)
      return (
         (a.params = Se({}, c, Bs, s)),
         (a.originalParams = Se({}, a.params)),
         (a.passedParams = Se({}, s)),
         a.params &&
            a.params.on &&
            Object.keys(a.params.on).forEach((d) => {
               a.on(d, a.params.on[d])
            }),
         a.params && a.params.onAny && a.onAny(a.params.onAny),
         Object.assign(a, {
            enabled: a.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
               return a.params.direction === 'horizontal'
            },
            isVertical() {
               return a.params.direction === 'vertical'
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
               return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
               isTouched: void 0,
               isMoved: void 0,
               allowTouchCallbacks: void 0,
               touchStartTime: void 0,
               isScrolling: void 0,
               currentTranslate: void 0,
               startTranslate: void 0,
               allowThresholdMove: void 0,
               focusableElements: a.params.focusableElements,
               lastClickTime: 0,
               clickTimeout: void 0,
               velocities: [],
               allowMomentumBounce: void 0,
               startMoving: void 0,
               pointerId: null,
               touchId: null
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
               startX: 0,
               startY: 0,
               currentX: 0,
               currentY: 0,
               diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
         }),
         a.emit('_swiper'),
         a.params.init && a.init(),
         a
      )
   }
   getDirectionLabel(t) {
      return this.isHorizontal()
         ? t
         : {
              width: 'height',
              'margin-top': 'margin-left',
              'margin-bottom ': 'margin-right',
              'margin-left': 'margin-top',
              'margin-right': 'margin-bottom',
              'padding-left': 'padding-top',
              'padding-right': 'padding-bottom',
              marginRight: 'marginBottom'
           }[t]
   }
   getSlideIndex(t) {
      const { slidesEl: s, params: i } = this,
         n = ze(s, `.${i.slideClass}, swiper-slide`),
         r = un(n[0])
      return un(t) - r
   }
   getSlideIndexByData(t) {
      return this.getSlideIndex(
         this.slides.filter(
            (s) => s.getAttribute('data-swiper-slide-index') * 1 === t
         )[0]
      )
   }
   recalcSlides() {
      const t = this,
         { slidesEl: s, params: i } = t
      t.slides = ze(s, `.${i.slideClass}, swiper-slide`)
   }
   enable() {
      const t = this
      t.enabled ||
         ((t.enabled = !0),
         t.params.grabCursor && t.setGrabCursor(),
         t.emit('enable'))
   }
   disable() {
      const t = this
      t.enabled &&
         ((t.enabled = !1),
         t.params.grabCursor && t.unsetGrabCursor(),
         t.emit('disable'))
   }
   setProgress(t, s) {
      const i = this
      t = Math.min(Math.max(t, 0), 1)
      const n = i.minTranslate(),
         l = (i.maxTranslate() - n) * t + n
      i.translateTo(l, typeof s > 'u' ? 0 : s),
         i.updateActiveIndex(),
         i.updateSlidesClasses()
   }
   emitContainerClasses() {
      const t = this
      if (!t.params._emitClasses || !t.el) return
      const s = t.el.className
         .split(' ')
         .filter(
            (i) =>
               i.indexOf('swiper') === 0 ||
               i.indexOf(t.params.containerModifierClass) === 0
         )
      t.emit('_containerClasses', s.join(' '))
   }
   getSlideClasses(t) {
      const s = this
      return s.destroyed
         ? ''
         : t.className
              .split(' ')
              .filter(
                 (i) =>
                    i.indexOf('swiper-slide') === 0 ||
                    i.indexOf(s.params.slideClass) === 0
              )
              .join(' ')
   }
   emitSlidesClasses() {
      const t = this
      if (!t.params._emitClasses || !t.el) return
      const s = []
      t.slides.forEach((i) => {
         const n = t.getSlideClasses(i)
         s.push({ slideEl: i, classNames: n }), t.emit('_slideClass', i, n)
      }),
         t.emit('_slideClasses', s)
   }
   slidesPerViewDynamic(t, s) {
      t === void 0 && (t = 'current'), s === void 0 && (s = !1)
      const i = this,
         {
            params: n,
            slides: r,
            slidesGrid: l,
            slidesSizesGrid: a,
            size: o,
            activeIndex: c
         } = i
      let d = 1
      if (typeof n.slidesPerView == 'number') return n.slidesPerView
      if (n.centeredSlides) {
         let f = r[c] ? Math.ceil(r[c].swiperSlideSize) : 0,
            h
         for (let m = c + 1; m < r.length; m += 1)
            r[m] &&
               !h &&
               ((f += Math.ceil(r[m].swiperSlideSize)),
               (d += 1),
               f > o && (h = !0))
         for (let m = c - 1; m >= 0; m -= 1)
            r[m] &&
               !h &&
               ((f += r[m].swiperSlideSize), (d += 1), f > o && (h = !0))
      } else if (t === 'current')
         for (let f = c + 1; f < r.length; f += 1)
            (s ? l[f] + a[f] - l[c] < o : l[f] - l[c] < o) && (d += 1)
      else for (let f = c - 1; f >= 0; f -= 1) l[c] - l[f] < o && (d += 1)
      return d
   }
   update() {
      const t = this
      if (!t || t.destroyed) return
      const { snapGrid: s, params: i } = t
      i.breakpoints && t.setBreakpoint(),
         [...t.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
            l.complete && Xt(t, l)
         }),
         t.updateSize(),
         t.updateSlides(),
         t.updateProgress(),
         t.updateSlidesClasses()
      function n() {
         const l = t.rtlTranslate ? t.translate * -1 : t.translate,
            a = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate())
         t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses()
      }
      let r
      if (i.freeMode && i.freeMode.enabled && !i.cssMode)
         n(), i.autoHeight && t.updateAutoHeight()
      else {
         if (
            (i.slidesPerView === 'auto' || i.slidesPerView > 1) &&
            t.isEnd &&
            !i.centeredSlides
         ) {
            const l =
               t.virtual && i.virtual.enabled ? t.virtual.slides : t.slides
            r = t.slideTo(l.length - 1, 0, !1, !0)
         } else r = t.slideTo(t.activeIndex, 0, !1, !0)
         r || n()
      }
      i.watchOverflow && s !== t.snapGrid && t.checkOverflow(), t.emit('update')
   }
   changeDirection(t, s) {
      s === void 0 && (s = !0)
      const i = this,
         n = i.params.direction
      return (
         t || (t = n === 'horizontal' ? 'vertical' : 'horizontal'),
         t === n ||
            (t !== 'horizontal' && t !== 'vertical') ||
            (i.el.classList.remove(`${i.params.containerModifierClass}${n}`),
            i.el.classList.add(`${i.params.containerModifierClass}${t}`),
            i.emitContainerClasses(),
            (i.params.direction = t),
            i.slides.forEach((r) => {
               t === 'vertical' ? (r.style.width = '') : (r.style.height = '')
            }),
            i.emit('changeDirection'),
            s && i.update()),
         i
      )
   }
   changeLanguageDirection(t) {
      const s = this
      ;(s.rtl && t === 'rtl') ||
         (!s.rtl && t === 'ltr') ||
         ((s.rtl = t === 'rtl'),
         (s.rtlTranslate = s.params.direction === 'horizontal' && s.rtl),
         s.rtl
            ? (s.el.classList.add(`${s.params.containerModifierClass}rtl`),
              (s.el.dir = 'rtl'))
            : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`),
              (s.el.dir = 'ltr')),
         s.update())
   }
   mount(t) {
      const s = this
      if (s.mounted) return !0
      let i = t || s.params.el
      if ((typeof i == 'string' && (i = document.querySelector(i)), !i))
         return !1
      ;(i.swiper = s),
         i.parentNode &&
            i.parentNode.host &&
            i.parentNode.host.nodeName ===
               s.params.swiperElementNodeName.toUpperCase() &&
            (s.isElement = !0)
      const n = () =>
         `.${(s.params.wrapperClass || '').trim().split(' ').join('.')}`
      let l =
         i && i.shadowRoot && i.shadowRoot.querySelector
            ? i.shadowRoot.querySelector(n())
            : ze(i, n())[0]
      return (
         !l &&
            s.params.createElements &&
            ((l = zt('div', s.params.wrapperClass)),
            i.append(l),
            ze(i, `.${s.params.slideClass}`).forEach((a) => {
               l.append(a)
            })),
         Object.assign(s, {
            el: i,
            wrapperEl: l,
            slidesEl:
               s.isElement && !i.parentNode.host.slideSlots
                  ? i.parentNode.host
                  : l,
            hostEl: s.isElement ? i.parentNode.host : i,
            mounted: !0,
            rtl: i.dir.toLowerCase() === 'rtl' || ke(i, 'direction') === 'rtl',
            rtlTranslate:
               s.params.direction === 'horizontal' &&
               (i.dir.toLowerCase() === 'rtl' || ke(i, 'direction') === 'rtl'),
            wrongRTL: ke(l, 'display') === '-webkit-box'
         }),
         !0
      )
   }
   init(t) {
      const s = this
      if (s.initialized || s.mount(t) === !1) return s
      s.emit('beforeInit'),
         s.params.breakpoints && s.setBreakpoint(),
         s.addClasses(),
         s.updateSize(),
         s.updateSlides(),
         s.params.watchOverflow && s.checkOverflow(),
         s.params.grabCursor && s.enabled && s.setGrabCursor(),
         s.params.loop && s.virtual && s.params.virtual.enabled
            ? s.slideTo(
                 s.params.initialSlide + s.virtual.slidesBefore,
                 0,
                 s.params.runCallbacksOnInit,
                 !1,
                 !0
              )
            : s.slideTo(
                 s.params.initialSlide,
                 0,
                 s.params.runCallbacksOnInit,
                 !1,
                 !0
              ),
         s.params.loop && s.loopCreate(),
         s.attachEvents()
      const n = [...s.el.querySelectorAll('[loading="lazy"]')]
      return (
         s.isElement &&
            n.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),
         n.forEach((r) => {
            r.complete
               ? Xt(s, r)
               : r.addEventListener('load', (l) => {
                    Xt(s, l.target)
                 })
         }),
         Ys(s),
         (s.initialized = !0),
         Ys(s),
         s.emit('init'),
         s.emit('afterInit'),
         s
      )
   }
   destroy(t, s) {
      t === void 0 && (t = !0), s === void 0 && (s = !0)
      const i = this,
         { params: n, el: r, wrapperEl: l, slides: a } = i
      return (
         typeof i.params > 'u' ||
            i.destroyed ||
            (i.emit('beforeDestroy'),
            (i.initialized = !1),
            i.detachEvents(),
            n.loop && i.loopDestroy(),
            s &&
               (i.removeClasses(),
               r.removeAttribute('style'),
               l.removeAttribute('style'),
               a &&
                  a.length &&
                  a.forEach((o) => {
                     o.classList.remove(
                        n.slideVisibleClass,
                        n.slideFullyVisibleClass,
                        n.slideActiveClass,
                        n.slideNextClass,
                        n.slidePrevClass
                     ),
                        o.removeAttribute('style'),
                        o.removeAttribute('data-swiper-slide-index')
                  })),
            i.emit('destroy'),
            Object.keys(i.eventsListeners).forEach((o) => {
               i.off(o)
            }),
            t !== !1 && ((i.el.swiper = null), za(i)),
            (i.destroyed = !0)),
         null
      )
   }
   static extendDefaults(t) {
      Se(Bs, t)
   }
   static get extendedDefaults() {
      return Bs
   }
   static get defaults() {
      return Xs
   }
   static installModule(t) {
      Ne.prototype.__modules__ || (Ne.prototype.__modules__ = [])
      const s = Ne.prototype.__modules__
      typeof t == 'function' && s.indexOf(t) < 0 && s.push(t)
   }
   static use(t) {
      return Array.isArray(t)
         ? (t.forEach((s) => Ne.installModule(s)), Ne)
         : (Ne.installModule(t), Ne)
   }
}
Object.keys(zs).forEach((e) => {
   Object.keys(zs[e]).forEach((t) => {
      Ei.prototype[t] = zs[e][t]
   })
})
Ei.use([Ua, qa])
const Er = [
   'eventsPrefix',
   'injectStyles',
   'injectStylesUrls',
   'modules',
   'init',
   '_direction',
   'oneWayMovement',
   'swiperElementNodeName',
   'touchEventsTarget',
   'initialSlide',
   '_speed',
   'cssMode',
   'updateOnWindowResize',
   'resizeObserver',
   'nested',
   'focusableElements',
   '_enabled',
   '_width',
   '_height',
   'preventInteractionOnTransition',
   'userAgent',
   'url',
   '_edgeSwipeDetection',
   '_edgeSwipeThreshold',
   '_freeMode',
   '_autoHeight',
   'setWrapperSize',
   'virtualTranslate',
   '_effect',
   'breakpoints',
   'breakpointsBase',
   '_spaceBetween',
   '_slidesPerView',
   'maxBackfaceHiddenSlides',
   '_grid',
   '_slidesPerGroup',
   '_slidesPerGroupSkip',
   '_slidesPerGroupAuto',
   '_centeredSlides',
   '_centeredSlidesBounds',
   '_slidesOffsetBefore',
   '_slidesOffsetAfter',
   'normalizeSlideIndex',
   '_centerInsufficientSlides',
   '_watchOverflow',
   'roundLengths',
   'touchRatio',
   'touchAngle',
   'simulateTouch',
   '_shortSwipes',
   '_longSwipes',
   'longSwipesRatio',
   'longSwipesMs',
   '_followFinger',
   'allowTouchMove',
   '_threshold',
   'touchMoveStopPropagation',
   'touchStartPreventDefault',
   'touchStartForcePreventDefault',
   'touchReleaseOnEdges',
   'uniqueNavElements',
   '_resistance',
   '_resistanceRatio',
   '_watchSlidesProgress',
   '_grabCursor',
   'preventClicks',
   'preventClicksPropagation',
   '_slideToClickedSlide',
   '_loop',
   'loopAdditionalSlides',
   'loopAddBlankSlides',
   'loopPreventsSliding',
   '_rewind',
   '_allowSlidePrev',
   '_allowSlideNext',
   '_swipeHandler',
   '_noSwiping',
   'noSwipingClass',
   'noSwipingSelector',
   'passiveListeners',
   'containerModifierClass',
   'slideClass',
   'slideActiveClass',
   'slideVisibleClass',
   'slideFullyVisibleClass',
   'slideNextClass',
   'slidePrevClass',
   'slideBlankClass',
   'wrapperClass',
   'lazyPreloaderClass',
   'lazyPreloadPrevNext',
   'runCallbacksOnInit',
   'observer',
   'observeParents',
   'observeSlideChildren',
   'a11y',
   '_autoplay',
   '_controller',
   'coverflowEffect',
   'cubeEffect',
   'fadeEffect',
   'flipEffect',
   'creativeEffect',
   'cardsEffect',
   'hashNavigation',
   'history',
   'keyboard',
   'mousewheel',
   '_navigation',
   '_pagination',
   'parallax',
   '_scrollbar',
   '_thumbs',
   'virtual',
   'zoom',
   'control'
]
function it(e) {
   return (
      typeof e == 'object' &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === 'Object' &&
      !e.__swiper__
   )
}
function pt(e, t) {
   const s = ['__proto__', 'constructor', 'prototype']
   Object.keys(t)
      .filter((i) => s.indexOf(i) < 0)
      .forEach((i) => {
         typeof e[i] > 'u'
            ? (e[i] = t[i])
            : it(t[i]) && it(e[i]) && Object.keys(t[i]).length > 0
            ? t[i].__swiper__
               ? (e[i] = t[i])
               : pt(e[i], t[i])
            : (e[i] = t[i])
      })
}
function Cr(e) {
   return (
      e === void 0 && (e = {}),
      e.navigation &&
         typeof e.navigation.nextEl > 'u' &&
         typeof e.navigation.prevEl > 'u'
   )
}
function Pr(e) {
   return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > 'u'
}
function Mr(e) {
   return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > 'u'
}
function Ir(e) {
   e === void 0 && (e = '')
   const t = e
         .split(' ')
         .map((i) => i.trim())
         .filter((i) => !!i),
      s = []
   return (
      t.forEach((i) => {
         s.indexOf(i) < 0 && s.push(i)
      }),
      s.join(' ')
   )
}
function Zd(e) {
   return (
      e === void 0 && (e = ''),
      e
         ? e.includes('swiper-wrapper')
            ? e
            : `swiper-wrapper ${e}`
         : 'swiper-wrapper'
   )
}
function Qd(e) {
   let {
      swiper: t,
      slides: s,
      passedParams: i,
      changedParams: n,
      nextEl: r,
      prevEl: l,
      scrollbarEl: a,
      paginationEl: o
   } = e
   const c = n.filter(
         (A) => A !== 'children' && A !== 'direction' && A !== 'wrapperClass'
      ),
      {
         params: d,
         pagination: f,
         navigation: h,
         scrollbar: m,
         virtual: v,
         thumbs: b
      } = t
   let z, _, D, w, O, B, N, se
   n.includes('thumbs') &&
      i.thumbs &&
      i.thumbs.swiper &&
      d.thumbs &&
      !d.thumbs.swiper &&
      (z = !0),
      n.includes('controller') &&
         i.controller &&
         i.controller.control &&
         d.controller &&
         !d.controller.control &&
         (_ = !0),
      n.includes('pagination') &&
         i.pagination &&
         (i.pagination.el || o) &&
         (d.pagination || d.pagination === !1) &&
         f &&
         !f.el &&
         (D = !0),
      n.includes('scrollbar') &&
         i.scrollbar &&
         (i.scrollbar.el || a) &&
         (d.scrollbar || d.scrollbar === !1) &&
         m &&
         !m.el &&
         (w = !0),
      n.includes('navigation') &&
         i.navigation &&
         (i.navigation.prevEl || l) &&
         (i.navigation.nextEl || r) &&
         (d.navigation || d.navigation === !1) &&
         h &&
         !h.prevEl &&
         !h.nextEl &&
         (O = !0)
   const V = (A) => {
      t[A] &&
         (t[A].destroy(),
         A === 'navigation'
            ? (t.isElement && (t[A].prevEl.remove(), t[A].nextEl.remove()),
              (d[A].prevEl = void 0),
              (d[A].nextEl = void 0),
              (t[A].prevEl = void 0),
              (t[A].nextEl = void 0))
            : (t.isElement && t[A].el.remove(),
              (d[A].el = void 0),
              (t[A].el = void 0)))
   }
   n.includes('loop') &&
      t.isElement &&
      (d.loop && !i.loop ? (B = !0) : !d.loop && i.loop ? (N = !0) : (se = !0)),
      c.forEach((A) => {
         if (it(d[A]) && it(i[A]))
            Object.assign(d[A], i[A]),
               (A === 'navigation' ||
                  A === 'pagination' ||
                  A === 'scrollbar') &&
                  'enabled' in i[A] &&
                  !i[A].enabled &&
                  V(A)
         else {
            const P = i[A]
            ;(P === !0 || P === !1) &&
            (A === 'navigation' || A === 'pagination' || A === 'scrollbar')
               ? P === !1 && V(A)
               : (d[A] = i[A])
         }
      }),
      c.includes('controller') &&
         !_ &&
         t.controller &&
         t.controller.control &&
         d.controller &&
         d.controller.control &&
         (t.controller.control = d.controller.control),
      n.includes('children') && s && v && d.virtual.enabled
         ? ((v.slides = s), v.update(!0))
         : n.includes('virtual') &&
           v &&
           d.virtual.enabled &&
           (s && (v.slides = s), v.update(!0)),
      n.includes('children') && s && d.loop && (se = !0),
      z && b.init() && b.update(!0),
      _ && (t.controller.control = d.controller.control),
      D &&
         (t.isElement &&
            (!o || typeof o == 'string') &&
            ((o = document.createElement('div')),
            o.classList.add('swiper-pagination'),
            o.part.add('pagination'),
            t.el.appendChild(o)),
         o && (d.pagination.el = o),
         f.init(),
         f.render(),
         f.update()),
      w &&
         (t.isElement &&
            (!a || typeof a == 'string') &&
            ((a = document.createElement('div')),
            a.classList.add('swiper-scrollbar'),
            a.part.add('scrollbar'),
            t.el.appendChild(a)),
         a && (d.scrollbar.el = a),
         m.init(),
         m.updateSize(),
         m.setTranslate()),
      O &&
         (t.isElement &&
            ((!r || typeof r == 'string') &&
               ((r = document.createElement('div')),
               r.classList.add('swiper-button-next'),
               (r.innerHTML = t.hostEl.constructor.nextButtonSvg),
               r.part.add('button-next'),
               t.el.appendChild(r)),
            (!l || typeof l == 'string') &&
               ((l = document.createElement('div')),
               l.classList.add('swiper-button-prev'),
               (l.innerHTML = t.hostEl.constructor.prevButtonSvg),
               l.part.add('button-prev'),
               t.el.appendChild(l))),
         r && (d.navigation.nextEl = r),
         l && (d.navigation.prevEl = l),
         h.init(),
         h.update()),
      n.includes('allowSlideNext') && (t.allowSlideNext = i.allowSlideNext),
      n.includes('allowSlidePrev') && (t.allowSlidePrev = i.allowSlidePrev),
      n.includes('direction') && t.changeDirection(i.direction, !1),
      (B || se) && t.loopDestroy(),
      (N || se) && t.loopCreate(),
      t.update()
}
function vn(e, t) {
   e === void 0 && (e = {}), t === void 0 && (t = !0)
   const s = { on: {} },
      i = {},
      n = {}
   pt(s, Xs), (s._emitClasses = !0), (s.init = !1)
   const r = {},
      l = Er.map((o) => o.replace(/_/, '')),
      a = Object.assign({}, e)
   return (
      Object.keys(a).forEach((o) => {
         typeof e[o] > 'u' ||
            (l.indexOf(o) >= 0
               ? it(e[o])
                  ? ((s[o] = {}), (n[o] = {}), pt(s[o], e[o]), pt(n[o], e[o]))
                  : ((s[o] = e[o]), (n[o] = e[o]))
               : o.search(/on[A-Z]/) === 0 && typeof e[o] == 'function'
               ? t
                  ? (i[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
                  : (s.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
               : (r[o] = e[o]))
      }),
      ['navigation', 'pagination', 'scrollbar'].forEach((o) => {
         s[o] === !0 && (s[o] = {}), s[o] === !1 && delete s[o]
      }),
      { params: s, passedParams: n, rest: r, events: i }
   )
}
function ec(e, t) {
   let {
      el: s,
      nextEl: i,
      prevEl: n,
      paginationEl: r,
      scrollbarEl: l,
      swiper: a
   } = e
   Cr(t) &&
      i &&
      n &&
      ((a.params.navigation.nextEl = i),
      (a.originalParams.navigation.nextEl = i),
      (a.params.navigation.prevEl = n),
      (a.originalParams.navigation.prevEl = n)),
      Pr(t) &&
         r &&
         ((a.params.pagination.el = r), (a.originalParams.pagination.el = r)),
      Mr(t) &&
         l &&
         ((a.params.scrollbar.el = l), (a.originalParams.scrollbar.el = l)),
      a.init(s)
}
function tc(e, t, s, i, n) {
   const r = []
   if (!t) return r
   const l = (o) => {
      r.indexOf(o) < 0 && r.push(o)
   }
   if (s && i) {
      const o = i.map(n),
         c = s.map(n)
      o.join('') !== c.join('') && l('children'),
         i.length !== s.length && l('children')
   }
   return (
      Er.filter((o) => o[0] === '_')
         .map((o) => o.replace(/_/, ''))
         .forEach((o) => {
            if (o in e && o in t)
               if (it(e[o]) && it(t[o])) {
                  const c = Object.keys(e[o]),
                     d = Object.keys(t[o])
                  c.length !== d.length
                     ? l(o)
                     : (c.forEach((f) => {
                          e[o][f] !== t[o][f] && l(o)
                       }),
                       d.forEach((f) => {
                          e[o][f] !== t[o][f] && l(o)
                       }))
               } else e[o] !== t[o] && l(o)
         }),
      r
   )
}
const sc = (e) => {
   !e ||
      e.destroyed ||
      !e.params.virtual ||
      (e.params.virtual && !e.params.virtual.enabled) ||
      (e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses(),
      e.parallax &&
         e.params.parallax &&
         e.params.parallax.enabled &&
         e.parallax.setTranslate())
}
function Rs(e, t, s) {
   e === void 0 && (e = {})
   const i = [],
      n = {
         'container-start': [],
         'container-end': [],
         'wrapper-start': [],
         'wrapper-end': []
      },
      r = (l, a) => {
         Array.isArray(l) &&
            l.forEach((o) => {
               const c = typeof o.type == 'symbol'
               a === 'default' && (a = 'container-end'),
                  c && o.children
                     ? r(o.children, a)
                     : o.type &&
                       (o.type.name === 'SwiperSlide' ||
                          o.type.name === 'AsyncComponentWrapper')
                     ? i.push(o)
                     : n[a] && n[a].push(o)
            })
      }
   return (
      Object.keys(e).forEach((l) => {
         if (typeof e[l] != 'function') return
         const a = e[l]()
         r(a, l)
      }),
      (s.value = t.value),
      (t.value = i),
      { slides: i, slots: n }
   )
}
function ic(e, t, s) {
   if (!s) return null
   const i = (d) => {
         let f = d
         return (
            d < 0 ? (f = t.length + d) : f >= t.length && (f = f - t.length), f
         )
      },
      n = e.value.isHorizontal()
         ? { [e.value.rtlTranslate ? 'right' : 'left']: `${s.offset}px` }
         : { top: `${s.offset}px` },
      { from: r, to: l } = s,
      a = e.value.params.loop ? -t.length : 0,
      o = e.value.params.loop ? t.length * 2 : t.length,
      c = []
   for (let d = a; d < o; d += 1) d >= r && d <= l && c.push(t[i(d)])
   return c.map(
      (d) => (
         d.props || (d.props = {}),
         d.props.style || (d.props.style = {}),
         (d.props.swiperRef = e),
         (d.props.style = n),
         Ce(d.type, { ...d.props }, d.children)
      )
   )
}
const nc = {
      name: 'Swiper',
      props: {
         tag: { type: String, default: 'div' },
         wrapperTag: { type: String, default: 'div' },
         modules: { type: Array, default: void 0 },
         init: { type: Boolean, default: void 0 },
         direction: { type: String, default: void 0 },
         oneWayMovement: { type: Boolean, default: void 0 },
         swiperElementNodeName: { type: String, default: 'SWIPER-CONTAINER' },
         touchEventsTarget: { type: String, default: void 0 },
         initialSlide: { type: Number, default: void 0 },
         speed: { type: Number, default: void 0 },
         cssMode: { type: Boolean, default: void 0 },
         updateOnWindowResize: { type: Boolean, default: void 0 },
         resizeObserver: { type: Boolean, default: void 0 },
         nested: { type: Boolean, default: void 0 },
         focusableElements: { type: String, default: void 0 },
         width: { type: Number, default: void 0 },
         height: { type: Number, default: void 0 },
         preventInteractionOnTransition: { type: Boolean, default: void 0 },
         userAgent: { type: String, default: void 0 },
         url: { type: String, default: void 0 },
         edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
         edgeSwipeThreshold: { type: Number, default: void 0 },
         autoHeight: { type: Boolean, default: void 0 },
         setWrapperSize: { type: Boolean, default: void 0 },
         virtualTranslate: { type: Boolean, default: void 0 },
         effect: { type: String, default: void 0 },
         breakpoints: { type: Object, default: void 0 },
         spaceBetween: { type: [Number, String], default: void 0 },
         slidesPerView: { type: [Number, String], default: void 0 },
         maxBackfaceHiddenSlides: { type: Number, default: void 0 },
         slidesPerGroup: { type: Number, default: void 0 },
         slidesPerGroupSkip: { type: Number, default: void 0 },
         slidesPerGroupAuto: { type: Boolean, default: void 0 },
         centeredSlides: { type: Boolean, default: void 0 },
         centeredSlidesBounds: { type: Boolean, default: void 0 },
         slidesOffsetBefore: { type: Number, default: void 0 },
         slidesOffsetAfter: { type: Number, default: void 0 },
         normalizeSlideIndex: { type: Boolean, default: void 0 },
         centerInsufficientSlides: { type: Boolean, default: void 0 },
         watchOverflow: { type: Boolean, default: void 0 },
         roundLengths: { type: Boolean, default: void 0 },
         touchRatio: { type: Number, default: void 0 },
         touchAngle: { type: Number, default: void 0 },
         simulateTouch: { type: Boolean, default: void 0 },
         shortSwipes: { type: Boolean, default: void 0 },
         longSwipes: { type: Boolean, default: void 0 },
         longSwipesRatio: { type: Number, default: void 0 },
         longSwipesMs: { type: Number, default: void 0 },
         followFinger: { type: Boolean, default: void 0 },
         allowTouchMove: { type: Boolean, default: void 0 },
         threshold: { type: Number, default: void 0 },
         touchMoveStopPropagation: { type: Boolean, default: void 0 },
         touchStartPreventDefault: { type: Boolean, default: void 0 },
         touchStartForcePreventDefault: { type: Boolean, default: void 0 },
         touchReleaseOnEdges: { type: Boolean, default: void 0 },
         uniqueNavElements: { type: Boolean, default: void 0 },
         resistance: { type: Boolean, default: void 0 },
         resistanceRatio: { type: Number, default: void 0 },
         watchSlidesProgress: { type: Boolean, default: void 0 },
         grabCursor: { type: Boolean, default: void 0 },
         preventClicks: { type: Boolean, default: void 0 },
         preventClicksPropagation: { type: Boolean, default: void 0 },
         slideToClickedSlide: { type: Boolean, default: void 0 },
         loop: { type: Boolean, default: void 0 },
         loopedSlides: { type: Number, default: void 0 },
         loopPreventsSliding: { type: Boolean, default: void 0 },
         rewind: { type: Boolean, default: void 0 },
         allowSlidePrev: { type: Boolean, default: void 0 },
         allowSlideNext: { type: Boolean, default: void 0 },
         swipeHandler: { type: Boolean, default: void 0 },
         noSwiping: { type: Boolean, default: void 0 },
         noSwipingClass: { type: String, default: void 0 },
         noSwipingSelector: { type: String, default: void 0 },
         passiveListeners: { type: Boolean, default: void 0 },
         containerModifierClass: { type: String, default: void 0 },
         slideClass: { type: String, default: void 0 },
         slideActiveClass: { type: String, default: void 0 },
         slideVisibleClass: { type: String, default: void 0 },
         slideFullyVisibleClass: { type: String, default: void 0 },
         slideBlankClass: { type: String, default: void 0 },
         slideNextClass: { type: String, default: void 0 },
         slidePrevClass: { type: String, default: void 0 },
         wrapperClass: { type: String, default: void 0 },
         lazyPreloaderClass: { type: String, default: void 0 },
         lazyPreloadPrevNext: { type: Number, default: void 0 },
         runCallbacksOnInit: { type: Boolean, default: void 0 },
         observer: { type: Boolean, default: void 0 },
         observeParents: { type: Boolean, default: void 0 },
         observeSlideChildren: { type: Boolean, default: void 0 },
         a11y: { type: [Boolean, Object], default: void 0 },
         autoplay: { type: [Boolean, Object], default: void 0 },
         controller: { type: Object, default: void 0 },
         coverflowEffect: { type: Object, default: void 0 },
         cubeEffect: { type: Object, default: void 0 },
         fadeEffect: { type: Object, default: void 0 },
         flipEffect: { type: Object, default: void 0 },
         creativeEffect: { type: Object, default: void 0 },
         cardsEffect: { type: Object, default: void 0 },
         hashNavigation: { type: [Boolean, Object], default: void 0 },
         history: { type: [Boolean, Object], default: void 0 },
         keyboard: { type: [Boolean, Object], default: void 0 },
         mousewheel: { type: [Boolean, Object], default: void 0 },
         navigation: { type: [Boolean, Object], default: void 0 },
         pagination: { type: [Boolean, Object], default: void 0 },
         parallax: { type: [Boolean, Object], default: void 0 },
         scrollbar: { type: [Boolean, Object], default: void 0 },
         thumbs: { type: Object, default: void 0 },
         virtual: { type: [Boolean, Object], default: void 0 },
         zoom: { type: [Boolean, Object], default: void 0 },
         grid: { type: [Object], default: void 0 },
         freeMode: { type: [Boolean, Object], default: void 0 },
         enabled: { type: Boolean, default: void 0 }
      },
      emits: [
         '_beforeBreakpoint',
         '_containerClasses',
         '_slideClass',
         '_slideClasses',
         '_swiper',
         '_freeModeNoMomentumRelease',
         'activeIndexChange',
         'afterInit',
         'autoplay',
         'autoplayStart',
         'autoplayStop',
         'autoplayPause',
         'autoplayResume',
         'autoplayTimeLeft',
         'beforeDestroy',
         'beforeInit',
         'beforeLoopFix',
         'beforeResize',
         'beforeSlideChangeStart',
         'beforeTransitionStart',
         'breakpoint',
         'breakpointsBase',
         'changeDirection',
         'click',
         'disable',
         'doubleTap',
         'doubleClick',
         'destroy',
         'enable',
         'fromEdge',
         'hashChange',
         'hashSet',
         'init',
         'keyPress',
         'lock',
         'loopFix',
         'momentumBounce',
         'navigationHide',
         'navigationShow',
         'navigationPrev',
         'navigationNext',
         'observerUpdate',
         'orientationchange',
         'paginationHide',
         'paginationRender',
         'paginationShow',
         'paginationUpdate',
         'progress',
         'reachBeginning',
         'reachEnd',
         'realIndexChange',
         'resize',
         'scroll',
         'scrollbarDragEnd',
         'scrollbarDragMove',
         'scrollbarDragStart',
         'setTransition',
         'setTranslate',
         'slidesUpdated',
         'slideChange',
         'slideChangeTransitionEnd',
         'slideChangeTransitionStart',
         'slideNextTransitionEnd',
         'slideNextTransitionStart',
         'slidePrevTransitionEnd',
         'slidePrevTransitionStart',
         'slideResetTransitionStart',
         'slideResetTransitionEnd',
         'sliderMove',
         'sliderFirstMove',
         'slidesLengthChange',
         'slidesGridLengthChange',
         'snapGridLengthChange',
         'snapIndexChange',
         'swiper',
         'tap',
         'toEdge',
         'touchEnd',
         'touchMove',
         'touchMoveOpposite',
         'touchStart',
         'transitionEnd',
         'transitionStart',
         'unlock',
         'update',
         'virtualUpdate',
         'zoomChange'
      ],
      setup(e, t) {
         let { slots: s, emit: i } = t
         const { tag: n, wrapperTag: r } = e,
            l = ue('swiper'),
            a = ue(null),
            o = ue(!1),
            c = ue(!1),
            d = ue(null),
            f = ue(null),
            h = ue(null),
            m = { value: [] },
            v = { value: [] },
            b = ue(null),
            z = ue(null),
            _ = ue(null),
            D = ue(null),
            { params: w, passedParams: O } = vn(e, !1)
         Rs(s, m, v), (h.value = O), (v.value = m.value)
         const B = () => {
            Rs(s, m, v), (o.value = !0)
         }
         ;(w.onAny = function (V) {
            for (
               var A = arguments.length,
                  P = new Array(A > 1 ? A - 1 : 0),
                  F = 1;
               F < A;
               F++
            )
               P[F - 1] = arguments[F]
            i(V, ...P)
         }),
            Object.assign(w.on, {
               _beforeBreakpoint: B,
               _containerClasses(V, A) {
                  l.value = A
               }
            })
         const N = { ...w }
         if (
            (delete N.wrapperClass,
            (f.value = new Ei(N)),
            f.value.virtual && f.value.params.virtual.enabled)
         ) {
            f.value.virtual.slides = m.value
            const V = {
               cache: !1,
               slides: m.value,
               renderExternal: (A) => {
                  a.value = A
               },
               renderExternalUpdate: !1
            }
            pt(f.value.params.virtual, V), pt(f.value.originalParams.virtual, V)
         }
         mi(() => {
            !c.value && f.value && (f.value.emitSlidesClasses(), (c.value = !0))
            const { passedParams: V } = vn(e, !1),
               A = tc(
                  V,
                  h.value,
                  m.value,
                  v.value,
                  (P) => P.props && P.props.key
               )
            ;(h.value = V),
               (A.length || o.value) &&
                  f.value &&
                  !f.value.destroyed &&
                  Qd({
                     swiper: f.value,
                     slides: m.value,
                     passedParams: V,
                     changedParams: A,
                     nextEl: b.value,
                     prevEl: z.value,
                     scrollbarEl: D.value,
                     paginationEl: _.value
                  }),
               (o.value = !1)
         }),
            bi('swiper', f),
            Ut(a, () => {
               kn(() => {
                  sc(f.value)
               })
            }),
            hi(() => {
               d.value &&
                  (ec(
                     {
                        el: d.value,
                        nextEl: b.value,
                        prevEl: z.value,
                        paginationEl: _.value,
                        scrollbarEl: D.value,
                        swiper: f.value
                     },
                     w
                  ),
                  i('swiper', f.value))
            }),
            gi(() => {
               f.value && !f.value.destroyed && f.value.destroy(!0, !1)
            })
         function se(V) {
            return w.virtual
               ? ic(f, V, a.value)
               : (V.forEach((A, P) => {
                    A.props || (A.props = {}),
                       (A.props.swiperRef = f),
                       (A.props.swiperSlideIndex = P)
                 }),
                 V)
         }
         return () => {
            const { slides: V, slots: A } = Rs(s, m, v)
            return Ce(n, { ref: d, class: Ir(l.value) }, [
               A['container-start'],
               Ce(r, { class: Zd(w.wrapperClass) }, [
                  A['wrapper-start'],
                  se(V),
                  A['wrapper-end']
               ]),
               Cr(e) && [
                  Ce('div', { ref: z, class: 'swiper-button-prev' }),
                  Ce('div', { ref: b, class: 'swiper-button-next' })
               ],
               Mr(e) && Ce('div', { ref: D, class: 'swiper-scrollbar' }),
               Pr(e) && Ce('div', { ref: _, class: 'swiper-pagination' }),
               A['container-end']
            ])
         }
      }
   },
   rc = {
      name: 'SwiperSlide',
      props: {
         tag: { type: String, default: 'div' },
         swiperRef: { type: Object, required: !1 },
         swiperSlideIndex: { type: Number, default: void 0, required: !1 },
         zoom: { type: Boolean, default: void 0, required: !1 },
         lazy: { type: Boolean, default: !1, required: !1 },
         virtualIndex: { type: [String, Number], default: void 0 }
      },
      setup(e, t) {
         let { slots: s } = t,
            i = !1
         const { swiperRef: n } = e,
            r = ue(null),
            l = ue('swiper-slide'),
            a = ue(!1)
         function o(f, h, m) {
            h === r.value && (l.value = m)
         }
         hi(() => {
            !n || !n.value || (n.value.on('_slideClass', o), (i = !0))
         }),
            er(() => {
               i || !n || !n.value || (n.value.on('_slideClass', o), (i = !0))
            }),
            mi(() => {
               !r.value ||
                  !n ||
                  !n.value ||
                  (typeof e.swiperSlideIndex < 'u' &&
                     (r.value.swiperSlideIndex = e.swiperSlideIndex),
                  n.value.destroyed &&
                     l.value !== 'swiper-slide' &&
                     (l.value = 'swiper-slide'))
            }),
            gi(() => {
               !n || !n.value || n.value.off('_slideClass', o)
            })
         const c = vr(() => ({
            isActive: l.value.indexOf('swiper-slide-active') >= 0,
            isVisible: l.value.indexOf('swiper-slide-visible') >= 0,
            isPrev: l.value.indexOf('swiper-slide-prev') >= 0,
            isNext: l.value.indexOf('swiper-slide-next') >= 0
         }))
         bi('swiperSlide', c)
         const d = () => {
            a.value = !0
         }
         return () =>
            Ce(
               e.tag,
               {
                  class: Ir(`${l.value}`),
                  ref: r,
                  'data-swiper-slide-index':
                     typeof e.virtualIndex > 'u' &&
                     n &&
                     n.value &&
                     n.value.params.loop
                        ? e.swiperSlideIndex
                        : e.virtualIndex,
                  onLoadCapture: d
               },
               e.zoom
                  ? Ce(
                       'div',
                       {
                          class: 'swiper-zoom-container',
                          'data-swiper-zoom':
                             typeof e.zoom == 'number' ? e.zoom : void 0
                       },
                       [
                          s.default && s.default(c.value),
                          e.lazy &&
                             !a.value &&
                             Ce('div', { class: 'swiper-lazy-preloader' })
                       ]
                    )
                  : [
                       s.default && s.default(c.value),
                       e.lazy &&
                          !a.value &&
                          Ce('div', { class: 'swiper-lazy-preloader' })
                    ]
            )
      }
   }
function lc(e, t, s, i) {
   return (
      e.params.createElements &&
         Object.keys(i).forEach((n) => {
            if (!s[n] && s.auto === !0) {
               let r = ze(e.el, `.${i[n]}`)[0]
               r ||
                  ((r = zt('div', i[n])), (r.className = i[n]), e.el.append(r)),
                  (s[n] = r),
                  (t[n] = r)
            }
         }),
      s
   )
}
function oc(e) {
   return (
      e === void 0 && (e = ''),
      `.${e
         .trim()
         .replace(/([\.:!+\/])/g, '\\$1')
         .replace(/ /g, '.')}`
   )
}
function ac(e) {
   let { swiper: t, extendParams: s, on: i, emit: n } = e
   const r = Xe()
   let l = !1,
      a = null,
      o = null,
      c,
      d,
      f,
      h
   s({
      scrollbar: {
         el: null,
         dragSize: 'auto',
         hide: !1,
         draggable: !1,
         snapOnRelease: !0,
         lockClass: 'swiper-scrollbar-lock',
         dragClass: 'swiper-scrollbar-drag',
         scrollbarDisabledClass: 'swiper-scrollbar-disabled',
         horizontalClass: 'swiper-scrollbar-horizontal',
         verticalClass: 'swiper-scrollbar-vertical'
      }
   }),
      (t.scrollbar = { el: null, dragEl: null })
   function m() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return
      const { scrollbar: E, rtlTranslate: M } = t,
         { dragEl: $, el: H } = E,
         W = t.params.scrollbar,
         Y = t.params.loop ? t.progressLoop : t.progress
      let K = d,
         ee = (f - d) * Y
      M
         ? ((ee = -ee),
           ee > 0 ? ((K = d - ee), (ee = 0)) : -ee + d > f && (K = f + ee))
         : ee < 0
         ? ((K = d + ee), (ee = 0))
         : ee + d > f && (K = f - ee),
         t.isHorizontal()
            ? (($.style.transform = `translate3d(${ee}px, 0, 0)`),
              ($.style.width = `${K}px`))
            : (($.style.transform = `translate3d(0px, ${ee}px, 0)`),
              ($.style.height = `${K}px`)),
         W.hide &&
            (clearTimeout(a),
            (H.style.opacity = 1),
            (a = setTimeout(() => {
               ;(H.style.opacity = 0), (H.style.transitionDuration = '400ms')
            }, 1e3)))
   }
   function v(E) {
      !t.params.scrollbar.el ||
         !t.scrollbar.el ||
         (t.scrollbar.dragEl.style.transitionDuration = `${E}ms`)
   }
   function b() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return
      const { scrollbar: E } = t,
         { dragEl: M, el: $ } = E
      ;(M.style.width = ''),
         (M.style.height = ''),
         (f = t.isHorizontal() ? $.offsetWidth : $.offsetHeight),
         (h =
            t.size /
            (t.virtualSize +
               t.params.slidesOffsetBefore -
               (t.params.centeredSlides ? t.snapGrid[0] : 0))),
         t.params.scrollbar.dragSize === 'auto'
            ? (d = f * h)
            : (d = parseInt(t.params.scrollbar.dragSize, 10)),
         t.isHorizontal()
            ? (M.style.width = `${d}px`)
            : (M.style.height = `${d}px`),
         h >= 1 ? ($.style.display = 'none') : ($.style.display = ''),
         t.params.scrollbar.hide && ($.style.opacity = 0),
         t.params.watchOverflow &&
            t.enabled &&
            E.el.classList[t.isLocked ? 'add' : 'remove'](
               t.params.scrollbar.lockClass
            )
   }
   function z(E) {
      return t.isHorizontal() ? E.clientX : E.clientY
   }
   function _(E) {
      const { scrollbar: M, rtlTranslate: $ } = t,
         { el: H } = M
      let W
      ;(W =
         (z(E) -
            Da(H)[t.isHorizontal() ? 'left' : 'top'] -
            (c !== null ? c : d / 2)) /
         (f - d)),
         (W = Math.max(Math.min(W, 1), 0)),
         $ && (W = 1 - W)
      const Y = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * W
      t.updateProgress(Y),
         t.setTranslate(Y),
         t.updateActiveIndex(),
         t.updateSlidesClasses()
   }
   function D(E) {
      const M = t.params.scrollbar,
         { scrollbar: $, wrapperEl: H } = t,
         { el: W, dragEl: Y } = $
      ;(l = !0),
         (c =
            E.target === Y
               ? z(E) -
                 E.target.getBoundingClientRect()[
                    t.isHorizontal() ? 'left' : 'top'
                 ]
               : null),
         E.preventDefault(),
         E.stopPropagation(),
         (H.style.transitionDuration = '100ms'),
         (Y.style.transitionDuration = '100ms'),
         _(E),
         clearTimeout(o),
         (W.style.transitionDuration = '0ms'),
         M.hide && (W.style.opacity = 1),
         t.params.cssMode && (t.wrapperEl.style['scroll-snap-type'] = 'none'),
         n('scrollbarDragStart', E)
   }
   function w(E) {
      const { scrollbar: M, wrapperEl: $ } = t,
         { el: H, dragEl: W } = M
      l &&
         (E.preventDefault ? E.preventDefault() : (E.returnValue = !1),
         _(E),
         ($.style.transitionDuration = '0ms'),
         (H.style.transitionDuration = '0ms'),
         (W.style.transitionDuration = '0ms'),
         n('scrollbarDragMove', E))
   }
   function O(E) {
      const M = t.params.scrollbar,
         { scrollbar: $, wrapperEl: H } = t,
         { el: W } = $
      l &&
         ((l = !1),
         t.params.cssMode &&
            ((t.wrapperEl.style['scroll-snap-type'] = ''),
            (H.style.transitionDuration = '')),
         M.hide &&
            (clearTimeout(o),
            (o = ns(() => {
               ;(W.style.opacity = 0), (W.style.transitionDuration = '400ms')
            }, 1e3))),
         n('scrollbarDragEnd', E),
         M.snapOnRelease && t.slideToClosest())
   }
   function B(E) {
      const { scrollbar: M, params: $ } = t,
         H = M.el
      if (!H) return
      const W = H,
         Y = $.passiveListeners ? { passive: !1, capture: !1 } : !1,
         K = $.passiveListeners ? { passive: !0, capture: !1 } : !1
      if (!W) return
      const ee = E === 'on' ? 'addEventListener' : 'removeEventListener'
      W[ee]('pointerdown', D, Y),
         r[ee]('pointermove', w, Y),
         r[ee]('pointerup', O, K)
   }
   function N() {
      !t.params.scrollbar.el || !t.scrollbar.el || B('on')
   }
   function se() {
      !t.params.scrollbar.el || !t.scrollbar.el || B('off')
   }
   function V() {
      const { scrollbar: E, el: M } = t
      t.params.scrollbar = lc(
         t,
         t.originalParams.scrollbar,
         t.params.scrollbar,
         { el: 'swiper-scrollbar' }
      )
      const $ = t.params.scrollbar
      if (!$.el) return
      let H
      if (
         (typeof $.el == 'string' &&
            t.isElement &&
            (H = t.el.querySelector($.el)),
         !H && typeof $.el == 'string')
      ) {
         if (((H = r.querySelectorAll($.el)), !H.length)) return
      } else H || (H = $.el)
      t.params.uniqueNavElements &&
         typeof $.el == 'string' &&
         H.length > 1 &&
         M.querySelectorAll($.el).length === 1 &&
         (H = M.querySelector($.el)),
         H.length > 0 && (H = H[0]),
         H.classList.add(t.isHorizontal() ? $.horizontalClass : $.verticalClass)
      let W
      H &&
         ((W = H.querySelector(oc(t.params.scrollbar.dragClass))),
         W || ((W = zt('div', t.params.scrollbar.dragClass)), H.append(W))),
         Object.assign(E, { el: H, dragEl: W }),
         $.draggable && N(),
         H &&
            H.classList[t.enabled ? 'remove' : 'add'](
               ...Ge(t.params.scrollbar.lockClass)
            )
   }
   function A() {
      const E = t.params.scrollbar,
         M = t.scrollbar.el
      M &&
         M.classList.remove(
            ...Ge(t.isHorizontal() ? E.horizontalClass : E.verticalClass)
         ),
         se()
   }
   i('changeDirection', () => {
      if (!t.scrollbar || !t.scrollbar.el) return
      const E = t.params.scrollbar
      let { el: M } = t.scrollbar
      ;(M = Ga(M)),
         M.forEach(($) => {
            $.classList.remove(E.horizontalClass, E.verticalClass),
               $.classList.add(
                  t.isHorizontal() ? E.horizontalClass : E.verticalClass
               )
         })
   }),
      i('init', () => {
         t.params.scrollbar.enabled === !1 ? F() : (V(), b(), m())
      }),
      i('update resize observerUpdate lock unlock changeDirection', () => {
         b()
      }),
      i('setTranslate', () => {
         m()
      }),
      i('setTransition', (E, M) => {
         v(M)
      }),
      i('enable disable', () => {
         const { el: E } = t.scrollbar
         E &&
            E.classList[t.enabled ? 'remove' : 'add'](
               ...Ge(t.params.scrollbar.lockClass)
            )
      }),
      i('destroy', () => {
         A()
      })
   const P = () => {
         t.el.classList.remove(
            ...Ge(t.params.scrollbar.scrollbarDisabledClass)
         ),
            t.scrollbar.el &&
               t.scrollbar.el.classList.remove(
                  ...Ge(t.params.scrollbar.scrollbarDisabledClass)
               ),
            V(),
            b(),
            m()
      },
      F = () => {
         t.el.classList.add(...Ge(t.params.scrollbar.scrollbarDisabledClass)),
            t.scrollbar.el &&
               t.scrollbar.el.classList.add(
                  ...Ge(t.params.scrollbar.scrollbarDisabledClass)
               ),
            A()
      }
   Object.assign(t.scrollbar, {
      enable: P,
      disable: F,
      updateSize: b,
      setTranslate: m,
      init: V,
      destroy: A
   })
}
const Ci = (e) => (ui('data-v-59bdf023'), (e = e()), pi(), e),
   dc = { class: 'about-us' },
   cc = Ci(() =>
      J(
         'div',
         { class: 'about-us__bg-block' },
         [
            J('picture', null, [
               J('source', { src: Oa, type: 'image/webp' }),
               J('img', {
                  class: 'about-us__bg-img',
                  src: La,
                  alt: 'Blure',
                  width: '1920',
                  height: '1024'
               })
            ])
         ],
         -1
      )
   ),
   fc = { class: 'about-us__container' },
   uc = { class: 'about-us__content' },
   pc = Ci(() => J('div', { class: 'about-us__subtitle' }, 'Profile', -1)),
   hc = Ci(() => J('h2', { class: 'about-us__title' }, 'About Us', -1)),
   mc = {
      __name: 'AboutUs',
      setup(e) {
         const t = [ac],
            s = [
               {
                  id: '1',
                  text: 'CYou are using the old write up. We are using this now.Crafty Metaverse is a multi-blockchain based virtual reality metaverse platform to develop the most immersive, imaginative, and addictive gaming experiences. We are providing our gaming community with the near-real-world experience while using their digital avatars. Our ecosystem will be a futuristic, decentralized, and persistent 3D virtual metaverse gaming platform especially for crypto enthusiasts, gamers, artists, and metaverse fans.'
               },
               {
                  id: '2',
                  text: 'Crafty Metaverse will soon launch Guardians of Lost Worlds, the first cross-chain P2E gaming experience. Our game will be available on multiple blockchains and then eventually on our side chain (SANKOFA). This will give users a seamless gameplay experience with little to no gas fees that allow users to focus on the game rather than worrying about losing their returns.'
               }
            ]
         return (i, n) => (
            $e(),
            Ye('section', dc, [
               cc,
               J('div', fc, [
                  J('div', uc, [
                     pc,
                     hc,
                     le(
                        Vs(nc),
                        {
                           scrollbar: { hide: !1 },
                           modules: t,
                           class: 'mySwiper'
                        },
                        {
                           default: es(() => [
                              ($e(),
                              Ye(
                                 me,
                                 null,
                                 sr(s, (r) =>
                                    le(
                                       Vs(rc),
                                       { key: r.id },
                                       {
                                          default: es(() => [
                                             yi(En(r.text), 1)
                                          ]),
                                          _: 2
                                       },
                                       1024
                                    )
                                 ),
                                 64
                              ))
                           ]),
                           _: 1
                        }
                     )
                  ])
               ])
            ])
         )
      }
   },
   gc = Rt(mc, [['__scopeId', 'data-v-59bdf023']]),
   vc = {
      __name: 'App',
      setup(e) {
         return (t, s) => (
            $e(), Ye(me, null, [le(ua), J('main', null, [le(Ia), le(gc)])], 64)
         )
      }
   },
   bc = ko(vc)
bc.mount('#app')
