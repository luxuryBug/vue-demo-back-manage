<template>
	<div class="step2">
		<el-form ref="signForm" :model="signForm" label-position="top" align="left">
			<!-- 上方单选区 -->
			<el-form-item label="报名限制">
				<el-radio-group v-model="signForm.limit">
					<el-radio label="无限制">无限制</el-radio>
					<el-radio label="必须关注公众号才能报名">必须关注公众号才能报名</el-radio>
					<el-radio label="必须成为会员才能报名">必须成为会员才能报名</el-radio>
					<el-radio label="必须分享才能报名">必须分享才能报名</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="每人可报名额限制">
				<el-col :span="3">
					<el-radio-group v-model="signForm.limitPerson">
						<el-radio label="无限制">无限制</el-radio>
						<el-radio label="限制">限制</el-radio>
					</el-radio-group>
				</el-col>
				<el-col :span="8">
					<el-input v-model="signForm.limitPersonNum" :disabled="signForm.limitPerson == '无限制'">
						<template slot="append">人</template>
					</el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="付费活动">
				<el-col :span="3">
					<el-radio-group v-model="signForm.limitPay">
						<el-radio label="免费">免费</el-radio>
						<el-radio label="费用">费用</el-radio>
					</el-radio-group>
				</el-col>
				<el-col :span="8">
					<el-input v-model="signForm.limitPayNum" :disabled="signForm.limitPay == '免费'">
						<template slot="append">元</template>
					</el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="允许取消报名">
				<el-col :span="3">
					<el-radio-group v-model="signForm.limitCancelSign">
						<el-radio label="允许">允许</el-radio>
						<el-radio label="不允许">不允许</el-radio>
					</el-radio-group>
				</el-col>
				<el-col :span="8">
					<el-input v-model="signForm.limitCancelSignNum" :disabled="signForm.limitCancelSign == '不允许'">
						<template slot="append">小时</template>
					</el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="报名是否需要审核">
				<el-col :span="3">
					<el-radio-group v-model="signForm.limitAudit">
						<el-radio label="需要">需要</el-radio>
						<el-radio label="不需要">不需要</el-radio>
					</el-radio-group>
				</el-col>
			</el-form-item>
			<!-- 设置报名条件 -->
			<el-form-item label="设置报名表" class="sign-list">
				<el-row v-for="info in signForm.signList" :gutter="20">
					<el-col :span="2">
						<el-checkbox v-model="info.mustFill" :checked="info.mustFill">必填</el-checkbox>
					</el-col>
					<el-col :span="4">
						<el-input v-model="info.title" size="large"></el-input>
					</el-col>
					<el-col :span="8">
						<el-input :placeholder="'提示语：请输入您的'+info.title" :readonly="true" size="large"></el-input>
					</el-col>
					<el-col :span="4">
						<el-button icon="delete" @click="delOneOfSignList(info)"></el-button>
						<el-dropdown>
							<el-button>
								移动<i class="el-icon-caret-bottom el-icon--right"></i>
							</el-button>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item @click.native="swopOneOfSignList(info,'stick')">置顶</el-dropdown-item>
								<el-dropdown-item @click.native="swopOneOfSignList(info,'up')">上移</el-dropdown-item>
								<el-dropdown-item @click.native="swopOneOfSignList(info,'down')">下移</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>
				</el-row>	
				<el-row>
					<el-col :span="14" :offset="5">
						<el-button type="primary" size="large" @click="addOneOfSignList">添加更多</el-button>
					</el-col>
				</el-row>
			</el-form-item>
			<!-- 下方单选区 -->
			<el-form-item label="签到条件">
				<el-radio-group v-model="signForm.limitSignIf">
					<el-radio label="必须报名">必须报名</el-radio>
					<el-radio label="不需要报名">不需要报名</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="签到方式" class="limit-sign-method">
				<el-radio-group v-model="signForm.limitSignMethod">
					<el-row>
						<el-col :span="18">
							<el-radio label="签到二维码">签到二维码</el-radio>
							<el-radio label="入场二维码">入场二维码</el-radio>
							<el-radio label="会员二位码">会员二位码</el-radio>
							<el-radio label="手机号">手机号</el-radio>
							<el-radio label="暗号">暗号</el-radio>
						</el-col>
						<el-col :span="6">
							<el-input v-model="signForm.cipher" placeholder="请填写您的暗号" :disabled="signForm.limitSignMethod != '暗号'" size="large"></el-input>
						</el-col>
					</el-row>
				</el-radio-group>
			</el-form-item>
			<!-- 生成签到二维码 -->
			<transition name="fade">
				<el-form-item v-show="signForm.limitSignMethod == '签到二维码' " label="生成签到二维码">
					<el-col :span="2">
						<img width="100" height="100" :src="imgUrl">
					</el-col>
					<el-col :span="4">
						<el-button @click="createTwoDimensionCode">生成</el-button>
					</el-col>
				</el-form-item>
			</transition>
		</el-form>
	</div>
</template>

<script>
	import store from '../../store.js'

	/**
	 * [swopItemOfArray 交换数组元素]
	 * @param  {[type]} arr    [数组]
	 * @param  {[type]} index1 [索引1]
	 * @param  {[type]} index2 [索引2]
	 * @return undefined
	 */
	function swopItemOfArray(arr,index1,index2){
		arr[index2] = arr.splice(index1,1,arr[index2])[0];
	}

	export default {
		name: 'step2',
		data: function(){
			return {
				signForm: {
					limit: '',
					limitPerson: '',
					limitPersonNum: '',
					limitPay: '',
					limitPayNum: '',
					limitCancelSign: '',
					limitCancelSignNum: '',
					limitAudit: '',
					signList: [
					],
					limitSignIf: '',
					limitSignMethod: ''
				},
				imgUrl: ''
			}
		},
		watch: {
			signForm: {
				handler: function(n,o){
					console.log(n)
					store.commit('setSignForm',this.signForm);
				},
				deep: true
			}
		},
		methods: {
			// 添加报名表项目
			addOneOfSignList: function(){
				var obj = {
					mustFill: false,
					title: '标题'+(this.signForm.signList.length+1)
				}
				this.signForm.signList.push(obj);
			},
			// 删除报名表项目
			delOneOfSignList: function(info){
				let index = this.signForm.signList.indexOf(info);
				this.signForm.signList.splice(index,1);
			},
			// 移动报名表项目
			swopOneOfSignList: function(info,type){
				let index = this.signForm.signList.indexOf(info);
				if(type == 'stick' && index == 0){
					return;
				}
				if(type == 'up' && index == 0){
					return;
				}
				if(type == 'down' && index == (this.signForm.signList.length-1)){
					return;
				}
				switch(type){
					case 'stick': swopItemOfArray(this.signForm.signList,index,0);break;
					case 'up': swopItemOfArray(this.signForm.signList,index,(index-1));break;
					case 'down': swopItemOfArray(this.signForm.signList,index,(index+1));break;
				}
			},
			// 生成二维码
			createTwoDimensionCode: function(){
				this.$notify.info({
					title: '消息',
					message: '该功能正在完善中'
				})
			}
		},
		created: function(){
			Object.assign(this.signForm,store.state.signForm);
		}
	}
</script>

<style>
	/*设置报名表样式*/
	.step2 .sign-list .el-row {
		line-height: 42px;
		margin-bottom: 10px;
	}
	/*签到方式*/
	.step2 .limit-sign-method .el-row {
		line-height: 42px;
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}
</style>