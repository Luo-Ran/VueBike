<template>
    <div id="personMain">
      <!-- 用户信息模块 -->
      <div id="personMess">
        <div class="personName">
          <div class="name" >
             <span>用户名称</span>
          </div>
          <div class="sign" >
             <span>个性签名</span>
          </div>
          <div class="appMess" >
             <span>只为方便你的出行~</span>
          </div>
        </div>
        <div class="personImg">
          <img src="@/assets/imgs/header.jpg" style="width:100px; height:100px;border-radius:50%;">
        </div>
      </div>
      <!-- 操作信息模块 -->
      <div id="operateMess">
        <div class="operatr">
          <van-cell title="我的订单" icon="apps-o" size="large" is-link to="dashboard" />
          <van-cell title="车辆维护" icon="brush-o" size="large" is-link to="repairBike" />
          <van-cell title="车辆入库" icon="logistics" size="large" is-link to="dashboard" />
          <van-cell title="客户信息" icon="user-o" size="large" is-link to="dashboard" />
          <van-cell title="今日数据" icon="chart-trending-o" size="large" is-link to="dashboard" />
          <van-cell title="账号管理" icon="orders-o" size="large" is-link to="dashboard" />
        </div>
      </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {}
</script>

<style scoped>
.navbar{
  padding-top: 20px;
  background-color:#1f6eaf;
}
#personMess{
  width: 90%;
  height: 150px;
  margin-top:10%;
  margin-left: 5%;
  margin-right: 5%;
}

.personName{
  width: 55%;
  height: 100px;
  border: 1px solid rgb(211, 208, 208);
  float: left;
}

.name{
  width: 100%;
  font-size: 20px;
  font-weight: bolder;
  text-align: left;
  padding-left: 15px;
  padding-top: 5px;
}

.sign{
  text-align: left;
  padding-left: 15px;
  padding-top: 5px;
}
.appMess{
  text-align: left;
  padding-left: 15px;
  padding-top: 15px;
  color: rgb(155, 153, 153);
}

.personImg{
  width: 40%;
  height: 100px;
  float: right;
}

#operateMess{
  width: 90%;
  height: 400px;
  margin-left: 5%;
  margin-right: 5%;

}

.operatr{
  text-align: left;
}
</style>