<template>
<div>
    <!-- 返回上一页 -->
    <div>
        <van-nav-bar title="车辆维护" left-text="返回" left-arrow @click-left="onClickLeft"/>
    </div>
    <!-- 维修列表 -->
    <div>
        <van-tabs v-model="activeName">
          <van-tab title="维修中" name="a">
            <repairList :bikeStatus = this.status0></repairList>
          </van-tab>
          <van-tab title="已完成" name="b">
            <repairList :bikeStatus = this.status1></repairList>
          </van-tab>
      </van-tabs>
    </div>
</div>
</template>

<script>
import repairList from './moudles/repairList';
export default {
    data(){
        return{
            // tab标签页
            activeName: 'a',
            // 维修状态 0.维修中、1.已完成
            status0: 0,
            status1: 1,
        }
    },
    components:{
        repairList,
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
    }
}
</script>