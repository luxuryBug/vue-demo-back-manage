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
						<el-radio label="审核">审核</el-radio>
						<el-radio label="不审核">不审核</el-radio>
					</el-radio-group>
				</el-col>
			</el-form-item>
			<!-- 设置报名条件 -->
			<!-- 下方单选区 -->
		</el-form>
	</div>
</template>

<script>
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
				}
			}
		}
	}
</script>