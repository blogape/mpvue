<template>
<!-- 添加banner图 -->
<div class="ctbanner">
<el-form ref="form" :model="form" label-width="80px">
 <el-form-item label="关联食谱">
<el-autocomplete
style="width:520px"
  v-model="state4"
  :fetch-suggestions="querySearchAsync"
  placeholder="请输入内容"
  @select="handleSelect"
></el-autocomplete>
 </el-form-item>
   <el-form-item label="轮播类型">
   <el-select v-model="value" placeholder="请选择" style="width:520px" >
    <el-option
    style="width:520px"
      v-for="item in options"
      :key="item.value"

      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
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
      options: [
        {
          value: "0",
          label: "食谱"
        },
        {
          value: "1",
          label: "软文"
        },
        {
          value: "2",
          label: "主题食谱"
        }
      ],
      banId: "",
      scdata: [],
      vcdata: [],
      restaurants: [],
      state4: "",
      timeout: null,
      form: {
        name: ""
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

      if (_this.banId == "") {
        this.$message.error("关联食谱为空，请正确填写");
      } else if (_this.value == "") {
        this.$message.error("轮播类型为空，请正确填写");
      } else if (_this.inimages == "") {
        this.$message.error("图片不能为空，请重新上传");
      } else {
        this.axios
          .post(
            "http://192.168.1.52:8765/api/cms-service/indexBanner/save?token=666666",
            {
              title: _this.title,
              type: _this.value,
              image: _this.inimages,
              relatedId: _this.banId
            }
          )
          .then(response => {
            console.log(response);
            if (response.data.code == 0) {
              this.$router.push("/ctnavber");
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
    // 上传错误
    uploadError(response) {
      // this.open("500", "文件导入异常！");

      console.log(this.$refs);
      // 获取上传的files对象与文件名称
      // const file = this.$refs.upinput.files[0];
      // const name = file.name;
      // // 使用上面的client上传文件
      // client
      // .multipartUpload(file.name, file, { progress: this.progress })
      // .then(function(data) {
      //     console.log(data);
      //     console.log("返回地址", data.res.requestUrls);
      // });
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
    loadAll() {
      return this.vcdata;
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
      this.banId = item.id;
      this.title = item.value;
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>

<style lang='scss'>
.ctbanner {
  max-width: 600px;
  margin: 30px auto;
}
</style>
