<template lang='pug'>
div.logo
   img(:src="src" v-bind="$props" style="max-width: 100%").img
   slot
      .title(v-if="!!title") {{title}}
</template>

<script>
export default {
   props:{
      title:{
         type: String
      },
      src:{
         default: () => require('@/assets/logo.png')
      },
      width:{
         default: '80px'
      },
      height:{
         default: 'auto'
      },
   },
}
</script>
<style lang="stylus" scoped>
.logo
   display flex
   align-items center
   margin 0 1rem
.img
   margin-right .8rem
.title
   display inline-block
   color inherit
</style>