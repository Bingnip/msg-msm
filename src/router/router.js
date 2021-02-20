import Vue from "vue";
import VueRouter from "vue-router";
// 默认情况下导入的是index.vue，因此可以直接省略
import Login from '../views/login';
import Home from '../views/home';
import Goods from '../views/goods';
import Member from '../views/member';
import Staff from '../views/staff';
import Supplier from '../views/supplier';
import Layout from '@/components/layout.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',  //路由名称
      component: Login  //组件对象
    },
    {
      path: '/',
      name: 'layout',  //路由名称
      redirect: '/home', //重定向
      component: Layout,  //组件对象
      children: [
        {
          path: '/home',
          component: Home,
          meta: {
            title: '首页'
          }
        }
      ]
    },
    {
      path: '/member',
      component: Layout,
      children: [
        {
          path: '/',
          component: Member,
          meta: {
            title: '会员管理'
          }
        }
      ]
    },
    {
      path: '/staff',
      component: Layout,
      children: [
        {
          path: '/',
          component: Staff,
          meta: {
            title: '员工管理'
          }
        }
      ]
    },
    {
      path: '/supplier',
      component: Layout,
      children: [
        {
          path: '/',
          component: Supplier,
          meta: {
            title: '供应商管理'
          }
        }
      ]
    },
    {
      path: '/goods',
      component: Layout,
      children: [
        {
          path: '/',
          component: Goods,
          meta: {
            title: '商品管理'
          }
        }
      ]
    },
  ]
});

export default router;
