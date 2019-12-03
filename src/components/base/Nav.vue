<template lang='pug'>
nav
   span(@click="onClick").action
      slot(name="icon" )
         span.burger 
   transition(:name="effect")
      template(v-if="show")
         slot
</template>
<script>
export default {
   props:{
      effect:{
         default:'slideToRight'
      },
   },
   data: () => ({show:true}),
   methods:{
      onClick(){
         this.show=!this.show
      }
   }
}
</script>
<style lang="stylus" scoped>
@import '../../styles/*.styl'

nav
   display:inline-block
.hide
   --lapse .3s
   transition width var(--lapse) ease-in-out, opacity var(--lapse) ease-in-out
   @media screen and (min-width m)
         width 0
         opacity 0
         overflow hidden
.action
   cursor pointer
   @extend .hide

.burger
   w = 3px
   size = 5*w
   --color:white
   display: inline-block
   margin:0 1rem
   width: size
   height: size
   cursor:pointer
   background: linear-gradient(var(--color) w,transparent w),linear-gradient(transparent w*2,var(--color) w*2,var(--color) w*3,transparent w*3),linear-gradient(transparent w*4,var(--color) w*4,var(--color) w*5,transparent w*5)
 
</style>
    