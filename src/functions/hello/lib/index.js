module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(30)('wks')
  , uid        = __webpack_require__(33)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(12)
  , createDesc = __webpack_require__(29);
module.exports = __webpack_require__(5) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(25)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _postmark = __webpack_require__(42);

var _postmark2 = _interopRequireDefault(_postmark);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// export the postmark client
exports.default = new _postmark2.default.Client('39f2eefa-fc15-491e-be83-64a3ec84a4cc'); /**
                                                                                          * Created by alexandermann on 2017-04-14.
                                                                                          */

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(14);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(2)
  , IE8_DOM_DEFINE = __webpack_require__(55)
  , toPrimitive    = __webpack_require__(76)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var rev = __webpack_require__(38);
var sha = 'unknown revision';
var version = __webpack_require__(43).version;

rev.long(function(longSha) {
  sha = longSha || 'unknown revision';
});

/**
 * The defaults used for the construction of new clients.
 * You can pass options in client constructors to override these options.
 *
 * @typedef ClientDefaults
 * @property {string} [requestHost=api.postmarkapp.com] The host name for whichever server we should use to access the Postmark API.
 * @property {boolean} [ssl=true] Should ssl be used for accessing the API (http/https)?
 * @property {function} [requestFactory] Given the set of options, produce a new function that will be responsible for creating and processing HTTP requests.
 */
var ClientDefaults = {

  requestHost: "api.postmarkapp.com",
  ssl: true,
  requestFactory: function(options) {
    var client = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());

    return function(path, type, content, callback) {
      var msg = null;
      if (content) {
        msg = JSON.stringify(content);
      }

      var headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "User-Agent": "postmark.js (Package-version: " + version + ";Revision:" + sha + ")"
      };

      headers[options.authorizationHeader] = options.apiKey;

      if (msg) {
        headers["Content-Length"] = Buffer.byteLength(msg);
      }

      var req = client.request({
        host: options.requestHost,
        path: path,
        method: type,
        headers: headers,
        port: (options.ssl ? 443 : 80)
      }, function(response) {

        var body = "";

        response.on("data", function(i) {
          body += i;
        });

        response.on("end", function() {
          if (response.statusCode == 200) {
            if (callback) {
              try {
                var ret = JSON.parse(body);
                callback(null, ret);
              } catch (e) {
                callback(e);
              }
            }
          } else {
            if (callback) {
              var data;
              try {
                data = JSON.parse(body);
                callback({
                  status: response.statusCode,
                  message: data['Message'],
                  code: data['ErrorCode']
                });
              } catch (e) {
                callback({
                  status: 404,
                  message: "Unsupported Request Method and Protocol",
                  code: -1 // this is a fake error code !
                });
              }

            }
          }
        });
      });

      req.on('error', function(err) {
        if (callback) {
          callback(err);
        }
      });

      if (msg) {
        req.write(msg);
      }
      req.end();
    }
  }
};

module.exports = ClientDefaults;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f
  , has = __webpack_require__(10)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(30)('keys')
  , uid    = __webpack_require__(33);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(57)
  , defined = __webpack_require__(15);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*!
 * @name JavaScript/NodeJS Merge v1.2.0
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge

 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */

;(function(isNode) {

	/**
	 * Merge one or more objects 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	var Public = function(clone) {

		return merge(clone === true, false, arguments);

	}, publicName = 'merge';

	/**
	 * Merge two or more objects recursively 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	Public.recursive = function(clone) {

		return merge(clone === true, true, arguments);

	};

	/**
	 * Clone the input removing any reference
	 * @param mixed input
	 * @return mixed
	 */

	Public.clone = function(input) {

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index=0;index<size;++index)

				output[index] = Public.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)

				output[index] = Public.clone(input[index]);

		}

		return output;

	};

	/**
	 * Merge two objects recursively
	 * @param mixed input
	 * @param mixed extend
	 * @return mixed
	 */

	function merge_recursive(base, extend) {

		if (typeOf(base) !== 'object')

			return extend;

		for (var key in extend) {

			if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

				base[key] = merge_recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;

	}

	/**
	 * Merge two or more objects
	 * @param bool clone
	 * @param bool recursive
	 * @param array argv
	 * @return object
	 */

	function merge(clone, recursive, argv) {

		var result = argv[0],
			size = argv.length;

		if (clone || typeOf(result) !== 'object')

			result = {};

		for (var index=0;index<size;++index) {

			var item = argv[index],

				type = typeOf(item);

			if (type !== 'object') continue;

			for (var key in item) {

				var sitem = clone ? Public.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = merge_recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;

	}

	/**
	 * Get type of variable
	 * @param mixed input
	 * @return string
	 *
	 * @see http://jsperf.com/typeofvar
	 */

	function typeOf(input) {

		return ({}).toString.call(input).slice(8, -1).toLowerCase();

	}

	if (isNode) {

		module.exports = Public;

	} else {

		window[publicName] = Public;

	}

})(typeof module === 'object' && module && typeof module.exports === 'object' && module.exports);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(85)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(8)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(4)
  , ctx       = __webpack_require__(9)
  , hide      = __webpack_require__(3)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(28)
  , $export        = __webpack_require__(24)
  , redefine       = __webpack_require__(70)
  , hide           = __webpack_require__(3)
  , has            = __webpack_require__(10)
  , Iterators      = __webpack_require__(6)
  , $iterCreate    = __webpack_require__(60)
  , setToStringTag = __webpack_require__(17)
  , getPrototypeOf = __webpack_require__(66)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(9)
  , invoke             = __webpack_require__(56)
  , html               = __webpack_require__(26)
  , cel                = __webpack_require__(16)
  , global             = __webpack_require__(1)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(8)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(19)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendPasswordResetEmail = exports.sendVerificationEmail = exports.sendConversationScheduledEmail = exports.sendInviteEmail = undefined;

var _sendInviteEmail = __webpack_require__(45);

var _sendInviteEmail2 = _interopRequireDefault(_sendInviteEmail);

var _sendConversationScheduledEmail = __webpack_require__(44);

var _sendConversationScheduledEmail2 = _interopRequireDefault(_sendConversationScheduledEmail);

var _sendVerificationEmail = __webpack_require__(47);

var _sendVerificationEmail2 = _interopRequireDefault(_sendVerificationEmail);

var _sendPasswordResetEmail = __webpack_require__(46);

var _sendPasswordResetEmail2 = _interopRequireDefault(_sendPasswordResetEmail);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Created by alexandermann on 2017-04-24.
 */
exports.sendInviteEmail = _sendInviteEmail2.default;
exports.sendConversationScheduledEmail = _sendConversationScheduledEmail2.default;
exports.sendVerificationEmail = _sendVerificationEmail2.default;
exports.sendPasswordResetEmail = _sendPasswordResetEmail2.default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(49);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var exec = __webpack_require__(86).exec

function _command (cmd, cb) {
  exec(cmd, function (err, stdout, stderr) {
    cb(stdout.split('\n').join(''))
  })
}

module.exports = { 
    short : function (cb) { 
      _command('git rev-parse --short HEAD', cb)
    }
  , long : function (cb) { 
      _command('git rev-parse HEAD', cb)
    }
  , branch : function (cb) { 
      _command('git rev-parse --abbrev-ref HEAD', cb)
    }
  , tag : function (cb) { 
      _command('git describe --always --tag --abbrev=0', cb)
    }
  , log : function (cb) { 
      _command('git log --no-color --pretty=format:\'[ "%H", "%s", "%cr", "%an" ],\' --abbrev-commit', function (str) {
        str = str.substr(0, str.length-1)
        cb(JSON.parse('[' + str + ']'))
      })
    }
}


/***/ }),
/* 39 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 39;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var defaults = __webpack_require__(13);
var merge = __webpack_require__(21);
var querystring = __webpack_require__(34);

/**
 * Description
 * @class AdminClient
 * @param {string} apiKey The **account-level** key used to access your Postmark Account and manage servers and signatures. This is _not_ the same as your **server key**.
 * @param {ClientDetfaults} [options] The options used to create this client, if not specified, the postmark.defaults will be used.
 *
 * @return AdminClient
 */
