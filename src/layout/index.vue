<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-container class="common-layout">
    <el-header>
      <NavBar />
    </el-header>

    <el-container>
      <el-aside width="200px">
        <SideMenu />
      </el-aside>

      <el-container>
        <AppMain />
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import NavBar from "./components/NavBar.vue";
import SideMenu from "./components/SideMenu.vue";
import AppMain from "./components/AppMain.vue";
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
