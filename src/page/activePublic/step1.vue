<template>
  <div class="step1">
    <!-- 表单内容 -->
    <el-form :model="ruleForm" ref="ruleForm" :rules="rules" label-position="top" align="left">

      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name" size="large">
        </el-input>
      </el-form-item>

      <el-form-item prop="fenLei">
        <el-row type="flex" style="height:35px;">
          <el-col :span="2">
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

      <el-form-item prop="tagList">
        <el-row type="flex" style="height:35px;">
          <el-col :span="3">
            <div class="el-form-item__label" style="padding-bottom: 0;">活动标签</div>
          </el-col>
        </el-row>
        <el-row>
          <el-tag v-for="info in ruleForm.tagList" :key="info.name" type="primary" :closable="true" >{{info.name}}</el-tag>
          <el-button icon="plus" size="large"></el-button>
        </el-row>
      </el-form-item>

      <el-form-item label="活动时间" required style="width: 750px;">
        <el-col :span="5">
          <el-form-item>
            <el-date-picker
              v-model="ruleForm.activeStartData"
              type="date">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item>
            <el-time-select
              v-model="ruleForm.activeStartTime"
              :picker-options="{
                start: '00:00',
                step: '01:00',
                end: '23:00'
              }">
            </el-time-select>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="1" style="text-align:center;">——</el-col>
        <el-col :span="5">
          <el-form-item>
            <el-date-picker
              v-model="ruleForm.activeEndData"
              type="date">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item>
            <el-time-select
              v-model="ruleForm.activeEndTime"
              :picker-options="{
                start: '00:00',
                step: '01:00',
                end: '23:00'
              }">
            </el-time-select>
          </el-form-item>
        </el-col> 
      </el-form-item>

      <el-form-item label="报名时间" required style="width: 750px;">
        <el-col :span="5">
          <el-form-item>
            <el-date-picker
              v-model="ruleForm.feeStartData"
              type="date">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item>
            <el-time-select
              v-model="ruleForm.feeStartTime"
              :picker-options="{
                start: '00:00',
                step: '01:00',
                end: '23:00'
              }">
            </el-time-select>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="1" style="text-align:center;">——</el-col>
        <el-col :span="5">
          <el-form-item>
            <el-date-picker
              v-model="ruleForm.feeEndData"
              type="date">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item>
            <el-time-select
              v-model="ruleForm.feeEndTime"
              :picker-options="{
                start: '00:00',
                step: '01:00',
                end: '23:00'
              }">
            </el-time-select>
          </el-form-item>
        </el-col> 
      </el-form-item>

      <el-form-item label="活动地点">
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-form-item>

      <el-form-item label="活动人数">
        <el-col :span="3">
          <el-radio-group>
            <el-radio>无限制</el-radio>
            <el-radio>限制</el-radio>
          </el-radio-group> 
        </el-col>
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="ruleForm.activePersonNum">
            <template slot="append">人</template>
          </el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="活动封面">
        <el-upload class="upload-demo" 
        drag 
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
           <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="活动简介">
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="ruleForm.activeDescribe"></el-input>
      </el-form-item>

      <!-- 报名 -->
      <el-form-item label="报名用户信息展示">
        <el-radio-group>
          <el-radio>不展示</el-radio>
          <el-radio>展示报名人数</el-radio>
          <el-radio>展示报名清单</el-radio>
          <el-radio>报名成功显示完整用户资料</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="评价功能">
        <el-radio-group>
          <el-radio>不开启</el-radio>
          <el-radio>实时评价</el-radio>
          <el-radio>审核后评论</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 广告 -->
      <el-form-item>
        <el-row>
          <div class="el-form-item__label">赞助广告</div>
          <el-button class="el-form-item__label is-active" type="text">开通赞助广告</el-button>
        </el-row>
        <el-upload class="upload-demo" 
        drag 
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
           <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-input size="large" placeholder="请填写您的广告标题"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input size="large" placeholder="请填写您的广告内容"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input size="large" placeholder="请填写您的赞助链接"></el-input>
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
        fenLei: '',
        tagList: [
          {
            name: '标签一'
          },
          {
            name: '标签二'
          }
        ],
        activeStartData: '',
        activeStartTime: '',
        activeEndData: '',
        activeEndTime: '',  
        feeStartData: '',
        feeStartTime: '',
        feeEndData: '',
        feeEndTime: '',
        activePersonNum: '',
        activeDescribe: ''
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
  /*标签*/
  .step1 .el-tag {
    padding: 10px 15px;
    vertical-align: middle;
    margin: 10px;
    height: auto;
  }
  /*时间选择器*/
  .step1 .el-date-editor {
    width: 150px;
  }
</style>
