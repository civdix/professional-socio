function Uc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Fc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Bc = { exports: {} },
  Mo = {},
  jc = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var di = Symbol.for("react.element"),
  Yh = Symbol.for("react.portal"),
  Xh = Symbol.for("react.fragment"),
  Jh = Symbol.for("react.strict_mode"),
  Gh = Symbol.for("react.profiler"),
  Zh = Symbol.for("react.provider"),
  bh = Symbol.for("react.context"),
  ep = Symbol.for("react.forward_ref"),
  tp = Symbol.for("react.suspense"),
  np = Symbol.for("react.memo"),
  rp = Symbol.for("react.lazy"),
  ba = Symbol.iterator;
function ip(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ba && e[ba]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Vc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  $c = Object.assign,
  Hc = {};
function ur(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Hc),
    (this.updater = n || Vc));
}
ur.prototype.isReactComponent = {};
ur.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ur.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wc() {}
Wc.prototype = ur.prototype;
function js(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Hc),
    (this.updater = n || Vc));
}
var Vs = (js.prototype = new Wc());
Vs.constructor = js;
$c(Vs, ur.prototype);
Vs.isPureReactComponent = !0;
var eu = Array.isArray,
  Qc = Object.prototype.hasOwnProperty,
  $s = { current: null },
  Kc = { key: !0, ref: !0, __self: !0, __source: !0 };
