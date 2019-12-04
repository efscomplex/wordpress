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
import '@mdi/font/css/materialdesignicons.css'

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

#app
   --logo-w 4rem
body
   width 100vw
#app
   postion relative
   & > .header
      position absolute
      background-color rgba(0,0,0, .4)
      color white
      .navbar
         font-size .9em
</style>
