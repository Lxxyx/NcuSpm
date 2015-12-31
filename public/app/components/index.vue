<template>
	<div class="container">
		<div class="page">
			<headernav></headernav>
			<slide></slide>
			<news></news>
		</div>
		<bottom></bottom>
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