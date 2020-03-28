<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{this.$route.params.id}}</span>
      <el-button @click="dialogVisible = true" style="float: right; padding: 3px 0" type="text">Add</el-button>
      <el-dialog title="请输入名称" :visible.sync="dialogVisible" width="30%">
        <el-input v-model="name" placeholder="请输入 Name"></el-input>
        <el-input v-model="url" placeholder="请输入 Url"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addContent(name,url)">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <template v-for="item in content">
      <div :key="item.index" class="text item">{{ item.name }}</div>
    </template>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      url: '',
      dialogVisible: false,
    };
  },
  computed: {
    content: function() {
      var menuId = this.$route.params.id;
      return this.$store.state.content.filter(item => item['menuId'] == menuId);
    },
  },
  methods: {
    addContent: function(name, url) {
      var index = this.$store.state.content.length;
      var menuId = this.$route.params.id;

      this.$store.dispatch('addContent', {
        index: index + 1,
        payload: { menuId: menuId, name: name, url: url },
      });
      this.dialogVisible = false;
    },
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
</style>
