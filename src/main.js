import Vue from 'vue'
import App from './App.vue'
import './quasar'

import router from '@/router'

import {
  Quasar,
  QImg,
  QToolbar,
  QToolbarTitle,
  QInput,
  QForm
} from 'quasar'

Vue.use(Quasar, {
  components: {
    QImg,
    QToolbar,
    QToolbarTitle,
    QInput,
    QForm
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
