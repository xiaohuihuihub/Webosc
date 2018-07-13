<template>
    <div class="register">
      <!--main start-->
      <el-container>
        <el-main class="form">
          <el-form action="" id="form" class="demo-ruleForm phone">
            <h3>{{$t('message.account_activation')}}</h3>
            <p class="main">
                {{$t('message.account_number')}}{{$t('message.activated')}}, {{$t('message.login_trade')}}
            </p>
             <p class="title"> <router-link to="/login/login">{{$t('message.log_in')}}</router-link></p>
          </el-form>

        </el-main>
      </el-container>
      <!--main end-->
    </div>
</template>

<script>
  // import $ from 'jquery'
  import {activeUser} from "../../api/api";
  export default {
    name: "Register",
    data: function() {
      return {
        message: ""
      }
    },
    created: function () {
      let id = parseInt(this.$route.params.id)
      let code = this.$route.params.code
      let kwargs = {
        "user_id": id,
        "code": code
      }
      console.log(this.$route.params)
      console.log(this.$route.params.code)
      activeUser(kwargs).then(res => {
        console.log(res)
        if(res.code == 0) {
          this.message = this.$t('message.activated')
        }
      })
    }

  }
</script>

<style scoped>
  section{
    width: 100%;
    float: left;
  }
  .form{
    height: calc(100vh - 60px);
  }
  #form{
    max-width: 350px;
    min-height: 150px;
    background: #fff;
    margin:  0 auto;
    margin-top: 80px;
    border-radius: 4px;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.05), 0 7px 14px 0 rgba(54,54,77,.1);
    padding:20px 30px;
    font-size: 13px;
  }
  #form>h3{
    color: #5897F5;
    font-size: 16px;
  }
  #form .el-input{
    width: 100%;
    margin-top: 20px;
    font-size: 13px;
  }
  #form .el-button{
    width: 100%;
  }
  #form .main{
    text-align: left;
    line-height: 30px;
    display: block;
    font-size: 14px;
  }
  .title{
    display: block;
    text-align: left;
    width: 100%;
  }
  .title>a{
    font-size: 14px;
  }
</style>
