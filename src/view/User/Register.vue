<template>
    <div class="register">
      <!--main start-->
      <el-container>
        <el-main class="form">
          <el-form action="" id="form" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="demo-ruleForm phone">
            <h3>{{$t('message.sign_up')}}</h3>
            <el-form-item prop="Mail">
               <el-input
              :placeholder="$t('message.email')"
               v-model="ruleForm2.Mail" id="email"
              clearable>
            </el-input>
            </el-form-item>
           <el-form-item prop="password" >
             <el-input
              :placeholder="$t('message.password_validate')"
               v-model="ruleForm2.password" id="password"
              clearable type="password">
            </el-input>
           </el-form-item>
            <el-form-item prop="confirm_password">
              <el-input
              :placeholder="$t('message.confirm_password')"
               v-model="ruleForm2.confirm_password"
              clearable type="password">
            </el-input>
            </el-form-item>
            <el-button  type="primary" @click="submitForm('ruleForm2')" >
              {{$t('message.sign_up')}}
            </el-button>
             <span class="title">{{$t('message.already_member')}} ? <router-link to="/login/login">{{$t('message.log_in')}}</router-link></span>
          </el-form>

        </el-main>
      </el-container>
      <!--main end-->
    </div>
</template>

<script>
  import $ from 'jquery'
  import {register} from "../../api/api";
  export default {
    name: "Register",
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
        }
        var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
        setTimeout(() => {
          if(reg.test(value) && value.length >= 6) {
            callback();
          }else {
            callback(new Error(this.$t('message.password_validate')))
          }
        })
      };
      var confirmPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error(this.$t('message.confirm_password')));
        } else if (value !== this.ruleForm2.password) {
          callback(new Error(this.$t('message.Passwords_are_not_the_same')));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          Mail: '',
          password: '',
          confirm_password: ''
        },
        rules2: {
          Mail: [
              { validator: checkMail, trigger: 'blur' }
          ],
          password: [
              { validator: checkPassword, trigger: 'blur' }
          ],
          confirm_password: [
              { validator: confirmPassword, trigger: 'blur' }
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
            this.register()
          } else {
            this.$message.error('register error');
            return false;
          }
        });
      },
      register: function (data) {
        let that = this
        let email = $("#email").val()
        let password = $("#password").val()

        let kwargs = {
          "email": email,
          "password": password
        }
        register(kwargs).then(response => {
          console.log(response)
          if(response.code == 0) {
            // that.$message.success(this.$t('message.register_success'))
            that.$router.push({path: '/login/EmailVerify'})
            // that.message.success("注册成功，请激活账户")
          }else if(response.code == 2012) {
            that.$message.error(this.$t('message.The_email_address_is_registered'))
          }else{
            that.$message.error(this.$t('message.register_error'))
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
  /*.form{*/
    /*height: calc(100vh - 60px);*/
  /*}*/
  #form{
    max-width: 400px;
    min-height: 420px;
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
    font-size: 20px;
  }
  #form .el-input{
    width: 100%;
    margin-top: 10px;
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
</style>
