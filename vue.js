// import App from './index.vue'
const App = require('./index.vue')
// import Vue from 'https://cdn.bootcss.com/vue/2.5.2/vue.min.js'
const Vue = require('https://cdn.bootcss.com/vue/2.5.2/vue.min.js')
const app = new Vue({
  el: '#app',
  render: h => h(App)
})
