import Vue from 'vue'
import Router from 'vue-router'

import User from '../view/User/User'
import Login from '../view/User/Login'
import Register from '../view/User/Register'
import Reset from '../view/User/Reset'
import EmailSend from '../view/User/EmailSend'
import ActiveUser from '../view/User/ActiveUser'
import SettingPassword from '../view/User/SettingPassword'

import Index from '../view/Index/Index'

import Kline from '../view/Exchange/Kline'
import tradingview from '../view/Exchange/TradingView'

import Property from '../view/Asset/Property'

import Account from '../view/Account/Account'
import AccountSetting from '../view/Account/AccountSetting'
import BindGaKey from '../view/Account/BindGaKey'
import UnbindGaKey from '../view/Account/UnbindGaKey'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/login',
      name: 'User',
      component: User,
      children:[
         {
          path: '/login/login' ,
          component: Login,
        },
        {
          path: '/login/reg',
          name: 'reg',
          component: Register
        },
        {
          path: '/login/EmailVerify' ,
          component: EmailSend,
        },
        {
          path: '/login/EmailVerify/:id(\\d+)/:code' ,
          component: ActiveUser,
        },
        {
          path: '/login/reset',
          name: 'reg',
          component: Reset
        },
        {
          path: '/login/SettingPassword/:id(\\d+)/:code',
          name: 'SettingPassword',
          component: SettingPassword
        },
      ]
    },
    {
      path: '/Kline',
      name: 'Kline',
      params: {count: ''},
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Kline
    },
    {
      path: '/tradingview',
      name: 'tradingview',
      params: {count: ''},
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
      component: tradingview
    },
    {
      path: '/Property',
      name: 'Property',
      component: Property
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      children:[
         {
          path: '/account/accountSetting' ,
          component: AccountSetting,
        },
        {
          path: '/account/bindGaKey',
          name: 'BindGaKey',
          component: BindGaKey
        },
        {
          path: '/account/UnbindGaKey',
          name: 'UnbindGaKey',
          component: UnbindGaKey
        }
      ]
    },
  ]
})
// router.beforeEach(to, from, next) => {
//   if(to.meta.requireAuth){  // 判断该路由是否需要登录权限
//     if(store.state.token){   // 判断该路由是否需要登录权限
//       next()
//     }else{
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}   // 判断该路由是否需要登录权限
//       })
//     }
//   }else{
//     next()
//   }
// }
