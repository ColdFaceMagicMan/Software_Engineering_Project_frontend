import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken:localStorage.getItem('userToken')?localStorage.getItem('userToken'):'',
    userId:localStorage.getItem('userId')?localStorage.getItem('userId'):'',
    age:localStorage.getItem('age')?localStorage.getItem('age'):'',
    userName:localStorage.getItem('userName')?localStorage.getItem('userName'):'',
    userAvatar:localStorage.getItem('userAvatar')?localStorage.getItem('userAvatar'):'',
  },
  getters: {
  },
  mutations: {
    changeLogin(state,user){
      state.userToken=user.userToken
      state.userId=user.userId
      state.userAvatar=user.userAvatar
      localStorage.setItem('userId',user.userId)
      localStorage.setItem('userToken',user.userToken)
      localStorage.setItem('userAvatar',user.userAvatar)
    },
    delLogin(){
      localStorage.clear();
    },
    setId(state,user){
      state.userId=user.id
      
      localStorage.setItem('userId',user.id)
    }
  },
  actions: {
  },
  modules: {
  }
})
