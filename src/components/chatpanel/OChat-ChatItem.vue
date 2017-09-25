<!--
<template>
  <div :style="{'flex-direction': 'row', 'justify-content' : `${justifyContent}`}">
    <image v-if="type === 'left'" resize="cover" class="chatItem-userImage" :src="userUrl" @click="click"></image>
    <OChatBubble class="chatItem-bubble"
    :text="text"
    :imageUrl="chatImage"
    :type="type"
    :bgColor="bubbleColor[type]"
    v-on:bubblePress="longpress"></OChatBubble>
    <image v-if="type === 'right'" resize="cover" class="chatItem-userImage" :src="userUrl" @click="click"></image>
    &lt;!&ndash;<OTagBubble class="chatItem-tag"
                type="bottom"
                :left="23"
                :display="tagDis"
                @disappear="disappear"
                :style="{'top': `${rpx(tagPosition.Y)}px`,
                         'left': `${tagPosition.X}px`}">
      <div style="flex-direction: row;align-content: center">
        <text class="chatItem-button" style=" border-right-color: white; border-right-width: 2px;">复制</text>
        <text class="chatItem-button" style=" border-right-color: white; border-right-width: 2px;">转发</text>
        <text class="chatItem-button" style=" border-right-color: white; border-right-width: 2px;">收藏</text>
        <text class="chatItem-button">删除</text>
      </div>
    </OTagBubble>&ndash;&gt;
  </div>
</template>

<style scoped>
  .chatItem-userImage {
    height: 70px;
    width: 70px;
  }
  .chatItem-bubble {
  }
  .chatItem-tag {
    margin-top: 0px;
    position: absolute;
  }
  .chatItem-button {
    width: 92px;
    height: 40px;
    font-size: 28px;
    text-align: center;
    color: white;
  }

</style>

<script>
  import Base from '../../../mixins/base.js'
  import OChatBubble from './OChat-ChatBubble.vue'
  import OTagBubble from './OChat-TagBubble.vue'
  // const modal = weex.requireModule('modal')
  export default {
    name: 'OChatItem',
    components: {
      OChatBubble,
      OTagBubble
    },
    mixins: [ Base ],
    props: {
      userUrl: {
        type: String,
        default: 'https://sinacloud.net/vue-wechat/images/headers/header01.png'
      },
      text: {
        type: String,
        default: '长按消息取消长按消息取消长按消息取消长按消息取消长按消息取消'
      },
      chatImage: {
        type: String,
        default: ''
      },
      /*
      value: {
        default: ''
      },
      */
      type: {
        type: String,
        default: 'right'
      },
      bubbleColor: {
        type: Object,
        default: function () {
          return {
            left: '#ffffff',
            right: '#00ff16'
          }
        }
      },
      keyID: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        tagDis: false,
        tagPosition: {
          X: -300,
          Y: -84
        }
      }
    },
    computed: {
      justifyContent: function () {
        return (this.type === 'left') ? 'flex-start' : 'flex-end'
      }
    },
    /*
    watch: {
      value: function () {
        if (!this.tagDis || this.value) {
          return
        }
        this.tagDis = false
      }
    },
    */
    methods: {
      click: function (e) {
        this.$emit('onlick', e, 'image')
      },
      longpress: function (e) {
        this.$emit('itemlongpress', e, this.keyID)
        this.$emit('input', true)
      },
    }
  }
</script>
-->
<template>
  <div :style="{'flex-direction': 'row', 'justify-content' : `${justifyContent}`}">
    <image v-if="type === 'left'" resize="cover" class="chatItem-userImage" :src="userUrl" @click="click"></image>
    <OChatBubble class="chatItem-bubble"
                 :text="text"
                 :imageUrl="chatImage"
                 :type="type"
                 :bgColor="bubbleColor[type]"
                 v-on:bubblePress="longpress"></OChatBubble>
    <image v-if="type === 'right'" resize="cover" class="chatItem-userImage" :src="userUrl" @click="click"></image>
    <OTagBubble v-if="tagShow"
                class="chatItem-tag"
                type="bottom"
                :left="23"
                :display="tagDis"
                @disappear="disappear"
                :style="{'top': `${rpx(tagPosition.Y)}px`,
                         'left': `${tagPosition.X}px`}">
      <div style="flex-direction: row;align-content: center">
        <text class="chatItem-button" style=" border-right-color: white; border-right-width: 2px;">复制</text>
        <text class="chatItem-button" style=" border-right-color: white; border-right-width: 2px;">转发</text>
        <text class="chatItem-button" style=" border-right-color: white; border-right-width: 2px;">收藏</text>
        <text class="chatItem-button">删除</text>
      </div>
    </OTagBubble>
  </div>
</template>

<style scoped>
  .chatItem-userImage {
    height: 70px;
    width: 70px;
  }
  .chatItem-bubble {
  }
  .chatItem-tag {
    margin-top: 0px;
    position: absolute;
  }
  .chatItem-button {
    width: 92px;
    height: 40px;
    font-size: 28px;
    line-height: 40px;
    text-align: center;
    color: white;
  }

</style>

<script>
  import Base from '../../mixins/base.js'
  import OChatBubble from './OChat-ChatBubbleTest.vue'
  import OTagBubble from './OChat-TagBubble.vue'
  // const modal = weex.requireModule('modal')
  export default {
    name: 'OChatItem',
    components: {
      OChatBubble,
      OTagBubble
    },
    mixins: [ Base ],
    props: {
      userUrl: {
        type: String,
        default: 'https://sinacloud.net/vue-wechat/images/headers/header01.png'
      },
      text: {
        type: String,
        default: '长按消息取消长按消息取消长按消息取消长按消息取消长按消息取消'
      },
      chatImage: {
        type: String,
        default: ''
      },
      value: {
        default: ''
      },
      type: {
        type: String,
        default: 'right'
      },
      bubbleColor: {
        type: Object,
        default: function () {
          return {
            left: '#ffffff',
            right: '#00ff16'
          }
        }
      },
      keyID: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        tagDis: false,
        tagPosition: {
          X: -300,
          Y: -84
        },
        tagShow: false
      }
    },
    computed: {
      justifyContent: function () {
        return (this.type === 'left') ? 'flex-start' : 'flex-end'
      }
    },
    watch: {
      value: function () {
        if (!this.tagDis || this.value) {
          return
        }
        this.tagDis = false
      }
    },
    methods: {
      click: function (e) {
        this.$emit('onlick', e, 'image')
      },
      longpress: function (e) {
        this.$emit('itemlongpress', e, this.keyID)
        if (!this.tagShow) {
          return
        }
        var self = this
        // value控制tag的数量，true表示已经存在一个
        if (this.value) {
          return
        }
        this.tagPosition.X = e.changedTouches[0].screenX - 23 * 2
        setTimeout(function () {
          self.tagDis = true
        }, 0)
        this.$emit('input', true)
      },
      disappear: function () {
        this.tagPosition.X = -300
      }
    },
    created: function () {
      if (WXEnvironment.platform === 'iOS') {
        this.tagShow = true
      }
    },
    mounted: function () {
    }
  }
</script>
