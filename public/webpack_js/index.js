webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Index = __webpack_require__(21);
	var Vue = __webpack_require__(19);

	var vm = new Vue({
		el: "body",
		components: {
			index: Index
		}
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(49)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? (module.exports.options || {}) : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/lxxyx/桌面/NcuSpm/public/app/components/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var Header = __webpack_require__(3);
	var Slide = __webpack_require__(23);
	var News = __webpack_require__(28);
	var Bottom = __webpack_require__(13);
	var Vue = __webpack_require__(19);

	Vue.filter('title', function (value) {
	    if (value.length > 18) {
	        value = value.substring(0, 18) + "..";
	    };
	    return value;
	});

	exports.default = {
	    components: {
	        headernav: Header,
	        slide: Slide,
	        news: News,
	        bottom: Bottom
	    }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/slide.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(27)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? (module.exports.options || {}) : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/lxxyx/桌面/NcuSpm/public/app/components/slide.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(25);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/*! Amaze UI v2.5.2 | by Amaze UI Team | (c) 2016 AllMobilize, Inc. | Licensed under MIT | 2016-01-26T11:06:52+0800 */ 
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(26));
		else if(typeof define === 'function' && define.amd)
			define(["jquery"], factory);
		else if(typeof exports === 'object')
			exports["AMUI"] = factory(require("jquery"));
		else
			root["AMUI"] = factory(root["jQuery"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		__webpack_require__(3);
		__webpack_require__(4);
		__webpack_require__(5);
		__webpack_require__(6);
		__webpack_require__(7);
		__webpack_require__(8);
		__webpack_require__(9);
		__webpack_require__(10);
		__webpack_require__(11);
		__webpack_require__(14);
		__webpack_require__(15);
		__webpack_require__(16);
		__webpack_require__(17);
		__webpack_require__(18);
		__webpack_require__(19);
		__webpack_require__(20);
		__webpack_require__(21);
		__webpack_require__(22);
		__webpack_require__(24);
		__webpack_require__(25);
		__webpack_require__(23);
		__webpack_require__(27);
		__webpack_require__(28);
		__webpack_require__(29);
		__webpack_require__(30);
		__webpack_require__(31);
		__webpack_require__(32);
		__webpack_require__(33);
		__webpack_require__(26);
		__webpack_require__(34);
		__webpack_require__(35);
		__webpack_require__(36);
		__webpack_require__(37);
		__webpack_require__(38);
		__webpack_require__(39);
		__webpack_require__(40);
		__webpack_require__(41);
		__webpack_require__(42);
		__webpack_require__(43);
		__webpack_require__(44);
		__webpack_require__(45);
		__webpack_require__(46);
		__webpack_require__(47);
		__webpack_require__(48);
		__webpack_require__(49);
		__webpack_require__(50);
		__webpack_require__(51);
		__webpack_require__(52);
		__webpack_require__(53);
		__webpack_require__(54);

		module.exports = $.AMUI = UI;


	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		/* jshint -W040 */

		var $ = __webpack_require__(1);

		if (typeof $ === 'undefined') {
		  throw new Error('Amaze UI 2.x requires jQuery :-(\n' +
		  '\u7231\u4e0a\u4e00\u5339\u91ce\u9a6c\uff0c\u53ef\u4f60' +
		  '\u7684\u5bb6\u91cc\u6ca1\u6709\u8349\u539f\u2026');
		}

		var UI = $.AMUI || {};
		var $win = $(window);
		var doc = window.document;
		var $html = $('html');

		UI.VERSION = '2.5.2';

		UI.support = {};

		UI.support.transition = (function() {
		  var transitionEnd = (function() {
		    // https://developer.mozilla.org/en-US/docs/Web/Events/transitionend#Browser_compatibility
		    var element = doc.body || doc.documentElement;
		    var transEndEventNames = {
		      WebkitTransition: 'webkitTransitionEnd',
		      MozTransition: 'transitionend',
		      OTransition: 'oTransitionEnd otransitionend',
		      transition: 'transitionend'
		    };

		    for (var name in transEndEventNames) {
		      if (element.style[name] !== undefined) {
		        return transEndEventNames[name];
		      }
		    }
		  })();

		  return transitionEnd && {end: transitionEnd};
		})();

		UI.support.animation = (function() {
		  var animationEnd = (function() {
		    var element = doc.body || doc.documentElement;
		    var animEndEventNames = {
		      WebkitAnimation: 'webkitAnimationEnd',
		      MozAnimation: 'animationend',
		      OAnimation: 'oAnimationEnd oanimationend',
		      animation: 'animationend'
		    };

		    for (var name in animEndEventNames) {
		      if (element.style[name] !== undefined) {
		        return animEndEventNames[name];
		      }
		    }
		  })();

		  return animationEnd && {end: animationEnd};
		})();

		/* jshint -W069 */
		UI.support.touch = (
		('ontouchstart' in window &&
		navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
		(window.DocumentTouch && document instanceof window.DocumentTouch) ||
		(window.navigator['msPointerEnabled'] &&
		window.navigator['msMaxTouchPoints'] > 0) || //IE 10
		(window.navigator['pointerEnabled'] &&
		window.navigator['maxTouchPoints'] > 0) || //IE >=11
		false);

		// https://developer.mozilla.org/zh-CN/docs/DOM/MutationObserver
		UI.support.mutationobserver = (window.MutationObserver ||
		window.WebKitMutationObserver || null);

		// https://github.com/Modernizr/Modernizr/blob/924c7611c170ef2dc502582e5079507aff61e388/feature-detects/forms/validation.js#L20
		UI.support.formValidation = (typeof document.createElement('form').
		  checkValidity === 'function');

		UI.utils = {};

		/**
		 * Debounce function
		 * @param {function} func  Function to be debounced
		 * @param {number} wait Function execution threshold in milliseconds
		 * @param {bool} immediate  Whether the function should be called at
		 *                          the beginning of the delay instead of the
		 *                          end. Default is false.
		 * @desc Executes a function when it stops being invoked for n seconds
		 * @via  _.debounce() http://underscorejs.org
		 */
		UI.utils.debounce = function(func, wait, immediate) {
		  var timeout;
		  return function() {
		    var context = this;
		    var args = arguments;
		    var later = function() {
		      timeout = null;
		      if (!immediate) {
		        func.apply(context, args);
		      }
		    };
		    var callNow = immediate && !timeout;

		    clearTimeout(timeout);
		    timeout = setTimeout(later, wait);

		    if (callNow) {
		      func.apply(context, args);
		    }
		  };
		};

		UI.utils.isInView = function(element, options) {
		  var $element = $(element);
		  var visible = !!($element.width() || $element.height()) &&
		    $element.css('display') !== 'none';

		  if (!visible) {
		    return false;
		  }

		  var windowLeft = $win.scrollLeft();
		  var windowTop = $win.scrollTop();
		  var offset = $element.offset();
		  var left = offset.left;
		  var top = offset.top;

		  options = $.extend({topOffset: 0, leftOffset: 0}, options);

		  return (top + $element.height() >= windowTop &&
		  top - options.topOffset <= windowTop + $win.height() &&
		  left + $element.width() >= windowLeft &&
		  left - options.leftOffset <= windowLeft + $win.width());
		};

		/* jshint -W054 */
		UI.utils.parseOptions = UI.utils.options = function(string) {
		  if ($.isPlainObject(string)) {
		    return string;
		  }

		  var start = (string ? string.indexOf('{') : -1);
		  var options = {};

		  if (start != -1) {
		    try {
		      options = (new Function('',
		        'var json = ' + string.substr(start) +
		        '; return JSON.parse(JSON.stringify(json));'))();
		    } catch (e) {
		    }
		  }

		  return options;
		};

		/* jshint +W054 */

		UI.utils.generateGUID = function(namespace) {
		  var uid = namespace + '-' || 'am-';

		  do {
		    uid += Math.random().toString(36).substring(2, 7);
		  } while (document.getElementById(uid));

		  return uid;
		};

		// @see https://davidwalsh.name/get-absolute-url
		UI.utils.getAbsoluteUrl = (function() {
		  var a;

		  return function(url) {
		    if (!a) {
		      a = document.createElement('a');
		    }

		    a.href = url;

		    return a.href;
		  };
		})();

		/**
		 * Plugin AMUI Component to jQuery
		 *
		 * @param {String} name - plugin name
		 * @param {Function} Component - plugin constructor
		 * @param {Object} [pluginOption]
		 * @param {String} pluginOption.dataOptions
		 * @param {Function} pluginOption.methodCall - custom method call
		 * @param {Function} pluginOption.before
		 * @param {Function} pluginOption.after
		 * @since v2.4.1
		 */
		UI.plugin = function UIPlugin(name, Component, pluginOption) {
		  var old = $.fn[name];
		  pluginOption = pluginOption || {};

		  $.fn[name] = function(option) {
		    var allArgs = Array.prototype.slice.call(arguments, 0);
		    var args = allArgs.slice(1);
		    var propReturn;
		    var $set = this.each(function() {
		      var $this = $(this);
		      var dataName = 'amui.' + name;
		      var dataOptionsName = pluginOption.dataOptions || ('data-am-' + name);
		      var instance = $this.data(dataName);
		      var options = $.extend({},
		        UI.utils.parseOptions($this.attr(dataOptionsName)),
		        typeof option === 'object' && option);

		      if (!instance && option === 'destroy') {
		        return;
		      }

		      if (!instance) {
		        $this.data(dataName, (instance = new Component(this, options)));
		      }

		      // custom method call
		      if (pluginOption.methodCall) {
		        pluginOption.methodCall.call($this, allArgs, instance);
		      } else {
		        // before method call
		        pluginOption.before &&
		        pluginOption.before.call($this, allArgs, instance);

		        if (typeof option === 'string') {
		          propReturn = typeof instance[option] === 'function' ?
		            instance[option].apply(instance, args) : instance[option];
		        }

		        // after method call
		        pluginOption.after && pluginOption.after.call($this, allArgs, instance);
		      }
		    });

		    return (propReturn === undefined) ? $set : propReturn;
		  };

		  $.fn[name].Constructor = Component;

		  // no conflict
		  $.fn[name].noConflict = function() {
		    $.fn[name] = old;
		    return this;
		  };

		  UI[name] = Component;
		};

		// http://blog.alexmaccaw.com/css-transitions
		$.fn.emulateTransitionEnd = function(duration) {
		  var called = false;
		  var $el = this;

		  $(this).one(UI.support.transition.end, function() {
		    called = true;
		  });

		  var callback = function() {
		    if (!called) {
		      $($el).trigger(UI.support.transition.end);
		    }
		    $el.transitionEndTimmer = undefined;
		  };
		  this.transitionEndTimmer = setTimeout(callback, duration);
		  return this;
		};

		$.fn.redraw = function() {
		  return this.each(function() {
		    /* jshint unused:false */
		    var redraw = this.offsetHeight;
		  });
		};

		/* jshint unused:true */

		$.fn.transitionEnd = function(callback) {
		  var endEvent = UI.support.transition.end;
		  var dom = this;

		  function fireCallBack(e) {
		    callback.call(this, e);
		    endEvent && dom.off(endEvent, fireCallBack);
		  }

		  if (callback && endEvent) {
		    dom.on(endEvent, fireCallBack);
		  }

		  return this;
		};

		$.fn.removeClassRegEx = function() {
		  return this.each(function(regex) {
		    var classes = $(this).attr('class');

		    if (!classes || !regex) {
		      return false;
		    }

		    var classArray = [];
		    classes = classes.split(' ');

		    for (var i = 0, len = classes.length; i < len; i++) {
		      if (!classes[i].match(regex)) {
		        classArray.push(classes[i]);
		      }
		    }

		    $(this).attr('class', classArray.join(' '));
		  });
		};

		//
		$.fn.alterClass = function(removals, additions) {
		  var self = this;

		  if (removals.indexOf('*') === -1) {
		    // Use native jQuery methods if there is no wildcard matching
		    self.removeClass(removals);
		    return !additions ? self : self.addClass(additions);
		  }

		  var classPattern = new RegExp('\\s' +
		  removals.
		    replace(/\*/g, '[A-Za-z0-9-_]+').
		    split(' ').
		    join('\\s|\\s') +
		  '\\s', 'g');

		  self.each(function(i, it) {
		    var cn = ' ' + it.className + ' ';
		    while (classPattern.test(cn)) {
		      cn = cn.replace(classPattern, ' ');
		    }
		    it.className = $.trim(cn);
		  });

		  return !additions ? self : self.addClass(additions);
		};

		// handle multiple browsers for requestAnimationFrame()
		// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
		// https://github.com/gnarf/jquery-requestAnimationFrame
		UI.utils.rAF = (function() {
		  return window.requestAnimationFrame ||
		    window.webkitRequestAnimationFrame ||
		    window.mozRequestAnimationFrame ||
		    window.oRequestAnimationFrame ||
		      // if all else fails, use setTimeout
		    function(callback) {
		      return window.setTimeout(callback, 1000 / 60); // shoot for 60 fps
		    };
		})();

		// handle multiple browsers for cancelAnimationFrame()
		UI.utils.cancelAF = (function() {
		  return window.cancelAnimationFrame ||
		    window.webkitCancelAnimationFrame ||
		    window.mozCancelAnimationFrame ||
		    window.oCancelAnimationFrame ||
		    function(id) {
		      window.clearTimeout(id);
		    };
		})();

		// via http://davidwalsh.name/detect-scrollbar-width
		UI.utils.measureScrollbar = function() {
		  if (document.body.clientWidth >= window.innerWidth) {
		    return 0;
		  }

		  // if ($html.width() >= window.innerWidth) return;
		  // var scrollbarWidth = window.innerWidth - $html.width();
		  var $measure = $('<div ' +
		  'style="width: 100px;height: 100px;overflow: scroll;' +
		  'position: absolute;top: -9999px;"></div>');

		  $(document.body).append($measure);

		  var scrollbarWidth = $measure[0].offsetWidth - $measure[0].clientWidth;

		  $measure.remove();

		  return scrollbarWidth;
		};

		UI.utils.imageLoader = function($image, callback) {
		  function loaded() {
		    callback($image[0]);
		  }

		  function bindLoad() {
		    this.one('load', loaded);
		    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
		      var src = this.attr('src');
		      var param = src.match(/\?/) ? '&' : '?';

		      param += 'random=' + (new Date()).getTime();
		      this.attr('src', src + param);
		    }
		  }

		  if (!$image.attr('src')) {
		    loaded();
		    return;
		  }

		  if ($image[0].complete || $image[0].readyState === 4) {
		    loaded();
		  } else {
		    bindLoad.call($image);
		  }
		};

		/**
		 * https://github.com/cho45/micro-template.js
		 * (c) cho45 http://cho45.github.com/mit-license
		 */
		/* jshint -W109 */
		UI.template = function(id, data) {
		  var me = UI.template;

		  if (!me.cache[id]) {
		    me.cache[id] = (function() {
		      var name = id;
		      var string = /^[\w\-]+$/.test(id) ?
		        me.get(id) : (name = 'template(string)', id); // no warnings

		      var line = 1;
		      var body = ('try { ' + (me.variable ?
		      'var ' + me.variable + ' = this.stash;' : 'with (this.stash) { ') +
		      "this.ret += '" +
		      string.
		        replace(/<%/g, '\x11').replace(/%>/g, '\x13'). // if you want other tag, just edit this line
		        replace(/'(?![^\x11\x13]+?\x13)/g, '\\x27').
		        replace(/^\s*|\s*$/g, '').
		        replace(/\n/g, function() {
		          return "';\nthis.line = " + (++line) + "; this.ret += '\\n";
		        }).
		        replace(/\x11-(.+?)\x13/g, "' + ($1) + '").
		        replace(/\x11=(.+?)\x13/g, "' + this.escapeHTML($1) + '").
		        replace(/\x11(.+?)\x13/g, "'; $1; this.ret += '") +
		      "'; " + (me.variable ? "" : "}") + "return this.ret;" +
		      "} catch (e) { throw 'TemplateError: ' + e + ' (on " + name +
		      "' + ' line ' + this.line + ')'; } " +
		      "//@ sourceURL=" + name + "\n" // source map
		      ).replace(/this\.ret \+= '';/g, '');
		      /* jshint -W054 */
		      var func = new Function(body);
		      var map = {
		        '&': '&amp;',
		        '<': '&lt;',
		        '>': '&gt;',
		        '\x22': '&#x22;',
		        '\x27': '&#x27;'
		      };
		      var escapeHTML = function(string) {
		        return ('' + string).replace(/[&<>\'\"]/g, function(_) {
		          return map[_];
		        });
		      };

		      return function(stash) {
		        return func.call(me.context = {
		          escapeHTML: escapeHTML,
		          line: 1,
		          ret: '',
		          stash: stash
		        });
		      };
		    })();
		  }

		  return data ? me.cache[id](data) : me.cache[id];
		};
		/* jshint +W109 */
		/* jshint +W054 */

		UI.template.cache = {};

		UI.template.get = function(id) {
		  if (id) {
		    var element = document.getElementById(id);
		    return element && element.innerHTML || '';
		  }
		};

		// Dom mutation watchers
		UI.DOMWatchers = [];
		UI.DOMReady = false;
		UI.ready = function(callback) {
		  UI.DOMWatchers.push(callback);
		  if (UI.DOMReady) {
		    // console.log('Ready call');
		    callback(document);
		  }
		};

		UI.DOMObserve = function(elements, options, callback) {
		  var Observer = UI.support.mutationobserver;
		  if (!Observer) {
		    return;
		  }

		  options = $.isPlainObject(options) ?
		    options : {childList: true, subtree: true};

		  callback = typeof callback === 'function' && callback || function() {
		  };

		  $(elements).each(function() {
		    var element = this;
		    var $element = $(element);

		    if ($element.data('am.observer')) {
		      return;
		    }

		    try {
		      var observer = new Observer(UI.utils.debounce(
		        function(mutations, instance) {
		        callback.call(element, mutations, instance);
		        // trigger this event manually if MutationObserver not supported
		        $element.trigger('changed.dom.amui');
		      }, 50));

		      observer.observe(element, options);

		      $element.data('am.observer', observer);
		    } catch (e) {
		    }
		  });
		};

		$.fn.DOMObserve = function(options, callback) {
		  return this.each(function() {
		    UI.DOMObserve(this, options, callback);
		  });
		};

		if (UI.support.touch) {
		  $html.addClass('am-touch');
		}

		$(document).on('changed.dom.amui', function(e) {
		  var element = e.target;

		  // TODO: just call changed element's watcher
		  //       every watcher callback should have a key
		  //       use like this: <div data-am-observe='key1, key2'>
		  //       get keys via $(element).data('amObserve')
		  //       call functions store with these keys
		  $.each(UI.DOMWatchers, function(i, watcher) {
		    watcher(element);
		  });
		});

		$(function() {
		  var $body = $('body');

		  UI.DOMReady = true;

		  // Run default init
		  $.each(UI.DOMWatchers, function(i, watcher) {
		    watcher(document);
		  });

		  // watches DOM
		  UI.DOMObserve('[data-am-observe]');

		  $html.removeClass('no-js').addClass('js');

		  UI.support.animation && $html.addClass('cssanimations');

		  // iOS standalone mode
		  if (window.navigator.standalone) {
		    $html.addClass('am-standalone');
		  }

		  $('.am-topbar-fixed-top').length &&
		  $body.addClass('am-with-topbar-fixed-top');

		  $('.am-topbar-fixed-bottom').length &&
		  $body.addClass('am-with-topbar-fixed-bottom');

		  // Remove responsive classes in .am-layout
		  var $layout = $('.am-layout');
		  $layout.find('[class*="md-block-grid"]').alterClass('md-block-grid-*');
		  $layout.find('[class*="lg-block-grid"]').alterClass('lg-block-grid');

		  // widgets not in .am-layout
		  $('[data-am-widget]').each(function() {
		    var $widget = $(this);
		    // console.log($widget.parents('.am-layout').length)
		    if ($widget.parents('.am-layout').length === 0) {
		      $widget.addClass('am-no-layout');
		    }
		  });
		});

		module.exports = UI;


	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		/*! Hammer.JS - v2.0.4 - 2014-09-28
		 * http://hammerjs.github.io/
		 *
		 * Copyright (c) 2014 Jorik Tangelder;
		 * Licensed under the MIT license */

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		var VENDOR_PREFIXES = ['', 'webkit', 'moz', 'MS', 'ms', 'o'];
		var TEST_ELEMENT = document.createElement('div');

		var TYPE_FUNCTION = 'function';

		var round = Math.round;
		var abs = Math.abs;
		var now = Date.now;

		/**
		 * set a timeout with a given scope
		 * @param {Function} fn
		 * @param {Number} timeout
		 * @param {Object} context
		 * @returns {number}
		 */
		function setTimeoutContext(fn, timeout, context) {
		  return setTimeout(bindFn(fn, context), timeout);
		}

		/**
		 * if the argument is an array, we want to execute the fn on each entry
		 * if it aint an array we don't want to do a thing.
		 * this is used by all the methods that accept a single and array argument.
		 * @param {*|Array} arg
		 * @param {String} fn
		 * @param {Object} [context]
		 * @returns {Boolean}
		 */
		function invokeArrayArg(arg, fn, context) {
		  if (Array.isArray(arg)) {
		    each(arg, context[fn], context);
		    return true;
		  }
		  return false;
		}

		/**
		 * walk objects and arrays
		 * @param {Object} obj
		 * @param {Function} iterator
		 * @param {Object} context
		 */
		function each(obj, iterator, context) {
		  var i;

		  if (!obj) {
		    return;
		  }

		  if (obj.forEach) {
		    obj.forEach(iterator, context);
		  } else if (obj.length !== undefined) {
		    i = 0;
		    while (i < obj.length) {
		      iterator.call(context, obj[i], i, obj);
		      i++;
		    }
		  } else {
		    for (i in obj) {
		      obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
		    }
		  }
		}

		/**
		 * extend object.
		 * means that properties in dest will be overwritten by the ones in src.
		 * @param {Object} dest
		 * @param {Object} src
		 * @param {Boolean} [merge]
		 * @returns {Object} dest
		 */
		function extend(dest, src, merge) {
		  var keys = Object.keys(src);
		  var i = 0;
		  while (i < keys.length) {
		    if (!merge || (merge && dest[keys[i]] === undefined)) {
		      dest[keys[i]] = src[keys[i]];
		    }
		    i++;
		  }
		  return dest;
		}

		/**
		 * merge the values from src in the dest.
		 * means that properties that exist in dest will not be overwritten by src
		 * @param {Object} dest
		 * @param {Object} src
		 * @returns {Object} dest
		 */
		function merge(dest, src) {
		  return extend(dest, src, true);
		}

		/**
		 * simple class inheritance
		 * @param {Function} child
		 * @param {Function} base
		 * @param {Object} [properties]
		 */
		function inherit(child, base, properties) {
		  var baseP = base.prototype,
		    childP;

		  childP = child.prototype = Object.create(baseP);
		  childP.constructor = child;
		  childP._super = baseP;

		  if (properties) {
		    extend(childP, properties);
		  }
		}

		/**
		 * simple function bind
		 * @param {Function} fn
		 * @param {Object} context
		 * @returns {Function}
		 */
		function bindFn(fn, context) {
		  return function boundFn() {
		    return fn.apply(context, arguments);
		  };
		}

		/**
		 * let a boolean value also be a function that must return a boolean
		 * this first item in args will be used as the context
		 * @param {Boolean|Function} val
		 * @param {Array} [args]
		 * @returns {Boolean}
		 */
		function boolOrFn(val, args) {
		  if (typeof val == TYPE_FUNCTION) {
		    return val.apply(args ? args[0] || undefined : undefined, args);
		  }
		  return val;
		}

		/**
		 * use the val2 when val1 is undefined
		 * @param {*} val1
		 * @param {*} val2
		 * @returns {*}
		 */
		function ifUndefined(val1, val2) {
		  return (val1 === undefined) ? val2 : val1;
		}

		/**
		 * addEventListener with multiple events at once
		 * @param {EventTarget} target
		 * @param {String} types
		 * @param {Function} handler
		 */
		function addEventListeners(target, types, handler) {
		  each(splitStr(types), function(type) {
		    target.addEventListener(type, handler, false);
		  });
		}

		/**
		 * removeEventListener with multiple events at once
		 * @param {EventTarget} target
		 * @param {String} types
		 * @param {Function} handler
		 */
		function removeEventListeners(target, types, handler) {
		  each(splitStr(types), function(type) {
		    target.removeEventListener(type, handler, false);
		  });
		}

		/**
		 * find if a node is in the given parent
		 * @method hasParent
		 * @param {HTMLElement} node
		 * @param {HTMLElement} parent
		 * @return {Boolean} found
		 */
		function hasParent(node, parent) {
		  while (node) {
		    if (node == parent) {
		      return true;
		    }
		    node = node.parentNode;
		  }
		  return false;
		}

		/**
		 * small indexOf wrapper
		 * @param {String} str
		 * @param {String} find
		 * @returns {Boolean} found
		 */
		function inStr(str, find) {
		  return str.indexOf(find) > -1;
		}

		/**
		 * split string on whitespace
		 * @param {String} str
		 * @returns {Array} words
		 */
		function splitStr(str) {
		  return str.trim().split(/\s+/g);
		}

		/**
		 * find if a array contains the object using indexOf or a simple polyFill
		 * @param {Array} src
		 * @param {String} find
		 * @param {String} [findByKey]
		 * @return {Boolean|Number} false when not found, or the index
		 */
		function inArray(src, find, findByKey) {
		  if (src.indexOf && !findByKey) {
		    return src.indexOf(find);
		  } else {
		    var i = 0;
		    while (i < src.length) {
		      if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
		        return i;
		      }
		      i++;
		    }
		    return -1;
		  }
		}

		/**
		 * convert array-like objects to real arrays
		 * @param {Object} obj
		 * @returns {Array}
		 */
		function toArray(obj) {
		  return Array.prototype.slice.call(obj, 0);
		}

		/**
		 * unique array with objects based on a key (like 'id') or just by the array's value
		 * @param {Array} src [{id:1},{id:2},{id:1}]
		 * @param {String} [key]
		 * @param {Boolean} [sort=False]
		 * @returns {Array} [{id:1},{id:2}]
		 */
		function uniqueArray(src, key, sort) {
		  var results = [];
		  var values = [];
		  var i = 0;

		  while (i < src.length) {
		    var val = key ? src[i][key] : src[i];
		    if (inArray(values, val) < 0) {
		      results.push(src[i]);
		    }
		    values[i] = val;
		    i++;
		  }

		  if (sort) {
		    if (!key) {
		      results = results.sort();
		    } else {
		      results = results.sort(function sortUniqueArray(a, b) {
		        return a[key] > b[key];
		      });
		    }
		  }

		  return results;
		}

		/**
		 * get the prefixed property
		 * @param {Object} obj
		 * @param {String} property
		 * @returns {String|Undefined} prefixed
		 */
		function prefixed(obj, property) {
		  var prefix, prop;
		  var camelProp = property[0].toUpperCase() + property.slice(1);

		  var i = 0;
		  while (i < VENDOR_PREFIXES.length) {
		    prefix = VENDOR_PREFIXES[i];
		    prop = (prefix) ? prefix + camelProp : property;

		    if (prop in obj) {
		      return prop;
		    }
		    i++;
		  }
		  return undefined;
		}

		/**
		 * get a unique id
		 * @returns {number} uniqueId
		 */
		var _uniqueId = 1;
		function uniqueId() {
		  return _uniqueId++;
		}

		/**
		 * get the window object of an element
		 * @param {HTMLElement} element
		 * @returns {DocumentView|Window}
		 */
		function getWindowForElement(element) {
		  var doc = element.ownerDocument;
		  return (doc.defaultView || doc.parentWindow);
		}

		var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

		var SUPPORT_TOUCH = ('ontouchstart' in window);
		var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
		var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

		var INPUT_TYPE_TOUCH = 'touch';
		var INPUT_TYPE_PEN = 'pen';
		var INPUT_TYPE_MOUSE = 'mouse';
		var INPUT_TYPE_KINECT = 'kinect';

		var COMPUTE_INTERVAL = 25;

		var INPUT_START = 1;
		var INPUT_MOVE = 2;
		var INPUT_END = 4;
		var INPUT_CANCEL = 8;

		var DIRECTION_NONE = 1;
		var DIRECTION_LEFT = 2;
		var DIRECTION_RIGHT = 4;
		var DIRECTION_UP = 8;
		var DIRECTION_DOWN = 16;

		var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
		var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
		var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

		var PROPS_XY = ['x', 'y'];
		var PROPS_CLIENT_XY = ['clientX', 'clientY'];

		/**
		 * create new input type manager
		 * @param {Manager} manager
		 * @param {Function} callback
		 * @returns {Input}
		 * @constructor
		 */
		function Input(manager, callback) {
		  var self = this;
		  this.manager = manager;
		  this.callback = callback;
		  this.element = manager.element;
		  this.target = manager.options.inputTarget;

		  // smaller wrapper around the handler, for the scope and the enabled state of the manager,
		  // so when disabled the input events are completely bypassed.
		  this.domHandler = function(ev) {
		    if (boolOrFn(manager.options.enable, [manager])) {
		      self.handler(ev);
		    }
		  };

		  this.init();

		}

		Input.prototype = {
		  /**
		   * should handle the inputEvent data and trigger the callback
		   * @virtual
		   */
		  handler: function() {
		  },

		  /**
		   * bind the events
		   */
		  init: function() {
		    this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
		    this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
		    this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
		  },

		  /**
		   * unbind the events
		   */
		  destroy: function() {
		    this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
		    this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
		    this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
		  }
		};

		/**
		 * create new input type manager
		 * called by the Manager constructor
		 * @param {Hammer} manager
		 * @returns {Input}
		 */
		function createInputInstance(manager) {
		  var Type;
		  var inputClass = manager.options.inputClass;

		  if (inputClass) {
		    Type = inputClass;
		  } else if (SUPPORT_POINTER_EVENTS) {
		    Type = PointerEventInput;
		  } else if (SUPPORT_ONLY_TOUCH) {
		    Type = TouchInput;
		  } else if (!SUPPORT_TOUCH) {
		    Type = MouseInput;
		  } else {
		    Type = TouchMouseInput;
		  }
		  return new (Type)(manager, inputHandler);
		}

		/**
		 * handle input events
		 * @param {Manager} manager
		 * @param {String} eventType
		 * @param {Object} input
		 */
		function inputHandler(manager, eventType, input) {
		  var pointersLen = input.pointers.length;
		  var changedPointersLen = input.changedPointers.length;
		  var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
		  var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

		  input.isFirst = !!isFirst;
		  input.isFinal = !!isFinal;

		  if (isFirst) {
		    manager.session = {};
		  }

		  // source event is the normalized value of the domEvents
		  // like 'touchstart, mouseup, pointerdown'
		  input.eventType = eventType;

		  // compute scale, rotation etc
		  computeInputData(manager, input);

		  // emit secret event
		  manager.emit('hammer.input', input);

		  manager.recognize(input);
		  manager.session.prevInput = input;
		}

		/**
		 * extend the data with some usable properties like scale, rotate, velocity etc
		 * @param {Object} manager
		 * @param {Object} input
		 */
		function computeInputData(manager, input) {
		  var session = manager.session;
		  var pointers = input.pointers;
		  var pointersLength = pointers.length;

		  // store the first input to calculate the distance and direction
		  if (!session.firstInput) {
		    session.firstInput = simpleCloneInputData(input);
		  }

		  // to compute scale and rotation we need to store the multiple touches
		  if (pointersLength > 1 && !session.firstMultiple) {
		    session.firstMultiple = simpleCloneInputData(input);
		  } else if (pointersLength === 1) {
		    session.firstMultiple = false;
		  }

		  var firstInput = session.firstInput;
		  var firstMultiple = session.firstMultiple;
		  var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

		  var center = input.center = getCenter(pointers);
		  input.timeStamp = now();
		  input.deltaTime = input.timeStamp - firstInput.timeStamp;

		  input.angle = getAngle(offsetCenter, center);
		  input.distance = getDistance(offsetCenter, center);

		  computeDeltaXY(session, input);
		  input.offsetDirection = getDirection(input.deltaX, input.deltaY);

		  input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
		  input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

		  computeIntervalInputData(session, input);

		  // find the correct target
		  var target = manager.element;
		  if (hasParent(input.srcEvent.target, target)) {
		    target = input.srcEvent.target;
		  }
		  input.target = target;
		}

		function computeDeltaXY(session, input) {
		  var center = input.center;
		  var offset = session.offsetDelta || {};
		  var prevDelta = session.prevDelta || {};
		  var prevInput = session.prevInput || {};

		  if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
		    prevDelta = session.prevDelta = {
		      x: prevInput.deltaX || 0,
		      y: prevInput.deltaY || 0
		    };

		    offset = session.offsetDelta = {
		      x: center.x,
		      y: center.y
		    };
		  }

		  input.deltaX = prevDelta.x + (center.x - offset.x);
		  input.deltaY = prevDelta.y + (center.y - offset.y);
		}

		/**
		 * velocity is calculated every x ms
		 * @param {Object} session
		 * @param {Object} input
		 */
		function computeIntervalInputData(session, input) {
		  var last = session.lastInterval || input,
		    deltaTime = input.timeStamp - last.timeStamp,
		    velocity, velocityX, velocityY, direction;

		  if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
		    var deltaX = last.deltaX - input.deltaX;
		    var deltaY = last.deltaY - input.deltaY;

		    var v = getVelocity(deltaTime, deltaX, deltaY);
		    velocityX = v.x;
		    velocityY = v.y;
		    velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
		    direction = getDirection(deltaX, deltaY);

		    session.lastInterval = input;
		  } else {
		    // use latest velocity info if it doesn't overtake a minimum period
		    velocity = last.velocity;
		    velocityX = last.velocityX;
		    velocityY = last.velocityY;
		    direction = last.direction;
		  }

		  input.velocity = velocity;
		  input.velocityX = velocityX;
		  input.velocityY = velocityY;
		  input.direction = direction;
		}

		/**
		 * create a simple clone from the input used for storage of firstInput and firstMultiple
		 * @param {Object} input
		 * @returns {Object} clonedInputData
		 */
		function simpleCloneInputData(input) {
		  // make a simple copy of the pointers because we will get a reference if we don't
		  // we only need clientXY for the calculations
		  var pointers = [];
		  var i = 0;
		  while (i < input.pointers.length) {
		    pointers[i] = {
		      clientX: round(input.pointers[i].clientX),
		      clientY: round(input.pointers[i].clientY)
		    };
		    i++;
		  }

		  return {
		    timeStamp: now(),
		    pointers: pointers,
		    center: getCenter(pointers),
		    deltaX: input.deltaX,
		    deltaY: input.deltaY
		  };
		}

		/**
		 * get the center of all the pointers
		 * @param {Array} pointers
		 * @return {Object} center contains `x` and `y` properties
		 */
		function getCenter(pointers) {
		  var pointersLength = pointers.length;

		  // no need to loop when only one touch
		  if (pointersLength === 1) {
		    return {
		      x: round(pointers[0].clientX),
		      y: round(pointers[0].clientY)
		    };
		  }

		  var x = 0, y = 0, i = 0;
		  while (i < pointersLength) {
		    x += pointers[i].clientX;
		    y += pointers[i].clientY;
		    i++;
		  }

		  return {
		    x: round(x / pointersLength),
		    y: round(y / pointersLength)
		  };
		}

		/**
		 * calculate the velocity between two points. unit is in px per ms.
		 * @param {Number} deltaTime
		 * @param {Number} x
		 * @param {Number} y
		 * @return {Object} velocity `x` and `y`
		 */
		function getVelocity(deltaTime, x, y) {
		  return {
		    x: x / deltaTime || 0,
		    y: y / deltaTime || 0
		  };
		}

		/**
		 * get the direction between two points
		 * @param {Number} x
		 * @param {Number} y
		 * @return {Number} direction
		 */
		function getDirection(x, y) {
		  if (x === y) {
		    return DIRECTION_NONE;
		  }

		  if (abs(x) >= abs(y)) {
		    return x > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
		  }
		  return y > 0 ? DIRECTION_UP : DIRECTION_DOWN;
		}

		/**
		 * calculate the absolute distance between two points
		 * @param {Object} p1 {x, y}
		 * @param {Object} p2 {x, y}
		 * @param {Array} [props] containing x and y keys
		 * @return {Number} distance
		 */
		function getDistance(p1, p2, props) {
		  if (!props) {
		    props = PROPS_XY;
		  }
		  var x = p2[props[0]] - p1[props[0]],
		    y = p2[props[1]] - p1[props[1]];

		  return Math.sqrt((x * x) + (y * y));
		}

		/**
		 * calculate the angle between two coordinates
		 * @param {Object} p1
		 * @param {Object} p2
		 * @param {Array} [props] containing x and y keys
		 * @return {Number} angle
		 */
		function getAngle(p1, p2, props) {
		  if (!props) {
		    props = PROPS_XY;
		  }
		  var x = p2[props[0]] - p1[props[0]],
		    y = p2[props[1]] - p1[props[1]];
		  return Math.atan2(y, x) * 180 / Math.PI;
		}

		/**
		 * calculate the rotation degrees between two pointersets
		 * @param {Array} start array of pointers
		 * @param {Array} end array of pointers
		 * @return {Number} rotation
		 */
		function getRotation(start, end) {
		  return getAngle(end[1], end[0], PROPS_CLIENT_XY) - getAngle(start[1], start[0], PROPS_CLIENT_XY);
		}

		/**
		 * calculate the scale factor between two pointersets
		 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
		 * @param {Array} start array of pointers
		 * @param {Array} end array of pointers
		 * @return {Number} scale
		 */
		function getScale(start, end) {
		  return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
		}

		var MOUSE_INPUT_MAP = {
		  mousedown: INPUT_START,
		  mousemove: INPUT_MOVE,
		  mouseup: INPUT_END
		};

		var MOUSE_ELEMENT_EVENTS = 'mousedown';
		var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

		/**
		 * Mouse events input
		 * @constructor
		 * @extends Input
		 */
		function MouseInput() {
		  this.evEl = MOUSE_ELEMENT_EVENTS;
		  this.evWin = MOUSE_WINDOW_EVENTS;

		  this.allow = true; // used by Input.TouchMouse to disable mouse events
		  this.pressed = false; // mousedown state

		  Input.apply(this, arguments);
		}

		inherit(MouseInput, Input, {
		  /**
		   * handle mouse events
		   * @param {Object} ev
		   */
		  handler: function MEhandler(ev) {
		    var eventType = MOUSE_INPUT_MAP[ev.type];

		    // on start we want to have the left mouse button down
		    if (eventType & INPUT_START && ev.button === 0) {
		      this.pressed = true;
		    }

		    if (eventType & INPUT_MOVE && ev.which !== 1) {
		      eventType = INPUT_END;
		    }

		    // mouse must be down, and mouse events are allowed (see the TouchMouse input)
		    if (!this.pressed || !this.allow) {
		      return;
		    }

		    if (eventType & INPUT_END) {
		      this.pressed = false;
		    }

		    this.callback(this.manager, eventType, {
		      pointers: [ev],
		      changedPointers: [ev],
		      pointerType: INPUT_TYPE_MOUSE,
		      srcEvent: ev
		    });
		  }
		});

		var POINTER_INPUT_MAP = {
		  pointerdown: INPUT_START,
		  pointermove: INPUT_MOVE,
		  pointerup: INPUT_END,
		  pointercancel: INPUT_CANCEL,
		  pointerout: INPUT_CANCEL
		};

		// in IE10 the pointer types is defined as an enum
		var IE10_POINTER_TYPE_ENUM = {
		  2: INPUT_TYPE_TOUCH,
		  3: INPUT_TYPE_PEN,
		  4: INPUT_TYPE_MOUSE,
		  5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
		};

		var POINTER_ELEMENT_EVENTS = 'pointerdown';
		var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

		// IE10 has prefixed support, and case-sensitive
		if (window.MSPointerEvent) {
		  POINTER_ELEMENT_EVENTS = 'MSPointerDown';
		  POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
		}

		/**
		 * Pointer events input
		 * @constructor
		 * @extends Input
		 */
		function PointerEventInput() {
		  this.evEl = POINTER_ELEMENT_EVENTS;
		  this.evWin = POINTER_WINDOW_EVENTS;

		  Input.apply(this, arguments);

		  this.store = (this.manager.session.pointerEvents = []);
		}

		inherit(PointerEventInput, Input, {
		  /**
		   * handle mouse events
		   * @param {Object} ev
		   */
		  handler: function PEhandler(ev) {
		    var store = this.store;
		    var removePointer = false;

		    var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
		    var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
		    var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

		    var isTouch = (pointerType == INPUT_TYPE_TOUCH);

		    // get index of the event in the store
		    var storeIndex = inArray(store, ev.pointerId, 'pointerId');

		    // start and mouse must be down
		    if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
		      if (storeIndex < 0) {
		        store.push(ev);
		        storeIndex = store.length - 1;
		      }
		    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
		      removePointer = true;
		    }

		    // it not found, so the pointer hasn't been down (so it's probably a hover)
		    if (storeIndex < 0) {
		      return;
		    }

		    // update the event in the store
		    store[storeIndex] = ev;

		    this.callback(this.manager, eventType, {
		      pointers: store,
		      changedPointers: [ev],
		      pointerType: pointerType,
		      srcEvent: ev
		    });

		    if (removePointer) {
		      // remove from the store
		      store.splice(storeIndex, 1);
		    }
		  }
		});

		var SINGLE_TOUCH_INPUT_MAP = {
		  touchstart: INPUT_START,
		  touchmove: INPUT_MOVE,
		  touchend: INPUT_END,
		  touchcancel: INPUT_CANCEL
		};

		var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
		var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

		/**
		 * Touch events input
		 * @constructor
		 * @extends Input
		 */
		function SingleTouchInput() {
		  this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
		  this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
		  this.started = false;

		  Input.apply(this, arguments);
		}

		inherit(SingleTouchInput, Input, {
		  handler: function TEhandler(ev) {
		    var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

		    // should we handle the touch events?
		    if (type === INPUT_START) {
		      this.started = true;
		    }

		    if (!this.started) {
		      return;
		    }

		    var touches = normalizeSingleTouches.call(this, ev, type);

		    // when done, reset the started state
		    if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
		      this.started = false;
		    }

		    this.callback(this.manager, type, {
		      pointers: touches[0],
		      changedPointers: touches[1],
		      pointerType: INPUT_TYPE_TOUCH,
		      srcEvent: ev
		    });
		  }
		});

		/**
		 * @this {TouchInput}
		 * @param {Object} ev
		 * @param {Number} type flag
		 * @returns {undefined|Array} [all, changed]
		 */
		function normalizeSingleTouches(ev, type) {
		  var all = toArray(ev.touches);
		  var changed = toArray(ev.changedTouches);

		  if (type & (INPUT_END | INPUT_CANCEL)) {
		    all = uniqueArray(all.concat(changed), 'identifier', true);
		  }

		  return [all, changed];
		}

		var TOUCH_INPUT_MAP = {
		  touchstart: INPUT_START,
		  touchmove: INPUT_MOVE,
		  touchend: INPUT_END,
		  touchcancel: INPUT_CANCEL
		};

		var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

		/**
		 * Multi-user touch events input
		 * @constructor
		 * @extends Input
		 */
		function TouchInput() {
		  this.evTarget = TOUCH_TARGET_EVENTS;
		  this.targetIds = {};

		  Input.apply(this, arguments);
		}

		inherit(TouchInput, Input, {
		  handler: function MTEhandler(ev) {
		    var type = TOUCH_INPUT_MAP[ev.type];
		    var touches = getTouches.call(this, ev, type);
		    if (!touches) {
		      return;
		    }

		    this.callback(this.manager, type, {
		      pointers: touches[0],
		      changedPointers: touches[1],
		      pointerType: INPUT_TYPE_TOUCH,
		      srcEvent: ev
		    });
		  }
		});

		/**
		 * @this {TouchInput}
		 * @param {Object} ev
		 * @param {Number} type flag
		 * @returns {undefined|Array} [all, changed]
		 */
		function getTouches(ev, type) {
		  var allTouches = toArray(ev.touches);
		  var targetIds = this.targetIds;

		  // when there is only one touch, the process can be simplified
		  if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
		    targetIds[allTouches[0].identifier] = true;
		    return [allTouches, allTouches];
		  }

		  var i,
		    targetTouches,
		    changedTouches = toArray(ev.changedTouches),
		    changedTargetTouches = [],
		    target = this.target;

		  // get target touches from touches
		  targetTouches = allTouches.filter(function(touch) {
		    return hasParent(touch.target, target);
		  });

		  // collect touches
		  if (type === INPUT_START) {
		    i = 0;
		    while (i < targetTouches.length) {
		      targetIds[targetTouches[i].identifier] = true;
		      i++;
		    }
		  }

		  // filter changed touches to only contain touches that exist in the collected target ids
		  i = 0;
		  while (i < changedTouches.length) {
		    if (targetIds[changedTouches[i].identifier]) {
		      changedTargetTouches.push(changedTouches[i]);
		    }

		    // cleanup removed touches
		    if (type & (INPUT_END | INPUT_CANCEL)) {
		      delete targetIds[changedTouches[i].identifier];
		    }
		    i++;
		  }

		  if (!changedTargetTouches.length) {
		    return;
		  }

		  return [
		    // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
		    uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
		    changedTargetTouches
		  ];
		}

		/**
		 * Combined touch and mouse input
		 *
		 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
		 * This because touch devices also emit mouse events while doing a touch.
		 *
		 * @constructor
		 * @extends Input
		 */
		function TouchMouseInput() {
		  Input.apply(this, arguments);

		  var handler = bindFn(this.handler, this);
		  this.touch = new TouchInput(this.manager, handler);
		  this.mouse = new MouseInput(this.manager, handler);
		}

		inherit(TouchMouseInput, Input, {
		  /**
		   * handle mouse and touch events
		   * @param {Hammer} manager
		   * @param {String} inputEvent
		   * @param {Object} inputData
		   */
		  handler: function TMEhandler(manager, inputEvent, inputData) {
		    var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
		      isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

		    // when we're in a touch event, so  block all upcoming mouse events
		    // most mobile browser also emit mouseevents, right after touchstart
		    if (isTouch) {
		      this.mouse.allow = false;
		    } else if (isMouse && !this.mouse.allow) {
		      return;
		    }

		    // reset the allowMouse when we're done
		    if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
		      this.mouse.allow = true;
		    }

		    this.callback(manager, inputEvent, inputData);
		  },

		  /**
		   * remove the event listeners
		   */
		  destroy: function destroy() {
		    this.touch.destroy();
		    this.mouse.destroy();
		  }
		});

		var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
		var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

		// magical touchAction value
		var TOUCH_ACTION_COMPUTE = 'compute';
		var TOUCH_ACTION_AUTO = 'auto';
		var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
		var TOUCH_ACTION_NONE = 'none';
		var TOUCH_ACTION_PAN_X = 'pan-x';
		var TOUCH_ACTION_PAN_Y = 'pan-y';

		/**
		 * Touch Action
		 * sets the touchAction property or uses the js alternative
		 * @param {Manager} manager
		 * @param {String} value
		 * @constructor
		 */
		function TouchAction(manager, value) {
		  this.manager = manager;
		  this.set(value);
		}

		TouchAction.prototype = {
		  /**
		   * set the touchAction value on the element or enable the polyfill
		   * @param {String} value
		   */
		  set: function(value) {
		    // find out the touch-action by the event handlers
		    if (value == TOUCH_ACTION_COMPUTE) {
		      value = this.compute();
		    }

		    if (NATIVE_TOUCH_ACTION) {
		      this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
		    }
		    this.actions = value.toLowerCase().trim();
		  },

		  /**
		   * just re-set the touchAction value
		   */
		  update: function() {
		    this.set(this.manager.options.touchAction);
		  },

		  /**
		   * compute the value for the touchAction property based on the recognizer's settings
		   * @returns {String} value
		   */
		  compute: function() {
		    var actions = [];
		    each(this.manager.recognizers, function(recognizer) {
		      if (boolOrFn(recognizer.options.enable, [recognizer])) {
		        actions = actions.concat(recognizer.getTouchAction());
		      }
		    });
		    return cleanTouchActions(actions.join(' '));
		  },

		  /**
		   * this method is called on each input cycle and provides the preventing of the browser behavior
		   * @param {Object} input
		   */
		  preventDefaults: function(input) {
		    // not needed with native support for the touchAction property
		    if (NATIVE_TOUCH_ACTION) {
		      return;
		    }

		    var srcEvent = input.srcEvent;
		    var direction = input.offsetDirection;

		    // if the touch action did prevented once this session
		    if (this.manager.session.prevented) {
		      srcEvent.preventDefault();
		      return;
		    }

		    var actions = this.actions;
		    var hasNone = inStr(actions, TOUCH_ACTION_NONE);
		    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
		    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);

		    if (hasNone ||
		      (hasPanY && direction & DIRECTION_HORIZONTAL) ||
		      (hasPanX && direction & DIRECTION_VERTICAL)) {
		      return this.preventSrc(srcEvent);
		    }
		  },

		  /**
		   * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
		   * @param {Object} srcEvent
		   */
		  preventSrc: function(srcEvent) {
		    this.manager.session.prevented = true;
		    srcEvent.preventDefault();
		  }
		};

		/**
		 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
		 * @param {String} actions
		 * @returns {*}
		 */
		function cleanTouchActions(actions) {
		  // none
		  if (inStr(actions, TOUCH_ACTION_NONE)) {
		    return TOUCH_ACTION_NONE;
		  }

		  var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
		  var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

		  // pan-x and pan-y can be combined
		  if (hasPanX && hasPanY) {
		    return TOUCH_ACTION_PAN_X + ' ' + TOUCH_ACTION_PAN_Y;
		  }

		  // pan-x OR pan-y
		  if (hasPanX || hasPanY) {
		    return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
		  }

		  // manipulation
		  if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
		    return TOUCH_ACTION_MANIPULATION;
		  }

		  return TOUCH_ACTION_AUTO;
		}

		/**
		 * Recognizer flow explained; *
		 * All recognizers have the initial state of POSSIBLE when a input session starts.
		 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
		 * Example session for mouse-input: mousedown -> mousemove -> mouseup
		 *
		 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
		 * which determines with state it should be.
		 *
		 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
		 * POSSIBLE to give it another change on the next cycle.
		 *
		 *               Possible
		 *                  |
		 *            +-----+---------------+
		 *            |                     |
		 *      +-----+-----+               |
		 *      |           |               |
		 *   Failed      Cancelled          |
		 *                          +-------+------+
		 *                          |              |
		 *                      Recognized       Began
		 *                                         |
		 *                                      Changed
		 *                                         |
		 *                                  Ended/Recognized
		 */
		var STATE_POSSIBLE = 1;
		var STATE_BEGAN = 2;
		var STATE_CHANGED = 4;
		var STATE_ENDED = 8;
		var STATE_RECOGNIZED = STATE_ENDED;
		var STATE_CANCELLED = 16;
		var STATE_FAILED = 32;

		/**
		 * Recognizer
		 * Every recognizer needs to extend from this class.
		 * @constructor
		 * @param {Object} options
		 */
		function Recognizer(options) {
		  this.id = uniqueId();

		  this.manager = null;
		  this.options = merge(options || {}, this.defaults);

		  // default is enable true
		  this.options.enable = ifUndefined(this.options.enable, true);

		  this.state = STATE_POSSIBLE;

		  this.simultaneous = {};
		  this.requireFail = [];
		}

		Recognizer.prototype = {
		  /**
		   * @virtual
		   * @type {Object}
		   */
		  defaults: {},

		  /**
		   * set options
		   * @param {Object} options
		   * @return {Recognizer}
		   */
		  set: function(options) {
		    extend(this.options, options);

		    // also update the touchAction, in case something changed about the directions/enabled state
		    this.manager && this.manager.touchAction.update();
		    return this;
		  },

		  /**
		   * recognize simultaneous with an other recognizer.
		   * @param {Recognizer} otherRecognizer
		   * @returns {Recognizer} this
		   */
		  recognizeWith: function(otherRecognizer) {
		    if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
		      return this;
		    }

		    var simultaneous = this.simultaneous;
		    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
		    if (!simultaneous[otherRecognizer.id]) {
		      simultaneous[otherRecognizer.id] = otherRecognizer;
		      otherRecognizer.recognizeWith(this);
		    }
		    return this;
		  },

		  /**
		   * drop the simultaneous link. it doesnt remove the link on the other recognizer.
		   * @param {Recognizer} otherRecognizer
		   * @returns {Recognizer} this
		   */
		  dropRecognizeWith: function(otherRecognizer) {
		    if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
		      return this;
		    }

		    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
		    delete this.simultaneous[otherRecognizer.id];
		    return this;
		  },

		  /**
		   * recognizer can only run when an other is failing
		   * @param {Recognizer} otherRecognizer
		   * @returns {Recognizer} this
		   */
		  requireFailure: function(otherRecognizer) {
		    if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
		      return this;
		    }

		    var requireFail = this.requireFail;
		    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
		    if (inArray(requireFail, otherRecognizer) === -1) {
		      requireFail.push(otherRecognizer);
		      otherRecognizer.requireFailure(this);
		    }
		    return this;
		  },

		  /**
		   * drop the requireFailure link. it does not remove the link on the other recognizer.
		   * @param {Recognizer} otherRecognizer
		   * @returns {Recognizer} this
		   */
		  dropRequireFailure: function(otherRecognizer) {
		    if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
		      return this;
		    }

		    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
		    var index = inArray(this.requireFail, otherRecognizer);
		    if (index > -1) {
		      this.requireFail.splice(index, 1);
		    }
		    return this;
		  },

		  /**
		   * has require failures boolean
		   * @returns {boolean}
		   */
		  hasRequireFailures: function() {
		    return this.requireFail.length > 0;
		  },

		  /**
		   * if the recognizer can recognize simultaneous with an other recognizer
		   * @param {Recognizer} otherRecognizer
		   * @returns {Boolean}
		   */
		  canRecognizeWith: function(otherRecognizer) {
		    return !!this.simultaneous[otherRecognizer.id];
		  },

		  /**
		   * You should use `tryEmit` instead of `emit` directly to check
		   * that all the needed recognizers has failed before emitting.
		   * @param {Object} input
		   */
		  emit: function(input) {
		    var self = this;
		    var state = this.state;

		    function emit(withState) {
		      self.manager.emit(self.options.event + (withState ? stateStr(state) : ''), input);
		    }

		    // 'panstart' and 'panmove'
		    if (state < STATE_ENDED) {
		      emit(true);
		    }

		    emit(); // simple 'eventName' events

		    // panend and pancancel
		    if (state >= STATE_ENDED) {
		      emit(true);
		    }
		  },

		  /**
		   * Check that all the require failure recognizers has failed,
		   * if true, it emits a gesture event,
		   * otherwise, setup the state to FAILED.
		   * @param {Object} input
		   */
		  tryEmit: function(input) {
		    if (this.canEmit()) {
		      return this.emit(input);
		    }
		    // it's failing anyway
		    this.state = STATE_FAILED;
		  },

		  /**
		   * can we emit?
		   * @returns {boolean}
		   */
		  canEmit: function() {
		    var i = 0;
		    while (i < this.requireFail.length) {
		      if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
		        return false;
		      }
		      i++;
		    }
		    return true;
		  },

		  /**
		   * update the recognizer
		   * @param {Object} inputData
		   */
		  recognize: function(inputData) {
		    // make a new copy of the inputData
		    // so we can change the inputData without messing up the other recognizers
		    var inputDataClone = extend({}, inputData);

		    // is is enabled and allow recognizing?
		    if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
		      this.reset();
		      this.state = STATE_FAILED;
		      return;
		    }

		    // reset when we've reached the end
		    if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
		      this.state = STATE_POSSIBLE;
		    }

		    this.state = this.process(inputDataClone);

		    // the recognizer has recognized a gesture
		    // so trigger an event
		    if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
		      this.tryEmit(inputDataClone);
		    }
		  },

		  /**
		   * return the state of the recognizer
		   * the actual recognizing happens in this method
		   * @virtual
		   * @param {Object} inputData
		   * @returns {Const} STATE
		   */
		  process: function(inputData) {
		  }, // jshint ignore:line

		  /**
		   * return the preferred touch-action
		   * @virtual
		   * @returns {Array}
		   */
		  getTouchAction: function() {
		  },

		  /**
		   * called when the gesture isn't allowed to recognize
		   * like when another is being recognized or it is disabled
		   * @virtual
		   */
		  reset: function() {
		  }
		};

		/**
		 * get a usable string, used as event postfix
		 * @param {Const} state
		 * @returns {String} state
		 */
		function stateStr(state) {
		  if (state & STATE_CANCELLED) {
		    return 'cancel';
		  } else if (state & STATE_ENDED) {
		    return 'end';
		  } else if (state & STATE_CHANGED) {
		    return 'move';
		  } else if (state & STATE_BEGAN) {
		    return 'start';
		  }
		  return '';
		}

		/**
		 * direction cons to string
		 * @param {Const} direction
		 * @returns {String}
		 */
		function directionStr(direction) {
		  if (direction == DIRECTION_DOWN) {
		    return 'down';
		  } else if (direction == DIRECTION_UP) {
		    return 'up';
		  } else if (direction == DIRECTION_LEFT) {
		    return 'left';
		  } else if (direction == DIRECTION_RIGHT) {
		    return 'right';
		  }
		  return '';
		}

		/**
		 * get a recognizer by name if it is bound to a manager
		 * @param {Recognizer|String} otherRecognizer
		 * @param {Recognizer} recognizer
		 * @returns {Recognizer}
		 */
		function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
		  var manager = recognizer.manager;
		  if (manager) {
		    return manager.get(otherRecognizer);
		  }
		  return otherRecognizer;
		}

		/**
		 * This recognizer is just used as a base for the simple attribute recognizers.
		 * @constructor
		 * @extends Recognizer
		 */
		function AttrRecognizer() {
		  Recognizer.apply(this, arguments);
		}

		inherit(AttrRecognizer, Recognizer, {
		  /**
		   * @namespace
		   * @memberof AttrRecognizer
		   */
		  defaults: {
		    /**
		     * @type {Number}
		     * @default 1
		     */
		    pointers: 1
		  },

		  /**
		   * Used to check if it the recognizer receives valid input, like input.distance > 10.
		   * @memberof AttrRecognizer
		   * @param {Object} input
		   * @returns {Boolean} recognized
		   */
		  attrTest: function(input) {
		    var optionPointers = this.options.pointers;
		    return optionPointers === 0 || input.pointers.length === optionPointers;
		  },

		  /**
		   * Process the input and return the state for the recognizer
		   * @memberof AttrRecognizer
		   * @param {Object} input
		   * @returns {*} State
		   */
		  process: function(input) {
		    var state = this.state;
		    var eventType = input.eventType;

		    var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
		    var isValid = this.attrTest(input);

		    // on cancel input and we've recognized before, return STATE_CANCELLED
		    if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
		      return state | STATE_CANCELLED;
		    } else if (isRecognized || isValid) {
		      if (eventType & INPUT_END) {
		        return state | STATE_ENDED;
		      } else if (!(state & STATE_BEGAN)) {
		        return STATE_BEGAN;
		      }
		      return state | STATE_CHANGED;
		    }
		    return STATE_FAILED;
		  }
		});

		/**
		 * Pan
		 * Recognized when the pointer is down and moved in the allowed direction.
		 * @constructor
		 * @extends AttrRecognizer
		 */
		function PanRecognizer() {
		  AttrRecognizer.apply(this, arguments);

		  this.pX = null;
		  this.pY = null;
		}

		inherit(PanRecognizer, AttrRecognizer, {
		  /**
		   * @namespace
		   * @memberof PanRecognizer
		   */
		  defaults: {
		    event: 'pan',
		    threshold: 10,
		    pointers: 1,
		    direction: DIRECTION_ALL
		  },

		  getTouchAction: function() {
		    var direction = this.options.direction;
		    var actions = [];
		    if (direction & DIRECTION_HORIZONTAL) {
		      actions.push(TOUCH_ACTION_PAN_Y);
		    }
		    if (direction & DIRECTION_VERTICAL) {
		      actions.push(TOUCH_ACTION_PAN_X);
		    }
		    return actions;
		  },

		  directionTest: function(input) {
		    var options = this.options;
		    var hasMoved = true;
		    var distance = input.distance;
		    var direction = input.direction;
		    var x = input.deltaX;
		    var y = input.deltaY;

		    // lock to axis?
		    if (!(direction & options.direction)) {
		      if (options.direction & DIRECTION_HORIZONTAL) {
		        direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
		        hasMoved = x != this.pX;
		        distance = Math.abs(input.deltaX);
		      } else {
		        direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
		        hasMoved = y != this.pY;
		        distance = Math.abs(input.deltaY);
		      }
		    }
		    input.direction = direction;
		    return hasMoved && distance > options.threshold && direction & options.direction;
		  },

		  attrTest: function(input) {
		    return AttrRecognizer.prototype.attrTest.call(this, input) &&
		      (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
		  },

		  emit: function(input) {
		    this.pX = input.deltaX;
		    this.pY = input.deltaY;

		    var direction = directionStr(input.direction);
		    if (direction) {
		      this.manager.emit(this.options.event + direction, input);
		    }

		    this._super.emit.call(this, input);
		  }
		});

		/**
		 * Pinch
		 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
		 * @constructor
		 * @extends AttrRecognizer
		 */
		function PinchRecognizer() {
		  AttrRecognizer.apply(this, arguments);
		}

		inherit(PinchRecognizer, AttrRecognizer, {
		  /**
		   * @namespace
		   * @memberof PinchRecognizer
		   */
		  defaults: {
		    event: 'pinch',
		    threshold: 0,
		    pointers: 2
		  },

		  getTouchAction: function() {
		    return [TOUCH_ACTION_NONE];
		  },

		  attrTest: function(input) {
		    return this._super.attrTest.call(this, input) &&
		      (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
		  },

		  emit: function(input) {
		    this._super.emit.call(this, input);
		    if (input.scale !== 1) {
		      var inOut = input.scale < 1 ? 'in' : 'out';
		      this.manager.emit(this.options.event + inOut, input);
		    }
		  }
		});

		/**
		 * Press
		 * Recognized when the pointer is down for x ms without any movement.
		 * @constructor
		 * @extends Recognizer
		 */
		function PressRecognizer() {
		  Recognizer.apply(this, arguments);

		  this._timer = null;
		  this._input = null;
		}

		inherit(PressRecognizer, Recognizer, {
		  /**
		   * @namespace
		   * @memberof PressRecognizer
		   */
		  defaults: {
		    event: 'press',
		    pointers: 1,
		    time: 500, // minimal time of the pointer to be pressed
		    threshold: 5 // a minimal movement is ok, but keep it low
		  },

		  getTouchAction: function() {
		    return [TOUCH_ACTION_AUTO];
		  },

		  process: function(input) {
		    var options = this.options;
		    var validPointers = input.pointers.length === options.pointers;
		    var validMovement = input.distance < options.threshold;
		    var validTime = input.deltaTime > options.time;

		    this._input = input;

		    // we only allow little movement
		    // and we've reached an end event, so a tap is possible
		    if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
		      this.reset();
		    } else if (input.eventType & INPUT_START) {
		      this.reset();
		      this._timer = setTimeoutContext(function() {
		        this.state = STATE_RECOGNIZED;
		        this.tryEmit();
		      }, options.time, this);
		    } else if (input.eventType & INPUT_END) {
		      return STATE_RECOGNIZED;
		    }
		    return STATE_FAILED;
		  },

		  reset: function() {
		    clearTimeout(this._timer);
		  },

		  emit: function(input) {
		    if (this.state !== STATE_RECOGNIZED) {
		      return;
		    }

		    if (input && (input.eventType & INPUT_END)) {
		      this.manager.emit(this.options.event + 'up', input);
		    } else {
		      this._input.timeStamp = now();
		      this.manager.emit(this.options.event, this._input);
		    }
		  }
		});

		/**
		 * Rotate
		 * Recognized when two or more pointer are moving in a circular motion.
		 * @constructor
		 * @extends AttrRecognizer
		 */
		function RotateRecognizer() {
		  AttrRecognizer.apply(this, arguments);
		}

		inherit(RotateRecognizer, AttrRecognizer, {
		  /**
		   * @namespace
		   * @memberof RotateRecognizer
		   */
		  defaults: {
		    event: 'rotate',
		    threshold: 0,
		    pointers: 2
		  },

		  getTouchAction: function() {
		    return [TOUCH_ACTION_NONE];
		  },

		  attrTest: function(input) {
		    return this._super.attrTest.call(this, input) &&
		      (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
		  }
		});

		/**
		 * Swipe
		 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
		 * @constructor
		 * @extends AttrRecognizer
		 */
		function SwipeRecognizer() {
		  AttrRecognizer.apply(this, arguments);
		}

		inherit(SwipeRecognizer, AttrRecognizer, {
		  /**
		   * @namespace
		   * @memberof SwipeRecognizer
		   */
		  defaults: {
		    event: 'swipe',
		    threshold: 10,
		    velocity: 0.65,
		    direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
		    pointers: 1
		  },

		  getTouchAction: function() {
		    return PanRecognizer.prototype.getTouchAction.call(this);
		  },

		  attrTest: function(input) {
		    var direction = this.options.direction;
		    var velocity;

		    if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
		      velocity = input.velocity;
		    } else if (direction & DIRECTION_HORIZONTAL) {
		      velocity = input.velocityX;
		    } else if (direction & DIRECTION_VERTICAL) {
		      velocity = input.velocityY;
		    }

		    return this._super.attrTest.call(this, input) &&
		      direction & input.direction &&
		      input.distance > this.options.threshold &&
		      abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
		  },

		  emit: function(input) {
		    var direction = directionStr(input.direction);
		    if (direction) {
		      this.manager.emit(this.options.event + direction, input);
		    }

		    this.manager.emit(this.options.event, input);
		  }
		});

		/**
		 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
		 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
		 * a single tap.
		 *
		 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
		 * multi-taps being recognized.
		 * @constructor
		 * @extends Recognizer
		 */
		function TapRecognizer() {
		  Recognizer.apply(this, arguments);

		  // previous time and center,
		  // used for tap counting
		  this.pTime = false;
		  this.pCenter = false;

		  this._timer = null;
		  this._input = null;
		  this.count = 0;
		}

		inherit(TapRecognizer, Recognizer, {
		  /**
		   * @namespace
		   * @memberof PinchRecognizer
		   */
		  defaults: {
		    event: 'tap',
		    pointers: 1,
		    taps: 1,
		    interval: 300, // max time between the multi-tap taps
		    time: 250, // max time of the pointer to be down (like finger on the screen)
		    threshold: 2, // a minimal movement is ok, but keep it low
		    posThreshold: 10 // a multi-tap can be a bit off the initial position
		  },

		  getTouchAction: function() {
		    return [TOUCH_ACTION_MANIPULATION];
		  },

		  process: function(input) {
		    var options = this.options;

		    var validPointers = input.pointers.length === options.pointers;
		    var validMovement = input.distance < options.threshold;
		    var validTouchTime = input.deltaTime < options.time;

		    this.reset();

		    if ((input.eventType & INPUT_START) && (this.count === 0)) {
		      return this.failTimeout();
		    }

		    // we only allow little movement
		    // and we've reached an end event, so a tap is possible
		    if (validMovement && validTouchTime && validPointers) {
		      if (input.eventType != INPUT_END) {
		        return this.failTimeout();
		      }

		      var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
		      var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

		      this.pTime = input.timeStamp;
		      this.pCenter = input.center;

		      if (!validMultiTap || !validInterval) {
		        this.count = 1;
		      } else {
		        this.count += 1;
		      }

		      this._input = input;

		      // if tap count matches we have recognized it,
		      // else it has began recognizing...
		      var tapCount = this.count % options.taps;
		      if (tapCount === 0) {
		        // no failing requirements, immediately trigger the tap event
		        // or wait as long as the multitap interval to trigger
		        if (!this.hasRequireFailures()) {
		          return STATE_RECOGNIZED;
		        } else {
		          this._timer = setTimeoutContext(function() {
		            this.state = STATE_RECOGNIZED;
		            this.tryEmit();
		          }, options.interval, this);
		          return STATE_BEGAN;
		        }
		      }
		    }
		    return STATE_FAILED;
		  },

		  failTimeout: function() {
		    this._timer = setTimeoutContext(function() {
		      this.state = STATE_FAILED;
		    }, this.options.interval, this);
		    return STATE_FAILED;
		  },

		  reset: function() {
		    clearTimeout(this._timer);
		  },

		  emit: function() {
		    if (this.state == STATE_RECOGNIZED) {
		      this._input.tapCount = this.count;
		      this.manager.emit(this.options.event, this._input);
		    }
		  }
		});

		/**
		 * Simple way to create an manager with a default set of recognizers.
		 * @param {HTMLElement} element
		 * @param {Object} [options]
		 * @constructor
		 */
		function Hammer(element, options) {
		  options = options || {};
		  options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
		  return new Manager(element, options);
		}

		/**
		 * @const {string}
		 */
		Hammer.VERSION = '2.0.4';

		/**
		 * default settings
		 * @namespace
		 */
		Hammer.defaults = {
		  /**
		   * set if DOM events are being triggered.
		   * But this is slower and unused by simple implementations, so disabled by default.
		   * @type {Boolean}
		   * @default false
		   */
		  domEvents: false,

		  /**
		   * The value for the touchAction property/fallback.
		   * When set to `compute` it will magically set the correct value based on the added recognizers.
		   * @type {String}
		   * @default compute
		   */
		  touchAction: TOUCH_ACTION_COMPUTE,

		  /**
		   * @type {Boolean}
		   * @default true
		   */
		  enable: true,

		  /**
		   * EXPERIMENTAL FEATURE -- can be removed/changed
		   * Change the parent input target element.
		   * If Null, then it is being set the to main element.
		   * @type {Null|EventTarget}
		   * @default null
		   */
		  inputTarget: null,

		  /**
		   * force an input class
		   * @type {Null|Function}
		   * @default null
		   */
		  inputClass: null,

		  /**
		   * Default recognizer setup when calling `Hammer()`
		   * When creating a new Manager these will be skipped.
		   * @type {Array}
		   */
		  preset: [
		    // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
		    [RotateRecognizer, {enable: false}],
		    [PinchRecognizer, {enable: false}, ['rotate']],
		    [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
		    [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
		    [TapRecognizer],
		    [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
		    [PressRecognizer]
		  ],

		  /**
		   * Some CSS properties can be used to improve the working of Hammer.
		   * Add them to this method and they will be set when creating a new Manager.
		   * @namespace
		   */
		  cssProps: {
		    /**
		     * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
		     * @type {String}
		     * @default 'none'
		     */
		    userSelect: 'none',

		    /**
		     * Disable the Windows Phone grippers when pressing an element.
		     * @type {String}
		     * @default 'none'
		     */
		    touchSelect: 'none',

		    /**
		     * Disables the default callout shown when you touch and hold a touch target.
		     * On iOS, when you touch and hold a touch target such as a link, Safari displays
		     * a callout containing information about the link. This property allows you to disable that callout.
		     * @type {String}
		     * @default 'none'
		     */
		    touchCallout: 'none',

		    /**
		     * Specifies whether zooming is enabled. Used by IE10>
		     * @type {String}
		     * @default 'none'
		     */
		    contentZooming: 'none',

		    /**
		     * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
		     * @type {String}
		     * @default 'none'
		     */
		    userDrag: 'none',

		    /**
		     * Overrides the highlight color shown when the user taps a link or a JavaScript
		     * clickable element in iOS. This property obeys the alpha value, if specified.
		     * @type {String}
		     * @default 'rgba(0,0,0,0)'
		     */
		    tapHighlightColor: 'rgba(0,0,0,0)'
		  }
		};

		var STOP = 1;
		var FORCED_STOP = 2;

		/**
		 * Manager
		 * @param {HTMLElement} element
		 * @param {Object} [options]
		 * @constructor
		 */
		function Manager(element, options) {
		  options = options || {};

		  this.options = merge(options, Hammer.defaults);
		  this.options.inputTarget = this.options.inputTarget || element;

		  this.handlers = {};
		  this.session = {};
		  this.recognizers = [];

		  this.element = element;
		  this.input = createInputInstance(this);
		  this.touchAction = new TouchAction(this, this.options.touchAction);

		  toggleCssProps(this, true);

		  each(options.recognizers, function(item) {
		    var recognizer = this.add(new (item[0])(item[1]));
		    item[2] && recognizer.recognizeWith(item[2]);
		    item[3] && recognizer.requireFailure(item[3]);
		  }, this);
		}

		Manager.prototype = {
		  /**
		   * set options
		   * @param {Object} options
		   * @returns {Manager}
		   */
		  set: function(options) {
		    extend(this.options, options);

		    // Options that need a little more setup
		    if (options.touchAction) {
		      this.touchAction.update();
		    }
		    if (options.inputTarget) {
		      // Clean up existing event listeners and reinitialize
		      this.input.destroy();
		      this.input.target = options.inputTarget;
		      this.input.init();
		    }
		    return this;
		  },

		  /**
		   * stop recognizing for this session.
		   * This session will be discarded, when a new [input]start event is fired.
		   * When forced, the recognizer cycle is stopped immediately.
		   * @param {Boolean} [force]
		   */
		  stop: function(force) {
		    this.session.stopped = force ? FORCED_STOP : STOP;
		  },

		  /**
		   * run the recognizers!
		   * called by the inputHandler function on every movement of the pointers (touches)
		   * it walks through all the recognizers and tries to detect the gesture that is being made
		   * @param {Object} inputData
		   */
		  recognize: function(inputData) {
		    var session = this.session;
		    if (session.stopped) {
		      return;
		    }

		    // run the touch-action polyfill
		    this.touchAction.preventDefaults(inputData);

		    var recognizer;
		    var recognizers = this.recognizers;

		    // this holds the recognizer that is being recognized.
		    // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
		    // if no recognizer is detecting a thing, it is set to `null`
		    var curRecognizer = session.curRecognizer;

		    // reset when the last recognizer is recognized
		    // or when we're in a new session
		    if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
		      curRecognizer = session.curRecognizer = null;
		    }

		    var i = 0;
		    while (i < recognizers.length) {
		      recognizer = recognizers[i];

		      // find out if we are allowed try to recognize the input for this one.
		      // 1.   allow if the session is NOT forced stopped (see the .stop() method)
		      // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
		      //      that is being recognized.
		      // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
		      //      this can be setup with the `recognizeWith()` method on the recognizer.
		      if (session.stopped !== FORCED_STOP && ( // 1
		        !curRecognizer || recognizer == curRecognizer || // 2
		        recognizer.canRecognizeWith(curRecognizer))) { // 3
		        recognizer.recognize(inputData);
		      } else {
		        recognizer.reset();
		      }

		      // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
		      // current active recognizer. but only if we don't already have an active recognizer
		      if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
		        curRecognizer = session.curRecognizer = recognizer;
		      }
		      i++;
		    }
		  },

		  /**
		   * get a recognizer by its event name.
		   * @param {Recognizer|String} recognizer
		   * @returns {Recognizer|Null}
		   */
		  get: function(recognizer) {
		    if (recognizer instanceof Recognizer) {
		      return recognizer;
		    }

		    var recognizers = this.recognizers;
		    for (var i = 0; i < recognizers.length; i++) {
		      if (recognizers[i].options.event == recognizer) {
		        return recognizers[i];
		      }
		    }
		    return null;
		  },

		  /**
		   * add a recognizer to the manager
		   * existing recognizers with the same event name will be removed
		   * @param {Recognizer} recognizer
		   * @returns {Recognizer|Manager}
		   */
		  add: function(recognizer) {
		    if (invokeArrayArg(recognizer, 'add', this)) {
		      return this;
		    }

		    // remove existing
		    var existing = this.get(recognizer.options.event);
		    if (existing) {
		      this.remove(existing);
		    }

		    this.recognizers.push(recognizer);
		    recognizer.manager = this;

		    this.touchAction.update();
		    return recognizer;
		  },

		  /**
		   * remove a recognizer by name or instance
		   * @param {Recognizer|String} recognizer
		   * @returns {Manager}
		   */
		  remove: function(recognizer) {
		    if (invokeArrayArg(recognizer, 'remove', this)) {
		      return this;
		    }

		    var recognizers = this.recognizers;
		    recognizer = this.get(recognizer);
		    recognizers.splice(inArray(recognizers, recognizer), 1);

		    this.touchAction.update();
		    return this;
		  },

		  /**
		   * bind event
		   * @param {String} events
		   * @param {Function} handler
		   * @returns {EventEmitter} this
		   */
		  on: function(events, handler) {
		    var handlers = this.handlers;
		    each(splitStr(events), function(event) {
		      handlers[event] = handlers[event] || [];
		      handlers[event].push(handler);
		    });
		    return this;
		  },

		  /**
		   * unbind event, leave emit blank to remove all handlers
		   * @param {String} events
		   * @param {Function} [handler]
		   * @returns {EventEmitter} this
		   */
		  off: function(events, handler) {
		    var handlers = this.handlers;
		    each(splitStr(events), function(event) {
		      if (!handler) {
		        delete handlers[event];
		      } else {
		        handlers[event].splice(inArray(handlers[event], handler), 1);
		      }
		    });
		    return this;
		  },

		  /**
		   * emit event to the listeners
		   * @param {String} event
		   * @param {Object} data
		   */
		  emit: function(event, data) {
		    // we also want to trigger dom events
		    if (this.options.domEvents) {
		      triggerDomEvent(event, data);
		    }

		    // no handlers, so skip it all
		    var handlers = this.handlers[event] && this.handlers[event].slice();
		    if (!handlers || !handlers.length) {
		      return;
		    }

		    data.type = event;
		    data.preventDefault = function() {
		      data.srcEvent.preventDefault();
		    };

		    var i = 0;
		    while (i < handlers.length) {
		      handlers[i](data);
		      i++;
		    }
		  },

		  /**
		   * destroy the manager and unbinds all events
		   * it doesn't unbind dom events, that is the user own responsibility
		   */
		  destroy: function() {
		    this.element && toggleCssProps(this, false);

		    this.handlers = {};
		    this.session = {};
		    this.input.destroy();
		    this.element = null;
		  }
		};

		/**
		 * add/remove the css properties as defined in manager.options.cssProps
		 * @param {Manager} manager
		 * @param {Boolean} add
		 */
		function toggleCssProps(manager, add) {
		  var element = manager.element;
		  each(manager.options.cssProps, function(value, name) {
		    element.style[prefixed(element.style, name)] = add ? value : '';
		  });
		}

		/**
		 * trigger dom event
		 * @param {String} event
		 * @param {Object} data
		 */
		function triggerDomEvent(event, data) {
		  var gestureEvent = document.createEvent('Event');
		  gestureEvent.initEvent(event, true, true);
		  gestureEvent.gesture = data;
		  data.target.dispatchEvent(gestureEvent);
		}

		extend(Hammer, {
		  INPUT_START: INPUT_START,
		  INPUT_MOVE: INPUT_MOVE,
		  INPUT_END: INPUT_END,
		  INPUT_CANCEL: INPUT_CANCEL,

		  STATE_POSSIBLE: STATE_POSSIBLE,
		  STATE_BEGAN: STATE_BEGAN,
		  STATE_CHANGED: STATE_CHANGED,
		  STATE_ENDED: STATE_ENDED,
		  STATE_RECOGNIZED: STATE_RECOGNIZED,
		  STATE_CANCELLED: STATE_CANCELLED,
		  STATE_FAILED: STATE_FAILED,

		  DIRECTION_NONE: DIRECTION_NONE,
		  DIRECTION_LEFT: DIRECTION_LEFT,
		  DIRECTION_RIGHT: DIRECTION_RIGHT,
		  DIRECTION_UP: DIRECTION_UP,
		  DIRECTION_DOWN: DIRECTION_DOWN,
		  DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
		  DIRECTION_VERTICAL: DIRECTION_VERTICAL,
		  DIRECTION_ALL: DIRECTION_ALL,

		  Manager: Manager,
		  Input: Input,
		  TouchAction: TouchAction,

		  TouchInput: TouchInput,
		  MouseInput: MouseInput,
		  PointerEventInput: PointerEventInput,
		  TouchMouseInput: TouchMouseInput,
		  SingleTouchInput: SingleTouchInput,

		  Recognizer: Recognizer,
		  AttrRecognizer: AttrRecognizer,
		  Tap: TapRecognizer,
		  Pan: PanRecognizer,
		  Swipe: SwipeRecognizer,
		  Pinch: PinchRecognizer,
		  Rotate: RotateRecognizer,
		  Press: PressRecognizer,

		  on: addEventListeners,
		  off: removeEventListeners,
		  each: each,
		  merge: merge,
		  extend: extend,
		  inherit: inherit,
		  bindFn: bindFn,
		  prefixed: prefixed
		});

		// jquery.hammer.js
		// This jQuery plugin is just a small wrapper around the Hammer() class.
		// It also extends the Manager.emit method by triggering jQuery events.
		// $(element).hammer(options).bind("pan", myPanHandler);
		// The Hammer instance is stored at $element.data("hammer").
		// https://github.com/hammerjs/jquery.hammer.js

		(function($, Hammer) {
		  function hammerify(el, options) {
		    var $el = $(el);
		    if (!$el.data('hammer')) {
		      $el.data('hammer', new Hammer($el[0], options));
		    }
		  }

		  $.fn.hammer = function(options) {
		    return this.each(function() {
		      hammerify(this, options);
		    });
		  };

		  // extend the emit method to also trigger jQuery events
		  Hammer.Manager.prototype.emit = (function(originalEmit) {
		    return function(type, data) {
		      originalEmit.call(this, type, data);
		      $(this.element).trigger({
		        type: type,
		        gesture: data
		      });
		    };
		  })(Hammer.Manager.prototype.emit);
		})($, Hammer);

		module.exports = UI.Hammer = Hammer;


	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var UI = __webpack_require__(2);

		/* jshint -W101, -W106 */
		/**
		 * Add to Homescreen v3.2.2
		 * (c) 2015 Matteo Spinelli
		 * @license: http://cubiq.org/license
		 */

		// Check for addEventListener browser support (prevent errors in IE<9)
		var _eventListener = 'addEventListener' in window;

		// Check if document is loaded, needed by autostart
		var _DOMReady = false;
		if (document.readyState === 'complete') {
		  _DOMReady = true;
		} else if (_eventListener) {
		  window.addEventListener('load', loaded, false);
		}

		function loaded() {
		  window.removeEventListener('load', loaded, false);
		  _DOMReady = true;
		}

		// regex used to detect if app has been added to the homescreen
		var _reSmartURL = /\/ath(\/)?$/;
		var _reQueryString = /([\?&]ath=[^&]*$|&ath=[^&]*(&))/;

		// singleton
		var _instance;
		function ath(options) {
		  _instance = _instance || new ath.Class(options);

		  return _instance;
		}

		// message in all supported languages
		ath.intl = {
		  en_us: {
		    ios: 'To add this web app to the home screen: tap %icon and then <strong>Add to Home Screen</strong>.',
		    android: 'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>'
		  },

		  zh_cn: {
		    ios: '如要把应用程式加至主屏幕,请点击%icon, 然后<strong>加至主屏幕</strong>',
		    android: 'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>'
		  },

		  zh_tw: {
		    ios: '如要把應用程式加至主屏幕, 請點擊%icon, 然後<strong>加至主屏幕</strong>.',
		    android: 'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>'
		  }
		};

		// Add 2 characters language support (Android mostly)
		for (var lang in ath.intl) {
		  ath.intl[lang.substr(0, 2)] = ath.intl[lang];
		}

		// default options
		ath.defaults = {
		  appID: 'org.cubiq.addtohome',		// local storage name (no need to change)
		  fontSize: 15,				// base font size, used to properly resize the popup based on viewport scale factor
		  debug: false,				// override browser checks
		  logging: false,				// log reasons for showing or not showing to js console; defaults to true when debug is true
		  modal: false,				// prevent further actions until the message is closed
		  mandatory: false,			// you can't proceed if you don't add the app to the homescreen
		  autostart: true,			// show the message automatically
		  skipFirstVisit: false,		// show only to returning visitors (ie: skip the first time you visit)
		  startDelay: 1,				// display the message after that many seconds from page load
		  lifespan: 15,				// life of the message in seconds
		  displayPace: 1440,			// minutes before the message is shown again (0: display every time, default 24 hours)
		  maxDisplayCount: 0,			// absolute maximum number of times the message will be shown to the user (0: no limit)
		  icon: true,					// add touch icon to the message
		  message: '',				// the message can be customized
		  validLocation: [],			// list of pages where the message will be shown (array of regexes)
		  onInit: null,				// executed on instance creation
		  onShow: null,				// executed when the message is shown
		  onRemove: null,				// executed when the message is removed
		  onAdd: null,				// when the application is launched the first time from the homescreen (guesstimate)
		  onPrivate: null,			// executed if user is in private mode
		  privateModeOverride: false,	// show the message even in private mode (very rude)
		  detectHomescreen: false		// try to detect if the site has been added to the homescreen (false | true | 'hash' | 'queryString' | 'smartURL')
		};

		// browser info and capability
		var _ua = window.navigator.userAgent;

		var _nav = window.navigator;
		_extend(ath, {
		  hasToken: document.location.hash == '#ath' || _reSmartURL.test(document.location.href) || _reQueryString.test(document.location.search),
		  isRetina: window.devicePixelRatio && window.devicePixelRatio > 1,
		  isIDevice: (/iphone|ipod|ipad/i).test(_ua),
		  isMobileChrome: _ua.indexOf('Android') > -1 && (/Chrome\/[.0-9]*/).test(_ua) && _ua.indexOf("Version") == -1,
		  isMobileIE: _ua.indexOf('Windows Phone') > -1,
		  language: _nav.language && _nav.language.toLowerCase().replace('-', '_') || ''
		});

		// falls back to en_us if language is unsupported
		ath.language = ath.language && ath.language in ath.intl ? ath.language : 'en_us';

		ath.isMobileSafari = ath.isIDevice && _ua.indexOf('Safari') > -1 && _ua.indexOf('CriOS') < 0;
		ath.OS = ath.isIDevice ? 'ios' : ath.isMobileChrome ? 'android' : ath.isMobileIE ? 'windows' : 'unsupported';

		ath.OSVersion = _ua.match(/(OS|Android) (\d+[_\.]\d+)/);
		ath.OSVersion = ath.OSVersion && ath.OSVersion[2] ? +ath.OSVersion[2].replace('_', '.') : 0;

		ath.isStandalone = 'standalone' in window.navigator && window.navigator.standalone;
		ath.isTablet = (ath.isMobileSafari && _ua.indexOf('iPad') > -1) || (ath.isMobileChrome && _ua.indexOf('Mobile') < 0);

		ath.isCompatible = (ath.isMobileSafari && ath.OSVersion >= 6) || ath.isMobileChrome;	// TODO: add winphone

		var _defaultSession = {
		  lastDisplayTime: 0,			// last time we displayed the message
		  returningVisitor: false,	// is this the first time you visit
		  displayCount: 0,			// number of times the message has been shown
		  optedout: false,			// has the user opted out
		  added: false				// has been actually added to the homescreen
		};

		ath.removeSession = function(appID) {
		  try {
		    if (!localStorage) {
		      throw new Error('localStorage is not defined');
		    }

		    localStorage.removeItem(appID || ath.defaults.appID);
		  } catch (e) {
		    // we are most likely in private mode
		  }
		};

		ath.doLog = function(logStr) {
		  if (this.options.logging) {
		    console.log(logStr);
		  }
		};

		ath.Class = function(options) {
		  // class methods
		  this.doLog = ath.doLog;

		  // merge default options with user config
		  this.options = _extend({}, ath.defaults);
		  _extend(this.options, options);
		  // override defaults that are dependent on each other
		  if (this.options.debug) {
		    this.options.logging = true;
		  }

		  // IE<9 so exit (I hate you, really)
		  if (!_eventListener) {
		    return;
		  }

		  // normalize some options
		  this.options.mandatory = this.options.mandatory && ( 'standalone' in window.navigator || this.options.debug );
		  this.options.modal = this.options.modal || this.options.mandatory;
		  if (this.options.mandatory) {
		    this.options.startDelay = -0.5;		// make the popup hasty
		  }
		  this.options.detectHomescreen = this.options.detectHomescreen === true ? 'hash' : this.options.detectHomescreen;

		  // setup the debug environment
		  if (this.options.debug) {
		    ath.isCompatible = true;
		    ath.OS = typeof this.options.debug == 'string' ? this.options.debug : ath.OS == 'unsupported' ? 'android' : ath.OS;
		    ath.OSVersion = ath.OS == 'ios' ? '8' : '4';
		  }

		  // the element the message will be appended to
		  this.container = document.documentElement;

		  // load session
		  this.session = this.getItem(this.options.appID);
		  this.session = this.session ? JSON.parse(this.session) : undefined;

		  // user most likely came from a direct link containing our token, we don't need it and we remove it
		  if (ath.hasToken && ( !ath.isCompatible || !this.session )) {
		    ath.hasToken = false;
		    _removeToken();
		  }

		  // the device is not supported
		  if (!ath.isCompatible) {
		    this.doLog("Add to homescreen: not displaying callout because device not supported");
		    return;
		  }

		  this.session = this.session || _defaultSession;

		  // check if we can use the local storage
		  try {
		    if (!localStorage) {
		      throw new Error('localStorage is not defined');
		    }

		    localStorage.setItem(this.options.appID, JSON.stringify(this.session));
		    ath.hasLocalStorage = true;
		  } catch (e) {
		    // we are most likely in private mode
		    ath.hasLocalStorage = false;

		    if (this.options.onPrivate) {
		      this.options.onPrivate.call(this);
		    }
		  }

		  // check if this is a valid location
		  var isValidLocation = !this.options.validLocation.length;
		  for (var i = this.options.validLocation.length; i--;) {
		    if (this.options.validLocation[i].test(document.location.href)) {
		      isValidLocation = true;
		      break;
		    }
		  }

		  // check compatibility with old versions of add to homescreen. Opt-out if an old session is found
		  if (this.getItem('addToHome')) {
		    this.optOut();
		  }

		  // critical errors:
		  if (this.session.optedout) {
		    this.doLog("Add to homescreen: not displaying callout because user opted out");
		    return;
		  }
		  if (this.session.added) {
		    this.doLog("Add to homescreen: not displaying callout because already added to the homescreen");
		    return;
		  }
		  if (!isValidLocation) {
		    this.doLog("Add to homescreen: not displaying callout because not a valid location");
		    return;
		  }

		  // check if the app is in stand alone mode
		  if (ath.isStandalone) {
		    // execute the onAdd event if we haven't already
		    if (!this.session.added) {
		      this.session.added = true;
		      this.updateSession();

		      if (this.options.onAdd && ath.hasLocalStorage) {	// double check on localstorage to avoid multiple calls to the custom event
		        this.options.onAdd.call(this);
		      }
		    }

		    this.doLog("Add to homescreen: not displaying callout because in standalone mode");
		    return;
		  }

		  // (try to) check if the page has been added to the homescreen
		  if (this.options.detectHomescreen) {
		    // the URL has the token, we are likely coming from the homescreen
		    if (ath.hasToken) {
		      _removeToken();		// we don't actually need the token anymore, we remove it to prevent redistribution

		      // this is called the first time the user opens the app from the homescreen
		      if (!this.session.added) {
		        this.session.added = true;
		        this.updateSession();

		        if (this.options.onAdd && ath.hasLocalStorage) {	// double check on localstorage to avoid multiple calls to the custom event
		          this.options.onAdd.call(this);
		        }
		      }

		      this.doLog("Add to homescreen: not displaying callout because URL has token, so we are likely coming from homescreen");
		      return;
		    }

		    // URL doesn't have the token, so add it
		    if (this.options.detectHomescreen == 'hash') {
		      history.replaceState('', window.document.title, document.location.href + '#ath');
		    } else if (this.options.detectHomescreen == 'smartURL') {
		      history.replaceState('', window.document.title, document.location.href.replace(/(\/)?$/, '/ath$1'));
		    } else {
		      history.replaceState('', window.document.title, document.location.href + (document.location.search ? '&' : '?' ) + 'ath=');
		    }
		  }

		  // check if this is a returning visitor
		  if (!this.session.returningVisitor) {
		    this.session.returningVisitor = true;
		    this.updateSession();

		    // we do not show the message if this is your first visit
		    if (this.options.skipFirstVisit) {
		      this.doLog("Add to homescreen: not displaying callout because skipping first visit");
		      return;
		    }
		  }

		  // we do no show the message in private mode
		  if (!this.options.privateModeOverride && !ath.hasLocalStorage) {
		    this.doLog("Add to homescreen: not displaying callout because browser is in private mode");
		    return;
		  }

		  // all checks passed, ready to display
		  this.ready = true;

		  if (this.options.onInit) {
		    this.options.onInit.call(this);
		  }

		  if (this.options.autostart) {
		    this.doLog("Add to homescreen: autostart displaying callout");
		    this.show();
		  }
		};

		ath.Class.prototype = {
		  // event type to method conversion
		  events: {
		    load: '_delayedShow',
		    error: '_delayedShow',
		    orientationchange: 'resize',
		    resize: 'resize',
		    scroll: 'resize',
		    click: 'remove',
		    touchmove: '_preventDefault',
		    transitionend: '_removeElements',
		    webkitTransitionEnd: '_removeElements',
		    MSTransitionEnd: '_removeElements'
		  },

		  handleEvent: function(e) {
		    var type = this.events[e.type];
		    if (type) {
		      this[type](e);
		    }
		  },

		  show: function(force) {
		    // in autostart mode wait for the document to be ready
		    if (this.options.autostart && !_DOMReady) {
		      setTimeout(this.show.bind(this), 50);
		      // we are not displaying callout because DOM not ready, but don't log that because
		      // it would log too frequently
		      return;
		    }

		    // message already on screen
		    if (this.shown) {
		      this.doLog("Add to homescreen: not displaying callout because already shown on screen");
		      return;
		    }

		    var now = Date.now();
		    var lastDisplayTime = this.session.lastDisplayTime;

		    if (force !== true) {
		      // this is needed if autostart is disabled and you programmatically call the show() method
		      if (!this.ready) {
		        this.doLog("Add to homescreen: not displaying callout because not ready");
		        return;
		      }

		      // we obey the display pace (prevent the message to popup too often)
		      if (now - lastDisplayTime < this.options.displayPace * 60000) {
		        this.doLog("Add to homescreen: not displaying callout because displayed recently");
		        return;
		      }

		      // obey the maximum number of display count
		      if (this.options.maxDisplayCount && this.session.displayCount >= this.options.maxDisplayCount) {
		        this.doLog("Add to homescreen: not displaying callout because displayed too many times already");
		        return;
		      }
		    }

		    this.shown = true;

		    // increment the display count
		    this.session.lastDisplayTime = now;
		    this.session.displayCount++;
		    this.updateSession();

		    // try to get the highest resolution application icon
		    if (!this.applicationIcon) {
		      if (ath.OS == 'ios') {
		        this.applicationIcon = document.querySelector('head link[rel^=apple-touch-icon][sizes="152x152"],head link[rel^=apple-touch-icon][sizes="144x144"],head link[rel^=apple-touch-icon][sizes="120x120"],head link[rel^=apple-touch-icon][sizes="114x114"],head link[rel^=apple-touch-icon]');
		      } else {
		        this.applicationIcon = document.querySelector('head link[rel^="shortcut icon"][sizes="196x196"],head link[rel^=apple-touch-icon]');
		      }
		    }

		    var message = '';

		    if (typeof this.options.message == 'object' && ath.language in this.options.message) {		// use custom language message
		      message = this.options.message[ath.language][ath.OS];
		    } else if (typeof this.options.message == 'object' && ath.OS in this.options.message) {		// use custom os message
		      message = this.options.message[ath.OS];
		    } else if (this.options.message in ath.intl) {				// you can force the locale
		      message = ath.intl[this.options.message][ath.OS];
		    } else if (this.options.message !== '') {						// use a custom message
		      message = this.options.message;
		    } else if (ath.OS in ath.intl[ath.language]) {				// otherwise we use our message
		      message = ath.intl[ath.language][ath.OS];
		    }

		    // add the action icon
		    message = '<p>' + message.replace('%icon', '<span class="ath-action-icon">icon</span>') + '</p>';

		    // create the message container
		    this.viewport = document.createElement('div');
		    this.viewport.className = 'ath-viewport';
		    if (this.options.modal) {
		      this.viewport.className += ' ath-modal';
		    }
		    if (this.options.mandatory) {
		      this.viewport.className += ' ath-mandatory';
		    }
		    this.viewport.style.position = 'absolute';

		    // create the actual message element
		    this.element = document.createElement('div');
		    this.element.className = 'ath-container ath-' + ath.OS + ' ath-' + ath.OS + (ath.OSVersion + '').substr(0, 1) + ' ath-' + (ath.isTablet ? 'tablet' : 'phone');
		    this.element.style.cssText = '-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0s;-webkit-transition-timing-function:ease-out;transition-property:transform,opacity;transition-duration:0s;transition-timing-function:ease-out;';
		    this.element.style.webkitTransform = 'translate3d(0,-' + window.innerHeight + 'px,0)';
		    this.element.style.transform = 'translate3d(0,-' + window.innerHeight + 'px,0)';

		    // add the application icon
		    if (this.options.icon && this.applicationIcon) {
		      this.element.className += ' ath-icon';
		      this.img = document.createElement('img');
		      this.img.className = 'ath-application-icon';
		      this.img.addEventListener('load', this, false);
		      this.img.addEventListener('error', this, false);

		      this.img.src = this.applicationIcon.href;
		      this.element.appendChild(this.img);
		    }

		    this.element.innerHTML += message;

		    // we are not ready to show, place the message out of sight
		    this.viewport.style.left = '-99999em';

		    // attach all elements to the DOM
		    this.viewport.appendChild(this.element);
		    this.container.appendChild(this.viewport);

		    // if we don't have to wait for an image to load, show the message right away
		    if (this.img) {
		      this.doLog("Add to homescreen: not displaying callout because waiting for img to load");
		    } else {
		      this._delayedShow();
		    }
		  },

		  _delayedShow: function(e) {
		    setTimeout(this._show.bind(this), this.options.startDelay * 1000 + 500);
		  },

		  _show: function() {
		    var that = this;

		    // update the viewport size and orientation
		    this.updateViewport();

		    // reposition/resize the message on orientation change
		    window.addEventListener('resize', this, false);
		    window.addEventListener('scroll', this, false);
		    window.addEventListener('orientationchange', this, false);

		    if (this.options.modal) {
		      // lock any other interaction
		      document.addEventListener('touchmove', this, true);
		    }

		    // Enable closing after 1 second
		    if (!this.options.mandatory) {
		      setTimeout(function() {
		        that.element.addEventListener('click', that, true);
		      }, 1000);
		    }

		    // kick the animation
		    setTimeout(function() {
		      that.element.style.webkitTransitionDuration = '1.2s';
		      that.element.style.transitionDuration = '1.2s';
		      that.element.style.webkitTransform = 'translate3d(0,0,0)';
		      that.element.style.transform = 'translate3d(0,0,0)';
		    }, 0);

		    // set the destroy timer
		    if (this.options.lifespan) {
		      this.removeTimer = setTimeout(this.remove.bind(this), this.options.lifespan * 1000);
		    }

		    // fire the custom onShow event
		    if (this.options.onShow) {
		      this.options.onShow.call(this);
		    }
		  },

		  remove: function() {
		    clearTimeout(this.removeTimer);

		    // clear up the event listeners
		    if (this.img) {
		      this.img.removeEventListener('load', this, false);
		      this.img.removeEventListener('error', this, false);
		    }

		    window.removeEventListener('resize', this, false);
		    window.removeEventListener('scroll', this, false);
		    window.removeEventListener('orientationchange', this, false);
		    document.removeEventListener('touchmove', this, true);
		    this.element.removeEventListener('click', this, true);

		    // remove the message element on transition end
		    this.element.addEventListener('transitionend', this, false);
		    this.element.addEventListener('webkitTransitionEnd', this, false);
		    this.element.addEventListener('MSTransitionEnd', this, false);

		    // start the fade out animation
		    this.element.style.webkitTransitionDuration = '0.3s';
		    this.element.style.opacity = '0';
		  },

		  _removeElements: function() {
		    this.element.removeEventListener('transitionend', this, false);
		    this.element.removeEventListener('webkitTransitionEnd', this, false);
		    this.element.removeEventListener('MSTransitionEnd', this, false);

		    // remove the message from the DOM
		    this.container.removeChild(this.viewport);

		    this.shown = false;

		    // fire the custom onRemove event
		    if (this.options.onRemove) {
		      this.options.onRemove.call(this);
		    }
		  },

		  updateViewport: function() {
		    if (!this.shown) {
		      return;
		    }

		    this.viewport.style.width = window.innerWidth + 'px';
		    this.viewport.style.height = window.innerHeight + 'px';
		    this.viewport.style.left = window.scrollX + 'px';
		    this.viewport.style.top = window.scrollY + 'px';

		    var clientWidth = document.documentElement.clientWidth;

		    this.orientation = clientWidth > document.documentElement.clientHeight ? 'landscape' : 'portrait';

		    var screenWidth = ath.OS == 'ios' ? this.orientation == 'portrait' ? screen.width : screen.height : screen.width;
		    this.scale = screen.width > clientWidth ? 1 : screenWidth / window.innerWidth;

		    this.element.style.fontSize = this.options.fontSize / this.scale + 'px';
		  },

		  resize: function() {
		    clearTimeout(this.resizeTimer);
		    this.resizeTimer = setTimeout(this.updateViewport.bind(this), 100);
		  },

		  updateSession: function() {
		    if (ath.hasLocalStorage === false) {
		      return;
		    }

		    if (localStorage) {
		      localStorage.setItem(this.options.appID, JSON.stringify(this.session));
		    }
		  },

		  clearSession: function() {
		    this.session = _defaultSession;
		    this.updateSession();
		  },

		  getItem: function(item) {
		    try {
		      if (!localStorage) {
		        throw new Error('localStorage is not defined');
		      }

		      return localStorage.getItem(item);
		    } catch (e) {
		      // Preventing exception for some browsers when fetching localStorage key
		      ath.hasLocalStorage = false;
		    }
		  },

		  optOut: function() {
		    this.session.optedout = true;
		    this.updateSession();
		  },

		  optIn: function() {
		    this.session.optedout = false;
		    this.updateSession();
		  },

		  clearDisplayCount: function() {
		    this.session.displayCount = 0;
		    this.updateSession();
		  },

		  _preventDefault: function(e) {
		    e.preventDefault();
		    e.stopPropagation();
		  }
		};

		// utility
		function _extend(target, obj) {
		  for (var i in obj) {
		    target[i] = obj[i];
		  }

		  return target;
		}

		function _removeToken() {
		  if (document.location.hash == '#ath') {
		    history.replaceState('', window.document.title, document.location.href.split('#')[0]);
		  }

		  if (_reSmartURL.test(document.location.href)) {
		    history.replaceState('', window.document.title, document.location.href.replace(_reSmartURL, '$1'));
		  }

		  if (_reQueryString.test(document.location.search)) {
		    history.replaceState('', window.document.title, document.location.href.replace(_reQueryString, '$2'));
		  }
		}

		/* jshint +W101, +W106 */

		ath.VERSION = '3.2.2';

		module.exports = UI.addToHomescreen = ath;


	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		/**
		 * @via https://github.com/Minwe/bootstrap/blob/master/js/alert.js
		 * @copyright Copyright 2013 Twitter, Inc.
		 * @license Apache 2.0
		 */

		// Alert Class
		// NOTE: removeElement option is unavailable now
		var Alert = function(element, options) {
		  var _this = this;
		  this.options = $.extend({}, Alert.DEFAULTS, options);
		  this.$element = $(element);

		  this.$element
		    .addClass('am-fade am-in')
		    .on('click.alert.amui', '.am-close', function() {
		      _this.close();
		    });
		};

		Alert.DEFAULTS = {
		  removeElement: true
		};

		Alert.prototype.close = function() {
		  var $element = this.$element;

		  $element.trigger('close.alert.amui').removeClass('am-in');

		  function processAlert() {
		    $element.trigger('closed.alert.amui').remove();
		  }

		  UI.support.transition && $element.hasClass('am-fade') ?
		    $element
		      .one(UI.support.transition.end, processAlert)
		      .emulateTransitionEnd(200) :
		    processAlert();
		};

		// plugin
		UI.plugin('alert', Alert);

		// Init code
		$(document).on('click.alert.amui.data-api', '[data-am-alert]', function(e) {
		  var $target = $(e.target);
		  $target.is('.am-close') && $(this).alert('close');
		});

		module.exports = Alert;


	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		/**
		 * @via https://github.com/twbs/bootstrap/blob/master/js/button.js
		 * @copyright (c) 2011-2014 Twitter, Inc
		 * @license The MIT License
		 */

		var Button = function(element, options) {
		  this.$element = $(element);
		  this.options = $.extend({}, Button.DEFAULTS, options);
		  this.isLoading = false;
		  this.hasSpinner = false;
		};

		Button.DEFAULTS = {
		  loadingText: 'loading...',
		  disabledClassName: 'am-disabled',
		  spinner: undefined
		};

		Button.prototype.setState = function(state, stateText) {
		  var $element = this.$element;
		  var disabled = 'disabled';
		  var data = $element.data();
		  var options = this.options;
		  var val = $element.is('input') ? 'val' : 'html';
		  var stateClassName = 'am-btn-' + state + ' ' + options.disabledClassName;

		  state += 'Text';

		  if (!options.resetText) {
		    options.resetText = $element[val]();
		  }

		  // add spinner for element with html()
		  if (UI.support.animation && options.spinner &&
		    val === 'html' && !this.hasSpinner) {
		    options.loadingText = '<span class="am-icon-' + options.spinner +
		      ' am-icon-spin"></span>' + options.loadingText;

		    this.hasSpinner = true;
		  }

		  stateText = stateText ||
		    (data[state] === undefined ? options[state] : data[state]);

		  $element[val](stateText);

		  // push to event loop to allow forms to submit
		  setTimeout($.proxy(function() {
		    // TODO: add stateClass for other states
		    if (state === 'loadingText') {
		      $element.addClass(stateClassName).attr(disabled, disabled);
		      this.isLoading = true;
		    } else if (this.isLoading) {
		      $element.removeClass(stateClassName).removeAttr(disabled);
		      this.isLoading = false;
		    }
		  }, this), 0);
		};

		Button.prototype.toggle = function() {
		  var changed = true;
		  var $element = this.$element;
		  var $parent = this.$element.parent('[class*="am-btn-group"]');

		  if ($parent.length) {
		    var $input = this.$element.find('input');

		    if ($input.prop('type') == 'radio') {
		      if ($input.prop('checked') && $element.hasClass('am-active')) {
		        changed = false;
		      } else {
		        $parent.find('.am-active').removeClass('am-active');
		      }
		    }

		    if (changed) {
		      $input.prop('checked',
		        !$element.hasClass('am-active')).trigger('change');
		    }
		  }

		  if (changed) {
		    $element.toggleClass('am-active');
		    if (!$element.hasClass('am-active')) {
		      $element.blur();
		    }
		  }
		};

		UI.plugin('button', Button, {
		  dataOptions: 'data-am-loading',
		  methodCall: function(args, instance) {
		    if (args[0] === 'toggle') {
		      instance.toggle();
		    } else if (typeof args[0] === 'string') {
		      instance.setState.apply(instance, args);
		    }
		  }
		});

		// Init code
		$(document).on('click.button.amui.data-api', '[data-am-button]', function(e) {
		  e.preventDefault();
		  var $btn = $(e.target);

		  if (!$btn.hasClass('am-btn')) {
		    $btn = $btn.closest('.am-btn');
		  }

		  $btn.button('toggle');
		});

		UI.ready(function(context) {
		  $('[data-am-loading]', context).button();
		});

		module.exports = UI.button = Button;


	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		/**
		 * @via https://github.com/twbs/bootstrap/blob/master/js/collapse.js
		 * @copyright (c) 2011-2014 Twitter, Inc
		 * @license The MIT License
		 */

		var Collapse = function(element, options) {
		  this.$element = $(element);
		  this.options = $.extend({}, Collapse.DEFAULTS, options);
		  this.transitioning = null;

		  if (this.options.parent) {
		    this.$parent = $(this.options.parent);
		  }

		  if (this.options.toggle) {
		    this.toggle();
		  }
		};

		Collapse.DEFAULTS = {
		  toggle: true
		};

		Collapse.prototype.open = function() {
		  if (this.transitioning || this.$element.hasClass('am-in')) {
		    return;
		  }

		  var startEvent = $.Event('open.collapse.amui');
		  this.$element.trigger(startEvent);

		  if (startEvent.isDefaultPrevented()) {
		    return;
		  }

		  var actives = this.$parent && this.$parent.find('> .am-panel > .am-in');

		  if (actives && actives.length) {
		    var hasData = actives.data('amui.collapse');

		    if (hasData && hasData.transitioning) {
		      return;
		    }

		    Plugin.call(actives, 'close');

		    hasData || actives.data('amui.collapse', null);
		  }

		  this.$element
		    .removeClass('am-collapse')
		    .addClass('am-collapsing').height(0);

		  this.transitioning = 1;

		  var complete = function() {
		    this.$element
		      .removeClass('am-collapsing')
		      .addClass('am-collapse am-in')
		      .height('')
		      .trigger('opened.collapse.amui');
		    this.transitioning = 0;
		  };

		  if (!UI.support.transition) {
		    return complete.call(this);
		  }

		  var scrollHeight = this.$element[0].scrollHeight;

		  this.$element
		    .one(UI.support.transition.end, $.proxy(complete, this))
		    .emulateTransitionEnd(300)
		    .css({height: scrollHeight}); // 当折叠的容器有 padding 时，如果用 height() 只能设置内容的宽度
		};

		Collapse.prototype.close = function() {
		  if (this.transitioning || !this.$element.hasClass('am-in')) {
		    return;
		  }

		  var startEvent = $.Event('close.collapse.amui');
		  this.$element.trigger(startEvent);

		  if (startEvent.isDefaultPrevented()) {
		    return;
		  }

		  this.$element.height(this.$element.height()).redraw();

		  this.$element.addClass('am-collapsing').
		    removeClass('am-collapse am-in');

		  this.transitioning = 1;

		  var complete = function() {
		    this.transitioning = 0;
		    this.$element
		      .trigger('closed.collapse.amui')
		      .removeClass('am-collapsing')
		      .addClass('am-collapse');
		    // css({height: '0'});
		  };

		  if (!UI.support.transition) {
		    return complete.call(this);
		  }

		  this.$element.height(0)
		    .one(UI.support.transition.end, $.proxy(complete, this))
		    .emulateTransitionEnd(300);
		};

		Collapse.prototype.toggle = function() {
		  this[this.$element.hasClass('am-in') ? 'close' : 'open']();
		};

		// Collapse Plugin
		function Plugin(option) {
		  return this.each(function() {
		    var $this = $(this);
		    var data = $this.data('amui.collapse');
		    var options = $.extend({}, Collapse.DEFAULTS,
		      UI.utils.options($this.attr('data-am-collapse')),
		      typeof option == 'object' && option);

		    if (!data && options.toggle && option === 'open') {
		      option = !option;
		    }

		    if (!data) {
		      $this.data('amui.collapse', (data = new Collapse(this, options)));
		    }

		    if (typeof option == 'string') {
		      data[option]();
		    }
		  });
		}

		$.fn.collapse = Plugin;

		// Init code
		$(document).on('click.collapse.amui.data-api', '[data-am-collapse]',
		  function(e) {
		    var href;
		    var $this = $(this);
		    var options = UI.utils.options($this.attr('data-am-collapse'));
		    var target = options.target ||
		      e.preventDefault() ||
		      (href = $this.attr('href')) &&
		      href.replace(/.*(?=#[^\s]+$)/, '');
		    var $target = $(target);
		    var data = $target.data('amui.collapse');
		    var option = data ? 'toggle' : options;
		    var parent = options.parent;
		    var $parent = parent && $(parent);

		    if (!data || !data.transitioning) {
		      if ($parent) {
		        // '[data-am-collapse*="{parent: \'' + parent + '"]
		        $parent.find('[data-am-collapse]').not($this).addClass('am-collapsed');
		      }

		      $this[$target.hasClass('am-in') ?
		        'addClass' : 'removeClass']('am-collapsed');
		    }

		    Plugin.call($target, option);
		  });

		module.exports = UI.collapse = Collapse;

		// TODO: 更好的 target 选择方式
		//       折叠的容器必须没有 border/padding 才能正常处理，否则动画会有一些小问题
		//       寻找更好的未知高度 transition 动画解决方案，max-height 之类的就算了


	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		var $doc = $(document);

		/**
		 * bootstrap-datepicker.js
		 * @via http://www.eyecon.ro/bootstrap-datepicker
		 * @license http://www.apache.org/licenses/LICENSE-2.0
		 */
		var Datepicker = function(element, options) {
		  this.$element = $(element);
		  this.options = $.extend({}, Datepicker.DEFAULTS, options);
		  this.format = DPGlobal.parseFormat(this.options.format);

		  this.$element.data('date', this.options.date);
		  this.language = this.getLocale(this.options.locale);
		  this.theme = this.options.theme;
		  this.$picker = $(DPGlobal.template).appendTo('body').on({
		    click: $.proxy(this.click, this)
		    // mousedown: $.proxy(this.mousedown, this)
		  });

		  this.isInput = this.$element.is('input');
		  this.component = this.$element.is('.am-datepicker-date') ?
		    this.$element.find('.am-datepicker-add-on') : false;

		  if (this.isInput) {
		    this.$element.on({
		      'click.datepicker.amui': $.proxy(this.open, this),
		      // blur: $.proxy(this.close, this),
		      'keyup.datepicker.amui': $.proxy(this.update, this)
		    });
		  } else {
		    if (this.component) {
		      this.component.on('click.datepicker.amui', $.proxy(this.open, this));
		    } else {
		      this.$element.on('click.datepicker.amui', $.proxy(this.open, this));
		    }
		  }

		  this.minViewMode = this.options.minViewMode;

		  if (typeof this.minViewMode === 'string') {
		    switch (this.minViewMode) {
		      case 'months':
		        this.minViewMode = 1;
		        break;
		      case 'years':
		        this.minViewMode = 2;
		        break;
		      default:
		        this.minViewMode = 0;
		        break;
		    }
		  }

		  this.viewMode = this.options.viewMode;

		  if (typeof this.viewMode === 'string') {
		    switch (this.viewMode) {
		      case 'months':
		        this.viewMode = 1;
		        break;
		      case 'years':
		        this.viewMode = 2;
		        break;
		      default:
		        this.viewMode = 0;
		        break;
		    }
		  }

		  this.startViewMode = this.viewMode;
		  this.weekStart = ((this.options.weekStart ||
		  Datepicker.locales[this.language].weekStart || 0) % 7);
		  this.weekEnd = ((this.weekStart + 6) % 7);
		  this.onRender = this.options.onRender;

		  this.setTheme();
		  this.fillDow();
		  this.fillMonths();
		  this.update();
		  this.showMode();
		};

		Datepicker.DEFAULTS = {
		  locale: 'zh_CN',
		  format: 'yyyy-mm-dd',
		  weekStart: undefined,
		  viewMode: 0,
		  minViewMode: 0,
		  date: '',
		  theme: '',
		  autoClose: 1,
		  onRender: function(date) {
		    return '';
		  }
		};

		Datepicker.prototype.open = function(e) {
		  this.$picker.show();
		  this.height = this.component ?
		    this.component.outerHeight() : this.$element.outerHeight();

		  this.place();
		  $(window).on('resize.datepicker.amui', $.proxy(this.place, this));
		  if (e) {
		    e.stopPropagation();
		    e.preventDefault();
		  }
		  var that = this;
		  $doc.on('mousedown.datapicker.amui touchstart.datepicker.amui', function(ev) {
		    if ($(ev.target).closest('.am-datepicker').length === 0) {
		      that.close();
		    }
		  });
		  this.$element.trigger({
		    type: 'open.datepicker.amui',
		    date: this.date
		  });
		};

		Datepicker.prototype.close = function() {
		  this.$picker.hide();
		  $(window).off('resize.datepicker.amui', this.place);
		  this.viewMode = this.startViewMode;
		  this.showMode();
		  if (!this.isInput) {
		    $(document).off('mousedown.datapicker.amui touchstart.datepicker.amui',
		      this.close);
		  }
		  // this.set();
		  this.$element.trigger({
		    type: 'close.datepicker.amui',
		    date: this.date
		  });
		};

		Datepicker.prototype.set = function() {
		  var formatted = DPGlobal.formatDate(this.date, this.format);
		  var $input;

		  if (!this.isInput) {
		    if (this.component) {
		      $input = this.$element.find('input').attr('value', formatted);
		    }

		    this.$element.data('date', formatted);
		  } else {
		    $input = this.$element.attr('value', formatted);
		  }

		  // fixes https://github.com/amazeui/amazeui/issues/711
		  $input && $input.trigger('change');
		};

		Datepicker.prototype.setValue = function(newDate) {
		  if (typeof newDate === 'string') {
		    this.date = DPGlobal.parseDate(newDate, this.format);
		  } else {
		    this.date = new Date(newDate);
		  }
		  this.set();

		  this.viewDate = new Date(this.date.getFullYear(),
		    this.date.getMonth(), 1, 0, 0, 0, 0);

		  this.fill();
		};

		Datepicker.prototype.place = function() {
		  var offset = this.component ?
		    this.component.offset() : this.$element.offset();
		  var $width = this.component ?
		    this.component.width() : this.$element.width();
		  var top = offset.top + this.height;
		  var left = offset.left;
		  var right = $doc.width() - offset.left - $width;
		  var isOutView = this.isOutView();

		  this.$picker.removeClass('am-datepicker-right');
		  this.$picker.removeClass('am-datepicker-up');

		  if ($doc.width() > 640) {
		    if (isOutView.outRight) {
		      this.$picker.addClass('am-datepicker-right');
		      this.$picker.css({
		        top: top,
		        left: 'auto',
		        right: right
		      });
		      return;
		    }
		    if (isOutView.outBottom) {
		      this.$picker.addClass('am-datepicker-up');
		      top = offset.top - this.$picker.outerHeight(true);
		    }
		  } else {
		    left = 0;
		  }

		  this.$picker.css({
		    top: top,
		    left: left
		  });
		};

		Datepicker.prototype.update = function(newDate) {
		  this.date = DPGlobal.parseDate(
		    typeof newDate === 'string' ? newDate : (this.isInput ?
		      this.$element.prop('value') : this.$element.data('date')),
		    this.format
		  );
		  this.viewDate = new Date(this.date.getFullYear(),
		    this.date.getMonth(), 1, 0, 0, 0, 0);
		  this.fill();
		};

		// Days of week
		Datepicker.prototype.fillDow = function() {
		  var dowCount = this.weekStart;
		  var html = '<tr>';
		  while (dowCount < this.weekStart + 7) {
		    // NOTE: do % then add 1
		    html += '<th class="am-datepicker-dow">' +
		    Datepicker.locales[this.language].daysMin[(dowCount++) % 7] +
		    '</th>';
		  }
		  html += '</tr>';

		  this.$picker.find('.am-datepicker-days thead').append(html);
		};

		Datepicker.prototype.fillMonths = function() {
		  var html = '';
		  var i = 0;
		  while (i < 12) {
		    html += '<span class="am-datepicker-month">' +
		    Datepicker.locales[this.language].monthsShort[i++] + '</span>';
		  }
		  this.$picker.find('.am-datepicker-months td').append(html);
		};

		Datepicker.prototype.fill = function() {
		  var d = new Date(this.viewDate);
		  var year = d.getFullYear();
		  var month = d.getMonth();
		  var currentDate = this.date.valueOf();

		  var prevMonth = new Date(year, month - 1, 28, 0, 0, 0, 0);
		  var day = DPGlobal
		    .getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());

		  var daysSelect = this.$picker
		    .find('.am-datepicker-days .am-datepicker-select');

		  if (this.language === 'zh_CN') {
		    daysSelect.text(year + Datepicker.locales[this.language].year[0] +
		    ' ' + Datepicker.locales[this.language].months[month]);
		  } else {
		    daysSelect.text(Datepicker.locales[this.language].months[month] +
		    ' ' + year);
		  }

		  prevMonth.setDate(day);
		  prevMonth.setDate(day - (prevMonth.getDay() - this.weekStart + 7) % 7);

		  var nextMonth = new Date(prevMonth);
		  nextMonth.setDate(nextMonth.getDate() + 42);
		  nextMonth = nextMonth.valueOf();
		  var html = [];

		  var className;
		  var prevY;
		  var prevM;

		  while (prevMonth.valueOf() < nextMonth) {
		    if (prevMonth.getDay() === this.weekStart) {
		      html.push('<tr>');
		    }

		    className = this.onRender(prevMonth, 0);
		    prevY = prevMonth.getFullYear();
		    prevM = prevMonth.getMonth();

		    if ((prevM < month && prevY === year) || prevY < year) {
		      className += ' am-datepicker-old';
		    } else if ((prevM > month && prevY === year) || prevY > year) {
		      className += ' am-datepicker-new';
		    }

		    if (prevMonth.valueOf() === currentDate) {
		      className += ' am-active';
		    }
		    html.push('<td class="am-datepicker-day ' +
		    className + '">' + prevMonth.getDate() + '</td>');

		    if (prevMonth.getDay() === this.weekEnd) {
		      html.push('</tr>');
		    }

		    prevMonth.setDate(prevMonth.getDate() + 1);
		  }

		  this.$picker.find('.am-datepicker-days tbody')
		    .empty().append(html.join(''));

		  var currentYear = this.date.getFullYear();
		  var months = this.$picker.find('.am-datepicker-months')
		    .find('.am-datepicker-select')
		    .text(year);
		  months = months.end()
		    .find('span').removeClass('am-active').removeClass('am-disabled');

		  var monthLen = 0;

		  while (monthLen < 12) {
		    if (this.onRender(d.setFullYear(year, monthLen), 1)) {
		      months.eq(monthLen).addClass('am-disabled');
		    }
		    monthLen++;
		  }

		  if (currentYear === year) {
		    months.eq(this.date.getMonth())
		        .removeClass('am-disabled')
		        .addClass('am-active');
		  }

		  html = '';
		  year = parseInt(year / 10, 10) * 10;
		  var yearCont = this.$picker
		    .find('.am-datepicker-years')
		    .find('.am-datepicker-select')
		    .text(year + '-' + (year + 9))
		    .end()
		    .find('td');
		  var yearClassName;
		  // fixes https://github.com/amazeui/amazeui/issues/770
		  // maybe not need now
		  var viewDate = new Date(this.viewDate);

		  year -= 1;

		  for (var i = -1; i < 11; i++) {
		    yearClassName = this.onRender(viewDate.setFullYear(year), 2);
		    html += '<span class="' + yearClassName + '' +
		    (i === -1 || i === 10 ? ' am-datepicker-old' : '') +
		    (currentYear === year ? ' am-active' : '') + '">' + year + '</span>';
		    year += 1;
		  }
		  yearCont.html(html);
		};

		Datepicker.prototype.click = function(event) {
		  event.stopPropagation();
		  event.preventDefault();
		  var month;
		  var year;
		  var $dayActive = this.$picker.find('.am-datepicker-days').find('.am-active');
		  var $months = this.$picker.find('.am-datepicker-months');
		  var $monthIndex = $months.find('.am-active').index();

		  var $target = $(event.target).closest('span, td, th');
		  if ($target.length === 1) {
		    switch ($target[0].nodeName.toLowerCase()) {
		      case 'th':
		        switch ($target[0].className) {
		          case 'am-datepicker-switch':
		            this.showMode(1);
		            break;
		          case 'am-datepicker-prev':
		          case 'am-datepicker-next':
		            this.viewDate['set' + DPGlobal.modes[this.viewMode].navFnc].call(
		              this.viewDate,
		              this.viewDate
		                ['get' + DPGlobal.modes[this.viewMode].navFnc]
		                .call(this.viewDate) +
		              DPGlobal.modes[this.viewMode].navStep *
		              ($target[0].className === 'am-datepicker-prev' ? -1 : 1)
		            );
		            this.fill();
		            this.set();
		            break;
		        }
		        break;
		      case 'span':
		        if ($target.is('.am-disabled')) {
		          return;
		        }

		        if ($target.is('.am-datepicker-month')) {
		          month = $target.parent().find('span').index($target);

		          if ($target.is('.am-active')) {
		            this.viewDate.setMonth(month, $dayActive.text());
		          } else {
		            this.viewDate.setMonth(month);
		          }

		        } else {
		          year = parseInt($target.text(), 10) || 0;
		          if ($target.is('.am-active')) {
		            this.viewDate.setFullYear(year, $monthIndex, $dayActive.text());
		          } else {
		            this.viewDate.setFullYear(year);
		          }

		        }

		        if (this.viewMode !== 0) {
		          this.date = new Date(this.viewDate);
		          this.$element.trigger({
		            type: 'changeDate.datepicker.amui',
		            date: this.date,
		            viewMode: DPGlobal.modes[this.viewMode].clsName
		          });
		        }

		        this.showMode(-1);
		        this.fill();
		        this.set();
		        break;
		      case 'td':
		        if ($target.is('.am-datepicker-day') && !$target.is('.am-disabled')) {
		          var day = parseInt($target.text(), 10) || 1;
		          month = this.viewDate.getMonth();
		          if ($target.is('.am-datepicker-old')) {
		            month -= 1;
		          } else if ($target.is('.am-datepicker-new')) {
		            month += 1;
		          }
		          year = this.viewDate.getFullYear();
		          this.date = new Date(year, month, day, 0, 0, 0, 0);
		          this.viewDate = new Date(year, month, Math.min(28, day), 0, 0, 0, 0);
		          this.fill();
		          this.set();
		          this.$element.trigger({
		            type: 'changeDate.datepicker.amui',
		            date: this.date,
		            viewMode: DPGlobal.modes[this.viewMode].clsName
		          });

		          this.options.autoClose && this.close();
		        }
		        break;
		    }
		  }
		};

		Datepicker.prototype.mousedown = function(event) {
		  event.stopPropagation();
		  event.preventDefault();
		};

		Datepicker.prototype.showMode = function(dir) {
		  if (dir) {
		    this.viewMode = Math.max(this.minViewMode,
		      Math.min(2, this.viewMode + dir));
		  }

		  this.$picker.find('>div').hide().
		    filter('.am-datepicker-' + DPGlobal.modes[this.viewMode].clsName).show();
		};

		Datepicker.prototype.isOutView = function() {
		  var offset = this.component ?
		    this.component.offset() : this.$element.offset();
		  var isOutView = {
		    outRight: false,
		    outBottom: false
		  };
		  var $picker = this.$picker;
		  var width = offset.left + $picker.outerWidth(true);
		  var height = offset.top + $picker.outerHeight(true) +
		    this.$element.innerHeight();

		  if (width > $doc.width()) {
		    isOutView.outRight = true;
		  }
		  if (height > $doc.height()) {
		    isOutView.outBottom = true;
		  }
		  return isOutView;
		};

		Datepicker.prototype.getLocale = function(locale) {
		  if (!locale) {
		    locale = navigator.language && navigator.language.split('-');
		    locale[1] = locale[1].toUpperCase();
		    locale = locale.join('_');
		  }

		  if (!Datepicker.locales[locale]) {
		    locale = 'en_US';
		  }
		  return locale;
		};

		Datepicker.prototype.setTheme = function() {
		  if (this.theme) {
		    this.$picker.addClass('am-datepicker-' + this.theme);
		  }
		};

		// Datepicker locales
		Datepicker.locales = {
		  en_US: {
		    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
		      'Friday', 'Saturday'],
		    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		    months: ['January', 'February', 'March', 'April', 'May', 'June',
		      'July', 'August', 'September', 'October', 'November', 'December'],
		    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		    weekStart: 0
		  },
		  zh_CN: {
		    days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
		    daysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
		    daysMin: ['日', '一', '二', '三', '四', '五', '六'],
		    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月',
		      '八月', '九月', '十月', '十一月', '十二月'],
		    monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月',
		      '七月', '八月', '九月', '十月', '十一月', '十二月'],
		    weekStart: 1,
		    year: ['年']
		  }
		};

		var DPGlobal = {
		  modes: [
		    {
		      clsName: 'days',
		      navFnc: 'Month',
		      navStep: 1
		    },
		    {
		      clsName: 'months',
		      navFnc: 'FullYear',
		      navStep: 1
		    },
		    {
		      clsName: 'years',
		      navFnc: 'FullYear',
		      navStep: 10
		    }
		  ],

		  isLeapYear: function(year) {
		    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		  },

		  getDaysInMonth: function(year, month) {
		    return [31, (DPGlobal.isLeapYear(year) ? 29 : 28),
		      31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		  },

		  parseFormat: function(format) {
		    var separator = format.match(/[.\/\-\s].*?/);
		    var parts = format.split(/\W+/);

		    if (!separator || !parts || parts.length === 0) {
		      throw new Error('Invalid date format.');
		    }

		    return {
		      separator: separator,
		      parts: parts
		    };
		  },

		  parseDate: function(date, format) {
		    var parts = date.split(format.separator);
		    var val;
		    date = new Date();

		    date.setHours(0);
		    date.setMinutes(0);
		    date.setSeconds(0);
		    date.setMilliseconds(0);

		    if (parts.length === format.parts.length) {
		      var year = date.getFullYear();
		      var day = date.getDate();
		      var month = date.getMonth();

		      for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
		        val = parseInt(parts[i], 10) || 1;
		        switch (format.parts[i]) {
		          case 'dd':
		          case 'd':
		            day = val;
		            date.setDate(val);
		            break;
		          case 'mm':
		          case 'm':
		            month = val - 1;
		            date.setMonth(val - 1);
		            break;
		          case 'yy':
		            year = 2000 + val;
		            date.setFullYear(2000 + val);
		            break;
		          case 'yyyy':
		            year = val;
		            date.setFullYear(val);
		            break;
		        }
		      }
		      date = new Date(year, month, day, 0, 0, 0);
		    }
		    return date;
		  },

		  formatDate: function(date, format) {
		    var val = {
		      d: date.getDate(),
		      m: date.getMonth() + 1,
		      yy: date.getFullYear().toString().substring(2),
		      yyyy: date.getFullYear()
		    };
		    var dateArray = [];

		    val.dd = (val.d < 10 ? '0' : '') + val.d;
		    val.mm = (val.m < 10 ? '0' : '') + val.m;

		    for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
		      dateArray.push(val[format.parts[i]]);
		    }
		    return dateArray.join(format.separator);
		  },

		  headTemplate: '<thead>' +
		  '<tr class="am-datepicker-header">' +
		  '<th class="am-datepicker-prev">' +
		  '<i class="am-datepicker-prev-icon"></i></th>' +
		  '<th colspan="5" class="am-datepicker-switch">' +
		  '<div class="am-datepicker-select"></div></th>' +
		  '<th class="am-datepicker-next"><i class="am-datepicker-next-icon"></i>' +
		  '</th></tr></thead>',

		  contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
		};

		DPGlobal.template = '<div class="am-datepicker am-datepicker-dropdown">' +
		'<div class="am-datepicker-caret"></div>' +
		'<div class="am-datepicker-days">' +
		'<table class="am-datepicker-table">' +
		DPGlobal.headTemplate +
		'<tbody></tbody>' +
		'</table>' +
		'</div>' +
		'<div class="am-datepicker-months">' +
		'<table class="am-datepicker-table">' +
		DPGlobal.headTemplate +
		DPGlobal.contTemplate +
		'</table>' +
		'</div>' +
		'<div class="am-datepicker-years">' +
		'<table class="am-datepicker-table">' +
		DPGlobal.headTemplate +
		DPGlobal.contTemplate +
		'</table>' +
		'</div>' +
		'</div>';

		// jQuery plugin
		UI.plugin('datepicker', Datepicker);

		// Init code
		UI.ready(function(context) {
		  $('[data-am-datepicker]').datepicker();
		});

		module.exports = UI.datepicker = Datepicker;

		// TODO: 1. 载入动画
		//       2. less 优化


	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		var $doc = $(document);
		var transition = UI.support.transition;

		var Dimmer = function() {
		  this.id = UI.utils.generateGUID('am-dimmer');
		  this.$element = $(Dimmer.DEFAULTS.tpl, {
		    id: this.id
		  });

		  this.inited = false;
		  this.scrollbarWidth = 0;
		  this.$used = $([]);
		};

		Dimmer.DEFAULTS = {
		  tpl: '<div class="am-dimmer" data-am-dimmer></div>'
		};

		Dimmer.prototype.init = function() {
		  if (!this.inited) {
		    $(document.body).append(this.$element);
		    this.inited = true;
		    $doc.trigger('init.dimmer.amui');
		    this.$element.on('touchmove.dimmer.amui', function(e) {
		      e.preventDefault();
		    });
		  }

		  return this;
		};

		Dimmer.prototype.open = function(relatedElement) {
		  if (!this.inited) {
		    this.init();
		  }

		  var $element = this.$element;

		  // 用于多重调用
		  if (relatedElement) {
		    this.$used = this.$used.add($(relatedElement));
		  }

		  this.checkScrollbar().setScrollbar();

		  $element.show().trigger('open.dimmer.amui');

		  transition && $element.off(transition.end);

		  setTimeout(function() {
		    $element.addClass('am-active');
		  }, 0);

		  return this;
		};

		Dimmer.prototype.close = function(relatedElement, force) {
		  this.$used = this.$used.not($(relatedElement));

		  if (!force && this.$used.length) {
		    return this;
		  }

		  var $element = this.$element;

		  $element.removeClass('am-active').trigger('close.dimmer.amui');

		  function complete() {
		    $element.hide();
		    this.resetScrollbar();
		  }

		  // transition ? $element.one(transition.end, $.proxy(complete, this)) :
		  complete.call(this);

		  return this;
		};

		Dimmer.prototype.checkScrollbar = function() {
		  this.scrollbarWidth = UI.utils.measureScrollbar();

		  return this;
		};

		Dimmer.prototype.setScrollbar = function() {
		  var $body = $(document.body);
		  var bodyPaddingRight = parseInt(($body.css('padding-right') || 0), 10);

		  if (this.scrollbarWidth) {
		    $body.css('padding-right', bodyPaddingRight + this.scrollbarWidth);
		  }

		  $body.addClass('am-dimmer-active');

		  return this;
		};

		Dimmer.prototype.resetScrollbar = function() {
		  $(document.body).css('padding-right', '').removeClass('am-dimmer-active');

		  return this;
		};

		module.exports = UI.dimmer = new Dimmer();


	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		var animation = UI.support.animation;

		/**
		 * @via https://github.com/Minwe/bootstrap/blob/master/js/dropdown.js
		 * @copyright (c) 2011-2014 Twitter, Inc
		 * @license The MIT License
		 */

		// var toggle = '[data-am-dropdown] > .am-dropdown-toggle';

		var Dropdown = function(element, options) {
		  this.options = $.extend({}, Dropdown.DEFAULTS, options);

		  options = this.options;

		  this.$element = $(element);
		  this.$toggle = this.$element.find(options.selector.toggle);
		  this.$dropdown = this.$element.find(options.selector.dropdown);
		  this.$boundary = (options.boundary === window) ? $(window) :
		    this.$element.closest(options.boundary);
		  this.$justify = (options.justify && $(options.justify).length &&
		  $(options.justify)) || undefined;

		  !this.$boundary.length && (this.$boundary = $(window));

		  this.active = this.$element.hasClass('am-active') ? true : false;
		  this.animating = null;

		  this.events();
		};

		Dropdown.DEFAULTS = {
		  animation: 'am-animation-slide-top-fixed',
		  boundary: window,
		  justify: undefined,
		  selector: {
		    dropdown: '.am-dropdown-content',
		    toggle: '.am-dropdown-toggle'
		  },
		  trigger: 'click'
		};

		Dropdown.prototype.toggle = function() {
		  this.clear();

		  if (this.animating) {
		    return;
		  }

		  this[this.active ? 'close' : 'open']();
		};

		Dropdown.prototype.open = function(e) {
		  var $toggle = this.$toggle;
		  var $element = this.$element;
		  var $dropdown = this.$dropdown;

		  if ($toggle.is('.am-disabled, :disabled')) {
		    return;
		  }

		  if (this.active) {
		    return;
		  }

		  $element.trigger('open.dropdown.amui').addClass('am-active');

		  $toggle.trigger('focus');

		  this.checkDimensions();

		  var complete = $.proxy(function() {
		    $element.trigger('opened.dropdown.amui');
		    this.active = true;
		    this.animating = 0;
		  }, this);

		  if (animation) {
		    this.animating = 1;
		    $dropdown.addClass(this.options.animation).
		      on(animation.end + '.open.dropdown.amui', $.proxy(function() {
		        complete();
		        $dropdown.removeClass(this.options.animation);
		      }, this));
		  } else {
		    complete();
		  }
		};

		Dropdown.prototype.close = function() {
		  if (!this.active) {
		    return;
		  }

		  // fix #165
		  // var animationName = this.options.animation + ' am-animation-reverse';
		  var animationName = 'am-dropdown-animation';
		  var $element = this.$element;
		  var $dropdown = this.$dropdown;

		  $element.trigger('close.dropdown.amui');

		  var complete = $.proxy(function complete() {
		    $element.
		      removeClass('am-active').
		      trigger('closed.dropdown.amui');
		    this.active = false;
		    this.animating = 0;
		    this.$toggle.blur();
		  }, this);

		  if (animation) {
		    $dropdown.removeClass(this.options.animation);
		    $dropdown.addClass(animationName);
		    this.animating = 1;
		    // animation
		    $dropdown.one(animation.end + '.close.dropdown.amui', function() {
		      $dropdown.removeClass(animationName);
		      complete();
		    });
		  } else {
		    complete();
		  }
		};

		Dropdown.prototype.enable = function() {
		  this.$toggle.prop('disabled', false);
		},

		Dropdown.prototype.disable = function() {
		  this.$toggle.prop('disabled', true);
		},

		Dropdown.prototype.checkDimensions = function() {
		  if (!this.$dropdown.length) {
		    return;
		  }

		  var $dropdown = this.$dropdown;
		  var offset = $dropdown.offset();
		  var width = $dropdown.outerWidth();
		  var boundaryWidth = this.$boundary.width();
		  var boundaryOffset = $.isWindow(this.boundary) && this.$boundary.offset() ?
		    this.$boundary.offset().left : 0;

		  if (this.$justify) {
		    // jQuery.fn.width() is really...
		    $dropdown.css({'min-width': this.$justify.css('width')});
		  }

		  if ((width + (offset.left - boundaryOffset)) > boundaryWidth) {
		    this.$element.addClass('am-dropdown-flip');
		  }
		};

		Dropdown.prototype.clear = function() {
		  $('[data-am-dropdown]').not(this.$element).each(function() {
		    var data = $(this).data('amui.dropdown');
		    data && data.close();
		  });
		};

		Dropdown.prototype.events = function() {
		  var eventNS = 'dropdown.amui';
		  // triggers = this.options.trigger.split(' '),
		  var $toggle = this.$toggle;

		  $toggle.on('click.' + eventNS, $.proxy(function(e) {
		    e.preventDefault();
		    this.toggle();
		  }, this));

		  /*for (var i = triggers.length; i--;) {
		   var trigger = triggers[i];

		   if (trigger === 'click') {
		   $toggle.on('click.' + eventNS, $.proxy(this.toggle, this))
		   }

		   if (trigger === 'focus' || trigger === 'hover') {
		   var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin';
		   var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';

		   this.$element.on(eventIn + '.' + eventNS, $.proxy(this.open, this))
		   .on(eventOut + '.' + eventNS, $.proxy(this.close, this));
		   }
		   }*/

		  $(document).on('keydown.dropdown.amui', $.proxy(function(e) {
		    e.keyCode === 27 && this.active && this.close();
		  }, this)).on('click.outer.dropdown.amui', $.proxy(function(e) {
		    // var $target = $(e.target);

		    if (this.active &&
		      (this.$element[0] === e.target || !this.$element.find(e.target).length)) {
		      this.close();
		    }
		  }, this));
		};

		// Dropdown Plugin
		UI.plugin('dropdown', Dropdown);

		// Init code
		UI.ready(function(context) {
		  $('[data-am-dropdown]', context).dropdown();
		});

		$(document).on('click.dropdown.amui.data-api', '.am-dropdown form',
		  function(e) {
		    e.stopPropagation();
		  });

		module.exports = UI.dropdown = Dropdown;

		// TODO: 1. 处理链接 focus
		//       2. 增加 mouseenter / mouseleave 选项
		//       3. 宽度适应


	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(setImmediate) {var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		// MODIFIED:
		// - LINE 226: add `<i></i>`
		// - namespace
		// - Init code
		// TODO: start after x ms when pause on actions

		/*
		 * jQuery FlexSlider v2.4.0
		 * Copyright 2012 WooThemes
		 * Contributing Author: Tyler Smith
		 */

		// FlexSlider: Object Instance
		$.flexslider = function(el, options) {
		  var slider = $(el);

		  // making variables public
		  slider.vars = $.extend({}, $.flexslider.defaults, options);

		  var namespace = slider.vars.namespace,
		    msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
		    touch = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
		  // depricating this idea, as devices are being released with both of these events
		  //eventType = (touch) ? "touchend" : "click",
		    eventType = "click touchend MSPointerUp keyup",
		    watchedEvent = "",
		    watchedEventClearTimer,
		    vertical = slider.vars.direction === "vertical",
		    reverse = slider.vars.reverse,
		    carousel = (slider.vars.itemWidth > 0),
		    fade = slider.vars.animation === "fade",
		    asNav = slider.vars.asNavFor !== "",
		    methods = {},
		    focused = true;

		  // Store a reference to the slider object
		  $.data(el, 'flexslider', slider);

		  // Private slider methods
		  methods = {
		    init: function() {
		      slider.animating = false;
		      // Get current slide and make sure it is a number
		      slider.currentSlide = parseInt((slider.vars.startAt ? slider.vars.startAt : 0), 10);
		      if (isNaN(slider.currentSlide)) {
		        slider.currentSlide = 0;
		      }
		      slider.animatingTo = slider.currentSlide;
		      slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
		      slider.containerSelector = slider.vars.selector.substr(0, slider.vars.selector.search(' '));
		      slider.slides = $(slider.vars.selector, slider);
		      slider.container = $(slider.containerSelector, slider);
		      slider.count = slider.slides.length;
		      // SYNC:
		      slider.syncExists = $(slider.vars.sync).length > 0;
		      // SLIDE:
		      if (slider.vars.animation === "slide") {
		        slider.vars.animation = "swing";
		      }
		      slider.prop = (vertical) ? "top" : "marginLeft";
		      slider.args = {};
		      // SLIDESHOW:
		      slider.manualPause = false;
		      slider.stopped = false;
		      //PAUSE WHEN INVISIBLE
		      slider.started = false;
		      slider.startTimeout = null;
		      // TOUCH/USECSS:
		      slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
		        var obj = document.createElement('div'),
		          props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
		        for (var i in props) {
		          if (obj.style[props[i]] !== undefined) {
		            slider.pfx = props[i].replace('Perspective', '').toLowerCase();
		            slider.prop = "-" + slider.pfx + "-transform";
		            return true;
		          }
		        }
		        return false;
		      }());
		      slider.ensureAnimationEnd = '';
		      // CONTROLSCONTAINER:
		      if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
		      // MANUAL:
		      if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);

		      // RANDOMIZE:
		      if (slider.vars.randomize) {
		        slider.slides.sort(function() {
		          return (Math.round(Math.random()) - 0.5);
		        });
		        slider.container.empty().append(slider.slides);
		      }

		      slider.doMath();

		      // INIT
		      slider.setup("init");

		      // CONTROLNAV:
		      if (slider.vars.controlNav) {
		        methods.controlNav.setup();
		      }

		      // DIRECTIONNAV:
		      if (slider.vars.directionNav) {
		        methods.directionNav.setup();
		      }

		      // KEYBOARD:
		      if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
		        $(document).bind('keyup', function(event) {
		          var keycode = event.keyCode;
		          if (!slider.animating && (keycode === 39 || keycode === 37)) {
		            var target = (keycode === 39) ? slider.getTarget('next') :
		              (keycode === 37) ? slider.getTarget('prev') : false;
		            slider.flexAnimate(target, slider.vars.pauseOnAction);
		          }
		        });
		      }
		      // MOUSEWHEEL:
		      if (slider.vars.mousewheel) {
		        slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
		          event.preventDefault();
		          var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
		          slider.flexAnimate(target, slider.vars.pauseOnAction);
		        });
		      }

		      // PAUSEPLAY
		      if (slider.vars.pausePlay) {
		        methods.pausePlay.setup();
		      }

		      //PAUSE WHEN INVISIBLE
		      if (slider.vars.slideshow && slider.vars.pauseInvisible) {
		        methods.pauseInvisible.init();
		      }

		      // SLIDSESHOW
		      if (slider.vars.slideshow) {
		        if (slider.vars.pauseOnHover) {
		          slider.hover(function() {
		            if (!slider.manualPlay && !slider.manualPause) {slider.pause();}
		          }, function() {
		            if (!slider.manualPause && !slider.manualPlay && !slider.stopped) {slider.play();}
		          });
		        }
		        // initialize animation
		        // If we're visible, or we don't use PageVisibility API
		        if (!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
		          (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
		        }
		      }

		      // ASNAV:
		      if (asNav) {methods.asNav.setup();}

		      // TOUCH
		      if (touch && slider.vars.touch) {methods.touch();}

		      // FADE&&SMOOTHHEIGHT || SLIDE:
		      if (!fade || (fade && slider.vars.smoothHeight)) {$(window).bind("resize orientationchange focus", methods.resize);}

		      slider.find("img").attr("draggable", "false");

		      // API: start() Callback
		      setTimeout(function() {
		        slider.vars.start(slider);
		      }, 200);
		    },
		    asNav: {
		      setup: function() {
		        slider.asNav = true;
		        slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
		        slider.currentItem = slider.currentSlide;
		        slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
		        if (!msGesture) {
		          slider.slides.on(eventType, function(e) {
		            e.preventDefault();
		            var $slide = $(this),
		              target = $slide.index();
		            var posFromLeft = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
		            if (posFromLeft <= 0 && $slide.hasClass(namespace + 'active-slide')) {
		              slider.flexAnimate(slider.getTarget("prev"), true);
		            } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
		              slider.direction = (slider.currentItem < target) ? "next" : "prev";
		              slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
		            }
		          });
		        } else {
		          el._slider = slider;
		          slider.slides.each(function() {
		            var that = this;
		            that._gesture = new MSGesture();
		            that._gesture.target = that;
		            that.addEventListener("MSPointerDown", function(e) {
		              e.preventDefault();
		              if (e.currentTarget._gesture) {
		                e.currentTarget._gesture.addPointer(e.pointerId);
		              }
		            }, false);
		            that.addEventListener("MSGestureTap", function(e) {
		              e.preventDefault();
		              var $slide = $(this),
		                target = $slide.index();
		              if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
		                slider.direction = (slider.currentItem < target) ? "next" : "prev";
		                slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
		              }
		            });
		          });
		        }
		      }
		    },
		    controlNav: {
		      setup: function() {
		        if (!slider.manualControls) {
		          methods.controlNav.setupPaging();
		        } else { // MANUALCONTROLS:
		          methods.controlNav.setupManual();
		        }
		      },
		      setupPaging: function() {
		        var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
		          j = 1,
		          item,
		          slide;

		        slider.controlNavScaffold = $('<ol class="' + namespace + 'control-nav ' + namespace + type + '"></ol>');

		        if (slider.pagingCount > 1) {
		          for (var i = 0; i < slider.pagingCount; i++) {
		            slide = slider.slides.eq(i);
		            item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr('data-thumb') + '"/>' : '<a>' + j + '</a>';
		            if ('thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions) {
		              var captn = slide.attr('data-thumbcaption');
		              if ('' != captn && undefined != captn) {item += '<span class="' + namespace + 'caption">' + captn + '</span>'};
		            }
		            // slider.controlNavScaffold.append('<li>' + item + '</li>');
		            slider.controlNavScaffold.append('<li>' + item + '<i></i></li>');
		            j++;
		          }
		        }

		        // CONTROLSCONTAINER:
		        (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
		        methods.controlNav.set();

		        methods.controlNav.active();

		        slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
		          event.preventDefault();

		          if (watchedEvent === "" || watchedEvent === event.type) {
		            var $this = $(this),
		              target = slider.controlNav.index($this);

		            if (!$this.hasClass(namespace + 'active')) {
		              slider.direction = (target > slider.currentSlide) ? "next" : "prev";
		              slider.flexAnimate(target, slider.vars.pauseOnAction);
		            }
		          }

		          // setup flags to prevent event duplication
		          if (watchedEvent === "") {
		            watchedEvent = event.type;
		          }
		          methods.setToClearWatchedEvent();

		        });
		      },
		      setupManual: function() {
		        slider.controlNav = slider.manualControls;
		        methods.controlNav.active();

		        slider.controlNav.bind(eventType, function(event) {
		          event.preventDefault();

		          if (watchedEvent === "" || watchedEvent === event.type) {
		            var $this = $(this),
		              target = slider.controlNav.index($this);

		            if (!$this.hasClass(namespace + 'active')) {
		              (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
		              slider.flexAnimate(target, slider.vars.pauseOnAction);
		            }
		          }

		          // setup flags to prevent event duplication
		          if (watchedEvent === "") {
		            watchedEvent = event.type;
		          }
		          methods.setToClearWatchedEvent();
		        });
		      },
		      set: function() {
		        var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
		        slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
		      },
		      active: function() {
		        slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
		      },
		      update: function(action, pos) {
		        if (slider.pagingCount > 1 && action === "add") {
		          slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
		        } else if (slider.pagingCount === 1) {
		          slider.controlNavScaffold.find('li').remove();
		        } else {
		          slider.controlNav.eq(pos).closest('li').remove();
		        }
		        methods.controlNav.set();
		        (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
		      }
		    },
		    directionNav: {
		      setup: function() {
		        var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li class="' + namespace + 'nav-prev"><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li class="' + namespace + 'nav-next"><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');

		        // CONTROLSCONTAINER:
		        if (slider.controlsContainer) {
		          $(slider.controlsContainer).append(directionNavScaffold);
		          slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
		        } else {
		          slider.append(directionNavScaffold);
		          slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
		        }

		        methods.directionNav.update();

		        slider.directionNav.bind(eventType, function(event) {
		          event.preventDefault();
		          var target;

		          if (watchedEvent === "" || watchedEvent === event.type) {
		            target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
		            slider.flexAnimate(target, slider.vars.pauseOnAction);
		          }

		          // setup flags to prevent event duplication
		          if (watchedEvent === "") {
		            watchedEvent = event.type;
		          }
		          methods.setToClearWatchedEvent();
		        });
		      },
		      update: function() {
		        var disabledClass = namespace + 'disabled';
		        if (slider.pagingCount === 1) {
		          slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
		        } else if (!slider.vars.animationLoop) {
		          if (slider.animatingTo === 0) {
		            slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
		          } else if (slider.animatingTo === slider.last) {
		            slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
		          } else {
		            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
		          }
		        } else {
		          slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
		        }
		      }
		    },
		    pausePlay: {
		      setup: function() {
		        var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');

		        // CONTROLSCONTAINER:
		        if (slider.controlsContainer) {
		          slider.controlsContainer.append(pausePlayScaffold);
		          slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
		        } else {
		          slider.append(pausePlayScaffold);
		          slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
		        }

		        methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');

		        slider.pausePlay.bind(eventType, function(event) {
		          event.preventDefault();

		          if (watchedEvent === "" || watchedEvent === event.type) {
		            if ($(this).hasClass(namespace + 'pause')) {
		              slider.manualPause = true;
		              slider.manualPlay = false;
		              slider.pause();
		            } else {
		              slider.manualPause = false;
		              slider.manualPlay = true;
		              slider.play();
		            }
		          }

		          // setup flags to prevent event duplication
		          if (watchedEvent === "") {
		            watchedEvent = event.type;
		          }
		          methods.setToClearWatchedEvent();
		        });
		      },
		      update: function(state) {
		        (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
		      }
		    },
		    touch: function() {
		      var startX,
		        startY,
		        offset,
		        cwidth,
		        dx,
		        startT,
		        scrolling = false,
		        localX = 0,
		        localY = 0,
		        accDx = 0;

		      if (!msGesture) {
		        el.addEventListener('touchstart', onTouchStart, false);

		        function onTouchStart(e) {
		          if (slider.animating) {
		            e.preventDefault();
		          } else if (( window.navigator.msPointerEnabled ) || e.touches.length === 1) {
		            slider.pause();
		            // CAROUSEL:
		            cwidth = (vertical) ? slider.h : slider.w;
		            startT = Number(new Date());
		            // CAROUSEL:

		            // Local vars for X and Y points.
		            localX = e.touches[0].pageX;
		            localY = e.touches[0].pageY;

		            offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
		              (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
		                (carousel && slider.currentSlide === slider.last) ? slider.limit :
		                  (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
		                    (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
		            startX = (vertical) ? localY : localX;
		            startY = (vertical) ? localX : localY;

		            el.addEventListener('touchmove', onTouchMove, false);
		            el.addEventListener('touchend', onTouchEnd, false);
		          }
		        }

		        function onTouchMove(e) {
		          // Local vars for X and Y points.

		          localX = e.touches[0].pageX;
		          localY = e.touches[0].pageY;

		          dx = (vertical) ? startX - localY : startX - localX;
		          scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));

		          var fxms = 500;

		          if (!scrolling || Number(new Date()) - startT > fxms) {
		            e.preventDefault();
		            if (!fade && slider.transitions) {
		              if (!slider.vars.animationLoop) {
		                dx = dx / ((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx) / cwidth + 2) : 1);
		              }
		              slider.setProps(offset + dx, "setTouch");
		            }
		          }
		        }

		        function onTouchEnd(e) {
		          // finish the touch by undoing the touch session
		          el.removeEventListener('touchmove', onTouchMove, false);

		          if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
		            var updateDx = (reverse) ? -dx : dx,
		              target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

		            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
		              slider.flexAnimate(target, slider.vars.pauseOnAction);
		            } else {
		              if (!fade) {slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);}
		            }
		          }
		          el.removeEventListener('touchend', onTouchEnd, false);

		          startX = null;
		          startY = null;
		          dx = null;
		          offset = null;
		        }
		      } else {
		        el.style.msTouchAction = "none";
		        el._gesture = new MSGesture();
		        el._gesture.target = el;
		        el.addEventListener("MSPointerDown", onMSPointerDown, false);
		        el._slider = slider;
		        el.addEventListener("MSGestureChange", onMSGestureChange, false);
		        el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

		        function onMSPointerDown(e) {
		          e.stopPropagation();
		          if (slider.animating) {
		            e.preventDefault();
		          } else {
		            slider.pause();
		            el._gesture.addPointer(e.pointerId);
		            accDx = 0;
		            cwidth = (vertical) ? slider.h : slider.w;
		            startT = Number(new Date());
		            // CAROUSEL:

		            offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
		              (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
		                (carousel && slider.currentSlide === slider.last) ? slider.limit :
		                  (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
		                    (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
		          }
		        }

		        function onMSGestureChange(e) {
		          e.stopPropagation();
		          var slider = e.target._slider;
		          if (!slider) {
		            return;
		          }
		          var transX = -e.translationX,
		            transY = -e.translationY;

		          //Accumulate translations.
		          accDx = accDx + ((vertical) ? transY : transX);
		          dx = accDx;
		          scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));

		          if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
		            setImmediate(function() {
		              el._gesture.stop();
		            });

		            return;
		          }

		          if (!scrolling || Number(new Date()) - startT > 500) {
		            e.preventDefault();
		            if (!fade && slider.transitions) {
		              if (!slider.vars.animationLoop) {
		                dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
		              }
		              slider.setProps(offset + dx, "setTouch");
		            }
		          }
		        }

		        function onMSGestureEnd(e) {
		          e.stopPropagation();
		          var slider = e.target._slider;
		          if (!slider) {
		            return;
		          }
		          if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
		            var updateDx = (reverse) ? -dx : dx,
		              target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

		            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
		              slider.flexAnimate(target, slider.vars.pauseOnAction);
		            } else {
		              if (!fade) {slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);}
		            }
		          }

		          startX = null;
		          startY = null;
		          dx = null;
		          offset = null;
		          accDx = 0;
		        }
		      }
		    },
		    resize: function() {
		      if (!slider.animating && slider.is(':visible')) {
		        if (!carousel) {slider.doMath()};

		        if (fade) {
		          // SMOOTH HEIGHT:
		          methods.smoothHeight();
		        } else if (carousel) { //CAROUSEL:
		          slider.slides.width(slider.computedW);
		          slider.update(slider.pagingCount);
		          slider.setProps();
		        }
		        else if (vertical) { //VERTICAL:
		          slider.viewport.height(slider.h);
		          slider.setProps(slider.h, "setTotal");
		        } else {
		          // SMOOTH HEIGHT:
		          if (slider.vars.smoothHeight) {methods.smoothHeight();}
		          slider.newSlides.width(slider.computedW);
		          slider.setProps(slider.computedW, "setTotal");
		        }
		      }
		    },
		    smoothHeight: function(dur) {
		      if (!vertical || fade) {
		        var $obj = (fade) ? slider : slider.viewport;
		        (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
		      }
		    },
		    sync: function(action) {
		      var $obj = $(slider.vars.sync).data("flexslider"),
		        target = slider.animatingTo;

		      switch (action) {
		        case "animate":
		          $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true);
		          break;
		        case "play":
		          if (!$obj.playing && !$obj.asNav) {
		            $obj.play();
		          }
		          break;
		        case "pause":
		          $obj.pause();
		          break;
		      }
		    },
		    uniqueID: function($clone) {
		      // Append _clone to current level and children elements with id attributes
		      $clone.filter('[id]').add($clone.find('[id]')).each(function() {
		        var $this = $(this);
		        $this.attr('id', $this.attr('id') + '_clone');
		      });
		      return $clone;
		    },
		    pauseInvisible: {
		      visProp: null,
		      init: function() {
		        var visProp = methods.pauseInvisible.getHiddenProp();
		        if (visProp) {
		          var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
		          document.addEventListener(evtname, function() {
		            if (methods.pauseInvisible.isHidden()) {
		              if(slider.startTimeout) {
		                clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
		              } else {
		                slider.pause(); //Or just pause
		              }
		            }
		            else {
		              if(slider.started) {
		                slider.play(); //Initiated before, just play
		              } else {
		                if (slider.vars.initDelay > 0) {
		                  setTimeout(slider.play, slider.vars.initDelay);
		                } else {
		                  slider.play(); //Didn't init before: simply init or wait for it
		                }
		              }
		            }
		          });
		        }
		      },
		      isHidden: function() {
		        var prop = methods.pauseInvisible.getHiddenProp();
		        if (!prop) {
		          return false;
		        }
		        return document[prop];
		      },
		      getHiddenProp: function() {
		        var prefixes = ['webkit','moz','ms','o'];
		        // if 'hidden' is natively supported just return it
		        if ('hidden' in document) {
		          return 'hidden';
		        }
		        // otherwise loop over all the known prefixes until we find one
		        for (var i = 0; i < prefixes.length; i++ ) {
		          if ((prefixes[i] + 'Hidden') in document) {
		            return prefixes[i] + 'Hidden';
		          }
		        }
		        // otherwise it's not supported
		        return null;
		      }
		    },
		    setToClearWatchedEvent: function() {
		      clearTimeout(watchedEventClearTimer);
		      watchedEventClearTimer = setTimeout(function() {
		        watchedEvent = "";
		      }, 3000);
		    }
		  };

		  // public methods
		  slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
		    if (!slider.vars.animationLoop && target !== slider.currentSlide) {
		      slider.direction = (target > slider.currentSlide) ? "next" : "prev";
		    }

		    if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

		    if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
		      if (asNav && withSync) {
		        var master = $(slider.vars.asNavFor).data('flexslider');
		        slider.atEnd = target === 0 || target === slider.count - 1;
		        master.flexAnimate(target, true, false, true, fromNav);
		        slider.direction = (slider.currentItem < target) ? "next" : "prev";
		        master.direction = slider.direction;

		        if (Math.ceil((target + 1) / slider.visible) - 1 !== slider.currentSlide && target !== 0) {
		          slider.currentItem = target;
		          slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
		          target = Math.floor(target / slider.visible);
		        } else {
		          slider.currentItem = target;
		          slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
		          return false;
		        }
		      }

		      slider.animating = true;
		      slider.animatingTo = target;

		      // SLIDESHOW:
		      if (pause) {slider.pause();}

		      // API: before() animation Callback
		      slider.vars.before(slider);

		      // SYNC:
		      if (slider.syncExists && !fromNav) {methods.sync("animate");}

		      // CONTROLNAV
		      if (slider.vars.controlNav) {methods.controlNav.active();}

		      // !CAROUSEL:
		      // CANDIDATE: slide active class (for add/remove slide)
		      if (!carousel) {slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');}

		      // INFINITE LOOP:
		      // CANDIDATE: atEnd
		      slider.atEnd = target === 0 || target === slider.last;

		      // DIRECTIONNAV:
		      if (slider.vars.directionNav) {methods.directionNav.update();}

		      if (target === slider.last) {
		        // API: end() of cycle Callback
		        slider.vars.end(slider);
		        // SLIDESHOW && !INFINITE LOOP:
		        if (!slider.vars.animationLoop) {slider.pause();}
		      }

		      // SLIDE:
		      if (!fade) {
		        var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
		          margin, slideString, calcNext;

		        // INFINITE LOOP / REVERSE:
		        if (carousel) {
		          //margin = (slider.vars.itemWidth > slider.w) ? slider.vars.itemMargin * 2 : slider.vars.itemMargin;
		          margin = slider.vars.itemMargin;
		          calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
		          slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
		        } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
		          slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
		        } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
		          slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
		        } else {
		          slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
		        }
		        slider.setProps(slideString, "", slider.vars.animationSpeed);
		        if (slider.transitions) {
		          if (!slider.vars.animationLoop || !slider.atEnd) {
		            slider.animating = false;
		            slider.currentSlide = slider.animatingTo;
		          }

		          // Unbind previous transitionEnd events and re-bind new transitionEnd event
		          slider.container.unbind("webkitTransitionEnd transitionend");
		          slider.container.bind("webkitTransitionEnd transitionend", function() {
		            clearTimeout(slider.ensureAnimationEnd);
		            slider.wrapup(dimension);
		          });

		          // Insurance for the ever-so-fickle transitionEnd event
		          clearTimeout(slider.ensureAnimationEnd);
		          slider.ensureAnimationEnd = setTimeout(function() {
		            slider.wrapup(dimension);
		          }, slider.vars.animationSpeed + 100);

		        } else {
		          slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function(){
		            slider.wrapup(dimension);
		          });
		        }
		      } else { // FADE:
		        if (!touch) {
		          //slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationSpeed, slider.vars.easing);
		          //slider.slides.eq(target).fadeIn(slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

		          slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
		          slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

		        } else {
		          slider.slides.eq(slider.currentSlide).css({
		            "opacity": 0,
		            "zIndex": 1
		          });
		          slider.slides.eq(target).css({"opacity": 1, "zIndex": 2});
		          slider.wrapup(dimension);
		        }
		      }
		      // SMOOTH HEIGHT:
		      if (slider.vars.smoothHeight) {methods.smoothHeight(slider.vars.animationSpeed)};
		    }
		  };
		  slider.wrapup = function(dimension) {
		    // SLIDE:
		    if (!fade && !carousel) {
		      if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
		        slider.setProps(dimension, "jumpEnd");
		      } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
		        slider.setProps(dimension, "jumpStart");
		      }
		    }
		    slider.animating = false;
		    slider.currentSlide = slider.animatingTo;
		    // API: after() animation Callback
		    slider.vars.after(slider);
		  };

		  // SLIDESHOW:
		  slider.animateSlides = function() {
		    if (!slider.animating && focused) {slider.flexAnimate(slider.getTarget("next"));}
		  };
		  // SLIDESHOW:
		  slider.pause = function() {
		    clearInterval(slider.animatedSlides);
		    slider.animatedSlides = null;
		    slider.playing = false;
		    // PAUSEPLAY:
		    if (slider.vars.pausePlay) {methods.pausePlay.update("play");}
		    // SYNC:
		    if (slider.syncExists) {methods.sync("pause");}
		  };
		  // SLIDESHOW:
		  slider.play = function() {
		    if (slider.playing) {clearInterval(slider.animatedSlides);}
		    slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
		    slider.started = slider.playing = true;
		    // PAUSEPLAY:
		    if (slider.vars.pausePlay) {methods.pausePlay.update("pause");}
		    // SYNC:
		    if (slider.syncExists) {methods.sync("play");}
		  };
		  // STOP:
		  slider.stop = function() {
		    slider.pause();
		    slider.stopped = true;
		  };
		  slider.canAdvance = function(target, fromNav) {
		    // ASNAV:
		    var last = (asNav) ? slider.pagingCount - 1 : slider.last;
		    return (fromNav) ? true :
		      (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
		        (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
		          (target === slider.currentSlide && !asNav) ? false :
		            (slider.vars.animationLoop) ? true :
		              (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
		                (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
		                  true;
		  };
		  slider.getTarget = function(dir) {
		    slider.direction = dir;
		    if (dir === "next") {
		      return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
		    } else {
		      return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
		    }
		  };

		  // SLIDE:
		  slider.setProps = function(pos, special, dur) {
		    var target = (function() {
		      var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
		        posCalc = (function() {
		          if (carousel) {
		            return (special === "setTouch") ? pos :
		              (reverse && slider.animatingTo === slider.last) ? 0 :
		                (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
		                  (slider.animatingTo === slider.last) ? slider.limit : posCheck;
		          } else {
		            switch (special) {
		              case "setTotal":
		                return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
		              case "setTouch":
		                return (reverse) ? pos : pos;
		              case "jumpEnd":
		                return (reverse) ? pos : slider.count * pos;
		              case "jumpStart":
		                return (reverse) ? slider.count * pos : pos;
		              default:
		                return pos;
		            }
		          }
		        }());

		      return (posCalc * -1) + "px";
		    }());

		    if (slider.transitions) {
		      target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
		      dur = (dur !== undefined) ? (dur / 1000) + "s" : "0s";
		      slider.container.css("-" + slider.pfx + "-transition-duration", dur);
		      slider.container.css("transition-duration", dur);
		    }

		    slider.args[slider.prop] = target;
		    if (slider.transitions || dur === undefined) {slider.container.css(slider.args);}

		    slider.container.css('transform', target);
		  };

		  slider.setup = function(type) {
		    // SLIDE:
		    if (!fade) {
		      var sliderOffset, arr;

		      if (type === "init") {
		        slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({
		          "overflow": "hidden",
		          "position": "relative"
		        }).appendTo(slider).append(slider.container);
		        // INFINITE LOOP:
		        slider.cloneCount = 0;
		        slider.cloneOffset = 0;
		        // REVERSE:
		        if (reverse) {
		          arr = $.makeArray(slider.slides).reverse();
		          slider.slides = $(arr);
		          slider.container.empty().append(slider.slides);
		        }
		      }
		      // INFINITE LOOP && !CAROUSEL:
		      if (slider.vars.animationLoop && !carousel) {
		        slider.cloneCount = 2;
		        slider.cloneOffset = 1;
		        // clear out old clones
		        if (type !== "init") { slider.container.find('.clone').remove(); }
		        slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true'))
		          .prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
		      }
		      slider.newSlides = $(slider.vars.selector, slider);

		      sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
		      // VERTICAL:
		      if (vertical && !carousel) {
		        slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
		        setTimeout(function() {
		          slider.newSlides.css({"display": "block"});
		          slider.doMath();
		          slider.viewport.height(slider.h);
		          slider.setProps(sliderOffset * slider.h, "init");
		        }, (type === "init") ? 100 : 0);
		      } else {
		        slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
		        slider.setProps(sliderOffset * slider.computedW, "init");
		        setTimeout(function() {
		          slider.doMath();
		          slider.newSlides.css({
		            "width": slider.computedW,
		            "float": "left",
		            "display": "block"
		          });
		          // SMOOTH HEIGHT:
		          if (slider.vars.smoothHeight) {methods.smoothHeight();}
		        }, (type === "init") ? 100 : 0);
		      }
		    } else { // FADE:
		      slider.slides.css({
		        "width": "100%",
		        "float": "left",
		        "marginRight": "-100%",
		        "position": "relative"
		      });
		      if (type === "init") {
		        if (!touch) {
		          //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
		          if (slider.vars.fadeFirstSlide == false) {
		            slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).css({"opacity": 1});
		          } else {
		            slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1},slider.vars.animationSpeed,slider.vars.easing);
		          }
		        } else {
		          slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
		        }
		      }
		      // SMOOTH HEIGHT:
		      if (slider.vars.smoothHeight) {methods.smoothHeight();}
		    }
		    // !CAROUSEL:
		    // CANDIDATE: active slide
		    if (!carousel) {slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");}

		    //FlexSlider: init() Callback
		    slider.vars.init(slider);
		  };

		  slider.doMath = function() {
		    var slide = slider.slides.first(),
		      slideMargin = slider.vars.itemMargin,
		      minItems = slider.vars.minItems,
		      maxItems = slider.vars.maxItems;

		    slider.w = (slider.viewport === undefined) ? slider.width() : slider.viewport.width();
		    slider.h = slide.height();
		    slider.boxPadding = slide.outerWidth() - slide.width();

		    // CAROUSEL:
		    if (carousel) {
		      slider.itemT = slider.vars.itemWidth + slideMargin;
		      slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
		      slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
		      slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1))) / minItems :
		        (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1))) / maxItems :
		          (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;

		      slider.visible = Math.floor(slider.w / (slider.itemW));
		      slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible ) ? slider.vars.move : slider.visible;
		      slider.pagingCount = Math.ceil(((slider.count - slider.visible) / slider.move) + 1);
		      slider.last = slider.pagingCount - 1;
		      slider.limit = (slider.pagingCount === 1) ? 0 :
		        (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
		    } else {
		      slider.itemW = slider.w;
		      slider.pagingCount = slider.count;
		      slider.last = slider.count - 1;
		    }
		    slider.computedW = slider.itemW - slider.boxPadding;
		  };

		  slider.update = function(pos, action) {
		    slider.doMath();

		    // update currentSlide and slider.animatingTo if necessary
		    if (!carousel) {
		      if (pos < slider.currentSlide) {
		        slider.currentSlide += 1;
		      } else if (pos <= slider.currentSlide && pos !== 0) {
		        slider.currentSlide -= 1;
		      }
		      slider.animatingTo = slider.currentSlide;
		    }

		    // update controlNav
		    if (slider.vars.controlNav && !slider.manualControls) {
		      if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
		        methods.controlNav.update("add");
		      } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
		        if (carousel && slider.currentSlide > slider.last) {
		          slider.currentSlide -= 1;
		          slider.animatingTo -= 1;
		        }
		        methods.controlNav.update("remove", slider.last);
		      }
		    }
		    // update directionNav
		    if (slider.vars.directionNav) {methods.directionNav.update();}

		  };

		  slider.addSlide = function(obj, pos) {
		    var $obj = $(obj);

		    slider.count += 1;
		    slider.last = slider.count - 1;

		    // append new slide
		    if (vertical && reverse) {
		      (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
		    } else {
		      (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
		    }

		    // update currentSlide, animatingTo, controlNav, and directionNav
		    slider.update(pos, "add");

		    // update slider.slides
		    slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
		    // re-setup the slider to accomdate new slide
		    slider.setup();

		    //FlexSlider: added() Callback
		    slider.vars.added(slider);
		  };
		  slider.removeSlide = function(obj) {
		    var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

		    // update count
		    slider.count -= 1;
		    slider.last = slider.count - 1;

		    // remove slide
		    if (isNaN(obj)) {
		      $(obj, slider.slides).remove();
		    } else {
		      (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
		    }

		    // update currentSlide, animatingTo, controlNav, and directionNav
		    slider.doMath();
		    slider.update(pos, "remove");

		    // update slider.slides
		    slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
		    // re-setup the slider to accomdate new slide
		    slider.setup();

		    // FlexSlider: removed() Callback
		    slider.vars.removed(slider);
		  };

		  //FlexSlider: Initialize
		  methods.init();
		};

		// Ensure the slider isn't focussed if the window loses focus.
		$(window).blur(function(e) {
		  focused = false;
		}).focus(function(e) {
		  focused = true;
		});

		// FlexSlider: Default Settings
		$.flexslider.defaults = {
		  namespace: 'am-',             // {NEW} String: Prefix string attached to the class of every element generated by the plugin
		  selector: '.am-slides > li',       // {NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
		  animation: 'slide',              // String: Select your animation type, 'fade' or 'slide'
		  easing: 'swing',                // {NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
		  direction: 'horizontal',        // String: Select the sliding direction, "horizontal" or "vertical"
		  reverse: false,                 // {NEW} Boolean: Reverse the animation direction
		  animationLoop: true,            // Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
		  smoothHeight: false,            // {NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
		  startAt: 0,                     // Integer: The slide that the slider should start on. Array notation (0 = first slide)
		  slideshow: true,                // Boolean: Animate slider automatically
		  slideshowSpeed: 5000,           // Integer: Set the speed of the slideshow cycling, in milliseconds
		  animationSpeed: 600,            // Integer: Set the speed of animations, in milliseconds
		  initDelay: 0,                   // {NEW} Integer: Set an initialization delay, in milliseconds
		  randomize: false,               // Boolean: Randomize slide order
		  fadeFirstSlide: true,           // Boolean: Fade in the first slide when animation type is "fade"
		  thumbCaptions: false,           // Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

		  // Usability features
		  pauseOnAction: true,            // Boolean: Pause the slideshow when interacting with control elements, highly recommended.
		  pauseOnHover: false,            // Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
		  pauseInvisible: true,   		// {NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
		  useCSS: true,                   // {NEW} Boolean: Slider will use CSS3 transitions if available
		  touch: true,                    // {NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
		  video: false,                   // {NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

		  // Primary Controls
		  controlNav: true,               // Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
		  directionNav: true,             // Boolean: Create navigation for previous/next navigation? (true/false)
		  prevText: ' ',           // String: Set the text for the "previous" directionNav item
		  nextText: ' ',               // String: Set the text for the "next" directionNav item

		  // Secondary Navigation
		  keyboard: true,                 // Boolean: Allow slider navigating via keyboard left/right keys
		  multipleKeyboard: false,        // {NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
		  mousewheel: false,              // {UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
		  pausePlay: false,               // Boolean: Create pause/play dynamic element
		  pauseText: 'Pause',             // String: Set the text for the 'pause' pausePlay item
		  playText: 'Play',               // String: Set the text for the 'play' pausePlay item

		  //  Special properties
		  controlsContainer: '',          // {UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $('.flexslider-container'). Property is ignored if given element is not found.
		  manualControls: '',             // {UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
		  sync: '',                       // {NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
		  asNavFor: '',                   // {NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

		  // Carousel Options
		  itemWidth: 0,                   // {NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
		  itemMargin: 0,                  // {NEW} Integer: Margin between carousel items.
		  minItems: 1,                    // {NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
		  maxItems: 0,                    // {NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
		  move: 0,                        // {NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
		  allowOneSlide: true,           // {NEW} Boolean: Whether or not to allow a slider comprised of a single slide

		  // Callback API
		  start: function() {
		  },            // Callback: function(slider) - Fires when the slider loads the first slide
		  before: function() {
		  },           // Callback: function(slider) - Fires asynchronously with each slider animation
		  after: function() {
		  },            // Callback: function(slider) - Fires after each slider animation completes
		  end: function() {
		  },              // Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
		  added: function() {
		  },            // {NEW} Callback: function(slider) - Fires after a slide is added
		  removed: function() {
		  },           // {NEW} Callback: function(slider) - Fires after a slide is removed
		  init: function() {
		  }             // {NEW} Callback: function(slider) - Fires after the slider is initially setup
		};

		// FlexSlider: Plugin Function
		$.fn.flexslider = function(options) {
		  var args = Array.prototype.slice.call(arguments, 1);
		  if (options === undefined) {options = {};}

		  if (typeof options === 'object') {
		    return this.each(function() {
		      var $this = $(this);
		      var selector = (options.selector) ? options.selector : '.am-slides > li';
		      var $slides = $this.find(selector);

		      if (($slides.length === 1 && options.allowOneSlide === true) || $slides.length === 0) {
		        $slides.fadeIn(400);
		        if (options.start) {options.start($this);}
		      } else if ($this.data('flexslider') === undefined) {
		        new $.flexslider(this, options);
		      }
		    });
		  } else {
		    // Helper strings to quickly pecdrform functions on the slider
		    var $slider = $(this).data('flexslider');
		    var methodReturn;
		    switch (options) {
		      case 'next':
		        $slider.flexAnimate($slider.getTarget('next'), true);
		        break;
		      case 'prev':
		      case 'previous':
		        $slider.flexAnimate($slider.getTarget('prev'), true);
		        break;
		      default:
		        if (typeof options === 'number') {
		          $slider.flexAnimate(options, true);
		        } else if (typeof options === 'string') {
		          methodReturn = (typeof $slider[options] === 'function') ?
		            $slider[options].apply($slider, args) : $slider[options];
		        }
		    }

		    return methodReturn === undefined ? this : methodReturn;
		  }
		};

		// Init code
		UI.ready(function(context) {
		  $('[data-am-flexslider]', context).each(function(i, item) {
		    var $slider = $(item);
		    var options = UI.utils.parseOptions($slider.data('amFlexslider'));

		    options.before = function(slider) {
		      if (slider._pausedTimer) {
		        window.clearTimeout(slider._pausedTimer);
		        slider._pausedTimer = null;
		      }
		    };

		    options.after = function(slider) {
		      var pauseTime = slider.vars.playAfterPaused;
		      if (pauseTime && !isNaN(pauseTime) && !slider.playing) {
		        if (!slider.manualPause && !slider.manualPlay && !slider.stopped) {
		          slider._pausedTimer = window.setTimeout(function() {
		            slider.play();
		          }, pauseTime);
		        }
		      }
		    };

		    $slider.flexslider(options);
		  });
		});

		module.exports = $.flexslider;

		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12).setImmediate))

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(13).nextTick;
		var apply = Function.prototype.apply;
		var slice = Array.prototype.slice;
		var immediateIds = {};
		var nextImmediateId = 0;

		// DOM APIs, for completeness

		exports.setTimeout = function() {
		  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
		};
		exports.setInterval = function() {
		  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
		};
		exports.clearTimeout =
		exports.clearInterval = function(timeout) { timeout.close(); };

		function Timeout(id, clearFn) {
		  this._id = id;
		  this._clearFn = clearFn;
		}
		Timeout.prototype.unref = Timeout.prototype.ref = function() {};
		Timeout.prototype.close = function() {
		  this._clearFn.call(window, this._id);
		};

		// Does not start the time, just sets up the members needed.
		exports.enroll = function(item, msecs) {
		  clearTimeout(item._idleTimeoutId);
		  item._idleTimeout = msecs;
		};

		exports.unenroll = function(item) {
		  clearTimeout(item._idleTimeoutId);
		  item._idleTimeout = -1;
		};

		exports._unrefActive = exports.active = function(item) {
		  clearTimeout(item._idleTimeoutId);

		  var msecs = item._idleTimeout;
		  if (msecs >= 0) {
		    item._idleTimeoutId = setTimeout(function onTimeout() {
		      if (item._onTimeout)
		        item._onTimeout();
		    }, msecs);
		  }
		};

		// That's not how node.js implements it but the exposed api is the same.
		exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
		  var id = nextImmediateId++;
		  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

		  immediateIds[id] = true;

		  nextTick(function onNextTick() {
		    if (immediateIds[id]) {
		      // fn.call() is faster so we optimize for the common use-case
		      // @see http://jsperf.com/call-apply-segu
		      if (args) {
		        fn.apply(null, args);
		      } else {
		        fn.call(null);
		      }
		      // Prevent ids from leaking
		      exports.clearImmediate(id);
		    }
		  });

		  return id;
		};

		exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
		  delete immediateIds[id];
		};
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12).setImmediate, __webpack_require__(12).clearImmediate))

	/***/ },
	/* 13 */
	/***/ function(module, exports) {

		// shim for using process in browser

		var process = module.exports = {};
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;

		function cleanUpNextTick() {
		    draining = false;
		    if (currentQueue.length) {
		        queue = currentQueue.concat(queue);
		    } else {
		        queueIndex = -1;
		    }
		    if (queue.length) {
		        drainQueue();
		    }
		}

		function drainQueue() {
		    if (draining) {
		        return;
		    }
		    var timeout = setTimeout(cleanUpNextTick);
		    draining = true;

		    var len = queue.length;
		    while(len) {
		        currentQueue = queue;
		        queue = [];
		        while (++queueIndex < len) {
		            if (currentQueue) {
		                currentQueue[queueIndex].run();
		            }
		        }
		        queueIndex = -1;
		        len = queue.length;
		    }
		    currentQueue = null;
		    draining = false;
		    clearTimeout(timeout);
		}

		process.nextTick = function (fun) {
		    var args = new Array(arguments.length - 1);
		    if (arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            args[i - 1] = arguments[i];
		        }
		    }
		    queue.push(new Item(fun, args));
		    if (queue.length === 1 && !draining) {
		        setTimeout(drainQueue, 0);
		    }
		};

		// v8 likes predictible objects
		function Item(fun, array) {
		    this.fun = fun;
		    this.array = array;
		}
		Item.prototype.run = function () {
		    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};

		function noop() {}

		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;

		process.binding = function (name) {
		    throw new Error('process.binding is not supported');
		};

		process.cwd = function () { return '/' };
		process.chdir = function (dir) {
		    throw new Error('process.chdir is not supported');
		};
		process.umask = function() { return 0; };


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var UI = __webpack_require__(2);

		/* jshint unused: false */
		/* jshint -W101, -W116, -W109 */

		/*! iScroll v5.1.3
		 * (c) 2008-2014 Matteo Spinelli
		 * http://cubiq.org/license
		 */

		var rAF = window.requestAnimationFrame ||
		  window.webkitRequestAnimationFrame ||
		  window.mozRequestAnimationFrame ||
		  window.oRequestAnimationFrame ||
		  window.msRequestAnimationFrame ||
		  function(callback) {
		    window.setTimeout(callback, 1000 / 60);
		  };

		var utils = (function() {
		  var me = {};

		  var _elementStyle = document.createElement('div').style;
		  var _vendor = (function() {
		    var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
		      transform,
		      i = 0,
		      l = vendors.length;

		    for (; i < l; i++) {
		      transform = vendors[i] + 'ransform';
		      if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
		    }

		    return false;
		  })();

		  function _prefixStyle(style) {
		    if (_vendor === false) return false;
		    if (_vendor === '') return style;
		    return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
		  }

		  me.getTime = Date.now || function getTime() {
		    return new Date().getTime();
		  };

		  me.extend = function(target, obj) {
		    for (var i in obj) {
		      target[i] = obj[i];
		    }
		  };

		  me.addEvent = function(el, type, fn, capture) {
		    el.addEventListener(type, fn, !!capture);
		  };

		  me.removeEvent = function(el, type, fn, capture) {
		    el.removeEventListener(type, fn, !!capture);
		  };

		  me.prefixPointerEvent = function(pointerEvent) {
		    return window.MSPointerEvent ?
		    'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10) :
		      pointerEvent;
		  };

		  me.momentum = function(current, start, time, lowerMargin, wrapperSize, deceleration) {
		    var distance = current - start,
		      speed = Math.abs(distance) / time,
		      destination,
		      duration;

		    deceleration = deceleration === undefined ? 0.0006 : deceleration;

		    destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
		    duration = speed / deceleration;

		    if (destination < lowerMargin) {
		      destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
		      distance = Math.abs(destination - current);
		      duration = distance / speed;
		    } else if (destination > 0) {
		      destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
		      distance = Math.abs(current) + destination;
		      duration = distance / speed;
		    }

		    return {
		      destination: Math.round(destination),
		      duration: duration
		    };
		  };

		  var _transform = _prefixStyle('transform');

		  me.extend(me, {
		    hasTransform: _transform !== false,
		    hasPerspective: _prefixStyle('perspective') in _elementStyle,
		    hasTouch: 'ontouchstart' in window,
		    hasPointer: window.PointerEvent || window.MSPointerEvent, // IE10 is prefixed
		    hasTransition: _prefixStyle('transition') in _elementStyle
		  });

		  // This should find all Android browsers lower than build 535.19 (both stock browser and webview)
		  me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));

		  me.extend(me.style = {}, {
		    transform: _transform,
		    transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
		    transitionDuration: _prefixStyle('transitionDuration'),
		    transitionDelay: _prefixStyle('transitionDelay'),
		    transformOrigin: _prefixStyle('transformOrigin')
		  });

		  me.hasClass = function(e, c) {
		    var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
		    return re.test(e.className);
		  };

		  me.addClass = function(e, c) {
		    if (me.hasClass(e, c)) {
		      return;
		    }

		    var newclass = e.className.split(' ');
		    newclass.push(c);
		    e.className = newclass.join(' ');
		  };

		  me.removeClass = function(e, c) {
		    if (!me.hasClass(e, c)) {
		      return;
		    }

		    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
		    e.className = e.className.replace(re, ' ');
		  };

		  me.offset = function(el) {
		    var left = -el.offsetLeft,
		      top = -el.offsetTop;

		    // jshint -W084
		    while (el = el.offsetParent) {
		      left -= el.offsetLeft;
		      top -= el.offsetTop;
		    }
		    // jshint +W084

		    return {
		      left: left,
		      top: top
		    };
		  };

		  me.preventDefaultException = function(el, exceptions) {
		    for (var i in exceptions) {
		      if (exceptions[i].test(el[i])) {
		        return true;
		      }
		    }

		    return false;
		  };

		  me.extend(me.eventType = {}, {
		    touchstart: 1,
		    touchmove: 1,
		    touchend: 1,

		    mousedown: 2,
		    mousemove: 2,
		    mouseup: 2,

		    pointerdown: 3,
		    pointermove: 3,
		    pointerup: 3,

		    MSPointerDown: 3,
		    MSPointerMove: 3,
		    MSPointerUp: 3
		  });

		  me.extend(me.ease = {}, {
		    quadratic: {
		      style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
		      fn: function(k) {
		        return k * ( 2 - k );
		      }
		    },
		    circular: {
		      style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
		      fn: function(k) {
		        return Math.sqrt(1 - ( --k * k ));
		      }
		    },
		    back: {
		      style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
		      fn: function(k) {
		        var b = 4;
		        return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
		      }
		    },
		    bounce: {
		      style: '',
		      fn: function(k) {
		        if (( k /= 1 ) < ( 1 / 2.75 )) {
		          return 7.5625 * k * k;
		        } else if (k < ( 2 / 2.75 )) {
		          return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
		        } else if (k < ( 2.5 / 2.75 )) {
		          return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
		        } else {
		          return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
		        }
		      }
		    },
		    elastic: {
		      style: '',
		      fn: function(k) {
		        var f = 0.22,
		          e = 0.4;

		        if (k === 0) {
		          return 0;
		        }
		        if (k == 1) {
		          return 1;
		        }

		        return ( e * Math.pow(2, -10 * k) * Math.sin(( k - f / 4 ) * ( 2 * Math.PI ) / f) + 1 );
		      }
		    }
		  });

		  me.tap = function(e, eventName) {
		    var ev = document.createEvent('Event');
		    ev.initEvent(eventName, true, true);
		    ev.pageX = e.pageX;
		    ev.pageY = e.pageY;
		    e.target.dispatchEvent(ev);
		  };

		  me.click = function(e) {
		    var target = e.target,
		      ev;

		    if (!(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName)) {
		      ev = document.createEvent('MouseEvents');
		      ev.initMouseEvent('click', true, true, e.view, 1,
		        target.screenX, target.screenY, target.clientX, target.clientY,
		        e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
		        0, null);

		      ev._constructed = true;
		      target.dispatchEvent(ev);
		    }
		  };

		  return me;
		})();

		function IScroll(el, options) {
		  this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
		  this.scroller = this.wrapper.children[0];
		  this.scrollerStyle = this.scroller.style;		// cache style for better performance

		  this.options = {

		    // INSERT POINT: OPTIONS

		    startX: 0,
		    startY: 0,
		    scrollY: true,
		    directionLockThreshold: 5,
		    momentum: true,

		    bounce: true,
		    bounceTime: 600,
		    bounceEasing: '',

		    preventDefault: true,
		    preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/},

		    HWCompositing: true,
		    useTransition: true,
		    useTransform: true
		  };

		  for (var i in options) {
		    this.options[i] = options[i];
		  }

		  // Normalize options
		  this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

		  this.options.useTransition = utils.hasTransition && this.options.useTransition;
		  this.options.useTransform = utils.hasTransform && this.options.useTransform;

		  this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
		  this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

		  // If you want eventPassthrough I have to lock one of the axes
		  this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
		  this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

		  // With eventPassthrough we also need lockDirection mechanism
		  this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
		  this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

		  this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

		  this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

		  if (this.options.tap === true) {
		    this.options.tap = 'tap';
		  }

		  // INSERT POINT: NORMALIZATION

		  // Some defaults
		  this.x = 0;
		  this.y = 0;
		  this.directionX = 0;
		  this.directionY = 0;
		  this._events = {};

		  // INSERT POINT: DEFAULTS

		  this._init();
		  this.refresh();

		  this.scrollTo(this.options.startX, this.options.startY);
		  this.enable();
		}

		IScroll.prototype = {
		  version: '5.1.3',

		  _init: function() {
		    this._initEvents();

		    // INSERT POINT: _init

		  },

		  destroy: function() {
		    this._initEvents(true);

		    this._execEvent('destroy');
		  },

		  _transitionEnd: function(e) {
		    if (e.target != this.scroller || !this.isInTransition) {
		      return;
		    }

		    this._transitionTime();
		    if (!this.resetPosition(this.options.bounceTime)) {
		      this.isInTransition = false;
		      this._execEvent('scrollEnd');
		    }
		  },

		  _start: function(e) {
		    // React to left mouse button only
		    if (utils.eventType[e.type] != 1) {
		      if (e.button !== 0) {
		        return;
		      }
		    }

		    if (!this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated)) {
		      return;
		    }

		    if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
		      e.preventDefault();
		    }

		    var point = e.touches ? e.touches[0] : e,
		      pos;

		    this.initiated = utils.eventType[e.type];
		    this.moved = false;
		    this.distX = 0;
		    this.distY = 0;
		    this.directionX = 0;
		    this.directionY = 0;
		    this.directionLocked = 0;

		    this._transitionTime();

		    this.startTime = utils.getTime();

		    if (this.options.useTransition && this.isInTransition) {
		      this.isInTransition = false;
		      pos = this.getComputedPosition();
		      this._translate(Math.round(pos.x), Math.round(pos.y));
		      this._execEvent('scrollEnd');
		    } else if (!this.options.useTransition && this.isAnimating) {
		      this.isAnimating = false;
		      this._execEvent('scrollEnd');
		    }

		    this.startX = this.x;
		    this.startY = this.y;
		    this.absStartX = this.x;
		    this.absStartY = this.y;
		    this.pointX = point.pageX;
		    this.pointY = point.pageY;

		    this._execEvent('beforeScrollStart');
		  },

		  _move: function(e) {
		    if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
		      return;
		    }

		    if (this.options.preventDefault) {	// increases performance on Android? TODO: check!
		      e.preventDefault();
		    }

		    var point = e.touches ? e.touches[0] : e,
		      deltaX = point.pageX - this.pointX,
		      deltaY = point.pageY - this.pointY,
		      timestamp = utils.getTime(),
		      newX, newY,
		      absDistX, absDistY;

		    this.pointX = point.pageX;
		    this.pointY = point.pageY;

		    this.distX += deltaX;
		    this.distY += deltaY;
		    absDistX = Math.abs(this.distX);
		    absDistY = Math.abs(this.distY);

		    // We need to move at least 10 pixels for the scrolling to initiate
		    if (timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10)) {
		      return;
		    }

		    // If you are scrolling in one direction lock the other
		    if (!this.directionLocked && !this.options.freeScroll) {
		      if (absDistX > absDistY + this.options.directionLockThreshold) {
		        this.directionLocked = 'h';		// lock horizontally
		      } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
		        this.directionLocked = 'v';		// lock vertically
		      } else {
		        this.directionLocked = 'n';		// no lock
		      }
		    }

		    if (this.directionLocked == 'h') {
		      if (this.options.eventPassthrough == 'vertical') {
		        e.preventDefault();
		      } else if (this.options.eventPassthrough == 'horizontal') {
		        this.initiated = false;
		        return;
		      }

		      deltaY = 0;
		    } else if (this.directionLocked == 'v') {
		      if (this.options.eventPassthrough == 'horizontal') {
		        e.preventDefault();
		      } else if (this.options.eventPassthrough == 'vertical') {
		        this.initiated = false;
		        return;
		      }

		      deltaX = 0;
		    }

		    deltaX = this.hasHorizontalScroll ? deltaX : 0;
		    deltaY = this.hasVerticalScroll ? deltaY : 0;

		    newX = this.x + deltaX;
		    newY = this.y + deltaY;

		    // Slow down if outside of the boundaries
		    if (newX > 0 || newX < this.maxScrollX) {
		      newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
		    }
		    if (newY > 0 || newY < this.maxScrollY) {
		      newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
		    }

		    this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		    this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		    if (!this.moved) {
		      this._execEvent('scrollStart');
		    }

		    this.moved = true;

		    this._translate(newX, newY);

		    /* REPLACE START: _move */

		    if (timestamp - this.startTime > 300) {
		      this.startTime = timestamp;
		      this.startX = this.x;
		      this.startY = this.y;
		    }

		    /* REPLACE END: _move */

		  },

		  _end: function(e) {
		    if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
		      return;
		    }

		    if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
		      e.preventDefault();
		    }

		    var point = e.changedTouches ? e.changedTouches[0] : e,
		      momentumX,
		      momentumY,
		      duration = utils.getTime() - this.startTime,
		      newX = Math.round(this.x),
		      newY = Math.round(this.y),
		      distanceX = Math.abs(newX - this.startX),
		      distanceY = Math.abs(newY - this.startY),
		      time = 0,
		      easing = '';

		    this.isInTransition = 0;
		    this.initiated = 0;
		    this.endTime = utils.getTime();

		    // reset if we are outside of the boundaries
		    if (this.resetPosition(this.options.bounceTime)) {
		      return;
		    }

		    this.scrollTo(newX, newY);	// ensures that the last position is rounded

		    // we scrolled less than 10 pixels
		    if (!this.moved) {
		      if (this.options.tap) {
		        utils.tap(e, this.options.tap);
		      }

		      if (this.options.click) {
		        utils.click(e);
		      }

		      this._execEvent('scrollCancel');
		      return;
		    }

		    if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
		      this._execEvent('flick');
		      return;
		    }

		    // start momentum animation if needed
		    if (this.options.momentum && duration < 300) {
		      momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
		        destination: newX,
		        duration: 0
		      };
		      momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
		        destination: newY,
		        duration: 0
		      };
		      newX = momentumX.destination;
		      newY = momentumY.destination;
		      time = Math.max(momentumX.duration, momentumY.duration);
		      this.isInTransition = 1;
		    }

		    // INSERT POINT: _end

		    if (newX != this.x || newY != this.y) {
		      // change easing function when scroller goes out of the boundaries
		      if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
		        easing = utils.ease.quadratic;
		      }

		      this.scrollTo(newX, newY, time, easing);
		      return;
		    }

		    this._execEvent('scrollEnd');
		  },

		  _resize: function() {
		    var that = this;

		    clearTimeout(this.resizeTimeout);

		    this.resizeTimeout = setTimeout(function() {
		      that.refresh();
		    }, this.options.resizePolling);
		  },

		  resetPosition: function(time) {
		    var x = this.x,
		      y = this.y;

		    time = time || 0;

		    if (!this.hasHorizontalScroll || this.x > 0) {
		      x = 0;
		    } else if (this.x < this.maxScrollX) {
		      x = this.maxScrollX;
		    }

		    if (!this.hasVerticalScroll || this.y > 0) {
		      y = 0;
		    } else if (this.y < this.maxScrollY) {
		      y = this.maxScrollY;
		    }

		    if (x == this.x && y == this.y) {
		      return false;
		    }

		    this.scrollTo(x, y, time, this.options.bounceEasing);

		    return true;
		  },

		  disable: function() {
		    this.enabled = false;
		  },

		  enable: function() {
		    this.enabled = true;
		  },

		  refresh: function() {
		    var rf = this.wrapper.offsetHeight;		// Force reflow

		    this.wrapperWidth = this.wrapper.clientWidth;
		    this.wrapperHeight = this.wrapper.clientHeight;

		    /* REPLACE START: refresh */

		    this.scrollerWidth = this.scroller.offsetWidth;
		    this.scrollerHeight = this.scroller.offsetHeight;

		    this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
		    this.maxScrollY = this.wrapperHeight - this.scrollerHeight;

		    /* REPLACE END: refresh */

		    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
		    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

		    if (!this.hasHorizontalScroll) {
		      this.maxScrollX = 0;
		      this.scrollerWidth = this.wrapperWidth;
		    }

		    if (!this.hasVerticalScroll) {
		      this.maxScrollY = 0;
		      this.scrollerHeight = this.wrapperHeight;
		    }

		    this.endTime = 0;
		    this.directionX = 0;
		    this.directionY = 0;

		    this.wrapperOffset = utils.offset(this.wrapper);

		    this._execEvent('refresh');

		    this.resetPosition();

		    // INSERT POINT: _refresh

		  },

		  on: function(type, fn) {
		    if (!this._events[type]) {
		      this._events[type] = [];
		    }

		    this._events[type].push(fn);
		  },

		  off: function(type, fn) {
		    if (!this._events[type]) {
		      return;
		    }

		    var index = this._events[type].indexOf(fn);

		    if (index > -1) {
		      this._events[type].splice(index, 1);
		    }
		  },

		  _execEvent: function(type) {
		    if (!this._events[type]) {
		      return;
		    }

		    var i = 0,
		      l = this._events[type].length;

		    if (!l) {
		      return;
		    }

		    for (; i < l; i++) {
		      this._events[type][i].apply(this, [].slice.call(arguments, 1));
		    }
		  },

		  scrollBy: function(x, y, time, easing) {
		    x = this.x + x;
		    y = this.y + y;
		    time = time || 0;

		    this.scrollTo(x, y, time, easing);
		  },

		  scrollTo: function(x, y, time, easing) {
		    easing = easing || utils.ease.circular;

		    this.isInTransition = this.options.useTransition && time > 0;

		    if (!time || (this.options.useTransition && easing.style)) {
		      this._transitionTimingFunction(easing.style);
		      this._transitionTime(time);
		      this._translate(x, y);
		    } else {
		      this._animate(x, y, time, easing.fn);
		    }
		  },

		  scrollToElement: function(el, time, offsetX, offsetY, easing) {
		    el = el.nodeType ? el : this.scroller.querySelector(el);

		    if (!el) {
		      return;
		    }

		    var pos = utils.offset(el);

		    pos.left -= this.wrapperOffset.left;
		    pos.top -= this.wrapperOffset.top;

		    // if offsetX/Y are true we center the element to the screen
		    if (offsetX === true) {
		      offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
		    }
		    if (offsetY === true) {
		      offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
		    }

		    pos.left -= offsetX || 0;
		    pos.top -= offsetY || 0;

		    pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		    pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

		    time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;

		    this.scrollTo(pos.left, pos.top, time, easing);
		  },

		  _transitionTime: function(time) {
		    time = time || 0;

		    this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';

		    if (!time && utils.isBadAndroid) {
		      this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
		    }

		    // INSERT POINT: _transitionTime

		  },

		  _transitionTimingFunction: function(easing) {
		    this.scrollerStyle[utils.style.transitionTimingFunction] = easing;

		    // INSERT POINT: _transitionTimingFunction

		  },

		  _translate: function(x, y) {
		    if (this.options.useTransform) {

		      /* REPLACE START: _translate */

		      this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

		      /* REPLACE END: _translate */

		    } else {
		      x = Math.round(x);
		      y = Math.round(y);
		      this.scrollerStyle.left = x + 'px';
		      this.scrollerStyle.top = y + 'px';
		    }

		    this.x = x;
		    this.y = y;

		    // INSERT POINT: _translate

		  },

		  _initEvents: function(remove) {
		    var eventType = remove ? utils.removeEvent : utils.addEvent,
		      target = this.options.bindToWrapper ? this.wrapper : window;

		    eventType(window, 'orientationchange', this);
		    eventType(window, 'resize', this);

		    if (this.options.click) {
		      eventType(this.wrapper, 'click', this, true);
		    }

		    if (!this.options.disableMouse) {
		      eventType(this.wrapper, 'mousedown', this);
		      eventType(target, 'mousemove', this);
		      eventType(target, 'mousecancel', this);
		      eventType(target, 'mouseup', this);
		    }

		    if (utils.hasPointer && !this.options.disablePointer) {
		      eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
		      eventType(target, utils.prefixPointerEvent('pointermove'), this);
		      eventType(target, utils.prefixPointerEvent('pointercancel'), this);
		      eventType(target, utils.prefixPointerEvent('pointerup'), this);
		    }

		    if (utils.hasTouch && !this.options.disableTouch) {
		      eventType(this.wrapper, 'touchstart', this);
		      eventType(target, 'touchmove', this);
		      eventType(target, 'touchcancel', this);
		      eventType(target, 'touchend', this);
		    }

		    eventType(this.scroller, 'transitionend', this);
		    eventType(this.scroller, 'webkitTransitionEnd', this);
		    eventType(this.scroller, 'oTransitionEnd', this);
		    eventType(this.scroller, 'MSTransitionEnd', this);
		  },

		  getComputedPosition: function() {
		    var matrix = window.getComputedStyle(this.scroller, null),
		      x, y;

		    if (this.options.useTransform) {
		      matrix = matrix[utils.style.transform].split(')')[0].split(', ');
		      x = +(matrix[12] || matrix[4]);
		      y = +(matrix[13] || matrix[5]);
		    } else {
		      x = +matrix.left.replace(/[^-\d.]/g, '');
		      y = +matrix.top.replace(/[^-\d.]/g, '');
		    }

		    return {x: x, y: y};
		  },

		  _animate: function(destX, destY, duration, easingFn) {
		    var that = this,
		      startX = this.x,
		      startY = this.y,
		      startTime = utils.getTime(),
		      destTime = startTime + duration;

		    function step() {
		      var now = utils.getTime(),
		        newX, newY,
		        easing;

		      if (now >= destTime) {
		        that.isAnimating = false;
		        that._translate(destX, destY);

		        if (!that.resetPosition(that.options.bounceTime)) {
		          that._execEvent('scrollEnd');
		        }

		        return;
		      }

		      now = ( now - startTime ) / duration;
		      easing = easingFn(now);
		      newX = ( destX - startX ) * easing + startX;
		      newY = ( destY - startY ) * easing + startY;
		      that._translate(newX, newY);

		      if (that.isAnimating) {
		        rAF(step);
		      }
		    }

		    this.isAnimating = true;
		    step();
		  },
		  handleEvent: function(e) {
		    switch (e.type) {
		      case 'touchstart':
		      case 'pointerdown':
		      case 'MSPointerDown':
		      case 'mousedown':
		        this._start(e);
		        break;
		      case 'touchmove':
		      case 'pointermove':
		      case 'MSPointerMove':
		      case 'mousemove':
		        this._move(e);
		        break;
		      case 'touchend':
		      case 'pointerup':
		      case 'MSPointerUp':
		      case 'mouseup':
		      case 'touchcancel':
		      case 'pointercancel':
		      case 'MSPointerCancel':
		      case 'mousecancel':
		        this._end(e);
		        break;
		      case 'orientationchange':
		      case 'resize':
		        this._resize();
		        break;
		      case 'transitionend':
		      case 'webkitTransitionEnd':
		      case 'oTransitionEnd':
		      case 'MSTransitionEnd':
		        this._transitionEnd(e);
		        break;
		      case 'wheel':
		      case 'DOMMouseScroll':
		      case 'mousewheel':
		        this._wheel(e);
		        break;
		      case 'keydown':
		        this._key(e);
		        break;
		      case 'click':
		        if (!e._constructed) {
		          e.preventDefault();
		          e.stopPropagation();
		        }
		        break;
		    }
		  }
		};

		IScroll.utils = utils;

		module.exports = UI.iScroll = IScroll;

		/* jshint unused: true */
		/* jshint +W101, +W116, +W109 */


	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		var dimmer = __webpack_require__(9);
		var $doc = $(document);
		var supportTransition = UI.support.transition;

		/**
		 * @reference https://github.com/nolimits4web/Framework7/blob/master/src/js/modals.js
		 * @license https://github.com/nolimits4web/Framework7/blob/master/LICENSE
		 */

		var Modal = function(element, options) {
		  this.options = $.extend({}, Modal.DEFAULTS, options || {});
		  this.$element = $(element);
		  this.$dialog =   this.$element.find('.am-modal-dialog');

		  if (!this.$element.attr('id')) {
		    this.$element.attr('id', UI.utils.generateGUID('am-modal'));
		  }

		  this.isPopup = this.$element.hasClass('am-popup');
		  this.isActions = this.$element.hasClass('am-modal-actions');
		  this.isPrompt = this.$element.hasClass('am-modal-prompt');
		  this.isLoading = this.$element.hasClass('am-modal-loading');
		  this.active = this.transitioning = this.relatedTarget = null;
		  this.dimmer = this.options.dimmer ? dimmer : {
		    open: function() {},
		    close: function() {}
		  };

		  this.events();
		};

		Modal.DEFAULTS = {
		  className: {
		    active: 'am-modal-active',
		    out: 'am-modal-out'
		  },
		  selector: {
		    modal: '.am-modal',
		    active: '.am-modal-active'
		  },
		  closeViaDimmer: true,
		  cancelable: true,
		  onConfirm: function() {
		  },
		  onCancel: function() {
		  },
		  closeOnCancel: true,
		  closeOnConfirm: true,
		  dimmer: true,
		  height: undefined,
		  width: undefined,
		  duration: 300, // must equal the CSS transition duration
		  transitionEnd: supportTransition && supportTransition.end + '.modal.amui'
		};

		Modal.prototype.toggle = function(relatedTarget) {
		  return this.active ? this.close() : this.open(relatedTarget);
		};

		Modal.prototype.open = function(relatedTarget) {
		  var $element = this.$element;
		  var options = this.options;
		  var isPopup = this.isPopup;
		  var width = options.width;
		  var height = options.height;
		  var style = {};

		  if (this.active) {
		    return;
		  }

		  if (!this.$element.length) {
		    return;
		  }

		  // callback hook
		  relatedTarget && (this.relatedTarget = relatedTarget);

		  // 判断如果还在动画，就先触发之前的closed事件
		  if (this.transitioning) {
		    clearTimeout($element.transitionEndTimmer);
		    $element.transitionEndTimmer = null;
		    $element.trigger(options.transitionEnd).off(options.transitionEnd);
		  }

		  isPopup && this.$element.show();

		  this.active = true;

		  $element.trigger($.Event('open.modal.amui', {relatedTarget: relatedTarget}));

		  this.dimmer.open($element);

		  $element.show().redraw();

		  // apply Modal width/height if set
		  if (!isPopup && !this.isActions) {
		    if (width) {
		      width = parseInt(width, 10);
		      style.width =  width + 'px';
		      style.marginLeft =  -parseInt(width / 2) + 'px';
		    }

		    if (height) {
		      height = parseInt(height, 10);
		      // style.height = height + 'px';
		      style.marginTop = -parseInt(height / 2) + 'px';

		      // the background color is styled to $dialog
		      // so the height should set to $dialog
		      this.$dialog.css({height: height + 'px'});
		    } else {
		      style.marginTop = -parseInt($element.height() / 2, 10) + 'px';
		    }

		    $element.css(style);
		  }

		  $element.
		    removeClass(options.className.out).
		    addClass(options.className.active);

		  this.transitioning = 1;

		  var complete = function() {
		    $element.trigger($.Event('opened.modal.amui',
		      {relatedTarget: relatedTarget}));
		    this.transitioning = 0;

		    // Prompt auto focus
		    if (this.isPrompt) {
		      this.$dialog.find('input').eq(0).focus();
		    }
		  };

		  if (!supportTransition) {
		    return complete.call(this);
		  }

		  $element.
		    one(options.transitionEnd, $.proxy(complete, this)).
		    emulateTransitionEnd(options.duration);
		};

		Modal.prototype.close = function(relatedTarget) {
		  if (!this.active) {
		    return;
		  }

		  var $element = this.$element;
		  var options = this.options;
		  var isPopup = this.isPopup;

		  // 判断如果还在动画，就先触发之前的opened事件
		  if (this.transitioning) {
		    clearTimeout($element.transitionEndTimmer);
		    $element.transitionEndTimmer = null;
		    $element.trigger(options.transitionEnd).off(options.transitionEnd);
		    this.dimmer.close($element, true);
		  }

		  this.$element.trigger($.Event('close.modal.amui',
		    {relatedTarget: relatedTarget}));

		  this.transitioning = 1;

		  var complete = function() {
		    $element.trigger('closed.modal.amui');
		    isPopup && $element.removeClass(options.className.out);
		    $element.hide();
		    this.transitioning = 0;
		    // 不强制关闭 Dimmer，以便多个 Modal 可以共享 Dimmer
		    this.dimmer.close($element, false);
		    this.active = false;
		  };

		  $element.removeClass(options.className.active).
		    addClass(options.className.out);

		  if (!supportTransition) {
		    return complete.call(this);
		  }

		  $element.one(options.transitionEnd, $.proxy(complete, this)).
		    emulateTransitionEnd(options.duration);
		};

		Modal.prototype.events = function() {
		  var options = this.options;
		  var _this = this;
		  var $element = this.$element;
		  var $ipt = $element.find('.am-modal-prompt-input');
		  var $confirm = $element.find('[data-am-modal-confirm]');
		  var $cancel = $element.find('[data-am-modal-cancel]');
		  var getData = function() {
		    var data = [];
		    $ipt.each(function() {
		      data.push($(this).val());
		    });

		    return (data.length === 0) ? undefined :
		      ((data.length === 1) ? data[0] : data);
		  };

		  // close via Esc key
		  if (this.options.cancelable) {
		    $element.on('keyup.modal.amui', function(e) {
		        if (_this.active && e.which === 27) {
		          $element.trigger('cancel.modal.amui');
		          _this.close();
		        }
		      });
		  }

		  // Close Modal when dimmer clicked
		  if (this.options.dimmer && this.options.closeViaDimmer && !this.isLoading) {
		    this.dimmer.$element.on('click.dimmer.modal.amui', function(e) {
		      _this.close();
		    });
		  }

		  // Close Modal when button clicked
		  $element.on('click.close.modal.amui', '[data-am-modal-close], .am-modal-btn', function(e) {
		      e.preventDefault();
		      var $this = $(this);

		      if ($this.is($confirm)) {
		        options.closeOnConfirm && _this.close();
		      } else if ($this.is($cancel)) {
		        options.closeOnCancel && _this.close();
		      } else {
		        _this.close();
		      }
		    });

		  $confirm.on('click.confirm.modal.amui',
		    function() {
		      $element.trigger($.Event('confirm.modal.amui', {
		        trigger: this
		      }));
		    });

		  $cancel.on('click.cancel.modal.amui', function() {
		      $element.trigger($.Event('cancel.modal.amui', {
		        trigger: this
		      }));
		    });

		  $element.on('confirm.modal.amui', function(e) {
		    e.data = getData();
		    _this.options.onConfirm.call(_this, e);
		  }).on('cancel.modal.amui', function(e) {
		    e.data = getData();
		    _this.options.onCancel.call(_this, e);
		  });
		};

		function Plugin(option, relatedTarget) {
		  return this.each(function() {
		    var $this = $(this);
		    var data = $this.data('amui.modal');
		    var options = typeof option == 'object' && option;

		    if (!data) {
		      $this.data('amui.modal', (data = new Modal(this, options)));
		    }

		    if (typeof option == 'string') {
		      data[option] && data[option](relatedTarget);
		    } else {
		      data.toggle(option && option.relatedTarget || undefined);
		    }
		  });
		}

		$.fn.modal = Plugin;

		// Init
		$doc.on('click.modal.amui.data-api', '[data-am-modal]', function() {
		  var $this = $(this);
		  var options = UI.utils.parseOptions($this.attr('data-am-modal'));
		  var $target = $(options.target ||
		  (this.href && this.href.replace(/.*(?=#[^\s]+$)/, '')));
		  var option = $target.data('amui.modal') ? 'toggle' : options;

		  Plugin.call($target, option, this);
		});

		module.exports = UI.modal = Modal;


	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		__webpack_require__(3);

		var $win = $(window);
		var $doc = $(document);
		var scrollPos;

		/**
		 * @via https://github.com/uikit/uikit/blob/master/src/js/offcanvas.js
		 * @license https://github.com/uikit/uikit/blob/master/LICENSE.md
		 */

		var OffCanvas = function(element, options) {
		  this.$element = $(element);
		  this.options = $.extend({}, OffCanvas.DEFAULTS, options);
		  this.active = null;
		  this.bindEvents();
		};

		OffCanvas.DEFAULTS = {
		  duration: 300,
		  effect: 'overlay' // {push|overlay}, push is too expensive
		};

		OffCanvas.prototype.open = function(relatedElement) {
		  var _this = this;
		  var $element = this.$element;

		  if (!$element.length || $element.hasClass('am-active')) {
		    return;
		  }

		  var effect = this.options.effect;
		  var $html = $('html');
		  var $body = $('body');
		  var $bar = $element.find('.am-offcanvas-bar').first();
		  var dir = $bar.hasClass('am-offcanvas-bar-flip') ? -1 : 1;

		  $bar.addClass('am-offcanvas-bar-' + effect);

		  scrollPos = {x: window.scrollX, y: window.scrollY};

		  $element.addClass('am-active');

		  $body.css({
		    width: window.innerWidth,
		    height: $win.height()
		  }).addClass('am-offcanvas-page');

		  if (effect !== 'overlay') {
		    $body.css({
		      'margin-left': $bar.outerWidth() * dir
		    }).width(); // force redraw
		  }

		  $html.css('margin-top', scrollPos.y * -1);

		  setTimeout(function() {
		    $bar.addClass('am-offcanvas-bar-active').width();
		  }, 0);

		  $element.trigger('open.offcanvas.amui');

		  this.active = 1;

		  // Close OffCanvas when none content area clicked
		  $element.on('click.offcanvas.amui', function(e) {
		    var $target = $(e.target);

		    if ($target.hasClass('am-offcanvas-bar')) {
		      return;
		    }

		    if ($target.parents('.am-offcanvas-bar').first().length) {
		      return;
		    }

		    // https://developer.mozilla.org/zh-CN/docs/DOM/event.stopImmediatePropagation
		    e.stopImmediatePropagation();

		    _this.close();
		  });

		  $html.on('keydown.offcanvas.amui', function(e) {
		    (e.keyCode === 27) && _this.close();
		  });
		};

		OffCanvas.prototype.close = function(relatedElement) {
		  var _this = this;
		  var $html = $('html');
		  var $body = $('body');
		  var $element = this.$element;
		  var $bar = $element.find('.am-offcanvas-bar').first();

		  if (!$element.length || !this.active || !$element.hasClass('am-active')) {
		    return;
		  }

		  $element.trigger('close.offcanvas.amui');

		  function complete() {
		    $body
		      .removeClass('am-offcanvas-page')
		      .css({
		        width: '',
		        height: '',
		        'margin-left': '',
		        'margin-right': ''
		      });
		    $element.removeClass('am-active');
		    $bar.removeClass('am-offcanvas-bar-active');
		    $html.css('margin-top', '');
		    window.scrollTo(scrollPos.x, scrollPos.y);
		    $element.trigger('closed.offcanvas.amui');
		    _this.active = 0;
		  }

		  if (UI.support.transition) {
		    setTimeout(function() {
		      $bar.removeClass('am-offcanvas-bar-active');
		    }, 0);

		    $body.css('margin-left', '').one(UI.support.transition.end, function() {
		      complete();
		    }).emulateTransitionEnd(this.options.duration);
		  } else {
		    complete();
		  }

		  $element.off('click.offcanvas.amui');
		  $html.off('.offcanvas.amui');
		};

		OffCanvas.prototype.bindEvents = function() {
		  var _this = this;
		  $doc.on('click.offcanvas.amui', '[data-am-dismiss="offcanvas"]', function(e) {
		      e.preventDefault();
		      _this.close();
		    });

		  $win.on('resize.offcanvas.amui orientationchange.offcanvas.amui',
		    function() {
		      _this.active && _this.close();
		    });

		  this.$element.hammer().on('swipeleft swipeleft', function(e) {
		    e.preventDefault();
		    _this.close();
		  });

		  return this;
		};

		function Plugin(option, relatedElement) {
		  var args = Array.prototype.slice.call(arguments, 1);

		  return this.each(function() {
		    var $this = $(this);
		    var data = $this.data('amui.offcanvas');
		    var options = $.extend({}, typeof option == 'object' && option);

		    if (!data) {
		      $this.data('amui.offcanvas', (data = new OffCanvas(this, options)));
		      (!option || typeof option == 'object') && data.open(relatedElement);
		    }

		    if (typeof option == 'string') {
		      data[option] && data[option].apply(data, args);
		    }
		  });
		}

		$.fn.offCanvas = Plugin;

		// Init code
		$doc.on('click.offcanvas.amui', '[data-am-offcanvas]', function(e) {
		  e.preventDefault();
		  var $this = $(this);
		  var options = UI.utils.parseOptions($this.data('amOffcanvas'));
		  var $target = $(options.target ||
		  (this.href && this.href.replace(/.*(?=#[^\s]+$)/, '')));
		  var option = $target.data('amui.offcanvas') ? 'open' : options;

		  Plugin.call($target, option, this);
		});

		module.exports = UI.offcanvas = OffCanvas;

		// TODO: 优化动画效果
		// http://dbushell.github.io/Responsive-Off-Canvas-Menu/step4.html


	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		/**
		 * @via https://github.com/manuelstofer/pinchzoom/blob/master/src/pinchzoom.js
		 * @license the MIT License.
		 */

		var definePinchZoom = function($) {
		  /**
		   * Pinch zoom using jQuery
		   * @version 0.0.2
		   * @author Manuel Stofer <mst@rtp.ch>
		   * @param el
		   * @param options
		   * @constructor
		   */
		  var PinchZoom = function(el, options) {
		      this.el = $(el);
		      this.zoomFactor = 1;
		      this.lastScale = 1;
		      this.offset = {
		        x: 0,
		        y: 0
		      };
		      this.options = $.extend({}, this.defaults, options);
		      this.setupMarkup();
		      this.bindEvents();
		      this.update();
		      // default enable.
		      this.enable();

		    },
		    sum = function(a, b) {
		      return a + b;
		    },
		    isCloseTo = function(value, expected) {
		      return value > expected - 0.01 && value < expected + 0.01;
		    };

		  PinchZoom.prototype = {

		    defaults: {
		      tapZoomFactor: 2,
		      zoomOutFactor: 1.3,
		      animationDuration: 300,
		      animationInterval: 5,
		      maxZoom: 5,
		      minZoom: 0.5,
		      lockDragAxis: false,
		      use2d: false,
		      zoomStartEventName: 'pz_zoomstart',
		      zoomEndEventName: 'pz_zoomend',
		      dragStartEventName: 'pz_dragstart',
		      dragEndEventName: 'pz_dragend',
		      doubleTapEventName: 'pz_doubletap'
		    },

		    /**
		     * Event handler for 'dragstart'
		     * @param event
		     */
		    handleDragStart: function(event) {
		      this.el.trigger(this.options.dragStartEventName);
		      this.stopAnimation();
		      this.lastDragPosition = false;
		      this.hasInteraction = true;
		      this.handleDrag(event);
		    },

		    /**
		     * Event handler for 'drag'
		     * @param event
		     */
		    handleDrag: function(event) {

		      if (this.zoomFactor > 1.0) {
		        var touch = this.getTouches(event)[0];
		        this.drag(touch, this.lastDragPosition);
		        this.offset = this.sanitizeOffset(this.offset);
		        this.lastDragPosition = touch;
		      }
		    },

		    handleDragEnd: function() {
		      this.el.trigger(this.options.dragEndEventName);
		      this.end();
		    },

		    /**
		     * Event handler for 'zoomstart'
		     * @param event
		     */
		    handleZoomStart: function(event) {
		      this.el.trigger(this.options.zoomStartEventName);
		      this.stopAnimation();
		      this.lastScale = 1;
		      this.nthZoom = 0;
		      this.lastZoomCenter = false;
		      this.hasInteraction = true;
		    },

		    /**
		     * Event handler for 'zoom'
		     * @param event
		     */
		    handleZoom: function(event, newScale) {

		      // a relative scale factor is used
		      var touchCenter = this.getTouchCenter(this.getTouches(event)),
		        scale = newScale / this.lastScale;
		      this.lastScale = newScale;

		      // the first touch events are thrown away since they are not precise
		      this.nthZoom += 1;
		      if (this.nthZoom > 3) {

		        this.scale(scale, touchCenter);
		        this.drag(touchCenter, this.lastZoomCenter);
		      }
		      this.lastZoomCenter = touchCenter;
		    },

		    handleZoomEnd: function() {
		      this.el.trigger(this.options.zoomEndEventName);
		      this.end();
		    },

		    /**
		     * Event handler for 'doubletap'
		     * @param event
		     */
		    handleDoubleTap: function(event) {
		      var center = this.getTouches(event)[0],
		        zoomFactor = this.zoomFactor > 1 ? 1 : this.options.tapZoomFactor,
		        startZoomFactor = this.zoomFactor,
		        updateProgress = (function(progress) {
		          this.scaleTo(startZoomFactor + progress * (zoomFactor - startZoomFactor), center);
		        }).bind(this);

		      if (this.hasInteraction) {
		        return;
		      }
		      if (startZoomFactor > zoomFactor) {
		        center = this.getCurrentZoomCenter();
		      }

		      this.animate(this.options.animationDuration, this.options.animationInterval, updateProgress, this.swing);
		      this.el.trigger(this.options.doubleTapEventName);
		    },

		    /**
		     * Max / min values for the offset
		     * @param offset
		     * @return {Object} the sanitized offset
		     */
		    sanitizeOffset: function(offset) {
		      var maxX = (this.zoomFactor - 1) * this.getContainerX(),
		        maxY = (this.zoomFactor - 1) * this.getContainerY(),
		        maxOffsetX = Math.max(maxX, 0),
		        maxOffsetY = Math.max(maxY, 0),
		        minOffsetX = Math.min(maxX, 0),
		        minOffsetY = Math.min(maxY, 0);

		      return {
		        x: Math.min(Math.max(offset.x, minOffsetX), maxOffsetX),
		        y: Math.min(Math.max(offset.y, minOffsetY), maxOffsetY)
		      };
		    },

		    /**
		     * Scale to a specific zoom factor (not relative)
		     * @param zoomFactor
		     * @param center
		     */
		    scaleTo: function(zoomFactor, center) {
		      this.scale(zoomFactor / this.zoomFactor, center);
		    },

		    /**
		     * Scales the element from specified center
		     * @param scale
		     * @param center
		     */
		    scale: function(scale, center) {
		      scale = this.scaleZoomFactor(scale);
		      this.addOffset({
		        x: (scale - 1) * (center.x + this.offset.x),
		        y: (scale - 1) * (center.y + this.offset.y)
		      });
		    },

		    /**
		     * Scales the zoom factor relative to current state
		     * @param scale
		     * @return the actual scale (can differ because of max min zoom factor)
		     */
		    scaleZoomFactor: function(scale) {
		      var originalZoomFactor = this.zoomFactor;
		      this.zoomFactor *= scale;
		      this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom));
		      return this.zoomFactor / originalZoomFactor;
		    },

		    /**
		     * Drags the element
		     * @param center
		     * @param lastCenter
		     */
		    drag: function(center, lastCenter) {
		      if (lastCenter) {
		        if (this.options.lockDragAxis) {
		          // lock scroll to position that was changed the most
		          if (Math.abs(center.x - lastCenter.x) > Math.abs(center.y - lastCenter.y)) {
		            this.addOffset({
		              x: -(center.x - lastCenter.x),
		              y: 0
		            });
		          }
		          else {
		            this.addOffset({
		              y: -(center.y - lastCenter.y),
		              x: 0
		            });
		          }
		        }
		        else {
		          this.addOffset({
		            y: -(center.y - lastCenter.y),
		            x: -(center.x - lastCenter.x)
		          });
		        }
		      }
		    },

		    /**
		     * Calculates the touch center of multiple touches
		     * @param touches
		     * @return {Object}
		     */
		    getTouchCenter: function(touches) {
		      return this.getVectorAvg(touches);
		    },

		    /**
		     * Calculates the average of multiple vectors (x, y values)
		     */
		    getVectorAvg: function(vectors) {
		      return {
		        x: vectors.map(function(v) {
		          return v.x;
		        }).reduce(sum) / vectors.length,
		        y: vectors.map(function(v) {
		          return v.y;
		        }).reduce(sum) / vectors.length
		      };
		    },

		    /**
		     * Adds an offset
		     * @param offset the offset to add
		     * @return return true when the offset change was accepted
		     */
		    addOffset: function(offset) {
		      this.offset = {
		        x: this.offset.x + offset.x,
		        y: this.offset.y + offset.y
		      };
		    },

		    sanitize: function() {
		      if (this.zoomFactor < this.options.zoomOutFactor) {
		        this.zoomOutAnimation();
		      } else if (this.isInsaneOffset(this.offset)) {
		        this.sanitizeOffsetAnimation();
		      }
		    },

		    /**
		     * Checks if the offset is ok with the current zoom factor
		     * @param offset
		     * @return {Boolean}
		     */
		    isInsaneOffset: function(offset) {
		      var sanitizedOffset = this.sanitizeOffset(offset);
		      return sanitizedOffset.x !== offset.x ||
		        sanitizedOffset.y !== offset.y;
		    },

		    /**
		     * Creates an animation moving to a sane offset
		     */
		    sanitizeOffsetAnimation: function() {
		      var targetOffset = this.sanitizeOffset(this.offset),
		        startOffset = {
		          x: this.offset.x,
		          y: this.offset.y
		        },
		        updateProgress = (function(progress) {
		          this.offset.x = startOffset.x + progress * (targetOffset.x - startOffset.x);
		          this.offset.y = startOffset.y + progress * (targetOffset.y - startOffset.y);
		          this.update();
		        }).bind(this);

		      this.animate(
		        this.options.animationDuration,
		        this.options.animationInterval,
		        updateProgress,
		        this.swing
		      );
		    },

		    /**
		     * Zooms back to the original position,
		     * (no offset and zoom factor 1)
		     */
		    zoomOutAnimation: function() {
		      var startZoomFactor = this.zoomFactor,
		        zoomFactor = 1,
		        center = this.getCurrentZoomCenter(),
		        updateProgress = (function(progress) {
		          this.scaleTo(startZoomFactor + progress * (zoomFactor - startZoomFactor), center);
		        }).bind(this);

		      this.animate(
		        this.options.animationDuration,
		        this.options.animationInterval,
		        updateProgress,
		        this.swing
		      );
		    },

		    /**
		     * Updates the aspect ratio
		     */
		    updateAspectRatio: function() {
		      // this.setContainerY(this.getContainerX() / this.getAspectRatio());
		      // @modified
		      this.setContainerY()
		    },

		    /**
		     * Calculates the initial zoom factor (for the element to fit into the container)
		     * @return the initial zoom factor
		     */
		    getInitialZoomFactor: function() {
		      // use .offsetWidth instead of width()
		      // because jQuery-width() return the original width but Zepto-width() will calculate width with transform.
		      // the same as .height()
		      return this.container[0].offsetWidth / this.el[0].offsetWidth;
		    },

		    /**
		     * Calculates the aspect ratio of the element
		     * @return the aspect ratio
		     */
		    getAspectRatio: function() {
		      return this.el[0].offsetWidth / this.el[0].offsetHeight;
		    },

		    /**
		     * Calculates the virtual zoom center for the current offset and zoom factor
		     * (used for reverse zoom)
		     * @return {Object} the current zoom center
		     */
		    getCurrentZoomCenter: function() {

		      // uses following formula to calculate the zoom center x value
		      // offset_left / offset_right = zoomcenter_x / (container_x - zoomcenter_x)
		      var length = this.container[0].offsetWidth * this.zoomFactor,
		        offsetLeft = this.offset.x,
		        offsetRight = length - offsetLeft - this.container[0].offsetWidth,
		        widthOffsetRatio = offsetLeft / offsetRight,
		        centerX = widthOffsetRatio * this.container[0].offsetWidth / (widthOffsetRatio + 1),

		      // the same for the zoomcenter y
		        height = this.container[0].offsetHeight * this.zoomFactor,
		        offsetTop = this.offset.y,
		        offsetBottom = height - offsetTop - this.container[0].offsetHeight,
		        heightOffsetRatio = offsetTop / offsetBottom,
		        centerY = heightOffsetRatio * this.container[0].offsetHeight / (heightOffsetRatio + 1);

		      // prevents division by zero
		      if (offsetRight === 0) {
		        centerX = this.container[0].offsetWidth;
		      }
		      if (offsetBottom === 0) {
		        centerY = this.container[0].offsetHeight;
		      }

		      return {
		        x: centerX,
		        y: centerY
		      };
		    },

		    canDrag: function() {
		      return !isCloseTo(this.zoomFactor, 1);
		    },

		    /**
		     * Returns the touches of an event relative to the container offset
		     * @param event
		     * @return array touches
		     */
		    getTouches: function(event) {
		      var position = this.container.offset();
		      return Array.prototype.slice.call(event.touches).map(function(touch) {
		        return {
		          x: touch.pageX - position.left,
		          y: touch.pageY - position.top
		        };
		      });
		    },

		    /**
		     * Animation loop
		     * does not support simultaneous animations
		     * @param duration
		     * @param interval
		     * @param framefn
		     * @param timefn
		     * @param callback
		     */
		    animate: function(duration, interval, framefn, timefn, callback) {
		      var startTime = new Date().getTime(),
		        renderFrame = (function() {
		          if (!this.inAnimation) {
		            return;
		          }
		          var frameTime = new Date().getTime() - startTime,
		            progress = frameTime / duration;
		          if (frameTime >= duration) {
		            framefn(1);
		            if (callback) {
		              callback();
		            }
		            this.update();
		            this.stopAnimation();
		            this.update();
		          } else {
		            if (timefn) {
		              progress = timefn(progress);
		            }
		            framefn(progress);
		            this.update();
		            setTimeout(renderFrame, interval);
		          }
		        }).bind(this);
		      this.inAnimation = true;
		      renderFrame();
		    },

		    /**
		     * Stops the animation
		     */
		    stopAnimation: function() {
		      this.inAnimation = false;
		    },

		    /**
		     * Swing timing function for animations
		     * @param p
		     * @return {Number}
		     */
		    swing: function(p) {
		      return -Math.cos(p * Math.PI) / 2 + 0.5;
		    },

		    getContainerX: function() {
		      // return this.container[0].offsetWidth;
		      // @modified
		      return window.innerWidth
		    },

		    getContainerY: function() {
		      // return this.container[0].offsetHeight;
		      // @modified
		      return window.innerHeight
		    },

		    setContainerY: function(y) {
		      // return this.container.height(y);
		      // @modified
		      var t = window.innerHeight;
		      return this.el.css({height: t}), this.container.height(t);
		    },

		    /**
		     * Creates the expected html structure
		     */
		    setupMarkup: function() {
		      this.container = $('<div class="pinch-zoom-container"></div>');
		      this.el.before(this.container);
		      this.container.append(this.el);

		      this.container.css({
		        'overflow': 'hidden',
		        'position': 'relative'
		      });

		      // Zepto doesn't recognize `webkitTransform..` style
		      this.el.css({
		        '-webkit-transform-origin': '0% 0%',
		        '-moz-transform-origin': '0% 0%',
		        '-ms-transform-origin': '0% 0%',
		        '-o-transform-origin': '0% 0%',
		        'transform-origin': '0% 0%',
		        'position': 'absolute'
		      });
		    },

		    end: function() {
		      this.hasInteraction = false;
		      this.sanitize();
		      this.update();
		    },

		    /**
		     * Binds all required event listeners
		     */
		    bindEvents: function() {
		      detectGestures(this.container.get(0), this);
		      // Zepto and jQuery both know about `on`
		      $(window).on('resize', this.update.bind(this));
		      $(this.el).find('img').on('load', this.update.bind(this));
		    },

		    /**
		     * Updates the css values according to the current zoom factor and offset
		     */
		    update: function() {

		      if (this.updatePlaned) {
		        return;
		      }
		      this.updatePlaned = true;

		      setTimeout((function() {
		        this.updatePlaned = false;
		        this.updateAspectRatio();

		        var zoomFactor = this.getInitialZoomFactor() * this.zoomFactor,
		          offsetX = -this.offset.x / zoomFactor,
		          offsetY = -this.offset.y / zoomFactor,
		          transform3d = 'scale3d(' + zoomFactor + ', ' + zoomFactor + ',1) ' +
		            'translate3d(' + offsetX + 'px,' + offsetY + 'px,0px)',
		          transform2d = 'scale(' + zoomFactor + ', ' + zoomFactor + ') ' +
		            'translate(' + offsetX + 'px,' + offsetY + 'px)',
		          removeClone = (function() {
		            if (this.clone) {
		              this.clone.remove();
		              delete this.clone;
		            }
		          }).bind(this);

		        // Scale 3d and translate3d are faster (at least on ios)
		        // but they also reduce the quality.
		        // PinchZoom uses the 3d transformations during interactions
		        // after interactions it falls back to 2d transformations
		        if (!this.options.use2d || this.hasInteraction || this.inAnimation) {
		          this.is3d = true;
		          removeClone();
		          this.el.css({
		            '-webkit-transform': transform3d,
		            '-o-transform': transform2d,
		            '-ms-transform': transform2d,
		            '-moz-transform': transform2d,
		            'transform': transform3d
		          });
		        } else {

		          // When changing from 3d to 2d transform webkit has some glitches.
		          // To avoid this, a copy of the 3d transformed element is displayed in the
		          // foreground while the element is converted from 3d to 2d transform
		          if (this.is3d) {
		            this.clone = this.el.clone();
		            this.clone.css('pointer-events', 'none');
		            this.clone.appendTo(this.container);
		            setTimeout(removeClone, 200);
		          }
		          this.el.css({
		            '-webkit-transform': transform2d,
		            '-o-transform': transform2d,
		            '-ms-transform': transform2d,
		            '-moz-transform': transform2d,
		            'transform': transform2d
		          });
		          this.is3d = false;
		        }
		      }).bind(this), 0);
		    },

		    /**
		     * Enables event handling for gestures
		     */
		    enable: function() {
		      this.enabled = true;
		    },

		    /**
		     * Disables event handling for gestures
		     */
		    disable: function() {
		      this.enabled = false;
		    }
		  };

		  var detectGestures = function(el, target) {
		    var interaction = null,
		      fingers = 0,
		      lastTouchStart = null,
		      startTouches = null,

		      setInteraction = function(newInteraction, event) {
		        if (interaction !== newInteraction) {

		          if (interaction && !newInteraction) {
		            switch (interaction) {
		              case "zoom":
		                target.handleZoomEnd(event);
		                break;
		              case 'drag':
		                target.handleDragEnd(event);
		                break;
		            }
		          }

		          switch (newInteraction) {
		            case 'zoom':
		              target.handleZoomStart(event);
		              break;
		            case 'drag':
		              target.handleDragStart(event);
		              break;
		          }
		        }
		        interaction = newInteraction;
		      },

		      updateInteraction = function(event) {
		        if (fingers === 2) {
		          setInteraction('zoom');
		        } else if (fingers === 1 && target.canDrag()) {
		          setInteraction('drag', event);
		        } else {
		          setInteraction(null, event);
		        }
		      },

		      targetTouches = function(touches) {
		        return Array.prototype.slice.call(touches).map(function(touch) {
		          return {
		            x: touch.pageX,
		            y: touch.pageY
		          };
		        });
		      },

		      getDistance = function(a, b) {
		        var x, y;
		        x = a.x - b.x;
		        y = a.y - b.y;
		        return Math.sqrt(x * x + y * y);
		      },

		      calculateScale = function(startTouches, endTouches) {
		        var startDistance = getDistance(startTouches[0], startTouches[1]),
		          endDistance = getDistance(endTouches[0], endTouches[1]);
		        return endDistance / startDistance;
		      },

		      cancelEvent = function(event) {
		        event.stopPropagation();
		        event.preventDefault();
		      },

		      detectDoubleTap = function(event) {
		        var time = (new Date()).getTime();

		        if (fingers > 1) {
		          lastTouchStart = null;
		        }

		        if (time - lastTouchStart < 300) {
		          cancelEvent(event);

		          target.handleDoubleTap(event);
		          switch (interaction) {
		            case "zoom":
		              target.handleZoomEnd(event);
		              break;
		            case 'drag':
		              target.handleDragEnd(event);
		              break;
		          }
		        }

		        if (fingers === 1) {
		          lastTouchStart = time;
		        }
		      },
		      firstMove = true;

		    el.addEventListener('touchstart', function(event) {
		      if (target.enabled) {
		        firstMove = true;
		        fingers = event.touches.length;
		        detectDoubleTap(event);
		      }
		    });

		    el.addEventListener('touchmove', function(event) {
		      if (target.enabled) {
		        if (firstMove) {
		          updateInteraction(event);
		          if (interaction) {
		            cancelEvent(event);
		          }
		          startTouches = targetTouches(event.touches);
		        } else {
		          switch (interaction) {
		            case 'zoom':
		              target.handleZoom(event, calculateScale(startTouches, targetTouches(event.touches)));
		              break;
		            case 'drag':
		              target.handleDrag(event);
		              break;
		          }
		          if (interaction) {
		            cancelEvent(event);
		            target.update();
		          }
		        }

		        firstMove = false;
		      }
		    });

		    el.addEventListener('touchend', function(event) {
		      if (target.enabled) {
		        fingers = event.touches.length;
		        updateInteraction(event);
		      }
		    });
		  };

		  return PinchZoom;
		};

		module.exports = UI.pichzoom = definePinchZoom($);


	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		var $w = $(window);

		/**
		 * @reference https://github.com/nolimits4web/Framework7/blob/master/src/js/modals.js
		 * @license https://github.com/nolimits4web/Framework7/blob/master/LICENSE
		 */

		var Popover = function(element, options) {
		  this.options = $.extend({}, Popover.DEFAULTS, options);
		  this.$element = $(element);
		  this.active = null;
		  this.$popover = (this.options.target && $(this.options.target)) || null;

		  this.init();
		  this._bindEvents();
		};

		Popover.DEFAULTS = {
		  theme: null,
		  trigger: 'click',
		  content: '',
		  open: false,
		  target: null,
		  tpl: '<div class="am-popover">' +
		    '<div class="am-popover-inner"></div>' +
		    '<div class="am-popover-caret"></div></div>'
		};

		Popover.prototype.init = function() {
		  var _this = this;
		  var $element = this.$element;
		  var $popover;

		  if (!this.options.target) {
		    this.$popover = this.getPopover();
		    this.setContent();
		  }

		  $popover = this.$popover;

		  $popover.appendTo($('body'));

		  this.sizePopover();

		  function sizePopover() {
		    _this.sizePopover();
		  }

		  // TODO: 监听页面内容变化，重新调整位置

		  $element.on('open.popover.amui', function() {
		    $(window).on('resize.popover.amui', UI.utils.debounce(sizePopover, 50));
		  });

		  $element.on('close.popover.amui', function() {
		    $(window).off('resize.popover.amui', sizePopover);
		  });

		  this.options.open && this.open();
		};

		Popover.prototype.sizePopover = function sizePopover() {
		  var $element = this.$element;
		  var $popover = this.$popover;

		  if (!$popover || !$popover.length) {
		    return;
		  }

		  var popWidth = $popover.outerWidth();
		  var popHeight = $popover.outerHeight();
		  var $popCaret = $popover.find('.am-popover-caret');
		  var popCaretSize = ($popCaret.outerWidth() / 2) || 8;
		  // 取不到 $popCaret.outerHeight() 的值，所以直接加 8
		  var popTotalHeight = popHeight + 8; // $popCaret.outerHeight();

		  var triggerWidth = $element.outerWidth();
		  var triggerHeight = $element.outerHeight();
		  var triggerOffset = $element.offset();
		  var triggerRect = $element[0].getBoundingClientRect();

		  var winHeight = $w.height();
		  var winWidth = $w.width();
		  var popTop = 0;
		  var popLeft = 0;
		  var diff = 0;
		  var spacing = 2;
		  var popPosition = 'top';

		  $popover.css({left: '', top: ''}).removeClass('am-popover-left ' +
		  'am-popover-right am-popover-top am-popover-bottom');

		  // $popCaret.css({left: '', top: ''});

		  if (popTotalHeight - spacing < triggerRect.top + spacing) {
		    // Popover on the top of trigger
		    popTop = triggerOffset.top - popTotalHeight - spacing;
		  } else if (popTotalHeight <
		    winHeight - triggerRect.top - triggerRect.height) {
		    // On bottom
		    popPosition = 'bottom';
		    popTop = triggerOffset.top + triggerHeight + popCaretSize + spacing;
		  } else { // On middle
		    popPosition = 'middle';
		    popTop = triggerHeight / 2 + triggerOffset.top - popHeight / 2;
		  }

		  // Horizontal Position
		  if (popPosition === 'top' || popPosition === 'bottom') {
		    popLeft = triggerWidth / 2 + triggerOffset.left - popWidth / 2;

		    diff = popLeft;

		    if (popLeft < 5) {
		      popLeft = 5;
		    }

		    if (popLeft + popWidth > winWidth) {
		      popLeft = (winWidth - popWidth - 20);
		      // console.log('left %d, win %d, popw %d', popLeft, winWidth, popWidth);
		    }

		    if (popPosition === 'top') {
		      // This is the Popover position, NOT caret position
		      // Popover on the Top of trigger, caret on the bottom of Popover
		      $popover.addClass('am-popover-top');
		    }

		    if (popPosition === 'bottom') {
		      $popover.addClass('am-popover-bottom');
		    }

		    diff = diff - popLeft;
		    // $popCaret.css({left: (popWidth / 2 - popCaretSize + diff) + 'px'});

		  } else if (popPosition === 'middle') {
		    popLeft = triggerOffset.left - popWidth - popCaretSize;
		    $popover.addClass('am-popover-left');
		    if (popLeft < 5) {
		      popLeft = triggerOffset.left + triggerWidth + popCaretSize;
		      $popover.removeClass('am-popover-left').addClass('am-popover-right');
		    }

		    if (popLeft + popWidth > winWidth) {
		      popLeft = winWidth - popWidth - 5;
		      $popover.removeClass('am-popover-left').addClass('am-popover-right');
		    }
		    // $popCaret.css({top: (popHeight / 2 - popCaretSize / 2) + 'px'});
		  }

		  // Apply position style
		  $popover.css({top: popTop + 'px', left: popLeft + 'px'});
		};

		Popover.prototype.toggle = function() {
		  return this[this.active ? 'close' : 'open']();
		};

		Popover.prototype.open = function() {
		  var $popover = this.$popover;

		  this.$element.trigger('open.popover.amui');
		  this.sizePopover();
		  $popover.show().addClass('am-active');
		  this.active = true;
		};

		Popover.prototype.close = function() {
		  var $popover = this.$popover;

		  this.$element.trigger('close.popover.amui');

		  $popover
		    .removeClass('am-active')
		    .trigger('closed.popover.amui')
		    .hide();

		  this.active = false;
		};

		Popover.prototype.getPopover = function() {
		  var uid = UI.utils.generateGUID('am-popover');
		  var theme = [];

		  if (this.options.theme) {
		    $.each(this.options.theme.split(' '), function(i, item) {
		      theme.push('am-popover-' + $.trim(item));
		    });
		  }

		  return $(this.options.tpl).attr('id', uid).addClass(theme.join(' '));
		};

		Popover.prototype.setContent = function(content) {
		  content = content || this.options.content;
		  this.$popover && this.$popover.find('.am-popover-inner')
		    .empty().html(content);
		};

		Popover.prototype._bindEvents = function() {
		  var eventNS = 'popover.amui';
		  var triggers = this.options.trigger.split(' ');

		  for (var i = triggers.length; i--;) {
		    var trigger = triggers[i];

		    if (trigger === 'click') {
		      this.$element.on('click.' + eventNS, $.proxy(this.toggle, this));
		    } else { // hover or focus
		      var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
		      var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';

		      this.$element.on(eventIn + '.' + eventNS, $.proxy(this.open, this));
		      this.$element.on(eventOut + '.' + eventNS, $.proxy(this.close, this));
		    }
		  }
		};

		Popover.prototype.destroy = function() {
		  this.$element.off('.popover.amui').removeData('amui.popover');
		  this.$popover.remove();
		};

		UI.plugin('popover', Popover);

		// Init code
		UI.ready(function(context) {
		  $('[data-am-popover]', context).popover();
		});

		module.exports = Popover;

		// TODO: 允许用户定义位置


	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var UI = __webpack_require__(2);

		var Progress = (function() {
		  /**
		   * NProgress (c) 2013, Rico Sta. Cruz
		   * @via http://ricostacruz.com/nprogress
		   */

		  var NProgress = {};

		  NProgress.version = '0.2.0';

		  var Settings = NProgress.settings = {
		    minimum: 0.08,
		    easing: 'ease',
		    positionUsing: '',
		    speed: 200,
		    trickle: true,
		    trickleRate: 0.02,
		    trickleSpeed: 800,
		    showSpinner: true,
		    parent: 'body',
		    barSelector: '[role="nprogress-bar"]',
		    spinnerSelector: '[role="nprogress-spinner"]',
		    template: '<div class="nprogress-bar" role="nprogress-bar">' +
		    '<div class="nprogress-peg"></div></div>' +
		    '<div class="nprogress-spinner" role="nprogress-spinner">' +
		    '<div class="nprogress-spinner-icon"></div></div>'
		  };

		  /**
		   * Updates configuration.
		   *
		   *     NProgress.configure({
		   *       minimum: 0.1
		   *     });
		   */
		  NProgress.configure = function(options) {
		    var key, value;
		    for (key in options) {
		      value = options[key];
		      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
		    }

		    return this;
		  };

		  /**
		   * Last number.
		   */

		  NProgress.status = null;

		  /**
		   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
		   *
		   *     NProgress.set(0.4);
		   *     NProgress.set(1.0);
		   */

		  NProgress.set = function(n) {
		    var started = NProgress.isStarted();

		    n = clamp(n, Settings.minimum, 1);
		    NProgress.status = (n === 1 ? null : n);

		    var progress = NProgress.render(!started),
		      bar      = progress.querySelector(Settings.barSelector),
		      speed    = Settings.speed,
		      ease     = Settings.easing;

		    progress.offsetWidth; /* Repaint */

		    queue(function(next) {
		      // Set positionUsing if it hasn't already been set
		      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

		      // Add transition
		      css(bar, barPositionCSS(n, speed, ease));

		      if (n === 1) {
		        // Fade out
		        css(progress, {
		          transition: 'none',
		          opacity: 1
		        });
		        progress.offsetWidth; /* Repaint */

		        setTimeout(function() {
		          css(progress, {
		            transition: 'all ' + speed + 'ms linear',
		            opacity: 0
		          });
		          setTimeout(function() {
		            NProgress.remove();
		            next();
		          }, speed);
		        }, speed);
		      } else {
		        setTimeout(next, speed);
		      }
		    });

		    return this;
		  };

		  NProgress.isStarted = function() {
		    return typeof NProgress.status === 'number';
		  };

		  /**
		   * Shows the progress bar.
		   * This is the same as setting the status to 0%, except that it doesn't go backwards.
		   *
		   *     NProgress.start();
		   *
		   */
		  NProgress.start = function() {
		    if (!NProgress.status) NProgress.set(0);

		    var work = function() {
		      setTimeout(function() {
		        if (!NProgress.status) return;
		        NProgress.trickle();
		        work();
		      }, Settings.trickleSpeed);
		    };

		    if (Settings.trickle) work();

		    return this;
		  };

		  /**
		   * Hides the progress bar.
		   * This is the *sort of* the same as setting the status to 100%, with the
		   * difference being `done()` makes some placebo effect of some realistic motion.
		   *
		   *     NProgress.done();
		   *
		   * If `true` is passed, it will show the progress bar even if its hidden.
		   *
		   *     NProgress.done(true);
		   */

		  NProgress.done = function(force) {
		    if (!force && !NProgress.status) return this;

		    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
		  };

		  /**
		   * Increments by a random amount.
		   */

		  NProgress.inc = function(amount) {
		    var n = NProgress.status;

		    if (!n) {
		      return NProgress.start();
		    } else {
		      if (typeof amount !== 'number') {
		        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
		      }

		      n = clamp(n + amount, 0, 0.994);
		      return NProgress.set(n);
		    }
		  };

		  NProgress.trickle = function() {
		    return NProgress.inc(Math.random() * Settings.trickleRate);
		  };

		  /**
		   * Waits for all supplied jQuery promises and
		   * increases the progress as the promises resolve.
		   *
		   * @param $promise jQUery Promise
		   */
		  (function() {
		    var initial = 0, current = 0;

		    NProgress.promise = function($promise) {
		      if (!$promise || $promise.state() === "resolved") {
		        return this;
		      }

		      if (current === 0) {
		        NProgress.start();
		      }

		      initial++;
		      current++;

		      $promise.always(function() {
		        current--;
		        if (current === 0) {
		          initial = 0;
		          NProgress.done();
		        } else {
		          NProgress.set((initial - current) / initial);
		        }
		      });

		      return this;
		    };

		  })();

		  /**
		   * (Internal) renders the progress bar markup based on the `template`
		   * setting.
		   */

		  NProgress.render = function(fromStart) {
		    if (NProgress.isRendered()) return document.getElementById('nprogress');

		    addClass(document.documentElement, 'nprogress-busy');

		    var progress = document.createElement('div');
		    progress.id = 'nprogress';
		    progress.innerHTML = Settings.template;

		    var bar      = progress.querySelector(Settings.barSelector),
		      perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
		      parent   = document.querySelector(Settings.parent),
		      spinner;

		    css(bar, {
		      transition: 'all 0 linear',
		      transform: 'translate3d(' + perc + '%,0,0)'
		    });

		    if (!Settings.showSpinner) {
		      spinner = progress.querySelector(Settings.spinnerSelector);
		      spinner && removeElement(spinner);
		    }

		    if (parent != document.body) {
		      addClass(parent, 'nprogress-custom-parent');
		    }

		    parent.appendChild(progress);
		    return progress;
		  };

		  /**
		   * Removes the element. Opposite of render().
		   */

		  NProgress.remove = function() {
		    removeClass(document.documentElement, 'nprogress-busy');
		    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
		    var progress = document.getElementById('nprogress');
		    progress && removeElement(progress);
		  };

		  /**
		   * Checks if the progress bar is rendered.
		   */

		  NProgress.isRendered = function() {
		    return !!document.getElementById('nprogress');
		  };

		  /**
		   * Determine which positioning CSS rule to use.
		   */

		  NProgress.getPositioningCSS = function() {
		    // Sniff on document.body.style
		    var bodyStyle = document.body.style;

		    // Sniff prefixes
		    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
		      ('MozTransform' in bodyStyle) ? 'Moz' :
		        ('msTransform' in bodyStyle) ? 'ms' :
		          ('OTransform' in bodyStyle) ? 'O' : '';

		    if (vendorPrefix + 'Perspective' in bodyStyle) {
		      // Modern browsers with 3D support, e.g. Webkit, IE10
		      return 'translate3d';
		    } else if (vendorPrefix + 'Transform' in bodyStyle) {
		      // Browsers without 3D support, e.g. IE9
		      return 'translate';
		    } else {
		      // Browsers without translate() support, e.g. IE7-8
		      return 'margin';
		    }
		  };

		  /**
		   * Helpers
		   */

		  function clamp(n, min, max) {
		    if (n < min) return min;
		    if (n > max) return max;
		    return n;
		  }

		  /**
		   * (Internal) converts a percentage (`0..1`) to a bar translateX
		   * percentage (`-100%..0%`).
		   */

		  function toBarPerc(n) {
		    return (-1 + n) * 100;
		  }


		  /**
		   * (Internal) returns the correct CSS for changing the bar's
		   * position given an n percentage, and speed and ease from Settings
		   */

		  function barPositionCSS(n, speed, ease) {
		    var barCSS;

		    if (Settings.positionUsing === 'translate3d') {
		      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
		    } else if (Settings.positionUsing === 'translate') {
		      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
		    } else {
		      barCSS = { 'margin-left': toBarPerc(n)+'%' };
		    }

		    barCSS.transition = 'all '+speed+'ms '+ease;

		    return barCSS;
		  }

		  /**
		   * (Internal) Queues a function to be executed.
		   */

		  var queue = (function() {
		    var pending = [];

		    function next() {
		      var fn = pending.shift();
		      if (fn) {
		        fn(next);
		      }
		    }

		    return function(fn) {
		      pending.push(fn);
		      if (pending.length == 1) next();
		    };
		  })();

		  /**
		   * (Internal) Applies css properties to an element, similar to the jQuery
		   * css method.
		   *
		   * While this helper does assist with vendor prefixed property names, it
		   * does not perform any manipulation of values prior to setting styles.
		   */

		  var css = (function() {
		    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
		      cssProps    = {};

		    function camelCase(string) {
		      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
		        return letter.toUpperCase();
		      });
		    }

		    function getVendorProp(name) {
		      var style = document.body.style;
		      if (name in style) return name;

		      var i = cssPrefixes.length,
		        capName = name.charAt(0).toUpperCase() + name.slice(1),
		        vendorName;
		      while (i--) {
		        vendorName = cssPrefixes[i] + capName;
		        if (vendorName in style) return vendorName;
		      }

		      return name;
		    }

		    function getStyleProp(name) {
		      name = camelCase(name);
		      return cssProps[name] || (cssProps[name] = getVendorProp(name));
		    }

		    function applyCss(element, prop, value) {
		      prop = getStyleProp(prop);
		      element.style[prop] = value;
		    }

		    return function(element, properties) {
		      var args = arguments,
		        prop,
		        value;

		      if (args.length == 2) {
		        for (prop in properties) {
		          value = properties[prop];
		          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
		        }
		      } else {
		        applyCss(element, args[1], args[2]);
		      }
		    }
		  })();

		  /**
		   * (Internal) Determines if an element or space separated list of class names contains a class name.
		   */

		  function hasClass(element, name) {
		    var list = typeof element == 'string' ? element : classList(element);
		    return list.indexOf(' ' + name + ' ') >= 0;
		  }

		  /**
		   * (Internal) Adds a class to an element.
		   */

		  function addClass(element, name) {
		    var oldList = classList(element),
		      newList = oldList + name;

		    if (hasClass(oldList, name)) return;

		    // Trim the opening space.
		    element.className = newList.substring(1);
		  }

		  /**
		   * (Internal) Removes a class from an element.
		   */

		  function removeClass(element, name) {
		    var oldList = classList(element),
		      newList;

		    if (!hasClass(element, name)) return;

		    // Replace the class name.
		    newList = oldList.replace(' ' + name + ' ', ' ');

		    // Trim the opening and closing spaces.
		    element.className = newList.substring(1, newList.length - 1);
		  }

		  /**
		   * (Internal) Gets a space separated list of the class names on the element.
		   * The list is wrapped with a single space on each end to facilitate finding
		   * matches within the list.
		   */

		  function classList(element) {
		    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
		  }

		  /**
		   * (Internal) Removes an element from the DOM.
		   */

		  function removeElement(element) {
		    element && element.parentNode && element.parentNode.removeChild(element);
		  }

		  return NProgress;
		})();

		module.exports = UI.progress = Progress;


	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		var PinchZoom = __webpack_require__(17);
		var Hammer = __webpack_require__(3);
		var animation = UI.support.animation;
		var transition = UI.support.transition;

		/**
		 * PureView
		 * @desc Image browser for Mobile
		 * @param element
		 * @param options
		 * @constructor
		 */

		var PureView = function(element, options) {
		  this.$element = $(element);
		  this.$body = $(document.body);
		  this.options = $.extend({}, PureView.DEFAULTS, options);
		  this.$pureview = $(this.options.tpl).attr('id',
		    UI.utils.generateGUID('am-pureview'));

		  this.$slides = null;
		  this.transitioning = null;
		  this.scrollbarWidth = 0;

		  this.init();
		};

		PureView.DEFAULTS = {
		  tpl: '<div class="am-pureview am-pureview-bar-active">' +
		  '<ul class="am-pureview-slider"></ul>' +
		  '<ul class="am-pureview-direction">' +
		  '<li class="am-pureview-prev"><a href=""></a></li>' +
		  '<li class="am-pureview-next"><a href=""></a></li></ul>' +
		  '<ol class="am-pureview-nav"></ol>' +
		  '<div class="am-pureview-bar am-active">' +
		  '<span class="am-pureview-title"></span>' +
		  '<div class="am-pureview-counter"><span class="am-pureview-current"></span> / ' +
		  '<span class="am-pureview-total"></span></div></div>' +
		  '<div class="am-pureview-actions am-active">' +
		  '<a href="javascript: void(0)" class="am-icon-chevron-left" ' +
		  'data-am-close="pureview"></a></div>' +
		  '</div>',

		  className: {
		    prevSlide: 'am-pureview-slide-prev',
		    nextSlide: 'am-pureview-slide-next',
		    onlyOne: 'am-pureview-only',
		    active: 'am-active',
		    barActive: 'am-pureview-bar-active',
		    activeBody: 'am-pureview-active'
		  },

		  selector: {
		    slider: '.am-pureview-slider',
		    close: '[data-am-close="pureview"]',
		    total: '.am-pureview-total',
		    current: '.am-pureview-current',
		    title: '.am-pureview-title',
		    actions: '.am-pureview-actions',
		    bar: '.am-pureview-bar',
		    pinchZoom: '.am-pinch-zoom',
		    nav: '.am-pureview-nav'
		  },

		  shareBtn: false,

		  // press to toggle Toolbar
		  toggleToolbar: true,

		  // 从何处获取图片，img 可以使用 data-rel 指定大图
		  target: 'img',

		  // 微信 Webview 中调用微信的图片浏览器
		  // 实现图片保存、分享好友、收藏图片等功能
		  weChatImagePreview: true
		};

		PureView.prototype.init = function() {
		  var _this = this;
		  var options = this.options;
		  var $element = this.$element;
		  var $pureview = this.$pureview;

		  this.refreshSlides();

		  $('body').append($pureview);

		  this.$title = $pureview.find(options.selector.title);
		  this.$current = $pureview.find(options.selector.current);
		  this.$bar = $pureview.find(options.selector.bar);
		  this.$actions = $pureview.find(options.selector.actions);

		  if (options.shareBtn) {
		    this.$actions.append('<a href="javascript: void(0)" ' +
		    'class="am-icon-share-square-o" data-am-toggle="share"></a>');
		  }

		  this.$element.on('click.pureview.amui', options.target, function(e) {
		    e.preventDefault();
		    var clicked = _this.$images.index(this);

		    // Invoke WeChat ImagePreview in WeChat
		    // TODO: detect WeChat before init
		    if (options.weChatImagePreview && window.WeixinJSBridge) {
		      window.WeixinJSBridge.invoke('imagePreview', {
		        current: _this.imgUrls[clicked],
		        urls: _this.imgUrls
		      });
		    } else {
		      _this.open(clicked);
		    }
		  });

		  $pureview.find('.am-pureview-direction').
		    on('click.direction.pureview.amui', 'li', function(e) {
		      e.preventDefault();

		      if ($(this).is('.am-pureview-prev')) {
		        _this.prevSlide();
		      } else {
		        _this.nextSlide();
		      }
		    });

		  // Nav Contorl
		  $pureview.find(options.selector.nav).on('click.nav.pureview.amui', 'li',
		    function() {
		      var index = _this.$navItems.index($(this));
		      _this.activate(_this.$slides.eq(index));
		    });

		  // Close Icon
		  $pureview.find(options.selector.close).
		    on('click.close.pureview.amui', function(e) {
		      e.preventDefault();
		      _this.close();
		    });

		  this.$slider.hammer().on('swipeleft.pureview.amui', function(e) {
		    e.preventDefault();
		    _this.nextSlide();
		  }).on('swiperight.pureview.amui', function(e) {
		    e.preventDefault();
		    _this.prevSlide();
		  }).on('press.pureview.amui', function(e) {
		    e.preventDefault();
		    options.toggleToolbar && _this.toggleToolBar();
		  });

		  this.$slider.data('hammer').get('swipe').set({
		    direction: Hammer.DIRECTION_HORIZONTAL,
		    velocity: 0.35
		  });

		  // Observe DOM
		  $element.DOMObserve({
		    childList: true,
		    subtree: true
		  }, function(mutations, observer) {
		    // _this.refreshSlides();
		    // console.log('mutations[0].type);
		  });

		  // NOTE:
		  // trigger this event manually if MutationObserver not supported
		  //   when new images appended, or call refreshSlides()
		  // if (!UI.support.mutationobserver) $element.trigger('changed.dom.amui')
		  $element.on('changed.dom.amui', function(e) {
		    e.stopPropagation();
		    _this.refreshSlides();
		  });

		  $(document).on('keydown.pureview.amui', $.proxy(function(e) {
		    var keyCode = e.keyCode;
		    if (keyCode == 37) {
		      this.prevSlide();
		    } else if (keyCode == 39) {
		      this.nextSlide();
		    } else if (keyCode == 27) {
		      this.close();
		    }
		  }, this));
		};

		PureView.prototype.refreshSlides = function() {
		  // update images collections
		  this.$images = this.$element.find(this.options.target);
		  var _this = this;
		  var options = this.options;
		  var $pureview = this.$pureview;
		  var $slides = $([]);
		  var $navItems = $([]);
		  var $images = this.$images;
		  var total = $images.length;
		  this.$slider = $pureview.find(options.selector.slider);
		  this.$nav = $pureview.find(options.selector.nav);
		  var viewedFlag = 'data-am-pureviewed';
		  // for WeChat Image Preview
		  this.imgUrls = this.imgUrls || [];

		  if (!total) {
		    return;
		  }

		  if (total === 1) {
		    $pureview.addClass(options.className.onlyOne);
		  }

		  $images.not('[' + viewedFlag + ']').each(function(i, item) {
		    var src;
		    var title;

		    // get image URI from link's href attribute
		    if (item.nodeName === 'A') {
		      src = item.href; // to absolute path
		      title = item.title || '';
		    } else {
		      // NOTE: `data-rel` should be a full URL, otherwise,
		      //        WeChat images preview will not work
		      src = $(item).data('rel') || item.src; // <img src='' data-rel='' />
		      src = UI.utils.getAbsoluteUrl(src);
		      title = $(item).attr('alt') || '';
		    }

		    // add pureviewed flag
		    item.setAttribute(viewedFlag, '1');

		    // hide bar: wechat_webview_type=1
		    // http://tmt.io/wechat/  not working?
		    _this.imgUrls.push(src);

		    $slides = $slides.add($('<li data-src="' + src + '" data-title="' + title +
		    '"></li>'));
		    $navItems = $navItems.add($('<li>' + (i + 1) + '</li>'));
		  });

		  $pureview.find(options.selector.total).text(total);

		  this.$slider.append($slides);
		  this.$nav.append($navItems);
		  this.$navItems = this.$nav.find('li');
		  this.$slides = this.$slider.find('li');
		};

		PureView.prototype.loadImage = function($slide, callback) {
		  var appendedFlag = 'image-appended';

		  if (!$slide.data(appendedFlag)) {
		    var $img = $('<img>', {
		      src: $slide.data('src'),
		      alt: $slide.data('title')
		    });

		    $slide.html($img).wrapInner('<div class="am-pinch-zoom"></div>').redraw();

		    var $pinchWrapper = $slide.find(this.options.selector.pinchZoom);
		    $pinchWrapper.data('amui.pinchzoom', new PinchZoom($pinchWrapper[0], {}));
		    $slide.data('image-appended', true);
		  }

		  callback && callback.call(this);
		};

		PureView.prototype.activate = function($slide) {
		  var options = this.options;
		  var $slides = this.$slides;
		  var activeIndex = $slides.index($slide);
		  var title = $slide.data('title') || '';
		  var active = options.className.active;

		  if ($slides.find('.' + active).is($slide)) {
		    return;
		  }

		  if (this.transitioning) {
		    return;
		  }

		  this.loadImage($slide, function() {
		    UI.utils.imageLoader($slide.find('img'), function(image) {
		      $slide.find('.am-pinch-zoom').addClass('am-pureview-loaded');
		      $(image).addClass('am-img-loaded');
		    });
		  });

		  this.transitioning = 1;

		  this.$title.text(title);
		  this.$current.text(activeIndex + 1);
		  $slides.removeClass();
		  $slide.addClass(active);
		  $slides.eq(activeIndex - 1).addClass(options.className.prevSlide);
		  $slides.eq(activeIndex + 1).addClass(options.className.nextSlide);

		  this.$navItems.removeClass().
		    eq(activeIndex).addClass(options.className.active);

		  if (transition) {
		    $slide.one(transition.end, $.proxy(function() {
		      this.transitioning = 0;
		    }, this)).emulateTransitionEnd(300);
		  } else {
		    this.transitioning = 0;
		  }

		  // TODO: pre-load next image
		};

		PureView.prototype.nextSlide = function() {
		  if (this.$slides.length === 1) {
		    return;
		  }

		  var $slides = this.$slides;
		  var $active = $slides.filter('.am-active');
		  var activeIndex = $slides.index($active);
		  var rightSpring = 'am-animation-right-spring';

		  if (activeIndex + 1 >= $slides.length) { // last one
		    animation && $active.addClass(rightSpring).on(animation.end, function() {
		      $active.removeClass(rightSpring);
		    });
		  } else {
		    this.activate($slides.eq(activeIndex + 1));
		  }
		};

		PureView.prototype.prevSlide = function() {
		  if (this.$slides.length === 1) {
		    return;
		  }

		  var $slides = this.$slides;
		  var $active = $slides.filter('.am-active');
		  var activeIndex = this.$slides.index(($active));
		  var leftSpring = 'am-animation-left-spring';

		  if (activeIndex === 0) { // first one
		    animation && $active.addClass(leftSpring).on(animation.end, function() {
		      $active.removeClass(leftSpring);
		    });
		  } else {
		    this.activate($slides.eq(activeIndex - 1));
		  }
		};

		PureView.prototype.toggleToolBar = function() {
		  this.$pureview.toggleClass(this.options.className.barActive);
		};

		PureView.prototype.open = function(index) {
		  var active = index || 0;
		  this.checkScrollbar();
		  this.setScrollbar();
		  this.activate(this.$slides.eq(active));
		  this.$pureview.show().redraw().addClass(this.options.className.active);
		  this.$body.addClass(this.options.className.activeBody);
		};

		PureView.prototype.close = function() {
		  var options = this.options;

		  this.$pureview.removeClass(options.className.active);
		  this.$slides.removeClass();

		  function resetBody() {
		    this.$pureview.hide();
		    this.$body.removeClass(options.className.activeBody);
		    this.resetScrollbar();
		  }

		  if (transition) {
		    this.$pureview.one(transition.end, $.proxy(resetBody, this)).
		      emulateTransitionEnd(300);
		  } else {
		    resetBody.call(this);
		  }
		};

		PureView.prototype.checkScrollbar = function() {
		  this.scrollbarWidth = UI.utils.measureScrollbar();
		};

		PureView.prototype.setScrollbar = function() {
		  var bodyPaddingRight = parseInt((this.$body.css('padding-right') || 0), 10);
		  if (this.scrollbarWidth) {
		    this.$body.css('padding-right', bodyPaddingRight + this.scrollbarWidth);
		  }
		};

		PureView.prototype.resetScrollbar = function() {
		  this.$body.css('padding-right', '');
		};

		UI.plugin('pureview', PureView);

		// Init code
		UI.ready(function(context) {
		  $('[data-am-pureview]', context).pureview();
		});

		module.exports = PureView;

		// TODO: 1. 动画改进
		//       2. 改变图片的时候恢复 Zoom
		//       3. 选项
		//       4. 图片高度问题：由于 PinchZoom 的原因，过高的图片如果设置看了滚动，则放大以后显示不全


	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		/**
		 * @via https://github.com/uikit/uikit/blob/master/src/js/scrollspy.js
		 * @license https://github.com/uikit/uikit/blob/master/LICENSE.md
		 */

		var ScrollSpy = function(element, options) {
		  if (!UI.support.animation) {
		    return;
		  }

		  this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
		  this.$element = $(element);

		  var checkViewRAF = function() {
		    UI.utils.rAF.call(window, $.proxy(this.checkView, this));
		  }.bind(this);

		  this.$window = $(window).on('scroll.scrollspy.amui', checkViewRAF)
		    .on('resize.scrollspy.amui orientationchange.scrollspy.amui',
		    UI.utils.debounce(checkViewRAF, 50));

		  this.timer = this.inViewState = this.initInView = null;

		  checkViewRAF();
		};

		ScrollSpy.DEFAULTS = {
		  animation: 'fade',
		  className: {
		    inView: 'am-scrollspy-inview',
		    init: 'am-scrollspy-init'
		  },
		  repeat: true,
		  delay: 0,
		  topOffset: 0,
		  leftOffset: 0
		};

		ScrollSpy.prototype.checkView = function() {
		  var $element = this.$element;
		  var options = this.options;
		  var inView = UI.utils.isInView($element, options);
		  var animation = options.animation ?
		  ' am-animation-' + options.animation : '';

		  if (inView && !this.inViewState) {
		    if (this.timer) {
		      clearTimeout(this.timer);
		    }

		    if (!this.initInView) {
		      $element.addClass(options.className.init);
		      this.offset = $element.offset();
		      this.initInView = true;

		      $element.trigger('init.scrollspy.amui');
		    }

		    this.timer = setTimeout(function() {
		      if (inView) {
		        $element.addClass(options.className.inView + animation).width();
		      }
		    }, options.delay);

		    this.inViewState = true;
		    $element.trigger('inview.scrollspy.amui');
		  }

		  if (!inView && this.inViewState && options.repeat) {
		    $element.removeClass(options.className.inView + animation);

		    this.inViewState = false;

		    $element.trigger('outview.scrollspy.amui');
		  }
		};

		ScrollSpy.prototype.check = function() {
		  UI.utils.rAF.call(window, $.proxy(this.checkView, this));
		};

		// Sticky Plugin
		UI.plugin('scrollspy', ScrollSpy);

		// Init code
		UI.ready(function(context) {
		  $('[data-am-scrollspy]', context).scrollspy();
		});

		module.exports = ScrollSpy;


	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		__webpack_require__(23);

		/**
		 * @via https://github.com/uikit/uikit/
		 * @license https://github.com/uikit/uikit/blob/master/LICENSE.md
		 */

		// ScrollSpyNav Class
		var ScrollSpyNav = function(element, options) {
		  this.options = $.extend({}, ScrollSpyNav.DEFAULTS, options);
		  this.$element = $(element);
		  this.anchors = [];

		  this.$links = this.$element.find('a[href^="#"]').each(function(i, link) {
		    this.anchors.push($(link).attr('href'));
		  }.bind(this));

		  this.$targets = $(this.anchors.join(', '));

		  var processRAF = function() {
		    UI.utils.rAF.call(window, $.proxy(this.process, this));
		  }.bind(this);

		  this.$window = $(window).on('scroll.scrollspynav.amui', processRAF)
		    .on('resize.scrollspynav.amui orientationchange.scrollspynav.amui',
		    UI.utils.debounce(processRAF, 50));

		  processRAF();
		  this.scrollProcess();
		};

		ScrollSpyNav.DEFAULTS = {
		  className: {
		    active: 'am-active'
		  },
		  closest: false,
		  smooth: true,
		  offsetTop: 0
		};

		ScrollSpyNav.prototype.process = function() {
		  var scrollTop = this.$window.scrollTop();
		  var options = this.options;
		  var inViews = [];
		  var $links = this.$links;

		  var $targets = this.$targets;

		  $targets.each(function(i, target) {
		    if (UI.utils.isInView(target, options)) {
		      inViews.push(target);
		    }
		  });

		  // console.log(inViews.length);

		  if (inViews.length) {
		    var $target;

		    $.each(inViews, function(i, item) {
		      if ($(item).offset().top >= scrollTop) {
		        $target = $(item);
		        return false; // break
		      }
		    });

		    if (!$target) {
		      return;
		    }

		    if (options.closest) {
		      $links.closest(options.closest).removeClass(options.className.active);
		      $links.filter('a[href="#' + $target.attr('id') + '"]').
		        closest(options.closest).addClass(options.className.active);
		    } else {
		      $links.removeClass(options.className.active).
		        filter('a[href="#' + $target.attr('id') + '"]').
		        addClass(options.className.active);
		    }
		  }
		};

		ScrollSpyNav.prototype.scrollProcess = function() {
		  var $links = this.$links;
		  var options = this.options;

		  // smoothScroll
		  if (options.smooth && $.fn.smoothScroll) {
		    $links.on('click', function(e) {
		      e.preventDefault();

		      var $this = $(this);
		      var $target = $($this.attr('href'));

		      if (!$target) {
		        return;
		      }

		      var offsetTop = options.offsetTop &&
		        !isNaN(parseInt(options.offsetTop)) && parseInt(options.offsetTop) || 0;

		      $(window).smoothScroll({position: $target.offset().top - offsetTop});
		    });
		  }
		};

		// ScrollSpyNav Plugin
		UI.plugin('scrollspynav', ScrollSpyNav);

		// Init code
		UI.ready(function(context) {
		  $('[data-am-scrollspy-nav]', context).scrollspynav();
		});

		module.exports = ScrollSpyNav;

		// TODO: 1. 算法改进
		//       2. 多级菜单支持
		//       3. smooth scroll pushState


	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		var rAF = UI.utils.rAF;
		var cAF = UI.utils.cancelAF;

		/**
		 * Smooth Scroll
		 * @param position
		 * @via http://mir.aculo.us/2014/01/19/scrolling-dom-elements-to-the-top-a-zepto-plugin/
		 */

		// Usage: $(window).smoothScroll([options])

		// only allow one scroll to top operation to be in progress at a time,
		// which is probably what you want
		var smoothScrollInProgress = false;

		var SmoothScroll = function(element, options) {
		  options = options || {};

		  var $this = $(element);
		  var targetY = parseInt(options.position) || SmoothScroll.DEFAULTS.position;
		  var initialY = $this.scrollTop();
		  var lastY = initialY;
		  var delta = targetY - initialY;
		  // duration in ms, make it a bit shorter for short distances
		  // this is not scientific and you might want to adjust this for
		  // your preferences
		  var speed = options.speed ||
		      Math.min(750, Math.min(1500, Math.abs(initialY - targetY)));
		  // temp variables (t will be a position between 0 and 1, y is the calculated scrollTop)
		  var start;
		  var t;
		  var y;
		  var cancelScroll = function() {
		      abort();
		    };

		  // abort if already in progress or nothing to scroll
		  if (smoothScrollInProgress) {
		    return;
		  }

		  if (delta === 0) {
		    return;
		  }

		  // quint ease-in-out smoothing, from
		  // https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js#L127-L136
		  function smooth(pos) {
		    if ((pos /= 0.5) < 1) {
		      return 0.5 * Math.pow(pos, 5);
		    }

		    return 0.5 * (Math.pow((pos - 2), 5) + 2);
		  }

		  function abort() {
		    $this.off('touchstart.smoothscroll.amui', cancelScroll);
		    smoothScrollInProgress = false;
		  }

		  // when there's a touch detected while scrolling is in progress, abort
		  // the scrolling (emulates native scrolling behavior)
		  $this.on('touchstart.smoothscroll.amui', cancelScroll);
		  smoothScrollInProgress = true;

		  // start rendering away! note the function given to frame
		  // is named "render" so we can reference it again further down
		  function render(now) {
		    if (!smoothScrollInProgress) {
		      return;
		    }
		    if (!start) {
		      start = now;
		    }

		    // calculate t, position of animation in [0..1]
		    t = Math.min(1, Math.max((now - start) / speed, 0));
		    // calculate the new scrollTop position (don't forget to smooth)
		    y = Math.round(initialY + delta * smooth(t));
		    // bracket scrollTop so we're never over-scrolling
		    if (delta > 0 && y > targetY) {
		      y = targetY;
		    }
		    if (delta < 0 && y < targetY) {
		      y = targetY;
		    }

		    // only actually set scrollTop if there was a change fromt he last frame
		    if (lastY != y) {
		      $this.scrollTop(y);
		    }

		    lastY = y;
		    // if we're not done yet, queue up an other frame to render,
		    // or clean up
		    if (y !== targetY) {
		      cAF(scrollRAF);
		      scrollRAF = rAF(render);
		    } else {
		      cAF(scrollRAF);
		      abort();
		    }
		  }

		  var scrollRAF = rAF(render);
		};

		SmoothScroll.DEFAULTS = {
		  position: 0
		};

		$.fn.smoothScroll = function(option) {
		  return this.each(function() {
		    new SmoothScroll(this, option);
		  });
		};

		// Init code
		$(document).on('click.smoothScroll.amui.data-api', '[data-am-smooth-scroll]',
		  function(e) {
		    e.preventDefault();
		    var options = UI.utils.parseOptions($(this).data('amSmoothScroll'));

		    $(window).smoothScroll(options);
		  });

		module.exports = SmoothScroll;


	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		// require('./ui.dropdown');

		// Make jQuery :contains Case-Insensitive
		$.expr[':'].containsNC = function(elem, i, match, array) {
		  return (elem.textContent || elem.innerText || '').toLowerCase().
		      indexOf((match[3] || '').toLowerCase()) >= 0;
		};

		/**
		 * Selected
		 * @desc HTML select replacer
		 * @via https://github.com/silviomoreto/bootstrap-select
		 * @license https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE
		 * @param element
		 * @param options
		 * @constructor
		 */

		var Selected = function(element, options) {
		  this.$element = $(element);
		  this.options = $.extend({}, Selected.DEFAULTS, {
		    placeholder: element.getAttribute('placeholder') ||
		    Selected.DEFAULTS.placeholder
		  }, options);
		  this.$originalOptions = this.$element.find('option');
		  this.multiple = element.multiple;
		  this.$selector = null;
		  this.initialized = false;
		  this.init();
		};

		Selected.DEFAULTS = {
		  btnWidth: null,
		  btnSize: null,
		  btnStyle: 'default',
		  dropUp: 0,
		  maxHeight: null,
		  maxChecked: null,
		  placeholder: '点击选择...',
		  selectedClass: 'am-checked',
		  disabledClass: 'am-disabled',
		  searchBox: false,
		  tpl: '<div class="am-selected am-dropdown ' +
		  '<%= dropUp ? \'am-dropdown-up\': \'\' %>" id="<%= id %>" data-am-dropdown>' +
		  '  <button type="button" class="am-selected-btn am-btn am-dropdown-toggle">' +
		  '    <span class="am-selected-status am-fl"></span>' +
		  '    <i class="am-selected-icon am-icon-caret-' +
		  '<%= dropUp ? \'up\' : \'down\' %>"></i>' +
		  '  </button>' +
		  '  <div class="am-selected-content am-dropdown-content">' +
		  '    <h2 class="am-selected-header">' +
		  '<span class="am-icon-chevron-left">返回</span></h2>' +
		  '   <% if (searchBox) { %>' +
		  '   <div class="am-selected-search">' +
		  '     <input autocomplete="off" class="am-form-field am-input-sm" />' +
		  '   </div>' +
		  '   <% } %>' +
		  '    <ul class="am-selected-list">' +
		  '      <% for (var i = 0; i < options.length; i++) { %>' +
		  '       <% var option = options[i] %>' +
		  '       <% if (option.header) { %>' +
		  '  <li data-group="<%= option.group %>" class="am-selected-list-header">' +
		  '       <%= option.text %></li>' +
		  '       <% } else { %>' +
		  '       <li class="<%= option.classNames%>" ' +
		  '         data-index="<%= option.index %>" ' +
		  '         data-group="<%= option.group || 0 %>" ' +
		  '         data-value="<%= option.value %>" >' +
		  '         <span class="am-selected-text"><%= option.text %></span>' +
		  '         <i class="am-icon-check"></i></li>' +
		  '      <% } %>' +
		  '      <% } %>' +
		  '    </ul>' +
		  '    <div class="am-selected-hint"></div>' +
		  '  </div>' +
		  '</div>',
		  listTpl:   '<% for (var i = 0; i < options.length; i++) { %>' +
		  '       <% var option = options[i] %>' +
		  '       <% if (option.header) { %>' +
		  '  <li data-group="<%= option.group %>" class="am-selected-list-header">' +
		  '       <%= option.text %></li>' +
		  '       <% } else { %>' +
		  '       <li class="<%= option.classNames %>" ' +
		  '         data-index="<%= option.index %>" ' +
		  '         data-group="<%= option.group || 0 %>" ' +
		  '         data-value="<%= option.value %>" >' +
		  '         <span class="am-selected-text"><%= option.text %></span>' +
		  '         <i class="am-icon-check"></i></li>' +
		  '      <% } %>' +
		  '      <% } %>'
		};

		Selected.prototype.init = function() {
		  var _this = this;
		  var $element = this.$element;
		  var options = this.options;

		  $element.hide();

		  var data = {
		    id: UI.utils.generateGUID('am-selected'),
		    multiple: this.multiple,
		    options: [],
		    searchBox: options.searchBox,
		    dropUp: options.dropUp,
		    placeholder: options.placeholder
		  };

		  this.$selector = $(UI.template(this.options.tpl, data));
		  // set select button styles
		  this.$selector.css({width: this.options.btnWidth});

		  if (this.$element[0].disabled) {
		    this.$selector.addClass(options.disabledClass);
		  }

		  this.$list = this.$selector.find('.am-selected-list');
		  this.$searchField = this.$selector.find('.am-selected-search input');
		  this.$hint = this.$selector.find('.am-selected-hint');

		  var $selectorBtn = this.$selector.find('.am-selected-btn');
		  var btnClassNames = [];

		  options.btnSize && btnClassNames.push('am-btn-' + options.btnSize);
		  options.btnStyle && btnClassNames.push('am-btn-' + options.btnStyle);
		  $selectorBtn.addClass(btnClassNames.join(' '));

		  this.$selector.dropdown({
		    justify: $selectorBtn
		  });

		  // set list height
		  if (options.maxHeight) {
		    this.$selector.find('.am-selected-list').css({
		      'max-height': options.maxHeight,
		      'overflow-y': 'scroll'
		    });
		  }

		  // set hint text
		  var hint = [];
		  var min = $element.attr('minchecked');
		  var max = $element.attr('maxchecked') || options.maxChecked;

		  this.maxChecked = max || Infinity;

		  if ($element[0].required) {
		    hint.push('必选');
		  }

		  if (min || max) {
		    min && hint.push('至少选择 ' + min + ' 项');
		    max && hint.push('至多选择 ' + max + ' 项');
		  }

		  this.$hint.text(hint.join('，'));

		  // render dropdown list
		  this.renderOptions();

		  // append $selector after <select>
		  this.$element.after(this.$selector);
		  this.dropdown = this.$selector.data('amui.dropdown');
		  this.$status = this.$selector.find('.am-selected-status');

		  // #try to fixes #476
		  setTimeout(function() {
		    _this.syncData();
		    _this.initialized = true;
		  }, 0);

		  this.bindEvents();
		};

		Selected.prototype.renderOptions = function() {
		  var $element = this.$element;
		  var options = this.options;
		  var optionItems = [];
		  var $optgroup = $element.find('optgroup');
		  this.$originalOptions = this.$element.find('option');

		  // 单选框使用 JS 禁用已经选择的 option 以后，
		  // 浏览器会重新选定第一个 option，但有一定延迟，致使 JS 获取 value 时返回 null
		  if (!this.multiple && ($element.val() === null)) {
		    this.$originalOptions.length &&
		    (this.$originalOptions.get(0).selected = true);
		  }

		  function pushOption(index, item, group) {
		    if (item.value === '') {
		      // skip to next iteration
		      // @see http://stackoverflow.com/questions/481601/how-to-skip-to-next-iteration-in-jquery-each-util
		      return true;
		    }

		    var classNames = '';
		    item.disabled && (classNames += options.disabledClass);
		    !item.disabled && item.selected && (classNames += options.selectedClass);

		    optionItems.push({
		      group: group,
		      index: index,
		      classNames: classNames,
		      text: item.text,
		      value: item.value
		    });
		  }

		  // select with option groups
		  if ($optgroup.length) {
		    $optgroup.each(function(i) {
		      // push group name
		      optionItems.push({
		        header: true,
		        group: i + 1,
		        text: this.label
		      });

		      $optgroup.eq(i).find('option').each(function(index, item) {
		        pushOption(index, item, i);
		      });
		    });
		  } else {
		    // without option groups
		    this.$originalOptions.each(function(index, item) {
		      pushOption(index, item, null);
		    });
		  }

		  this.$list.html(UI.template(options.listTpl, {options: optionItems}));
		  this.$shadowOptions = this.$list.find('> li').
		    not('.am-selected-list-header');
		};

		Selected.prototype.setChecked = function(item) {
		  var options = this.options;
		  var $item = $(item);
		  var isChecked = $item.hasClass(options.selectedClass);

		  if (this.multiple) {
		    // multiple
		    var checkedLength = this.$list.find('.' + options.selectedClass).length;

		    if (!isChecked && this.maxChecked <= checkedLength) {
		      this.$element.trigger('checkedOverflow.selected.amui', {
		        selected: this
		      });

		      return false;
		    }
		  } else {
		    if (isChecked) {
		      return false;
		    }

		    this.dropdown.close();
		    this.$shadowOptions.not($item).removeClass(options.selectedClass);
		  }

		  $item.toggleClass(options.selectedClass);
		  this.syncData(item);
		};

		/**
		 * syncData
		 * @desc if `item` set, only sync `item` related option
		 * @param {Object} item
		 */
		Selected.prototype.syncData = function(item) {
		  var _this = this;
		  var options = this.options;
		  var status = [];
		  var $checked = $([]);

		  this.$shadowOptions.filter('.' + options.selectedClass).each(function() {
		    var $this = $(this);
		    status.push($this.find('.am-selected-text').text());

		    if (!item) {
		      $checked = $checked.add(_this.$originalOptions
		        .filter('[value="' + $this.data('value') + '"]')
		        .prop('selected', true));
		    }
		  });

		  if (item) {
		    var $item = $(item);
		    this.$originalOptions
		      .filter('[value="' + $item.data('value') + '"]')
		      .prop('selected', $item.hasClass(options.selectedClass));
		  } else {
		    this.$originalOptions.not($checked).prop('selected', false);
		  }

		  // nothing selected
		  if (!this.$element.val()) {
		    status = [options.placeholder];
		  }

		  this.$status.text(status.join(', '));

		  // Do not trigger change event on initializing
		  this.initialized && this.$element.trigger('change');
		};

		Selected.prototype.bindEvents = function() {
		  var _this = this;
		  var header = 'am-selected-list-header';
		  var handleKeyup = UI.utils.debounce(function(e) {
		    _this.$shadowOptions.not('.' + header).hide().
		     filter(':containsNC("' + e.target.value + '")').show();
		  }, 100);

		  this.$list.on('click', '> li', function(e) {
		    var $this = $(this);
		    !$this.hasClass(_this.options.disabledClass) &&
		      !$this.hasClass(header) && _this.setChecked(this);
		  });

		  // simple search with jQuery :contains
		  this.$searchField.on('keyup.selected.amui', handleKeyup);

		  // empty search keywords
		  this.$selector.on('closed.dropdown.amui', function() {
		    _this.$searchField.val('');
		    _this.$shadowOptions.css({display: ''});
		  });

		  // work with Validator
		  // @since 2.5
		  this.$element.on('validated.field.validator.amui', function(e) {
		    if (e.validity) {
		      var valid = e.validity.valid;
		      var errorClassName = 'am-invalid';

		      _this.$selector[(!valid ? 'add' : 'remove') + 'Class'](errorClassName);
		    }
		  });

		  // observe DOM
		  if (UI.support.mutationobserver) {
		    this.observer = new UI.support.mutationobserver(function() {
		      _this.$element.trigger('changed.selected.amui');
		    });

		    this.observer.observe(this.$element[0], {
		      childList: true,
		      attributes: true,
		      subtree: true,
		      characterData: true
		    });
		  }

		  // custom event
		  this.$element.on('changed.selected.amui', function() {
		    _this.renderOptions();
		    _this.syncData();
		  });
		};

		// @since: 2.5
		Selected.prototype.select = function(item) {
		  var $item;

		  if (typeof item === 'number') {
		    $item = this.$list.find('> li').not('.am-selected-list-header').eq(item);
		  } else if (typeof item === 'string') {
		    $item = this.$list.find(item);
		  } else {
		    $item = $(item);
		  }

		  $item.trigger('click');
		},

		// @since: 2.5
		Selected.prototype.enable = function() {
		  this.$element.prop('disable', false);
		  this.$selector.dropdown('enable');
		},

		// @since: 2.5
		Selected.prototype.disable = function() {
		  this.$element.prop('disable', true);
		  this.$selector.dropdown('disable');
		},

		Selected.prototype.destroy = function() {
		  this.$element.removeData('amui.selected').show();
		  this.$selector.remove();
		};

		UI.plugin('selected', Selected);

		// Conflict with jQuery form
		// https://github.com/malsup/form/blob/6bf24a5f6d8be65f4e5491863180c09356d9dadd/jquery.form.js#L1240-L1258
		// https://github.com/allmobilize/amazeui/issues/379
		// @deprecated: $.fn.selected = $.fn.selectIt = Plugin;

		// New way to resolve conflict:
		// @see https://github.com/amazeui/amazeui/issues/781#issuecomment-158873541

		UI.ready(function(context) {
		  $('[data-am-selected]', context).selected();
		});

		module.exports = Selected;


	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		__webpack_require__(15);
		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		var QRCode = __webpack_require__(26);
		var doc = document;
		var $doc = $(doc);

		var Share = function(options) {
		  this.options = $.extend({}, Share.DEFAULTS, options || {});
		  this.$element = null;
		  this.$wechatQr = null;
		  this.pics = null;
		  this.inited = false;
		  this.active = false;
		  // this.init();
		};

		Share.DEFAULTS = {
		  sns: ['weibo', 'qq', 'qzone', 'tqq', 'wechat', 'renren'],
		  title: '分享到',
		  cancel: '取消',
		  closeOnShare: true,
		  id: UI.utils.generateGUID('am-share'),
		  desc: 'Hi，孤夜观天象，发现一个不错的西西，分享一下下 ;-)',
		  via: 'Amaze UI',
		  tpl: '<div class="am-share am-modal-actions" id="<%= id %>">' +
		  '<h3 class="am-share-title"><%= title %></h3>' +
		  '<ul class="am-share-sns am-avg-sm-3">' +
		  '<% for(var i = 0; i < sns.length; i++) {%>' +
		  '<li>' +
		  '<a href="<%= sns[i].shareUrl %>" ' +
		  'data-am-share-to="<%= sns[i].id %>" >' +
		  '<i class="am-icon-<%= sns[i].icon %>"></i>' +
		  '<span><%= sns[i].title %></span>' +
		  '</a></li>' +
		  '<% } %></ul>' +
		  '<div class="am-share-footer">' +
		  '<button class="am-btn am-btn-default am-btn-block" ' +
		  'data-am-share-close><%= cancel %></button></div>' +
		  '</div>'
		};

		Share.SNS = {
		  weibo: {
		    title: '新浪微博',
		    url: 'http://service.weibo.com/share/share.php',
		    width: 620,
		    height: 450,
		    icon: 'weibo'
		  },
		  // url          链接地址
		  // title:”,     分享的文字内容(可选，默认为所在页面的title)
		  // appkey:”,    您申请的应用appkey,显示分享来源(可选)
		  // pic:”,       分享图片的路径(可选)
		  // ralateUid:”, 关联用户的UID，分享微博会@该用户(可选)
		  // NOTE: 会自动抓取图片，不用指定 pic

		  qq: {
		    title: 'QQ 好友',
		    url: 'http://connect.qq.com/widget/shareqq/index.html',
		    icon: 'qq'
		  },
		  // url:,
		  // title:'',    分享标题(可选)
		  // pics:'',     分享图片的路径(可选)
		  // summary:'',  分享摘要(可选)
		  // site:'',     分享来源 如：腾讯网(可选)
		  // desc: ''     发送给用户的消息
		  // NOTE: 经过测试，最终发给用户的只有 url 和 desc

		  qzone: {
		    title: 'QQ 空间',
		    url: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey',
		    icon: 'star'
		  },
		  // http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=xxx&title=xxx&desc=&summary=&site=
		  // url:,
		  // title:'',    分享标题(可选)
		  // desc:'',     默认分享理由(可选)
		  // summary:'',  分享摘要(可选)
		  // site:'',     分享来源 如：腾讯网(可选)
		  // pics:'',     分享图片的路径(可选)，不会自动抓取，多个图片用|分隔

		  tqq: {
		    title: '腾讯微博',
		    url: 'http://v.t.qq.com/share/share.php',
		    icon: 'tencent-weibo'
		  },
		  // url=xx&title=&appkey=801cf76d3cfc44ada52ec13114e84a96
		  // url
		  // title
		  // pic 多个图片用 | 分隔
		  // appkey
		  // NOTE: 不会自动抓取图片

		  wechat: {
		    title: '微信',
		    url: '[qrcode]',
		    icon: 'wechat'
		  },
		  // 生成一个二维码 供用户扫描
		  // 相关接口 https://github.com/zxlie/WeixinApi

		  renren: {
		    title: '人人网',
		    url: 'http://widget.renren.com/dialog/share',
		    icon: 'renren'
		  },
		  // http://widget.renren.com/dialog/share?resourceUrl=www&srcUrl=www&title=ww&description=xxx
		  // 550 * 400
		  // resourceUrl : '', // 分享的资源Url
		  // srcUrl : '',	     // 分享的资源来源Url,
		  //                   //   默认为header中的Referer,如果分享失败可以调整此值为resourceUrl试试
		  // pic : '',		 // 分享的主题图片，会自动抓取
		  // title : '',		 // 分享的标题
		  // description : ''	 // 分享的详细描述
		  // NOTE: 经过测试，直接使用 url 参数即可

		  douban: {
		    title: '豆瓣',
		    url: 'http://www.douban.com/recommend/',
		    icon: 'share-alt'
		  },
		  // http://www.douban.com/service/sharebutton
		  // 450 * 330
		  // http://www.douban.com/share/service?bm=1&image=&href=xxx&updated=&name=
		  // href 链接
		  // name 标题

		  /* void (function() {
		   var d = document, e = encodeURIComponent,
		   s1 = window.getSelection, s2 = d.getSelection,
		   s3 = d.selection, s = s1 ? s1()
		   : s2 ? s2() : s3 ? s3.createRange().text : '',
		   r = 'http://www.douban.com/recommend/?url=&title=&sel=&v=1&r=1'
		   })();
		   */

		  // tsohu: '',
		  // http://t.sohu.com/third/post.jsp?url=&title=&content=utf-8&pic=

		  // print: '',

		  mail: {
		    title: '邮件分享',
		    url: 'mailto:',
		    icon: 'envelope-o'
		  },

		  sms: {
		    title: '短信分享',
		    url: 'sms:',
		    icon: 'comment'
		  }
		};

		Share.prototype.render = function() {
		  var options = this.options;
		  var snsData = [];
		  var title = encodeURIComponent(doc.title);
		  var link = encodeURIComponent(doc.location);
		  var msgBody = '?body=' + title + link;

		  options.sns.forEach(function(item, i) {
		    if (Share.SNS[item]) {
		      var tmp = Share.SNS[item];
		      var shareUrl;

		      tmp.id = item;

		      if (item === 'mail') {
		        shareUrl = msgBody + '&subject=' + options.desc;
		      } else if (item === 'sms') {
		        shareUrl = msgBody;
		      } else {
		        shareUrl = '?url=' + link + '&title=' + title;
		      }

		      tmp.shareUrl = tmp.url + shareUrl;

		      snsData.push(tmp);
		    }
		  });

		  return UI.template(options.tpl, $.extend({}, options, {sns: snsData}));
		};

		Share.prototype.init = function() {
		  if (this.inited) {
		    return;
		  }

		  var me = this;
		  var shareItem = '[data-am-share-to]';

		  $doc.ready($.proxy(function() {
		    $('body').append(this.render()); // append share DOM to body
		    this.$element = $('#' + this.options.id);

		    this.$element.find('[data-am-share-close]').
		      on('click.share.amui', function() {
		        me.close();
		      });
		  }, this));

		  $doc.on('click.share.amui', shareItem, $.proxy(function(e) {
		    var $clicked = $(e.target);
		    var $target = $clicked.is(shareItem) && $clicked ||
		      $clicked.parent(shareItem);
		    var sns = $target.attr('data-am-share-to');

		    if (!(sns === 'mail' || sns === 'sms')) {
		      e.preventDefault();
		      this.shareTo(sns, this.setData(sns));
		    }

		    this.close();
		  }, this));

		  this.inited = true;
		};

		Share.prototype.open = function() {
		  !this.inited && this.init();
		  this.$element && this.$element.modal('open');
		  this.$element.trigger('open.share.amui');
		  this.active = true;
		};

		Share.prototype.close = function() {
		  this.$element && this.$element.modal('close');
		  this.$element.trigger('close.share.amui');
		  this.active = false;
		};

		Share.prototype.toggle = function() {
		  this.active ? this.close() : this.open();
		};

		Share.prototype.setData = function(sns) {
		  if (!sns) {
		    return;
		  }

		  var shareData = {
		    url: doc.location,
		    title: doc.title
		  };
		  var desc = this.options.desc;
		  var imgSrc = this.pics || [];
		  var qqReg = /^(qzone|qq|tqq)$/;

		  if (qqReg.test(sns) && !imgSrc.length) {
		    var allImages = doc.images;

		    for (var i = 0; i < allImages.length && i < 10; i++) {
		      !!allImages[i].src && imgSrc.push(encodeURIComponent(allImages[i].src));
		    }

		    this.pics = imgSrc; // 缓存图片
		  }

		  switch (sns) {
		    case 'qzone':
		      shareData.desc = desc;
		      shareData.site = this.options.via;
		      shareData.pics = imgSrc.join('|');
		      // TODO: 抓取图片多张
		      break;
		    case 'qq':
		      shareData.desc = desc;
		      shareData.site = this.options.via;
		      shareData.pics = imgSrc[0];
		      // 抓取一张图片
		      break;
		    case 'tqq':
		      // 抓取图片多张
		      shareData.pic = imgSrc.join('|');
		      break;
		  }

		  return shareData;
		};

		Share.prototype.shareTo = function(sns, data) {
		  var snsInfo = Share.SNS[sns];

		  if (!snsInfo) {
		    return;
		  }

		  if (sns === 'wechat' || sns === 'weixin') {
		    return this.wechatQr();
		  }

		  var query = [];
		  for (var key in data) {
		    if (data[key]) {
		      // 避免 encode 图片分隔符 |
		      query.push(key.toString() + '=' + ((key === 'pic' || key === 'pics') ?
		        data[key] : encodeURIComponent(data[key])));
		    }
		  }

		  window.open(snsInfo.url + '?' + query.join('&'));
		};

		Share.prototype.wechatQr = function() {
		  if (!this.$wechatQr) {
		    var qrId = UI.utils.generateGUID('am-share-wechat');
		    var $qr = $('<div class="am-modal am-modal-no-btn am-share-wechat-qr">' +
		    '<div class="am-modal-dialog"><div class="am-modal-hd">分享到微信 ' +
		    '<a href="" class="am-close am-close-spin" ' +
		    'data-am-modal-close>&times;</a> </div>' +
		    '<div class="am-modal-bd">' +
		    '<div class="am-share-wx-qr"></div>' +
		    '<div class="am-share-wechat-tip">' +
		    '打开微信，点击底部的<em>发现</em>，<br/> ' +
		    '使用<em>扫一扫</em>将网页分享至朋友圈</div></div></div></div>');

		    $qr.attr('id', qrId);

		    var qrNode = new QRCode({
		      render: 'canvas',
		      correctLevel: 0,
		      text: doc.location.href,
		      width: 180,
		      height: 180,
		      background: '#fff',
		      foreground: '#000'
		    });

		    $qr.find('.am-share-wx-qr').html(qrNode);

		    $qr.appendTo($('body'));

		    this.$wechatQr = $('#' + qrId);
		  }

		  this.$wechatQr.modal('open');
		};

		var share = new Share();

		$doc.on('click.share.amui.data-api', '[data-am-toggle="share"]', function(e) {
		  e.preventDefault();
		  share.toggle();
		});

		module.exports = UI.share = share;


	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		/**
		 * @ver 1.1.0
		 * @via https://github.com/aralejs/qrcode/blob/master/src/qrcode.js
		 * @license http://aralejs.org/
		 */

		var qrcodeAlgObjCache = [];

		/**
		 * 二维码构造函数，主要用于绘制
		 * @param  {Object} opt 传递参数
		 * @return {String} qrcode
		 * @constructor
		 */
		var QRCode = function(opt) {
		  if (typeof opt === 'string') { // 只编码ASCII字符串
		    opt = {
		      text: opt
		    };
		  }
		  // 设置默认参数
		  this.options = $.extend({}, {
		    text: "",
		    render: "",
		    width: 256,
		    height: 256,
		    correctLevel: 3,
		    background: "#ffffff",
		    foreground: "#000000"
		  }, opt);

		  // 使用QRCodeAlg创建二维码结构
		  var qrCodeAlg = null;
		  for (var i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {
		    if (qrcodeAlgObjCache[i].text == this.options.text && qrcodeAlgObjCache[i].text.correctLevel == this.options.correctLevel) {
		      qrCodeAlg = qrcodeAlgObjCache[i].obj;
		      break;
		    }
		  }
		  if (i == l) {
		    qrCodeAlg = new QRCodeAlg(this.options.text, this.options.correctLevel);
		    qrcodeAlgObjCache.push({
		      text: this.options.text,
		      correctLevel: this.options.correctLevel,
		      obj: qrCodeAlg
		    });
		  }

		  if (this.options.render) {
		    switch (this.options.render) {
		      case "canvas":
		        return this.createCanvas(qrCodeAlg);
		      case "table":
		        return this.createTable(qrCodeAlg);
		      case "svg":
		        return this.createSVG(qrCodeAlg);
		      default:
		        return this.createDefault(qrCodeAlg);
		    }
		  }
		  return this.createDefault(qrCodeAlg);
		};
		/**
		 * 使用Canvas来画二维码
		 * @return {}
		 */

		QRCode.prototype.createDefault = function(qrCodeAlg) {
		  var canvas = document.createElement('canvas');
		  if (canvas.getContext)
		    return this.createCanvas(qrCodeAlg);
		  if (!!document.createElementNS && !!document.createElementNS(SVG_NS, 'svg').createSVGRect)
		    return this.createSVG(qrCodeAlg);
		  return this.createTable(qrCodeAlg);
		};
		QRCode.prototype.createCanvas = function(qrCodeAlg) {
		  //创建canvas节点
		  var canvas = document.createElement('canvas');
		  canvas.width = this.options.width;
		  canvas.height = this.options.height;
		  var ctx = canvas.getContext('2d');

		  //计算每个点的长宽
		  var tileW = (this.options.width / qrCodeAlg.getModuleCount()).toPrecision(4);
		  var tileH = this.options.height / qrCodeAlg.getModuleCount().toPrecision(4);

		  //绘制
		  for (var row = 0; row < qrCodeAlg.getModuleCount(); row++) {
		    for (var col = 0; col < qrCodeAlg.getModuleCount(); col++) {
		      ctx.fillStyle = qrCodeAlg.modules[row][col] ? this.options.foreground : this.options.background;
		      var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
		      var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
		      ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), w, h);
		    }
		  }
		  //返回绘制的节点
		  return canvas;
		};
		/**
		 * 使用table来绘制二维码
		 * @return {}
		 */
		QRCode.prototype.createTable = function(qrCodeAlg) {
		  //创建table节点
		  var s = [];
		  s.push('<table style="border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color: ' +
		  this.options.background +
		  ';">');
		  // 计算每个节点的长宽；取整，防止点之间出现分离
		  var tileW = -1, tileH = -1, caculateW = -1, caculateH = -1;
		  tileW = caculateW = Math.floor(this.options.width / qrCodeAlg.getModuleCount());
		  tileH = caculateH = Math.floor(this.options.height / qrCodeAlg.getModuleCount());
		  if (caculateW <= 0) {
		    if (qrCodeAlg.getModuleCount() < 80) {
		      tileW = 2;
		    } else {
		      tileW = 1;
		    }
		  }
		  if (caculateH <= 0) {
		    if (qrCodeAlg.getModuleCount() < 80) {
		      tileH = 2;
		    } else {
		      tileH = 1;
		    }
		  }

		  // 绘制二维码
		  foreTd = '<td style="border:0px; margin:0px; padding:0px; width:' + tileW + 'px; background-color: ' + this.options.foreground + '"></td>',
		    backTd = '<td style="border:0px; margin:0px; padding:0px; width:' + tileW + 'px; background-color: ' + this.options.background + '"></td>',
		    l = qrCodeAlg.getModuleCount();

		  for (var row = 0; row < l; row++) {
		    s.push('<tr style="border:0px; margin:0px; padding:0px; height: ' + tileH + 'px">');
		    for (var col = 0; col < l; col++) {
		      s.push(qrCodeAlg.modules[row][col] ? foreTd : backTd);
		    }
		    s.push('</tr>');
		  }
		  s.push('</table>');
		  var span = document.createElement("span");
		  span.innerHTML = s.join('');

		  return span.firstChild;
		};

		/**
		 * 使用SVG开绘制二维码
		 * @return {}
		 */
		QRCode.prototype.createSVG = function(qrCodeAlg) {
		  var x, dx, y, dy,
		    moduleCount = qrCodeAlg.getModuleCount(),
		    scale = this.options.height / this.options.width,
		    svg = '<svg xmlns="http://www.w3.org/2000/svg" '
		      + 'width="' + this.options.width + 'px" height="' + this.options.height + 'px" '
		      + 'viewbox="0 0 ' + moduleCount * 10 + ' ' + moduleCount * 10 * scale + '">',
		    rectHead = '<path ',
		    foreRect = ' style="stroke-width:0.5;stroke:' + this.options.foreground
		      + ';fill:' + this.options.foreground + ';"></path>',
		    backRect = ' style="stroke-width:0.5;stroke:' + this.options.background
		      + ';fill:' + this.options.background + ';"></path>';

		  // draw in the svg
		  for (var row = 0; row < moduleCount; row++) {
		    for (var col = 0; col < moduleCount; col++) {
		      x = col * 10;
		      y = row * 10 * scale;
		      dx = (col + 1) * 10;
		      dy = (row + 1) * 10 * scale;

		      svg += rectHead + 'd="M ' + x + ',' + y
		      + ' L ' + dx + ',' + y
		      + ' L ' + dx + ',' + dy
		      + ' L ' + x + ',' + dy
		      + ' Z"';

		      svg += qrCodeAlg.modules[row][col] ? foreRect : backRect;
		    }
		  }

		  svg += '</svg>';

		  // return just built svg
		  return $(svg)[0];
		};

		/**
		 * 获取单个字符的utf8编码
		 * unicode BMP平面约65535个字符
		 * @param {num} code
		 * return {array}
		 */
		function unicodeFormat8(code) {
		  // 1 byte
		  if (code < 128) {
		    return [code];
		    // 2 bytes
		  } else if (code < 2048) {
		    c0 = 192 + (code >> 6);
		    c1 = 128 + (code & 63);
		    return [c0, c1];
		    // 3 bytes
		  } else {
		    c0 = 224 + (code >> 12);
		    c1 = 128 + (code >> 6 & 63);
		    c2 = 128 + (code & 63);
		    return [c0, c1, c2];
		  }
		}

		/**
		 * 获取字符串的utf8编码字节串
		 * @param {string} string
		 * @return {array}
		 */
		function getUTF8Bytes(string) {
		  var utf8codes = [];
		  for (var i = 0; i < string.length; i++) {
		    var code = string.charCodeAt(i);
		    var utf8 = unicodeFormat8(code);
		    for (var j = 0; j < utf8.length; j++) {
		      utf8codes.push(utf8[j]);
		    }
		  }
		  return utf8codes;
		}

		/**
		 * 二维码算法实现
		 * @param {string} data              要编码的信息字符串
		 * @param {num} errorCorrectLevel 纠错等级
		 */
		function QRCodeAlg(data, errorCorrectLevel) {
		  this.typeNumber = -1; // 版本
		  this.errorCorrectLevel = errorCorrectLevel;
		  this.modules = null;  // 二维矩阵，存放最终结果
		  this.moduleCount = 0; // 矩阵大小
		  this.dataCache = null; // 数据缓存
		  this.rsBlocks = null; // 版本数据信息
		  this.totalDataCount = -1; // 可使用的数据量
		  this.data = data;
		  this.utf8bytes = getUTF8Bytes(data);
		  this.make();
		}

		QRCodeAlg.prototype = {
		  constructor: QRCodeAlg,
		  /**
		   * 获取二维码矩阵大小
		   * @return {num} 矩阵大小
		   */
		  getModuleCount: function() {
		    return this.moduleCount;
		  },
		  /**
		   * 编码
		   */
		  make: function() {
		    this.getRightType();
		    this.dataCache = this.createData();
		    this.createQrcode();
		  },
		  /**
		   * 设置二位矩阵功能图形
		   * @param  {bool} test 表示是否在寻找最好掩膜阶段
		   * @param  {num} maskPattern 掩膜的版本
		   */
		  makeImpl: function(maskPattern) {

		    this.moduleCount = this.typeNumber * 4 + 17;
		    this.modules = new Array(this.moduleCount);

		    for (var row = 0; row < this.moduleCount; row++) {

		      this.modules[row] = new Array(this.moduleCount);

		    }
		    this.setupPositionProbePattern(0, 0);
		    this.setupPositionProbePattern(this.moduleCount - 7, 0);
		    this.setupPositionProbePattern(0, this.moduleCount - 7);
		    this.setupPositionAdjustPattern();
		    this.setupTimingPattern();
		    this.setupTypeInfo(true, maskPattern);

		    if (this.typeNumber >= 7) {
		      this.setupTypeNumber(true);
		    }
		    this.mapData(this.dataCache, maskPattern);
		  },
		  /**
		   * 设置二维码的位置探测图形
		   * @param  {num} row 探测图形的中心横坐标
		   * @param  {num} col 探测图形的中心纵坐标
		   */
		  setupPositionProbePattern: function(row, col) {

		    for (var r = -1; r <= 7; r++) {

		      if (row + r <= -1 || this.moduleCount <= row + r) continue;

		      for (var c = -1; c <= 7; c++) {

		        if (col + c <= -1 || this.moduleCount <= col + c) continue;

		        if ((0 <= r && r <= 6 && (c == 0 || c == 6)) || (0 <= c && c <= 6 && (r == 0 || r == 6)) || (2 <= r && r <= 4 && 2 <= c && c <= 4)) {
		          this.modules[row + r][col + c] = true;
		        } else {
		          this.modules[row + r][col + c] = false;
		        }
		      }
		    }
		  },
		  /**
		   * 创建二维码
		   * @return {[type]} [description]
		   */
		  createQrcode: function() {

		    var minLostPoint = 0;
		    var pattern = 0;
		    var bestModules = null;

		    for (var i = 0; i < 8; i++) {

		      this.makeImpl(i);

		      var lostPoint = QRUtil.getLostPoint(this);
		      if (i == 0 || minLostPoint > lostPoint) {
		        minLostPoint = lostPoint;
		        pattern = i;
		        bestModules = this.modules;
		      }
		    }
		    this.modules = bestModules;
		    this.setupTypeInfo(false, pattern);

		    if (this.typeNumber >= 7) {
		      this.setupTypeNumber(false);
		    }

		  },
		  /**
		   * 设置定位图形
		   * @return {[type]} [description]
		   */
		  setupTimingPattern: function() {

		    for (var r = 8; r < this.moduleCount - 8; r++) {
		      if (this.modules[r][6] != null) {
		        continue;
		      }
		      this.modules[r][6] = (r % 2 == 0);

		      if (this.modules[6][r] != null) {
		        continue;
		      }
		      this.modules[6][r] = (r % 2 == 0);
		    }
		  },
		  /**
		   * 设置矫正图形
		   * @return {[type]} [description]
		   */
		  setupPositionAdjustPattern: function() {

		    var pos = QRUtil.getPatternPosition(this.typeNumber);

		    for (var i = 0; i < pos.length; i++) {

		      for (var j = 0; j < pos.length; j++) {

		        var row = pos[i];
		        var col = pos[j];

		        if (this.modules[row][col] != null) {
		          continue;
		        }

		        for (var r = -2; r <= 2; r++) {

		          for (var c = -2; c <= 2; c++) {

		            if (r == -2 || r == 2 || c == -2 || c == 2 || (r == 0 && c == 0)) {
		              this.modules[row + r][col + c] = true;
		            } else {
		              this.modules[row + r][col + c] = false;
		            }
		          }
		        }
		      }
		    }
		  },
		  /**
		   * 设置版本信息（7以上版本才有）
		   * @param  {bool} test 是否处于判断最佳掩膜阶段
		   * @return {[type]}      [description]
		   */
		  setupTypeNumber: function(test) {

		    var bits = QRUtil.getBCHTypeNumber(this.typeNumber);

		    for (var i = 0; i < 18; i++) {
		      var mod = (!test && ((bits >> i) & 1) == 1);
		      this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
		      this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
		    }
		  },
		  /**
		   * 设置格式信息（纠错等级和掩膜版本）
		   * @param  {bool} test
		   * @param  {num} maskPattern 掩膜版本
		   * @return {}
		   */
		  setupTypeInfo: function(test, maskPattern) {

		    var data = (QRErrorCorrectLevel[this.errorCorrectLevel] << 3) | maskPattern;
		    var bits = QRUtil.getBCHTypeInfo(data);

		    // vertical
		    for (var i = 0; i < 15; i++) {

		      var mod = (!test && ((bits >> i) & 1) == 1);

		      if (i < 6) {
		        this.modules[i][8] = mod;
		      } else if (i < 8) {
		        this.modules[i + 1][8] = mod;
		      } else {
		        this.modules[this.moduleCount - 15 + i][8] = mod;
		      }

		      // horizontal
		      var mod = (!test && ((bits >> i) & 1) == 1);

		      if (i < 8) {
		        this.modules[8][this.moduleCount - i - 1] = mod;
		      } else if (i < 9) {
		        this.modules[8][15 - i - 1 + 1] = mod;
		      } else {
		        this.modules[8][15 - i - 1] = mod;
		      }
		    }

		    // fixed module
		    this.modules[this.moduleCount - 8][8] = (!test);

		  },
		  /**
		   * 数据编码
		   * @return {[type]} [description]
		   */
		  createData: function() {
		    var buffer = new QRBitBuffer();
		    var lengthBits = this.typeNumber > 9 ? 16 : 8;
		    buffer.put(4, 4); //添加模式
		    buffer.put(this.utf8bytes.length, lengthBits);
		    for (var i = 0, l = this.utf8bytes.length; i < l; i++) {
		      buffer.put(this.utf8bytes[i], 8);
		    }
		    if (buffer.length + 4 <= this.totalDataCount * 8) {
		      buffer.put(0, 4);
		    }

		    // padding
		    while (buffer.length % 8 != 0) {
		      buffer.putBit(false);
		    }

		    // padding
		    while (true) {

		      if (buffer.length >= this.totalDataCount * 8) {
		        break;
		      }
		      buffer.put(QRCodeAlg.PAD0, 8);

		      if (buffer.length >= this.totalDataCount * 8) {
		        break;
		      }
		      buffer.put(QRCodeAlg.PAD1, 8);
		    }
		    return this.createBytes(buffer);
		  },
		  /**
		   * 纠错码编码
		   * @param  {buffer} buffer 数据编码
		   * @return {[type]}
		   */
		  createBytes: function(buffer) {

		    var offset = 0;

		    var maxDcCount = 0;
		    var maxEcCount = 0;

		    var length = this.rsBlock.length / 3;

		    var rsBlocks = new Array();

		    for (var i = 0; i < length; i++) {

		      var count = this.rsBlock[i * 3 + 0];
		      var totalCount = this.rsBlock[i * 3 + 1];
		      var dataCount = this.rsBlock[i * 3 + 2];

		      for (var j = 0; j < count; j++) {
		        rsBlocks.push([dataCount, totalCount]);
		      }
		    }

		    var dcdata = new Array(rsBlocks.length);
		    var ecdata = new Array(rsBlocks.length);

		    for (var r = 0; r < rsBlocks.length; r++) {

		      var dcCount = rsBlocks[r][0];
		      var ecCount = rsBlocks[r][1] - dcCount;

		      maxDcCount = Math.max(maxDcCount, dcCount);
		      maxEcCount = Math.max(maxEcCount, ecCount);

		      dcdata[r] = new Array(dcCount);

		      for (var i = 0; i < dcdata[r].length; i++) {
		        dcdata[r][i] = 0xff & buffer.buffer[i + offset];
		      }
		      offset += dcCount;

		      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
		      var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);

		      var modPoly = rawPoly.mod(rsPoly);
		      ecdata[r] = new Array(rsPoly.getLength() - 1);
		      for (var i = 0; i < ecdata[r].length; i++) {
		        var modIndex = i + modPoly.getLength() - ecdata[r].length;
		        ecdata[r][i] = (modIndex >= 0) ? modPoly.get(modIndex) : 0;
		      }
		    }

		    var data = new Array(this.totalDataCount);
		    var index = 0;

		    for (var i = 0; i < maxDcCount; i++) {
		      for (var r = 0; r < rsBlocks.length; r++) {
		        if (i < dcdata[r].length) {
		          data[index++] = dcdata[r][i];
		        }
		      }
		    }

		    for (var i = 0; i < maxEcCount; i++) {
		      for (var r = 0; r < rsBlocks.length; r++) {
		        if (i < ecdata[r].length) {
		          data[index++] = ecdata[r][i];
		        }
		      }
		    }

		    return data;

		  },
		  /**
		   * 布置模块，构建最终信息
		   * @param  {} data
		   * @param  {} maskPattern
		   * @return {}
		   */
		  mapData: function(data, maskPattern) {

		    var inc = -1;
		    var row = this.moduleCount - 1;
		    var bitIndex = 7;
		    var byteIndex = 0;

		    for (var col = this.moduleCount - 1; col > 0; col -= 2) {

		      if (col == 6) col--;

		      while (true) {

		        for (var c = 0; c < 2; c++) {

		          if (this.modules[row][col - c] == null) {

		            var dark = false;

		            if (byteIndex < data.length) {
		              dark = (((data[byteIndex] >>> bitIndex) & 1) == 1);
		            }

		            var mask = QRUtil.getMask(maskPattern, row, col - c);

		            if (mask) {
		              dark = !dark;
		            }

		            this.modules[row][col - c] = dark;
		            bitIndex--;

		            if (bitIndex == -1) {
		              byteIndex++;
		              bitIndex = 7;
		            }
		          }
		        }

		        row += inc;

		        if (row < 0 || this.moduleCount <= row) {
		          row -= inc;
		          inc = -inc;
		          break;
		        }
		      }
		    }
		  }

		};
		/**
		 * 填充字段
		 */
		QRCodeAlg.PAD0 = 0xEC;
		QRCodeAlg.PAD1 = 0x11;


		//---------------------------------------------------------------------
		// 纠错等级对应的编码
		//---------------------------------------------------------------------

		var QRErrorCorrectLevel = [1, 0, 3, 2];

		//---------------------------------------------------------------------
		// 掩膜版本
		//---------------------------------------------------------------------

		var QRMaskPattern = {
		  PATTERN000: 0,
		  PATTERN001: 1,
		  PATTERN010: 2,
		  PATTERN011: 3,
		  PATTERN100: 4,
		  PATTERN101: 5,
		  PATTERN110: 6,
		  PATTERN111: 7
		};

		//---------------------------------------------------------------------
		// 工具类
		//---------------------------------------------------------------------

		var QRUtil = {

		  /*
		   每个版本矫正图形的位置
		   */
		  PATTERN_POSITION_TABLE: [
		    [],
		    [6, 18],
		    [6, 22],
		    [6, 26],
		    [6, 30],
		    [6, 34],
		    [6, 22, 38],
		    [6, 24, 42],
		    [6, 26, 46],
		    [6, 28, 50],
		    [6, 30, 54],
		    [6, 32, 58],
		    [6, 34, 62],
		    [6, 26, 46, 66],
		    [6, 26, 48, 70],
		    [6, 26, 50, 74],
		    [6, 30, 54, 78],
		    [6, 30, 56, 82],
		    [6, 30, 58, 86],
		    [6, 34, 62, 90],
		    [6, 28, 50, 72, 94],
		    [6, 26, 50, 74, 98],
		    [6, 30, 54, 78, 102],
		    [6, 28, 54, 80, 106],
		    [6, 32, 58, 84, 110],
		    [6, 30, 58, 86, 114],
		    [6, 34, 62, 90, 118],
		    [6, 26, 50, 74, 98, 122],
		    [6, 30, 54, 78, 102, 126],
		    [6, 26, 52, 78, 104, 130],
		    [6, 30, 56, 82, 108, 134],
		    [6, 34, 60, 86, 112, 138],
		    [6, 30, 58, 86, 114, 142],
		    [6, 34, 62, 90, 118, 146],
		    [6, 30, 54, 78, 102, 126, 150],
		    [6, 24, 50, 76, 102, 128, 154],
		    [6, 28, 54, 80, 106, 132, 158],
		    [6, 32, 58, 84, 110, 136, 162],
		    [6, 26, 54, 82, 110, 138, 166],
		    [6, 30, 58, 86, 114, 142, 170]
		  ],

		  G15: (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
		  G18: (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
		  G15_MASK: (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),

		  /*
		   BCH编码格式信息
		   */
		  getBCHTypeInfo: function(data) {
		    var d = data << 10;
		    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
		      d ^= (QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15)));
		    }
		    return ((data << 10) | d) ^ QRUtil.G15_MASK;
		  },
		  /*
		   BCH编码版本信息
		   */
		  getBCHTypeNumber: function(data) {
		    var d = data << 12;
		    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
		      d ^= (QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18)));
		    }
		    return (data << 12) | d;
		  },
		  /*
		   获取BCH位信息
		   */
		  getBCHDigit: function(data) {

		    var digit = 0;

		    while (data != 0) {
		      digit++;
		      data >>>= 1;
		    }

		    return digit;
		  },
		  /*
		   获取版本对应的矫正图形位置
		   */
		  getPatternPosition: function(typeNumber) {
		    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
		  },
		  /*
		   掩膜算法
		   */
		  getMask: function(maskPattern, i, j) {

		    switch (maskPattern) {

		      case QRMaskPattern.PATTERN000:
		        return (i + j) % 2 == 0;
		      case QRMaskPattern.PATTERN001:
		        return i % 2 == 0;
		      case QRMaskPattern.PATTERN010:
		        return j % 3 == 0;
		      case QRMaskPattern.PATTERN011:
		        return (i + j) % 3 == 0;
		      case QRMaskPattern.PATTERN100:
		        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
		      case QRMaskPattern.PATTERN101:
		        return (i * j) % 2 + (i * j) % 3 == 0;
		      case QRMaskPattern.PATTERN110:
		        return ((i * j) % 2 + (i * j) % 3) % 2 == 0;
		      case QRMaskPattern.PATTERN111:
		        return ((i * j) % 3 + (i + j) % 2) % 2 == 0;

		      default:
		        throw new Error("bad maskPattern:" + maskPattern);
		    }
		  },
		  /*
		   获取RS的纠错多项式
		   */
		  getErrorCorrectPolynomial: function(errorCorrectLength) {

		    var a = new QRPolynomial([1], 0);

		    for (var i = 0; i < errorCorrectLength; i++) {
		      a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
		    }

		    return a;
		  },
		  /*
		   获取评价
		   */
		  getLostPoint: function(qrCode) {

		    var moduleCount = qrCode.getModuleCount(),
		      lostPoint = 0,
		      darkCount = 0;

		    for (var row = 0; row < moduleCount; row++) {

		      var sameCount = 0;
		      var head = qrCode.modules[row][0];

		      for (var col = 0; col < moduleCount; col++) {

		        var current = qrCode.modules[row][col];

		        //level 3 评价
		        if (col < moduleCount - 6) {
		          if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {
		            if (col < moduleCount - 10) {
		              if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {
		                lostPoint += 40;
		              }
		            } else if (col > 3) {
		              if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {
		                lostPoint += 40;
		              }
		            }

		          }
		        }

		        //level 2 评价
		        if ((row < moduleCount - 1) && (col < moduleCount - 1)) {
		          var count = 0;
		          if (current) count++;
		          if (qrCode.modules[row + 1][col]) count++;
		          if (qrCode.modules[row][col + 1]) count++;
		          if (qrCode.modules[row + 1][col + 1]) count++;
		          if (count == 0 || count == 4) {
		            lostPoint += 3;
		          }
		        }

		        //level 1 评价
		        if (head ^ current) {
		          sameCount++;
		        } else {
		          head = current;
		          if (sameCount >= 5) {
		            lostPoint += (3 + sameCount - 5);
		          }
		          sameCount = 1;
		        }

		        //level 4 评价
		        if (current) {
		          darkCount++;
		        }

		      }
		    }

		    for (var col = 0; col < moduleCount; col++) {

		      var sameCount = 0;
		      var head = qrCode.modules[0][col];

		      for (var row = 0; row < moduleCount; row++) {

		        var current = qrCode.modules[row][col];

		        //level 3 评价
		        if (row < moduleCount - 6) {
		          if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {
		            if (row < moduleCount - 10) {
		              if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {
		                lostPoint += 40;
		              }
		            } else if (row > 3) {
		              if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {
		                lostPoint += 40;
		              }
		            }
		          }
		        }

		        //level 1 评价
		        if (head ^ current) {
		          sameCount++;
		        } else {
		          head = current;
		          if (sameCount >= 5) {
		            lostPoint += (3 + sameCount - 5);
		          }
		          sameCount = 1;
		        }

		      }
		    }

		    // LEVEL4

		    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
		    lostPoint += ratio * 10;

		    return lostPoint;
		  }

		};


		//---------------------------------------------------------------------
		// QRMath使用的数学工具
		//---------------------------------------------------------------------

		var QRMath = {
		  /*
		   将n转化为a^m
		   */
		  glog: function(n) {

		    if (n < 1) {
		      throw new Error("glog(" + n + ")");
		    }

		    return QRMath.LOG_TABLE[n];
		  },
		  /*
		   将a^m转化为n
		   */
		  gexp: function(n) {

		    while (n < 0) {
		      n += 255;
		    }

		    while (n >= 256) {
		      n -= 255;
		    }

		    return QRMath.EXP_TABLE[n];
		  },

		  EXP_TABLE: new Array(256),

		  LOG_TABLE: new Array(256)

		};

		for (var i = 0; i < 8; i++) {
		  QRMath.EXP_TABLE[i] = 1 << i;
		}
		for (var i = 8; i < 256; i++) {
		  QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
		}
		for (var i = 0; i < 255; i++) {
		  QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
		}

		//---------------------------------------------------------------------
		// QRPolynomial 多项式
		//---------------------------------------------------------------------
		/**
		 * 多项式类
		 * @param {Array} num   系数
		 * @param {num} shift a^shift
		 */
		function QRPolynomial(num, shift) {

		  if (num.length == undefined) {
		    throw new Error(num.length + "/" + shift);
		  }

		  var offset = 0;

		  while (offset < num.length && num[offset] == 0) {
		    offset++;
		  }

		  this.num = new Array(num.length - offset + shift);
		  for (var i = 0; i < num.length - offset; i++) {
		    this.num[i] = num[i + offset];
		  }
		}

		QRPolynomial.prototype = {

		  get: function(index) {
		    return this.num[index];
		  },

		  getLength: function() {
		    return this.num.length;
		  },
		  /**
		   * 多项式乘法
		   * @param  {QRPolynomial} e 被乘多项式
		   * @return {[type]}   [description]
		   */
		  multiply: function(e) {

		    var num = new Array(this.getLength() + e.getLength() - 1);

		    for (var i = 0; i < this.getLength(); i++) {
		      for (var j = 0; j < e.getLength(); j++) {
		        num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
		      }
		    }

		    return new QRPolynomial(num, 0);
		  },
		  /**
		   * 多项式模运算
		   * @param  {QRPolynomial} e 模多项式
		   * @return {}
		   */
		  mod: function(e) {
		    var tl = this.getLength(),
		      el = e.getLength();
		    if (tl - el < 0) {
		      return this;
		    }
		    var num = new Array(tl);
		    for (var i = 0; i < tl; i++) {
		      num[i] = this.get(i);
		    }
		    while (num.length >= el) {
		      var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));

		      for (var i = 0; i < e.getLength(); i++) {
		        num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
		      }
		      while (num[0] == 0) {
		        num.shift();
		      }
		    }
		    return new QRPolynomial(num, 0);
		  }
		};

		//---------------------------------------------------------------------
		// RS_BLOCK_TABLE
		//---------------------------------------------------------------------
		/*
		 二维码各个版本信息[块数, 每块中的数据块数, 每块中的信息块数]
		 */
		var RS_BLOCK_TABLE = [

		  // L
		  // M
		  // Q
		  // H

		  // 1
		  [1, 26, 19],
		  [1, 26, 16],
		  [1, 26, 13],
		  [1, 26, 9],

		  // 2
		  [1, 44, 34],
		  [1, 44, 28],
		  [1, 44, 22],
		  [1, 44, 16],

		  // 3
		  [1, 70, 55],
		  [1, 70, 44],
		  [2, 35, 17],
		  [2, 35, 13],

		  // 4
		  [1, 100, 80],
		  [2, 50, 32],
		  [2, 50, 24],
		  [4, 25, 9],

		  // 5
		  [1, 134, 108],
		  [2, 67, 43],
		  [2, 33, 15, 2, 34, 16],
		  [2, 33, 11, 2, 34, 12],

		  // 6
		  [2, 86, 68],
		  [4, 43, 27],
		  [4, 43, 19],
		  [4, 43, 15],

		  // 7
		  [2, 98, 78],
		  [4, 49, 31],
		  [2, 32, 14, 4, 33, 15],
		  [4, 39, 13, 1, 40, 14],

		  // 8
		  [2, 121, 97],
		  [2, 60, 38, 2, 61, 39],
		  [4, 40, 18, 2, 41, 19],
		  [4, 40, 14, 2, 41, 15],

		  // 9
		  [2, 146, 116],
		  [3, 58, 36, 2, 59, 37],
		  [4, 36, 16, 4, 37, 17],
		  [4, 36, 12, 4, 37, 13],

		  // 10
		  [2, 86, 68, 2, 87, 69],
		  [4, 69, 43, 1, 70, 44],
		  [6, 43, 19, 2, 44, 20],
		  [6, 43, 15, 2, 44, 16],

		  // 11
		  [4, 101, 81],
		  [1, 80, 50, 4, 81, 51],
		  [4, 50, 22, 4, 51, 23],
		  [3, 36, 12, 8, 37, 13],

		  // 12
		  [2, 116, 92, 2, 117, 93],
		  [6, 58, 36, 2, 59, 37],
		  [4, 46, 20, 6, 47, 21],
		  [7, 42, 14, 4, 43, 15],

		  // 13
		  [4, 133, 107],
		  [8, 59, 37, 1, 60, 38],
		  [8, 44, 20, 4, 45, 21],
		  [12, 33, 11, 4, 34, 12],

		  // 14
		  [3, 145, 115, 1, 146, 116],
		  [4, 64, 40, 5, 65, 41],
		  [11, 36, 16, 5, 37, 17],
		  [11, 36, 12, 5, 37, 13],

		  // 15
		  [5, 109, 87, 1, 110, 88],
		  [5, 65, 41, 5, 66, 42],
		  [5, 54, 24, 7, 55, 25],
		  [11, 36, 12],

		  // 16
		  [5, 122, 98, 1, 123, 99],
		  [7, 73, 45, 3, 74, 46],
		  [15, 43, 19, 2, 44, 20],
		  [3, 45, 15, 13, 46, 16],

		  // 17
		  [1, 135, 107, 5, 136, 108],
		  [10, 74, 46, 1, 75, 47],
		  [1, 50, 22, 15, 51, 23],
		  [2, 42, 14, 17, 43, 15],

		  // 18
		  [5, 150, 120, 1, 151, 121],
		  [9, 69, 43, 4, 70, 44],
		  [17, 50, 22, 1, 51, 23],
		  [2, 42, 14, 19, 43, 15],

		  // 19
		  [3, 141, 113, 4, 142, 114],
		  [3, 70, 44, 11, 71, 45],
		  [17, 47, 21, 4, 48, 22],
		  [9, 39, 13, 16, 40, 14],

		  // 20
		  [3, 135, 107, 5, 136, 108],
		  [3, 67, 41, 13, 68, 42],
		  [15, 54, 24, 5, 55, 25],
		  [15, 43, 15, 10, 44, 16],

		  // 21
		  [4, 144, 116, 4, 145, 117],
		  [17, 68, 42],
		  [17, 50, 22, 6, 51, 23],
		  [19, 46, 16, 6, 47, 17],

		  // 22
		  [2, 139, 111, 7, 140, 112],
		  [17, 74, 46],
		  [7, 54, 24, 16, 55, 25],
		  [34, 37, 13],

		  // 23
		  [4, 151, 121, 5, 152, 122],
		  [4, 75, 47, 14, 76, 48],
		  [11, 54, 24, 14, 55, 25],
		  [16, 45, 15, 14, 46, 16],

		  // 24
		  [6, 147, 117, 4, 148, 118],
		  [6, 73, 45, 14, 74, 46],
		  [11, 54, 24, 16, 55, 25],
		  [30, 46, 16, 2, 47, 17],

		  // 25
		  [8, 132, 106, 4, 133, 107],
		  [8, 75, 47, 13, 76, 48],
		  [7, 54, 24, 22, 55, 25],
		  [22, 45, 15, 13, 46, 16],

		  // 26
		  [10, 142, 114, 2, 143, 115],
		  [19, 74, 46, 4, 75, 47],
		  [28, 50, 22, 6, 51, 23],
		  [33, 46, 16, 4, 47, 17],

		  // 27
		  [8, 152, 122, 4, 153, 123],
		  [22, 73, 45, 3, 74, 46],
		  [8, 53, 23, 26, 54, 24],
		  [12, 45, 15, 28, 46, 16],

		  // 28
		  [3, 147, 117, 10, 148, 118],
		  [3, 73, 45, 23, 74, 46],
		  [4, 54, 24, 31, 55, 25],
		  [11, 45, 15, 31, 46, 16],

		  // 29
		  [7, 146, 116, 7, 147, 117],
		  [21, 73, 45, 7, 74, 46],
		  [1, 53, 23, 37, 54, 24],
		  [19, 45, 15, 26, 46, 16],

		  // 30
		  [5, 145, 115, 10, 146, 116],
		  [19, 75, 47, 10, 76, 48],
		  [15, 54, 24, 25, 55, 25],
		  [23, 45, 15, 25, 46, 16],

		  // 31
		  [13, 145, 115, 3, 146, 116],
		  [2, 74, 46, 29, 75, 47],
		  [42, 54, 24, 1, 55, 25],
		  [23, 45, 15, 28, 46, 16],

		  // 32
		  [17, 145, 115],
		  [10, 74, 46, 23, 75, 47],
		  [10, 54, 24, 35, 55, 25],
		  [19, 45, 15, 35, 46, 16],

		  // 33
		  [17, 145, 115, 1, 146, 116],
		  [14, 74, 46, 21, 75, 47],
		  [29, 54, 24, 19, 55, 25],
		  [11, 45, 15, 46, 46, 16],

		  // 34
		  [13, 145, 115, 6, 146, 116],
		  [14, 74, 46, 23, 75, 47],
		  [44, 54, 24, 7, 55, 25],
		  [59, 46, 16, 1, 47, 17],

		  // 35
		  [12, 151, 121, 7, 152, 122],
		  [12, 75, 47, 26, 76, 48],
		  [39, 54, 24, 14, 55, 25],
		  [22, 45, 15, 41, 46, 16],

		  // 36
		  [6, 151, 121, 14, 152, 122],
		  [6, 75, 47, 34, 76, 48],
		  [46, 54, 24, 10, 55, 25],
		  [2, 45, 15, 64, 46, 16],

		  // 37
		  [17, 152, 122, 4, 153, 123],
		  [29, 74, 46, 14, 75, 47],
		  [49, 54, 24, 10, 55, 25],
		  [24, 45, 15, 46, 46, 16],

		  // 38
		  [4, 152, 122, 18, 153, 123],
		  [13, 74, 46, 32, 75, 47],
		  [48, 54, 24, 14, 55, 25],
		  [42, 45, 15, 32, 46, 16],

		  // 39
		  [20, 147, 117, 4, 148, 118],
		  [40, 75, 47, 7, 76, 48],
		  [43, 54, 24, 22, 55, 25],
		  [10, 45, 15, 67, 46, 16],

		  // 40
		  [19, 148, 118, 6, 149, 119],
		  [18, 75, 47, 31, 76, 48],
		  [34, 54, 24, 34, 55, 25],
		  [20, 45, 15, 61, 46, 16]
		];

		/**
		 * 根据数据获取对应版本
		 * @return {[type]} [description]
		 */
		QRCodeAlg.prototype.getRightType = function() {
		  for (var typeNumber = 1; typeNumber < 41; typeNumber++) {
		    var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];
		    if (rsBlock == undefined) {
		      throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + this.errorCorrectLevel);
		    }
		    var length = rsBlock.length / 3;
		    var totalDataCount = 0;
		    for (var i = 0; i < length; i++) {
		      var count = rsBlock[i * 3 + 0];
		      var dataCount = rsBlock[i * 3 + 2];
		      totalDataCount += dataCount * count;
		    }

		    var lengthBytes = typeNumber > 9 ? 2 : 1;
		    if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {
		      this.typeNumber = typeNumber;
		      this.rsBlock = rsBlock;
		      this.totalDataCount = totalDataCount;
		      break;
		    }
		  }
		};

		//---------------------------------------------------------------------
		// QRBitBuffer
		//---------------------------------------------------------------------

		function QRBitBuffer() {
		  this.buffer = new Array();
		  this.length = 0;
		}

		QRBitBuffer.prototype = {

		  get: function(index) {
		    var bufIndex = Math.floor(index / 8);
		    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1);
		  },

		  put: function(num, length) {
		    for (var i = 0; i < length; i++) {
		      this.putBit(((num >>> (length - i - 1)) & 1));
		    }
		  },

		  putBit: function(bit) {

		    var bufIndex = Math.floor(this.length / 8);
		    if (this.buffer.length <= bufIndex) {
		      this.buffer.push(0);
		    }

		    if (bit) {
		      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8));
		    }

		    this.length++;
		  }
		};
		/**
		 * 获取单个字符的utf8编码
		 * unicode BMP平面约65535个字符
		 * @param {num} code
		 * return {array}
		 */
		function unicodeFormat8(code) {
		  // 1 byte
		  if (code < 128) {
		    return [code];
		    // 2 bytes
		  } else if (code < 2048) {
		    c0 = 192 + (code >> 6);
		    c1 = 128 + (code & 63);
		    return [c0, c1];
		    // 3 bytes
		  } else {
		    c0 = 224 + (code >> 12);
		    c1 = 128 + (code >> 6 & 63);
		    c2 = 128 + (code & 63);
		    return [c0, c1, c2];
		  }
		}

		/**
		 * 获取字符串的utf8编码字节串
		 * @param {string} string
		 * @return {array}
		 */
		function getUTF8Bytes(string) {
		  var utf8codes = [];
		  for (var i = 0; i < string.length; i++) {
		    var code = string.charCodeAt(i);
		    var utf8 = unicodeFormat8(code);
		    for (var j = 0; j < utf8.length; j++) {
		      utf8codes.push(utf8[j]);
		    }
		  }
		  return utf8codes;
		}

		/**
		 * 二维码算法实现
		 * @param {string} data              要编码的信息字符串
		 * @param {num} errorCorrectLevel 纠错等级
		 */
		function QRCodeAlg(data, errorCorrectLevel) {
		  this.typeNumber = -1; //版本
		  this.errorCorrectLevel = errorCorrectLevel;
		  this.modules = null;  //二维矩阵，存放最终结果
		  this.moduleCount = 0; //矩阵大小
		  this.dataCache = null; //数据缓存
		  this.rsBlocks = null; //版本数据信息
		  this.totalDataCount = -1; //可使用的数据量
		  this.data = data;
		  this.utf8bytes = getUTF8Bytes(data);
		  this.make();
		}

		QRCodeAlg.prototype = {
		  constructor: QRCodeAlg,
		  /**
		   * 获取二维码矩阵大小
		   * @return {num} 矩阵大小
		   */
		  getModuleCount: function() {
		    return this.moduleCount;
		  },
		  /**
		   * 编码
		   */
		  make: function() {
		    this.getRightType();
		    this.dataCache = this.createData();
		    this.createQrcode();
		  },
		  /**
		   * 设置二位矩阵功能图形
		   * @param  {bool} test 表示是否在寻找最好掩膜阶段
		   * @param  {num} maskPattern 掩膜的版本
		   */
		  makeImpl: function(maskPattern) {

		    this.moduleCount = this.typeNumber * 4 + 17;
		    this.modules = new Array(this.moduleCount);

		    for (var row = 0; row < this.moduleCount; row++) {

		      this.modules[row] = new Array(this.moduleCount);

		    }
		    this.setupPositionProbePattern(0, 0);
		    this.setupPositionProbePattern(this.moduleCount - 7, 0);
		    this.setupPositionProbePattern(0, this.moduleCount - 7);
		    this.setupPositionAdjustPattern();
		    this.setupTimingPattern();
		    this.setupTypeInfo(true, maskPattern);

		    if (this.typeNumber >= 7) {
		      this.setupTypeNumber(true);
		    }
		    this.mapData(this.dataCache, maskPattern);
		  },
		  /**
		   * 设置二维码的位置探测图形
		   * @param  {num} row 探测图形的中心横坐标
		   * @param  {num} col 探测图形的中心纵坐标
		   */
		  setupPositionProbePattern: function(row, col) {

		    for (var r = -1; r <= 7; r++) {

		      if (row + r <= -1 || this.moduleCount <= row + r) continue;

		      for (var c = -1; c <= 7; c++) {

		        if (col + c <= -1 || this.moduleCount <= col + c) continue;

		        if ((0 <= r && r <= 6 && (c == 0 || c == 6)) || (0 <= c && c <= 6 && (r == 0 || r == 6)) || (2 <= r && r <= 4 && 2 <= c && c <= 4)) {
		          this.modules[row + r][col + c] = true;
		        } else {
		          this.modules[row + r][col + c] = false;
		        }
		      }
		    }
		  },
		  /**
		   * 创建二维码
		   * @return {[type]} [description]
		   */
		  createQrcode: function() {

		    var minLostPoint = 0;
		    var pattern = 0;
		    var bestModules = null;

		    for (var i = 0; i < 8; i++) {

		      this.makeImpl(i);

		      var lostPoint = QRUtil.getLostPoint(this);
		      if (i == 0 || minLostPoint > lostPoint) {
		        minLostPoint = lostPoint;
		        pattern = i;
		        bestModules = this.modules;
		      }
		    }
		    this.modules = bestModules;
		    this.setupTypeInfo(false, pattern);

		    if (this.typeNumber >= 7) {
		      this.setupTypeNumber(false);
		    }

		  },
		  /**
		   * 设置定位图形
		   * @return {[type]} [description]
		   */
		  setupTimingPattern: function() {

		    for (var r = 8; r < this.moduleCount - 8; r++) {
		      if (this.modules[r][6] != null) {
		        continue;
		      }
		      this.modules[r][6] = (r % 2 == 0);

		      if (this.modules[6][r] != null) {
		        continue;
		      }
		      this.modules[6][r] = (r % 2 == 0);
		    }
		  },
		  /**
		   * 设置矫正图形
		   * @return {[type]} [description]
		   */
		  setupPositionAdjustPattern: function() {

		    var pos = QRUtil.getPatternPosition(this.typeNumber);

		    for (var i = 0; i < pos.length; i++) {

		      for (var j = 0; j < pos.length; j++) {

		        var row = pos[i];
		        var col = pos[j];

		        if (this.modules[row][col] != null) {
		          continue;
		        }

		        for (var r = -2; r <= 2; r++) {

		          for (var c = -2; c <= 2; c++) {

		            if (r == -2 || r == 2 || c == -2 || c == 2 || (r == 0 && c == 0)) {
		              this.modules[row + r][col + c] = true;
		            } else {
		              this.modules[row + r][col + c] = false;
		            }
		          }
		        }
		      }
		    }
		  },
		  /**
		   * 设置版本信息（7以上版本才有）
		   * @param  {bool} test 是否处于判断最佳掩膜阶段
		   * @return {[type]}      [description]
		   */
		  setupTypeNumber: function(test) {

		    var bits = QRUtil.getBCHTypeNumber(this.typeNumber);

		    for (var i = 0; i < 18; i++) {
		      var mod = (!test && ((bits >> i) & 1) == 1);
		      this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
		      this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
		    }
		  },
		  /**
		   * 设置格式信息（纠错等级和掩膜版本）
		   * @param  {bool} test
		   * @param  {num} maskPattern 掩膜版本
		   * @return {}
		   */
		  setupTypeInfo: function(test, maskPattern) {

		    var data = (QRErrorCorrectLevel[this.errorCorrectLevel] << 3) | maskPattern;
		    var bits = QRUtil.getBCHTypeInfo(data);

		    // vertical
		    for (var i = 0; i < 15; i++) {

		      var mod = (!test && ((bits >> i) & 1) == 1);

		      if (i < 6) {
		        this.modules[i][8] = mod;
		      } else if (i < 8) {
		        this.modules[i + 1][8] = mod;
		      } else {
		        this.modules[this.moduleCount - 15 + i][8] = mod;
		      }

		      // horizontal
		      var mod = (!test && ((bits >> i) & 1) == 1);

		      if (i < 8) {
		        this.modules[8][this.moduleCount - i - 1] = mod;
		      } else if (i < 9) {
		        this.modules[8][15 - i - 1 + 1] = mod;
		      } else {
		        this.modules[8][15 - i - 1] = mod;
		      }
		    }

		    // fixed module
		    this.modules[this.moduleCount - 8][8] = (!test);

		  },
		  /**
		   * 数据编码
		   * @return {[type]} [description]
		   */
		  createData: function() {
		    var buffer = new QRBitBuffer();
		    var lengthBits = this.typeNumber > 9 ? 16 : 8;
		    buffer.put(4, 4); //添加模式
		    buffer.put(this.utf8bytes.length, lengthBits);
		    for (var i = 0, l = this.utf8bytes.length; i < l; i++) {
		      buffer.put(this.utf8bytes[i], 8);
		    }
		    if (buffer.length + 4 <= this.totalDataCount * 8) {
		      buffer.put(0, 4);
		    }

		    // padding
		    while (buffer.length % 8 != 0) {
		      buffer.putBit(false);
		    }

		    // padding
		    while (true) {

		      if (buffer.length >= this.totalDataCount * 8) {
		        break;
		      }
		      buffer.put(QRCodeAlg.PAD0, 8);

		      if (buffer.length >= this.totalDataCount * 8) {
		        break;
		      }
		      buffer.put(QRCodeAlg.PAD1, 8);
		    }
		    return this.createBytes(buffer);
		  },
		  /**
		   * 纠错码编码
		   * @param  {buffer} buffer 数据编码
		   * @return {[type]}
		   */
		  createBytes: function(buffer) {

		    var offset = 0;

		    var maxDcCount = 0;
		    var maxEcCount = 0;

		    var length = this.rsBlock.length / 3;

		    var rsBlocks = new Array();

		    for (var i = 0; i < length; i++) {

		      var count = this.rsBlock[i * 3 + 0];
		      var totalCount = this.rsBlock[i * 3 + 1];
		      var dataCount = this.rsBlock[i * 3 + 2];

		      for (var j = 0; j < count; j++) {
		        rsBlocks.push([dataCount, totalCount]);
		      }
		    }

		    var dcdata = new Array(rsBlocks.length);
		    var ecdata = new Array(rsBlocks.length);

		    for (var r = 0; r < rsBlocks.length; r++) {

		      var dcCount = rsBlocks[r][0];
		      var ecCount = rsBlocks[r][1] - dcCount;

		      maxDcCount = Math.max(maxDcCount, dcCount);
		      maxEcCount = Math.max(maxEcCount, ecCount);

		      dcdata[r] = new Array(dcCount);

		      for (var i = 0; i < dcdata[r].length; i++) {
		        dcdata[r][i] = 0xff & buffer.buffer[i + offset];
		      }
		      offset += dcCount;

		      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
		      var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);

		      var modPoly = rawPoly.mod(rsPoly);
		      ecdata[r] = new Array(rsPoly.getLength() - 1);
		      for (var i = 0; i < ecdata[r].length; i++) {
		        var modIndex = i + modPoly.getLength() - ecdata[r].length;
		        ecdata[r][i] = (modIndex >= 0) ? modPoly.get(modIndex) : 0;
		      }
		    }

		    var data = new Array(this.totalDataCount);
		    var index = 0;

		    for (var i = 0; i < maxDcCount; i++) {
		      for (var r = 0; r < rsBlocks.length; r++) {
		        if (i < dcdata[r].length) {
		          data[index++] = dcdata[r][i];
		        }
		      }
		    }

		    for (var i = 0; i < maxEcCount; i++) {
		      for (var r = 0; r < rsBlocks.length; r++) {
		        if (i < ecdata[r].length) {
		          data[index++] = ecdata[r][i];
		        }
		      }
		    }

		    return data;

		  },
		  /**
		   * 布置模块，构建最终信息
		   * @param  {} data
		   * @param  {} maskPattern
		   * @return {}
		   */
		  mapData: function(data, maskPattern) {

		    var inc = -1;
		    var row = this.moduleCount - 1;
		    var bitIndex = 7;
		    var byteIndex = 0;

		    for (var col = this.moduleCount - 1; col > 0; col -= 2) {

		      if (col == 6) col--;

		      while (true) {

		        for (var c = 0; c < 2; c++) {

		          if (this.modules[row][col - c] == null) {

		            var dark = false;

		            if (byteIndex < data.length) {
		              dark = (((data[byteIndex] >>> bitIndex) & 1) == 1);
		            }

		            var mask = QRUtil.getMask(maskPattern, row, col - c);

		            if (mask) {
		              dark = !dark;
		            }

		            this.modules[row][col - c] = dark;
		            bitIndex--;

		            if (bitIndex == -1) {
		              byteIndex++;
		              bitIndex = 7;
		            }
		          }
		        }

		        row += inc;

		        if (row < 0 || this.moduleCount <= row) {
		          row -= inc;
		          inc = -inc;
		          break;
		        }
		      }
		    }
		  }

		};
		/**
		 * 填充字段
		 */
		QRCodeAlg.PAD0 = 0xEC;
		QRCodeAlg.PAD1 = 0x11;


		//---------------------------------------------------------------------
		// 纠错等级对应的编码
		//---------------------------------------------------------------------

		var QRErrorCorrectLevel = [1, 0, 3, 2];

		//---------------------------------------------------------------------
		// 掩膜版本
		//---------------------------------------------------------------------

		var QRMaskPattern = {
		  PATTERN000: 0,
		  PATTERN001: 1,
		  PATTERN010: 2,
		  PATTERN011: 3,
		  PATTERN100: 4,
		  PATTERN101: 5,
		  PATTERN110: 6,
		  PATTERN111: 7
		};

		//---------------------------------------------------------------------
		// 工具类
		//---------------------------------------------------------------------

		var QRUtil = {

		  /*
		   每个版本矫正图形的位置
		   */
		  PATTERN_POSITION_TABLE: [
		    [],
		    [6, 18],
		    [6, 22],
		    [6, 26],
		    [6, 30],
		    [6, 34],
		    [6, 22, 38],
		    [6, 24, 42],
		    [6, 26, 46],
		    [6, 28, 50],
		    [6, 30, 54],
		    [6, 32, 58],
		    [6, 34, 62],
		    [6, 26, 46, 66],
		    [6, 26, 48, 70],
		    [6, 26, 50, 74],
		    [6, 30, 54, 78],
		    [6, 30, 56, 82],
		    [6, 30, 58, 86],
		    [6, 34, 62, 90],
		    [6, 28, 50, 72, 94],
		    [6, 26, 50, 74, 98],
		    [6, 30, 54, 78, 102],
		    [6, 28, 54, 80, 106],
		    [6, 32, 58, 84, 110],
		    [6, 30, 58, 86, 114],
		    [6, 34, 62, 90, 118],
		    [6, 26, 50, 74, 98, 122],
		    [6, 30, 54, 78, 102, 126],
		    [6, 26, 52, 78, 104, 130],
		    [6, 30, 56, 82, 108, 134],
		    [6, 34, 60, 86, 112, 138],
		    [6, 30, 58, 86, 114, 142],
		    [6, 34, 62, 90, 118, 146],
		    [6, 30, 54, 78, 102, 126, 150],
		    [6, 24, 50, 76, 102, 128, 154],
		    [6, 28, 54, 80, 106, 132, 158],
		    [6, 32, 58, 84, 110, 136, 162],
		    [6, 26, 54, 82, 110, 138, 166],
		    [6, 30, 58, 86, 114, 142, 170]
		  ],

		  G15: (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
		  G18: (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
		  G15_MASK: (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),

		  /*
		   BCH编码格式信息
		   */
		  getBCHTypeInfo: function(data) {
		    var d = data << 10;
		    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
		      d ^= (QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15)));
		    }
		    return ((data << 10) | d) ^ QRUtil.G15_MASK;
		  },
		  /*
		   BCH编码版本信息
		   */
		  getBCHTypeNumber: function(data) {
		    var d = data << 12;
		    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
		      d ^= (QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18)));
		    }
		    return (data << 12) | d;
		  },
		  /*
		   获取BCH位信息
		   */
		  getBCHDigit: function(data) {

		    var digit = 0;

		    while (data != 0) {
		      digit++;
		      data >>>= 1;
		    }

		    return digit;
		  },
		  /*
		   获取版本对应的矫正图形位置
		   */
		  getPatternPosition: function(typeNumber) {
		    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
		  },
		  /*
		   掩膜算法
		   */
		  getMask: function(maskPattern, i, j) {

		    switch (maskPattern) {

		      case QRMaskPattern.PATTERN000:
		        return (i + j) % 2 == 0;
		      case QRMaskPattern.PATTERN001:
		        return i % 2 == 0;
		      case QRMaskPattern.PATTERN010:
		        return j % 3 == 0;
		      case QRMaskPattern.PATTERN011:
		        return (i + j) % 3 == 0;
		      case QRMaskPattern.PATTERN100:
		        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
		      case QRMaskPattern.PATTERN101:
		        return (i * j) % 2 + (i * j) % 3 == 0;
		      case QRMaskPattern.PATTERN110:
		        return ((i * j) % 2 + (i * j) % 3) % 2 == 0;
		      case QRMaskPattern.PATTERN111:
		        return ((i * j) % 3 + (i + j) % 2) % 2 == 0;

		      default:
		        throw new Error("bad maskPattern:" + maskPattern);
		    }
		  },
		  /*
		   获取RS的纠错多项式
		   */
		  getErrorCorrectPolynomial: function(errorCorrectLength) {

		    var a = new QRPolynomial([1], 0);

		    for (var i = 0; i < errorCorrectLength; i++) {
		      a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
		    }

		    return a;
		  },
		  /*
		   获取评价
		   */
		  getLostPoint: function(qrCode) {

		    var moduleCount = qrCode.getModuleCount(),
		      lostPoint = 0,
		      darkCount = 0;

		    for (var row = 0; row < moduleCount; row++) {

		      var sameCount = 0;
		      var head = qrCode.modules[row][0];

		      for (var col = 0; col < moduleCount; col++) {

		        var current = qrCode.modules[row][col];

		        //level 3 评价
		        if (col < moduleCount - 6) {
		          if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {
		            if (col < moduleCount - 10) {
		              if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {
		                lostPoint += 40;
		              }
		            } else if (col > 3) {
		              if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {
		                lostPoint += 40;
		              }
		            }

		          }
		        }

		        //level 2 评价
		        if ((row < moduleCount - 1) && (col < moduleCount - 1)) {
		          var count = 0;
		          if (current) count++;
		          if (qrCode.modules[row + 1][col]) count++;
		          if (qrCode.modules[row][col + 1]) count++;
		          if (qrCode.modules[row + 1][col + 1]) count++;
		          if (count == 0 || count == 4) {
		            lostPoint += 3;
		          }
		        }

		        //level 1 评价
		        if (head ^ current) {
		          sameCount++;
		        } else {
		          head = current;
		          if (sameCount >= 5) {
		            lostPoint += (3 + sameCount - 5);
		          }
		          sameCount = 1;
		        }

		        //level 4 评价
		        if (current) {
		          darkCount++;
		        }

		      }
		    }

		    for (var col = 0; col < moduleCount; col++) {

		      var sameCount = 0;
		      var head = qrCode.modules[0][col];

		      for (var row = 0; row < moduleCount; row++) {

		        var current = qrCode.modules[row][col];

		        //level 3 评价
		        if (row < moduleCount - 6) {
		          if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {
		            if (row < moduleCount - 10) {
		              if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {
		                lostPoint += 40;
		              }
		            } else if (row > 3) {
		              if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {
		                lostPoint += 40;
		              }
		            }
		          }
		        }

		        //level 1 评价
		        if (head ^ current) {
		          sameCount++;
		        } else {
		          head = current;
		          if (sameCount >= 5) {
		            lostPoint += (3 + sameCount - 5);
		          }
		          sameCount = 1;
		        }

		      }
		    }

		    // LEVEL4

		    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
		    lostPoint += ratio * 10;

		    return lostPoint;
		  }

		};


		//---------------------------------------------------------------------
		// QRMath使用的数学工具
		//---------------------------------------------------------------------

		var QRMath = {
		  /*
		   将n转化为a^m
		   */
		  glog: function(n) {

		    if (n < 1) {
		      throw new Error("glog(" + n + ")");
		    }

		    return QRMath.LOG_TABLE[n];
		  },
		  /*
		   将a^m转化为n
		   */
		  gexp: function(n) {

		    while (n < 0) {
		      n += 255;
		    }

		    while (n >= 256) {
		      n -= 255;
		    }

		    return QRMath.EXP_TABLE[n];
		  },

		  EXP_TABLE: new Array(256),

		  LOG_TABLE: new Array(256)

		};

		for (var i = 0; i < 8; i++) {
		  QRMath.EXP_TABLE[i] = 1 << i;
		}
		for (var i = 8; i < 256; i++) {
		  QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
		}
		for (var i = 0; i < 255; i++) {
		  QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
		}

		//---------------------------------------------------------------------
		// QRPolynomial 多项式
		//---------------------------------------------------------------------
		/**
		 * 多项式类
		 * @param {Array} num   系数
		 * @param {num} shift a^shift
		 */
		function QRPolynomial(num, shift) {

		  if (num.length == undefined) {
		    throw new Error(num.length + "/" + shift);
		  }

		  var offset = 0;

		  while (offset < num.length && num[offset] == 0) {
		    offset++;
		  }

		  this.num = new Array(num.length - offset + shift);
		  for (var i = 0; i < num.length - offset; i++) {
		    this.num[i] = num[i + offset];
		  }
		}

		QRPolynomial.prototype = {

		  get: function(index) {
		    return this.num[index];
		  },

		  getLength: function() {
		    return this.num.length;
		  },
		  /**
		   * 多项式乘法
		   * @param  {QRPolynomial} e 被乘多项式
		   * @return {[type]}   [description]
		   */
		  multiply: function(e) {

		    var num = new Array(this.getLength() + e.getLength() - 1);

		    for (var i = 0; i < this.getLength(); i++) {
		      for (var j = 0; j < e.getLength(); j++) {
		        num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
		      }
		    }

		    return new QRPolynomial(num, 0);
		  },
		  /**
		   * 多项式模运算
		   * @param  {QRPolynomial} e 模多项式
		   * @return {}
		   */
		  mod: function(e) {
		    var tl = this.getLength(),
		      el = e.getLength();
		    if (tl - el < 0) {
		      return this;
		    }
		    var num = new Array(tl);
		    for (var i = 0; i < tl; i++) {
		      num[i] = this.get(i);
		    }
		    while (num.length >= el) {
		      var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));

		      for (var i = 0; i < e.getLength(); i++) {
		        num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
		      }
		      while (num[0] == 0) {
		        num.shift();
		      }
		    }
		    return new QRPolynomial(num, 0);
		  }
		};

		//---------------------------------------------------------------------
		// RS_BLOCK_TABLE
		//---------------------------------------------------------------------
		/*
		 二维码各个版本信息[块数, 每块中的数据块数, 每块中的信息块数]
		 */
		RS_BLOCK_TABLE = [

		  // L
		  // M
		  // Q
		  // H

		  // 1
		  [1, 26, 19],
		  [1, 26, 16],
		  [1, 26, 13],
		  [1, 26, 9],

		  // 2
		  [1, 44, 34],
		  [1, 44, 28],
		  [1, 44, 22],
		  [1, 44, 16],

		  // 3
		  [1, 70, 55],
		  [1, 70, 44],
		  [2, 35, 17],
		  [2, 35, 13],

		  // 4
		  [1, 100, 80],
		  [2, 50, 32],
		  [2, 50, 24],
		  [4, 25, 9],

		  // 5
		  [1, 134, 108],
		  [2, 67, 43],
		  [2, 33, 15, 2, 34, 16],
		  [2, 33, 11, 2, 34, 12],

		  // 6
		  [2, 86, 68],
		  [4, 43, 27],
		  [4, 43, 19],
		  [4, 43, 15],

		  // 7
		  [2, 98, 78],
		  [4, 49, 31],
		  [2, 32, 14, 4, 33, 15],
		  [4, 39, 13, 1, 40, 14],

		  // 8
		  [2, 121, 97],
		  [2, 60, 38, 2, 61, 39],
		  [4, 40, 18, 2, 41, 19],
		  [4, 40, 14, 2, 41, 15],

		  // 9
		  [2, 146, 116],
		  [3, 58, 36, 2, 59, 37],
		  [4, 36, 16, 4, 37, 17],
		  [4, 36, 12, 4, 37, 13],

		  // 10
		  [2, 86, 68, 2, 87, 69],
		  [4, 69, 43, 1, 70, 44],
		  [6, 43, 19, 2, 44, 20],
		  [6, 43, 15, 2, 44, 16],

		  // 11
		  [4, 101, 81],
		  [1, 80, 50, 4, 81, 51],
		  [4, 50, 22, 4, 51, 23],
		  [3, 36, 12, 8, 37, 13],

		  // 12
		  [2, 116, 92, 2, 117, 93],
		  [6, 58, 36, 2, 59, 37],
		  [4, 46, 20, 6, 47, 21],
		  [7, 42, 14, 4, 43, 15],

		  // 13
		  [4, 133, 107],
		  [8, 59, 37, 1, 60, 38],
		  [8, 44, 20, 4, 45, 21],
		  [12, 33, 11, 4, 34, 12],

		  // 14
		  [3, 145, 115, 1, 146, 116],
		  [4, 64, 40, 5, 65, 41],
		  [11, 36, 16, 5, 37, 17],
		  [11, 36, 12, 5, 37, 13],

		  // 15
		  [5, 109, 87, 1, 110, 88],
		  [5, 65, 41, 5, 66, 42],
		  [5, 54, 24, 7, 55, 25],
		  [11, 36, 12],

		  // 16
		  [5, 122, 98, 1, 123, 99],
		  [7, 73, 45, 3, 74, 46],
		  [15, 43, 19, 2, 44, 20],
		  [3, 45, 15, 13, 46, 16],

		  // 17
		  [1, 135, 107, 5, 136, 108],
		  [10, 74, 46, 1, 75, 47],
		  [1, 50, 22, 15, 51, 23],
		  [2, 42, 14, 17, 43, 15],

		  // 18
		  [5, 150, 120, 1, 151, 121],
		  [9, 69, 43, 4, 70, 44],
		  [17, 50, 22, 1, 51, 23],
		  [2, 42, 14, 19, 43, 15],

		  // 19
		  [3, 141, 113, 4, 142, 114],
		  [3, 70, 44, 11, 71, 45],
		  [17, 47, 21, 4, 48, 22],
		  [9, 39, 13, 16, 40, 14],

		  // 20
		  [3, 135, 107, 5, 136, 108],
		  [3, 67, 41, 13, 68, 42],
		  [15, 54, 24, 5, 55, 25],
		  [15, 43, 15, 10, 44, 16],

		  // 21
		  [4, 144, 116, 4, 145, 117],
		  [17, 68, 42],
		  [17, 50, 22, 6, 51, 23],
		  [19, 46, 16, 6, 47, 17],

		  // 22
		  [2, 139, 111, 7, 140, 112],
		  [17, 74, 46],
		  [7, 54, 24, 16, 55, 25],
		  [34, 37, 13],

		  // 23
		  [4, 151, 121, 5, 152, 122],
		  [4, 75, 47, 14, 76, 48],
		  [11, 54, 24, 14, 55, 25],
		  [16, 45, 15, 14, 46, 16],

		  // 24
		  [6, 147, 117, 4, 148, 118],
		  [6, 73, 45, 14, 74, 46],
		  [11, 54, 24, 16, 55, 25],
		  [30, 46, 16, 2, 47, 17],

		  // 25
		  [8, 132, 106, 4, 133, 107],
		  [8, 75, 47, 13, 76, 48],
		  [7, 54, 24, 22, 55, 25],
		  [22, 45, 15, 13, 46, 16],

		  // 26
		  [10, 142, 114, 2, 143, 115],
		  [19, 74, 46, 4, 75, 47],
		  [28, 50, 22, 6, 51, 23],
		  [33, 46, 16, 4, 47, 17],

		  // 27
		  [8, 152, 122, 4, 153, 123],
		  [22, 73, 45, 3, 74, 46],
		  [8, 53, 23, 26, 54, 24],
		  [12, 45, 15, 28, 46, 16],

		  // 28
		  [3, 147, 117, 10, 148, 118],
		  [3, 73, 45, 23, 74, 46],
		  [4, 54, 24, 31, 55, 25],
		  [11, 45, 15, 31, 46, 16],

		  // 29
		  [7, 146, 116, 7, 147, 117],
		  [21, 73, 45, 7, 74, 46],
		  [1, 53, 23, 37, 54, 24],
		  [19, 45, 15, 26, 46, 16],

		  // 30
		  [5, 145, 115, 10, 146, 116],
		  [19, 75, 47, 10, 76, 48],
		  [15, 54, 24, 25, 55, 25],
		  [23, 45, 15, 25, 46, 16],

		  // 31
		  [13, 145, 115, 3, 146, 116],
		  [2, 74, 46, 29, 75, 47],
		  [42, 54, 24, 1, 55, 25],
		  [23, 45, 15, 28, 46, 16],

		  // 32
		  [17, 145, 115],
		  [10, 74, 46, 23, 75, 47],
		  [10, 54, 24, 35, 55, 25],
		  [19, 45, 15, 35, 46, 16],

		  // 33
		  [17, 145, 115, 1, 146, 116],
		  [14, 74, 46, 21, 75, 47],
		  [29, 54, 24, 19, 55, 25],
		  [11, 45, 15, 46, 46, 16],

		  // 34
		  [13, 145, 115, 6, 146, 116],
		  [14, 74, 46, 23, 75, 47],
		  [44, 54, 24, 7, 55, 25],
		  [59, 46, 16, 1, 47, 17],

		  // 35
		  [12, 151, 121, 7, 152, 122],
		  [12, 75, 47, 26, 76, 48],
		  [39, 54, 24, 14, 55, 25],
		  [22, 45, 15, 41, 46, 16],

		  // 36
		  [6, 151, 121, 14, 152, 122],
		  [6, 75, 47, 34, 76, 48],
		  [46, 54, 24, 10, 55, 25],
		  [2, 45, 15, 64, 46, 16],

		  // 37
		  [17, 152, 122, 4, 153, 123],
		  [29, 74, 46, 14, 75, 47],
		  [49, 54, 24, 10, 55, 25],
		  [24, 45, 15, 46, 46, 16],

		  // 38
		  [4, 152, 122, 18, 153, 123],
		  [13, 74, 46, 32, 75, 47],
		  [48, 54, 24, 14, 55, 25],
		  [42, 45, 15, 32, 46, 16],

		  // 39
		  [20, 147, 117, 4, 148, 118],
		  [40, 75, 47, 7, 76, 48],
		  [43, 54, 24, 22, 55, 25],
		  [10, 45, 15, 67, 46, 16],

		  // 40
		  [19, 148, 118, 6, 149, 119],
		  [18, 75, 47, 31, 76, 48],
		  [34, 54, 24, 34, 55, 25],
		  [20, 45, 15, 61, 46, 16]
		];

		/**
		 * 根据数据获取对应版本
		 * @return {[type]} [description]
		 */
		QRCodeAlg.prototype.getRightType = function() {
		  for (var typeNumber = 1; typeNumber < 41; typeNumber++) {
		    var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];
		    if (rsBlock == undefined) {
		      throw new Error('bad rs block @ typeNumber:' + typeNumber + '/errorCorrectLevel:' + this.errorCorrectLevel);
		    }
		    var length = rsBlock.length / 3;
		    var totalDataCount = 0;
		    for (var i = 0; i < length; i++) {
		      var count = rsBlock[i * 3 + 0];
		      var dataCount = rsBlock[i * 3 + 2];
		      totalDataCount += dataCount * count;
		    }

		    var lengthBytes = typeNumber > 9 ? 2 : 1;
		    if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {
		      this.typeNumber = typeNumber;
		      this.rsBlock = rsBlock;
		      this.totalDataCount = totalDataCount;
		      break;
		    }
		  }
		};

		// ---------------------------------------------------------------------
		// QRBitBuffer
		// ---------------------------------------------------------------------

		function QRBitBuffer() {
		  this.buffer = new Array();
		  this.length = 0;
		}

		QRBitBuffer.prototype = {
		  get: function(index) {
		    var bufIndex = Math.floor(index / 8);
		    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1);
		  },

		  put: function(num, length) {
		    for (var i = 0; i < length; i++) {
		      this.putBit(((num >>> (length - i - 1)) & 1));
		    }
		  },

		  putBit: function(bit) {

		    var bufIndex = Math.floor(this.length / 8);
		    if (this.buffer.length <= bufIndex) {
		      this.buffer.push(0);
		    }

		    if (bit) {
		      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8));
		    }

		    this.length++;
		  }
		};

		$.fn.qrcode = function QRCodePlugin(option) {
		  return this.each(function() {
		    $(this).append(new QRCode(option));
		  });
		};

		module.exports = UI.qrcode = QRCode;


	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		/**
		 * @via https://github.com/uikit/uikit/blob/master/src/js/addons/sticky.js
		 * @license https://github.com/uikit/uikit/blob/master/LICENSE.md
		 */

		// Sticky Class
		var Sticky = function(element, options) {
		  var _this = this;

		  this.options = $.extend({}, Sticky.DEFAULTS, options);
		  this.$element = $(element);
		  this.sticked = null;
		  this.inited = null;
		  this.$holder = undefined;

		  this.$window = $(window).
		    on('scroll.sticky.amui',
		    UI.utils.debounce($.proxy(this.checkPosition, this), 10)).
		    on('resize.sticky.amui orientationchange.sticky.amui',
		    UI.utils.debounce(function() {
		      _this.reset(true, function() {
		        _this.checkPosition();
		      });
		    }, 50)).
		    on('load.sticky.amui', $.proxy(this.checkPosition, this));

		  // the `.offset()` is diff between jQuery & Zepto.js
		  // jQuery: return `top` and `left`
		  // Zepto.js: return `top`, `left`, `width`, `height`
		  this.offset = this.$element.offset();

		  this.init();
		};

		Sticky.DEFAULTS = {
		  top: 0,
		  bottom: 0,
		  animation: '',
		  className: {
		    sticky: 'am-sticky',
		    resetting: 'am-sticky-resetting',
		    stickyBtm: 'am-sticky-bottom',
		    animationRev: 'am-animation-reverse'
		  }
		};

		Sticky.prototype.init = function() {
		  var result = this.check();

		  if (!result) {
		    return false;
		  }

		  var $element = this.$element;
		  var $elementMargin = '';

		  $.each($element.css(
		      ['marginTop', 'marginRight', 'marginBottom', 'marginLeft']),
		    function(name, value) {
		      return $elementMargin += ' ' + value;
		    });

		  var $holder = $('<div class="am-sticky-placeholder"></div>').css({
		    height: $element.css('position') !== 'absolute' ?
		      $element.outerHeight() : '',
		    float: $element.css('float') != 'none' ? $element.css('float') : '',
		    margin: $elementMargin
		  });

		  this.$holder = $element.css('margin', 0).wrap($holder).parent();
		  this.inited = 1;

		  return true;
		};

		Sticky.prototype.reset = function(force, cb) {
		  var options = this.options;
		  var $element = this.$element;
		  var animation = (options.animation) ?
		  ' am-animation-' + options.animation : '';
		  var complete = function() {
		    $element.css({position: '', top: '', width: '', left: '', margin: 0});
		    $element.removeClass([
		      animation,
		      options.className.animationRev,
		      options.className.sticky,
		      options.className.resetting
		    ].join(' '));

		    this.animating = false;
		    this.sticked = false;
		    this.offset = $element.offset();
		    cb && cb();
		  }.bind(this);

		  $element.addClass(options.className.resetting);

		  if (!force && options.animation && UI.support.animation) {

		    this.animating = true;

		    $element.removeClass(animation).one(UI.support.animation.end, function() {
		      complete();
		    }).width(); // force redraw

		    $element.addClass(animation + ' ' + options.className.animationRev);
		  } else {
		    complete();
		  }
		};

		Sticky.prototype.check = function() {
		  if (!this.$element.is(':visible')) {
		    return false;
		  }

		  var media = this.options.media;

		  if (media) {
		    switch (typeof(media)) {
		      case 'number':
		        if (window.innerWidth < media) {
		          return false;
		        }
		        break;

		      case 'string':
		        if (window.matchMedia && !window.matchMedia(media).matches) {
		          return false;
		        }
		        break;
		    }
		  }

		  return true;
		};

		Sticky.prototype.checkPosition = function() {
		  if (!this.inited) {
		    var initialized = this.init();
		    if (!initialized) {
		      return;
		    }
		  }

		  var options = this.options;
		  var scrollTop = this.$window.scrollTop();
		  var offsetTop = options.top;
		  var offsetBottom = options.bottom;
		  var $element = this.$element;
		  var animation = (options.animation) ?
		    ' am-animation-' + options.animation : '';
		  var className = [options.className.sticky, animation].join(' ');

		  if (typeof offsetBottom == 'function') {
		    offsetBottom = offsetBottom(this.$element);
		  }

		  var checkResult = (scrollTop > this.$holder.offset().top);

		  if (!this.sticked && checkResult) {
		    $element.addClass(className);
		  } else if (this.sticked && !checkResult) {
		    this.reset();
		  }

		  this.$holder.css({
		    height: $element.is(':visible') && $element.css('position') !== 'absolute' ?
		      $element.outerHeight() : ''
		  });

		  if (checkResult) {
		    $element.css({
		      top: offsetTop,
		      left: this.$holder.offset().left,
		      width: this.$holder.width()
		    });

		    /*
		     if (offsetBottom) {
		     // （底部边距 + 元素高度 > 窗口高度） 时定位到底部
		     if ((offsetBottom + this.offset.height > $(window).height()) &&
		     (scrollTop + $(window).height() >= scrollHeight - offsetBottom)) {
		     $element.addClass(options.className.stickyBtm).
		     css({top: $(window).height() - offsetBottom - this.offset.height});
		     } else {
		     $element.removeClass(options.className.stickyBtm).css({top: offsetTop});
		     }
		     }
		     */
		  }

		  this.sticked = checkResult;
		};

		// Sticky Plugin
		UI.plugin('sticky', Sticky);

		// Init code
		$(window).on('load', function() {
		  $('[data-am-sticky]').sticky();
		});

		module.exports = Sticky;


	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		var Hammer = __webpack_require__(3);
		var supportTransition = UI.support.transition;
		var animation = UI.support.animation;

		/**
		 * @via https://github.com/twbs/bootstrap/blob/master/js/tab.js
		 * @copyright 2011-2014 Twitter, Inc.
		 * @license MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
		 */

		/**
		 * Tabs
		 * @param {HTMLElement} element
		 * @param {Object} options
		 * @constructor
		 */
		var Tabs = function(element, options) {
		  this.$element = $(element);
		  this.options = $.extend({}, Tabs.DEFAULTS, options || {});
		  this.transitioning = this.activeIndex = null;

		  this.refresh();
		  this.init();
		};

		Tabs.DEFAULTS = {
		  selector: {
		    nav: '> .am-tabs-nav',
		    content: '> .am-tabs-bd',
		    panel: '> .am-tab-panel'
		  },
		  activeClass: 'am-active'
		};

		Tabs.prototype.refresh = function() {
		  var selector = this.options.selector;

		  this.$tabNav = this.$element.find(selector.nav);
		  this.$navs = this.$tabNav.find('a');

		  this.$content = this.$element.find(selector.content);
		  this.$tabPanels = this.$content.find(selector.panel);

		  var $active = this.$tabNav.find('> .' + this.options.activeClass);

		  // Activate the first Tab when no active Tab or multiple active Tabs
		  if ($active.length !== 1) {
		    this.open(0);
		  } else {
		    this.activeIndex = this.$navs.index($active.children('a'));
		  }
		};

		Tabs.prototype.init = function() {
		  var _this = this;
		  var options = this.options;

		  this.$element.on('click.tabs.amui', options.selector.nav + ' a', function(e) {
		    e.preventDefault();
		    _this.open($(this));
		  });

		  // TODO: nested Tabs touch events
		  if (!options.noSwipe) {
		    if (!this.$content.length) {
		      return this;
		    }

		    var hammer = new Hammer.Manager(this.$content[0]);
		    var swipe = new Hammer.Swipe({
		      direction: Hammer.DIRECTION_HORIZONTAL
		      // threshold: 40
		    });

		    hammer.add(swipe);

		    hammer.on('swipeleft', UI.utils.debounce(function(e) {
		      e.preventDefault();
		      _this.goTo('next');
		    }, 100));

		    hammer.on('swiperight', UI.utils.debounce(function(e) {
		      e.preventDefault();
		      _this.goTo('prev');
		    }, 100));

		    this._hammer = hammer;
		  }
		};

		/**
		 * Open $nav tab
		 * @param {jQuery|HTMLElement|Number} $nav
		 * @returns {Tabs}
		 */
		Tabs.prototype.open = function($nav) {
		  var activeClass = this.options.activeClass;
		  var activeIndex = typeof $nav === 'number' ? $nav : this.$navs.index($($nav));

		  $nav = typeof $nav === 'number' ? this.$navs.eq(activeIndex) : $($nav);

		  if (!$nav ||
		    !$nav.length ||
		    this.transitioning ||
		    $nav.parent('li').hasClass(activeClass)) {
		    return;
		  }

		  var $tabNav = this.$tabNav;
		  var href = $nav.attr('href');
		  var regexHash = /^#.+$/;
		  var $target = regexHash.test(href) && this.$content.find(href) ||
		    this.$tabPanels.eq(activeIndex);
		  var previous = $tabNav.find('.' + activeClass + ' a')[0];
		  var e = $.Event('open.tabs.amui', {
		    relatedTarget: previous
		  });

		  $nav.trigger(e);

		  if (e.isDefaultPrevented()) {
		    return;
		  }

		  // activate Tab nav
		  this.activate($nav.closest('li'), $tabNav);

		  // activate Tab content
		  this.activate($target, this.$content, function() {
		    $nav.trigger({
		      type: 'opened.tabs.amui',
		      relatedTarget: previous
		    });
		  });

		  this.activeIndex = activeIndex;
		};

		Tabs.prototype.activate = function($element, $container, callback) {
		  this.transitioning = true;

		  var activeClass = this.options.activeClass;
		  var $active = $container.find('> .' + activeClass);
		  var transition = callback && supportTransition && !!$active.length;

		  $active.removeClass(activeClass + ' am-in');

		  $element.addClass(activeClass);

		  if (transition) {
		    $element.redraw(); // reflow for transition
		    $element.addClass('am-in');
		  } else {
		    $element.removeClass('am-fade');
		  }

		  var complete = $.proxy(function complete() {
		    callback && callback();
		    this.transitioning = false;
		  }, this);

		  transition ? $active.one(supportTransition.end, complete) : complete();
		};

		/**
		 * Go to `next` or `prev` tab
		 * @param {String} direction - `next` or `prev`
		 */
		Tabs.prototype.goTo = function(direction) {
		  var navIndex = this.activeIndex;
		  var isNext = direction === 'next';
		  var spring = isNext ? 'am-animation-right-spring' :
		    'am-animation-left-spring';

		  if ((isNext && navIndex + 1 >= this.$navs.length) || // last one
		    (!isNext && navIndex === 0)) { // first one
		    var $panel = this.$tabPanels.eq(navIndex);

		    animation && $panel.addClass(spring).on(animation.end, function() {
		      $panel.removeClass(spring);
		    });
		  } else {
		    this.open(isNext ? navIndex + 1 : navIndex - 1);
		  }
		};

		Tabs.prototype.destroy = function() {
		  this.$element.off('.tabs.amui');
		  Hammer.off(this.$content[0], 'swipeleft swiperight');
		  this._hammer && this._hammer.destroy();
		  $.removeData(this.$element, 'amui.tabs');
		};

		// Plugin
		function Plugin(option) {
		  var args = Array.prototype.slice.call(arguments, 1);
		  var methodReturn;

		  this.each(function() {
		    var $this = $(this);
		    var $tabs = $this.is('.am-tabs') && $this || $this.closest('.am-tabs');
		    var data = $tabs.data('amui.tabs');
		    var options = $.extend({}, UI.utils.parseOptions($this.data('amTabs')),
		      $.isPlainObject(option) && option);

		    if (!data) {
		      $tabs.data('amui.tabs', (data = new Tabs($tabs[0], options)));
		    }

		    if (typeof option === 'string') {
		      if (option === 'open' && $this.is('.am-tabs-nav a')) {
		        data.open($this);
		      } else {
		        methodReturn = typeof data[option] === 'function' ?
		          data[option].apply(data, args) : data[option];
		      }
		    }
		  });

		  return methodReturn === undefined ? this : methodReturn;
		}

		$.fn.tabs = Plugin;

		// Init code
		UI.ready(function(context) {
		  $('[data-am-tabs]', context).tabs();
		});

		$(document).on('click.tabs.amui.data-api', '[data-am-tabs] .am-tabs-nav a',
		  function(e) {
		  e.preventDefault();
		  Plugin.call($(this), 'open');
		});

		module.exports = UI.tabs = Tabs;

		// TODO: 1. Ajax 支持
		//       2. touch 事件处理逻辑优化


	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		/**
		 * UCheck
		 * @via https://github.com/designmodo/Flat-UI/blob/8ef98df23ba7f5033e596a9bd05b53b535a9fe99/js/radiocheck.js
		 * @license CC BY 3.0 & MIT
		 * @param {HTMLElement} element
		 * @param {object} options
		 * @constructor
		 */

		var UCheck = function(element, options) {
		  this.options = $.extend({}, UCheck.DEFAULTS, options);
		  // this.options = $.extend({}, UCheck.DEFAULTS, this.$element.data(), options);
		  this.$element = $(element);
		  this.init();
		};

		UCheck.DEFAULTS = {
		  checkboxClass: 'am-ucheck-checkbox',
		  radioClass: 'am-ucheck-radio',
		  checkboxTpl: '<span class="am-ucheck-icons">' +
		  '<i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span>',
		  radioTpl: '<span class="am-ucheck-icons">' +
		  '<i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span>'
		};

		UCheck.prototype.init = function() {
		  var $element = this.$element;
		  var element = $element[0];
		  var options = this.options;

		  if (element.type === 'checkbox') {
		    $element.addClass(options.checkboxClass)
		      .after(options.checkboxTpl);
		  } else if (element.type === 'radio') {
		    $element.addClass(options.radioClass)
		      .after(options.radioTpl);
		  }
		};

		UCheck.prototype.check = function() {
		  this.$element
		    .prop('checked', true)
		    .trigger('change.ucheck.amui')
		    .trigger('checked.ucheck.amui');
		},

		UCheck.prototype.uncheck = function() {
		  this.$element
		    .prop('checked', false)
		    .trigger('change.ucheck.amui')
		    .trigger('unchecked.ucheck.amui');
		},

		UCheck.prototype.toggle = function() {
		  this.$element.
		    prop('checked', function(i, value) {
		      return !value;
		    })
		    .trigger('change.ucheck.amui')
		    .trigger('toggled.ucheck.amui');
		},

		UCheck.prototype.disable = function() {
		  this.$element
		    .prop('disabled', true)
		    .trigger('change.ucheck.amui')
		    .trigger('disabled.ucheck.amui');
		},

		UCheck.prototype.enable = function() {
		  this.$element.prop('disabled', false);
		  this.$element.trigger('change.ucheck.amui').trigger('enabled.ucheck.amui');
		},

		UCheck.prototype.destroy = function() {
		  this.$element
		    .removeData('amui.ucheck')
		    .removeClass(this.options.checkboxClass + ' ' + this.options.radioClass)
		    .next('.am-ucheck-icons')
		    .remove()
		  .end()
		    .trigger('destroyed.ucheck.amui');
		};

		UI.plugin('uCheck', UCheck, {
		  after: function() {
		    // Adding 'am-nohover' class for touch devices
		    if (UI.support.touch) {
		      this.parent().hover(function() {
		        $(this).addClass('am-nohover');
		      }, function() {
		        $(this).removeClass('am-nohover');
		      });
		    }
		  }
		});

		UI.ready(function(context) {
		  $('[data-am-ucheck]', context).uCheck();
		});

		module.exports = UCheck;

		// TODO: 与表单验证结合使用的情况


	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		var Validator = function(element, options) {
		  this.options = $.extend({}, Validator.DEFAULTS, options);
		  this.options.patterns = $.extend({}, Validator.patterns,
		    this.options.patterns);
		  var locales = this.options.locales;
		  !Validator.validationMessages[locales] && (this.options.locales = 'zh_CN');
		  this.$element = $(element);
		  this.init();
		};

		Validator.DEFAULTS = {
		  debug: false,
		  locales: 'zh_CN',
		  H5validation: false,
		  H5inputType: ['email', 'url', 'number'],
		  patterns: {},
		  patternClassPrefix: 'js-pattern-',
		  activeClass: 'am-active',
		  inValidClass: 'am-field-error',
		  validClass: 'am-field-valid',

		  validateOnSubmit: true,
		  alwaysRevalidate: false,
		  // Elements to validate with allValid (only validating visible elements)
		  // :input: selects all input, textarea, select and button elements.
		  // @since 2.5: move `:visible` to `ignore` option (became to `:hidden`)
		  allFields: ':input:not(:submit, :button, :disabled, .am-novalidate)',

		  // ignored elements
		  // @since 2.5
		  ignore: ':hidden:not([data-am-selected], .am-validate)',

		  // Custom events
		  customEvents: 'validate',

		  // Keyboard events
		  keyboardFields: ':input:not(:submit, :button, :disabled, .am-novalidate)',
		  keyboardEvents: 'focusout, change', // keyup, focusin

		  // bind `keyup` event to active field
		  activeKeyup: false,
		  textareaMaxlenthKeyup: true,

		  // Mouse events
		  pointerFields: 'input[type="range"]:not(:disabled, .am-novalidate), ' +
		  'input[type="radio"]:not(:disabled, .am-novalidate), ' +
		  'input[type="checkbox"]:not(:disabled, .am-novalidate), ' +
		  'select:not(:disabled, .am-novalidate), ' +
		  'option:not(:disabled, .am-novalidate)',
		  pointerEvents: 'click',

		  onValid: function(validity) {
		  },

		  onInValid: function(validity) {
		  },

		  markValid: function(validity) {
		    // this is Validator instance
		    var options = this.options;
		    var $field = $(validity.field);
		    var $parent = $field.closest('.am-form-group');

		    $field.addClass(options.validClass).removeClass(options.inValidClass);
		    $parent.addClass('am-form-success').removeClass('am-form-error');
		    options.onValid.call(this, validity);
		  },

		  markInValid: function(validity) {
		    var options = this.options;
		    var $field = $(validity.field);
		    var $parent = $field.closest('.am-form-group');

		    $field.addClass(options.inValidClass + ' ' + options.activeClass).
		      removeClass(options.validClass);
		    $parent.addClass('am-form-error').removeClass('am-form-success');
		    options.onInValid.call(this, validity);
		  },

		  validate: function(validity) {
		    // return validity;
		  },

		  submit: null
		};

		Validator.VERSION = '2.5.2';

		/* jshint -W101 */
		Validator.patterns = {
		  email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/,

		  url: /^(https?|ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,

		  // Number, including positive, negative, and floating decimal
		  number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,
		  dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
		  integer: /^-?\d+$/
		};
		/* jshint +W101 */

		Validator.validationMessages = {
		  zh_CN: {
		    valueMissing: '请填写（选择）此字段',
		    customError: {
		      tooShort: '至少填写 %s 个字符',
		      checkedOverflow: '至多选择 %s 项',
		      checkedUnderflow: '至少选择 %s 项'
		    },
		    patternMismatch: '请按照要求的格式填写',
		    rangeOverflow: '请填写小于等于 %s 的值',
		    rangeUnderflow: '请填写大于等于 %s 的值',
		    stepMismatch: '',
		    tooLong: '至多填写 %s 个字符',
		    typeMismatch: '请按照要求的类型填写'
		  }
		};

		Validator.ERROR_MAP = {
		  tooShort: 'minlength',
		  checkedOverflow: 'maxchecked',
		  checkedUnderflow: 'minchecked',
		  rangeOverflow: 'max',
		  rangeUnderflow: 'min',
		  tooLong: 'maxlength'
		};

		// TODO: 考虑表单元素不是 form 子元素的情形
		// TODO: change/click/focusout 同时触发时处理重复
		// TODO: 显示提示信息

		Validator.prototype.init = function() {
		  var _this = this;
		  var $element = this.$element;
		  var options = this.options;

		  // using H5 form validation if option set and supported
		  if (options.H5validation && UI.support.formValidation) {
		    return false;
		  }

		  // disable HTML5 form validation
		  $element.attr('novalidate', 'novalidate');

		  function regexToPattern(regex) {
		    var pattern = regex.toString();
		    return pattern.substring(1, pattern.length - 1);
		  }

		  // add pattern to H5 input type
		  $.each(options.H5inputType, function(i, type) {
		    var $field = $element.find('input[type=' + type + ']');
		    if (!$field.attr('pattern') &&
		      !$field.is('[class*=' + options.patternClassPrefix + ']')) {
		      $field.attr('pattern', regexToPattern(options.patterns[type]));
		    }
		  });

		  // add pattern to .js-pattern-xx
		  $.each(options.patterns, function(key, value) {
		    var $field = $element.find('.' + options.patternClassPrefix + key);
		    !$field.attr('pattern') && $field.attr('pattern', regexToPattern(value));
		  });

		  $element.on('submit.validator.amui', function(e) {
		    // user custom submit handler
		    if (typeof options.submit === 'function') {
		      return options.submit.call(_this, e);
		    }

		    if (options.validateOnSubmit) {
		      var formValidity = _this.isFormValid();

		      // sync validate, return result
		      if ($.type(formValidity) === 'boolean') {
		        return formValidity;
		      }

		      if ($element.data('amui.checked')) {
		        return true;
		      } else {
		        $.when(formValidity).then(function() {
		          // done, submit form
		          $element.data('amui.checked', true).submit();
		        }, function() {
		          // fail
		          $element.data('amui.checked', false).
		            find('.' + options.inValidClass).eq(0).focus();
		        });
		        return false;
		      }
		    }
		  });

		  function bindEvents(fields, eventFlags, debounce) {
		    var events = eventFlags.split(',');
		    var validate = function(e) {
		      // console.log(e.type);
		      _this.validate(this);
		    };

		    if (debounce) {
		      validate = UI.utils.debounce(validate, debounce);
		    }

		    $.each(events, function(i, event) {
		      $element.on(event + '.validator.amui', fields, validate);
		    });
		  }

		  bindEvents(':input', options.customEvents);
		  bindEvents(options.keyboardFields, options.keyboardEvents);
		  bindEvents(options.pointerFields, options.pointerEvents);

		  if (options.textareaMaxlenthKeyup) {
		    bindEvents('textarea[maxlength]', 'keyup', 50);
		  }

		  if (options.activeKeyup) {
		    bindEvents('.am-active', 'keyup', 50);
		  }

		  /*if (options.errorMessage === 'tooltip') {
		    this.$tooltip = $('<div></div>', {
		      'class': 'am-validator-message',
		      id: UI.utils.generateGUID('am-validator-message')
		    });

		    $(document.body).append(this.$tooltip);
		  }*/
		};

		Validator.prototype.isValid = function(field) {
		  var $field = $(field);
		  var options = this.options;
		  // valid field not has been validated
		  if ($field.data('validity') === undefined || options.alwaysRevalidate) {
		    this.validate(field);
		  }

		  return $field.data('validity') && $field.data('validity').valid;
		};

		Validator.prototype.validate = function(field) {
		  var _this = this;
		  var $element = this.$element;
		  var options = this.options;
		  var $field = $(field);

		  // Validate equal, e.g. confirm password
		  var equalTo = $field.data('equalTo');
		  if (equalTo) {
		    $field.attr('pattern', '^' + $element.find(equalTo).val() + '$');
		  }

		  var pattern = $field.attr('pattern') || false;
		  var re = new RegExp(pattern);
		  var $radioGroup = null;
		  var $checkboxGroup = null;
		  // if checkbox, return `:chcked` length
		  // NOTE: checkbox and radio should have name attribute
		  var value = ($field.is('[type=checkbox]')) ?
		    ($checkboxGroup = $element.find('input[name="' + field.name + '"]')).
		      filter(':checked').length : ($field.is('[type=radio]') ?
		  ($radioGroup = this.$element.find('input[name="' + field.name + '"]')).
		    filter(':checked').length > 0 : $field.val());

		  // if checkbox, valid the first input of checkbox group
		  $field = ($checkboxGroup && $checkboxGroup.length) ?
		    $checkboxGroup.first() : $field;

		  var required = ($field.attr('required') !== undefined) &&
		    ($field.attr('required') !== 'false');
		  var maxLength = parseInt($field.attr('maxlength'), 10);
		  var minLength = parseInt($field.attr('minlength'), 10);
		  var min = Number($field.attr('min'));
		  var max = Number($field.attr('max'));
		  var validity = this.createValidity({field: $field[0], valid: true});

		  // Debug
		  if (options.debug && window.console) {
		    console.log('Validate: value -> [' + value + ', regex -> [' + re +
		    '], required -> ' + required);
		    console.log('Regex test: ' + re.test(value) + ', Pattern: ' + pattern);
		  }

		  // check value length
		  if (!isNaN(maxLength) && value.length > maxLength) {
		    validity.valid = false;
		    validity.tooLong = true;
		  }

		  if (!isNaN(minLength) && value.length < minLength) {
		    validity.valid = false;
		    validity.customError = 'tooShort';
		  }

		  // check minimum and maximum
		  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input
		  // TODO: 日期验证最小值和最大值 min/max
		  if (!isNaN(min) && Number(value) < min) {
		    validity.valid = false;
		    validity.rangeUnderflow = true;
		  }

		  if (!isNaN(max) && Number(value) > max) {
		    validity.valid = false;
		    validity.rangeOverflow = true;
		  }

		  // check required
		  if (required && !value) {
		    validity.valid = false;
		    validity.valueMissing = true;
		  } else if (($checkboxGroup || $field.is('select[multiple="multiple"]')) &&
		    value) {
		    // check checkboxes / multiple select with `minchecked`/`maxchecked` attr
		    // var $multipleField = $checkboxGroup ? $checkboxGroup.first() : $field;

		    // if is select[multiple="multiple"], return selected length
		    value = $checkboxGroup ? value : value.length;

		    // at least checked
		    var minChecked = parseInt($field.attr('minchecked'), 10);
		    // at most checked
		    var maxChecked = parseInt($field.attr('maxchecked'), 10);

		    if (!isNaN(minChecked) && value < minChecked) {
		      // console.log('At least [%d] items checked！', maxChecked);
		      validity.valid = false;
		      validity.customError = 'checkedUnderflow';
		    }

		    if (!isNaN(maxChecked) && value > maxChecked) {
		      // console.log('At most [%d] items checked！', maxChecked);
		      validity.valid = false;
		      validity.customError = 'checkedOverflow';
		    }
		  } else if (pattern && !re.test(value) && value) { // check pattern
		    validity.valid = false;
		    validity.patternMismatch = true;
		  }

		  var validateComplete = function(validity) {
		    this.markField(validity);

		    var event = $.Event('validated.field.validator.amui');
		    event.validity = validity;

		    $field.trigger(event).data('validity', validity);

		    // validate the radios/checkboxes with the same name
		    var $fields = $radioGroup || $checkboxGroup;
		    if ($fields) {
		      $fields.not($field).data('validity', validity).each(function() {
		        validity.field = this;
		        _this.markField(validity);
		      });
		    }

		    return validity;
		  };

		  // Run custom validate
		  // NOTE: async custom validate should return Deferred project
		  var customValidate;
		  (typeof options.validate === 'function') &&
		    (customValidate = options.validate.call(this, validity));

		  // Deferred
		  if (customValidate) {
		    var dfd = new $.Deferred();
		    $field.data('amui.dfdValidity', dfd.promise());
		    return $.when(customValidate).always(function(validity) {
		      dfd[validity.valid ? 'resolve' : 'reject'](validity);
		      validateComplete.call(_this, validity);
		    });
		  }

		  validateComplete.call(this, validity);
		};

		Validator.prototype.markField = function(validity) {
		  var options = this.options;
		  var flag = 'mark' + (validity.valid ? '' : 'In') + 'Valid';
		  options[flag] && options[flag].call(this, validity);
		};

		// check all fields in the form are valid
		Validator.prototype.validateForm = function() {
		  var _this = this;
		  var $element = this.$element;
		  var options = this.options;
		  var $allFields = $element.find(options.allFields).not(options.ignore);
		  var radioNames = [];
		  var valid = true;
		  var formValidity = [];
		  var $inValidFields = $([]);
		  var promises = [];
		  // for async validate
		  var async = false;

		  $element.trigger('validate.form.validator.amui');

		  // Filter radio with the same name and keep only one,
		  //   since they will be checked as a group by validate()
		  var $filteredFields = $allFields.filter(function(index) {
		    var name;
		    if (this.tagName === 'INPUT' && this.type === 'radio') {
		      name = this.name;
		      if (radioNames[name] === true) {
		        return false;
		      }
		      radioNames[name] = true;
		    }
		    return true;
		  });

		  $filteredFields.each(function() {
		    var $this = $(this);
		    var fieldValid = _this.isValid(this);
		    var fieldValidity = $this.data('validity');

		    valid = !!fieldValid && valid;
		    formValidity.push(fieldValidity);

		    if (!fieldValid) {
		      $inValidFields = $inValidFields.add($(this), $element);
		    }

		    // async validity
		    var promise = $this.data('amui.dfdValidity');

		    if (promise) {
		      promises.push(promise);
		      async = true;
		    } else {
		      // convert sync validity to Promise
		      var dfd = new $.Deferred();
		      promises.push(dfd.promise());
		      dfd[fieldValid ? 'resolve' : 'reject'](fieldValidity);
		    }
		  });

		  // NOTE: If there are async validity, the valid may be not exact result.
		  var validity = {
		    valid: valid,
		    $invalidFields: $inValidFields,
		    validity: formValidity,
		    promises: promises,
		    async: async
		  };

		  $element.trigger('validated.form.validator.amui', validity);

		  return validity;
		};

		Validator.prototype.isFormValid = function() {
		  var _this = this;
		  var formValidity = this.validateForm();
		  var triggerValid = function(type) {
		    _this.$element.trigger(type + '.validator.amui');
		  };

		  if (formValidity.async) {
		    var masterDfd = new $.Deferred();

		    $.when.apply(null, formValidity.promises).then(function() {
		      masterDfd.resolve();
		      triggerValid('valid');
		    }, function() {
		      masterDfd.reject();
		      triggerValid('invalid');
		    });

		    return masterDfd.promise();
		  } else {
		    if (!formValidity.valid) {
		      var $first = formValidity.$invalidFields.first();

		      // Selected plugin support
		      // @since 2.5
		      if ($first.is('[data-am-selected]')) {
		        $first = $first.next('.am-selected').find('.am-selected-btn');
		      }

		      $first.focus();
		      triggerValid('invalid');
		      return false;
		    }

		    triggerValid('valid');
		    return true;
		  }
		};

		// customErrors:
		//    1. tooShort
		//    2. checkedOverflow
		//    3. checkedUnderflow
		Validator.prototype.createValidity = function(validity) {
		  return $.extend({
		    customError: validity.customError || false,
		    patternMismatch: validity.patternMismatch || false,
		    rangeOverflow: validity.rangeOverflow || false, // higher than maximum
		    rangeUnderflow: validity.rangeUnderflow || false, // lower than  minimum
		    stepMismatch: validity.stepMismatch || false,
		    tooLong: validity.tooLong || false,
		    // value is not in the correct syntax
		    typeMismatch: validity.typeMismatch || false,
		    valid: validity.valid || true,
		    // Returns true if the element has no value but is a required field
		    valueMissing: validity.valueMissing || false
		  }, validity);
		};

		Validator.prototype.getValidationMessage = function(validity) {
		  var messages = Validator.validationMessages[this.options.locales];
		  var error;
		  var message;
		  var placeholder = '%s';
		  var $field = $(validity.field);

		  if ($field.is('[type="checkbox"]') || $field.is('[type="radio"]')) {
		    $field = this.$element.find('[name=' + $field.attr('name') + ']').first();
		  }

		  // get error name
		  $.each(validity, function(key, val) {
		    // skip `field` and `valid`
		    if (key === 'field' || key === 'valid') {
		      return key;
		    }

		    // Amaze UI custom error type
		    if (key === 'customError' && val) {
		      error = val;
		      messages = messages.customError;
		      return false;
		    }

		    // W3C specs error type
		    if (val === true) {
		      error = key;
		      return false;
		    }
		  });

		  message = messages[error] || undefined;

		  if (message && Validator.ERROR_MAP[error]) {
		    message = message.replace(placeholder,
		      $field.attr(Validator.ERROR_MAP[error]) || '规定的');
		  }

		  return message;
		};

		// remove valid mark
		Validator.prototype.removeMark = function() {
		  this.$element
		    .find('.am-form-success, .am-form-error, .' + this.options.inValidClass +
		      ', .' + this.options.validClass)
		    .removeClass([
		      'am-form-success',
		      'am-form-error',
		      this.options.inValidClass,
		      this.options.validClass
		    ].join(' '));
		};

		// @since 2.5
		Validator.prototype.destroy = function() {
		  this.removeMark();

		  // Remove data
		  // - Validator.prototype.init -> $element.data('amui.checked')
		  // - Validator.prototype.validateForm
		  // - Validator.prototype.isValid
		  this.$element.removeData('amui.validator amui.checked')
		    .off('.validator.amui')
		    .find(this.options.allFields).removeData('validity amui.dfdValidity');
		};

		UI.plugin('validator', Validator);

		// init code
		UI.ready(function(context) {
		  $('[data-am-validator]', context).validator();
		});

		module.exports = Validator;


	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var UI = __webpack_require__(2);

		var cookie = {
		  get: function(name) {
		    var cookieName = encodeURIComponent(name) + '=';
		    var cookieStart = document.cookie.indexOf(cookieName);
		    var cookieValue = null;
		    var cookieEnd;

		    if (cookieStart > -1) {
		      cookieEnd = document.cookie.indexOf(';', cookieStart);
		      if (cookieEnd == -1) {
		        cookieEnd = document.cookie.length;
		      }
		      cookieValue = decodeURIComponent(document.cookie.substring(cookieStart +
		      cookieName.length, cookieEnd));
		    }

		    return cookieValue;
		  },

		  set: function(name, value, expires, path, domain, secure) {
		    var cookieText = encodeURIComponent(name) + '=' +
		      encodeURIComponent(value);

		    if (expires instanceof Date) {
		      cookieText += '; expires=' + expires.toUTCString();
		    }

		    if (path) {
		      cookieText += '; path=' + path;
		    }

		    if (domain) {
		      cookieText += '; domain=' + domain;
		    }

		    if (secure) {
		      cookieText += '; secure';
		    }

		    document.cookie = cookieText;
		  },

		  unset: function(name, path, domain, secure) {
		    this.set(name, '', new Date(0), path, domain, secure);
		  }
		};

		UI.utils = UI.utils || {};

		module.exports = UI.utils.cookie = cookie;


	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var UI = __webpack_require__(2);
		var screenfull = (function() {
		  var keyboardAllowed = typeof Element !== 'undefined' &&
		    'ALLOW_KEYBOARD_INPUT' in Element;

		  var fn = (function() {
		    var val;
		    var valLength;

		    var fnMap = [
		      [
		        'requestFullscreen',
		        'exitFullscreen',
		        'fullscreenElement',
		        'fullscreenEnabled',
		        'fullscreenchange',
		        'fullscreenerror'
		      ],
		      // new WebKit
		      [
		        'webkitRequestFullscreen',
		        'webkitExitFullscreen',
		        'webkitFullscreenElement',
		        'webkitFullscreenEnabled',
		        'webkitfullscreenchange',
		        'webkitfullscreenerror'

		      ],
		      // old WebKit (Safari 5.1)
		      [
		        'webkitRequestFullScreen',
		        'webkitCancelFullScreen',
		        'webkitCurrentFullScreenElement',
		        'webkitCancelFullScreen',
		        'webkitfullscreenchange',
		        'webkitfullscreenerror'

		      ],
		      [
		        'mozRequestFullScreen',
		        'mozCancelFullScreen',
		        'mozFullScreenElement',
		        'mozFullScreenEnabled',
		        'mozfullscreenchange',
		        'mozfullscreenerror'
		      ],
		      [
		        'msRequestFullscreen',
		        'msExitFullscreen',
		        'msFullscreenElement',
		        'msFullscreenEnabled',
		        'MSFullscreenChange',
		        'MSFullscreenError'
		      ]
		    ];

		    var i = 0;
		    var l = fnMap.length;
		    var ret = {};

		    for (; i < l; i++) {
		      val = fnMap[i];
		      if (val && val[1] in document) {
		        for (i = 0, valLength = val.length; i < valLength; i++) {
		          ret[fnMap[0][i]] = val[i];
		        }
		        return ret;
		      }
		    }

		    return false;
		  })();

		  var screenfull = {
		    request: function(elem) {
		      var request = fn.requestFullscreen;

		      elem = elem || document.documentElement;

		      // Work around Safari 5.1 bug: reports support for
		      // keyboard in fullscreen even though it doesn't.
		      // Browser sniffing, since the alternative with
		      // setTimeout is even worse.
		      if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) {
		        elem[request]();
		      } else {
		        elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
		      }
		    },
		    exit: function() {
		      document[fn.exitFullscreen]();
		    },
		    toggle: function(elem) {
		      if (this.isFullscreen) {
		        this.exit();
		      } else {
		        this.request(elem);
		      }
		    },
		    raw: fn
		  };

		  if (!fn) {
		    return false;
		  }

		  Object.defineProperties(screenfull, {
		    isFullscreen: {
		      get: function() {
		        return !!document[fn.fullscreenElement];
		      }
		    },
		    element: {
		      enumerable: true,
		      get: function() {
		        return document[fn.fullscreenElement];
		      }
		    },
		    enabled: {
		      enumerable: true,
		      get: function() {
		        // Coerce to boolean in case of old WebKit
		        return !!document[fn.fullscreenEnabled];
		      }
		    }
		  });

		  screenfull.VERSION = '2.0.0';

		  return screenfull;
		})();

		module.exports = UI.fullscreen = screenfull;


	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		UI.support.geolocation = window.navigator && window.navigator.geolocation;

		var geo = UI.support.geolocation;

		var Geolocation = function(options) {
		  this.options = options || {};
		};

		Geolocation.MESSAGES = {
		  unsupportedBrowser: 'Browser does not support location services',
		  permissionDenied: 'You have rejected access to your location',
		  positionUnavailable: 'Unable to determine your location',
		  timeout: 'Service timeout has been reached'
		};

		Geolocation.ERROR_CODE = {
		  0: 'unsupportedBrowser',
		  1: 'permissionDenied',
		  2: 'positionUnavailable',
		  3: 'timeout'
		};

		Geolocation.prototype.get = function(options) {
		  var _this = this;
		  options = $.extend({}, this.options, options);
		  var deferred = new $.Deferred();

		  if (geo) {
		    this.watchID = geo.getCurrentPosition(function(position) {
		      deferred.resolve.call(_this, position);
		    }, function(error) {
		      deferred.reject(Geolocation.MESSAGES[Geolocation.ERROR_CODE[error.code]]);
		    }, options);
		  } else {
		    deferred.reject(Geolocation.MESSAGES.unsupportedBrowser);
		  }

		  return deferred.promise();
		};

		Geolocation.prototype.watch = function(options) {
		  if (!geo) {
		    return;
		  }

		  options = $.extend({}, this.options, options);

		  if (!$.isFunction(options.done)) {
		    return;
		  }

		  this.clearWatch();

		  var fail = $.isFunction(options.fail) ? options.fail : null;

		  this.watchID = geo.watchPosition(options.done, fail, options);

		  return this.watchID;
		};

		Geolocation.prototype.clearWatch = function() {
		  if (!geo || !this.watchID) {
		    return;
		  }
		  geo.clearWatch(this.watchID);
		  this.watchID = null;
		};

		module.exports = UI.Geolocation = Geolocation;


	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var UI = __webpack_require__(2);

		/**
		 * store.js
		 * @via https://github.com/marcuswestin/store.js
		 * @license https://github.com/marcuswestin/store.js/blob/master/LICENSE
		 */

		var store = {};
		var win = window;
		var localStorageName = 'localStorage';
		var storage;

		store.disabled = false;

		store.version = '1.3.17';

		store.set = function(key, value) {
		};

		store.get = function(key, defaultVal) {
		};

		store.has = function(key) {
		  return store.get(key) !== undefined;
		};

		store.remove = function(key) {
		};

		store.clear = function() {
		};

		store.transact = function(key, defaultVal, transactionFn) {
		  if (transactionFn == null) {
		    transactionFn = defaultVal;
		    defaultVal = null;
		  }

		  if (defaultVal == null) {
		    defaultVal = {};
		  }

		  var val = store.get(key, defaultVal);
		  transactionFn(val);
		  store.set(key, val);
		};

		store.getAll = function() {
		};

		store.forEach = function() {
		};

		store.serialize = function(value) {
		  return JSON.stringify(value);
		};

		store.deserialize = function(value) {
		  if (typeof value != 'string') {
		    return undefined;
		  }

		  try {
		    return JSON.parse(value);
		  } catch (e) {
		    return value || undefined;
		  }
		};

		// Functions to encapsulate questionable FireFox 3.6.13 behavior
		// when about.config::dom.storage.enabled === false
		// See https://github.com/marcuswestin/store.js/issues#issue/13
		function isLocalStorageNameSupported() {
		  try {
		    return (localStorageName in win && win[localStorageName]);
		  }
		  catch (err) {
		    return false;
		  }
		}

		if (isLocalStorageNameSupported()) {
		  storage = win[localStorageName];
		  store.set = function(key, val) {
		    if (val === undefined) {
		      return store.remove(key);
		    }
		    storage.setItem(key, store.serialize(val));
		    return val;
		  };

		  store.get = function(key, defaultVal) {
		    var val = store.deserialize(storage.getItem(key));
		    return (val === undefined ? defaultVal : val);
		  };

		  store.remove = function(key) {
		    storage.removeItem(key);
		  };

		  store.clear = function() {
		    storage.clear();
		  };

		  store.getAll = function() {
		    var ret = {};
		    store.forEach(function(key, val) {
		      ret[key] = val;
		    });
		    return ret;
		  };

		  store.forEach = function(callback) {
		    for (var i = 0; i < storage.length; i++) {
		      var key = storage.key(i);
		      callback(key, store.get(key));
		    }
		  };
		}

		try {
		  var testKey = '__storeJs__';
		  store.set(testKey, testKey);
		  if (store.get(testKey) != testKey) {
		    store.disabled = true;
		  }
		  store.remove(testKey);
		} catch (e) {
		  store.disabled = true;
		}

		store.enabled = !store.disabled;

		module.exports = UI.store = store;


	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		__webpack_require__(7);

		function accordionInit() {
		  var $accordion = $('[data-am-widget="accordion"]');
		  var selector = {
		    item: '.am-accordion-item',
		    title: '.am-accordion-title',
		    body: '.am-accordion-bd',
		    disabled: '.am-disabled'
		  };

		  $accordion.each(function(i, item) {
		    var options = UI.utils.parseOptions($(item).attr('data-am-accordion'));
		    var $title = $(item).find(selector.title);

		    $title.on('click.accordion.amui', function() {
		      var $collapse = $(this).next(selector.body);
		      var $parent = $(this).parent(selector.item);
		      var data = $collapse.data('amui.collapse');

		      if ($parent.is(selector.disabled)) {
		        return;
		      }

		      $parent.toggleClass('am-active');

		      if (!data) {
		        $collapse.collapse();
		      } else {
		        $collapse.collapse('toggle');
		      }

		      !options.multiple &&
		      $(item).children('.am-active').
		        not($parent).not(selector.disabled).removeClass('am-active').
		        find(selector.body + '.am-in').collapse('close');
		    });
		  });
		}

		// Init on DOM ready
		$(accordionInit);

		module.exports = UI.accordion = {
		  VERSION: '2.1.0',
		  init: accordionInit
		};


	/***/ },
	/* 36 */
	/***/ function(module, exports) {

		'use strict';

		module.exports = {
		  VERSION: '2.0.1'
		};


	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		function duoshuoInit() {
		  var $dsThread = $('.ds-thread');
		  var dsShortName = $dsThread.parent('[data-am-widget="duoshuo"]').
		    attr('data-ds-short-name');
		  var dsSrc = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
		    '//static.duoshuo.com/embed.js';

		  if (!$dsThread.length || !dsShortName) {
		    return;
		  }

		  window.duoshuoQuery = {
		    short_name: dsShortName
		  };

		  // 已经有多说脚本
		  if ($('script[src="' + dsSrc + '"]').length) {
		    return;
		  }

		  var $dsJS = $('<script>', {
		    async: true,
		    type: 'text/javascript',
		    src: dsSrc,
		    charset: 'utf-8'
		  });

		  $('body').append($dsJS);
		}

		$(window).on('load', duoshuoInit);

		module.exports = UI.duoshuo = {
		  VERSION: '2.0.1',
		  init: duoshuoInit
		};


	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		__webpack_require__(20);

		/**
		 * Is Images zoomable
		 * @return {Boolean}
		 */
		$.isImgZoomAble = function(element) {
		  var t = new Image();
		  t.src = element.src;

		  var zoomAble = ($(element).width() < t.width);

		  if (zoomAble) {
		    $(element).closest('.am-figure').addClass('am-figure-zoomable');
		  }

		  return zoomAble;
		};

		function figureInit() {
		  $('.am-figure').each(function(i, item) {
		    var options = UI.utils.parseOptions($(item).attr('data-am-figure'));
		    var $item = $(item);
		    var data;

		    if (options.pureview) {
		      if (options.pureview === 'auto') {
		        var zoomAble = $.isImgZoomAble($item.find('img')[0]);
		        zoomAble && $item.pureview();
		      } else {
		        $item.addClass('am-figure-zoomable').pureview();
		      }
		    }

		    data = $item.data('amui.pureview');

		    if (data) {
		      $item.on('click', ':not(img)', function() {
		        data.open(0);
		      });
		    }
		  });
		}

		$(window).on('load', figureInit);

		module.exports = UI.figure = {
		  VERSION: '2.0.3',
		  init: figureInit
		};


	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		__webpack_require__(15);
		var addToHS = __webpack_require__(4);
		var cookie = __webpack_require__(31);

		function footerInit() {
		  // modal mode
		  $('.am-footer-ysp').on('click', function() {
		    $('#am-footer-modal').modal();
		  });

		  var options = UI.utils.parseOptions($('.am-footer').data('amFooter'));
		  options.addToHS && addToHS();

		  // switch mode
		  // switch to desktop
		  $('[data-rel="desktop"]').on('click', function(e) {
		    e.preventDefault();
		    if (window.AMPlatform) { // front end
		      window.AMPlatform.util.goDesktop();
		    } else { // back end
		      cookie.set('allmobilize', 'desktop', '', '/');
		      window.location = window.location;
		    }
		  });
		}

		$(footerInit);

		module.exports = UI.footer = {
		  VERSION: '3.1.2',
		  init: footerInit
		};


	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		__webpack_require__(20);

		function galleryInit() {
		  var $gallery = $('[data-am-widget="gallery"]');

		  $gallery.each(function() {
		    var options = UI.utils.parseOptions($(this).attr('data-am-gallery'));

		    if (options.pureview) {
		      (typeof options.pureview === 'object') ?
		        $(this).pureview(options.pureview) : $(this).pureview();
		    }
		  });
		}

		$(galleryInit);

		module.exports = UI.gallery = {
		  VERSION: '3.0.0',
		  init: galleryInit
		};


	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		__webpack_require__(23);

		function goTopInit() {
		  var $goTop = $('[data-am-widget="gotop"]');
		  var $fixed = $goTop.filter('.am-gotop-fixed');
		  var $win = $(window);

		  if ($goTop.data('init')) {
		    return;
		  }

		  $goTop.find('a').on('click', function(e) {
		    e.preventDefault();
		    $win.smoothScroll();
		  });

		  function checkPosition() {
		    $fixed[($win.scrollTop() > 50 ? 'add' : 'remove') + 'Class']('am-active');
		  }

		  checkPosition();

		  $win.on('scroll.gotop.amui', UI.utils.debounce(checkPosition, 100));

		  $goTop.data('init', true);
		}

		$(goTopInit);

		module.exports = UI.gotop = {
		  VERSION: '4.0.2',
		  init: goTopInit
		};


	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		function headerInit() {
		  $('[data-am-widget="header"]').each(function() {
		    if ($(this).hasClass('am-header-fixed')) {
		      $('body').addClass('am-with-fixed-header');
		      return false;
		    }
		  });
		}

		$(headerInit);

		module.exports = UI.header = {
		  VERSION: '2.0.0',
		  init: headerInit
		};


	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var UI = __webpack_require__(2);

		module.exports = UI.intro = {
		  VERSION: '4.0.2',
		  init: function() {}
		};


	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var UI = __webpack_require__(2);

		module.exports = UI.listNews = {
		  VERSION: '4.0.0',
		  init: function() {}
		};


	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		/* jshint strict: false, maxlen: 200 */
		/* global BMap */

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		function addMapApi(callback) {
		  var $mapApi0 = $('<script />', {
		    id: 'am-map-api-0'
		  });

		  $('body').append($mapApi0);

		  $mapApi0.on('load', function() {
		    console.log('load');
		    var $mapApi1 = $('<script/>', {
		      id: 'am-map-api-1'
		    });

		    $('body').append($mapApi1);

		    $mapApi1.on('load', function() {
		      var script = document.createElement('script');
		      script.textContent = '(' + callback.toString() + ')();';
		      $('body')[0].appendChild(script);
		    }).attr('src', 'http://api.map.baidu.com/getscript' +
		      '?type=quick&file=feature' +
		      '&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002');
		  }).attr('src', 'http://api.map.baidu.com/getscript' +
		  '?type=quick&file=api&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002');

		  // jQuery 中 `load` 事件触发有问题，动态设置 src 属性才会触发 `load` 事件
		  // $mapApi0 = $('<script />', {src: 'xxx'}); 这样的写法在 Zepto.js 中则没有问题
		}

		function addBdMap() {
		  // 如果使用 $ 选择符，minify 以后会报错: $ is undefined
		  // 即使传入 $ 也无效，改为使用原生方法
		  // 这个函数作为 callback 会插入到 body 以后才执行，应该是 $ 引用错误导致
		  var content = document.querySelector('.am-map');
		  var defaultLng = 116.331398; // 经度默认值
		  var defaultLat = 39.897445;  // 纬度默认值
		  var name = content.getAttribute('data-name');
		  var address = content.getAttribute('data-address');
		  var lng = content.getAttribute('data-longitude') || defaultLng;
		  var lat = content.getAttribute('data-latitude') || defaultLat;
		  var setZoom = content.getAttribute('data-setZoom') || 17;
		  var icon = content.getAttribute('data-icon');

		  var map = new BMap.Map('bd-map');

		  // 实例化一个地理坐标点
		  var point = new BMap.Point(lng, lat);

		  // 设初始化地图, options: 3-18
		  map.centerAndZoom(point, setZoom);

		  // 添加地图缩放控件
		  if (content.getAttribute('data-zoomControl')) {
		    map.addControl(new BMap.ZoomControl());
		  }

		  // 添加比例尺控件
		  if (content.getAttribute('data-scaleControl')) {
		    map.addControl(new BMap.ScaleControl());
		  }

		  // 创建标准与自定义 icon
		  var marker = new BMap.Marker(point);
		  if (icon) {
		    marker.setIcon(new BMap.Icon(icon, new BMap.Size(40, 40)));
		  }

		  var opts = {
		    width: 200,     // 信息窗口宽度
		    // height: 'auto',     // 信息窗口高度
		    title: name // 信息窗口标题
		  };

		  // 创建信息窗口对象
		  var infoWindow = new BMap.InfoWindow('地址：' + address, opts);

		  // 创建地址解析器实例
		  var myGeo = new BMap.Geocoder();

		  // 判断有没有使用经纬度
		  if (lng == defaultLng && lat == defaultLat) {
		    // 使用地址反解析来设置地图
		    // 将地址解析结果显示在地图上,并调整地图视野
		    myGeo.getPoint(address, function(point) {
		      if (point) {
		        map.centerAndZoom(point, setZoom);
		        marker.setPosition(point);
		        map.addOverlay(marker);
		        map.openInfoWindow(infoWindow, point); // 开启信息窗口
		      }
		    }, '');

		  } else {
		    // 使用经纬度来设置地图
		    myGeo.getLocation(point, function(result) {
		      map.centerAndZoom(point, setZoom);
		      marker.setPosition(point);
		      map.addOverlay(marker);
		      if (address) {
		        map.openInfoWindow(infoWindow, point); // 开启信息窗口
		      } else {
		        map.openInfoWindow(new BMap.InfoWindow(address, opts), point); // 开启信息窗口
		      }
		    });
		  }
		}

		var mapInit = function() {
		  $('.am-map').length && addMapApi(addBdMap);
		};

		$(mapInit);

		module.exports = UI.map = {
		  VERSION: '2.0.2',
		  init: mapInit
		};


	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		function mechatInit() {
		  if (!$('#mechat').length) {
		    return;
		  }

		  var $mechat = $('[data-am-widget="mechat"]');
		  var unitid = $mechat.data('am-mechat-unitid');
		  var $mechatData = $('<script>', {
		    charset: 'utf-8',
		    src: 'http://mechatim.com/js/unit/button.js?id=' + unitid
		  });

		  $('body').append($mechatData);
		}

		// Lazy load
		$(window).on('load', mechatInit);

		module.exports = UI.mechat = {
		  VERSION: '2.0.1',
		  init: mechatInit
		};


	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		var IScroll = __webpack_require__(14);
		__webpack_require__(16);
		__webpack_require__(7);

		var menuInit = function() {
		  var $menus = $('[data-am-widget="menu"]');

		  $menus.find('.am-menu-nav .am-parent > a').on('click', function(e) {
		    e.preventDefault();
		    var $clicked = $(this);
		    var $parent = $clicked.parent();
		    var $subMenu = $clicked.next('.am-menu-sub');

		    $parent.toggleClass('am-open');
		    $subMenu.collapse('toggle');
		    $parent.siblings('.am-parent').removeClass('am-open')
		      .children('.am-menu-sub.am-in').collapse('close');
		  });

		  // Dropdown/slideDown menu
		  $menus.
		    filter('[data-am-menu-collapse]').
		    find('> .am-menu-toggle').
		    on('click', function(e) {
		      e.preventDefault();
		      var $this = $(this);
		      var $nav = $this.next('.am-menu-nav');

		      $this.toggleClass('am-active');

		      $nav.collapse('toggle');
		    });

		  // OffCanvas menu
		  $menus.
		    filter('[data-am-menu-offcanvas]').
		    find('> .am-menu-toggle').
		    on('click', function(e) {
		      e.preventDefault();
		      var $this = $(this);
		      var $nav = $this.next('.am-offcanvas');

		      $this.toggleClass('am-active');

		      $nav.offCanvas('open');
		    });

		  // Close offCanvas when link clicked
		  var autoCloseOffCanvas = '.am-offcanvas[data-dismiss-on="click"]';
		  var $autoCloseOffCanvas = $(autoCloseOffCanvas);

		  $autoCloseOffCanvas.find('a').not('.am-parent>a').on('click', function(e) {
		    $(this).parents(autoCloseOffCanvas).offCanvas('close');
		  });

		  // one theme
		  $menus.filter('.am-menu-one').each(function(index) {
		    var $this = $(this);
		    var $wrap = $('<div class="am-menu-nav-sub-wrap"></div>');
		    var allWidth = 0;
		    var $nav = $this.find('.am-menu-nav');
		    var $navTopItem = $nav.children('li');
		    var prevIndex;

		    $navTopItem.filter('.am-parent').each(function(index) {
		      $(this).attr('data-rel', '#am-menu-sub-' + index);
		      $(this).
		        find('.am-menu-sub').
		        attr('id', 'am-menu-sub-' + index).
		        appendTo($wrap);
		    });

		    $this.append($wrap);

		    $nav.wrap('<div class="am-menu-nav-wrap" id="am-menu-' + index + '">');

		    // $navTopItem.eq(0).addClass('am-active');

		    // 计算出所有 li 宽度
		    $navTopItem.each(function(i) {
		      allWidth += parseFloat($(this).css('width'));
		    });

		    $nav.width(allWidth);

		    var menuScroll = new IScroll('#am-menu-' + index, {
		      eventPassthrough: true,
		      scrollX: true,
		      scrollY: false,
		      preventDefault: false
		    });

		    $navTopItem.on('click', function() {
		      var $clicked = $(this);
		      $clicked.addClass('am-active').siblings().removeClass('am-active');

		      $wrap.find('.am-menu-sub.am-in').collapse('close');

		      if ($clicked.is('.am-parent')) {
		        !$clicked.hasClass('.am-open') &&
		        $wrap.find($clicked.attr('data-rel')).collapse('open');
		      } else {
		        $clicked.siblings().removeClass('am-open');
		      }

		      // 第一次调用，没有prevIndex
		      if (prevIndex === undefined) {
		        prevIndex = $(this).index() ? 0 : 1;
		      }

		      // 判断方向
		      var dir = $(this).index() > prevIndex;
		      var target = $(this)[dir ? 'next' : 'prev']();

		      // 点击的按钮，显示一半
		      var offset = target.offset() || $(this).offset();
		      var within = $this.offset();

		      // 父类左边距
		      var listOffset;
		      var parentLeft = parseInt($this.css('padding-left'));

		      if (dir ? offset.left + offset.width > within.left + within.width :
		        offset.left < within.left) {
		        listOffset = $nav.offset();
		        menuScroll.scrollTo(dir ?
		        within.width - offset.left + listOffset.left -
		        offset.width - parentLeft :
		        listOffset.left - offset.left, 0, 400);
		      }

		      prevIndex = $(this).index();

		    });

		    $this.on('touchmove', function(event) {
		      event.preventDefault();
		    });
		  });
		};

		$(menuInit);

		module.exports = UI.menu = {
		  VERSION: '4.0.3',
		  init: menuInit
		};


	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		var share = __webpack_require__(25);
		var QRCode = __webpack_require__(26);
		__webpack_require__(15);

		function navbarInit() {
		  var $navBar = $('[data-am-widget="navbar"]');

		  if (!$navBar.length) {
		    return;
		  }

		  var $win = $(window);
		  var $body = $('body');
		  var $navBarNav = $navBar.find('.am-navbar-nav');
		  var $navItems = $navBar.find('li');
		  var navItemsCounter = $navItems.length;
		  var configItems = $navBarNav.attr('class') &&
		    parseInt($navBarNav.attr('class').
		      match(/am-avg-sm-(\d+)/)[1]) || 3;
		  var navMinWidth = 60; // 每个 li 最小宽度
		  var offsetWidth = 16;
		  var $share = $navItems.filter('[data-am-navbar-share]');
		  var $qrcode = $navItems.filter('[data-am-navbar-qrcode]');
		  var activeStatus = 'am-active';
		  var $moreActions = $('<ul class="am-navbar-actions"></ul>', {
		    id: UI.utils.generateGUID('am-navbar-actions')
		  });
		  var $moreLink = $('<li class="am-navbar-labels am-navbar-more">' +
		  '<a href="javascript: void(0);">' +
		  '<span class="am-icon-angle-up"></span>' +
		  '<span class="am-navbar-label">更多</span></a></li>');

		  // 如果有 Fix 的工具栏则设置 body 的 padding-bottom
		  if ($navBar.css('position') == 'fixed') {
		    $body.addClass('am-with-fixed-navbar');
		  }

		  if ($qrcode.length) {
		    var qrId = 'am-navbar-qrcode';
		    $qrModal = $('#' + qrId);

		    if (!$qrModal.length) {
		      var qrImg = $qrcode.attr('data-am-navbar-qrcode');
		      var $qrModal = $('<div class="am-modal am-modal-no-btn" id="">' +
		      '<div class="am-modal-dialog">' +
		      '<div class="am-modal-bd"></div></div>' +
		      '</div>', {
		        id: qrId
		      });
		      var $qrContainer = $qrModal.find('.am-modal-bd');

		      // 判断上传自定义的二维码没有，否则生成二维码
		      if (qrImg) {
		        $qrContainer.html('<img src="' + qrImg + '"/>');
		      } else {
		        var qrnode = new QRCode({
		          render: 'canvas',
		          correctLevel: 0,
		          text: window.location.href,
		          width: 200,
		          height: 200,
		          background: '#fff',
		          foreground: '#000'
		        });
		        $qrContainer.html(qrnode);
		      }

		      $body.append($qrModal);
		    }

		    $qrcode.on('click', function(e) {
		      e.preventDefault();
		      $qrModal.modal();
		    });
		  }

		  if (navItemsCounter > configItems && navItemsCounter > calcSuiteItems()) {
		    initActions();
		  }

		  // console.log('NavItems: %d, config: %d, best: %d',
		  //    navItemsCounter, configItems, calcSuiteItems());

		  function initActions() {
		    $navBarNav.append($moreLink);

		    $navBarNav.
		      find('li').
		      not('.am-navbar-more').
		      slice(calcSuiteItems() - 1).
		      appendTo($moreActions);

		    // Append more actions
		    $navBar.append($moreActions);
		  }

		  function checkNavBarItems() {
		    if (calcSuiteItems() >= navItemsCounter) {
		      // 显示所有链接，隐藏 more
		      $moreLink.hide();
		      $moreActions.find('li').insertBefore($moreLink);
		      return;
		    }

		    !$navBar.find('.am-navbar-actions').length && initActions();

		    $moreLink.show();

		    if ($navBarNav.find('li').length < calcSuiteItems()) {
		      $moreActions.find('li').
		        slice(0, calcSuiteItems() - $navBarNav.find('li').length).
		        insertBefore($moreLink);
		    } else if ($navBarNav.find('li').length > calcSuiteItems()) {
		      if ($moreActions.find('li').length) {
		        $navBarNav.find('li').not($moreLink).slice(calcSuiteItems() - 1).
		          insertBefore($moreActions.find('li').first());
		      } else {
		        $navBarNav.find('li').not($moreLink).slice(calcSuiteItems() - 1).
		          appendTo($moreActions);
		      }
		    }
		  }

		  /**
		   * 计算最适合显示的条目个数
		   * @returns {number}
		   */
		  function calcSuiteItems() {
		    return Math.floor(($win.width() - offsetWidth) / navMinWidth);
		  }

		  $navBar.on('click.navbar.amui', '.am-navbar-more', function(e) {
		    e.preventDefault();

		    $moreLink[$moreActions.hasClass(activeStatus) ?
		      'removeClass' : 'addClass'](activeStatus);

		    $moreActions.toggleClass(activeStatus);
		  });

		  if ($share.length) {
		    $share.on('click.navbar.amui', function(e) {
		      e.preventDefault();
		      share.toggle();
		    });
		  }

		  $win.on('resize.navbar.amui orientationchange.navbar.amui',
		    UI.utils.debounce(checkNavBarItems, 150));
		}

		// DOMContent ready
		$(navbarInit);

		module.exports = UI.navbar = {
		  VERSION: '2.0.2',
		  init: navbarInit
		};


	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var UI = __webpack_require__(2);

		module.exports = UI.pagination = {
		  VERSION: '3.0.1'
		};


	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		var IScroll = __webpack_require__(14);
		__webpack_require__(20);

		/**
		 * 表格滚动
		 * @param {number} index ID 标识，多个 paragraph 里面多个 table
		 */
		$.fn.scrollTable = function(index) {
		  var $this = $(this);
		  var $parent;

		  $this.wrap('<div class="am-paragraph-table-container" ' +
		  'id="am-paragraph-table-' + index + '">' +
		  '<div class="am-paragraph-table-scroller"></div></div>');

		  $parent = $this.parent();
		  $parent.width($this.width());
		  $parent.height($this.height());

		  new IScroll('#am-paragraph-table-' + index, {
		    eventPassthrough: true,
		    scrollX: true,
		    scrollY: false,
		    preventDefault: false
		  });
		};

		function paragraphInit() {
		  var $paragraph = $('[data-am-widget="paragraph"]');

		  $paragraph.each(function(index) {
		    var $this = $(this);
		    var options = UI.utils.parseOptions($this.attr('data-am-paragraph'));
		    var $index = index;

		    if (options.pureview) {
		      $this.pureview();
		    }

		    if (options.tableScrollable) {
		      $this.find('table').each(function(index) {
		        if ($(this).width() > $(window).width()) {
		          $(this).scrollTable($index + '-' + index);
		        }
		      });
		    }
		  });
		}

		$(window).on('load', paragraphInit);

		module.exports = UI.paragraph = {
		  VERSION: '2.0.1',
		  init: paragraphInit
		};


	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		__webpack_require__(11);

		function sliderInit() {
		  var $sliders = $('[data-am-widget="slider"]');
		  $sliders.not('.am-slider-manual').each(function(i, item) {
		    var options = UI.utils.parseOptions($(item).attr('data-am-slider'));
		    $(item).flexslider(options);
		  });
		}

		$(sliderInit);

		module.exports = UI.slider = {
		  VERSION: '3.0.1',
		  init: sliderInit
		};


	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);
		__webpack_require__(28);

		function tabsInit() {
		  $('[data-am-widget="tabs"]').each(function() {
		    var options = $(this).data('amTabsNoswipe') ? {noSwipe: 1} : {};
		    $(this).tabs(options);
		  });
		}

		$(tabsInit);

		module.exports = UI.tab = {
		  VERSION: '4.0.1',
		  init: tabsInit
		};


	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var UI = __webpack_require__(2);

		module.exports = UI.titlebar = {
		  VERSION: '4.0.1'
		};


	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var $ = __webpack_require__(1);
		var UI = __webpack_require__(2);

		var isWeChat = window.navigator.userAgent.indexOf('MicroMessenger') > -1;

		/* global wx,alert */

		function appendWeChatSDK(callback) {
		  var $weChatSDK = $('<script/>', {
		    id: 'wechat-sdk'
		  });

		  $('body').append($weChatSDK);

		  $weChatSDK.on('load', function() {
		    callback && callback();
		  }).attr('src', 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js');
		}

		function payHandler() {
		  var $paymentBtn = $('[data-am-widget="wechatpay"]');

		  if (!isWeChat) {
		    $paymentBtn.hide();
		    return false;
		  }

		  $paymentBtn.on('click', '.am-wechatpay-btn', function(e) {
		    e.preventDefault();
		    var options = UI.utils.parseOptions($(this).parent().data('wechatPay'));
		    // console.log(options);
		    // alert('pay button clicked');
		    if (!window.wx) {
		      alert('没有微信 JS SDK');
		      return;
		    }

		    wx.checkJsApi({
		      jsApiList: ['chooseWXPay'],
		      success: function(res) {
		        if (res.checkResult.chooseWXPay) {
		          wx.chooseWXPay(options);
		        } else {
		          alert('微信版本不支持支付接口或没有开启！');
		        }
		      },
		      fail: function() {
		        alert('调用 checkJsApi 接口时发生错误!');
		      }
		    });
		  });
		}

		var payInit = payHandler;

		// Init on DOM ready
		$(payInit);

		module.exports = UI.pay = {
		  VERSION: '1.0.0',
		  init: payInit
		};


	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.0
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-08T20:02Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {

			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					// Support: IE<11
					// option.value not trimmed (#14858)
					return jQuery.trim( elem.value );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
								jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the compat branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8+
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		context = context || ( support.createHTMLDocument ?
			document.implementation.createHTMLDocument( "" ) :
			document );

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( self, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				// Subtract offsetParent scroll positions
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ) -
					offsetParent.scrollTop();
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true ) -
					offsetParent.scrollLeft();
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"am-g\">\n  <div class=\"am-u-sm-12 am-u-sm-centered\" style=\"padding-left: 0!important;padding-right: 0!important;\">\n    <div class=\"am-slider am-slider-default\" data-am-flexslider id=\"slider\">\n      <ul class=\"am-slides\">\n        <li><img src=\"http://7xpour.com1.z0.glb.clouddn.com/banner4.jpg\" class=\"am-img-responsive\" /></li>\n        <li><img src=\"http://7xpour.com1.z0.glb.clouddn.com/banner2.jpg\" class=\"am-img-responsive\" /></li>\n        <li><img src=\"http://7xpour.com1.z0.glb.clouddn.com/banner1.png\" class=\"am-img-responsive\" /></li>\n        <li><img src=\"http://7xpour.com1.z0.glb.clouddn.com/banner3.jpg\" class=\"am-img-responsive\" /></li>\n      </ul>\n      <ul class=\"am-direction-nav\"></ul>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(29)
	__vue_script__ = __webpack_require__(31)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/news.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(48)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? (module.exports.options || {}) : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/lxxyx/桌面/NcuSpm/public/app/components/news.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./news.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./news.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n[v-cloak] {\n  display: none;\n}\n", ""]);

	// exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var FocusNews = __webpack_require__(32);
	var Academic = __webpack_require__(36);
	var StudentWork = __webpack_require__(40);
	var SchoolNotice = __webpack_require__(44);
	exports.default = {
	  components: {
	    focusnews: FocusNews,
	    academic: Academic,
	    studentwork: StudentWork,
	    schoolnotice: SchoolNotice
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(33)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/news/focusNews.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(34)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? (module.exports.options || {}) : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/lxxyx/桌面/NcuSpm/public/app/components/news/focusNews.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var $ = __webpack_require__(5);
	exports.default = {
		data: function data() {
			return {
				focusNews: []
			};
		},
		created: function created() {
			var that = this;
			$.ajax({
				type: "get",
				url: "/api/focusNews",
				dataType: 'json',
				success: function success(data) {
					that.focusNews = data;
				}
			});
		}
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"am-u-sm-12 am-u-md-6\" style='padding-top: 2rem;'>\n\t<img src=\"" + __webpack_require__(35) + "\" class=\"am-center am-img-responsive\" />\n\t<!-- 焦点新闻 -->\n\t<div class=\"am-u-sm-12 am-u-md-12 am-u-md-centered\" id=\"focusNews\">\n\t\t<ul>\n\t\t\t<li v-for=\"ele in focusNews\">\n\t\t\t\t<a href={{ele.href}}>{{ele.title | title}}</a>\n\t\t\t\t<span class=\"am-badge am-badge-success am-fr\">{{ele.time}}</span>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ggxw.png?18261063b7f9a9c67146f40e1c56bd95";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(37)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/news/academic.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(38)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? (module.exports.options || {}) : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/lxxyx/桌面/NcuSpm/public/app/components/news/academic.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var $ = __webpack_require__(5);
	exports.default = {
	    data: function data() {
	        return {
	            academic: []
	        };
	    },
	    created: function created() {
	        var that = this;
	        $.ajax({
	            type: "get",
	            url: "/api/academic",
	            dataType: 'json',
	            success: function success(data) {
	                that.academic = data;
	            }
	        });
	    }
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<!-- 学术活动 -->\n<div class=\"am-u-sm-12 am-u-md-6\" style='padding-top: 2rem;padding-bottom: 2rem;'>\n    <img src=\"" + __webpack_require__(39) + "\" class=\"am-center am-img-responsive\" />\n    <div class=\"am-u-sm-12 am-u-md-12 am-u-md-centered\" id='academic'>\n        <ul>\n            <li v-for=\"ele in academic\">\n                <a href={{ele.href}}>{{ele.title | title}}</a>\n                <span class=\"am-badge am-badge-success am-fr\">{{ele.time}}</span>\n            </li>\n        </ul>\n    </div>\n</div>\n";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "xshd1.png?6553857410ab9fe0639acea6305529ac";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(41)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/news/studentWork.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(42)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? (module.exports.options || {}) : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/lxxyx/桌面/NcuSpm/public/app/components/news/studentWork.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var $ = __webpack_require__(5);
	var Vue = __webpack_require__(19);

	Vue.filter('time', function (value) {
		value = value.replace('\r\n\t\t', '').replace('[2015-', '').replace(']', '');
		return value;
	});

	exports.default = {
		data: function data() {
			return {
				studentWork: []
			};
		},
		created: function created() {
			var that = this;
			$.ajax({
				type: "get",
				url: "/api/studentWork",
				dataType: 'json',
				success: function success(data) {
					that.studentWork = data;
				}
			});
		}
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<!-- 学生工作 -->\n<div class=\"am-u-sm-12 am-u-md-6\">\n\t<img src=\"" + __webpack_require__(43) + "\" class=\"am-center am-img-responsive\" />\n\t<div class=\"am-u-sm-12 am-u-md-12 am-u-md-centered\" id='studentWork'>\n\t\t<ul>\n\t\t\t<li v-for=\"ele in studentWork\">\n\t\t\t\t<a href={{ele.href}}>{{ele.title | title}}</a>\n\t\t\t\t<span class=\"am-badge am-badge-success am-fr\">{{ele.time|time}}</span>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "xsgz.png?0b32e53f0d7b0d07230bf21a3755abe8";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(45)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/news/schoolNotice.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(46)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? (module.exports.options || {}) : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/lxxyx/桌面/NcuSpm/public/app/components/news/schoolNotice.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var $ = __webpack_require__(5);

	exports.default = {
		data: function data() {
			return {
				schoolNotice: []
			};
		},
		created: function created() {
			var that = this;
			$.ajax({
				type: "get",
				url: "/api/schoolNotice",
				dataType: 'json',
				success: function success(data) {
					that.schoolNotice = data;
				}
			});
		}
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<!-- 学院公告 -->\n<div class=\"am-u-sm-12 am-u-md-6\">\n\t<img src=\"" + __webpack_require__(47) + "\" class=\"am-center am-img-responsive\" />\n\t<div class=\"am-u-sm-12 am-u-md-12 am-u-md-centered\" id=\"schoolNotice\">\n\t\t<ul>\n\t\t\t<li v-for=\"ele in schoolNotice\">\n\t\t\t\t<a href={{ele.href}}>{{ele.title | title}}</a>\n\t\t\t\t<span class=\"am-badge am-badge-success am-fr\">{{ele.time}}</span>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "xshd2.png?a74b6d5bbfa45bdef65fd251dd509002";

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"am-container\" id=\"main\" v-cloak>\n  <div class=\"am-g\">\n    <focusnews></focusnews>\n    <academic></academic>\n    <studentwork></studentwork>\n    <schoolnotice></schoolnotice>\n  </div>\n</div>\n";

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container\">\n    <div class=\"page\">\n        <!-- 顶部导航开始 -->\n        <headernav></headernav>\n        <!-- /顶部导航结束 -->\n        <!-- 轮播图开始 -->\n        <slide></slide>\n        <!-- /轮播图结束 -->\n        <!-- 新闻展示部分开始 -->\n        <news></news>\n        <!-- /新闻展示部分结束 -->\n    </div>\n    <!-- 底栏部分开始 -->\n    <bottom></bottom>\n    <!-- /底栏部分结束 -->\n</div>\n";

/***/ }
]);