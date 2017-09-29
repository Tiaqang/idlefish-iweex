<template>
    <OMask :show="showmask" :time=1000>
      <div class="div">
        <image :src="src" resize="contain" class="image" @click="clickshow"></image>
      </div>
    </OMask>
</template>

<style scoped>
  .image{
    width:750px;
    height: 900px;
  }
  .div{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #353535;
    justify-content: center;
    align-items: center;
  }
</style>

<script>
  import { OMask } from 'iweex'

  export default {
    components: {
      OMask
    },
    data () {
      return {
        showmask: false
      }
    },
    created () {
      console.log(this.show)
      this.showmask = this.show
    },
    props: {
      src: {
        default: ''
      },
      show: {
        default: false
      }
    },
    methods: {
      clickshow () {
        this.showmask = false
        this.$emit('clickImage', this.showmask)
      }
    }
  }
</script>
