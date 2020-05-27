import Vue from 'vue'
import Router from "vue-router"
import Home from "../pages/home.vue"
import News from "../pages/singleNews.vue"
import User from "../pages/user.vue"
  
  const router = new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/news/:id', component: News },
      {path: '/user/privat/office',component: User}
    ]
  })

  Vue.use(Router)

  export default router;