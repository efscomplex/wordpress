import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import VueCompositionAPI from '@vue/composition-api'
import {vueRegister} from '@/utils/vueUtils'
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false
vueRegister()

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
