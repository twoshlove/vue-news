import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import ItemView from "../views/ItemView";
import UserView from "../views/UserView";
import createListView from "../views/CreateListView";
import bus from "../utils/bus";
import { store } from '../store';
import guard from './guard';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      // component: createListView('NewsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            bus.$emit('end:spinner');
            next();
          })
          .catch();
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskView'),
      beforeEnter: guard,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView'),
      beforeEnter: guard,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
  ]
});