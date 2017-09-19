<template>
        <scroller scroll-direction="horizontal" class="scroller">
            <div v-for="image in imageSrc" class="image-div">
                <image :src="image" resize="cover" class="image"></image>
            </div>
        </scroller>
</template>

<style scoped>
    .scroller{
        flex-direction: row;
        height:250px;
    }
    .image{
        width: 250px;
        height: 250px;
    }
    .image-div{
        width: 260px;
        height: 250px;
    }
</style>

<script>
    export default {
      props: {
        imageSrc: {
          default: []
        }
      }
    }
</script>
