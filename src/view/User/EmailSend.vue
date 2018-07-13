<template>
    <div class="register">
      <!--main start-->
      <el-container>
        <el-main class="form">
          <el-form class="demo-ruleForm phone" id="form">
            <h3>{{$t('message.email_verification')}}</h3>
            <p class="main">
                {{message}}
               {{$t('message.check_spam')}}
            </p>
             <span class="title">
               <router-link to="/login/login">{{this.$t(message.resend)}}</router-link>
               <router-link to="/login/login">{{this.$t(message.log_in)}}</router-link>
             </span>
          </el-form>
        </el-main>
      </el-container>
      <!--main end-->
    </div>
</template>

<script>
  // import $ from 'jquery'
  // import {register} from "../api/api";
  export default {
    name: "Register",
    data: function () {
      return {
        message: "",
        type: ""
      }
    },
    mounted() {
      this.type = this.$route.query.type
      // let email = this.$route.query.email
      console.log(this.$route.query)
      if(this.type == "reset") {
        this.message = this.$t('message.email_sent') + "," + this.$t('message.click_link_activation')
      }else{
        this.message = this.$t('message.email_sent') + "," + this.$t('message.click_link_reset')
      }
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
    min-height: 200px;
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
    margin-top: 30px;
  }
  #form .title{
    float: right;
    line-height: 40px;
  }
  #form .main{
    /*text-align: center;*/
    line-height: 30px;
    display: block;
    font-size: 14px;
    padding: 0 20px;
  }
  .title{
    display: block;
    /*text-align: center;*/
    width: 100%;

  }
  .title>a{
    font-size: 14px;
    color: #5897F5;
    text-decoration: underline;
  }
</style>
