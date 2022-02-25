import { createStore } from 'vuex'

export default createStore({
  state: {
    // baseUrl: 'http://192.168.0.99:10000',
		// baseUrl: 'http://192.168.0.233:10000', 
		baseUrl: 'http://cn.api.wistechx.cn:10000',
		isLogin: false,
		token: null,
		nick: '', //用户昵称
		imgUrl: '',
		productsList: '',
		allowBack: false
  },
  mutations: {
    userToken(state, token) {
			if (token) {
				state.token = token;
			} else {
				state.token = null;
			}
		},
  },
  actions: {
    setToken({
			commit
		}, token) {
			commit('userToken', token)
		},
  },
  modules: {
  }
})
