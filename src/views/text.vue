<template>
  <OPopup v-model="value"
          @onChange="onshow"
          :dialogAnim=true
          >
    <div class="o-popup-bg">
      <text class="o-popup-text o-popup-text-center top">标题</text>
      <OInput class="o-popup-text-small" placeholder="输入数字"></OInput>
      <div class="o-popup-hr"></div>
      <text class="o-popup-text o-popup-text-center" style="color: #f90">确认</text>
    </div>
  </OPopup>
</template>

<script>
  import { OPopup, OInput } from 'iweex'
  export default {
    components: {
      OPopup, OInput
    },
    methods: {
      onshow () {
        this.isclick = !this.isclick
      }
    },
    data () {
      return {
        isclick: this.isClick
      }
    },
    props: {
      value: {
        default: false
      }
    },
    created () {
      console.log(this.isClick)
    }
  }
</script>
<style scoped>

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

  .o-popup-text-small {
    font-size: 25px;
    text-align: center;
    color: #999999;
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
