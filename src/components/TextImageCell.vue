<template>
    <div class="wrapper">
        <text class="text-top">{{pondname}}</text>
        <text class="text-medium">人气{{num_Popularity}} · 发布{{num_Publish}}</text>
        <div class="img-div">
            <image class="img" :src="img1_src" ></image>
            <image class="img" :src="img2_src"></image>
            <image class="img" :src="img3_src"></image>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'TextImageCell',
      props: {
        pondname: {
          type: String,
          default: ''
        },
        num_Popularity: {
          type: Number,
          default: 0
        },
        num_Publish: {
          type: Number,
          default: 0
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
        }
      }
    }
</script>

<style lang="sass" scoped>
    @import "../styles/TextImageCell.scss"
</style>
