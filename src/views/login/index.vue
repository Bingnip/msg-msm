<template>
  <div class="login-container">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px" class="login-form">
      <h2 class="login-title">梦学谷会员管理系统</h2>
      <el-form-item label="账号" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
body {
  font-family: "";
}
.login-form {
  width: 350px;
  margin: 160px auto;
  background-color: wheat;
  padding: 30px;
  border-radius: 20px;
}
.login-container {
  position: absolute;
  height: 100%;
  width: 100%;
}
.login-title {
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
      }
    };
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate(valid => {
            if (valid) {

            } else {
                console.log('验证失败')
                return false
            }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  },
};
</script>