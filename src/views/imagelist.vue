<template>
    <div class="div">
        <div v-for="image in images" class="image-div">
            <text class="text">{{image.text}}</text>
            <image :src="image.src" class="image"></image>
        </div>
    </div>
</template>

<style scoped>
    .div{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: white;
    }
    .image-div {
        flex: 1;
        flex-direction: column;
        align-items: center;
    }
    .image{
        width: 100px;
        height: 100px;
        margin-top: 20px;
    }
    .text{
        font-size: 30px;
        font-weight: 400;
    }
</style>

<script>
    export default {
      props: {
        images: {
          default: []
        }
      }
    }
</script>
