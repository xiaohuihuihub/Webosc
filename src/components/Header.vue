<template>
  <el-container  @click="hidepanel">
      <el-main>
        <el-row :gutter="24" class="header-main md_header">
          <el-col :xs="1" :sm="1" :md="1" style="min-height: 1px"><div class="grid-content bg-purple">
          </div></el-col>
          <el-col :xs="2" :sm="2" :md="2">
            <div class="grid-content bg-purple logo">
                <router-link :to="{path: '/'}">
                  <img src="../assets/image/logo.png" alt="">
                </router-link>
                <router-link :to="{path: '/'}">
                  East
                </router-link>
            </div>
          </el-col>
          <el-col :xs="3" :sm="3" :md="3">
            <div class="grid-content bg-purple">
                {{ $t('message.token_trading') }}
            </div>
          </el-col>
          <el-col :xs="8"  :sm="8" :md="9" style="min-height: 1px">
            <div class="grid-content bg-purple" >
            </div>
          </el-col>
          <el-col :xs="10" :sm="10" :md="9" class="operation" v-if="items.token">
            <div class="grid-content bg-purple userIndex" >
              <div class="own">
                <span>
                 {{ $t('message.orders') }} <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
              </div>
              <div class="own"  @mouseover="show = true" @mouseout="show = false">
                 <span>
                 {{ $t('message.balances') }} <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <ul v-if="show" id="myPanel">
                  <li>
                    <router-link  :to="{path: '/Property'}">
                      {{$t('message.funds')}}
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="money" @mouseover="show2 = true" @mouseout="show2 = false" >
                <span class="own">
                 {{$t('message.center')}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <ul v-if="show2" id="myPanel2">
                  <li>
                    <router-link  :to="{path: '/account/accountSetting'}">
                      {{$t('message.settings')}}
                    </router-link>
                  </li>
                  <li>
                    <router-link  @click.native="logout()" to="/login/login">
                      {{$t('message.logout')}}
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="languange" @mouseover="show3 = true" @mouseout="show3 = false" >
                  <span>
                   <span class="langu" v-if="language === 'cn'">
                        简体中文
                  </span>
                  <span class="langu" v-else-if="language === 'en'">
                    English
                  </span>
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <ul v-if="show3" id="myPanel3">
                  <li>
                    <a @click="tabCn()">
                      简体中文
                    </a>
                  </li>
                  <li>
                    <a  @click="tabEn()">
                      English
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :xs="7" :sm="7" :md="7" v-else>
             <div class="grid-content bg-purple btn_login" style="float: right">
               <router-link to="/login/login">{{$t('message.log_in')}}</router-link>
               <router-link to="/login/reg"  class="active">{{$t('message.sign_up')}}</router-link>
              <div class="languange" @mouseover="show3 = true" @mouseout="show3 = false" >
                <span>
                   <span class="langu" v-if="language === 'cn'">
                        简体中文
                  </span>
                  <span class="langu" v-else-if="language === 'en'">
                    English
                  </span>
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <ul v-if="show3" id="myPanel3">
                  <li>
                    <a @click="tabCn()">
                      简体中文
                    </a>
                  </li>
                  <li>
                    <a  @click="tabEn()">
                      English
                    </a>
                  </li>
                </ul>
              </div>
            </div>
           </el-col>
        </el-row>
        <el-row :gutter="10" class="header-main sm_header" style="line-height: 42px">
          <el-col :xs="1" :sm="1" style="min-height: 1px"><div class="grid-content bg-purple">
          </div></el-col>
          <el-col :xs="4" :sm="4">
            <div class="grid-content bg-purple logo">
                <router-link :to="{path: '/'}">
                  <img src="../assets/image/logo.png" alt="">
                </router-link>
                <router-link :to="{path: '/'}">
                  East
                </router-link>
            </div>
          </el-col>
          <el-col :xs="19" :sm="19">
            <div class="grid-content bg-purple" style="display: flex;justify-content: flex-end">
              <div class="total" @mouseover="show4 = true" @mouseout="show4= false">
                 <span>
                  <i class="iconfont icon-nav1-copy"></i>
                </span>
                <ul v-if="show4" id="myPanel4">
                  <li>
                    <router-link  :to="{path: '/Property'}">
                      {{$t('message.funds')}}
                    </router-link>
                  </li>
                  <li>
                    <router-link  :to="{path: '/account/accountSetting'}">
                      {{$t('message.settings')}}
                    </router-link>
                  </li>
                  <li>
                    <router-link  @click.native="logout()" to="/login/login">
                      {{$t('message.logout')}}
                    </router-link>
                  </li>
                </ul>
              </div>

                <span style="padding:  0 10px">|</span>
                <div class="languange" @mouseover="show3 = true" @mouseout="show3 = false" >
                  <span>
                   <span class="langu" v-if="language === 'cn'">
                      简体中文
                    </span>
                    <span class="langu" v-else-if="language === 'en'">
                      English
                    </span>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <ul v-if="show3" id="myPanel3">
                    <li>
                      <a @click="tabCn()">
                        简体中文
                      </a>
                    </li>
                    <li>
                      <a  @click="tabEn()">
                        English
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
          </el-col>
        </el-row>
      </el-main>
  </el-container>
</template>
<script>
    import $ from "jquery"
    export default {
      name: "HeaderComponent",
      data() {
        return{
          headerActive: 0,
          show: false,
          show2: false,
          show3: false,
          show4: false,
          items: {
            token: ""
          },
          language: this.$i18n.locale
        }
      },
      mounted: function() {
        this.items.token = sessionStorage.getItem("token")
      },
      methods: {
        addClass: function (index) {
          this.headerActive = index
        },
        hidepanel: function (event) {
          if(!($("#mypanel").contains(event.target))) {
            this.show = false
          }
        },
        logout: function () {
          sessionStorage.clear()
        },
        tabCn: function() {
          this.$i18n.locale = 'cn'
          this.language = this.$i18n.locale
          this.show3 = false
        },
        tabEn: function() {
          this.$i18n.locale = 'en'
          this.language = this.$i18n.locale
          this.show3 = false
        }
      }
    }
</script>
<style scoped>
.el-main{
    background:#242933
}
.header-main{
  line-height: 42px;
  color: #fff;
  font-size: 14px;
}
.logo{
  width:100%;
  display:flex;
  justify-content:start;
  line-height: 34px;
  color: #fff;

}
.logo>span{
  display: inline-block;
  width: 15%;
  float: left;
  text-align: center;
}
.logo img{
  width: 30px;
  margin: 0 auto;
  float: left;
  margin-top: 7px;
}
.logo .h{
  padding-right: 20px;
}
.el-main{
  overflow: unset;
  padding: 10px;
}
.logo>a{
  color: #fff;
  padding-left: 10px;
  line-height: 42px;
}
.logo .mask{
  float: left;
}
.own{
  /*min-width: 144px;*/
  display: inline-block;
  /*float: right;*/
  text-align: center;
  cursor: pointer;
  color:#fff
}
.languange{
  cursor: pointer;
  text-align: center;
}
.money,.own,.languange,.total{
  position: relative;
  float: right;
}
#myPanel,#myPanel2,#myPanel3{
  width: 144px;
  position: absolute;
  /*right: 0;*/
  left: -30px;
  top: 20px;
  /*margin: auto;*/
  padding: 0;
  z-index: 999;
  background: rgb(50, 56, 69);
  border-radius: 5px;
  text-align: center;
}
#myPanel4{
  width: 100px;
  position: absolute;
  /*right: 0;*/
  left: -60px;
  top: 20px;
  /*margin: auto;*/
  padding: 0;
  z-index: 999;
  background: rgb(50, 56, 69);
  border-radius: 5px;
  text-align: center;
}
#myPanel>li,#myPanel2>li,#myPanel3>li{
  width: 120px;
  line-height: 40px;
  display: block;
  color: #fff;
  height: 40px;
}
#myPanel4>li{
  width: 100%;
  line-height: 40px;
  display: block;
  color: #fff;
  height: 40px;
}
#myPanel>li>a,#myPanel2>li>a,#myPanel3>li>a,#myPanel4>li>a {
  width: 100%;
  height: 100%;
  line-height: 40px;
  color: #fff;
  display: block;
}
.userIndex{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.btn_login{
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 42px;
  line-height: 42px;
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
  line-height: 32px;
  text-align: center;
  margin-top: 5px;
}
.languange{
  color:#fff;
  line-height: 42px;
  float: right;
  padding-right: 20px;
}
@media (min-width: 992px) {
  .md_header {
    display: block;
  }
  .sm_header {
    display: none;
  }
}
  @media (max-width: 992px) {
  .md_header {
    display: none;
  }
  .sm_header {
    display: block;
  }
  #myPanel,#myPanel2,#myPanel3{
  width: 100px;
}
#myPanel>li,#myPanel2>li,#myPanel3>li{
  width: 100%;
  line-height: 40px;
  display: block;
  color: #fff;
  height: 40px;
}
}
</style>
