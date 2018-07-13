<template>
  <div>
    <el-container>
      <el-main>
         <el-row :gutter="24">
          <el-col :span="4" style="min-height: 1px"><div class="grid-content bg-purple"></div></el-col>
           <el-col :span="3" style="min-height: 1px">
             <div class="grid-content bg-purple">
               <p>
                  {{$t('message.unbind_ga')}}:
               </p>
             </div>
           </el-col>

          <el-col :span="5">
            <div class="grid-content bg-purple" style="margin-top:10px">
              <div class="tab-bar">
              </div>
              <el-input :placeholder="$t('message.enter_ga_code')" id="gaCode">
              </el-input>
              <el-button type="primary" style="width: 100%;margin-top: 10px" @click="unbind()">
                {{$t('message.unbind')}}
              </el-button>
            </div>
          </el-col>
          <el-col :span="7" style="min-height: 1px"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </el-main>
    </el-container>

  </div>
</template>
<script>
  import $ from "jquery"
import { unbind } from "../../api/api"
export default {
    name: "",
    data() {
      return {
        message: ""
      }
    },
    methods: {
      unbind: function () {
        let userId = parseInt(sessionStorage.getItem('userId'))
        let code = parseInt($("#gaCode").val())
        let kwargs = {
          user_id: userId,
          ga_code: code
        }
        console.log(kwargs)
        unbind(kwargs).then(response => {
          console.log(response)
          if(response.code == 0) {
            this.$message.success(this.$t('message.unbind_success'))
            // this.$router.push({path: "/account/accountSetting"})
          }else if(response.code == 2021) {
            this.$message.error(this.$t('message.captcha_code'))
          }else{
            this.$message.error(this.$t('message.unbind_failed'))
            // this.$router.push({path: "/account/accountSetting"})
          }
        })
      }
    }
}
</script>
<style>

</style>
