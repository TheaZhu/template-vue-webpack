<template>
<div id="home">
  <card class="card">
    <h1>{{ greeting }} World!</h1>
  </card>
</div>
</template>

<script>
import Card from './Card';

export default {
  name: 'home',
  data: function () {
    return {
      greeting: 'Hello'
    };
  },
  components: {
    Card
  }
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 100%;
  color: #ffffff;
  background: url(../../../assets/images/bg.png) right top / contain no-repeat rgb(50, 21, 121);
  text-align: center;
}

.card {
  margin-top: 200px;
}
</style>
