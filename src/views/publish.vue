<template>
    <ONavPage
            title="Publish"
            navbarhide="hide">
    <div class="f-whole">
    <div class="f-content_wrapper">
        <div class="f-cell_div">
            <image :src="img1" class="f-image"></image>
            <text class="f-text">{{text1}}</text>
        </div>
        <div class="f-cell_div">
            <image :src="img2" class="f-image"></image>
            <text class="f-text">{{text2}}</text>
        </div>
        <div class="f-cell_div">
            <image :src="img3" class="f-image"></image>
            <text class="f-text">{{text3}}</text>
        </div>
    </div>
    </div>
    </ONavPage>
</template>

<style scoped>
    .f-whole {
        background-color: rgba(255, 255, 255, 0.7);
        width: 750px;
        height: 100px;
    }
</style>

<script>
    import { ONavPage } from 'iweex'
    export default {
      components: {
        ONavPage
      },
      data () {
        return {}
      },
      props: {
        img1: {
          type: String,
          default: ''
        },
        img2: {
          type: String,
          default: ''
        },
        img3: {
          type: String,
          default: ''
        },
        text1: {
          type: String,
          default: 'aaaaaaaaaa'
        },
        text2: {
          type: String,
          default: ''
        },
        text3: {
          type: String,
          default: ''
        }
      }
    }
</script>
