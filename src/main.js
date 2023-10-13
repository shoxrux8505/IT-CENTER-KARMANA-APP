import { createApp } from 'vue'
import {LoadingPlugin} from 'vue-loading-overlay';
import AOS from 'aos'
import './style.css'
import App from './App.vue'
import './aos-master/dist/aos.css'
import 'vue-loading-overlay/dist/css/index.css';


createApp(App).mount('#app').use(AOS.init())
const app = createApp({});
app.use(LoadingPlugin);
app.mount('#app');










