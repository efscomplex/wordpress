<template lang='pug'>
.banner(:style="imgSrc")
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
.banner
   width 100%
   height 768px
   position realative
   transition background-image .6s ease-in-out
   background-position center
   background-size cover
</style>