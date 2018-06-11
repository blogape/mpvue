<template>
<div>
<!-- 左侧内容 -->
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
label="食谱名称"
width="120">
<template slot-scope="scope">{{ scope.row.title }}</template>
</el-table-column>
<el-table-column
prop="statusDesc"
label="状态"
width="120">
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
<el-button
size="mini"
type="primary"
@click="handleShelves(scope.$index, scope.row)">上架</el-button>
<el-button
size="mini"
type="primary"
@click="handleDown(scope.$index, scope.row)">下架</el-button>
<el-button
size="mini"
type="primary"
@click="handleRelease(scope.$index, scope.row)">发布</el-button>
<!-- <el-button
size="mini"
type="primary"
@click="handleAudit(scope.$index, scope.row)">审核</el-button> -->
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
    this.axios.get( "http://192.168.1.52:8765/api/search-service/recipe/list?token=" +this.tokenprops + "&page=1&size=20",{}
      )
      .then(response => {
        this.totalprops = response.data.data.total;
        this.pageSizeprops = response.data.data.pageSize;
        // 添加数据到tableData3
        for (var i = 0; i < response.data.data.list.length; i++) {
          _this.tableData3.push(response.data.data.list[i]);
        }
      });
  },
  methods: {
    // 发布食谱
    handleRelease(index, row) {
      this.$confirm("你确定要发布食谱, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.Ajax.put(
            "http://192.168.1.52:8765/api/cms-service/recipe/publish?token=" +
              this.tokenprops +
              "&recipeId=" +
              row.id,
            {},
            res => {
              console.log(res);
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
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消此操作"
          });
        });
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
          "http://192.168.1.52:8765/api/search-service/recipe/list?token=" +
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
      this.$confirm("此操作将永久删除该食谱, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.Ajax.delete(
            "http://192.168.1.52:8765/api/cms-service/recipe/delete?token=" +
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
    // 点击下架按钮发送请求
    handleDown(index, row) {
      this.$confirm("您确定要下架此食谱, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.Ajax.put(
            "http://192.168.1.52:8765/api/cms-service/recipe/pullOff?token=" +
              this.tokenprops +
              "&recipeId=" +
              row.id,
            {},
            res => {
              console.log(res);
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
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作"
          });
        });
    },
    // 点击上架按钮发送请求
    handleShelves(index, row) {
      this.$confirm("您确定要上架此食谱 ？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.Ajax.put(
          "http://192.168.1.52:8765/api/cms-service/recipe/pullOn?token=" +
            this.tokenprops +
            "&recipeId=" +
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
        ).catch(() => {
          this.$message({
            type: "info",
            message: "已取消上架"
          });
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
</style>
