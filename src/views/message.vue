<template>
  <div>
    <ONavPage
            title="Message"
            navbarhide="hide">
        <div class="f-title_div">
            <text class="f-title">消息</text>
        </div>
        <div style="margin-top:80px; margin-bottom: 80px;">
            <div v-for="message in messages">
                <ImgTripleTextCell :title="message.title" :desc="message.desc" :time="message.time"
                                   :img_main="message.img1"
                                   :img_right="message.img2" @onClick="cellClick"></ImgTripleTextCell>
            </div>
            <div v-for="message in messages">
                <ImgTripleTextCell :title="message.title" :desc="message.desc" :time="message.time"
                                   :img_main="message.img1"
                                   :img_right="message.img2" @onClick="cellClick"></ImgTripleTextCell>
            </div>
            <div v-for="message in messages">
                <ImgTripleTextCell :title="message.title" :desc="message.desc" :time="message.time"
                                   :img_main="message.img1"
                                   :img_right="message.img2" @onClick="cellClick"></ImgTripleTextCell>
            </div>
        </div>
    </ONavPage>
  </div>
</template>

<script>
  import {ONavPage} from 'iweex'
  import ImgTripleTextCell from '../components/ImgTripleTextCell.vue'
  export default {
    components: {
      ONavPage,
      ImgTripleTextCell
    },
    data () {
      return {
        messages: [
          {
            title: '活动消息',
            desc: '考虑下将闲置的旧包包转卖了吧，新主人在等它哦',
            time: '2天前',
            img1: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/msg1.PNG'
          },
          {
            title: '通知',
            desc: '你关注的宝贝卖掉了',
            time: '3天前',
            img1: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/msg2.PNG'
          },
          {
            title: 'jichenjia960703',
            desc: '你好',
            time: '4天前',
            img1: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/msg3.PNG',
            img2: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/msg3r.PNG'
          }
        ]
      }
    },
    methods: {
      cellClick () {
        alert('您点击了消息')
      }
    }
  }
</script>

<style scoped>
    .f-title_div {
        width: 750px;
        height: 80px;
        position: fixed;
        top: 0;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        background-color: #F5F5F9;;
        border-bottom-color: lightgray;
        padding: 22px;
    }

    .f-title {
        text-align: center;
        font-size: 32px;
    }
</style>
