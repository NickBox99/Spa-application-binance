import Vue from 'vue'
import App from './App.vue'

//Первый плагин
import eventBus from "./plugins/EventBus";
//Второй плагин(SDK)
import SDK from "./plugins/SDK";


Vue.prototype.$eventBus = eventBus;
Vue.prototype.$sdk = SDK;
Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app')
