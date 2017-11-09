// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import todo from '../src/components/todo/todo.vue'
import fit from '../src/components/fit/fit'
import music from '../src/components/music/music'

import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
	// linkActiveClass: 'active',
	routes: [
	{
		path: '/',
		component: todo
	},
	{
		path: '/todo',
		component: todo
	},
	{
		path: '/fit',
		component: fit
	},
	{
		path: '/music',
		component: music
	}
	]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 把App挂载到el上
  render: h => h(App)
})
