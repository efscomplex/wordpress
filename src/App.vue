<template lang="pug">
#app
   Header(:logo="require('@/assets/logo.png')" title="Vue-template with Stylus! :) " search)
   main
   footer

</template>

<script>
import Header from '@/components/core/Header'
import Navbar from '@/components/core/Navbar'
export default {
    name: 'app',
    components:{
       Header,
       Navbar,
    }
}
</script>
<style lang="stylus" scoped>
@import 'styles/'
</style>
