<template>
  <div class="nav-bar">
    <div class="left-wrapper">
      <el-button type="" :icon="House" link circle />
    </div>

    <div class="right-wrapper">
      <el-button type="primary" link>admin</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { House } from "@element-plus/icons-vue";
console.log(123);
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 50px;
  padding: 0 12px;
}
</style>
