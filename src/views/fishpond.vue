<template>
    <ONavPage
            title="FishPond"
            navbarhide="hide">
        <OSearchBar :hint="hint"></OSearchBar>
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
                           :desc_pond="desc_pond"></ImageTextDescButt>
    </ONavPage>
</template>
<script>
  import { ONavPage, OSearchBar, OSwiper } from 'iweex'
  import ImageTextDescButt from 'components/ImageTextDescButt.vue'
  export default {
    components: {
      ONavPage,
      OSearchBar,
      OSwiper,
      ImageTextDescButt
    },
    props: {
        /* hint: {
         type: String,
         default: '请输入鱼塘关键字'
         } */
    },
    data () {
      return {
        hint: '请输入鱼塘关键字',
        imageLists: [
          { src: 'https://sukura7.github.io/vue-xianyu-demo/static/banner1.jpg' },
          { src: 'https://sukura7.github.io/vue-xianyu-demo/static/ad2.png' }
        ],
        img_amount: 1,
        img1_src: 'https://sukura7.github.io/vue-xianyu-demo/static/banner1.jpg',
        img2_src: 'https://sukura7.github.io/vue-xianyu-demo/static/ad2.png',
        img3_src: 'https://sukura7.github.io/vue-xianyu-demo/static/banner1.jpg',
        desc: '婚纱超美的。买婚纱可赠送，10月1号以后可转，感兴趣的话给我留言吧！（江浙沪包邮，偏远不包）',
        price: 12,
        praise_num: 2,
        message_num: 9,
//        img_pond: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/pond.PNG',
        img_pond: 'http://idg-zhaoyang.tunnel.zhoumiao.com/weex-Ouikit/demo/src/assets/images/uprofile.jpg',
        name_pond: '省钱新娘',
        desc_pond: '超赞的鱼塘'
      }
    },
    methods: {
      swiperClick (e) {
        alert('你点击了图片')
      }
    }
  }
</script>
<!--
<style lang="sass" scoped>
    .otherbox {
        justify-content: space-between;
        flex-direction: row;
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 10px;
    }
</style>
-->
