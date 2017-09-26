<template>
  <div class="div-out" :class="maskclick">
    <div class="div-out_left">
      <div class="div-circle_left" ref="circleleft" @click="addpublish">
        <image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3874593207,1898074018&fm=27&gp=0.jpg"
               class="image_left" resize="cover"></image>
      </div>
      <text class="text">{{idle}}</text>
    </div>
    <div class="div-out_center">
      <div class="div-circle_center" ref="circlecenter" @click="addpublish">
        <image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1902469659,4140377193&fm=27&gp=0.jpg"
               class="image_center" resize="cover"></image>
      </div>
      <text class="text">{{zufang}}</text>
    </div>
    <div class="div-out_right">
      <div class="div-circle_right" ref="circleright" @click="addpublish">
        <image src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4172920234,3688928461&fm=27&gp=0.jpg"
               class="image_left" resize="cover"></image>
      </div>
      <text class="text">{{caiyi}}</text>
    </div>
  </div>
</template>

<script>
  import { OIcon } from 'iweex'

  const animation = weex.requireModule('animation')
  // const modal = weex.requireModule('modal')

  export default {
    components: {
      OIcon
    },
    data () {
      return {
        idle: '',
        zufang: '',
        caiyi: ''
      }
    },
    props: {
      isclick: {
        default: false
      }
    },
    computed: {
      maskclick () {
        if (this.isclick) {
          this.idle = ''
          this.zufang = ''
          this.caiyi = ''
          var CircleLeft = this.$refs.circleleft
          var CircleCenter = this.$refs.circlecenter
          var CircleRight = this.$refs.circleright
          animation.transition(CircleLeft, {
            styles: {
              width: '120',
              height: '120',
              transform: 'translate(140px,700px)',
              transformOrigin: 'center center'
            },
            duration: 200,
            delay: 0,
            timingFunction: 'ease-in'
          }, function () {
          })
          setTimeout(() => {
            animation.transition(CircleRight, {
              styles: {
                width: '120',
                height: '120',
                transform: 'translate(-140px,700px)',
                transformOrigin: 'center center'
              },
              duration: 200,
              delay: 0,
              timingFunction: 'ease-out'
            }, function () {
            })
          }, 200)
          setTimeout(() => {
            animation.transition(CircleCenter, {
              styles: {
                transform: 'translateY(700px)',
                transformOrigin: 'center center'
              },
              duration: 200,
              delay: 0,
              timingFunction: 'ease-out'
            }, function () {
            })
          }, 100)
        }
      }
    },
    mounted () {
      var CircleLeft = this.$refs.circleleft
      var CircleCenter = this.$refs.circlecenter
      var CircleRight = this.$refs.circleright
      animation.transition(CircleLeft, {
        styles: {
          transform: 'scale(0.3)',
          transformOrigin: 'center center'
        },
        duration: 200,
        delay: 0,
        timingFunction: 'ease-out'
      }, function () {
      })
      animation.transition(CircleCenter, {
        styles: {
          transform: 'scale(12)',
          transformOrigin: 'center center'
        },
        duration: 200,
        delay: 0,
        timingFunction: 'ease-out'
      }, function () {
      })
      animation.transition(CircleRight, {
        styles: {
          transform: 'scale(0.3)',
          transformOrigin: 'center center'
        },
        duration: 200,
        delay: 0,
        timingFunction: 'ease-out'
      }, function () {
      })
      setTimeout(() => {
        this.idle = '闲置'
        this.zufang = '租房'
        this.caiyi = '才艺'
      }, 200)
    },
    methods: {
      addpublish () {
        this.jump('/publishidle')
      }
    }
  }
</script>

<style scoped>
  .div-out {
    width: 750px;
    height: 1350px;
    opacity: 0.97;
    background-color: white;
    align-items: center;
  }

  .div-circle_left {
    position: fixed;
    bottom: 300px;
    left: 0px;
    width: 400px;
    height: 400px;
    border-radius: 200px;
  }

  .div-circle_center {
    position: fixed;
    bottom: 495px;
    left: 370px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #FFD700;
  }

  .div-circle_right {
    position: fixed;
    bottom: 300px;
    right: 0px;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    background-color: #FFD700;
  }

  .image_left {
    width: 400px;
    height: 400px;
  }

  .image_center {
    width: 10px;
    height: 10px;
  }

  .div-out_left {
    position: fixed;
    bottom: 260px;
    left: 140px;
    width: 120px;
    height: 160px;
    flex-direction: column;
    align-items: center;
  }

  .div-out_center {
    position: fixed;
    bottom: 260px;
    left: 315px;
    width: 120px;
    height: 160px;
    flex-direction: column;
    align-items: center;
  }

  .div-out_right {
    position: fixed;
    bottom: 260px;
    right: 140px;
    width: 120px;
    height: 160px;
    flex-direction: column;
    align-items: center;
  }

  .text {
    font-size: 26px;
  }
</style>
