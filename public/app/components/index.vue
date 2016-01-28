<template>
  <div class="container">
    <login :show-Mask="isShowMask" :show-Reg="isShowReg" :show-Login="isShowLogin"></login>
    <div class="page">
      <!-- 顶部导航开始 -->
      <headernav></headernav>
      <!-- /顶部导航结束 -->
      <!-- 轮播图开始 -->
      <slide></slide>
      <!-- /轮播图结束 -->
      <!-- 新闻展示部分开始 -->
      <news></news>
      <!-- /新闻展示部分结束 -->
    </div>
    <!-- 底栏部分开始 -->
    <bottom></bottom>
    <!-- /底栏部分结束 -->
  </div>
</template>
<script>
var Header = require('./header.vue');
var Slide = require('./slide.vue');
var News = require('./news.vue');
var Bottom = require('./bottom.vue');
var Vue = require('vue');
var Login = require('./login.vue');

Vue.filter('title', function(value) {
  if (value.length > 18) {
    value = value.substring(0, 18) + ".."
  };
  return value;
});

export default {
  data() {
      return {
        isShowLogin: false,
        isShowMask: false,
        isShowReg: false
      }
    },
    components: {
      headernav: Header,
      slide: Slide,
      news: News,
      bottom: Bottom,
      login: Login
    },
    events: {
      'toggleLogin': function() {
        this.isShowMask =! this.isShowMask;
        this.isShowLogin =! this.isShowLogin;
        return true;
      },
      'openReg':function() {
        this.isShowLogin = false;
        this.isShowReg = true;
        return true;
      },
      'closeReg':function() {
        this.isShowReg = false;
        this.isShowMask = false;
        return true;
      },
      'turnLogin':function() {
        this.isShowReg = false;
        this.isShowLogin = true;
        return true;
      }
    }
}
</script>
