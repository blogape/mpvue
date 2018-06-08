<template>
    <div>
            <!-- 添加食谱 -->
         <div class="Add">食谱详情名称</div>
         <div style="margin: 10px 0;"></div>
          <el-input
            placeholder="请输入内容"
            v-model="lookup"
            maxlength="30"
            type="text"
            clearable>
          </el-input>
          <div style="margin: 10px 0;"></div>
        <div class="tips">(提示：限定字数30个字)</div>
        <div style="margin: 20px 0;"></div>
        <!-- 上传介绍图片 -->
        <div class="Add">列表图片</div>
         <div style="margin: 10px 0;"></div>  
             <ul class="clearfix">  
                  <li v-if="imgs.length>0" v-for='(item ,index ) in imgs'>  
                      <img :src="item">  
                  </li>  
                  <li style="position:relative" v-if="imgs.length>=6 ? false : true">  
                       <input class="upload" @change='add_imgx'  type="file">
                       <hr>
                       进度:{{progs}} %
                       <hr>                      
                 </li>                   
            </ul>      
        <!-- 上传封面图片 -->
        <div class="Add">食谱详情封面图片</div>
         <div style="margin: 10px 0;"></div>  
             <ul class="clearfix">  
                  <li v-if="imgs.length>0" v-for='(item ,index ) in imgs'>  
                      <img :src="item">  
                  </li>  
                  <li style="position:relative" v-if="imgs.length>=6 ? false : true">  
                       <input class="upload" @change='add_imgs'  type="file">
                       <hr>
                       进度:{{prog}} %
                       <hr>                      
                 </li>                   
            </ul>  
  
      <div style="margin: 20px 0;"></div>
    <!-- 难度时间 -->
         <div class="Adds" style="">食谱详情添加难度</div>
         <div class="Adds" style="font-size: 18px;color: #606266; margin-left:12%">添加时间</div>
         <div class="Adds" style="font-size: 18px;color: #606266; margin-left:12%">添加类型</div>
          <div style="margin: 10px 0;"></div>  
          <el-select v-model="difficulty" placeholder="烹饪难度">
            <el-option
              v-for="item in difficultys"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>        
          <el-select v-model="time" placeholder="烹饪时间">
            <el-option
              v-for="item in times"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="types" placeholder="食谱类型">
            <el-option
              v-for="item in typeclass"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

          <div style="margin: 20px 0;"></div>


      <div style="margin: 20px 0;"></div>  
    <!-- 添加标签 -->
      <div class="Add">添加食谱标签</div>
      <div style="margin: 10px 0;"></div>    
      <el-input
            placeholder="请输入内容"
            v-model="Labels"
            clearable>
      </el-input>
      <div style="margin: 20px 0;"></div>

    <!-- 添加简介 -->
      <div class="Add">添加食谱详情简介</div>
      <div style="margin: 10px 0;"></div>
      <el-input 
            minlength="74"
            maxlength="300"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 6}"
            placeholder="请输入内容"
            v-model="introduce">
      </el-input> 
      <div style="margin: 10px 0;"></div>
<div class="tips">(提示：限定字数最低74个字，最大300个字)</div>
      <div style="margin: 20px 0; "></div>
      <!-- 添加小提示 -->
    <div class="Add">添加小贴示</div>
    <div style="margin: 10px 0;"></div>
      <el-input
            style="width:400px"
            type="textarea"
            autosize
            placeholder="请输入内容"
            v-model="tip">
      </el-input>
        <div style="margin: 20px 0;"></div>
        <!-- 确定   -->
        <el-button type="primary" @click="onSubmit">立即创建</el-button>

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
      // 查询
      lookup: "",
      imgs: [],
      //   进度条
      prog: "",
      progs:"",
      // 烹饪难度
      difficulty: [],
      difficultys: [
        {
          value: "0",
          label: "初级"
        },
        {
          value: "1",
          label: "中级"
        },
        {
          value: "2",
          label: "高级"
        }
      ],
      // 食谱类型
      types: [],
      typeclass: [
        {
          value: "0",
          label: "普通食谱"
        },
        {
          value: "1",
          label: "智能食谱"
        },
      ],
      time: [],
      times: [
        {
          value: "10",
          label: "10分钟"
        },
        {
          value: "30",
          label: "30分钟"
        },
        {
          value: "60",
          label: "60分钟"
        },
        // {
        //   value: "61",
        //   label: "一个小时以上"
        // },
        // {
        //   value: "8888",
        //   label: "自定义"
        // }
      ],
      // 描述
      Labels: "",
      // 简介
      introduce: "",
      // 提示
      tip: "",

    };
  },
  created(){

  },
  methods: {
    // 封面图片
    add_imgs(event) {
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
          let coverphotos = data.res.requestUrls+"?";
          // console.log(coverphotos)
          _this.coverphoto  = coverphotos.substring(0,coverphotos.indexOf("?"))
          console.log(_this.coverphoto)
              
        });
    },
