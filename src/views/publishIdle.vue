<template>
  <div>
    <ONavPage navbarhide="hide" pageWrapperColor="#F3F5F9">
      <OHeader>
        <OIcon slot="left" type="icon-close_light" @click="jumpout()"></OIcon>
        <text slot="center">发布</text>
      </OHeader>
      <div class="whole-div">
        <div class="input">
          <OInput type="text" placeholder="标题 品类品牌型号都是买家喜欢搜索的" autofocus v-model="inputheader"></OInput>
        </div>
        <OInputarea type="text" :autofocus=true :rows=5 :showTip=true placeholder="描述一下宝贝的细节或故事" v-model="textarea" class="inputarea"></OInputarea>

        <Imagelist :imageSrc="imageSrc" class="imagelist" @clickAdd="clickadd" @clickImage="clickimage"></Imagelist>
        <div class="location-div" @click="choseaddress">
          <OIcon type="icon-locationfill" size="30"></OIcon>
          <text style="font-size: 24px;margin-left: 20px;">{{location}}</text>
        </div>
      </div>
      <div style="margin-top: 20px">
        <OTabs :value="tabs" @input="tabchange">
          <OTab label="一口价" value="first">
            <OCell Title="价格" showArrow @Click="chosePrice"></OCell>
            <OCell Title="分类" showArrow @Click="choseSort"></OCell>
          </OTab>
          <OTab label="拍卖" value="second">
            <OCell Title="起拍价" :value="pricestart" showArrow></OCell>
            <OCell Title="保证金" :value="pricepromise" showArrow></OCell>
            <OCell Title="加价幅度" :value="priceincrease" showArrow></OCell>
            <OCell Title="开拍时间" :value="starttime" showArrow></OCell>
            <OCell Title="结束时间" :value="endtime" showArrow></OCell>
            <OCell Title="分类" :value="sorts" showArrow></OCell>
          </OTab>
        </OTabs>
      </div>
      <div class="button-div">
      <OButton type="primary" size="large" class="button">确定发布</OButton>
      </div>
    </ONavPage>
  </div>
</template>

<style scoped>
  .whole-div{
    width: 750px;
    background-color: white;
  }
  .input{
    height: 88px;
    align-items: center;
    margin-left: 20px;
  }
  .inputarea{
    margin-left: 13px;
    margin-right: 10px;
  }
  .button-div{
    width: 750px;
    padding: 20px;
    position: fixed;
    bottom: 1px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .button{
    background-color: #fa4e4e;
    font-size: 26px;
  }
  .imagelist{
    margin-left: 20px;
    margin-top: 10px;
  }
  .location-div{
    width: 750px;
    flex-direction: row;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
</style>

<script>
  import { ONavPage, OInput, OInputarea, OButton, OCell, OTabs, OTab, OHeader, OIcon, OCard } from 'iweex'
  import Imagelist from '../components/PublishImageList.vue'
  const modal = weex.requireModule('modal')

  export default {
    components: {
      ONavPage, OInput, OInputarea, OButton, OCell, OTabs, OTab, OHeader, OIcon, OCard, Imagelist
    },
    data () {
      return {
        textarea: '',
        inputheader: '',
        tabs: 'first',
        pricestart: '￥' + '0.00',
        pricepromise: '￥' + '0.00',
        priceincrease: '￥' + '0.00',
        starttime: '请选择开拍时间',
        endtime: '请选择结束时间',
        sorts: '请选择分类',
        imageSrc: [
          'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/hunsha2.jpg',
          'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/hunsha3.jpg'],
        location: '江苏 南京 玄武区'
      }
    },
    methods: {
      tabchange (index, tab) {
        this.tabs = tab[index].value
      },
      chosePrice () {},
      choseSort () {},
      clickadd () {
        modal.toast({
          message: '添加',
          duration: 0.2
        })
      },
      clickimage () {
        modal.toast({
          message: '图片信息',
          duration: 0.2
        })
      },
      choseaddress () {
        modal.toast({
          message: '选择地址',
          duration: 0.2
        })
      }
    }
  }
</script>
