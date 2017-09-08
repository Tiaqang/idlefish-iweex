<template>
<ONavPage
    title="注册"
    OHeader>
    <div class="login">
      <ORegister lable="register" redirect="list"/>
      <div class="otherbox">
        <OH5 @onClick="goRegister">现在去登录</OH5>
      </div>
    </div>
  </ONavPage>

</template>

<script>
  import { ONavPage, ORegister, OH5 } from 'iweex'

  export default {
    components: {
      ONavPage, ORegister, OH5
    },
    methods: {
      goRegister () {
        this.jump('login')
      }
    }
  }
</script>
<style lang="sass" scoped>
.otherbox {
  justify-content: space-between;
  flex-direction: row;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 10px;
}
</style>
