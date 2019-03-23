<template>
  <div class="general-info">
    <Form :model="formRight" label-position="right" :label-width="100">
      <FormItem label="Title">
        <Input v-model="formRight.input1" />
      </FormItem>
      <FormItem label="Title name">
        <Input v-model="formRight.input2" />
      </FormItem>
      <FormItem label="Select">
        <Select v-model="formItem.select">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
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
      },
      formItem: {
        select: "beijing"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.general-info {
  height: 100%;
  width: 640px;
  overflow-y: visible;
}
</style>
