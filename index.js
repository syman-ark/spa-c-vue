import Vue from 'vue';
import ArkUI from '@syman/ark-ui';
import axios from 'axios';
import router from './src/config/router.config';
import store from './src/config/store.config';
import App from './src/App';

Vue.use(ArkUI);
const createDOM = () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
};
const init = () => {
  const rootDom = createDOM();
  window.vm = new Vue({
    router,
    store,
    render: createElement => createElement(App)
  }).$mount(rootDom);
};
init();
