<template>
<!-- 模板详情 -->
<div class="tempdeta">
<!-- 添加模板 -->
<div class="teheader">
  <el-button type="primary">上传模板</el-button>
</div>
<div class="tebody">
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="模板名称"
      width="580">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">浏览</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-button
          size="mini"
          type="primary"
          @click="handleDelete(scope.$index, scope.row)">应用</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</div>
</template>

<script>
 export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style lang='scss'>
.tempdeta{
.teheader{
  height: 50px;
  // border: 1px solid red;
  width: 100%;
}
.tebody{
  margin-top: 20px;
}
}
</style>
