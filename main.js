import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'


Vue.use(VueRouter);  

//配置路由
const router = new VueRouter();
router.map(routerConfig);

router.redirect({
	'/': '/home'
})

//如果使用了router-view，不能再使用new Vue来实例化，要使用router.start的方式
// new Vue({
// 	el: 'body',
// 	components:{
// 		app: App
// 	}
// });

router.start(App,'#app');