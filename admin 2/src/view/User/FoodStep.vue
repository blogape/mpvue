<template>
    <div id="FoodStep">
<div v-for="foodstep in step">
  <!-- 云食谱 -->
    <div>
        <div class="recipes">添加食谱烹饪步骤</div>
                        <div style="margin: 10px 0;"></div>                            
                        <div class="Adds" >步骤阶段</div>
                          <el-select v-model="foodstep.cookingStage" placeholder="请选择阶段" style="margin-left:2%">
                            <el-option
                              v-for="item in NextStages"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                        </el-select>
                            <!-- 步数 -->
                        <div style="margin: 10px 0;"></div> 
                        <!-- <div class="Adds" >当前第几步</div> -->
                        <!-- <div style="margin: 10px 0;"></div>                         
                        <el-input v-model="foodstep.Nextstepno" placeholder="请输入内容"></el-input> -->
                        <!-- 时间 -->
                        <!-- <div style="margin: 10px 0;"></div>                          -->
                        <!-- <div class="Adds" >花费时间(单位分钟)</div> -->
                        <!-- <div style="margin: 10px 0;"></div>      -->
                        <!-- <el-input v-model="foodstep.timeCost" placeholder="请输入时间"></el-input> -->
                        <!-- 提示标题 -->
                        <!-- <div style="margin: 10px 0;"></div>                          -->
                        <!-- <div class="Adds" >步骤标题</div> -->
                        <!-- <el-input v-model="foodstep.title" placeholder="请输入内容"></el-input> -->
                        <!-- 提示 -->
                        <!-- <div style="margin: 10px 0;"></div>                                  
                        <div class="Adds" >小提示</div>
                        <el-input v-model="foodstep.tips" placeholder="请输入内容"></el-input> -->
                                    <!-- 上传图片 -->
                        <div style="margin: 30px 0;"></div>  
                        <div class="Adds" >步骤图片</div>
                          <ul class="clearfix"> 
                                          <li v-if="imgs.length>0" v-for='(item ,index ) in imgs'>  
                                                <img :src="item">  
                                            </li>  
                                            <li style="position:relative" v-if="imgs.length>=6 ? false : true">  
                                                <input class="upload" @change='add_img'  type="file">
                                                <hr>
                                                进度:{{prog}} %
                                                <hr>                      
                                            </li>                   
                            </ul> 
                    <!-- 描述 -->
                    <div style="margin: 10px 0;"></div> 
                    <div class="Adds">步骤描述</div>
                    <div style="margin: 10px 0;"></div> 
                    <el-input type="textarea" :autosize="{ minRows: 3  , maxRows: 3}" placeholder="请输入内容" v-model="foodstep.description">
                    </el-input>
                      
        <div style="margin: 10px 0;"></div> 
     
        <el-button class="btn btn-success" @click.prevent="submitForm" type="warning">删除一行</el-button>
          <el-button type="danger" @click="addNewMessage">增加一行</el-button>
   
    </div>
    
</div>
      <div style="margin: 10px 0;"></div> 
      <!-- <el-button class="btn btn-success" @click="addup" type="primary">添加完毕</el-button> -->
 <div style="margin: 10px 0;"></div> 
