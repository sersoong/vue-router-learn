// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Index from './components/Index.vue'
import IndexLeft from './components/IndexLeft.vue'
import IndexRight from './components/IndexRight.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import User from './components/User.vue'
import Post from './components/Post.vue'
import axios from 'axios'
import Qs from 'querystring'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.prototype.axios = axios
Vue.prototype.qs = Qs
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/foo',
      component: Foo,
      children: [{
        path: 'left',
        component: IndexLeft
      }, {
        path: 'right',
        component: IndexRight
      }]
    }, {
      path: '/bar',
      component: Bar,
      alias: '/hellobar'
    }, {
      path: '/user/:id?',
      component: User,
      props: true
    }, {
      path: '/re',
      redirect: '/foo'
    }, {
      path: '/post',
      component: Post
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
