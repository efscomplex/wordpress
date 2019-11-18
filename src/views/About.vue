<template lang='pug'>
.home
    header
        h1.title {{title ? title : 'Welcome to About Page'}}
</template> 
<script>
export default {
    props:['title']
}
</script>