<template>
	<header>
		<img src="./assests/blog-head.jpg" class="logo" alt="LOGO">
		<ul>
			<li><a href="#">首页</a></li>
			<li><a href="#">文章</a></li>
			<li><a href="#">作品</a></li>
			<li><a href="#">关于我</a></li>
		</ul>
	</header>
</template>

<style lang="sass">
	header {
		height: 75px;
		background-color: rgb(82,42,92);
		
		ul {
			list-style-type: none;
			float: right;
			margin-top: 49px;
			li {
				display: inline-block;
				padding-right: 30px;
				a {
					text-decoration: none;
					color:#ffffff;
				}
			}
		}
	}

	.logo {
			width: 65px;
			height: 65px;
			border-radius: 50%;
			margin-top: 5px;
			margin-left: 80px;
		}
</style>