function AdminClient(apiKey, options) {
  if (!apiKey) {
    throw ("You must provide your Postmark Account API token.");
  }
  this.options = merge({}, defaults, options);
  this.options.apiKey = apiKey;
  this.options.authorizationHeader = "X-Postmark-Account-Token";
  this.processRequestWithBody = this.options.requestFactory(this.options);
}

AdminClient.prototype = {};

/**
 * @private
 * @param {} arg1
 * @param {} arg2
 * @return PostmarkCallback
 */
function coalesceCallback(arg1, arg2) {
  var callback = arg2;
  if (!callback && typeof(arg1) === 'function') {
    callback = arg1;
  }
  return callback;
}

/**
 * @private
 * @memberOf AdminClient.prototype
 * @method processRequestWithoutBody
 * @param {string} path
 * @param {string} type
 * @param {object} query
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.processRequestWithoutBody = function(path, type, query, callback) {
  if (query) {
    path += '?' + querystring.stringify(query);
  }
  this.processRequestWithBody(path, type, null, callback);
}

/**
 * Get a list of Sender Signatures associated with this account. By default,
 * this method returns the first 100 signatures in your account.
 *
 * @memberOf AdminClient.prototype
 * @method listSenderSignatures
 * @param {object} [query] An optional filter to be used when retrieving the list of Sender Signatures.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.listSenderSignatures = function(query, callback) {
  callback = coalesceCallback(query, callback);
  query = merge({
    count: 100,
    offset: 0
  }, query);
  this.processRequestWithoutBody('/senders', 'GET', query, callback);
};

/**
 * Get a single Sender Signature by id.
 *
 * @memberOf AdminClient.prototype
 * @method getSenderSignature
 * @param {number} id The ID for the Sender Signature you wish to retrieve.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.getSenderSignature = function(id, callback) {
  this.processRequestWithoutBody('/senders/' + id, 'GET', null, callback);
};

/**
 * Create a Sender Signature.
 *
 * @memberOf AdminClient.prototype
 * @method createSenderSignature
 * @param {object} options The configuration options for the Sender Signature to be created.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.createSenderSignature = function(options, callback) {
  this.processRequestWithBody('/senders/', 'POST', options, callback);
};

/**
 * Modify an existing Sender Signature.
 *
 * @memberOf AdminClient.prototype
 * @method editSenderSignature
 * @param {number} id The ID of the Sender Signature to be modified.
 * @param {object} options The updated options for the Sender Sinature to be modified.
 * @param {postmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.editSenderSignature = function(id, options, callback) {
  this.processRequestWithBody('/senders/' + id, 'PUT', options, callback);
};

/**
 * Delete a Sender Signature.
 *
 * @memberOf AdminClient.prototype
 * @method deleteSenderSignature
 * @param {number} id The ID for the Sender Signature you wish to delete.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.deleteSenderSignature = function(id, callback) {
  this.processRequestWithoutBody('/senders/' + id, 'DELETE', null, callback);
};

/**
 * Request that a new confirmation email be sent to the email address associated with a Sender Signature.
 *
 * @memberOf AdminClient.prototype
 * @method resendSenderSignatureConfirmation
 * @param {number} id The ID for the Sender Signature for which you wish to have a confirmation re-sent.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.resendSenderSignatureConfirmation = function(id, callback) {
  this.processRequestWithBody('/senders/' + id + '/resend', 'POST', null, callback);
};

/**
 * Request that the SPF records for Sender Signature be verified.
 *
 * @memberOf AdminClient.prototype
 * @method verifySenderSignatureSPF
 * @param {number} id The ID for the Sender Signature for which you wish to have the SPF verified.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 * @deprecated verifyDomainSPF replaces this method 
 */
AdminClient.prototype.verifySenderSignatureSPF = function(id, callback) {
  this.processRequestWithBody('/senders/' + id + '/verifyspf', 'POST', null, callback);
};

/**
 * Request a new DKIM for the specified Sender Signature.
 *
 * @memberOf AdminClient.prototype
 * @method requestNewDKIMForSenderSignature
 * @param {number} id The ID for the Sender Signature for which you wish have a new DKIM issued.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 * @deprecated rotateDKIMForDomain replaces this method
 */
AdminClient.prototype.requestNewDKIMForSenderSignature = function(id, callback) {
  this.processRequestWithBody('/senders/' + id + '/requestnewdkim', 'POST', null, callback);
};

