window.__require = function e(t, r, o) {
function n(i, l) {
if (!r[i]) {
if (!t[i]) {
var u = i.split("/");
u = u[u.length - 1];
if (!t[u]) {
var p = "function" == typeof __require && __require;
if (!l && p) return p(u, !0);
if (c) return c(u, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = u;
}
var f = r[i] = {
exports: {}
};
t[i][0].call(f.exports, function(e) {
return n(t[i][1][e] || e);
}, f, f.exports, e, t, r, o);
}
return r[i].exports;
}
for (var c = "function" == typeof __require && __require, i = 0; i < o.length; i++) n(o[i]);
return n;
}({
Helloworld: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
var o, n = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
o(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), c = this && this.__decorate || function(e, t, r, o) {
var n, c = arguments.length, i = c < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, o); else for (var l = e.length - 1; l >= 0; l--) (n = e[l]) && (i = (c < 3 ? n(i) : c > 3 ? n(t, r, i) : n(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = cc._decorator, l = i.ccclass, u = i.property, p = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.start = function() {
this.label.string = this.text;
};
c([ u(cc.Label) ], t.prototype, "label", void 0);
c([ u ], t.prototype, "text", void 0);
return c([ l ], t);
}(cc.Component);
r.default = p;
cc._RF.pop();
}, {} ],
"use_v2.1-2.2.1_cc.Toggle_event": [ function(e, t) {
"use strict";
cc._RF.push(t, "b1ef4MX7IJF4aHqvpmaa/q4", "use_v2.1-2.2.1_cc.Toggle_event");
cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0);
cc._RF.pop();
}, {} ]
}, {}, [ "Helloworld", "use_v2.1-2.2.1_cc.Toggle_event" ]);