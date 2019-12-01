<template lang='pug'>
header
   Logo(v-if="!!logo" :src="logo")
   Title(v-if="!!title" :title="title")
   Search(v-if="search")
</template>

<script>

export default {
   props:{
      title: String,
      logo: String,
      search: {
         type: Boolean,
         default: false
      }
   },
   components:{
      Logo: () => import('@/components/base/Logo'),
      Title: () => import('@/components/base/Title'),
      Search: () => import('@/components/base/Search'),
   },
}
</script>
<style lang="stylus" scoped>
header 
   padding:.4rem 1rem
   display:flex
   justify-content:space-between
   & > *
      margin:0 1rem
</style>