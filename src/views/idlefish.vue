<template>
    <div class="div">
        <OHeader bgcolor="#FFD700">
            <OIcon slot="left" type="icon-scan_light"></OIcon>
            <div slot="center" class="header-button" @click="search">
                <OIcon type="icon-search_light" color="#A9A9A9" class="header-button_icon"></OIcon>
                <text class="header-button_text">连衣裙</text>
            </div>
            <OIcon slot="right" type="icon-sortlight"></OIcon>
        </OHeader>
        <OSwiper :imageLists="imagelists" :switchTime="3000" @swiperClick="swiperclick"></OSwiper>
        <ImageList :images="images" class="top"></ImageList>
    </div>
</template>

<style>
    .top {
        margin-top: 30px;
    }

    .header-button_text {
        color: darkgray;
    }

    .header-button_icon {
        size: 20px;
    }

    .header-button {
        height: 70px;
        width: 550px;
        flex-direction: row;
        background-color: #FFFAFA;
        border-width: 1px;
        border-radius: 15px;
        border-color: #FFFAFA;
        align-items: center;
        justify-content: center;
    }

    .textbutton {
        background-color: white;
    }

    .div {
        width: 750px;
        background-color: #F5F5F9;
    }
</style>

<script>
  import { OButton, OHeader, OIcon, OSearchBar, OH3, OSwiper, OButtonTextBtn } from 'iweex'
  import ImageList from './imagelist.vue'

  const modal = weex.requireModule('modal')

  export default {
    components: {
      OButton, OHeader, OIcon, OSearchBar, OH3, OSwiper, OButtonTextBtn, ImageList
    },
    data () {
      return {
        items: [
          {value: 1, main: '闲鱼精选', second: '这里有好东西', hasInfo: false},
          {value: 2, main: '拍卖', second: '变形金刚5', hasInfo: false},
          {value: 3, main: '同城', second: '选闲置更靠谱', hasInfo: false},
          {value: 4, main: '我要租房', second: '三分钟租到房', hasInfo: false}
        ],
        imagelists: [
          {
            src: '//img2.ciurl.cn/flashsale/upload/xinfotek_upload/2017/08/22/1503384938804651.jpg_b_750x9999',
            text: '四合五天井、走马转阁楼'
          },
          {
            src: '//img2.ciurl.cn/flashsale/upload/xinfotek_upload/2017/08/22/1503385471268172.jpg_b_750x9999',
            text: '剑门天下险，青城天下幽，峨眉天下秀，九寨天下奇。'
          },
          {
            src: '//img2.ciurl.cn/flashsale/upload/xinfotek_upload/2017/08/22/1503385529753539.jpg_b_750x9999',
            text: '居人共住武陵源，还以物外起田园。'
          },
          {
            src: '//img2.ciurl.cn/flashsale/upload/xinfotek_upload/2017/08/22/1503385584412555.jpg_b_750x9999',
            text: '桂林山水甲天下'
          }
        ],
        images: [
          {
            text: '卖闲置',
            src: '//img2.ciurl.cn/flashsale/upload/xinfotek_upload/2017/08/22/1503384938804651.jpg_b_750x9999'
          },
          {
            text: '逛同城',
            src: '//img2.ciurl.cn/flashsale/upload/xinfotek_upload/2017/08/22/1503384938804651.jpg_b_750x9999'
          },
          {
            text: '租房子',
            src: '//img2.ciurl.cn/flashsale/upload/xinfotek_upload/2017/08/22/1503384938804651.jpg_b_750x9999'
          },
          {
            text: '找人学',
            src: '//img2.ciurl.cn/flashsale/upload/xinfotek_upload/2017/08/22/1503384938804651.jpg_b_750x9999'
          }
        ]
      }
    },
    methods: {
      swiperclick () {
      },
      search () {
        modal.toast({
          message: 'search'
        })
      }
    }
  }
</script>
