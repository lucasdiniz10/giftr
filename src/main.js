import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import './quasar'

import router from '@/router'

import {
  Quasar,
  QImg,
  QToolbar,
  QToolbarTitle,
  QInput,
  QForm,
  QBtnDropdown
} from 'quasar'

Vue.use(Quasar, Vuelidate, {
  components: {
    QImg,
    QToolbar,
    QToolbarTitle,
    QInput,
    QForm,
    QBtnDropdown
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
