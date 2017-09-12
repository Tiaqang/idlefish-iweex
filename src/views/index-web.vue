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
            label: '闲鱼',
            titleColor: '#000000',
            nUrl: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
            aUrl: 'http://gtms04.alicdn.com/tps/i4/',
            icon: 'icon-home_light'
          },
          {
            index: '/fishpond',
            label: '鱼塘',
            titleColor: '#000000',
            nUrl: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
            aUrl: 'http://gtms04.alicdn.com/tps/i4/',
            icon: 'icon-wang'
          },
          {
            index: '/publish',
            label: '发布',
            titleColor: '#000000',
            nUrl: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
            aUrl: 'http://gtms04.alicdn.com/tps/i4/',
            icon: 'icon-wang'
          },
          {
            index: '/message',
            label: '消息',
            titleColor: '#000000',
            nUrl: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
            aUrl: 'http://gtms04.alicdn.com/tps/i4/',
            icon: 'icon-message_light'
          },
          {
            index: '/home',
            label: '我的',
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
