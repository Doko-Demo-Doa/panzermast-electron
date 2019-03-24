<template>
  <div class="root">
    <Menu mode="horizontal" active-name="home">
      <MenuItem on-select="switchMenu(0)" name="home">
        <Icon type="ios-home" />
        Home
      </MenuItem>
      <MenuItem on-select="switchMenu(1)" name="report-preview">
        <Icon type="ios-paper" />
        Report Preview
      </MenuItem>
    </Menu>
    <template v-if="this.menuIndex === 0">
      <home-tabs />
    </template>
    <template v-else>
      <report-preview />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTabs from "@/components/home-tabs.vue";
import ReportPreview from "@/components/report-preview.vue";

export default {
  name: "root",
  methods: {
    switchMenu: function(idx) {
      console.log(idx);
    }
  },
  data() {
    return {
      menuIndex: 0
    };
  },
  components: {
    HomeTabs,
    ReportPreview
  }
};
</script>

<style scoped lang="scss">
.root {
  .nav-text {
    user-select: none;
  }
}
</style>
