import Vue from 'vue'
import Router from 'vue-router'

import WebHome from '@/components/homeComponent'
import WebService from '@/components/serviceComponent'
import WebSkills from '@/components/skillsComponent'
import WebContact from '@/components/contactComponent'
import WebBlog from '@/components/blogComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WebHome',
      component: WebHome,
      meta: {
        title: 'This is index page'
      }
    },

    {
      path: '/service',
      name: 'WebService',
      component: WebService,
      meta: {
        title: 'service'
      }
    },
    {
      path: '/skills',
      name: 'WebSkills',
      component: WebSkills,
      meta: {
        title: 'skills'
      }
    },
    {
      path: '/contact',
      name: 'webContact',
      component: WebContact,
      meta: {
        title: 'contact us'
      }
    },
    {
      path: '/blog',
      name : 'WebBlog',
      component: WebBlog,
      meta: {
        title: 'blog'
      }
    }
  ],
  mode: 'history'
})
