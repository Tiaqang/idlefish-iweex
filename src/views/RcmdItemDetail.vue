<template>
  <ONavPage navbarhide="hide">
    <ONavbar
      bgcolor="FAFBFD"
      rightbtn="icon-share_light"
      rightbtnmore="icon-more_light"
      title="宝贝详情"
      @onClick="jumpout()">
    </ONavbar>
    <OCell
      dataRole="none"
      Src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
      :Title="Iarea"
      showArrow
      @Click="Click">
    </OCell>
    <div class="Idlecolumn">
      <div class="Idlerow">
        <image :src="DUser_avatar" class="Idleavatar"></image>
        <div class="infoname">
          <text class="username">{{Dusername}}</text>
          <div class="imagetext-row">
            <text class="time">{{Dtime}}</text>
            <text class="IdleAddress">{{DAddress}}</text>
          </div>
        </div>
        <text class="price">{{Dprice}}</text>
      </div>
      <div class="discribe">
        <text class="discribeText">{{Ddiscribe}}</text>
      </div>
      <div class="photos">
        <image :src="imageSrc[0]" class="goods" resize="cover" v-if="isOnePhoto"></image>
        <div v-for="image in imageSrc" class="image-div" v-else>
          <image :src="image" resize="cover" class="image"></image>
        </div>
      </div>
    </div>
  </ONavPage>
</template>

<style scoped>
  .Idlecolumn {
    flex-direction: column;
    width: 750px;
    background-color: white;
    margin-bottom: 20px;
  }

  .Idlerow {
    margin-top: 20px;
    margin-left: 20px;
    padding-bottom: 20px;
    flex-direction: row;
    align-items: center;
    width: 750px;
  }

  .imagetext-row {
    flex-direction: row;
    margin-top: 10px;
    align-items: center;
  }

  .infoname {
    flex-direction: column;
    width: 400px;
    margin-left: 20px;
  }

  .username {
    font-size: 32px;
    font-weight: bold;
  }

  .Idleavatar {
    height: 92px;
    width: 92px;
    border-radius: 46px;
  }

  .price {
    color: red;
    font-size: 45px;
    font-weight: 300;
    justify-content: flex-end;
  }

  .time {
    margin-left: 10px;
    font-size: 24px;
    color: #C8C8CD;
    flex: 1;
  }

  .goods {
    width: 700px;
    height: 600px;
    border-style: solid;
  }

  .photos {
    margin-left: 20px;
    margin-bottom: 10px;
    margin-right: 5px;
  }

  .discribe {
    width: 750px;
    padding-top: 20px;
    margin-left: 20px;
    padding-bottom: 20px;
    border-bottom-color: #C8C8CD;
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }

  .discribeText {
    lines: 2;
    font-size: 28px;
    font-family: "PingFang SC";
  }

  .IdleAddress {
    flex: 2;
    font-size: 24px;
    color: #7dc5eb;
  }

  .image-div {

  }
</style>
<script>
  import {ONavPage, OIcon, ONavbar, OCell} from 'iweex'

//  const storage = weex.requireModule('storage')
  export default {
    components: {
      ONavPage, OIcon, ONavbar, OCell
    },
    data () {
      return {
        isOnePhoto: false
      }
    },
    methods: {
      Click: function (e) {
        this.$emit('Click', e)
      }
    },
    props: {
      Iarea: {
        default: '南京市玄武区'
      },
      Dprice: {
        default: 0.00
      },
      Dusername: {
        default: '苦逼程序员'
      },
      Dtime: {
        default: '未知时间'
      },
      DUser_avatar: {
        default: 'http://h.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059aafc6cdb2134349b023bba07.jpg'
      },
      Ddiscribe: {
        default: '该用户尚未添加描述'
      },
      DAddress: {
        default: '未知'
      },
      imageSrc: {
        default: []
      }
    },
    created () {
      const receive = new BroadcastChannel('Data')
      receive.onmessage = function (e) {
        console.log(e.data)
      }
    }
  }
</script>
