<template>
<div id="counter">
  <div class="counter-content">
    Clicked: {{ $store.state.counter.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'counter',
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
};
</script>

<style scoped lang="less" type="text/less">
#counter {
  width: 100%;
  height: 100%;
  color: #ffffff;
  background: url(../../../assets/images/bg.png) right top / contain no-repeat rgb(50, 21, 121);
  text-align: center;
}

.counter-content {
  display: inline-block;
  margin-top: 200px;
}
</style>
