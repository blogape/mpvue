<template>
<!-- 编辑二级分类 -->
<div class="addsecat">
<el-form ref="form" :model="form" >
  <el-form-item label="请先选择二级分类">
    <el-select v-model="form.region" placeholder="请选择二级分类" @change="doSomethingElse">
      <el-option v-for="(item,key) in recipeCategorys" :key='key' :label='item.categoryName' :value='item.id'></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="分类名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
   <el-form-item label="排序">
    <el-input v-model="form.orderby"></el-input>
  </el-form-item>
    <div style="text-align:left;padding:10px;">
  <p>请选择你要上传的图片</p>
    <input type="file" ref='upinput' value='请选择你的图片上传'>
    <hr>
    进度:{{prog}} %
    <hr>
    <el-button type='primary' @click="upload">上传</el-button>
</div>
</el-form>
<div class="btn_subbttom">


  <el-button type="primary" @click="onSubmit">立即提交</el-button>
    <el-button  type="danger" @click='delsec'>删除</el-button>
    </div>
</div>
</template>

<script>
import OSS from "ali-oss";
// 构建对象，传入所需配置参数
const client = new OSS.Wrapper({
  region: "oss-cn-shenzhen",
  accessKeyId: "LTAI3Orhw4bbc7aI",
  accessKeySecret: "OJCeb83F0k8PPq0o2vT7C6tAos5owz",
  bucket: "recipes"
});
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        orderby: ""
      },
      recipeCategorys: "",
      childrenId: "",
      prog: "",
      imgurl: ""
    };
  },
  methods: {
    onSubmit() {
      var _this = this;

      console.log(this.imgurl);
      if (this.form.name == "") {
        this.$message.error("类名不能为空");
      } else {
        this.axios
          .post(
            "http://192.168.1.52:8765/api/cms-service/category/update?token=666666",
            {
              categoryName: _this.form.name,
              id: _this.childrenId,
              img: _this.imgurl,
              orderby: _this.form.orderby
            }
          )
          .then(response => {
            console.log(response);
            if (response.data.code == 0) {
              _this.$message({
                message: "修改成功！",
                type: "success"
              });
              _this.$router.push("/category");
            } else {
              _this.$message.error("修改失败");
            }
          });
      }
    },
    delsec() {
      var _this=this;
      this.$confirm("此操作将永久删除该食谱, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
            this.axios
        .delete(
          "http://192.168.1.52:8765/api/cms-service/category/delete?token=666666&id=" +
            this.childrenId,
          {}
        )
        .then(function(response) {
          if (response.data.code == 0) {

          _this.$message({
            type: "success",
            message: "删除成功!"
          });
                        _this.$router.push("/category");
          }else{
            _this.$message.error("删除失败");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
        })
        .catch(() => {
          _this.$message({
            type: "info",
            message: "已取消删除"
          });
        });


    },
    doSomethingElse() {
      this.childrenId = this.form.region;

      this.axios
        .get(
          "http://192.168.1.52:8765/api/search-service/category/findById?token=666666&id=" +
            this.childrenId,
          {}
        )
        .then(response => {
          console.log(this.childrenId);
          this.form.name = response.data.data.categoryName;
          this.form.orderby = response.data.data.orderby;
          this.imgurl = response.data.data.img;
        });
    },
    upload() {
      // 获取上传的files对象与文件名称
      const file = this.$refs.upinput.files[0];
      const name = file.name;
      var _this = this;
      // 使用上面的client上传文件
      client
        .multipartUpload(file.name, file, { progress: this.progress })
        .then(function(data) {
          console.log(data);
          console.log("返回地址", data.res.requestUrls[0]);
          var dataret = data.res.requestUrls[0];
          console.log(dataret.substring(0, dataret.indexOf("?")));
          if (dataret.substring(0, dataret.indexOf("?")) == "") {
            _this.imgurl = data.res.requestUrls[0];
          } else {
            _this.imgurl = dataret.substring(0, dataret.indexOf("?"));
          }
        });
    },
    // 获取上传进度
    progress(p) {
      let _this = this;
      return function(done) {
        _this.prog = p * 100;
        done();
      };
    }
  },
  created() {
    console.log(this.$router.history.current.name);
    // this.$router.history.current.name='我的天啊'
    this.axios
      .get(
        "http://192.168.1.52:8765/api/search-service/category/findByParentId?token=666666&parentId=" +
          this.$router.history.current.params.id,
        {}
      )
      .then(response => {
        console.log(response.data.data);

        this.recipeCategorys = response.data.data.recipeCategorys;
      });
  }
};
</script>

<style lang='scss'>
.btn_subbttom {
  margin-top: 40px;
  padding-left: 120px;
  button {
    width: 200px;
  }
}
</style>
