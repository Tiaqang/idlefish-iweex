<template>
  <div style="flex-direction: column" @longpress="longpress">

    <div v-if="platform !== 'Web'" :class="triangleClass" :style="{'background-color': `${bgColor}`}"></div>
    <div v-if="platform === 'Web'" :class="triangleClass"
         :style="{'border-right-color': `${borderColor.left}`,
                  'border-left-color': `${borderColor.right}`}"></div>
    <div
            v-if="imageUrl === ''"
            :class="bubbleClass"
            :style="{'width': `${maxwidth}px`,
               'margin-left': `${marginLeft}px`,
               'margin-right': `${marginRight}px`,
               'background-color': `${bgColor}`}">
      <text ref="text" :class="textClass" >{{this.text}}</text>
    </div>
    <image
            v-if="imageUrl !== ''"
            resize="cover"
            class="chatItem-userImage"
            :src="imageUrl">
    </image>
  </div>
</template>

<style scoped>
  .chatItem-triangle-phone {
    position: absolute;
    width: 17px;
    height: 17px;
    border-width: 0px;
  }
  .chatItem-triangle-phone-left {
    transform: rotate(45deg) translate(14px, 23px);
    transform-origin: center center;
  }
  .chatItem-triangle-phone-right {
    transform: rotate(45deg) translate(718px, 23px);
  }
  .chatItem-triangle-web {
    position: absolute;
    margin-top: 23px;
    width: 0px;
    height: 0px;
    border-width: 12px;
  }
  .chatItem-triangle-web-left {
    border-bottom-color: transparent;
    border-top-color: transparent;
  }
  .chatItem-triangle-web-right {
    border-bottom-color: transparent;
    border-top-color: transparent;
    left: 725px;
  }
  .chatItem-bubble {
    flex-direction: row;
    border-width: 0px;
    padding-bottom: 16px;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 8px;
    overflow: hidden;
  }
  .chatItem-text {
    width: 568px;
    font-size: 28px;
  }
  .chatItem-text-short {
    height: 44px;
    font-size: 28px;
    line-height: 28px;
    padding-top: 8px;
  }
  .chatItem-userImage {
    height: 300px;
    width: 300px;
  }
</style>

<script>
  import Base from '../../mixins/base.js'
  const dom = weex.requireModule('dom')
  export default {
    components: {
    },
    mixins: [ Base ],
    data: function () {
      return {
        platform: 'Web',
        textShort: true,
        test: 0,
        maxwidth: 600,
        marginLeft: 24,
        marginRight: 0,
        borderColor: {'right': 'transparent', 'left': 'transparent'}
      }
    },
    props: {
      imageUrl: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'left'
      },
      text: {
        type: String,
        default: '长按取消长按取消长按取消长按取消长按取消'
      },
      bgColor: {
        type: String,
        default: '#3CFF3F'
      }
    },
    computed: {
      triangleClass () {
        const result = []
        result.push((WXEnvironment.platform !== 'Web') ? `chatItem-triangle-phone` : `chatItem-triangle-web`)
        result.push((WXEnvironment.platform !== 'Web') ? `chatItem-triangle-phone-${this.type}` : `chatItem-triangle-web-${this.type}`)
        return result
      },
      textClass () {
        let result = []
        result.push((this.textShort) ? `chatItem-text-short` : `chatItem-text`)
        return result
      },
      bubbleClass () {
        let result = []
        result.push(`chatItem-bubble`)
        return result
      }
    },
    methods: {
      longpress: function (e) {
        this.$emit('bubblePress', e)
      }
    },
    created: function () {
      this.platform = WXEnvironment.platform
      this.borderColor[this.type] = this.bgColor
    },
    mounted: function () {
      var self = this
      setTimeout(function () {
        dom.getComponentRect(self.$refs.text, function (option) {
          self.marginRight = (self.type === 'right') ? 24 : 0
          if (option.size.width > 580) {
            self.textShort = false
            self.marginLeft = (self.type === 'right') ? 126 : 24
          } else {
            self.maxwidth = option.size.width + 32
            if (self.type === 'right') {
              self.marginLeft = 127 + 600 - self.maxwidth
            }
          }
          self.maxwidth = self.rpx(self.maxwidth)
          self.marginLeft = self.rpx(self.marginLeft)
          self.marginRight = self.rpx(self.marginRight)
        })
      }, 170)
    }
  }
</script>
