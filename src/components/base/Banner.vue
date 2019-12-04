<template lang='pug'>
div.banner(:style="imgSrc")
   .container
      slot
</template>
     
<script>
import {computed} from '@vue/composition-api'

export default {
   inheritAttrs: false,
   props:{
      src:{
         type: String,
      },
   },
   setup(props){
      const imgSrc = computed(
         () => `backgroundImage: url('${props.src}')`
      )
      return {imgSrc}
   }
}
</script>
<style lang="stylus" scoped>
.container
   height 100%
   display flex
   justify-content center
   align-items center
.banner
   width 100%
   height var(--banner-h, 768px)
   transition background-image .6s ease-in-out
   background-position center
   background-size cover
</style>
<style lang="stylus">
#app
   --banner-h 768px
</style>