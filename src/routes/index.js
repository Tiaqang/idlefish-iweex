import idlefish from '../views/idlefish.vue'
import fishpond from '../views/fishpond.vue'
import publish from '../views/publish.vue'
import message from '../views/message.vue'
import home from '../views/home.vue'
import indexweb from '../views/index-web.vue'

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
      }
    ]
  }

]

export default routes
