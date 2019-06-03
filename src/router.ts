import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import cats from './views/cats.vue';
import dogs from './views/dogs.vue';
import pet from './views/pet.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cats',
      name: 'cats',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: cats, // () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: dogs,
    },
    {
      path: '/pets/:species/:id',
      name: 'pet',
      component: pet,
    },
  ],
});
