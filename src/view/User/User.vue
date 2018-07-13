<template>
    <div class="register">
      <!--header start-->
      <header-component></header-component>
      <!--header end-->
      <!--main start-->
      <router-view>

      </router-view>
      <!--main end-->
    </div>
</template>

<script>
  import HeaderComponent from "../../components/Header"
  export default {
    name: "user",
    components: {
      HeaderComponent
    },

  }
</script>

<style scoped>
  .register{
    width: 100%;
    height: 100%;
    background: #181f2e;
    font-size: 15px;
  }
  header{
    color:#fff;
    line-height: 60px;
    border-bottom: 1px solid #242933;
  }
  .main{
    display: flex;
    justify-content: space-between;
  }
  section{
    width: 100%;
    float: left;
  }
  .main>a{
    padding-left: 10px;
    color:#fff;
  }
  .btn_login{
    display: flex;
    justify-content: space-around;
  }
  .btn_login>a{
    color:#fff;
    font-size: 14px;
  }
  .btn_login .active{
    width: 70px;
    height: 32px;
    border-radius: 30px;
    background: #5897F5;
    margin-top: 14px;
    line-height: 32px;
    text-align: center;
  }
</style>
