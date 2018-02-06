import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const context = require.context('@/routes/', true, /^\.\/((?!\/)[\s\S])+\/index\.js$/);
const keys = context.keys();
let routes = [];
keys.forEach(key => {
  const r = context(key).default || context(key);
  if (r instanceof Array) {
    routes = routes.concat(r);
  } else {
    routes.push(r);
  }
});

export default new Router({
  routes: routes
});
