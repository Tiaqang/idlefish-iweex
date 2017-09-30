<template>
    <div>
        <ONavPage
                navbarhide="hide">
            <div class="title-row">
                <div class="arrow" @click="onclick"></div>
                <div class="textdiv"><text class="text">分类</text></div>
            </div>
            <OTabsVertical :value="tab1" @input="tabsChange1" :tabIndex="tabIndex1">
                <OTabVertical label="房屋租赁" value="one">
                   <TabContent></TabContent>
                </OTabVertical>
                <OTabVertical label="技能服务" value="two">
                  <TabContent></TabContent>
                </OTabVertical>
                <OTabVertical label="移动电话" value="three">
                  <TabContent></TabContent>
                </OTabVertical>
                <OTabVertical label="女士服装" value="four">
                  <TabContent></TabContent>
                </OTabVertical>
                <OTabVertical label="个护美妆" value="fIve">
                  <TabContent></TabContent>
                </OTabVertical>
                <OTabVertical label="箱包" value="six">
                  <TabContent></TabContent>
                </OTabVertical>
                <OTabVertical label="运动户外" value="seven">
                  <TabContent></TabContent>
                </OTabVertical>
                <OTabVertical label="家用电器" value="eight">
                  <TabContent></TabContent>
                </OTabVertical>
                <OTabVertical label="玩具乐器" value="nine">
                  <TabContent></TabContent>
                </OTabVertical>
                <OTabVertical label="珠宝首饰" value="ten">
                  <TabContent></TabContent>
                </OTabVertical>
                <OTabVertical label="女士鞋靴" value="eleven">
                  <TabContent></TabContent>
                </OTabVertical>
              <OTabVertical label="动漫/周边" value="twelve">
                <TabContent></TabContent>
              </OTabVertical>
              <OTabVertical label="汽车/用品" value="thirteen">
                <TabContent></TabContent>
              </OTabVertical>
              <OTabVertical label="游戏设备" value="fourteen">
                <TabContent></TabContent>
              </OTabVertical>
              <OTabVertical label="居家日用" value="fifteen">
                <TabContent></TabContent>
              </OTabVertical>
              <OTabVertical label="宠物/用品" value="sixteen">
                <TabContent></TabContent>
              </OTabVertical>
              <OTabVertical label="男士服装" value="seventeen">
                <TabContent></TabContent>
              </OTabVertical>
              <OTabVertical label="钟表眼镜" value="eighteen">
                <TabContent></TabContent>
              </OTabVertical>
              <OTabVertical label="办公用品" value="nineteen">
                <TabContent></TabContent>
              </OTabVertical>
              <OTabVertical label="服饰配件" value="twenty">
                <TabContent></TabContent>
              </OTabVertical><!---->
            </OTabsVertical>
        </ONavPage>
    </div>
</template>
<script>
  import { ONavPage } from 'iweex'
  import OTabVertical from '../components/O-TabVertical.vue'
  import OTabsVertical from '../components/O-TabsVertical.vue'
  import TabContent from './TabContent.vue'
  export default {
    components: {
      ONavPage,
      OTabVertical,
      OTabsVertical,
      TabContent
    },
    data () {
      return {
        tab1: 'one',
        tabIndex1: 0
      }
    },
    methods: {
      tabsChange1 (index, tabs) {
        this.tab1 = tabs[index].value
        this.tabIndex1 = index
      },
      onclick () {
        this.jumpout()
      }
    }
  }
</script>
<style scoped>
    .tabs {
        margin-top: 10px;
        /*margin-bottom: 50px;*/
    }
    .title-row{
        flex-direction: row;
        height: 100px;
    }
    .arrow{
        margin-top:38px;
        margin-left:38px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border-right-style: solid;
        border-right-width: 3px;
        border-right-color: #000000;
        border-bottom-style: solid;
        border-bottom-width: 3px;
        border-bottom-color: #000000;
        transform: rotate(135deg);
    }
    .textdiv{
        width:600px;
        justify-content: center;
    }
    .text {
        font-size: 38px;
        text-align: center;
        align-items: center;
    }
</style>
