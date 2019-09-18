<template lang="pug">
    header.v-header.e-header
        .logo   
            img(v-if="logo" :src="logo").img-logo
        .description
            span(v-if="title").title {{title}}
            span(v-if="author").author {{`by `+ author}}
        .main
            slot(name="main")
        .aside
            slot(name="aside") 
        .footer
           slot(name="footer")
</template>
<script>
    module.exports = {
        props:{
           logo:{
              default:require('../assets/mathLogo.png')
           },
            title:String,
            author:'',
        }
    }
</script>
<style lang="scss" scoped>
.v-header {
    width:100%;
   display:grid;
   grid-template-areas:'logo description main aside footer'; 
   //grid-template-columns:min-content max-content min-content 1fr fit-content;
   grid-template-columns:repeat(2,1fr) max-content repeat(2,1fr);
   align-items:center;  }
.logo{  
   grid-area: logo;   }
.description { 
   grid-area: description;  
   display:flex;
   flex-direction:column;}
.main{ grid-area:main;}
.aside{ 
   grid-area: aside;
   justify-self:right; 
   display:flex;
   flex-wrap:wrap;
   align-items:center;
   justify-content:center;}
.footer{ 
   grid-area:footer;
   padding-right:1rem;
}
.author{ 
    font-size:1em;
    white-space:nowrap;}
.title{
    font-size:2em;
}
._btn{
   font-weight:normal;
   padding:.6rem 1rem;
   &:nth-child(n){ margin-right:1rem;}
}
$logo-w:80px;
.img-logo{
   width:$logo-w;
   height:$logo-w;
   margin:0 2rem;
   object-fit:contain;
}
</style>
