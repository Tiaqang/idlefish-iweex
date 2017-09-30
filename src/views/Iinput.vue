<template>
  <div>
    <div v-for="(item,index) in place">
      <input class="o-popup-text-small" :placeholder="item + '￥0.00'" v-model="data[index]" @input="click" type="number"></input>
    </div>
  </div>
</template>

<script>

  export default {
    methods: {
      click () {
        this.$emit('send', this.data)
      }
    },
    data () {
      return {
        data: []
      }
    },
    props: {
      place: {
        default: []
      }
    }
  }
</script>
<style scoped>

  .o-popup-text-small {
    width: inherit;
    height: 80px;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    border-width: 1px;
    border-radius: 10px;
  }
</style>
