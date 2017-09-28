<template>
    <div style="flex-direction: row">
        <div class="header">
            <scroller class="tab-nav"
                      ref="tabs"
                      scroll-direction="vertical"
                      show-scrollbar="false">
                <!-- <div class="line" ref="line"
                      :style="{height: rpx( lineHeight)+'px', backgroundColor: activecolor }"></div>:style="tabHeight"-->
                <div v-for="(tab, index) in tabs" class="tab"
                     :ref="'tab'+index"
                     @click="selectTab(index, tabs)">
                    <OIcon v-if="tab.icon"
                           class="tab-icon"
                           :size="iconsize"
                           :class="[tab.value===value? 'tab-active' : '']"
                           :color="tab.value===value? activecolor : defaultcolor"
                           :type="`${tab.icon}`">
                    </OIcon>
                    <text class="tab-text" :style='{ color: tab.value===value? activecolor : defaultcolor }'>{{tab.label}}</text>
                </div>
            </scroller>
        </div>
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>
<script>
  import { OIcon } from 'iweex'
  import Base from '../mixins/base.js'
  import event from '../const/event'
  const dom = weex.requireModule('dom')

  export default {
    name: 'OTabsVertical',
    mixins: [Base],
    components: {
      OIcon
    },
    props: {
      // 图标大小的值
      iconsize: {
        type: [String, Number],
        default: 28
      },
      // 属性值
      value: {
        type: [String, Number, Boolean, Object, Array],
        default: 0
      },
      // 图标
      icon: {
        type: [String, Number, Boolean, Object, Array],
        default: ''
      },
      // 默认颜色
      defaultcolor: {
        default: '#666'
      },
      // 选中时的默认颜色
      activecolor: {
        default: '#2d8cf0'
      },
      // tab的位置
      tabIndex: {
        default: 0
      }
    },
    data () {
      return {
        tabs: [],
        // lineHeight: 50,
        color: this.defaultcolor,
        refreshing: false,
        showLoading: 'hide',
        tabHeight: '120px'
      }
    },
    computed: {
      activeIndex () {
        let index = this.tabs.map(tab => tab.value).indexOf(this.value)
        if (index < 0) index = 0
        return index
      }
    },
    watch: {
      tabIndex () {
        this.$nextTick(() => {
          dom.getComponentRect(this.$refs.tabs, option => {
            if (!option || option.result === false) {
              return
            }
//            this.animateLine()
            if (this.tabIndex === 0) {
              this.animateTab(Number(this.tabIndex))
            } else {
              this.animateTab(Number(this.tabIndex) - 1)
            }
          })
        })
        this.selectTab(this.tabIndex, this.tabs)
      },
      value (val) {
        this.$nextTick(() => {
//          this.animateLine()
        })
      },
      tabs () {
        this.$nextTick(() => {
          dom.getComponentRect(this.$refs.tabs, option => {
//            if (!option || option.result === false) {
//              return
//            }
//            this.tabHeight = {height: this.rpx(option.size.height / this.tabs.length) + 'px'}
//            console.log('wat: ' + option.size.height + ' ' + this.tabs.length + ' ' + this.rpx(option.size.height / this.tabs.length))
//            this.lineHeight = 50
//            this.animateLine()
          })
        })
        this.selectTab(this.tabIndex, this.tabs)
      }
    },
    methods: {
      addTab (tab) {
        this.tabs.push(tab)
      },
      removeTab (tab) {
        this.tabs.splice(this.tabs.indexOf(tab), 1)
      },
      selectTab (index = 0, tabs = undefined) {
        this.$emit(event.INPUT, index, tabs)
      },
        /* animateLine () {
         const animation = weex.requireModule('animation')
         animation.transition(this.$refs.line, {
         duration: 300,
         timingFunction: 'ease-in-out',
         styles: {
         transform: `translateX(${this.activeIndex * this.lineHeight}px)`
         }
         })
         }, */
      animateTab (index) {
        const el = this.$refs['tab' + index][0]
        dom.scrollToElement(el, {})
      }
    },
    created () {
      this.$nextTick(() => {
        dom.getComponentRect(this.$refs.tabs, option => {
//          if (!option || option.result === false) {
//            return
//          }
//          this.tabHeight = {height: this.rpx(option.size.height / this.tabs.length) + 'px'}
//          console.log('crea: ' + option.size.height + ' ' + this.tabs.length + ' ' + this.rpx(option.size.height / this.tabs.length))
//          this.animateLine()
        })
      })
    }
  }
</script>
<style lang="sass" scoped>
    @import '../styles/o-tabs.scss'
</style>
