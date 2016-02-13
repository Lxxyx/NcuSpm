webpackJsonp([0],{

/***/ 0:
/*!**********************!*\
  !*** ./app/about.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	var About = __webpack_require__(/*! ./components/about.vue */ 1);
	var Vue = __webpack_require__(/*! vue */ 21);
	
	var vm = new Vue({
		el: "body",
		components: {
			about: About
		}
	});

/***/ },

/***/ 1:
/*!**********************************!*\
  !*** ./app/components/about.vue ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(/*! -!babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./../../~/vue-loader/lib/selector.js?type=script&index=0!./about.vue */ 2)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/about.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! -!vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./about.vue */ 20)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? (module.exports.options || {}) : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/lxxyx/桌面/NcuSpm/public/app/components/about.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 2:
/*!******************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./app/components/about.vue ***!
  \******************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var Header = __webpack_require__(/*! ./header.vue */ 3);
	var Bottom = __webpack_require__(/*! ./bottom.vue */ 16);
	
	exports.default = {
	  components: {
	    headernav: Header,
	    bottom: Bottom
	  }
	};

/***/ },

/***/ 20:
/*!***********************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./app/components/about.vue ***!
  \***********************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"container\">\n    <!-- 顶部导航开始 -->\n    <headernav></headernav>\n    <!-- /顶部导航结束 -->\n    <!-- 网页主体部分开始 -->\n    <div class=\"am-g page\">\n      <!-- 文章部分开始 -->\n      <div class=\"am-container\">\n        <p>\n          网站的制作，源于自己的一个想法。项目于2015.12.24正式开始。数据直接从原官网获取。图片等文件则使用爬虫爬取并自动上传到七牛。\n        </p>\n        <p>\n          我只是公管学院一名普通学生。因为热爱电脑，阴差阳错下学习了编程。\n          <!-- <p>经过一年的学习，发现编程才是真爱。在大一下学期的学习中，统计学还挂了科。</p>\n\t\t\t\t\t<p>不知道算是讽刺还是什么，我的编程能力开始有了长足的进步。对自己专业所上的课程却愈来愈不喜欢。</p>\n\t\t\t\t\t<p>可以的话，希望大二下学期的统计学能顺利过了。</p> -->\n        </p>\n        <p>\n          2016的计划就是修完计算机专业课的前半段。打好坚实的数据结构与算法基础。 在加上家园工作室，各处接的项目。做到实践与学习并重。\n          <p>虽然是文科生，但也有一颗学理的心去改变世界，改变自己~</p>\n          <h3>2016，Fighting~</h3>\n          <hr/>\n          <h4><a href=\"www.lxxyx.win\">我的个人博客</a></h4>\n        </p>\n      </div>\n      <!-- /文章部分结束 -->\n    </div>\n    <!-- /网页主体部分结束 -->\n    <!-- 底栏部分开始 -->\n    <bottom></bottom>\n    <!-- /底栏部分结束 -->\n  </div>\n";

/***/ }

});
//# sourceMappingURL=about.js.map