<template>
    <div class="Iitem">
        <image :src="Iicon" class="itemicon"></image>
        <div class="TextItem">
            <text class="ILable">{{Ilabel}}</text>
            <text class="Idiscribe">{{Idiscribe}}</text>
        </div>
    </div>

</template>

<style>
    .Iitem {
        flex-direction: row;
        margin-top: 15px;
        margin-bottom: 15px;
        margin-right: 10px;
        align-items: start;
        width: 340px;
    }

    .itemicon {
        width: 110px;
        height: 110px;
        background-color: white;
    }

    .TextItem {
        height:80px;
        margin-top: 20px;
        flex-direction: column;
        margin-left: 20px;
    }

    .ILable {
        flex: 1.5;
        font-size: 30px;
        font-weight: 700;
    }

    .Idiscribe {
        flex: 1;
        font-size: 26px;
        color: #ababab;
    }
</style>

<script>
  export default {
    components: {},
    props: {
      Iicon: {
        default: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505128015454&di=2fc841aad069f58c147bfcb1277aa262&imgtype=0&src=http%3A%2F%2Fpic32.nipic.com%2F20130817%2F9745430_101836881000_2.jpg'
      },
      Ilabel: {
        default: '这是条狗'
      },
      Idiscribe: {
        default: '为你的爱豆打call'
      }
    }
//    data () {
//      return {
//
//      }
//    },
  }
</script>
