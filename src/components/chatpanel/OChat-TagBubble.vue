<template>
  <div v-if="componentShow" :style="{'flex-direction': 'row', 'opacity': (show) ? 1 : 0}" ref="tagBubble">

    <div v-if="(platform === 'Web')"
         class="tagBubble-triangle-phone"
         :style="{'transform': `rotate(45deg)`,
                  'transform-origin': 'center center',
                  'top': `${rpx(triangleTanslate.Y)}px`,
                  'left': `${rpx(triangleTanslate.X)}px`,
                  'background-color': `${bgColor}`}"></div>

    <div v-if="(platform !== 'Web')"
         class="tagBubble-triangle-phone"
         :style="{'transform': `rotate(45deg) translate(${triangleTanslate.X}px, ${triangleTanslate.Y}px)`,
                  'transform-origin': 'center center',
                  'background-color': `${bgColor}`}"></div>

    <div :class="bubbleClass"
         ref="bubble"
         :style="{'margin-top': `${rpx(bubbleMargin.top)}px`,
                  'margin-right': `${rpx(bubbleMargin.right)}px`,
                  'margin-bottom': `${rpx(bubbleMargin.bottom)}px`,
                  'margin-left': `${rpx(bubbleMargin.left)}px`,
                  'background-color': `${bgColor}`}">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .tagBubble-triangle-phone {
    position: absolute;
    width: 17px;
    height: 17px;
    border-width: 0px;
  }
  .tagBubble-triangle-web {
    position: absolute;
    width: 0px;
    height: 0px;
    border-width: 12px;
  }
  .tagBubble-triangle-web-left {
    border-left-color: transparent;
    border-bottom-color: transparent;
    border-top-color: transparent;
  }
  .tagBubble-triangle-web-right {
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-top-color: transparent;
  }
  .tagBubble-triangle-web-bottom {
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  .tagBubble-triangle-web-top {

    border-right-color: transparent;
    border-left-color: transparent;
    border-top-color: transparent;
  }
  .tagBubble-bubble {
    flex-direction: row;
    align-items: center;
    border-width: 0px;
    padding-bottom: 16px;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 8px;
  }
</style>

<script>
  import Base from '../../mixins/base.js'
  const dom = weex.requireModule('dom')
  export default {
    components: {
    },
    mixins: [ Base ],
    props: {
      type: {
        type: String,
        default: 'left'
      },
      display: {
        type: Boolean,
        default: true
      },
      bgColor: {
        type: String,
        default: '#000000'
      },
      offset: {
        type: Number,
        default: 23
      },
      top: {
        type: Number,
        default: 0
      },
      right: {
        type: Number,
        default: 0
      },
      bottom: {
        type: Number,
        default: 0
      },
      left: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        animation: weex.requireModule('animation'),
        platform: 'Web',
        bubbleMargin: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        triangleMargin: {
          top: this.top,
          right: this.right,
          bottom: this.bottom,
          left: this.left
        },
        triangleTanslate: {
          X: 0,
          Y: 0
        },
        opposite: {
          top: 'bottom',
          right: 'left',
          bottom: 'top',
          left: 'right'
        },
        show: this.display,
        componentShow: true
      }
    },
    computed: {
      bubbleClass () {
        let result = []
        result.push(`tagBubble-bubble`)
        return result
      }
    },
    watch: {
      display: function () {
        this.componentShow = this.display ? true : this.componentShow
        var self = this
        setTimeout(function () {
          self.show = self.display
        }, 0)
      },
      show: function () {
        var self = this
        self.animation.transition(self.$refs.tagBubble, {
          styles: {
            opacity: (self.show) ? 1 : 0
          },
          duration: 500, // ms
          timingFunction: 'ease-in',
          delay: 1 // ms
        }, function () {
          self.$emit((self.display) ? 'onappear' : 'ondisappear')
          self.componentShow = self.display ? self.componentShow : false
        })
      }
    },
    mounted: function () {
      var self = this
      setTimeout(function () {
        dom.getComponentRect(self.$refs.bubble, function (option) {
          self.triangleTanslate.X = (self.type === 'top' || self.type === 'bottom') ? self.left : ((self.type === 'left') ? 15 : option.size.width - 10)
          self.triangleTanslate.Y = (self.type === 'left' || self.type === 'right') ? self.top : ((self.type === 'top') ? 15 : option.size.height - 10)
          console.log(self.triangleMargin)
        })
      }, 100)
    },
    created: function () {
      this.platform = WXEnvironment.platform
      this.bubbleMargin[this.type] = 24
    }
  }
</script>
