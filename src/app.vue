<template>
  <div id="app">
    <div class="top-space">
      <Button
        @click="drawerVisibility = true"
        size="large"
        type="primary"
        shape="circle"
        icon="ios-menu"
      ></Button>
    </div>

    <Drawer
      placement="left"
      title="Panzermast"
      :closable="false"
      v-model="drawerVisibility"
    >
      <drawer-content></drawer-content>
    </Drawer>
    <router-view />
  </div>
</template>

<script>
import DrawerContent from "@/components/drawer/drawer-content.vue";

// <router-link to="/">Home</router-link> |
// <router-link to="/about">About</router-link>

export default {
  components: {
    DrawerContent
  },
  methods: {
    openNotice() {
      this.$Notice.info({
        title: "Notification title",
        desc:
          "Here is the notification description. Here is the notification description. "
      });
    }
  },
  data() {
    return {
      drawerVisibility: false
    };
  }
};
</script>

<style lang="scss">
div {
  user-select: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .top-space {
    display: flex;
    padding: 10px 22px;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
