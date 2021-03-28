<template>
  <div>
    <el-form ref="searchForm" :inline="true" :model="searchMap" style="margin-top: 20px;">
    <el-form-item prop="name">
        <el-input v-model="searchMap.name" placeholder="商品名称"></el-input>
    </el-form-item>
    <el-form-item prop="code">
        <el-input v-model="searchMap.code" placeholder="商品编码"></el-input>
    </el-form-item>
    <el-form-item prop="supplierName">
        <el-input v-model="searchMap.supplierName" readonly @click.native="dialogSupplierVisble=true" placeholder="选择供应商"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="fetchData">查询</el-button>
        <el-button type="primary" >新增</el-button>
        <el-button @click="$refs['searchForm'].resetFields()">重置</el-button>
    </el-form-item>
    </el-form>

    <el-table :data="list" height="650" border style="width: 100%">
      <!-- type="index" 索引下标 -->
      <el-table-column type="index" label="序号"> </el-table-column>
      <el-table-column prop="name" label="商品名称"> </el-table-column>
      <el-table-column prop="code" label="商品编码" width="180"> </el-table-column>
      <el-table-column prop="spec" label="商品规格"> </el-table-column>
      <el-table-column prop="retailPrice" label="零售价"> </el-table-column>
      <el-table-column prop="purchasePrice" label="进货价"> </el-table-column>
      <el-table-column prop="storageNum" label="库存数量"> </el-table-column>
      <el-table-column prop="supplierName" label="供应商"> </el-table-column>
      <el-table-column label="操作" width="150">
        <!-- 注意slot scope，查看文档 -->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50]"
      :page-size="pageSize"
      :total="total">
    </el-pagination>
    
    <el-dialog title="供应商选择" :visible.sync="dialogSupplierVisble" width="500px">
        <supplier @option-supplier="optionSupplier" :isDialog="true"></supplier>
    </el-dialog>
  </div>
</template>

<script>
import goodsApi from '@/api/goods'
import Supplier from '@/views/supplier'

export default {
    props: {
        isDialog: Boolean
    },
    components: {Supplier},
    data() {
        return {
            list: [],
            total: 0,
            currentPage: 1,
            pageSize: 10,
            searchMap: {
                name: '',
                code: '',
                supplierName: ''
            },
            dialogSupplierVisble: false
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
        optionSupplier(currentRow) {
            this.searchMap.supplierName = currentRow.name
            this.searchMap.supplierId = currentRow.id
            this.dialogSupplierVisble = false

        },
    }
}
</script>