<template>
  <div class="account">
      <header-component></header-component>
    <!--main start-->
    <router-view>

    </router-view>
    <!--main end-->
  </div>
</template>
<script>
import HeaderComponent from '../../components/Header'
export default {
  name: "Register",
  components: {HeaderComponent},
}
</script>
<style>
.account{
    width: 100%;
    overflow: hidden;
}
</style>
