<!-- eslint-disable -->
<template>
  <Form
    :model="designingForm"
    class="horizontal"
    label-position="right"
    :label-width="100"
  >
    <div class="designing">
      <Card @click="create()" class="column column1">
        <p slot="title">Section 1</p>
        <FormItem label="計算書No.">
          <Input
            :maxlength="5"
            inputmode="number"
            v-model="designingForm.input1"
          />
        </FormItem>

        <FormItem label="計算書No.">
          <Input
            :maxlength="5"
            inputmode="number"
            v-model="designingForm.input2"
          />
        </FormItem>

        <FormItem label="計算書No.">
          <Input
            :maxlength="5"
            inputmode="number"
            v-model="designingForm.input3"
          />
        </FormItem>
      </Card>

      <Card @click="create()" class="column column2">
        <div slot="title">
          <p slot="title">Section 2</p>
          <div class="section2-field1">
            <FormItem label="計算書No.">
              <Input
                :maxlength="5"
                inputmode="number"
                v-model="designingForm.input3"
              />
            </FormItem>
            <Checkbox class="section2-field1-checkbox" label="twitter">
              <span>Twitter</span>
            </Checkbox>
          </div>
        </div>
        <FormItem label="計算書No.">
          <Input
            :maxlength="5"
            inputmode="number"
            v-model="designingForm.input3"
          />
        </FormItem>

        <FormItem label="計算書No.">
          <Input
            :maxlength="5"
            inputmode="number"
            v-model="designingForm.input4"
          />
        </FormItem>

        <FormItem label="計算書No.">
          <Input
            :maxlength="5"
            inputmode="number"
            v-model="designingForm.input5"
          />
        </FormItem>

        <FormItem label="計算書No.">
          <Input
            :maxlength="5"
            inputmode="number"
            v-model="designingForm.input5"
          />
        </FormItem>

        <Divider />

        <h4>Section 1</h4>

        <FormItem label="計算書No.">
          <Input
            :maxlength="5"
            inputmode="number"
            v-model="designingForm.input5"
          />
        </FormItem>

        <FormItem label="計算書No.">
          <Input
            :maxlength="5"
            inputmode="number"
            v-model="designingForm.input5"
          />
        </FormItem>

        <Divider />

        <h4>Section 1</h4>

        <FormItem label="計算書No.">
          <Input
            :maxlength="5"
            inputmode="number"
            v-model="designingForm.input5"
          />
        </FormItem>

        <FormItem label="計算書No.">
          <Input
            :maxlength="5"
            inputmode="number"
            v-model="designingForm.input5"
          />
        </FormItem>
      </Card>

      <!-- Column 3 -->

      <Card @click="create()" class="column column3">
        <FormItem label="計算書No.">
          <Input
            :maxlength="5"
            inputmode="number"
            v-model="designingForm.input3"
          />
        </FormItem>

        <FormItem label="計算書No.">
          <Input
            :maxlength="5"
            inputmode="number"
            v-model="designingForm.input4"
          >
            <span slot="append">N * m</span>
          </Input>
        </FormItem>

        <FormItem label="計算書No.">
          <Input
            :maxlength="5"
            inputmode="number"
            v-model="designingForm.input5"
          />
        </FormItem>
      </Card>
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
  overflow-y: scroll;
  height: 280px;

  .column {
    width: 32%;
    overflow-y: auto;
  }

  .column2 {
    .section2-field1 {
      display: flex;
      flex-direction: row;

      .section2-field1-checkbox {
        margin-left: 10px;
        margin-top: 10px;
        white-space: nowrap;
      }
    }
  }
}
</style>
