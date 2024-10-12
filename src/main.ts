import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// reset css
import "normalize.css/normalize.css";

// 页面自适应
import resizeFontsize from "@/utils/rem";
resizeFontsize();

// 导入Element Plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";

// Element icons
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// echarts plugin
import * as echarts from "echarts";

// vue init
const app = createApp(App);

// vue extends
app.config.globalProperties.$echarts = echarts;

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(store);
app.use(router);
app.use(ElementPlus, { size: "small", locale: zhCn });
app.mount("#app");
