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
          <van-card price="100.00" desc="车辆编号" title="维修编号"
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
                <van-button round type="primary" size="normal" @click="submint">维修完成</van-button>
            </div>
            <div v-if="this.bikeStatus == status1">
                <van-button round type="primary" @click="submint">信息删除</van-button>
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
        // 维修状态 0.维修中、1.已完成
        status0: 0,
        status1: 1,
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
  background-color: rgb(245, 245, 245);
  position:fixed; 
  bottom:0;
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