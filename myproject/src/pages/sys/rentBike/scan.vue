<style lang="less" scoped>
#camera {
  height: 100%;
  width: 100%;
  .van-icon {
    top: -2px;
    font-size: 30px;
    color: #fff;
    &.back {
      left: 10px;
    }
    &.light {
      right: 10px;
    }
  }
  #scan {
    width: 100%;
    height: 100%;
    z-index: 2;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 1);
  }
  .tips {
    text-align: center;
    position: absolute;
    width: 100%;
    top: 40%;
    color: #fff;
    z-index: 3;
    left: 0%;
  }
  .action {
    position: fixed;
    z-index: 777;
    width: 100%;
    left: 0;
    bottom: 0;
    .items {
      display: flex;
      justify-content: space-around;
      background: rgba(0, 0, 0, 0.35);
      width: 60%;
      padding: 4px;
      margin: 4px auto;
      .item {
        flex-basis: 50px;
        text-align: center;
        img {
          width: 27px;
        }
      }
    }
  }
}
</style>
<template>
  <div id="camera">
    <div id="scan"></div>
    <div class="tips">"加载中...</div>
    <div class="action">
      <div class="items">
        <div
          class="item"
          @click="openLight"
        ><img src="../assets/img/png-60@3x.png"></div>
        <div
          class="item"
          @click="getPicture()"
        ><img src="../assets/img/png-59@3x.png"></div>

        <div
          class="item"
          @click="cancelScan()"
        ><img src="../assets/img/png-61@3x.png"></div>
      </div>
    </div>
  </div>
</template>

<script  type='text/ecmascript-6'>
let scan = null;
export default {
  data() {
    return {
      codeUrl: "",
      isLight: false,
      showEnter: false,
      extra: null,
      scan: null,
      type: ""
    };
  },

  mounted() {
    setTimeout(() => {
      // 设置500毫秒等资源加载
      if (window.plus) {
        let s = plus.navigator.checkPermission("camera");
        if (s !== "notdeny") {
          plus.nativeUI.alert("相机权限未获取，请往设置应用程序里面开启权限!");
　　　　　　return;
        }
        this.startScan(); //`进入页面就调取扫一扫
      }
    }, 500);
  },
  beforeDestroy() {
    if (!window.plus) return;
    scan.cancel();
    scan.close();
    // scan = null;
  },
  methods: {
    // 打开闪光灯
    openLight() {
      this.isLight = !this.isLight;
      scan.setFlash(this.isLight);
    },
    //创建扫描控件
    startRecognize() {
      let that = this;
      if (!window.plus) return;

      scan = null;
      scan = new plus.barcode.Barcode(
        "scan",
        [plus.barcode.QR, plus.barcode.EAN8, plus.barcode.EAN13],
        {
          frameColor: "#1294cb",
          scanbarColor: "#1294cb",
          top: "100px",
          left: "0px",
          width: "100%",
          height: "500px",
          position: "fixed"
        }
      );
      scan.onmarked = onmarked;
      function onmarked(type, result, file) {
        result = result.replace(/\n/g, "");
        that.storage.save("cameraData", result);
        if (plus.webview.all().length > 1) {
          // 扫码成功后关闭当前的webview
          let ws = plus.webview.currentWebview();
          plus.webview.close(ws);
        }
      }
    },
    // //开始扫描
    startScan() {
      if (!window.plus) return;
      this.startRecognize(); //创建控件
      setTimeout(() => {
        scan.start();
      }, 200);
    },
    // 取消扫描
    cancelScan() {
      let l = plus.webview.all().length;if (l > 1) {
        let ws = plus.webview.currentWebview();
        plus.webview.close(ws);
      } else {
        this.$router.go(-1);
      }
      // this.$router.go(-1);
      if (!window.plus) return;
      plus.navigator.setStatusBarStyle("dark");
      if (scan) {
        scan.cancel(); //关闭扫描
        scan.close(); //关闭条码识别控件
      }
    },
    // 从相册选择图片扫码
    getPicture() {
      plus.gallery.pick(src => {
        plus.barcode.scan(
          src,
          (type, result) => {
            scan.cancel();
            scan.close();
            this.storage.save("cameraData", result);
            if (plus.webview.all().length > 1) {
              // 扫码成功后关闭当前的webview
              let ws = plus.webview.currentWebview();
              plus.webview.close(ws);
            }
          },
          error => {
   　　　　 this.$toast({
              position: "bottom",
              message:  error.message
            });
          }
        );
      });
    }
  }
};
</script>