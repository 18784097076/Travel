// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
// 重置样式  styles就代表src/assets/styles，类似@，起了别名
import 'styles/reset.css'
// 解决1像素边框
import 'styles/border.css'
// 引入iconfont
import 'styles/iconfont.css'

Vue.config.productionTip = false
// 解决click300ms延迟
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
