<template>
<div>
  <router-view />
  <OTabbar
      :value="$route.path"
      router
      :tabbarItems="tabItems">
  </OTabbar>
</div>
</template>

<script>
  import { OTabbar } from 'iweex'
  export default {
    components: {
      OTabbar
    },
    data () {
      return {
        tabItems: [
          {
            index: '/',
            label: '首页',
            titleColor: '#000000',
            nUrl: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
            aUrl: 'http://gtms04.alicdn.com/tps/i4/',
            icon: 'icon-home_light'
          },
          {
            index: '/login',
            label: '登录',
            titleColor: '#000000',
            nUrl: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
            aUrl: 'http://gtms04.alicdn.com/tps/i4/',
            icon: 'icon-my_light'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
