<template>
  <image :src="src" @click="click" :resize="resize"></image>
</template>

<script>
  export default {
    props: {
      src: {
        default: ''
      },
      resize: {
        default: 'cover'
      }
    },
    methods: {
      click () {
        this.$emit('onClick', this.src)
      }
    }
  }
</script>
