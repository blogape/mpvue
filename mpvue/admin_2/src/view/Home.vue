<template>
<el-row class="container">
  <!-- 头部导航-->
  <el-col :span="24" class="header">
    <!-- logo显示 -->
      <el-col :span="4" class="logo">
       <!-- 宜居云管理系统 -->
       ADMIN
			</el-col>
      <!-- 个人信息 -->
      <el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img src="https://avatars1.githubusercontent.com/u/21223980?s=40&v=4" /> 李大钊</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided  @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
  </el-col>
  <!-- 所有内容 -->
		<el-col :span="24" class="main">
      			<aside class='menu-expanded'>
  <!-- 导航菜单 -->
    <el-menu
    @select="handleSelect"
    :default-active="$route.path"
      class="el-menu-vertical-demo"
    @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409EFF">
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
      <el-menu-item index="/user">
        表格
          </el-menu-item>
          <el-menu-item index="/form">表单</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
 <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf" >
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
</template>
    </el-menu>
  </aside>
    <section class="content-container">
				<div class="grid-content bg-purple-light">
								<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
          <el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
</el-row>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  computed: {
    activeIndex() {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(this);
      // alert(key);
      this.$router.push(key);
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      console.log(key);
      // this.$router.push(key);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        //type: 'warning'
      })
        .then(() => {
          // console.log();
          this.Ajax.post(
            "/dev/api/user-service/backUser/logout?token=" +
              window.localStorage["user"],
            {},
            res => {
              console.log(res);
              //是否调用成功
              //  if(res.code==0){

              //  }
            }
          );
          localStorage.removeItem("user");
          _this.$router.push("/login");
        })
        .catch(() => {});
    }
  }
  //退出登录
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .header {
    height: 60px;
    line-height: 60px;
    background: #409eff;
    color: #fff;
    .logo {
      height: 60px;
      font-size: 22px;
      width: 230px;
      padding-left: 20px;
      padding-right: 20px;
      border-color: rgba(238, 241, 146, 0.3);
      border-right-width: 1px;
      border-right-style: solid;
    }
    .userinfo {
      text-align: right;
      padding-right: 35px;
      float: right;
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin: 10px 0px 10px 10px;
          float: right;
        }
      }
    }
  }
  .main {
    display: flex;
    // background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    aside {
      flex: 0 0 230px;
      width: 230px;
      // position: absolute;
      // top: 0px;
      // bottom: 0px;
      .el-menu {
        height: 100%;
      }
      .collapsed {
        width: 60px;
        .item {
          position: relative;
        }
        .submenu {
          position: absolute;
          top: 0px;
          left: 60px;
          z-index: 99999;
          height: auto;
          display: none;
        }
      }
    }

    .menu-collapsed {
      flex: 0 0 60px;
      width: 60px;
    }
    .menu-expanded {
      flex: 0 0 230px;
      width: 230px;
    }
    .content-container {
      // background: #f1f2f7;
      flex: 1;
      // position: absolute;
      // right: 0px;
      // top: 0px;
      // bottom: 0px;
      // left: 230px;
      overflow-y: scroll;
      padding: 20px;
      .breadcrumb-container {
        //margin-bottom: 15px;
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        .breadcrumb-inner {
          float: right;
        }
      }
      .content-wrapper {
        background-color: #fff;
        padding-top: 20px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
