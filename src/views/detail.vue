<template>

  <div>
    <ONavPage title="详情" @onClickBack="jumpout()" pageWrapperColor="#F3F5F9">
      <div style="background-color: white">
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

        <div class="photos">
          <div v-for="(item, index) in imageSrc">
            <Iimage :src="item" resize="contain" class="goods" @onClick="showImage"></Iimage>
            <OImage :show="showimage" v-if="showimage" :src="maskimagesrc" @clickImage="cancelImage"></OImage>
          </div>
        </div>

        <div class="Idlerow">
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
      </div>
      <div class="leavediv">
        <div class="leaveword">
          <text class="leavetext">留言</text>
        </div>
        <div v-for="item in leavewords">
          <Leaveword :headurl="item.headurl"
                     :LName="item.LName"
                     :replyedName="item.ReplyedName"
                     :Ltime="item.Ltime"
                     :isReply="item.isReply"
                     :LMessage="item.LMessage"></Leaveword>
        </div>
      </div>
      <DetailBottom @clicklike="like" @clickleave="leavem" @clickcollect="collect"
                    @clickbutton="buttonclick"></DetailBottom>
    </ONavPage>
  </div>

</template>

<style scoped>

  .leavediv {
    width: 750px;
    height: auto;
    margin-bottom: 100px;
    margin-top: 20px;
    background-color: white;
  }

  .leaveword {
    width: 750px;
    height: 90px;
    justify-content: center;
    border-top-width: 1px;
    border-color: #C8C8CD;
  }

  .leavetext {
    font-size: 28px;
    font-weight: bold;
    margin-left: 20px;
  }

  .Idlerow {
    margin-top: 20px;
    margin-left: 20px;
    padding-bottom: 20px;
    flex-direction: row;
    align-items: center;
    width: 750px;
    background-color: white;
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
    width: 710px;
    height: 800px;
    border-style: solid;
    background-color: white;
  }

  .photos {
    margin-left: 20px;
    margin-bottom: 10px;
    margin-right: 5px;
    border-bottom-color: #C8C8CD;
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }

  .discribe {
    width: 750px;
    padding-top: 20px;
    margin-left: 20px;
    padding-bottom: 20px;
    border-top-color: #C8C8CD;
    border-top-style: solid;
    border-top-width: 1px;
    background-color: white;
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
  import { ONavPage } from 'iweex'
  import DetailBottom from './detail-bottom.vue'
  import Leaveword from './leaveword.vue'
  import OImage from '../components/OriginalImage.vue'
  import Iimage from '../components/o-image.vue'

  const storage = weex.requireModule('storage')
  const modal = weex.requireModule('modal')

  export default {
    components: {
      ONavPage, DetailBottom, Leaveword, OImage, Iimage
    },
    props: {},
    data () {
      return {
        user_avatar: '',
        username: '',
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
        imageSrc: [],
        leavewords: [
          {
            headurl: 'http://h.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059aafc6cdb2134349b023bba07.jpg',
            LName: '此生挚爱',
            ReplyedName: 'romalzio',
            Ltime: '10分钟前',
            isReply: false,
            LMessage: '我想问下这个东西好用的地方'
          },
          {
            headurl: this.user_avatar,
            LName: 'romalzio',
            ReplyedName: '此生挚爱',
            Ltime: '8分钟前',
            isReply: true,
            LMessage: 'Mikasa，打起来手感贼棒！'
          },
          {
            headurl: 'http://h.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059aafc6cdb2134349b023bba07.jpg',
            LName: '此生挚爱',
            ReplyedName: 'romalzio',
            Ltime: '4分钟前',
            isReply: true,
            LMessage: '价格能再便宜点吗？'
          }
        ],
        showimage: false,
        maskimagesrc: ''
      }
    },
    created () {
      this.islike = this.likesCount === '0' || this.leaveWord === '0'
      storage.getItem('value', event => {
        var array = event.data.split(',')
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
      like () {
        modal.toast({
          message: '点赞了哦',
          duration: 0.2
        })
      },
      leavem () {
        modal.toast({
          message: '还不能留言哦',
          duretion: 0.2
        })
      },
      collect () {
        modal.toast({
          message: '谢谢亲的收藏',
          duration: 0.2
        })
      },
      buttonclick () {
        modal.toast({
          message: '想要什么啊？？',
          duration: 0.2
        })
      },
      showImage (v) {
        this.maskimagesrc = v
        console.log(v)
        this.showimage = true
      },
      cancelImage (v) {
        this.showimage = v
      }
    }
  }
</script>
