<template>
    <div class="Idlecolumn">
        <ONavPage backgroundColor="#00ff00">
            <div class="rcmdcol">
                <div class="rcmdrow">
                    <div v-for="item in items1">
                        <ImageTextcell :RcmdHeader="item.header" :Iconcolor="item.color" :recommenditems="item.array"></ImageTextcell>
                    </div>
                </div>
                <div class="rcmdrow">
                    <div v-for="item in items2">
                        <ImageTextcell :RcmdHeader="item.header" :Iconcolor="item.color" :recommenditems="item.array"></ImageTextcell>
                    </div>
                </div>
            </div>
            <OTabs :value="tab2" @input="tabsChange2" :tabIndex="tabIndex2" class="tabs" defaultcolor="#000" activecolor="#64D7D6">
                <OTab label="新鲜的" value="one">
                    <div v-for="item in items">
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
                    <div v-for="item in items">
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
    </div>
</template>

<style scoped>
    .rcmdrow{
        flex-direction: row;
    }
    .rcmdcol{
        flex-direction: column;
    }
    .Idlecolumn {
        flex-direction: column;
        width: 750px;
    }
    .tabs{
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>

<script>
  import { ONavPage, OTabs, OTab } from 'iweex'
  import IdleRcmdItem from './IdleRcmdItem.vue'
  import ImageTextcell from './recommend.vue'

  export default {
    components: {
      ONavPage, OTabs, OTab, IdleRcmdItem, ImageTextcell
    },
    props: {
    },
    data () {
      return {
        tab2: 'one1',
        tabIndex2: '0',
        items: [
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
            word: '5'
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
                label: '复活就死',
                discribe: 'fhsdlkfjlfldsfjldsf'
              },
              {
                src: 'http://www.rizhi123.com/ueditor/php/upload/image/20170116/1484533362694503.jpg',
                label: '复活就死',
                discribe: 'fhsdlkfjlfldsfjldsf'
              }]
          },
          {
            header: '猎奇',
            color: '#f877fe',
            array: [
              {
                src: 'http://www.rizhi123.com/ueditor/php/upload/image/20170116/1484533362694503.jpg',
                label: '复活就死',
                discribe: 'fhsdlkfjlfldsfjldsf'
              },
              {
                src: 'http://www.rizhi123.com/ueditor/php/upload/image/20170116/1484533362694503.jpg',
                label: '复活就死',
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
                label: '复活就死',
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
      tabsChange2 (index, tabs) {
        this.tab2 = tabs[index].value
        this.tabIndex2 = index
      }
    }
  }
</script>
