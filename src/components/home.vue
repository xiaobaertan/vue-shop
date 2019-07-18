<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/heima.png" alt />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏部分 -->
      <el-aside :width="isCollapse ? '64px':'200px'">
        <div class="toggle-button" @click="toggleCollapse">
          <i :class="isCollapse ? 'el-icon-s-unfold':'el-icon-s-fold'"></i>
        </div>
        <el-menu background-color="#545c64" text-color="#fff" active-text-color="#409EFF" class="el-menu-vertical-demo" unique-opened :collapse="isCollapse" :collapse-transition="false" router :default-active='activePath'>
          <!-- 一级标题 -->
          <el-submenu :key="item.id" :index="item.id + ''" v-for="item in menuList">
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级标题 -->
            <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id" @click="saveNavState('/' + subItem.path)">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 页面部分 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
   data() {
    return {
      menuList: [],
      iconsObj: {
        '125': 'el-icon-user-solid',
        '103': 'el-icon-s-tools',
        '101': 'el-icon-goods',
        '102': 'el-icon-s-order',
        '145': 'el-icon-s-marketing'
      },
      isCollapse: false,
      activePath: ''
    }
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    async getMenuList() {
      const {data: res} = await this.$http.get('menus')
      if(res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menuList = res.data
    },
    toggleCollapse(){
      this.isCollapse = !this.isCollapse
    },
    saveNavState(active) {
      window.sessionStorage.setItem('active', active)
      this.activePath = active
    }
  },
  created() {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('active')
    }
}
</script>
<style lang="less" scoped>
  .home-container {
    height: 100%;
  }
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;
    > div {
      display: flex;
      align-items: center;
      span {
        margin-left: 15px;
      }
    }
  }
  .el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
  }
  .el-main {
  background-color: #eaedf1;
}
.iconfont {
  margin-right: 10px;
}
// .toggle-button {
//   background-color: #4A5064;
//   font-size: 10px;
//   line-height: 24px;
//   color: #fff;
//   text-align: center;
//   letter-spacing: 0.2em;
//   cursor: pointer;
// }
.toggle-button {
  background-color: #4A5064;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  padding: 4px 0;
  cursor: pointer;
}
</style>


