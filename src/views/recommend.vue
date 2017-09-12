<template>
    <div>
    <div class="Rcmdcolumn">
        <div class="Iheader">
            <div class="coloricon" :class="colorlist"></div>
            <text class="header">{{RcmdHeader}}</text>
        </div>
    </div>
    <div v-for="item in recommenditems">
        <recommendItem :Iicon="item.src" :Ilabel="item.label" :Idiscribe="item.discribe"></recommendItem>
    </div>
    </div>
</template>

<style>
    .Rcmdcolumn {
        flex-direction: column;
        padding-top: 5px;
        padding-left: 20px;
        padding-bottom: 5px;
        padding-right: 5px;
        width: 350px;
    }

    .Iheader {
        border-bottom-width: 1px;
        border-bottom-color: #C8C8CD;
        flex-direction: row;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-bottom: 20px;
        align-items: center;
    }

    .coloricon {
        height: 52px;
        width: 9px;
        /*background-color: #4bd9fd;*/
        margin-right: 5px;
    }

    .header {
        font-weight: 600;
        font-size: 48px;
    }
</style>

<script>
  import recommendItem from './recommenditem.vue'

  export default {

    components: {recommendItem},
    props: {
      recommenditems: {
        default: []
      },
      RcmdHeader: {
        default: '标题'
      },
      IconColor: {
        default: '#4bd9fd'
      }
    },
//    data () {
//      return {
//
//      }
//    },
    computed: {
      colorlist () {
//        this.backgroundcolor = IconColor
      }
    }
  }
</script>
