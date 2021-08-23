import Vue from 'vue'
import App from './App.vue'
import store from './components/store/store.js'
import VueSocketIO from "vue-socket.io";
import router from './components/router/router.js'
import VueYoutube from 'vue-youtube'

Vue.config.productionTip = false

Vue.use(VueYoutube);
Vue.use(new VueSocketIO({
  debug:true,
  connection:'http://localhost:8082',
  vuex: {
    store,
    actionPrefix: "SOCKET_"
  },

}))
new Vue({
  render: h => h(App),
  el:'#app',
  store,
  router
}).$mount('#app')
