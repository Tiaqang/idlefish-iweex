<template>
    <ONavPage title="登录" navbarshowback="show" pageWrapperColor="#F3F5F9" @onClickBack="jumpout()">
        <OLoginPhone redirect="home"></OLoginPhone>
    </ONavPage>
</template>
<script>
  import { ONavPage, OLoginPhone } from 'iweex'

  export default {
    components: {
      ONavPage, OLoginPhone
    },
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>
