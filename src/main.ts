import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// reset css
import 'normalize.css/normalize.css'

// Vue init
const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
