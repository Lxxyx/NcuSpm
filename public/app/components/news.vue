<template>
	<div class="am-container" id="main" v-cloak>
        <div class="am-g">
            <focusnews></focusnews>
            <academic></academic>
            <studentwork></studentwork>
            <schoolnotice></schoolnotice>
        </div>
    </div>
</template>

<script>
	var FocusNews = require('./news/focusNews.vue');
	var Academic = require('./news/academic.vue');
	var StudentWork = require('./news/studentWork.vue');
	var SchoolNotice = require('./news/schoolNotice.vue');
	export default {
		components:{
			focusnews:FocusNews,
			academic:Academic,
			studentwork:StudentWork,
			schoolnotice:SchoolNotice
		}
	}
</script>

<style>
	[v-cloak] {
  		display: none;
	}
</style>