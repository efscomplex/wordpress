<template lang="pug">
#app
   Header(
      :logo="require('@/assets/logo.png')" 
      title="WordPress.com"
      :routes="$store.state.pages")
   main
      router-view
   footer

</template>

<script>
import Header from '@/components/core/Header'
import Navbar from '@/components/core/Navbar'
import {computed, provide} from '@vue/composition-api'

export default {
   name: 'app',
   components:{
      Header,
      Navbar,
   },
   setup(props, {root}){
      const banner = computed(() => root.$store.getters.getBanner(root.$route.name))
      provide('banner', banner)
   }
}
</script>
<style lang="stylus">
@import 'styles/*.styl'

body
   --header-h 70px
   width 100vw
  
.header
   height: var(--header-h)
   position absolute
   background-color rgba(0,0,0, .4)
   color white
.banner
   padding-top var(--header-h)
   color white
</style>
