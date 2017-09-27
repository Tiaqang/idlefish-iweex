<template>
  <div >
    <!--背景-->
    <image
            resize="cover"
            class="chatPanel-bgPicture"
            :style="{'bottom': `${rpx((platform === 'android') ? 100 : 118)}px`}"
            :src="bgImgUrl">
    </image>
    <ONavPage
            :OHeader="true"
            bgcolor="#35495e"
            titlecolor="#ffffff"
            btncolor="#ffffff"
            pageWrapperColor="transparent"
            navpagebottom="118"
            @naviBarBackItemClick="jumpout()">
      <!--界面头部的插入-->
      <div slot="headerleft" style="flex-direction: row; justify-content: center; align-content: center">
        <OIcon size="40" color="#ffffff" @click="jumpout()" type="icon-back_light" ></OIcon>
        <text class="chatPanel-titleLeft">{{this.leftTitle}}</text>
      </div>
      <text slot="headercenter" class="chatPanel-titleCenter">{{title}}</text>
      <OIcon slot="headerright" size="40" color="#ffffff" @click="jumpout()" type="icon-myfill"></OIcon>
      <!--消息列表-->
      <div class="chatPanel-itemBox"
           v-for="(item, index) in chatItems"
           :ref="'item'+index"
           :key="index"
           :style="{'opacity': `${dispalyChat}`,
                    'margin-bottom': (index === chatItems.length - 1) ? '30px' : '0px'}"
           v-on:touchstart="touched">
        <OChatTime v-if="item.time"
                   class="chatPanel-item"
                   :style="{'margin-top': `${rpx(30)}px`}"
                   :chatTime="item.time">
        </OChatTime>
        <OChatItem v-else="item.time"
                   :style="{'margin-top': `${rpx(30)}px`,
                            'margin-bottom': `${rpx(10)}px`}"
                   v-model="tagClick"
                   :userUrl="userImgUrl[item.imageID]"
                   :text="item.text"
                   :type="item.imageID === 0 ? 'right' : 'left'"
                   :chatImage="item.chatImage"
                   :keyID="index"
                   @itemlongpress="longpress">
        </OChatItem>
      </div>
      <!--语音的弹出框-->
      <OPopup v-model="popupValue"
              @onshow="onshow"
              @change="v=>testValue=v"
              :nogrey=true>
        <div class="chatPanel-popupBox">
          <div style="margin-top: 20px;flex-direction: row">
            <OIcon v-if="popupState === 'back'" type="icon-repeal" size="140" color="#D4D2D2"></OIcon>
            <OIcon v-if="popupState === 'speeking'" type="icon-voice" size="140" color="#D4D2D2"></OIcon>
            <div v-if="popupState === 'speeking'" style=" top: 30px">
              <div class="chatPanel-popupText-sound" style="width: 26px;background-color: #D4D2D2"></div>
              <div class="chatPanel-popupText-sound" style="width: 24px;background-color: #D4D2D2"></div>
              <div class="chatPanel-popupText-sound" style="width: 22px;background-color: #D4D2D2"></div>
              <div class="chatPanel-popupText-sound" style="width: 20px;background-color: #D4D2D2"></div>
              <div class="chatPanel-popupText-sound" style="width: 18px;background-color: #D4D2D2"></div>
              <div class="chatPanel-popupText-sound" style="width: 16px;background-color: #D4D2D2"></div>
            </div>
          </div>
          <text :class="popupTextClass">{{popupText}}</text>
        </div>

      </OPopup>
      <OTagBubble class="chatItem-tag"
                  type="bottom"
                  :left="23"
                  :display="tagDis"
                  @ondisappear="disappear"
                  :style="{'top': `${rpx(tagPosition.Y)}px`,
                           'left': `${tagPosition.X}px`}">
        <div style="flex-direction: row;align-content: center">
          <text class="chatItem-button" style=" border-right-color: white; border-right-width: 2px;">复制</text>
          <text class="chatItem-button" style=" border-right-color: white; border-right-width: 2px;">转发</text>
          <text class="chatItem-button" style=" border-right-color: white; border-right-width: 2px;">收藏</text>
          <text class="chatItem-button">删除</text>
        </div>
      </OTagBubble>
    </ONavPage>
    <!--底部操作框-->
    <OChatBar class="chatPanel-bar"
              @barTouchStart="barTouchStart"
              @barTouchMove="barTouchMove"
              @barTouchEnd="bartouchEnd"></OChatBar>
  </div>
</template>

