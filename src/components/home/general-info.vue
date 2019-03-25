<template>
  <div class="general-info">
    <Form
      :model="formRight"
      class="horizontal"
      label-position="right"
      :label-width="100"
    >
      <div class="column1">
        <FormItem error="" label="計算書No.">
          <Input v-model="formRight.input1" />
        </FormItem>
        <FormItem label="作成者">
          <Input v-model="formRight.input2" />
        </FormItem>
        <FormItem label="形式・マスト形状">
          <div class="horizontal">
            <Select v-model="selectLeft.select" class="select-left">
              <Option value="beijing">1形マスト</Option>
              <Option value="shanghai">2形マスト</Option>
              <Option value="shenzhen">3形マスト</Option>
            </Select>

            <Select v-model="selectRight.select">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
            </Select>
          </div>
        </FormItem>

        <FormItem label="">
          <RadioGroup v-model="formRight.radio">
            <Radio label="pmb">PM-B</Radio>
            <Radio label="pmc">PM-C</Radio>
            <Radio label="pms">PM-S</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem label="用途">
          <Select v-model="selectLeft.select" class="select-left">
            <Option value="beijing">その他</Option>
            <Option value="shanghai">アンテナ柱</Option>
          </Select>
        </FormItem>
      </div>

      <div class="column2">
        <FormItem label="宛名">
          <Input :maxlength="24" v-model="formRight.input1" />
        </FormItem>
        <FormItem label="物件名">
          <Input v-model="formRight.input1" />
        </FormItem>
        <FormItem label="マスト柱脚部">
          <Input v-model="formRight.input1" />
        </FormItem>
        <FormItem label="地上高さ">
          <Input v-model="formRight.input1" />
        </FormItem>
        <FormItem label="作成日">
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
    width: 48%;

    .ivu-form-item {
      white-space: nowrap;
    }
  }

  .column2 {
    width: 48%;
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
