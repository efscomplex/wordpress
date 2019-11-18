<template lang='pug'>
ul
    template(v-for="route in $store.state.pages" )
        router-link(:to="route.path")
            span {{route.label}}
</template>
   
<script>
export default {
   
}
</script>