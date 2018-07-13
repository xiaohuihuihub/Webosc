<template>
    <div class="register">
      <!--main start-->
      <el-container>
        <el-main class="form">
          <el-form action="" id="form" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="demo-ruleForm phone">
            <span>{{$t('message.reset_password')}}</span>
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
              {{$t('message.confirm')}}
            </el-button>
          </el-form>

        </el-main>
      </el-container>
      <!--main end-->
    </div>
</template>

<script>
  import $ from 'jquery'
  import {resetPassword} from "../../api/api";
  export default {
    name: "Register",
    data() {
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
          password: '',
          confirm_password: ''
        },
        rules2: {
          password: [
              { validator: checkPassword, trigger: 'blur' }
          ],
          confirm_password: [
              { validator: confirmPassword, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.register()
          } else {
            return false;
          }
        });
      },
      register: function (data) {
        let that = this
        let userId = parseInt(this.$route.params.id)
        let code = this.$route.params.code
        let password = $("#password").val()
        let kwargs = {
          user_id: userId,
          code: code,
          password: password
        }
        resetPassword(kwargs).then(response => {
          console.log(response)
          if(response.code == 0) {
            that.$message.success(this.$t('message.reset_password') + this.$t('message.success'))
            that.$router.push({path: '/login/login'})
          }else{
            that.$message.error(this.$t('message.reset_password') + this.$t('message.error'))
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
    min-height: 320px;
    background: #fff;
    margin:  0 auto;
    margin-top: 80px;
    border-radius: 4px;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.05), 0 7px 14px 0 rgba(54,54,77,.1);
    padding:20px 30px;
    font-size: 13px;
  }
  #form>span{
    color: #5897F5;
    font-size: 20px;
    line-height: 60px;
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
