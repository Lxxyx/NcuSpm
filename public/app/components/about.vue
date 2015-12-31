<template>
	<div>
		<headernav></headernav>
		<div class="am-g">
			<div class="am-container">
				<p>
					网站的制作，源于自己的一个想法。项目于2015.12.24正式开始。数据直接从原官网获取。图片等文件则使用爬虫爬取并自动上传到七牛。
				</p>
				<p>
					我只是公管学院一名普通学生。因为热爱电脑，阴差阳错下学习了编程。
					经过一年的学习，发现编程才是真爱。在大一下学期的学习中，还挂了科。
					不知道算是讽刺还是什么，我的编程能力开始有了长足的进步。对自己专业所上的课程却愈来愈不喜欢。
				</p>
				<p>
					可以的话，我想转计科。我自学了很多计科的课程，发现都很有意思。
					但是，我是文科生呀。
				</p>
			</div>
		</div>
		<bottom></bottom>
	</div>
</template>

<script type="text/javascript">
	var Header = require('./header.vue');
	var Bottom = require('./bottom.vue');

	export default {
		components:{
			headernav:Header,
			bottom:Bottom
		}
	}
</script>