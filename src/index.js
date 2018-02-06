import Vue from 'vue';
import App from './App';
import store from '@/store';
import router from '@/routes';

Vue.config.productionTip = false;

console.log('start');

/* eslint-disable no-new */
new Vue({
  el: '#app-root',
  store,
  router,
  render: h => h(App)
});
