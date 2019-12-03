import Vue from 'vue'
import Vuex from 'vuex'
import pages from './pages'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      pages
   },
   getters: {
      getBanner: (state) => 
         name => state.pages.find(
            page => (page.name === name)
         ).banner,
   },
})