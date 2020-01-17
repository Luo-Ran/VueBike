<template>
    <van-tabbar v-model="active" class="active_tab">
    <van-tabbar-item
      v-for="(item,index) in tabbars"
      :key="index"
      @click="tab(index,item.name)"
    >
      <span :class="currIndex == index ? active:''">{{item.title}}</span>
      <template slot="icon">
        <van-icon :name="item.class"/>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
/* eslint-disable */
export default {
  name: "tabbar",
  data() {
    return {
      currIndex: 0,
      active:0,
      tabbars: [
        {
          name: "rentBike",
          title:"扫码租车",
          class: "scan"
        },
        {
          name: "dashboard",
          title:"车辆管理",
          class: "home-o"
        },
        {
          name: "personal",
          title:"个人中心",
          class:"user-circle-o"
        },
      ]
    }
  },
  methods: {
    tab(index,val){
      this.currIndex = index;
      this.$router.push(val);
    }
  }
}
</script>

<style scoped>
.active_tab img {
  width: 26px;
  height: 26px;
}

.van-tabbar-item--active {
  font-weight: bolder;
  color: #197cb4;
}
</style>