  <template>
<!-- 食谱详情 -->
  <div class="entryrec">
    <div class="banner">
      <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
    </div>
    <!-- 文章描述 -->
    <div class="article_describe">
    <el-tag type="warning">原创</el-tag>
     <span class='title'>西冷牛排</span>
      <div class="article_describe_btn">
  <el-button type="info"  plain>删除</el-button>
  <el-button type="primary"  plain>编辑</el-button>
      </div>
    </div>
        <!-- 食谱内容 -->
    <div class="article_table">

 <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="烹饪难度">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="作者">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="烹饪时间">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="主料">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="辅料">
            <span>{{ props.row.address }}</span>
            <br>
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="作者"
      prop="id">
    </el-table-column>
      <el-table-column
      label="烹饪设备"
      prop="shebei">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="描述"
      prop="desc">
    </el-table-column>
  </el-table>
    </div>

    <!-- 制作步骤 -->
    <div class="article_steps">
       <div class="title">
        制作步骤
        </div>
       <!-- 制作步骤 准备步骤  -->
      <div class="steps_a">
      <el-row>
          <el-col :span="8"><div class="grid-content bg-purple">
            <div class="img">
              <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
            </div>

            </div></el-col>
          <el-col :span="16"><div class="grid-content bg-purple">
       1. 将牛排自然解冻。西兰花和西红切一小块
            </div></el-col>

      </el-row>
      </div>
    </div>
      <el-button type="danger">删除</el-button>

  <el-button type="primary">编辑</el-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData5: [
        {
          id: "Administrator",
          name: "西冷牛排",
          category: "西冷牛排 500g",
          desc:
            "   拎起一小块牛排丢到嘴里，能清楚感受到汁水随着牙齿的咀嚼而散溢开来",
          address: "西兰花300g",
          shop: "初级",
          shopId: "10分钟",
          shebei: "牛扒机"
        }
      ]
    };
  }
};
</script>

<style lang='scss'>
.entryrec {
  .banner {
    width: 100%;
  }
  .article_describe {
    margin-top: 2rem;
    .title {
      display: inline-block;
      font-size: 18px;
      margin-left: 10px;
    }
    .article_describe_btn {
      float: right;
      width: 300px;

      button {
        float: left;
      }
    }
  }
  .article_table {
    width: 100%;
    margin-top: 40px;
  }
  .article_steps {
    width: 100%;
  }
  .article_steps {
    margin-top: 40px;
    .title {
      margin-top: 20px;
      font-size: 18px;
    }
    .steps_a {
      margin-top: 20px;
      font-size: 20px;
      line-height: 240px;
    }
  }
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
