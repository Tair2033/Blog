import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/HomeView.vue'
import Popular from '../views/PopularView.vue'
import PostView from '../views/PostView.vue'
import NewPostsView from '../views/NewPostsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeView',
    component: Home
  },
  {
    path: '/popular',
    name: 'Popular',
    component: Popular
  },
  {
    path: '/new-posts',
    name: 'New',
    component: NewPostsView
  },
  {
    path: '/post/:id',
    name: 'PostView',
    component: PostView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