/**
 * Retrieve information for a specific Server.
 *
 * @memberOf AdminClient.prototype
 * @method getServer
 * @param {number} id The ID of the Server you wish to access.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.getServer = function(id, callback) {
  this.processRequestWithoutBody('/servers/' + id, 'GET', null, callback);
};

/**
 * Create a new Server from which you may send and recieve email.
 *
 * @memberOf AdminClient.prototype
 * @method createServer
 * @param {object} options The configuration options to be used when creating the new Server.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.createServer = function(options, callback) {
  this.processRequestWithBody('/servers/', 'POST', options, callback);
};

/**
 * Modify an existing Server.
 *
 * @memberOf AdminClient.prototype
 * @method editServer
 * @param {number} id The ID of the Server you wish to edit.
 * @param {object} options The options you wish to modify on the Server.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.editServer = function(id, options, callback) {
  this.processRequestWithBody('/servers/' + id, 'PUT', options, callback);
};

/**
 * Delete a Server with the specified ID.
 *
 * NOTE: Because this is a dangerous operation and can cause serious problems in your account, you must request that this API be enabled for your account from **support@postmarkapp.com**
 *
 * @memberOf AdminClient.prototype
 * @method deleteServer
 * @param {number} id The ID of the Server you wish to delete.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.deleteServer = function(id, callback) {
  this.processRequestWithoutBody('/servers/' + id, 'DELETE', null, callback);
};

/**
 * Get a list of Servers associated with this account. By default, the first 100 Servers associated with the account are used.
 *
 * @memberOf AdminClient.prototype
 * @method listServers
 * @param {object} [query] An optional filter to use when retrieving the list of Servers.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.listServers = function(query, callback) {
  callback = coalesceCallback(query, callback);
  query = merge({
    count: 100,
    offset: 0
  }, query);
  this.processRequestWithoutBody('/servers/', 'GET', query, callback);
};

/**
 * Get a list of Domains associated with this account. By default,
 * this method returns the first 100 domains in your account.
 *
 * @memberOf AdminClient.prototype
 * @method listDomains 
 * @param {object} [query] An optional filter to be used when retrieving the list of Domains.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.listDomains = function(query, callback) {
  callback = coalesceCallback(query, callback);
  query = merge({
    count: 100,
    offset: 0
  }, query);
  this.processRequestWithoutBody('/domains', 'GET', query, callback);
};

/**
 * Get a single Domain by id.
 *
 * @memberOf AdminClient.prototype
 * @method getDomain
 * @param {number} id The ID for the Domain you wish to retrieve.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.getDomain = function(id, callback) {
  this.processRequestWithoutBody('/domains/' + id, 'GET', null, callback);
};

/**
 * Create a Domain.
 *
 * @memberOf AdminClient.prototype
 * @method createDomain
 * @param {object} options The configuration options for the Domain to be created.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.createDomain = function(options, callback) {
  this.processRequestWithBody('/domains/', 'POST', options, callback);
};

/**
 * Modify an existing Domain.
 *
 * @memberOf AdminClient.prototype
 * @method editDomain
 * @param {number} id The ID of the Domain to be modified.
 * @param {object} options The updated options for the Domain to be modified.
 * @param {postmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.editDomain = function(id, options, callback) {
  this.processRequestWithBody('/domains/' + id, 'PUT', options, callback);
};

/**
 * Delete a Domain.
 *
 * @memberOf AdminClient.prototype
 * @method deleteDomain
 * @param {number} id The ID for the Domain you wish to delete.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.deleteDomain = function(id, callback) {
  this.processRequestWithoutBody('/domains/' + id, 'DELETE', null, callback);
};

/**
 * Request that the SPF records for Domain be verified.
 *
 * @memberOf AdminClient.prototype
 * @method verifyDomainSPF
 * @param {number} id The ID for the Domain for which you wish to have the SPF verified.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.verifyDomainSPF = function(id, callback) {
  this.processRequestWithBody('/domains/' + id + '/verifyspf', 'POST', null, callback);
};

/**
 * Rotate DKIM keys for the specified Domain.
 *
 * @memberOf AdminClient.prototype
 * @method rotateDKIMForDomain
 * @param {number} id The ID for the for which you wish have a new DKIM issued.
 * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
 */
AdminClient.prototype.rotateDKIMForDomain = function(id, callback) {
  this.processRequestWithBody('/domains/' + id + '/rotatedkim', 'POST', null, callback);
};

module.exports = AdminClient;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

