import './assets/css/index.css'
// import { asyncComponent } from './service/global'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'less'

const app = createApp(App)
// asyncComponent(app)
app.use(createPinia())
app.use(router)

app.mount('#app')
