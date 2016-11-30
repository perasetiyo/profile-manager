import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import ItemList from './components/ItemList'
import Update from './components/Update'
import Create from './components/Create'
import ItemDescription from './components/ItemDescription'

Vue.use(Router)
Vue.use(VueResource)

const Foo = { template: '<div>foo</div>' }

const routes = [
  // { path: '/foo', component: Foo },
  { path: '/itemlist', name: 'home', component: ItemList },
  { path: '/itemdescription', name: 'description', component: ItemDescription },
  { path: '/update', component: Update },
  { path: '/create', component: Create },
  { path: '/', redirect: '/itemlist' }
]

const router = new Router({
  routes,
  history: true
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

export { router };
