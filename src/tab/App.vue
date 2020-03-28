<template>
  <div class="content">
    <el-container>
      <el-header>
        <el-row type="flex" justify="end">
          <el-button type="primary" @click="dialogVisible = true">add</el-button>
          <el-button type="primary" @click="dialogVisible = true">pull</el-button>
          <el-button type="primary" @click="dialogVisible = true">push</el-button>
        </el-row>
        <el-dialog title="请输入名称" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-header>
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
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      input: '',
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
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