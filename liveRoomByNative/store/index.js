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
		talkOnePeerRenderArr:[ //单聊列表渲染
			{
				"id": 42,
				"currency": 111635,
				"income": 1265,
				"sex": 1,
				"regtime": "2020-11-27 11:01:35",
				"regip": 1685931683,
				"nickname": "大佬",
				"avatar": "http://xiangwan.obs.cn-north-4.myhuaweicloud.com/c578dd538eec273f4c3bbd6608582240",
				"birthday": "1989-05-05",
				"images": ["", "", "", "", "", "", "", "", ""],
				"nowroom": 5
			}
		],
		rtmModel:null,//rtm实例
		manyTalkRenderArr:[],//群聊渲染数组
		oneTalkRenderArr:[],//单聊渲染数组
		rpxExchangePx:0,
	},
	mutations: {
		
	},
	actions: {

	}
})

export default store
