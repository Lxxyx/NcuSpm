var About = require('./components/about.vue');
var Vue = require('vue');

var vm = new Vue({
	el: "body",
	components:{
		about:About
	}
});