import idlefish from '../views/idlefish.vue'
import fishpond from '../views/fishpond.vue'
import message from '../views/message.vue'
import home from '../views/home.vue'
import indexweb from '../views/index-web.vue'
import login from '../views/login.vue'
import userinfo from '../views/userinfo.vue'
import publishidle from '../views/publishIdle.vue'
import classify from '../views/classify.vue'
import chatpanel from '../views/chatpanel.vue'
import detail from '../views/detail.vue'
import test from '../views/Iinput.vue'
import leaveword from '../views/leaveword.vue'

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
        name: 'message',
        path: '/message',
        component: message
      },
      {
        name: 'home',
        path: '/home',
        component: home
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
    name: 'publishidle',
    path: '/publishidle',
    component: publishidle
  },
  {
    name: 'chatpanel',
    path: '/chatpanel',
    component: chatpanel
  },
  {
    name: 'classify',
    path: '/classify',
    component: classify
  },
  {
    name: 'test',
    path: '/test',
    component: test
  },
  {
    name: 'detail',
    path: '/detail',
    component: detail
  },
  {
    name: 'leaveword',
    path: '/leaveword',
    component: leaveword
  }
]

export default routes
