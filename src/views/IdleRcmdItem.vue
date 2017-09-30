<template>
  <div class="Idlecolumn" @click="detail">
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
    <div class="photos">
      <image :src="imageSrc[0]" class="goods" resize="cover" v-if="isOnePhoto"></image>
      <ImageList :imageSrc="imageSrc" v-else></ImageList>
    </div>
    <div class="discribe">
      <text class="discribeText" lines="2">{{discribe}}</text>
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
    width: 400px;
    height: 400px;
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
  import ImageList from '../components/Imagelist.vue'

  const storage = weex.requireModule('storage')
  export default {
    components: {ImageList},
    props: {
      price: {
        default: 0.00
      },
      username: {
        default: '苦逼程序员'
      },
      Idletime: {
        default: '未知时间'
      },
      timeicon: {
        default: 'http://pic1.16pic.com/00/13/31/16pic_1331067_b.jpg'
      },
      user_avatar: {
        default: 'http://h.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059aafc6cdb2134349b023bba07.jpg'
      },
      discribe: {
        default: '该用户尚未添加描述'
      },
      IdleAddress: {
        default: '未知'
      },
      IdleLabel: {
        default: '未加入鱼塘'
      },
      likesCount: {
        default: 0
      },
      leaveWord: {
        default: 0
      },
      imageSrc: {
        default: []
      }

    },
    data () {
      return {
        Iprice: '￥' + this.price,
        Itime: this.Idletime + '前来过',
        IAddress: '来自' + this.IdleAddress,
        ILabel: '鱼塘|' + this.IdleLabel,
        likes: '点赞' + this.likesCount,
        IleaveWord: '留言' + this.leaveWord,
        likeOrleave: '',
        islike: false,
        isOnePhoto: true
      }
    },
    created () {
      this.islike = this.likesCount === '0' || this.leaveWord === '0'
      this.isOnePhoto = this.imageSrc.length === 1
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
      detail () {
        var image = ''
        storage.setItem('value', this.Iprice + ',' + this.Itime + ',' + this.ILabel + ',' + this.IAddress + ',' + this.likes + ',' + this.username + ',' + this.user_avatar + ',' + this.discribe + ',' + this.IleaveWord + '')
        for (var i = 0; i < this.imageSrc.length; i++) {
          if (i !== this.imageSrc.length - 1) {
            image = image + this.imageSrc[i] + ','
          } else {
            image = image + this.imageSrc[i]
          }
        }
        storage.setItem('imagesrc', image)
        this.jump('detail')
      }
    }
  }
</script>
