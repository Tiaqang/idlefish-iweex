<template>
  <div class="wrapper">
    <div class="text">
      <text class="text-left">{{label}}</text>
      <text class="text-right" @click="onClick">{{note}}</text>
    </div>
    <scroller scroll-direction="horizontal" class="scroller" :style="scrollerHeight">
      <div v-for="(imgtxt,index) in imgtxtlist" :ref="'tab'+index">
        <!---->
        <TextImageCell :pondname="imgtxt.pondname"
                       :num_Popularity="imgtxt.num_Popularity"
                       :num_Publish="imgtxt.num_Publish"
                       :img1_src="imgtxt.img1_src"
                       :img2_src="imgtxt.img2_src"
                       :img3_src="imgtxt.img3_src">
        </TextImageCell>
      </div>
    </scroller>
  </div>
</template>

<script>
  import TextImageCell from '../components/TextImageCell.vue'
  import event from '../const/event.js'
  const modal = weex.requireModule('modal')
  export default {
    name: 'TextImageCellList',
    components: {
      TextImageCell
    },
    props: {
      label: {
        type: String,
        default: ''
      },
      note: {
        type: String,
        default: '看更多'
      },
      imgtxtlist: {
        type: Array,
        default: {}
      }
    },
    data () {
      return {
        scrollerHeight: '0px'
      }
    },
//    created () {
//      console.log('-------')
//      this.$nextTick(() => {
//        var height = this.$refs.tab0['0'].$el.clientHeight
//        this.scrollerHeight = height + 'px'
//        console.log(this.scrollerHeight)
//        modal.toast({message: this.scrollerHeight})
//      })
//    },
    mounted () {
      console.log('-------')
      var height = this.$refs.tab0['0'].$el.clientHeight
      this.scrollerHeight = height + 'px'
      console.log(this.scrollerHeight)
      modal.toast({message: this.scrollerHeight})
    },
    methods: {
      onClick () {
        this.$emit(event.CLICK)
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../styles/TextImageCellList.scss"
</style>
