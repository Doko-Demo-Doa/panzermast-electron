<template>
  <div class="general-info">
    <Form :model="formRight" label-position="right" :label-width="100">
      <FormItem label="Title">
        <Input v-model="formRight.input1" />
      </FormItem>
      <FormItem label="Title name">
        <Input v-model="formRight.input2" />
      </FormItem>
      <FormItem label="Aligned title">
        <Input v-model="formRight.input3" />
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "GeneralInfo",
  props: {},
  data() {
    return {
      formRight: {
        input1: "",
        input2: "",
        input3: ""
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.general-info {
  height: 100%;
  width: 640px;
}
</style>
