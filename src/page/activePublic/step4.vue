<template>
	<div class="step4">
		<el-form :model="selfhoodSet" label-position="top" align="left">
			<el-form-item label="消息推送" class="mes-push">
				<el-row>
					<el-col :span="4">
						<el-checkbox v-model="selfhoodSet.applyOk" :checked="selfhoodSet.applyOk">报名成功</el-checkbox>
					</el-col>
					<el-col :span="14">
						<el-input v-model="selfhoodSet.applyOkText" type="textarea"></el-input>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<el-checkbox v-model="selfhoodSet.auditOk" :checked="selfhoodSet.auditOk">审核成功</el-checkbox>
					</el-col>
					<el-col :span="14">
						<el-input v-model="selfhoodSet.auditOkText" type="textarea"></el-input>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<el-checkbox v-model="selfhoodSet.auditNo" :checked="selfhoodSet.auditNo">审核不成功</el-checkbox>
					</el-col>
					<el-col :span="14">
						<el-input v-model="selfhoodSet.auditNoText" type="textarea"></el-input>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<el-checkbox v-model="selfhoodSet.signOk" :checked="selfhoodSet.signOk">签到成功</el-checkbox>
					</el-col>
					<el-col :span="14">
						<el-input v-model="selfhoodSet.signOkText" type="textarea"></el-input>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<el-checkbox v-model="selfhoodSet.signNo" :checked="selfhoodSet.signNo">签到失败</el-checkbox>
					</el-col>
					<el-col :span="14">
						<el-input v-model="selfhoodSet.signNoText" type="textarea"></el-input>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<el-checkbox v-model="selfhoodSet.signRepeat" :checked="selfhoodSet.signRepeat">重复签到</el-checkbox>
					</el-col>
					<el-col :span="14">
						<el-input v-model="selfhoodSet.signRepeatText" type="textarea"></el-input>
					</el-col>
				</el-row>
			</el-form-item>
			<!-- 下方按钮组 -->
			<el-form-item label="微信提醒">
				<el-row>
					<el-col :span="5">
						<el-radio-group v-model="selfhoodSet.wechatTip">
							<el-radio label="不提醒">不提醒</el-radio>
							<el-radio label="提醒">提醒</el-radio>
						</el-radio-group>
					</el-col>
					<el-col :span="6">
						<el-select v-model="selfhoodSet.wechatTipHour" placeholder="请选择提前几个小时">
							<el-option v-for="op of 24" :value="op"></el-option>
						</el-select>
					</el-col>
					<el-col :span="12" :offset="1">
						<el-input v-model="selfhoodSet.wechatTipText" placeholder="请填写您的微信提醒"></el-input>
					</el-col>
				</el-row>
				
			</el-form-item>
			
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'step4',
		data: function(){
			return {
				selfhoodSet: {
					applyOk: true,
					applyOkText: '您已成功报名***(默认活动标题名)活动',
					auditOk: true,
					auditOkText: '您报名的***(默认活动标题名)活动，已审核通过',
					auditNo: true,
					auditNoText: '您报名的***(默认活动标题名)活动，审核不通过',
					signOk: true,
					signOkText: '***(默认用户名)您好！恭喜您签到成功！认活动标题名)活动',
					signNo: true,
					signNoText: '抱歉，签到失败',
					signRepeat: true,
					signRepeatText: '请勿重复签到！0000',
					wechatTip: '',
					wechatTipHour: '',
					wechatTipText: '',
				}
			}
		}
	}
</script>

<style>
	.step4 .mes-push .el-row {
		margin-bottom: 10px;
	}
</style>