<template>
	<div class="container">
		<div class="page">
			<!-- 顶部导航开始 -->
			<headernav></headernav>
			<!-- /顶部导航结束 -->
			<!-- 轮播图开始 -->
			<slide></slide>
			<!-- /轮播图结束 -->
			<!-- 新闻展示部分开始 -->
			<news></news>
			<!-- /新闻展示部分结束 -->
		</div>
		<!-- 底栏部分开始 -->
		<bottom></bottom>
		<!-- /底栏部分结束 -->
	</div>
</template>

<script>
	var Header = require('./header.vue');
	var Slide = require('./slide.vue');
	var News = require('./news.vue');
	var Bottom = require('./bottom.vue');
	var Vue = require('vue');

	Vue.filter('title', function(value) {
		if (value.length > 18) {
			value = value.substring(0, 18) + ".."
		};
		return value;
	});
	
	export default {
		components: {
			headernav: Header,
			slide: Slide,
			news: News,
			bottom: Bottom
		}
	}
</script>