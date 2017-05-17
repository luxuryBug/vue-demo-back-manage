<template>
	<div class="step3">
		<el-form :model="shareSet" label-position="top" align="left">
			<el-form-item label="分享标题">
				<el-input v-model="shareSet.title"></el-input>
			</el-form-item>
			<el-form-item label="分享描述">
				<el-input v-model="shareSet.describe"></el-input>
			</el-form-item>
			<el-form-item label="分享图片">
				<el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
					<i class="el-icon-upload"></i>
					<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
					<div class="el-upload__tip" slot="tip">图片尺寸建议比例1:1,如160*160像素，图片不能大于2M</div>
				</el-upload>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import store from '../../store.js'
	export default {
		name: 'step3',
		data: function() {
			return {
				shareSet: {
					title: '',
					describe: ''
				}
			}
		},
		watch: {
			shareSet: {
				handler: function(n,o){
					store.commit('setShareSet',this.shareSet)
				},
				deep: true
			}
		},
		created: function(){
			this.shareSet = Object.assign(this.shareSet,store.state.shareSet);
		}
	}
</script>