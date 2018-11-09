! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.shuffle = e()
}(this, function () {
    "use strict";

    function t(t, e) {
        if (A) return A.call(t, e);
        for (var i = t.parentNode.querySelectorAll(e), n = 0; n < i.length; n++)
            if (i[n] == t) return !0;
        return !1
    }

    function e() {
        for (var t = {}, e = 0; e < arguments.length; e++) {
            var i = arguments[e];
            for (var n in i) C.call(i, n) && (t[n] = i[n])
        }
        return t
    }

    function i(t, e) {
        function i() {
            o = 0, a = +new Date, s = t.apply(n, r), n = null, r = null
        }
        var n, r, s, o, a = 0;
        return function () {
            n = this, r = arguments;
            var t = new Date - a;
            return o || (t >= e ? i() : o = setTimeout(i, e - t)), s
        }
    }

    function n() {}

    function r(t) {
        return parseFloat(t) || 0
    }

    function s(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.getComputedStyle(t, null),
            n = r(i[e]);
        return O || "width" !== e ? O || "height" !== e || (n += r(i.paddingTop) + r(i.paddingBottom) + r(i.borderTopWidth) + r(i.borderBottomWidth)) : n += r(i.paddingLeft) + r(i.paddingRight) + r(i.borderLeftWidth) + r(i.borderRightWidth), n
    }

    function o(t) {
        for (var e = t.length; e;) {
            e -= 1;
            var i = Math.floor(Math.random() * (e + 1)),
                n = t[i];
            t[i] = t[e], t[e] = n
        }
        return t
    }

    function a(t, e) {
        var i = x(W, e),
            n = [].slice.call(t),
            r = !1;
        return t.length ? i.randomize ? o(t) : ("function" == typeof i.by && t.sort(function (t, e) {
            if (r) return 0;
            var n = i.by(t[i.key]),
                s = i.by(e[i.key]);
            return void 0 === n && void 0 === s ? (r = !0, 0) : n < s || "sortFirst" === n || "sortLast" === s ? -1 : n > s || "sortLast" === n || "sortFirst" === s ? 1 : 0
        }), r ? n : (i.reverse && t.reverse(), t)) : []
    }

    function l() {
        return V += 1, P + V
    }

    function u(t) {
        return !!q[t] && (q[t].element.removeEventListener(P, q[t].listener), q[t] = null, !0)
    }

    function h(t, e) {
        var i = l(),
            n = function (t) {
                t.currentTarget === t.target && (u(i), e(t))
            };
        return t.addEventListener(P, n), q[i] = {
            element: t,
            listener: n
        }, i
    }

    function f(t) {
        return Math.max.apply(Math, t)
    }

    function c(t) {
        return Math.min.apply(Math, t)
    }

    function d(t, e, i, n) {
        var r = t / e;
        return Math.abs(Math.round(r) - r) < n && (r = Math.round(r)), Math.min(Math.ceil(r), i)
    }

    function g(t, e, i) {
        if (1 === e) return t;
        for (var n = [], r = 0; r <= i - e; r++) n.push(f(t.slice(r, r + e)));
        return n
    }

    function m(t, e) {
        for (var i = c(t), n = 0, r = t.length; n < r; n++)
            if (t[n] >= i - e && t[n] <= i + e) return n;
        return 0
    }

    function p(t) {
        for (var e = t.itemSize, i = t.positions, n = t.gridSize, r = t.total, s = t.threshold, o = t.buffer, a = d(e.width, n, r, s), l = g(i, a, r), u = m(l, o), h = new D(Math.round(n * u), Math.round(l[u])), f = l[u] + e.height, c = 0; c < a; c++) i[u + c] = f;
        return h
    }

    function v(t) {
        return Array.prototype.slice.call(t)
    }

    function b(t, e) {
        return t.indexOf(e) > -1
    }
    try {
        var y = new window.CustomEvent("test");
        if (y.preventDefault(), !0 !== y.defaultPrevented) throw new Error("Could not prevent default")
    } catch (t) {
        var _ = function (t, e) {
            var i, n;
            return e = e || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            }, i = document.createEvent("CustomEvent"), i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n = i.preventDefault, i.preventDefault = function () {
                n.call(this);
                try {
                    Object.defineProperty(this, "defaultPrevented", {
                        get: function () {
                            return !0
                        }
                    })
                } catch (t) {
                    this.defaultPrevented = !0
                }
            }, i
        };
        _.prototype = window.Event.prototype, window.CustomEvent = _
    }
    var S = Element.prototype,
        A = S.matches || S.matchesSelector || S.webkitMatchesSelector || S.mozMatchesSelector || S.msMatchesSelector || S.oMatchesSelector,
        k = t,
        E = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        w = function (t, e) {
            return e = {
                exports: {}
            }, t(e, e.exports), e.exports
        }(function (t) {
            function e(t) {
                for (var e = [], i = 0; i < t.length; i++) - 1 === e.indexOf(t[i]) && e.push(t[i]);
                return e
            }

            function i(t) {
                var e = new Set;
                return t.filter(function (t) {
                    return !e.has(t) && (e.add(t), !0)
                })
            }

            function n(t) {
                var e = [];
                return new Set(t).forEach(function (t) {
                    e.push(t)
                }), e
            }
            "Set" in E ? "function" == typeof Set.prototype.forEach && function () {
                var t = !1;
                return new Set([!0]).forEach(function (e) {
                    t = e
                }), !0 === t
            }() ? t.exports = n : t.exports = i : t.exports = e
        }),
        x = e,
        C = Object.prototype.hasOwnProperty,
        I = i,
        T = function (t, e, i) {
            function r(t) {
                return function (e, n) {
                    if (!o) {
                        if (e) return i(e, a), void(o = !0);
                        a[t] = n, --s || i(null, a)
                    }
                }
            }
            i || ("function" == typeof e ? (i = e, e = null) : i = n);
            var s = t && t.length;
            if (!s) return i(null, []);
            var o = !1,
                a = new Array(s);
            t.forEach(e ? function (t, i) {
                t.call(e, r(i))
            } : function (t, e) {
                t(r(e))
            })
        },
        F = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        L = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        D = function () {
            function t(e, i) {
                F(this, t), this.x = r(e), this.y = r(i)
            }
            return L(t, null, [{
                key: "equals",
                value: function (t, e) {
                    return t.x === e.x && t.y === e.y
                }
            }]), t
        }(),
        z = {
            BASE: "shuffle",
            SHUFFLE_ITEM: "shuffle-item",
            VISIBLE: "shuffle-item--visible",
            HIDDEN: "shuffle-item--hidden"
        },
        B = 0,
        M = function () {
            function t(e) {
                F(this, t), B += 1, this.id = B, this.element = e, this.isVisible = !0
            }
            return L(t, [{
                key: "show",
                value: function () {
                    this.isVisible = !0, this.element.classList.remove(z.HIDDEN), this.element.classList.add(z.VISIBLE)
                }
            }, {
                key: "hide",
                value: function () {
                    this.isVisible = !1, this.element.classList.remove(z.VISIBLE), this.element.classList.add(z.HIDDEN)
                }
            }, {
                key: "init",
                value: function () {
                    this.addClasses([z.SHUFFLE_ITEM, z.VISIBLE]), this.applyCss(t.Css.INITIAL), this.scale = t.Scale.VISIBLE, this.point = new D
                }
            }, {
                key: "addClasses",
                value: function (t) {
                    var e = this;
                    t.forEach(function (t) {
                        e.element.classList.add(t)
                    })
                }
            }, {
                key: "removeClasses",
                value: function (t) {
                    var e = this;
                    t.forEach(function (t) {
                        e.element.classList.remove(t)
                    })
                }
            }, {
                key: "applyCss",
                value: function (t) {
                    var e = this;
                    Object.keys(t).forEach(function (i) {
                        e.element.style[i] = t[i]
                    })
                }
            }, {
                key: "dispose",
                value: function () {
                    this.removeClasses([z.HIDDEN, z.VISIBLE, z.SHUFFLE_ITEM]), this.element.removeAttribute("style"), this.element = null
                }
            }]), t
        }();
    M.Css = {
        INITIAL: {
            position: "absolute",
            top: 0,
            left: 0,
            visibility: "visible",
            "will-change": "transform"
        },
        VISIBLE: {
            before: {
                opacity: 1,
                visibility: "visible"
            },
            after: {}
        },
        HIDDEN: {
            before: {
                opacity: 0
            },
            after: {
                visibility: "hidden"
            }
        }
    }, M.Scale = {
        VISIBLE: 1,
        HIDDEN: .001
    };
    var H = document.body || document.documentElement,
        R = document.createElement("div");
    R.style.cssText = "width:10px;padding:2px;box-sizing:border-box;", H.appendChild(R);
    var N = window.getComputedStyle(R, null).width,
        O = "10px" === N;
    H.removeChild(R);
    var W = {
            reverse: !1,
            by: null,
            randomize: !1,
            key: "element"
        },
        q = {},
        P = "transitionend",
        V = 0,
        U = 0,
        j = function () {
            function t(e) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                F(this, t), this.options = x(t.options, i), this.useSizer = !1, this.lastSort = {}, this.group = t.ALL_ITEMS, this.lastFilter = t.ALL_ITEMS, this.isEnabled = !0, this.isDestroyed = !1, this.isInitialized = !1, this._transitions = [], this.isTransitioning = !1, this._queue = [];
                var n = this._getElementOption(e);
                if (!n) throw new TypeError("Shuffle needs to be initialized with an element.");
                this.element = n, this.id = "shuffle_" + U, U += 1, this._init(), this.isInitialized = !0
            }
            return L(t, [{
                key: "_init",
                value: function () {
                    this.items = this._getItems(), this.options.sizer = this._getElementOption(this.options.sizer), this.options.sizer && (this.useSizer = !0), this.element.classList.add(t.Classes.BASE), this._initItems(), this._onResize = this._getResizeFunction(), window.addEventListener("resize", this._onResize);
                    var e = window.getComputedStyle(this.element, null),
                        i = t.getSize(this.element).width;
                    this._validateStyles(e), this._setColumns(i), this.filter(this.options.group, this.options.initialSort), this.element.offsetWidth, this._setTransitions(), this.element.style.transition = "height " + this.options.speed + "ms " + this.options.easing
                }
            }, {
                key: "_getResizeFunction",
                value: function () {
                    var t = this._handleResize.bind(this);
                    return this.options.throttle ? this.options.throttle(t, this.options.throttleTime) : t
                }
            }, {
                key: "_getElementOption",
                value: function (t) {
                    return "string" == typeof t ? this.element.querySelector(t) : t && t.nodeType && 1 === t.nodeType ? t : t && t.jquery ? t[0] : null
                }
            }, {
                key: "_validateStyles",
                value: function (t) {
                    "static" === t.position && (this.element.style.position = "relative"), "hidden" !== t.overflow && (this.element.style.overflow = "hidden")
                }
            }, {
                key: "_filter",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastFilter,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items,
                        i = this._getFilteredSets(t, e);
                    return this._toggleFilterClasses(i), this.lastFilter = t, "string" == typeof t && (this.group = t), i
                }
            }, {
                key: "_getFilteredSets",
                value: function (e, i) {
                    var n = this,
                        r = [],
                        s = [];
                    return e === t.ALL_ITEMS ? r = i : i.forEach(function (t) {
                        n._doesPassFilter(e, t.element) ? r.push(t) : s.push(t)
                    }), {
                        visible: r,
                        hidden: s
                    }
                }
            }, {
                key: "_doesPassFilter",
                value: function (e, i) {
                    function n(t) {
                        return b(s, t)
                    }
                    if ("function" == typeof e) return e.call(i, i, this);
                    var r = i.getAttribute("data-" + t.FILTER_ATTRIBUTE_KEY),
                        s = this.options.delimeter ? r.split(this.options.delimeter) : JSON.parse(r);
                    return Array.isArray(e) ? this.options.filterMode === t.FilterMode.ANY ? e.some(n) : e.every(n) : b(s, e)
                }
            }, {
                key: "_toggleFilterClasses",
                value: function (t) {
                    var e = t.visible,
                        i = t.hidden;
                    e.forEach(function (t) {
                        t.show()
                    }), i.forEach(function (t) {
                        t.hide()
                    })
                }
            }, {
                key: "_initItems",
                value: function () {
                    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.items).forEach(function (t) {
                        t.init()
                    })
                }
            }, {
                key: "_disposeItems",
                value: function () {
                    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.items).forEach(function (t) {
                        t.dispose()
                    })
                }
            }, {
                key: "_updateItemCount",
                value: function () {
                    this.visibleItems = this._getFilteredItems().length
                }
            }, {
                key: "_setTransitions",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.items,
                        e = this.options.speed,
                        i = this.options.easing,
                        n = this.options.useTransforms ? "transform " + e + "ms " + i + ", opacity " + e + "ms " + i : "top " + e + "ms " + i + ", left " + e + "ms " + i + ", opacity " + e + "ms " + i;
                    t.forEach(function (t) {
                        t.element.style.transition = n
                    })
                }
            }, {
                key: "_getItems",
                value: function () {
                    var t = this;
                    return v(this.element.children).filter(function (e) {
                        return k(e, t.options.itemSelector)
                    }).map(function (t) {
                        return new M(t)
                    })
                }
            }, {
                key: "_updateItemsOrder",
                value: function () {
                    var t = this.element.children;
                    this.items = a(this.items, {
                        by: function (e) {
                            return Array.prototype.indexOf.call(t, e)
                        }
                    })
                }
            }, {
                key: "_getFilteredItems",
                value: function () {
                    return this.items.filter(function (t) {
                        return t.isVisible
                    })
                }
            }, {
                key: "_getConcealedItems",
                value: function () {
                    return this.items.filter(function (t) {
                        return !t.isVisible
                    })
                }
            }, {
                key: "_getColumnSize",
                value: function (e, i) {
                    var n = void 0;
                    return n = "function" == typeof this.options.columnWidth ? this.options.columnWidth(e) : this.useSizer ? t.getSize(this.options.sizer).width : this.options.columnWidth ? this.options.columnWidth : this.items.length > 0 ? t.getSize(this.items[0].element, !0).width : e, 0 === n && (n = e), n + i
                }
            }, {
                key: "_getGutterSize",
                value: function (t) {
                    return "function" == typeof this.options.gutterWidth ? this.options.gutterWidth(t) : this.useSizer ? s(this.options.sizer, "marginLeft") : this.options.gutterWidth
                }
            }, {
                key: "_setColumns",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.getSize(this.element).width,
                        i = this._getGutterSize(e),
                        n = this._getColumnSize(e, i),
                        r = (e + i) / n;
                    Math.abs(Math.round(r) - r) < this.options.columnThreshold && (r = Math.round(r)), this.cols = Math.max(Math.floor(r), 1), this.containerWidth = e, this.colWidth = n
                }
            }, {
                key: "_setContainerSize",
                value: function () {
                    this.element.style.height = this._getContainerSize() + "px"
                }
            }, {
                key: "_getContainerSize",
                value: function () {
                    return f(this.positions)
                }
            }, {
                key: "_getStaggerAmount",
                value: function (t) {
                    return Math.min(t * this.options.staggerAmount, this.options.staggerAmountMax)
                }
            }, {
                key: "_dispatch",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return !this.isDestroyed && (e.shuffle = this, !this.element.dispatchEvent(new CustomEvent(t, {
                        bubbles: !0,
                        cancelable: !1,
                        detail: e
                    })))
                }
            }, {
                key: "_resetCols",
                value: function () {
                    var t = this.cols;
                    for (this.positions = []; t;) t -= 1, this.positions.push(0)
                }
            }, {
                key: "_layout",
                value: function (e) {
                    var i = this,
                        n = 0;
                    e.forEach(function (e) {
                        function r() {
                            e.element.style.transitionDelay = "", e.applyCss(M.Css.VISIBLE.after)
                        }
                        var s = e.point,
                            o = e.scale,
                            a = t.getSize(e.element, !0),
                            l = i._getItemPosition(a);
                        if (D.equals(s, l) && o === M.Scale.VISIBLE) return e.applyCss(M.Css.VISIBLE.before), void r();
                        e.point = l, e.scale = M.Scale.VISIBLE;
                        var u = x(M.Css.VISIBLE.before);
                        u.transitionDelay = i._getStaggerAmount(n) + "ms", i._queue.push({
                            item: e,
                            styles: u,
                            callback: r
                        }), n += 1
                    })
                }
            }, {
                key: "_getItemPosition",
                value: function (t) {
                    return p({
                        itemSize: t,
                        positions: this.positions,
                        gridSize: this.colWidth,
                        total: this.cols,
                        threshold: this.options.columnThreshold,
                        buffer: this.options.buffer
                    })
                }
            }, {
                key: "_shrink",
                value: function () {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getConcealedItems(),
                        i = 0;
                    e.forEach(function (e) {
                        function n() {
                            e.applyCss(M.Css.HIDDEN.after)
                        }
                        if (e.scale === M.Scale.HIDDEN) return e.applyCss(M.Css.HIDDEN.before), void n();
                        e.scale = M.Scale.HIDDEN;
                        var r = x(M.Css.HIDDEN.before);
                        r.transitionDelay = t._getStaggerAmount(i) + "ms", t._queue.push({
                            item: e,
                            styles: r,
                            callback: n
                        }), i += 1
                    })
                }
            }, {
                key: "_handleResize",
                value: function () {
                    if (this.isEnabled && !this.isDestroyed) {
                        t.getSize(this.element).width !== this.containerWidth && this.update()
                    }
                }
            }, {
                key: "_getStylesForTransition",
                value: function (t) {
                    var e = t.item,
                        i = t.styles;
                    i.transitionDelay || (i.transitionDelay = "0ms");
                    var n = e.point.x,
                        r = e.point.y;
                    return this.options.useTransforms ? i.transform = "translate(" + n + "px, " + r + "px) scale(" + e.scale + ")" : (i.left = n + "px", i.top = r + "px"), i
                }
            }, {
                key: "_whenTransitionDone",
                value: function (t, e, i) {
                    var n = h(t, function (t) {
                        e(), i(null, t)
                    });
                    this._transitions.push(n)
                }
            }, {
                key: "_getTransitionFunction",
                value: function (t) {
                    var e = this;
                    return function (i) {
                        t.item.applyCss(e._getStylesForTransition(t)), e._whenTransitionDone(t.item.element, t.callback, i)
                    }
                }
            }, {
                key: "_processQueue",
                value: function () {
                    this.isTransitioning && this._cancelMovement();
                    var t = this.options.speed > 0,
                        e = this._queue.length > 0;
                    e && t && this.isInitialized ? this._startTransitions(this._queue) : e ? (this._styleImmediately(this._queue), this._dispatchLayout()) : this._dispatchLayout(), this._queue.length = 0
                }
            }, {
                key: "_startTransitions",
                value: function (t) {
                    var e = this;
                    this.isTransitioning = !0;
                    var i = t.map(function (t) {
                        return e._getTransitionFunction(t)
                    });
                    T(i, this._movementFinished.bind(this))
                }
            }, {
                key: "_cancelMovement",
                value: function () {
                    this._transitions.forEach(u), this._transitions.length = 0, this.isTransitioning = !1
                }
            }, {
                key: "_styleImmediately",
                value: function (e) {
                    var i = this;
                    if (e.length) {
                        var n = e.map(function (t) {
                            return t.item.element
                        });
                        t._skipTransitions(n, function () {
                            e.forEach(function (t) {
                                t.item.applyCss(i._getStylesForTransition(t)), t.callback()
                            })
                        })
                    }
                }
            }, {
                key: "_movementFinished",
                value: function () {
                    this._transitions.length = 0, this.isTransitioning = !1, this._dispatchLayout()
                }
            }, {
                key: "_dispatchLayout",
                value: function () {
                    this._dispatch(t.EventType.LAYOUT)
                }
            }, {
                key: "filter",
                value: function (e, i) {
                    this.isEnabled && ((!e || e && 0 === e.length) && (e = t.ALL_ITEMS), this._filter(e), this._shrink(), this._updateItemCount(), this.sort(i))
                }
            }, {
                key: "sort",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastSort;
                    if (this.isEnabled) {
                        this._resetCols();
                        var e = this._getFilteredItems();
                        e = a(e, t), this._layout(e), this._processQueue(), this._setContainerSize(), this.lastSort = t
                    }
                }
            }, {
                key: "update",
                value: function (t) {
                    this.isEnabled && (t || this._setColumns(), this.sort())
                }
            }, {
                key: "layout",
                value: function () {
                    this.update(!0)
                }
            }, {
                key: "add",
                value: function (t) {
                    var e = w(t).map(function (t) {
                        return new M(t)
                    });
                    this._initItems(e), this._setTransitions(e), this.items = this.items.concat(e), this._updateItemsOrder(), this.filter(this.lastFilter)
                }
            }, {
                key: "disable",
                value: function () {
                    this.isEnabled = !1
                }
            }, {
                key: "enable",
                value: function (t) {
                    this.isEnabled = !0, !1 !== t && this.update()
                }
            }, {
                key: "remove",
                value: function (e) {
                    var i = this;
                    if (e.length) {
                        var n = w(e),
                            r = n.map(function (t) {
                                return i.getItemByElement(t)
                            }).filter(function (t) {
                                return !!t
                            }),
                            s = function e() {
                                i.element.removeEventListener(t.EventType.LAYOUT, e), i._disposeItems(r), n.forEach(function (t) {
                                    t.parentNode.removeChild(t)
                                }), i._dispatch(t.EventType.REMOVED, {
                                    collection: n
                                })
                            };
                        this._toggleFilterClasses({
                            visible: [],
                            hidden: r
                        }), this._shrink(r), this.sort(), this.items = this.items.filter(function (t) {
                            return !b(r, t)
                        }), this._updateItemCount(), this.element.addEventListener(t.EventType.LAYOUT, s)
                    }
                }
            }, {
                key: "getItemByElement",
                value: function (t) {
                    for (var e = this.items.length - 1; e >= 0; e--)
                        if (this.items[e].element === t) return this.items[e];
                    return null
                }
            }, {
                key: "destroy",
                value: function () {
                    this._cancelMovement(), window.removeEventListener("resize", this._onResize), this.element.classList.remove("shuffle"), this.element.removeAttribute("style"), this._disposeItems(), this.items = null, this.options.sizer = null, this.element = null, this._transitions = null, this.isDestroyed = !0
                }
            }], [{
                key: "getSize",
                value: function (t, e) {
                    var i = window.getComputedStyle(t, null),
                        n = s(t, "width", i),
                        r = s(t, "height", i);
                    if (e) {
                        var o = s(t, "marginLeft", i),
                            a = s(t, "marginRight", i),
                            l = s(t, "marginTop", i),
                            u = s(t, "marginBottom", i);
                        n += o + a, r += l + u
                    }
                    return {
                        width: n,
                        height: r
                    }
                }
            }, {
                key: "_skipTransitions",
                value: function (t, e) {
                    var i = t.map(function (t) {
                        var e = t.style,
                            i = e.transitionDuration,
                            n = e.transitionDelay;
                        return e.transitionDuration = "0ms", e.transitionDelay = "0ms", {
                            duration: i,
                            delay: n
                        }
                    });
                    e(), t[0].offsetWidth, t.forEach(function (t, e) {
                        t.style.transitionDuration = i[e].duration, t.style.transitionDelay = i[e].delay
                    })
                }
            }]), t
        }();
    return j.ShuffleItem = M, j.ALL_ITEMS = "all", j.FILTER_ATTRIBUTE_KEY = "groups", j.EventType = {
        LAYOUT: "shuffle:layout",
        REMOVED: "shuffle:removed"
    }, j.Classes = z, j.FilterMode = {
        ANY: "any",
        ALL: "all"
    }, j.options = {
        group: j.ALL_ITEMS,
        speed: 250,
        easing: "ease",
        itemSelector: "*",
        sizer: null,
        gutterWidth: 0,
        columnWidth: 0,
        delimeter: null,
        buffer: 0,
        columnThreshold: .01,
        initialSort: null,
        throttle: I,
        throttleTime: 300,
        staggerAmount: 15,
        staggerAmountMax: 250,
        useTransforms: !0,
        filterMode: j.FilterMode.ANY
    }, j.__Point = D, j.__sorter = a, j.__getColumnSpan = d, j.__getAvailablePositions = g, j.__getShortColumn = m, j
}),
function (t) {
    function e(t, n) {
        if (t = t || "", n = n || {}, t instanceof e) return t;
        if (!(this instanceof e)) return new e(t, n);
        var r = i(t);
        this._originalInput = t, this._r = r.r, this._g = r.g, this._b = r.b, this._a = r.a, this._roundA = W(100 * this._a) / 100, this._format = n.format || r.format, this._gradientType = n.gradientType, this._r < 1 && (this._r = W(this._r)), this._g < 1 && (this._g = W(this._g)), this._b < 1 && (this._b = W(this._b)), this._ok = r.ok, this._tc_id = O++
    }

    function i(t) {
        var e = {
                r: 0,
                g: 0,
                b: 0
            },
            i = 1,
            r = null,
            o = null,
            l = null,
            u = !1,
            h = !1;
        return "string" == typeof t && (t = M(t)), "object" == typeof t && (B(t.r) && B(t.g) && B(t.b) ? (e = n(t.r, t.g, t.b), u = !0, h = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : B(t.h) && B(t.s) && B(t.v) ? (r = L(t.s), o = L(t.v), e = a(t.h, r, o), u = !0, h = "hsv") : B(t.h) && B(t.s) && B(t.l) && (r = L(t.s), l = L(t.l), e = s(t.h, r, l), u = !0, h = "hsl"), t.hasOwnProperty("a") && (i = t.a)), i = E(i), {
            ok: u,
            format: t.format || h,
            r: q(255, P(e.r, 0)),
            g: q(255, P(e.g, 0)),
            b: q(255, P(e.b, 0)),
            a: i
        }
    }

    function n(t, e, i) {
        return {
            r: 255 * w(t, 255),
            g: 255 * w(e, 255),
            b: 255 * w(i, 255)
        }
    }

    function r(t, e, i) {
        t = w(t, 255), e = w(e, 255), i = w(i, 255);
        var n, r, s = P(t, e, i),
            o = q(t, e, i),
            a = (s + o) / 2;
        if (s == o) n = r = 0;
        else {
            var l = s - o;
            switch (r = a > .5 ? l / (2 - s - o) : l / (s + o), s) {
                case t:
                    n = (e - i) / l + (e < i ? 6 : 0);
                    break;
                case e:
                    n = (i - t) / l + 2;
                    break;
                case i:
                    n = (t - e) / l + 4
            }
            n /= 6
        }
        return {
            h: n,
            s: r,
            l: a
        }
    }

    function s(t, e, i) {
        function n(t, e, i) {
            return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        var r, s, o;
        if (t = w(t, 360), e = w(e, 100), i = w(i, 100), 0 === e) r = s = o = i;
        else {
            var a = i < .5 ? i * (1 + e) : i + e - i * e,
                l = 2 * i - a;
            r = n(l, a, t + 1 / 3), s = n(l, a, t), o = n(l, a, t - 1 / 3)
        }
        return {
            r: 255 * r,
            g: 255 * s,
            b: 255 * o
        }
    }

    function o(t, e, i) {
        t = w(t, 255), e = w(e, 255), i = w(i, 255);
        var n, r, s = P(t, e, i),
            o = q(t, e, i),
            a = s,
            l = s - o;
        if (r = 0 === s ? 0 : l / s, s == o) n = 0;
        else {
            switch (s) {
                case t:
                    n = (e - i) / l + (e < i ? 6 : 0);
                    break;
                case e:
                    n = (i - t) / l + 2;
                    break;
                case i:
                    n = (t - e) / l + 4
            }
            n /= 6
        }
        return {
            h: n,
            s: r,
            v: a
        }
    }

    function a(e, i, n) {
        e = 6 * w(e, 360), i = w(i, 100), n = w(n, 100);
        var r = t.floor(e),
            s = e - r,
            o = n * (1 - i),
            a = n * (1 - s * i),
            l = n * (1 - (1 - s) * i),
            u = r % 6;
        return {
            r: 255 * [n, a, o, o, l, n][u],
            g: 255 * [l, n, n, a, o, o][u],
            b: 255 * [o, o, l, n, n, a][u]
        }
    }

    function l(t, e, i, n) {
        var r = [F(W(t).toString(16)), F(W(e).toString(16)), F(W(i).toString(16))];
        return n && r[0].charAt(0) == r[0].charAt(1) && r[1].charAt(0) == r[1].charAt(1) && r[2].charAt(0) == r[2].charAt(1) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("")
    }

    function u(t, e, i, n, r) {
        var s = [F(W(t).toString(16)), F(W(e).toString(16)), F(W(i).toString(16)), F(D(n))];
        return r && s[0].charAt(0) == s[0].charAt(1) && s[1].charAt(0) == s[1].charAt(1) && s[2].charAt(0) == s[2].charAt(1) && s[3].charAt(0) == s[3].charAt(1) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join("")
    }

    function h(t, e, i, n) {
        return [F(D(n)), F(W(t).toString(16)), F(W(e).toString(16)), F(W(i).toString(16))].join("")
    }

    function f(t, i) {
        i = 0 === i ? 0 : i || 10;
        var n = e(t).toHsl();
        return n.s -= i / 100, n.s = x(n.s), e(n)
    }

    function c(t, i) {
        i = 0 === i ? 0 : i || 10;
        var n = e(t).toHsl();
        return n.s += i / 100, n.s = x(n.s), e(n)
    }

    function d(t) {
        return e(t).desaturate(100)
    }

    function g(t, i) {
        i = 0 === i ? 0 : i || 10;
        var n = e(t).toHsl();
        return n.l += i / 100, n.l = x(n.l), e(n)
    }

    function m(t, i) {
        i = 0 === i ? 0 : i || 10;
        var n = e(t).toRgb();
        return n.r = P(0, q(255, n.r - W(-i / 100 * 255))), n.g = P(0, q(255, n.g - W(-i / 100 * 255))), n.b = P(0, q(255, n.b - W(-i / 100 * 255))), e(n)
    }

    function p(t, i) {
        i = 0 === i ? 0 : i || 10;
        var n = e(t).toHsl();
        return n.l -= i / 100, n.l = x(n.l), e(n)
    }

    function v(t, i) {
        var n = e(t).toHsl(),
            r = (n.h + i) % 360;
        return n.h = r < 0 ? 360 + r : r, e(n)
    }

    function b(t) {
        var i = e(t).toHsl();
        return i.h = (i.h + 180) % 360, e(i)
    }

    function y(t) {
        var i = e(t).toHsl(),
            n = i.h;
        return [e(t), e({
            h: (n + 120) % 360,
            s: i.s,
            l: i.l
        }), e({
            h: (n + 240) % 360,
            s: i.s,
            l: i.l
        })]
    }

    function _(t) {
        var i = e(t).toHsl(),
            n = i.h;
        return [e(t), e({
            h: (n + 90) % 360,
            s: i.s,
            l: i.l
        }), e({
            h: (n + 180) % 360,
            s: i.s,
            l: i.l
        }), e({
            h: (n + 270) % 360,
            s: i.s,
            l: i.l
        })]
    }

    function S(t) {
        var i = e(t).toHsl(),
            n = i.h;
        return [e(t), e({
            h: (n + 72) % 360,
            s: i.s,
            l: i.l
        }), e({
            h: (n + 216) % 360,
            s: i.s,
            l: i.l
        })]
    }

    function A(t, i, n) {
        i = i || 6, n = n || 30;
        var r = e(t).toHsl(),
            s = 360 / n,
            o = [e(t)];
        for (r.h = (r.h - (s * i >> 1) + 720) % 360; --i;) r.h = (r.h + s) % 360, o.push(e(r));
        return o
    }

    function k(t, i) {
        i = i || 6;
        for (var n = e(t).toHsv(), r = n.h, s = n.s, o = n.v, a = [], l = 1 / i; i--;) a.push(e({
            h: r,
            s: s,
            v: o
        })), o = (o + l) % 1;
        return a
    }

    function E(t) {
        return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t
    }

    function w(e, i) {
        I(e) && (e = "100%");
        var n = T(e);
        return e = q(i, P(0, parseFloat(e))), n && (e = parseInt(e * i, 10) / 100), t.abs(e - i) < 1e-6 ? 1 : e % i / parseFloat(i)
    }

    function x(t) {
        return q(1, P(0, t))
    }

    function C(t) {
        return parseInt(t, 16)
    }

    function I(t) {
        return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
    }

    function T(t) {
        return "string" == typeof t && -1 != t.indexOf("%")
    }

    function F(t) {
        return 1 == t.length ? "0" + t : "" + t
    }

    function L(t) {
        return t <= 1 && (t = 100 * t + "%"), t
    }

    function D(e) {
        return t.round(255 * parseFloat(e)).toString(16)
    }

    function z(t) {
        return C(t) / 255
    }

    function B(t) {
        return !!Y.CSS_UNIT.exec(t)
    }

    function M(t) {
        t = t.replace(R, "").replace(N, "").toLowerCase();
        var e = !1;
        if (U[t]) t = U[t], e = !0;
        else if ("transparent" == t) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        var i;
        return (i = Y.rgb.exec(t)) ? {
            r: i[1],
            g: i[2],
            b: i[3]
        } : (i = Y.rgba.exec(t)) ? {
            r: i[1],
            g: i[2],
            b: i[3],
            a: i[4]
        } : (i = Y.hsl.exec(t)) ? {
            h: i[1],
            s: i[2],
            l: i[3]
        } : (i = Y.hsla.exec(t)) ? {
            h: i[1],
            s: i[2],
            l: i[3],
            a: i[4]
        } : (i = Y.hsv.exec(t)) ? {
            h: i[1],
            s: i[2],
            v: i[3]
        } : (i = Y.hsva.exec(t)) ? {
            h: i[1],
            s: i[2],
            v: i[3],
            a: i[4]
        } : (i = Y.hex8.exec(t)) ? {
            r: C(i[1]),
            g: C(i[2]),
            b: C(i[3]),
            a: z(i[4]),
            format: e ? "name" : "hex8"
        } : (i = Y.hex6.exec(t)) ? {
            r: C(i[1]),
            g: C(i[2]),
            b: C(i[3]),
            format: e ? "name" : "hex"
        } : (i = Y.hex4.exec(t)) ? {
            r: C(i[1] + "" + i[1]),
            g: C(i[2] + "" + i[2]),
            b: C(i[3] + "" + i[3]),
            a: z(i[4] + "" + i[4]),
            format: e ? "name" : "hex8"
        } : !!(i = Y.hex3.exec(t)) && {
            r: C(i[1] + "" + i[1]),
            g: C(i[2] + "" + i[2]),
            b: C(i[3] + "" + i[3]),
            format: e ? "name" : "hex"
        }
    }

    function H(t) {
        var e, i;
        return t = t || {
            level: "AA",
            size: "small"
        }, e = (t.level || "AA").toUpperCase(), i = (t.size || "small").toLowerCase(), "AA" !== e && "AAA" !== e && (e = "AA"), "small" !== i && "large" !== i && (i = "small"), {
            level: e,
            size: i
        }
    }
    var R = /^\s+/,
        N = /\s+$/,
        O = 0,
        W = t.round,
        q = t.min,
        P = t.max,
        V = t.random;
    e.prototype = {
        isDark: function () {
            return this.getBrightness() < 128
        },
        isLight: function () {
            return !this.isDark()
        },
        isValid: function () {
            return this._ok
        },
        getOriginalInput: function () {
            return this._originalInput
        },
        getFormat: function () {
            return this._format
        },
        getAlpha: function () {
            return this._a
        },
        getBrightness: function () {
            var t = this.toRgb();
            return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
        },
        getLuminance: function () {
            var e, i, n, r, s, o, a = this.toRgb();
            return e = a.r / 255, i = a.g / 255, n = a.b / 255, r = e <= .03928 ? e / 12.92 : t.pow((e + .055) / 1.055, 2.4), s = i <= .03928 ? i / 12.92 : t.pow((i + .055) / 1.055, 2.4), o = n <= .03928 ? n / 12.92 : t.pow((n + .055) / 1.055, 2.4), .2126 * r + .7152 * s + .0722 * o
        },
        setAlpha: function (t) {
            return this._a = E(t), this._roundA = W(100 * this._a) / 100, this
        },
        toHsv: function () {
            var t = o(this._r, this._g, this._b);
            return {
                h: 360 * t.h,
                s: t.s,
                v: t.v,
                a: this._a
            }
        },
        toHsvString: function () {
            var t = o(this._r, this._g, this._b),
                e = W(360 * t.h),
                i = W(100 * t.s),
                n = W(100 * t.v);
            return 1 == this._a ? "hsv(" + e + ", " + i + "%, " + n + "%)" : "hsva(" + e + ", " + i + "%, " + n + "%, " + this._roundA + ")"
        },
        toHsl: function () {
            var t = r(this._r, this._g, this._b);
            return {
                h: 360 * t.h,
                s: t.s,
                l: t.l,
                a: this._a
            }
        },
        toHslString: function () {
            var t = r(this._r, this._g, this._b),
                e = W(360 * t.h),
                i = W(100 * t.s),
                n = W(100 * t.l);
            return 1 == this._a ? "hsl(" + e + ", " + i + "%, " + n + "%)" : "hsla(" + e + ", " + i + "%, " + n + "%, " + this._roundA + ")"
        },
        toHex: function (t) {
            return l(this._r, this._g, this._b, t)
        },
        toHexString: function (t) {
            return "#" + this.toHex(t)
        },
        toHex8: function (t) {
            return u(this._r, this._g, this._b, this._a, t)
        },
        toHex8String: function (t) {
            return "#" + this.toHex8(t)
        },
        toRgb: function () {
            return {
                r: W(this._r),
                g: W(this._g),
                b: W(this._b),
                a: this._a
            }
        },
        toRgbString: function () {
            return 1 == this._a ? "rgb(" + W(this._r) + ", " + W(this._g) + ", " + W(this._b) + ")" : "rgba(" + W(this._r) + ", " + W(this._g) + ", " + W(this._b) + ", " + this._roundA + ")"
        },
        toPercentageRgb: function () {
            return {
                r: W(100 * w(this._r, 255)) + "%",
                g: W(100 * w(this._g, 255)) + "%",
                b: W(100 * w(this._b, 255)) + "%",
                a: this._a
            }
        },
        toPercentageRgbString: function () {
            return 1 == this._a ? "rgb(" + W(100 * w(this._r, 255)) + "%, " + W(100 * w(this._g, 255)) + "%, " + W(100 * w(this._b, 255)) + "%)" : "rgba(" + W(100 * w(this._r, 255)) + "%, " + W(100 * w(this._g, 255)) + "%, " + W(100 * w(this._b, 255)) + "%, " + this._roundA + ")"
        },
        toName: function () {
            return 0 === this._a ? "transparent" : !(this._a < 1) && (j[l(this._r, this._g, this._b, !0)] || !1)
        },
        toFilter: function (t) {
            var i = "#" + h(this._r, this._g, this._b, this._a),
                n = i,
                r = this._gradientType ? "GradientType = 1, " : "";
            if (t) {
                var s = e(t);
                n = "#" + h(s._r, s._g, s._b, s._a)
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + i + ",endColorstr=" + n + ")"
        },
        toString: function (t) {
            var e = !!t;
            t = t || this._format;
            var i = !1,
                n = this._a < 1 && this._a >= 0;
            return e || !n || "hex" !== t && "hex6" !== t && "hex3" !== t && "hex4" !== t && "hex8" !== t && "name" !== t ? ("rgb" === t && (i = this.toRgbString()), "prgb" === t && (i = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (i = this.toHexString()), "hex3" === t && (i = this.toHexString(!0)), "hex4" === t && (i = this.toHex8String(!0)), "hex8" === t && (i = this.toHex8String()), "name" === t && (i = this.toName()), "hsl" === t && (i = this.toHslString()), "hsv" === t && (i = this.toHsvString()), i || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString()
        },
        clone: function () {
            return e(this.toString())
        },
        _applyModification: function (t, e) {
            var i = t.apply(null, [this].concat([].slice.call(e)));
            return this._r = i._r, this._g = i._g, this._b = i._b, this.setAlpha(i._a), this
        },
        lighten: function () {
            return this._applyModification(g, arguments)
        },
        brighten: function () {
            return this._applyModification(m, arguments)
        },
        darken: function () {
            return this._applyModification(p, arguments)
        },
        desaturate: function () {
            return this._applyModification(f, arguments)
        },
        saturate: function () {
            return this._applyModification(c, arguments)
        },
        greyscale: function () {
            return this._applyModification(d, arguments)
        },
        spin: function () {
            return this._applyModification(v, arguments)
        },
        _applyCombination: function (t, e) {
            return t.apply(null, [this].concat([].slice.call(e)))
        },
        analogous: function () {
            return this._applyCombination(A, arguments)
        },
        complement: function () {
            return this._applyCombination(b, arguments)
        },
        monochromatic: function () {
            return this._applyCombination(k, arguments)
        },
        splitcomplement: function () {
            return this._applyCombination(S, arguments)
        },
        triad: function () {
            return this._applyCombination(y, arguments)
        },
        tetrad: function () {
            return this._applyCombination(_, arguments)
        }
    }, e.fromRatio = function (t, i) {
        if ("object" == typeof t) {
            var n = {};
            for (var r in t) t.hasOwnProperty(r) && (n[r] = "a" === r ? t[r] : L(t[r]));
            t = n
        }
        return e(t, i)
    }, e.equals = function (t, i) {
        return !(!t || !i) && e(t).toRgbString() == e(i).toRgbString()
    }, e.random = function () {
        return e.fromRatio({
            r: V(),
            g: V(),
            b: V()
        })
    }, e.mix = function (t, i, n) {
        n = 0 === n ? 0 : n || 50;
        var r = e(t).toRgb(),
            s = e(i).toRgb(),
            o = n / 100;
        return e({
            r: (s.r - r.r) * o + r.r,
            g: (s.g - r.g) * o + r.g,
            b: (s.b - r.b) * o + r.b,
            a: (s.a - r.a) * o + r.a
        })
    }, e.readability = function (i, n) {
        var r = e(i),
            s = e(n);
        return (t.max(r.getLuminance(), s.getLuminance()) + .05) / (t.min(r.getLuminance(), s.getLuminance()) + .05)
    }, e.isReadable = function (t, i, n) {
        var r, s, o = e.readability(t, i);
        switch (s = !1, r = H(n), r.level + r.size) {
            case "AAsmall":
            case "AAAlarge":
                s = o >= 4.5;
                break;
            case "AAlarge":
                s = o >= 3;
                break;
            case "AAAsmall":
                s = o >= 7
        }
        return s
    }, e.mostReadable = function (t, i, n) {
        var r, s, o, a, l = null,
            u = 0;
        n = n || {}, s = n.includeFallbackColors, o = n.level, a = n.size;
        for (var h = 0; h < i.length; h++)(r = e.readability(t, i[h])) > u && (u = r, l = e(i[h]));
        return e.isReadable(t, l, {
            level: o,
            size: a
        }) || !s ? l : (n.includeFallbackColors = !1, e.mostReadable(t, ["#fff", "#000"], n))
    };
    var U = e.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            rebeccapurple: "663399",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        },
        j = e.hexNames = function (t) {
            var e = {};
            for (var i in t) t.hasOwnProperty(i) && (e[t[i]] = i);
            return e
        }(U),
        Y = function () {
            var t = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
                e = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?",
                i = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?";
            return {
                CSS_UNIT: new RegExp(t),
                rgb: new RegExp("rgb" + e),
                rgba: new RegExp("rgba" + i),
                hsl: new RegExp("hsl" + e),
                hsla: new RegExp("hsla" + i),
                hsv: new RegExp("hsv" + e),
                hsva: new RegExp("hsva" + i),
                hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            }
        }();
    "undefined" != typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd ? define(function () {
        return e
    }) : window.tinycolor = e
}(Math), String.prototype.hashCode = function () {
    var t = 5381;
    for (i = 0; i < this.length; i++) char = this.charCodeAt(i), t = (t << 5) + t + char;
    return t >>> 0
};
var Color = tinycolor,
    Shuffle = window.shuffle,
    shuffle = new Shuffle(document.querySelector(".tile-container"), {
        group: shuffle.ALL_ITEMS,
        itemSelector: ".tile",
        gutterWidth: 16,
        columnWidth: 188,
        buffer: 1,
        delimeter: ",",
        useTransforms: !1
    }),
    filterTiles = function (t) {
        shuffle.filter(location.hash.slice(1))
    };
window.onhashchange = filterTiles;
var getUrlParts = function (t) {
        var e = {
                domain: "",
                before: "",
                after: ""
            },
            i = new URL(t),
            n = i.host;
        if (e.domain = n.replace(/^www\./i, ""), n.match(/^\d+\.\d+\.\d+\.\d+$/)) return e.domain = n, e;
        if (n.match(/^(\d+\.\d+\.\d+\.\d+)(:(\d+))?$/)) return r = n.match(/^(\d+\.\d+\.\d+\.\d+)(:(\d+))?$/), e.domain = r[1], e.after = r[3], e;
        for (var r = e.domain.split("."), s = 0, o = 1; o < r.length - 1; o++) r[o].length > r[s].length && (s = o);
        return e.domain = r[s], e.before = r.slice(0, s).join("."), e.after = r.slice(s + 1).join("."), !e.domain && i.pathname && (e.domain = i.pathname.split("/").filter(Boolean).pop()), e
    },
    fitText = function (t, e, i) {
        var n = document.createElement("div");
        n.style.visibility = "hidden", n.style.position = "absolute", document.body.appendChild(n);
        var r = 40;
        for (n.innerHTML = t, n.style.fontSize = r; n.offsetWidth > e;) r -= 1, n.style.fontSize = r;
        var s = {
            size: r,
            width: n.offsetWidth,
            height: n.offsetHeight
        };
        return n.remove(), s
    },
    getTileColor = function (t) {
        var e = ["#B42424", "#C83D1D", "#BB7231", "#E06B00", "#55931F", "#1C941B", "#189365", "#189196", "#2D85A4", "#2B6C90", "#205396", "#39448F", "#55338E", "#683089", "#963A97", "#A43343", "#982F2F", "#D30000", "#E54C29", "#DA7E2C", "#73B43A", "#3AB43A", "#3AB487", "#3AB0B4", "#47A6C7", "#3A88B4", "#3A6FB4", "#3A4AB4", "#673AB4", "#863AB4", "#C846C9", "#C44A5B", "#AA4444", "#E84545", "#FF6946", "#EC9344", "#3CA4DF", "#3A83E3", "#4056E3", "#9058F0", "#B467E2", "#DF7CDF", "#E5576B", "#D35A5A", "#3DC53D", "#2DBBB1", "#5E95D5", "#5E5BE7", "#1B7EFF", "#5F74FF", "#8A45FF", "#B856F3", "#DD66DD"];
        return e[t.hashCode() % e.length]
    },
    renderImgTile = function (t) {
        t.innerHTML = "";
        var e = t.getAttribute("data-bg-color");
        e || (e = "rgba(255,255,255,.8)"), e = Color(e), e.setAlpha(.8), t.style.backgroundColor = e;
        var i = new Image;
        i.src = t.getAttribute("data-img"), i.className = "logo", t.appendChild(i)
    },
    renderPlainTile = function (t) {
        var e = getUrlParts(t.getAttribute("data-url"));
        t.innerHTML = "";
        var i = t.getAttribute("data-bg-color");
        i || (i = "rgba(255,255,255,.8)"), i = Color(i), i.setAlpha(.8), t.style.backgroundColor = i;
        var n = t.getAttribute("data-txt-color");
        n || (n = getTileColor(e.domain), i.isDark() && (t.style.color = "white")), n = Color(n), t.style.color = n;
        var r = fitText(e.domain, 172, 120),
            s = document.createElement("div");
        s.style.fontSize = r.size, s.style.position = "absolute", t.appendChild(s);
        var o = document.createElement("div");
        o.innerHTML = e.before, o.style.top = .35 * r.size - 10, o.className = "pre-domain", o.style.textShadow = "-1px 0 " + i + ",0 1px " + i + ",1px 0 " + i + ",0 -1px " + i;
        var a = document.createElement("div");
        a.innerHTML = e.after, a.style.top = r.size - .05 * r.size, a.className = "post-domain", a.style.textShadow = "-1px 0 " + i + ",0 1px " + i + ",1px 0 " + i + ",0 -1px " + i, s.appendChild(o), s.appendChild(document.createTextNode(e.domain)), s.appendChild(a);
        var l = 64 - s.clientHeight / 2,
            u = 106 - s.clientWidth / 2;
        s.style.top = l, s.style.left = u
    },
    renderTiles = function () {
        for (var t = document.getElementsByClassName("tile-box"), e = 0; e < t.length; e++) try {
            t.item(e).getAttribute("data-img") ? renderImgTile(t.item(e)) : renderPlainTile(t.item(e))
        } catch (t) {
            console.log("err:" + t)
        }
    };
renderTiles();
var getBackgroundImages = function () {
        var t = document.getElementsByTagName("body"),
            e = [],
            i = t[0].getAttribute("data-backgrounds");
        return i && (e = i.split(/[\s,]+/).filter(Boolean)), e
    },
    preloadBackgrounds = function () {
        for (var t = getBackgroundImages(), e = 0; e < t.length; e++)(new Image).src = t[e]
    },
    rotateBackground = function (t) {
        void 0 !== t && null !== t || (t = 0);
        var e = getBackgroundImages();
        e.length > 0 && (t = (t + 1) % e.length, document.body.style.background = 'url("' + e[t] + '")', document.body.style.backgroundSize = "cover", e.length > 1 && setTimeout(rotateBackground.bind(null, t), 3e4))
    };
preloadBackgrounds(), rotateBackground();