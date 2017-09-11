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
    </ONavPage>
</template>
<script>
  import { ONavPage, OSearchBar, OSwiper } from 'iweex'
  export default {
    components: {
      ONavPage,
      OSearchBar,
      OSwiper
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
          { src: '//img2.ciurl.cn/flashsale/upload/xinfotek_upload/2017/08/22/1503384938804651.jpg_b_750x9999', text: '四合五天井、走马转阁楼' },
          { src: '//img2.ciurl.cn/flashsale/upload/xinfotek_upload/2017/08/22/1503385471268172.jpg_b_750x9999', text: '剑门天下险，青城天下幽，峨眉天下秀，九寨天下奇。' },
          { src: '//img2.ciurl.cn/flashsale/upload/xinfotek_upload/2017/08/22/1503385529753539.jpg_b_750x9999', text: '居人共住武陵源，还以物外起田园。' },
          { src: '//img2.ciurl.cn/flashsale/upload/xinfotek_upload/2017/08/22/1503385584412555.jpg_b_750x9999', text: '桂林山水甲天下' }
        ]
      }
    },
    methods: {
      swiperClick (e) {
        alert('你点击了图片')
      }
    }
  }
</script>
<style lang="sass" scoped>
    .otherbox {
        justify-content: space-between;
        flex-direction: row;
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 10px;
    }
</style>
