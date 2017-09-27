import idlefish from '../views/idlefish.vue'
import fishpond from '../views/fishpond.vue'
import publish from '../views/publish.vue'
import message from '../views/message.vue'
import home from '../views/home.vue'
import indexweb from '../views/index-web.vue'
import login from '../views/login.vue'
import userinfo from '../views/userinfo.vue'
import RcmdItemDetail from '../views/RcmdItemDetail.vue'
import classify from '../views/classify.vue'
import chatpanel from '../views/chatpanel.vue'

const routes = [
  {
    name: 'indexweb',
    path: '/',
    component: indexweb,
    children: [
      {
        name: 'idlefish',
        path: '/',
        component: idlefish
      },
      {
        name: 'fishpond',
        path: '/fishpond',
        component: fishpond
      },
      {
        name: 'publish',
        path: '/publish',
        component: publish
      },
      {
        name: 'message',
        path: '/message',
        component: message
      },
      {
        name: 'home',
        path: '/home',
        component: home
      },
      {
        name: 'classify',
        path: '/classify',
        component: classify
      },
      {
        name: 'chatpanel',
        path: '/chatpanel',
        component: chatpanel
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: login
  },
  {
    name: 'userinfo',
    path: '/userinfo',
    component: userinfo
  },
  {
    name: 'RcmdItemDetail',
    path: '/RcmdItemDetail',
    component: RcmdItemDetail
  }
]
export default routes