(function() {
    var defaults = __webpack_require__(13);
    var merge = __webpack_require__(21);
    var querystring = __webpack_require__(34);

    /**
     * The constructor for the `Client` object.
     * This is the main entry point to the standard Postmark API.
     *
     * ```javascript
     * var client = new Client('<server key>');
     *
     * // You can now use any of the methods associated with the client.
     * ```
     *
     * @class Client
     * @param {string} serverKey The **server key** is required, and specifies which Server you wish to use when making API calls from this Client.
     * @param {ClientOptions} [options] The configuration options for this client. If not specified, the global defaults will be used.
     * @return Client
     */
    function Client(serverKey, options) {
        if (!serverKey) {
            throw ("You must provide your postmark API key");
        }
        this.options = merge({}, defaults, options);
        this.options.apiKey = serverKey;
        this.options.authorizationHeader = "X-Postmark-Server-Token";
        this.processRequestWithBody = this.options.requestFactory(this.options);
    }

    Client.prototype = {};

    /**
     * Coalesces arguments to allow for easy method overloads.
     * @private
     * @method coalesceCallback
     * @return PostmarkCallback
     */
    function coalesceCallback(arg1, arg2) {
        var callback = arg2;
        if (!callback && typeof(arg1) === 'function') {
            callback = arg1;
        }
        return callback;
    }


    /**
     * @private
     */
    Client.prototype.processRequestWithoutBody = function(path, type, query, callback) {
        if (query) {
            path += '?' + querystring.stringify(query);
        }
        this.processRequestWithBody(path, type, null, callback);
    }

    /**
     * Send a single email message.
     *
     * @deprecated Consider using {@link Client#sendEmail} instead of this method.
     * @memberof Client.prototype
     * @method send
     * @param {PostmarkMessage} message The message you wish to send.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.send = function(message, callback) {
        this.processRequestWithBody('/email', 'POST', message, callback);
    };


    /**
     * Send a message using a template.
     *
     * @memberof Client.prototype
     * @method sendEmailWithTemplate
     * @param {PostmarkTemplateMessage} message The message you wish to send.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.sendEmailWithTemplate = function(message, callback) {
        this.processRequestWithBody('/email/withTemplate', 'POST', message, callback);
    };

    /**
     * Send a batch of email messages.
     *
     * @deprecated Consider using {@link Client#sendEmailBatch} instead of this method.
     * @memberof Client.prototype
     * @method batch
     * @param {PostmarkMessage[]} messages An array of `PostmarkMessage` you wish to send using this Client.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.batch = function(messages, callback) {
        this.processRequestWithBody('/email/batch', 'POST', messages, callback);
    };

    /**
     * Send a single email message.
     *
     * @memberof Client.prototype
     * @method sendEmail
     * @param {PostmarkMessage} message The message you wish to send.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.sendEmail = function(message, callback) {
        this.processRequestWithBody('/email', 'POST', message, callback);
    };

    /**
     * Send a batch of email messages.
     *
     * @memberof Client.prototype
     * @method sendEmailBatch
     * @param {PostmarkMessage[]} messages An array of `PostmarkMessage` you wish to send using this Client.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.sendEmailBatch = function(messages, callback) {
        this.processRequestWithBody('/email/batch', 'POST', messages, callback);
    };

    /**
     * Retrieve delivery statistic information for the associated Server.
     *
     * @memberof Client.prototype
     * @method getDeliveryStatistics
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getDeliveryStatistics = function(callback) {
        this.processRequestWithoutBody('/deliverystats', 'GET', null, callback);
    };

    /**
     * Retrieve a batch of bounces. The default batch size is 100, and the offset is 0.
     *
     * @memberof Client.prototype
     * @method getBounces
     * @param {object} [filter] An optional filter for which bounces to retrieve.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getBounces = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        filter = merge({
            count: 100,
            offset: 0
        }, filter);

        this.processRequestWithoutBody('/bounces', 'GET', filter, callback);
    };

    /**
     * Get a information for a specific Bounce.
     *
     * @memberof Client.prototype
     * @method getBounce
     * @param {number} id The ID of the Bounce you wish to retrieve.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getBounce = function(id, callback) {
        this.processRequestWithoutBody('/bounces/' + id, 'GET', null, callback);
    };

    /**
     * Get a Bounce Dump for a specific Bounce.
     * @memberof Client.prototype
     * @method getBounceDump
     * @param {number} id The ID of the Bounce for which you wish to retrieve a dump.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getBounceDump = function(id, callback) {
        this.processRequestWithoutBody('/bounces/' + id + '/dump', 'GET', null, callback);
    };

    /**
     * Cause an email address that was deactivated due to a Bounce to be reactivated.
     *
     * @memberof Client.prototype
     * @method activateBounce
     * @param {number} id The ID of the Bounce for which you wish to activate the associated email.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.activateBounce = function(id, callback) {
        this.processRequestWithBody('/bounces/' + id + '/activate', 'PUT', null, callback);
    };

    /**
     * Get an array of tags associated with bounces.
     *
     * @memberof Client.prototype
     * @method getBounceTags
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getBounceTags = function(callback) {
        this.processRequestWithoutBody('/bounces/tags', 'GET', null, callback);
    };

    /**
     * Get the information for the Server associated with this Client.
     *
     * @memberof Client.prototype
     * @method getServer
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getServer = function(callback) {
        this.processRequestWithoutBody('/server', 'GET', null, callback);
    };

    /**
     * Modify the Server associated with this Client.
     *
     * @memberof Client.prototype
     * @method editServer
     * @param {object} options The options you wish to modify for this server.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.editServer = function(options, callback) {
        this.processRequestWithBody('/server', 'PUT', options, callback);
    };

    /**
     * Retrieve a batch of Outbound Messages. The default batch size is 100, and the offset is 0.
     * You can make successive calls to the API to retrieve additional Outbound Messages.
     *
     * @memberof Client.prototype
     * @method getOutboundMessages
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getOutboundMessages = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        filter = merge({
            count: 100,
            offset: 0
        }, filter);
        this.processRequestWithoutBody('/messages/outbound', 'GET', filter, callback);
    };

    /**
     * Get details for a specific Outbound Message.
     *
     * @memberof Client.prototype
     * @method getOutboundMessageDetails
     * @param {number} id The ID of the Outbound Message for which you wish to retrieve details.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getOutboundMessageDetails = function(id, callback) {
        this.processRequestWithoutBody('/messages/outbound/' + id + '/details', 'GET', null, callback);
    };

    /**
     * Get the Opens for Outbound Messages. The default batch size is 100, and offset is 0.
     * You can make successive calls to the API to retrieve additional Opens information.
     *
     * @memberof Client.prototype
     * @method getMessageOpens
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getMessageOpens = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        filter = merge({
            count: 100,
            offset: 0
        }, filter);
        this.processRequestWithoutBody('/messages/outbound/opens', 'GET', filter, callback);
    };

    /**
     * Get Open information for a single Outbound Message. The default batch size is 100, and offset is 0.
     *
     * @memberof Client.prototype
     * @method getMessageOpensForSingleMessage
     * @param {number} id The ID of the Message for which you wish to retrieve Opens.
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getMessageOpensForSingleMessage = function(id, filter, callback) {
        callback = coalesceCallback(filter, callback);
        filter = merge({
            count: 100,
            offset: 0
        }, filter);
        this.processRequestWithoutBody('/messages/outbound/opens/' + id, 'GET', filter, callback);
    };

    /**
     * Retrieve a batch of Inbound Messages. The default batch size is 100, and the offset is 0.
     * You can make successive calls to the API to retrieve additional Inbound Messages.
     * @memberof Client.prototype
     * @method getInboundMessages
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getInboundMessages = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        filter = merge({
            count: 100,
            offset: 0
        }, filter);
        this.processRequestWithoutBody('/messages/inbound', 'GET', filter, callback);
    };

    /**
     * Get details for a specific Inbound Message.
     *
     * @memberof Client.prototype
     * @method getInboundMessageDetails
     * @param {number} id The ID of the Inbound Message for which you wish to retrieve details.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getInboundMessageDetails = function(id, callback) {
        this.processRequestWithoutBody('/messages/inbound/' + id + '/details', 'GET', null, callback);
    };

    /**
     * Cause an Inbound Message to bypass filtering rules defined on this Client's associated Server.
     *
     * @memberof Client.prototype
     * @method bypassBlockedInboundMessage
     * @param {number} id The ID of the Inbound Message for which you wish to bypass the filtering rules.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.bypassBlockedInboundMessage = function(id, callback) {
        this.processRequestWithBody('/messages/inbound/' + id + '/bypass', 'PUT', null, callback);
    };

    /**
     * Request that Postmark retry POSTing to the Inbound Hook for the specified message.
     *
     * @memberof Client.prototype
     * @method retryInboundHookForMessage
     * @param {number} id The ID of the Inbound Message for which you wish to retry the inbound hook.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.retryInboundHookForMessage = function(id, callback) {
        this.processRequestWithBody('/messages/inbound/' + id + '/retry', 'PUT', null, callback);
    };


    /**
     * Get overview statistics on Outbound Messages sent from the Server associated with this Client.
     *
     * @memberof Client.prototype
     * @method getOuboundOverview
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getOuboundOverview = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        this.processRequestWithoutBody('/stats/outbound', 'GET', filter, callback);
    };

    /**
     * Get statistics on email sent from the Server associated with this Client.
     *
     * @memberof Client.prototype
     * @method getSentCounts
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getSentCounts = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        this.processRequestWithoutBody('/stats/outbound/sends', 'GET', filter, callback);
    };

    /**
     * Get statistiscs on emails that bounced after being sent from the Server associated with this Client.
     *
     * @memberof Client.prototype
     * @method getBounceCounts
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getBounceCounts = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        this.processRequestWithoutBody('/stats/outbound/bounces', 'GET', filter, callback);
    };

    /**
     * Get SPAM complaint statistics for email sent from the Server associated with this Client.
     *
     * @memberof Client.prototype
     * @method getSpamComplaints
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getSpamComplaints = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        this.processRequestWithoutBody('/stats/outbound/spam', 'GET', filter, callback);
    };

    /**
     * Get email tracking statistics for messages sent from the Server associated with this Client.
     *
     * @memberof Client.prototype
     * @method getTrackedEmailCounts
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getTrackedEmailCounts = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        this.processRequestWithoutBody('/stats/outbound/tracked', 'GET', filter, callback);
    };

    /**
     * Get Open statistics for messages sent from the Server associated with this Client.
     *
     * @memberof Client.prototype
     * @method getEmailOpenCounts
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getEmailOpenCounts = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        this.processRequestWithoutBody('/stats/outbound/opens', 'GET', filter, callback);
    };

    /**
     * Get Email Client Platform statistics  for messages sent from the Server associated with this Client.
     *
     * @memberof Client.prototype
     * @method getEmailPlatformUsage
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getEmailPlatformUsage = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        this.processRequestWithoutBody('/stats/outbound/opens/platforms', 'GET', filter, callback);
    };

    /**
     * Get statistics on which Email Clients were used to open messages sent from the Server associated with this Client.
     *
     * @memberof Client.prototype
     * @method getEmailClientUsage
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getEmailClientUsage = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        this.processRequestWithoutBody('/stats/outbound/opens/emailclients', 'GET', filter, callback);
    };

    /**
     * Get Read Time statistics for messages sent from the Server associated with this Client.
     *
     * @memberof Client.prototype
     * @method getEmailReadTimes
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getEmailReadTimes = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        this.processRequestWithoutBody('/stats/outbound/opens/readtimes', 'GET', filter, callback);
    };

    /**
     * Get total clicks statistics for tracked links for messages sent from the Server associated with this Client.
     *
     * @memberof Client.prototype
     * @method getClickCounts
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getClickCounts = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        this.processRequestWithoutBody('/stats/outbound/clicks', 'GET', filter, callback);
    };

    /**
     * Get browser family statistics for tracked links for messages sent from the Server associated with this Client.
     *
     * @memberof Client.prototype
     * @method getBrowserUsage
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getBrowserUsage = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        this.processRequestWithoutBody('/stats/outbound/clicks/browserfamilies', 'GET', filter, callback);
    };

    /**
     * Get browser platform statistics for tracked links for messages sent from the Server associated with this Client.
     *
     * @memberof Client.prototype
     * @method getBrowserPlatforms
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getBrowserPlatforms = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        this.processRequestWithoutBody('/stats/outbound/clicks/platforms', 'GET', filter, callback);
    };

      /**
     * Get click location statistics for tracked links for messages sent from the Server associated with this Client.
     * (Shows whether a tracked link was clicked from "HTML" or "Text" body of the email)
     *
     * @memberof Client.prototype
     * @method getClickLocation
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getClickLocation = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        this.processRequestWithoutBody('/stats/outbound/clicks/location', 'GET', filter, callback);
    };

    /**
     * Create a new Tag Trigger.
     *
     * @memberof Client.prototype
     * @method createTagTrigger
     * @param {object} options Configuration options to be used in creating the trigger.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.createTagTrigger = function(options, callback) {
        this.processRequestWithBody('/triggers/tags', 'POST', options, callback);
    };

    /**
     * Modify an existing Tag Trigger.
     *
     * @memberof Client.prototype
     * @method editTagTrigger
     * @param {number} id The ID of the Tag Trigger you wish to modify.
     * @param {object} options The updated configuration options for this Tag Trigger.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.editTagTrigger = function(id, options, callback) {
        this.processRequestWithBody('/triggers/tags/' + id, 'PUT', options, callback);
    };

    /**
     * Delete an existing Tag Trigger.
     *
     * @memberof Client.prototype
     * @method deleteTagTrigger
     * @param {number} id The ID of the Tag Trigger you wish to delete.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.deleteTagTrigger = function(id, callback) {
        this.processRequestWithoutBody('/triggers/tags/' + id, 'DELETE', null, callback);
    };

    /**
     * Get a specific Tag Trigger.
     *
     * @memberof Client.prototype
     * @method getTagTrigger
     * @param {number} id The ID of the Tag Trigger you wish to retrieve.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getTagTrigger = function(id, callback) {
        this.processRequestWithoutBody('/triggers/tags/' + id, 'GET', null, callback);
    };

    /**
     * Get a list of Tag Trigger. The default batch count is 100, and the offset is 0.
     * You may retrieve additional Tag Triggers by making successive calls to the API.
     *
     * @memberof Client.prototype
     * @method getTagTriggers
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getTagTriggers = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        filter = merge({
            count: 100,
            offset: 0
        }, filter);
        this.processRequestWithoutBody('/triggers/tags/', 'GET', filter, callback);
    };

    /**
     * Create an Inbound Rule Trigger.
     *
     * @memberof Client.prototype
     * @method createInboundRuleTrigger
     * @param {object} options The configuration options to used when creating this Trigger.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.createInboundRuleTrigger = function(options, callback) {
        this.processRequestWithBody('/triggers/inboundrules', 'POST', options, callback);
    };

    /**
     * Delete an Inbound Rule Trigger.
     *
     * @memberof Client.prototype
     * @method deleteInboundRuleTrigger
     * @param {number} id The ID of the Inbound Rule Trigger you wish to delete.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.deleteInboundRuleTrigger = function(id, callback) {
        this.processRequestWithoutBody('/triggers/inboundrules/' + id, 'DELETE', null, callback);
    };

    /**
     * Get a list of Inbound Rule Triggers. The default batch count is 100, and the offset is 0.
     * You may retrieve additional Inbound Rule Tag Triggers by making successive calls to the API.
     *
     * @memberof Client.prototype
     * @method getInboundRuleTriggers
     * @param {object} [filter] Optional filtering parameters.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getInboundRuleTriggers = function(filter, callback) {
        callback = coalesceCallback(filter, callback);
        filter = merge({
            count: 100,
            offset: 0
        }, filter);
        this.processRequestWithoutBody('/triggers/inboundrules', 'GET', filter, callback);
    };

    /**
     * Get the list of templates assoicated with this server.
     *
     * @memberof Client.prototype
     * @method getTemplates
     * @param {object} [options] Optional paging/filtering options.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getTemplates = function(options, callback) {
        callback = coalesceCallback(options, callback);
        options = merge({
            count: 100,
            offset: 0
        }, options);
        this.processRequestWithoutBody('/templates', 'GET', options, callback);
    };


    /**
     * Get the a specific template assoicated with this server.
     *
     * @memberof Client.prototype
     * @method getTemplate
     * @param {int} [id] The templateid for the template you wish to retrieve.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.getTemplate = function(id, callback) {
        this.processRequestWithoutBody('/templates/' + id, 'GET', null, callback);
    };

    /**
     * Delete a template associated with this server.
     *
     * @memberof Client.prototype
     * @method deleteTemplate
     * @param {int} [id] The templateid you wish to delete.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.deleteTemplate = function(id, callback) {
        this.processRequestWithoutBody('/templates/' + id, 'DELETE', null, callback);
    }

    /**
     * Create a new template on the associated server.
     *
     * @memberof Client.prototype
     * @method createTemplate
     * @param {object} [template] The template you wish to create.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.createTemplate = function(template, callback) {
        this.processRequestWithBody('/templates/', 'POST', template, callback);
    }

    /**
     * Update a template on the associated server.
     *
     * @memberof Client.prototype
     * @method editTemplate
     * @param {number} id The id of the template you wish to update.
     * @param {object} template The values on the template you wish to update.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.editTemplate = function(id, template, callback) {
        this.processRequestWithBody('/templates/' + id, 'PUT', template, callback);
    }

    /**
     * Validate template markup to verify that it will be parsed. Also provides a recommended template
     * model to be used when sending using the specified template content.
     *
     * @memberof Client.prototype
     * @method validateTemplate
     * @param {object} [templateContent] The template you wish to update.
     * @param {PostmarkCallback} callback A standard callback that is called when the API request completes.
     */
    Client.prototype.validateTemplate = function(templateContent, callback) {
        this.processRequestWithBody('/templates/validate', 'POST', templateContent, callback);
    }

    module.exports = Client;
})();


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * The postmark module. This is the entry point for the postmark client.
 *
 * To send an email:
 *
 * ```javascript
 * var postmark = require('postmark');
 *
 * var client = new postmark.Client('<server key>');
 *
 * client.sendEmail({ ... }, function(err, response){ ... });
 * ```
 *
 * @exports postmark
 */

