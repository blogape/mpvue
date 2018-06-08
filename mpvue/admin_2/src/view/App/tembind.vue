<template>
<div style="width:600px;margin:0 auto">
  <el-form ref="form" :model="form" label-width="80px">
<el-form-item label="绑定食谱">
    <el-select v-model="form.region" placeholder="绑定食谱"  style="width:400px;">
      <el-option v-for="(item,key) in list" :key='key' :label="item.title" :value='item.id'></el-option>

    </el-select>

  </el-form-item>
  <el-button type="primary" style='width:180px;margin-top:80px;margin-left:120px;' @click='submint'>提交</el-button>

  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        region: ""
      },
      list: ""
    };
  },
  created() {
    // console.log( )
    this.axios
      .get(
        "http://192.168.1.52:8765/api/search-service/es/keyword?token=666666&size=20",
        {}
      )
      .then(response => {
        console.log(response);
        this.list = response.data.data.list;
      });
  },
  methods: {
    submint() {
      this.axios
        .post(
          "http://192.168.1.52:8765/api/cms-service/recipeTopic/bindRecipes?token=666666",
          {
            topicBindRecipes: [
              {
                recipeId: this.form.region
              }
            ],
            topicId: this.$router.history.current.params.id
          }
        )
        .then(response => {
          if (response.data.code == 0) {
            this.$message({
              type: "success",
              message: response.data.msg
            });
            this.$router.push('/terpes')
          }else{
              this.$message({
                  type: "info",
                  message: response.data.msg
                });
          }
        });
    }
  }
};
</script>

<style>
</style>
