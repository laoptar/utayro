<template>
  <div class="app-main">
    <BreadCrumb />
    <div class="main-container">
      <transition name="fade-transform" mode="out-in">
        <KeepAlive :include="cachedViews">
          <router-view :key="key" />
        </KeepAlive>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import BreadCrumb from "./BreadCrumb.vue";

// 获取路由函数
const route = useRoute();
const router = useRouter();

// 获取store缓存
const store = useStore();

// 模板参数
const key = ref(route.path);
const cachedViews = reactive(store.state?.menuView?.cachedViews);

console.log(key, router);
</script>
