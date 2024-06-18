// css
import './assets/main.scss'
import '@/assets/styles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Lara from './presets/lara'

import App from './App.vue'
import router from './router'

// 引入 VeeValidate 元件跟功能
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// 引入 VeeValidate 的驗證規則
import * as rules from '@vee-validate/rules'
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// https://israynotarray.com/vue/20230208/3309208839/

// 表單組件
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import Password from 'primevue/password'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Panel from 'primevue/panel'

const app = createApp(App)
export { app }

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(rules).forEach((rule) => {
  defineRule(rule, (rules as any)[rule])
})

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara,
  ripple: true,
  zIndex: {
    modal: 1100, //dialog, sidebar
    overlay: 1000, //dropdown, overlaypanel
    menu: 1000, //overlay menus
    tooltip: 1100 //tooltip
  }
})
app.use(ToastService)

// 表單組件掛載
app.component('Button', Button)
app.component('Checkbox', Checkbox)
app.component('InputText', InputText)
app.component('Password', Password)
app.component('Toast', Toast)
app.component('Panel', Panel)

// 掛載 Global 的 VeeValidate 元件
app.component('VeeField', Field)
app.component('VeeForm', Form)
app.component('VeeErrorMessage', ErrorMessage)

app.mount('#app')
