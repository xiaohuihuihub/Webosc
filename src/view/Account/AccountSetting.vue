<template>
  <div class="account">

    <el-container>
      <el-main>
         <el-row :gutter="24">
          <el-col :span="3" style="height: 1px;"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple">
              <div class="tab-bar">
                <span>
                  {{$t('message.settings')}}
                </span>
              </div>
            </div>
          </el-col>
          <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="24" style="margin-top: 20px">
           <el-col :span="3"  style="height: 1px;"><div class="grid-content bg-purple"></div></el-col>
           <el-col :span="18">
              <el-tabs v-model="activeName">
                  <el-tab-pane name="0" :label="$t('message.basic_information')">
                    <el-row :gutter="24" class="list">
                      <el-col :span="3">
                        {{$t('message.Account')}}:
                      </el-col>
                      <el-col :span="19">
                        {{this.user}}
                        <!--2209195052@qq.com-->
                      </el-col>
                    </el-row>
                    <el-row :gutter="24" class="list">
                      <el-col :span="3">
                        {{$t('message.google_auth')}}:
                      </el-col>
                      <el-col :span="19">
                        {{$t('message.set_google_authenticator')}}
                      </el-col>
                      <el-col :span="2">
                        <router-link to="/account/bindGaKey" v-if="isBindGa == 0">
                           {{$t('message.bind')}}
                        </router-link>
                         <router-link  to="/account/UnbindGaKey" v-else-if="isBindGa == 1">
                           {{$t('message.unbind')}}
                        </router-link>
                      </el-col>
                    </el-row>
                    <el-row :gutter="24" class="list">
                      <el-col :span="3">
                        {{$t('message.notification')}}:
                      </el-col>
                      <el-col :span="19">
                        {{$t('message.sensitive_operations')}}
                      </el-col>
                      <el-col :span="2">
                        {{$t('message.bind')}}
                      </el-col>
                    </el-row>
                    <el-row :gutter="24" class="list">
                      <el-col :span="3">
                        {{$t('message.login_password')}}:
                      </el-col>
                      <el-col :span="19">
                        {{$t('message.changing_password')}}
                      </el-col>
                      <el-col :span="2">
                        <router-link to="/">
                          {{$t('message.change')}}
                        </router-link>
                      </el-col>
                    </el-row>
                  </el-tab-pane>
                  <el-tab-pane name="1" :label="$t('message.security_settings')" ></el-tab-pane>
              </el-tabs>
           </el-col>
         <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
 import HeaderComponent from "../../components/Header"
 export default {
   name: "Detail",
   data() {
     return {
       tableData: [{
         id: 1,
         currency: 'btc',
         enable: '0.00000000',
         frozen: '0.00000000',
         valuation: '0.00000000',
       }, {
         id: 2,
         currency: 'eth',
         enable: '0.00000000',
         frozen: '0.00000000',
         valuation: '0.00000000',
       }, {
         id: 3,
         currency: 'USDT',
         enable: '0.00000000',
         frozen: '0.00000000',
         valuation: '0.00000000',
       }],
       user: "",
       activeName: "",
       isBindGa: ""
     }
   },
   mounted() {
     this.user = sessionStorage.getItem('email')
     this.isBindGa = sessionStorage.getItem('is_bind_ga')
     console.log(this.isBindGa)
   },
   components: {
     HeaderComponent
   }
 }
</script>
<style scoped>
.account{
  font-size: 14px;
}
.list{
    border-bottom: 1px solid rgba(0,0,0,.05);
  line-height: 50px;
}
</style>
