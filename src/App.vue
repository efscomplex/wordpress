<template lang="pug">
    #app
        .header
            Nav
        router-view
        .footer
</template>

<script>
import Nav from '@/components/core/Nav'
export default {
    name: 'app',
    components:{
        Nav,
    }
}
</script>
