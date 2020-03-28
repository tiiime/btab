import Vue from 'vue';
import App from './App';
import store from '../store';
import router from './router';
import Element from 'element-ui';

Vue.use(Element, { size: 'small', zIndex: 3000 });

global.browser = require('webextension-polyfill');
Vue.prototype.$browser = global.browser;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
