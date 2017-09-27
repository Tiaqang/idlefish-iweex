<template>
    <div class="Rcmdcolumn">
        <div class="Iheader">
            <div class="coloricon" :style="colorlist"></div>
            <div class="header-div">
                <text class="header">{{RcmdHeader}}</text>
            </div>
        </div>
        <div v-for="item in recommenditems">
            <recommendItem :Iicon="item.src" :Ilabel="item.label" :Idiscribe="item.discribe" @click="onclick"></recommendItem>
        </div>
    </div>
</template>

<style>
    .Rcmdcolumn {
        padding-top: 5px;
        padding-left: 20px;
        padding-bottom: 5px;
        padding-right: 5px;
        width: 370px;
        background-color: white
    }

    .Iheader {
        width: 330px;
        border-bottom-width: 1px;
        border-bottom-color: #C8C8CD;
        flex-direction: row;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-bottom: 20px;
        align-items: center;
    }

    .coloricon {
        height: 35px;
        width: 10px;
    }

    .header {
        font-size: 32px;
        font-weight: 700;
    }
    .header-div{
        margin-left: 20px;
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
    computed: {
      colorlist () {
        return {'background-color': this.IconColor}
      }
    },
    methods: {
      onclick () {
        this.$emit('click')
      }
    }
  }
</script>
