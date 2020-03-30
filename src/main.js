// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
/* eslint-disable import/first */
Vue.config.productionTip = false

// add bootstrap
import 'jquery/dist/jquery.js'
import 'bootstrap'
import 'popper.js/dist/popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
// end add bootstrap

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  watch: {
    $route: {
      immediate: true,
      handler (to, from) {
        document.title = to.meta.title || 'Default title'
      }
    }
  }
})
