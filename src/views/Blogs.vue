<template lang='pug'>
.features
   Banner(:src="banner")
      Card(v-bind="card").dark.op-9
         template(#actions)
            button.btn.primary Start Your website
</template> 

<script>
import {inject} from '@vue/composition-api'

export default {
   setup(){
      const banner = inject('banner')

      return {banner}
   }
}
</script>
<style lang="stylus" scoped>
.message
   .title
      font-size 1.5em
   text-align center
   padding 4rem
</style>