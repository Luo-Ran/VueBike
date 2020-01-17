<template>
<div>
  <!-- 搜索框 -->
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
  </div>
  <!-- tab标签页 -->
  <div class="tabStyle">
      <van-tabs v-model="activeName">
          <van-tab title="已登记" name="a">
            <bikeList :bikeStatus = this.status0></bikeList>
          </van-tab>
          <van-tab title="待借" name="b">
            <bikeList :bikeStatus = this.status1></bikeList>
          </van-tab>
          <van-tab title="租用" name="c">
            <bikeList :bikeStatus = this.status2></bikeList>
          </van-tab>
          <van-tab title="维修" name="d">
            <bikeList :bikeStatus = this.status3></bikeList>
          </van-tab>
          <van-tab title="挂失" name="e">
            <bikeList :bikeStatus = this.status4></bikeList>
          </van-tab>
          <van-tab title="报废" name="f">
            <bikeList :bikeStatus = this.status5></bikeList>
          </van-tab>
      </van-tabs>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import bikeList from './moudles/bikeList';
export default {
  data() {
    return {
      // tab标签页
       activeName: 'a',
      // 搜索内容
      value:'',
      // 车辆状态 0.已登记、1.待借、2.租用、3.维修、4.挂失、5.报废
      status0: 0,
      status1: 1,
      status2: 2,
      status3: 3,
      status4: 4,
      status5: 5, 
    }
  },
  components:{
    bikeList,
  },
  methods: {
    // 查询所有自信车信息
    getAllBikeInfo(){
      this.$axios({
        method:'post',
        url:'/api/bicy/bike/getAllBikeInfo',
      }).then((response) => {
        this.bikeList = response.data.data
      })
    },
    onSearch(){
      //跳转路由
      this.$router.push({ path: '/search' })
    },
  },

  created(){
    this.getAllBikeInfo();
  },
  mounted(){
    this.container = this.$refs.container;
  }
}
</script>

<style scoped>
.tabStyle{
  padding-bottom: 100px;
}
</style>