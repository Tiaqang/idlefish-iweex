<template>
  <scroller scroll-direction="horizontal" class="scroller">
    <div v-for="image in imageSrc" class="image-div">
      <image :src="image" resize="cover" class="image" @click="clickimage"></image>
    </div>
    <div class="image image-add" @click="clickadd">
      <OIcon type="icon-add_light" size="80"></OIcon>
    </div>
  </scroller>
</template>

<style scoped>
  .scroller{
    flex-direction: row;
    height:130px;
  }
  .image{
    width: 120px;
    height: 120px;
  }
  .image-div{
    width: 140px;
    height: 130px;
  }
  .image-add{
    background-color: #F3F5F9;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
</style>

<script>
  import { OIcon } from 'iweex'
  export default {
    components: {
      OIcon
    },
    props: {
      imageSrc: {
        default: []
      }
    },
    methods: {
      clickadd () {
        this.$emit('clickAdd')
      },
      clickimage () {
        this.$emit('clickImage')
      }
    }
  }
</script>
