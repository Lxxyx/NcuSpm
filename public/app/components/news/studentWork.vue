<template>
	<!-- 学生工作 -->
	<div class="am-u-sm-12 am-u-md-6">
		<img src="./../../../img/xsgz.png" class="am-center am-img-responsive" />
		<div class="am-u-sm-12 am-u-md-12 am-u-md-centered" id='studentWork'>
			<ul>
				<li v-for="ele in studentWork">
					<a href={{ele.href}}>{{ele.title | title}}</a>
					<span class="am-badge am-badge-success am-fr">{{ele.time|time}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	var $ = require('jquery');
	var Vue = require('vue');
	
    Vue.filter('time', function(value) {
        value = value.replace('\r\n\t\t','').replace('[2015-','').replace(']','')
        return value;
    });

	export default {
		data() {
			return {
				studentWork: []
			}
		},
		created() {
			var that = this;
			$.ajax({
				type: "get",
				url: "/api/studentWork",
				dataType: 'json',
				success: function(data) {
					that.studentWork = data
				}
			});
		}
	}
</script>