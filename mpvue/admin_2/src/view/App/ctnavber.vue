<template>
<div>
<!-- 左侧内容 -->
<div class="ct_header">
  <el-button type="primary" @click='addBanner'>添加轮播图</el-button>
</div>

<el-table
 ref="multipleTable"
:data="tableData3"
tooltip-effect="dark"
style="width: 100%"
>
<el-table-column
width="55">
</el-table-column>
<el-table-column
label="标题名称"
width="120">
<template slot-scope="scope">{{ scope.row.title }}</template>
</el-table-column>

<el-table-column
prop="createTime"
label="创建时间"
show-overflow-tooltip>
<!-- 编辑 -->
</el-table-column>
<el-table-column label="操作" width="420">
<template slot-scope="scope">
<!-- <el-button
size="mini"
@click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
<el-button
size="mini"
type="danger"
@click="handleDelete(scope.$index, scope.row)">删除</el-button>

</template>
</el-table-column>
</el-table>

<div class="block paginnation_footer">
    <el-pagination
    style='float:right'
      @size-change="handleSizeChange"
      :page-size='20'
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      layout="total, prev, pager, next, jumper"
      :total=this.totalprops>
          </el-pagination>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [],
      multipleSelection: [],
      currentPage4: 1,
      totalprops: 0,
      pageSizeprops: 0,
      tokenprops: ""
    };
  },
  created() {
    this.token();
    //进入当前页面请求展示数据
    var _this = this;
    this.axios
      .get(
        "http://192.168.1.52:8765/api/search-service/indexBanner/list?token=" +
          this.tokenprops +
          "&page=1&size=20",
        {}
      )
      .then(response => {
        console.log(response);
        this.totalprops = response.data.data.total;
        this.pageSizeprops = response.data.data.pageSize;
        // 添加数据到tableData3
        for (var i = 0; i < response.data.data.list.length; i++) {
          _this.tableData3.push(response.data.data.list[i]);
        }
      });
  },
  methods: {
    addBanner(){
      this.$router.push('/ctbanner')
    },
    token() {
      var username = localStorage.getItem("user");
      var obj = JSON.parse(username);
      this.tokenprops = obj.token;
    },
    handleAudit() {},
    // 封装当前刷新数据
    refresh() {
      var _this = this;
      this.axios
        .get(
          "http://192.168.1.52:8765/api/search-service/indexBanner/list?token=" +
            this.tokenprops +
            "&page=" +
            _this.currentPage4 +
            "&size=20",
          {}
        )
        .then(response => {
          console.log(response);
          _this.tableData3 = [];
          this.totalprops = response.data.data.total;
          this.pageSizeprops = response.data.data.pageSize;
          var that = _this;
          // 添加数据到tableData3
          for (var i = 0; i < response.data.data.list.length; i++) {
            _this.tableData3.push(response.data.data.list[i]);
          }
        });
    },

    // 单行点击删除数据
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该轮播图, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.Ajax.delete(
            "http://192.168.1.52:8765/api/cms-service/indexBanner/delete?token=" +
              this.tokenprops +
              "&id=" +
              row.id,
            {},
            res => {
              if (res.code == 0) {
                this.$message({
                  type: "success",
                  message: res.msg
                });
                this.refresh();
              } else {
                this.$message({
                  type: "info",
                  message: res.msg
                });
              }
            }
          );
        })
        //取消删除
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    // 分页功能
    handleSizeChange(val) {
      console.log(val);
      console.log(`每页 ${val} 条`);
    },

    //点击跳转页数
    handleCurrentChange(val) {
      // 赋值获取当前页数
      this.currentPage4 = parseInt(`${val}`);
      console.log(this.currentPage4);
      // 调用刷新页面数据
      this.refresh();
    }
  }
};
</script>
<style>
.paginnation_footer {
  padding: 40px 0;
}
.ct_header {
  width: 100%;
  height: 60px;
}
</style>
