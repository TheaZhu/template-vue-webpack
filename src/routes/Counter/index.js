import Counter from './components/Counter';

export default {
  path: '/counter',
  name: 'Counter',
  component: Counter,
  props: true // route.params 将会被设置为组件属性
};
