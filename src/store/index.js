import Vue from 'vue'
import Vuex from 'vuex'
import {getSearch} from '@/api'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    username: "", //用户名称
    bookinfo:[], //搜索所得书本信息
    asidebookinfo: [], //搜索所得书本信息（旁边列表）
    shopcartBook: [], //购物车书本信息
    isDisplay:true //用户是否登录
  },
  getters: {
  },
  mutations: {
    // 存放用户名称
    GETUSERNAME(state, username) {
      state.username = username
    },
    // 存放搜索所得书本信息
    GETBOOK(state, data) {
      state.bookinfo = data.bookinfo
      state.asidebookinfo = data.asidebookinfo
    },
    // 修改是否登录 的 标志状态
    CHANGEDISPLAY(state) {
      state.isDisplay = false
    },
    // 加入购物车
    ADDSHOPCART(state, index) {
      // 判断购物车数组 中 是否存在该商品
      let locate = state.shopcartBook.indexOf(state.bookinfo[index])
      //购物车中无 该商品 直接 push 进入数组
      if (locate === -1) {
        state.shopcartBook.push(state.bookinfo[index])
      } else {
        // 购物车 中 已存在该商品  使该商品数量加一
        console.log(locate);
        state.shopcartBook[locate].number++
      }
    },
    // 全选
    SELECTALL(state, is) {
      state.shopcartBook.forEach((item) => {
        item.ischecked = is
      })
    },
    // 勾选每个商品
    ISCHECKALL(state, data) {
      state.shopcartBook[data.index].ischecked = data.checked
    },
    // 删除购物车中的 商品
    DELBOOK(state, index) {
      state.shopcartBook.splice(index, 1)
    },
    // 删除所选商品
    DELBOOKSS(state) {
      // 使用 filter 过滤掉 商品中 ischecked 为真 的 商品 
      state.shopcartBook = state.shopcartBook.filter((item) => {
        return !item.ischecked
      })
    },
    // 修改商品数量
    CHANGENUMBER(state, data) {
      // type 为 -1   商品数量减一
      if (data.type == -1)
        if (state.shopcartBook[data.index].number == 1) {
          alert("确认删除？")
          state.shopcartBook.splice(data.index, 1)
        }
        else state.shopcartBook[data.index].number--
      // type 为 1   商品数量加一
      else {
        state.shopcartBook[data.index].number++
      }
    }
  },
  actions: {
    // 存放用户名称
    getUsername({ commit }, username) {
      commit("GETUSERNAME", username)
    },
    // 获取搜索结果
    async getBook({ commit }, keyword) {
      let res = await getSearch(keyword);
      if (res.code == 200) {
        commit("GETBOOK", {bookinfo:res.data.bookdata, asidebookinfo:res.data.asidebookdata})
      } else {
        commit("GETBOOK", {bookinfo:res.data.msg, asidebookinfo:res.data.msg})
      }
    },
    // 修改是否登录 的 标志状态
    changeDispaly({ commit }) {
      commit('CHANGEDISPLAY')
    },
    // 加入购物车
    addbookcart({ commit }, index) {
      commit("ADDSHOPCART", index);
    },
    // 全选
    selectall({ commit }, is) {
      commit("SELECTALL", is)
    },
    // 勾选每个商品
    ischecksall({ commit }, data) {
      commit("ISCHECKALL", {index: data.index, checked: data.checked})
    },
    // 删除商品
    delbook({ commit }, index) {
      commit("DELBOOK", index)
    },
    // 删除所需商品
    delbookss({ commit }) {
      commit("DELBOOKSS")
    },
    // 修改商品数量
    changenumber({ commit }, data) {
      commit("CHANGENUMBER", data)
    }
  },
  modules: {
  }
})
