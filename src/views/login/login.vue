<template>
  <div class="layadmin-user-login" id="LAY-user-login" style="display: none;">
    <div class="layadmin-user-login-main">
      <div class="layadmin-user-login-box layadmin-user-login-header">
      </div>
      <div class="layadmin-user-login-box layadmin-user-login-body layui-form">
        <div class="layui-form-item">
          <label class="layadmin-user-login-icon layui-icon layui-icon-username" for="LAY-user-login-user_name"></label>
          <input type="text" name="user_name" id="LAY-user-login-user_name" lay-verify="required" placeholder="用户名" class="layui-input">
        </div>
        <div class="layui-form-item" id="logintype-password">
          <label class="layadmin-user-login-icon layui-icon layui-icon-password" for="LAY-user-login-user_password"></label>
          <input type="password" name="user_password" id="LAY-user-login-user_password" lay-verify="required" placeholder="密码" class="layui-input">
        </div>
        <div class="layui-form-item" id="logintype-sms">

        </div>
        <div class="layui-form-item">
          <input type="checkbox" name="remember" lay-skin="primary" title="记住密码">
        </div>
        <div class="layui-form-item">
          <button class="layui-btn layui-btn-fluid" id="LAY-user-login-submit" lay-submit lay-filter="LAY-user-login-submit">登 入</button>
        </div>
      </div>
    </div>
    <div class="layui-trans layadmin-user-login-footer">
        Copyright © 2018 上海瑞策软件有限公司 E-CRM7.0.0, all rights reserved.
    </div>
  </div>
</template>
<script>
export default{
  methods: {
    async login () {

    }
  }
}
</script>
