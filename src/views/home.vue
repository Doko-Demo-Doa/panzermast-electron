<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>aa</div>
    <home-tabs msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTabs from "@/components/home-tabs.vue";

export default {
  name: "home",
  components: {
    HomeTabs
  }
};
</script>
