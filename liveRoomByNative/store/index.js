import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userMsg:null,//客户端的信息
		userTokenMsg:null, //用户的token
		tokenTime:0, //刷新token的时间戳
		roomOnlineNum:0,//在线人数
		seat:255,//座位
		talkOnePeerRenderArr:{},//单聊列表渲染
		rtmModel:null,//rtm实例
		manyTalkRenderArr:[],//群聊渲染数组
		oneTalkRenderArr:[],//单聊页面渲染数组
		rpxExchangePx:0,
		talkNowUserId:-1,//用户正在聊天的人
	},
	mutations: {
		
	},
	actions: {

	}
})

export default store
