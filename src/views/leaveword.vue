<template>
    <div class="LWcontent">
      <image :src="headurl" class="head_portrait" resize="cover"></image>
        <div class="Ltext">
          <div class="username"><text class="usernameT">{{Lname}}</text></div>
          <div class="message">
            <text v-if="isReply" class="messageT">回复</text>
            <text v-if="isReply" class="messageT" style="color: #0088fb;">{{Reply}}</text>
            <text v-if="isReply" class="messageT">: </text>
            <text class="messageT">{{Lmessage}}</text>
          </div>
          <div class="Ltime"><text class="LtimeT">{{LWtime}}</text></div>
        </div>
    </div>
</template>

<style>
  .LWdiv{
    width: 750px;
    margin-top: 10px;
  }
  .LWhead{
    width: 750px;
    justify-content: center;
    padding-bottom: 10px;
    padding-left: 15px;
  }
  .LWheadT{
    text-align: left;
    font-weight: bold;
    font-size: 30px;
  }
  .LWcontent{
    padding-left: 20px;
    padding-right: 20px;
    border-top-width: 2px;
    border-color: #f3f5f9;
    width: 750px;
    flex-direction: row;
    padding-top: 10px;
  }
  .head_portrait{
    width: 52px;
    height: 52px;
    border-radius: 26px;
  }
  .username{
    padding-right: 8px;
    padding-left: 8px;
    padding-bottom: 8px;
  }
  .usernameT{
    font-weight: bold;
    font-size: 26px;
  }
  .message{
    padding: 8px;
    flex-direction: row;
  }
  .messageT{
    font-size: 26px;
  }
  .Ltime{
    padding: 8px;
  }
  .LtimeT{
    font-size: 22px;
    color: #cdcdcd;
    margin: 20px;
  }
  .Ltext{
    margin-left: 20px;
  }
</style>

<script>
  export default {
    props: {
      headurl: {
        default: 'http://h.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059aafc6cdb2134349b023bba07.jpg'
      },
      Ltime: {
        default: '2小时'
      },
      replyedName: {
        default: 'BOT_1'
      },
      LName: {
        default: 'BOT_2'
      },
      isReply: {
        default: true
      },
      LMessage: {
        default: '哪里？送货上门吗？'
      }
    },

    data () {
      return {
        LWtime: this.Ltime,
        Reply: '@' + this.replyedName,
        Lname: this.LName,
        Lmessage: this.LMessage
      }
    }
  }
</script>
