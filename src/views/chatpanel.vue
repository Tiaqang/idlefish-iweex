<template>
  <div>
    <OChatItem :userImgUrl="userImgUrl"
               :title="title"
               leftTitle="哈哈"
               :chatItems="chatItems">
    </OChatItem>
  </div>
</template>

<style scoped>

</style>

<script>
  import OChatItem from '../components/chatpanel/OChat-ChatPanel.vue'
  export default {
    components: {
      OChatItem
    },
    props: {
    },
    data () {
      return {
        chatItems: [
          {'time': '2012年8月8日 7:17'},
          {'text': '长按消息，唤醒消息操作菜单', 'imageID': 1},
          {'text': '点击空白处，操作菜单消失', 'imageID': 1},
          {'text': '容我三思', 'imageID': 1},
          {'chatImage': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505812387768&di=79ab901b1f0b978f736115a911bae1b0&imgtype=0&src=http%3A%2F%2Fwww.tgtcc.cn%2Fimage%2F567928.jpg ', 'imageID': 1},
          {'time': '2012年8月8日 17:17'},
          {'chatImage': 'https://sinacloud.net/vue-wechat/images/headers/header01.png', 'imageID': 0},
          {'time': '2012年8月8日 27:17'},
          {'text': '无论姿态或者能力', 'imageID': 1},
          {'text': '还有其力量', 'imageID': 1},
          {'text': '如果有完全相同的两种存在', 'imageID': 1},
          {'text': '谁成为王来支配战斗', 'imageID': 1},
          {'text': '谁又成为坐骑来增加战斗力', 'imageID': 1},
          {'text': '我是在问这两者的差别', 'imageID': 1},
          {'time': '2012年8月8日 37:17'},
          {'text': '答案只有一个答案只有一个答案只有一个答案只有一个', 'imageID': 0},
          {'text': '那就是本能', 'imageID': 1}
        ],
        userImgUrl: [
          'https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg',
          'https://sinacloud.net/vue-wechat/images/headers/header01.png'
        ],
        title: '阿荡'
      }
    },
    computed: {
    },
    methods: {
    },
    created: function () {
    }
  }
</script>
