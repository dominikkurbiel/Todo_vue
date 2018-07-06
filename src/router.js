import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Done from './views/Done.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/done',
      name: 'done',
      component: Done,
    },
  ],
});
