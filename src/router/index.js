import Vue from 'vue'
import VueRouter from 'vue-router'
import pages from '@/store/pages'

Vue.use(VueRouter)

export default new VueRouter({
    routes: pages,
    mode: 'history'
})