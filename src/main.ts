import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'
import axios from 'axios'

const app = createApp(App)
app.use(store)
	.use(router)
	.use(ElementPlus, { locale })
	.mount('#app')
app.config.globalProperties.$axios = axios
app.config.globalProperties.$store = store

// http 请求拦截器
axios.interceptors.request.use(
	(config) => {
		// 在发送请求前
		const pathname = location.pathname
		// console.log(location)
		// console.log(config.headers)
		// console.log(location.pathname)
		sessionStorage.setItem('pathname', location.pathname)
		if (localStorage.getItem('token')) {

			config.headers.common['token'] = localStorage.getItem('token')

		}
		return config
	},
	(err) => {
		return Promise.reject(err)
	}
)
// 响应拦截器
axios.interceptors.response.use(
	(response) => {
		console.log(response)
		console.log('token', localStorage.getItem('token'))
		document.title = '宝莉安娜珠宝有限公司 | Pauliana Fine Jewellery'
		if (response.data.code >= 500) {
			if (response.config.url.indexOf('favoriteUpdate') != -1) {
				app.config.globalProperties.$message.error({
					message: '登录后即可收藏',
				})
			} else if (
				response.config.url.indexOf('favoriteList') != -1 &&
				localStorage.getItem('token') != null
			) {
				app.config.globalProperties.$message.error({
					message: response.data.message,
				})
				// console.log("favoriteList");
			} else {
				app.config.globalProperties.$message.error({
					message: response.data.message,
				})
			}
			// console.log("token>500");
			localStorage.removeItem('token')
		}
		return response
	},
	(error) => {
		console.log(error)
	}
)

router.beforeEach((to, from, next) => {
	// 让页面回到顶部

	if(from.path=='/list'||from.path=='/my'){ //来自Secondarydirectory，保存滚动高度。其他页面为0，屏幕滚动到顶部
	const top=document.documentElement.scrollTop
	sessionStorage.setItem('scrolltop',String(top))
	}
	else{
	document.documentElement.scrollTop = 0		
	}

	if (to.name == 'item' && from.name == 'list' ) { //来自Gemstonedetails，保存离开时的配置
		from.meta.keepAlive = true
		document.documentElement.scrollTop = Number(sessionStorage.getItem('scrolltop'))
		console.log("keepAlive true",Number(sessionStorage.getItem('scrolltop')));
	}else if(to.name == 'item' && from.name == 'my'){
		from.meta.keepAlive = true
		document.documentElement.scrollTop = Number(sessionStorage.getItem('scrolltop'))
		// console.log('mymessage',from);
		
	} else{
		console.log("keepAlive false");
		from.meta.keepAlive = false
		console.log(from);
		
		// sessionStorage.removeItem('getitem')
		// console.log('tiaozhuanitem',sessionStorage.getItem('getitem'));
		
	}
	// 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
	next()
})

// 千分价格
app.config.globalProperties.formatNumberRgx = function(num) {
	// console.log(num);
	if (num !== null && num !== undefined) {
		const parts = Number(num)
			.toFixed(2)
			.toString()
			.split('.')
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
		return parts.join('.')
	} else {
		return 0
	}
}
