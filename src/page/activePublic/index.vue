<template>
  <div class="activePublic">
    <!-- 步骤条 -->
    <el-steps :space="200" :active="step" finish-status="finish" style="margin-bottom:30px;">
      <el-step title="活动信息"></el-step>
      <el-step title="报名签到"></el-step>
      <el-step title="分享设置"></el-step>
      <el-step title="个性设置"></el-step>
    </el-steps>
    <!-- 内容切换区 -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <!-- 按钮组 -->
    <div class="page-turn">
      <el-button @click.native="handelPreview" v-show="preview" type="primary">预览</el-button>
      <el-button @click.native="handlePrevStep" v-show="preStep" >上一步</el-button>
      <el-button @click.native="handleNextStep" v-show="nextStep">下一步</el-button>
      <el-button @click.native="handlePublish" v-show="publish" type="primary">发布活动</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'activePublic',
  data: function(){
    return {
      isRouter: false,
      step: 1,
      preview: true,
      preStep: false,
      nextStep: true,
      publish: false
    }
  },
  methods: {
    handlePrevStep: function(){
      this.$router.go(-1);
      this.step--;
      this.goStep(this.step);
    },
    handleNextStep: function(event){
      console.log('handleNextStep');
      this.$router.push('/activePublic/step'+(this.step+1));
      var _this = this;
      setTimeout(function(){
        if(_this.isRouter){
          _this.step++;
          _this.goStep(_this.step);
        }
      })
    },
    goStep: function(n){
      switch(n){
        case 1:
          this.preview = true;this.preStep = false;this.nextStep = true;this.publish = false;
          break;
        case 2:
          this.preview = false;this.preStep = true;this.nextStep = true;this.publish = false;
          break;
        case 3:
          this.preview = false;this.preStep = true;this.nextStep = true;this.publish = false;
          break;
        case 4:
          this.preview = false;this.preStep = true;this.nextStep = false;this.publish = true;
          break;
      }
    }
  },
  watch: {
   '$route': function(from,to){
      this.isRouter = true;
   }
  }
}
</script>

<style>
.activePublic .page-turn .el-button {
  margin-right: 20px;
}
</style>