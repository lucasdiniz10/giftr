import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import store from './store'
import './quasar'

import router from '@/router'

import {
  Quasar,
  QImg,
  QToolbar,
  QToolbarTitle,
  QInput,
  QForm,
  QBtnDropdown,
  QBtn
} from 'quasar'

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo);

Vue.use(Quasar, {
  components: {
    QImg,
    QToolbar,
    QToolbarTitle,
    QInput,
    QForm,
    QBtnDropdown,
    QBtn
  }
})

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')

Vue.prototype.$eventBus = new Vue()