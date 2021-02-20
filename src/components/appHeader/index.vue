<template> 
  <!-- *** 一个模板下只能有一个根元素！ -->
  <div class="header">
    <a href="#/"></a>
        <img class="logo" src="@/assets/logo.png" alt="logo" width="25px" />
        <span class="company">梦学谷会员管理系统</span>
    <el-dropdown class="el-dropdown" @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-setting" command="a">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button" command="b">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<style scoped>
.logo {
  vertical-align: middle;
  margin: 0 10px 0 40px;
}
.company {
    position: absolute;
    color: white;
}
.el-dropdown {
    float: right;
    margin-right: 40px;
}
.el-dropdown-link {
    color: white;
    cursor: pointer;
}
</style>

<script>
export default {
    methods: {
        handleCommand(command) {
            this.$message(`clickon on item ${command}`)
        }
    }
}
</script>