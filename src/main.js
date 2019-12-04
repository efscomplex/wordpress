import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import VueCompositionAPI from '@vue/composition-api'
import {vueRegister} from '@/utils/vueUtils'
import themesMixin from '@/mixins/themes'

Vue.use(VueCompositionAPI)
Vue.mixin(themesMixin)

vueRegister()
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
