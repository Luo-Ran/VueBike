<template>
  <van-nav-bar @click-right="onClickRight" class="navbar" :title="title">
    <!-- 左上角头像 -->
    <div slot="left" class="navbar_left">
        <img src="@/assets/imgs/header.jpg" style="width:30px; height:30px; border-radius:50%;" @click="showPopup">
      <!-- 弹出层  -->
      <van-popup v-model="show" position="left" :style="{ height: '100%'}">
        <van-panel title="标题" desc="描述信息" status="状态">
          <div>内容</div>
        </van-panel>
      </van-popup>
    </div>
    <!-- 右上角设置 -->
    <van-icon name="setting-o" size='30px' slot="right" color="#fff" />
  </van-nav-bar>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      show:false,
      title: "租车中心"
    }
  },
  methods: {
    showPopup(){
      this.show = true;
    },
    onClickRight() {
       this.$toast('按钮');
    }
  }
}
</script>

<style scoped>
.navbar{
  background-color:#50a4e9;
}
.van-nav-bar__title{
  color: white;
  font-size: 20px;
  font-weight: bold;
}
.navbar_left{
  margin-top: 15px;
  height:38px;
}
</style>