var Client = __webpack_require__(41);

var AdminClient = __webpack_require__(40);

var defaults = __webpack_require__(13);

//For backwards compatibility, we forward
//parameters to a new Client constructor.
/**
 * @callback postmark
 * @param {string} apiKey The server key used to access the API.
 * @param {ClientDefaults} [defaults] The options to use when creating requests. These **defaults** are used if you do not specify your own options.
 * @property {ClientDefaults} defaults This property specifies the global defaults used when creating all clients. Altering this defaults here will cause new clients to observe the updated values, but existing clients
 * will used the defaults as they were when they were constructed.
 * @property {Client} Client A Postmark Client Constructor. This is the standard client used to send an recieve email, process stats, and handle bounces. In most cases, this is the Client you should use.
 * @property {AdminClient} AdminClient A Postmark AdminClient constructor. This is the client used
 * to administer "Account-level" modifications. You may add/update
 * Servers, as well as add and update Sender Signatures.
 * @return {Client}
 * @instance
 */

/**
 * @private
 */
var postmark = function(apiKey, options) {
  return new Client(apiKey, options);
};


postmark.defaults = defaults;
postmark.Client = Client;
postmark.AdminClient = AdminClient;

module.exports = postmark;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {
	"_args": [
		[
			{
				"raw": "postmark@^1.3.1",
				"scope": null,
				"escapedName": "postmark",
				"name": "postmark",
				"rawSpec": "^1.3.1",
				"spec": ">=1.3.1 <2.0.0",
				"type": "range"
			},
			"/Users/alexandermann/Code/apex/_examples/babel-webpack2/lib/mailer"
		]
	],
	"_from": "postmark@>=1.3.1 <2.0.0",
	"_id": "postmark@1.3.1",
	"_inCache": true,
	"_location": "/postmark",
	"_nodeVersion": "5.11.1",
	"_npmOperationalInternal": {
		"host": "packages-18-east.internal.npmjs.com",
		"tmp": "tmp/postmark-1.3.1.tgz_1477415982796_0.8395773263182491"
	},
	"_npmUser": {
		"name": "atheken",
		"email": "theken.1@osu.edu"
	},
	"_npmVersion": "3.8.6",
	"_phantomChildren": {},
	"_requested": {
		"raw": "postmark@^1.3.1",
		"scope": null,
		"escapedName": "postmark",
		"name": "postmark",
		"rawSpec": "^1.3.1",
		"spec": ">=1.3.1 <2.0.0",
		"type": "range"
	},
	"_requiredBy": [
		"/"
	],
	"_resolved": "https://registry.npmjs.org/postmark/-/postmark-1.3.1.tgz",
	"_shasum": "ffd0c36c6a7459295e8d1bf1ca97cfe9e4aaf144",
	"_shrinkwrap": null,
	"_spec": "postmark@^1.3.1",
	"_where": "/Users/alexandermann/Code/apex/_examples/babel-webpack2/lib/mailer",
	"author": {
		"name": "Chris Williams",
		"email": "voodootikigod@gmail.com"
	},
	"bugs": {
		"url": "https://github.com/wildbit/postmark.js/issues"
	},
	"contributors": [
		{
			"name": "Aaron Blum"
		},
		{
			"name": "Aleksey Aleksandrov"
		},
		{
			"name": "Alex Shepard"
		},
		{
			"name": "Andrew Theken"
		},
		{
			"name": "Antony Jones"
		},
		{
			"name": "Ben Burwell"
		},
		{
			"name": "Ben Williamson"
		},
		{
			"name": "Chris Williams"
		},
		{
			"name": "Jakub Borys"
		},
		{
			"name": "Mark Nguyen"
		},
		{
			"name": "Matt"
		},
		{
			"name": "Matthew Blackshaw"
		},
		{
			"name": "Matthew Conlen"
		},
		{
			"name": "Ryan Kirkman"
		},
		{
			"name": "Scott Anderson"
		},
		{
			"name": "Sebastien Chopin"
		},
		{
			"name": "Theophane RUPIN"
		},
		{
			"name": "codesplicer"
		},
		{
			"name": "francescoRubini"
		}
	],
	"dependencies": {
		"git-rev": "0.2.1",
		"merge": "1.2.0"
	},
	"description": "Ridiculously Simple Email Sending From Node.js For http://www.postmarkapp.com",
	"devDependencies": {
		"ink-docstrap": "git://github.com/wildbit/docstrap.git",
		"jsdoc": "3.3.0-beta1",
		"mocha": "2.1.0",
		"nconf": "0.7.1",
		"pre-commit": "1.0.2"
	},
	"directories": {
		"lib": "./lib/postmark"
	},
	"dist": {
		"shasum": "ffd0c36c6a7459295e8d1bf1ca97cfe9e4aaf144",
		"tarball": "https://registry.npmjs.org/postmark/-/postmark-1.3.1.tgz"
	},
	"engines": [
		"node >=0.8.0"
	],
	"gitHead": "ecb5d20574f5e4801399159c9b6df4d4fad69d7f",
	"homepage": "http://wildbit.github.io/postmark.js",
	"main": "./lib/postmark",
	"maintainers": [
		{
			"name": "voodootikigod",
			"email": "voodootikigod@gmail.com"
		},
		{
			"name": "atinux",
			"email": "atinux@gmail.com"
		},
		{
			"name": "atheken",
			"email": "theken.1@osu.edu"
		}
	],
	"name": "postmark",
	"optionalDependencies": {},
	"precommit": [
		"compile-docs",
		"test"
	],
	"readme": "## Postmark.js\n\nSend emails with the greatest of ease! Now your node.js application can send emails through [Postmark](http://www.postmarkapp.com).\n\n[![Build Status](https://travis-ci.org/wildbit/postmark.js.svg?branch=master)](https://travis-ci.org/wildbit/postmark.js)\n\n[Complete documentation can be found here](https://wildbit.github.io/postmark.js/), but the following information should get you started...\n\n### Install\n\nInstalling `postmark` is super simple:\n\n```bash\nnpm install postmark\n```\n\n### Sending an Email\n\nTo send your first email, all you need to do is:\n\n```javascript\nvar postmark = require(\"postmark\");\nvar client = new postmark.Client(\"<server key>\");\n\nclient.sendEmail({\n    \"From\": \"donotreply@example.com\", \n    \"To\": \"target@example.us\", \n    \"Subject\": \"Test\", \n    \"TextBody\": \"Test Message\"\n});\n```\n\nReplace <server key> with the server key provided by Postmark and you are good to go!\n\nYour message must be provided in the format specified in the [Postmark API](http://developer.postmarkapp.com/developer-build.html#message-format) and will be verified. The **member names of \nmessage payloads are case-sensitive**, and messages not matching the documented format will not\nbe accepted by the API.\n\nAll client methods accept a callback as the their last parameter, following the normal node.js callback \nconvention: \n\n```javascript\ncallback(error, result){...} \n```\n\nTo send attachments with the email, use the following format may be used:\n\n```javascript\nvar postmark = require(\"postmark\");\nvar client = new postmark.Client(\"<server key>\");\nvar fs = require('fs');\n\nclient.sendEmail({\n    \"From\": \"donotreply@example.com\", \n    \"To\": \"target@example.us\", \n    \"Subject\": \"Test\", \n    \"TextBody\": \"Test Message\",\n    \"Attachments\": [{\n      // Reading synchronously here to condense code snippet:\n      \"Content\": fs.readFileSync(\"./unicorns.jpg\").toString('base64'),\n      \"Name\": \"PrettyUnicorn.jpg\",\n      \"ContentType\": \"image/jpeg\"\n    }]\n}, function(error, result) {\n    if(error) {\n        console.error(\"Unable to send via postmark: \" + error.message);\n        return;\n    }\n    console.info(\"Sent to postmark for delivery\")\n});\n```\n\n### Sending a Batch of Messages\n\nThe Postmark API provides functionality for sending batches of emails with a single command, rather than issuing separate API calls for each message. You may access this feature by calling `Client.sendEmailBatch(...)`, which behaves similarly to `postmark.sendEmail(...)` except that the first parameter is an array of messages formatted in the same manner as outlined above:\n\nFor example:\n\n```javascript\nvar postmark = require(\"postmark\");\nvar client = new postmark.Client(\"<server key>\");\n\nvar messages = [\n    {\n        \"From\": \"email@example.com\",\n        \"To\": \"recipient@example.com\",\n        \"Subject\": \"Message #1\",\n        \"TextBody\": \"This is email number 1.\"\n    },\n    {\n        \"From\": \"email@example.com\",\n        \"To\": \"recipient@example.com\",\n        \"Subject\": \"Message #2\",\n        \"TextBody\": \"This is email number 2.\"\n    }\n];\n\npostmark.sendEmailBatch(messages, function (error, batchResults) {\n    if (error) {\n        console.error(\"Unable to send via postmark: \" + error.message);\n        return;\n    }\n    console.info(\"Messages sent to postmark\");\n});\n```\n\nThe Postmark API will return an array of statuses, one for each message sent. You may iterate over the `batchResults` for information about each sent message. For further details, please see the [Postmark Batch API](http://developer.postmarkapp.com/developer-build.html#batching-messages).\n\n### Sending an Email using a Template\n\nThe process of sending an email using a template in Postmark is similar to sending a single email, but there is a little bit of setup.\n\nIf you have not already created a template, login to the [Postmark UI](https://postmarkapp.com), navigate to one of your `Server`s, and add a template. Make note of the `TemplateId`, you will use that below. (You can also use our Template API to manage templates, if you wish to do so).\n\nAfter you have created/selected a template to use, there are minor differences in the request payload for sending with a template..\n\nFirst, you need to include the `TemplateId`, and `TemplateModel` (the values that you want to use in your template), \nNext, *exclude* the `Subject`, `TextBody`, and `HtmlBody` properties that you'd normally include when sending a non-templated email. \n\nThat's it! You're ready to send using a template stored with Postmark.\n\nThe following is a snippet showing a complete email with template request:\n\n```javascript\nvar postmark = require(\"postmark\");\nvar client = new postmark.Client(\"<server key>\");\n\nclient.sendEmailWithTemplate({\n    \"From\": \"donotreply@example.com\", \n    \"TemplateId\": <templateId>,\n    \"To\": \"target@example.us\", \n    \"TemplateModel\": {\n        \"Property1\" : 1,\n        \"Property2\" : \"hello\"\n    }\n});\n```\n\nAs with all other Postmark client calls, you can include an optional callback function, allowing you to handle any errors, and to examine the API response.\n\n*Happy Sending!*\n",
	"readmeFilename": "README.md",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/wildbit/postmark.js.git"
	},
	"scripts": {
		"compile-docs": "echo 'Generating docs...' && mkdir -p ./docs && rm -r ./docs && node_modules/.bin/jsdoc -u ./tutorials -R README.md -c jsdoc.conf.json -t ./node_modules/ink-docstrap/template -d docs ./lib/postmark/*.js && cp ./tutorials/postmark-logo.png ./docs && git add -A ./docs && echo 'Generated docs!'",
		"pull-docs": "git subtree pull --prefix docs origin gh-pages",
		"push-docs": "git subtree push --prefix docs origin gh-pages",
		"test": "mocha tests/fixture_*.js",
		"watchtests": "mocha -R list -w --recursive -G tests/fixture_*.js"
	},
	"tags": [
		"email",
		"utility",
		"postmark"
	],
	"version": "1.3.1"
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PostmarkClient = __webpack_require__(7);

