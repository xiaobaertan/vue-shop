<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 用户头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 用户表单信息 -->
      <el-form ref="form" :model="form" label-width="0px" class="form_box">
        <el-form-item>
          <el-input prefix-icon="el-icon-user-solid" v-model="name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input  prefix-icon="el-icon-lock" v-model="password" show-password></el-input>
        </el-form-item>
        <el-form-item class="btns">
            <el-button type="primary">登录</el-button>
            <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            name: '小巴尔坦',
            password: 123
        }
    }
};
</script>
<style lang="less" scoped>
.login_container {
  //   background-color: #2b4b6b;
  background: linear-gradient(top, pink, skyblue);
  width: 100%;
  height: 100%;
  .login_box {
    background-color: #fff;
    width: 450px;
    height: 300px;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .avatar_box {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      border: 1px solid #eee;
      padding: 10px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 10px #ddd;
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #eee;
      }
    }
  }
}
.form_box {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.btns {
    display: flex;
    justify-content: flex-end;
}
</style>


