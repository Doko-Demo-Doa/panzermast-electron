<template>
  <div class="designing">
    <div @click="create()" class="column column1">
      aa
    </div>

    <div class="column column2">
      aa
    </div>

    <div class="column column3">
      aa
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    create: function() {}
  }
};
</script>

<style lang="scss" scoped>
.designing {
  display: flex;
  justify-content: space-evenly;

  .column {
    width: 32%;
    background-color: azure;
  }
}
</style>
