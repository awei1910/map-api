<template>
  <div>
    <el-row :gutter="20">
      <!-- 左侧车辆信息 -->
      <el-col :span="6">
        <el-input v-model="input" placeholder="请输入车牌号">
          <el-button
            @click="searchCar"
            slot="append"
            icon="el-icon-search"
          ></el-button>
        </el-input>
        <div
          @change="changeCar(item)"
          v-for="(item, index) in carList"
          :key="index"
        >
          <el-checkbox v-model="item.checked">{{ item.name }}</el-checkbox>
        </div>
      </el-col>
      <!-- 右侧地图 -->
      <el-col :span="18"><div id="container"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "demo2",
  data() {
    return {
      input: "", //搜索内容
      carList: [
        {
          id: 1,
          name: "新12345",
          checked: false,
        },
        {
          id: 2,
          name: "新11111",
          checked: false,
        },
        {
          id: 3,
          name: "新22222",
          checked: false,
        },
        {
          id: 4,
          name: "新33333",
          checked: false,
        },
      ],
      // 车辆信息及运动轨迹
      pointArr: [
        {
          123: { lng: "116.379341", lat: "39.938776" },
          124: { lng: "116.402625", lat: "39.943091" },
          125: { lng: "116.373807", lat: "39.953103" },
          126: { lng: "116.40011", lat: "39.958357" },
          127: { lng: "116.408518", lat: "39.958025" },
          128: { lng: "116.364537", lat: "39.943755" },
        },
        {
          123: { lng: "116.379628", lat: "39.935125" },
          124: { lng: "116.403487", lat: "39.94027" },
          125: { lng: "116.38509", lat: "39.955315" },
          126: { lng: "116.392924", lat: "39.958357" },
          127: { lng: "116.392924", lat: "39.957804" },
          128: { lng: "116.368993", lat: "39.944032" },
        },
        {
          123: { lng: "116.379341", lat: "39.938776" },
          124: { lng: "116.402625", lat: "39.943091" },
          125: { lng: "116.373807", lat: "39.953103" },
          126: { lng: "116.40011", lat: "39.958357" },
          127: { lng: "116.408518", lat: "39.958025" },
          128: { lng: "116.364537", lat: "39.943755" },
        },
      ],
    };
  },
  created() {
    // JS运行的时候页面还没有加载完成，所以JS代码找不到页面元素
    this.$nextTick(() => {
      this.getData();
    });
  },
  methods: {
    //搜索车辆
    searchCar() {
      console.log(this.input.trim());
    },
    // 选择车辆
    changeCar(item) {
      // 选中车辆信息
      if (item.checked) {
        console.log(item.name);
      } else {
        // 取消选中车辆（需要判断是不是取消最后一辆选中车辆）
      }
    },
    // 初始地图
    getData() {
      var nowPoint = {};
      var nowMarker = {};

      // 创建地图实例
      var map = new BMap.Map("container");
      // 创建中心点坐标
      var point = new BMap.Point(116.404, 39.915);
      // 初始化地图，设置中心点坐标和地图级别
      map.centerAndZoom(point, 15);
      
      // 初始化
      for (var n in this.pointArr[0]) {
        var myIcon = new BMap.Icon(
          "http://developer.baidu.com/map/jsdemo/img/car.png",
          new BMap.Size(52, 26)
        );
        nowPoint[n] = new BMap.Point(
          this.pointArr[0][n].lng,
          this.pointArr[0][n].lat
        );
        nowMarker[n] = new BMap.Marker(nowPoint[n], { icon: myIcon });
        map.addOverlay(nowMarker[n]);
      }
    },
  },
};
</script>

<style scoped>
#container {
  width: 90%;
  height: 500px;
}
</style>
