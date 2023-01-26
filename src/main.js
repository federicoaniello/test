import { createApp } from 'vue'
import './styles/style.scss'
import App from './App.vue'
import { routes } from './routes/routes';
createApp(App).use(routes).mount('#app');