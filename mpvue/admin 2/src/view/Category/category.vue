<template>
<!-- 管理分类食谱 -->
<div class='catrgory'>
<div class="content" >
<el-row :gutter="25">

  <el-col :span="24"><div class="grid-content bg-purple">
    <!-- 表格头部 -->
    <div class="table_header">
<!-- <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select> -->
    <el-button type="primary" @click='addfirst'>添加一级分类</el-button>
    <!-- <el-button type="primary">批量上架</el-button>
    <el-button type="primary">批量删除</el-button> -->
    </div>
    <div class="table_body" >
<el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    >

    <el-table-column
      label="一级分类"

      width="120">
      <template      slot-scope="scope">{{ scope.row.recipeCategory.categoryName }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="二级分类"
      width="120">
            <template   slot-scope="scope"> {{scope.row.childCategoryNames}}</template>
    </el-table-column>
    <el-table-column label="操作" width="450">
				<template scope="scope">
          					<el-button size="small" type="primary" @click="addsecat(scope.$index, scope.row)">添加二级分类 </el-button>
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑一级分类</el-button>
					<el-button size="small" v-if='scope.row.childCategoryNames!=null' @click="handleEdittwo(scope.$index, scope.row)">编辑二级分类</el-button>
          <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
  </el-table>

    </div>
    </div></el-col>
</el-row>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [],
      vdata: [],

      multipleSelection: [],
      mdata: [],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      value: ""
    };
  },
  methods: {
    reset() {
      this.axios
        .get(
          "http://192.168.1.52:8765/api/search-service/category/listAllByTree?token=666666",
          {

          }
        )
        .then(response => {
          console.log(response);
            this.tableData3 = [];
          for (var i = 0; i < response.data.data.length; i++) {
            this.tableData3.push(response.data.data[i]);
            this.vdata.push(response.data.data[i].recipeCategorys);
          }
        });
    },
    handleEdittwo(index, row) {
      this.$router.push("/addsecat" + row.recipeCategory.id);
    },
    addfirst() {
      this.$router.push("/firsttree" + 1 + "0");
    },
    handleNodeClick(data) {
      console.log(data);
    },
    addsecat(index, row) {
      this.$router.push("/firsttree" + 2 + row.recipeCategory.id);
    },
    handleEdit(index, row) {
      console.log(index, row);
      console.log(row.recipeCategory.id);
      this.$router.push("/firsttree" + "e" + row.recipeCategory.id);
    },

    // 删除数据
    handleDel(index, row) {
      console.log(row.recipeCategory.id);
      this.Ajax.delete(
        "http://192.168.1.52:8765/api/cms-service/category/delete?token=666666&id=" +
          row.recipeCategory.id,
        {},
        res => {
          console.log(res);
          if (res.code == 0) {
            this.$message({
              showClose: true,
              message: res.msg,
              type: "success"
            });
            this.reset();
          } else {
            this.$message({
              showClose: true,
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    }
  },
  created() {
    this.reset();
    this.axios
      .post(
        "http://192.168.1.52:8765/api/cms-service/category/update?token=666666",
        {
          // categoryName: _this.form.name,
          // id: _this.childrenId,
          // img: _this.imgurl,
          // orderby: _this.form.orderby
        }
      )
      .then(response => {
        console.log(response);
      });
  }
};
</script>

<style lang='scss'>
.catrgory {
  .content {
    .tree {
      .title {
        width: 100%;
        font-size: 24px;
        margin: 20px 0;
        height: 30px;
        line-height: 30px;
      }
    }
    .table_header {
      height: 40px;
      width: 100%;
    }
    .table_body {
      margin-top: 20px;
    }
  }
}
</style>