var _PostmarkClient2 = _interopRequireDefault(_PostmarkClient);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (email, conversationTime) {
  // TODO:
  // should include some checks here to determine what form the time is in, but the job of this
  // function should only be to send the email and nothing more
  _PostmarkClient2.default.sendEmailWithTemplate({
    From: 'info@shiftwith.us',
    To: email,
    TemplateId: 1501821,
    TemplateModel: {
      conversation_time: conversationTime
    }
  });
}; /**
    * Created by alexandermann on 2017-04-14.
    */

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendInviteEmail;

var _PostmarkClient = __webpack_require__(7);

var _PostmarkClient2 = _interopRequireDefault(_PostmarkClient);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function sendInviteEmail(_ref) {
  var firstName = _ref.firstName,
      recipientEmail = _ref.recipientEmail,
      actionUrl = _ref.actionUrl;

  return new Promise(function (resolve, reject) {
    _PostmarkClient2.default.sendEmailWithTemplate({
      From: 'info@shiftwith.us',
      To: recipientEmail,
      TemplateId: 1473601,
      TemplateModel: {
        name: firstName,
        support_email: 'info@shiftwith.us',
        action_url: actionUrl
      }
    }, function (error, result) {
      if (error) reject(error);else resolve(result);
    });
  });
} /**
   * Created by alexandermann on 2017-03-26.
   */

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendPasswordResetEmail;

