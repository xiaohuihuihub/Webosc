<!--suppress ALL -->
<template>
  <div class="property">
    <Header-component></Header-component>
    <el-container>
      <el-main>
         <el-row :gutter="24" class="pro_header">
          <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple">
              <div class="tab-bar">
                <span>
                  资产管理
                </span>
              </div>
            </div>
            <div class="grid-content bg-purple">
              <p style="text-align: right;line-height: 30px;font-weight: 600">
                {{$t('message.estimated_value')}} ≈ 0.00000000 BTC / 0.00USD
              </p>
            </div>
          </el-col>
          <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row class="pro_title">
          <el-col :sm="3" :md="3" style="height: 1px">
          </el-col>
          <el-col :sm="3">{{$t('message.Coin')}}</el-col>
          <el-col :sm="3">{{$t('message.balance')}}</el-col>
          <el-col :sm="3">{{$t('message.available')}}</el-col>
          <el-col :sm="3">{{$t('message.frozen')}}</el-col>
          <el-col :sm="3">{{$t('message.value')}}</el-col>
          <el-col :sm="3">{{$t('message.operation')}}</el-col>
          <el-col :sm="3"></el-col>
        </el-row>
        <div v-for="(item,index) in tableData" :key="index">
        <el-row class="pro_title" >
          <el-col :sm="3" :md="3" style="height: 1px"></el-col>
          <el-col :sm="3">
            {{item.currency}}
          </el-col>
          <el-col :sm="3">
            0.00000000
          </el-col>
          <el-col :sm="3">
            0.00000000
          </el-col>
          <el-col :sm="3">
            0.00000000
          </el-col>
          <el-col :sm="3">
            0.00000000/$0.00
          </el-col>
          <el-col :sm="3">
            <span @click="top_up(item.id)" class="pay">{{$t('message.deposit')}}</span>
            <span @click="withdraw(item.id)" class="withdraw">{{$t('message.withdrawal')}}</span>
          </el-col>
          <el-col :sm="3"></el-col>
         </el-row>
          <!--Top Up Start-->
          <el-row v-if="top_active && (index == active)">
            <el-col :sm="3" :md="3" style="height: 1px"></el-col>
            <el-col :sm="18">
              <div class="topUp">
                  <p>{{item.currency}} {{$t('message.deposit')}} {{$t('message.address')}}</p>
                  <el-input class="input_top" :value="adddress" :disabled="true" id="address_topup"></el-input>
              </div>
            </el-col>
            <el-col :sm="3"></el-col>
          </el-row>
          <!--Top Up End-->
          <!--Withdraw Start-->
          <el-row v-if="withdraw_active && (index == active)">
            <el-col :sm="3" :md="3" style="height: 1px"></el-col>
            <el-col :sm="18">
              <div class="with_draw">
                  <el-form>
                    <el-form-item :label="item.currency + ' ' + $t('message.withdrawal') + ' ' + $t('message.address')">
                      <el-input  :placeholder="item.currency + ' ' + $t('message.withdrawal') + ' ' + $t('message.address')" id="address"></el-input>
                    </el-form-item>
                    <el-form-item :label="$t('message.withdrawal') + ' ' + $t('message.number')">
                      <el-input :placeholder="$t('message.withdrawal') + ' ' + $t('message.number')" id="amount"></el-input>
                    </el-form-item>
                    <el-form-item :label="$t('message.transaction_fee')">
                      <el-input :placeholder="$t('message.transaction_fee')"></el-input>
                    </el-form-item>
                    <el-form-item :label="$t('message.ga_code')">
                      <el-input :placeholder="$t('message.ga_code')" id="ga_code"></el-input>
                    </el-form-item>
                    <el-button type="primary" @click="withdrawSubmit(index)">{{$t('message.submit')}}</el-button>
                  </el-form>
              </div>
            </el-col>
            <el-col :sm="3"></el-col>
          </el-row>
          <!--Withdraw End-->
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script >
  import $ from "jquery"
  import HeaderComponent from "../../components/Header"
  import {getWallet, createWallet, withdraw} from "../../api/api"
  export default {
    name: "Property",
    data() {
      return {
        tableData: [{
          id: 0,
          currency: 'btc',
          enable: '0.00000000',
          frozen: '0.00000000',
          valuation: '0.00000000',
          type: "",
        }, {
          id: 1,
          currency: 'eth',
          enable: '0.00000000',
          frozen: '0.00000000',
          valuation: '0.00000000',
          type: "",
        }],
        top_active: false,
        withdraw_active: false,
        active: "",
        adddress: "",
        userId: parseInt(sessionStorage.getItem('userId'))

      }
    },
    components: {
      HeaderComponent
    },
    methods: {
      top_up: function (index) {
        if(this.withdraw_active) {
          if(this.withdraw_active && this.active != index) {
            this.top_active = true
            this.withdraw_active = !this.withdraw_active
          }else{
            this.top_active = !this.top_active
            this.withdraw_active = !this.withdraw_active
          }
        }else if(this.top_active && this.active != index) {
          this.top_active = true
        }else{
          this.top_active = !this.top_active
        }
        this.active = index
        let currencyName = this.tableData[index].currency
        let userId = this.userId
        let kwargs = {
          user_id: userId,
          currency_name: currencyName
        }
        getWallet(kwargs).then(response => {
          if(response.code == 0) {
            this.address = response.data.wallet_ref.address
            $("#address_topup").val(this.address)
          }else if(response.code == 3100) {
            createWallet(kwargs).then(res => {
              if(res.code == 0) {
                this.address = res.data.address
                $("#address_topup").val(this.address)
              }else if(res.code == 2020) {
                this.$message.error('bind ga')
              }else{
                this.$message.error("create error")
              }
            })
          }
        })
      },
      withdraw: function (index) {
        if(this.top_active) {
          if(this.top_active && this.active != index) {
            this.withdraw_active = true
            this.top_active = false
          }else{
            this.withdraw_active = !this.withdraw_active
            this.top_active = !this.top_active
          }
        }else if(this.withdraw_active && this.active != index) {
          this.withdraw_active = true
        }else{
          this.withdraw_active = !this.withdraw_active
        }
        this.active = index
      },
      withdrawSubmit: function (index) {
        let currencyName = this.tableData[index].currency
        let toAddr = $("#address").val()
        let amount = $("#amount").val()
        let gaCode = $("#ga_code").val()
        let kwargs = {
          user_id: this.userId,
          currency_name: currencyName,
          to_addr: toAddr,
          amount: amount,
          ga_code: gaCode
        }
        withdraw(kwargs).then(response => {
          if(response.code == 0) {
            this.$message.success('withdraw success')
          }else if(response.code == 2021) {
            this.$message.error(this.$t('message.captcha_code'))
          }else if(response.code == 2200) {
            this.$message.error(this.$t('message.asset_not_exist'))
          }else{
            this.$message.error('withdraw error')
          }
        })
      }
    }
  }
