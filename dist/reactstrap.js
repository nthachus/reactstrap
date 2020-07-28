(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-popper'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-popper', 'react-dom'], factory) :
  (global = global || self, factory(global.Reactstrap = {}, global.React, global.ReactPopper, global.ReactDOM));
}(this, (function (exports, React, reactPopper, ReactDOM) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var b = "function" === typeof Symbol && Symbol.for,
      c = b ? Symbol.for("react.element") : 60103,
      d = b ? Symbol.for("react.portal") : 60106,
      e = b ? Symbol.for("react.fragment") : 60107,
      f = b ? Symbol.for("react.strict_mode") : 60108,
      g = b ? Symbol.for("react.profiler") : 60114,
      h = b ? Symbol.for("react.provider") : 60109,
      k = b ? Symbol.for("react.context") : 60110,
      l = b ? Symbol.for("react.async_mode") : 60111,
      m = b ? Symbol.for("react.concurrent_mode") : 60111,
      n = b ? Symbol.for("react.forward_ref") : 60112,
      p = b ? Symbol.for("react.suspense") : 60113,
      q = b ? Symbol.for("react.suspense_list") : 60120,
      r = b ? Symbol.for("react.memo") : 60115,
      t = b ? Symbol.for("react.lazy") : 60116,
      v = b ? Symbol.for("react.block") : 60121,
      w = b ? Symbol.for("react.fundamental") : 60117,
      x = b ? Symbol.for("react.responder") : 60118,
      y = b ? Symbol.for("react.scope") : 60119;

  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;

      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;

            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;

                default:
                  return u;
              }

          }

        case d:
          return u;
      }
    }
  }

  function A(a) {
    return z(a) === m;
  }

  var AsyncMode = l;
  var ConcurrentMode = m;
  var ContextConsumer = k;
  var ContextProvider = h;
  var Element = c;
  var ForwardRef = n;
  var Fragment = e;
  var Lazy = t;
  var Memo = r;
  var Portal = d;
  var Profiler = g;
  var StrictMode = f;
  var Suspense = p;

  var isAsyncMode = function isAsyncMode(a) {
    return A(a) || z(a) === l;
  };

  var isConcurrentMode = A;

  var isContextConsumer = function isContextConsumer(a) {
    return z(a) === k;
  };

  var isContextProvider = function isContextProvider(a) {
    return z(a) === h;
  };

  var isElement = function isElement(a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };

  var isForwardRef = function isForwardRef(a) {
    return z(a) === n;
  };

  var isFragment = function isFragment(a) {
    return z(a) === e;
  };

  var isLazy = function isLazy(a) {
    return z(a) === t;
  };

  var isMemo = function isMemo(a) {
    return z(a) === r;
  };

  var isPortal = function isPortal(a) {
    return z(a) === d;
  };

  var isProfiler = function isProfiler(a) {
    return z(a) === g;
  };

  var isStrictMode = function isStrictMode(a) {
    return z(a) === f;
  };

  var isSuspense = function isSuspense(a) {
    return z(a) === p;
  };

  var isValidElementType = function isValidElementType(a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };

  var typeOf = z;
  var reactIs_production_min = {
    AsyncMode: AsyncMode,
    ConcurrentMode: ConcurrentMode,
    ContextConsumer: ContextConsumer,
    ContextProvider: ContextProvider,
    Element: Element,
    ForwardRef: ForwardRef,
    Fragment: Fragment,
    Lazy: Lazy,
    Memo: Memo,
    Portal: Portal,
    Profiler: Profiler,
    StrictMode: StrictMode,
    Suspense: Suspense,
    isAsyncMode: isAsyncMode,
    isConcurrentMode: isConcurrentMode,
    isContextConsumer: isContextConsumer,
    isContextProvider: isContextProvider,
    isElement: isElement,
    isForwardRef: isForwardRef,
    isFragment: isFragment,
    isLazy: isLazy,
    isMemo: isMemo,
    isPortal: isPortal,
    isProfiler: isProfiler,
    isStrictMode: isStrictMode,
    isSuspense: isSuspense,
    isValidElementType: isValidElementType,
    typeOf: typeOf
  };

  var reactIs_development = createCommonjsModule(function (module, exports) {
  });
  var reactIs_development_1 = reactIs_development.AsyncMode;
  var reactIs_development_2 = reactIs_development.ConcurrentMode;
  var reactIs_development_3 = reactIs_development.ContextConsumer;
  var reactIs_development_4 = reactIs_development.ContextProvider;
  var reactIs_development_5 = reactIs_development.Element;
  var reactIs_development_6 = reactIs_development.ForwardRef;
  var reactIs_development_7 = reactIs_development.Fragment;
  var reactIs_development_8 = reactIs_development.Lazy;
  var reactIs_development_9 = reactIs_development.Memo;
  var reactIs_development_10 = reactIs_development.Portal;
  var reactIs_development_11 = reactIs_development.Profiler;
  var reactIs_development_12 = reactIs_development.StrictMode;
  var reactIs_development_13 = reactIs_development.Suspense;
  var reactIs_development_14 = reactIs_development.isAsyncMode;
  var reactIs_development_15 = reactIs_development.isConcurrentMode;
  var reactIs_development_16 = reactIs_development.isContextConsumer;
  var reactIs_development_17 = reactIs_development.isContextProvider;
  var reactIs_development_18 = reactIs_development.isElement;
  var reactIs_development_19 = reactIs_development.isForwardRef;
  var reactIs_development_20 = reactIs_development.isFragment;
  var reactIs_development_21 = reactIs_development.isLazy;
  var reactIs_development_22 = reactIs_development.isMemo;
  var reactIs_development_23 = reactIs_development.isPortal;
  var reactIs_development_24 = reactIs_development.isProfiler;
  var reactIs_development_25 = reactIs_development.isStrictMode;
  var reactIs_development_26 = reactIs_development.isSuspense;
  var reactIs_development_27 = reactIs_development.isValidElementType;
  var reactIs_development_28 = reactIs_development.typeOf;

  var reactIs = createCommonjsModule(function (module) {

    {
      module.exports = reactIs_production_min;
    }
  });

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */

  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      } // Detect buggy property enumeration order in older V8 versions.
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118


      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

      test1[5] = 'de';

      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test2 = {};

      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }

      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });

      if (order2.join('') !== '0123456789') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });

      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);

        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  function emptyFunction() {}

  function emptyFunctionWithReset() {}

  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function factoryWithThrowingShims() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }

      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }
    shim.isRequired = shim;

    function getShim() {
      return shim;
    }
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      module.exports = factoryWithThrowingShims();
    }
  });

  var classnames = createCommonjsModule(function (module) {
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */

    /* global define */
    (function () {

      var hasOwn = {}.hasOwnProperty;

      function classNames() {
        var classes = [];

        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg) continue;
          var argType = typeof arg;

          if (argType === 'string' || argType === 'number') {
            classes.push(arg);
          } else if (Array.isArray(arg) && arg.length) {
            var inner = classNames.apply(null, arg);

            if (inner) {
              classes.push(inner);
            }
          } else if (argType === 'object') {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }

        return classes.join(' ');
      }

      if ( module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  });

  function getScrollbarWidth() {
    var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    scrollDiv.style.width = '50px';
    scrollDiv.style.height = '50px';
    scrollDiv.style.overflow = 'scroll';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }
  function setScrollbarWidth(padding) {
    document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
  }
  function isBodyOverflowing() {
    return document.body.clientWidth < window.innerWidth;
  }
  function getOriginalBodyPadding() {
    var style = window.getComputedStyle(document.body, null);
    return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
  }
  function conditionallyUpdateScrollbar() {
    var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

    var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
    var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

    if (isBodyOverflowing()) {
      setScrollbarWidth(bodyPadding + scrollbarWidth);
    }
  }
  var globalCssModule;
  function setGlobalCssModule(cssModule) {
    globalCssModule = cssModule;
  }
  function mapToCssModules(className, cssModule) {
    if (className === void 0) {
      className = '';
    }

    if (cssModule === void 0) {
      cssModule = globalCssModule;
    }

    if (!cssModule) return className;
    return className.split(' ').map(function (c) {
      return cssModule[c] || c;
    }).join(' ');
  }
  /**
   * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
   */

  function omit(obj, omitKeys) {
    var result = {};
    Object.keys(obj).forEach(function (key) {
      if (omitKeys.indexOf(key) === -1) {
        result[key] = obj[key];
      }
    });
    return result;
  }
  /**
   * Returns a filtered copy of an object with only the specified keys.
   */

  function pick(obj, keys) {
    var pickKeys = Array.isArray(keys) ? keys : [keys];
    var length = pickKeys.length;
    var key;
    var result = {};

    while (length > 0) {
      length -= 1;
      key = pickKeys[length];
      result[key] = obj[key];
    }

    return result;
  }
  var warned = {};
  function warnOnce(message) {
    if (!warned[message]) {
      /* istanbul ignore else */
      if (typeof console !== 'undefined') {
        console.error(message); // eslint-disable-line no-console
      }

      warned[message] = true;
    }
  }
  function deprecated(propType, explanation) {
    return function validate(props, propName, componentName) {
      if (props[propName] !== null && typeof props[propName] !== 'undefined') {
        warnOnce("\"" + propName + "\" property of \"" + componentName + "\" has been deprecated.\n" + explanation);
      }

      for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        rest[_key - 3] = arguments[_key];
      }

      return propType.apply(void 0, [props, propName, componentName].concat(rest));
    };
  } // Shim Element if needed (e.g. in Node environment)

  var Element$1 = typeof window === 'object' && window.Element || function () {};

  function DOMElement(props, propName, componentName) {
    if (!(props[propName] instanceof Element$1)) {
      return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
    }
  }
  var targetPropType = propTypes.oneOfType([propTypes.string, propTypes.func, DOMElement, propTypes.shape({
    current: propTypes.any
  })]);
  var tagPropType = propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.shape({
    $$typeof: propTypes.symbol,
    render: propTypes.func
  }), propTypes.arrayOf(propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.shape({
    $$typeof: propTypes.symbol,
    render: propTypes.func
  })]))]);
  /* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
  // These are all setup to match what is in the bootstrap _variables.scss
  // https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

  var TransitionTimeouts = {
    Fade: 150,
    // $transition-fade
    Collapse: 350,
    // $transition-collapse
    Modal: 300,
    // $modal-transition
    Carousel: 600 // $carousel-transition

  }; // Duplicated Transition.propType keys to ensure that Reactstrap builds
  // for distribution properly exclude these keys for nested child HTML attributes
  // since `react-transition-group` removes propTypes in production builds.

  var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
  var TransitionStatuses = {
    ENTERING: 'entering',
    ENTERED: 'entered',
    EXITING: 'exiting',
    EXITED: 'exited'
  };
  var keyCodes = {
    esc: 27,
    space: 32,
    enter: 13,
    tab: 9,
    up: 38,
    down: 40,
    home: 36,
    end: 35,
    n: 78,
    p: 80
  };
  var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  function isReactRefObj(target) {
    if (target && typeof target === 'object') {
      return 'current' in target;
    }

    return false;
  }

  function getTag(value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return Object.prototype.toString.call(value);
  }

  function toNumber(value) {
    var type = typeof value;
    var NAN = 0 / 0;

    if (type === 'number') {
      return value;
    }

    if (type === 'symbol' || type === 'object' && getTag(value) === '[object Symbol]') {
      return NAN;
    }

    if (isObject(value)) {
      var other = typeof value.valueOf === 'function' ? value.valueOf() : value;
      value = isObject(other) ? "" + other : other;
    }

    if (type !== 'string') {
      return value === 0 ? value : +value;
    }

    value = value.replace(/^\s+|\s+$/g, '');
    var isBinary = /^0b[01]+$/i.test(value);
    return isBinary || /^0o[0-7]+$/i.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : /^[-+]0x[0-9a-f]+$/i.test(value) ? NAN : +value;
  }
  function isObject(value) {
    var type = typeof value;
    return value != null && (type === 'object' || type === 'function');
  }
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }

    var tag = getTag(value);
    return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
  }
  function findDOMElements(target) {
    if (isReactRefObj(target)) {
      return target.current;
    }

    if (isFunction(target)) {
      return target();
    }

    if (typeof target === 'string' && canUseDOM) {
      var selection = document.querySelectorAll(target);

      if (!selection.length) {
        selection = document.querySelectorAll("#" + target);
      }

      if (!selection.length) {
        throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
      }

      return selection;
    }

    return target;
  }
  function isArrayOrNodeList(els) {
    if (els === null) {
      return false;
    }

    return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
  }
  function getTarget(target, allElements) {
    var els = findDOMElements(target);

    if (allElements) {
      if (isArrayOrNodeList(els)) {
        return els;
      }

      if (els === null) {
        return [];
      }

      return [els];
    } else {
      if (isArrayOrNodeList(els)) {
        return els[0];
      }

      return els;
    }
  }
  var defaultToggleEvents = ['touchstart', 'click'];
  function addMultipleEventListeners(_els, handler, _events, useCapture) {
    var els = _els;

    if (!isArrayOrNodeList(els)) {
      els = [els];
    }

    var events = _events;

    if (typeof events === 'string') {
      events = events.split(/\s+/);
    }

    if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
      throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");
    }

    Array.prototype.forEach.call(events, function (event) {
      Array.prototype.forEach.call(els, function (el) {
        el.addEventListener(event, handler, useCapture);
      });
    });
    return function removeEvents() {
      Array.prototype.forEach.call(events, function (event) {
        Array.prototype.forEach.call(els, function (el) {
          el.removeEventListener(event, handler, useCapture);
        });
      });
    };
  }
  var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];

  var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getScrollbarWidth: getScrollbarWidth,
    setScrollbarWidth: setScrollbarWidth,
    isBodyOverflowing: isBodyOverflowing,
    getOriginalBodyPadding: getOriginalBodyPadding,
    conditionallyUpdateScrollbar: conditionallyUpdateScrollbar,
    setGlobalCssModule: setGlobalCssModule,
    mapToCssModules: mapToCssModules,
    omit: omit,
    pick: pick,
    warnOnce: warnOnce,
    deprecated: deprecated,
    DOMElement: DOMElement,
    targetPropType: targetPropType,
    tagPropType: tagPropType,
    TransitionTimeouts: TransitionTimeouts,
    TransitionPropTypeKeys: TransitionPropTypeKeys,
    TransitionStatuses: TransitionStatuses,
    keyCodes: keyCodes,
    PopperPlacements: PopperPlacements,
    canUseDOM: canUseDOM,
    isReactRefObj: isReactRefObj,
    toNumber: toNumber,
    isObject: isObject,
    isFunction: isFunction,
    findDOMElements: findDOMElements,
    isArrayOrNodeList: isArrayOrNodeList,
    getTarget: getTarget,
    defaultToggleEvents: defaultToggleEvents,
    addMultipleEventListeners: addMultipleEventListeners,
    focusableElements: focusableElements
  });

  var propTypes$1 = {
    tag: tagPropType,
    fluid: propTypes.oneOfType([propTypes.bool, propTypes.string]),
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps = {
    tag: 'div'
  };

  var Container = function Container(props) {
    var className = props.className,
        cssModule = props.cssModule,
        fluid = props.fluid,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "fluid", "tag"]);

    var containerClass = 'container';

    if (fluid === true) {
      containerClass = 'container-fluid';
    } else if (fluid) {
      containerClass = "container-" + fluid;
    }

    var classes = mapToCssModules(classnames(className, containerClass), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  Container.propTypes = propTypes$1;
  Container.defaultProps = defaultProps;

  var rowColWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
  var rowColsPropType = propTypes.oneOfType([propTypes.number, propTypes.string]);
  var propTypes$2 = {
    tag: tagPropType,
    noGutters: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object,
    form: propTypes.bool,
    xs: rowColsPropType,
    sm: rowColsPropType,
    md: rowColsPropType,
    lg: rowColsPropType,
    xl: rowColsPropType
  };
  var defaultProps$1 = {
    tag: 'div',
    widths: rowColWidths
  };

  var Row = function Row(props) {
    var className = props.className,
        cssModule = props.cssModule,
        noGutters = props.noGutters,
        Tag = props.tag,
        form = props.form,
        widths = props.widths,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "noGutters", "tag", "form", "widths"]);

    var colClasses = [];
    widths.forEach(function (colWidth, i) {
      var colSize = props[colWidth];
      delete attributes[colWidth];

      if (!colSize) {
        return;
      }

      var isXs = !i;
      colClasses.push(isXs ? "row-cols-" + colSize : "row-cols-" + colWidth + "-" + colSize);
    });
    var classes = mapToCssModules(classnames(className, noGutters ? 'no-gutters' : null, form ? 'form-row' : 'row', colClasses), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  Row.propTypes = propTypes$2;
  Row.defaultProps = defaultProps$1;

  var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
  var stringOrNumberProp = propTypes.oneOfType([propTypes.number, propTypes.string]);
  var columnProps = propTypes.oneOfType([propTypes.bool, propTypes.number, propTypes.string, propTypes.shape({
    size: propTypes.oneOfType([propTypes.bool, propTypes.number, propTypes.string]),
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })]);
  var propTypes$3 = {
    tag: tagPropType,
    xs: columnProps,
    sm: columnProps,
    md: columnProps,
    lg: columnProps,
    xl: columnProps,
    className: propTypes.string,
    cssModule: propTypes.object,
    widths: propTypes.array
  };
  var defaultProps$2 = {
    tag: 'div',
    widths: colWidths
  };

  var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
    if (colSize === true || colSize === '') {
      return isXs ? 'col' : "col-" + colWidth;
    } else if (colSize === 'auto') {
      return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
    }

    return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
  };

  var Col = function Col(props) {
    var className = props.className,
        cssModule = props.cssModule,
        widths = props.widths,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "widths", "tag"]);

    var colClasses = [];
    widths.forEach(function (colWidth, i) {
      var columnProp = props[colWidth];
      delete attributes[colWidth];

      if (!columnProp && columnProp !== '') {
        return;
      }

      var isXs = !i;

      if (isObject(columnProp)) {
        var _classNames;

        var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
        var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
        colClasses.push(mapToCssModules(classnames((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames)), cssModule));
      } else {
        var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);

        colClasses.push(_colClass);
      }
    });

    if (!colClasses.length) {
      colClasses.push('col');
    }

    var classes = mapToCssModules(classnames(className, colClasses), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  Col.propTypes = propTypes$3;
  Col.defaultProps = defaultProps$2;

  var propTypes$4 = {
    light: propTypes.bool,
    dark: propTypes.bool,
    full: propTypes.bool,
    fixed: propTypes.string,
    sticky: propTypes.string,
    color: propTypes.string,
    role: propTypes.string,
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object,
    expand: propTypes.oneOfType([propTypes.bool, propTypes.string])
  };
  var defaultProps$3 = {
    tag: 'nav',
    expand: false
  };

  var getExpandClass = function getExpandClass(expand) {
    if (expand === false) {
      return false;
    } else if (expand === true || expand === 'xs') {
      return 'navbar-expand';
    }

    return "navbar-expand-" + expand;
  };

  var Navbar = function Navbar(props) {
    var _classNames;

    var expand = props.expand,
        className = props.className,
        cssModule = props.cssModule,
        light = props.light,
        dark = props.dark,
        fixed = props.fixed,
        sticky = props.sticky,
        color = props.color,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["expand", "className", "cssModule", "light", "dark", "fixed", "sticky", "color", "tag"]);

    var classes = mapToCssModules(classnames(className, 'navbar', getExpandClass(expand), (_classNames = {
      'navbar-light': light,
      'navbar-dark': dark
    }, _classNames["bg-" + color] = color, _classNames["fixed-" + fixed] = fixed, _classNames["sticky-" + sticky] = sticky, _classNames)), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  Navbar.propTypes = propTypes$4;
  Navbar.defaultProps = defaultProps$3;

  var propTypes$5 = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$4 = {
    tag: 'a'
  };

  var NavbarBrand = function NavbarBrand(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'navbar-brand'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  NavbarBrand.propTypes = propTypes$5;
  NavbarBrand.defaultProps = defaultProps$4;

  var propTypes$6 = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$5 = {
    tag: 'span'
  };

  var NavbarText = function NavbarText(props) {
    var className = props.className,
        cssModule = props.cssModule,
        active = props.active,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "active", "tag"]);

    var classes = mapToCssModules(classnames(className, 'navbar-text'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  NavbarText.propTypes = propTypes$6;
  NavbarText.defaultProps = defaultProps$5;

  var propTypes$7 = {
    tag: tagPropType,
    type: propTypes.string,
    className: propTypes.string,
    cssModule: propTypes.object,
    children: propTypes.node
  };
  var defaultProps$6 = {
    tag: 'button',
    type: 'button'
  };

  var NavbarToggler = function NavbarToggler(props) {
    var className = props.className,
        cssModule = props.cssModule,
        children = props.children,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "children", "tag"]);

    var classes = mapToCssModules(classnames(className, 'navbar-toggler'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({
      "aria-label": "Toggle navigation"
    }, attributes, {
      className: classes
    }), children || /*#__PURE__*/React__default.createElement("span", {
      className: mapToCssModules('navbar-toggler-icon', cssModule)
    }));
  };

  NavbarToggler.propTypes = propTypes$7;
  NavbarToggler.defaultProps = defaultProps$6;

  var propTypes$8 = {
    tabs: propTypes.bool,
    pills: propTypes.bool,
    vertical: propTypes.oneOfType([propTypes.bool, propTypes.string]),
    horizontal: propTypes.string,
    justified: propTypes.bool,
    fill: propTypes.bool,
    navbar: propTypes.bool,
    card: propTypes.bool,
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$7 = {
    tag: 'ul',
    vertical: false
  };

  var getVerticalClass = function getVerticalClass(vertical) {
    if (vertical === false) {
      return false;
    } else if (vertical === true || vertical === 'xs') {
      return 'flex-column';
    }

    return "flex-" + vertical + "-column";
  };

  var Nav = function Nav(props) {
    var className = props.className,
        cssModule = props.cssModule,
        tabs = props.tabs,
        pills = props.pills,
        vertical = props.vertical,
        horizontal = props.horizontal,
        justified = props.justified,
        fill = props.fill,
        navbar = props.navbar,
        card = props.card,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"]);

    var classes = mapToCssModules(classnames(className, navbar ? 'navbar-nav' : 'nav', horizontal ? "justify-content-" + horizontal : false, getVerticalClass(vertical), {
      'nav-tabs': tabs,
      'card-header-tabs': card && tabs,
      'nav-pills': pills,
      'card-header-pills': card && pills,
      'nav-justified': justified,
      'nav-fill': fill
    }), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  Nav.propTypes = propTypes$8;
  Nav.defaultProps = defaultProps$7;

  var propTypes$9 = {
    tag: tagPropType,
    active: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$8 = {
    tag: 'li'
  };

  var NavItem = function NavItem(props) {
    var className = props.className,
        cssModule = props.cssModule,
        active = props.active,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "active", "tag"]);

    var classes = mapToCssModules(classnames(className, 'nav-item', active ? 'active' : false), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  NavItem.propTypes = propTypes$9;
  NavItem.defaultProps = defaultProps$8;

  var propTypes$a = {
    tag: tagPropType,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
    disabled: propTypes.bool,
    active: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object,
    onClick: propTypes.func,
    href: propTypes.any
  };
  var defaultProps$9 = {
    tag: 'a'
  };

  var NavLink = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(NavLink, _React$Component);

    function NavLink(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = NavLink.prototype;

    _proto.onClick = function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.href === '#') {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          active = _this$props.active,
          Tag = _this$props.tag,
          innerRef = _this$props.innerRef,
          attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "active", "tag", "innerRef"]);

      var classes = mapToCssModules(classnames(className, 'nav-link', {
        disabled: attributes.disabled,
        active: active
      }), cssModule);
      return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
        ref: innerRef,
        onClick: this.onClick,
        className: classes
      }));
    };

    return NavLink;
  }(React__default.Component);

  NavLink.propTypes = propTypes$a;
  NavLink.defaultProps = defaultProps$9;

  var propTypes$b = {
    tag: tagPropType,
    listTag: tagPropType,
    className: propTypes.string,
    listClassName: propTypes.string,
    cssModule: propTypes.object,
    children: propTypes.node,
    'aria-label': propTypes.string
  };
  var defaultProps$a = {
    tag: 'nav',
    listTag: 'ol',
    'aria-label': 'breadcrumb'
  };

  var Breadcrumb = function Breadcrumb(props) {
    var className = props.className,
        listClassName = props.listClassName,
        cssModule = props.cssModule,
        children = props.children,
        Tag = props.tag,
        ListTag = props.listTag,
        label = props['aria-label'],
        attributes = _objectWithoutPropertiesLoose(props, ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"]);

    var classes = mapToCssModules(classnames(className), cssModule);
    var listClasses = mapToCssModules(classnames('breadcrumb', listClassName), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes,
      "aria-label": label
    }), /*#__PURE__*/React__default.createElement(ListTag, {
      className: listClasses
    }, children));
  };

  Breadcrumb.propTypes = propTypes$b;
  Breadcrumb.defaultProps = defaultProps$a;

  var propTypes$c = {
    tag: tagPropType,
    active: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$b = {
    tag: 'li'
  };

  var BreadcrumbItem = function BreadcrumbItem(props) {
    var className = props.className,
        cssModule = props.cssModule,
        active = props.active,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "active", "tag"]);

    var classes = mapToCssModules(classnames(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes,
      "aria-current": active ? 'page' : undefined
    }));
  };

  BreadcrumbItem.propTypes = propTypes$c;
  BreadcrumbItem.defaultProps = defaultProps$b;

  var propTypes$d = {
    active: propTypes.bool,
    'aria-label': propTypes.string,
    block: propTypes.bool,
    color: propTypes.string,
    disabled: propTypes.bool,
    outline: propTypes.bool,
    tag: tagPropType,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
    onClick: propTypes.func,
    size: propTypes.string,
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object,
    close: propTypes.bool
  };
  var defaultProps$c = {
    color: 'secondary',
    tag: 'button'
  };

  var Button = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(Button, _React$Component);

    function Button(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = Button.prototype;

    _proto.onClick = function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        return this.props.onClick(e);
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          active = _this$props.active,
          ariaLabel = _this$props['aria-label'],
          block = _this$props.block,
          className = _this$props.className,
          close = _this$props.close,
          cssModule = _this$props.cssModule,
          color = _this$props.color,
          outline = _this$props.outline,
          size = _this$props.size,
          Tag = _this$props.tag,
          innerRef = _this$props.innerRef,
          attributes = _objectWithoutPropertiesLoose(_this$props, ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"]);

      if (close && typeof attributes.children === 'undefined') {
        attributes.children = /*#__PURE__*/React__default.createElement("span", {
          "aria-hidden": true
        }, "\xD7");
      }

      var btnOutlineColor = "btn" + (outline ? '-outline' : '') + "-" + color;
      var classes = mapToCssModules(classnames(className, {
        close: close
      }, close || 'btn', close || btnOutlineColor, size ? "btn-" + size : false, block ? 'btn-block' : false, {
        active: active,
        disabled: this.props.disabled
      }), cssModule);

      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }

      var defaultAriaLabel = close ? 'Close' : null;
      return /*#__PURE__*/React__default.createElement(Tag, _extends({
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined
      }, attributes, {
        className: classes,
        ref: innerRef,
        onClick: this.onClick,
        "aria-label": ariaLabel || defaultAriaLabel
      }));
    };

    return Button;
  }(React__default.Component);

  Button.propTypes = propTypes$d;
  Button.defaultProps = defaultProps$c;

  var propTypes$e = {
    onClick: propTypes.func,
    onBlur: propTypes.func,
    onFocus: propTypes.func,
    defaultValue: propTypes.bool
  };
  var defaultProps$d = {
    defaultValue: false
  };

  var ButtonToggle = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(ButtonToggle, _React$Component);

    function ButtonToggle(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.state = {
        toggled: props.defaultValue,
        focus: false
      };
      _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
      _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = ButtonToggle.prototype;

    _proto.onBlur = function onBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }

      this.setState({
        focus: false
      });
    };

    _proto.onFocus = function onFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }

      this.setState({
        focus: true
      });
    };

    _proto.onClick = function onClick(e) {
      if (this.props.onClick) {
        this.props.onClick(e);
      }

      this.setState(function (_ref) {
        var toggled = _ref.toggled;
        return {
          toggled: !toggled
        };
      });
    };

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          attributes = _objectWithoutPropertiesLoose(_this$props, ["className"]);

      var classes = mapToCssModules(classnames(className, {
        focus: this.state.focus
      }), this.props.cssModule);
      return /*#__PURE__*/React__default.createElement(Button, _extends({
        active: this.state.toggled,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        onClick: this.onClick,
        className: classes
      }, attributes));
    };

    return ButtonToggle;
  }(React__default.Component);

  ButtonToggle.propTypes = propTypes$e;
  ButtonToggle.defaultProps = defaultProps$d;

  /**
   * DropdownContext
   * {
   *  toggle: PropTypes.func.isRequired,
   *  isOpen: PropTypes.bool.isRequired,
   *  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
   *  inNavbar: PropTypes.bool.isRequired,
   *  disabled: PropTypes.bool
   * }
   */

  var DropdownContext = /*#__PURE__*/React__default.createContext({});

  var propTypes$f = {
    a11y: propTypes.bool,
    disabled: propTypes.bool,
    direction: propTypes.oneOf(['up', 'down', 'left', 'right']),
    group: propTypes.bool,
    isOpen: propTypes.bool,
    nav: propTypes.bool,
    active: propTypes.bool,
    addonType: propTypes.oneOfType([propTypes.bool, propTypes.oneOf(['prepend', 'append'])]),
    size: propTypes.string,
    tag: tagPropType,
    toggle: propTypes.func,
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object,
    inNavbar: propTypes.bool,
    setActiveFromChild: propTypes.bool
  };
  var defaultProps$e = {
    a11y: true,
    isOpen: false,
    direction: 'down',
    nav: false,
    active: false,
    addonType: false,
    inNavbar: false,
    setActiveFromChild: false
  };
  var preventDefaultKeys = [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down, keyCodes.end, keyCodes.home];

  var Dropdown = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(Dropdown, _React$Component);

    function Dropdown(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.addEvents = _this.addEvents.bind(_assertThisInitialized(_this));
      _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
      _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
      _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_this));
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      _this.containerRef = /*#__PURE__*/React__default.createRef();
      return _this;
    }

    var _proto = Dropdown.prototype;

    _proto.getContextValue = function getContextValue() {
      return {
        toggle: this.toggle,
        isOpen: this.props.isOpen,
        direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
        inNavbar: this.props.inNavbar,
        disabled: this.props.disabled
      };
    };

    _proto.componentDidMount = function componentDidMount() {
      this.handleProps();
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.removeEvents();
    };

    _proto.getContainer = function getContainer() {
      return this.containerRef.current;
    };

    _proto.getMenuCtrl = function getMenuCtrl() {
      if (this._$menuCtrl) return this._$menuCtrl;
      this._$menuCtrl = this.getContainer().querySelector('[aria-expanded]');
      return this._$menuCtrl;
    };

    _proto.getMenuItems = function getMenuItems() {
      return [].slice.call(this.getContainer().querySelectorAll('[role="menuitem"]'));
    };

    _proto.addEvents = function addEvents() {
      var _this2 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    };

    _proto.removeEvents = function removeEvents() {
      var _this3 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    };

    _proto.handleDocumentClick = function handleDocumentClick(e) {
      if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
      var container = this.getContainer();

      if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
        return;
      }

      this.toggle(e);
    };

    _proto.handleKeyDown = function handleKeyDown(e) {
      var _this4 = this;

      if (/input|textarea/i.test(e.target.tagName) || keyCodes.tab === e.which && (e.target.getAttribute('role') !== 'menuitem' || !this.props.a11y)) {
        return;
      }

      if (preventDefaultKeys.indexOf(e.which) !== -1 || e.which >= 48 && e.which <= 90) {
        e.preventDefault();
      }

      if (this.props.disabled) return;

      if (this.getMenuCtrl() === e.target) {
        if (!this.props.isOpen && [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
          this.toggle(e);
          setTimeout(function () {
            return _this4.getMenuItems()[0].focus();
          });
        } else if (this.props.isOpen && e.which === keyCodes.esc) {
          this.toggle(e);
        }
      }

      if (this.props.isOpen && e.target.getAttribute('role') === 'menuitem') {
        if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
          this.toggle(e);
          this.getMenuCtrl().focus();
        } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
          e.target.click();
          this.getMenuCtrl().focus();
        } else if ([keyCodes.down, keyCodes.up].indexOf(e.which) > -1 || [keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey) {
          var $menuitems = this.getMenuItems();
          var index = $menuitems.indexOf(e.target);

          if (keyCodes.up === e.which || keyCodes.p === e.which && e.ctrlKey) {
            index = index !== 0 ? index - 1 : $menuitems.length - 1;
          } else if (keyCodes.down === e.which || keyCodes.n === e.which && e.ctrlKey) {
            index = index === $menuitems.length - 1 ? 0 : index + 1;
          }

          $menuitems[index].focus();
        } else if (keyCodes.end === e.which) {
          var _$menuitems = this.getMenuItems();

          _$menuitems[_$menuitems.length - 1].focus();
        } else if (keyCodes.home === e.which) {
          var _$menuitems2 = this.getMenuItems();

          _$menuitems2[0].focus();
        } else if (e.which >= 48 && e.which <= 90) {
          var _$menuitems3 = this.getMenuItems();

          var charPressed = String.fromCharCode(e.which).toLowerCase();

          for (var i = 0; i < _$menuitems3.length; i += 1) {
            var firstLetter = _$menuitems3[i].textContent && _$menuitems3[i].textContent[0].toLowerCase();

            if (firstLetter === charPressed) {
              _$menuitems3[i].focus();

              break;
            }
          }
        }
      }
    };

    _proto.handleProps = function handleProps() {
      if (this.props.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    };

    _proto.toggle = function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    };

    _proto.render = function render() {
      var _classNames, _ref;

      var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'a11y']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          direction = _omit.direction,
          isOpen = _omit.isOpen,
          group = _omit.group,
          size = _omit.size,
          nav = _omit.nav,
          setActiveFromChild = _omit.setActiveFromChild,
          active = _omit.active,
          addonType = _omit.addonType,
          tag = _omit.tag,
          attrs = _objectWithoutPropertiesLoose(_omit, ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "addonType", "tag"]);

      var Tag = tag || (nav ? 'li' : 'div');
      var subItemIsActive = false;

      if (setActiveFromChild) {
        React__default.Children.map(this.props.children[1].props.children, function (dropdownItem) {
          if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
        });
      }

      var classes = mapToCssModules(classnames(className, direction !== 'down' && "drop" + direction, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {}, _classNames["input-group-" + addonType] = addonType, _classNames['btn-group'] = group, _classNames["btn-group-" + size] = !!size, _classNames.dropdown = !group && !addonType, _classNames.show = isOpen, _classNames['nav-item'] = nav, _classNames)), cssModule);
      return /*#__PURE__*/React__default.createElement(DropdownContext.Provider, {
        value: this.getContextValue()
      }, /*#__PURE__*/React__default.createElement(reactPopper.Manager, null, /*#__PURE__*/React__default.createElement(Tag, _extends({}, attrs, (_ref = {}, _ref[typeof Tag === 'string' ? 'ref' : 'innerRef'] = this.containerRef, _ref), {
        onKeyDown: this.handleKeyDown,
        className: classes
      }))));
    };

    return Dropdown;
  }(React__default.Component);

  Dropdown.propTypes = propTypes$f;
  Dropdown.defaultProps = defaultProps$e;

  var propTypes$g = {
    children: propTypes.node
  };

  var ButtonDropdown = function ButtonDropdown(props) {
    return /*#__PURE__*/React__default.createElement(Dropdown, _extends({
      group: true
    }, props));
  };

  ButtonDropdown.propTypes = propTypes$g;

  var propTypes$h = {
    tag: tagPropType,
    'aria-label': propTypes.string,
    className: propTypes.string,
    cssModule: propTypes.object,
    role: propTypes.string,
    size: propTypes.string,
    vertical: propTypes.bool
  };
  var defaultProps$f = {
    tag: 'div',
    role: 'group'
  };

  var ButtonGroup = function ButtonGroup(props) {
    var className = props.className,
        cssModule = props.cssModule,
        size = props.size,
        vertical = props.vertical,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "size", "vertical", "tag"]);

    var classes = mapToCssModules(classnames(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ButtonGroup.propTypes = propTypes$h;
  ButtonGroup.defaultProps = defaultProps$f;

  var propTypes$i = {
    tag: tagPropType,
    'aria-label': propTypes.string,
    className: propTypes.string,
    cssModule: propTypes.object,
    role: propTypes.string
  };
  var defaultProps$g = {
    tag: 'div',
    role: 'toolbar'
  };

  var ButtonToolbar = function ButtonToolbar(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'btn-toolbar'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ButtonToolbar.propTypes = propTypes$i;
  ButtonToolbar.defaultProps = defaultProps$g;

  var propTypes$j = {
    children: propTypes.node,
    active: propTypes.bool,
    disabled: propTypes.bool,
    divider: propTypes.bool,
    tag: tagPropType,
    header: propTypes.bool,
    onClick: propTypes.func,
    className: propTypes.string,
    cssModule: propTypes.object,
    toggle: propTypes.bool
  };
  var defaultProps$h = {
    tag: 'button',
    toggle: true
  };

  var DropdownItem = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(DropdownItem, _React$Component);

    function DropdownItem(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
      _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = DropdownItem.prototype;

    _proto.onClick = function onClick(e) {
      if (this.props.disabled || this.props.header || this.props.divider) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      if (this.props.toggle) {
        this.context.toggle(e);
      }
    };

    _proto.getTabIndex = function getTabIndex() {
      if (this.props.disabled || this.props.header || this.props.divider) {
        return '-1';
      }

      return '0';
    };

    _proto.render = function render() {
      var tabIndex = this.getTabIndex();
      var role = tabIndex > -1 ? 'menuitem' : undefined;

      var _omit = omit(this.props, ['toggle']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          divider = _omit.divider,
          Tag = _omit.tag,
          header = _omit.header,
          active = _omit.active,
          props = _objectWithoutPropertiesLoose(_omit, ["className", "cssModule", "divider", "tag", "header", "active"]);

      var classes = mapToCssModules(classnames(className, {
        disabled: props.disabled,
        'dropdown-item': !divider && !header,
        active: active,
        'dropdown-header': header,
        'dropdown-divider': divider
      }), cssModule);

      if (Tag === 'button') {
        if (header) {
          Tag = 'h6';
        } else if (divider) {
          Tag = 'div';
        } else if (props.href) {
          Tag = 'a';
        }
      }

      return /*#__PURE__*/React__default.createElement(Tag, _extends({
        type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
      }, props, {
        tabIndex: tabIndex,
        role: role,
        className: classes,
        onClick: this.onClick
      }));
    };

    return DropdownItem;
  }(React__default.Component);

  DropdownItem.propTypes = propTypes$j;
  DropdownItem.defaultProps = defaultProps$h;
  DropdownItem.contextType = DropdownContext;

  var propTypes$k = {
    tag: tagPropType,
    children: propTypes.node.isRequired,
    right: propTypes.bool,
    flip: propTypes.bool,
    modifiers: propTypes.object,
    className: propTypes.string,
    cssModule: propTypes.object,
    persist: propTypes.bool,
    positionFixed: propTypes.bool
  };
  var defaultProps$i = {
    tag: 'div',
    flip: true
  };
  var noFlipModifier = {
    flip: {
      enabled: false
    }
  };
  var directionPositionMap = {
    up: 'top',
    left: 'left',
    right: 'right',
    down: 'bottom'
  };

  var DropdownMenu = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(DropdownMenu, _React$Component);

    function DropdownMenu() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = DropdownMenu.prototype;

    _proto.render = function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          right = _this$props.right,
          tag = _this$props.tag,
          flip = _this$props.flip,
          modifiers = _this$props.modifiers,
          persist = _this$props.persist,
          positionFixed = _this$props.positionFixed,
          attrs = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "right", "tag", "flip", "modifiers", "persist", "positionFixed"]);

      var classes = mapToCssModules(classnames(className, 'dropdown-menu', {
        'dropdown-menu-right': right,
        show: this.context.isOpen
      }), cssModule);
      var Tag = tag;

      if (persist || this.context.isOpen && !this.context.inNavbar) {
        var position1 = directionPositionMap[this.context.direction] || 'bottom';
        var position2 = right ? 'end' : 'start';
        var poperPlacement = position1 + "-" + position2;
        var poperModifiers = !flip ? _extends({}, modifiers, noFlipModifier) : modifiers;
        var popperPositionFixed = !!positionFixed;
        return /*#__PURE__*/React__default.createElement(reactPopper.Popper, {
          placement: poperPlacement,
          modifiers: poperModifiers,
          positionFixed: popperPositionFixed
        }, function (_ref) {
          var ref = _ref.ref,
              style = _ref.style,
              placement = _ref.placement;
          return /*#__PURE__*/React__default.createElement(Tag, _extends({
            tabIndex: "-1",
            role: "menu",
            ref: ref,
            style: style
          }, attrs, {
            "aria-hidden": !_this.context.isOpen,
            className: classes,
            "x-placement": placement
          }));
        });
      }

      return /*#__PURE__*/React__default.createElement(Tag, _extends({
        tabIndex: "-1",
        role: "menu"
      }, attrs, {
        "aria-hidden": !this.context.isOpen,
        className: classes,
        "x-placement": attrs.placement
      }));
    };

    return DropdownMenu;
  }(React__default.Component);
  DropdownMenu.propTypes = propTypes$k;
  DropdownMenu.defaultProps = defaultProps$i;
  DropdownMenu.contextType = DropdownContext;

  var propTypes$l = {
    caret: propTypes.bool,
    color: propTypes.string,
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object,
    disabled: propTypes.bool,
    onClick: propTypes.func,
    'aria-haspopup': propTypes.bool,
    split: propTypes.bool,
    tag: tagPropType,
    nav: propTypes.bool
  };
  var defaultProps$j = {
    'aria-haspopup': true,
    color: 'secondary'
  };

  var DropdownToggle = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(DropdownToggle, _React$Component);

    function DropdownToggle(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = DropdownToggle.prototype;

    _proto.onClick = function onClick(e) {
      if (this.props.disabled || this.context.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.nav && !this.props.tag) {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      this.context.toggle(e);
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          color = _this$props.color,
          cssModule = _this$props.cssModule,
          caret = _this$props.caret,
          split = _this$props.split,
          nav = _this$props.nav,
          tag = _this$props.tag,
          innerRef = _this$props.innerRef,
          props = _objectWithoutPropertiesLoose(_this$props, ["className", "color", "cssModule", "caret", "split", "nav", "tag", "innerRef"]);

      var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
      var classes = mapToCssModules(classnames(className, {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        'nav-link': nav
      }), cssModule);
      var children = typeof props.children !== 'undefined' ? props.children : /*#__PURE__*/React__default.createElement("span", {
        className: "sr-only"
      }, ariaLabel);
      var Tag;

      if (nav && !tag) {
        Tag = 'a';
        props.href = '#';
      } else if (!tag) {
        Tag = Button;
        props.color = color;
        props.cssModule = cssModule;
      } else {
        Tag = tag;
      }

      if (this.context.inNavbar) {
        return /*#__PURE__*/React__default.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: this.onClick,
          "aria-expanded": this.context.isOpen,
          children: children
        }));
      }

      return /*#__PURE__*/React__default.createElement(reactPopper.Reference, {
        innerRef: innerRef
      }, function (_ref) {
        var _ref2;

        var ref = _ref.ref;
        return /*#__PURE__*/React__default.createElement(Tag, _extends({}, props, (_ref2 = {}, _ref2[typeof Tag === 'string' ? 'ref' : 'innerRef'] = ref, _ref2), {
          className: classes,
          onClick: _this2.onClick,
          "aria-expanded": _this2.context.isOpen,
          children: children
        }));
      });
    };

    return DropdownToggle;
  }(React__default.Component);

  DropdownToggle.propTypes = propTypes$l;
  DropdownToggle.defaultProps = defaultProps$j;
  DropdownToggle.contextType = DropdownContext;

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$1.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
  }

  function addClass(element, className) {
    if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
  }

  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
  }

  function removeClass(element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else if (typeof element.className === 'string') {
      element.className = replaceClassName(element.className, className);
    } else {
      element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
    }
  }

  var config = {
    disabled: false
  };

  var TransitionGroupContext = /*#__PURE__*/React__default.createContext(null);

  var UNMOUNTED = 'unmounted';
  var EXITED = 'exited';
  var ENTERING = 'entering';
  var ENTERED = 'entered';
  var EXITING = 'exiting';
  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * ---
   *
   * **Note**: `Transition` is a platform-agnostic base component. If you're using
   * transitions in CSS, you'll probably want to use
   * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
   * instead. It inherits all the features of `Transition`, but contains
   * additional features necessary to play nice with CSS transitions (hence the
   * name of the component).
   *
   * ---
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the
   * components. It's up to you to give meaning and effect to those states. For
   * example we can add styles to a component when it enters or exits:
   *
   * ```jsx
   * import { Transition } from 'react-transition-group';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 1 },
   *   entered:  { opacity: 1 },
   *   exiting:  { opacity: 0 },
   *   exited:  { opacity: 0 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {state => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component
   * begins the "Enter" stage. During this stage, the component will shift from
   * its current transition state, to `'entering'` for the duration of the
   * transition and then to the `'entered'` stage once it's complete. Let's take
   * the following example (we'll use the
   * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <Transition in={inProp} timeout={500}>
   *         {state => (
   *           // ...
   *         )}
   *       </Transition>
   *       <button onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state
   * and stay there for 500ms (the value of `timeout`) before it finally switches
   * to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from
   * `'exiting'` to `'exited'`.
   */

  var Transition = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose$1(Transition, _React$Component);

    function Transition(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }

    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;

      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }

      return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    //   let nextStatus = null
    //   if (prevProps !== this.props) {
    //     const { status } = this.state
    //     if (this.props.in) {
    //       if (status !== ENTERING && status !== ENTERED) {
    //         nextStatus = ENTERING
    //       }
    //     } else {
    //       if (status === ENTERING || status === ENTERED) {
    //         nextStatus = EXITING
    //       }
    //     }
    //   }
    //   return { nextStatus }
    // }
    ;

    var _proto = Transition.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;

      if (prevProps !== this.props) {
        var status = this.state.status;

        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }

      this.updateStatus(false, nextStatus);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter; // TODO: remove fallback for next major

        appear = timeout.appear !== undefined ? timeout.appear : enter;
      }

      return {
        exit: exit,
        enter: enter,
        appear: appear
      };
    };

    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }

      if (nextStatus !== null) {
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();

        if (nextStatus === ENTERING) {
          this.performEnter(mounting);
        } else {
          this.performExit();
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };

    _proto.performEnter = function performEnter(mounting) {
      var _this2 = this;

      var enter = this.props.enter;
      var appearing = this.context ? this.context.isMounting : mounting;

      var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
          maybeNode = _ref2[0],
          maybeAppearing = _ref2[1];

      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set

      if (!mounting && !enter || config.disabled) {
        this.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode);
        });
        return;
      }

      this.props.onEnter(maybeNode, maybeAppearing);
      this.safeSetState({
        status: ENTERING
      }, function () {
        _this2.props.onEntering(maybeNode, maybeAppearing);

        _this2.onTransitionEnd(enterTimeout, function () {
          _this2.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(maybeNode, maybeAppearing);
          });
        });
      });
    };

    _proto.performExit = function performExit() {
      var _this3 = this;

      var exit = this.props.exit;
      var timeouts = this.getTimeouts();
      var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

      if (!exit || config.disabled) {
        this.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
        return;
      }

      this.props.onExit(maybeNode);
      this.safeSetState({
        status: EXITING
      }, function () {
        _this3.props.onExiting(maybeNode);

        _this3.onTransitionEnd(timeouts.exit, function () {
          _this3.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(maybeNode);
          });
        });
      });
    };

    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    _proto.safeSetState = function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };

    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
      this.setNextCallback(handler);
      var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }

      if (this.props.addEndListener) {
        var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
            maybeNode = _ref3[0],
            maybeNextCallback = _ref3[1];

        this.props.addEndListener(maybeNode, maybeNextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    };

    _proto.render = function render() {
      var status = this.state.status;

      if (status === UNMOUNTED) {
        return null;
      }

      var _this$props = this.props,
          children = _this$props.children,
          _in = _this$props.in,
          _mountOnEnter = _this$props.mountOnEnter,
          _unmountOnExit = _this$props.unmountOnExit,
          _appear = _this$props.appear,
          _enter = _this$props.enter,
          _exit = _this$props.exit,
          _timeout = _this$props.timeout,
          _addEndListener = _this$props.addEndListener,
          _onEnter = _this$props.onEnter,
          _onEntering = _this$props.onEntering,
          _onEntered = _this$props.onEntered,
          _onExit = _this$props.onExit,
          _onExiting = _this$props.onExiting,
          _onExited = _this$props.onExited,
          _nodeRef = _this$props.nodeRef,
          childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

      return (
        /*#__PURE__*/
        // allows for nested Transitions
        React__default.createElement(TransitionGroupContext.Provider, {
          value: null
        }, typeof children === 'function' ? children(status, childProps) : /*#__PURE__*/React__default.cloneElement(React__default.Children.only(children), childProps))
      );
    };

    return Transition;
  }(React__default.Component);

  Transition.contextType = TransitionGroupContext;
  Transition.propTypes =  {}; // Name the function so it is clearer in the documentation

  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
  };
  Transition.UNMOUNTED = UNMOUNTED;
  Transition.EXITED = EXITED;
  Transition.ENTERING = ENTERING;
  Transition.ENTERED = ENTERED;
  Transition.EXITING = EXITING;

  var _addClass = function addClass$1(node, classes) {
    return node && classes && classes.split(' ').forEach(function (c) {
      return addClass(node, c);
    });
  };

  var removeClass$1 = function removeClass$1(node, classes) {
    return node && classes && classes.split(' ').forEach(function (c) {
      return removeClass(node, c);
    });
  };
  /**
   * A transition component inspired by the excellent
   * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
   * use it if you're using CSS transitions or animations. It's built upon the
   * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
   * component, so it inherits all of its props.
   *
   * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
   * and `exit` states of the transition. The first class is applied and then a
   * second `*-active` class in order to activate the CSS transition. After the
   * transition, matching `*-done` class names are applied to persist the
   * transition state.
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
   *         <div>
   *           {"I'll receive my-node-* classes"}
   *         </div>
   *       </CSSTransition>
   *       <button type="button" onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the `in` prop is set to `true`, the child component will first receive
   * the class `example-enter`, then the `example-enter-active` will be added in
   * the next tick. `CSSTransition` [forces a
   * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
   * between before adding the `example-enter-active`. This is an important trick
   * because it allows us to transition between `example-enter` and
   * `example-enter-active` even though they were added immediately one after
   * another. Most notably, this is what makes it possible for us to animate
   * _appearance_.
   *
   * ```css
   * .my-node-enter {
   *   opacity: 0;
   * }
   * .my-node-enter-active {
   *   opacity: 1;
   *   transition: opacity 200ms;
   * }
   * .my-node-exit {
   *   opacity: 1;
   * }
   * .my-node-exit-active {
   *   opacity: 0;
   *   transition: opacity 200ms;
   * }
   * ```
   *
   * `*-active` classes represent which styles you want to animate **to**, so it's
   * important to add `transition` declaration only to them, otherwise transitions
   * might not behave as intended! This might not be obvious when the transitions
   * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
   * the example above (minus `transition`), but it becomes apparent in more
   * complex transitions.
   *
   * **Note**: If you're using the
   * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
   * prop, make sure to define styles for `.appear-*` classes as well.
   */


  var CSSTransition = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose$1(CSSTransition, _React$Component);

    function CSSTransition() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.appliedClasses = {
        appear: {},
        enter: {},
        exit: {}
      };

      _this.onEnter = function (maybeNode, maybeAppearing) {
        var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
            node = _this$resolveArgument[0],
            appearing = _this$resolveArgument[1];

        _this.removeClasses(node, 'exit');

        _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

        if (_this.props.onEnter) {
          _this.props.onEnter(maybeNode, maybeAppearing);
        }
      };

      _this.onEntering = function (maybeNode, maybeAppearing) {
        var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
            node = _this$resolveArgument2[0],
            appearing = _this$resolveArgument2[1];

        var type = appearing ? 'appear' : 'enter';

        _this.addClass(node, type, 'active');

        if (_this.props.onEntering) {
          _this.props.onEntering(maybeNode, maybeAppearing);
        }
      };

      _this.onEntered = function (maybeNode, maybeAppearing) {
        var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
            node = _this$resolveArgument3[0],
            appearing = _this$resolveArgument3[1];

        var type = appearing ? 'appear' : 'enter';

        _this.removeClasses(node, type);

        _this.addClass(node, type, 'done');

        if (_this.props.onEntered) {
          _this.props.onEntered(maybeNode, maybeAppearing);
        }
      };

      _this.onExit = function (maybeNode) {
        var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
            node = _this$resolveArgument4[0];

        _this.removeClasses(node, 'appear');

        _this.removeClasses(node, 'enter');

        _this.addClass(node, 'exit', 'base');

        if (_this.props.onExit) {
          _this.props.onExit(maybeNode);
        }
      };

      _this.onExiting = function (maybeNode) {
        var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
            node = _this$resolveArgument5[0];

        _this.addClass(node, 'exit', 'active');

        if (_this.props.onExiting) {
          _this.props.onExiting(maybeNode);
        }
      };

      _this.onExited = function (maybeNode) {
        var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
            node = _this$resolveArgument6[0];

        _this.removeClasses(node, 'exit');

        _this.addClass(node, 'exit', 'done');

        if (_this.props.onExited) {
          _this.props.onExited(maybeNode);
        }
      };

      _this.resolveArguments = function (maybeNode, maybeAppearing) {
        return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
        : [maybeNode, maybeAppearing];
      };

      _this.getClassNames = function (type) {
        var classNames = _this.props.classNames;
        var isStringClassNames = typeof classNames === 'string';
        var prefix = isStringClassNames && classNames ? classNames + "-" : '';
        var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
        var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
        var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
        return {
          baseClassName: baseClassName,
          activeClassName: activeClassName,
          doneClassName: doneClassName
        };
      };

      return _this;
    }

    var _proto = CSSTransition.prototype;

    _proto.addClass = function addClass(node, type, phase) {
      var className = this.getClassNames(type)[phase + "ClassName"];

      var _this$getClassNames = this.getClassNames('enter'),
          doneClassName = _this$getClassNames.doneClassName;

      if (type === 'appear' && phase === 'done' && doneClassName) {
        className += " " + doneClassName;
      } // This is for to force a repaint,
      // which is necessary in order to transition styles when adding a class name.


      if (phase === 'active') {
        /* eslint-disable no-unused-expressions */
        node && node.scrollTop;
      }

      if (className) {
        this.appliedClasses[type][phase] = className;

        _addClass(node, className);
      }
    };

    _proto.removeClasses = function removeClasses(node, type) {
      var _this$appliedClasses$ = this.appliedClasses[type],
          baseClassName = _this$appliedClasses$.base,
          activeClassName = _this$appliedClasses$.active,
          doneClassName = _this$appliedClasses$.done;
      this.appliedClasses[type] = {};

      if (baseClassName) {
        removeClass$1(node, baseClassName);
      }

      if (activeClassName) {
        removeClass$1(node, activeClassName);
      }

      if (doneClassName) {
        removeClass$1(node, doneClassName);
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          _ = _this$props.classNames,
          props = _objectWithoutPropertiesLoose$1(_this$props, ["classNames"]);

      return /*#__PURE__*/React__default.createElement(Transition, _extends$1({}, props, {
        onEnter: this.onEnter,
        onEntered: this.onEntered,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }));
    };

    return CSSTransition;
  }(React__default.Component);

  CSSTransition.defaultProps = {
    classNames: ''
  };
  CSSTransition.propTypes =  {};

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */

  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && /*#__PURE__*/React.isValidElement(child) ? mapFn(child) : child;
    };

    var result = Object.create(null);
    if (children) React.Children.map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
    return result;
  }
  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */

  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list


    var nextKeysPending = Object.create(null);
    var pendingKeys = [];

    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};

    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }

      childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`


    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }

  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }

  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function (child) {
      return /*#__PURE__*/React.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, 'appear', props),
        enter: getProp(child, 'enter', props),
        exit: getProp(child, 'exit', props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function (key) {
      var child = children[key];
      if (! /*#__PURE__*/React.isValidElement(child)) return;
      var hasPrev = (key in prevChildMapping);
      var hasNext = (key in nextChildMapping);
      var prevChild = prevChildMapping[key];
      var isLeaving = /*#__PURE__*/React.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = /*#__PURE__*/React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        // item is old (exiting)
        // console.log('leaving', key)
        children[key] = /*#__PURE__*/React.cloneElement(child, {
          in: false
        });
      } else if (hasNext && hasPrev && /*#__PURE__*/React.isValidElement(prevChild)) {
        // item hasn't changed transition states
        // copy over the last transition props;
        // console.log('unchanged', key)
        children[key] = /*#__PURE__*/React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      }
    });
    return children;
  }

  var values = Object.values || function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };

  var defaultProps$k = {
    component: 'div',
    childFactory: function childFactory(child) {
      return child;
    }
  };
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

  var TransitionGroup = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose$1(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;

      var handleExited = _this.handleExited.bind(_assertThisInitialized$1(_this)); // Initial children should all be entering, dependent on appear


      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: handleExited,
        firstRender: true
      };
      return _this;
    }

    var _proto = TransitionGroup.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };

    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children,
          handleExited = _ref.handleExited,
          firstRender = _ref.firstRender;
      return {
        children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    } // node is `undefined` when user provided `nodeRef` prop
    ;

    _proto.handleExited = function handleExited(child, node) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping) return;

      if (child.props.onExited) {
        child.props.onExited(node);
      }

      if (this.mounted) {
        this.setState(function (state) {
          var children = _extends$1({}, state.children);

          delete children[child.key];
          return {
            children: children
          };
        });
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          Component = _this$props.component,
          childFactory = _this$props.childFactory,
          props = _objectWithoutPropertiesLoose$1(_this$props, ["component", "childFactory"]);

      var contextValue = this.state.contextValue;
      var children = values(this.state.children).map(childFactory);
      delete props.appear;
      delete props.enter;
      delete props.exit;

      if (Component === null) {
        return /*#__PURE__*/React__default.createElement(TransitionGroupContext.Provider, {
          value: contextValue
        }, children);
      }

      return /*#__PURE__*/React__default.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, /*#__PURE__*/React__default.createElement(Component, props, children));
    };

    return TransitionGroup;
  }(React__default.Component);

  TransitionGroup.propTypes =  {};
  TransitionGroup.defaultProps = defaultProps$k;

  /**
   * The `<ReplaceTransition>` component is a specialized `Transition` component
   * that animates between two children.
   *
   * ```jsx
   * <ReplaceTransition in>
   *   <Fade><div>I appear first</div></Fade>
   *   <Fade><div>I replace the above</div></Fade>
   * </ReplaceTransition>
   * ```
   */

  var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose$1(ReplaceTransition, _React$Component);

    function ReplaceTransition() {
      var _this;

      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

      _this.handleEnter = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return _this.handleLifecycle('onEnter', 0, args);
      };

      _this.handleEntering = function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return _this.handleLifecycle('onEntering', 0, args);
      };

      _this.handleEntered = function () {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return _this.handleLifecycle('onEntered', 0, args);
      };

      _this.handleExit = function () {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        return _this.handleLifecycle('onExit', 1, args);
      };

      _this.handleExiting = function () {
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }

        return _this.handleLifecycle('onExiting', 1, args);
      };

      _this.handleExited = function () {
        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }

        return _this.handleLifecycle('onExited', 1, args);
      };

      return _this;
    }

    var _proto = ReplaceTransition.prototype;

    _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
      var _child$props;

      var children = this.props.children;
      var child = React__default.Children.toArray(children)[idx];
      if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

      if (this.props[handler]) {
        var maybeNode = child.props.nodeRef ? undefined : ReactDOM.findDOMNode(this);
        this.props[handler](maybeNode);
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          inProp = _this$props.in,
          props = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in"]);

      var _React$Children$toArr = React__default.Children.toArray(children),
          first = _React$Children$toArr[0],
          second = _React$Children$toArr[1];

      delete props.onEnter;
      delete props.onEntering;
      delete props.onEntered;
      delete props.onExit;
      delete props.onExiting;
      delete props.onExited;
      return /*#__PURE__*/React__default.createElement(TransitionGroup, props, inProp ? /*#__PURE__*/React__default.cloneElement(first, {
        key: 'first',
        onEnter: this.handleEnter,
        onEntering: this.handleEntering,
        onEntered: this.handleEntered
      }) : /*#__PURE__*/React__default.cloneElement(second, {
        key: 'second',
        onEnter: this.handleExit,
        onEntering: this.handleExiting,
        onEntered: this.handleExited
      }));
    };

    return ReplaceTransition;
  }(React__default.Component);

  ReplaceTransition.propTypes =  {};

  var _leaveRenders, _enterRenders;

  function areChildrenDifferent(oldChildren, newChildren) {
    if (oldChildren === newChildren) return false;

    if ( /*#__PURE__*/React__default.isValidElement(oldChildren) && /*#__PURE__*/React__default.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
      return false;
    }

    return true;
  }
  /**
   * Enum of modes for SwitchTransition component
   * @enum { string }
   */


  var modes = {
    out: 'out-in',
    in: 'in-out'
  };

  var callHook = function callHook(element, name, cb) {
    return function () {
      var _element$props;

      element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
      cb();
    };
  };

  var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
    var current = _ref.current,
        changeState = _ref.changeState;
    return /*#__PURE__*/React__default.cloneElement(current, {
      in: false,
      onExited: callHook(current, 'onExited', function () {
        changeState(ENTERING, null);
      })
    });
  }, _leaveRenders[modes.in] = function (_ref2) {
    var current = _ref2.current,
        changeState = _ref2.changeState,
        children = _ref2.children;
    return [current, /*#__PURE__*/React__default.cloneElement(children, {
      in: true,
      onEntered: callHook(children, 'onEntered', function () {
        changeState(ENTERING);
      })
    })];
  }, _leaveRenders);
  var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
    var children = _ref3.children,
        changeState = _ref3.changeState;
    return /*#__PURE__*/React__default.cloneElement(children, {
      in: true,
      onEntered: callHook(children, 'onEntered', function () {
        changeState(ENTERED, /*#__PURE__*/React__default.cloneElement(children, {
          in: true
        }));
      })
    });
  }, _enterRenders[modes.in] = function (_ref4) {
    var current = _ref4.current,
        children = _ref4.children,
        changeState = _ref4.changeState;
    return [/*#__PURE__*/React__default.cloneElement(current, {
      in: false,
      onExited: callHook(current, 'onExited', function () {
        changeState(ENTERED, /*#__PURE__*/React__default.cloneElement(children, {
          in: true
        }));
      })
    }), /*#__PURE__*/React__default.cloneElement(children, {
      in: true
    })];
  }, _enterRenders);
  /**
   * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
   * You can use it when you want to control the render between state transitions.
   * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
   *
   * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
   * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
   *
   * **Note**: If you want the animation to happen simultaneously
   * (that is, to have the old child removed and a new child inserted **at the same time**),
   * you should use
   * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
   * instead.
   *
   * ```jsx
   * function App() {
   *  const [state, setState] = useState(false);
   *  return (
   *    <SwitchTransition>
   *      <CSSTransition
   *        key={state ? "Goodbye, world!" : "Hello, world!"}
   *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
   *        classNames='fade'
   *      >
   *        <button onClick={() => setState(state => !state)}>
   *          {state ? "Goodbye, world!" : "Hello, world!"}
   *        </button>
   *      </CSSTransition>
   *    </SwitchTransition>
   *  );
   * }
   * ```
   *
   * ```css
   * .fade-enter{
   *    opacity: 0;
   * }
   * .fade-exit{
   *    opacity: 1;
   * }
   * .fade-enter-active{
   *    opacity: 1;
   * }
   * .fade-exit-active{
   *    opacity: 0;
   * }
   * .fade-enter-active,
   * .fade-exit-active{
   *    transition: opacity 500ms;
   * }
   * ```
   */

  var SwitchTransition = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose$1(SwitchTransition, _React$Component);

    function SwitchTransition() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.state = {
        status: ENTERED,
        current: null
      };
      _this.appeared = false;

      _this.changeState = function (status, current) {
        if (current === void 0) {
          current = _this.state.current;
        }

        _this.setState({
          status: status,
          current: current
        });
      };

      return _this;
    }

    var _proto = SwitchTransition.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.appeared = true;
    };

    SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
      if (props.children == null) {
        return {
          current: null
        };
      }

      if (state.status === ENTERING && props.mode === modes.in) {
        return {
          status: ENTERING
        };
      }

      if (state.current && areChildrenDifferent(state.current, props.children)) {
        return {
          status: EXITING
        };
      }

      return {
        current: /*#__PURE__*/React__default.cloneElement(props.children, {
          in: true
        })
      };
    };

    _proto.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          mode = _this$props.mode,
          _this$state = this.state,
          status = _this$state.status,
          current = _this$state.current;
      var data = {
        children: children,
        current: current,
        changeState: this.changeState,
        status: status
      };
      var component;

      switch (status) {
        case ENTERING:
          component = enterRenders[mode](data);
          break;

        case EXITING:
          component = leaveRenders[mode](data);
          break;

        case ENTERED:
          component = current;
      }

      return /*#__PURE__*/React__default.createElement(TransitionGroupContext.Provider, {
        value: {
          isMounting: !this.appeared
        }
      }, component);
    };

    return SwitchTransition;
  }(React__default.Component);

  SwitchTransition.propTypes =  {};
  SwitchTransition.defaultProps = {
    mode: modes.out
  };

  var propTypes$m = _extends({}, Transition.propTypes, {
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
    tag: tagPropType,
    baseClass: propTypes.string,
    baseClassActive: propTypes.string,
    className: propTypes.string,
    cssModule: propTypes.object,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
  });

  var defaultProps$l = _extends({}, Transition.defaultProps, {
    tag: 'div',
    baseClass: 'fade',
    baseClassActive: 'show',
    timeout: TransitionTimeouts.Fade,
    appear: true,
    enter: true,
    exit: true,
    in: true
  });

  function Fade(props) {
    var Tag = props.tag,
        baseClass = props.baseClass,
        baseClassActive = props.baseClassActive,
        className = props.className,
        cssModule = props.cssModule,
        children = props.children,
        innerRef = props.innerRef,
        otherProps = _objectWithoutPropertiesLoose(props, ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"]);

    var transitionProps = pick(otherProps, TransitionPropTypeKeys);
    var childProps = omit(otherProps, TransitionPropTypeKeys);
    return /*#__PURE__*/React__default.createElement(Transition, _extends({}, transitionProps, {
      nodeRef: innerRef
    }), function (status) {
      var isActive = status === 'entered';
      var classes = mapToCssModules(classnames(className, baseClass, isActive && baseClassActive), cssModule);
      return /*#__PURE__*/React__default.createElement(Tag, _extends({
        className: classes
      }, childProps, {
        ref: innerRef
      }), children);
    });
  }

  Fade.propTypes = propTypes$m;
  Fade.defaultProps = defaultProps$l;

  var propTypes$n = {
    color: propTypes.string,
    pill: propTypes.bool,
    tag: tagPropType,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$m = {
    color: 'secondary',
    pill: false,
    tag: 'span'
  };

  var Badge = function Badge(props) {
    var className = props.className,
        cssModule = props.cssModule,
        color = props.color,
        innerRef = props.innerRef,
        pill = props.pill,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "color", "innerRef", "pill", "tag"]);

    var classes = mapToCssModules(classnames(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);

    if (attributes.href && Tag === 'span') {
      Tag = 'a';
    }

    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes,
      ref: innerRef
    }));
  };

  Badge.propTypes = propTypes$n;
  Badge.defaultProps = defaultProps$m;

  var propTypes$o = {
    tag: tagPropType,
    inverse: propTypes.bool,
    color: propTypes.string,
    body: propTypes.bool,
    outline: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
  };
  var defaultProps$n = {
    tag: 'div'
  };

  var Card = function Card(props) {
    var className = props.className,
        cssModule = props.cssModule,
        color = props.color,
        body = props.body,
        inverse = props.inverse,
        outline = props.outline,
        Tag = props.tag,
        innerRef = props.innerRef,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"]);

    var classes = mapToCssModules(classnames(className, 'card', inverse ? 'text-white' : false, body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + "-" + color : false), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes,
      ref: innerRef
    }));
  };

  Card.propTypes = propTypes$o;
  Card.defaultProps = defaultProps$n;

  var propTypes$p = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$o = {
    tag: 'div'
  };

  var CardGroup = function CardGroup(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-group'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardGroup.propTypes = propTypes$p;
  CardGroup.defaultProps = defaultProps$o;

  var propTypes$q = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$p = {
    tag: 'div'
  };

  var CardDeck = function CardDeck(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-deck'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardDeck.propTypes = propTypes$q;
  CardDeck.defaultProps = defaultProps$p;

  var propTypes$r = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$q = {
    tag: 'div'
  };

  var CardColumns = function CardColumns(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-columns'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardColumns.propTypes = propTypes$r;
  CardColumns.defaultProps = defaultProps$q;

  var propTypes$s = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
  };
  var defaultProps$r = {
    tag: 'div'
  };

  var CardBody = function CardBody(props) {
    var className = props.className,
        cssModule = props.cssModule,
        innerRef = props.innerRef,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "innerRef", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-body'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes,
      ref: innerRef
    }));
  };

  CardBody.propTypes = propTypes$s;
  CardBody.defaultProps = defaultProps$r;

  var propTypes$t = {
    tag: tagPropType,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$s = {
    tag: 'a'
  };

  var CardLink = function CardLink(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        innerRef = props.innerRef,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "innerRef"]);

    var classes = mapToCssModules(classnames(className, 'card-link'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  CardLink.propTypes = propTypes$t;
  CardLink.defaultProps = defaultProps$s;

  var propTypes$u = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$t = {
    tag: 'div'
  };

  var CardFooter = function CardFooter(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-footer'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardFooter.propTypes = propTypes$u;
  CardFooter.defaultProps = defaultProps$t;

  var propTypes$v = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$u = {
    tag: 'div'
  };

  var CardHeader = function CardHeader(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-header'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardHeader.propTypes = propTypes$v;
  CardHeader.defaultProps = defaultProps$u;

  var propTypes$w = {
    tag: tagPropType,
    top: propTypes.bool,
    bottom: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$v = {
    tag: 'img'
  };

  var CardImg = function CardImg(props) {
    var className = props.className,
        cssModule = props.cssModule,
        top = props.top,
        bottom = props.bottom,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "top", "bottom", "tag"]);

    var cardImgClassName = 'card-img';

    if (top) {
      cardImgClassName = 'card-img-top';
    }

    if (bottom) {
      cardImgClassName = 'card-img-bottom';
    }

    var classes = mapToCssModules(classnames(className, cardImgClassName), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardImg.propTypes = propTypes$w;
  CardImg.defaultProps = defaultProps$v;

  var propTypes$x = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$w = {
    tag: 'div'
  };

  var CardImgOverlay = function CardImgOverlay(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-img-overlay'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardImgOverlay.propTypes = propTypes$x;
  CardImgOverlay.defaultProps = defaultProps$w;

  var CarouselItem = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(CarouselItem, _React$Component);

    function CarouselItem(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.state = {
        startAnimation: false
      };
      _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
      _this.onEntering = _this.onEntering.bind(_assertThisInitialized(_this));
      _this.onExit = _this.onExit.bind(_assertThisInitialized(_this));
      _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
      _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = CarouselItem.prototype;

    _proto.onEnter = function onEnter(node, isAppearing) {
      this.setState({
        startAnimation: false
      });
      this.props.onEnter(node, isAppearing);
    };

    _proto.onEntering = function onEntering(node, isAppearing) {
      // getting this variable triggers a reflow
      var offsetHeight = (node || this.props.nodeRef.current).offsetHeight;
      this.setState({
        startAnimation: true
      });
      this.props.onEntering(node, isAppearing);
      return offsetHeight;
    };

    _proto.onExit = function onExit(node) {
      this.setState({
        startAnimation: false
      });
      this.props.onExit(node);
    };

    _proto.onExiting = function onExiting(node) {
      this.setState({
        startAnimation: true
      });
      (node || this.props.nodeRef.current).dispatchEvent(new CustomEvent('slide.bs.carousel'));
      this.props.onExiting(node);
    };

    _proto.onExited = function onExited(node) {
      (node || this.props.nodeRef.current).dispatchEvent(new CustomEvent('slid.bs.carousel'));
      this.props.onExited(node);
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props = this.props,
          isIn = _this$props.in,
          children = _this$props.children,
          cssModule = _this$props.cssModule,
          slide = _this$props.slide,
          Tag = _this$props.tag,
          className = _this$props.className,
          transitionProps = _objectWithoutPropertiesLoose(_this$props, ["in", "children", "cssModule", "slide", "tag", "className"]);

      return /*#__PURE__*/React__default.createElement(Transition, _extends({}, transitionProps, {
        enter: slide,
        exit: slide,
        in: isIn,
        onEnter: this.onEnter,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }), function (status) {
        var direction = _this2.context.direction;
        var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
        var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
        var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
        var itemClasses = mapToCssModules(classnames(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
        return /*#__PURE__*/React__default.createElement(Tag, {
          className: itemClasses,
          ref: transitionProps.nodeRef
        }, children);
      });
    };

    return CarouselItem;
  }(React__default.Component);

  CarouselItem.propTypes = _extends({}, Transition.propTypes, {
    tag: tagPropType,
    in: propTypes.bool,
    cssModule: propTypes.object,
    children: propTypes.node,
    slide: propTypes.bool,
    className: propTypes.string
  });
  CarouselItem.defaultProps = _extends({}, Transition.defaultProps, {
    tag: 'div',
    timeout: TransitionTimeouts.Carousel,
    slide: true
  });
  CarouselItem.contextTypes = {
    direction: propTypes.string
  };

  var SWIPE_THRESHOLD = 40;

  var Carousel = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(Carousel, _React$Component);

    function Carousel(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
      _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
      _this.hoverStart = _this.hoverStart.bind(_assertThisInitialized(_this));
      _this.hoverEnd = _this.hoverEnd.bind(_assertThisInitialized(_this));
      _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
      _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
      _this.touchStartX = 0;
      _this.touchStartY = 0;
      _this.state = {
        activeIndex: _this.props.activeIndex,
        direction: 'right',
        indicatorClicked: false
      };
      return _this;
    }

    var _proto = Carousel.prototype;

    _proto.getChildContext = function getChildContext() {
      return {
        direction: this.state.direction
      };
    };

    _proto.componentDidMount = function componentDidMount() {
      // Set up the cycle
      if (this.props.ride === 'carousel') {
        this.setInterval();
      } // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.


      document.addEventListener('keyup', this.handleKeyPress);
    };

    Carousel.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      var newState = null;
      var activeIndex = prevState.activeIndex,
          direction = prevState.direction,
          indicatorClicked = prevState.indicatorClicked;

      if (nextProps.activeIndex !== activeIndex) {
        // Calculate the direction to turn
        if (nextProps.activeIndex === activeIndex + 1) {
          direction = 'right';
        } else if (nextProps.activeIndex === activeIndex - 1) {
          direction = 'left';
        } else if (nextProps.activeIndex < activeIndex) {
          direction = indicatorClicked ? 'left' : 'right';
        } else if (nextProps.activeIndex !== activeIndex) {
          direction = indicatorClicked ? 'right' : 'left';
        }

        newState = {
          activeIndex: nextProps.activeIndex,
          direction: direction,
          indicatorClicked: false
        };
      }

      return newState;
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      if (prevState.activeIndex === this.state.activeIndex) return;
      this.setInterval(this.props);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.clearInterval();
      document.removeEventListener('keyup', this.handleKeyPress);
    };

    _proto.setInterval = function (_setInterval) {
      function setInterval() {
        return _setInterval.apply(this, arguments);
      }

      setInterval.toString = function () {
        return _setInterval.toString();
      };

      return setInterval;
    }(function (props) {
      if (props === void 0) {
        props = this.props;
      }

      // make sure not to have multiple intervals going...
      this.clearInterval();

      if (props.interval) {
        this.cycleInterval = setInterval(function () {
          props.next();
        }, parseInt(props.interval, 10));
      }
    });

    _proto.clearInterval = function (_clearInterval) {
      function clearInterval() {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function () {
      clearInterval(this.cycleInterval);
    });

    _proto.hoverStart = function hoverStart() {
      if (this.props.pause === 'hover') {
        this.clearInterval();
      }

      if (this.props.mouseEnter) {
        var _this$props;

        (_this$props = this.props).mouseEnter.apply(_this$props, arguments);
      }
    };

    _proto.hoverEnd = function hoverEnd() {
      if (this.props.pause === 'hover') {
        this.setInterval();
      }

      if (this.props.mouseLeave) {
        var _this$props2;

        (_this$props2 = this.props).mouseLeave.apply(_this$props2, arguments);
      }
    };

    _proto.handleKeyPress = function handleKeyPress(evt) {
      if (this.props.keyboard) {
        if (evt.keyCode === 37) {
          this.props.previous();
        } else if (evt.keyCode === 39) {
          this.props.next();
        }
      }
    };

    _proto.handleTouchStart = function handleTouchStart(e) {
      if (!this.props.enableTouch) {
        return;
      }

      this.touchStartX = e.changedTouches[0].screenX;
      this.touchStartY = e.changedTouches[0].screenY;
    };

    _proto.handleTouchEnd = function handleTouchEnd(e) {
      if (!this.props.enableTouch) {
        return;
      }

      var currentX = e.changedTouches[0].screenX;
      var currentY = e.changedTouches[0].screenY;
      var diffX = Math.abs(this.touchStartX - currentX);
      var diffY = Math.abs(this.touchStartY - currentY); // Don't swipe if Y-movement is bigger than X-movement

      if (diffX < diffY) {
        return;
      }

      if (diffX < SWIPE_THRESHOLD) {
        return;
      }

      if (currentX < this.touchStartX) {
        this.props.next();
      } else {
        this.props.previous();
      }
    };

    _proto.renderItems = function renderItems(carouselItems, className) {
      var _this2 = this;

      var slide = this.props.slide;
      return /*#__PURE__*/React__default.createElement("div", {
        className: className
      }, carouselItems.map(function (item, index) {
        var isIn = index === _this2.state.activeIndex;
        return /*#__PURE__*/React__default.cloneElement(item, {
          in: isIn,
          slide: slide
        });
      }));
    };

    _proto.render = function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          cssModule = _this$props3.cssModule,
          slide = _this$props3.slide,
          className = _this$props3.className;
      var outerClasses = mapToCssModules(classnames(className, 'carousel', slide && 'slide'), cssModule);
      var innerClasses = mapToCssModules(classnames('carousel-inner'), cssModule); // filter out booleans, null, or undefined

      var children = this.props.children.filter(function (child) {
        return child !== null && child !== undefined && typeof child !== 'boolean';
      });
      var slidesOnly = children.every(function (child) {
        return child.type === CarouselItem;
      }); // Rendering only slides

      if (slidesOnly) {
        return /*#__PURE__*/React__default.createElement("div", {
          className: outerClasses,
          onMouseEnter: this.hoverStart,
          onMouseLeave: this.hoverEnd
        }, this.renderItems(children, innerClasses));
      } // Rendering slides and controls


      if (children[0] instanceof Array) {
        var _carouselItems = children[0];
        var _controlLeft = children[1];
        var _controlRight = children[2];
        return /*#__PURE__*/React__default.createElement("div", {
          className: outerClasses,
          onMouseEnter: this.hoverStart,
          onMouseLeave: this.hoverEnd
        }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight);
      } // Rendering indicators, slides and controls


      var indicators = children[0];

      var wrappedOnClick = function wrappedOnClick(e) {
        if (typeof indicators.props.onClickHandler === 'function') {
          _this3.setState({
            indicatorClicked: true
          }, function () {
            return indicators.props.onClickHandler(e);
          });
        }
      };

      var wrappedIndicators = /*#__PURE__*/React__default.cloneElement(indicators, {
        onClickHandler: wrappedOnClick
      });
      var carouselItems = children[1];
      var controlLeft = children[2];
      var controlRight = children[3];
      return /*#__PURE__*/React__default.createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd
      }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight);
    };

    return Carousel;
  }(React__default.Component);

  Carousel.propTypes = {
    // the current active slide of the carousel
    activeIndex: propTypes.number,
    // a function which should advance the carousel to the next slide (via activeIndex)
    next: propTypes.func.isRequired,
    // a function which should advance the carousel to the previous slide (via activeIndex)
    previous: propTypes.func.isRequired,
    // controls if the left and right arrow keys should control the carousel
    keyboard: propTypes.bool,

    /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
     * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
     */
    pause: propTypes.oneOf(['hover', false]),
    // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
    // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
    ride: propTypes.oneOf(['carousel']),
    // the interval at which the carousel automatically cycles (default: 5000)
    // eslint-disable-next-line react/no-unused-prop-types
    interval: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.bool]),
    children: propTypes.array,
    // called when the mouse enters the Carousel
    mouseEnter: propTypes.func,
    // called when the mouse exits the Carousel
    mouseLeave: propTypes.func,
    // controls whether the slide animation on the Carousel works or not
    slide: propTypes.bool,
    cssModule: propTypes.object,
    className: propTypes.string,
    enableTouch: propTypes.bool
  };
  Carousel.defaultProps = {
    interval: 5000,
    pause: 'hover',
    keyboard: true,
    slide: true,
    enableTouch: true
  };
  Carousel.childContextTypes = {
    direction: propTypes.string
  };

  /* eslint jsx-a11y/anchor-is-valid: 0 */

  var CarouselControl = function CarouselControl(props) {
    var direction = props.direction,
        onClickHandler = props.onClickHandler,
        cssModule = props.cssModule,
        directionText = props.directionText,
        className = props.className;
    var anchorClasses = mapToCssModules(classnames(className, "carousel-control-" + direction), cssModule);
    var iconClasses = mapToCssModules(classnames("carousel-control-" + direction + "-icon"), cssModule);
    var screenReaderClasses = mapToCssModules(classnames('sr-only'), cssModule);
    return /*#__PURE__*/React__default.createElement("a", {
      className: anchorClasses,
      style: {
        cursor: "pointer"
      },
      role: "button",
      tabIndex: "0",
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler();
      }
    }, /*#__PURE__*/React__default.createElement("span", {
      className: iconClasses,
      "aria-hidden": "true"
    }), /*#__PURE__*/React__default.createElement("span", {
      className: screenReaderClasses
    }, directionText || direction));
  };

  CarouselControl.propTypes = {
    direction: propTypes.oneOf(['prev', 'next']).isRequired,
    onClickHandler: propTypes.func.isRequired,
    cssModule: propTypes.object,
    directionText: propTypes.string,
    className: propTypes.string
  };

  var CarouselIndicators = function CarouselIndicators(props) {
    var items = props.items,
        activeIndex = props.activeIndex,
        cssModule = props.cssModule,
        onClickHandler = props.onClickHandler,
        className = props.className;
    var listClasses = mapToCssModules(classnames(className, 'carousel-indicators'), cssModule);
    var indicators = items.map(function (item, idx) {
      var indicatorClasses = mapToCssModules(classnames({
        active: activeIndex === idx
      }), cssModule);
      return /*#__PURE__*/React__default.createElement("li", {
        key: "" + (item.key || Object.values(item).join('')),
        onClick: function onClick(e) {
          e.preventDefault();
          onClickHandler(idx);
        },
        className: indicatorClasses
      });
    });
    return /*#__PURE__*/React__default.createElement("ol", {
      className: listClasses
    }, indicators);
  };

  CarouselIndicators.propTypes = {
    items: propTypes.array.isRequired,
    activeIndex: propTypes.number.isRequired,
    cssModule: propTypes.object,
    onClickHandler: propTypes.func.isRequired,
    className: propTypes.string
  };

  var CarouselCaption = function CarouselCaption(props) {
    var captionHeader = props.captionHeader,
        captionText = props.captionText,
        cssModule = props.cssModule,
        className = props.className;
    var classes = mapToCssModules(classnames(className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
    return /*#__PURE__*/React__default.createElement("div", {
      className: classes
    }, /*#__PURE__*/React__default.createElement("h3", null, captionHeader), /*#__PURE__*/React__default.createElement("p", null, captionText));
  };

  CarouselCaption.propTypes = {
    captionHeader: propTypes.node,
    captionText: propTypes.node.isRequired,
    cssModule: propTypes.object,
    className: propTypes.string
  };

  var propTypes$y = {
    items: propTypes.array.isRequired,
    indicators: propTypes.bool,
    controls: propTypes.bool,
    autoPlay: propTypes.bool,
    defaultActiveIndex: propTypes.number,
    activeIndex: propTypes.number,
    next: propTypes.func,
    previous: propTypes.func,
    goToIndex: propTypes.func
  };

  var UncontrolledCarousel = /*#__PURE__*/function (_Component) {
    _inheritsLoose(UncontrolledCarousel, _Component);

    function UncontrolledCarousel(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.animating = false;
      _this.state = {
        activeIndex: props.defaultActiveIndex || 0
      };
      _this.next = _this.next.bind(_assertThisInitialized(_this));
      _this.previous = _this.previous.bind(_assertThisInitialized(_this));
      _this.goToIndex = _this.goToIndex.bind(_assertThisInitialized(_this));
      _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
      _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = UncontrolledCarousel.prototype;

    _proto.onExiting = function onExiting() {
      this.animating = true;
    };

    _proto.onExited = function onExited() {
      this.animating = false;
    };

    _proto.next = function next() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({
        activeIndex: nextIndex
      });
    };

    _proto.previous = function previous() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
      this.setState({
        activeIndex: nextIndex
      });
    };

    _proto.goToIndex = function goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({
        activeIndex: newIndex
      });
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props = this.props,
          defaultActiveIndex = _this$props.defaultActiveIndex,
          autoPlay = _this$props.autoPlay,
          indicators = _this$props.indicators,
          controls = _this$props.controls,
          items = _this$props.items,
          goToIndex = _this$props.goToIndex,
          props = _objectWithoutPropertiesLoose(_this$props, ["defaultActiveIndex", "autoPlay", "indicators", "controls", "items", "goToIndex"]);

      var activeIndex = this.state.activeIndex;
      var slides = items.map(function (item) {
        var key = item.key || item.src;
        return /*#__PURE__*/React__default.createElement(CarouselItem, {
          onExiting: _this2.onExiting,
          onExited: _this2.onExited,
          key: key
        }, /*#__PURE__*/React__default.createElement("img", {
          className: "d-block w-100",
          src: item.src,
          alt: item.altText
        }), /*#__PURE__*/React__default.createElement(CarouselCaption, {
          captionText: item.caption,
          captionHeader: item.header || item.caption
        }));
      });
      return /*#__PURE__*/React__default.createElement(Carousel, _extends({
        activeIndex: activeIndex,
        next: this.next,
        previous: this.previous,
        ride: autoPlay ? 'carousel' : undefined
      }, props), indicators && /*#__PURE__*/React__default.createElement(CarouselIndicators, {
        items: items,
        activeIndex: props.activeIndex || activeIndex,
        onClickHandler: goToIndex || this.goToIndex
      }), slides, controls && /*#__PURE__*/React__default.createElement(CarouselControl, {
        direction: "prev",
        directionText: "Previous",
        onClickHandler: props.previous || this.previous
      }), controls && /*#__PURE__*/React__default.createElement(CarouselControl, {
        direction: "next",
        directionText: "Next",
        onClickHandler: props.next || this.next
      }));
    };

    return UncontrolledCarousel;
  }(React.Component);

  UncontrolledCarousel.propTypes = propTypes$y;
  UncontrolledCarousel.defaultProps = {
    controls: true,
    indicators: true,
    autoPlay: true
  };

  var propTypes$z = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$x = {
    tag: 'div'
  };

  var CardSubtitle = function CardSubtitle(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-subtitle'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardSubtitle.propTypes = propTypes$z;
  CardSubtitle.defaultProps = defaultProps$x;

  var propTypes$A = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$y = {
    tag: 'p'
  };

  var CardText = function CardText(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-text'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardText.propTypes = propTypes$A;
  CardText.defaultProps = defaultProps$y;

  var propTypes$B = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$z = {
    tag: 'div'
  };

  var CardTitle = function CardTitle(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-title'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardTitle.propTypes = propTypes$B;
  CardTitle.defaultProps = defaultProps$z;

  var propTypes$C = {
    className: propTypes.string,
    id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    label: propTypes.node,
    valid: propTypes.bool,
    invalid: propTypes.bool,
    bsSize: propTypes.string,
    htmlFor: propTypes.string,
    cssModule: propTypes.object,
    onChange: propTypes.func,
    children: propTypes.oneOfType([propTypes.node, propTypes.array, propTypes.func]),
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
  };

  var CustomFileInput = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(CustomFileInput, _React$Component);

    function CustomFileInput(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.state = {
        files: null
      };
      _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = CustomFileInput.prototype;

    _proto.onChange = function onChange(e) {
      var input = e.target;
      var onChange = this.props.onChange;
      var files = this.getSelectedFiles(input);

      if (typeof onChange === "function") {
        onChange.apply(void 0, arguments);
      }

      this.setState({
        files: files
      });
    };

    _proto.getSelectedFiles = function getSelectedFiles(input) {
      var multiple = this.props.multiple;

      if (multiple && input.files) {
        var files = [].slice.call(input.files);
        return files.map(function (file) {
          return file.name;
        }).join(", ");
      }

      if (input.value.indexOf("fakepath") !== -1) {
        var parts = input.value.split("\\");
        return parts[parts.length - 1];
      }

      return input.value;
    };

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          label = _this$props.label,
          valid = _this$props.valid,
          invalid = _this$props.invalid,
          cssModule = _this$props.cssModule,
          children = _this$props.children,
          bsSize = _this$props.bsSize,
          innerRef = _this$props.innerRef,
          htmlFor = _this$props.htmlFor,
          type = _this$props.type,
          onChange = _this$props.onChange,
          dataBrowse = _this$props.dataBrowse,
          hidden = _this$props.hidden,
          attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "label", "valid", "invalid", "cssModule", "children", "bsSize", "innerRef", "htmlFor", "type", "onChange", "dataBrowse", "hidden"]);

      var customClass = mapToCssModules(classnames(className, "custom-file"), cssModule);
      var validationClassNames = mapToCssModules(classnames(invalid && "is-invalid", valid && "is-valid"), cssModule);
      var labelHtmlFor = htmlFor || attributes.id;
      var files = this.state.files;
      return /*#__PURE__*/React__default.createElement("div", {
        className: customClass,
        hidden: hidden || false
      }, /*#__PURE__*/React__default.createElement("input", _extends({
        type: "file"
      }, attributes, {
        ref: innerRef,
        "aria-invalid": invalid,
        className: classnames(validationClassNames, mapToCssModules("custom-file-input", cssModule)),
        onChange: this.onChange
      })), /*#__PURE__*/React__default.createElement("label", {
        className: mapToCssModules("custom-file-label", cssModule),
        htmlFor: labelHtmlFor,
        "data-browse": dataBrowse
      }, files || label || "Choose file"), children);
    };

    return CustomFileInput;
  }(React__default.Component);

  CustomFileInput.propTypes = propTypes$C;

  var propTypes$D = {
    className: propTypes.string,
    id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    type: propTypes.string.isRequired,
    label: propTypes.node,
    inline: propTypes.bool,
    valid: propTypes.bool,
    invalid: propTypes.bool,
    bsSize: propTypes.string,
    htmlFor: propTypes.string,
    cssModule: propTypes.object,
    children: propTypes.oneOfType([propTypes.node, propTypes.array, propTypes.func]),
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
  };

  function CustomInput(props) {
    var className = props.className,
        label = props.label,
        inline = props.inline,
        valid = props.valid,
        invalid = props.invalid,
        cssModule = props.cssModule,
        children = props.children,
        bsSize = props.bsSize,
        innerRef = props.innerRef,
        htmlFor = props.htmlFor,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "label", "inline", "valid", "invalid", "cssModule", "children", "bsSize", "innerRef", "htmlFor"]);

    var type = attributes.type;
    var customClass = mapToCssModules(classnames(className, "custom-" + type, bsSize ? "custom-" + type + "-" + bsSize : false), cssModule);
    var validationClassNames = mapToCssModules(classnames(invalid && "is-invalid", valid && "is-valid"), cssModule);
    var labelHtmlFor = htmlFor || attributes.id;

    if (type === "select") {
      var _type = attributes.type,
          _rest = _objectWithoutPropertiesLoose(attributes, ["type"]);

      return /*#__PURE__*/React__default.createElement("select", _extends({}, _rest, {
        ref: innerRef,
        className: classnames(validationClassNames, customClass),
        "aria-invalid": invalid
      }), children);
    }

    if (type === "file") {
      return /*#__PURE__*/React__default.createElement(CustomFileInput, props);
    }

    if (type !== "checkbox" && type !== "radio" && type !== "switch") {
      return /*#__PURE__*/React__default.createElement("input", _extends({}, attributes, {
        ref: innerRef,
        "aria-invalid": invalid,
        className: classnames(validationClassNames, customClass)
      }));
    }

    var wrapperClasses = classnames(customClass, mapToCssModules(classnames("custom-control", {
      "custom-control-inline": inline
    }), cssModule));

    var hidden = attributes.hidden,
        rest = _objectWithoutPropertiesLoose(attributes, ["hidden"]);

    return /*#__PURE__*/React__default.createElement("div", {
      className: wrapperClasses,
      hidden: hidden || false
    }, /*#__PURE__*/React__default.createElement("input", _extends({}, rest, {
      type: type === "switch" ? "checkbox" : type,
      ref: innerRef,
      "aria-invalid": invalid,
      className: classnames(validationClassNames, mapToCssModules("custom-control-input", cssModule))
    })), /*#__PURE__*/React__default.createElement("label", {
      className: mapToCssModules("custom-control-label", cssModule),
      htmlFor: labelHtmlFor
    }, label), children);
  }

  CustomInput.propTypes = propTypes$D;

  function noop$1() {}

  var propTypes$E = {
    children: propTypes.oneOfType([propTypes.node, propTypes.func]).isRequired,
    popperClassName: propTypes.string,
    placement: propTypes.string,
    placementPrefix: propTypes.string,
    arrowClassName: propTypes.string,
    hideArrow: propTypes.bool,
    tag: tagPropType,
    isOpen: propTypes.bool.isRequired,
    cssModule: propTypes.object,
    offset: propTypes.oneOfType([propTypes.string, propTypes.number]),
    fallbackPlacement: propTypes.oneOfType([propTypes.string, propTypes.array]),
    flip: propTypes.bool,
    container: targetPropType,
    target: targetPropType.isRequired,
    modifiers: propTypes.object,
    boundariesElement: propTypes.oneOfType([propTypes.string, DOMElement]),
    onClosed: propTypes.func,
    fade: propTypes.bool,
    transition: propTypes.shape(Fade.propTypes)
  };
  var defaultProps$A = {
    boundariesElement: 'scrollParent',
    placement: 'auto',
    hideArrow: false,
    isOpen: false,
    offset: 0,
    fallbackPlacement: 'flip',
    flip: true,
    container: 'body',
    modifiers: {},
    onClosed: noop$1,
    fade: true,
    transition: _extends({}, Fade.defaultProps)
  };

  var PopperContent = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(PopperContent, _React$Component);

    function PopperContent(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.setTargetNode = _this.setTargetNode.bind(_assertThisInitialized(_this));
      _this.getTargetNode = _this.getTargetNode.bind(_assertThisInitialized(_this));
      _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
      _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
      _this.state = {
        isOpen: props.isOpen
      };
      return _this;
    }

    PopperContent.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
      if (props.isOpen && !state.isOpen) {
        return {
          isOpen: props.isOpen
        };
      } else return null;
    };

    var _proto = PopperContent.prototype;

    _proto.componentDidUpdate = function componentDidUpdate() {
      if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
        this._element.childNodes[0].focus();
      }
    };

    _proto.setTargetNode = function setTargetNode(node) {
      this.targetNode = typeof node === 'string' ? getTarget(node) : node;
    };

    _proto.getTargetNode = function getTargetNode() {
      return this.targetNode;
    };

    _proto.getContainerNode = function getContainerNode() {
      return getTarget(this.props.container);
    };

    _proto.getRef = function getRef(ref) {
      this._element = ref;
    };

    _proto.onClosed = function onClosed() {
      this.props.onClosed();
      this.setState({
        isOpen: false
      });
    };

    _proto.renderChildren = function renderChildren() {
      var _this$props = this.props,
          cssModule = _this$props.cssModule,
          children = _this$props.children,
          isOpen = _this$props.isOpen,
          flip = _this$props.flip,
          target = _this$props.target,
          offset = _this$props.offset,
          fallbackPlacement = _this$props.fallbackPlacement,
          placementPrefix = _this$props.placementPrefix,
          _arrowClassName = _this$props.arrowClassName,
          hideArrow = _this$props.hideArrow,
          _popperClassName = _this$props.popperClassName,
          tag = _this$props.tag,
          container = _this$props.container,
          modifiers = _this$props.modifiers,
          boundariesElement = _this$props.boundariesElement,
          onClosed = _this$props.onClosed,
          fade = _this$props.fade,
          transition = _this$props.transition,
          placement = _this$props.placement,
          attrs = _objectWithoutPropertiesLoose(_this$props, ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacement", "placementPrefix", "arrowClassName", "hideArrow", "popperClassName", "tag", "container", "modifiers", "boundariesElement", "onClosed", "fade", "transition", "placement"]);

      var arrowClassName = mapToCssModules(classnames('arrow', _arrowClassName), cssModule);
      var popperClassName = mapToCssModules(classnames(_popperClassName, placementPrefix ? placementPrefix + "-auto" : ''), this.props.cssModule);

      var extendedModifiers = _extends({
        offset: {
          offset: offset
        },
        flip: {
          enabled: flip,
          behavior: fallbackPlacement
        },
        preventOverflow: {
          boundariesElement: boundariesElement
        }
      }, modifiers);

      var popperTransition = _extends({}, Fade.defaultProps, transition, {
        baseClass: fade ? transition.baseClass : '',
        timeout: fade ? transition.timeout : 0
      });

      return /*#__PURE__*/React__default.createElement(Fade, _extends({}, popperTransition, attrs, {
        in: isOpen,
        onExited: this.onClosed,
        tag: tag
      }), /*#__PURE__*/React__default.createElement(reactPopper.Popper, {
        referenceElement: this.targetNode,
        modifiers: extendedModifiers,
        placement: placement
      }, function (_ref) {
        var ref = _ref.ref,
            style = _ref.style,
            placement = _ref.placement,
            outOfBoundaries = _ref.outOfBoundaries,
            arrowProps = _ref.arrowProps,
            scheduleUpdate = _ref.scheduleUpdate;
        return /*#__PURE__*/React__default.createElement("div", {
          ref: ref,
          style: style,
          className: popperClassName,
          "x-placement": placement,
          "x-out-of-boundaries": outOfBoundaries ? 'true' : undefined
        }, typeof children === 'function' ? children({
          scheduleUpdate: scheduleUpdate
        }) : children, !hideArrow && /*#__PURE__*/React__default.createElement("span", {
          ref: arrowProps.ref,
          className: arrowClassName,
          style: arrowProps.style
        }));
      }));
    };

    _proto.render = function render() {
      this.setTargetNode(this.props.target);

      if (this.state.isOpen) {
        return this.props.container === 'inline' ? this.renderChildren() : /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React__default.createElement("div", {
          ref: this.getRef
        }, this.renderChildren()), this.getContainerNode());
      }

      return null;
    };

    return PopperContent;
  }(React__default.Component);

  PopperContent.propTypes = propTypes$E;
  PopperContent.defaultProps = defaultProps$A;

  var PopperTargetHelper = function PopperTargetHelper(props, context) {
    context.popperManager.setTargetNode(getTarget(props.target));
    return null;
  };

  PopperTargetHelper.contextTypes = {
    popperManager: propTypes.object.isRequired
  };
  PopperTargetHelper.propTypes = {
    target: targetPropType.isRequired
  };

  var propTypes$F = {
    children: propTypes.oneOfType([propTypes.node, propTypes.func]),
    placement: propTypes.oneOf(PopperPlacements),
    target: targetPropType.isRequired,
    container: targetPropType,
    isOpen: propTypes.bool,
    disabled: propTypes.bool,
    hideArrow: propTypes.bool,
    boundariesElement: propTypes.oneOfType([propTypes.string, DOMElement]),
    className: propTypes.string,
    innerClassName: propTypes.string,
    arrowClassName: propTypes.string,
    popperClassName: propTypes.string,
    cssModule: propTypes.object,
    toggle: propTypes.func,
    autohide: propTypes.bool,
    placementPrefix: propTypes.string,
    delay: propTypes.oneOfType([propTypes.shape({
      show: propTypes.number,
      hide: propTypes.number
    }), propTypes.number]),
    modifiers: propTypes.object,
    offset: propTypes.oneOfType([propTypes.string, propTypes.number]),
    innerRef: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.object]),
    trigger: propTypes.string,
    fade: propTypes.bool,
    flip: propTypes.bool
  };
  var DEFAULT_DELAYS = {
    show: 0,
    hide: 50
  };
  var defaultProps$B = {
    isOpen: false,
    hideArrow: false,
    autohide: false,
    delay: DEFAULT_DELAYS,
    toggle: function toggle() {},
    trigger: 'click',
    fade: true
  };

  function isInDOMSubtree(element, subtreeRoot) {
    return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
  }

  function isInDOMSubtrees(element, subtreeRoots) {
    if (subtreeRoots === void 0) {
      subtreeRoots = [];
    }

    return subtreeRoots && subtreeRoots.length && subtreeRoots.filter(function (subTreeRoot) {
      return isInDOMSubtree(element, subTreeRoot);
    })[0];
  }

  var TooltipPopoverWrapper = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(TooltipPopoverWrapper, _React$Component);

    function TooltipPopoverWrapper(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this._targets = [];
      _this.currentTargetElement = null;
      _this.addTargetEvents = _this.addTargetEvents.bind(_assertThisInitialized(_this));
      _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
      _this.removeTargetEvents = _this.removeTargetEvents.bind(_assertThisInitialized(_this));
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      _this.showWithDelay = _this.showWithDelay.bind(_assertThisInitialized(_this));
      _this.hideWithDelay = _this.hideWithDelay.bind(_assertThisInitialized(_this));
      _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_assertThisInitialized(_this));
      _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_assertThisInitialized(_this));
      _this.show = _this.show.bind(_assertThisInitialized(_this));
      _this.hide = _this.hide.bind(_assertThisInitialized(_this));
      _this.onEscKeyDown = _this.onEscKeyDown.bind(_assertThisInitialized(_this));
      _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
      _this.state = {
        isOpen: props.isOpen
      };
      _this._isMounted = false;
      return _this;
    }

    var _proto = TooltipPopoverWrapper.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this._isMounted = true;
      this.updateTarget();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this._isMounted = false;
      this.removeTargetEvents();
      this._targets = null;
      this.clearShowTimeout();
      this.clearHideTimeout();
    };

    TooltipPopoverWrapper.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
      if (props.isOpen && !state.isOpen) {
        return {
          isOpen: props.isOpen
        };
      } else return null;
    };

    _proto.onMouseOverTooltipContent = function onMouseOverTooltipContent() {
      if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }

        if (this.state.isOpen && !this.props.isOpen) {
          this.toggle();
        }
      }
    };

    _proto.onMouseLeaveTooltipContent = function onMouseLeaveTooltipContent(e) {
      if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
        if (this._showTimeout) {
          this.clearShowTimeout();
        }

        e.persist();
        this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
      }
    };

    _proto.onEscKeyDown = function onEscKeyDown(e) {
      if (e.key === 'Escape') {
        this.hide(e);
      }
    };

    _proto.getRef = function getRef(ref) {
      var innerRef = this.props.innerRef;

      if (innerRef) {
        if (typeof innerRef === 'function') {
          innerRef(ref);
        } else if (typeof innerRef === 'object') {
          innerRef.current = ref;
        }
      }

      this._popover = ref;
    };

    _proto.getDelay = function getDelay(key) {
      var delay = this.props.delay;

      if (typeof delay === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }

      return delay;
    };

    _proto.show = function show(e) {
      if (!this.props.isOpen) {
        this.clearShowTimeout();
        this.currentTargetElement = e ? e.currentTarget || e.target : null;

        if (e && e.composedPath && typeof e.composedPath === 'function') {
          var path = e.composedPath();
          this.currentTargetElement = path && path[0] || this.currentTargetElement;
        }

        this.toggle(e);
      }
    };

    _proto.showWithDelay = function showWithDelay(e) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
    };

    _proto.hide = function hide(e) {
      if (this.props.isOpen) {
        this.clearHideTimeout();
        this.currentTargetElement = null;
        this.toggle(e);
      }
    };

    _proto.hideWithDelay = function hideWithDelay(e) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }

      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    };

    _proto.clearShowTimeout = function clearShowTimeout() {
      clearTimeout(this._showTimeout);
      this._showTimeout = undefined;
    };

    _proto.clearHideTimeout = function clearHideTimeout() {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = undefined;
    };

    _proto.handleDocumentClick = function handleDocumentClick(e) {
      var triggers = this.props.trigger.split(' ');

      if (triggers.indexOf('legacy') > -1 && (this.props.isOpen || isInDOMSubtrees(e.target, this._targets))) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }

        if (this.props.isOpen && !isInDOMSubtree(e.target, this._popover)) {
          this.hideWithDelay(e);
        } else if (!this.props.isOpen) {
          this.showWithDelay(e);
        }
      } else if (triggers.indexOf('click') > -1 && isInDOMSubtrees(e.target, this._targets)) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }

        if (!this.props.isOpen) {
          this.showWithDelay(e);
        } else {
          this.hideWithDelay(e);
        }
      }
    };

    _proto.addEventOnTargets = function addEventOnTargets(type, handler, isBubble) {
      this._targets.forEach(function (target) {
        target.addEventListener(type, handler, isBubble);
      });
    };

    _proto.removeEventOnTargets = function removeEventOnTargets(type, handler, isBubble) {
      this._targets.forEach(function (target) {
        target.removeEventListener(type, handler, isBubble);
      });
    };

    _proto.addTargetEvents = function addTargetEvents() {
      if (this.props.trigger) {
        var triggers = this.props.trigger.split(' ');

        if (triggers.indexOf('manual') === -1) {
          if (triggers.indexOf('click') > -1 || triggers.indexOf('legacy') > -1) {
            document.addEventListener('click', this.handleDocumentClick, true);
          }

          if (this._targets && this._targets.length) {
            if (triggers.indexOf('hover') > -1) {
              this.addEventOnTargets('mouseover', this.showWithDelay, true);
              this.addEventOnTargets('mouseout', this.hideWithDelay, true);
            }

            if (triggers.indexOf('focus') > -1) {
              this.addEventOnTargets('focusin', this.show, true);
              this.addEventOnTargets('focusout', this.hide, true);
            }

            this.addEventOnTargets('keydown', this.onEscKeyDown, true);
          }
        }
      }
    };

    _proto.removeTargetEvents = function removeTargetEvents() {
      if (this._targets) {
        this.removeEventOnTargets('mouseover', this.showWithDelay, true);
        this.removeEventOnTargets('mouseout', this.hideWithDelay, true);
        this.removeEventOnTargets('keydown', this.onEscKeyDown, true);
        this.removeEventOnTargets('focusin', this.show, true);
        this.removeEventOnTargets('focusout', this.hide, true);
      }

      document.removeEventListener('click', this.handleDocumentClick, true);
    };

    _proto.updateTarget = function updateTarget() {
      var newTarget = getTarget(this.props.target, true);

      if (newTarget !== this._targets) {
        this.removeTargetEvents();
        this._targets = newTarget ? Array.from(newTarget) : [];
        this.currentTargetElement = this.currentTargetElement || this._targets[0];
        this.addTargetEvents();
      }
    };

    _proto.toggle = function toggle(e) {
      if (this.props.disabled || !this._isMounted) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    };

    _proto.render = function render() {
      var _this2 = this;

      if (!this.props.isOpen) {
        return null;
      }

      this.updateTarget();
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          innerClassName = _this$props.innerClassName,
          isOpen = _this$props.isOpen,
          hideArrow = _this$props.hideArrow,
          boundariesElement = _this$props.boundariesElement,
          placement = _this$props.placement,
          placementPrefix = _this$props.placementPrefix,
          arrowClassName = _this$props.arrowClassName,
          popperClassName = _this$props.popperClassName,
          container = _this$props.container,
          modifiers = _this$props.modifiers,
          offset = _this$props.offset,
          fade = _this$props.fade,
          flip = _this$props.flip,
          children = _this$props.children;
      var attributes = omit(this.props, Object.keys(propTypes$F));
      var popperClasses = mapToCssModules(popperClassName, cssModule);
      var classes = mapToCssModules(innerClassName, cssModule);
      return /*#__PURE__*/React__default.createElement(PopperContent, {
        className: className,
        target: this.currentTargetElement || this._targets[0],
        isOpen: isOpen,
        hideArrow: hideArrow,
        boundariesElement: boundariesElement,
        placement: placement,
        placementPrefix: placementPrefix,
        arrowClassName: arrowClassName,
        popperClassName: popperClasses,
        container: container,
        modifiers: modifiers,
        offset: offset,
        cssModule: cssModule,
        fade: fade,
        flip: flip
      }, function (_ref) {
        var scheduleUpdate = _ref.scheduleUpdate;
        return /*#__PURE__*/React__default.createElement("div", _extends({}, attributes, {
          ref: _this2.getRef,
          className: classes,
          role: "tooltip",
          onMouseOver: _this2.onMouseOverTooltipContent,
          onMouseLeave: _this2.onMouseLeaveTooltipContent,
          onKeyDown: _this2.onEscKeyDown
        }), typeof children === 'function' ? children({
          scheduleUpdate: scheduleUpdate
        }) : children);
      });
    };

    return TooltipPopoverWrapper;
  }(React__default.Component);

  TooltipPopoverWrapper.propTypes = propTypes$F;
  TooltipPopoverWrapper.defaultProps = defaultProps$B;

  var defaultProps$C = {
    placement: 'right',
    placementPrefix: 'bs-popover',
    trigger: 'click'
  };

  var Popover = function Popover(props) {
    var popperClasses = classnames('popover', 'show', props.popperClassName);
    var classes = classnames('popover-inner', props.innerClassName);
    return /*#__PURE__*/React__default.createElement(TooltipPopoverWrapper, _extends({}, props, {
      popperClassName: popperClasses,
      innerClassName: classes
    }));
  };

  Popover.propTypes = propTypes$F;
  Popover.defaultProps = defaultProps$C;

  var omitKeys = ['defaultOpen'];

  var UncontrolledPopover = /*#__PURE__*/function (_Component) {
    _inheritsLoose(UncontrolledPopover, _Component);

    function UncontrolledPopover(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.state = {
        isOpen: props.defaultOpen || false
      };
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = UncontrolledPopover.prototype;

    _proto.toggle = function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    _proto.render = function render() {
      return /*#__PURE__*/React__default.createElement(Popover, _extends({
        isOpen: this.state.isOpen,
        toggle: this.toggle
      }, omit(this.props, omitKeys)));
    };

    return UncontrolledPopover;
  }(React.Component);
  UncontrolledPopover.propTypes = _extends({
    defaultOpen: propTypes.bool
  }, Popover.propTypes);

  var propTypes$G = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$D = {
    tag: 'h3'
  };

  var PopoverHeader = function PopoverHeader(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'popover-header'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  PopoverHeader.propTypes = propTypes$G;
  PopoverHeader.defaultProps = defaultProps$D;

  var propTypes$H = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$E = {
    tag: 'div'
  };

  var PopoverBody = function PopoverBody(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'popover-body'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  PopoverBody.propTypes = propTypes$H;
  PopoverBody.defaultProps = defaultProps$E;

  var propTypes$I = {
    children: propTypes.node,
    bar: propTypes.bool,
    multi: propTypes.bool,
    tag: tagPropType,
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    min: propTypes.oneOfType([propTypes.string, propTypes.number]),
    max: propTypes.oneOfType([propTypes.string, propTypes.number]),
    animated: propTypes.bool,
    striped: propTypes.bool,
    color: propTypes.string,
    className: propTypes.string,
    barClassName: propTypes.string,
    cssModule: propTypes.object,
    style: propTypes.object,
    barAriaValueText: propTypes.string,
    barAriaLabelledBy: propTypes.string
  };
  var defaultProps$F = {
    tag: 'div',
    value: 0,
    min: 0,
    max: 100,
    style: {}
  };

  var Progress = function Progress(props) {
    var children = props.children,
        className = props.className,
        barClassName = props.barClassName,
        cssModule = props.cssModule,
        value = props.value,
        min = props.min,
        max = props.max,
        animated = props.animated,
        striped = props.striped,
        color = props.color,
        bar = props.bar,
        multi = props.multi,
        Tag = props.tag,
        style = props.style,
        barAriaValueText = props.barAriaValueText,
        barAriaLabelledBy = props.barAriaLabelledBy,
        attributes = _objectWithoutPropertiesLoose(props, ["children", "className", "barClassName", "cssModule", "value", "min", "max", "animated", "striped", "color", "bar", "multi", "tag", "style", "barAriaValueText", "barAriaLabelledBy"]);

    var percent = toNumber(value) / toNumber(max) * 100;
    var progressClasses = mapToCssModules(classnames(className, 'progress'), cssModule);
    var progressBarClasses = mapToCssModules(classnames('progress-bar', bar ? className || barClassName : barClassName, animated ? 'progress-bar-animated' : null, color ? "bg-" + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);
    var ProgressBar = multi ? children : /*#__PURE__*/React__default.createElement("div", _extends({}, attributes, {
      className: progressBarClasses,
      style: _extends({}, style, {
        width: percent + "%"
      }),
      role: "progressbar",
      "aria-valuenow": value,
      "aria-valuemin": min,
      "aria-valuemax": max,
      "aria-valuetext": barAriaValueText,
      "aria-labelledby": barAriaLabelledBy,
      children: children
    }));

    if (bar) {
      return ProgressBar;
    }

    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: progressClasses,
      children: ProgressBar
    }));
  };

  Progress.propTypes = propTypes$I;
  Progress.defaultProps = defaultProps$F;

  var propTypes$J = {
    children: propTypes.node.isRequired,
    node: propTypes.any
  };

  var Portal$1 = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(Portal, _React$Component);

    function Portal() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Portal.prototype;

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }

      this.defaultNode = null;
    };

    _proto.render = function render() {
      if (!canUseDOM) {
        return null;
      }

      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      return /*#__PURE__*/ReactDOM.createPortal(this.props.children, this.props.node || this.defaultNode);
    };

    return Portal;
  }(React__default.Component);

  Portal$1.propTypes = propTypes$J;

  function noop$2() {}

  var FadePropTypes = propTypes.shape(Fade.propTypes);
  var propTypes$K = {
    isOpen: propTypes.bool,
    autoFocus: propTypes.bool,
    centered: propTypes.bool,
    scrollable: propTypes.bool,
    size: propTypes.string,
    toggle: propTypes.func,
    keyboard: propTypes.bool,
    role: propTypes.string,
    labelledBy: propTypes.string,
    backdrop: propTypes.oneOfType([propTypes.bool, propTypes.oneOf(['static'])]),
    onEnter: propTypes.func,
    onExit: propTypes.func,
    onOpened: propTypes.func,
    onClosed: propTypes.func,
    children: propTypes.node,
    className: propTypes.string,
    wrapClassName: propTypes.string,
    modalClassName: propTypes.string,
    backdropClassName: propTypes.string,
    contentClassName: propTypes.string,
    external: propTypes.node,
    fade: propTypes.bool,
    cssModule: propTypes.object,
    zIndex: propTypes.oneOfType([propTypes.number, propTypes.string]),
    backdropTransition: FadePropTypes,
    modalTransition: FadePropTypes,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func]),
    unmountOnClose: propTypes.bool,
    returnFocusAfterClose: propTypes.bool,
    container: targetPropType
  };
  var propsToOmit = Object.keys(propTypes$K);
  var defaultProps$G = {
    isOpen: false,
    autoFocus: true,
    centered: false,
    scrollable: false,
    role: 'dialog',
    backdrop: true,
    keyboard: true,
    zIndex: 1050,
    fade: true,
    onOpened: noop$2,
    onClosed: noop$2,
    modalTransition: {
      timeout: TransitionTimeouts.Modal
    },
    backdropTransition: {
      mountOnEnter: true,
      timeout: TransitionTimeouts.Fade // uses standard fade transition

    },
    unmountOnClose: true,
    returnFocusAfterClose: true,
    container: 'body'
  };

  var Modal = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(Modal, _React$Component);

    function Modal(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this._element = null;
      _this._originalBodyPadding = null;
      _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
      _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
      _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
      _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
      _this.handleStaticBackdropAnimation = _this.handleStaticBackdropAnimation.bind(_assertThisInitialized(_this));
      _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
      _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
      _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
      _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
      _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind(_assertThisInitialized(_this));
      _this.state = {
        isOpen: false,
        showStaticBackdropAnimation: false
      };
      return _this;
    }

    var _proto = Modal.prototype;

    _proto.componentDidMount = function componentDidMount() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          autoFocus = _this$props.autoFocus,
          onEnter = _this$props.onEnter;

      if (isOpen) {
        this.init();
        this.setState({
          isOpen: true
        });

        if (autoFocus) {
          this.setFocus();
        }
      }

      if (onEnter) {
        onEnter();
      }

      this._isMounted = true;
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      if (this.props.isOpen && !prevProps.isOpen) {
        this.init();
        this.setState({
          isOpen: true
        }); // let render() renders Modal Dialog first

        return;
      } // now Modal Dialog is rendered and we can refer this._element and this._dialog


      if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
        this.setFocus();
      }

      if (this._element && prevProps.zIndex !== this.props.zIndex) {
        this._element.style.zIndex = this.props.zIndex;
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.clearBackdropAnimationTimeout();

      if (this.props.onExit) {
        this.props.onExit();
      }

      if (this._element) {
        this.destroy();

        if (this.props.isOpen || this.state.isOpen) {
          this.close();
        }
      }

      this._isMounted = false;
    };

    _proto.onOpened = function onOpened(node, isAppearing) {
      this.props.onOpened();
      (this.props.modalTransition.onEntered || noop$2)(node, isAppearing);
    };

    _proto.onClosed = function onClosed(node) {
      var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

      this.props.onClosed();
      (this.props.modalTransition.onExited || noop$2)(node);

      if (unmountOnClose) {
        this.destroy();
      }

      this.close();

      if (this._isMounted) {
        this.setState({
          isOpen: false
        });
      }
    };

    _proto.setFocus = function setFocus() {
      if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
        this._dialog.parentNode.focus();
      }
    };

    _proto.getFocusableChildren = function getFocusableChildren() {
      return this._element.querySelectorAll(focusableElements.join(', '));
    };

    _proto.getFocusedChild = function getFocusedChild() {
      var currentFocus;
      var focusableChildren = this.getFocusableChildren();

      try {
        currentFocus = document.activeElement;
      } catch (err) {
        currentFocus = focusableChildren[0];
      }

      return currentFocus;
    } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
    ;

    _proto.handleBackdropClick = function handleBackdropClick(e) {
      if (e.target === this._mouseDownElement) {
        e.stopPropagation();
        var backdrop = this._dialog ? this._dialog.parentNode : null;

        if (backdrop && e.target === backdrop && this.props.backdrop === 'static') {
          this.handleStaticBackdropAnimation();
        }

        if (!this.props.isOpen || this.props.backdrop !== true) return;

        if (backdrop && e.target === backdrop && this.props.toggle) {
          this.props.toggle(e);
        }
      }
    };

    _proto.handleTab = function handleTab(e) {
      if (e.which !== 9) return;
      var focusableChildren = this.getFocusableChildren();
      var totalFocusable = focusableChildren.length;
      if (totalFocusable === 0) return;
      var currentFocus = this.getFocusedChild();
      var focusedIndex = 0;

      for (var i = 0; i < totalFocusable; i += 1) {
        if (focusableChildren[i] === currentFocus) {
          focusedIndex = i;
          break;
        }
      }

      if (e.shiftKey && focusedIndex === 0) {
        e.preventDefault();
        focusableChildren[totalFocusable - 1].focus();
      } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
        e.preventDefault();
        focusableChildren[0].focus();
      }
    };

    _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
      this._mouseDownElement = e.target;
    };

    _proto.handleEscape = function handleEscape(e) {
      if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
        if (this.props.keyboard) {
          e.preventDefault();
          e.stopPropagation();
          this.props.toggle(e);
        } else if (this.props.backdrop === 'static') {
          e.preventDefault();
          e.stopPropagation();
          this.handleStaticBackdropAnimation();
        }
      }
    };

    _proto.handleStaticBackdropAnimation = function handleStaticBackdropAnimation() {
      var _this2 = this;

      this.clearBackdropAnimationTimeout();
      this.setState({
        showStaticBackdropAnimation: true
      });
      this._backdropAnimationTimeout = setTimeout(function () {
        _this2.setState({
          showStaticBackdropAnimation: false
        });
      }, 100);
    };

    _proto.init = function init() {
      try {
        this._triggeringElement = document.activeElement;
      } catch (err) {
        this._triggeringElement = null;
      }

      if (!this._element) {
        this._element = document.createElement('div');

        this._element.setAttribute('tabindex', '-1');

        this._element.style.position = 'relative';
        this._element.style.zIndex = this.props.zIndex;
        this._mountContainer = getTarget(this.props.container);

        this._mountContainer.appendChild(this._element);
      }

      this._originalBodyPadding = getOriginalBodyPadding();
      conditionallyUpdateScrollbar();

      if (Modal.openCount === 0) {
        document.body.className = classnames(document.body.className, mapToCssModules('modal-open', this.props.cssModule));
      }

      Modal.openCount += 1;
    };

    _proto.destroy = function destroy() {
      if (this._element) {
        this._mountContainer.removeChild(this._element);

        this._element = null;
      }

      this.manageFocusAfterClose();
    };

    _proto.manageFocusAfterClose = function manageFocusAfterClose() {
      if (this._triggeringElement) {
        var returnFocusAfterClose = this.props.returnFocusAfterClose;
        if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
        this._triggeringElement = null;
      }
    };

    _proto.close = function close() {
      if (Modal.openCount <= 1) {
        var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

        var modalOpenClassNameRegex = new RegExp("(^| )" + modalOpenClassName + "( |$)");
        document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
      }

      this.manageFocusAfterClose();
      Modal.openCount = Math.max(0, Modal.openCount - 1);
      setScrollbarWidth(this._originalBodyPadding);
    };

    _proto.renderModalDialog = function renderModalDialog() {
      var _classNames,
          _this3 = this;

      var attributes = omit(this.props, propsToOmit);
      var dialogBaseClass = 'modal-dialog';
      return /*#__PURE__*/React__default.createElement("div", _extends({}, attributes, {
        className: mapToCssModules(classnames(dialogBaseClass, this.props.className, (_classNames = {}, _classNames["modal-" + this.props.size] = this.props.size, _classNames[dialogBaseClass + "-centered"] = this.props.centered, _classNames[dialogBaseClass + "-scrollable"] = this.props.scrollable, _classNames)), this.props.cssModule),
        role: "document",
        ref: function ref(c) {
          _this3._dialog = c;
        }
      }), /*#__PURE__*/React__default.createElement("div", {
        className: mapToCssModules(classnames('modal-content', this.props.contentClassName), this.props.cssModule)
      }, this.props.children));
    };

    _proto.render = function render() {
      var unmountOnClose = this.props.unmountOnClose;

      if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
        var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
        this._element.style.display = isModalHidden ? 'none' : 'block';
        var _this$props2 = this.props,
            wrapClassName = _this$props2.wrapClassName,
            modalClassName = _this$props2.modalClassName,
            backdropClassName = _this$props2.backdropClassName,
            cssModule = _this$props2.cssModule,
            isOpen = _this$props2.isOpen,
            backdrop = _this$props2.backdrop,
            role = _this$props2.role,
            labelledBy = _this$props2.labelledBy,
            external = _this$props2.external,
            innerRef = _this$props2.innerRef;
        var modalAttributes = {
          onClick: this.handleBackdropClick,
          onMouseDown: this.handleBackdropMouseDown,
          onKeyUp: this.handleEscape,
          onKeyDown: this.handleTab,
          style: {
            display: 'block'
          },
          'aria-labelledby': labelledBy,
          role: role,
          tabIndex: '-1'
        };
        var hasTransition = this.props.fade;

        var modalTransition = _extends({}, Fade.defaultProps, this.props.modalTransition, {
          baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
          timeout: hasTransition ? this.props.modalTransition.timeout : 0
        });

        var backdropTransition = _extends({}, Fade.defaultProps, this.props.backdropTransition, {
          baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
          timeout: hasTransition ? this.props.backdropTransition.timeout : 0
        });

        var Backdrop = backdrop && (hasTransition ? /*#__PURE__*/React__default.createElement(Fade, _extends({}, backdropTransition, {
          in: isOpen && !!backdrop,
          cssModule: cssModule,
          className: mapToCssModules(classnames('modal-backdrop', backdropClassName), cssModule)
        })) : /*#__PURE__*/React__default.createElement("div", {
          className: mapToCssModules(classnames('modal-backdrop', 'show', backdropClassName), cssModule)
        }));
        return /*#__PURE__*/React__default.createElement(Portal$1, {
          node: this._element
        }, /*#__PURE__*/React__default.createElement("div", {
          className: mapToCssModules(wrapClassName)
        }, /*#__PURE__*/React__default.createElement(Fade, _extends({}, modalAttributes, modalTransition, {
          in: isOpen,
          onEntered: this.onOpened,
          onExited: this.onClosed,
          cssModule: cssModule,
          className: mapToCssModules(classnames('modal', modalClassName, this.state.showStaticBackdropAnimation && 'modal-static'), cssModule),
          innerRef: innerRef
        }), external, this.renderModalDialog()), Backdrop));
      }

      return null;
    };

    _proto.clearBackdropAnimationTimeout = function clearBackdropAnimationTimeout() {
      if (this._backdropAnimationTimeout) {
        clearTimeout(this._backdropAnimationTimeout);
        this._backdropAnimationTimeout = undefined;
      }
    };

    return Modal;
  }(React__default.Component);

  Modal.propTypes = propTypes$K;
  Modal.defaultProps = defaultProps$G;
  Modal.openCount = 0;

  var propTypes$L = {
    tag: tagPropType,
    wrapTag: tagPropType,
    toggle: propTypes.func,
    className: propTypes.string,
    cssModule: propTypes.object,
    children: propTypes.node,
    closeAriaLabel: propTypes.string,
    charCode: propTypes.oneOfType([propTypes.string, propTypes.number]),
    close: propTypes.object
  };
  var defaultProps$H = {
    tag: 'h5',
    wrapTag: 'div',
    closeAriaLabel: 'Close',
    charCode: 215
  };

  var ModalHeader = function ModalHeader(props) {
    var closeButton;

    var className = props.className,
        cssModule = props.cssModule,
        children = props.children,
        toggle = props.toggle,
        Tag = props.tag,
        WrapTag = props.wrapTag,
        closeAriaLabel = props.closeAriaLabel,
        charCode = props.charCode,
        close = props.close,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "charCode", "close"]);

    var classes = mapToCssModules(classnames(className, 'modal-header'), cssModule);

    if (!close && toggle) {
      var closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
      closeButton = /*#__PURE__*/React__default.createElement("button", {
        type: "button",
        onClick: toggle,
        className: mapToCssModules('close', cssModule),
        "aria-label": closeAriaLabel
      }, /*#__PURE__*/React__default.createElement("span", {
        "aria-hidden": "true"
      }, closeIcon));
    }

    return /*#__PURE__*/React__default.createElement(WrapTag, _extends({}, attributes, {
      className: classes
    }), /*#__PURE__*/React__default.createElement(Tag, {
      className: mapToCssModules('modal-title', cssModule)
    }, children), close || closeButton);
  };

  ModalHeader.propTypes = propTypes$L;
  ModalHeader.defaultProps = defaultProps$H;

  var propTypes$M = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$I = {
    tag: 'div'
  };

  var ModalBody = function ModalBody(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'modal-body'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ModalBody.propTypes = propTypes$M;
  ModalBody.defaultProps = defaultProps$I;

  var propTypes$N = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$J = {
    tag: 'div'
  };

  var ModalFooter = function ModalFooter(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'modal-footer'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ModalFooter.propTypes = propTypes$N;
  ModalFooter.defaultProps = defaultProps$J;

  var defaultProps$K = {
    placement: 'top',
    autohide: true,
    placementPrefix: 'bs-tooltip',
    trigger: 'hover focus'
  };

  var Tooltip = function Tooltip(props) {
    var popperClasses = classnames('tooltip', 'show', props.popperClassName);
    var classes = classnames('tooltip-inner', props.innerClassName);
    return /*#__PURE__*/React__default.createElement(TooltipPopoverWrapper, _extends({}, props, {
      popperClassName: popperClasses,
      innerClassName: classes
    }));
  };

  Tooltip.propTypes = propTypes$F;
  Tooltip.defaultProps = defaultProps$K;

  var propTypes$O = {
    className: propTypes.string,
    cssModule: propTypes.object,
    size: propTypes.string,
    bordered: propTypes.bool,
    borderless: propTypes.bool,
    striped: propTypes.bool,
    dark: propTypes.bool,
    hover: propTypes.bool,
    responsive: propTypes.oneOfType([propTypes.bool, propTypes.string]),
    tag: tagPropType,
    responsiveTag: tagPropType,
    innerRef: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.object])
  };
  var defaultProps$L = {
    tag: 'table',
    responsiveTag: 'div'
  };

  var Table = function Table(props) {
    var className = props.className,
        cssModule = props.cssModule,
        size = props.size,
        bordered = props.bordered,
        borderless = props.borderless,
        striped = props.striped,
        dark = props.dark,
        hover = props.hover,
        responsive = props.responsive,
        Tag = props.tag,
        ResponsiveTag = props.responsiveTag,
        innerRef = props.innerRef,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "size", "bordered", "borderless", "striped", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"]);

    var classes = mapToCssModules(classnames(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
    var table = /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));

    if (responsive) {
      var responsiveClassName = mapToCssModules(responsive === true ? 'table-responsive' : "table-responsive-" + responsive, cssModule);
      return /*#__PURE__*/React__default.createElement(ResponsiveTag, {
        className: responsiveClassName
      }, table);
    }

    return table;
  };

  Table.propTypes = propTypes$O;
  Table.defaultProps = defaultProps$L;

  var propTypes$P = {
    tag: tagPropType,
    flush: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object,
    horizontal: propTypes.oneOfType([propTypes.bool, propTypes.string])
  };
  var defaultProps$M = {
    tag: 'ul',
    horizontal: false
  };

  var getHorizontalClass = function getHorizontalClass(horizontal) {
    if (horizontal === false) {
      return false;
    } else if (horizontal === true || horizontal === "xs") {
      return "list-group-horizontal";
    }

    return "list-group-horizontal-" + horizontal;
  };

  var ListGroup = function ListGroup(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        flush = props.flush,
        horizontal = props.horizontal,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "flush", "horizontal"]);

    var classes = mapToCssModules(classnames(className, 'list-group', // list-group-horizontal cannot currently be mixed with list-group-flush
    // we only try to apply horizontal classes if flush is false
    flush ? 'list-group-flush' : getHorizontalClass(horizontal)), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ListGroup.propTypes = propTypes$P;
  ListGroup.defaultProps = defaultProps$M;

  var propTypes$Q = {
    children: propTypes.node,
    inline: propTypes.bool,
    tag: tagPropType,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$N = {
    tag: 'form'
  };

  var Form = /*#__PURE__*/function (_Component) {
    _inheritsLoose(Form, _Component);

    function Form(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
      _this.submit = _this.submit.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = Form.prototype;

    _proto.getRef = function getRef(ref) {
      if (this.props.innerRef) {
        this.props.innerRef(ref);
      }

      this.ref = ref;
    };

    _proto.submit = function submit() {
      if (this.ref) {
        this.ref.submit();
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          inline = _this$props.inline,
          Tag = _this$props.tag,
          innerRef = _this$props.innerRef,
          attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "inline", "tag", "innerRef"]);

      var classes = mapToCssModules(classnames(className, inline ? 'form-inline' : false), cssModule);
      return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
        ref: innerRef,
        className: classes
      }));
    };

    return Form;
  }(React.Component);

  Form.propTypes = propTypes$Q;
  Form.defaultProps = defaultProps$N;

  var propTypes$R = {
    children: propTypes.node,
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object,
    valid: propTypes.bool,
    tooltip: propTypes.bool
  };
  var defaultProps$O = {
    tag: 'div',
    valid: undefined
  };

  var FormFeedback = function FormFeedback(props) {
    var className = props.className,
        cssModule = props.cssModule,
        valid = props.valid,
        tooltip = props.tooltip,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "valid", "tooltip", "tag"]);

    var validMode = tooltip ? 'tooltip' : 'feedback';
    var classes = mapToCssModules(classnames(className, valid ? "valid-" + validMode : "invalid-" + validMode), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  FormFeedback.propTypes = propTypes$R;
  FormFeedback.defaultProps = defaultProps$O;

  var propTypes$S = {
    children: propTypes.node,
    row: propTypes.bool,
    check: propTypes.bool,
    inline: propTypes.bool,
    disabled: propTypes.bool,
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$P = {
    tag: 'div'
  };

  var FormGroup = function FormGroup(props) {
    var className = props.className,
        cssModule = props.cssModule,
        row = props.row,
        disabled = props.disabled,
        check = props.check,
        inline = props.inline,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "row", "disabled", "check", "inline", "tag"]);

    var classes = mapToCssModules(classnames(className, row ? 'row' : false, check ? 'form-check' : 'form-group', check && inline ? 'form-check-inline' : false, check && disabled ? 'disabled' : false), cssModule);

    if (Tag === 'fieldset') {
      attributes.disabled = disabled;
    }

    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  FormGroup.propTypes = propTypes$S;
  FormGroup.defaultProps = defaultProps$P;

  var propTypes$T = {
    children: propTypes.node,
    inline: propTypes.bool,
    tag: tagPropType,
    color: propTypes.string,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$Q = {
    tag: 'small',
    color: 'muted'
  };

  var FormText = function FormText(props) {
    var className = props.className,
        cssModule = props.cssModule,
        inline = props.inline,
        color = props.color,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "inline", "color", "tag"]);

    var classes = mapToCssModules(classnames(className, !inline ? 'form-text' : false, color ? "text-" + color : false), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  FormText.propTypes = propTypes$T;
  FormText.defaultProps = defaultProps$Q;

  var propTypes$U = {
    children: propTypes.node,
    type: propTypes.string,
    size: propTypes.string,
    bsSize: propTypes.string,
    valid: propTypes.bool,
    invalid: propTypes.bool,
    tag: tagPropType,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
    plaintext: propTypes.bool,
    addon: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$R = {
    type: 'text'
  };

  var Input = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(Input, _React$Component);

    function Input(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
      _this.focus = _this.focus.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = Input.prototype;

    _proto.getRef = function getRef(ref) {
      if (this.props.innerRef) {
        this.props.innerRef(ref);
      }

      this.ref = ref;
    };

    _proto.focus = function focus() {
      if (this.ref) {
        this.ref.focus();
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          type = _this$props.type,
          bsSize = _this$props.bsSize,
          valid = _this$props.valid,
          invalid = _this$props.invalid,
          tag = _this$props.tag,
          addon = _this$props.addon,
          plaintext = _this$props.plaintext,
          innerRef = _this$props.innerRef,
          attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"]);

      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
      var isNotaNumber = new RegExp('\\D', 'g');
      var fileInput = type === 'file';
      var textareaInput = type === 'textarea';
      var selectInput = type === 'select';
      var rangeInput = type === 'range';
      var Tag = tag || (selectInput || textareaInput ? type : 'input');
      var formControlClass = 'form-control';

      if (plaintext) {
        formControlClass = formControlClass + "-plaintext";
        Tag = tag || 'input';
      } else if (fileInput) {
        formControlClass = formControlClass + "-file";
      } else if (rangeInput) {
        formControlClass = formControlClass + "-range";
      } else if (checkInput) {
        if (addon) {
          formControlClass = null;
        } else {
          formControlClass = 'form-check-input';
        }
      }

      if (attributes.size && isNotaNumber.test(attributes.size)) {
        warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
        bsSize = attributes.size;
        delete attributes.size;
      }

      var classes = mapToCssModules(classnames(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);

      if (Tag === 'input' || tag && typeof tag === 'function') {
        attributes.type = type;
      }

      if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
        warnOnce("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
        delete attributes.children;
      }

      return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
        ref: innerRef,
        className: classes,
        "aria-invalid": invalid
      }));
    };

    return Input;
  }(React__default.Component);

  Input.propTypes = propTypes$U;
  Input.defaultProps = defaultProps$R;

  var propTypes$V = {
    tag: tagPropType,
    size: propTypes.string,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$S = {
    tag: 'div'
  };

  var InputGroup = function InputGroup(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        size = props.size,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "size"]);

    var classes = mapToCssModules(classnames(className, 'input-group', size ? "input-group-" + size : null), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  InputGroup.propTypes = propTypes$V;
  InputGroup.defaultProps = defaultProps$S;

  var propTypes$W = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$T = {
    tag: 'span'
  };

  var InputGroupText = function InputGroupText(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'input-group-text'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  InputGroupText.propTypes = propTypes$W;
  InputGroupText.defaultProps = defaultProps$T;

  var propTypes$X = {
    tag: tagPropType,
    addonType: propTypes.oneOf(['prepend', 'append']).isRequired,
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$U = {
    tag: 'div'
  };

  var InputGroupAddon = function InputGroupAddon(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        addonType = props.addonType,
        children = props.children,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "addonType", "children"]);

    var classes = mapToCssModules(classnames(className, 'input-group-' + addonType), cssModule); // Convenience to assist with transition

    if (typeof children === 'string') {
      return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), /*#__PURE__*/React__default.createElement(InputGroupText, {
        children: children
      }));
    }

    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes,
      children: children
    }));
  };

  InputGroupAddon.propTypes = propTypes$X;
  InputGroupAddon.defaultProps = defaultProps$U;

  var propTypes$Y = {
    addonType: propTypes.oneOf(['prepend', 'append']).isRequired,
    children: propTypes.node
  };

  var InputGroupButtonDropdown = function InputGroupButtonDropdown(props) {
    return /*#__PURE__*/React__default.createElement(Dropdown, props);
  };

  InputGroupButtonDropdown.propTypes = propTypes$Y;

  var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl'];
  var stringOrNumberProp$1 = propTypes.oneOfType([propTypes.number, propTypes.string]);
  var columnProps$1 = propTypes.oneOfType([propTypes.bool, propTypes.string, propTypes.number, propTypes.shape({
    size: stringOrNumberProp$1,
    order: stringOrNumberProp$1,
    offset: stringOrNumberProp$1
  })]);
  var propTypes$Z = {
    children: propTypes.node,
    hidden: propTypes.bool,
    check: propTypes.bool,
    size: propTypes.string,
    for: propTypes.string,
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object,
    xs: columnProps$1,
    sm: columnProps$1,
    md: columnProps$1,
    lg: columnProps$1,
    xl: columnProps$1,
    widths: propTypes.array
  };
  var defaultProps$V = {
    tag: 'label',
    widths: colWidths$1
  };

  var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
    if (colSize === true || colSize === '') {
      return isXs ? 'col' : "col-" + colWidth;
    } else if (colSize === 'auto') {
      return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
    }

    return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
  };

  var Label = function Label(props) {
    var className = props.className,
        cssModule = props.cssModule,
        hidden = props.hidden,
        widths = props.widths,
        Tag = props.tag,
        check = props.check,
        size = props.size,
        htmlFor = props.for,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "hidden", "widths", "tag", "check", "size", "for"]);

    var colClasses = [];
    widths.forEach(function (colWidth, i) {
      var columnProp = props[colWidth];
      delete attributes[colWidth];

      if (!columnProp && columnProp !== '') {
        return;
      }

      var isXs = !i;
      var colClass;

      if (isObject(columnProp)) {
        var _classNames;

        var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
        colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);
        colClasses.push(mapToCssModules(classnames((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames))), cssModule);
      } else {
        colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);
        colClasses.push(colClass);
      }
    });
    var classes = mapToCssModules(classnames(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : false, size ? "col-form-label-" + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({
      htmlFor: htmlFor
    }, attributes, {
      className: classes
    }));
  };

  Label.propTypes = propTypes$Z;
  Label.defaultProps = defaultProps$V;

  var propTypes$_ = {
    body: propTypes.bool,
    bottom: propTypes.bool,
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object,
    heading: propTypes.bool,
    left: propTypes.bool,
    list: propTypes.bool,
    middle: propTypes.bool,
    object: propTypes.bool,
    right: propTypes.bool,
    tag: tagPropType,
    top: propTypes.bool
  };

  var Media = function Media(props) {
    var body = props.body,
        bottom = props.bottom,
        className = props.className,
        cssModule = props.cssModule,
        heading = props.heading,
        left = props.left,
        list = props.list,
        middle = props.middle,
        object = props.object,
        right = props.right,
        tag = props.tag,
        top = props.top,
        attributes = _objectWithoutPropertiesLoose(props, ["body", "bottom", "className", "cssModule", "heading", "left", "list", "middle", "object", "right", "tag", "top"]);

    var defaultTag;

    if (heading) {
      defaultTag = 'h4';
    } else if (attributes.href) {
      defaultTag = 'a';
    } else if (attributes.src || object) {
      defaultTag = 'img';
    } else if (list) {
      defaultTag = 'ul';
    } else {
      defaultTag = 'div';
    }

    var Tag = tag || defaultTag;
    var classes = mapToCssModules(classnames(className, {
      'media-body': body,
      'media-heading': heading,
      'media-left': left,
      'media-right': right,
      'media-top': top,
      'media-bottom': bottom,
      'media-middle': middle,
      'media-object': object,
      'media-list': list,
      media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
    }), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  Media.propTypes = propTypes$_;

  var propTypes$$ = {
    children: propTypes.node,
    className: propTypes.string,
    listClassName: propTypes.string,
    cssModule: propTypes.object,
    size: propTypes.string,
    tag: tagPropType,
    listTag: tagPropType,
    'aria-label': propTypes.string
  };
  var defaultProps$W = {
    tag: 'nav',
    listTag: 'ul',
    'aria-label': 'pagination'
  };

  var Pagination = function Pagination(props) {
    var _classNames;

    var className = props.className,
        listClassName = props.listClassName,
        cssModule = props.cssModule,
        size = props.size,
        Tag = props.tag,
        ListTag = props.listTag,
        label = props['aria-label'],
        attributes = _objectWithoutPropertiesLoose(props, ["className", "listClassName", "cssModule", "size", "tag", "listTag", "aria-label"]);

    var classes = mapToCssModules(classnames(className), cssModule);
    var listClasses = mapToCssModules(classnames(listClassName, 'pagination', (_classNames = {}, _classNames["pagination-" + size] = !!size, _classNames)), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, {
      className: classes,
      "aria-label": label
    }, /*#__PURE__*/React__default.createElement(ListTag, _extends({}, attributes, {
      className: listClasses
    })));
  };

  Pagination.propTypes = propTypes$$;
  Pagination.defaultProps = defaultProps$W;

  var propTypes$10 = {
    active: propTypes.bool,
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object,
    disabled: propTypes.bool,
    tag: tagPropType
  };
  var defaultProps$X = {
    tag: 'li'
  };

  var PaginationItem = function PaginationItem(props) {
    var active = props.active,
        className = props.className,
        cssModule = props.cssModule,
        disabled = props.disabled,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["active", "className", "cssModule", "disabled", "tag"]);

    var classes = mapToCssModules(classnames(className, 'page-item', {
      active: active,
      disabled: disabled
    }), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  PaginationItem.propTypes = propTypes$10;
  PaginationItem.defaultProps = defaultProps$X;

  var propTypes$11 = {
    'aria-label': propTypes.string,
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object,
    next: propTypes.bool,
    previous: propTypes.bool,
    first: propTypes.bool,
    last: propTypes.bool,
    tag: tagPropType
  };
  var defaultProps$Y = {
    tag: 'a'
  };

  var PaginationLink = function PaginationLink(props) {
    var className = props.className,
        cssModule = props.cssModule,
        next = props.next,
        previous = props.previous,
        first = props.first,
        last = props.last,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "next", "previous", "first", "last", "tag"]);

    var classes = mapToCssModules(classnames(className, 'page-link'), cssModule);
    var defaultAriaLabel;

    if (previous) {
      defaultAriaLabel = 'Previous';
    } else if (next) {
      defaultAriaLabel = 'Next';
    } else if (first) {
      defaultAriaLabel = 'First';
    } else if (last) {
      defaultAriaLabel = 'Last';
    }

    var ariaLabel = props['aria-label'] || defaultAriaLabel;
    var defaultCaret;

    if (previous) {
      defaultCaret = "\u2039";
    } else if (next) {
      defaultCaret = "\u203A";
    } else if (first) {
      defaultCaret = "\xAB";
    } else if (last) {
      defaultCaret = "\xBB";
    }

    var children = props.children;

    if (children && Array.isArray(children) && children.length === 0) {
      children = null;
    }

    if (!attributes.href && Tag === 'a') {
      Tag = 'button';
    }

    if (previous || next || first || last) {
      children = [/*#__PURE__*/React__default.createElement("span", {
        "aria-hidden": "true",
        key: "caret"
      }, children || defaultCaret), /*#__PURE__*/React__default.createElement("span", {
        className: "sr-only",
        key: "sr"
      }, ariaLabel)];
    }

    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes,
      "aria-label": ariaLabel
    }), children);
  };

  PaginationLink.propTypes = propTypes$11;
  PaginationLink.defaultProps = defaultProps$Y;

  /**
   * TabContext
   * {
   *  activeTabId: PropTypes.any
   * }
   */

  var TabContext = /*#__PURE__*/React__default.createContext({});

  var propTypes$12 = {
    tag: tagPropType,
    activeTab: propTypes.any,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$Z = {
    tag: 'div'
  };

  var TabContent = /*#__PURE__*/function (_Component) {
    _inheritsLoose(TabContent, _Component);

    TabContent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.activeTab !== nextProps.activeTab) {
        return {
          activeTab: nextProps.activeTab
        };
      }

      return null;
    };

    function TabContent(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.state = {
        activeTab: _this.props.activeTab
      };
      return _this;
    }

    var _proto = TabContent.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          Tag = _this$props.tag;
      var attributes = omit(this.props, Object.keys(propTypes$12));
      var classes = mapToCssModules(classnames('tab-content', className), cssModule);
      return /*#__PURE__*/React__default.createElement(TabContext.Provider, {
        value: {
          activeTabId: this.state.activeTab
        }
      }, /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      })));
    };

    return TabContent;
  }(React.Component);
  TabContent.propTypes = propTypes$12;
  TabContent.defaultProps = defaultProps$Z;

  var propTypes$13 = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object,
    tabId: propTypes.any
  };
  var defaultProps$_ = {
    tag: 'div'
  };
  function TabPane(props) {
    var className = props.className,
        cssModule = props.cssModule,
        tabId = props.tabId,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tabId", "tag"]);

    var getClasses = function getClasses(activeTabId) {
      return mapToCssModules(classnames('tab-pane', className, {
        active: tabId === activeTabId
      }), cssModule);
    };

    return /*#__PURE__*/React__default.createElement(TabContext.Consumer, null, function (_ref) {
      var activeTabId = _ref.activeTabId;
      return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
        className: getClasses(activeTabId)
      }));
    });
  }
  TabPane.propTypes = propTypes$13;
  TabPane.defaultProps = defaultProps$_;

  var propTypes$14 = {
    tag: tagPropType,
    fluid: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$$ = {
    tag: 'div'
  };

  var Jumbotron = function Jumbotron(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        fluid = props.fluid,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "fluid"]);

    var classes = mapToCssModules(classnames(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  Jumbotron.propTypes = propTypes$14;
  Jumbotron.defaultProps = defaultProps$$;

  var propTypes$15 = {
    children: propTypes.node,
    className: propTypes.string,
    closeClassName: propTypes.string,
    closeAriaLabel: propTypes.string,
    cssModule: propTypes.object,
    color: propTypes.string,
    fade: propTypes.bool,
    isOpen: propTypes.bool,
    toggle: propTypes.func,
    tag: tagPropType,
    transition: propTypes.shape(Fade.propTypes),
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
  };
  var defaultProps$10 = {
    color: 'success',
    isOpen: true,
    tag: 'div',
    closeAriaLabel: 'Close',
    fade: true,
    transition: _extends({}, Fade.defaultProps, {
      unmountOnExit: true
    })
  };

  function Alert(props) {
    var className = props.className,
        closeClassName = props.closeClassName,
        closeAriaLabel = props.closeAriaLabel,
        cssModule = props.cssModule,
        Tag = props.tag,
        color = props.color,
        isOpen = props.isOpen,
        toggle = props.toggle,
        children = props.children,
        transition = props.transition,
        fade = props.fade,
        innerRef = props.innerRef,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"]);

    var classes = mapToCssModules(classnames(className, 'alert', "alert-" + color, {
      'alert-dismissible': toggle
    }), cssModule);
    var closeClasses = mapToCssModules(classnames('close', closeClassName), cssModule);

    var alertTransition = _extends({}, Fade.defaultProps, transition, {
      baseClass: fade ? transition.baseClass : '',
      timeout: fade ? transition.timeout : 0
    });

    return /*#__PURE__*/React__default.createElement(Fade, _extends({}, attributes, alertTransition, {
      tag: Tag,
      className: classes,
      in: isOpen,
      role: "alert",
      innerRef: innerRef
    }), toggle ? /*#__PURE__*/React__default.createElement("button", {
      type: "button",
      className: closeClasses,
      "aria-label": closeAriaLabel,
      onClick: toggle
    }, /*#__PURE__*/React__default.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7")) : null, children);
  }

  Alert.propTypes = propTypes$15;
  Alert.defaultProps = defaultProps$10;

  var propTypes$16 = {
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object,
    fade: propTypes.bool,
    isOpen: propTypes.bool,
    tag: tagPropType,
    transition: propTypes.shape(Fade.propTypes),
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
  };
  var defaultProps$11 = {
    isOpen: true,
    tag: 'div',
    fade: true,
    transition: _extends({}, Fade.defaultProps, {
      unmountOnExit: true
    })
  };

  function Toast(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        isOpen = props.isOpen,
        children = props.children,
        transition = props.transition,
        fade = props.fade,
        innerRef = props.innerRef,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "isOpen", "children", "transition", "fade", "innerRef"]);

    var classes = mapToCssModules(classnames(className, 'toast'), cssModule);

    var toastTransition = _extends({}, Fade.defaultProps, transition, {
      baseClass: fade ? transition.baseClass : '',
      timeout: fade ? transition.timeout : 0
    });

    return /*#__PURE__*/React__default.createElement(Fade, _extends({}, attributes, toastTransition, {
      tag: Tag,
      className: classes,
      in: isOpen,
      role: "alert",
      innerRef: innerRef
    }), children);
  }

  Toast.propTypes = propTypes$16;
  Toast.defaultProps = defaultProps$11;

  var propTypes$17 = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
  };
  var defaultProps$12 = {
    tag: 'div'
  };

  var ToastBody = function ToastBody(props) {
    var className = props.className,
        cssModule = props.cssModule,
        innerRef = props.innerRef,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "innerRef", "tag"]);

    var classes = mapToCssModules(classnames(className, 'toast-body'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes,
      ref: innerRef
    }));
  };

  ToastBody.propTypes = propTypes$17;
  ToastBody.defaultProps = defaultProps$12;

  var propTypes$18 = {
    tag: tagPropType,
    icon: propTypes.oneOfType([propTypes.string, propTypes.node]),
    wrapTag: tagPropType,
    toggle: propTypes.func,
    className: propTypes.string,
    cssModule: propTypes.object,
    children: propTypes.node,
    closeAriaLabel: propTypes.string,
    charCode: propTypes.oneOfType([propTypes.string, propTypes.number]),
    close: propTypes.object
  };
  var defaultProps$13 = {
    tag: 'strong',
    wrapTag: 'div',
    tagClassName: 'mr-auto',
    closeAriaLabel: 'Close',
    charCode: 215
  };

  var ToastHeader = function ToastHeader(props) {
    var closeButton;
    var icon;

    var className = props.className,
        cssModule = props.cssModule,
        children = props.children,
        toggle = props.toggle,
        Tag = props.tag,
        WrapTag = props.wrapTag,
        closeAriaLabel = props.closeAriaLabel,
        charCode = props.charCode,
        close = props.close,
        tagClassName = props.tagClassName,
        iconProp = props.icon,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "charCode", "close", "tagClassName", "icon"]);

    var classes = mapToCssModules(classnames(className, 'toast-header'), cssModule);

    if (!close && toggle) {
      var closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
      closeButton = /*#__PURE__*/React__default.createElement("button", {
        type: "button",
        onClick: toggle,
        className: mapToCssModules('close', cssModule),
        "aria-label": closeAriaLabel
      }, /*#__PURE__*/React__default.createElement("span", {
        "aria-hidden": "true"
      }, closeIcon));
    }

    if (typeof iconProp === "string") {
      icon = /*#__PURE__*/React__default.createElement("svg", {
        className: mapToCssModules("rounded text-" + iconProp),
        width: "20",
        height: "20",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid slice",
        focusable: "false",
        role: "img"
      }, /*#__PURE__*/React__default.createElement("rect", {
        fill: "currentColor",
        width: "100%",
        height: "100%"
      }));
    } else if (iconProp) {
      icon = iconProp;
    }

    return /*#__PURE__*/React__default.createElement(WrapTag, _extends({}, attributes, {
      className: classes
    }), icon, /*#__PURE__*/React__default.createElement(Tag, {
      className: mapToCssModules(classnames(tagClassName, {
        "ml-2": icon != null
      }), cssModule)
    }, children), close || closeButton);
  };

  ToastHeader.propTypes = propTypes$18;
  ToastHeader.defaultProps = defaultProps$13;

  var _transitionStatusToCl;

  var propTypes$19 = _extends({}, Transition.propTypes, {
    isOpen: propTypes.bool,
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
    tag: tagPropType,
    className: propTypes.node,
    navbar: propTypes.bool,
    cssModule: propTypes.object,
    innerRef: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.object])
  });

  var defaultProps$14 = _extends({}, Transition.defaultProps, {
    isOpen: false,
    appear: false,
    enter: true,
    exit: true,
    tag: 'div',
    timeout: TransitionTimeouts.Collapse
  });

  var transitionStatusToClassHash = (_transitionStatusToCl = {}, _transitionStatusToCl[TransitionStatuses.ENTERING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.ENTERED] = 'collapse show', _transitionStatusToCl[TransitionStatuses.EXITING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.EXITED] = 'collapse', _transitionStatusToCl);

  function getTransitionClass(status) {
    return transitionStatusToClassHash[status] || 'collapse';
  }

  function getHeight(node) {
    return node.scrollHeight;
  }

  var Collapse = /*#__PURE__*/function (_Component) {
    _inheritsLoose(Collapse, _Component);

    function Collapse(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.state = {
        height: null
      };
      ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
        _this[name] = _this[name].bind(_assertThisInitialized(_this));
      });
      return _this;
    }

    var _proto = Collapse.prototype;

    _proto.onEntering = function onEntering(node, isAppearing) {
      this.setState({
        height: getHeight(node || this.props.innerRef.current)
      });
      this.props.onEntering(node, isAppearing);
    };

    _proto.onEntered = function onEntered(node, isAppearing) {
      this.setState({
        height: null
      });
      this.props.onEntered(node, isAppearing);
    };

    _proto.onExit = function onExit(node) {
      this.setState({
        height: getHeight(node || this.props.innerRef.current)
      });
      this.props.onExit(node);
    };

    _proto.onExiting = function onExiting(node) {
      // getting this variable triggers a reflow
      var _unused = (node || this.props.innerRef.current).offsetHeight; // eslint-disable-line no-unused-vars

      this.setState({
        height: 0
      });
      this.props.onExiting(node);
    };

    _proto.onExited = function onExited(node) {
      this.setState({
        height: null
      });
      this.props.onExited(node);
    };

    _proto.render = function render() {
      var _this$props = this.props,
          Tag = _this$props.tag,
          isOpen = _this$props.isOpen,
          className = _this$props.className,
          navbar = _this$props.navbar,
          cssModule = _this$props.cssModule,
          children = _this$props.children,
          innerRef = _this$props.innerRef,
          otherProps = _objectWithoutPropertiesLoose(_this$props, ["tag", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"]);

      var height = this.state.height;
      var transitionProps = pick(otherProps, TransitionPropTypeKeys);
      var childProps = omit(otherProps, TransitionPropTypeKeys);
      return /*#__PURE__*/React__default.createElement(Transition, _extends({}, transitionProps, {
        in: isOpen,
        onEntering: this.onEntering,
        onEntered: this.onEntered,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited,
        nodeRef: innerRef
      }), function (status) {
        var collapseClass = getTransitionClass(status);
        var classes = mapToCssModules(classnames(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
        var style = height === null ? null : {
          height: height
        };
        return /*#__PURE__*/React__default.createElement(Tag, _extends({}, childProps, {
          style: _extends({}, childProps.style, style),
          className: classes,
          ref: innerRef
        }), children);
      });
    };

    return Collapse;
  }(React.Component);

  Collapse.propTypes = propTypes$19;
  Collapse.defaultProps = defaultProps$14;

  var propTypes$1a = {
    tag: tagPropType,
    active: propTypes.bool,
    disabled: propTypes.bool,
    color: propTypes.string,
    action: propTypes.bool,
    className: propTypes.any,
    cssModule: propTypes.object
  };
  var defaultProps$15 = {
    tag: 'li'
  };

  var handleDisabledOnClick = function handleDisabledOnClick(e) {
    e.preventDefault();
  };

  var ListGroupItem = function ListGroupItem(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        active = props.active,
        disabled = props.disabled,
        action = props.action,
        color = props.color,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "active", "disabled", "action", "color"]);

    var classes = mapToCssModules(classnames(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? "list-group-item-" + color : false, 'list-group-item'), cssModule); // Prevent click event when disabled.

    if (disabled) {
      attributes.onClick = handleDisabledOnClick;
    }

    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ListGroupItem.propTypes = propTypes$1a;
  ListGroupItem.defaultProps = defaultProps$15;

  var propTypes$1b = {
    tag: tagPropType,
    className: propTypes.any,
    cssModule: propTypes.object
  };
  var defaultProps$16 = {
    tag: 'h5'
  };

  var ListGroupItemHeading = function ListGroupItemHeading(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'list-group-item-heading'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ListGroupItemHeading.propTypes = propTypes$1b;
  ListGroupItemHeading.defaultProps = defaultProps$16;

  var propTypes$1c = {
    tag: tagPropType,
    className: propTypes.any,
    cssModule: propTypes.object
  };
  var defaultProps$17 = {
    tag: 'p'
  };

  var ListGroupItemText = function ListGroupItemText(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'list-group-item-text'), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ListGroupItemText.propTypes = propTypes$1c;
  ListGroupItemText.defaultProps = defaultProps$17;

  var UncontrolledAlert = /*#__PURE__*/function (_Component) {
    _inheritsLoose(UncontrolledAlert, _Component);

    function UncontrolledAlert(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.state = {
        isOpen: true
      };
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = UncontrolledAlert.prototype;

    _proto.toggle = function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    _proto.render = function render() {
      return /*#__PURE__*/React__default.createElement(Alert, _extends({
        isOpen: this.state.isOpen,
        toggle: this.toggle
      }, this.props));
    };

    return UncontrolledAlert;
  }(React.Component);

  var omitKeys$1 = ['defaultOpen'];

  var UncontrolledButtonDropdown = /*#__PURE__*/function (_Component) {
    _inheritsLoose(UncontrolledButtonDropdown, _Component);

    function UncontrolledButtonDropdown(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.state = {
        isOpen: props.defaultOpen || false
      };
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = UncontrolledButtonDropdown.prototype;

    _proto.toggle = function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    _proto.render = function render() {
      return /*#__PURE__*/React__default.createElement(ButtonDropdown, _extends({
        isOpen: this.state.isOpen,
        toggle: this.toggle
      }, omit(this.props, omitKeys$1)));
    };

    return UncontrolledButtonDropdown;
  }(React.Component);
  UncontrolledButtonDropdown.propTypes = _extends({
    defaultOpen: propTypes.bool
  }, ButtonDropdown.propTypes);

  var omitKeys$2 = ['toggleEvents', 'defaultOpen'];
  var propTypes$1d = {
    defaultOpen: propTypes.bool,
    toggler: propTypes.string.isRequired,
    toggleEvents: propTypes.arrayOf(propTypes.string)
  };
  var defaultProps$18 = {
    toggleEvents: defaultToggleEvents
  };

  var UncontrolledCollapse = /*#__PURE__*/function (_Component) {
    _inheritsLoose(UncontrolledCollapse, _Component);

    function UncontrolledCollapse(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.togglers = null;
      _this.removeEventListeners = null;
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      _this.state = {
        isOpen: props.defaultOpen || false
      };
      return _this;
    }

    var _proto = UncontrolledCollapse.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.togglers = findDOMElements(this.props.toggler);

      if (this.togglers.length) {
        this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this.togglers.length && this.removeEventListeners) {
        this.removeEventListeners();
      }
    };

    _proto.toggle = function toggle(e) {
      this.setState(function (_ref) {
        var isOpen = _ref.isOpen;
        return {
          isOpen: !isOpen
        };
      });
      e.preventDefault();
    };

    _proto.render = function render() {
      return /*#__PURE__*/React__default.createElement(Collapse, _extends({
        isOpen: this.state.isOpen
      }, omit(this.props, omitKeys$2)));
    };

    return UncontrolledCollapse;
  }(React.Component);

  UncontrolledCollapse.propTypes = propTypes$1d;
  UncontrolledCollapse.defaultProps = defaultProps$18;

  var omitKeys$3 = ['defaultOpen'];

  var UncontrolledDropdown = /*#__PURE__*/function (_Component) {
    _inheritsLoose(UncontrolledDropdown, _Component);

    function UncontrolledDropdown(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.state = {
        isOpen: props.defaultOpen || false
      };
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = UncontrolledDropdown.prototype;

    _proto.toggle = function toggle(e) {
      this.setState({
        isOpen: !this.state.isOpen
      });

      if (this.props.onToggle) {
        this.props.onToggle(e, !this.state.isOpen);
      }
    };

    _proto.render = function render() {
      return /*#__PURE__*/React__default.createElement(Dropdown, _extends({
        isOpen: this.state.isOpen,
        toggle: this.toggle
      }, omit(this.props, omitKeys$3)));
    };

    return UncontrolledDropdown;
  }(React.Component);
  UncontrolledDropdown.propTypes = _extends({
    defaultOpen: propTypes.bool,
    onToggle: propTypes.func
  }, Dropdown.propTypes);

  var omitKeys$4 = ['defaultOpen'];

  var UncontrolledTooltip = /*#__PURE__*/function (_Component) {
    _inheritsLoose(UncontrolledTooltip, _Component);

    function UncontrolledTooltip(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.state = {
        isOpen: props.defaultOpen || false
      };
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = UncontrolledTooltip.prototype;

    _proto.toggle = function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    _proto.render = function render() {
      return /*#__PURE__*/React__default.createElement(Tooltip, _extends({
        isOpen: this.state.isOpen,
        toggle: this.toggle
      }, omit(this.props, omitKeys$4)));
    };

    return UncontrolledTooltip;
  }(React.Component);
  UncontrolledTooltip.propTypes = _extends({
    defaultOpen: propTypes.bool
  }, Tooltip.propTypes);

  var propTypes$1e = {
    tag: tagPropType,
    type: propTypes.string,
    size: propTypes.string,
    color: propTypes.string,
    className: propTypes.string,
    cssModule: propTypes.object,
    children: propTypes.string
  };
  var defaultProps$19 = {
    tag: 'div',
    type: 'border',
    children: 'Loading...'
  };

  var Spinner = function Spinner(props) {
    var className = props.className,
        cssModule = props.cssModule,
        type = props.type,
        size = props.size,
        color = props.color,
        children = props.children,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "type", "size", "color", "children", "tag"]);

    var classes = mapToCssModules(classnames(className, size ? "spinner-" + type + "-" + size : false, "spinner-" + type, color ? "text-" + color : false), cssModule);
    return /*#__PURE__*/React__default.createElement(Tag, _extends({
      role: "status"
    }, attributes, {
      className: classes
    }), children && /*#__PURE__*/React__default.createElement("span", {
      className: mapToCssModules('sr-only', cssModule)
    }, children));
  };

  Spinner.propTypes = propTypes$1e;
  Spinner.defaultProps = defaultProps$19;

  (function () {
    if (typeof window !== 'object' || typeof window.CustomEvent === 'function') return;

    var CustomEvent = function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: null
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    window.CustomEvent = CustomEvent;
  })();

  (function () {
    if (typeof Object.values === 'function') return;

    var values = function values(O) {
      return Object.keys(O).map(function (key) {
        return O[key];
      });
    };

    Object.values = values;
  })();

  var polyfill = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  exports.Alert = Alert;
  exports.Badge = Badge;
  exports.Breadcrumb = Breadcrumb;
  exports.BreadcrumbItem = BreadcrumbItem;
  exports.Button = Button;
  exports.ButtonDropdown = ButtonDropdown;
  exports.ButtonGroup = ButtonGroup;
  exports.ButtonToggle = ButtonToggle;
  exports.ButtonToolbar = ButtonToolbar;
  exports.Card = Card;
  exports.CardBody = CardBody;
  exports.CardColumns = CardColumns;
  exports.CardDeck = CardDeck;
  exports.CardFooter = CardFooter;
  exports.CardGroup = CardGroup;
  exports.CardHeader = CardHeader;
  exports.CardImg = CardImg;
  exports.CardImgOverlay = CardImgOverlay;
  exports.CardLink = CardLink;
  exports.CardSubtitle = CardSubtitle;
  exports.CardText = CardText;
  exports.CardTitle = CardTitle;
  exports.Carousel = Carousel;
  exports.CarouselCaption = CarouselCaption;
  exports.CarouselControl = CarouselControl;
  exports.CarouselIndicators = CarouselIndicators;
  exports.CarouselItem = CarouselItem;
  exports.Col = Col;
  exports.Collapse = Collapse;
  exports.Container = Container;
  exports.CustomFileInput = CustomFileInput;
  exports.CustomInput = CustomInput;
  exports.Dropdown = Dropdown;
  exports.DropdownContext = DropdownContext;
  exports.DropdownItem = DropdownItem;
  exports.DropdownMenu = DropdownMenu;
  exports.DropdownToggle = DropdownToggle;
  exports.Fade = Fade;
  exports.Form = Form;
  exports.FormFeedback = FormFeedback;
  exports.FormGroup = FormGroup;
  exports.FormText = FormText;
  exports.Input = Input;
  exports.InputGroup = InputGroup;
  exports.InputGroupAddon = InputGroupAddon;
  exports.InputGroupButtonDropdown = InputGroupButtonDropdown;
  exports.InputGroupText = InputGroupText;
  exports.Jumbotron = Jumbotron;
  exports.Label = Label;
  exports.ListGroup = ListGroup;
  exports.ListGroupItem = ListGroupItem;
  exports.ListGroupItemHeading = ListGroupItemHeading;
  exports.ListGroupItemText = ListGroupItemText;
  exports.Media = Media;
  exports.Modal = Modal;
  exports.ModalBody = ModalBody;
  exports.ModalFooter = ModalFooter;
  exports.ModalHeader = ModalHeader;
  exports.Nav = Nav;
  exports.NavItem = NavItem;
  exports.NavLink = NavLink;
  exports.Navbar = Navbar;
  exports.NavbarBrand = NavbarBrand;
  exports.NavbarText = NavbarText;
  exports.NavbarToggler = NavbarToggler;
  exports.Pagination = Pagination;
  exports.PaginationItem = PaginationItem;
  exports.PaginationLink = PaginationLink;
  exports.Polyfill = polyfill;
  exports.Popover = Popover;
  exports.PopoverBody = PopoverBody;
  exports.PopoverHeader = PopoverHeader;
  exports.PopperContent = PopperContent;
  exports.PopperTargetHelper = PopperTargetHelper;
  exports.Progress = Progress;
  exports.Row = Row;
  exports.Spinner = Spinner;
  exports.TabContent = TabContent;
  exports.TabPane = TabPane;
  exports.Table = Table;
  exports.Toast = Toast;
  exports.ToastBody = ToastBody;
  exports.ToastHeader = ToastHeader;
  exports.Tooltip = Tooltip;
  exports.UncontrolledAlert = UncontrolledAlert;
  exports.UncontrolledButtonDropdown = UncontrolledButtonDropdown;
  exports.UncontrolledCarousel = UncontrolledCarousel;
  exports.UncontrolledCollapse = UncontrolledCollapse;
  exports.UncontrolledDropdown = UncontrolledDropdown;
  exports.UncontrolledPopover = UncontrolledPopover;
  exports.UncontrolledTooltip = UncontrolledTooltip;
  exports.Util = utils;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=reactstrap.js.map
