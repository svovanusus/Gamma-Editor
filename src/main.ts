import Vue from 'vue';
import Vuetify from 'vuetify';

import store from 'store';
import ComponentsLoader from 'plugins/components-loader';
import App from 'App.vue';

import ServiceLocatorInitializer from 'logic/services/ServiceLocatorInitializer';

import '@mdi/font/scss/materialdesignicons.scss';
import 'assets/scss/ui.scss';

ServiceLocatorInitializer.initialize();

Vue.use(Vuetify);
Vue.use(ComponentsLoader);

const vuetify = new Vuetify({});

const app = new Vue({
  el: '#app',
  render: (h) => h(App),
  vuetify,
  store,
});