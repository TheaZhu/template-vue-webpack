<template>
<div id="card">
  <slot>
    Hello Vue组件!
  </slot>
</div>
</template>

<script>
export default {
  name: 'card',
  data: function () {
    return {
      greeting: 'Hello'
    };
  }
};
</script>

<style scoped>
#card {
  box-sizing: border-box;
  padding: 24px;
  display: inline-block;
  color: #42b983;
  background: #ffffff;
  border-radius: 4px;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
