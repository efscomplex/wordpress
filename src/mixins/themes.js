export default {
   setup(props, context){
      let themes = ['dark','light']
      
      themes.forEach( 
         theme => {
            if (context.attrs.hasOwnProperty(theme)){}
         }
      )
   }
}