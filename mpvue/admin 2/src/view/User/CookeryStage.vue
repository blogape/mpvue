<template>
<div id="form-message">
              <!-- 商城 -->
   <div class="recipes">添加食谱烹饪阶段</div>    
<div v-for="CookeryStage in cooker">
  <!-- 云食谱 -->
  <div>  
                      <div style="margin: 10px 0;"></div>
                      <!-- 烹饪指令 -->
                      <div class="Adds" >烹饪指令</div>
                      <div style="margin: 10px 0;"></div>
                          <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="CookeryStage.instruction ">
                          </el-input> 
                      <!-- 烹饪序号 -->
                      <!-- <div class="Adds" >排序序号</div>
                      <div style="margin: 10px 0;"></div>
                          <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="CookeryStage.PhaseNumber">
                          </el-input> -->
                      <!-- 阶段名称 -->
                      <div class="Adds" >烹饪阶段名称</div>
                      <div style="margin: 10px 0;"></div>
                          <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="CookeryStage.stageName  ">
                          </el-input> 
                      <!-- 阶段时间 -->
                      <div class="Adds" >阶段时间</div>
                      <div style="margin: 10px 0;"></div>
                          <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="CookeryStage.totalTime  ">
                          </el-input> 
                      <!-- 食谱设备ID -->
                      <div class="Adds" >选择设备</div>
                      <div style="margin: 10px 0;"></div>
                        <el-select v-model="CookeryStage.recipeMacMidId " placeholder="请选择" >
                          <el-option
                            v-for="item in Phasx"
                            :key="item.id"
                            :label="item.macName"
                            :value="item.id"
                             >
                          </el-option>
                        </el-select>
                       <div style="margin: 20px 0 20px 0;"></div>                                                  
                  <div style="margin: 10px 0;"></div> 
              <el-button type="danger" @click="addNewMessage" >增加一行</el-button>
              <el-button class="btn btn-success" @click.prevent="submitForm">删除一行</el-button>
      </div>
</div>
<div style="margin: 10px 0;"></div> 
<el-button type="primary" @click="addsPhase" style="display:inherit">创建</el-button>

</div>
</template>
<script>
export default {
  data() {
    return {
      submitted: false,
      cooker: [
        {
      instruction : "",
      orderby: 1,
      stageName : "",
      totalTime : "",
      recipeMacMidId :"",    
        }
      ],
      Phasx: []
    };
  },
  created() {
    this.shipuIDS();
  },
  methods: {
    addNewMessage: function() {
      this.cooker.push({
      instruction : "",
      orderby: 1,
      stageName : "",
      totalTime : "",
      recipeMacMidId :"",
   
      });
    },
    submitForm: function(index) {
      // console.log(this.Food);
      this.submitted = true;
      this.cooker.splice(this.cooker.length-1);
    },
    // 选择设备
    shipuIDS() {
      // 存储
      // var shipud = window.localStorage.getItem("shiID")
      //     console.log(shipud)
      this.axios.get( "http://192.168.1.52:8765/api/search-service/recipeMacMid/getByRecipeId?token=666666&recipeId=468")
        .then(res => {
          // console.log(res.data.data)
          this.Phasx = res.data.data;
          //  console.log(this.Phasx)
        });
    },
    addsPhase() {
      console.log(this.cooker)
      // console.log(this.Phasval)
      // console.log(this.PhaseText)
      // console.log(this.PhaseNumber)
      // console.log(this.Phastime)
      // console.log(this.PhasestageName)
      this.axios.post("http://192.168.1.52:8765/api/cms-service/cookingstage/saveOne?token=666666",{CookeryStage:this.cooker}
          // {
          //   instruction: 1,
          //   orderby: 2,
          //   recipeMacMidId: 2,
          //   stageName: 1,
          //   totalTime: 1
          // }
        )
        .then(res => {
          console.log(res);
                   this.$message({
          message: '添加成功',
          type: 'warning'
        })
        this.$router.push("/AddFood")
        });
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
