<template>
  <div class="am-g">
    <!-- 导航部分 -->
    <header class="am-topbar am-topbar-inverse" style="margin-bottom: 0rem!important;">
      <div class="am-container">
        <h4 class="am-topbar-brand am-fl">
                <img src="./../../img/logoss.png" style="max-width: 111px;"/>
                <a href="/">公共管理学院</a>
            </h4>
        <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" @click="toggleNav()"><span class="am-sr-only">导航切换</span>
          <span class="am-icon-bars"></span>
        </button>
        <div class="am-collapse am-topbar-collapse am-fr" v-bind:class="{ 'am-in': isNavOpen}" v-show="isNavOpen" transition="slideNav">
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
              <a href="#" @click="showLogin()" v-if="showLoginButton">登陆/注册</a>
              <a href="#" v-if="isLogin">个人中心</a>
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
  data() {
      return {
        showLoginButton: true,
        isLogin: false,
        isNavOpen: false
      }
    },
    created() {
      var that = this;
      $.ajax({
        url: "/user/info",
        type: 'get',
        dataType: 'json',
        success: function(data) {
          console.log(data);
          that.isLogin = true;
          that.showLoginButton = false;
        },
        error: function(err) {
          console.log(err.responseText);
          that.isLogin = false;
          that.showLoginButton = true;
        }
      })
    },
    ready() {
      $('.topIcon').hover(function() {
        $(this).children('ul').css("visibility", "visible");
      }, function() {
        $('.topIcon ul').css("visibility", "hidden")
      });
    },
    methods: {
      showLogin: function() {
        console.log('Start Dispatch')
        this.$dispatch("toggleLogin");
      },
      toggleNav: function() {
        console.log("Start Toggle")
        this.isNavOpen = !this.isNavOpen;
      }
    }
}
</script>
<style lang="sass">
.slideNav-transition {
  transition: 0.18s ease-out;
  height: 225px;
  overflow: hidden!important;
}

.slideNav-enter,
.slideNav-leave {
  height: 0px;
  opacity: 0;
  overflow: hidden!important;
}
</style>
