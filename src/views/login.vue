<template>
  <ONavPage
    title="登录"
    OHeader>
    <div class="login">
      <OLogin component="login-password" :redirect="redirect" ></OLogin>
      <div class="otherbox">
        <OH5 @onClick="goReset">忘记密码？</OH5>
        <OH5 @onClick="goRegister">现在去注册</OH5>
      </div>
    </div>
  </ONavPage>
</template>

<script>
  import { ONavPage, OLogin, OH5 } from 'iweex'

  export default {
    data () {
      return {
        redirect: 'command'
      }
    },
    components: {
      ONavPage, OLogin, OH5
    },
    methods: {
      goRegister () {
        this.jump('register')
      },
      goReset () {
        this.jump('reset')
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
