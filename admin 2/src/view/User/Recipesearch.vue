<template>
	<section>
<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;margin-bottom:80px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="食谱名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUsers">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增食谱</el-button>
				</el-form-item>
			</el-form>
		</el-col>
   <!-- 食谱列表栏 -->
<div class="recselist">
<ul>
  <li v-for="{shops,key} in shop.list" :key='key'>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple img"><img :src="shops.coverimg"/></div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple">
    <!-- 标题 -->
    <div class="title">
    <!-- 黑椒菲力牛排 -->
    {{shops}}
    </div>
    <!-- 描述 -->
    <div class="describe">

      如果牛排是在冷冻状态，就算是封在真空袋中，退冰时切忌放入直接水中，因为水压会将      如果牛排是在冷冻状态，就算是封在真空袋中，退冰时切忌放入直接水中，因为水压会将
    </div>
    <!-- 主料 -->
    <div class="mainrecip">
      主料：菲力牛排    辅料：黑椒
    </div>
    </div></el-col>
</el-row>
  </li>

</ul>
</div>

<div class="block">
  <el-pagination
  background
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>
	</section>
</template>

<script>
export default {
  data() {
    return {
      shop: "",
      filters: {
      name: "",
      }
    };
  },
  methods: {
    getUsers() {
      console.log(this.name);
      this.Ajax.get(
        "http://192.168.1.52:8765/api/search-service/es/keyword?keyword=" + this.name,
        {},
        res => {
          console.log(res);
          this.shop = res;
        }
      );
    },
    handleAdd() {}
  },
  created() {

 this.Ajax.get(
        "/dev/api/search-service/es/keyword?keyword",
        {},
        res => {
          console.log(res);
          this.shop = res;
        }
      );


  }
};
</script>

<style lang='scss'>
.toolbar {
  // height: 60px;
  overflow: hidden;
}
.recselist {
  // margin-top: 60px;
  ul {
    li {
      clear: both;
      margin-top: 30px;
      .title {
        font-size: 18px;
        font-weight: bold;
      }
      .img {
        width: 240px;
        height: 240px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .describe {
        line-height: 24px;
        margin-top: 10px;
      }
      .mainrecip {
        line-height: 24px;
        margin-top: 10px;
      }
    }
  }
}
</style>
