<template>
<!-- 添加一级分类 -->
<div class='firsttree'>

<el-form  :model="form" status-icon :rules="form" ref="form" label-width="80px">
  <el-form-item label="类名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
    <el-form-item label="排序">
    <el-input v-model="form.orderby" v-model.number="form.orderby" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'') "></el-input>
  </el-form-item>
  <div style="text-align:left;padding:10px;">
  <p>请选择你要上传的图片</p>
    <input type="file" ref='upinput' value='请选择你的图片上传'>
    <hr>
    进度:{{prog}} %
    <hr>
    <el-button type='primary' @click="upload">上传</el-button>
</div>
 <el-form-item>
    <el-button type="primary" @click="submitForm" style="margin-top:60px;width:120px;">提交</el-button>
  </el-form-item>




</el-form>

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
        orderby: ""
      },
      prog: "",
      fileurl: "",
      categoryLevel: "",
      parentId: 0
    };
  },
  created() {
    console.log(this.$router.history.current.params);

    if (this.$router.history.current.params.id == 1) {
      this.categoryLevel = 1;
      this.parentId = 0;
    } else if (this.$router.history.current.params.id == 2) {
      this.categoryLevel = 2;
      console.log(this.categoryLevel);
      this.parentId = this.$router.history.current.params.pid;
    } else if (this.$router.history.current.params.id == "e") {
      // alert('11');
      this.axios
        .get(
          "http://192.168.1.52:8765/api/search-service/category/findByParentId?token=666666&parentId=" +
            this.$router.history.current.params.pid,
          {}
        )
        .then((response) => {
          console.log(response);
          this.form.name = response.data.data.recipeCategory.categoryName;
          this.form.orderby = response.data.data.recipeCategory.orderby;
          this.fileurl = response.data.data.recipeCategory.img;

        });
    }
  },
  methods: {
    submitForm() {
      var _this = this;
      // console.log(this.categoryLevel);
      console.log(this.$router.history.current.params.id + "2222");
      if (this.form.name == "") {
        this.$message({
          showClose: true,
          message: "类别不能为空",
          type: "error"
        });
      } else if (this.$router.history.current.params.id == "e") {
        this.axios
          .post(
            "http://192.168.1.52:8765/api/cms-service/category/update?token=666666",
            {
              categoryLevel: _this.categoryLevel,
              categoryName: _this.form.name,
              id: _this.$router.history.current.params.pid,
              img: _this.fileurl,
              orderby: _this.form.orderby
            }
          )
          .then(function(response) {
            console.log(response);
            if (response.data.code == 0) {
              console.log(response.data.msg);
              _this.$message({
                showClose: true,
                message: response.data.msg,
                type: "success"
              });
              _this.$router.push("/category");
            } else {
              _this.$message({
                showClose: true,
                message: "提交失败",
                type: "error"
              });
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        this.axios
          .post(
            "http://192.168.1.52:8765/api/cms-service/category/save?token=666666",
            {
              categoryLevel: this.categoryLevel,
              categoryName: this.form.name,
              img: this.fileurl,
              orderby: this.form.orderby,
              parentId: this.parentId
            }
          )
          .then(function(response) {
            console.log(response);
            if (response.data.code == 0) {
              console.log(response.data.msg);
              _this.$message({
                showClose: true,
                message: response.data.msg,
                type: "success"
              });
              _this.$router.push("/category");
            } else {
              _this.$message({
                showClose: true,
                message: "提交失败",
                type: "error"
              });
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
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
          var dataret=data.res.requestUrls[0];
          _this.fileurl = dataret.substring(0,dataret.indexOf('?'));
          if(dataret.substring(0,dataret.indexOf('?'))==''){
                 _this.fileurl=dataret
          }else{
               _this.fileurl=dataret.substring(0,dataret.indexOf('?'));
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
  }
};
</script>

<style>

</style>
