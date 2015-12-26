<template>
	<div class="am-u-sm-12 am-u-md-6" style='padding-top: 2rem;'>
		<img src="./../../../img/ggxw.png" class="am-center am-img-responsive" />
		<!-- 焦点新闻 -->
		<div class="am-u-sm-12 am-u-md-12 am-u-md-centered" id="focusNews">
			<ul>
				<li v-for="ele in focusNews">
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
				focusNews: []
			}
		},
		created() {
			var that = this;
			$.ajax({
				type: "get",
				url: "/api/focusNews",
				dataType: 'json',
				success: function(data) {
					that.focusNews = data
				}
			});
		}
	}
</script>