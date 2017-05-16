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

/*状态数据*/
const state = {
	ruleForm
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
	}
}

export default new Vuex.Store({
	state,
	mutations
})