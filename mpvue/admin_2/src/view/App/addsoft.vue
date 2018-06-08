<template>
<!-- 添加banner图 -->
<div class="ctbanner">
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="软文标题">
    <el-input v-model="form.title"></el-input>
  </el-form-item>
    <el-form-item label="软文描述">
    <el-input v-model="form.describle"></el-input>
  </el-form-item>
  </el-form-item>
    <el-form-item label="软文地址">
    <el-input v-model="form.url"></el-input>
  </el-form-item>

<div style="text-align:left;padding:20px;">
    <input type="file" ref='upinput'>
    <hr>
    进度:{{prog}} %
    <hr>
    <el-button @click="upload"  type="primary">上传图片</el-button>
</div>

</el-form>
  <el-button @click="submit"  style='width:600px;margin-top:30px'  type="primary">提交</el-button>

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
      prog: "",
      inimages: "",
      title: "",
      value: "",
      banId: "",
      restaurants: [],
      state4: "",
      timeout: null,
      form: {
        name: "",
        title:'',
        describle:'',
        url:'',
      },
      fileList2: []
    };
  },
  created() {
    this.axios
      .get(
        "http://192.168.1.52:8765/api/search-service/es/keyword?token=666666"
      )
      .then(response => {
        console.log(response.data.data.list);
        this.scdata = response.data.data.list;
        for (var i = 0; i < this.scdata.length; i++) {
          // console.log(this.scdata[i].title);
          this.vcdata.push({
            value: this.scdata[i].title,
            id: this.scdata[i].id
          });
        }
        console.log(this.restaurants);
        // this.restaurants = response.data.data.list;
      });
  },
  methods: {
    message() {
      alert("11");
    },
    submit() {
      var _this = this;
      // console.log(_this.banId);

      if (_this.form.title == "") {
        this.$message.error("软文标题为空，请正确填写");
      } else if (_this.form.describle == "") {
        this.$message.error("软文描述为空，请正确填写");
      } else if (_this.url == "") {
        this.$message.error("软文链接为空，请重新上传");
      } else {
        this.axios
          .post(
            "http://192.168.1.52:8765/api/cms-service/recipeArticle/save?token=666666",
            {
              title: _this.form.title,
              description:  _this.form.describle,
              url: _this.form.url,
              image: _this.inimages,
            }
          )
          .then(response => {
            console.log(response);
            if (response.data.code == 0) {
              this.$router.push("/softlist");
            } else {
              this.$message.error(response.data.msg);
            }
          });
      }
    },
    uploadSuccess(response) {
      console.log(response);
      // let code = response.returncode;
      // let msg = response.msg;
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
          // console.log(data);
          console.log("返回地址", data.res.requestUrls);
          let inimage = data.res.requestUrls + "?";
          _this.inimages = inimage.substring(0, inimage.indexOf("?"));
        });
    },
    // 获取上传进度
    progress(p) {
      let _this = this;
      return function(done) {
        _this.prog = p * 100;
        done();
      };
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },


    handleSelect(item) {
      console.log(item);
      this.banId = item.id;
      this.title = item.value;
    }
  },
  mounted() {

  }
};
</script>

<style lang='scss'>
.ctbanner {
  max-width: 600px;
  margin: 30px auto;
}
</style>
