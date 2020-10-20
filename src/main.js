import Vue from 'vue'
import App from './App.vue'
import './quasar'

import router from '@/router'

import {
  Quasar,
  QImg,
  QToolbar,
  QToolbarTitle
} from 'quasar'

Vue.use(Quasar, {
  components: {
    QImg,
    QToolbar,
    QToolbarTitle
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
