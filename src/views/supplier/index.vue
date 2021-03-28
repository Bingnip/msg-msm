<template>
  <div>
    <el-form ref="searchForm" :inline="true" :model="searchMap" style="margin-top: 20px;">
    <el-form-item prop="name">
        <el-input v-model="searchMap.name" placeholder="供应商名称"></el-input>
    </el-form-item>
    <el-form-item prop="code">
        <el-input v-model="searchMap.code" v-if="!isDialog" placeholder="商品编码"></el-input>
    </el-form-item>
    <el-form-item prop="supplierName">
        <el-input v-model="searchMap.supplierName" readonly v-if="!isDialog" placeholder="选择供应商"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="fetchData">查询</el-button>
        <el-button type="primary" v-if="!isDialog">新增</el-button>
        <el-button v-if="!isDialog">重置</el-button>
    </el-form-item>
    </el-form>

    <el-table 
    :highlight-current-row="isDialog"
    @current-change="handleCurrentChange"
    :data="list" height="650" border style="width: 100%">
      <!-- type="index" 索引下标 -->
      <el-table-column type="index" label="序号"> </el-table-column>
      <el-table-column prop="name" label="供应商名称"> </el-table-column>
      <el-table-column prop="birthday" label="联系人" width="180"> </el-table-column>
      <el-table-column v-if="!isDialog" prop="spec" label="供应商2"> </el-table-column>
      <el-table-column v-if="!isDialog" prop="retailPrice" label="供应商3"> </el-table-column>
      <el-table-column v-if="!isDialog" prop="purchasePrice" label="供应商4"> </el-table-column>
      <el-table-column v-if="!isDialog" prop="storageNum" label="供应商5"> </el-table-column>
      <el-table-column v-if="!isDialog" prop="supplierName" label="供应商6"> </el-table-column>
      <el-table-column v-if="!isDialog" label="操作" width="150">
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
      :layout="!isDialog ? 'total, sizes, prev, pager, next, jumper' : 'prev, pager, next'"
      :total="total">
    </el-pagination>
    
  </div>
</template>

<script>
import goodsApi from '@/api/goods'

export default {
    props: {
        isDialog: Boolean
    },

    data() {
        return {
            list: [],
            total: 0,
            currentPage: 1,
            pageSize: 10,
            searchMap: {

            }
        }
    },

    created() {
        this.fetchData()
    },

    methods: {
        fetchData() {
            goodsApi.search(this.currentPage, this.pageSize, this.searchMap).then(response => {
                const res = response.data.data
                this.list = res.rows
                this.total = res.total
            })
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
        },
        handleCurrentChange(currentRow, oldCurrentRow) {
            this.$emit('option-supplier', currentRow)
        }
    }
}
</script>