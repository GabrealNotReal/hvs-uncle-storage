import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { createPinia } from 'pinia'
import vSelect from 'vue-select'

import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.rtl.css'

import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'

const pinia = createPinia()
const app = createApp(App)

app.component('DatePicker', Vue3PersianDatetimePicker)
app.component('v-select', vSelect)
app.use(router)
app.use(pinia)
app.mount('#app')
