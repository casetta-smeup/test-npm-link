import Vue from 'vue'
import App from './App.vue'

import VueJsf from "vuejsf";

Vue.use(VueJsf)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
