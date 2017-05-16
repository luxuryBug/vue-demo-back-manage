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
            <el-button type="text" @click="dialogFormFenLeiVisible = true">设置</el-button>
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
          <el-tag v-for="info in ruleForm.tagList" :key="info.name" type="primary" :closable="true" @close="delOneOfArr(info,ruleForm.tagList)">{{info.name}}</el-tag>
          <el-button icon="plus" size="large" @click="dialogFormTagVisible = true"></el-button>
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
        <detail-address
          :province="ruleForm.province"
          :city="ruleForm.city"
          :address="ruleForm.address"
        >
        </detail-address>
      </el-form-item>

      <el-form-item label="活动人数">
        <el-col :span="3">
          <el-radio-group v-model="ruleForm.activePerson">
            <el-radio label="无限制">无限制</el-radio>
            <el-radio label="限制">限制</el-radio>
          </el-radio-group> 
        </el-col>
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="ruleForm.activePersonNum" :disabled="ruleForm.activePerson == '无限制'">
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
        <el-radio-group v-model="ruleForm.userMsgShow">
          <el-radio label="不展示">不展示</el-radio>
          <el-radio label="展示报名人数">展示报名人数</el-radio>
          <el-radio label="展示报名清单">展示报名清单</el-radio>
          <el-radio label="报名成功显示完整用户资料">报名成功显示完整用户资料</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="评价功能">
        <el-radio-group v-model="ruleForm.evaluate">
          <el-radio label="不开启">不开启</el-radio>
          <el-radio label="实时评价">实时评价</el-radio>
          <el-radio label="审核后评论">审核后评论</el-radio>
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
        <el-input size="large" v-model="ruleForm.adTitle" placeholder="请填写您的广告标题"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input size="large" v-model="ruleForm.adContent" placeholder="请填写您的广告内容"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input size="large" v-model="ruleForm.adSupportLink" placeholder="请填写您的赞助链接"></el-input>
      </el-form-item>

    </el-form>

    <!-- 设置分类dialog -->
    <el-dialog
      title="设置活动分类"
      :visible.sync="dialogFormFenLeiVisible"
      size="tiny">
      <el-tag v-for="info in ruleForm.fenLeis" :key="info.name" type="primary" :closable="true" :close-transition="true" @close="delOneOfArr(info,ruleForm.fenLeis)">{{info.name}}</el-tag>
      <el-input v-model="dialogForm.newFenlei"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormFenLeiVisible = false">取 消</el-button>
        <el-button type="primary" @click="addNewFenLei">确 定</el-button>
      </span>
    </el-dialog>

    
    <!-- 添加标签dialog -->
    <el-dialog
      title="设置活动分类"
      :visible.sync="dialogFormTagVisible"
      size="tiny">
      <el-input v-model="dialogForm.newTagList"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormTagVisible = false">取 消</el-button>
        <el-button type="primary" @click="addNewTag">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>



<script>
import detailAddress from '../../components/detailAddress.vue'
import store from '../../store.js'

export default {
  name: 'step1',
  components: {
    'detail-address': detailAddress
  },
  data: function(){
    return {
      dialogFormFenLeiVisible: false,
      dialogFormTagVisible: false,
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
        province: '',
        city: '',
        address: '',
        activePerson: '',
        activePersonNum: '',
        activeDescribe: '',
        userMsgShow: '',
        evaluate: '',
        adTitle: '',
        adContent: '',
        adTitle: '',
        adSupportLink: ''
      },
      // 页面用于操作数组的临时变量
      dialogForm: {
        newTagList: '', // 新得标签
        newFenlei: '',  // 新分类名称
      }
    }
  },
  methods: {
    // 添加新的分类
    addNewFenLei: function(){
      this.ruleForm.fenLeis.push({name: this.dialogForm.newFenlei});
      this.dialogFormFenLeiVisible = false;
    },
    // 添加新的标签
    addNewTag: function(){
      this.ruleForm.tagList.push({name: this.dialogForm.newTagList});
      this.dialogFormTagVisible = false;
    },
    // 删除数组的一个数据项
    delOneOfArr: function(info,arr){
      var index = arr.indexOf(info);
      arr.splice(index,1);
    },
  },
  watch: {
    /*深度watcher*/
    ruleForm: {
      handler: function(n,o){
        store.commit('setRuleForm',this.ruleForm)
      },
      deep: true
    }
  },
  /*生命周期钩子：实例创建完后才能之后被调用，挂载未开始*/
  created: function(){
    Object.assign(this.ruleForm,store.state.ruleForm);
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
