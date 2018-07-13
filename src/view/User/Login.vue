<template>
    <div class="register">
      <!--main start-->
      <el-container>
        <el-main class="form">
          <el-form action="" id="form" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="demo-ruleForm phone">
            <span class="tit">{{$t('message.log_in')}}</span>
            <el-form-item prop="Mail">
               <el-input
              :placeholder="$t('message.email')"
               v-model="ruleForm2.Mail" id="email"  style="margin-top: 25px"
              clearable>
            </el-input>
            </el-form-item>
           <el-form-item prop="password">
             <el-input
              :placeholder="$t('message.password')"
               v-model="ruleForm2.password" id="password"
              clearable type="password">
            </el-input>
           </el-form-item>
            <el-button  type="primary" @click="submitForm('ruleForm2')" >
              {{$t('message.log_in')}}
            </el-button>
            <span class="forget">
              <router-link to="/login/reset">{{$t('message.forgot_password')}}</router-link>
            </span>
             <span class="title">{{$t('message.notaccount')}}? <router-link to="/login/reg">{{$t('message.sign_up')}}</router-link></span>
          </el-form>

        </el-main>
      </el-container>
      <!--main end-->
    </div>
</template>

<script>
  import $ from 'jquery'
  import HeaderComponent from '../../components/Header'
  import {login} from "../../api/api";
  export default {
    name: "Register",
    components: {HeaderComponent},
    data() {
      var checkMail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error(this.$t('message.email')));
        }
        setTimeout(() => {
          if (!value.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)) {
            callback(new Error(this.$t('message.format')))
          } else {
            callback();
          }
        }, 1000);
      };
      var checkPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error(this.$t('message.password')));
        }else{
          callback();
        }
      };
      return {
        ruleForm2: {
          Mail: '',
          password: ''
        },
        rules2: {
          Mail: [
              { validator: checkMail, trigger: 'blur' }
          ],
          password: [
              { validator: checkPassword, trigger: 'blur' }
          ]
        },
        code: 0,
        Status: true,
        count: 60,
        timer: null,
        active: 0
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login()
          } else {
            return false;
          }
        });
      },
      login: function (data) {
        let that = this
        let email = $("#email").val()
        let password = $("#password").val()
        let kwargs = {
          "email": email,
          "password": password
        }
        login(kwargs).then(response => {
          console.log(response)
          if(response.code == 0) {
            that.$message.success("success")
            sessionStorage.token = response.data.token
            sessionStorage.userId = response.data.user_id
            sessionStorage.email = response.data.user.email
            sessionStorage.is_bind_ga = response.data.user.is_bind_ga
            that.$router.push({ path: "/" })
          }else{
            that.$message.error(this.$t('message.the_email_or_password_is_incorrect'))
          }
        })
      }
    },

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
    max-width: 400px;
    min-height: 350px;
    background: #fff;
    margin:  0 auto;
    margin-top: 80px;
    border-radius: 4px;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.05), 0 7px 14px 0 rgba(54,54,77,.1);
    padding:20px 30px;
    font-size: 13px;
  }
  #form .tit{
    color: #5897F5;
    font-size: 20px;
    line-height: 60px;
  }
  #form .el-input{
    width: 100%;
    margin-top: 16px;
    font-size: 13px;
  }
  #form #email{
    margin-top: 20px;
  }
  #form .el-button{
    width: 100%;
    margin-top: 20px;
  }
  #form .title{
    float: right;
    line-height: 40px;
  }
  #form .forget{
    line-height: 40px;
  }
</style>
