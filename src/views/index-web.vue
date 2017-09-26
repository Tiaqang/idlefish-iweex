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
        <OIcon type="icon-add" ref="iconadd"></OIcon>
      </div>
    </div>
    <OMask :show="maskshow" @onClick="maskClick">
      <Publish :isclick="isMaskclick"></Publish>
      <OIcon type="icon-roundclose" class="div-icon" ref="iconcancel"></OIcon>
    </OMask>
  </div>
</template>

<script>
  import { OTabbar, OIcon, OMask } from 'iweex'
  import Publish from './publish.vue'

  const animation = weex.requireModule('animation')
  // const modal = weex.requireModule('modal')

  export default {
    components: {
      OTabbar, OIcon, OMask, Publish
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
        radius: 0,
        isMaskclick: false
      }
    },
    methods: {
      publish () {
        var iconAdd = this.$refs.iconadd
        // this.radius++
        var ra = 45
        animation.transition(iconAdd, {
          styles: {
            transform: 'rotate(' + ra + 'deg)'
          },
          duration: 200,
          delay: 0,
          timingFunction: 'ease-in'
        }, function () {
        })
        setTimeout(() => {
          animation.transition(iconAdd, {
            styles: {
              transform: 'rotate(' + 0 + 'deg)'
            },
            duration: 100,
            delay: 0,
            timingFunction: 'ease-in'
          }, function () {
          })
          this.maskshow = true
        }, 200)
      },
      maskClick () {
        setTimeout(() => {
          this.maskshow = !this.maskshow
          this.isMaskclick = false
        }, 400)
        this.isMaskclick = true
        var iconCancel = this.$refs.iconcancel
        animation.transition(iconCancel, {
          styles: {
            transform: 'rotate(-45deg)'
          },
          duration: 200,
          delay: 0,
          timingFunction: 'linear'
        }, function () {
        })
      }
    },
    computed: {}
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

  .publish-out {
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

  .div-icon {
    position: absolute;
    bottom: 35px;
  }

</style>
