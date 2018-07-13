<template>
    <div class="hello">
        <p>{{$t('message.bind_ga')}}</p>
        <span class="division mar-t-16"></span>
        <ul class="input-box">
            <li class="input-item google-qr-item">
                <p class="input-title">{{$t('message.Scan_QR_code')}}</p>
                <div class="google-qr-box">
                    <div class="qr-code">
                        <img height="120" width="120" style="height: 120px; width: 120px;" src="../../assets/image/google.png"></img>
                    </div>
                </div>
              <span>

              </span>
            </li>
            <li class="input-item " data-error="false">
                <p class="input-title" @click="copy()">{{$t('message.keys')}}</p>
                <input type="tel" maxlength="6" class="input confirm-password" id="key" rel="google" disabled v-model="ga_key" >
                <span class="error-tips"></span>
            </li>
            <li class="input-item " data-error="false">
                <p class="input-title">{{$t('message.ga_code')}}</p>
                <input type="tel" maxlength="6" class="input confirm-password" value="" rel="google"id="gaCode" :placeholder="$t('message.enter_ga_code')" style="padding-left: 10px">
                <span class="error-tips"></span>
            </li>

            <li class="input-item error">
                <span class="error-tips"></span>
            </li>
            <li class="input-item btn-item">
                <span class="input-title"></span>
                 <el-button type="primary" class="confirm-btn" @click="bindKey()">{{$t('message.bind')}}</el-button>
                <!--<button class="confirm-btn " disabled="">确认</button>-->
            </li>
        </ul>
    </div>
</template>

<script>
  import $ from 'jquery'
  import {getKey, bindKey} from "../../api/api"
  export default {
    name: 'HelloWorld',
    data() {
      return {
        ga_key: "",
        user_id: parseInt(sessionStorage.getItem('userId'))
      }
    },
    mounted() {
      let kwargs = {user_id: this.user_id}
      getKey(kwargs).then(response => {
        if(response.code == 0) {
          this.ga_key = response.data.ga_key
        }
      })
    },
    methods: {
      copy: function () {
        $("#key").select();
        document.execCommand("copy");
        alert('复制成功！');
      },
      bindKey: function () {
        let kwargs = {
          user_id: this.user_id,
          ga_code: $("#gaCode").val()
        }
        bindKey(kwargs).then(response => {
          if(response.code == 0) {
            this.$message.success("绑定成功")
            this.$router.push({path: "/account/accountSetting"})
          }else{
            this.$message.success("验证码错误")
          }
        })
      }
    }
  }
</script>
<style scoped>
    ul,li{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    input {
        background: none;
        border: none;
        outline: none;
    }

    .hello {
        width: 960px;
        flex-direction: column;
        align-items: flex-start;
        margin: 50px auto;
    }

    .hello p {
        height: 36px;
        font-size: 18px;
        line-height: 1.5;
        text-align: left;
        color: rgba(0, 0, 0, .85);
        font-weight: 600;
        margin-bottom: 10px;
    }

    .division {
        width: 100%;
        height: 1px;
        background-color: #e9e9e9;
        display: inline-block;
        vertical-align: top;
    }

    .input-box {
        padding-top: 40px;
    }
    .input-box li{
        margin-top: 16px;
    }
    .input-box .input-item {
        display: flex;
        padding-right: 20px;
        position: relative;
        align-items: flex-start;
    }
   .input-item .input-title {
        width: 160px;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        color: rgba(0,0,0,.65);
        display: inline-block;
        vertical-align: top;
        margin-right: 8px;
       text-align: left;
    }
    .input-item .google-qr-box {
        display: inline-block;
        vertical-align: top;
        width: 358px;
        height: 152px;
        line-height: 152px;
        border-radius: 4px;
        /*border: 1px solid #e9e9e9;*/
    }
    .input-item .google-qr-box .qr-code {
        margin: 16px;
        width: 120px;
        height: 120px;
        display: inline-block;
        vertical-align: top;
        background-color: #fff;
    }
   .input-item .google-qr-box .google-text {
        width: 176px;
        font-size: 16px;
        text-align: left;
        color: rgba(0,0,0,.85);
        display: inline-block;
        vertical-align: top;
        margin: 0 8px;
    }
    .input-item .input-title {
        width: 160px;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        color: rgba(0,0,0,.65);
        display: inline-block;
        vertical-align: top;
        margin: 0;
    }
     .input-item .input {
        width: 360px;
        height: 36px;
        padding: 10px 0 10px 5px;
        line-height: 16px;
        border-radius: 4px;
        border: 1px solid #d9d9d9;
        display: inline-block;
        vertical-align: top;
        box-sizing: border-box;
    }
    .input-item .input:hover{
        border: 1px solid #5795f1;
    }
    .input-item .error-tips {
        width: 100%;
        font-size: 12px;
        line-height: 1.5;
        text-align: left;
        color: transparent;
        vertical-align: top;
        display: none;
        padding-left: 168px;
        box-sizing: border-box;
        margin-top: 4px;
    }
    .input-item .check-code-input {
        width: 250px;
    }
    .send-button {
        height: 36px;
        line-height: 36px;
        width: 102px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        margin-left: 8px;
        text-align: center;
        box-sizing: border-box;
        border: 1px solid #5795f1;
        color: #5795f1;
        cursor: pointer;
        vertical-align: top;
    }
    .confirm-btn{
        width: 360px;
    }
    .tab-verify-code {
        margin-left: 168px;
        margin-top: 5px;
        font-size: 12px;
    }
</style>
