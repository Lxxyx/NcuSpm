<template>
	<div class="container">
		<headernav></headernav>
		<div class="am-g page">
			<div class="am-container">
				<p>
					网站的制作，源于自己的一个想法。项目于2015.12.24正式开始。数据直接从原官网获取。图片等文件则使用爬虫爬取并自动上传到七牛。
				</p>
				<p>
					我只是公管学院一名普通学生。因为热爱电脑，阴差阳错下学习了编程。
					<p>经过一年的学习，发现编程才是真爱。在大一下学期的学习中，统计学还挂了科。</p>
					<p>不知道算是讽刺还是什么，我的编程能力开始有了长足的进步。对自己专业所上的课程却愈来愈不喜欢。</p>
					<p>可以的话，希望大二下学期的统计学能顺利过了。</p>
				</p>
				<p>
					2016的计划就是修完计算机专业课的前半段。打好坚实的数据结构与算法基础。
					在加上家园工作室，各处接的项目。做到实践与学习并重。

					<p>虽然是文科生，但也有一颗学理的心去改变世界，改变自己~</p>
					
					<h3>2016，Fighting~</h3>
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