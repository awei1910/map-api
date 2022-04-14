<template>
  <div class="app-wrapper">
    <div class="main">
      <div class="nav">
        <el-menu
          :default-active="activeIndex"
          mode="vertical"
          router
          @select="handleSelect"
        >
          <template v-for="(item,i) in routers">
            <el-menu-item
              :key="item.name"
              :index="item.path"
              v-show="!item.children"
            >
              {{ item.title }}
            </el-menu-item>
            <el-submenu v-show="item.children" :key="i" :index="item.path">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="(item1, index) in item.children"
                  :key="index"
                  :index="item.path"
                  >{{ item1.title }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </template>
        </el-menu>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import routers from "@/assets/routers";
export default {
  name: "Layout",
  data() {
    return {
      activeIndex: "/demo1",
      routers,
      list:[1,2]
    };
  },
  created() {
    // this.activeIndex = this.$route.path
    console.log(this.$route);
  },
  methods: {
    handleSelect() {
      // console.log(111111);
    },
    click1(){
      this.list.push(1)
    },
    handleOpen() {},
  },
  watch:{
    'list.length'(newName, oldName){
      console.log(oldName);
    }

  }
};
</script>

<style scoped>
.main {
  display: flex;
}
.nav {
  width: 200px;
}
.content {
  flex: 1;
}
</style>
