<template>
  <div>
    <ONavPage navbarhide="hide" pageWrapperColor="#F3F5F9">
      <OHeader>
        <OIcon slot="left" type="icon-close_light" @click="jumpout()"></OIcon>
        <text slot="center">发布</text>
      </OHeader>
      <div class="whole-div">
        <div class="input">
          <OInput type="text" placeholder="标题 品类品牌型号都是买家喜欢搜索的" v-model="inputheader"></OInput>
        </div>
        <OInputarea type="text" :rows=5 :showTip=true placeholder="描述一下宝贝的细节或故事" v-model="textarea"
                    class="inputarea"></OInputarea>

        <Imagelist :imageSrc="imageSrc" class="imagelist" @clickAdd="clickadd" @clickImage="clickimage"></Imagelist>
        <div class="location-div" @click="choseaddress">
          <OIcon type="icon-locationfill" size="30"></OIcon>
          <text style="font-size: 24px;margin-left: 20px;">{{location}}</text>
        </div>
      </div>
      <div style="margin-top: 20px;margin-bottom: 130px;">
        <OTabs :value="tabs" @input="tabchange" v-if="!isclick" :tabIndex="tabindex">
          <OTab label="一口价" value="first">
            <OCell :Title="price" showArrow @onClick="chosePrice"></OCell>
            <OCell Title="分类" showArrow @onClick="choseSort"></OCell>
          </OTab>
          <OTab label="拍卖" value="second">
            <OCell Title="起拍价" :value="pricestart" showArrow @onClick="chosestart"></OCell>
            <OCell Title="保证金" :value="pricepromise" showArrow @onClick="chosepromise"></OCell>
            <OCell Title="加价幅度" :value="priceincrease" showArrow @onClick="choseincrease"></OCell>
            <ODatePick title="开拍时间" v-model="starttime" placeholder="请输入开拍时间"
                       style="background-color: white;"></ODatePick>
            <ODatePick title="结束时间" v-model="endtime" placeholder="请输入结束时间"
                       style="background-color: white;"></ODatePick>
            <OCell Title="分类" :value="sorts" showArrow @onClick="choseSort"></OCell>
          </OTab>
        </OTabs>
      </div>
      <OPopup v-model="isclick"
              @onChange="onshow"
              :dialogAnim=true style="position:fixed;">
        <div class="o-popup-bg">
          <Iinput :place="place" @send="receive" style="margin-top: 20px;"></Iinput>
          <div class="o-popup-hr"></div>
          <text class="o-popup-text o-popup-text-center" style="color: #f90" @click="requireda">确认</text>
        </div>
      </OPopup>

      <div class="button-div">
        <OButton type="primary" size="large" @onClick="publish">确定发布</OButton>
      </div>
    </ONavPage>
  </div>
</template>

