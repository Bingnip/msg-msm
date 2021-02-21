<template>
  <div>
    <el-table :data="list" height="580" border style="width: 100%">
      <!-- type="index" 索引下标 -->
      <el-table-column type="index" label="序号"> </el-table-column>
      <el-table-column prop="cardNum" label="卡号" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="birthday" label="日期" width="180"></el-table-column>
      <el-table-column prop="phone" label="电话" width="180"> </el-table-column>
      <el-table-column prop="integral" label="可用积分"> </el-table-column>
      <el-table-column prop="money" label="金额"> </el-table-column>
      <el-table-column prop="payType" label="支付方式"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作" width="150">
          <!-- 注意slot scope，查看文档 -->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import memberApi from "@/api/member";

export default {
  data() {
    return {
      list: [],
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      memberApi.getList().then((response) => {
        let res = response.data;
        if (res.flag) {
          this.list = res.data;
        }
      });
    },
  },
};
</script>