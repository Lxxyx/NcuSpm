<template>
  <div id="popUp">
    <!-- 遮罩 -->
    <div id="mask" v-show="showMask"></div>
    <!-- 登录部分 -->
    <div class="login am-u-sm-12 am-u-md-8 am-u-lg-5" v-show="showLogin" transition="slideLogin">
      <h1 class="am-text-center am-u-sm-centered">登录
      <button class="am-btn am-fr am-btn-danger am-btn-sm" @click="toggleLogin">X</button>
    </h1>
      <div class="am-input-group am-input-group-secondary am-u-sm-centered">
        <span class="am-input-group-label"><i class="am-icon-user am-icon-fw"></i></span>
        <input type="text" class="am-form-field" placeholder="用户名" v-model="userName" />
      </div>
      <div class="am-input-group am-input-group-secondary am-u-sm-centered">
        <span class="am-input-group-label"><i class="am-icon-lock am-icon-fw"></i></span>
        <input type="password" class="am-form-field" placeholder="密码" v-model="password" />
      </div>
      <p class="am-u-sm-centered">
        <button type="submit" class="am-btn am-btn-success am-radius am-u-md-5 am-u-sm-12" @click="login()">登录</button>
        <button type="submit" class="am-btn am-btn-danger am-radius am-u-md-5 am-u-sm-12" @click="openReg">注册</button>
      </p>
    </div>
    <!-- 注册部分 -->
    <div class="register am-u-sm-12 am-u-md-8 am-u-lg-4" v-show="showReg" transition="slideReg">
      <h1 class="am-text-center am-u-sm-centered">注册新用户
      <button class="am-btn am-fr am-btn-danger am-btn-sm" @click = "closeReg">X</button>
    </h1>
      <div>
        <span class="am-input-group-label"><i class="am-icon-user am-icon-fw"></i></span>
        <input type="text" class="am-form-field" placeholder="请输入用户名" v-model="userName" />
      </div>
      <div>
        <span class="am-input-group-label"><i class="am-icon-lock am-icon-fw"></i></span>
        <input type="password" class="am-form-field" placeholder="请输入密码" pattern="^\d{6}$" required v-model="password" />
      </div>
      <div>
        <span class="am-input-group-label"><i class="am-icon-lock am-icon-fw"></i></span>
        <input type="password" class="am-form-field" placeholder="请再输入一次密码" pattern="^\d{6}$" required v-model="passwordReinput" />
      </div>
      <p class="am-u-sm-centered">
        <button type="submit" class="am-btn am-btn-success am-radius am-u-sm-12" @click="reg">注册</button>
        <button type="submit" class="am-btn am-btn-danger am-radius am-u-sm-12" @click="turnLogin">已有账户，现在登录</button>
      </p>
    </div>
  </div>
</template>
<script>
var $ = require('jquery')
require('./../../node_modules/sweetalert/dist/sweetalert.min.js')
require('./../../node_modules/sweetalert/dist/sweetalert.css');

export default {
  props: {
    showLogin: {
      type: Boolean,
      default: false
    },
    showReg: {
      type: Boolean,
      default: false
    },
    showMask: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      userName: '',
      password: '',
      passwordReinput: ''
    }
  },
  methods: {
    toggleLogin: function() {
      this.$dispatch('toggleLogin');
    },
    openReg: function() {
      this.$dispatch('openReg')
    },
    closeReg: function() {
      this.$dispatch('closeReg')
    },
    turnLogin: function() {
      this.$dispatch('turnLogin')
    },
    login: function() {

      $.ajax({
        url: "/user/login",
        type: "post",
        dataType: "json",
        data: {
          "userName": this.userName,
          "password": this.password
        },
        success: function(data) {

          swal({
            title: "登陆成功!",
            type: "success",
            timer: 1600,
            showConfirmButton: false
          });

        },
        error: function(err) {

          swal({
            title: err.responseText,
            type: "error",
            confirmButtonText: "OK"
          });

        }
      });

    },
    reg: function() {
      if (this.password === this.passwordReinput) {
        $.ajax({
          url: "/user/reg",
          type: "post",
          dataType: "json",
          data: {
            "userName": this.userName,
            "password": this.password
          },
          success: function(data) {

            swal({
              title: "注册成功!",
              type: "success",
              confirmButtonText: "OK"
            });

          },
          error: function(err) {

            swal({
              title: err.responseText,
              type: "error",
              confirmButtonText: "OK"
            });

          }
        });
      } else {

        swal({
          title: "两次输入密码不一致",
          type: "error",
          confirmButtonText: "OK"
        });

      }
    }
  }
}
</script>
<style lang="sass">
.slideLogin-transition {
  transition: 0.2s linear;
  height: 25rem;
}

.slideLogin-enter,
.slideLogin-leave {
  height: 0px;
  opacity: 0;
}

.slideReg-transition {
  transition: 0.2s linear;
  height: 42rem;
}

.slideReg-enter,
.slideReg-leave {
  height: 0px;
  opacity: 0;
}

.login {
  position: fixed;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 0.7rem;
  z-index: 999;
  background: linear-gradient(top, #eaeaeb, #b8c4cb);
  h1 {
    margin-top: 2.5rem;
  }
  div {
    margin-top: 1.3rem;
  }
  p button {
    margin: 0.3rem auto;
  }
}

#mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  background: black;
  opacity: 0.5;
}

.register {
  position: fixed;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 0.7rem;
  z-index: 999;
  background: linear-gradient(top, #eaeaeb, #b8c4cb);
  h1 {
    margin-top: 2.5rem;
  }
  p button {
    margin: 0.3rem auto;
  }
  div {
    margin: 1.3rem auto;
  }
}

.forgetPassword {
  position: fixed;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 0.7rem;
  z-index: 999;
  background: linear-gradient(top, #eaeaeb, #b8c4cb);
  h1 {
    margin-top: 2.5rem;
  }
  div {
    margin: 1.3rem auto;
  }
  p button {
    margin: 0.3rem auto;
  }
}
</style>
