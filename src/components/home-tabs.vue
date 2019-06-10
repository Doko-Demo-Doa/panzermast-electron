<template>
  <section class="home-tabs">
    <Tabs type="card" class="p-tab-content">
      <TabPane label="客様の依頼情報" class="tab-content" icon="logo-apple">
        <general-info />
      </TabPane>
      <TabPane label="設計情報" class="tab-content" icon="logo-windows">
        <Designing />
      </TabPane>
      <TabPane label="取付物の諸元" class="tab-content" icon="logo-tux">
        <TableData />
      </TabPane>
      <TabPane label="ケーブルの諸元" class="tab-content" icon="md-albums"
        >Tải trọng dây dọc</TabPane
      >
      <TabPane label="マストに沿った等分布荷重" icon="ios-analytics"
        >Tải trọng dây dọc</TabPane
      >
    </Tabs>

    <div class="error-tree">
      <div class="toggler"><Icon type="md-arrow-dropdown" /></div>
      <Tree :data="data1"></Tree>
      <div class="tree-padding" />
    </div>
  </section>
</template>

<script>
import GeneralInfo from "@/components/home/general-info";
import Designing from "@/components/home/designing";
import TableData from "@/components/home/table";

export default {
  name: "HomeTabs",
  props: {
    msg: String
  },
  components: {
    GeneralInfo,
    Designing,
    TableData
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
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    bottom: 0;
    width: 100%;
    height: 124px;
    user-select: none;
    display: flex;
    overflow-y: scroll;
    margin-right: auto;
    border-top: 1px solid gainsboro;

    .toggler {
      border-bottom: 1px solid gainsboro;
      background-color: white;
      opacity: 0.85;
      position: fixed;
      width: 100%;
      cursor: pointer;
      transition: 0.3s all linear;

      &:hover {
        background-color: $color-pale-grey;
      }
    }

    .ivu-tree {
      margin-top: 21px;
    }

    .tree-padding {
      width: 60%;
    }
  }
}
</style>
