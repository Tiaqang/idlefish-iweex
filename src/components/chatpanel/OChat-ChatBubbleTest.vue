<template>
  <div style="flex-direction: column" @longpress="longpress">

    <OTagBubble v-if="imageUrl === '' && videoUrl === ''"
                class="chatItem-tag"
                :type="type"
                :top="17"
                :bgColor="bgColor"
                :display="true">
      <text ref="text" :class="textClass" >{{this.text}}</text>
    </OTagBubble>

    <div :style="{'margin-left': (type === 'left') ? `${rpx(24)}px` : '0px',
                  'margin-right': (type === 'right') ? `${rpx(24)}px` : '0px'}">
      <image
              v-if="imageUrl"
              resize="cover"
              class="chatItem-userImage"
              :src="imageUrl">
      </image>
      <video v-if="videoUrl"
             :src="videoUrl"
             class="chatItem-userImage"
             play-status="play" controls>
      </video>
    </div>

  </div>
</template>

<style scoped>
  .chatItem-text {
    width: 568px;
    font-size: 28px;
  }
  .chatItem-text-short {
    margin-top: 7px;
    margin-bottom: 7px;
    font-size: 28px;
    line-height: 28px;
  }
  .chatItem-userImage {
    height: 300px;
    width: 300px;
  }
</style>

<script>
  import Base from '../../mixins/base.js'
  import OTagBubble from './OChat-TagBubble.vue'
  const dom = weex.requireModule('dom')
  export default {
    components: {
      OTagBubble
    },
    mixins: [ Base ],
    data: function () {
      return {
        textShort: true,
        test: 0,
        maxwidth: 600,
        maxheight: 50,
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
        default: 'right'
      },
      text: {
        type: String,
        default: '长按取消长按取消长\n按取消长按长按取消长按取消长按取消长按长按取消长按取消长按取消长按'
      },
      bgColor: {
        type: String,
        default: '#3CFF3F'
      },
      videoUrl: {
        type: String,
        default: ''
      }
    },
    computed: {
      textClass () {
        let result = []
        result.push((this.textShort) ? `chatItem-text-short` : `chatItem-text`)
        return result
      }
    },
    methods: {
      longpress: function (e) {
        this.$emit('bubblePress', e)
      }
    },
    mounted: function () {
      if (this.imageUrl || this.videoUrl) {
        return
      }

      var self = this
      setTimeout(function () {
        dom.getComponentRect(self.$refs.text, function (option) {
          console.log(option.size)
          if (option.size.width > 580) {
            self.textShort = false
          } else {
            self.maxwidth = option.size.width + 32
          }
          self.maxheight = self.rpx(option.size.height + 32)
          self.maxwidth = self.rpx(self.maxwidth)
        })
      }, 0)
    }
  }
</script>
