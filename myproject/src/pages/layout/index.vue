<template>
    <div>
      <van-sticky>
         <layout-header></layout-header>
      </van-sticky>
      <router-view/>
      <layout-tabbar></layout-tabbar>
    </div>
</template>
<script>
/* eslint-disable */
import header from "./moudles/header"
import tabbar from "./moudles/tabbar";
export default {
    data() {
    return {
      };
    },
    components:{
      "layout-tabbar":tabbar,
      "layout-header": header,
    }
}
</script>
