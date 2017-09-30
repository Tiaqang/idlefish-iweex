<template>
  <div class="div-row div-container">
    <div class="div-row fl" style="margin-left: 20px" @click="like">
      <OIcon :type="clicklike?'icon-likefill':'icon-like'" size="36"
             :color="clicklike? 'red': '' "></OIcon>
      <text class="text">超赞</text>
    </div>
    <div class="div-row fl" @click="leavemessage">
      <OIcon type="icon-message" size="36"></OIcon>
      <text class="text">留言</text>
    </div>
    <div class="div-row fl" @click="collect">
      <OIcon :type="clickcollect? 'icon-favorfill':'icon-favor'" size="36"
             :color="clickcollect? 'red': '' "></OIcon>
      <text class="text">收藏</text>
    </div>
    <OButton type="warn" size="small" class="button" style="margin-right: 20px" @onClick="buttonclick">我想要</OButton>
  </div>
</template>

<style scoped>
  .div-row {
    flex-direction: row;
    align-items: center;
  }

  .div-container {
    width: 750px;
    height: 100px;
    position: fixed;
    bottom: 0;
    background-color: white;
  }

  .text {
    font-size: 24px;
  }

  .fl {
    flex: 1;
  }

  .button {
    flex: 2;
  }
</style>
<script>
  import { OButton, OIcon } from 'iweex'

  export default {
    components: {
      OButton, OIcon
    },
    data () {
      return {
        clicklike: false,
        clickleave: false,
        clickcollect: false
      }
    },
    methods: {
      like () {
        this.clicklike = !this.clicklike
        this.$emit('clicklike')
      },
      leavemessage () {
        this.clickleave = !this.clickleave
        this.$emit('clickleave')
      },
      collect () {
        this.clickcollect = !this.clickcollect
        this.$emit('clickcollect')
      },
      buttonclick () {
        this.$emit('clickbutton')
      }
    }
  }
</script>
