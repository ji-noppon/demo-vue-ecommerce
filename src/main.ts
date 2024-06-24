import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { register } from 'swiper/element/bundle';

const app = createApp(App)

app.use(router)
app.use(register)
app.mount('#app')
