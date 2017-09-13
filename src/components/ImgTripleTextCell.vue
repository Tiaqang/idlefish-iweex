<template>
    <div class="f-cell" @click="onClick">
        <image class="f-image_main" :src="img_main"></image>
        <div class="f-textdiv" :style="[{'width':this.textwidth}]">
            <text class="f-text_top">{{title1}}</text>
            <text class="f-text_medium">{{desc1}}</text>
            <text class="f-text_bottom">{{time1}}</text>
        </div>
        <div v-if="this.haspic" class="f-imgdiv_right">
            <image class="f-image_right" :src="img_right"></image>
        </div>
    </div>
</template>

<script>
  import event from '../const/event.js'
  export default {
    name: 'ImgTripleTextCell',
    data () {
      return {
        haspic: false,
        textwidth: '600px',
        desc1: this.desc,
        title1: this.title,
        time1: this.time
      }
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      desc: {
        type: String,
        default: ''
      },
      time: {
        type: String,
        default: ''
      },
      img_main: {
        type: String,
        default: ''
      },
      img_right: {
        type: String,
        default: ''
      }
    },
    created () {
      if (this.img_right !== '') {
        this.haspic = true
        this.textwidth = '520px'
        if (this.desc.length > 19) {
          this.desc1 = this.desc.substr(0, 15) + '...'
        }
      } else {
        if (this.desc.length > 19) {
          this.desc1 = this.desc.substr(0, 17) + '...'
        }
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
    @import "../styles/ImgTripleTextCell"
</style>
