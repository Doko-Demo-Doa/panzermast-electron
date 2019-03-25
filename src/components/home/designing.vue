<template>
  <Form
    :model="designingForm"
    class="horizontal"
    label-position="right"
    :label-width="100"
  >
    <div class="designing">
      <div @click="create()" class="column column1">
        <FormItem label="計算書No.">
          <Input v-model="designingForm.input1" />
        </FormItem>
      </div>

      <div class="column column2">
        aa
      </div>

      <div class="column column3">
        aa
      </div>
    </div>
  </Form>
</template>

<script>
export default {
  data() {
    return {
      designingForm: {
        input1: ""
      }
    };
  },
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
