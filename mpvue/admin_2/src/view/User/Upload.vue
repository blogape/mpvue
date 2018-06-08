<template>
<!-- <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</progel-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload> -->
<div style="text-align:left;padding:50px;">
    <input type="file" ref='upinput'>
    <hr>
    进度:{{prog}} %
    <hr>
    <button @click="upload">上传</button>
</div>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

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
      prog:'',
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  created() {

  },
  methods: {

upload() {
    // 获取上传的files对象与文件名称
    const file = this.$refs.upinput.files[0];
    const name = file.name;
    // 使用上面的client上传文件
    client
    .multipartUpload(file.name, file, { progress: this.progress })
    .then(function(data) {
        console.log(data);
        console.log("返回地址", data.res.requestUrls);
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





    // handleRemove(file, fileList) {
    //   console.log(file, fileList);
    // },
    // handlePreview(file) {
    //   console.log(file);
    // },
    // handleExceed(files, fileList) {
    //   this.$message.warning(
    //     `当前限制选择 3 个文件，本次选择了 ${
    //       files.length
    //     } 个文件，共选择了 ${files.length + fileList.length} 个文件`
    //   );
    // },
    // beforeRemove(file, fileList) {
    //   return this.$confirm(`确定移除 ${file.name}？`);
    // }
  }
};
</script>
