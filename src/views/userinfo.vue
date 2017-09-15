<template>
    <ONavPage navbarhide="hide" pageWrapperColor="#F3F5F9">
        <div class="Ubackground">
            <image src="http://h.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059aafc6cdb2134349b023bba07.jpg" class="Ubg-image" resize="cover"></image>
            <div class="leftarrow" @click="goback()"></div>
            <OIcon type="icon-share_light" size="42" class="icon-share"/>
            <OIcon type="icon-qr_code_light" size="42" class="icon-qr_code"/>
            <OIcon type="icon-camera" size="45" color="#FFFFFF" class="icon-camare1"/>
        </div>
        <div class="UserInfo">
            <div class="InfoDiv">
                <text class="username">咸鱼一号</text>
                <OButtonTextBtn :buttonitems="OButtonItems" @onClick="change" class="TextBtn"></OButtonTextBtn>
            </div>
            <OButton class="editInfo" size="small" @click="IEdit()"><text style="font-weight: bold; font-size: 26px">编辑资料</text></OButton>
        </div>
        <image class="Uavatar" :src="avatar"></image>
        <OIcon type="icon-camera" size="30" color="#FFFFFF" class="icon-camare2"/>
        <div class="otherInfo">
            <text class="time">{{Itime}}</text>
            <OCell
                    dataRole="none"
                    Title="这个用户很神秘哦，什么都没留下"
                    showArrow
                    @Click="Click">
            </OCell>
        </div>
        <div class="connection">
            <OCell
                    height="72"
                    dataRole="none"
                    Src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    Title="实人认证"
                    showArrow
                    :value= "renzheng"
                    @Click="Click">
            </OCell>
            <OCell
                    height="72"
                    dataRole="none"
                    Src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    Title="芝麻信用"
                    showArrow
                    :value= "shouquan"
                    @Click="Click">
            </OCell>
            <OCell
                    height="72"
                    dataRole="none"
                    Src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    Title="新浪微博"
                    showArrow
                    :value= "weibo_name"
                    @Click="Click">
            </OCell>
        </div>
        <OTabs :value="tab" @input="tabsChange" :tabIndex="tabIndex" activecolor="#FFDA44">
            <OTab label="我" value="one1" style="width: 185px"><text>已发货..</text></OTab>
            <OTab label="宝贝" value="two1" style="width: 185px"><text>未发货1...</text></OTab>
            <OTab label="相册" value="three1" style="width: 185px"><text>未发货2...</text></OTab>
            <OTab label="评价" value="four1" style="width: 185px"><text>未发货3...</text></OTab>
        </OTabs>
    </ONavPage>
</template>

<script>
  import { ONavPage, OIcon, OButton, OButtonTextBtn, OCell, OTabs, OTab } from 'iweex'

  export default {
    components: {
      ONavPage, OIcon, OButton, OButtonTextBtn, OCell, OTabs, OTab
    },
    data () {
      return {
        OButtonItems: [
          {'value': 1, 'main': '0', 'second': '超赞', 'hasInfo': false},
          {'value': 2, 'main': '0', 'second': '关注数', 'hasInfo': false},
          {'value': 3, 'main': '0', 'second': '粉丝数', 'hasInfo': false}
        ],
        Itime: this.Idletime + '前来过闲鱼',
        tabIndex: 0,
        tab: 'five'
      }
    },
    methods: {
      Click: function (e) {
        this.$emit('Click', e)
      },
      change (v) {
        modal.toast({
          message: v,
          duration: 0.3
        })
      },
      goback: function () {
        this.jump('home')
      },
      tabsChange (index, tabs) {
        this.tab = tabs[index].value
        this.tabIndex = index
      }
    },
    props: {
      Idletime: {
        default: '未知时间'
      },
      renzheng: {
        default: '未认证'
      },
      shouquan: {
        default: '未授权'
      },
      weibo_name: {
        default: '未绑定'
      },
      avatar: {
        default: 'http://h.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059aafc6cdb2134349b023bba07.jpg'
      }
    }
  }
</script>

<style scoped>
    .Ubackground{
        width: 750px;
        height: 290px;
        flex-direction: row;
    }
    .Ubg-image{
        width: 750px;
        height: 290px;
        border-style: solid;
    }
    .leftarrow {
        width: 22px;
        height: 22px;
        margin-left: 20px;
        border-right-style: solid;
        border-right-width: 4px;
        border-right-color: #C8C8CD;
        border-bottom-style: solid;
        border-bottom-width: 4px;
        border-bottom-color: #C8C8CD;
        transform: rotate(135deg);
        position: absolute;
        top: 82px;
        left: 20px;
    }
    .icon-share{
        position: absolute;
        top: 68px;
        left: 600px;
    }
    .icon-qr_code{
        position: absolute;
        top: 68px;
        left: 680px;
    }
    .icon-camare1{
        position: absolute;
        top: 240px;
        left: 20px;
        width: 60px;
        height: 47px;
        background-color: #3E4448;
        align-items: center;
    }
    .icon-camare2{
        position: absolute;
        top: 310px;
        left: 680px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background-color: #3E4448;
        align-items: center;
        justify-content: center;
        border-width: 1px;
        border-color: #FFFFFF;
    }
    .UserInfo{
        flex-direction: row;
        background-color: #FFFFFF;
        width: 750px;
    }
    .InfoDiv{
        width: 750px;
        margin: 20px;
        border-bottom-width: 1px;
        border-color: #C8C8CD;
    }
    .username{
        color: black;
        font-size: 38px;
        font-family: SimHei;
        font-weight: bold;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 20px;
    }
    .TextBtn{
        width: 375px;
    }
    .editInfo{
        position: absolute;
        top: 130px;
        left: 570px;
        border-radius: 0px;
        background-color: #FFFFFF;
        border-width: 1px;
        border-color: black;
        width: 150px;
        height: 50px;
        align-items: center;
        justify-content: center;
    }
    .time {
        margin-left: 36px;
        margin-bottom: 20px;
        font-size: 20px;
        color: #999999;
        /*font-weight: bold;*/
    }
    .otherInfo{
        width: 750px;
        background-color: #FFFFFF;
        margin-bottom: 11px;
    }
    .connection{
        margin-top: 11px;
        margin-bottom: 11px;
        background-color: white;
    }
    .Uavatar{
        position: absolute;
        top: 230px;
        left: 600px;
        border-radius: 60px;
        height: 120px;
        width: 120px;
    }
</style>
