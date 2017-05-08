<template>
  <div class="step1">
    <!-- 表单内容 -->
    <el-form :model="ruleForm" ref="ruleForm" :rules="rules" label-position="top" align="left">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name" size="large"></el-input>
      </el-form-item>

      <el-form-item label="" prop="fenLei">
        <el-row type="flex" style="height:35px;">
          <el-col :span="3">
            <div class="el-form-item__label" style="padding-bottom: 0;">活动分类</div>
          </el-col>
          <el-col :span="2">
            <el-button type="text">设置</el-button>
          </el-col>
        </el-row>
        <el-radio-group v-model="ruleForm.fenLei">
          <el-radio v-for="fl in ruleForm.fenLeis" :label="fl.name"></el-radio>
        </el-radio-group>
      </el-form-item>



    </el-form>
  </div>
</template>



<script>

export default {
  name: 'step1',
  data: function(){
    return {
      dialogFormFenLeiVisible: false,
      rules: {
        name: [
          {
            required: true,
            message: '请输入活动名称',
            trigger: 'change'
          }
        ],
        fenLei: [
          {
            required: true,
            message: '请输入活动分类',
            trigger: 'change'
          }
        ]
      },
      ruleForm: {
        name: '',
        fenLeis: [
          {
            name: '唱歌'
          },
          {
            name: '跳舞'
          }
        ],
        fenLei: ''
      }
    }
  }
}
</script>

<style>
  /*控制表单项间距*/
  .step1 .el-form-item {
    margin-bottom: 25px;
    margin-right: 50px;
  }
  .step1 .el-form-item.is-required .el-form-item__label::before {
    display: none;
  }
  .step1 .el-form-item.is-required .el-form-item__label::after {
    content: '*';
    color: #ff4949;
    margin-right: 4px;
  }
</style>
