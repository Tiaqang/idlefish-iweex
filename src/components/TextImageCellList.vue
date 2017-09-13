<template>
    <div class="wrapper">
        <div class="text">
            <text class="text-left">{{label}}</text>
            <text class="text-right" @click="onClick">{{note}}</text>
        </div>
        <scroller scroll-direction="horizontal">
            <div v-for="imgtxt in imgtxtlist">
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
