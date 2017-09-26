<template>
    <div>
        <ONavPage
                navbarhide="hide">
            <div class="title-row">
                <div class="arrow" @click="jumpout()"></div>
                <div class="textdiv"><text class="text">分类</text></div>
            </div>
            <OTabs :value="tab4" @input="tabsChange4" :tabIndex="tabIndex4" class="tabs">
                <OTab label="房屋租赁" value="one">
                   <TabContent></TabContent>
                    <!--<text>已发货...</text>-->
                </OTab>
                <OTab label="技能服务" value="two">
                  <TabContent></TabContent>
                </OTab>
                <OTab label="移动电话" value="three">
                  <TabContent></TabContent>
                </OTab>
                <OTab label="女士服装" value="four">
                    <text>未发货2...</text>
                </OTab>
                <OTab label="个护美妆" value="fIve">
                    <text>未发货2...</text>
                </OTab>
                <OTab label="箱包" value="six">
                    <text>未发货2...</text>
                </OTab>
                <OTab label="运动户外" value="seven">
                    <text>未发货2...</text>
                </OTab>
                <OTab label="家用电器" value="eight">
                    <text>未发货2...</text>
                </OTab>
                <OTab label="玩具乐器" value="nine">
                    <text>未发货2...</text>
                </OTab>
                <OTab label="珠宝首饰" value="ten">
                    <text>未发货2...</text>
                </OTab>
                <OTab label="技能服务" value="eleven">
                    <text>未发货2...</text>
                </OTab>
            </OTabs>
        </ONavPage>
    </div>
</template>
<script>
  import { ONavPage } from 'iweex'
  //, OTab, OTabs
  import OTab from '../components/O-Tab.vue'
  import OTabs from '../components/O-Tabs.vue'
  import TabContent from './TabContent.vue'
  export default {
    components: {
      ONavPage,
      OTab,
      OTabs,
      TabContent
    },
    data () {
      return {
        items: [
          {'id': '第一栏', 'value': 1},
          {'id': '第二栏', 'value': 2},
          {'id': '第三栏', 'value': 3},
          {'id': '第四栏', 'value': 4}
        ],
        tab1: 'one',
        tab2: 'one',
        tab3: 'one',
        tab4: 'one',
        tabIndex1: 0,
        tabIndex2: 0,
        tabIndex3: 0,
        tabIndex4: 0
      }
    },
    methods: {
      tabsChange1 (index, tabs) {
        this.tab1 = tabs[index].value
        this.tabIndex1 = index
      },
      tabsChange2 (index, tabs) {
        this.tab2 = tabs[index].value
        this.tabIndex2 = index
      },
      tabsChange3 (index, tabs) {
        this.tab3 = tabs[index].value
        this.tabIndex3 = index
      },
      tabsChange4 (index, tabs) {
        this.tab4 = tabs[index].value
        this.tabIndex4 = index
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
