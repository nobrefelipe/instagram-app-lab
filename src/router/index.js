import Vue from 'vue'
import Router from 'vue-router'
import UserProfile from '@/components/views/user-profile/index.vue'
import PostSingle from '@/components/views/post-single/post-single.component.vue'
import Search from '@/components/views/search/index.vue'
import Home from '@/components/views/home/index.vue'
import PostComments from '@/components/shared/post-comments.vue'

Vue.use(Router)

export default new Router({

  mode: 'history',

  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/search',
      name: 'Search',
      component: Search
    },

    {
      path: '/profile/:id',
      name: 'UserProfile',
      component: UserProfile
    },

    {
      path: '/:postid/post',
      name: 'PostSingle',
      component: PostSingle
    },

    {
      path: '/:postid/comments',
      name: 'PostComments',
      component: PostComments,
    }

  ]
})
