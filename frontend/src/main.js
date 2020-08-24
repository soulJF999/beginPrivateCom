// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'normalize.css/normalize.css'
import 'es6-promise/auto'
import 'promise.prototype.finally/auto'
import ElementUI from 'element-ui'

moment.locale('zh-cn')

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
/* eslint-disable semi,no-unused-vars,semi-spacing,no-useless-escape,one-var */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
