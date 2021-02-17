<template>
  <div class="login-container">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
      class="login-form"
    >
      <h2 class="login-title">梦学谷会员管理系统</h2>
      <el-form-item label="账号" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
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
//导入普通成语的映射
import { login, getUserInfo } from "@/api/login";

export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.ruleForm.name, this.ruleForm.password).then((res) => {
            if (res.data.flag) {
              getUserInfo(res.data.data.token).then((resp) => {
                localStorage.setItem("mxg-msm-user", JSON.stringify(resp.data.data));
                localStorage.setItem("mxg-msm-token", res.data.data.token);
                this.$message({
                  showClose: true,
                  message: "登录成功！",
                  type: "success",
                });
                //前往首页
                this.$router.push("/");
              });
            } else {
              return false
            }
          });
        } else {
          console.log("验证失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>