var _PostmarkClient = __webpack_require__(7);

var _PostmarkClient2 = _interopRequireDefault(_PostmarkClient);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function sendPasswordResetEmail(_ref) {
  var firstName = _ref.firstName,
      recipientEmail = _ref.recipientEmail,
      actionUrl = _ref.actionUrl,
      operatingSystem = _ref.operatingSystem,
      browserName = _ref.browserName;

  return new Promise(function (resolve, reject) {
    _PostmarkClient2.default.sendEmailWithTemplate({
      From: 'info@shiftwith.us',
      To: recipientEmail,
      TemplateId: 1448201,
      TemplateModel: {
        name: firstName,
        action_url: actionUrl,
        operating_system: operatingSystem,
        browser_name: browserName,
        support_url: 'mailto:info@shiftwith.us'
      }
    }, function (error, result) {
      if (error) reject(error);else resolve(result);
    });
  });
} /**
   * Created by alexandermann on 2017-03-27.
   */

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendVerificationEmail;

var _PostmarkClient = __webpack_require__(7);

var _PostmarkClient2 = _interopRequireDefault(_PostmarkClient);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function sendVerificationEmail(_ref) {
  var firstName = _ref.firstName,
      recipientEmail = _ref.recipientEmail,
      actionUrl = _ref.actionUrl;

  return new Promise(function (resolve, reject) {
    _PostmarkClient2.default.sendEmailWithTemplate({
      From: 'info@shiftwith.us',
      To: recipientEmail,
      TemplateId: 1446421,
      TemplateModel: {
        name: firstName,
        action_url: actionUrl,
        login_url: 'https://www.shiftwith.us/login',
        username: recipientEmail
      }
    }, function (error, result) {
      if (error) reject(error);else resolve(result);
    });
  });
} /**
   * Created by alexandermann on 2017-03-26.
   */

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(37);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(36);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mailer = __webpack_require__(35);

