<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

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
      title="Basic Drawer"
      :closable="false"
      v-model="drawerVisibility"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
    <router-view />
  </div>
</template>

<script>
export default {
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
