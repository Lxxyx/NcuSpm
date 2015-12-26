var App = require('./components/app.vue');
var Vue = require('vue');

var vm = new Vue({
	
	el: "body",
	components:{
		app:App
	}
});