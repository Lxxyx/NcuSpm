<template>
  <div class="am-g">
    <!-- 导航部分 -->
    <header class="am-topbar am-topbar-inverse" style="margin-bottom: 0rem!important;">
      <div class="am-container">
        <h1 class="am-topbar-brand am-fl">
                <img src="./../../img/logoss (1).png" style="max-width: 119px;" />
                <a href="/">公共管理学院</a>
            </h1>
        <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#topbar'}"><span class="am-sr-only">导航切换</span>
          <span class="am-icon-bars"></span>
        </button>
        <div class="am-collapse am-topbar-collapse am-fr" id="topbar">
          <ul class="am-nav am-topbar-nav am-nav-pills">
            <li class="topIcon">
              <a href="#">学院概况</a>
              <ul class="am-show-md-up">
                <li><a href="http://spm.ncu.edu.cn/static/Instruction.asp">学院简介</a></li>
                <li><a href="http://spm.ncu.edu.cn/static/xueyuanlingdao.asp">学院领导</a></li>
                <li><a href="http://spm.ncu.edu.cn/Static/Structure.asp">机构设置</a></li>
                <li style="padding-bottom: 2px;"><a href="#">发展规划</a></li>
              </ul>
            </li>
            <li class="topIcon">
              <a href="#">院系中心</a>
              <ul>
                <li><a href="#">公共管理学系</a></li>
                <li><a href="#">社会学系</a></li>
                <li><a href="http://mpa.ncu.edu.cn/" style="font-size: 13px;">MPA教育中心</a></li>
                <li style="padding-bottom: 2px;"><a href="http://cacs.ncu.edu.cn/">廉政研究中心</a></li>
              </ul>
            </li>
            <li class="topIcon">
              <a href="#">师资队伍</a>
            </li>
            <li class="topIcon">
              <a href="#">学科建设</a>
              <ul>
                <li><a href="http://spm.ncu.edu.cn/Static/Master.asp">硕士点学科建设</a></li>
                <li style="padding-bottom: 2px;"><a href="#">重点学科建设</a></li>
              </ul>
            </li>
            <li class="topIcon">
              <a href="#">合作交流</a>
              <ul>
                <li><a href="#">合作办学</a></li>
                <li style="padding-bottom: 2px;"><a href="http://spm.ncu.edu.cn/static/NewsList.asp?Type=3" style="font-size: 12px;">学术会议与交流</a></li>
              </ul>
            </li>
            <li class="topIcon">
              <a href="http://spm.ncu.edu.cn/static/MPAEdu.asp">MPA教育</a>
            </li>
            <li class="topIcon">
              <a href="#">党建团建</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
var $ = require('jquery');
require('./../css/header.css');

export default {
  ready() {
    $('.topIcon').hover(function() {
      $(this).children('ul').css("visibility", "visible");
    }, function() {
      $('.topIcon ul').css("visibility", "hidden")
    });
  }
}
</script>