</script>
<style>
.property{
  width: 100%;
  overflow: hidden;
}
.tab-bar{
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0,0,0,.05);
  font-weight: 600;
}
.pro_header{
  margin-bottom: 10px;
}
.my-balance{
  float: right;
  font-weight: normal;
  font-size: 14px;
}
.bg-purple{
  min-height: 1px;
}
.el-table .cell{
  font-size: 13px;
}
.el-table th>.cell span{
  color: #000;
}
.el-table th>.cell {
  font-weight: 500;
  font-size: 13px;
}
.header{
  line-height: 60px;
  margin-top: 20px;
}
.el-header>span{
  display: inline-block;
  line-height: 60px;
  height: 100%;
  float: right;
}
.pro_title{
  font-size: 13px;
  color: #616161;
}
.pay-addr{
  width:100%;
}
.click{
  width: 120px;
  font-size: 12px;
  margin-left: 20px;
}
.el-table__expanded-cell[class*=cell] {
  padding: 10px;
}
.el-input.is-disabled .el-input__inner {
  background-color: #fff;
  border-color: #e4e7ed;
  color: #616161;
  /*cursor: not-allowed;*/
}
.pro_title{
  line-height: 40px;
}
.pro_title .el-col{
  text-align: center;
}
.el-table__expand-icon {
  display: none;
}
#top_up,#withdraw{
  color:#4F84C8;
  cursor: pointer;
}
.property_main{
  text-align: center;
  line-height: 50px;
}
.topUp{
  height: 150px;
  background: #F5F7FA;
  padding-left:15%;
  padding-top: 20px;
}
.with_draw{
  /*height: 250px;*/
  background: #F5F7FA;
  /*padding-left:8%;*/
  padding-top: 30px;
  padding-bottom: 40px;
  padding-left: 40px;
}
.with_draw .el-form-item__content{
  float: left;
  width: 40%;
}
.with_draw .el-form-item__label{
  width: 20%;
  margin-right: 10px;
}
.with_draw .el-button{
  width: 40%;
  margin-left: 21%;
}
.input_top{
  width: 40%;
  margin-top: 15px;
}
.withdraw,.pay{
  cursor: pointer;
  color: #4F84C8;
  padding-left: 15px;
}
</style>
