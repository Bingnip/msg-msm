import Vue from "vue";
// 为防止App.vue未调用到elementUI，需要在App.vue前调用
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router/router";

//要真正调用elementUI，vue需要use
Vue.use(ElementUI);

//权限拦截
import './permission'

//设置开发/生产环境
Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
