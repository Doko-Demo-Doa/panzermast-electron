<template>
  <div class="home-tabs">
    <Tabs>
      <TabPane label="客様の依頼情報" icon="logo-apple"
        >Thông tin chung</TabPane
      >
      <TabPane label="設計情報" icon="logo-windows">Thiết kế</TabPane>
      <TabPane label="取付物の諸元" icon="logo-tux">Vật đính kèm</TabPane>
      <TabPane label="ケーブルの諸元" icon="md-albums"
        >Tải trọng dây dọc</TabPane
      >
      <TabPane label="マストに沿った等分布荷重" icon="ios-analytics"
        >Tải trọng dây dọc</TabPane
      >
    </Tabs>

    <div class="error-tree">
      aaa
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTabs",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
