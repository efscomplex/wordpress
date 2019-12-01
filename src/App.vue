<template lang="pug">
#app
   h1 Vue-template with Stylus! :) 
</template>

<script>
import Header from '@/components/core/Header'
import Navbar from '@/components/core/Navbar'
import Logo from '@/components/core/Logo'
export default {
    name: 'app',
    components:{
       Header,
       Navbar,
       Logo
    }
}
</script>
