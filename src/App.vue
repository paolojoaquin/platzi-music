<template>
  <div id="app">
    <pm-header></pm-header>

    <router-view></router-view>
    
    <pm-footer></pm-footer>
  </div>
</template>

<script>
import PmFooter from "@/components/layout/Footer.vue";
import PmHeader from "@/components/layout/Header.vue";
export default {
  name: "App",
  components: {
    PmFooter,
    PmHeader,
  }
};
</script>

<style lang="scss">

</style>
