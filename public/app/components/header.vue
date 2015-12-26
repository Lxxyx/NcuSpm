<template>
	    <div class="am-g">
        <!-- 导航部分 -->
        <header class="am-topbar am-topbar-inverse" style="margin-bottom: 0rem!important;">
            <div class="am-container">
                <h1 class="am-topbar-brand am-fl">
                <img src="./../../img/logoss (1).png" style="max-width: 119px;" />
                <a href="http://spm.ncu.edu.cn" class='am-show-lg-only'>公共管理学院</a>
            </h1>
                <!-- button的作用在于缩小后出现导航栏的按钮 -->
                <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#topbar'}"><span class="am-sr-only">导航切换</span>
                    <span class="am-icon-bars"></span>
                </button>
                <div class="am-collapse am-topbar-collapse am-fr" id="topbar">
                    <ul class="am-nav am-topbar-nav am-nav-pills">
                        <li class="am-active"><a href="#">学院概况</a></li>
                        <li><a href="#">院系中心</a></li>
                        <li><a href="#">师资队伍</a></li>
                        <li><a href="#">学科建设</a></li>
                        <li><a href="#">合作交流</a></li>
                        <li><a href="#">MPA教育</a></li>
                        <li><a href="#">党建团建</a></li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
</template>