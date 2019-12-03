<template lang='pug'>
header.header
   router-link(to="/")
      Logo(v-if="!!logo" :src="logo" width="50px" :title="title")
   .routes
      Nav
         Navbar(:routes="navRoutes")
   .btn-group
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
      console.log(root.$store.state.pages.slice(1));
      
      const navRoutes = ref(
         root.$store.state.pages.slice(1)
      )
      return {navRoutes}
   }
}
</script>
<style lang="stylus" scoped>
.btn-group
   margin 1rem
header
   padding:.4rem 0
   width 100%
   display:flex
   flex-wrap wrap
   justify-content space-between
   align-items center
   & > *
      margin:0 1rem
</style>