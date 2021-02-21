/**
 * 权限校验
 * 通过router前置钩子函数 beforeEach(),
 * 在跳转路由前进行拦截判断是否已经登录，这个叫路由守卫
 * 如果已经登录，则进行跳转，如果没有则回到登录页
 */

 import router from './router/router';
 import {getUserInfo} from '@/api/login';

 /**
  * 前置路由钩子函数
  * to: 即将要进入的目标路由对象
  * from: 当前导航正要离开的路由对象
  * next: 使用此方法进入目标路由
  */
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('mxg-msm-token')
    if (!token) {
        if (to.path !== '/login') next({path: '/login'})
        else next()
    } else {
        if (to.path === '/login') next()
        else {
            let userInfo = localStorage.getItem('mxg-msm-user')
            if (userInfo) next()
            else {
                getUserInfo(token).then(response => {
                    let res = response.data
                    if (res.flag) {
                        localStorage.setItem('mxg-msm-user', JSON.stringify(res.data))
                        next()
                    } else {
                        next({path: '/login'})
                    }
                })
            }
        }
    }
})