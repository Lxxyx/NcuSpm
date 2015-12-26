<template>
	<!-- 学院公告 -->
	<div class="am-u-sm-12 am-u-md-6">
		<img src="./../../../img/xshd (2).png" class="am-center am-img-responsive" />
		<div class="am-u-sm-12 am-u-md-12 am-u-md-centered" id="schoolNotice">
			<ul>
				<li v-for="ele in schoolNotice">
					<a href={{ele.href}}>{{ele.title | title}}</a>
					<span class="am-badge am-badge-success am-fr">{{ele.time}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	var $ = require('jquery');
	
	export default {
		data() {
			return {
				schoolNotice: []
			}
		},
		created() {
			var that = this;
			$.ajax({
				type: "get",
				url: "/api/schoolNotice",
				dataType: 'json',
				success: function(data) {
					that.schoolNotice = data
				}
			});
		}
	}
</script>