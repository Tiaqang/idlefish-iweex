<template>
  <div class="div">
    <image class="image" :src="imagesrc" resize="cover"></image>
    <div class="image image-div">
    </div>
    <div class="text-div">
      <text class="text">{{text}}</text>
    </div>

  </div>
</template>

<style scoped>
  .image{
    width: 340px;
    height: 200px;
    position: absolute;
  }
  .image-div{
    background-image: linear-gradient(to bottom, #909090, black);
    opacity: 0.25;
  }
  .div{
    width: 340px;
    height: 200px;
    margin-left: 20px;
  }
  .text{
    font-size: 32px;
    color: white;
    font-weight: bold;
  }
  .text-div{
    width: 340px;
    height: 180px;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
</style>

<script>
  export default {
    props: {
      imagesrc: {
        default: ''
      },
      text: {
        default: ''
      }
    }
  }
</script>
