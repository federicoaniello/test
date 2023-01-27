import { createApp } from 'vue'
import './styles/style.scss'
import App from './App.vue'
import { routes } from './routes/routes';
import { createPinia } from 'pinia';
const pinia = createPinia();
createApp(App).use(routes).use(pinia).mount('#app');