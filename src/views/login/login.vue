<template>
  <div class="layadmin-user-login" id="LAY-user-login">
    <el-container>
      <el-header id="login-header">
        <el-row>
          <el-col :span="12" :offset="6"><h2>{{ companyInfo.organizationname }}</h2></el-col>
        </el-row>

      </el-header>
      <el-main>
        <el-row>
          <el-col :span="12" :offset="6"><p>{{ companyInfo.watchword }}</p></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" :offset="8">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="用户名">
                <el-input v-model="form.user_name" placeholder="用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" v-model="form.user_password" placeholder="密码"></el-input>
              </el-form-item>
              <el-form-item label="记住密码">
                <el-switch v-model="form.remember"></el-switch>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">登陆</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-main>
      <el-footer id="login-footer">
          Copyright © 2018 上海瑞策软件有限公司 E-CRM7.0.0, all rights reserved.
      </el-footer>
    </el-container>
  </div>
</template>
<style lang="less">
  #login-header, #login-footer{
    text-align: center;
  }
</style>
<script>
import {login, getCompanyInfo} from '../../service/login'
export default{
  data () {
    return {
      form: {
        user_name: '11',
        user_password: '123',
        remember: false
      },
      companyInfo: {
        organizationname: '上海瑞策软件有限公司',
        watchword: '易客CRM为您提供简单易用、稳定可靠的教育/培训管理系统，让您更专注于您的专业领域！'
      }

    }
  },
  created () {
    this.getCompanyInfo()
  },
  methods: {
    async login () {
      let loginResult = await login('admin', 'admin')
      if (loginResult) {
        console.log(loginResult)
      }
    },
    onSubmit () {

    },
    async getCompanyInfo () {
      let companyInfo = await getCompanyInfo()
      console.log(companyInfo)
      if (companyInfo.data) {
        this.companyInfo.organizationname = companyInfo.organizationname
        this.companyInfo.watchword = companyInfo.watchword
      }
    }
  }
}
</script>
