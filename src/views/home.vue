<template>
  <div class="home">
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

<style scoped lang="scss">
.home {
  height: 100%;
}
</style>
