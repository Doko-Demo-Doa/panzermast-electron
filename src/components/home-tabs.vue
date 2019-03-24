<template>
  <section class="home-tabs">
    <Tabs type="card" class="p-tab-content">
      <TabPane label="客様の依頼情報" class="tab-content" icon="logo-apple">
        <GeneralInfo />
      </TabPane>
      <TabPane label="設計情報" class="tab-content" icon="logo-windows">
        <Designing />
      </TabPane>
      <TabPane label="取付物の諸元" class="tab-content" icon="logo-tux"
        >Vật đính kèm</TabPane
      >
      <TabPane label="ケーブルの諸元" class="tab-content" icon="md-albums"
        >Tải trọng dây dọc</TabPane
      >
      <TabPane label="マストに沿った等分布荷重" icon="ios-analytics"
        >Tải trọng dây dọc</TabPane
      >
    </Tabs>

    <div class="error-tree">
      <Tree :data="data1"></Tree>
      <div class="tree-padding" />
    </div>
  </section>
</template>

<script>
import GeneralInfo from "@/components/home/general-info";
import Designing from "@/components/home/designing";

export default {
  name: "HomeTabs",
  props: {
    msg: String
  },
  components: {
    GeneralInfo,
    Designing
  },
  data() {
    return {
      data1: [
        {
          title: "parent 1",
          expand: true,
          children: [
            {
              title: "parent 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1"
                },
                {
                  title: "leaf 1-1-2"
                }
              ]
            },
            {
              title: "parent 1-2",
              expand: true,
              children: [
                {
                  title: "leaf 1-2-1"
                },
                {
                  title: "leaf 1-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home-tabs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .p-tab-content {
    padding-top: 42px;
    flex-grow: 2;
  }

  .error-tree {
    height: 100px;
    padding: 14px 20px;
    width: 100%;
    height: 124px;
    user-select: none;
    display: flex;
    overflow-y: scroll;
    margin-right: auto;
    border-top: 1px solid gainsboro;

    .tree-padding {
      width: 60%;
    }
  }
}
</style>