add_imgx(event){    
            let reader =new FileReader();  
            // console.log(event.target.files[0])
            let file=event.target.files[0];  
            // console.log(file.name)
            let name = file.name;  
            let _this = this
           client.multipartUpload(file.name, file, { progress: this.progres })
            .then(function(data) {
            // console.log("返回地址", data.res.requestUrls);
            let inimage = data.res.requestUrls+"?";
              _this.inimages = inimage.substring(0,inimage.indexOf("?"))
                console.log( _this.inimages);
            // console.log(_this.inimages.toString())
           });
},
    progress(p) {
      let _this = this;
      return function(done) {
        _this.prog = p * 100;
        done();
      };
    },
    progres(p) {
      let _this = this;
      return function(done) {
        _this.progs = p * 100;
        done();
      };
    },
    //  
    onSubmit() {
        if(this.lookup == ""){
          this.$message({
          message: '食谱名称不完整',
          type: 'warning'
        })
        }else if(this.time == ""){
          this.$message({
          message: '烹饪时间不完整',
          type: 'warning'
        })
        }else if(this.lookup == ""){
           this.$message({
          message: '食谱标题不完整',
          type: 'warning'
        })
        }else if(!this.types){
            this.$message({
          message: '食谱类型不完整',
          type: 'warning'
        })
        }else if(this.Labels == ""){
          this.$message({
              message: '食谱标签不完整',
              type: 'warning'
            })
        }else if(this.difficulty == ""){
           this.$message({
              message: '难度级别不完整',
              type: 'warning'
            })
        }else if(!this.inimages){
           this.$message({
              message: '列表图片不完整',
              type: 'warning'
            })
        }else if(!this.coverphoto){
           this.$message({
              message: '封面图片不完整',
              type: 'warning'
            })
        }else if(this.introduce == ""){
             this.$message({
              message: '简介不完整',
              type: 'warning'
            })
        }else if(this.tip == ""){
              this.$message({
              message: '小贴示不完整',
              type: 'warning'
            })
        }
                     
        else {
          let AddRecipes = {
            timeCost:this.time,
            difficultyDegree:this.difficulty,
            type: this.types,
            userId: 1,
            videos: "http://video.com,http://video.com",
            title: this.lookup,
            tips:this.tip,
            description :this.introduce,
            tags:this.Labels,
            images: this.inimages,
            coverimg:this.coverphoto
        }
                      // 查询
      this.axios.post("http://192.168.1.52:8765/api/cms-service/recipe/saveRecipe?token=666666",AddRecipes)
      .then(res=>{
        if(res.data.msg == "操作成功"){
              this.$message('添加成功')
        // console.log(res.data.data.id)  
             var  shipuID = res.data.data.id;
           window.localStorage.setItem("shiID",shipuID);     
           console.log(shipuID) 
          this.$router.push({path:"/FoodStep"})       
        }
      })
        }

      // if(!this.difficulty || !this.time || !this.lookup || !this.types || !this.Labels || !this.introduce || !this.inimages || !this.coverphoto){
      //     this.$message({
      //     message: '信息输入不完整',
      //     type: 'warning'
      //   })
      // }else{
      //   let AddRecipes = {
      //       timeCost:this.time,
      //       difficultyDegree:this.difficulty,
      //       type: this.types,
      //       userId: 1,
      //       videos: "http://video.com,http://video.com",
      //       title: this.lookup,
      //       tips:this.tip,
      //       description :this.introduce,
      //       tags:this.Labels,
      //       images: this.inimages,
      //       coverimg:this.coverphoto
      //   }
      //         // 查询
      // this.axios.post("http://192.168.1.52:8765/api/cms-service/recipe/saveRecipe?token=666666",AddRecipes)
      // .then(res=>{
      //   if(res.data.msg == "操作成功"){
      //         this.$message('添加成功')
      //   // console.log(res.data.data.id)  
      //        var  shipuID = res.data.data.id;
      //      window.localStorage.setItem("shiID",shipuID);     
      //      console.log(shipuID) 
      //     this.$router.push({path:"/FoodStep"})       
      //   }
      // })
      // }
    },
    // 食谱添加分类


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
  font-size: 18px;
  color: #475669;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.tips{
  font-size: 10px;
  color: red;
}
</style>
