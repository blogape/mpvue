<template>
    <!-- // 模板管理 -->
<div class="controlitem">
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">
    <div class="control">
      <div class="img">
        <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
      </div>
      <span class="name">模板名称</span>
      <div class="btn">
        <el-row>
           <el-col :span="12" style='text-align:center'>
            <el-button type="text">编辑</el-button>
           </el-col>
           <el-col :span='12'  style='text-align:center'>
              <el-button type="text">删除</el-button>
           </el-col>
        </el-row>
      </div>
    </div>
    </div></el-col>
<el-col :span="6"><div class="grid-content bg-purple">
    <div class="control">
      <div class="img">
        <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
      </div>
      <span class="name">模板名称</span>
      <div class="btn">
        <el-row>
           <el-col :span="12" style='text-align:center'>
<el-button type="text">文字按钮</el-button>

           </el-col>
           <el-col :span='12'  style='text-align:center'>
<el-button type="text">文字按钮</el-button>
           </el-col>
        </el-row>
      </div>
    </div>
    </div></el-col>
 <el-col :span="6"><div class="grid-content bg-purple">
    <div class="control">
      <div class="img">
        <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
      </div>
      <span class="name">模板名称</span>
      <div class="btn">
        <el-row>
           <el-col :span="12" style='text-align:center'>
<el-button type="text">文字按钮</el-button>

           </el-col>
           <el-col :span='12'  style='text-align:center'>
<el-button type="text">文字按钮</el-button>
           </el-col>
        </el-row>
      </div>
    </div>
    </div></el-col>
<el-col :span="6"><div class="grid-content bg-purple">
    <div class="control">
      <div class="img">
        <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
      </div>
      <span class="name">模板名称</span>
      <div class="btn">
        <el-row>
           <el-col :span="12" style='text-align:center'>
<el-button type="text">文字按钮</el-button>

           </el-col>
           <el-col :span='12'  style='text-align:center'>
<el-button type="text">文字按钮</el-button>
           </el-col>
        </el-row>
      </div>
    </div>
    </div></el-col></el-row>
</div>
</template>

<script>
export default {};
</script>
<style lang='scss'>
.controlitem {
  width: 100%;
  .el-row {
    .el-col-6 {
      padding: 10px;
      .grid-content {
        width: 100%;
        .control {
          width: 100%;
          .img {
            width: 100%;
            img {
              width: 100%;
            }
          }
          .name {
            font-size: 20px;
            display: inline-block;
            width: 100%;
            text-align: center;
            height: 30px;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
