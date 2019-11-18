import {
    Home,
    Contact,
    About
} from '@/views'

const pages = [
    {name:'home', component: () => Home, path:'/', label:'Home'},
    {name:'about', component: () => About, path:'/about', label:'About'},
    {name:'contact', component: () => Contact, path:'/contact', label:'Contact'},
]
export default pages