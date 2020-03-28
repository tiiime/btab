<template>
  <div class="content">
    <el-container>
      <el-aside>
        <el-menu :router="true" default-active="activeLink" class="el-menu-vertical-demo">
          <el-menu-item index="/item/1">
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-menu-item index="/item/2">
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="/item/3">
            <span slot="title">导航三</span>
          </el-menu-item>x
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.activeLink = to.path;
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.activeLink = to.path;
    next();
  },
};
</script>

<style>
.content,
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
</style>