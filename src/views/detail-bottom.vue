<template>
  <div class="div-row div-container">
    <div class="div-row fl" style="margin-left: 20px">
      <OIcon type="icon-like" size="36"></OIcon>
      <text class="text">超赞</text>
    </div>
    <div class="div-row fl">
      <OIcon type="icon-message" size="36"></OIcon>
      <text class="text">留言</text>
    </div>
    <div class="div-row fl">
      <OIcon type="icon-favor" size="36"></OIcon>
      <text class="text">收藏</text>
    </div>
    <OButton type="warn" size="small" class="button" style="margin-right: 20px">我想要</OButton>
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
  .fl{
    flex: 1;
  }
  .button{
    flex:2;
  }
</style>
<script>
  import { OButton, OIcon } from 'iweex'

  export default {
    components: {
      OButton, OIcon
    }
  }
</script>