<style scoped>
  .chatPanel-bgPicture {
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
  }
  .chatPanel-item {
  }
  .chatPanel-itemBox {
    padding-right: 15px;
    padding-left: 15px;
  }
  .chatPanel-bar {
    position: fixed;
    bottom: 0px;
  }
  .chatPanel-titleLeft {
    font-size: 30px;
    color: white;
    height: 46px;
    line-height: 46px;
  }
  .chatPanel-titleCenter {
    font-size: 40px;
    color: white;
    height: 50px;
    line-height: 50px;
  }

  .chatPanel-popupBox {
    height: 280px;
    width: 280px;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.7);
    align-items: center;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    color: white;
  }
  .chatPanel-popupText {
    position: absolute;
    height: 44px;
    width: 260px;
    border-radius: 6px;
    font-size: 28px;
    line-height: 44px;
    text-align: center;
    bottom: 10px;
  }
  .chatPanel-popupText-back {
    background-color: #9d383e;
    color: white;
  }
  .chatPanel-popupText-speeking {
    background-color: transparent;
    color: white;
  }
  .chatPanel-popupText-sound {
    height: 4px;
    margin-top: 8px;
  }

  .chatItem-tag {
    position: fixed;
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
  import OChatItem from './OChat-ChatItem.vue'
  import OChatTime from './OChat-ChatTime.vue'
  import OChatBar from './OChat-ChatBar.vue'
  import OTagBubble from './OChat-TagBubble.vue'
  import { OIcon, OPopup, ONavPage } from 'iweex'
  import Base from '../../mixins/base.js'
  const dom = weex.requireModule('dom')

  export default {
    components: {
      OChatItem,
      OChatTime,
      OChatBar,
      ONavPage,
      OTagBubble,
      OPopup,
      OIcon
    },
    mixins: [ Base ],
    props: {
      chatItems: {
        type: Array,
        default: function () {
          return [
            /*
             {'time': '2012年8月8日 7:17'},
             {'text': '长按消息，唤醒消息操作菜单', 'type': 'left'},
             {'text': '点击空白处，操作菜单消失', 'type': 'left'},
             {'text': '容我三思', 'type': 'left'},
             {'chatImage': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505812387768&di=79ab901b1f0b978f736115a911bae1b0&imgtype=0&src=http%3A%2F%2Fwww.tgtcc.cn%2Fimage%2F567928.jpg ', 'type': 'left'},
             {'time': '2012年8月8日 17:17'},
             {'chatImage': 'https://sinacloud.net/vue-wechat/images/headers/header01.png', 'type': 'right'},
             {'time': '2012年8月8日 27:17'},
             {'text': '无论姿态或者能力', 'type': 'left'},
             {'text': '还有其力量', 'type': 'left'},
             {'text': '如果有完全相同的两种存在', 'type': 'left'},
             {'text': '谁成为王来支配战斗', 'type': 'left'},
             {'text': '谁又成为坐骑来增加战斗力', 'type': 'left'},
             {'text': '我是在问这两者的差别', 'type': 'left'},
             {'time': '2012年8月8日 37:17'},
             {'text': '答案只有一个答案只有一个答案只有一个答案只有一个', 'type': 'right'},
             {'text': '那就是本能', 'type': 'right'}
             */
          ]
        }
      },
      userImgUrl: {
        type: Array,
        default: function () {
          return [
            /* 'https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg',
             'https://sinacloud.net/vue-wechat/images/headers/header01.png' */
          ]
        }
      },
      title: {
        type: String,
        default: ''
      },
      bgImgUrl: {
        type: String,
        default: 'https://sinacloud.net/vue-wechat/images/bg/alarm.jpg'
      },
      leftTitle: {
        type: String,
        default: '微信'
      }
    },
    data: function () {
      return {
        platform: 'web',
        tagClick: false,
        tagDis: false,
        dispalyChat: 0,
        tagPosition: {
          X: 0,
          Y: 99
        },
        popupValue: false,
        popupState: 'speeking',
        popupText: '手指上划,取消发送'
      }
    },
    computed: {
      popupTextClass: function () {
        const result = []
        result.push(`chatPanel-popupText`)
        result.push(`chatPanel-popupText-${this.popupState}`)
        return result
      }
    },
    methods: {
      touched: function () {
        this.tagClick = false
        this.tagDis = false
      },
      onshow: function () {
        console.log('trigger  onshow')
      },
      barTouchStart: function (e) {
        this.popupValue = true
      },
      barTouchMove: function (value) {
        if (value === 'up') {
          this.popupState = 'back'
          this.popupText = '松开手指,取消发送'
        } else {
          this.popupState = 'speeking'
          this.popupText = '手指上划,取消发送'
        }
      },
      bartouchEnd: function (value) {
        this.popupValue = false
      },
      longpress: function (e, value) {
        if (this.platform === 'ios') {
          return
        }
        var self = this
        dom.getComponentRect(this.$refs['item' + value][0], function (option) {
          if (self.platform === 'web') {
            self.tagPosition.X = e.changedTouches[0].clientX - self.rpx(23)
          } else {
            self.tagPosition.X = e.changedTouches[0].screenX - 23
          }
          self.tagPosition.Y = option.size.top - 54
          /* setTimeout(function () {
           self.tagDis = true
           }, 0) */
          self.tagDis = true
        })
      },
      disappear: function () {
        this.tagPosition.X = -3000
      }
    },
    created: function () {
      this.platform = WXEnvironment.platform.toLowerCase()
      var self = this
      // 等消息队列初始化加载完成再显示
      setTimeout(function () {
        self.dispalyChat = 1
      }, 1500)
    },
    mounted: function () {
      dom.scrollToElement(this.$refs['item' + (this.chatItems.length - 1)][0], { offset: 0 })
      // console.log(this.$refs.item10)
    }
  }
</script>
