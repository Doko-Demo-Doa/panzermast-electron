<template>
  <div class="general-info">
    <Form
      :model="formRight"
      class="horizontal"
      label-position="right"
      :label-width="100"
    >
      <div class="column1">
        <FormItem label="Title">
          <Input v-model="formRight.input1" />
        </FormItem>
        <FormItem label="Title name">
          <Input v-model="formRight.input2" />
        </FormItem>
        <FormItem label="Select">
          <div class="horizontal">
            <Select v-model="selectLeft.select" class="select-left">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>

            <Select v-model="selectRight.select">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
            </Select>
          </div>
        </FormItem>

        <FormItem label="Radio">
          <RadioGroup v-model="formRight.radio">
            <Radio label="pmb">PM-B</Radio>
            <Radio label="pmc">PM-C</Radio>
            <Radio label="pms">PM-S</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem label="Select">
          <Select v-model="selectLeft.select" class="select-left">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
          </Select>
        </FormItem>
      </div>

      <div class="column2">
        <FormItem label="Title">
          <Input :maxlength="24" v-model="formRight.input1" />
        </FormItem>
        <FormItem label="Title">
          <Input v-model="formRight.input1" />
        </FormItem>
        <FormItem label="Title">
          <Input v-model="formRight.input1" />
        </FormItem>
        <FormItem label="Date Picker">
          <DatePicker
            style="width: 100%;"
            type="date"
            placeholder="Select date"
          />
        </FormItem>
      </div>
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
        input3: "",
        radio: 0
      },
      selectLeft: {
        select: "beijing"
      },
      selectRight: {
        select: "shenzen"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.general-info {
  height: 100%;
  overflow-y: visible;

  .column1 {
    width: 46%;
  }

  .column2 {
    width: 50%;
    padding-right: 63px;
  }

  .horizontal {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
  }

  .select-left {
    margin-right: 12px;
  }
}
</style>
