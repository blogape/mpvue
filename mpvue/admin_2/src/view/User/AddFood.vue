<template>
<div id="form-message">
              <!-- 商城 -->
      
<div class="recipes">添加食材与调料</div>  
<div v-for="AddFood in food">
  <!-- 云食谱 -->
  <div>
    <el-autocomplete   v-model="AddFood.ingredientName" :trigger-on-focus="false" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect">
                <el-select v-model=" AddFood.type" slot="prepend" placeholder="请选择" style="width:120px">
                  <el-option
                      v-for="item in materials" 
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
      </el-autocomplete> 
          <!-- 分量 -->
            <div  style="display:inline-block; margin-left:10px;">
              <el-input placeholder="请输入分量(克)" v-model="AddFood.unitAndAmount" class="input-with-select" style="width:300px;"></el-input>
            </div>

              <el-button class="btn btn-success" @click.prevent="submitForm">删除一行</el-button>
              <el-button type="danger" @click="addNew" >增加一行</el-button>
      </div>
</div>
<div style="margin: 20px 0;"></div>
<el-button type="primary" @click="AddFood" style="display:inherit">创建</el-button>
<!-- 食谱添加设备 -->
          <div style="margin: 20px 0;"></div>
              <div class="recipes">食谱添加设备</div> 
          <div style="margin: 10px 0;"></div>              
                    <el-select v-model="Cookbook" multiple placeholder="请选择" style="width:350px">
                        <el-option
                         v-for="item in Cookbooks" 
                         :key="item.model"
                         :label="item.introduce" 
                         :value="item.introduce+'.'+item.model+'.'+item.uuid">
                        </el-option>
                    </el-select>                    
                    <el-button type="primary" @click="postcookbook">立即创建</el-button>  

<!-- 食谱添加分类 -->
          <div style="margin: 20px 0;"></div>
              <div class="recipes">食谱添加分类</div>
          <div style="margin: 10px 0;"></div>  
                    <el-select v-model="Addclassval" multiple placeholder="请选择" >
                        <el-option
                         v-for="item in Addclass" 
                         :key="item.id"
                         :label="item.categoryName" 
                         :value="item.categoryName+'.'+item.id">
                        </el-option>
                    </el-select>                    
                    <el-button type="primary" @click="AddclassID">立即创建</el-button>  
<div style="width:100%">
  <div style="margin: 30px 0;"></div>
<el-button type="success"  style="display:inherit; margin:auto;width:200px" @click="Releases">发布食谱</el-button>
</div>

</div>
</template>
<script>
export default {
  data() {
    return {
      submitted: false,
      food: [
        {
          // ingredientId:"",
          ingredientName: "",
          unitAndAmount: "",
          type: "",
          // skuid: "",
          recipeId: window.localStorage.getItem("shiID")
        }
      ],

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
      names: "",
      restaurants: [],
      shopping: "",
      timeout: null,

      // 食谱添加设备
      Cookbook:[],
      Cookbooks:[],
      cookbookbox:[],
      // 食谱添加分类
      Addclassval:[],
      Addclass: [],
      classval:[],
    };
  },
  created(){
    this.cookbook()
    this.Addclassification()
  },
  methods: {
    // 食谱添加设备
      cookbook(){
        let _this = this
        _this.axios.get("http://192.168.1.52:8765/api/iot-service/iot/getMacModelList?token=666666")
        .then(res=>{
          // console.log(res)
          // console.log( res.data.data)
          this.Cookbooks = res.data.data
        })
      },
    // 食谱添加分类
      Addclassification(){
        this.axios.get("http://192.168.1.52:8765/api/search-service/category/listByLevel?token=666666&categoryLevel=2",{})
        .then((res)=>{
          // console.log(res.data.data[0].categoryName)
          // console.log(res.data.data[0].id)
          // console.log("食谱添加分类",res)
          this.Addclass = res.data.data
        })
      },
    postcookbook(){
      let addcooks = this.Cookbook
      // console.log(addcooks)
        for(var i = 0; i<addcooks.length; i++){
          let addbox = addcooks[i].split(".")
          let box = {}
          box.macName = addbox[0];
          box.macModel  = addbox[1];
          box.iotMacModelId  = addbox[2];
          box.recipeId  = window.localStorage.getItem("shiID")
          this.cookbookbox.push(box)
          console.log(this.cookbookbox)
        }
                  this.axios.post("http://192.168.1.52:8765/api/cms-service/recipeMacMid/recipeAddMac?token=666666",this.cookbookbox)
          .then(res=>{
            console.log(res)
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
      console.log( this.classval)
      }
      // console.log(this.classval)
            this.axios.post("http://192.168.1.52:8765/api/cms-service/recipeCategoryMid/recipeAddCategory?token=666666",this.classval)
            .then(res=>{
              console.log(res)
              if(res.data.msg == "操作成功"){
                  this.$message('添加成功')
              }
            })
      },
    // 增加一行
    addNew() {
      this.food.push({
        // ingredientId:"",
        ingredientName: "",
        unitAndAmount: "",
        type: "",
        // skuid:"",
        recipeId: window.localStorage.getItem("shiID")
      });
    },
    // 删除一行
    submitForm: function(index) {
      this.submitted = true;
      this.food.splice(this.food.length - 1);
    },
    // 提交材料
    AddFood() {
      console.log(this.food);
      this.axios.post("http://192.168.1.52:8765/api/cms-service/recipeIngredientMid/recipeAddIngredient?token=666666",this.food)
        .then(res => {
          if (res.data.msg == "操作成功") {
            this.$message({
              message: "添加成功",
              type: "warning"
            });
          } else {
            this.$message({
              message: "添加失败",
              type: "warning"
            });
          }
        });
    },
    // 模糊查询
    loadAll() {
      return [];
    },
    querySearchAsync(queryString, cb) {
      // 存储全部数据
      var shoppingcontent = [{}];
      //调用的后台接口
      //从后台获取到对象数组
      var add = this.food;
      add.forEach(r => {
        this.names = r.ingredientName;
      });

      this.axios.get(
          "http://192.168.1.52:8765/api/mall-service/mallIngredient/getByKeyword?token=666666&keyword=" +
            this.names
        )
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
          // console.log(shoppingMall);
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
          this.content = shoppingcontent;
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
      // this.timeout = setTimeout(() => {
      //   cb(results);
      // }, 8000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      // let skuids = item.skuid
      this.skuids = item.skuid;
      // console.log(this.skuids);
      //  window.localStorage.setItem("skuids",skuids)
      //  this.names =window.localStorage.getItem("skuids")
      // console.log(this.names)
    },

    // 发布食谱
    Releases() {
      let shipuID = window.localStorage.getItem("shiID");

      this.axios
        .put(
          "http://192.168.1.52:8765/api/cms-service/recipe/publish?token=666666&recipeId=" +
            shipuID
        )
        .then(res => {
          if (res.data.msg == "操作成功") {
            this.$message({
              message: "添加成功",
              type: "warning"
            });
            this.$router.push({path:"/FoodAdst"})
          } else {
            this.$message({
              message: "添加失败",
              type: "warning"
            });
          }
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
