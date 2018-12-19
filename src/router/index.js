import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import news from '../components/news'
import info from '../components/info'
import shownews from '../components/shownews'
import showinfo from '../components/showinfo'
import mypresent from '../components/mypresent'
import myarctical from '../components/myarctical'


Vue.use(Router);

export default new Router({
  routes: [
    {path:'/home',component:home,name:'home'},
    {path:'/artical',name:'artical',component:myarctical},
    {path:'/news',redirect:'/news/global'},
    {path:'/news/:page',name:'newspage',component:shownews},
    {path:'/info',redirect:'/info/currencies'},
    {path:'/info/:page',name:'infopage',component:showinfo},
    {path:'/me',component:mypresent,name:'me'},
    {path:'/',redirect:'/home'},
    {path:'*',redirect:'/home'}
  ]
})