function qc(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Qc.call(t, r) && !Kc.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: di,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: $s.current,
  };
}
function op(e, t) {
  return {
    $$typeof: di,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === di;
}
function lp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var tu = /\/+/g;
function ll(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? lp("" + e.key)
    : t.toString(36);
}
function Wi(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case di:
          case Yh:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + ll(l, 0) : r),
      eu(i)
        ? ((n = ""),
          e != null && (n = e.replace(tu, "$&/") + "/"),
          Wi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Hs(i) &&
            (i = op(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(tu, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), eu(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + ll(o, s);
      l += Wi(o, t, n, a, i);
    }
  else if (((a = ip(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      ((o = o.value), (a = r + ll(o, s++)), (l += Wi(o, t, n, a, i)));
  else if (o === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return l;
}
function xi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Wi(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function sp(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ue = { current: null },
  Qi = { transition: null },
  ap = {
    ReactCurrentDispatcher: Ue,
    ReactCurrentBatchConfig: Qi,
    ReactCurrentOwner: $s,
  };
Q.Children = {
  map: xi,
  forEach: function (e, t, n) {
    xi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      xi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      xi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Hs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
Q.Component = ur;
Q.Fragment = Xh;
Q.Profiler = Gh;
Q.PureComponent = js;
Q.StrictMode = Jh;
Q.Suspense = tp;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ap;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = $c({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = $s.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Qc.call(t, a) &&
        !Kc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: di, type: e.type, key: i, ref: o, props: r, _owner: l };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: bh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Zh, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = qc;
Q.createFactory = function (e) {
  var t = qc.bind(null, e);
  return ((t.type = e), t);
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: ep, render: e };
};
Q.isValidElement = Hs;
Q.lazy = function (e) {
  return { $$typeof: rp, _payload: { _status: -1, _result: e }, _init: sp };
};
Q.memo = function (e, t) {
  return { $$typeof: np, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = Qi.transition;
  Qi.transition = {};
  try {
    e();
  } finally {
    Qi.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Q.useCallback = function (e, t) {
  return Ue.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Ue.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Ue.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Ue.current.useEffect(e, t);
};
Q.useId = function () {
  return Ue.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return Ue.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return Ue.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Ue.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Ue.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return Ue.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return Ue.current.useRef(e);
};
Q.useState = function (e) {
  return Ue.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return Ue.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return Ue.current.useTransition();
};
Q.version = "18.2.0";
jc.exports = Q;
var k = jc.exports;
const up = Fc(k),
  cp = Uc({ __proto__: null, default: up }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fp = k,
  dp = Symbol.for("react.element"),
  hp = Symbol.for("react.fragment"),
  pp = Object.prototype.hasOwnProperty,
  mp = fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yc(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref));
  for (r in t) pp.call(t, r) && !yp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: dp,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: mp.current,
  };
}
Mo.Fragment = hp;
Mo.jsx = Yc;
Mo.jsxs = Yc;
Bc.exports = Mo;
var U = Bc.exports,
  Ul = {},
  Xc = { exports: {} },
  Ge = {},
  Jc = { exports: {} },
  Gc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, B) {
    var V = O.length;
    O.push(B);
    e: for (; 0 < V; ) {
      var J = (V - 1) >>> 1,
        ne = O[J];
      if (0 < i(ne, B)) ((O[J] = B), (O[V] = ne), (V = J));
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var B = O[0],
      V = O.pop();
    if (V !== B) {
      O[0] = V;
      e: for (var J = 0, ne = O.length, vt = ne >>> 1; J < vt; ) {
        var _e = 2 * (J + 1) - 1,
          at = O[_e],
          Ae = _e + 1,
          Ut = O[Ae];
        if (0 > i(at, V))
          Ae < ne && 0 > i(Ut, at)
            ? ((O[J] = Ut), (O[Ae] = V), (J = Ae))
            : ((O[J] = at), (O[_e] = V), (J = _e));
        else if (Ae < ne && 0 > i(Ut, V)) ((O[J] = Ut), (O[Ae] = V), (J = Ae));
        else break e;
      }
    }
    return B;
  }
  function i(O, B) {
    var V = O.sortIndex - B.sortIndex;
    return V !== 0 ? V : O.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    c = 1,
    h = null,
    p = 3,
    w = !1,
    E = !1,
    S = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(O) {
    for (var B = n(u); B !== null; ) {
      if (B.callback === null) r(u);
      else if (B.startTime <= O)
        (r(u), (B.sortIndex = B.expirationTime), t(a, B));
      else break;
      B = n(u);
    }
  }
  function C(O) {
    if (((S = !1), m(O), !E))
      if (n(a) !== null) ((E = !0), zt(P));
      else {
        var B = n(u);
        B !== null && oe(C, B.startTime - O);
      }
  }
  function P(O, B) {
    ((E = !1), S && ((S = !1), d(L), (L = -1)), (w = !0));
    var V = p;
    try {
      for (
        m(B), h = n(a);
        h !== null && (!(h.expirationTime > B) || (O && !Y()));
      ) {
        var J = h.callback;
        if (typeof J == "function") {
          ((h.callback = null), (p = h.priorityLevel));
          var ne = J(h.expirationTime <= B);
          ((B = e.unstable_now()),
            typeof ne == "function" ? (h.callback = ne) : h === n(a) && r(a),
            m(B));
        } else r(a);
        h = n(a);
      }
      if (h !== null) var vt = !0;
      else {
        var _e = n(u);
        (_e !== null && oe(C, _e.startTime - B), (vt = !1));
      }
      return vt;
    } finally {
      ((h = null), (p = V), (w = !1));
    }
  }
  var y = !1,
    x = null,
    L = -1,
    M = 5,
    I = -1;
  function Y() {
    return !(e.unstable_now() - I < M);
  }
  function he() {
    if (x !== null) {
      var O = e.unstable_now();
      I = O;
      var B = !0;
      try {
        B = x(!0, O);
      } finally {
        B ? ye() : ((y = !1), (x = null));
      }
    } else y = !1;
  }
  var ye;
  if (typeof f == "function")
    ye = function () {
      f(he);
    };
  else if (typeof MessageChannel < "u") {
    var be = new MessageChannel(),
      Tn = be.port2;
    ((be.port1.onmessage = he),
      (ye = function () {
        Tn.postMessage(null);
      }));
  } else
    ye = function () {
      R(he, 0);
    };
  function zt(O) {
    ((x = O), y || ((y = !0), ye()));
  }
  function oe(O, B) {
    L = R(function () {
      O(e.unstable_now());
    }, B);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      E || w || ((E = !0), zt(P));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (M = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (O) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = p;
      }
      var V = p;
      p = B;
      try {
        return O();
      } finally {
        p = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, B) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var V = p;
      p = O;
      try {
        return B();
      } finally {
        p = V;
      }
    }),
    (e.unstable_scheduleCallback = function (O, B, V) {
      var J = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? J + V : J))
          : (V = J),
        O)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = V + ne),
        (O = {
          id: c++,
          callback: B,
          priorityLevel: O,
          startTime: V,
          expirationTime: ne,
          sortIndex: -1,
        }),
        V > J
          ? ((O.sortIndex = V),
            t(u, O),
            n(a) === null &&
              O === n(u) &&
              (S ? (d(L), (L = -1)) : (S = !0), oe(C, V - J)))
          : ((O.sortIndex = ne), t(a, O), E || w || ((E = !0), zt(P))),
        O
      );
    }),
    (e.unstable_shouldYield = Y),
    (e.unstable_wrapCallback = function (O) {
      var B = p;
      return function () {
        var V = p;
        p = B;
        try {
          return O.apply(this, arguments);
        } finally {
          p = V;
        }
      };
    }));
})(Gc);
Jc.exports = Gc;
var gp = Jc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zc = k,
  Je = gp;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var bc = new Set(),
  qr = {};
function Rn(e, t) {
  (tr(e, t), tr(e + "Capture", t));
}
function tr(e, t) {
  for (qr[e] = t, e = 0; e < t.length; e++) bc.add(t[e]);
}
var Nt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Fl = Object.prototype.hasOwnProperty,
  vp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  nu = {},
  ru = {};
function wp(e) {
  return Fl.call(ru, e)
    ? !0
    : Fl.call(nu, e)
      ? !1
      : vp.test(e)
        ? (ru[e] = !0)
        : ((nu[e] = !0), !1);
}
function Sp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ep(e, t, n, r) {
  if (t === null || typeof t > "u" || Sp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, i, o, l) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l));
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Le[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Le[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Le[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Le[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Le[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Le[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Le[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ws = /[\-:]([a-z])/g;
function Qs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ws, Qs);
    Le[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ws, Qs);
    Le[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ws, Qs);
  Le[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Le[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Le.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Le[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ks(e, t, n, r) {
  var i = Le.hasOwnProperty(t) ? Le[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ep(t, n, i, r) && (n = null),
    r || i === null
      ? wp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var At = Zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ci = Symbol.for("react.element"),
  An = Symbol.for("react.portal"),
  In = Symbol.for("react.fragment"),
  qs = Symbol.for("react.strict_mode"),
  Bl = Symbol.for("react.profiler"),
  ef = Symbol.for("react.provider"),
  tf = Symbol.for("react.context"),
  Ys = Symbol.for("react.forward_ref"),
  jl = Symbol.for("react.suspense"),
  Vl = Symbol.for("react.suspense_list"),
  Xs = Symbol.for("react.memo"),
  Ht = Symbol.for("react.lazy"),
  nf = Symbol.for("react.offscreen"),
  iu = Symbol.iterator;
function vr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (iu && e[iu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  sl;
function Dr(e) {
  if (sl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      sl = (t && t[1]) || "";
    }
  return (
    `
` +
    sl +
    e
  );
}
var al = !1;
function ul(e, t) {
  if (!e || al) return "";
  al = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];
      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var a =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    ((al = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Dr(e) : "";
}
function kp(e) {
  switch (e.tag) {
    case 5:
      return Dr(e.type);
    case 16:
      return Dr("Lazy");
    case 13:
      return Dr("Suspense");
    case 19:
      return Dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = ul(e.type, !1)), e);
    case 11:
      return ((e = ul(e.type.render, !1)), e);
    case 1:
      return ((e = ul(e.type, !0)), e);
    default:
      return "";
  }
}
function $l(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case In:
      return "Fragment";
    case An:
      return "Portal";
    case Bl:
      return "Profiler";
    case qs:
      return "StrictMode";
    case jl:
      return "Suspense";
    case Vl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case tf:
        return (e.displayName || "Context") + ".Consumer";
      case ef:
        return (e._context.displayName || "Context") + ".Provider";
      case Ys:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Xs:
        return (
          (t = e.displayName || null),
          t !== null ? t : $l(e.type) || "Memo"
        );
      case Ht:
        ((t = e._payload), (e = e._init));
        try {
          return $l(e(t));
        } catch {}
    }
  return null;
}
function xp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return $l(t);
    case 8:
      return t === qs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function on(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function rf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Cp(e) {
  var t = rf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          ((r = "" + l), o.call(this, l));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function _i(e) {
  e._valueTracker || (e._valueTracker = Cp(e));
}
function of(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = rf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function lo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Hl(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ou(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = on(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function lf(e, t) {
  ((t = t.checked), t != null && Ks(e, "checked", t, !1));
}
function Wl(e, t) {
  lf(e, t);
  var n = on(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Ql(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ql(e, t.type, on(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function lu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Ql(e, t, n) {
  (t !== "number" || lo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mr = Array.isArray;
function Yn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + on(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Kl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function su(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (Mr(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: on(n) };
}
function sf(e, t) {
  var n = on(t.value),
    r = on(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function au(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function af(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ql(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? af(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ri,
  uf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ri = Ri || document.createElement("div"),
          Ri.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ri.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ur = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  _p = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ur).forEach(function (e) {
  _p.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ur[t] = Ur[e]));
  });
});
function cf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ur.hasOwnProperty(e) && Ur[e])
      ? ("" + t).trim()
      : t + "px";
}
function ff(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = cf(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var Rp = ue(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Yl(e, t) {
  if (t) {
    if (Rp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function Xl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Jl = null;
function Js(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Gl = null,
  Xn = null,
  Jn = null;
function uu(e) {
  if ((e = mi(e))) {
    if (typeof Gl != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Fo(t)), Gl(e.stateNode, e.type, t));
  }
}
function df(e) {
  Xn ? (Jn ? Jn.push(e) : (Jn = [e])) : (Xn = e);
}
function hf() {
  if (Xn) {
    var e = Xn,
      t = Jn;
    if (((Jn = Xn = null), uu(e), t)) for (e = 0; e < t.length; e++) uu(t[e]);
  }
}
function pf(e, t) {
  return e(t);
}
function mf() {}
var cl = !1;
function yf(e, t, n) {
  if (cl) return e(t, n);
  cl = !0;
  try {
    return pf(e, t, n);
  } finally {
    ((cl = !1), (Xn !== null || Jn !== null) && (mf(), hf()));
  }
}
function Xr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var Zl = !1;
if (Nt)
  try {
    var wr = {};
    (Object.defineProperty(wr, "passive", {
      get: function () {
        Zl = !0;
      },
    }),
      window.addEventListener("test", wr, wr),
      window.removeEventListener("test", wr, wr));
  } catch {
    Zl = !1;
  }
function Pp(e, t, n, r, i, o, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Fr = !1,
  so = null,
  ao = !1,
  bl = null,
  Tp = {
    onError: function (e) {
      ((Fr = !0), (so = e));
    },
  };
function Lp(e, t, n, r, i, o, l, s, a) {
  ((Fr = !1), (so = null), Pp.apply(Tp, arguments));
}
function Np(e, t, n, r, i, o, l, s, a) {
  if ((Lp.apply(this, arguments), Fr)) {
    if (Fr) {
      var u = so;
      ((Fr = !1), (so = null));
    } else throw Error(T(198));
    ao || ((ao = !0), (bl = u));
  }
}
function Pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function gf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function cu(e) {
  if (Pn(e) !== e) throw Error(T(188));
}
function Op(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return (cu(i), e);
        if (o === r) return (cu(i), t);
        o = o.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) ((n = i), (r = o));
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          ((l = !0), (n = i), (r = o));
          break;
        }
        if (s === r) {
          ((l = !0), (r = i), (n = o));
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            ((l = !0), (n = o), (r = i));
            break;
          }
          if (s === r) {
            ((l = !0), (r = o), (n = i));
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function vf(e) {
  return ((e = Op(e)), e !== null ? wf(e) : null);
}
function wf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Sf = Je.unstable_scheduleCallback,
  fu = Je.unstable_cancelCallback,
  Dp = Je.unstable_shouldYield,
  Mp = Je.unstable_requestPaint,
  me = Je.unstable_now,
  Ap = Je.unstable_getCurrentPriorityLevel,
  Gs = Je.unstable_ImmediatePriority,
  Ef = Je.unstable_UserBlockingPriority,
  uo = Je.unstable_NormalPriority,
  Ip = Je.unstable_LowPriority,
  kf = Je.unstable_IdlePriority,
  Ao = null,
  kt = null;
function zp(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function")
    try {
      kt.onCommitFiberRoot(Ao, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mt = Math.clz32 ? Math.clz32 : Bp,
  Up = Math.log,
  Fp = Math.LN2;
function Bp(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Up(e) / Fp) | 0)) | 0);
}
var Pi = 64,
  Ti = 4194304;
function Ar(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function co(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = Ar(s)) : ((o &= l), o !== 0 && (r = Ar(o)));
  } else ((l = n & ~i), l !== 0 ? (r = Ar(l)) : o !== 0 && (r = Ar(o)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - mt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function jp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Vp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var l = 31 - mt(o),
      s = 1 << l,
      a = i[l];
    (a === -1
      ? (!(s & n) || s & r) && (i[l] = jp(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s));
  }
}
function es(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function xf() {
  var e = Pi;
  return ((Pi <<= 1), !(Pi & 4194240) && (Pi = 64), e);
}
function fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hi(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mt(t)),
    (e[t] = n));
}
function $p(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - mt(n),
      o = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
  }
}
function Zs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - mt(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var Z = 0;
function Cf(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var _f,
  bs,
  Rf,
  Pf,
  Tf,
  ts = !1,
  Li = [],
  Xt = null,
  Jt = null,
  Gt = null,
  Jr = new Map(),
  Gr = new Map(),
  Qt = [],
  Hp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function du(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Jt = null;
      break;
    case "mouseover":
    case "mouseout":
      Gt = null;
      break;
    case "pointerover":
    case "pointerout":
      Jr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gr.delete(t.pointerId);
  }
}
function Sr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = mi(t)), t !== null && bs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Wp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((Xt = Sr(Xt, e, t, n, r, i)), !0);
    case "dragenter":
      return ((Jt = Sr(Jt, e, t, n, r, i)), !0);
    case "mouseover":
      return ((Gt = Sr(Gt, e, t, n, r, i)), !0);
    case "pointerover":
      var o = i.pointerId;
      return (Jr.set(o, Sr(Jr.get(o) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (o = i.pointerId),
        Gr.set(o, Sr(Gr.get(o) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function Lf(e) {
  var t = pn(e.target);
  if (t !== null) {
    var n = Pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = gf(n)), t !== null)) {
          ((e.blockedOn = t),
            Tf(e.priority, function () {
              Rf(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ki(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ns(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Jl = r), n.target.dispatchEvent(r), (Jl = null));
    } else return ((t = mi(n)), t !== null && bs(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function hu(e, t, n) {
  Ki(e) && n.delete(t);
}
function Qp() {
  ((ts = !1),
    Xt !== null && Ki(Xt) && (Xt = null),
    Jt !== null && Ki(Jt) && (Jt = null),
    Gt !== null && Ki(Gt) && (Gt = null),
    Jr.forEach(hu),
    Gr.forEach(hu));
}
function Er(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ts ||
      ((ts = !0),
      Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Qp)));
}
function Zr(e) {
  function t(i) {
    return Er(i, e);
  }
  if (0 < Li.length) {
    Er(Li[0], e);
    for (var n = 1; n < Li.length; n++) {
      var r = Li[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Xt !== null && Er(Xt, e),
      Jt !== null && Er(Jt, e),
      Gt !== null && Er(Gt, e),
      Jr.forEach(t),
      Gr.forEach(t),
      n = 0;
    n < Qt.length;
    n++
  )
    ((r = Qt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); )
    (Lf(n), n.blockedOn === null && Qt.shift());
}
var Gn = At.ReactCurrentBatchConfig,
  fo = !0;
function Kp(e, t, n, r) {
  var i = Z,
    o = Gn.transition;
  Gn.transition = null;
  try {
    ((Z = 1), ea(e, t, n, r));
  } finally {
    ((Z = i), (Gn.transition = o));
  }
}
function qp(e, t, n, r) {
  var i = Z,
    o = Gn.transition;
  Gn.transition = null;
  try {
    ((Z = 4), ea(e, t, n, r));
  } finally {
    ((Z = i), (Gn.transition = o));
  }
}
function ea(e, t, n, r) {
  if (fo) {
    var i = ns(e, t, n, r);
    if (i === null) (El(e, t, r, ho, n), du(e, r));
    else if (Wp(i, e, t, n, r)) r.stopPropagation();
    else if ((du(e, r), t & 4 && -1 < Hp.indexOf(e))) {
      for (; i !== null; ) {
        var o = mi(i);
        if (
          (o !== null && _f(o),
          (o = ns(e, t, n, r)),
          o === null && El(e, t, r, ho, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else El(e, t, r, null, n);
  }
}
var ho = null;
function ns(e, t, n, r) {
  if (((ho = null), (e = Js(r)), (e = pn(e)), e !== null))
    if (((t = Pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = gf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ho = e), null);
}
function Nf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ap()) {
        case Gs:
          return 1;
        case Ef:
          return 4;
        case uo:
        case Ip:
          return 16;
        case kf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qt = null,
  ta = null,
  qi = null;
function Of() {
  if (qi) return qi;
  var e,
    t = ta,
    n = t.length,
    r,
    i = "value" in qt ? qt.value : qt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (qi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Yi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ni() {
  return !0;
}
function pu() {
  return !1;
}
function Ze(e) {
  function t(n, r, i, o, l) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null));
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ni
        : pu),
      (this.isPropagationStopped = pu),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ni));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ni));
      },
      persist: function () {},
      isPersistent: Ni,
    }),
    t
  );
}
var cr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  na = Ze(cr),
  pi = ue({}, cr, { view: 0, detail: 0 }),
  Yp = Ze(pi),
  dl,
  hl,
  kr,
  Io = ue({}, pi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ra,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== kr &&
            (kr && e.type === "mousemove"
              ? ((dl = e.screenX - kr.screenX), (hl = e.screenY - kr.screenY))
              : (hl = dl = 0),
            (kr = e)),
          dl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : hl;
    },
  }),
  mu = Ze(Io),
  Xp = ue({}, Io, { dataTransfer: 0 }),
  Jp = Ze(Xp),
  Gp = ue({}, pi, { relatedTarget: 0 }),
  pl = Ze(Gp),
  Zp = ue({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bp = Ze(Zp),
  em = ue({}, cr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  tm = Ze(em),
  nm = ue({}, cr, { data: 0 }),
  yu = Ze(nm),
  rm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  im = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  om = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function lm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = om[e]) ? !!t[e] : !1;
}
function ra() {
  return lm;
}
var sm = ue({}, pi, {
    key: function (e) {
      if (e.key) {
        var t = rm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Yi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? im[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ra,
    charCode: function (e) {
      return e.type === "keypress" ? Yi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Yi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  am = Ze(sm),
  um = ue({}, Io, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  gu = Ze(um),
  cm = ue({}, pi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ra,
  }),
  fm = Ze(cm),
  dm = ue({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hm = Ze(dm),
  pm = ue({}, Io, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  mm = Ze(pm),
  ym = [9, 13, 27, 32],
  ia = Nt && "CompositionEvent" in window,
  Br = null;
Nt && "documentMode" in document && (Br = document.documentMode);
var gm = Nt && "TextEvent" in window && !Br,
  Df = Nt && (!ia || (Br && 8 < Br && 11 >= Br)),
  vu = " ",
  wu = !1;
function Mf(e, t) {
  switch (e) {
    case "keyup":
      return ym.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Af(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var zn = !1;
function vm(e, t) {
  switch (e) {
    case "compositionend":
      return Af(t);
    case "keypress":
      return t.which !== 32 ? null : ((wu = !0), vu);
    case "textInput":
      return ((e = t.data), e === vu && wu ? null : e);
    default:
      return null;
  }
}
function wm(e, t) {
  if (zn)
    return e === "compositionend" || (!ia && Mf(e, t))
      ? ((e = Of()), (qi = ta = qt = null), (zn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Df && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Sm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Sm[e.type] : t === "textarea";
}
function If(e, t, n, r) {
  (df(r),
    (t = po(t, "onChange")),
    0 < t.length &&
      ((n = new na("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var jr = null,
  br = null;
function Em(e) {
  Kf(e, 0);
}
function zo(e) {
  var t = Bn(e);
  if (of(t)) return e;
}
function km(e, t) {
  if (e === "change") return t;
}
var zf = !1;
if (Nt) {
  var ml;
  if (Nt) {
    var yl = "oninput" in document;
    if (!yl) {
      var Eu = document.createElement("div");
      (Eu.setAttribute("oninput", "return;"),
        (yl = typeof Eu.oninput == "function"));
    }
    ml = yl;
  } else ml = !1;
  zf = ml && (!document.documentMode || 9 < document.documentMode);
}
function ku() {
  jr && (jr.detachEvent("onpropertychange", Uf), (br = jr = null));
}
function Uf(e) {
  if (e.propertyName === "value" && zo(br)) {
    var t = [];
    (If(t, br, e, Js(e)), yf(Em, t));
  }
}
function xm(e, t, n) {
  e === "focusin"
    ? (ku(), (jr = t), (br = n), jr.attachEvent("onpropertychange", Uf))
    : e === "focusout" && ku();
}
function Cm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return zo(br);
}
function _m(e, t) {
  if (e === "click") return zo(t);
}
function Rm(e, t) {
  if (e === "input" || e === "change") return zo(t);
}
function Pm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gt = typeof Object.is == "function" ? Object.is : Pm;
function ei(e, t) {
  if (gt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Fl.call(t, i) || !gt(e[i], t[i])) return !1;
  }
  return !0;
}
function xu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Cu(e, t) {
  var n = xu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = xu(n);
  }
}
function Ff(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ff(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Bf() {
  for (var e = window, t = lo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = lo(e.document);
  }
  return t;
}
function oa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Tm(e) {
  var t = Bf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ff(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && oa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        ((r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Cu(n, o)));
        var l = Cu(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Lm = Nt && "documentMode" in document && 11 >= document.documentMode,
  Un = null,
  rs = null,
  Vr = null,
  is = !1;
function _u(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  is ||
    Un == null ||
    Un !== lo(r) ||
    ((r = Un),
    "selectionStart" in r && oa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Vr && ei(Vr, r)) ||
      ((Vr = r),
      (r = po(rs, "onSelect")),
      0 < r.length &&
        ((t = new na("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Un))));
}
function Oi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Fn = {
    animationend: Oi("Animation", "AnimationEnd"),
    animationiteration: Oi("Animation", "AnimationIteration"),
    animationstart: Oi("Animation", "AnimationStart"),
    transitionend: Oi("Transition", "TransitionEnd"),
  },
  gl = {},
  jf = {};
Nt &&
  ((jf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Fn.animationend.animation,
    delete Fn.animationiteration.animation,
    delete Fn.animationstart.animation),
  "TransitionEvent" in window || delete Fn.transitionend.transition);
function Uo(e) {
  if (gl[e]) return gl[e];
  if (!Fn[e]) return e;
  var t = Fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in jf) return (gl[e] = t[n]);
  return e;
}
var Vf = Uo("animationend"),
  $f = Uo("animationiteration"),
  Hf = Uo("animationstart"),
  Wf = Uo("transitionend"),
  Qf = new Map(),
  Ru =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function sn(e, t) {
  (Qf.set(e, t), Rn(t, [e]));
}
for (var vl = 0; vl < Ru.length; vl++) {
  var wl = Ru[vl],
    Nm = wl.toLowerCase(),
    Om = wl[0].toUpperCase() + wl.slice(1);
  sn(Nm, "on" + Om);
}
sn(Vf, "onAnimationEnd");
sn($f, "onAnimationIteration");
sn(Hf, "onAnimationStart");
sn("dblclick", "onDoubleClick");
sn("focusin", "onFocus");
sn("focusout", "onBlur");
sn(Wf, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
Rn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Rn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Rn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Rn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Ir =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Dm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));
function Pu(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Np(r, t, void 0, e), (e.currentTarget = null));
}
function Kf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== o && i.isPropagationStopped())) break e;
          (Pu(i, s, u), (o = a));
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          (Pu(i, s, u), (o = a));
        }
    }
  }
  if (ao) throw ((e = bl), (ao = !1), (bl = null), e);
}
function re(e, t) {
  var n = t[us];
  n === void 0 && (n = t[us] = new Set());
  var r = e + "__bubble";
  n.has(r) || (qf(t, e, 2, !1), n.add(r));
}
function Sl(e, t, n) {
  var r = 0;
  (t && (r |= 4), qf(n, e, r, t));
}
var Di = "_reactListening" + Math.random().toString(36).slice(2);
function ti(e) {
  if (!e[Di]) {
    ((e[Di] = !0),
      bc.forEach(function (n) {
        n !== "selectionchange" && (Dm.has(n) || Sl(n, !1, e), Sl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Di] || ((t[Di] = !0), Sl("selectionchange", !1, t));
  }
}
function qf(e, t, n, r) {
  switch (Nf(t)) {
    case 1:
      var i = Kp;
      break;
    case 4:
      i = qp;
      break;
    default:
      i = ea;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !Zl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function El(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = pn(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  yf(function () {
    var u = o,
      c = Js(n),
      h = [];
    e: {
      var p = Qf.get(e);
      if (p !== void 0) {
        var w = na,
          E = e;
        switch (e) {
          case "keypress":
            if (Yi(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = am;
            break;
          case "focusin":
            ((E = "focus"), (w = pl));
            break;
          case "focusout":
            ((E = "blur"), (w = pl));
            break;
          case "beforeblur":
          case "afterblur":
            w = pl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = mu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Jp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = fm;
            break;
          case Vf:
          case $f:
          case Hf:
            w = bp;
            break;
          case Wf:
            w = hm;
            break;
          case "scroll":
            w = Yp;
            break;
          case "wheel":
            w = mm;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = tm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = gu;
        }
        var S = (t & 4) !== 0,
          R = !S && e === "scroll",
          d = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var f = u, m; f !== null; ) {
          m = f;
          var C = m.stateNode;
          if (
            (m.tag === 5 &&
              C !== null &&
              ((m = C),
              d !== null && ((C = Xr(f, d)), C != null && S.push(ni(f, C, m)))),
            R)
          )
            break;
          f = f.return;
        }
        0 < S.length &&
          ((p = new w(p, E, null, n, c)), h.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Jl &&
            (E = n.relatedTarget || n.fromElement) &&
            (pn(E) || E[Ot]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          w
            ? ((E = n.relatedTarget || n.toElement),
              (w = u),
              (E = E ? pn(E) : null),
              E !== null &&
                ((R = Pn(E)), E !== R || (E.tag !== 5 && E.tag !== 6)) &&
                (E = null))
            : ((w = null), (E = u)),
          w !== E)
        ) {
          if (
            ((S = mu),
            (C = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = gu),
              (C = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (R = w == null ? p : Bn(w)),
            (m = E == null ? p : Bn(E)),
            (p = new S(C, f + "leave", w, n, c)),
            (p.target = R),
            (p.relatedTarget = m),
            (C = null),
            pn(c) === u &&
              ((S = new S(d, f + "enter", E, n, c)),
              (S.target = m),
              (S.relatedTarget = R),
              (C = S)),
            (R = C),
            w && E)
          )
            t: {
              for (S = w, d = E, f = 0, m = S; m; m = Dn(m)) f++;
              for (m = 0, C = d; C; C = Dn(C)) m++;
              for (; 0 < f - m; ) ((S = Dn(S)), f--);
              for (; 0 < m - f; ) ((d = Dn(d)), m--);
              for (; f--; ) {
                if (S === d || (d !== null && S === d.alternate)) break t;
                ((S = Dn(S)), (d = Dn(d)));
              }
              S = null;
            }
          else S = null;
          (w !== null && Tu(h, p, w, S, !1),
            E !== null && R !== null && Tu(h, R, E, S, !0));
        }
      }
      e: {
        if (
          ((p = u ? Bn(u) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var P = km;
        else if (Su(p))
          if (zf) P = Rm;
          else {
            P = Cm;
            var y = xm;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (P = _m);
        if (P && (P = P(e, u))) {
          If(h, P, n, c);
          break e;
        }
        (y && y(e, p, u),
          e === "focusout" &&
            (y = p._wrapperState) &&
            y.controlled &&
            p.type === "number" &&
            Ql(p, "number", p.value));
      }
      switch (((y = u ? Bn(u) : window), e)) {
        case "focusin":
          (Su(y) || y.contentEditable === "true") &&
            ((Un = y), (rs = u), (Vr = null));
          break;
        case "focusout":
          Vr = rs = Un = null;
          break;
        case "mousedown":
          is = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((is = !1), _u(h, n, c));
          break;
        case "selectionchange":
          if (Lm) break;
        case "keydown":
        case "keyup":
          _u(h, n, c);
      }
      var x;
      if (ia)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        zn
          ? Mf(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      (L &&
        (Df &&
          n.locale !== "ko" &&
          (zn || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && zn && (x = Of())
            : ((qt = c),
              (ta = "value" in qt ? qt.value : qt.textContent),
              (zn = !0))),
        (y = po(u, L)),
        0 < y.length &&
          ((L = new yu(L, e, null, n, c)),
          h.push({ event: L, listeners: y }),
          x ? (L.data = x) : ((x = Af(n)), x !== null && (L.data = x)))),
        (x = gm ? vm(e, n) : wm(e, n)) &&
          ((u = po(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new yu("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = x))));
    }
    Kf(h, t);
  });
}
function ni(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function po(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    (i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Xr(e, n)),
      o != null && r.unshift(ni(e, o, i)),
      (o = Xr(e, t)),
      o != null && r.push(ni(e, o, i))),
      (e = e.return));
  }
  return r;
}
function Dn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Tu(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    (s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((a = Xr(n, o)), a != null && l.unshift(ni(n, a, s)))
        : i || ((a = Xr(n, o)), a != null && l.push(ni(n, a, s)))),
      (n = n.return));
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Mm = /\r\n?/g,
  Am = /\u0000|\uFFFD/g;
function Lu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Mm,
      `
`,
    )
    .replace(Am, "");
}
function Mi(e, t, n) {
  if (((t = Lu(t)), Lu(e) !== t && n)) throw Error(T(425));
}
function mo() {}
var os = null,
  ls = null;
function ss(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var as = typeof setTimeout == "function" ? setTimeout : void 0,
  Im = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Nu = typeof Promise == "function" ? Promise : void 0,
  zm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Nu < "u"
        ? function (e) {
            return Nu.resolve(null).then(e).catch(Um);
          }
        : as;
function Um(e) {
  setTimeout(function () {
    throw e;
  });
}
function kl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), Zr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Zr(t);
}
function Zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ou(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fr = Math.random().toString(36).slice(2),
  Et = "__reactFiber$" + fr,
  ri = "__reactProps$" + fr,
  Ot = "__reactContainer$" + fr,
  us = "__reactEvents$" + fr,
  Fm = "__reactListeners$" + fr,
  Bm = "__reactHandles$" + fr;
function pn(e) {
  var t = e[Et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ot] || n[Et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ou(e); e !== null; ) {
          if ((n = e[Et])) return n;
          e = Ou(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function mi(e) {
  return (
    (e = e[Et] || e[Ot]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Fo(e) {
  return e[ri] || null;
}
var cs = [],
  jn = -1;
function an(e) {
  return { current: e };
}
function ie(e) {
  0 > jn || ((e.current = cs[jn]), (cs[jn] = null), jn--);
}
function te(e, t) {
  (jn++, (cs[jn] = e.current), (e.current = t));
}
var ln = {},
  Me = an(ln),
  $e = an(!1),
  En = ln;
function nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ln;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function He(e) {
  return ((e = e.childContextTypes), e != null);
}
function yo() {
  (ie($e), ie(Me));
}
function Du(e, t, n) {
  if (Me.current !== ln) throw Error(T(168));
  (te(Me, t), te($e, n));
}
function Yf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(T(108, xp(e) || "Unknown", i));
  return ue({}, n, r);
}
function go(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ln),
    (En = Me.current),
    te(Me, e),
    te($e, $e.current),
    !0
  );
}
function Mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  (n
    ? ((e = Yf(e, t, En)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ie($e),
      ie(Me),
      te(Me, e))
    : ie($e),
    te($e, n));
}
var Rt = null,
  Bo = !1,
  xl = !1;
function Xf(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
function jm(e) {
  ((Bo = !0), Xf(e));
}
function un() {
  if (!xl && Rt !== null) {
    xl = !0;
    var e = 0,
      t = Z;
    try {
      var n = Rt;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Rt = null), (Bo = !1));
    } catch (i) {
      throw (Rt !== null && (Rt = Rt.slice(e + 1)), Sf(Gs, un), i);
    } finally {
      ((Z = t), (xl = !1));
    }
  }
  return null;
}
var Vn = [],
  $n = 0,
  vo = null,
  wo = 0,
  tt = [],
  nt = 0,
  kn = null,
  Pt = 1,
  Tt = "";
function dn(e, t) {
  ((Vn[$n++] = wo), (Vn[$n++] = vo), (vo = e), (wo = t));
}
function Jf(e, t, n) {
  ((tt[nt++] = Pt), (tt[nt++] = Tt), (tt[nt++] = kn), (kn = e));
  var r = Pt;
  e = Tt;
  var i = 32 - mt(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var o = 32 - mt(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    ((o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (Pt = (1 << (32 - mt(t) + i)) | (n << i) | r),
      (Tt = o + e));
  } else ((Pt = (1 << o) | (n << i) | r), (Tt = e));
}
function la(e) {
  e.return !== null && (dn(e, 1), Jf(e, 1, 0));
}
function sa(e) {
  for (; e === vo; )
    ((vo = Vn[--$n]), (Vn[$n] = null), (wo = Vn[--$n]), (Vn[$n] = null));
  for (; e === kn; )
    ((kn = tt[--nt]),
      (tt[nt] = null),
      (Tt = tt[--nt]),
      (tt[nt] = null),
      (Pt = tt[--nt]),
      (tt[nt] = null));
}
var Xe = null,
  Ye = null,
  le = !1,
  pt = null;
function Gf(e, t) {
  var n = it(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Au(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Xe = e), (Ye = Zt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Xe = e), (Ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = kn !== null ? { id: Pt, overflow: Tt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = it(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Xe = e),
            (Ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function fs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ds(e) {
  if (le) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!Au(e, t)) {
        if (fs(e)) throw Error(T(418));
        t = Zt(n.nextSibling);
        var r = Xe;
        t && Au(e, t)
          ? Gf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Xe = e));
      }
    } else {
      if (fs(e)) throw Error(T(418));
      ((e.flags = (e.flags & -4097) | 2), (le = !1), (Xe = e));
    }
  }
}
function Iu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Xe = e;
}
function Ai(e) {
  if (e !== Xe) return !1;
  if (!le) return (Iu(e), (le = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ss(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if (fs(e)) throw (Zf(), Error(T(418)));
    for (; t; ) (Gf(e, t), (t = Zt(t.nextSibling)));
  }
  if ((Iu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = Zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Xe ? Zt(e.stateNode.nextSibling) : null;
  return !0;
}
function Zf() {
  for (var e = Ye; e; ) e = Zt(e.nextSibling);
}
function rr() {
  ((Ye = Xe = null), (le = !1));
}
function aa(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
var Vm = At.ReactCurrentBatchConfig;
function ct(e, t) {
  if (e && e.defaultProps) {
    ((t = ue({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var So = an(null),
  Eo = null,
  Hn = null,
  ua = null;
function ca() {
  ua = Hn = Eo = null;
}
function fa(e) {
  var t = So.current;
  (ie(So), (e._currentValue = t));
}
function hs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zn(e, t) {
  ((Eo = e),
    (ua = Hn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ve = !0), (e.firstContext = null)));
}
function lt(e) {
  var t = e._currentValue;
  if (ua !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hn === null)) {
      if (Eo === null) throw Error(T(308));
      ((Hn = e), (Eo.dependencies = { lanes: 0, firstContext: e }));
    } else Hn = Hn.next = e;
  return t;
}
var mn = null;
function da(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
function bf(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), da(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Dt(e, r)
  );
}
function Dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Wt = !1;
function ha(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ed(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Dt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), da(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Dt(e, n)
  );
}
function Xi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Zs(e, n));
  }
}
function zu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (o === null ? (i = o = l) : (o = o.next = l), (n = n.next));
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function ko(e, t, n, r) {
  var i = e.updateQueue;
  Wt = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s,
      u = a.next;
    ((a.next = null), l === null ? (o = u) : (l.next = u), (l = a));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== l &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var h = i.baseState;
    ((l = 0), (c = u = a = null), (s = o));
    do {
      var p = s.lane,
        w = s.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: w,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var E = e,
            S = s;
          switch (((p = t), (w = n), S.tag)) {
            case 1:
              if (((E = S.payload), typeof E == "function")) {
                h = E.call(w, h, p);
                break e;
              }
              h = E;
              break e;
            case 3:
              E.flags = (E.flags & -65537) | 128;
            case 0:
              if (
                ((E = S.payload),
                (p = typeof E == "function" ? E.call(w, h, p) : E),
                p == null)
              )
                break e;
              h = ue({}, h, p);
              break e;
            case 2:
              Wt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [s]) : p.push(s));
      } else
        ((w = {
          eventTime: w,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = w), (a = h)) : (c = c.next = w),
          (l |= p));
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        ((p = s),
          (s = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (a = h),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((l |= i.lane), (i = i.next));
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    ((Cn |= l), (e.lanes = l), (e.memoizedState = h));
  }
}
function Uu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(T(191, i));
        i.call(r);
      }
    }
}
var td = new Zc.Component().refs;
function ps(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var jo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      i = tn(e),
      o = Lt(r, i);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = bt(e, o, i)),
      t !== null && (yt(t, e, i, r), Xi(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      i = tn(e),
      o = Lt(r, i);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = bt(e, o, i)),
      t !== null && (yt(t, e, i, r), Xi(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ze(),
      r = tn(e),
      i = Lt(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = bt(e, i, r)),
      t !== null && (yt(t, e, r, n), Xi(t, e, r)));
  },
};
function Fu(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ei(n, r) || !ei(i, o)
        : !0
  );
}
function nd(e, t, n) {
  var r = !1,
    i = ln,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = lt(o))
      : ((i = He(t) ? En : Me.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? nr(e, i) : ln)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = jo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Bu(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && jo.enqueueReplaceState(t, t.state, null));
}
function ms(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = td), ha(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (i.context = lt(o))
    : ((o = He(t) ? En : Me.current), (i.context = nr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ps(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && jo.enqueueReplaceState(i, i.state, null),
      ko(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function xr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            (s === td && (s = i.refs = {}),
              l === null ? delete s[o] : (s[o] = l));
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Ii(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function ju(e) {
  var t = e._init;
  return t(e._payload);
}
function rd(e) {
  function t(d, f) {
    if (e) {
      var m = d.deletions;
      m === null ? ((d.deletions = [f]), (d.flags |= 16)) : m.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) (t(d, f), (f = f.sibling));
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      (f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling));
    return d;
  }
  function i(d, f) {
    return ((d = nn(d, f)), (d.index = 0), (d.sibling = null), d);
  }
  function o(d, f, m) {
    return (
      (d.index = m),
      e
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((d.flags |= 2), f) : m)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function l(d) {
    return (e && d.alternate === null && (d.flags |= 2), d);
  }
  function s(d, f, m, C) {
    return f === null || f.tag !== 6
      ? ((f = Nl(m, d.mode, C)), (f.return = d), f)
      : ((f = i(f, m)), (f.return = d), f);
  }
  function a(d, f, m, C) {
    var P = m.type;
    return P === In
      ? c(d, f, m.props.children, C, m.key)
      : f !== null &&
          (f.elementType === P ||
            (typeof P == "object" &&
              P !== null &&
              P.$$typeof === Ht &&
              ju(P) === f.type))
        ? ((C = i(f, m.props)), (C.ref = xr(d, f, m)), (C.return = d), C)
        : ((C = to(m.type, m.key, m.props, null, d.mode, C)),
          (C.ref = xr(d, f, m)),
          (C.return = d),
          C);
  }
  function u(d, f, m, C) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = Ol(m, d.mode, C)), (f.return = d), f)
      : ((f = i(f, m.children || [])), (f.return = d), f);
  }
  function c(d, f, m, C, P) {
    return f === null || f.tag !== 7
      ? ((f = Sn(m, d.mode, C, P)), (f.return = d), f)
      : ((f = i(f, m)), (f.return = d), f);
  }
  function h(d, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return ((f = Nl("" + f, d.mode, m)), (f.return = d), f);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ci:
          return (
            (m = to(f.type, f.key, f.props, null, d.mode, m)),
            (m.ref = xr(d, null, f)),
            (m.return = d),
            m
          );
        case An:
          return ((f = Ol(f, d.mode, m)), (f.return = d), f);
        case Ht:
          var C = f._init;
          return h(d, C(f._payload), m);
      }
      if (Mr(f) || vr(f))
        return ((f = Sn(f, d.mode, m, null)), (f.return = d), f);
      Ii(d, f);
    }
    return null;
  }
  function p(d, f, m, C) {
    var P = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return P !== null ? null : s(d, f, "" + m, C);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ci:
          return m.key === P ? a(d, f, m, C) : null;
        case An:
          return m.key === P ? u(d, f, m, C) : null;
        case Ht:
          return ((P = m._init), p(d, f, P(m._payload), C));
      }
      if (Mr(m) || vr(m)) return P !== null ? null : c(d, f, m, C, null);
      Ii(d, m);
    }
    return null;
  }
  function w(d, f, m, C, P) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return ((d = d.get(m) || null), s(f, d, "" + C, P));
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Ci:
          return (
            (d = d.get(C.key === null ? m : C.key) || null),
            a(f, d, C, P)
          );
        case An:
          return (
            (d = d.get(C.key === null ? m : C.key) || null),
            u(f, d, C, P)
          );
        case Ht:
          var y = C._init;
          return w(d, f, m, y(C._payload), P);
      }
      if (Mr(C) || vr(C)) return ((d = d.get(m) || null), c(f, d, C, P, null));
      Ii(f, C);
    }
    return null;
  }
  function E(d, f, m, C) {
    for (
      var P = null, y = null, x = f, L = (f = 0), M = null;
      x !== null && L < m.length;
      L++
    ) {
      x.index > L ? ((M = x), (x = null)) : (M = x.sibling);
      var I = p(d, x, m[L], C);
      if (I === null) {
        x === null && (x = M);
        break;
      }
      (e && x && I.alternate === null && t(d, x),
        (f = o(I, f, L)),
        y === null ? (P = I) : (y.sibling = I),
        (y = I),
        (x = M));
    }
    if (L === m.length) return (n(d, x), le && dn(d, L), P);
    if (x === null) {
      for (; L < m.length; L++)
        ((x = h(d, m[L], C)),
          x !== null &&
            ((f = o(x, f, L)),
            y === null ? (P = x) : (y.sibling = x),
            (y = x)));
      return (le && dn(d, L), P);
    }
    for (x = r(d, x); L < m.length; L++)
      ((M = w(x, d, L, m[L], C)),
        M !== null &&
          (e && M.alternate !== null && x.delete(M.key === null ? L : M.key),
          (f = o(M, f, L)),
          y === null ? (P = M) : (y.sibling = M),
          (y = M)));
    return (
      e &&
        x.forEach(function (Y) {
          return t(d, Y);
        }),
      le && dn(d, L),
      P
    );
  }
  function S(d, f, m, C) {
    var P = vr(m);
    if (typeof P != "function") throw Error(T(150));
    if (((m = P.call(m)), m == null)) throw Error(T(151));
    for (
      var y = (P = null), x = f, L = (f = 0), M = null, I = m.next();
      x !== null && !I.done;
      L++, I = m.next()
    ) {
      x.index > L ? ((M = x), (x = null)) : (M = x.sibling);
      var Y = p(d, x, I.value, C);
      if (Y === null) {
        x === null && (x = M);
        break;
      }
      (e && x && Y.alternate === null && t(d, x),
        (f = o(Y, f, L)),
        y === null ? (P = Y) : (y.sibling = Y),
        (y = Y),
        (x = M));
    }
    if (I.done) return (n(d, x), le && dn(d, L), P);
    if (x === null) {
      for (; !I.done; L++, I = m.next())
        ((I = h(d, I.value, C)),
          I !== null &&
            ((f = o(I, f, L)),
            y === null ? (P = I) : (y.sibling = I),
            (y = I)));
      return (le && dn(d, L), P);
    }
    for (x = r(d, x); !I.done; L++, I = m.next())
      ((I = w(x, d, L, I.value, C)),
        I !== null &&
          (e && I.alternate !== null && x.delete(I.key === null ? L : I.key),
          (f = o(I, f, L)),
          y === null ? (P = I) : (y.sibling = I),
          (y = I)));
    return (
      e &&
        x.forEach(function (he) {
          return t(d, he);
        }),
      le && dn(d, L),
      P
    );
  }
  function R(d, f, m, C) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === In &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ci:
          e: {
            for (var P = m.key, y = f; y !== null; ) {
              if (y.key === P) {
                if (((P = m.type), P === In)) {
                  if (y.tag === 7) {
                    (n(d, y.sibling),
                      (f = i(y, m.props.children)),
                      (f.return = d),
                      (d = f));
                    break e;
                  }
                } else if (
                  y.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Ht &&
                    ju(P) === y.type)
                ) {
                  (n(d, y.sibling),
                    (f = i(y, m.props)),
                    (f.ref = xr(d, y, m)),
                    (f.return = d),
                    (d = f));
                  break e;
                }
                n(d, y);
                break;
              } else t(d, y);
              y = y.sibling;
            }
            m.type === In
              ? ((f = Sn(m.props.children, d.mode, C, m.key)),
                (f.return = d),
                (d = f))
              : ((C = to(m.type, m.key, m.props, null, d.mode, C)),
                (C.ref = xr(d, f, m)),
                (C.return = d),
                (d = C));
          }
          return l(d);
        case An:
          e: {
            for (y = m.key; f !== null; ) {
              if (f.key === y)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  (n(d, f.sibling),
                    (f = i(f, m.children || [])),
                    (f.return = d),
                    (d = f));
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            ((f = Ol(m, d.mode, C)), (f.return = d), (d = f));
          }
          return l(d);
        case Ht:
          return ((y = m._init), R(d, f, y(m._payload), C));
      }
      if (Mr(m)) return E(d, f, m, C);
      if (vr(m)) return S(d, f, m, C);
      Ii(d, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = i(f, m)), (f.return = d), (d = f))
          : (n(d, f), (f = Nl(m, d.mode, C)), (f.return = d), (d = f)),
        l(d))
      : n(d, f);
  }
  return R;
}
var ir = rd(!0),
  id = rd(!1),
  yi = {},
  xt = an(yi),
  ii = an(yi),
  oi = an(yi);
function yn(e) {
  if (e === yi) throw Error(T(174));
  return e;
}
function pa(e, t) {
  switch ((te(oi, t), te(ii, e), te(xt, yi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ql(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ql(t, e)));
  }
  (ie(xt), te(xt, t));
}
function or() {
  (ie(xt), ie(ii), ie(oi));
}
function od(e) {
  yn(oi.current);
  var t = yn(xt.current),
    n = ql(t, e.type);
  t !== n && (te(ii, e), te(xt, n));
}
function ma(e) {
  ii.current === e && (ie(xt), ie(ii));
}
var se = an(0);
function xo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Cl = [];
function ya() {
  for (var e = 0; e < Cl.length; e++)
    Cl[e]._workInProgressVersionPrimary = null;
  Cl.length = 0;
}
var Ji = At.ReactCurrentDispatcher,
  _l = At.ReactCurrentBatchConfig,
  xn = 0,
  ae = null,
  we = null,
  xe = null,
  Co = !1,
  $r = !1,
  li = 0,
  $m = 0;
function Ne() {
  throw Error(T(321));
}
function ga(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!gt(e[n], t[n])) return !1;
  return !0;
}
function va(e, t, n, r, i, o) {
  if (
    ((xn = o),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ji.current = e === null || e.memoizedState === null ? Km : qm),
    (e = n(r, i)),
    $r)
  ) {
    o = 0;
    do {
      if ((($r = !1), (li = 0), 25 <= o)) throw Error(T(301));
      ((o += 1),
        (xe = we = null),
        (t.updateQueue = null),
        (Ji.current = Ym),
        (e = n(r, i)));
    } while ($r);
  }
  if (
    ((Ji.current = _o),
    (t = we !== null && we.next !== null),
    (xn = 0),
    (xe = we = ae = null),
    (Co = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function wa() {
  var e = li !== 0;
  return ((li = 0), e);
}
function St() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (xe === null ? (ae.memoizedState = xe = e) : (xe = xe.next = e), xe);
}
function st() {
  if (we === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = xe === null ? ae.memoizedState : xe.next;
  if (t !== null) ((xe = t), (we = e));
  else {
    if (e === null) throw Error(T(310));
    ((we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null,
      }),
      xe === null ? (ae.memoizedState = xe = e) : (xe = xe.next = e));
  }
  return xe;
}
function si(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Rl(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = we,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      ((i.next = o.next), (o.next = l));
    }
    ((r.baseQueue = i = o), (n.pending = null));
  }
  if (i !== null) {
    ((o = i.next), (r = r.baseState));
    var s = (l = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((xn & c) === c)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (a === null ? ((s = a = h), (l = r)) : (a = a.next = h),
          (ae.lanes |= c),
          (Cn |= c));
      }
      u = u.next;
    } while (u !== null && u !== o);
    (a === null ? (l = r) : (a.next = s),
      gt(r, t.memoizedState) || (Ve = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((o = i.lane), (ae.lanes |= o), (Cn |= o), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Pl(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do ((o = e(o, l.action)), (l = l.next));
    while (l !== i);
    (gt(o, t.memoizedState) || (Ve = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function ld() {}
function sd(e, t) {
  var n = ae,
    r = st(),
    i = t(),
    o = !gt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ve = !0)),
    (r = r.queue),
    Sa(cd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ai(9, ud.bind(null, n, r, i, t), void 0, null),
      Ce === null)
    )
      throw Error(T(349));
    xn & 30 || ad(n, t, i);
  }
  return i;
}
function ad(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function ud(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), fd(t) && dd(e));
}
function cd(e, t, n) {
  return n(function () {
    fd(t) && dd(e);
  });
}
function fd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gt(e, n);
  } catch {
    return !0;
  }
}
function dd(e) {
  var t = Dt(e, 1);
  t !== null && yt(t, e, 1, -1);
}
function Vu(e) {
  var t = St();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: si,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Qm.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function ai(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function hd() {
  return st().memoizedState;
}
function Gi(e, t, n, r) {
  var i = St();
  ((ae.flags |= e),
    (i.memoizedState = ai(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Vo(e, t, n, r) {
  var i = st();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (we !== null) {
    var l = we.memoizedState;
    if (((o = l.destroy), r !== null && ga(r, l.deps))) {
      i.memoizedState = ai(t, n, o, r);
      return;
    }
  }
  ((ae.flags |= e), (i.memoizedState = ai(1 | t, n, o, r)));
}
function $u(e, t) {
  return Gi(8390656, 8, e, t);
}
function Sa(e, t) {
  return Vo(2048, 8, e, t);
}
function pd(e, t) {
  return Vo(4, 2, e, t);
}
function md(e, t) {
  return Vo(4, 4, e, t);
}
function yd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function gd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Vo(4, 4, yd.bind(null, t, e), n)
  );
}
function Ea() {}
function vd(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ga(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function wd(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ga(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sd(e, t, n) {
  return xn & 21
    ? (gt(n, t) || ((n = xf()), (ae.lanes |= n), (Cn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ve = !0)), (e.memoizedState = n));
}
function Hm(e, t) {
  var n = Z;
  ((Z = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = _l.transition;
  _l.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((Z = n), (_l.transition = r));
  }
}
function Ed() {
  return st().memoizedState;
}
function Wm(e, t, n) {
  var r = tn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    kd(e))
  )
    xd(t, n);
  else if (((n = bf(e, t, n, r)), n !== null)) {
    var i = ze();
    (yt(n, e, r, i), Cd(n, t, r));
  }
}
function Qm(e, t, n) {
  var r = tn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (kd(e)) xd(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), gt(s, l))) {
          var a = t.interleaved;
          (a === null
            ? ((i.next = i), da(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = bf(e, t, i, r)),
      n !== null && ((i = ze()), yt(n, e, r, i), Cd(n, t, r)));
  }
}
function kd(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function xd(e, t) {
  $r = Co = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Cd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Zs(e, n));
  }
}
var _o = {
    readContext: lt,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  Km = {
    readContext: lt,
    useCallback: function (e, t) {
      return ((St().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: lt,
    useEffect: $u,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Gi(4194308, 4, yd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Gi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Gi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = St();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = St();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Wm.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = St();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Vu,
    useDebugValue: Ea,
    useDeferredValue: function (e) {
      return (St().memoizedState = e);
    },
    useTransition: function () {
      var e = Vu(!1),
        t = e[0];
      return ((e = Hm.bind(null, e[1])), (St().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        i = St();
      if (le) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(T(349));
        xn & 30 || ad(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        $u(cd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ai(9, ud.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = St(),
        t = Ce.identifierPrefix;
      if (le) {
        var n = Tt,
          r = Pt;
        ((n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = li++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = $m++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qm = {
    readContext: lt,
    useCallback: vd,
    useContext: lt,
    useEffect: Sa,
    useImperativeHandle: gd,
    useInsertionEffect: pd,
    useLayoutEffect: md,
    useMemo: wd,
    useReducer: Rl,
    useRef: hd,
    useState: function () {
      return Rl(si);
    },
    useDebugValue: Ea,
    useDeferredValue: function (e) {
      var t = st();
      return Sd(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = Rl(si)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: ld,
    useSyncExternalStore: sd,
    useId: Ed,
    unstable_isNewReconciler: !1,
  },
  Ym = {
    readContext: lt,
    useCallback: vd,
    useContext: lt,
    useEffect: Sa,
    useImperativeHandle: gd,
    useInsertionEffect: pd,
    useLayoutEffect: md,
    useMemo: wd,
    useReducer: Pl,
    useRef: hd,
    useState: function () {
      return Pl(si);
    },
    useDebugValue: Ea,
    useDeferredValue: function (e) {
      var t = st();
      return we === null ? (t.memoizedState = e) : Sd(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = Pl(si)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: ld,
    useSyncExternalStore: sd,
    useId: Ed,
    unstable_isNewReconciler: !1,
  };
function lr(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += kp(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Tl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ys(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Xm = typeof WeakMap == "function" ? WeakMap : Map;
function _d(e, t, n) {
  ((n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Po || ((Po = !0), (Rs = r)), ys(e, t));
    }),
    n
  );
}
function Rd(e, t, n) {
  ((n = Lt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ys(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (ys(e, t),
          typeof r != "function" &&
            (en === null ? (en = new Set([this])) : en.add(this)));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Hu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xm();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = uy.bind(null, e, t, n)), t.then(e, e));
}
function Wu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Qu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Lt(-1, 1)), (t.tag = 2), bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Jm = At.ReactCurrentOwner,
  Ve = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? id(t, null, n, r) : ir(t, e.child, n, r);
}
function Ku(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Zn(t, i),
    (r = va(e, t, n, r, o, i)),
    (n = wa()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Mt(e, t, i))
      : (le && n && la(t), (t.flags |= 1), Ie(e, t, r, i), t.child)
  );
}
function qu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !La(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Pd(e, t, o, r, i))
      : ((e = to(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ei), n(l, r) && e.ref === t.ref)
    )
      return Mt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = nn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Pd(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ei(o, r) && e.ref === t.ref)
      if (((Ve = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ve = !0);
      else return ((t.lanes = e.lanes), Mt(e, t, i));
  }
  return gs(e, t, n, r, i);
}
function Td(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(Qn, qe),
        (qe |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          te(Qn, qe),
          (qe |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        te(Qn, qe),
        (qe |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(Qn, qe),
      (qe |= r));
  return (Ie(e, t, i, n), t.child);
}
function Ld(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function gs(e, t, n, r, i) {
  var o = He(n) ? En : Me.current;
  return (
    (o = nr(t, o)),
    Zn(t, i),
    (n = va(e, t, n, r, o, i)),
    (r = wa()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Mt(e, t, i))
      : (le && r && la(t), (t.flags |= 1), Ie(e, t, n, i), t.child)
  );
}
function Yu(e, t, n, r, i) {
  if (He(n)) {
    var o = !0;
    go(t);
  } else o = !1;
  if ((Zn(t, i), t.stateNode === null))
    (Zi(e, t), nd(t, n, r), ms(t, n, r, i), (r = !0));
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = lt(u))
      : ((u = He(n) ? En : Me.current), (u = nr(t, u)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    (h ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Bu(t, l, r, u)),
      (Wt = !1));
    var p = t.memoizedState;
    ((l.state = p),
      ko(t, r, l, i),
      (a = t.memoizedState),
      s !== r || p !== a || $e.current || Wt
        ? (typeof c == "function" && (ps(t, n, c, r), (a = t.memoizedState)),
          (s = Wt || Fu(t, n, s, r, p, a, u))
            ? (h ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((l = t.stateNode),
      ed(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : ct(t.type, s)),
      (l.props = u),
      (h = t.pendingProps),
      (p = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = lt(a))
        : ((a = He(n) ? En : Me.current), (a = nr(t, a))));
    var w = n.getDerivedStateFromProps;
    ((c =
      typeof w == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== h || p !== a) && Bu(t, l, r, a)),
      (Wt = !1),
      (p = t.memoizedState),
      (l.state = p),
      ko(t, r, l, i));
    var E = t.memoizedState;
    s !== h || p !== E || $e.current || Wt
      ? (typeof w == "function" && (ps(t, n, w, r), (E = t.memoizedState)),
        (u = Wt || Fu(t, n, u, r, p, E, a) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, E, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, E, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = E)),
        (l.props = r),
        (l.state = E),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vs(e, t, n, r, o, i);
}
function vs(e, t, n, r, i, o) {
  Ld(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return (i && Mu(t, n, !1), Mt(e, t, o));
  ((r = t.stateNode), (Jm.current = t));
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = ir(t, e.child, null, o)), (t.child = ir(t, null, s, o)))
      : Ie(e, t, s, o),
    (t.memoizedState = r.state),
    i && Mu(t, n, !0),
    t.child
  );
}
function Nd(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Du(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Du(e, t.context, !1),
    pa(e, t.containerInfo));
}
function Xu(e, t, n, r, i) {
  return (rr(), aa(i), (t.flags |= 256), Ie(e, t, n, r), t.child);
}
var ws = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ss(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Od(e, t, n) {
  var r = t.pendingProps,
    i = se.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    te(se, i & 1),
    e === null)
  )
    return (
      ds(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Wo(l, r, 0, null)),
              (e = Sn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ss(n)),
              (t.memoizedState = ws),
              e)
            : ka(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return Gm(e, t, l, r, s, i, n);
  if (o) {
    ((o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = nn(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = nn(s, o)) : ((o = Sn(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Ss(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ws),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = nn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ka(e, t) {
  return (
    (t = Wo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zi(e, t, n, r) {
  return (
    r !== null && aa(r),
    ir(t, e.child, null, n),
    (e = ka(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Gm(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Tl(Error(T(422)))), zi(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = Wo({ mode: "visible", children: r.children }, i, 0, null)),
          (o = Sn(o, i, l, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && ir(t, e.child, null, l),
          (t.child.memoizedState = Ss(l)),
          (t.memoizedState = ws),
          o);
  if (!(t.mode & 1)) return zi(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (
      (r = s),
      (o = Error(T(419))),
      (r = Tl(o, r, void 0)),
      zi(e, t, l, r)
    );
  }
  if (((s = (l & e.childLanes) !== 0), Ve || s)) {
    if (((r = Ce), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Dt(e, i), yt(r, e, i, -1)));
    }
    return (Ta(), (r = Tl(Error(T(421)))), zi(e, t, l, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = cy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ye = Zt(i.nextSibling)),
      (Xe = t),
      (le = !0),
      (pt = null),
      e !== null &&
        ((tt[nt++] = Pt),
        (tt[nt++] = Tt),
        (tt[nt++] = kn),
        (Pt = e.id),
        (Tt = e.overflow),
        (kn = t)),
      (t = ka(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ju(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), hs(e.return, t, n));
}
function Ll(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Dd(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ie(e, t, r.children, n), (r = se.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ju(e, n, t);
        else if (e.tag === 19) Ju(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((te(se, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && xo(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ll(t, !1, i, n, o));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && xo(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        Ll(t, !0, n, null, o);
        break;
      case "together":
        Ll(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Cn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = nn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Zm(e, t, n) {
  switch (t.tag) {
    case 3:
      (Nd(t), rr());
      break;
    case 5:
      od(t);
      break;
    case 1:
      He(t.type) && go(t);
      break;
    case 4:
      pa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (te(So, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(se, se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Od(e, t, n)
            : (te(se, se.current & 1),
              (e = Mt(e, t, n)),
              e !== null ? e.sibling : null);
      te(se, se.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Dd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        te(se, se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Td(e, t, n));
  }
  return Mt(e, t, n);
}
var Md, Es, Ad, Id;
Md = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Es = function () {};
Ad = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), yn(xt.current));
    var o = null;
    switch (n) {
      case "input":
        ((i = Hl(e, i)), (r = Hl(e, r)), (o = []));
        break;
      case "select":
        ((i = ue({}, i, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((i = Kl(e, i)), (r = Kl(e, r)), (o = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = mo);
    }
    Yl(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (qr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else (n || (o || (o = []), o.push(u, n)), (n = a));
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (o = o || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (qr.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && re("scroll", e),
                    o || s === a || (o = []))
                  : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Id = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Cr(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function bm(e, t, n) {
  var r = t.pendingProps;
  switch ((sa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Oe(t), null);
    case 1:
      return (He(t.type) && yo(), Oe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        or(),
        ie($e),
        ie(Me),
        ya(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ai(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), pt !== null && (Ls(pt), (pt = null)))),
        Es(e, t),
        Oe(t),
        null
      );
    case 5:
      ma(t);
      var i = yn(oi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Ad(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return (Oe(t), null);
        }
        if (((e = yn(xt.current)), Ai(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[Et] = t), (r[ri] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (re("cancel", r), re("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ir.length; i++) re(Ir[i], r);
              break;
            case "source":
              re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (re("error", r), re("load", r));
              break;
            case "details":
              re("toggle", r);
              break;
            case "input":
              (ou(r, o), re("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                re("invalid", r));
              break;
            case "textarea":
              (su(r, o), re("invalid", r));
          }
          (Yl(n, o), (i = null));
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Mi(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Mi(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : qr.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  re("scroll", r);
            }
          switch (n) {
            case "input":
              (_i(r), lu(r, o, !0));
              break;
            case "textarea":
              (_i(r), au(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = mo);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = af(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === "select" &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Et] = t),
            (e[ri] = r),
            Md(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((l = Xl(n, r)), n)) {
              case "dialog":
                (re("cancel", e), re("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (re("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ir.length; i++) re(Ir[i], e);
                i = r;
                break;
              case "source":
                (re("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (re("error", e), re("load", e), (i = r));
                break;
              case "details":
                (re("toggle", e), (i = r));
                break;
              case "input":
                (ou(e, r), (i = Hl(e, r)), re("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ue({}, r, { value: void 0 })),
                  re("invalid", e));
                break;
              case "textarea":
                (su(e, r), (i = Kl(e, r)), re("invalid", e));
                break;
              default:
                i = r;
            }
            (Yl(n, i), (s = i));
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? ff(e, a)
                  : o === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && uf(e, a))
                    : o === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Yr(e, a)
                        : typeof a == "number" && Yr(e, "" + a)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (qr.hasOwnProperty(o)
                          ? a != null && o === "onScroll" && re("scroll", e)
                          : a != null && Ks(e, o, a, l));
              }
            switch (n) {
              case "input":
                (_i(e), lu(e, r, !1));
                break;
              case "textarea":
                (_i(e), au(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + on(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Yn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Yn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = mo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Oe(t), null);
    case 6:
      if (e && t.stateNode != null) Id(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = yn(oi.current)), yn(xt.current), Ai(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Et] = t),
            (o = r.nodeValue !== n) && ((e = Xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Mi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Mi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Et] = t),
            (t.stateNode = r));
      }
      return (Oe(t), null);
    case 13:
      if (
        (ie(se),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Ye !== null && t.mode & 1 && !(t.flags & 128))
          (Zf(), rr(), (t.flags |= 98560), (o = !1));
        else if (((o = Ai(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(T(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(T(317));
            o[Et] = t;
          } else
            (rr(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Oe(t), (o = !1));
        } else (pt !== null && (Ls(pt), (pt = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || se.current & 1 ? Se === 0 && (Se = 3) : Ta())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null);
    case 4:
      return (
        or(),
        Es(e, t),
        e === null && ti(t.stateNode.containerInfo),
        Oe(t),
        null
      );
    case 10:
      return (fa(t.type._context), Oe(t), null);
    case 17:
      return (He(t.type) && yo(), Oe(t), null);
    case 19:
      if ((ie(se), (o = t.memoizedState), o === null)) return (Oe(t), null);
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Cr(o, !1);
        else {
          if (Se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = xo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Cr(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (te(se, (se.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            me() > sr &&
            ((t.flags |= 128), (r = !0), Cr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Cr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !le)
            )
              return (Oe(t), null);
          } else
            2 * me() - o.renderingStartTime > sr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Cr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = me()),
          (t.sibling = null),
          (n = se.current),
          te(se, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null);
    case 22:
    case 23:
      return (
        Pa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? qe & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function ey(e, t) {
  switch ((sa(t), t.tag)) {
    case 1:
      return (
        He(t.type) && yo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        or(),
        ie($e),
        ie(Me),
        ya(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (ma(t), null);
    case 13:
      if (
        (ie(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(T(340));
        rr();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (ie(se), null);
    case 4:
      return (or(), null);
    case 10:
      return (fa(t.type._context), null);
    case 22:
    case 23:
      return (Pa(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ui = !1,
  De = !1,
  ty = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        fe(e, t, r);
      }
    else n.current = null;
}
function ks(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var Gu = !1;
function ny(e, t) {
  if (((os = fo), (e = Bf()), oa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            c = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (i !== 0 && h.nodeType !== 3) || (s = l + i),
                h !== o || (r !== 0 && h.nodeType !== 3) || (a = l + r),
                h.nodeType === 3 && (l += h.nodeValue.length),
                (w = h.firstChild) !== null;
            )
              ((p = h), (h = w));
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++u === i && (s = l),
                p === o && ++c === r && (a = l),
                (w = h.nextSibling) !== null)
              )
                break;
              ((h = p), (p = h.parentNode));
            }
            h = w;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ls = { focusedElem: e, selectionRange: n }, fo = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (D = e));
    else
      for (; D !== null; ) {
        t = D;
        try {
          var E = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (E !== null) {
                  var S = E.memoizedProps,
                    R = E.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : ct(t.type, S),
                      R,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (C) {
          fe(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (D = e));
          break;
        }
        D = t.return;
      }
  return ((E = Gu), (Gu = !1), E);
}
function Hr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        ((i.destroy = void 0), o !== void 0 && ks(t, n, o));
      }
      i = i.next;
    } while (i !== r);
  }
}
function $o(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function zd(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), zd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Et], delete t[ri], delete t[us], delete t[Fm], delete t[Bm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Ud(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ud(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Cs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = mo)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cs(e, t, n), e = e.sibling; e !== null; )
      (Cs(e, t, n), (e = e.sibling));
}
function _s(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_s(e, t, n), e = e.sibling; e !== null; )
      (_s(e, t, n), (e = e.sibling));
}
var Pe = null,
  ft = !1;
function Vt(e, t, n) {
  for (n = n.child; n !== null; ) (Fd(e, t, n), (n = n.sibling));
}
function Fd(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function")
    try {
      kt.onCommitFiberUnmount(Ao, n);
    } catch {}
  switch (n.tag) {
    case 5:
      De || Wn(n, t);
    case 6:
      var r = Pe,
        i = ft;
      ((Pe = null),
        Vt(e, t, n),
        (Pe = r),
        (ft = i),
        Pe !== null &&
          (ft
            ? ((e = Pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Pe.removeChild(n.stateNode)));
      break;
    case 18:
      Pe !== null &&
        (ft
          ? ((e = Pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? kl(e.parentNode, n)
              : e.nodeType === 1 && kl(e, n),
            Zr(e))
          : kl(Pe, n.stateNode));
      break;
    case 4:
      ((r = Pe),
        (i = ft),
        (Pe = n.stateNode.containerInfo),
        (ft = !0),
        Vt(e, t, n),
        (Pe = r),
        (ft = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !De &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          ((o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && ks(n, t, l),
            (i = i.next));
        } while (i !== r);
      }
      Vt(e, t, n);
      break;
    case 1:
      if (
        !De &&
        (Wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (s) {
          fe(n, t, s);
        }
      Vt(e, t, n);
      break;
    case 21:
      Vt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((De = (r = De) || n.memoizedState !== null), Vt(e, t, n), (De = r))
        : Vt(e, t, n);
      break;
    default:
      Vt(e, t, n);
  }
}
function bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new ty()),
      t.forEach(function (r) {
        var i = fy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ((Pe = s.stateNode), (ft = !1));
              break e;
            case 3:
              ((Pe = s.stateNode.containerInfo), (ft = !0));
              break e;
            case 4:
              ((Pe = s.stateNode.containerInfo), (ft = !0));
              break e;
          }
          s = s.return;
        }
        if (Pe === null) throw Error(T(160));
        (Fd(o, l, i), (Pe = null), (ft = !1));
        var a = i.alternate;
        (a !== null && (a.return = null), (i.return = null));
      } catch (u) {
        fe(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Bd(t, e), (t = t.sibling));
}
function Bd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), wt(e), r & 4)) {
        try {
          (Hr(3, e, e.return), $o(3, e));
        } catch (S) {
          fe(e, e.return, S);
        }
        try {
          Hr(5, e, e.return);
        } catch (S) {
          fe(e, e.return, S);
        }
      }
      break;
    case 1:
      (ut(t, e), wt(e), r & 512 && n !== null && Wn(n, n.return));
      break;
    case 5:
      if (
        (ut(t, e),
        wt(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Yr(i, "");
        } catch (S) {
          fe(e, e.return, S);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (s === "input" && o.type === "radio" && o.name != null && lf(i, o),
              Xl(s, l));
            var u = Xl(s, o);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l],
                h = a[l + 1];
              c === "style"
                ? ff(i, h)
                : c === "dangerouslySetInnerHTML"
                  ? uf(i, h)
                  : c === "children"
                    ? Yr(i, h)
                    : Ks(i, c, h, u);
            }
            switch (s) {
              case "input":
                Wl(i, o);
                break;
              case "textarea":
                sf(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? Yn(i, !!o.multiple, w, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Yn(i, !!o.multiple, o.defaultValue, !0)
                      : Yn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ri] = o;
          } catch (S) {
            fe(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ut(t, e), wt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        ((i = e.stateNode), (o = e.memoizedProps));
        try {
          i.nodeValue = o;
        } catch (S) {
          fe(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ut(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zr(t.containerInfo);
        } catch (S) {
          fe(e, e.return, S);
        }
      break;
    case 4:
      (ut(t, e), wt(e));
      break;
    case 13:
      (ut(t, e),
        wt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (_a = me())),
        r & 4 && bu(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((De = (u = De) || c), ut(t, e), (De = u)) : ut(t, e),
        wt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (D = e, c = e.child; c !== null; ) {
            for (h = D = c; D !== null; ) {
              switch (((p = D), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hr(4, p, p.return);
                  break;
                case 1:
                  Wn(p, p.return);
                  var E = p.stateNode;
                  if (typeof E.componentWillUnmount == "function") {
                    ((r = p), (n = p.return));
                    try {
                      ((t = r),
                        (E.props = t.memoizedProps),
                        (E.state = t.memoizedState),
                        E.componentWillUnmount());
                    } catch (S) {
                      fe(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Wn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    tc(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (D = w)) : tc(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                ((i = h.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = h.stateNode),
                      (a = h.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = cf("display", l))));
              } catch (S) {
                fe(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (S) {
                fe(e, e.return, S);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            ((h.child.return = h), (h = h.child));
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            (c === h && (c = null), (h = h.return));
          }
          (c === h && (c = null),
            (h.sibling.return = h.return),
            (h = h.sibling));
        }
      }
      break;
    case 19:
      (ut(t, e), wt(e), r & 4 && bu(e));
      break;
    case 21:
      break;
    default:
      (ut(t, e), wt(e));
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ud(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Yr(i, ""), (r.flags &= -33));
          var o = Zu(e);
          _s(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Zu(e);
          Cs(e, s, l);
          break;
        default:
          throw Error(T(161));
      }
    } catch (a) {
      fe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ry(e, t, n) {
  ((D = e), jd(e));
}
function jd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var i = D,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Ui;
      if (!l) {
        var s = i.alternate,
          a = (s !== null && s.memoizedState !== null) || De;
        s = Ui;
        var u = De;
        if (((Ui = l), (De = a) && !u))
          for (D = i; D !== null; )
            ((l = D),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? nc(i)
                : a !== null
                  ? ((a.return = l), (D = a))
                  : nc(i));
        for (; o !== null; ) ((D = o), jd(o), (o = o.sibling));
        ((D = i), (Ui = s), (De = u));
      }
      ec(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (D = o)) : ec(e);
  }
}
function ec(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              De || $o(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !De)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Uu(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Uu(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && Zr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        De || (t.flags & 512 && xs(t));
      } catch (p) {
        fe(t, t.return, p);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (D = n));
      break;
    }
    D = t.return;
  }
}
function tc(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (D = n));
      break;
    }
    D = t.return;
  }
}
function nc(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            $o(4, t);
          } catch (a) {
            fe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              fe(t, i, a);
            }
          }
          var o = t.return;
          try {
            xs(t);
          } catch (a) {
            fe(t, o, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            xs(t);
          } catch (a) {
            fe(t, l, a);
          }
      }
    } catch (a) {
      fe(t, t.return, a);
    }
    if (t === e) {
      D = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      ((s.return = t.return), (D = s));
      break;
    }
    D = t.return;
  }
}
var iy = Math.ceil,
  Ro = At.ReactCurrentDispatcher,
  xa = At.ReactCurrentOwner,
  ot = At.ReactCurrentBatchConfig,
  X = 0,
  Ce = null,
  ge = null,
  Te = 0,
  qe = 0,
  Qn = an(0),
  Se = 0,
  ui = null,
  Cn = 0,
  Ho = 0,
  Ca = 0,
  Wr = null,
  je = null,
  _a = 0,
  sr = 1 / 0,
  _t = null,
  Po = !1,
  Rs = null,
  en = null,
  Fi = !1,
  Yt = null,
  To = 0,
  Qr = 0,
  Ps = null,
  bi = -1,
  eo = 0;
function ze() {
  return X & 6 ? me() : bi !== -1 ? bi : (bi = me());
}
function tn(e) {
  return e.mode & 1
    ? X & 2 && Te !== 0
      ? Te & -Te
      : Vm.transition !== null
        ? (eo === 0 && (eo = xf()), eo)
        : ((e = Z),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nf(e.type))),
          e)
    : 1;
}
function yt(e, t, n, r) {
  if (50 < Qr) throw ((Qr = 0), (Ps = null), Error(T(185)));
  (hi(e, n, r),
    (!(X & 2) || e !== Ce) &&
      (e === Ce && (!(X & 2) && (Ho |= n), Se === 4 && Kt(e, Te)),
      We(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((sr = me() + 500), Bo && un())));
}
function We(e, t) {
  var n = e.callbackNode;
  Vp(e, t);
  var r = co(e, e === Ce ? Te : 0);
  if (r === 0)
    (n !== null && fu(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && fu(n), t === 1))
      (e.tag === 0 ? jm(rc.bind(null, e)) : Xf(rc.bind(null, e)),
        zm(function () {
          !(X & 6) && un();
        }),
        (n = null));
    else {
      switch (Cf(r)) {
        case 1:
          n = Gs;
          break;
        case 4:
          n = Ef;
          break;
        case 16:
          n = uo;
          break;
        case 536870912:
          n = kf;
          break;
        default:
          n = uo;
      }
      n = Yd(n, Vd.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Vd(e, t) {
  if (((bi = -1), (eo = 0), X & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (bn() && e.callbackNode !== n) return null;
  var r = co(e, e === Ce ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Lo(e, r);
  else {
    t = r;
    var i = X;
    X |= 2;
    var o = Hd();
    (Ce !== e || Te !== t) && ((_t = null), (sr = me() + 500), wn(e, t));
    do
      try {
        sy();
        break;
      } catch (s) {
        $d(e, s);
      }
    while (!0);
    (ca(),
      (Ro.current = o),
      (X = i),
      ge !== null ? (t = 0) : ((Ce = null), (Te = 0), (t = Se)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = es(e)), i !== 0 && ((r = i), (t = Ts(e, i)))), t === 1)
    )
      throw ((n = ui), wn(e, 0), Kt(e, r), We(e, me()), n);
    if (t === 6) Kt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !oy(i) &&
          ((t = Lo(e, r)),
          t === 2 && ((o = es(e)), o !== 0 && ((r = o), (t = Ts(e, o)))),
          t === 1))
      )
        throw ((n = ui), wn(e, 0), Kt(e, r), We(e, me()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          hn(e, je, _t);
          break;
        case 3:
          if (
            (Kt(e, r), (r & 130023424) === r && ((t = _a + 500 - me()), 10 < t))
          ) {
            if (co(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (ze(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = as(hn.bind(null, e, je, _t), t);
            break;
          }
          hn(e, je, _t);
          break;
        case 4:
          if ((Kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - mt(r);
            ((o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o));
          }
          if (
            ((r = i),
            (r = me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * iy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = as(hn.bind(null, e, je, _t), r);
            break;
          }
          hn(e, je, _t);
          break;
        case 5:
          hn(e, je, _t);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return (We(e, me()), e.callbackNode === n ? Vd.bind(null, e) : null);
}
function Ts(e, t) {
  var n = Wr;
  return (
    e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256),
    (e = Lo(e, t)),
    e !== 2 && ((t = je), (je = n), t !== null && Ls(t)),
    e
  );
}
function Ls(e) {
  je === null ? (je = e) : je.push.apply(je, e);
}
function oy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!gt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Kt(e, t) {
  for (
    t &= ~Ca,
      t &= ~Ho,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - mt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function rc(e) {
  if (X & 6) throw Error(T(327));
  bn();
  var t = co(e, 0);
  if (!(t & 1)) return (We(e, me()), null);
  var n = Lo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = es(e);
    r !== 0 && ((t = r), (n = Ts(e, r)));
  }
  if (n === 1) throw ((n = ui), wn(e, 0), Kt(e, t), We(e, me()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    hn(e, je, _t),
    We(e, me()),
    null
  );
}
function Ra(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    ((X = n), X === 0 && ((sr = me() + 500), Bo && un()));
  }
}
function _n(e) {
  Yt !== null && Yt.tag === 0 && !(X & 6) && bn();
  var t = X;
  X |= 1;
  var n = ot.transition,
    r = Z;
  try {
    if (((ot.transition = null), (Z = 1), e)) return e();
  } finally {
    ((Z = r), (ot.transition = n), (X = t), !(X & 6) && un());
  }
}
function Pa() {
  ((qe = Qn.current), ie(Qn));
}
function wn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Im(n)), ge !== null))
    for (n = ge.return; n !== null; ) {
      var r = n;
      switch ((sa(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && yo());
          break;
        case 3:
          (or(), ie($e), ie(Me), ya());
          break;
        case 5:
          ma(r);
          break;
        case 4:
          or();
          break;
        case 13:
          ie(se);
          break;
        case 19:
          ie(se);
          break;
        case 10:
          fa(r.type._context);
          break;
        case 22:
        case 23:
          Pa();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ge = e = nn(e.current, null)),
    (Te = qe = t),
    (Se = 0),
    (ui = null),
    (Ca = Ho = Cn = 0),
    (je = Wr = null),
    mn !== null)
  ) {
    for (t = 0; t < mn.length; t++)
      if (((n = mn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          ((o.next = i), (r.next = l));
        }
        n.pending = r;
      }
    mn = null;
  }
  return e;
}
function $d(e, t) {
  do {
    var n = ge;
    try {
      if ((ca(), (Ji.current = _o), Co)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        Co = !1;
      }
      if (
        ((xn = 0),
        (xe = we = ae = null),
        ($r = !1),
        (li = 0),
        (xa.current = null),
        n === null || n.return === null)
      ) {
        ((Se = 1), (ui = t), (ge = null));
        break;
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = Te),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = s,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var w = Wu(l);
          if (w !== null) {
            ((w.flags &= -257),
              Qu(w, l, s, o, t),
              w.mode & 1 && Hu(o, u, t),
              (t = w),
              (a = u));
            var E = t.updateQueue;
            if (E === null) {
              var S = new Set();
              (S.add(a), (t.updateQueue = S));
            } else E.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (Hu(o, u, t), Ta());
              break e;
            }
            a = Error(T(426));
          }
        } else if (le && s.mode & 1) {
          var R = Wu(l);
          if (R !== null) {
            (!(R.flags & 65536) && (R.flags |= 256),
              Qu(R, l, s, o, t),
              aa(lr(a, s)));
            break e;
          }
        }
        ((o = a = lr(a, s)),
          Se !== 4 && (Se = 2),
          Wr === null ? (Wr = [o]) : Wr.push(o),
          (o = l));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var d = _d(o, a, t);
              zu(o, d);
              break e;
            case 1:
              s = a;
              var f = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (en === null || !en.has(m))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var C = Rd(o, s, t);
                zu(o, C);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Qd(n);
    } catch (P) {
      ((t = P), ge === n && n !== null && (ge = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Hd() {
  var e = Ro.current;
  return ((Ro.current = _o), e === null ? _o : e);
}
function Ta() {
  ((Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    Ce === null || (!(Cn & 268435455) && !(Ho & 268435455)) || Kt(Ce, Te));
}
function Lo(e, t) {
  var n = X;
  X |= 2;
  var r = Hd();
  (Ce !== e || Te !== t) && ((_t = null), wn(e, t));
  do
    try {
      ly();
      break;
    } catch (i) {
      $d(e, i);
    }
  while (!0);
  if ((ca(), (X = n), (Ro.current = r), ge !== null)) throw Error(T(261));
  return ((Ce = null), (Te = 0), Se);
}
function ly() {
  for (; ge !== null; ) Wd(ge);
}
function sy() {
  for (; ge !== null && !Dp(); ) Wd(ge);
}
function Wd(e) {
  var t = qd(e.alternate, e, qe);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Qd(e) : (ge = t),
    (xa.current = null));
}
function Qd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ey(n, t)), n !== null)) {
        ((n.flags &= 32767), (ge = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Se = 6), (ge = null));
        return;
      }
    } else if (((n = bm(n, t, qe)), n !== null)) {
      ge = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  Se === 0 && (Se = 5);
}
function hn(e, t, n) {
  var r = Z,
    i = ot.transition;
  try {
    ((ot.transition = null), (Z = 1), ay(e, t, n, r));
  } finally {
    ((ot.transition = i), (Z = r));
  }
  return null;
}
function ay(e, t, n, r) {
  do bn();
  while (Yt !== null);
  if (X & 6) throw Error(T(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    ($p(e, o),
    e === Ce && ((ge = Ce = null), (Te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fi ||
      ((Fi = !0),
      Yd(uo, function () {
        return (bn(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = ot.transition), (ot.transition = null));
    var l = Z;
    Z = 1;
    var s = X;
    ((X |= 4),
      (xa.current = null),
      ny(e, n),
      Bd(n, e),
      Tm(ls),
      (fo = !!os),
      (ls = os = null),
      (e.current = n),
      ry(n),
      Mp(),
      (X = s),
      (Z = l),
      (ot.transition = o));
  } else e.current = n;
  if (
    (Fi && ((Fi = !1), (Yt = e), (To = i)),
    (o = e.pendingLanes),
    o === 0 && (en = null),
    zp(n.stateNode),
    We(e, me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (Po) throw ((Po = !1), (e = Rs), (Rs = null), e);
  return (
    To & 1 && e.tag !== 0 && bn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ps ? Qr++ : ((Qr = 0), (Ps = e))) : (Qr = 0),
    un(),
    null
  );
}
function bn() {
  if (Yt !== null) {
    var e = Cf(To),
      t = ot.transition,
      n = Z;
    try {
      if (((ot.transition = null), (Z = 16 > e ? 16 : e), Yt === null))
        var r = !1;
      else {
        if (((e = Yt), (Yt = null), (To = 0), X & 6)) throw Error(T(331));
        var i = X;
        for (X |= 4, D = e.current; D !== null; ) {
          var o = D,
            l = o.child;
          if (D.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (D = u; D !== null; ) {
                  var c = D;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hr(8, c, o);
                  }
                  var h = c.child;
                  if (h !== null) ((h.return = c), (D = h));
                  else
                    for (; D !== null; ) {
                      c = D;
                      var p = c.sibling,
                        w = c.return;
                      if ((zd(c), c === u)) {
                        D = null;
                        break;
                      }
                      if (p !== null) {
                        ((p.return = w), (D = p));
                        break;
                      }
                      D = w;
                    }
                }
              }
              var E = o.alternate;
              if (E !== null) {
                var S = E.child;
                if (S !== null) {
                  E.child = null;
                  do {
                    var R = S.sibling;
                    ((S.sibling = null), (S = R));
                  } while (S !== null);
                }
              }
              D = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) ((l.return = o), (D = l));
          else
            e: for (; D !== null; ) {
              if (((o = D), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hr(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                ((d.return = o.return), (D = d));
                break e;
              }
              D = o.return;
            }
        }
        var f = e.current;
        for (D = f; D !== null; ) {
          l = D;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null) ((m.return = l), (D = m));
          else
            e: for (l = f; D !== null; ) {
              if (((s = D), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $o(9, s);
                  }
                } catch (P) {
                  fe(s, s.return, P);
                }
              if (s === l) {
                D = null;
                break e;
              }
              var C = s.sibling;
              if (C !== null) {
                ((C.return = s.return), (D = C));
                break e;
              }
              D = s.return;
            }
        }
        if (
          ((X = i), un(), kt && typeof kt.onPostCommitFiberRoot == "function")
        )
          try {
            kt.onPostCommitFiberRoot(Ao, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((Z = n), (ot.transition = t));
    }
  }
  return !1;
}
function ic(e, t, n) {
  ((t = lr(n, t)),
    (t = _d(e, t, 1)),
    (e = bt(e, t, 1)),
    (t = ze()),
    e !== null && (hi(e, 1, t), We(e, t)));
}
function fe(e, t, n) {
  if (e.tag === 3) ic(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ic(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (en === null || !en.has(r)))
        ) {
          ((e = lr(n, e)),
            (e = Rd(t, e, 1)),
            (t = bt(t, e, 1)),
            (e = ze()),
            t !== null && (hi(t, 1, e), We(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function uy(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (Te & n) === n &&
      (Se === 4 || (Se === 3 && (Te & 130023424) === Te && 500 > me() - _a)
        ? wn(e, 0)
        : (Ca |= n)),
    We(e, t));
}
function Kd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ti), (Ti <<= 1), !(Ti & 130023424) && (Ti = 4194304))
      : (t = 1));
  var n = ze();
  ((e = Dt(e, t)), e !== null && (hi(e, t, n), We(e, n)));
}
function cy(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Kd(e, n));
}
function fy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  (r !== null && r.delete(t), Kd(e, n));
}
var qd;
qd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || $e.current) Ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ve = !1), Zm(e, t, n));
      Ve = !!(e.flags & 131072);
    }
  else ((Ve = !1), le && t.flags & 1048576 && Jf(t, wo, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Zi(e, t), (e = t.pendingProps));
      var i = nr(t, Me.current);
      (Zn(t, n), (i = va(null, t, r, e, i, n)));
      var o = wa();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            He(r) ? ((o = !0), go(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ha(t),
            (i.updater = jo),
            (t.stateNode = i),
            (i._reactInternals = t),
            ms(t, r, e, n),
            (t = vs(null, t, r, !0, o, n)))
          : ((t.tag = 0), le && o && la(t), Ie(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Zi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = hy(r)),
          (e = ct(r, e)),
          i)
        ) {
          case 0:
            t = gs(null, t, r, e, n);
            break e;
          case 1:
            t = Yu(null, t, r, e, n);
            break e;
          case 11:
            t = Ku(null, t, r, e, n);
            break e;
          case 14:
            t = qu(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ct(r, i)),
        gs(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ct(r, i)),
        Yu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Nd(t), e === null)) throw Error(T(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          ed(e, t),
          ko(t, r, null, n));
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ((i = lr(Error(T(423)), t)), (t = Xu(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = lr(Error(T(424)), t)), (t = Xu(e, t, r, n, i)));
            break e;
          } else
            for (
              Ye = Zt(t.stateNode.containerInfo.firstChild),
                Xe = t,
                le = !0,
                pt = null,
                n = id(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((rr(), r === i)) {
            t = Mt(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        od(t),
        e === null && ds(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        ss(r, i) ? (l = null) : o !== null && ss(r, o) && (t.flags |= 32),
        Ld(e, t),
        Ie(e, t, l, n),
        t.child
      );
    case 6:
      return (e === null && ds(t), null);
    case 13:
      return Od(e, t, n);
    case 4:
      return (
        pa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ir(t, null, r, n)) : Ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ct(r, i)),
        Ku(e, t, r, i, n)
      );
    case 7:
      return (Ie(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ie(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ie(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          te(So, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (gt(o.value, l)) {
            if (o.children === i.children && !$e.current) {
              t = Mt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      ((a = Lt(-1, n & -n)), (a.tag = 2));
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a));
                      }
                    }
                    ((o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      hs(o.return, n, t),
                      (s.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(T(341));
                ((l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  hs(l, n, t),
                  (l = o.sibling));
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    ((o.return = l.return), (l = o));
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        (Ie(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Zn(t, n),
        (i = lt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = ct(r, t.pendingProps)),
        (i = ct(r.type, i)),
        qu(e, t, r, i, n)
      );
    case 15:
      return Pd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ct(r, i)),
        Zi(e, t),
        (t.tag = 1),
        He(r) ? ((e = !0), go(t)) : (e = !1),
        Zn(t, n),
        nd(t, r, i),
        ms(t, r, i, n),
        vs(null, t, r, !0, e, n)
      );
    case 19:
      return Dd(e, t, n);
    case 22:
      return Td(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Yd(e, t) {
  return Sf(e, t);
}
function dy(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function it(e, t, n, r) {
  return new dy(e, t, n, r);
}
function La(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function hy(e) {
  if (typeof e == "function") return La(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ys)) return 11;
    if (e === Xs) return 14;
  }
  return 2;
}
function nn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = it(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function to(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) La(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case In:
        return Sn(n.children, i, o, t);
      case qs:
        ((l = 8), (i |= 8));
        break;
      case Bl:
        return (
          (e = it(12, n, t, i | 2)),
          (e.elementType = Bl),
          (e.lanes = o),
          e
        );
      case jl:
        return ((e = it(13, n, t, i)), (e.elementType = jl), (e.lanes = o), e);
      case Vl:
        return ((e = it(19, n, t, i)), (e.elementType = Vl), (e.lanes = o), e);
      case nf:
        return Wo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ef:
              l = 10;
              break e;
            case tf:
              l = 9;
              break e;
            case Ys:
              l = 11;
              break e;
            case Xs:
              l = 14;
              break e;
            case Ht:
              ((l = 16), (r = null));
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = it(l, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function Sn(e, t, n, r) {
  return ((e = it(7, e, r, t)), (e.lanes = n), e);
}
function Wo(e, t, n, r) {
  return (
    (e = it(22, e, r, t)),
    (e.elementType = nf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Nl(e, t, n) {
  return ((e = it(6, e, null, t)), (e.lanes = n), e);
}
function Ol(e, t, n) {
  return (
    (t = it(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function py(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = fl(0)),
    (this.expirationTimes = fl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = fl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function Na(e, t, n, r, i, o, l, s, a) {
  return (
    (e = new py(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = it(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ha(o),
    e
  );
}
function my(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: An,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Xd(e) {
  if (!e) return ln;
  e = e._reactInternals;
  e: {
    if (Pn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return Yf(e, n, t);
  }
  return t;
}
function Jd(e, t, n, r, i, o, l, s, a) {
  return (
    (e = Na(n, r, !0, e, i, o, l, s, a)),
    (e.context = Xd(null)),
    (n = e.current),
    (r = ze()),
    (i = tn(n)),
    (o = Lt(r, i)),
    (o.callback = t ?? null),
    bt(n, o, i),
    (e.current.lanes = i),
    hi(e, i, r),
    We(e, r),
    e
  );
}
function Qo(e, t, n, r) {
  var i = t.current,
    o = ze(),
    l = tn(i);
  return (
    (n = Xd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lt(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = bt(i, t, l)),
    e !== null && (yt(e, i, l, o), Xi(e, i, l)),
    l
  );
}
function No(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function oc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Oa(e, t) {
  (oc(e, t), (e = e.alternate) && oc(e, t));
}
function yy() {
  return null;
}
var Gd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Da(e) {
  this._internalRoot = e;
}
Ko.prototype.render = Da.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Qo(e, t, null, null);
};
Ko.prototype.unmount = Da.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (_n(function () {
      Qo(null, e, null, null);
    }),
      (t[Ot] = null));
  }
};
function Ko(e) {
  this._internalRoot = e;
}
Ko.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Pf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
    (Qt.splice(n, 0, e), n === 0 && Lf(e));
  }
};
function Ma(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function qo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function lc() {}
function gy(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = No(l);
        o.call(u);
      };
    }
    var l = Jd(t, r, e, 0, null, !1, !1, "", lc);
    return (
      (e._reactRootContainer = l),
      (e[Ot] = l.current),
      ti(e.nodeType === 8 ? e.parentNode : e),
      _n(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = No(a);
      s.call(u);
    };
  }
  var a = Na(e, 0, !1, null, null, !1, !1, "", lc);
  return (
    (e._reactRootContainer = a),
    (e[Ot] = a.current),
    ti(e.nodeType === 8 ? e.parentNode : e),
    _n(function () {
      Qo(t, a, n, r);
    }),
    a
  );
}
function Yo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var a = No(l);
        s.call(a);
      };
    }
    Qo(t, l, e, i);
  } else l = gy(n, t, e, i, r);
  return No(l);
}
_f = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ar(t.pendingLanes);
        n !== 0 &&
          (Zs(t, n | 1), We(t, me()), !(X & 6) && ((sr = me() + 500), un()));
      }
      break;
    case 13:
      (_n(function () {
        var r = Dt(e, 1);
        if (r !== null) {
          var i = ze();
          yt(r, e, 1, i);
        }
      }),
        Oa(e, 1));
  }
};
bs = function (e) {
  if (e.tag === 13) {
    var t = Dt(e, 134217728);
    if (t !== null) {
      var n = ze();
      yt(t, e, 134217728, n);
    }
    Oa(e, 134217728);
  }
};
Rf = function (e) {
  if (e.tag === 13) {
    var t = tn(e),
      n = Dt(e, t);
    if (n !== null) {
      var r = ze();
      yt(n, e, t, r);
    }
    Oa(e, t);
  }
};
Pf = function () {
  return Z;
};
Tf = function (e, t) {
  var n = Z;
  try {
    return ((Z = e), t());
  } finally {
    Z = n;
  }
};
Gl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Wl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Fo(r);
            if (!i) throw Error(T(90));
            (of(r), Wl(r, i));
          }
        }
      }
      break;
    case "textarea":
      sf(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Yn(e, !!n.multiple, t, !1));
  }
};
pf = Ra;
mf = _n;
var vy = { usingClientEntryPoint: !1, Events: [mi, Bn, Fo, df, hf, Ra] },
  _r = {
    findFiberByHostInstance: pn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  wy = {
    bundleType: _r.bundleType,
    version: _r.version,
    rendererPackageName: _r.rendererPackageName,
    rendererConfig: _r.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: At.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = vf(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: _r.findFiberByHostInstance || yy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Bi.isDisabled && Bi.supportsFiber)
    try {
      ((Ao = Bi.inject(wy)), (kt = Bi));
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vy;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ma(t)) throw Error(T(200));
  return my(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!Ma(e)) throw Error(T(299));
  var n = !1,
    r = "",
    i = Gd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Na(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ot] = t.current),
    ti(e.nodeType === 8 ? e.parentNode : e),
    new Da(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return ((e = vf(t)), (e = e === null ? null : e.stateNode), e);
};
Ge.flushSync = function (e) {
  return _n(e);
};
Ge.hydrate = function (e, t, n) {
  if (!qo(t)) throw Error(T(200));
  return Yo(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!Ma(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = Gd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Jd(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[Ot] = t.current),
    ti(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new Ko(t);
};
Ge.render = function (e, t, n) {
  if (!qo(t)) throw Error(T(200));
  return Yo(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!qo(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (_n(function () {
        Yo(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Ot] = null));
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = Ra;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!qo(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Yo(e, t, n, !1, r);
};
Ge.version = "18.2.0-next-9e3b772b8-20220608";
function Zd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zd);
    } catch (e) {
      console.error(e);
    }
}
(Zd(), (Xc.exports = Ge));
var Aa = Xc.exports;
const Sy = Fc(Aa),
  Ey = Uc({ __proto__: null, default: Sy }, [Aa]);
var sc = Aa;
((Ul.createRoot = sc.createRoot), (Ul.hydrateRoot = sc.hydrateRoot));
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function de() {
  return (
    (de = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    de.apply(this, arguments)
  );
}
var pe;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(pe || (pe = {}));
const ac = "popstate";
function ky(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: l, hash: s } = r.location;
    return ci(
      "",
      { pathname: o, search: l, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : gi(i);
  }
  return Cy(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ar(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function xy() {
  return Math.random().toString(36).substr(2, 8);
}
function uc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ci(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    de(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? It(t) : t,
      { state: n, key: (t && t.key) || r || xy() },
    )
  );
}
function gi(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function It(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function Cy(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    s = pe.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), l.replaceState(de({}, l.state, { idx: u }), ""));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function h() {
    s = pe.Pop;
    let R = c(),
      d = R == null ? null : R - u;
    ((u = R), a && a({ action: s, location: S.location, delta: d }));
  }
  function p(R, d) {
    s = pe.Push;
    let f = ci(S.location, R, d);
    (n && n(f, R), (u = c() + 1));
    let m = uc(f, u),
      C = S.createHref(f);
    try {
      l.pushState(m, "", C);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      i.location.assign(C);
    }
    o && a && a({ action: s, location: S.location, delta: 1 });
  }
  function w(R, d) {
    s = pe.Replace;
    let f = ci(S.location, R, d);
    (n && n(f, R), (u = c()));
    let m = uc(f, u),
      C = S.createHref(f);
    (l.replaceState(m, "", C),
      o && a && a({ action: s, location: S.location, delta: 0 }));
  }
  function E(R) {
    let d = i.location.origin !== "null" ? i.location.origin : i.location.href,
      f = typeof R == "string" ? R : gi(R);
    return (
      (f = f.replace(/ $/, "%20")),
      W(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f,
      ),
      new URL(f, d)
    );
  }
  let S = {
    get action() {
      return s;
    },
    get location() {
      return e(i, l);
    },
    listen(R) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(ac, h),
        (a = R),
        () => {
          (i.removeEventListener(ac, h), (a = null));
        }
      );
    },
    createHref(R) {
      return t(i, R);
    },
    createURL: E,
    encodeLocation(R) {
      let d = E(R);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: p,
    replace: w,
    go(R) {
      return l.go(R);
    },
  };
  return S;
}
var ce;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(ce || (ce = {}));
const _y = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Ry(e) {
  return e.index === !0;
}
function Ns(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let l = [...n, o],
        s = typeof i.id == "string" ? i.id : l.join("-");
      if (
        (W(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route",
        ),
        W(
          !r[s],
          'Found a route id collision on id "' +
            s +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Ry(i))
      ) {
        let a = de({}, i, t(i), { id: s });
        return ((r[s] = a), a);
      } else {
        let a = de({}, i, t(i), { id: s, children: void 0 });
        return (
          (r[s] = a),
          i.children && (a.children = Ns(i.children, t, l, r)),
          a
        );
      }
    })
  );
}
function Kn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? It(t) : t,
    i = vi(r.pathname || "/", n);
  if (i == null) return null;
  let o = bd(e);
  Ty(o);
  let l = null;
  for (let s = 0; l == null && s < o.length; ++s) {
    let a = jy(i);
    l = Uy(o[s], a);
  }
  return l;
}
function Py(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function bd(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let i = (o, l, s) => {
    let a = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (W(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = rn([r, a.relativePath]),
      c = n.concat(a);
    (o.children &&
      o.children.length > 0 &&
      (W(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      bd(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: Iy(u, o.index), routesMeta: c }));
  };
  return (
    e.forEach((o, l) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) i(o, l);
      else for (let a of eh(o.path)) i(o, l, a);
    }),
    t
  );
}
function eh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = eh(r.join("/")),
    s = [];
  return (
    s.push(...l.map((a) => (a === "" ? o : [o, a].join("/")))),
    i && s.push(...l),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Ty(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : zy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Ly = /^:[\w-]+$/,
  Ny = 3,
  Oy = 2,
  Dy = 1,
  My = 10,
  Ay = -2,
  cc = (e) => e === "*";
function Iy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(cc) && (r += Ay),
    t && (r += Oy),
    n
      .filter((i) => !cc(i))
      .reduce((i, o) => i + (Ly.test(o) ? Ny : o === "" ? Dy : My), r)
  );
}
function zy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Uy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      a = l === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = Fy(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        u,
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let h = s.route;
    (o.push({
      params: r,
      pathname: rn([i, c.pathname]),
      pathnameBase: Hy(rn([i, c.pathnameBase])),
      route: h,
    }),
      c.pathnameBase !== "/" && (i = rn([i, c.pathnameBase])));
  }
  return o;
}
function Fy(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = By(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: r.reduce((u, c, h) => {
      let { paramName: p, isOptional: w } = c;
      if (p === "*") {
        let S = s[h] || "";
        l = o.slice(0, o.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const E = s[h];
      return (
        w && !E ? (u[p] = void 0) : (u[p] = (E || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function By(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ar(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, s, a) => (
            r.push({ paramName: s, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function jy(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ar(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function vi(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Vy(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? It(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : $y(n, t)) : t,
    search: Wy(r),
    hash: Qy(i),
  };
}
function $y(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Dl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function th(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function nh(e, t) {
  let n = th(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function rh(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = It(e))
    : ((i = de({}, e)),
      W(
        !i.pathname || !i.pathname.includes("?"),
        Dl("?", "pathname", "search", i),
      ),
      W(
        !i.pathname || !i.pathname.includes("#"),
        Dl("#", "pathname", "hash", i),
      ),
      W(!i.search || !i.search.includes("#"), Dl("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    s;
  if (l == null) s = n;
  else {
    let h = t.length - 1;
    if (!r && l.startsWith("..")) {
      let p = l.split("/");
      for (; p[0] === ".."; ) (p.shift(), (h -= 1));
      i.pathname = p.join("/");
    }
    s = h >= 0 ? t[h] : "/";
  }
  let a = Vy(i, s),
    u = l && l !== "/" && l.endsWith("/"),
    c = (o || l === ".") && n.endsWith("/");
  return (!a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a);
}
const rn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Hy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Wy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Qy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Ia {
  constructor(t, n, r, i) {
    (i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r));
  }
}
function ih(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const oh = ["post", "put", "patch", "delete"],
  Ky = new Set(oh),
  qy = ["get", ...oh],
  Yy = new Set(qy),
  Xy = new Set([301, 302, 303, 307, 308]),
  Jy = new Set([307, 308]),
  Ml = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Gy = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Rr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  lh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Zy = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  sh = "remix-router-transitions";
function by(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  W(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary;
    i = (v) => ({ hasErrorBoundary: g(v) });
  } else i = Zy;
  let o = {},
    l = Ns(e.routes, i, void 0, o),
    s,
    a = e.basename || "/",
    u = de(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future,
    ),
    c = null,
    h = new Set(),
    p = null,
    w = null,
    E = null,
    S = e.hydrationData != null,
    R = Kn(l, e.history.location, a),
    d = null;
  if (R == null) {
    let g = et(404, { pathname: e.history.location.pathname }),
      { matches: v, route: _ } = vc(l);
    ((R = v), (d = { [_.id]: g }));
  }
  let f,
    m = R.some((g) => g.route.lazy),
    C = R.some((g) => g.route.loader);
  if (m) f = !1;
  else if (!C) f = !0;
  else if (u.v7_partialHydration) {
    let g = e.hydrationData ? e.hydrationData.loaderData : null,
      v = e.hydrationData ? e.hydrationData.errors : null,
      _ = (N) =>
        N.route.loader
          ? N.route.loader.hydrate === !0
            ? !1
            : (g && g[N.route.id] !== void 0) || (v && v[N.route.id] !== void 0)
          : !0;
    if (v) {
      let N = R.findIndex((A) => v[A.route.id] !== void 0);
      f = R.slice(0, N + 1).every(_);
    } else f = R.every(_);
  } else f = e.hydrationData != null;
  let P,
    y = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: R,
      initialized: f,
      navigation: Ml,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    x = pe.Pop,
    L = !1,
    M,
    I = !1,
    Y = new Map(),
    he = null,
    ye = !1,
    be = !1,
    Tn = [],
    zt = [],
    oe = new Map(),
    O = 0,
    B = -1,
    V = new Map(),
    J = new Set(),
    ne = new Map(),
    vt = new Map(),
    _e = new Set(),
    at = new Map(),
    Ae = new Map(),
    Ut = !1;
  function Mh() {
    if (
      ((c = e.history.listen((g) => {
        let { action: v, location: _, delta: N } = g;
        if (Ut) {
          Ut = !1;
          return;
        }
        ar(
          Ae.size === 0 || N != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let A = Ja({
          currentLocation: y.location,
          nextLocation: _,
          historyAction: v,
        });
        if (A && N != null) {
          ((Ut = !0),
            e.history.go(N * -1),
            Si(A, {
              state: "blocked",
              location: _,
              proceed() {
                (Si(A, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: _,
                }),
                  e.history.go(N));
              },
              reset() {
                let H = new Map(y.blockers);
                (H.set(A, Rr), Qe({ blockers: H }));
              },
            }));
          return;
        }
        return cn(v, _);
      })),
      n)
    ) {
      cg(t, Y);
      let g = () => fg(t, Y);
      (t.addEventListener("pagehide", g),
        (he = () => t.removeEventListener("pagehide", g)));
    }
    return (
      y.initialized || cn(pe.Pop, y.location, { initialHydration: !0 }),
      P
    );
  }
  function Ah() {
    (c && c(),
      he && he(),
      h.clear(),
      M && M.abort(),
      y.fetchers.forEach((g, v) => wi(v)),
      y.blockers.forEach((g, v) => Xa(v)));
  }
  function Ih(g) {
    return (h.add(g), () => h.delete(g));
  }
  function Qe(g, v) {
    (v === void 0 && (v = {}), (y = de({}, y, g)));
    let _ = [],
      N = [];
    (u.v7_fetcherPersist &&
      y.fetchers.forEach((A, H) => {
        A.state === "idle" && (_e.has(H) ? N.push(H) : _.push(H));
      }),
      [...h].forEach((A) =>
        A(y, {
          deletedFetchers: N,
          unstable_viewTransitionOpts: v.viewTransitionOpts,
          unstable_flushSync: v.flushSync === !0,
        }),
      ),
      u.v7_fetcherPersist &&
        (_.forEach((A) => y.fetchers.delete(A)), N.forEach((A) => wi(A))));
  }
  function pr(g, v, _) {
    var N, A;
    let { flushSync: H } = _ === void 0 ? {} : _,
      j =
        y.actionData != null &&
        y.navigation.formMethod != null &&
        dt(y.navigation.formMethod) &&
        y.navigation.state === "loading" &&
        ((N = g.state) == null ? void 0 : N._isRedirect) !== !0,
      F;
    v.actionData
      ? Object.keys(v.actionData).length > 0
        ? (F = v.actionData)
        : (F = null)
      : j
        ? (F = y.actionData)
        : (F = null);
    let z = v.loaderData
        ? gc(y.loaderData, v.loaderData, v.matches || [], v.errors)
        : y.loaderData,
      K = y.blockers;
    K.size > 0 && ((K = new Map(K)), K.forEach((ee, Re) => K.set(Re, Rr)));
    let Ee =
      L === !0 ||
      (y.navigation.formMethod != null &&
        dt(y.navigation.formMethod) &&
        ((A = g.state) == null ? void 0 : A._isRedirect) !== !0);
    (s && ((l = s), (s = void 0)),
      ye ||
        x === pe.Pop ||
        (x === pe.Push
          ? e.history.push(g, g.state)
          : x === pe.Replace && e.history.replace(g, g.state)));
    let $;
    if (x === pe.Pop) {
      let ee = Y.get(y.location.pathname);
      ee && ee.has(g.pathname)
        ? ($ = { currentLocation: y.location, nextLocation: g })
        : Y.has(g.pathname) &&
          ($ = { currentLocation: g, nextLocation: y.location });
    } else if (I) {
      let ee = Y.get(y.location.pathname);
      (ee
        ? ee.add(g.pathname)
        : ((ee = new Set([g.pathname])), Y.set(y.location.pathname, ee)),
        ($ = { currentLocation: y.location, nextLocation: g }));
    }
    (Qe(
      de({}, v, {
        actionData: F,
        loaderData: z,
        historyAction: x,
        location: g,
        initialized: !0,
        navigation: Ml,
        revalidation: "idle",
        restoreScrollPosition: Za(g, v.matches || y.matches),
        preventScrollReset: Ee,
        blockers: K,
      }),
      { viewTransitionOpts: $, flushSync: H === !0 },
    ),
      (x = pe.Pop),
      (L = !1),
      (I = !1),
      (ye = !1),
      (be = !1),
      (Tn = []),
      (zt = []));
  }
  async function Ha(g, v) {
    if (typeof g == "number") {
      e.history.go(g);
      return;
    }
    let _ = Os(
        y.location,
        y.matches,
        a,
        u.v7_prependBasename,
        g,
        u.v7_relativeSplatPath,
        v == null ? void 0 : v.fromRouteId,
        v == null ? void 0 : v.relative,
      ),
      {
        path: N,
        submission: A,
        error: H,
      } = fc(u.v7_normalizeFormMethod, !1, _, v),
      j = y.location,
      F = ci(y.location, N, v && v.state);
    F = de({}, F, e.history.encodeLocation(F));
    let z = v && v.replace != null ? v.replace : void 0,
      K = pe.Push;
    z === !0
      ? (K = pe.Replace)
      : z === !1 ||
        (A != null &&
          dt(A.formMethod) &&
          A.formAction === y.location.pathname + y.location.search &&
          (K = pe.Replace));
    let Ee =
        v && "preventScrollReset" in v ? v.preventScrollReset === !0 : void 0,
      $ = (v && v.unstable_flushSync) === !0,
      ee = Ja({ currentLocation: j, nextLocation: F, historyAction: K });
    if (ee) {
      Si(ee, {
        state: "blocked",
        location: F,
        proceed() {
          (Si(ee, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F,
          }),
            Ha(g, v));
        },
        reset() {
          let Re = new Map(y.blockers);
          (Re.set(ee, Rr), Qe({ blockers: Re }));
        },
      });
      return;
    }
    return await cn(K, F, {
      submission: A,
      pendingError: H,
      preventScrollReset: Ee,
      replace: v && v.replace,
      enableViewTransition: v && v.unstable_viewTransition,
      flushSync: $,
    });
  }
  function zh() {
    if (
      (tl(),
      Qe({ revalidation: "loading" }),
      y.navigation.state !== "submitting")
    ) {
      if (y.navigation.state === "idle") {
        cn(y.historyAction, y.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      cn(x || y.historyAction, y.navigation.location, {
        overrideNavigation: y.navigation,
      });
    }
  }
  async function cn(g, v, _) {
    (M && M.abort(),
      (M = null),
      (x = g),
      (ye = (_ && _.startUninterruptedRevalidation) === !0),
      Qh(y.location, y.matches),
      (L = (_ && _.preventScrollReset) === !0),
      (I = (_ && _.enableViewTransition) === !0));
    let N = s || l,
      A = _ && _.overrideNavigation,
      H = Kn(N, v, a),
      j = (_ && _.flushSync) === !0;
    if (!H) {
      let Re = et(404, { pathname: v.pathname }),
        { matches: Ke, route: ke } = vc(N);
      (nl(),
        pr(
          v,
          { matches: Ke, loaderData: {}, errors: { [ke.id]: Re } },
          { flushSync: j },
        ));
      return;
    }
    if (
      y.initialized &&
      !be &&
      ig(y.location, v) &&
      !(_ && _.submission && dt(_.submission.formMethod))
    ) {
      pr(v, { matches: H }, { flushSync: j });
      return;
    }
    M = new AbortController();
    let F = Tr(e.history, v, M.signal, _ && _.submission),
      z,
      K;
    if (_ && _.pendingError) K = { [Kr(H).route.id]: _.pendingError };
    else if (_ && _.submission && dt(_.submission.formMethod)) {
      let Re = await Uh(F, v, _.submission, H, {
        replace: _.replace,
        flushSync: j,
      });
      if (Re.shortCircuited) return;
      ((z = Re.pendingActionData),
        (K = Re.pendingActionError),
        (A = Al(v, _.submission)),
        (j = !1),
        (F = new Request(F.url, { signal: F.signal })));
    }
    let {
      shortCircuited: Ee,
      loaderData: $,
      errors: ee,
    } = await Fh(
      F,
      v,
      H,
      A,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      _ && _.initialHydration === !0,
      j,
      z,
      K,
    );
    Ee ||
      ((M = null),
      pr(
        v,
        de({ matches: H }, z ? { actionData: z } : {}, {
          loaderData: $,
          errors: ee,
        }),
      ));
  }
  async function Uh(g, v, _, N, A) {
    (A === void 0 && (A = {}), tl());
    let H = ag(v, _);
    Qe({ navigation: H }, { flushSync: A.flushSync === !0 });
    let j,
      F = Ms(N, v);
    if (!F.route.action && !F.route.lazy)
      j = {
        type: ce.error,
        error: et(405, {
          method: g.method,
          pathname: v.pathname,
          routeId: F.route.id,
        }),
      };
    else if (
      ((j = await Pr("action", g, F, N, o, i, a, u.v7_relativeSplatPath)),
      g.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (vn(j)) {
      let z;
      return (
        A && A.replace != null
          ? (z = A.replace)
          : (z = j.location === y.location.pathname + y.location.search),
        await mr(y, j, { submission: _, replace: z }),
        { shortCircuited: !0 }
      );
    }
    if (qn(j)) {
      let z = Kr(N, F.route.id);
      return (
        (A && A.replace) !== !0 && (x = pe.Push),
        { pendingActionData: {}, pendingActionError: { [z.route.id]: j.error } }
      );
    }
    if (gn(j)) throw et(400, { type: "defer-action" });
    return { pendingActionData: { [F.route.id]: j.data } };
  }
  async function Fh(g, v, _, N, A, H, j, F, z, K, Ee) {
    let $ = N || Al(v, A),
      ee = A || H || Ec($),
      Re = s || l,
      [Ke, ke] = dc(
        e.history,
        y,
        _,
        ee,
        v,
        u.v7_partialHydration && F === !0,
        be,
        Tn,
        zt,
        _e,
        ne,
        J,
        Re,
        a,
        K,
        Ee,
      );
    if (
      (nl(
        (G) =>
          !(_ && _.some((b) => b.route.id === G)) ||
          (Ke && Ke.some((b) => b.route.id === G)),
      ),
      (B = ++O),
      Ke.length === 0 && ke.length === 0)
    ) {
      let G = qa();
      return (
        pr(
          v,
          de(
            { matches: _, loaderData: {}, errors: Ee || null },
            K ? { actionData: K } : {},
            G ? { fetchers: new Map(y.fetchers) } : {},
          ),
          { flushSync: z },
        ),
        { shortCircuited: !0 }
      );
    }
    if (!ye && (!u.v7_partialHydration || !F)) {
      ke.forEach((b) => {
        let Be = y.fetchers.get(b.key),
          ki = Lr(void 0, Be ? Be.data : void 0);
        y.fetchers.set(b.key, ki);
      });
      let G = K || y.actionData;
      Qe(
        de(
          { navigation: $ },
          G
            ? Object.keys(G).length === 0
              ? { actionData: null }
              : { actionData: G }
            : {},
          ke.length > 0 ? { fetchers: new Map(y.fetchers) } : {},
        ),
        { flushSync: z },
      );
    }
    ke.forEach((G) => {
      (oe.has(G.key) && Bt(G.key), G.controller && oe.set(G.key, G.controller));
    });
    let Ln = () => ke.forEach((G) => Bt(G.key));
    M && M.signal.addEventListener("abort", Ln);
    let {
      results: rl,
      loaderResults: Nn,
      fetcherResults: jt,
    } = await Wa(y.matches, _, Ke, ke, g);
    if (g.signal.aborted) return { shortCircuited: !0 };
    (M && M.signal.removeEventListener("abort", Ln),
      ke.forEach((G) => oe.delete(G.key)));
    let fn = wc(rl);
    if (fn) {
      if (fn.idx >= Ke.length) {
        let G = ke[fn.idx - Ke.length].key;
        J.add(G);
      }
      return (await mr(y, fn.result, { replace: j }), { shortCircuited: !0 });
    }
    let { loaderData: il, errors: gr } = yc(y, _, Ke, Nn, Ee, ke, jt, at);
    (at.forEach((G, b) => {
      G.subscribe((Be) => {
        (Be || G.done) && at.delete(b);
      });
    }),
      u.v7_partialHydration &&
        F &&
        y.errors &&
        Object.entries(y.errors)
          .filter((G) => {
            let [b] = G;
            return !Ke.some((Be) => Be.route.id === b);
          })
          .forEach((G) => {
            let [b, Be] = G;
            gr = Object.assign(gr || {}, { [b]: Be });
          }));
    let ol = qa(),
      On = Ya(B),
      Ei = ol || On || ke.length > 0;
    return de(
      { loaderData: il, errors: gr },
      Ei ? { fetchers: new Map(y.fetchers) } : {},
    );
  }
  function Bh(g, v, _, N) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    oe.has(g) && Bt(g);
    let A = (N && N.unstable_flushSync) === !0,
      H = s || l,
      j = Os(
        y.location,
        y.matches,
        a,
        u.v7_prependBasename,
        _,
        u.v7_relativeSplatPath,
        v,
        N == null ? void 0 : N.relative,
      ),
      F = Kn(H, j, a);
    if (!F) {
      yr(g, v, et(404, { pathname: j }), { flushSync: A });
      return;
    }
    let {
      path: z,
      submission: K,
      error: Ee,
    } = fc(u.v7_normalizeFormMethod, !0, j, N);
    if (Ee) {
      yr(g, v, Ee, { flushSync: A });
      return;
    }
    let $ = Ms(F, z);
    if (((L = (N && N.preventScrollReset) === !0), K && dt(K.formMethod))) {
      jh(g, v, z, $, F, A, K);
      return;
    }
    (ne.set(g, { routeId: v, path: z }), Vh(g, v, z, $, F, A, K));
  }
  async function jh(g, v, _, N, A, H, j) {
    if ((tl(), ne.delete(g), !N.route.action && !N.route.lazy)) {
      let b = et(405, { method: j.formMethod, pathname: _, routeId: v });
      yr(g, v, b, { flushSync: H });
      return;
    }
    let F = y.fetchers.get(g);
    Ft(g, ug(j, F), { flushSync: H });
    let z = new AbortController(),
      K = Tr(e.history, _, z.signal, j);
    oe.set(g, z);
    let Ee = O,
      $ = await Pr("action", K, N, A, o, i, a, u.v7_relativeSplatPath);
    if (K.signal.aborted) {
      oe.get(g) === z && oe.delete(g);
      return;
    }
    if (u.v7_fetcherPersist && _e.has(g)) {
      if (vn($) || qn($)) {
        Ft(g, $t(void 0));
        return;
      }
    } else {
      if (vn($))
        if ((oe.delete(g), B > Ee)) {
          Ft(g, $t(void 0));
          return;
        } else
          return (J.add(g), Ft(g, Lr(j)), mr(y, $, { fetcherSubmission: j }));
      if (qn($)) {
        yr(g, v, $.error);
        return;
      }
    }
    if (gn($)) throw et(400, { type: "defer-action" });
    let ee = y.navigation.location || y.location,
      Re = Tr(e.history, ee, z.signal),
      Ke = s || l,
      ke =
        y.navigation.state !== "idle"
          ? Kn(Ke, y.navigation.location, a)
          : y.matches;
    W(ke, "Didn't find any matches after fetcher action");
    let Ln = ++O;
    V.set(g, Ln);
    let rl = Lr(j, $.data);
    y.fetchers.set(g, rl);
    let [Nn, jt] = dc(
      e.history,
      y,
      ke,
      j,
      ee,
      !1,
      be,
      Tn,
      zt,
      _e,
      ne,
      J,
      Ke,
      a,
      { [N.route.id]: $.data },
      void 0,
    );
    (jt
      .filter((b) => b.key !== g)
      .forEach((b) => {
        let Be = b.key,
          ki = y.fetchers.get(Be),
          qh = Lr(void 0, ki ? ki.data : void 0);
        (y.fetchers.set(Be, qh),
          oe.has(Be) && Bt(Be),
          b.controller && oe.set(Be, b.controller));
      }),
      Qe({ fetchers: new Map(y.fetchers) }));
    let fn = () => jt.forEach((b) => Bt(b.key));
    z.signal.addEventListener("abort", fn);
    let {
      results: il,
      loaderResults: gr,
      fetcherResults: ol,
    } = await Wa(y.matches, ke, Nn, jt, Re);
    if (z.signal.aborted) return;
    (z.signal.removeEventListener("abort", fn),
      V.delete(g),
      oe.delete(g),
      jt.forEach((b) => oe.delete(b.key)));
    let On = wc(il);
    if (On) {
      if (On.idx >= Nn.length) {
        let b = jt[On.idx - Nn.length].key;
        J.add(b);
      }
      return mr(y, On.result);
    }
    let { loaderData: Ei, errors: G } = yc(
      y,
      y.matches,
      Nn,
      gr,
      void 0,
      jt,
      ol,
      at,
    );
    if (y.fetchers.has(g)) {
      let b = $t($.data);
      y.fetchers.set(g, b);
    }
    (Ya(Ln),
      y.navigation.state === "loading" && Ln > B
        ? (W(x, "Expected pending action"),
          M && M.abort(),
          pr(y.navigation.location, {
            matches: ke,
            loaderData: Ei,
            errors: G,
            fetchers: new Map(y.fetchers),
          }))
        : (Qe({
            errors: G,
            loaderData: gc(y.loaderData, Ei, ke, G),
            fetchers: new Map(y.fetchers),
          }),
          (be = !1)));
  }
  async function Vh(g, v, _, N, A, H, j) {
    let F = y.fetchers.get(g);
    Ft(g, Lr(j, F ? F.data : void 0), { flushSync: H });
    let z = new AbortController(),
      K = Tr(e.history, _, z.signal);
    oe.set(g, z);
    let Ee = O,
      $ = await Pr("loader", K, N, A, o, i, a, u.v7_relativeSplatPath);
    if (
      (gn($) && ($ = (await ch($, K.signal, !0)) || $),
      oe.get(g) === z && oe.delete(g),
      !K.signal.aborted)
    ) {
      if (_e.has(g)) {
        Ft(g, $t(void 0));
        return;
      }
      if (vn($))
        if (B > Ee) {
          Ft(g, $t(void 0));
          return;
        } else {
          (J.add(g), await mr(y, $));
          return;
        }
      if (qn($)) {
        yr(g, v, $.error);
        return;
      }
      (W(!gn($), "Unhandled fetcher deferred data"), Ft(g, $t($.data)));
    }
  }
  async function mr(g, v, _) {
    let {
      submission: N,
      fetcherSubmission: A,
      replace: H,
    } = _ === void 0 ? {} : _;
    v.revalidate && (be = !0);
    let j = ci(g.location, v.location, { _isRedirect: !0 });
    if ((W(j, "Expected a location on the redirect navigation"), n)) {
      let ee = !1;
      if (v.reloadDocument) ee = !0;
      else if (lh.test(v.location)) {
        const Re = e.history.createURL(v.location);
        ee = Re.origin !== t.location.origin || vi(Re.pathname, a) == null;
      }
      if (ee) {
        H ? t.location.replace(v.location) : t.location.assign(v.location);
        return;
      }
    }
    M = null;
    let F = H === !0 ? pe.Replace : pe.Push,
      { formMethod: z, formAction: K, formEncType: Ee } = g.navigation;
    !N && !A && z && K && Ee && (N = Ec(g.navigation));
    let $ = N || A;
    if (Jy.has(v.status) && $ && dt($.formMethod))
      await cn(F, j, {
        submission: de({}, $, { formAction: v.location }),
        preventScrollReset: L,
      });
    else {
      let ee = Al(j, N);
      await cn(F, j, {
        overrideNavigation: ee,
        fetcherSubmission: A,
        preventScrollReset: L,
      });
    }
  }
  async function Wa(g, v, _, N, A) {
    let H = await Promise.all([
        ..._.map((z) => Pr("loader", A, z, v, o, i, a, u.v7_relativeSplatPath)),
        ...N.map((z) =>
          z.matches && z.match && z.controller
            ? Pr(
                "loader",
                Tr(e.history, z.path, z.controller.signal),
                z.match,
                z.matches,
                o,
                i,
                a,
                u.v7_relativeSplatPath,
              )
            : { type: ce.error, error: et(404, { pathname: z.path }) },
        ),
      ]),
      j = H.slice(0, _.length),
      F = H.slice(_.length);
    return (
      await Promise.all([
        Sc(
          g,
          _,
          j,
          j.map(() => A.signal),
          !1,
          y.loaderData,
        ),
        Sc(
          g,
          N.map((z) => z.match),
          F,
          N.map((z) => (z.controller ? z.controller.signal : null)),
          !0,
        ),
      ]),
      { results: H, loaderResults: j, fetcherResults: F }
    );
  }
  function tl() {
    ((be = !0),
      Tn.push(...nl()),
      ne.forEach((g, v) => {
        oe.has(v) && (zt.push(v), Bt(v));
      }));
  }
  function Ft(g, v, _) {
    (_ === void 0 && (_ = {}),
      y.fetchers.set(g, v),
      Qe(
        { fetchers: new Map(y.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 },
      ));
  }
  function yr(g, v, _, N) {
    N === void 0 && (N = {});
    let A = Kr(y.matches, v);
    (wi(g),
      Qe(
        { errors: { [A.route.id]: _ }, fetchers: new Map(y.fetchers) },
        { flushSync: (N && N.flushSync) === !0 },
      ));
  }
  function Qa(g) {
    return (
      u.v7_fetcherPersist &&
        (vt.set(g, (vt.get(g) || 0) + 1), _e.has(g) && _e.delete(g)),
      y.fetchers.get(g) || Gy
    );
  }
  function wi(g) {
    let v = y.fetchers.get(g);
    (oe.has(g) && !(v && v.state === "loading" && V.has(g)) && Bt(g),
      ne.delete(g),
      V.delete(g),
      J.delete(g),
      _e.delete(g),
      y.fetchers.delete(g));
  }
  function $h(g) {
    if (u.v7_fetcherPersist) {
      let v = (vt.get(g) || 0) - 1;
      v <= 0 ? (vt.delete(g), _e.add(g)) : vt.set(g, v);
    } else wi(g);
    Qe({ fetchers: new Map(y.fetchers) });
  }
  function Bt(g) {
    let v = oe.get(g);
    (W(v, "Expected fetch controller: " + g), v.abort(), oe.delete(g));
  }
  function Ka(g) {
    for (let v of g) {
      let _ = Qa(v),
        N = $t(_.data);
      y.fetchers.set(v, N);
    }
  }
  function qa() {
    let g = [],
      v = !1;
    for (let _ of J) {
      let N = y.fetchers.get(_);
      (W(N, "Expected fetcher: " + _),
        N.state === "loading" && (J.delete(_), g.push(_), (v = !0)));
    }
    return (Ka(g), v);
  }
  function Ya(g) {
    let v = [];
    for (let [_, N] of V)
      if (N < g) {
        let A = y.fetchers.get(_);
        (W(A, "Expected fetcher: " + _),
          A.state === "loading" && (Bt(_), V.delete(_), v.push(_)));
      }
    return (Ka(v), v.length > 0);
  }
  function Hh(g, v) {
    let _ = y.blockers.get(g) || Rr;
    return (Ae.get(g) !== v && Ae.set(g, v), _);
  }
  function Xa(g) {
    (y.blockers.delete(g), Ae.delete(g));
  }
  function Si(g, v) {
    let _ = y.blockers.get(g) || Rr;
    W(
      (_.state === "unblocked" && v.state === "blocked") ||
        (_.state === "blocked" && v.state === "blocked") ||
        (_.state === "blocked" && v.state === "proceeding") ||
        (_.state === "blocked" && v.state === "unblocked") ||
        (_.state === "proceeding" && v.state === "unblocked"),
      "Invalid blocker state transition: " + _.state + " -> " + v.state,
    );
    let N = new Map(y.blockers);
    (N.set(g, v), Qe({ blockers: N }));
  }
  function Ja(g) {
    let { currentLocation: v, nextLocation: _, historyAction: N } = g;
    if (Ae.size === 0) return;
    Ae.size > 1 && ar(!1, "A router only supports one blocker at a time");
    let A = Array.from(Ae.entries()),
      [H, j] = A[A.length - 1],
      F = y.blockers.get(H);
    if (
      !(F && F.state === "proceeding") &&
      j({ currentLocation: v, nextLocation: _, historyAction: N })
    )
      return H;
  }
  function nl(g) {
    let v = [];
    return (
      at.forEach((_, N) => {
        (!g || g(N)) && (_.cancel(), v.push(N), at.delete(N));
      }),
      v
    );
  }
  function Wh(g, v, _) {
    if (((p = g), (E = v), (w = _ || null), !S && y.navigation === Ml)) {
      S = !0;
      let N = Za(y.location, y.matches);
      N != null && Qe({ restoreScrollPosition: N });
    }
    return () => {
      ((p = null), (E = null), (w = null));
    };
  }
  function Ga(g, v) {
    return (
      (w &&
        w(
          g,
          v.map((N) => Py(N, y.loaderData)),
        )) ||
      g.key
    );
  }
  function Qh(g, v) {
    if (p && E) {
      let _ = Ga(g, v);
      p[_] = E();
    }
  }
  function Za(g, v) {
    if (p) {
      let _ = Ga(g, v),
        N = p[_];
      if (typeof N == "number") return N;
    }
    return null;
  }
  function Kh(g) {
    ((o = {}), (s = Ns(g, i, void 0, o)));
  }
  return (
    (P = {
      get basename() {
        return a;
      },
      get future() {
        return u;
      },
      get state() {
        return y;
      },
      get routes() {
        return l;
      },
      get window() {
        return t;
      },
      initialize: Mh,
      subscribe: Ih,
      enableScrollRestoration: Wh,
      navigate: Ha,
      fetch: Bh,
      revalidate: zh,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: Qa,
      deleteFetcher: $h,
      dispose: Ah,
      getBlocker: Hh,
      deleteBlocker: Xa,
      _internalFetchControllers: oe,
      _internalActiveDeferreds: at,
      _internalSetRoutes: Kh,
    }),
    P
  );
}
function eg(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Os(e, t, n, r, i, o, l, s) {
  let a, u;
  if (l) {
    a = [];
    for (let h of t)
      if ((a.push(h), h.route.id === l)) {
        u = h;
        break;
      }
  } else ((a = t), (u = t[t.length - 1]));
  let c = rh(i || ".", nh(a, o), vi(e.pathname, n) || e.pathname, s === "path");
  return (
    i == null && ((c.search = e.search), (c.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      u &&
      u.route.index &&
      !za(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : rn([n, c.pathname])),
    gi(c)
  );
}
function fc(e, t, n, r) {
  if (!r || !eg(r)) return { path: n };
  if (r.formMethod && !sg(r.formMethod))
    return { path: n, error: et(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: et(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    l = e ? o.toUpperCase() : o.toLowerCase(),
    s = uh(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!dt(l)) return i();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((w, E) => {
                let [S, R] = E;
                return (
                  "" +
                  w +
                  S +
                  "=" +
                  R +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: l,
          formAction: s,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!dt(l)) return i();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: s,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  W(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let a, u;
  if (r.formData) ((a = Ds(r.formData)), (u = r.formData));
  else if (r.body instanceof FormData) ((a = Ds(r.body)), (u = r.body));
  else if (r.body instanceof URLSearchParams) ((a = r.body), (u = mc(a)));
  else if (r.body == null) ((a = new URLSearchParams()), (u = new FormData()));
  else
    try {
      ((a = new URLSearchParams(r.body)), (u = mc(a)));
    } catch {
      return i();
    }
  let c = {
    formMethod: l,
    formAction: s,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (dt(c.formMethod)) return { path: n, submission: c };
  let h = It(n);
  return (
    t && h.search && za(h.search) && a.append("index", ""),
    (h.search = "?" + a),
    { path: gi(h), submission: c }
  );
}
function tg(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function dc(e, t, n, r, i, o, l, s, a, u, c, h, p, w, E, S) {
  let R = S ? Object.values(S)[0] : E ? Object.values(E)[0] : void 0,
    d = e.createURL(t.location),
    f = e.createURL(i),
    m = S ? Object.keys(S)[0] : void 0,
    P = tg(n, m).filter((x, L) => {
      let { route: M } = x;
      if (M.lazy) return !0;
      if (M.loader == null) return !1;
      if (o)
        return M.loader.hydrate
          ? !0
          : t.loaderData[M.id] === void 0 &&
              (!t.errors || t.errors[M.id] === void 0);
      if (
        ng(t.loaderData, t.matches[L], x) ||
        s.some((he) => he === x.route.id)
      )
        return !0;
      let I = t.matches[L],
        Y = x;
      return hc(
        x,
        de(
          {
            currentUrl: d,
            currentParams: I.params,
            nextUrl: f,
            nextParams: Y.params,
          },
          r,
          {
            actionResult: R,
            defaultShouldRevalidate:
              l ||
              d.pathname + d.search === f.pathname + f.search ||
              d.search !== f.search ||
              ah(I, Y),
          },
        ),
      );
    }),
    y = [];
  return (
    c.forEach((x, L) => {
      if (o || !n.some((ye) => ye.route.id === x.routeId) || u.has(L)) return;
      let M = Kn(p, x.path, w);
      if (!M) {
        y.push({
          key: L,
          routeId: x.routeId,
          path: x.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let I = t.fetchers.get(L),
        Y = Ms(M, x.path),
        he = !1;
      (h.has(L)
        ? (he = !1)
        : a.includes(L)
          ? (he = !0)
          : I && I.state !== "idle" && I.data === void 0
            ? (he = l)
            : (he = hc(
                Y,
                de(
                  {
                    currentUrl: d,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: f,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: R, defaultShouldRevalidate: l },
                ),
              )),
        he &&
          y.push({
            key: L,
            routeId: x.routeId,
            path: x.path,
            matches: M,
            match: Y,
            controller: new AbortController(),
          }));
    }),
    [P, y]
  );
}
function ng(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function ah(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function hc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function pc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  W(i, "No route found in manifest");
  let o = {};
  for (let l in r) {
    let a = i[l] !== void 0 && l !== "hasErrorBoundary";
    (ar(
      !a,
      'Route "' +
        i.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.'),
    ),
      !a && !_y.has(l) && (o[l] = r[l]));
  }
  (Object.assign(i, o), Object.assign(i, de({}, t(i), { lazy: void 0 })));
}
async function Pr(e, t, n, r, i, o, l, s, a) {
  a === void 0 && (a = {});
  let u,
    c,
    h,
    p = (S) => {
      let R,
        d = new Promise((f, m) => (R = m));
      return (
        (h = () => R()),
        t.signal.addEventListener("abort", h),
        Promise.race([
          S({ request: t, params: n.params, context: a.requestContext }),
          d,
        ])
      );
    };
  try {
    let S = n.route[e];
    if (n.route.lazy)
      if (S) {
        let R,
          d = await Promise.all([
            p(S).catch((f) => {
              R = f;
            }),
            pc(n.route, o, i),
          ]);
        if (R) throw R;
        c = d[0];
      } else if ((await pc(n.route, o, i), (S = n.route[e]), S)) c = await p(S);
      else if (e === "action") {
        let R = new URL(t.url),
          d = R.pathname + R.search;
        throw et(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: ce.data, data: void 0 };
    else if (S) c = await p(S);
    else {
      let R = new URL(t.url),
        d = R.pathname + R.search;
      throw et(404, { pathname: d });
    }
    W(
      c !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (S) {
    ((u = ce.error), (c = S));
  } finally {
    h && t.signal.removeEventListener("abort", h);
  }
  if (lg(c)) {
    let S = c.status;
    if (Xy.has(S)) {
      let d = c.headers.get("Location");
      if (
        (W(
          d,
          "Redirects returned/thrown from loaders/actions must have a Location header",
        ),
        !lh.test(d))
      )
        d = Os(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, d, s);
      else if (!a.isStaticRequest) {
        let f = new URL(t.url),
          m = d.startsWith("//") ? new URL(f.protocol + d) : new URL(d),
          C = vi(m.pathname, l) != null;
        m.origin === f.origin && C && (d = m.pathname + m.search + m.hash);
      }
      if (a.isStaticRequest) throw (c.headers.set("Location", d), c);
      return {
        type: ce.redirect,
        status: S,
        location: d,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (a.isRouteRequest)
      throw { type: u === ce.error ? ce.error : ce.data, response: c };
    let R;
    try {
      let d = c.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d)
        ? c.body == null
          ? (R = null)
          : (R = await c.json())
        : (R = await c.text());
    } catch (d) {
      return { type: ce.error, error: d };
    }
    return u === ce.error
      ? { type: u, error: new Ia(S, c.statusText, R), headers: c.headers }
      : { type: ce.data, data: R, statusCode: c.status, headers: c.headers };
  }
  if (u === ce.error) return { type: u, error: c };
  if (og(c)) {
    var w, E;
    return {
      type: ce.deferred,
      deferredData: c,
      statusCode: (w = c.init) == null ? void 0 : w.status,
      headers:
        ((E = c.init) == null ? void 0 : E.headers) &&
        new Headers(c.init.headers),
    };
  }
  return { type: ce.data, data: c };
}
function Tr(e, t, n, r) {
  let i = e.createURL(uh(t)).toString(),
    o = { signal: n };
  if (r && dt(r.formMethod)) {
    let { formMethod: l, formEncType: s } = r;
    ((o.method = l.toUpperCase()),
      s === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": s })),
          (o.body = JSON.stringify(r.json)))
        : s === "text/plain"
          ? (o.body = r.text)
          : s === "application/x-www-form-urlencoded" && r.formData
            ? (o.body = Ds(r.formData))
            : (o.body = r.formData));
  }
  return new Request(i, o);
}
function Ds(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function mc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function rg(e, t, n, r, i) {
  let o = {},
    l = null,
    s,
    a = !1,
    u = {};
  return (
    n.forEach((c, h) => {
      let p = t[h].route.id;
      if (
        (W(!vn(c), "Cannot handle redirect results in processLoaderData"),
        qn(c))
      ) {
        let w = Kr(e, p),
          E = c.error;
        (r && ((E = Object.values(r)[0]), (r = void 0)),
          (l = l || {}),
          l[w.route.id] == null && (l[w.route.id] = E),
          (o[p] = void 0),
          a || ((a = !0), (s = ih(c.error) ? c.error.status : 500)),
          c.headers && (u[p] = c.headers));
      } else
        (gn(c)
          ? (i.set(p, c.deferredData), (o[p] = c.deferredData.data))
          : (o[p] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !a &&
            (s = c.statusCode),
          c.headers && (u[p] = c.headers));
    }),
    r && ((l = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: l, statusCode: s || 200, loaderHeaders: u }
  );
}
function yc(e, t, n, r, i, o, l, s) {
  let { loaderData: a, errors: u } = rg(t, n, r, i, s);
  for (let c = 0; c < o.length; c++) {
    let { key: h, match: p, controller: w } = o[c];
    W(
      l !== void 0 && l[c] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let E = l[c];
    if (!(w && w.signal.aborted))
      if (qn(E)) {
        let S = Kr(e.matches, p == null ? void 0 : p.route.id);
        ((u && u[S.route.id]) || (u = de({}, u, { [S.route.id]: E.error })),
          e.fetchers.delete(h));
      } else if (vn(E)) W(!1, "Unhandled fetcher revalidation redirect");
      else if (gn(E)) W(!1, "Unhandled fetcher deferred data");
      else {
        let S = $t(E.data);
        e.fetchers.set(h, S);
      }
  }
  return { loaderData: a, errors: u };
}
function gc(e, t, n, r) {
  let i = de({}, t);
  for (let o of n) {
    let l = o.route.id;
    if (
      (t.hasOwnProperty(l)
        ? t[l] !== void 0 && (i[l] = t[l])
        : e[l] !== void 0 && o.route.loader && (i[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return i;
}
function Kr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function vc(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function et(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    l = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((l = "Bad Request"),
        i && n && r
          ? (s =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
            ? (s = "defer() is not supported in actions")
            : o === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
        ? ((l = "Forbidden"),
          (s = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((l = "Not Found"), (s = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((l = "Method Not Allowed"),
            i && n && r
              ? (s =
                  "You made a " +
                  i.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : i && (s = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Ia(e || 500, l, new Error(s), !0)
  );
}
function wc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (vn(n)) return { result: n, idx: t };
  }
}
function uh(e) {
  let t = typeof e == "string" ? It(e) : e;
  return gi(de({}, t, { hash: "" }));
}
function ig(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function gn(e) {
  return e.type === ce.deferred;
}
function qn(e) {
  return e.type === ce.error;
}
function vn(e) {
  return (e && e.type) === ce.redirect;
}
function og(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function lg(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function sg(e) {
  return Yy.has(e.toLowerCase());
}
function dt(e) {
  return Ky.has(e.toLowerCase());
}
async function Sc(e, t, n, r, i, o) {
  for (let l = 0; l < n.length; l++) {
    let s = n[l],
      a = t[l];
    if (!a) continue;
    let u = e.find((h) => h.route.id === a.route.id),
      c = u != null && !ah(u, a) && (o && o[a.route.id]) !== void 0;
    if (gn(s) && (i || c)) {
      let h = r[l];
      (W(h, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await ch(s, h, i).then((p) => {
          p && (n[l] = p || n[l]);
        }));
    }
  }
}
async function ch(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ce.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: ce.error, error: i };
      }
    return { type: ce.data, data: e.deferredData.data };
  }
}
function za(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ms(e, t) {
  let n = typeof t == "string" ? It(t).search : t.search;
  if (e[e.length - 1].route.index && za(n || "")) return e[e.length - 1];
  let r = th(e);
  return r[r.length - 1];
}
function Ec(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: l,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: l,
        text: void 0,
      };
  }
}
function Al(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function ag(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Lr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function ug(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function $t(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function cg(e, t) {
  try {
    let n = e.sessionStorage.getItem(sh);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {}
}
function fg(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(sh, JSON.stringify(n));
    } catch (r) {
      ar(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      );
    }
  }
}
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fi() {
  return (
    (fi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fi.apply(this, arguments)
  );
}
const Xo = k.createContext(null),
  fh = k.createContext(null),
  Jo = k.createContext(null),
  Go = k.createContext(null),
  dr = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  dh = k.createContext(null);
function Zo() {
  return k.useContext(Go) != null;
}
function hh() {
  return (Zo() || W(!1), k.useContext(Go).location);
}
function ph(e) {
  k.useContext(Jo).static || k.useLayoutEffect(e);
}
function mh() {
  let { isDataRoute: e } = k.useContext(dr);
  return e ? xg() : dg();
}
function dg() {
  Zo() || W(!1);
  let e = k.useContext(Xo),
    { basename: t, future: n, navigator: r } = k.useContext(Jo),
    { matches: i } = k.useContext(dr),
    { pathname: o } = hh(),
    l = JSON.stringify(nh(i, n.v7_relativeSplatPath)),
    s = k.useRef(!1);
  return (
    ph(() => {
      s.current = !0;
    }),
    k.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let h = rh(u, JSON.parse(l), o, c.relative === "path");
        (e == null &&
          t !== "/" &&
          (h.pathname = h.pathname === "/" ? t : rn([t, h.pathname])),
          (c.replace ? r.replace : r.push)(h, c.state, c));
      },
      [t, r, l, o, e],
    )
  );
}
function hg(e, t, n, r) {
  Zo() || W(!1);
  let { navigator: i } = k.useContext(Jo),
    { matches: o } = k.useContext(dr),
    l = o[o.length - 1],
    s = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : "/";
  l && l.route;
  let u = hh(),
    c;
  if (t) {
    var h;
    let R = typeof t == "string" ? It(t) : t;
    (a === "/" || ((h = R.pathname) != null && h.startsWith(a)) || W(!1),
      (c = R));
  } else c = u;
  let p = c.pathname || "/",
    w = p;
  if (a !== "/") {
    let R = a.replace(/^\//, "").split("/");
    w = "/" + p.replace(/^\//, "").split("/").slice(R.length).join("/");
  }
  let E = Kn(e, { pathname: w }),
    S = vg(
      E &&
        E.map((R) =>
          Object.assign({}, R, {
            params: Object.assign({}, s, R.params),
            pathname: rn([
              a,
              i.encodeLocation
                ? i.encodeLocation(R.pathname).pathname
                : R.pathname,
            ]),
            pathnameBase:
              R.pathnameBase === "/"
                ? a
                : rn([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(R.pathnameBase).pathname
                      : R.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
      r,
    );
  return t && S
    ? k.createElement(
        Go.Provider,
        {
          value: {
            location: fi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: pe.Pop,
          },
        },
        S,
      )
    : S;
}
function pg() {
  let e = kg(),
    t = ih(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const mg = k.createElement(pg, null);
class yg extends k.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? k.createElement(
          dr.Provider,
          { value: this.props.routeContext },
          k.createElement(dh.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function gg(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = k.useContext(Xo);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(dr.Provider, { value: t }, r)
  );
}
function vg(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let l = e,
    s = (i = n) == null ? void 0 : i.errors;
  if (s != null) {
    let c = l.findIndex(
      (h) => h.route.id && (s == null ? void 0 : s[h.route.id]),
    );
    (c >= 0 || W(!1), (l = l.slice(0, Math.min(l.length, c + 1))));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < l.length; c++) {
      let h = l[c];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (u = c),
        h.route.id)
      ) {
        let { loaderData: p, errors: w } = n,
          E =
            h.route.loader &&
            p[h.route.id] === void 0 &&
            (!w || w[h.route.id] === void 0);
        if (h.route.lazy || E) {
          ((a = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]));
          break;
        }
      }
    }
  return l.reduceRight((c, h, p) => {
    let w,
      E = !1,
      S = null,
      R = null;
    n &&
      ((w = s && h.route.id ? s[h.route.id] : void 0),
      (S = h.route.errorElement || mg),
      a &&
        (u < 0 && p === 0
          ? (Cg("route-fallback", !1), (E = !0), (R = null))
          : u === p &&
            ((E = !0), (R = h.route.hydrateFallbackElement || null))));
    let d = t.concat(l.slice(0, p + 1)),
      f = () => {
        let m;
        return (
          w
            ? (m = S)
            : E
              ? (m = R)
              : h.route.Component
                ? (m = k.createElement(h.route.Component, null))
                : h.route.element
                  ? (m = h.route.element)
                  : (m = c),
          k.createElement(gg, {
            match: h,
            routeContext: { outlet: c, matches: d, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || p === 0)
      ? k.createElement(yg, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: w,
          children: f(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var yh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(yh || {}),
  Oo = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Oo || {});
function wg(e) {
  let t = k.useContext(Xo);
  return (t || W(!1), t);
}
function Sg(e) {
  let t = k.useContext(fh);
  return (t || W(!1), t);
}
function Eg(e) {
  let t = k.useContext(dr);
  return (t || W(!1), t);
}
function gh(e) {
  let t = Eg(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || W(!1), n.route.id);
}
function kg() {
  var e;
  let t = k.useContext(dh),
    n = Sg(Oo.UseRouteError),
    r = gh(Oo.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function xg() {
  let { router: e } = wg(yh.UseNavigateStable),
    t = gh(Oo.UseNavigateStable),
    n = k.useRef(!1);
  return (
    ph(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (i, o) {
        (o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, fi({ fromRouteId: t }, o))));
      },
      [e, t],
    )
  );
}
const kc = {};
function Cg(e, t, n) {
  !t && !kc[e] && (kc[e] = !0);
}
function _g(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = pe.Pop,
    navigator: o,
    static: l = !1,
    future: s,
  } = e;
  Zo() && W(!1);
  let a = t.replace(/^\/*/, "/"),
    u = k.useMemo(
      () => ({
        basename: a,
        navigator: o,
        static: l,
        future: fi({ v7_relativeSplatPath: !1 }, s),
      }),
      [a, s, o, l],
    );
  typeof r == "string" && (r = It(r));
  let {
      pathname: c = "/",
      search: h = "",
      hash: p = "",
      state: w = null,
      key: E = "default",
    } = r,
    S = k.useMemo(() => {
      let R = vi(c, a);
      return R == null
        ? null
        : {
            location: { pathname: R, search: h, hash: p, state: w, key: E },
            navigationType: i,
          };
    }, [a, c, h, p, w, E, i]);
  return S == null
    ? null
    : k.createElement(
        Jo.Provider,
        { value: u },
        k.createElement(Go.Provider, { children: n, value: S }),
      );
}
new Promise(() => {});
function Rg(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: k.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: k.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: k.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Do() {
  return (
    (Do = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Do.apply(this, arguments)
  );
}
const Pg = "6";
try {
  window.__reactRouterVersion = Pg;
} catch {}
function Tg(e, t) {
  return by({
    basename: t == null ? void 0 : t.basename,
    future: Do({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: ky({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Lg(),
    routes: e,
    mapRouteProperties: Rg,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function Lg() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return (t && t.errors && (t = Do({}, t, { errors: Ng(t.errors) })), t);
}
function Ng(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new Ia(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == "function")
          try {
            let l = new o(i.message);
            ((l.stack = ""), (n[r] = l));
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        ((o.stack = ""), (n[r] = o));
      }
    } else n[r] = i;
  return n;
}
const Og = k.createContext({ isTransitioning: !1 }),
  Dg = k.createContext(new Map()),
  Mg = "startTransition",
  xc = cp[Mg],
  Ag = "flushSync",
  Cc = Ey[Ag];
function Ig(e) {
  xc ? xc(e) : e();
}
function Nr(e) {
  Cc ? Cc(e) : e();
}
class zg {
  constructor() {
    ((this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        ((this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          }));
      })));
  }
}
function Ug(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = k.useState(n.state),
    [l, s] = k.useState(),
    [a, u] = k.useState({ isTransitioning: !1 }),
    [c, h] = k.useState(),
    [p, w] = k.useState(),
    [E, S] = k.useState(),
    R = k.useRef(new Map()),
    { v7_startTransition: d } = r || {},
    f = k.useCallback(
      (x) => {
        d ? Ig(x) : x();
      },
      [d],
    ),
    m = k.useCallback(
      (x, L) => {
        let {
          deletedFetchers: M,
          unstable_flushSync: I,
          unstable_viewTransitionOpts: Y,
        } = L;
        (M.forEach((ye) => R.current.delete(ye)),
          x.fetchers.forEach((ye, be) => {
            ye.data !== void 0 && R.current.set(be, ye.data);
          }));
        let he =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!Y || he) {
          I ? Nr(() => o(x)) : f(() => o(x));
          return;
        }
        if (I) {
          Nr(() => {
            (p && (c && c.resolve(), p.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Y.currentLocation,
                nextLocation: Y.nextLocation,
              }));
          });
          let ye = n.window.document.startViewTransition(() => {
            Nr(() => o(x));
          });
          (ye.finished.finally(() => {
            Nr(() => {
              (h(void 0), w(void 0), s(void 0), u({ isTransitioning: !1 }));
            });
          }),
            Nr(() => w(ye)));
          return;
        }
        p
          ? (c && c.resolve(),
            p.skipTransition(),
            S({
              state: x,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }))
          : (s(x),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }));
      },
      [n.window, p, c, R, f],
    );
  (k.useLayoutEffect(() => n.subscribe(m), [n, m]),
    k.useEffect(() => {
      a.isTransitioning && !a.flushSync && h(new zg());
    }, [a]),
    k.useEffect(() => {
      if (c && l && n.window) {
        let x = l,
          L = c.promise,
          M = n.window.document.startViewTransition(async () => {
            (f(() => o(x)), await L);
          });
        (M.finished.finally(() => {
          (h(void 0), w(void 0), s(void 0), u({ isTransitioning: !1 }));
        }),
          w(M));
      }
    }, [f, l, c, n.window]),
    k.useEffect(() => {
      c && l && i.location.key === l.location.key && c.resolve();
    }, [c, p, i.location, l]),
    k.useEffect(() => {
      !a.isTransitioning &&
        E &&
        (s(E.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: E.currentLocation,
          nextLocation: E.nextLocation,
        }),
        S(void 0));
    }, [a.isTransitioning, E]),
    k.useEffect(() => {}, []));
  let C = k.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (x) => n.navigate(x),
        push: (x, L, M) =>
          n.navigate(x, {
            state: L,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
        replace: (x, L, M) =>
          n.navigate(x, {
            replace: !0,
            state: L,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
      }),
      [n],
    ),
    P = n.basename || "/",
    y = k.useMemo(
      () => ({ router: n, navigator: C, static: !1, basename: P }),
      [n, C, P],
    );
  return k.createElement(
    k.Fragment,
    null,
    k.createElement(
      Xo.Provider,
      { value: y },
      k.createElement(
        fh.Provider,
        { value: i },
        k.createElement(
          Dg.Provider,
          { value: R.current },
          k.createElement(
            Og.Provider,
            { value: a },
            k.createElement(
              _g,
              {
                basename: P,
                location: i.location,
                navigationType: i.historyAction,
                navigator: C,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              i.initialized || n.future.v7_partialHydration
                ? k.createElement(Fg, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function Fg(e) {
  let { routes: t, future: n, state: r } = e;
  return hg(t, void 0, r, n);
}
var _c;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(_c || (_c = {}));
var Rc;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Rc || (Rc = {}));
var Bg = {
  VITE_APP_WEBSOCKET_URL: "http://localhost:5000",
  BASE_URL: "/",
  MODE: "production",
  DEV: !1,
  PROD: !0,
  SSR: !1,
};
function jg({ setUsername: e }) {
  const t = mh(),
    [n, r] = k.useState(""),
    [i, o] = k.useState(""),
    [l, s] = k.useState(""),
    [a, u] = k.useState(""),
    [c, h] = k.useState(!1),
    [p, w] = k.useState(!1),
    [E, S] = k.useState(!1),
    [R, d] = k.useState(!1),
    f = k.useMemo(() => {
      const M = Bg.VITE_APP_BACKEND_URL || "http://localhost:5000";
      try {
        const I = new URL(M),
          Y = ["localhost", "127.0.0.1"].includes(I.hostname),
          he = ["localhost", "127.0.0.1"].includes(window.location.hostname);
        return (
          Y && !he && (I.hostname = window.location.hostname),
          I.toString().replace(/\/$/, "")
        );
      } catch {
        return "http://localhost:5000";
      }
    }, []);
  async function m(x, L) {
    const M = await fetch(`${f}${x}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(L),
      }),
      I = await M.json();
    if (!M.ok)
      throw new Error((I == null ? void 0 : I.message) || "Request failed");
    return I;
  }
  async function C() {
    const x = i.trim().toLowerCase();
    if (!x) {
      u("Enter your work email first.");
      return;
    }
    try {
      (S(!0),
        u("Sending OTP..."),
        await m("/api/verification/request-otp", { email: x }),
        h(!0),
        w(!1),
        u("OTP sent successfully. Check your mailbox."));
    } catch (L) {
      u(L.message);
    } finally {
      S(!1);
    }
  }
  async function P() {
    const x = i.trim().toLowerCase(),
      L = l.trim();
    if (!x || !L) {
      u("Enter both work email and OTP.");
      return;
    }
    try {
      (d(!0),
        u("Verifying OTP..."),
        await m("/api/verification/verify-otp", { email: x, otp: L }),
        w(!0),
        u("Email verified successfully. You can start chat now."));
    } catch (M) {
      (w(!1), u(M.message));
    } finally {
      d(!1);
    }
  }
  function y(x) {
    if ((x.preventDefault(), !n.trim())) {
      u("Enter your name to continue.");
      return;
    }
    if (!p) {
      u("Verify your company email first.");
      return;
    }
    (e(n.trim()), t("/chat"));
  }
  return U.jsx("div", {
    id: "signupPage",
    children: U.jsxs("div", {
      id: "signupCard",
      children: [
        U.jsx("h1", {
          id: "OmegelCloneHeading",
          children: "Professional Socio",
        }),
        U.jsx("p", {
          id: "signupSubtitle",
          children: "Secure random video chat for verified professionals.",
        }),
        U.jsxs("form", {
          onSubmit: y,
          id: "signupForm",
          children: [
            U.jsx("input", {
              type: "text",
              className: "singupInputBox",
              placeholder: "Enter Your Name",
              value: n,
              onChange: (x) => r(x.target.value),
            }),
            U.jsxs("div", {
              className: "verificationRow",
              children: [
                U.jsx("input", {
                  type: "email",
                  className: "singupInputBox",
                  placeholder: "Work Email (company domain only)",
                  value: i,
                  onChange: (x) => o(x.target.value),
                }),
                U.jsx("button", {
                  type: "button",
                  className: "signupActionBtn",
                  onClick: C,
                  disabled: E,
                  children: E ? "Sending..." : "Send OTP",
                }),
              ],
            }),
            U.jsxs("div", {
              className: "verificationRow",
              children: [
                U.jsx("input", {
                  type: "text",
                  className: "singupInputBox",
                  placeholder: "Enter OTP",
                  value: l,
                  onChange: (x) => s(x.target.value),
                  disabled: !c,
                }),
                U.jsx("button", {
                  type: "button",
                  className: "signupActionBtn",
                  onClick: P,
                  disabled: !c || R,
                  children: R ? "Verifying..." : "Verify OTP",
                }),
              ],
            }),
            U.jsx("div", {
              id: "verificationStatus",
              "data-verified": p ? "true" : "false",
              children: a || "Verify your company email to unlock chat.",
            }),
            U.jsx("button", {
              type: "submit",
              className: "singupInputBox",
              id: "signupSubmitBtn",
              disabled: !p,
              children: "Start Chat",
            }),
          ],
        }),
      ],
    }),
  });
}
async function bo(e) {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
    throw new Error("Camera API is not available in this browser");
  const t = ["localhost", "127.0.0.1"].includes(window.location.hostname);
  if (!window.isSecureContext && !t)
    throw new Error(
      "Camera access requires HTTPS on mobile or non-localhost domains",
    );
  const n = {
    video: { width: { max: 1920 }, height: { max: 1080 } },
    audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
  };
  e && (n.video.deviceId = { exact: e });
  try {
    return await navigator.mediaDevices.getUserMedia(n);
  } catch (r) {
    throw (console.log("err acces local media stream", r), r);
  }
}
function Vg({
  localVideo: e,
  peerConnection: t,
  setChangeCamOverly: n,
  setStream: r,
  stream: i,
  selectedDeviceId: o,
}) {
  return (
    k.useEffect(() => {
      if (t) {
        let l = null;
        async function s() {
          try {
            ((l = await bo(o)),
              e.current && l && ((e.current.srcObject = l), r(l)));
          } catch (a) {
            console.error("err in handelMediaStream", a);
          }
        }
        return (
          e.current && s(),
          () => {
            l &&
              (l.getTracks().forEach((a) => a.stop()),
              console.log("stop stream"));
          }
        );
      }
    }, [t]),
    k.useEffect(() => {
      if (i)
        return () => {
          i.getTracks().forEach((l) => l.stop());
        };
    }, [i]),
    U.jsx("video", {
      id: "localVideo",
      ref: e,
      onClick: () => n(!0),
      autoPlay: !0,
      playsInline: !0,
      controls: !1,
      muted: !0,
    })
  );
}
function $g({ remoteVideo: e, peerConnection: t, setChangeCamOverly: n }) {
  return (
    k.useEffect(() => {
      if (t)
        return (
          t.addEventListener("track", async (r) => {
            const [i] = r.streams;
            e.current.srcObject = i;
          }),
          () => {
            e.current && (e.current.srcObject = null);
          }
        );
    }, [t]),
    U.jsx("video", {
      id: "remoteVideo",
      ref: e,
      onClick: () => n(!0),
      autoPlay: !0,
      playsInline: !0,
      controls: !1,
    })
  );
}
function Hg({
  message: e,
  username: t,
  socket: n,
  setMessage: r,
  strangerUsername: i,
  strangerUserId: o,
  connectionStatus: l,
}) {
  const s = k.useRef(null);
  return (
    k.useEffect(() => {
      s.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [e]),
    k.useEffect(() => {
      if (n)
        return (
          n.on("private message", ({ content: a, from: u }) => {
            o === u && r((c) => [...c, a]);
          }),
          () => {
            n.removeAllListeners("private message");
          }
        );
    }, [o]),
    U.jsxs("div", {
      id: "messageBox",
      children: [
        l !== null &&
          e.length === 0 &&
          U.jsx("div", {
            id: "overlayStatus",
            children: l
              ? U.jsxs("p", { children: [t, " is connected with ", i] })
              : U.jsx("p", { children: "Looking For Stranger..." }),
          }),
        e.map((a, u) =>
          a
            ? U.jsx(
                "div",
                {
                  className: a.username === t ? "right" : "left",
                  children: a.message,
                },
                u,
              )
            : null,
        ),
        U.jsx("div", { ref: s }),
      ],
    })
  );
}
function Wg({
  socket: e,
  setMessage: t,
  strangerUserId: n,
  username: r,
  setUpdateUser: i,
}) {
  const [o, l] = k.useState("");
  function s(c) {
    (c.preventDefault(),
      e.emit("private message", {
        content: { username: r, message: o, userid: e.id },
        to: n,
      }),
      t((h) => [...h, { username: r, message: o }]),
      l(""));
  }
  function a(c) {
    (c.preventDefault(), i((h) => h + 1));
  }
  function u(c) {
    (c.preventDefault(),
      e &&
        (n
          ? e.emit("pairedUserLeftTheChat", n)
          : e.emit("soloUserLeftTheChat")),
      t([]),
      i((h) => h + 1));
  }
  return U.jsx("div", {
    id: "sendMessageBtn",
    children: U.jsxs("form", {
      onSubmit: s,
      id: "sendMassage",
      children: [
        U.jsx("input", {
          type: "button",
          value: "new",
          id: "changeNewUser",
          onClick: a,
        }),
        U.jsx("input", {
          type: "button",
          value: "cut",
          id: "cutCallBtn",
          onClick: u,
        }),
        U.jsx("input", {
          type: "text",
          name: "sendMessage",
          id: "sendMessageBox",
          value: o,
          onChange: (c) => l(c.target.value),
        }),
        U.jsx("input", { type: "submit", value: "Send", id: "sendMessageBtn" }),
      ],
    }),
  });
}
const Ct = Object.create(null);
Ct.open = "0";
Ct.close = "1";
Ct.ping = "2";
Ct.pong = "3";
Ct.message = "4";
Ct.upgrade = "5";
Ct.noop = "6";
const no = Object.create(null);
Object.keys(Ct).forEach((e) => {
  no[Ct[e]] = e;
});
const As = { type: "error", data: "parser error" },
  vh =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  wh = typeof ArrayBuffer == "function",
  Sh = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  Ua = ({ type: e, data: t }, n, r) =>
    vh && t instanceof Blob
      ? n
        ? r(t)
        : Pc(t, r)
      : wh && (t instanceof ArrayBuffer || Sh(t))
        ? n
          ? r(t)
          : Pc(new Blob([t]), r)
        : r(Ct[e] + (t || "")),
  Pc = (e, t) => {
    const n = new FileReader();
    return (
      (n.onload = function () {
        const r = n.result.split(",")[1];
        t("b" + (r || ""));
      }),
      n.readAsDataURL(e)
    );
  };
function Tc(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
      ? new Uint8Array(e)
      : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Il;
function Qg(e, t) {
  if (vh && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Tc).then(t);
  if (wh && (e.data instanceof ArrayBuffer || Sh(e.data))) return t(Tc(e.data));
  Ua(e, !1, (n) => {
    (Il || (Il = new TextEncoder()), t(Il.encode(n)));
  });
}
const Lc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  zr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Lc.length; e++) zr[Lc.charCodeAt(e)] = e;
const Kg = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      i = 0,
      o,
      l,
      s,
      a;
    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
    const u = new ArrayBuffer(t),
      c = new Uint8Array(u);
    for (r = 0; r < n; r += 4)
      ((o = zr[e.charCodeAt(r)]),
        (l = zr[e.charCodeAt(r + 1)]),
        (s = zr[e.charCodeAt(r + 2)]),
        (a = zr[e.charCodeAt(r + 3)]),
        (c[i++] = (o << 2) | (l >> 4)),
        (c[i++] = ((l & 15) << 4) | (s >> 2)),
        (c[i++] = ((s & 3) << 6) | (a & 63)));
    return u;
  },
  qg = typeof ArrayBuffer == "function",
  Fa = (e, t) => {
    if (typeof e != "string") return { type: "message", data: Eh(e, t) };
    const n = e.charAt(0);
    return n === "b"
      ? { type: "message", data: Yg(e.substring(1), t) }
      : no[n]
        ? e.length > 1
          ? { type: no[n], data: e.substring(1) }
          : { type: no[n] }
        : As;
  },
  Yg = (e, t) => {
    if (qg) {
      const n = Kg(e);
      return Eh(n, t);
    } else return { base64: !0, data: e };
  },
  Eh = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof Blob ? e : new Blob([e]);
      case "arraybuffer":
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  kh = "",
  Xg = (e, t) => {
    const n = e.length,
      r = new Array(n);
    let i = 0;
    e.forEach((o, l) => {
      Ua(o, !1, (s) => {
        ((r[l] = s), ++i === n && t(r.join(kh)));
      });
    });
  },
  Jg = (e, t) => {
    const n = e.split(kh),
      r = [];
    for (let i = 0; i < n.length; i++) {
      const o = Fa(n[i], t);
      if ((r.push(o), o.type === "error")) break;
    }
    return r;
  };
function Gg() {
  return new TransformStream({
    transform(e, t) {
      Qg(e, (n) => {
        const r = n.length;
        let i;
        if (r < 126)
          ((i = new Uint8Array(1)), new DataView(i.buffer).setUint8(0, r));
        else if (r < 65536) {
          i = new Uint8Array(3);
          const o = new DataView(i.buffer);
          (o.setUint8(0, 126), o.setUint16(1, r));
        } else {
          i = new Uint8Array(9);
          const o = new DataView(i.buffer);
          (o.setUint8(0, 127), o.setBigUint64(1, BigInt(r)));
        }
        (e.data && typeof e.data != "string" && (i[0] |= 128),
          t.enqueue(i),
          t.enqueue(n));
      });
    },
  });
}
let zl;
function ji(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function Vi(e, t) {
  if (e[0].length === t) return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let i = 0; i < t; i++)
    ((n[i] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0)));
  return (e.length && r < e[0].length && (e[0] = e[0].slice(r)), n);
}
function Zg(e, t) {
  zl || (zl = new TextDecoder());
  const n = [];
  let r = 0,
    i = -1,
    o = !1;
  return new TransformStream({
    transform(l, s) {
      for (n.push(l); ; ) {
        if (r === 0) {
          if (ji(n) < 1) break;
          const a = Vi(n, 1);
          ((o = (a[0] & 128) === 128),
            (i = a[0] & 127),
            i < 126 ? (r = 3) : i === 126 ? (r = 1) : (r = 2));
        } else if (r === 1) {
          if (ji(n) < 2) break;
          const a = Vi(n, 2);
          ((i = new DataView(a.buffer, a.byteOffset, a.length).getUint16(0)),
            (r = 3));
        } else if (r === 2) {
          if (ji(n) < 8) break;
          const a = Vi(n, 8),
            u = new DataView(a.buffer, a.byteOffset, a.length),
            c = u.getUint32(0);
          if (c > Math.pow(2, 21) - 1) {
            s.enqueue(As);
            break;
          }
          ((i = c * Math.pow(2, 32) + u.getUint32(4)), (r = 3));
        } else {
          if (ji(n) < i) break;
          const a = Vi(n, i);
          (s.enqueue(Fa(o ? a : zl.decode(a), t)), (r = 0));
        }
        if (i === 0 || i > e) {
          s.enqueue(As);
          break;
        }
      }
    },
  });
}
const xh = 4;
function ve(e) {
  if (e) return bg(e);
}
function bg(e) {
  for (var t in ve.prototype) e[t] = ve.prototype[t];
  return e;
}
ve.prototype.on = ve.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
  );
};
ve.prototype.once = function (e, t) {
  function n() {
    (this.off(e, n), t.apply(this, arguments));
  }
  return ((n.fn = t), this.on(e, n), this);
};
ve.prototype.off =
  ve.prototype.removeListener =
  ve.prototype.removeAllListeners =
  ve.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return ((this._callbacks = {}), this);
      var n = this._callbacks["$" + e];
      if (!n) return this;
      if (arguments.length == 1) return (delete this._callbacks["$" + e], this);
      for (var r, i = 0; i < n.length; i++)
        if (((r = n[i]), r === t || r.fn === t)) {
          n.splice(i, 1);
          break;
        }
      return (n.length === 0 && delete this._callbacks["$" + e], this);
    };
ve.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      n = this._callbacks["$" + e],
      r = 1;
    r < arguments.length;
    r++
  )
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
  }
  return this;
};
ve.prototype.emitReserved = ve.prototype.emit;
ve.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}),
    this._callbacks["$" + e] || []
  );
};
ve.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const rt =
  typeof self < "u"
    ? self
    : typeof window < "u"
      ? window
      : Function("return this")();
function Ch(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const ev = rt.setTimeout,
  tv = rt.clearTimeout;
function el(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = ev.bind(rt)), (e.clearTimeoutFn = tv.bind(rt)))
    : ((e.setTimeoutFn = rt.setTimeout.bind(rt)),
      (e.clearTimeoutFn = rt.clearTimeout.bind(rt)));
}
const nv = 1.33;
function rv(e) {
  return typeof e == "string"
    ? iv(e)
    : Math.ceil((e.byteLength || e.size) * nv);
}
function iv(e) {
  let t = 0,
    n = 0;
  for (let r = 0, i = e.length; r < i; r++)
    ((t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
          ? (n += 2)
          : t < 55296 || t >= 57344
            ? (n += 3)
            : (r++, (n += 4)));
  return n;
}
function ov(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
  return t;
}
function lv(e) {
  let t = {},
    n = e.split("&");
  for (let r = 0, i = n.length; r < i; r++) {
    let o = n[r].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return t;
}
class sv extends Error {
  constructor(t, n, r) {
    (super(t),
      (this.description = n),
      (this.context = r),
      (this.type = "TransportError"));
  }
}
class Ba extends ve {
  constructor(t) {
    (super(),
      (this.writable = !1),
      el(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket));
  }
  onError(t, n, r) {
    return (super.emitReserved("error", new sv(t, n, r)), this);
  }
  open() {
    return ((this.readyState = "opening"), this.doOpen(), this);
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  onOpen() {
    ((this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open"));
  }
  onData(t) {
    const n = Fa(t, this.socket.binaryType);
    this.onPacket(n);
  }
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  onClose(t) {
    ((this.readyState = "closed"), super.emitReserved("close", t));
  }
  pause(t) {}
  createUri(t, n = {}) {
    return (
      t +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(n)
    );
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(t) {
    const n = ov(t);
    return n.length ? "?" + n : "";
  }
}
const _h =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
      "",
    ),
  Is = 64,
  av = {};
let Nc = 0,
  $i = 0,
  Oc;
function Dc(e) {
  let t = "";
  do ((t = _h[e % Is] + t), (e = Math.floor(e / Is)));
  while (e > 0);
  return t;
}
function Rh() {
  const e = Dc(+new Date());
  return e !== Oc ? ((Nc = 0), (Oc = e)) : e + "." + Dc(Nc++);
}
for (; $i < Is; $i++) av[_h[$i]] = $i;
let Ph = !1;
try {
  Ph = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const uv = Ph;
function Th(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || uv)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new rt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
function cv() {}
const fv = (function () {
  return new Th({ xdomain: !1 }).responseType != null;
})();
class dv extends Ba {
  constructor(t) {
    if ((super(t), (this.polling = !1), typeof location < "u")) {
      const r = location.protocol === "https:";
      let i = location.port;
      (i || (i = r ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && t.hostname !== location.hostname) ||
          i !== t.port));
    }
    const n = t && t.forceBase64;
    ((this.supportsBinary = fv && !n),
      this.opts.withCredentials && (this.cookieJar = void 0));
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      ((this.readyState = "paused"), t());
    };
    if (this.polling || !this.writable) {
      let r = 0;
      (this.polling &&
        (r++,
        this.once("pollComplete", function () {
          --r || n();
        })),
        this.writable ||
          (r++,
          this.once("drain", function () {
            --r || n();
          })));
    } else n();
  }
  poll() {
    ((this.polling = !0), this.doPoll(), this.emitReserved("poll"));
  }
  onData(t) {
    const n = (r) => {
      if (
        (this.readyState === "opening" && r.type === "open" && this.onOpen(),
        r.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }),
          !1
        );
      this.onPacket(r);
    };
    (Jg(t, this.socket.binaryType).forEach(n),
      this.readyState !== "closed" &&
        ((this.polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this.poll()));
  }
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  write(t) {
    ((this.writable = !1),
      Xg(t, (n) => {
        this.doWrite(n, () => {
          ((this.writable = !0), this.emitReserved("drain"));
        });
      }));
  }
  uri() {
    const t = this.opts.secure ? "https" : "http",
      n = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (n[this.opts.timestampParam] = Rh()),
      !this.supportsBinary && !n.sid && (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd, cookieJar: this.cookieJar }, this.opts),
      new er(this.uri(), t)
    );
  }
  doWrite(t, n) {
    const r = this.request({ method: "POST", data: t });
    (r.on("success", n),
      r.on("error", (i, o) => {
        this.onError("xhr post error", i, o);
      }));
  }
  doPoll() {
    const t = this.request();
    (t.on("data", this.onData.bind(this)),
      t.on("error", (n, r) => {
        this.onError("xhr poll error", n, r);
      }),
      (this.pollXhr = t));
  }
}
let er = class ro extends ve {
  constructor(t, n) {
    (super(),
      el(this, n),
      (this.opts = n),
      (this.method = n.method || "GET"),
      (this.uri = t),
      (this.data = n.data !== void 0 ? n.data : null),
      this.create());
  }
  create() {
    var t;
    const n = Ch(
      this.opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref",
    );
    n.xdomain = !!this.opts.xd;
    const r = (this.xhr = new Th(n));
    try {
      r.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let i in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(i) &&
              r.setRequestHeader(i, this.opts.extraHeaders[i]);
        }
      } catch {}
      if (this.method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {}
      ((t = this.opts.cookieJar) === null || t === void 0 || t.addCookies(r),
        "withCredentials" in r &&
          (r.withCredentials = this.opts.withCredentials),
        this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout),
        (r.onreadystatechange = () => {
          var i;
          (r.readyState === 3 &&
            ((i = this.opts.cookieJar) === null ||
              i === void 0 ||
              i.parseCookies(r)),
            r.readyState === 4 &&
              (r.status === 200 || r.status === 1223
                ? this.onLoad()
                : this.setTimeoutFn(() => {
                    this.onError(typeof r.status == "number" ? r.status : 0);
                  }, 0)));
        }),
        r.send(this.data));
    } catch (i) {
      this.setTimeoutFn(() => {
        this.onError(i);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this.index = ro.requestsCount++), (ro.requests[this.index] = this));
  }
  onError(t) {
    (this.emitReserved("error", t, this.xhr), this.cleanup(!0));
  }
  cleanup(t) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (((this.xhr.onreadystatechange = cv), t))
        try {
          this.xhr.abort();
        } catch {}
      (typeof document < "u" && delete ro.requests[this.index],
        (this.xhr = null));
    }
  }
  onLoad() {
    const t = this.xhr.responseText;
    t !== null &&
      (this.emitReserved("data", t),
      this.emitReserved("success"),
      this.cleanup());
  }
  abort() {
    this.cleanup();
  }
};
er.requestsCount = 0;
er.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", Mc);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in rt ? "pagehide" : "unload";
    addEventListener(e, Mc, !1);
  }
}
function Mc() {
  for (let e in er.requests)
    er.requests.hasOwnProperty(e) && er.requests[e].abort();
}
const ja =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, n) => n(t, 0),
  Hi = rt.WebSocket || rt.MozWebSocket,
  Ac = !0,
  hv = "arraybuffer",
  Ic =
    typeof navigator < "u" &&
    typeof navigator.product == "string" &&
    navigator.product.toLowerCase() === "reactnative";
class pv extends Ba {
  constructor(t) {
    (super(t), (this.supportsBinary = !t.forceBase64));
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) return;
    const t = this.uri(),
      n = this.opts.protocols,
      r = Ic
        ? {}
        : Ch(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity",
          );
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = Ac && !Ic ? (n ? new Hi(t, n) : new Hi(t)) : new Hi(t, n, r);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    ((this.ws.binaryType = this.socket.binaryType), this.addEventListeners());
  }
  addEventListeners() {
    ((this.ws.onopen = () => {
      (this.opts.autoUnref && this.ws._socket.unref(), this.onOpen());
    }),
      (this.ws.onclose = (t) =>
        this.onClose({
          description: "websocket connection closed",
          context: t,
        })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError("websocket error", t)));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1;
      Ua(r, this.supportsBinary, (o) => {
        const l = {};
        try {
          Ac && this.ws.send(o);
        } catch {}
        i &&
          ja(() => {
            ((this.writable = !0), this.emitReserved("drain"));
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
  }
  uri() {
    const t = this.opts.secure ? "wss" : "ws",
      n = this.query || {};
    return (
      this.opts.timestampRequests && (n[this.opts.timestampParam] = Rh()),
      this.supportsBinary || (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  check() {
    return !!Hi;
  }
}
class mv extends Ba {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" &&
      ((this.transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name],
      )),
      this.transport.closed
        .then(() => {
          this.onClose();
        })
        .catch((t) => {
          this.onError("webtransport error", t);
        }),
      this.transport.ready.then(() => {
        this.transport.createBidirectionalStream().then((t) => {
          const n = Zg(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = t.readable.pipeThrough(n).getReader(),
            i = Gg();
          (i.readable.pipeTo(t.writable),
            (this.writer = i.writable.getWriter()));
          const o = () => {
            r.read()
              .then(({ done: s, value: a }) => {
                s || (this.onPacket(a), o());
              })
              .catch((s) => {});
          };
          o();
          const l = { type: "open" };
          (this.query.sid && (l.data = `{"sid":"${this.query.sid}"}`),
            this.writer.write(l).then(() => this.onOpen()));
        });
      }));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1;
      this.writer.write(r).then(() => {
        i &&
          ja(() => {
            ((this.writable = !0), this.emitReserved("drain"));
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this.transport) === null || t === void 0 || t.close();
  }
}
const yv = { websocket: pv, webtransport: mv, polling: dv },
  gv =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  vv = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function zs(e) {
  if (e.length > 2e3) throw "URI too long";
  const t = e,
    n = e.indexOf("["),
    r = e.indexOf("]");
  n != -1 &&
    r != -1 &&
    (e =
      e.substring(0, n) +
      e.substring(n, r).replace(/:/g, ";") +
      e.substring(r, e.length));
  let i = gv.exec(e || ""),
    o = {},
    l = 14;
  for (; l--; ) o[vv[l]] = i[l] || "";
  return (
    n != -1 &&
      r != -1 &&
      ((o.source = t),
      (o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":")),
      (o.authority = o.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (o.ipv6uri = !0)),
    (o.pathNames = wv(o, o.path)),
    (o.queryKey = Sv(o, o.query)),
    o
  );
}
function wv(e, t) {
  const n = /\/{2,9}/g,
    r = t.replace(n, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
  );
}
function Sv(e, t) {
  const n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, i, o) {
      i && (n[i] = o);
    }),
    n
  );
}
let Lh = class Mn extends ve {
  constructor(t, n = {}) {
    (super(),
      (this.binaryType = hv),
      (this.writeBuffer = []),
      t && typeof t == "object" && ((n = t), (t = null)),
      t
        ? ((t = zs(t)),
          (n.hostname = t.host),
          (n.secure = t.protocol === "https" || t.protocol === "wss"),
          (n.port = t.port),
          t.query && (n.query = t.query))
        : n.host && (n.hostname = zs(n.host).host),
      el(this, n),
      (this.secure =
        n.secure != null
          ? n.secure
          : typeof location < "u" && location.protocol === "https:"),
      n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
      (this.hostname =
        n.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        n.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
            ? "443"
            : "80")),
      (this.transports = n.transports || [
        "polling",
        "websocket",
        "webtransport",
      ]),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        n,
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = lv(this.opts.query)),
      (this.id = null),
      (this.upgrades = null),
      (this.pingInterval = null),
      (this.pingTimeout = null),
      (this.pingTimeoutTimer = null),
      typeof addEventListener == "function" &&
        (this.opts.closeOnBeforeunload &&
          ((this.beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener("beforeunload", this.beforeunloadEventListener, !1)),
        this.hostname !== "localhost" &&
          ((this.offlineEventListener = () => {
            this.onClose("transport close", {
              description: "network connection lost",
            });
          }),
          addEventListener("offline", this.offlineEventListener, !1))),
      this.open());
  }
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    ((n.EIO = xh), (n.transport = t), this.id && (n.sid = this.id));
    const r = Object.assign(
      {},
      this.opts,
      {
        query: n,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[t],
    );
    return new yv[t](r);
  }
  open() {
    let t;
    if (
      this.opts.rememberUpgrade &&
      Mn.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
    )
      t = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else t = this.transports[0];
    this.readyState = "opening";
    try {
      t = this.createTransport(t);
    } catch {
      (this.transports.shift(), this.open());
      return;
    }
    (t.open(), this.setTransport(t));
  }
  setTransport(t) {
    (this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on("drain", this.onDrain.bind(this))
        .on("packet", this.onPacket.bind(this))
        .on("error", this.onError.bind(this))
        .on("close", (n) => this.onClose("transport close", n)));
  }
  probe(t) {
    let n = this.createTransport(t),
      r = !1;
    Mn.priorWebsocketSuccess = !1;
    const i = () => {
      r ||
        (n.send([{ type: "ping", data: "probe" }]),
        n.once("packet", (h) => {
          if (!r)
            if (h.type === "pong" && h.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", n), !n)
              )
                return;
              ((Mn.priorWebsocketSuccess = n.name === "websocket"),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== "closed" &&
                      (c(),
                      this.setTransport(n),
                      n.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", n),
                      (n = null),
                      (this.upgrading = !1),
                      this.flush()));
                }));
            } else {
              const p = new Error("probe error");
              ((p.transport = n.name), this.emitReserved("upgradeError", p));
            }
        }));
    };
    function o() {
      r || ((r = !0), c(), n.close(), (n = null));
    }
    const l = (h) => {
      const p = new Error("probe error: " + h);
      ((p.transport = n.name), o(), this.emitReserved("upgradeError", p));
    };
    function s() {
      l("transport closed");
    }
    function a() {
      l("socket closed");
    }
    function u(h) {
      n && h.name !== n.name && o();
    }
    const c = () => {
      (n.removeListener("open", i),
        n.removeListener("error", l),
        n.removeListener("close", s),
        this.off("close", a),
        this.off("upgrading", u));
    };
    (n.once("open", i),
      n.once("error", l),
      n.once("close", s),
      this.once("close", a),
      this.once("upgrading", u),
      this.upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
        ? this.setTimeoutFn(() => {
            r || n.open();
          }, 200)
        : n.open());
  }
  onOpen() {
    if (
      ((this.readyState = "open"),
      (Mn.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush(),
      this.readyState === "open" && this.opts.upgrade)
    ) {
      let t = 0;
      const n = this.upgrades.length;
      for (; t < n; t++) this.probe(this.upgrades[t]);
    }
  }
  onPacket(t) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", t),
        this.emitReserved("heartbeat"),
        this.resetPingTimeout(),
        t.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          (this.sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong"));
          break;
        case "error":
          const n = new Error("server error");
          ((n.code = t.data), this.onError(n));
          break;
        case "message":
          (this.emitReserved("data", t.data),
            this.emitReserved("message", t.data));
          break;
      }
  }
  onHandshake(t) {
    (this.emitReserved("handshake", t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this.upgrades = this.filterUpgrades(t.upgrades)),
      (this.pingInterval = t.pingInterval),
      (this.pingTimeout = t.pingTimeout),
      (this.maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this.resetPingTimeout());
  }
  resetPingTimeout() {
    (this.clearTimeoutFn(this.pingTimeoutTimer),
      (this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout)),
      this.opts.autoUnref && this.pingTimeoutTimer.unref());
  }
  onDrain() {
    (this.writeBuffer.splice(0, this.prevBufferLen),
      (this.prevBufferLen = 0),
      this.writeBuffer.length === 0
        ? this.emitReserved("drain")
        : this.flush());
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this.getWritablePackets();
      (this.transport.send(t),
        (this.prevBufferLen = t.length),
        this.emitReserved("flush"));
    }
  }
  getWritablePackets() {
    if (
      !(
        this.maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const i = this.writeBuffer[r].data;
      if ((i && (n += rv(i)), r > 0 && n > this.maxPayload))
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  write(t, n, r) {
    return (this.sendPacket("message", t, n, r), this);
  }
  send(t, n, r) {
    return (this.sendPacket("message", t, n, r), this);
  }
  sendPacket(t, n, r, i) {
    if (
      (typeof n == "function" && ((i = n), (n = void 0)),
      typeof r == "function" && ((i = r), (r = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    ((r = r || {}), (r.compress = r.compress !== !1));
    const o = { type: t, data: n, options: r };
    (this.emitReserved("packetCreate", o),
      this.writeBuffer.push(o),
      i && this.once("flush", i),
      this.flush());
  }
  close() {
    const t = () => {
        (this.onClose("forced close"), this.transport.close());
      },
      n = () => {
        (this.off("upgrade", n), this.off("upgradeError", n), t());
      },
      r = () => {
        (this.once("upgrade", n), this.once("upgradeError", n));
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? r() : t();
            })
          : this.upgrading
            ? r()
            : t()),
      this
    );
  }
  onError(t) {
    ((Mn.priorWebsocketSuccess = !1),
      this.emitReserved("error", t),
      this.onClose("transport error", t));
  }
  onClose(t, n) {
    (this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing") &&
      (this.clearTimeoutFn(this.pingTimeoutTimer),
      this.transport.removeAllListeners("close"),
      this.transport.close(),
      this.transport.removeAllListeners(),
      typeof removeEventListener == "function" &&
        (removeEventListener(
          "beforeunload",
          this.beforeunloadEventListener,
          !1,
        ),
        removeEventListener("offline", this.offlineEventListener, !1)),
      (this.readyState = "closed"),
      (this.id = null),
      this.emitReserved("close", t, n),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0));
  }
  filterUpgrades(t) {
    const n = [];
    let r = 0;
    const i = t.length;
    for (; r < i; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
};
Lh.protocol = xh;
function Ev(e, t = "", n) {
  let r = e;
  ((n = n || (typeof location < "u" && location)),
    e == null && (e = n.protocol + "//" + n.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" &&
        (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof n < "u" ? (e = n.protocol + "//" + e) : (e = "https://" + e)),
      (r = zs(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = "80")
        : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    (r.path = r.path || "/"));
  const o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return (
    (r.id = r.protocol + "://" + o + ":" + r.port + t),
    (r.href =
      r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port)),
    r
  );
}
const kv = typeof ArrayBuffer == "function",
  xv = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  Nh = Object.prototype.toString,
  Cv =
    typeof Blob == "function" ||
    (typeof Blob < "u" && Nh.call(Blob) === "[object BlobConstructor]"),
  _v =
    typeof File == "function" ||
    (typeof File < "u" && Nh.call(File) === "[object FileConstructor]");
function Va(e) {
  return (
    (kv && (e instanceof ArrayBuffer || xv(e))) ||
    (Cv && e instanceof Blob) ||
    (_v && e instanceof File)
  );
}
function io(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) if (io(e[n])) return !0;
    return !1;
  }
  if (Va(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return io(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && io(e[n])) return !0;
  return !1;
}
function Rv(e) {
  const t = [],
    n = e.data,
    r = e;
  return (
    (r.data = Us(n, t)),
    (r.attachments = t.length),
    { packet: r, buffers: t }
  );
}
function Us(e, t) {
  if (!e) return e;
  if (Va(e)) {
    const n = { _placeholder: !0, num: t.length };
    return (t.push(e), n);
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = Us(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = Us(e[r], t));
    return n;
  }
  return e;
}
function Pv(e, t) {
  return ((e.data = Fs(e.data, t)), delete e.attachments, e);
}
function Fs(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) e[n] = Fs(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Fs(e[n], t));
  return e;
}
const Tv = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  Lv = 5;
var q;
(function (e) {
  ((e[(e.CONNECT = 0)] = "CONNECT"),
    (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
    (e[(e.EVENT = 2)] = "EVENT"),
    (e[(e.ACK = 3)] = "ACK"),
    (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (e[(e.BINARY_ACK = 6)] = "BINARY_ACK"));
})(q || (q = {}));
class Nv {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === q.EVENT || t.type === q.ACK) && io(t)
      ? this.encodeAsBinary({
          type: t.type === q.EVENT ? q.BINARY_EVENT : q.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let n = "" + t.type;
    return (
      (t.type === q.BINARY_EVENT || t.type === q.BINARY_ACK) &&
        (n += t.attachments + "-"),
      t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
      t.id != null && (n += t.id),
      t.data != null && (n += JSON.stringify(t.data, this.replacer)),
      n
    );
  }
  encodeAsBinary(t) {
    const n = Rv(t),
      r = this.encodeAsString(n.packet),
      i = n.buffers;
    return (i.unshift(r), i);
  }
}
function zc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class $a extends ve {
  constructor(t) {
    (super(), (this.reviver = t));
  }
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === q.BINARY_EVENT;
      r || n.type === q.BINARY_ACK
        ? ((n.type = r ? q.EVENT : q.ACK),
          (this.reconstructor = new Ov(n)),
          n.attachments === 0 && super.emitReserved("decoded", n))
        : super.emitReserved("decoded", n);
    } else if (Va(t) || t.base64)
      if (this.reconstructor)
        ((n = this.reconstructor.takeBinaryData(t)),
          n && ((this.reconstructor = null), super.emitReserved("decoded", n)));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + t);
  }
  decodeString(t) {
    let n = 0;
    const r = { type: Number(t.charAt(0)) };
    if (q[r.type] === void 0) throw new Error("unknown packet type " + r.type);
    if (r.type === q.BINARY_EVENT || r.type === q.BINARY_ACK) {
      const o = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; );
      const l = t.substring(o, n);
      if (l != Number(l) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(l);
    }
    if (t.charAt(n + 1) === "/") {
      const o = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); );
      r.nsp = t.substring(o, n);
    } else r.nsp = "/";
    const i = t.charAt(n + 1);
    if (i !== "" && Number(i) == i) {
      const o = n + 1;
      for (; ++n; ) {
        const l = t.charAt(n);
        if (l == null || Number(l) != l) {
          --n;
          break;
        }
        if (n === t.length) break;
      }
      r.id = Number(t.substring(o, n + 1));
    }
    if (t.charAt(++n)) {
      const o = this.tryParse(t.substr(n));
      if ($a.isPayloadValid(r.type, o)) r.data = o;
      else throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case q.CONNECT:
        return zc(n);
      case q.DISCONNECT:
        return n === void 0;
      case q.CONNECT_ERROR:
        return typeof n == "string" || zc(n);
      case q.EVENT:
      case q.BINARY_EVENT:
        return (
          Array.isArray(n) &&
          (typeof n[0] == "number" ||
            (typeof n[0] == "string" && Tv.indexOf(n[0]) === -1))
        );
      case q.ACK:
      case q.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class Ov {
  constructor(t) {
    ((this.packet = t), (this.buffers = []), (this.reconPack = t));
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const n = Pv(this.reconPack, this.buffers);
      return (this.finishedReconstruction(), n);
    }
    return null;
  }
  finishedReconstruction() {
    ((this.reconPack = null), (this.buffers = []));
  }
}
const Dv = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: $a,
      Encoder: Nv,
      get PacketType() {
        return q;
      },
      protocol: Lv,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function ht(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n);
    }
  );
}
const Mv = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class Oh extends ve {
  constructor(t, n, r) {
    (super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = n),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open());
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      ht(t, "open", this.onopen.bind(this)),
      ht(t, "packet", this.onpacket.bind(this)),
      ht(t, "error", this.onerror.bind(this)),
      ht(t, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...t) {
    return (t.unshift("message"), this.emit.apply(this, t), this);
  }
  emit(t, ...n) {
    if (Mv.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (
      (n.unshift(t),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return (this._addToQueue(n), this);
    const r = { type: q.EVENT, data: n };
    if (
      ((r.options = {}),
      (r.options.compress = this.flags.compress !== !1),
      typeof n[n.length - 1] == "function")
    ) {
      const l = this.ids++,
        s = n.pop();
      (this._registerAckCallback(l, s), (r.id = l));
    }
    const i =
      this.io.engine &&
      this.io.engine.transport &&
      this.io.engine.transport.writable;
    return (
      (this.flags.volatile && (!i || !this.connected)) ||
        (this.connected
          ? (this.notifyOutgoingListeners(r), this.packet(r))
          : this.sendBuffer.push(r)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, n) {
    var r;
    const i =
      (r = this.flags.timeout) !== null && r !== void 0
        ? r
        : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[t] = n;
      return;
    }
    const o = this.io.setTimeoutFn(() => {
        delete this.acks[t];
        for (let s = 0; s < this.sendBuffer.length; s++)
          this.sendBuffer[s].id === t && this.sendBuffer.splice(s, 1);
        n.call(this, new Error("operation has timed out"));
      }, i),
      l = (...s) => {
        (this.io.clearTimeoutFn(o), n.apply(this, s));
      };
    ((l.withError = !0), (this.acks[t] = l));
  }
  emitWithAck(t, ...n) {
    return new Promise((r, i) => {
      const o = (l, s) => (l ? i(l) : r(s));
      ((o.withError = !0), n.push(o), this.emit(t, ...n));
    });
  }
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    (t.push((i, ...o) =>
      r !== this._queue[0]
        ? void 0
        : (i !== null
            ? r.tryCount > this._opts.retries &&
              (this._queue.shift(), n && n(i))
            : (this._queue.shift(), n && n(null, ...o)),
          (r.pending = !1),
          this._drainQueue()),
    ),
      this._queue.push(r),
      this._drainQueue());
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const n = this._queue[0];
    (n.pending && !t) ||
      ((n.pending = !0),
      n.tryCount++,
      (this.flags = n.flags),
      this.emit.apply(this, n.args));
  }
  packet(t) {
    ((t.nsp = this.nsp), this.io._packet(t));
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((t) => {
          this._sendConnectPacket(t);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(t) {
    this.packet({
      type: q.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
        : t,
    });
  }
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  onclose(t, n) {
    ((this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", t, n),
      this._clearAcks());
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t];
        (delete this.acks[t],
          r.withError &&
            r.call(this, new Error("socket has been disconnected")));
      }
    });
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case q.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)",
                ),
              );
          break;
        case q.EVENT:
        case q.BINARY_EVENT:
          this.onevent(t);
          break;
        case q.ACK:
        case q.BINARY_ACK:
          this.onack(t);
          break;
        case q.DISCONNECT:
          this.ondisconnect();
          break;
        case q.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          ((r.data = t.data.data), this.emitReserved("connect_error", r));
          break;
      }
  }
  onevent(t) {
    const n = t.data || [];
    (t.id != null && n.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(n)
        : this.receiveBuffer.push(Object.freeze(n)));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n) r.apply(this, t);
    }
    (super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == "string" &&
        (this._lastOffset = t[t.length - 1]));
  }
  ack(t) {
    const n = this;
    let r = !1;
    return function (...i) {
      r || ((r = !0), n.packet({ type: q.ACK, id: t, data: i }));
    };
  }
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" &&
      (delete this.acks[t.id],
      n.withError && t.data.unshift(null),
      n.apply(this, t.data));
  }
  onconnect(t, n) {
    ((this.id = t),
      (this.recovered = n && this._pid === n),
      (this._pid = n),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0));
  }
  emitBuffered() {
    (this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        (this.notifyOutgoingListeners(t), this.packet(t));
      }),
      (this.sendBuffer = []));
  }
  ondisconnect() {
    (this.destroy(), this.onclose("io server disconnect"));
  }
  destroy() {
    (this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this));
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: q.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return ((this.flags.compress = t), this);
  }
  get volatile() {
    return ((this.flags.volatile = !0), this);
  }
  timeout(t) {
    return ((this.flags.timeout = t), this);
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    );
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    );
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return (n.splice(r, 1), this);
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return (n.splice(r, 1), this);
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n) r.apply(this, t.data);
    }
  }
}
function hr(e) {
  ((e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0));
}
hr.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
hr.prototype.reset = function () {
  this.attempts = 0;
};
hr.prototype.setMin = function (e) {
  this.ms = e;
};
hr.prototype.setMax = function (e) {
  this.max = e;
};
hr.prototype.setJitter = function (e) {
  this.jitter = e;
};
class Bs extends ve {
  constructor(t, n) {
    var r;
    (super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((n = t), (t = void 0)),
      (n = n || {}),
      (n.path = n.path || "/socket.io"),
      (this.opts = n),
      el(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5,
      ),
      (this.backoff = new hr({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = "closed"),
      (this.uri = t));
    const i = n.parser || Dv;
    ((this.encoder = new i.Encoder()),
      (this.decoder = new i.Decoder()),
      (this._autoConnect = n.autoConnect !== !1),
      this._autoConnect && this.open());
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new Lh(this.uri, this.opts);
    const n = this.engine,
      r = this;
    ((this._readyState = "opening"), (this.skipReconnect = !1));
    const i = ht(n, "open", function () {
        (r.onopen(), t && t());
      }),
      o = (s) => {
        (this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", s),
          t ? t(s) : this.maybeReconnectOnOpen());
      },
      l = ht(n, "error", o);
    if (this._timeout !== !1) {
      const s = this._timeout,
        a = this.setTimeoutFn(() => {
          (i(), o(new Error("timeout")), n.close());
        }, s);
      (this.opts.autoUnref && a.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(a);
        }));
    }
    return (this.subs.push(i), this.subs.push(l), this);
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    (this.cleanup(), (this._readyState = "open"), this.emitReserved("open"));
    const t = this.engine;
    this.subs.push(
      ht(t, "ping", this.onping.bind(this)),
      ht(t, "data", this.ondata.bind(this)),
      ht(t, "error", this.onerror.bind(this)),
      ht(t, "close", this.onclose.bind(this)),
      ht(this.decoder, "decoded", this.ondecoded.bind(this)),
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  ondecoded(t) {
    ja(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, n) {
    let r = this.nsps[t];
    return (
      r
        ? this._autoConnect && !r.active && r.connect()
        : ((r = new Oh(this, t, n)), (this.nsps[t] = r)),
      r
    );
  }
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
  }
  cleanup() {
    (this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy());
  }
  _close() {
    ((this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close"),
      this.engine && this.engine.close());
  }
  disconnect() {
    return this._close();
  }
  onclose(t, n) {
    (this.cleanup(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, n),
      this._reconnection && !this.skipReconnect && this.reconnect());
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      (this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1));
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((i) => {
              i
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", i))
                : t.onreconnect();
            }));
      }, n);
      (this.opts.autoUnref && r.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(r);
        }));
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    ((this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", t));
  }
}
const Or = {};
function oo(e, t) {
  (typeof e == "object" && ((t = e), (e = void 0)), (t = t || {}));
  const n = Ev(e, t.path || "/socket.io"),
    r = n.source,
    i = n.id,
    o = n.path,
    l = Or[i] && o in Or[i].nsps,
    s = t.forceNew || t["force new connection"] || t.multiplex === !1 || l;
  let a;
  return (
    s ? (a = new Bs(r, t)) : (Or[i] || (Or[i] = new Bs(r, t)), (a = Or[i])),
    n.query && !t.query && (t.query = n.queryKey),
    a.socket(n.path, t)
  );
}
Object.assign(oo, { Manager: Bs, Socket: Oh, io: oo, connect: oo });
function Dh() {
  const e = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };
  return new RTCPeerConnection(e);
}
function Av() {
  const e = "http://localhost:5000",
    t = "http://localhost:5000";
  try {
    const n = new URL(t),
      r = ["localhost", "127.0.0.1"].includes(n.hostname),
      i = ["localhost", "127.0.0.1"].includes(window.location.hostname);
    return r && !i
      ? ((n.hostname = window.location.hostname),
        n.toString().replace(/\/$/, ""))
      : t;
  } catch (n) {
    return (console.error("Invalid websocket URL, using fallback", n), e);
  }
}
function Iv(e, t, n, r, i, o, l) {
  const [s, a] = k.useState(null),
    [u, c] = k.useState(""),
    [h, p] = k.useState(null),
    [w, E] = k.useState(!1),
    [S, R] = k.useState(null),
    [d, f] = k.useState(!1),
    m = mh();
  (k.useEffect(() => {
    if (e) {
      const P = Av(),
        y = oo(P, { transports: ["websocket"], auth: { username: e } });
      return (
        y.on("connect", () => {
          console.log("socket connected", y.id);
        }),
        y.on("connect_error", (x) => {
          console.error(
            "socket connect_error",
            (x == null ? void 0 : x.message) || x,
          );
        }),
        y.on("disconnect", (x) => {
          console.log("socket disconnected", x);
        }),
        a(y),
        () => {
          (y.disconnect(), a(null));
        }
      );
    }
    !e && m("/");
  }, [e]),
    k.useEffect(() => {
      s && !h && (s.emit("startConnection"), f(!0));
    }, [s, h]),
    k.useEffect(() => {
      if (s)
        return (
          s.on("getStragerData", (P) => {
            (l(P), c(P.pairedUserId), p(P.strangerUsername), E(!0));
          }),
          s.on("waiting", (P) => {
            console.log("waiting", P);
          }),
          s.on("strangerLeftTheChat", C),
          s.on("errSelectingPair", () => s.emit("startConnection")),
          () => {
            (s.removeAllListeners("getStragerData"),
              s.removeAllListeners("waiting"),
              s.removeAllListeners("strangerLeftTheChat"),
              s.removeAllListeners("errSelectingPair"));
          }
        );
    }, [s]));
  function C() {
    (l(null),
      c(""),
      p(null),
      E(!1),
      t && (t.srcObject = null),
      n([]),
      i && i.signalingState !== "closed" && i.close());
    const P = Dh();
    o(P);
  }
  return (
    k.useEffect(() => {
      if (r > 0)
        return (
          R(u),
          C(),
          () => {
            R(null);
          }
        );
    }, [r]),
    k.useEffect(() => {
      d && S && s.emit("pairedUserLeftTheChat", S);
    }, [d, S]),
    k.useEffect(() => {
      if (!s) return;
      const P = () => {
        h ? s.emit("pairedUserLeftTheChat", u) : s.emit("soloUserLeftTheChat");
      };
      return (
        window.addEventListener("beforeunload", P),
        () => {
          window.removeEventListener("beforeunload", P);
        }
      );
    }, [s, h, u]),
    k.useEffect(() => {
      s && !h && E(!1);
    }, [s, h]),
    { socket: s, strangerUserId: u, strangerUsername: h, connectionStatus: w }
  );
}
function zv(e) {
  k.useEffect(() => {
    const t = Dh();
    e(t);
  }, []);
}
function Uv({ strangerUsername: e }) {
  return U.jsx("div", {
    id: "connectionSatusBar",
    children: e || U.jsx("div", { id: "loader" }),
  });
}
function Fv(e, t, n) {
  let r, i;
  const o = n.polite,
    l = n.pairedUserId;
  console.log(l, "strangerId");
  async function s() {
    try {
      ((r = !0),
        await t.setLocalDescription(),
        e.emit("message", { description: t.localDescription, to: l }),
        console.log("sent offer", n.strangerUsername));
    } catch (c) {
      console.error(c);
    } finally {
      r = !1;
    }
  }
  function a({ candidate: c }) {
    e.emit("message", { candidate: c, to: l });
  }
  async function u(c) {
    if (c === void 0 || (console.log("running"), t.signalingState === "closed"))
      return;
    const [h, p] = [c.description, c.candidate];
    try {
      if (h) {
        const w = h.type === "offer" && (r || t.signalingState !== "stable");
        if (((i = !o && w), i)) return;
        (await t.setRemoteDescription(h),
          console.log("recived offer/answer", n.strangerUsername),
          h.type === "offer" &&
            (await t.setLocalDescription(),
            e.emit("message", { description: t.localDescription, to: l })));
      } else if (p)
        try {
          await t.addIceCandidate(p);
        } catch (w) {
          if (!i) throw w;
        }
    } catch (w) {
      console.error(w);
    }
  }
  return { sendOffer: s, sendCandidate: a, handelNegotitation: u };
}
function Bv(e, t, n, r) {
  const i = k.useRef(null);
  k.useEffect(() => {
    if (t && e && n) {
      i.current = Fv(e, n, t);
      const {
        sendOffer: o,
        sendCandidate: l,
        handelNegotitation: s,
      } = i.current;
      console.log("current stragerData", t);
      try {
        if (r)
          for (const a of r.getTracks())
            n.getSenders().some((c) => {
              var h;
              return ((h = c.track) == null ? void 0 : h.id) === a.id;
            }) || n.addTrack(a, r);
        ((n.onnegotiationneeded = o),
          (n.onicecandidate = l),
          e.on("message", s));
      } catch (a) {
        console.log(a);
      }
      return () => {
        (n.signalingState !== "closed" &&
          n.getSenders().forEach((a) => {
            n.removeTrack(a);
          }),
          e.removeAllListeners("message"));
      };
    }
  }, [r, t, e, n]);
}
async function jv() {
  return (await navigator.mediaDevices.enumerateDevices()).filter(
    (t) => t.kind === "videoinput",
  );
}
async function Vv(e, t, n, r, i) {
  if ((e(!1), t && n))
    try {
      const o = await bo(t);
      ((n.srcObject = o), r(o));
      const l = o.getVideoTracks()[0],
        s = i.getSenders().find((a) => a.track.kind === "video");
      s && (await s.replaceTrack(l));
    } catch (o) {
      console.error("Error changing camera:", o);
    }
}
async function $v(e, t, n) {
  try {
    const r = await bo(e, t);
    (r && n(r), t.current && (t.current.srcObject = r));
  } catch (r) {
    console.error("Error changing preview camera:", r);
  }
}
function Hv({
  peerConnection: e,
  localVideo: t,
  ChangeCamOverly: n,
  setChangeCamOverly: r,
  selectedDeviceId: i,
  setSelectedDeviceId: o,
  setStream: l,
}) {
  const [s, a] = k.useState([]),
    [u, c] = k.useState(!1),
    h = k.useRef(null),
    p = k.useRef(null);
  return (
    k.useEffect(() => {
      if (n) {
        let w = null;
        const E = async () => {
          const S = await jv();
          (a(S),
            (w = await bo()),
            h.current && (h.current.srcObject = w),
            l(w));
        };
        try {
          E();
        } catch (S) {
          console.log("error setting upp devices and stream", S);
        }
        return () => {
          w.getVideoTracks()[0] && w.getVideoTracks()[0].stop();
        };
      }
    }, [n]),
    k.useEffect(() => {
      const w = (E) => {
        p.current && !p.current.contains(E.target) && c(!1);
      };
      return (
        document.addEventListener("mousedown", w),
        () => {
          document.removeEventListener("mousedown", w);
        }
      );
    }, []),
    n
      ? U.jsx("div", {
          id: "changeCamOverlay",
          children: U.jsxs("div", {
            id: "changeCamContainer",
            children: [
              U.jsx("video", {
                id: "videoPreview",
                ref: h,
                autoPlay: !0,
                playsInline: !0,
                controls: !1,
                muted: !0,
              }),
              U.jsxs("div", {
                id: "dropdown",
                ref: p,
                className: u ? "active" : "",
                children: [
                  U.jsx("button", {
                    className: "dropbtn",
                    onClick: () => c(!u),
                    children: "Select Camera",
                  }),
                  U.jsx("div", {
                    id: "dropdown-content",
                    children: s.map((w, E) =>
                      U.jsx(
                        "div",
                        {
                          className: "dropdown-item",
                          onClick: () => {
                            ($v(w.deviceId, h, l), o(w.deviceId), c(!1));
                          },
                          children: w.label,
                        },
                        E,
                      ),
                    ),
                  }),
                ],
              }),
              U.jsx("button", {
                id: "changeCamBtn",
                onClick: () => Vv(r, i, t, l, e),
                children: "Apply Changes",
              }),
            ],
          }),
        })
      : null
  );
}
function Wv({ username: e, setUsername: t }) {
  const [n, r] = k.useState([]),
    [i, o] = k.useState(null),
    [l, s] = k.useState(null),
    [a, u] = k.useState(0),
    [c, h] = k.useState(null),
    [p, w] = k.useState(null),
    [E, S] = k.useState(null),
    R = k.useRef(null),
    d = k.useRef(null),
    {
      socket: f,
      strangerUserId: m,
      strangerUsername: C,
      connectionStatus: P,
    } = Iv(e, d.current, r, a, i, o, S);
  return (
    zv(o),
    Bv(f, E, i, c),
    U.jsxs("div", {
      id: "chatPage",
      children: [
        U.jsxs("div", {
          id: "videoCall",
          children: [
            U.jsx(Hv, {
              peerConnection: i,
              localVideo: R.current,
              ChangeCamOverly: l,
              setChangeCamOverly: s,
              selectedDeviceId: p,
              setSelectedDeviceId: w,
              setStream: h,
            }),
            U.jsx(Vg, {
              localVideo: R,
              peerConnection: i,
              setChangeCamOverly: s,
              setStream: h,
              stream: c,
              selectedDeviceId: p,
              socket: f,
              strangerUserId: m,
            }),
            U.jsx($g, {
              remoteVideo: d,
              peerConnection: i,
              setChangeCamOverly: s,
            }),
          ],
        }),
        U.jsxs("div", {
          id: "messaging",
          children: [
            U.jsx(Uv, { strangerUsername: C }),
            U.jsx(Hg, {
              message: n,
              username: e,
              socket: f,
              setMessage: r,
              strangerUsername: C,
              strangerUserId: m,
              connectionStatus: P,
            }),
            U.jsx(Wg, {
              socket: f,
              setMessage: r,
              setUsername: t,
              setUpdateUser: u,
              strangerUserId: m,
              username: e,
              strangerUsername: C,
            }),
          ],
        }),
      ],
    })
  );
}
function Qv() {
  const [e, t] = k.useState(null),
    n = Tg([
      { path: "/", element: U.jsx(jg, { setUsername: t }) },
      { path: "/chat", element: U.jsx(Wv, { username: e, setUsername: t }) },
    ]);
  return U.jsx(Ug, { router: n });
}
Ul.createRoot(document.getElementById("root")).render(U.jsx(Qv, {}));
