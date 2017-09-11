<template>
    <div>
        <div class="cell">
            <div class="row">
                <!--这一行展示一张or两张or三张照片-->
                <div v-if="img_amount == 1" class="cell" style="flex-direction: row">
                    <image class="img1" :src="img1_src"></image>
                </div>
                <div class="cell" v-else-if="img_amount == 2" style="flex-direction: row"><!-- -->
                    <image class="img2" :src="img1_src"></image>
                    <image class="img2" :src="img2_src"></image>
                </div>
                <div v-else="img_amount >= 3" class="cell" style="flex-direction: row">
                    <image class="img3" :src="img1_src"></image>
                    <image class="img3" :src="img2_src"></image>
                    <image class="img3" :src="img3_src"></image>
                </div>
            </div>
            <div class="desc-row">
                <!--这行是商品描述行-->
                <text class="desc-text">{{desc}}</text>
            </div>
            <div class="row">
                <text class="text1">¥</text>
                <text class="text1">{{price}}</text>
                <!--<div class="praise-div" v-if="praise_num != 0">
                    <text class="text2">超赞{{praise_num}}</text>
                </div>
                <div class="message-div" v-if="message_num != 0">
                    <text class="text3">留言{{message_num}}</text>
                </div>-->
                <text v-if="(praise_num != 0) && (message_num != 0)" class="text-right">超赞{{praise_num}} · 留言{{message_num}}</text>
                <text v-else-if="praise_num != 0" class="text-right">超赞{{praise_num}}</text>
                <text v-else-if="message_num != 0" class="text-right">留言{{message_num}}</text>
            </div>
            <div class="bottom-row">
                <image class="img-left" :src="img_pond"></image>
                <div class="text-med">
                    <text class="name-up">{{name_pond}}</text>
                    <text class="desc-down">{{desc_pond}}</text>
                </div>
                <div class="right-div">
                    <text class="text-rightbot">{{text_rightbot}}</text>
                </div>
            </div>
        </div>
        <div class="gray-line">
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ImageTextDescButt',
    props: {
      img_amount: {
        type: Number,
        default: 1
      },
      img1_src: {
        type: String,
        default: ''
      },
      img2_src: {
        type: String,
        default: ''
      },
      img3_src: {
        type: String,
        default: ''
      },
      desc: {
        type: String,
        default: ''
      },
      price: {
        type: Number,
        default: 0
      },
      praise_num: {
        type: Number,
        default: 0
      },
      message_num: {
        type: Number,
        default: 0
      },
      img_pond: {
        type: String,
        default: ''
      },
      name_pond: {
        type: String,
        default: ''
      },
      desc_pond: {
        type: String,
        default: ''
      },
      text_rightbot: {
        type: String,
        default: '进鱼塘'
      }
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="sass" scoped>
    @import "../styles/ImageTextDescButt.scss"
</style>
