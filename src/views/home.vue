<template>
    <ONavPage navbarhide="hide" pageWrapperColor="#F3F5F9">
        <div v-if="!islogin" style="margin-bottom: 11px" @click="Ilogin()">
            <image class="Myheader" src="http://s10.sinaimg.cn/middle/5a3ab1b1x9961016a8699&690" resize="cover"></image>
            <div class="title">
                <text class="welText">欢迎来到闲鱼</text>
                <OButton class="button-item" size="small" iconcolor="#e9c841" @click="Ilogin()">马上登录</OButton>
            </div>
        </div>
        <div v-else>
            <div class="userInfo" @click="gotouserInfo()">
                <div class="title">
                    <text class="username">{{UserName}}</text>
                    <text class="sign">{{Sign}}</text>
                </div>
                <image :src="Avatar" class="avatar" resize="cover"></image>
                <div class="arrow"></div>
            </div>
            <OButtonTextBtn :buttonitems="OButtonItems" @onClick="change" class="TextBtn"></OButtonTextBtn>
            <div class="SetUpIFnum">
                <image :src="hello" class="hello"></image>
                <div class="SetUpText">
                    <text class="username" style="font-size: 28px; margin-top: 0px">开通闲鱼号！</text>
                    <text style="font-size: 24px">就可以看到sei关注你啦</text>
                </div>
                <div class="button-item2">
                    <text style="font-size: 26px">开通</text>
                </div>
            </div>
        </div>
        <div class="mydiv">
            <OCell
                    dataRole="none"
                    Src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    Title="我发布的"
                    showArrow
                    :value="fabuCount"

                    @Click="Click">
            </OCell>
            <OCell
                    dataRole="none"
                    Src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    Title="我卖出的"
                    showArrow
                    :value="soldCount"
                    @Click="Click">
            </OCell>
            <OCell
                    dataRole="none"
                    Src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    Title="我买到的"
                    showArrow
                    :value= "buyCount"
                    @Click="Click">
            </OCell>
            <OCell
                    dataRole="none"
                    Src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    Title="我收藏的"
                    showArrow
                    :value= "collectCount"
                    @Click="Click">
            </OCell>
            <OCell
                    dataRole="none"
                    Src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    Title="我的拍卖"
                    showArrow
                    @Click="Click">
            </OCell>
            <OCell
                    dataRole="none"
                    Src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    Title="我的鱼贝"
                    showArrow
                    :value= "yubeiCount"
                    @Click="Click">
            </OCell>
        </div>
        <div v-if="islogin" class="specialDiv">
            <OCell
                    dataRole="none"
                    Src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    Title="闲鱼Family"
                    showArrow
                    @Click="Click">
            </OCell>
            <OCell
                    dataRole="none"
                    Src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    Title="闲鱼服务社"
                    showArrow
                    @Click="Click">
            </OCell>
        </div>
        <div class="mydiv">
            <OCell
                    dataRole="none"
                    Src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    Title="设置"
                    showArrow
                    @Click="Click">
            </OCell>
        </div>
    </OnavPage>
</template>

<style scoped>
    .Myheader{
        width: 750px;
        height: 290px;
    }
    .title{
        position:absolute;
        top: 70px;
        left: 60px;
        flex-direction: column;
    }
    .welText{
        color: black;
        font-size: 42px;
        font-family: SimHei;
        font-weight: 300;
        margin-bottom: 20px;
    }
    .button-item{
        width: 200px;
        padding-right: 10px;
        padding-left: 10px;
        /*margin-right: 60px;*/
        border-radius: 0px;
        background-color: #e9c841;
        font-size: 30px;
    }
    .button-item2{
        /*width: 100px;*/
        height: 60px;
        padding-right: 38px;
        padding-left: 38px;
        /*margin-right: 60px;*/
        border-style: solid;
        background-color: #FFDA44;
        font-size: 30px;
        border-width: 2px;
        align-items: center;
        justify-content: center;
        margin-top: 33px;
    }
    .mydiv{
        flex-direction: column;
        margin-top: 11px;
        margin-bottom: 11px;
        background-color: white;
    }
    .specialDiv{
        flex-direction: column;
        margin-top: 11px;
        margin-bottom: 11px;
        background-color: white;
    }
    .sign{
        font-size: 20px;
        color: #C8C8CD;
    }
    .username{
        color: black;
        font-size: 42px;
        font-family: SimHei;
        font-weight: bold;
        margin-top: 11px;
        margin-bottom: 11px;
    }
    .userInfo{
        height: 250px;
        width: 750px;
        background-color: white;
        flex-direction: row;
    }
    .SetUpIFnum{
        height: 140px;
        width: 750px;
        background-color: #FFDA44;
        flex-direction: row;
        margin-top: 11px;
        margin-bottom: 11px;
    }
    .SetUpText{
        justify-content: center;
        margin-left: 5px;
        width: 500px;
    }
    .avatar{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        position: absolute;
        top: 85px;
        left: 580px;
    }
    .arrow {
        width: 22px;
        height: 22px;
        margin-left: 20px;
        border-right-style: solid;
        border-right-width: 4px;
        border-right-color: #C8C8CD;
        border-bottom-style: solid;
        border-bottom-width: 4px;
        border-bottom-color: #C8C8CD;
        transform: rotate(-45deg);
        position: absolute;
        top: 132px;
        left: 680px;
    }
    .TextBtn{
        background-color: white;
        margin-top: 1px;
        margin-bottom: 11px;
    }
    .hello{
        height: 140px;
        width: 80px;
    }

</style>

<script>
    import { OButton, ONavPage, OCell, OButtonTextBtn } from 'iweex'

    export default {
      components: {
        OButton, ONavPage, OCell, OButtonTextBtn
      },
      computed: {
      },
      props: {
        fabuCount: {
          default: ''
        },
        soldCount: {
          default: ''
        },
        buyCount: {
          default: ''
        },
        yubeiCount: {
          default: ''
        },
        collectCount: {
          default: ''
        },
        username: {
          default: '咸鱼一号'
        },
        sign: {
          default: '虽然没挣到钱，但在闲鱼开心就好'
        },
        Avatar: {
          default: 'http://h.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059aafc6cdb2134349b023bba07.jpg'
        },
        hello: {
          default: 'http://h.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059aafc6cdb2134349b023bba07.jpg'
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
        Ilogin: function () {
          this.jump('login')
        },
        gotouserInfo: function () {
          this.jump('userinfo')
        }
      },
      created () {
        if (this.islogin) {
          this.fabuCount = '0'
          this.soldCount = '0'
          this.buyCount = '0'
          this.yubeiCount = '0'
          this.collectCount = '0'
        }
      },
      data () {
        return {
          islogin: false,
          hasSeparateLine: true,
          UserName: this.username,
          Sign: this.sign,
          OButtonItems: [
            {'value': 1, 'main': '0', 'second': '超赞', 'hasInfo': false},
            {'value': 2, 'main': '0', 'second': '关注数', 'hasInfo': false},
            {'value': 3, 'main': '0', 'second': '粉丝数', 'hasInfo': false}
          ]
        }
      }
    }

</script>