<style scoped>
  .whole-div {
    width: 750px;
    background-color: white;
  }

  .input {
    height: 88px;
    align-items: center;
    margin-left: 20px;
  }

  .inputarea {
    margin-left: 13px;
    margin-right: 10px;
  }

  .button-div {
    width: 750px;
    padding: 20px;
    position: fixed;
    bottom: 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  .imagelist {
    margin-left: 20px;
    margin-top: 10px;
  }

  .location-div {
    width: 750px;
    flex-direction: row;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
  }

  .o-popup-bg {
    width: 500px;
    background-color: #FFFFFF;
    border-radius: 10px;
  }

  .o-popup-text {
    font-size: 35px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .o-popup-text-center {
    text-align: center;
  }

  .o-popup-hr {
    border-top-color: #eeeeee;
    border-top-style: solid;
    border-top-width: 2px;
    width: 500px;
    height: 1px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>

<script>
  import {
    ONavPage,
    OInput,
    OInputarea,
    OButton,
    OCell,
    OTabs,
    OTab,
    OHeader,
    OIcon,
    OCard,
    OPopup,
    ODatePick
  } from 'iweex'
  import Imagelist from '../components/PublishImageList.vue'
  import Iinput from './Iinput.vue'

  const modal = weex.requireModule('modal')

  export default {
    components: {
      ONavPage,
      OInput,
      OInputarea,
      OButton,
      OCell,
      OTabs,
      OTab,
      OHeader,
      OIcon,
      OCard,
      Imagelist,
      OPopup,
      Iinput,
      ODatePick
    },
    data () {
      return {
        textarea: '',
        inputheader: '',
        tabs: 'first',
        tabindex: 0,
        pricestart: '￥' + '0.00',
        pricepromise: '￥' + '0.00',
        priceincrease: '￥' + '0.00',
        starttime: '请选择开拍时间',
        endtime: '请选择结束时间',
        sorts: '请选择分类',
        imageSrc: [
          'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/hunsha2.jpg',
          'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/hunsha3.jpg'],
        location: '江苏 南京 玄武区',
        isclick: false,
        place: [],
        receivedata: [],
        price: '价格',
        choseprice: 1
      }
    },
    methods: {
      tabchange (index, tab) {
        this.tabs = tab[index].value
      },
      chosePrice () {
        this.choseprice = 1
        this.place = []
        this.receivedata = []
        this.place.push('售价')
        this.place.push('原价')
        this.place.push('运费')
        this.isclick = true
      },
      choseSort () {
        modal.toast({
          message: '选择分类',
          duration: 0.2
        })
      },
      chosestart () {
        this.choseprice = 2
        this.place = []
        this.receivedata = []
        this.place.push('起拍价')
        this.isclick = true
      },
      chosepromise () {
        this.choseprice = 3
        this.place = []
        this.receivedata = []
        this.place.push('保证金')
        this.isclick = true
      },
      choseincrease () {
        this.choseprice = 4
        this.place = []
        this.receivedata = []
        this.place.push('加价幅度')
        this.isclick = true
      },
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
      },
      onshow () {},
      receive (v) {
        this.receivedata = v
      },
      requireda () {
        var showStr = ''
        for (var i = 0; i < this.receivedata.length; i++) {
          if (this.receivedata[i] === '' || this.receivedata[i] === undefined) {
            this.receivedata[i] = '0.00'
          }
        }
        for (var j = 0; j < this.receivedata.length; j++) {
          if (j < this.receivedata.length - 1) {
            showStr = showStr + this.place[j] + '￥' + this.receivedata[j] + '| '
          } else {
            showStr = showStr + this.place[j] + '￥' + this.receivedata[j]
          }
        }
        if (this.choseprice === 1) {
          if (this.receivedata.length !== 0) {
            this.price = showStr
            this.pricestart = '￥' + this.receivedata[0]
          } else {
            this.price = '价格'
            this.pricestart = '￥0.00'
          }
          this.tabindex = 0
        }
        if (this.choseprice === 2) {
          if (this.receivedata.length !== 0) {
            this.pricestart = '￥' + this.receivedata[0]
          } else {
            this.pricestart = '￥0.00'
          }
          this.tabindex = 1
        }
        if (this.choseprice === 3) {
          if (this.receivedata.length !== 0) {
            this.pricepromise = '￥' + this.receivedata[0]
          } else {
            this.pricepromise = '￥0.00'
          }
          this.tabindex = 1
        }
        if (this.choseprice === 4) {
          if (this.receivedata.length !== 0) {
            this.priceincrease = '￥' + this.receivedata[0]
          } else {
            this.priceincrease = '￥0.00'
          }
          this.tabindex = 1
        }
        this.isclick = false
      },
      publish () {
        modal.toast({
          message: '发布成功',
          duration: 0.2
        })
        if (weex.config.env.platform === 'Web') {
          this.jumpout('/')
        } else {
          this.jump('index')
        }
      }
    }
  }
</script>
