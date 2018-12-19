// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(iView);
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  render:h=>h(App)
});

