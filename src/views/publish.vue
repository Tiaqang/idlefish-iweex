<template>
  <div class="div-out" :class="maskclick">
    <div class="div-circle_left" ref="circleleft">
      <image></image>
    </div>
    <div class="div-circle_center" ref="circlecenter">
      <image></image>
    </div>
    <div class="div-circle_right" ref="circleright">
      <image></image>
    </div>
  </div>
</template>

<script>
  import { OIcon } from 'iweex'

  const animation = weex.requireModule('animation')

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
    background-color: #FFD700;
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
</style>
