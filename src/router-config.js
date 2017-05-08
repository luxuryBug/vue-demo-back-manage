
import activePublic from './page/activePublic/index.vue'
import step1 from './page/activePublic/step1.vue'
import step2 from './page/activePublic/step2.vue'
import step3 from './page/activePublic/step3.vue'
import step4 from './page/activePublic/step4.vue'

export default [
	{
		// 父路由
		path: '/activePublic',
		component: activePublic,
		children: [
			{
				path: '',
				component: step1
			},
			{
				path: 'step1',
				component: step1
			},
			{
				path: 'step2',
				component: step2
			},
			{
				path: 'step3',
				component: step3
			},
			{
				path: 'step4',
				component: step4
			}
		]
	}
]