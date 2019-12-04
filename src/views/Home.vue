<template lang='pug'>
.home
   Banner(:src="banner")
      Card(v-bind="card").dark.op-9
         template(#actions)
            button.btn.primary Start Your website
   section.does.container
      header
         h1.title What can you do on WordPress.com?
         p.description WordPress.com gives you everything you need to create anything you want. It’s flexible, secure, and powerful, just like you want your business to be.
      main.layout
         Card( title="Build a fan base." 
               subtitle="Process payments, configure taxes and shipping, build a marketing plan—you make the widgets, we’ll make the website")
         Card( title="Open a Store" 
               subtitle="Process payments, configure taxes and shipping, build a marketing plan—you make the widgets, we’ll make the website.")
         Card( title="Start a Blog" 
               subtitle="Everyone has a point of view. Make your mark online with the world’s greatest blogging tool, and join a community millions strong that’s waiting to hear what you have to say")
         Card( title="Dessign a portfolio" 
               subtitle="Thousands of themes means there’s a layout that’s just right for you, while storage and design options ensure you can upload anything you need to and give your work the stage it deserves.")


</template> 

<script>
import {ref} from '@vue/composition-api'
import {inject} from '@vue/composition-api'
//import '@mdi/font/css/materialdesignicons.css'
   
export default {
   setup(){
      const banner = inject('banner')
      const card = ref({
         title: "WordPress powers 35% of the internet.",
         subtitle: "WordPress.com is the best way to experience it. Start building your website today.",
         avatar: "https://www.essence.com/wp-content/uploads/2019/10/GettyImages-1151871348-1.jpg"
      })
      return {banner, card}
   }
}
</script>
<style lang="stylus" scoped>
.banner .card
   grid-template-areas 'header avatar' 'actions avatar'
   --avatar-w 10rem
section.does
   padding 5rem 10vw
   min-height 100vh
   background-color #1D232F
   color white
   align-items flex-start
   header
      margin 0 auto 6rem
      text-align center
      max-width 45rem
      .title
         font-size 2.6em
         margin-bottom 1rem
   main.layout
      display grid
      grid-gap 3rem
      grid-template-columns 1fr 1fr
      justify-items center
      @media screen and (max-width 800px)
         grid-template-columns 1fr
</style>
<style lang="stylus">
#app
   --avatar-w 600px
</style>