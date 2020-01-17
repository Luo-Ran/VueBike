<template>
<div>
<van-checkbox-group v-model="result" ref="checkboxGroup">
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell
    v-for="(item, index) in list"
    :key="item"
    @click="toggle(index)"
  >
  <div>
      <div>
          <van-checkbox :name="item" ref="checkboxes" class="checkStyle"></van-checkbox>
      </div>
      <div>
          <van-card price="2.00" desc="车辆类型" title="车辆编号"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg" class="cardStyle"
          />
      </div>
  </div>
  </van-cell>
</van-list>
</van-checkbox-group>

<!-- 车辆管理操作 -->
    <div class ="barStyle">
        <div class="leftMess">
            <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
        </div>
        <div class="rightMess">
            <div v-if="this.bikeStatus == status0">
                <van-button round type="primary" size="normal" @click="submint">投放</van-button>
            </div>
            <div v-if="this.bikeStatus == status1">
                <van-button round type="primary" @click="submint">挂失</van-button>
                <van-button round type="primary" @click="submint">维修</van-button>
            </div>
            <div v-if="this.bikeStatus == status2">
                <van-button round type="primary" @click="submint">挂失</van-button>
            </div>
            <div v-if="this.bikeStatus == status3">
                <van-button round type="primary" @click="submint">挂失</van-button>
                <van-button round type="primary" @click="submint">维修</van-button>
                <van-button round type="primary" @click="submint">投放</van-button>
            </div>
            <div v-if="this.bikeStatus == status4">
                <van-button round type="primary" @click="submint">解挂</van-button>
            </div>
            <div v-if="this.bikeStatus == status5">
                <van-button round type="primary" @click="submint">删除</van-button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
        // 复选框
        result: [],
        checkTrue: true,
        checked:false,
        // 列表
        list: [],
        loading: false,
        finished: false,
        // 车辆状态 0.已登记、1.待借、2.租用、3.维修、4.挂失、5.报废
        status0: 0,
        status1: 1,
        status2: 2,
        status3: 3,
        status4: 4,
        status5: 5, 
    };
  },
  props:['bikeStatus'],

  methods: {
    //复选框
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 500);
    },
     // 复选框全选
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(this.checkTrue);
      this.checkTrue = !this.checkTrue;
    },
    submint(){
        console.log(this.result)
    }
  }
}
</script>

<style scoped>
.checkStyle{
    width: 6%;
    float: left;
    margin:10% 0;
}
.cardStyle{
    width: 93%;
    float: right;
}
.barStyle{
  height: 50px;
  width: 100%;
  background-color: #fff;
  position:fixed; 
  bottom:50px;
}
.leftMess{
    margin-top: 4%;
    margin-left: 4%;
    float: left;
  }
.rightMess{
    float: right;
    margin-right: 10%;
    padding-top: 3px;
  }
</style>