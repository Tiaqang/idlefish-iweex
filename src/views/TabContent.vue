<template>
  <div>
    <div class="top-row">
      <text class="left-top-text">{{this.classname}}</text>
      <div class="right-top-div">
        <text class="right-top-text">全部</text>
        <div class="right-top-arrow"></div>
      </div>
    </div>
    <div class="middle-wrap">
      <text>每日新发</text>
      <div class="small-right-arrow"></div>
    </div>
    <div style="margin-left: 30px;">
      <div v-for="item in this.items">
        <div v-if="item.type=== classname">
          <ORow v-for="(row, key) in item.convertedList" :key="key">
            <OCol v-for="(component, index) in row" :key="index">
              <div class="card" @click="onClick">
                <image class="card-img" :src="(filePath + component.img)"></image>
                <text class="card-text">{{ component.text }}</text>
              </div>
            </OCol>
          </ORow>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ORow, OCol } from 'iweex'
  const ROW_COLUMNS = 3
  export default {
    name: 'TabContent',
    components: {
      ORow,
      OCol
    },
    data () {
      return {
        classname: '房屋租赁',
        $parent: null,
        filePath: 'http://idg-zhaoyang.tunnel.zhoumiao.com/IdleFish/src/assets/images/',
        items: [
          {
//            img: '',
//            text: ''
            type: '房屋租赁',
            list: [
              {
                img: 'lunbo1.PNG',
                text: '写字楼'
              },
              {
                img: 'lunbo1.PNG',
                text: '整租房'
              },
              {
                img: 'lunbo1.PNG',
                text: '合租房'
              },
              {
                img: 'lunbo1.PNG',
                text: '日租房'
              },
              {
                img: 'lunbo1.PNG',
                text: '车位'
              }
            ]
          },
          {
            type: '技能服务',
            list: [
              {
                img: 'lunbo1.PNG',
                text: '兼职家教'
              },
              {
                img: 'lunbo1.PNG',
                text: '运动私教'
              },
              {
                img: 'lunbo1.PNG',
                text: 'IT服务'
              }
            ]
          },
          {
            type: '移动电话',
            list: [
              {
                img: 'lunbo1.PNG',
                text: '手机'
              }
            ]
          }
        ]
      }
    },
    created () {
      this.classname = this.$parent.$parent.label
//      console.log(this.filePath)
      for (var key in this.items) {
        this.items[key]['convertedList'] = this.convertList(this.items[key].list)
      }
    },
    methods: {
      convertList (item) {
        let idx = 0
        let row = 0
        let col = 0
        let converted = {}

        Object.keys(item).map((key) => {
          let icon = item[key]

          if (idx % ROW_COLUMNS === 0) {
            row++
            col = 1
          } else {
            col++
          }

          if (!converted[row]) {
            converted[row] = {}
          }

          converted[row][col] = icon
          idx++
        })

        return converted
      },
      onClick () {
      }
    }
  }

</script>

<style scoped>
  @import "../styles/TabContent.scss";
</style>
