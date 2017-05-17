import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 活动信息
const ruleForm =  {
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
	    name: '户外'
	  },
	  {
	    name: '烧烤'
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
}
// 报名签到
const signForm = {
	limit: '',
	limitPerson: '',
	limitPersonNum: '',
	limitPay: '',
	limitPayNum: '',
	limitCancelSign: '',
	limitCancelSignNum: '',
	limitAudit: '',
	signList: [
		{
			mustFill: true,
			title: '标题1'
		},
		{
			mustFill: false,
			title: '手机'
		}
	],
	limitSignIf: '',
	limitSignMethod: ''
}

const shareSet =  {
	title: '',
	describe: ''
}


// 分享设置
// 个性设置

/*状态数据*/
const state = {
	ruleForm,
	signForm,
	shareSet
}
 
/* 从本地存储读取数据 */
for(var item in state){
	localStorage.getItem(item) ? state[item] = JSON.parse(localStorage.getItem(item)) : false;
}

/*状态异变*/
const mutations = {
	setRuleForm: function(state,payload){
		state.ruleForm = Object.assign(state.ruleForm,payload);
		localStorage.setItem('ruleForm',JSON.stringify(state.ruleForm));
	},
	setSignForm: function(state,payload){
		state.signForm = Object.assign(state.signForm,payload);
		localStorage.setItem('signForm',JSON.stringify(state.signForm));
	},
	setShareSet: function(state,payload){
		state.shareSet = Object.assign(state.shareSet,payload);
		localStorage.setItem('shareSet',JSON.stringify(state.shareSet));
	}
}

export default new Vuex.Store({
	state,
	mutations
})