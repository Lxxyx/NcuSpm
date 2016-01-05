webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var About = __webpack_require__(11);
	var Vue = __webpack_require__(27);
	
	var vm = new Vue({
		el: "body",
		components:{
			about:About
		}
	});

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(12)
	__vue_template__ = __webpack_require__(26)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\Liu\\Desktop\\NcuSpm\\NcuSpm\\public\\app\\components\\about.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	
	// 	<div class="container">
	
	// 		<!-- 顶部导航开始 -->
	
	// 		<headernav></headernav>
	
	// 		<!-- /顶部导航结束 -->
	
	// 		<!-- 网页主体部分开始 -->
	
	// 		<div class="am-g page">
	
	// 			<!-- 文章部分开始 -->
	
	// 			<div class="am-container">
	
	// 				<p>
	
	// 					网站的制作，源于自己的一个想法。项目于2015.12.24正式开始。数据直接从原官网获取。图片等文件则使用爬虫爬取并自动上传到七牛。
	
	// 				</p>
	
	// 				<p>
	
	// 					我只是公管学院一名普通学生。因为热爱电脑，阴差阳错下学习了编程。
	
	// 					<p>经过一年的学习，发现编程才是真爱。在大一下学期的学习中，统计学还挂了科。</p>
	
	// 					<p>不知道算是讽刺还是什么，我的编程能力开始有了长足的进步。对自己专业所上的课程却愈来愈不喜欢。</p>
	
	// 					<p>可以的话，希望大二下学期的统计学能顺利过了。</p>
	
	// 				</p>
	
	// 				<p>
	
	// 					2016的计划就是修完计算机专业课的前半段。打好坚实的数据结构与算法基础。
	
	// 					在加上家园工作室，各处接的项目。做到实践与学习并重。
	
	// 					<p>虽然是文科生，但也有一颗学理的心去改变世界，改变自己~</p>
	
	// 					<h3>2016，Fighting~</h3>
	
	// 				</p>
	
	// 			</div>
	
	// 			<!-- /文章部分结束 -->
	
	// 		</div>
	
	// 		<!-- /网页主体部分结束 -->
	
	// 		<!-- 底栏部分开始 -->
	
	// 		<bottom></bottom>
	
	// 		<!-- /底栏部分结束 -->
	
	// 	</div>
	
	// </template>
	
	// <script type="text/javascript">
	var Header = __webpack_require__(13);
	var Bottom = __webpack_require__(22);
	
	exports.default = {
		components: {
			headernav: Header,
			bottom: Bottom
		}
	};
	// </script>

/***/ },

/***/ 26:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\r\n\t\t<!-- 顶部导航开始 -->\r\n\t\t<headernav></headernav>\r\n\t\t<!-- /顶部导航结束 -->\r\n\t\t<!-- 网页主体部分开始 -->\r\n\t\t<div class=\"am-g page\">\r\n\t\t\t<!-- 文章部分开始 -->\r\n\t\t\t<div class=\"am-container\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\t网站的制作，源于自己的一个想法。项目于2015.12.24正式开始。数据直接从原官网获取。图片等文件则使用爬虫爬取并自动上传到七牛。\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t我只是公管学院一名普通学生。因为热爱电脑，阴差阳错下学习了编程。\r\n\t\t\t\t\t<p>经过一年的学习，发现编程才是真爱。在大一下学期的学习中，统计学还挂了科。</p>\r\n\t\t\t\t\t<p>不知道算是讽刺还是什么，我的编程能力开始有了长足的进步。对自己专业所上的课程却愈来愈不喜欢。</p>\r\n\t\t\t\t\t<p>可以的话，希望大二下学期的统计学能顺利过了。</p>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t2016的计划就是修完计算机专业课的前半段。打好坚实的数据结构与算法基础。\r\n\t\t\t\t\t在加上家园工作室，各处接的项目。做到实践与学习并重。\r\n\r\n\t\t\t\t\t<p>虽然是文科生，但也有一颗学理的心去改变世界，改变自己~</p>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<h3>2016，Fighting~</h3>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<!-- /文章部分结束 -->\r\n\t\t</div>\r\n\t\t<!-- /网页主体部分结束 -->\r\n\t\t<!-- 底栏部分开始 -->\r\n\t\t<bottom></bottom>\r\n\t\t<!-- /底栏部分结束 -->\r\n\t</div>";

/***/ }

});
//# sourceMappingURL=about.js.map