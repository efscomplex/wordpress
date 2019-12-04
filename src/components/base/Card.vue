<template lang='pug'>
div.card
   img.img.banner(v-if="banner" :src="banner")
   .header(v-if="hasHeader || $slots.header")
      slot(name="header")
         span.overline(v-if="overline") {{overline}}
         div(v-if="hasHeader")
            div(v-if="title")
               h1.title {{title}}
            .subtitle(v-if="subtitle")
               span {{subtitle}}
   .main(v-if="main || $slots.main")
      slot(name="main")
         .wrap(v-html="main" v-if="main")
   .avatar(v-if="$slots.avatar || avatar")
      slot(name="avatar")
         img(:src="avatar" v-if="avatar").img
   .actions(v-if="$slots.actions")
      slot(name="actions")
   slot
</template>
     
<script>
import {ref} from '@vue/composition-api'

export default {
   props:['banner', 'title', 'subtitle', 'main', 'avatar', 'overline'],
   
   setup(props){
      const hasHeader = ref(!!props.title || !!props.subtitle)

      return {hasHeader}
   }
}
</script>
<style lang="stylus" scoped>
.card
   max-width 35rem
   border-radius 6px
   display:grid
   //grid-template-areas 'banner' 'header' 'main' 'avatar' 'actions'
   & > *:not(.banner)
      padding:1rem

.banner
   width:100%
   height:10rem
   grid-area: banner
.main
   grid-area: main
.header 
   grid-area: header
.avatar
   grid-area: avatar
   justify-self:center   
   .img
      height var(--avatar-w)
      width var(--avatar-w)
      border-radius:50%
      object-fit cover
      object-position center
.img
   width 100%
   align-self:center
   object-fit: cover
   object-position: center
.actions
   grid-area: actions
</style>
<style lang="stylus">
#app
   --avatar-w 120px
</style>