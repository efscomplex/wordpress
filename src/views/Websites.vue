<template lang='pug'>
.features
   Banner(:src="banner")
      Card(title="Powerful website building features to help you publish anything, anywhere.")
         template(#main)
            ul
               li Choose a plan that works for you
               li Customize as much or as little as you want
               li Get help when you need it
               li Tell your story
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
.card
   background-color rgba(0,0,0, .3)
   color white
.message
   .title
      font-size 1.5em
   text-align center
   padding 4rem
</style>