var _mailer2 = _interopRequireDefault(_mailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('starting function');

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e, ctx, cb) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _mailer2.default.sendEmail('alexander.mann@me.com', '12:30pm');

          case 2:
            console.log('processing event: %j', e);
            cb(null, { hello: 'world' });

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79);
__webpack_require__(81);
__webpack_require__(82);
__webpack_require__(80);
module.exports = __webpack_require__(4).Promise;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(20)
  , toLength  = __webpack_require__(32)
  , toIndex   = __webpack_require__(74);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(9)
  , call        = __webpack_require__(59)
  , isArrayIter = __webpack_require__(58)
  , anObject    = __webpack_require__(2)
  , toLength    = __webpack_require__(32)
  , getIterFn   = __webpack_require__(77)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(25)(function(){
  return Object.defineProperty(__webpack_require__(16)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(8);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(6)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(2);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(64)
  , descriptor     = __webpack_require__(29)
  , setToStringTag = __webpack_require__(17)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , macrotask = __webpack_require__(31).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(8)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(2)
  , dPs         = __webpack_require__(65)
  , enumBugKeys = __webpack_require__(23)
  , IE_PROTO    = __webpack_require__(18)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(16)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(26).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(12)
  , anObject = __webpack_require__(2)
  , getKeys  = __webpack_require__(68);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(10)
  , toObject    = __webpack_require__(75)
  , IE_PROTO    = __webpack_require__(18)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(10)
  , toIObject    = __webpack_require__(20)
  , arrayIndexOf = __webpack_require__(53)(false)
  , IE_PROTO     = __webpack_require__(18)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(67)
  , enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(3);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(1)
  , core        = __webpack_require__(4)
  , dP          = __webpack_require__(12)
  , DESCRIPTORS = __webpack_require__(5)
  , SPECIES     = __webpack_require__(0)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(2)
  , aFunction = __webpack_require__(14)
  , SPECIES   = __webpack_require__(0)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19)
  , defined   = __webpack_require__(15);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(22)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(6);
module.exports = __webpack_require__(4).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(51)
  , step             = __webpack_require__(62)
  , Iterators        = __webpack_require__(6)
  , toIObject        = __webpack_require__(20);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(27)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 79 */
/***/ (function(module, exports) {



/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(28)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(9)
  , classof            = __webpack_require__(22)
  , $export            = __webpack_require__(24)
  , isObject           = __webpack_require__(11)
  , aFunction          = __webpack_require__(14)
  , anInstance         = __webpack_require__(52)
  , forOf              = __webpack_require__(54)
  , speciesConstructor = __webpack_require__(72)
  , task               = __webpack_require__(31).set
  , microtask          = __webpack_require__(63)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(69)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(17)($Promise, PROMISE);
__webpack_require__(71)(PROMISE);
Wrapper = __webpack_require__(4)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(61)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(73)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(27)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(3)
  , Iterators     = __webpack_require__(6)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(84);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 84 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ })
/******/ ]);