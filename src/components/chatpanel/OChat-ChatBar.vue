<template>
  <div :class="barClass">
    <div :class="barIconClass"  @click="iconClick">
      <OIcon color="#7D7E83" :type="iconType" size="72" ></OIcon>
    </div>
    <div :class="inputBoxClass"
         :style="{'background-color': (touchState) ? '#C6C7CA' : '#f7f7fa',
                  'justify-content': (this.iconType === 'icon-soundlight') ? 'center' : 'flex-start'}"
         v-on:touchstart="touchStart"
         v-on:touchmove="touchmove"
         v-on:touchend="touchEnd">
      <text v-if="this.iconType === 'icon-soundlight'" :class="spanClass" >{{barSpan}}</text>
      <textarea v-else=""
                ref="textarea"
                :class="inputClass"
                :autofocus="false"
                :rows="1"
                @input="input"
                :value="chatText"></textarea>
    </div>
    <OIcon :class="barIconClass" color="#7D7E83" type="icon-emojilight" size="72"></OIcon>
    <OIcon :class="barIconClass" color="#7D7E83" type="icon-roundaddlight" size="72"></OIcon>
  </div>
</template>

<style scoped>
  .chatBar-bar-ios {
    width: 750px;
    height: 118px;
    background-color: #f7f7fa;
    flex-direction: row;
    align-items: center;
  }
  .chatBar-bar-web {
    width: 750px;
    height: 118px;
    background-color: #f7f7fa;
    flex-direction: row;
    align-items: center;
  }
  .chatBar-bar-android {
    width: 750px;
    height: 100px;
    background-color: #f7f7fa;
    flex-direction: row;
    align-items: center;
  }
  .chatBar-barIcon-ios {
    margin-left: 5px;
    margin-right: 10px;
  }
  .chatBar-barIcon-web {
    margin-left: 5px;
    margin-right: 10px;
  }
  .chatBar-barIcon-android {
    margin-left: 15px;
    margin-right: 10px;
  }
  .chatBar-inputBox-ios {
    flex-direction: row;
    width: 460px;
    height: 85px;
    margin-left: 8px;
    margin-right: 14px;
    border-width: 1px;
    border-color: rgb(184, 184, 184);
    border-radius: 10px;
    align-items: center;
  }
  .chatBar-inputBox-web {
    flex-direction: row;
    width: 460px;
    height: 85px;
    margin-left: 8px;
    margin-right: 14px;
    border-width: 1px;
    border-color: rgb(184, 184, 184);
    border-radius: 10px;
    align-items: center;
  }
  .chatBar-inputBox-android {
    flex-direction: row;
    width: 420px;
    height: 70px;
    margin-left: 23px;
    margin-right: 14px;
    border-width: 1px;
    border-color: rgb(184, 184, 184);
    border-radius: 10px;
    align-items: center;
  }
  .chatBar-span-ios {
    font-size: 33px;
    color: #676767;
    font-weight: 700;
  }
  .chatBar-span-web {
    font-size: 33px;
    color: #676767;
    font-weight: 100;
  }
  .chatBar-span-android {
    font-size: 33px;
    color: #676767;
    font-weight: 700;
  }
  .chatBar-input-ios {
    background-color: transparent;
    width: 460px;
    font-size: 30px;
  }
  .chatBar-input-web {
    background-color: transparent;
    width: 460px;
    font-size: 30px;
  }
  .chatBar-input-android {
    background-color: transparent;
    width: 420px;
    font-size: 30px;
  }
</style>

<script>
  import { OIcon, OInput } from 'iweex'
  export default {
    components: {
      OIcon,
      OInput
    },
    props: {
    },
    data () {
      return {
        chatText: '',
        iconType: 'icon-soundlight',
        touchState: false,
        touchEndY: 0,
        touchStartY: 0,
        touched: false,
        barSpan: '按住 说话'
      }
    },
    computed: {
      barClass: function () {
        const result = []
        result.push(`chatBar-bar-${WXEnvironment.platform.toLowerCase()}`)
        return result
      },
      barIconClass: function () {
        const result = []
        result.push(`chatBar-barIcon-${WXEnvironment.platform.toLowerCase()}`)
        return result
      },
      inputBoxClass: function () {
        const result = []
        result.push(`chatBar-inputBox-${WXEnvironment.platform.toLowerCase()}`)
        return result
      },
      spanClass: function () {
        const result = []
        result.push(`chatBar-span-${WXEnvironment.platform.toLowerCase()}`)
        return result
      },
      inputClass: function () {
        const result = []
        result.push(`chatBar-input-${WXEnvironment.platform.toLowerCase()}`)
        return result
      }
    },
    methods: {
      iconClick: function () {
        if (this.touched) {
          return
        }
        this.iconType = (this.iconType === 'icon-soundlight') ? 'icon-keyboardlight' : 'icon-soundlight'
      },
      touchStart: function (e) {
        if (this.iconType === 'icon-keyboardlight') {
          return
        }
        this.touched = true
        this.barSpan = '松开 结束'
        this.touchState = !this.touchState
        this.touchStartY = e.changedTouches[0].screenY
        this.$emit('barTouchStart', e)
      },
      touchmove: function (e) {
        if (e.changedTouches[0].screenY - this.touchStartY < -50) {
          this.$emit('barTouchMove', 'up')
        } else {
          this.$emit('barTouchMove', 'down')
        }
      },
      touchEnd: function (e) {
        if (this.iconType === 'icon-keyboardlight') {
          return
        }
        this.touched = false
        this.barSpan = '按住 说话'
        this.touchState = !this.touchState
        this.touchEndY = e.changedTouches[0].screenY
        if (this.touchStartY - this.touchEndY > 0) {
          this.$emit('barTouchEnd', 'up')
        } else {
          this.$emit('barTouchEnd', '')
        }
      },
      input: function (e) {
        console.log(this.$refs.textarea)
      }
    }
  }
</script>
