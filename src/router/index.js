import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import beforEach from './beforeEach'

Vue.use(Router)

const router =  new Router({ routes })

router.beforeEach(beforEach)

export default router;