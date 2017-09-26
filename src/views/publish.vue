<template>
  <div class="div-out" :class="maskclick">
    <div class="div-circle_left" ref="circleleft" @click="addpublish">
      <image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3874593207,1898074018&fm=27&gp=0.jpg" class="image_left" resize="cover"></image>
    </div>
    <div class="div-circle_center" ref="circlecenter" @click="addpublish">
      <image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1902469659,4140377193&fm=27&gp=0.jpg" class="image_center" resize="cover"></image>
    </div>
    <div class="div-circle_right" ref="circleright" @click="addpublish">
      <image src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4172920234,3688928461&fm=27&gp=0.jpg" class="image_left" resize="cover"></image>
    </div>
  </div>
</template>

<script>
  import { OIcon } from 'iweex'

  const animation = weex.requireModule('animation')
  const modal = weex.requireModule('modal')

  export default {
    components: {
      OIcon
    },
    props: {
      isclick: {
        default: false
      }
    },
    computed: {
      maskclick () {
        if (this.isclick) {
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
            console.log('动画完成')
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
              console.log('动画完成')
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
              console.log('动画完成')
            })
          }, 100)
        }
      }
    },
    mounted () {
      var CircleLeft = this.$refs.circleleft
      var CircleCenter = this.$refs.circlecenter
      var CircleRight = this.$refs.circleright
      // if (this.circleradius === 200) {
      animation.transition(CircleLeft, {
        styles: {
          transform: 'scale(0.3)',
          transformOrigin: 'center center'
        },
        duration: 200,
        delay: 0,
        timingFunction: 'ease-out'
      }, function () {
        console.log('动画完成')
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
        console.log('动画完成')
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
        console.log('动画完成')
      })
    },
    methods: {
      addpublish () {
        modal.toast({
          message: '新增发布',
          duration: 0.3
        })
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
  .image_left{
    width: 400px;
    height: 400px;
  }
  .image_center{
    width: 10px;
    height: 10px;
  }
</style>
