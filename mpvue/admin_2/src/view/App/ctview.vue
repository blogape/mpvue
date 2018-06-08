<template>
<!-- 添加banner图 -->
<div class="ctbanner">
<el-form ref="form" :model="form" label-width="80px">
     <el-form-item label="视图类型">
   <el-select v-model="value" placeholder="请选择" style="width:520px"  @change='viewChange'>
    <el-option
    style="width:520px"
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
 <el-form-item label="关联食谱">
<el-autocomplete
style="width:520px"
  v-model="state4"
  :fetch-suggestions="querySearchAsync"
  placeholder="请输入内容"
  @select="handleSelect"
></el-autocomplete>
 </el-form-item>



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
  created() {},
  methods: {
    message() {
      alert("11");
    },
    viewChange() {

     this.restaurants=[];
      if (this.value == 0) {
        this.axios
          .get(
            "http://192.168.1.52:8765/api/search-service/es/keyword?token=666666"
          )
          .then(response => {
            console.log(response.data.data.list);
            this.scdata = response.data.data.list;
            for (var i = 0; i < this.scdata.length; i++) {
             this.restaurants.push({
                value: this.scdata[i].title,
                id: this.scdata[i].id
              });
            }
            console.log(this.vcdata);
            console.log(this.restaurants);
          });
      } else if (this.value == 1) {
        this.axios
          .post(
            "http://192.168.1.52:8765/api/search-service/recipeArticle/list?token=666666"
          )
          .then(response => {
            this.scdata = response.data.data;
             this.vcdata=[];
            for (var i = 0; i < this.scdata.length; i++) {
                this.restaurants.push({
                value: this.scdata[i].title,
                id: this.scdata[i].id
              });
            }
            console.log(this.restaurants);
          });
      } else if (this.value == 2) {
        this.axios
          .get(
            "http://192.168.1.52:8765/api/search-service/recipeTopic/list?token=666666"
          )
          .then(response => {
            this.scdata = response.data.data;
             this.vcdata=[];
            for (var i = 0; i < this.scdata.length; i++) {
              // console.log(this.scdata[i].title);
                 this.restaurants.push({
                value: this.scdata[i].title,
                id: this.scdata[i].id
              });
            }
            console.log(this.restaurants);
          });
      }
    },
    submit() {
      var _this = this;
      if (_this.banId == "") {
        this.$message.error("关联食谱为空，请正确填写");
      } else if (_this.value == "") {
        this.$message.error("类型为空，请正确填写");
      }  else {
        this.axios
          .post(
            "http://192.168.1.52:8765/api/cms-service/indexElement/save?token=666666",
            {
              type: _this.value,
              relatedId: _this.banId
            }
          )
          .then(response => {
            console.log(response);
            if (response.data.code == 0) {
              this.$router.push("/viewmgt");
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
