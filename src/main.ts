import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import EmptyComponent from './EmptyComponent.vue'
import MemoryLeak from './MemoryLeak.vue'
import MemorySafe from './MemorySafe.vue'
import MemoryLeakMicrophone from './MemoryLeakMicrophone.vue'
import Wrapper from './Wrapper.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Wrapper,
      children: [
        {
          path: '',
          name: 'empty',
          component: EmptyComponent
        },
        {
          path: 'memory-safe',
          name: 'memory-safe',
          component: MemorySafe,
        },
        {
          path: 'memory-leak',
          name: 'memory-leak',
          component: MemoryLeak,
        },
        {
          path: 'permission-leak',
          name: 'permission-leak',
          component: MemoryLeakMicrophone,
        }
      ]
    },
  ],
})

const app = new Vue({
  components: { App },
  router,
  render: (h) => h(App),
})

app.$mount('#app')