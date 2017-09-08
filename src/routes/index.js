import indexweb from '../views/index-web'
import home from '../views/home'
import Login from '../views/login'
import Register from '../views/register'
import Reset from '../views/reset'

const routes = [
  {
    name: 'index',
    path: '/',
    component: indexweb,
    children: [
      {
        name: 'home',
        path: '/',
        component: home
      }
    ]
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    name: 'Register',
    path: '/register',
    component: Register
  },
  {
    name: 'Reset',
    path: '/reset',
    component: Reset
  }
]

export default routes
