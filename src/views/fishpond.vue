<template>
  <div>
    <!--<TextImageCellList :label="label" :imgtxtlist="imgtxtlist" @onClick="moreClick"></TextImageCellList>-->
    <ONavPage
            title="FishPond"
            navbarhide="hide">
        <!--<OSearchBar :hint="hint"></OSearchBar>-->
        <OSwiper
                :imageLists="imageLists"
                :switchTime="3000"
                :showNum="4"
                @swiperClick="swiperClick">
        </OSwiper>
        <ImageTextDescButt :img_amount="img_amount"
                           :img1_src="img1_src"
                           :img2_src="img2_src"
                           :img3_src="img3_src"
                           :desc="desc"
                           :price="price"
                           :praise_num="praise_num"
                           :message_num="message_num"
                           :img_pond="img_pond"
                           :name_pond="name_pond"
                           :desc_pond="desc_pond"
        @onClick="enterClick"></ImageTextDescButt>
        <ImageTextDescButt :img_amount="img_amount"
                           :img1_src="img1_src"
                           :img2_src="img2_src"
                           :img3_src="img3_src"
                           :desc="desc"
                           :price="price"
                           :praise_num="praise_num"
                           :message_num="message_num"
                           :img_pond="img_pond"
                           :name_pond="name_pond"
                           :desc_pond="desc_pond"
                           @onClick="enterClick"></ImageTextDescButt>
        <ImageTextDescButt :img_amount="img_amount"
                           :img1_src="img1_src"
                           :img2_src="img2_src"
                           :img3_src="img3_src"
                           :desc="desc"
                           :price="price"
                           :praise_num="praise_num"
                           :message_num="message_num"
                           :img_pond="img_pond"
                           :name_pond="name_pond"
                           :desc_pond="desc_pond"
                           @onClick="enterClick"></ImageTextDescButt>
      <TextImageCellList :label="label" :imgtxtlist="imgtxtlist" @onClick="moreClick"></TextImageCellList>
        <ImageTextDescButt :img_amount="img_amount"
                           :img1_src="img1_src"
                           :img2_src="img2_src"
                           :img3_src="img3_src"
                           :desc="desc"
                           :price="price"
                           :praise_num="praise_num"
                           :message_num="message_num"
                           :img_pond="img_pond"
                           :name_pond="name_pond"
                           :desc_pond="desc_pond"
                           @onClick="enterClick"></ImageTextDescButt>
        <ImageTextDescButt :img_amount="img_amount"
                           :img1_src="img1_src"
                           :img2_src="img2_src"
                           :img3_src="img3_src"
                           :desc="desc"
                           :price="price"
                           :praise_num="praise_num"
                           :message_num="message_num"
                           :img_pond="img_pond"
                           :name_pond="name_pond"
                           :desc_pond="desc_pond"
                           @onClick="enterClick"></ImageTextDescButt>
        <TextImageCellList :label="label" :imgtxtlist="imgtxtlist" @onClick="moreClick"></TextImageCellList>
    </ONavPage>
  </div>
</template>
<script>
  import { ONavPage, OSearchBar, OSwiper } from 'iweex'
  import ImageTextDescButt from 'components/ImageTextDescButt.vue'
  import TextImageCellList from 'components/TextImageCellList.vue'
  export default {
    components: {
      ONavPage,
      OSearchBar,
      OSwiper,
      ImageTextDescButt,
      TextImageCellList
    },
    data () {
      return {
        hint: '请输入鱼塘关键字',
        imageLists: [
          { src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/lunbo1.PNG' },
          { src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/lunbo2.PNG' },
          { src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/lunbo3.PNG' }
        ],
        img_amount: 3,
        img1_src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/hunsha1.jpg',
        img2_src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/hunsha2.jpg',
        img3_src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/hunsha3.jpg',
        desc: '婚纱超美的。买婚纱可赠送，10月1号以后可转，感兴趣的话给我留言吧！（江浙沪包邮，偏远地区不包）',
        price: 12,
        praise_num: 2,
        message_num: 9,
        img_pond: 'http://idg-zhaoyang.tunnel.zhoumiao.com/weex-Ouikit/demo/src/assets/images/uprofile.jpg',
        name_pond: '省钱新娘',
        desc_pond: '超赞的鱼塘',
        label: '告别偶像or安利爱豆',
        imgtxtlist: [
          { pondname: '鹿晗周边中转站',
            num_Popularity: 8743,
            num_Publish: 5051,
            img1_src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/lh1.PNG',
            img2_src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/lh2.PNG',
            img3_src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/lh3.PNG'
          },
          { pondname: 'wannaone周边',
            num_Popularity: 2212,
            num_Publish: 1481,
            img1_src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/wan1.PNG',
            img2_src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/wan2.PNG',
            img3_src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/wan3.PNG'
          },
          { pondname: '苏打绿',
            num_Popularity: 1452,
            num_Publish: 343,
            img1_src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/sdl1.PNG',
            img2_src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/sdl2.PNG',
            img3_src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/sdl3.PNG'
          },
          { pondname: '金钟大周边交流',
            num_Popularity: 1696,
            num_Publish: 346,
            img1_src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/jzd1.PNG',
            img2_src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/jzd2.PNG',
            img3_src: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/jzd3.PNG'
          }
        ]
      }
    },
    methods: {
      swiperClick (e) {
        alert('你点击了图片')
      },
      moreClick (e) {
        alert('暂无更多哦~')
      },
      enterClick () {
        alert('暂时进不去哦~')
      }
    }
  }
</script>
