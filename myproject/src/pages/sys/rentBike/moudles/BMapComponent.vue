<template>
  <div id="mapId" v-bind:style="mapStyle"></div>
</template>
<script>
import loadBMap from '../js/loadBMap.js'
export default {
  data() {
    return {
      myMap: null,
      longitude:'',
      latitude:'',
      mapStyle:{
         width:'100%',
         height:window.innerHeight-95+'px'
    }
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      loadBMap('3mn83YpfI9VdPSZg1DfuK7lg0UqRljwt')
        .then(() => {
          // 百度地图API功能W
          this.myMap = new BMap.Map("mapId") // 创建Map实例
          var geolocation = new BMap.Geolocation()
          geolocation.getCurrentPosition((res) =>{
              if(res.point){
                this.longitude = res.longitude
                this.latitude = res.latitude
                let markers = new BMap.Marker(res.point)
                let content = '<table>' 
                    +'<tr><td> 地址：'+ res.address.province + res.address.city + res.address.district + res.address.street +'</td></tr>'
                    // toFixed(6) 将数据四舍五入保存为6位小数
                    +'<tr><td> 经纬度：('+ res.point.lng.toFixed(6) + ' , ' +res.point.lat.toFixed(6) +')</td></tr>'
                +'</table>';
                markers.addEventListener("click", function (event) {
                    var infoWindows = new BMap.InfoWindow(content)
                    this.openInfoWindow(infoWindows, res.point);//参数：窗口、点  根据点击的点出现对应的窗口
                })
                this.myMap.addOverlay(markers)
                this.myMap.centerAndZoom(res.point, 15) // 初始化地图,设置中心点坐标和地图级别
              }
          })
          //添加地图类型控件
          this.myMap.addControl(new BMap.GeolocationControl())//定位控件
          this.myMap.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
        })
        .catch(err => {
          console.log('地图加载失败')
        })
    },
    markerFun(points) {
        // 创建信息窗口对象 
        let infoWindow = new BMap.InfoWindow("World", {
            width: 25,     // 信息窗口宽度   
            height: 10,     // 信息窗口高度   
            title: "Hello" + i  // 信息窗口标题  
        });
        let markers = new BMap.Marker(points);
        this.myMap.addOverlay(markers);  // 将标注添加到地图中
        // markers.setLabel(label);  // 将data中的name添加到地图中
        // 标注的点击事件
        markers.addEventListener("click", function (event) {
            map.openInfoWindow(infoWindows, points);//参数：窗口、点  根据点击的点出现对应的窗口
        });
    },
  }
}
</script>
<style scoped>
#mapId{
  position: absolute;
}
</style>
