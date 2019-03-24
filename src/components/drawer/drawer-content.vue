<template>
  <Menu active-name="1-2" :open-names="['1']">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-analytics" />
        File
      </template>
      <MenuItem name="1-1">New</MenuItem>
      <MenuItem name="1-2">Save</MenuItem>
      <MenuItem name="1-3">Open...</MenuItem>
    </Submenu>
    <Submenu name="4">
      <template slot="title">
        <Icon type="ios-cog" />
        Templates
      </template>
      <MenuItem name="4-1">Import Template...</MenuItem>
      <MenuItem name="4-2">Export Template...</MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
export default {};
</script>
