<template>
    <ONavPage pageWrapperColor="#F3F5F9">
        <OHeader bgcolor="#FFD700" class="div-header">
            <OIcon slot="left" type="icon-scan_light"></OIcon>
            <div slot="center" class="header-button" @click="search">
                <OIcon type="icon-search_light" color="#A9A9A9" size="33" class="header-button_icon"></OIcon>
                <text class="header-button_text">连衣裙</text>
            </div>
            <OIcon slot="right" type="icon-sortlight"></OIcon>
        </OHeader>

        <OSwiper :imageLists="imagelists" :switchTime="3000" @swiperClick="swiperclick"></OSwiper>
        <ImageList :images="images" class="top"></ImageList>

        <div class="rcmdrow">
            <div v-for="item in items1">
                <ImageTextcell :RcmdHeader="item.header" :IconColor="item.color"
                               :recommenditems="item.array"></ImageTextcell>
            </div>
        </div>
        <div class="rcmdrow">
            <div v-for="item in items2">
                <ImageTextcell :RcmdHeader="item.header" :IconColor="item.color"
                               :recommenditems="item.array"></ImageTextcell>
            </div>
        </div>

        <OTabs :value="tab2" @input="tabsChange2" :tabIndex="tabIndex2" class="tabs" defaultcolor="#000"
               activecolor="#64D7D6">
            <OTab label="新鲜的" value="one">
                <div v-for="item in Iitems">
                    <IdleRcmdItem
                            :price="item.price"
                            :username="item.name"
                            :Idletime="item.time"
                            :timeicon="item.icon"
                            :user_avatar="item.avatar"
                            :discribe="item.discribe"
                            :IdleAddress="item.address"
                            :IdleLabel="item.Label"
                            :likesCount="item.count"
                            :leaveWord="item.word">
                    </IdleRcmdItem>
                </div>
            </OTab>
            <OTab label="附近的" value="two">
                <div v-for="item in Iitems">
                    <IdleRcmdItem
                            :price="item.price"
                            :username="item.name"
                            :Idletime="item.time"
                            :timeicon="item.icon"
                            :user_avatar="item.avatar"
                            :discribe="item.discribe"
                            :IdleAddress="item.address"
                            :IdleLabel="item.Label"
                            :likesCount="item.count"
                            :leaveWord="item.word">
                    </IdleRcmdItem>
                </div>
            </OTab>
        </OTabs>
    </ONavPage>

</template>

<style scoped>
    .top {
        padding-bottom: 20px;
        padding-top: 20px;
    }

    .div-header {
        width: 750px;
        position: fixed;
        top: 0px;
    }

    .header-button_text {
        color: darkgray;
        font-size: 26px;
        margin-left: 10px;
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

    .rcmdrow {
        margin-top: 10px;
        flex-direction: row;
        justify-content: space-between;
    }

    .tabs {
        margin-top: 20px;
    }
</style>

<script>
  import { ONavPage, OTabs, OTab, OButton, OHeader, OIcon, OSearchBar, OH3, OSwiper, OButtonTextBtn } from 'iweex'
  import ImageList from './imagelist.vue'
  import IdleRcmdItem from './IdleRcmdItem.vue'
  import ImageTextcell from './recommend.vue'

  const modal = weex.requireModule('modal')

  export default {
    components: {
      OButton,
      OHeader,
      OIcon,
      OSearchBar,
      OH3,
      OSwiper,
      OButtonTextBtn,
      ImageList,
      ONavPage,
      OTabs,
      OTab,
      IdleRcmdItem,
      ImageTextcell
    },
    data () {
      return {
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
        ],
        tab2: 'one1',
        tabIndex2: '0',
        Iitems: [
          {
            price: '800',
            name: 'romalazio',
            time: '2小时',
            icon: 'http://pic1.16pic.com/00/13/31/16pic_1331067_b.jpg',
            avatar: 'http://h.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059aafc6cdb2134349b023bba07.jpg',
            discribe: '我美吗？',
            address: '南充',
            Label: '摩托moto',
            count: '2',
            word: '4'
          },
          {
            price: '55000',
            name: 'xiexiaoxi888',
            time: '2小时',
            icon: 'http://pic1.16pic.com/00/13/31/16pic_1331067_b.jpg',
            avatar: 'http://h.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059aafc6cdb2134349b023bba07.jpg',
            discribe: '我美吗？',
            address: '南充',
            Label: '摩托moto',
            count: '0',
            word: '0'
          }
        ],
        items1: [
          {
            header: '捡漏',
            color: '#4bd9fd',
            array: [
              {
                src: 'http://www.rizhi123.com/ueditor/php/upload/image/20170116/1484533362694503.jpg',
                label: '七折转手',
                discribe: '超近期买入'
              },
              {
                src: 'http://www.rizhi123.com/ueditor/php/upload/image/20170116/1484533362694503.jpg',
                label: '仅此一件',
                discribe: '不看后悔系列'
              }]
          },
          {
            header: '猎奇',
            color: '#f877fe',
            array: [
              {
                src: 'http://www.rizhi123.com/ueditor/php/upload/image/20170116/1484533362694503.jpg',
                label: '闲鱼拍卖',
                discribe: 'fhsdlkfjlfldsfjldsf'
              },
              {
                src: 'http://www.rizhi123.com/ueditor/php/upload/image/20170116/1484533362694503.jpg',
                label: '明星福利',
                discribe: 'fhsdlkfjlfldsfjldsf'
              }]
          }
        ],
        items2: [
          {
            header: '发烧',
            color: '#ffab27',
            array: [
              {
//                src: 'http://www.rizhi123.com/ueditor/php/upload/image/20170116/1484533362694503.jpg',
                label: 'ACG',
                discribe: 'fhsdlkfjlfldsfjldsf'
              },
              {
                src: 'http://www.rizhi123.com/ueditor/php/upload/image/20170116/1484533362694503.jpg',
//                label: '复活就死',
                discribe: 'fhsdlkfjlfldsfjldsf'
              }]
          },
          {
            header: '过日子',
            color: '#19dab2',
            array: [
              {
                src: 'http://www.rizhi123.com/ueditor/php/upload/image/20170116/1484533362694503.jpg',
                label: '复活就死',
                discribe: 'fhsdlkfjlfldsfjldsf'
              },
              {
                src: 'http://www.rizhi123.com/ueditor/php/upload/image/20170116/1484533362694503.jpg',
//                label: '复活就死',
                discribe: 'fhsdlkfjlfldsfjldsf'
              }]
          }
        ]
      }
    },
    computed: {
      likesable () {
        if (this.likesCount === 0) {
          this.likes = ''
        }
      },
      leaveable () {
        if (this.leaveWord === 0) {
          this.IleaveWord = ''
        }
      }
    },
    methods: {
      swiperclick () {
      },
      search () {
        modal.toast({
          message: 'search'
        })
      },
      tabsChange2 (index, tabs) {
        this.tab2 = tabs[index].value
        this.tabIndex2 = index
      }
    }
  }
</script>
