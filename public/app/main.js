var App = require('./components/index.vue');
var Vue = require('vue');

var vm = new Vue({
	
	el: "body",
	components:{
		app:App
	}
});