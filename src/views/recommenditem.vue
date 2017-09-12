<template>
    <div class="Iitem">
        <div class="ItemRow">
            <image :src="Iicon" class="itemicon"></image>
            <div class="TextItem">
                <text class="ILable">{{Ilabel}}</text>
                <text class="Idiscribe">{{Idiscribe}}</text>
            </div>
        </div>
    </div>

</template>

<style>
    .ItemRow {
        flex-direction: row;
    }

    .Iitem {
        margin-top: 15px;
        margin-bottom: 15px;
        margin-left: 10px;
        margin-right: 10px;
        align-items: start;
    }

    .itemicon {
        width: 125px;
        height: 125px;
        background-color: white;
    }

    .TextItem {
        flex-direction: column;
        margin-left: 20px;

    }

    .ILable {
        font-weight: bold;
        font-size: 40px;
        margin-top: 10px;
    }

    .Idiscribe {
        font-size: 26px;
        margin-top: 10px;
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
