<template lang='pug'>
header.header
   router-link(to="/").company
      Logo(v-if="!!logo" :src="logo" title="<h2>WordPress.com</h2>")
   .routes
      Nav(@showbar="toggleShowbar")
         Navbar(:routes="navRoutes" :vertical="verticalBar")
   .actions
      button.btn.primary Get Started
      button.btn.primary(style="margin:0 1rem") Language: En
</template>

<script>
import {ref} from '@vue/composition-api'

export default {
   props:{
      title: String,
      logo: String,
      routes: Array,
   },
   components:{
      Logo: () => import('@/components/base/Logo'),
      Navbar: () => import('@/components/core/Navbar'),
   },
   setup(props, {root}){
      const verticalBar = ref(false)
      const navRoutes = ref(
         root.$store.state.pages.slice(1)
      )
      function toggleShowbar(isShow){
         verticalBar.value=isShow
      }
      return {navRoutes, verticalBar, toggleShowbar}
   }
}
</script>
<style lang="stylus" scoped>
.actions
   margin 1rem
   grid-area actions
.company 
   grid-area company
.actions
   grid-area actions
header
   padding:.4rem 0
   width 100%
   display:grid
   grid-template-areas 'company routes actions'
   flex-wrap wrap
   align-items center
   justify-content space-between

</style>