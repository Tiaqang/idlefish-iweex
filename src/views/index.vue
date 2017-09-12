<template>
    <OWTabbar imageType="iconimage" :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></OWTabbar>
</template>
<script>
  import { OWTabbar } from 'iweex'
  export default {
    components: {
      OWTabbar
    },
    data () {
      return {
        tabItems: [
          {
            index: 0,
            label: '首页',
            titleColor: '#000000',
            icon: 'icon-home',
            src: weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/command.js',
            visibility: 'visible'
          },
          {
            index: 1,
            label: '登录',
            titleColor: '#000000',
            icon: 'icon-my',
            src: weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/login.js',
            visibility: 'hidden'
          }
        ]
      }
    },
    methods: {
      tabBarOnClick (e) {
        console.log('tabBarOnClick', e.index)
      }
    }
  }
</script>
