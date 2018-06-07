<template>
  <div id="Release">
      <!-- 添加食谱 -->
         <div class="Add">食谱名称</div>
          <el-input
            placeholder="请输入内容"
            v-model="lookup"
            clearable>
          </el-input>
        <div style="margin: 20px 0;"></div>
        <!-- 上传封面图片 -->
        <div class="Add">封面图片</div>
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
        <div class="Add">介绍图片</div>
         <div style="margin: 10px 0;"></div>  
             <ul class="clearfix">  
                  <li v-if="imgs.length>0" v-for='(item ,index ) in imgs'>  
                      <img :src="item">  
                  </li>  
                  <li style="position:relative" v-if="imgs.length>=6 ? false : true">  
                       <input class="upload" @change='add_imgx'  type="file">
                       <hr>
                       进度:{{prog}} %
                       <hr>                      
                 </li>                   
            </ul>        
      <div style="margin: 20px 0;"></div>
    <!-- 难度时间 -->
         <div class="Add">添加难度</div>
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
        <!-- <el-cascader
                    placeholder="选择设备"
                    :options="options2"
                    @active-item-change="handleItemChange"
                    :props="props"> 
        </el-cascader> -->
      <div style="margin: 20px 0;"></div>  
    <!-- 添加标签 -->
      <div class="Add">添加标签</div>
      <div style="margin: 10px 0;"></div>    
      <el-input
            placeholder="请输入内容"
            v-model="Labels"
            clearable>
      </el-input>
      <div style="margin: 20px 0;"></div>

    <!-- 添加简介 -->
      <div class="Add">添加简介</div>
      <div style="margin: 10px 0;"></div>
      <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 6}"
            placeholder="请输入内容"
            v-model="introduce">
      </el-input> 

      <div style="margin: 20px 0;"></div>
      <!-- 添加小提示 -->
    <div class="Add">添加小提示</div>
    <div style="margin: 10px 0;"></div>
      <el-input
            type="textarea"
            autosize
            placeholder="请输入内容"
            v-model="tip">
      </el-input>
        <div style="margin: 20px 0;"></div>
        <!-- 确定   -->
        <el-button type="primary" @click="onSubmit" :plain="true">立即创建</el-button>


    <!-- 食谱添加食材 -->
     <div style="margin: 10px 0;"></div>
    <div class="recipes">添加食材(商城和云食谱只可以选一个)</div>
     <div style="margin: 10px 0;"></div>
 <div id="form-message">
<div v-for="AddFood in Food">
  <!-- 云食谱 -->
  <div>
              <el-input placeholder="请输入内容" v-model="AddFood.ingredientName" class="input-with-select" style="width:300px;">
                <el-select v-model="AddFood.type" slot="prepend" placeholder="请选择" style="width:120px">
                  <el-option
                      v-for="item in materials" 
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-input>
          <!-- 分量 -->
            <div  style="display:inline-block; margin-left:10px;">
              <el-input placeholder="请输入分量" v-model="AddFood.unitAndAmount" class="input-with-select" style="width:300px;"></el-input>
            </div>
            <!-- 商城 -->
              <el-autocomplete v-model="shopping" :trigger-on-focus="false" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect">
                <el-select v-model="shoppingval" slot="prepend" placeholder="请选择" style="width:120px">
                  <el-option
                      v-for="item in shoppings" 
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-autocomplete>
              <el-button class="btn btn-success" @click.prevent="submitForm"  >删除一行</el-button>
      </div>
</div>

<el-button type="primary" @click="addNewMessage" style="display:inherit">增加一行</el-button>
 <div style="margin: 10px 0;"></div>
 <el-button type="primary" @click="onRecipes">立即创建</el-button>
