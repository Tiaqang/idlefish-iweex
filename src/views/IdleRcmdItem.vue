<template>
    <div class="Idlecolumn">
        <div class="Idlerow">
            <image :src="user_avatar" class="Idleavatar"></image>
            <div class="infoname">
                <text class="username">{{username}}</text>
                <div class="Idlerow">
                    <image :src="timeicon" class="timeicon"></image>
                    <text class="time">{{Itime}}</text>
                </div>
            </div>
            <text class="price">{{Iprice}}</text>
        </div>
        <div class="photos">
            <image :src="user_avatar" class="goods" resize="cover"></image>
        </div>
        <div class="discribe">
            <text class="discribeText" lines="2">{{discribe}}</text>
        </div>
        <div class="Idlerow">
            <text class="IdleAddress">{{IAddress}}</text>
            <text class="IdleLabel">{{ILabel}}</text>
            <text class="likes" :class="likesable">{{likes}}</text>
            <text class="likes" :class="leaveable">{{IleaveWord}}</text>
        </div>
    </div>
</template>

<style>
    .Idlecolumn {
        flex-direction: column;
        /*margin-left: 10px;*/
        /*margin-right: 10px;*/
        margin: 13px;
        width: 750px;
    }

    .Idlerow {
        flex-direction: row;
        align-items: center;
        width: 750px;
    }

    .infoname {
        flex-direction: column;
        width: 400px;
        margin-left: 16px;
    }

    .username {
        /*font-family: "Cooper Black";*/
        font-size: 36px;
        font-weight: bold;
    }

    .Idleavatar {
        height: 92px;
        width: 92px;
        border-radius: 46px;
    }

    .timeicon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        margin-left: 5px;
    }

    .price {
        color: red;
        /*margin-right: 20px;*/
        font-size: 45px;
        font-weight: bold;
    }

    .time {
        font-size: 30px;
        /*font-family: "Fira Code Light";*/
        color: #C8C8CD;

    }

    .goods {
        width: 530px;
        height: 530px;
        border-style: solid;
    }

    .photos {
        flex-direction: row;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 5px;
        margin-right: 5px;
    }

    .discribe {
        width: 750px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-bottom-color: #C8C8CD;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }

    .discribeText {
        lines: 2;
        font-size: 36px;
        font-family: SimHei;
    }

    .IdleAddress {
        font-size: 30px;
        color: #7dc5eb;
        width: 20%;
    }

    .IdleLabel {
        width: 50%;
        font-size: 30px;
        color: #7dc5eb;
    }

    .likes {
        width: 15%;
        font-size: 30px;
        color: #888888;
    }
</style>

<script>
  export default {
    components: {},
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
      }

    },
    data () {
      return {
        Iprice: '￥' + this.price,
        Itime: this.Idletime + '前来过',
        IAddress: '来自' + this.IdleAddress,
        ILabel: '鱼塘|' + this.IdleLabel,
        likes: '点赞' + this.likesCount,
        IleaveWord: '留言' + this.leaveWord
      }
    },
    computed: {
      likesable () {
        if (this.likesCount === 0) {
          this.likes = ''
        }
      },
      leaveable () {
        if (this.leaveWord === 0) {
          this.IleaveWord = ''
        }
      }
    }
  }
</script>
