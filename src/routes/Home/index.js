import Home from './components/Home';

export default {
  path: '/',
  alias: '/home',
  name: 'Home',
  component: Home,
  props: true  // route.params 将会被设置为组件属性
};