<el-button type="primary" @click="addsNext">确认</el-button>
</div>
</template>
<script>
import OSS from "ali-oss";
const client = new OSS.Wrapper({
  region: "oss-cn-shenzhen",
  accessKeyId: "LTAI3Orhw4bbc7aI",
  accessKeySecret: "OJCeb83F0k8PPq0o2vT7C6tAos5owz",
  bucket: "recipes"
});
export default {
  data() {
    return {
      submitted: false,
      prog: "",
      imgs: [],
      step: [
        {
          // 当前步骤
          // Nextstepno:'',
          // 提示标题
          title: "10",
          // 小提示
          tips: "",
          // 花费时间
          timeCost: "10",
          stepno: "",
          // 步骤描述
          description: "",
          images: "",
          cookingStage: "",
          recipeId: window.localStorage.getItem("shiID")
        }
      ],
      NextStages: [
        {
          value: "1",
          label: "准备阶段"
        },
        {
          value: "2",
          label: "烹饪阶段"
        },
        {
          value: "3",
          label: "完成阶段"
        }
      ],
      data: "",
      add: []
    };
  },
  methods: {
    add_img(event) {
      let reader = new FileReader();
      // console.log(event.target.files[0])
      let file = event.target.files[0];
      // console.log(file.name)
      let name = file.name;
      let _this = this;
      client
        .multipartUpload(file.name, file, { progress: this.progress })
        .then(function(data) {
          // console.log("返回地址", data.res.requestUrls);
          let Cookingr = data.res.requestUrls+"?";
          // console.log(Cookingr.substring(0,Cookingr.indexOf("?"))) 
          let Cookings  =  Cookingr.substring(0,Cookingr.indexOf("?"))
          console.log(Cookings)
          window.localStorage.setItem("cooking", Cookings);
        });
    },
    progress(p) {
      let _this = this;
      return function(done) {
        _this.prog = p * 100;
        done();
      };
    },
    addsNext() {
      this.add.length = [this.step.length - 1];
      let imgs = window.localStorage.getItem("cooking");
      //  console.log(window.localStorage.getItem("shiID"))
      this.step[this.step.length - 1].stepno = this.add.length+1
      this.step[this.step.length - 1].images = imgs;
      // this.step[this.step.length-1].recipeId = recipeId
      // console.log( this.step[this.step.length-1])
      this.data = this.step[this.step.length - 1];
      this.add.push(this.data);
      console.log(this.add);
      // console.log(this.add.length);
      this.axios.post("http://192.168.1.52:8765/api/cms-service/cookingStep/save?token=666666",this.add)
      .then((res)=>{
        console.log(res)
        if(res.data.msg == "操作成功"){
             this.$message('添加成功')
             this.$router.push({path:"/AddFood"})
        }else{
          this.$message('添加失败')
        }
      })
    },
    // 增加一行
    addNewMessage: function() {      
      let imgs = window.localStorage.getItem("cooking");
      //  console.log(window.localStorage.getItem("shiID"))
      this.step[this.step.length - 1].stepno = this.add.length+1
        // console.log(this.step[this.step.length - 1].stepno)
      this.step[this.step.length - 1].images = imgs;
      // this.step[this.step.length-1].recipeId = recipeId
      // console.log( this.step[this.step.length-1])
      this.data = this.step[this.step.length - 1];
      this.add.push(this.data);
      console.log(this.add)

      //  this.add.length = [this.step.length]
      this.step.push({
        // 当前步骤
        // Nextstepno:'',
        // 提示标题
        title: "10",
        // 小提示
        tips: "",
        // 花费时间
        timeCost: "10",
        stepno: 1,
        // 步骤描述
        description: "",
        images: "",
        cookingStage: "",
        recipeId: window.localStorage.getItem("shiID")
      });
    },
    // // 添加完毕
    // addup() {
    //   // console.log(this.add)
    //   // console.log(this.add)
    // },
    // 删除一行
    submitForm: function(index) {
      // console.log(this.Food);
      this.submitted = true;
      this.step.splice(this.step.length - 1);
    }
  }
};
</script>
<style lang="scss" scoped>
// .el-autocomplete {
//   width: 100%;
// }
.el-form-item__label {
  font-size: 16px;
}
.Add {
  font-size: 18px;
  color: #606266;
}
.z_step {
  border-radius: 5px;
  margin: 20px 0px;
  padding: 10px;
}
.step_left {
  width: 1200px;
  display: inline-block;
}
.step_right {
  display: inline-block;
}
.Adds {
  font-size: 18px;
  color: #606266;
  display: inline-block;
}
.Addx {
  font-size: 18px;
  color: #606266;
  display: inline-block;
  margin-left: 19%;
}
.recipes {
  font-size: 24px;
  color: #475669;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

