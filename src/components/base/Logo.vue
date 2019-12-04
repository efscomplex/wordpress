<template lang='pug'>
div.logo
   img.img( :src="src"
            v-bind="$attrs" 
            style="max-width: 100%" 
            :class="$attrs.width ? '': 'logo-w'")
   slot
      .title(v-if="!!title" v-html="title")
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
   },
}
</script>
<style lang="stylus" scoped>
.logo-w
   width var(--logo-w, initial)
.logo
   display flex
   align-items center
   margin 0 1rem
.img
   margin-right .8rem
.title
   display inline-block
</style>