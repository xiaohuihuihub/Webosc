<template>
    <div class="register">
      <!--main start-->
      <el-container>
        <el-main class="form">
          <el-form action="" id="form" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="demo-ruleForm phone">
            <h3>{{$t('message.forgot_password')}}</h3>
            <el-form-item prop="Mail">
               <el-input
              :placeholder="$t('message.email')"
               v-model="ruleForm2.Mail" id="email"
              clearable>
            </el-input>
            </el-form-item>
            <el-button  type="primary" @click="submitForm('ruleForm2')" >
              {{$t('message.send_email')}}
            </el-button>
          </el-form>
        </el-main>
      </el-container>
      <!--main end-->
    </div>
</template>

<script>
  import $ from 'jquery'
  import {sendEmail} from "../../api/api";
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
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.EmailReset()
          } else {
            // this.$message.error(this.$t('message.register_error'));
            return false;
          }
        });
      },
      EmailReset: function (data) {
        let that = this
        let email = $("#email").val()
        let kwargs = {
          "email": email,
          "action": 'reset_pass'
        }
        //          'email': 'wangsuyi640@126.com',
   //          'action': 'reset_pass'
        console.log(kwargs)
        sendEmail(kwargs).then(response => {
          console.log(response)
          if(response.code == 0) {
            that.$router.push({path: '/login/EmailVerify', query: {type: 'reset', email: email}})
            // that.message.success("注册成功，请激活账户")
          }else{
            that.message.error(this.$t('message.send_failed'))
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
    text-align: center;
    width: 100%;
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
