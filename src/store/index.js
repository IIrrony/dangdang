import Vue from 'vue'
import Vuex from 'vuex'
import {getSearch} from '@/api'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    username: "",
    bookinfo:[],
    asidebookinfo: [],
    shopcartBook: [],
    // { title: "123", number: 1, nowprice: "35.5", ischecked:true },
    // {title:"456", number:1, nowprice:"39.5", ischecked:true}
    isDisplay:true
  },
  getters: {
  },
  mutations: {
    GETUSERNAME(state, username) {
      state.username = username
    },
    GETBOOK(state, data) {
      state.bookinfo = data.bookinfo
      state.asidebookinfo = data.asidebookinfo
    },
    CHANGEDISPLAY(state) {
      state.isDisplay = false
    },
    ADDSHOPCART(state, index) {
      let locate = state.shopcartBook.indexOf(state.bookinfo[index])
      if (locate === -1) {
        state.shopcartBook.push(state.bookinfo[index])
      } else {
        console.log(locate);
        state.shopcartBook[locate].number++
      }
      
    },
    SELECTALL(state, is) {
      state.shopcartBook.forEach((item) => {
        item.ischecked = is
      })
    },
    ISCHECKALL(state, data) {
      state.shopcartBook[data.index].ischecked = data.checked
    },
    DELBOOK(state, index) {
      state.shopcartBook.splice(index, 1)
    },
    DELBOOKSS(state) {
      state.shopcartBook = state.shopcartBook.filter((item) => {
        return !item.ischecked
      })
    },
    CHANGENUMBER(state, data) {
      if (state.shopcartBook[data.index].number >= 1) {
        if (data.type == -1)
          if (state.shopcartBook[data.index].number == 1) {
            alert("确认删除！")
            state.shopcartBook.splice(data.index, 1)
          }
          else state.shopcartBook[data.index].number--
        else {
          state.shopcartBook[data.index].number++
        }
      }
    }
  },
  actions: {
    getUsername({ commit }, username) {
      commit("GETUSERNAME", username)
    },
    async getBook({ commit }, keyword) {
      let res = await getSearch(keyword);
      if (res.code == 200) {
        commit("GETBOOK", {bookinfo:res.data.bookdata, asidebookinfo:res.data.asidebookdata})
      } else {
        commit("GETBOOK", {bookinfo:res.data.msg, asidebookinfo:res.data.msg})
      }
       
    },
    changeDispaly({ commit }) {
      commit('CHANGEDISPLAY')
    },
    addbookcart({ commit }, index) {
      commit("ADDSHOPCART", index);
    },
    selectall({ commit }, is) {
      commit("SELECTALL", is)
    },
    ischecksall({ commit }, data) {
      commit("ISCHECKALL", {index: data.index, checked: data.checked})
    },
    delbook({ commit }, index) {
      commit("DELBOOK", index)
    },
    delbookss({ commit }) {
      commit("DELBOOKSS")
    },
    changenumber({ commit }, data) {
      commit("CHANGENUMBER", data)
    }
  },
  modules: {
  }
})
