<template>
  <div>
    <OWTabbar imageType="iconimage" :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></OWTabbar>
    <div class="publish-out" @click="publish" >
      <div class="publish" ref="iconadd">
        <OIcon type="icon-add"></OIcon>
      </div>
    </div>
    <OMask :show="maskshow" @onClick="maskClick">
      <Publish :isclick="isMaskclick"></Publish>
      <div class="div-icon" ref="iconcancel">
        <OIcon type="icon-roundclose"></OIcon>
      </div>
    </OMask>
  </div>
</template>
<script>
  import { OWTabbar, OIcon, OMask } from 'iweex'
  import Publish from './publish.vue'

  const animation = weex.requireModule('animation')
  export default {
    components: {
      OWTabbar, OIcon, OMask, Publish
    },
    created () {
    },
    data () {
      return {
        tabItems: [
          {
            index: 0,
            label: '闲鱼',
            titleColor: '#000000',
            src: weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/idlefish.js',
            icon: 'icon-home_light',
            visibility: 'visible'
          },
          {
            index: 1,
            label: '鱼塘',
            titleColor: '#000000',
            src: weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/fishpond.js',
            visibility: 'hidden',
            icon: 'icon-wang'
          },
          {
            index: 2,
            label: '',
            titleColor: '#000000',
            src: '',
            visibility: 'hidden',
            icon: ''
          },
          {
            index: 3,
            label: '消息',
            titleColor: '#000000',
            src: weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/message.js',
            visibility: 'hidden',
            icon: 'icon-message_light'
          },
          {
            index: 4,
            label: '我的',
            titleColor: '#000000',
            src: weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/home.js',
            visibility: 'hidden',
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
      },
      tabBarOnClick (e) {
        console.log('tabBarOnClick', e.index)
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
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 20px;
    left: 330px;
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
    justify-content: center;
    align-items: center;
  }

  .div-icon {
    position: absolute;
    width: 90px;
    height: 90px;
    bottom: 20px;
    left: 330px;
    justify-content: center;
    align-items: center;
  }

</style>
