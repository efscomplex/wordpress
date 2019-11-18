<template lang='pug'>
.home
    header
        h1.title {{title ? title : 'Welcome to Home'}}
</template> 
<script>
export default {
    props:['title']
}
</script>