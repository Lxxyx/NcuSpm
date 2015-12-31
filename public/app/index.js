var Index = require('./components/index.vue');
var Vue = require('vue');

var vm = new Vue({
	el: "body",
	components:{
		index:Index
	}
});