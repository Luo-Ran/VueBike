<template>
  <div class="wrap">
    <div>
       <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="@/assets/imgs/header.jpg" style="width:100px; height:100px; border-radius:50%;">
        </van-col>
       </van-row>
    </div>
    <div class="desc"></div>
      <van-row type="flex" justify="center">
        <van-col span="20">
          <van-cell-group>
            <van-field
              v-model="userNo"
              clearable
              label="用户名:"
              placeholder="请输入用户名"
            />

            <van-field
              v-model="userPass"
              type="password"
              label="密码:"
              right-icon="question-o"
              placeholder="请输入密码"
              @click-right-icon="$toast('默认密码为123')"
            />
            <van-row type="flex">
              <van-col span="14">
                <van-field
                  v-model="code"
                  label="验证码:"
                  placeholder="请输入验证码"
                />
              </van-col>
              <van-col span="6">
                <div class="login-code" @click="refreshCode()">
                <SIndentify :identifyCode="identifyCode"></SIndentify>
                </div>
              </van-col>
            </van-row>
          </van-cell-group>
        </van-col>
      </van-row>
      <div class="desc"></div>
      <van-row type="flex" justify="center">
        <van-col span="16">
          <van-button round type="primary" size = "large" @click="submitForm()">登录</van-button>
        </van-col>
      </van-row>
    </div>
</template>

<script>
/* eslint-disable */
import SIndentify from '../login/module/identify.vue'
export default {
  data() {
    return {
      userNo:'user001',//登录账号
      userPass:'123', //登录密码
      indentifyCodes: "1234567890",
      identifyCode: "",
      code: "", // 输入框输入的验证码
    }
  },
  components:{
   SIndentify,
  },
  methods:{
    /**
     * 登录
     */
    submitForm() {
      //跳转路由
      if(this.code == ''){
        this.$dialog.alert({message: '请输入验证码'});
        return false
      }
      if(this.identifyCode != this.code){
        this.code = '',
        this.refreshCode();
        this.$dialog.alert({message: '验证码错误，请重新输入'});
        return false
      }
      if(this.userNo == ''){
        this.$dialog.alert({message: '请输入账号'});
        return false
      }
      if(this.userPass == ''){
        this.$dialog.alert({message: '请输入密码'});
        return false
      }
      else{
          this.$axios({
            method:'get',
            url:'/api/bicy/sysUser/login',
            params:{
              userNo: this.userNo,
              userPass: this.userPass
            }
          }).then((response) => {
            console.log(response.data)
            if(response && response.data.success){
              // 设置用户登录信息
              window.sessionStorage.setItem('user',JSON.stringify(response.data))
              //跳转路由
              this.$router.push({ path: '/rentBike' })
            }else{
              this.$toast.fail(response.data.message)
            }
          })
      }
    },
    /**
     * 验证码
     */
    randomNum(min,max){
      return Math.floor(Math.random() * (max -min) + min);
    },
    /**
     * 刷新验证码
     */
    refreshCode(){
      this.identifyCode = "",
      this.makeCode(this.indentifyCodes,4);
    },
    /**
     * 生成验证码
     */
    makeCode(o, len){
      for(let i = 0; i < len; i++){
        this.identifyCode += this.indentifyCodes[
          this.randomNum(0,this.indentifyCodes.length)
        ];
      }
    },
  },
  mounted(){
    this.identifyCode = "",
    this.makeCode(this.indentifyCodes,4);
  },
  created(){
    // 初始化验证码
    this.refreshCode()
  },
}
</script>

<style scoped>
.wrap {
    padding-top: 50px;
    padding-bottom: 50px;
  }
.title {
    font-size: 33px;
    font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-weight: 600;
    position: relative;
    vertical-align: middle;
  }
.desc {
    margin-top: 12px;
    margin-bottom: 40px;
    color: rgba(0,0,0,.45);
  }
  .login-code {
    cursor: pointer;
  }
</style>
