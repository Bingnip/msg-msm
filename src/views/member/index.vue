<template>
  <div>
    <el-form ref="searchForm" :inline="true" :model="searchMap" style="margin-top: 20px;">
    <el-form-item prop="cardNum">
        <el-input v-model="searchMap.cardNum" placeholder="卡号"></el-input>
    </el-form-item>
    <el-form-item prop="name">
        <el-input v-model="searchMap.name" placeholder="会员名字"></el-input>
    </el-form-item>
    <el-form-item prop="payType">
        <el-select v-model="searchMap.payType" placeholder="支付类似">
            <el-option v-for="option in payTypeOptions" 
            :key="option.type"
            :label="option.name"
            :value="option.type"
            ></el-option>
        </el-select>
    </el-form-item>
    <el-form-item prop="birthday">
        <el-date-picker el-date-picker value-format="yyyy-MM-dd" v-model="searchMap.birthday" type="date" placeholder="选择日期"></el-date-picker>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="fetchData">查询</el-button>
        <el-button @click="resetForm('searchForm')">重置</el-button>
    </el-form-item>
    </el-form>

    <el-table :data="list" height="650" border style="width: 100%">
      <!-- type="index" 索引下标 -->
      <el-table-column type="index" label="序号"> </el-table-column>
      <el-table-column
        prop="cardNum"
        label="卡号"
        width="180"
      ></el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column
        prop="birthday"
        label="日期"
        width="180"
      ></el-table-column>
      <el-table-column prop="phone" label="电话" width="180"> </el-table-column>
      <el-table-column prop="integral" label="可用积分"> </el-table-column>
      <el-table-column prop="money" label="金额"> </el-table-column>
      <el-table-column prop="payType" label="支付方式">
          <template slot-scope="scope">
              <span>{{ scope.row.payType | payTypeFilter }}</span>
          </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作" width="150">
        <!-- 注意slot scope，查看文档 -->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import memberApi from "@/api/member";

const payTypeOptions = [
    {type: '1', name: '现金'},
    {type: '2', name: '微信'},
    {type: '3', name: '支付宝'},
    {type: '4', name: '银行卡'},
];

export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 0,
      searchMap: {
          cardNum: '',
          payType: '',
          name: '',
          birthday: ''
      },
      list: [],
      payTypeOptions
    };
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
    //   memberApi.getList().then((response) => {
        memberApi.search(this.currentPage, this.pageSize, this.searchMap).then(response => {
        let res = response.data
        if (res.flag) {
          this.total = res.data.total
          this.list = res.data.rows
        }
      });
    },
    handleSizeChange(val) {
        this.pageSize = val
        this.fetchData()
    },
    handleCurrentChange(val) {
        this.currentPage = val
        this.fetchData()
    },
    handleEdit(index) {
      console.log(index)
    },
    handleDelete(index) {
      console.log(index)
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
    }
  },

  filters: {
      payTypeFilter(type) {
          let payObj = payTypeOptions.find(obj => obj.type === type)
          return payObj ? payObj.name : null
      }
  }
};
</script>