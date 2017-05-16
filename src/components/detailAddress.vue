<template>
	<el-form>
    <el-row>
      <el-col :span="8">
         <el-select v-model="form.province" :filterable="true" @change="changeProvince" placeholder="请选择省">
          <el-option
            v-for="item in provinces"
            :key="item.value"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="form.city" :filterable="true" @change="changeCity" placeholder="请选择市">
          <el-option
            v-for="item in citys"
            :key="item.value"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="14">
        <el-input v-model="form.address" placeholder="请输入详细地址"></el-input>
      </el-col>
    </el-row>
	</el-form>
</template>

<script>
	import addressData from '../assets/js/addressData.js'
	import store from '../store.js'

	/**
	 * [formData 格式化select数据项]
	 * @param  {[type]} obj [完整数据data]
	 * @return {[type]}     [description]
	 */
	function formData(obj){
		let result = [];
		for(var key in obj){
			result.push({
				value: key
			})
		}
		return result;
	}

	export default {
		name: 'address',
		props: ['province','city','address'],
		data: function(){
			return {
				form: {
					province: this.province,
					city: this.city,
					address: this.address
				},
				provinces: formData(addressData)
			}
		},
		computed: {
			/*计算属性的结果被缓存，除非依赖的值发生改变才会重新计算*/
			citys: function(){
				return formData(addressData[this.form.province])
			}
		},
		methods: {
			changeProvince: function(){
				console.log(this.form.province);
				this.citys = formData(addressData[this.form.provinces]);
				this.form.city = '';
			},
			changeCity: function(){
				console.log(this.form.city);
				this.form.address = '';
			}
		},
		watch: {
			/*深度watcher*/
			form: {
				handler: function(n,o){
					store.commit('setRuleForm',Object.assign(store.state.ruleForm,this.form));
				},
				deep: true
			}
		}
	}
</script>