<template>
  <div>
    <div id="workshop">
        <BMapComponent class="map-area"></BMapComponent>
    </div>
    <!-- <div id="scan">
      <van-row type="flex" justify="center" class="butnTop">
        <van-col span="16">
          <van-button round type="info" size="large" icon="scan" @click="goCamera()">扫码租车</van-button>
        </van-col>
      </van-row>
    </div> -->
  </div>

</template>

<script>
    import BMapComponent from './moudles/BMapComponent';
    export default{
      data() {
        return {

        }
      },
      methods:{

      },
      mounted() {

      },
      created() {

      },
      components: {
        BMapComponent
      }
    }
</script>
<style scoped>
#scan{
  padding-top: 100%;
}
</style>