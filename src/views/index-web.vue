<template>
    <div>
        <router-view/>
        <OTabbar
                :value="$route.path"
                router
                :tabbarItems="tabItems">
        </OTabbar>
        <div class="publish-out">
            <div class="publish" @click="publish">
                <OIcon type="icon-add"></OIcon>
            </div>
        </div>
        <OMask :show="maskshow" @onClick="maskClick"></OMask>
    </div>
</template>

<script>
  import { OTabbar, OIcon, OMask } from 'iweex'

  export default {
    components: {
      OTabbar, OIcon, OMask
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
            label: '',
            titleColor: '#000000',
            nUrl: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
            aUrl: 'http://gtms04.alicdn.com/tps/i4/',
            icon: ''
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
        ],
        maskshow: false,
        nogrey: true
      }
    },
    methods: {
      publish () {
        this.maskshow = true
      },
      maskClick () {
        this.maskshow = !this.maskshow
      }
    }
  }
</script>

<style scoped>

    .publish {
        width: 90px;
        height: 90px;
        border-radius: 45px;
        background-color: #FFD700;
        position: fixed;
        bottom: 20px;
        left: 330px;
        justify-content: center;
        align-items: center;
    }
    .publish-out{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        border-top-width: 1px;
        border-color: lightgray;
        background-color: #f7f7fa;
        position: fixed;
        bottom: 20px;
        left: 325px;
    }
</style>
