<template>

  <div>
    <ONavPage title="详情" @onClickBack="jumpout()" pageWrapperColor="white">
      <div class="Idlerow">
        <image :src="user_avatar" class="Idleavatar"></image>
        <div class="infoname">
          <text class="username">{{username}}</text>
          <div class="imagetext-row">
            <image :src="timeicon" class="timeicon"></image>
            <text class="time">{{Itime}}</text>
          </div>
        </div>
        <text class="price">{{Iprice}}</text>
      </div>

      <div class="discribe">
        <text class="discribeText" lines="2">{{discribe}}</text>
      </div>

      <div class="photos" @click="leaveword()">
        <div v-for="(item, index) in imageSrc">
          <image :src="item" resize="contain" class="goods"></image>
        </div>
      </div>

      <div class="Idlerow" style="margin-bottom: 100px;">
        <text class="IdleAddress">{{IAddress}}</text>
        <text class="IdleLabel">{{ILabel}}</text>
        <div v-if="islike" class="likes">
          <text :class="likeable" class="like-text">{{likeOrleave}}</text>
        </div>
        <div class="likes" v-else>
          <text class="like-text">{{likes}}</text>
          <div class="like-point"></div>
          <text class="like-text">{{IleaveWord}}</text>
        </div>
      </div>
      <DetailBottom></DetailBottom>

    </ONavPage>
  </div>

</template>

<style scoped>

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

  .timeicon {
    width: 18px;
    height: 18px;
  }

  .price {
    color: red;
    font-size: 45px;
    font-weight: 300;
  }

  .time {
    margin-left: 10px;
    font-size: 24px;
    color: #C8C8CD;
  }

  .goods {
    width: 750px;
    height: 900px;
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
    flex: 1;
    font-size: 24px;
    color: #7dc5eb;
  }

  .IdleLabel {
    flex: 2;
    font-size: 24px;
    color: #7dc5eb;
  }

  .likes {
    flex-direction: row;
    align-items: center;
    flex: 1;
    text-align: right;
  }

  .like-text {
    font-size: 24px;
    color: #888888;
    text-align: right;
  }

  .like-point {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: #888888;
    margin-left: 5px;
    margin-right: 5px;
  }
</style>

<script>
  import {ONavPage} from 'iweex'
  import DetailBottom from './detail-bottom.vue'
//  import Leaveword from './leaveword.vue'

  const storage = weex.requireModule('storage')

  export default {
    components: {
      ONavPage, DetailBottom
    },
    props: {},
    data () {
      return {
        user_avatar: '',
        username: 'nsadas',
        timeicon: '',
        discribe: '',
        Iprice: '',
        Itime: '',
        IAddress: '',
        ILabel: '',
        likes: '',
        IleaveWord: '',
        likeOrleave: '',
        islike: false,
        imageSrc: [
          'http://h.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059aafc6cdb2134349b023bba07.jpg'
        ]
//        Litems:[
//          {
//            name:'清泉流响',
//            portrait: 'http://h.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059aafc6cdb2134349b023bba07.jpg'
//            time: '1个月',
//            isReply: true,
//            ReplyedName: '315zhang'
//          }
//        ]
      }
    },
    created () {
      this.islike = this.likesCount === '0' || this.leaveWord === '0'
      storage.getItem('value', event => {
        console.log(event)
        var array = event.data.split(',')
        console.log(array[0])
        this.Iprice = array[0]
        this.Itime = array[1]
        this.ILabel = array[2]
        this.IAddress = array[3]
        this.likes = array[4]
        this.username = array[5]
        this.user_avatar = array[6]
        this.discribe = array[7]
        this.IleaveWord = array[8]
      })
      storage.getItem('imagesrc', e => {
        console.log(e)
        var image = e.data.split(',')
        this.imageSrc = image
      })
    },
    computed: {
      likeable () {
        if (this.likesCount !== '0') {
          this.likeOrleave = this.likes
        }
        if (this.leaveWord !== '0') {
          this.likeOrleave = this.IleaveWord
        }
      }
    },
    methods: {
      leaveword: function () {
        this.jump('leaveword')
      }
    }
  }
</script>