</div>
  <!-- 食谱添加食材结束 -->
 

  <!-- 添加设备 -->

    <!-- <div class="recipes">添加设备</div>
        <div style="margin: 10px 0;"></div>
          <div  style="display:  inherit; ">

                <el-select v-model="equipmentval" slot="prepend" placeholder="请选择" style="width:120px">
                  <el-option
                      v-for="item in equipments" 
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
                <el-cascader
                placeholder="试试搜索：指南"
                change-on-select
                :clearable="false"
                  :options="equipments"
                  active-item-change
                  v-model="equipmentval"
                  @change="addequipmentval">
                </el-cascader>                  
                  <el-input placeholder="请输入内容" v-model="equipment" class="input-with-select" style="width:300px;"></el-input>
          </div>
            <div style="margin: 10px 0;"></div> 
            <el-button type="primary" @click="addequipment">立即创建</el-button> -->
  <!-- 添加设备结束 -->

     <div style="margin: 20px 0;"></div>
        <div class="recipes">添加食谱烹饪步骤</div>
            <div class="z_step">
                    <div class="step_box clearLR Next " v-for="(item,index) in Next " >
                        <!-- 第几种
                        <div class="Adds" >第几个</div>
                        <el-input v-model="NextID " placeholder="请输入内容"></el-input>   -->
                 <el-select v-model="Addclassval" multiple placeholder="请选择" >
                        <el-option
                         v-for="item in Addclass" 
                         :key="item.id"
                         :label="item.categoryName" 
                         :value="item.categoryName+'.'+item.id">
                        </el-option>
                    </el-select>                          
                            <!-- 阶段 -->
                        <div style="margin: 10px 0;"></div>                            
                        <div class="Adds" >步骤阶段</div>
                        <!-- <el-input v-model="NextStage " placeholder="请输入内容"></el-input> -->
                            <!-- 步数 -->
                        <div style="margin: 10px 0;"></div> 
                        <div class="Adds" >当前第几步</div>
                        <div style="margin: 10px 0;"></div>                         
                        <el-input v-model="Nextstepno" placeholder="请输入内容"></el-input>
                        <!-- 时间 -->
                        <div style="margin: 10px 0;"></div>                         
                        <div class="Adds" >花费时间</div>
                        <el-input v-model="Nexttime" placeholder="请输入内容"></el-input>
                        <!-- 提示标题 -->
                        <div style="margin: 10px 0;"></div>                         
                        <div class="Adds" >提示标题</div>
                        <el-input v-model="Nexttitle" placeholder="请输入内容"></el-input>
                        <!-- 提示 -->
                        <div style="margin: 10px 0;"></div>                                  
                        <div class="Adds" >提示</div>
                        <el-input v-model="Nexttips " placeholder="请输入内容"></el-input>
                                    <!-- 上传图片 -->
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
                    <div class="Adds">步骤描述</div>
                    <el-input
                        type="textarea"
                      :autosize="{ minRows: 4  , maxRows: 4}"
                        placeholder="请输入内容"
                        v-model="NextText">
                    </el-input>
                  <div class="floatL deleteBtn step_right"> <el-button type="danger" style='margin-left:10px;' @click="deleteNext($event)">删除此栏</el-button></div>
                  </div>
            </div>
        <div style="margin: 10px 0;"></div> 
        <el-button type="primary" style='margin-left:10px;' @click="addNext('Next')">添加一栏</el-button>
        <el-button type="primary" @click="addsNext" >立即创建</el-button>
  <!-- 添加设备烹饪阶段 -->

     <div style="margin: 20px 0;"></div>
        <div class="recipes">添加食谱烹饪阶段</div>
            <div class="z_step">
                  <div class="step_box clearLR Phase " v-for="(item,index) in Phase " >
                      <div style="margin: 10px 0;"></div>
                      <!-- 烹饪指令 -->
                      <div class="Adds" >烹饪指令</div>
                      <div style="margin: 10px 0;"></div>
                          <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="PhaseText">
                          </el-input> 
                      <!-- 烹饪序号 -->
                      <div class="Adds" >排序序号</div>
                      <div style="margin: 10px 0;"></div>
                          <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="PhaseNumber">
                          </el-input>
                      <!-- 阶段名称 -->
                      <div class="Adds" >烹饪阶段名称</div>
                      <div style="margin: 10px 0;"></div>
                          <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="PhasestageName ">
                          </el-input> 
                      <!-- 阶段时间 -->
                      <div class="Adds" >阶段时间</div>
                      <div style="margin: 10px 0;"></div>
                          <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="Phastime ">
                          </el-input> 
                      <!-- 食谱设备ID -->
                      <div class="Adds" >选择设备</div>
                      <div style="margin: 10px 0;"></div>
                        <el-select v-model="Phasval" placeholder="请选择" >
                          <el-option
                            v-for="item in Phasx"
                            :key="item.id"
                            :label="item.macName"
                            :value="item.id"
                             >
                          </el-option>
                        </el-select>
                       <div style="margin: 20px 0 20px 0;"></div>
                       <div class="floatL deleteBtn step_right"> <el-button type="danger" style='margin-left:10px;' @click="deletePhase($event)">删除此栏</el-button></div>
                  </div>
            </div>                          
                  <div style="margin: 10px 0;"></div> 
                  <el-button type="primary" style='margin-left:10px;' @click="addPhase('Phase')">添加一栏</el-button>
                  <el-button type="primary" @click="addsPhase">立即创建</el-button>
          <!-- 食谱添加分类 -->
          <div style="margin: 20px 0;"></div>
              <div class="recipes">食谱添加分类</div>  
                    <el-select v-model="Addclassval" multiple placeholder="请选择" >
                        <el-option
                         v-for="item in Addclass" 
                         :key="item.id"
                         :label="item.categoryName" 
                         :value="item.categoryName+'.'+item.id">
                        </el-option>
                    </el-select>                    
                    <el-button type="primary" @click="AddclassID">立即创建</el-button>  
                    <div style="margin: 40px 0;"></div>
                    <el-button type="primary" @click="Release" style="display:inherit;margin:auto;width:300px;">发布食材</el-button>
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
      // 进度条
        prog:'',
        imgs: [],
        // 封面图片
      coverphoto:'',
      // 介绍图片
      inimages:'',
      // 步骤图片
      Cookings:'',
      // 添加食材信息总
      // 食谱ID
      // 表单
      restaurants: [],
      // 查询
      lookup: "",

      timeout: null,
      // 简介
      introduce: "",
      // 提示
      tip: "",
      // 描述
      Labels: "",

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
      // 烹饪时间
      time: [],
      times: [
        {
          value: "100",
          label: "10分钟左右"
        },
        {
          value: "600",
          label: "10-30分钟"
        },
        {
          value: "300",
          label: "30-60分钟"
        },
        {
          value: "400",
          label: "一个小时以上"
        },
        {
          value: "自定义",
          label: "自定义"
        }
      ],
      // 烹饪设备
      // equipment: [],

      value11: [],
      // 添加食材总
      submitted:false,
      Food:[{
          ingredientName:'',
          type:'',
          unitAndAmount:"",
          recipeId: window.localStorage.getItem("shiID"),
          skuid:this.content
      }],
      equipment1: [0],
      // 主料辅料选择
      // 主料
      type: [],
      materials: [
        {
          value: "0",
          label: "主料"
        },
        {
          value: "1",
          label: "辅料"
        }
      ],
      

 
      // 商城加 模糊查询
      restaurants: [],
      shopping: "",
      timeout: null,
      content:'',
      // 设备
      equipment: "",
      equipmentval:[],
      equipments:[
        {
          value: "面包机",
          label: "面包机"
        },
        {
          value: "牛扒机",
          label: "牛扒机"
        }
      ],

    // 食谱步骤
        Next:[0],
        NextText:"",
        NextStage:'',
        Nextstepno:'', 
        Nexttitle:'',
        Nexttips:'',
        NextID:'',
        Nexttime:'',

      // 添加食谱烹饪步骤参数
      Phase:[0],
      PhaseText:'',
      PhaseNumber:'',
      PhasestageName:'',
      Phastime:'',
      PhasID:'',
      Phasval:[],
      Phasx:[],

      // 食谱添加分类
      Addclassval:[],
      Addclass: [],
      classval:[],
      // classnames:[],
      // classids:[],
      // classcategoryLevel:[],
    };
  },
  created(){
    this.shipuIDS()
    this.Addclassification()
  },
  methods: {
    //提交基本信息
    
    onSubmit() {
      // 查询
      this.$http.post("http://192.168.1.52:8765/api/cms-service/recipe/saveRecipe?token=666666",{
          
          // description: " 拎起一小块牛排丢到嘴里，能清楚感受到汁水随着牙齿的咀嚼而散溢开来",
          // difficultyDegree: "2",
          // images: "http://headimg.jpg,http://headimg.jpg",
          // tags: "澳洲牛肉,烤箱,牛扒机",
          // timeCost: 600,
          // tips: "如果你喜欢蒜香，还可以再放入黄油时放入两粒蒜瓣～别有风味",
          // title: "菲力牛排",
            //  userId: 1,

           timeCost:this.time,
           difficultyDegree:this.difficulty,
           coverimg:this.coverphoto,
            type: "1",
            userId: 1,
            videos: "http://video.com,http://video.com",
           title: this.lookup,
           tips:this.tip,
          description :this.introduce,
          tags:this.Labels,
          images: this.inimages,
      })
      .then(res=>{
        console.log(res.data.data.id)
       if(res.data.msg == "操作成功"){
             this.$message('操作成功');
       }else{
         this.$message('操作失败');
       }
            // window.localStorage.setItem("shiID") = res.data.data.id
          //  var shipuID = window.localStorage;
          //   shipuID["shiID"] = res.data.data.id;

      })
    },
    // 发布食材
    Release(){
      var Releases = window.localStorage.getItem("shiID")
      console.log(Releases)
      this.$http.put("http://192.168.1.52:8765/api/cms-service/recipe/publish?token=666666&recipeId="+Releases)
      .then(res=>{
        console.log(res)
               if(res.data.msg == "操作成功"){
             this.$message('操作成功');
       }else{
         this.$message('操作失败');
       }
      })
    },
    // 提交食材(添加食材)
    onRecipes() {
      console.log(this.Food)
      
      // console.log(this.material)
      // console.log(this.materialval)
      // console.log(this.Weightval+this.Weight)
      // console.log(this.skuidsval)
      // console.log( this.content)
      // console.log(window.localStorage.getItem("shiID"))
      // this.$http.post( "http://192.168.1.52:8765/api/cms-service/recipeIngredientMid/recipeAddIngredient?token=666666",
      //     [
      //       {
      //         ingredientName: this.materialval,
      //         type: this.material,
      //         unitAndAmount: this.Weightval + this.Weight,
      //         recipeId: window.localStorage.getItem("shiID"),
      //         skuid :this.content,
      //       }
      //     ]
      //   )
      //   .then(res => {
      //     console.log(res);
      //            if(res.data.msg == "操作成功"){
      //        this.$message('操作成功');
      //  }else{
      //    this.$message('操作失败');
      //  }
      //   });
    },
    // 提交商城食材的skuid
     loadAll() {
      return [

      ];
    },    querySearchAsync(queryString, cb) {
        // 存储全部数据
      var shoppingcontent = [{}];
      //调用的后台接口
      //从后台获取到对象数组
      console.log()
      this.$http.get("http://192.168.1.52:8765/api/mall-service/mallIngredient/getByKeyword?token=666666&keyword=" +this.shopping)
        .then(res => {
            // 获取数据
          let shoppingMall = res.data.data;
        //   获取名字
          let skuidcalss = [];
          // 获取分类下面
          let classcontent = [];
          // 获取分类名字
          let classname = [];
          //  获取分类skuid
          let skuid = [];
          console.log(shoppingMall)
          shoppingMall.forEach(shoppingMall => {
            //   获取名字
            skuidcalss.push(shoppingMall.productname);
            // 获取分类下面
            classcontent = shoppingMall.specification;
            classcontent.forEach(classcontent => {
                // 获取分类名字
              classname.push(classcontent.description);
            //   获取分类skuid
              skuid.push(classcontent.skuid);
            });
          });
        //   console.log(classname)
        //   console.log(skuid)
          for (let i = 0; i < skuidcalss.length; i++) {
            shoppingcontent.push({
              value: skuidcalss[i],
              address: classname[i],
              skuid: skuid[i]
            });
          }
          this.content = shoppingcontent
          cb(shoppingcontent);
        })
        .catch(error => {
          // console.log(error);
        });

      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 8000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      this.content = item.skuid
      console.log()
    },
    // 提交食材结束
    // 添加删除食材行数
	addNewMessage: function(){
		this.Food.push({
         ingredientName:'',
          type:'',
          unitAndAmount:"",
          recipeId: '',
          skuid:''
        });
	},
    submitForm: function(index) {
    	console.log(this.Food);
        this.submitted=true
        this.Food.splice(index,1)
    },
    // 添加步骤行数
    addNext (b) {
      // console.log("111111")
      if (b == "Next") this.Next.push(this.Next.length);
      else if (b == "Next2") this.Next2.push(this.Next2.length);
      else this.Next3.push(this.Next3.length);
    },
    deleteNext (event) {
      console.log(event.currentTarget);
      var Next = document.querySelectorAll(".Next");
      event.currentTarget.parentNode.parentNode.parentNode.removeChild(
        event.currentTarget.parentNode.parentNode
      );
    },
     // 添加食谱烹饪步骤参数行数
    addPhase (c) {
      if (c == "Phase") this.Phase.push(this.Phase.length);
      else if (c == "Phase2") this.Phase2.push(this.Phase2.length);
      else this.Phase3.push(this.Phase3.length);
    },
    deletePhase (event) {
      console.log(event.currentTarget);
      var Next = document.querySelectorAll(".Phase");
      event.currentTarget.parentNode.parentNode.parentNode.removeChild(
        event.currentTarget.parentNode.parentNode
      );
    },
    // 查询食谱ID
    shipuIDS(){
      // 存储
    // var shipud = window.localStorage.getItem("shiID")
    //     console.log(shipud)
    this.$http.get("http://192.168.1.52:8765/api/search-service/recipeMacMid/getByRecipeId?token=666666&recipeId=1")
    .then((res)=>{
      // console.log(res.data.data)
     this.Phasx =res.data.data
    //  console.log(this.Phasx)
    })  
    },
    // 添加食谱烹饪步骤参数
    addsPhase(){
        // console.log(this.Phasval)
        // console.log(this.PhaseText)
        // console.log(this.PhaseNumber)
        // console.log(this.Phastime)
        // console.log(this.PhasestageName)
        this.$http.post("http://192.168.1.52:8765/api/cms-service/cookingstage/saveOne?token=666666",{
            instruction:this.PhaseText ,
            orderby: this.PhaseNumber,
            recipeMacMidId:this.Phasval,
            stageName: this.PhasestageName,
            totalTime: this.Phastime
        })
        .then(res=>{
          // console.log(res)
                 if(res.data.msg == "操作成功"){
             this.$message('操作成功');
       }else{
         this.$message('操作失败');
       }          
        })
    },


    // 添加设备
    addequipmentval(value){
      // this.equipments.push(value)
        // console.log(value)
        // console.log(this.equipments)
      },
    addequipment(){
    },

    // 添加食谱烹饪步骤
    addsNext(){
      // console.log(this.NextID)
      // console.log(this.NextStage)
      // console.log(this.Nextstepno)
      // console.log(this.Nexttime)
      // console.log(this.Nexttitle)
      // console.log(this.Nexttips)
      // console.log(this.NextText)
      // console.log( window.localStorage.getItem("shiID"))
      this.$http.post("http://192.168.1.52:8765/api/cms-service/cookingStep/save?token=666666",[
        {
            cookingStage: this.NextStage,
            description: this.NextText,
            images:this.Cookings,
            recipeId: window.localStorage.getItem("shiID"),
            stepno:this.Nextstepno,
            timeCost:this.Nexttime,
            tips: this.Nexttips,
            title: this.Nexttitle,
            videos: ""
      }
      ])
      .then((res)=>{
        console.log(res)
                 if(res.data.msg == "操作成功"){
             this.$message('操作成功');
       }else{
         this.$message('操作失败');
       }        
      })
    },
    // 食谱添加分类
      Addclassification(){
        this.$http.get("http://192.168.1.52:8765/api/search-service/category/listByLevel?token=666666&categoryLevel=2",{})
        .then((res)=>{
          // console.log(res.data.data[0].categoryName)
          // console.log(res.data.data[0].id)
          // console.log(res)
          this.Addclass = res.data.data
        })
      },
      AddclassID(){
            //  d.push(b[i].split(".")[1])
      let add = this.Addclassval;
      // console.log(add)
      for(var i = 0; i<add.length; i++){
      let data = add[i].split(".");
      // console.log(data)
      let item={};
      item.categoryName=data[0];
      item.categoryId =data[1];
      item.recipeId = window.localStorage.getItem("shiID")
      // console.log(shipud)
      this.classval.push(item)
      }
      // console.log(this.classval)
            this.$http.post("http://192.168.1.52:8765/api/cms-service/recipeCategoryMid/recipeAddCategory?token=666666",this.classval)
            .then(res=>{
              console.log(res)
                 if(res.data.msg == "操作成功"){
             this.$message('操作成功');
       }else{
         this.$message('操作失败');
       }
            })
      },
    // 封面图片
add_imgs(event){    
            let reader =new FileReader();  
            // console.log(event.target.files[0])
            let file=event.target.files[0];  
            // console.log(file.name)
            let name = file.name;  
            let _this = this
           client.multipartUpload(file.name, file, { progress: this.progress })
            .then(function(data) {
            // console.log("返回地址", data.res.requestUrls);
            _this.coverphoto=  data.res.requestUrls.toString()
             _this.coverphoto.substring(0,_this.coverphoto.indexOf("?"))
              console.log(_this.coverphoto)
           });
},
//     // 介绍图片
add_imgx(event){    
            let reader =new FileReader();  
            // console.log(event.target.files[0])
            let file=event.target.files[0];  
            // console.log(file.name)
            let name = file.name;  
            let _this = this
           client.multipartUpload(file.name, file, { progress: this.progress })
            .then(function(data) {
            // console.log("返回地址", data.res.requestUrls);
            _this.inimages = data.res.requestUrls.toString()
               _this.coverphoto.substring(0,_this.coverphoto.indexOf("?"))
              console.log(_this.coverphoto)
            // console.log(_this.inimages.toString())
           });
},
    // 食谱烹饪步骤图片
add_img(event){    
            let reader =new FileReader();  
            // console.log(event.target.files[0])
            let file=event.target.files[0];  
            // console.log(file.name)
            let name = file.name;  
            let _this = this
           client.multipartUpload(file.name, file, { progress: this.progress })
            .then(function(data) {
            // console.log("返回地址", data.res.requestUrls);
            _this.Cookings = data.res.requestUrls.toString()
            console.log( _this.Cookings.toString())
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

  },
  mounted() {
     this.restaurants = this.loadAll();
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
