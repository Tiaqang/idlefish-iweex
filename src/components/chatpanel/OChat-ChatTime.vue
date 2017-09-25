<template>
  <div ref="text" class="chatTime">
    <div class="chatTime-box">
      <text class="chatTime-text">{{chatTime}}</text>
    </div>
  </div>
</template>

<style scoped>
  .chatTime {
    flex-direction: row;
    justify-content: center;
  }
  .chatTime-box {
    flex-direction: row;
    align-items: center;
    height: 40px;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: rgba(184,184,184,0.5);
  }
  .chatTime-text {
    color: white;
    font-size: 30px;
  }
</style>

<script>
  export default {
    components: {
    },
    props: {
      chatTime: {
        type: String,
        default: ''
      }
    },
    data: function () {
      return {
      }
    },
    methods: {
    },
    mounted: function () {
    }
  }
</script>
