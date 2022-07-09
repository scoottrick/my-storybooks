<template>
  <div class="container">
    <button v-on:click="previous">&lt;</button>
    <h1>Hey, {{ messages[current] }}</h1>
    <button v-on:click="next">&gt;</button>
  </div>
</template>

<script>
export default {
  name: 'hey-vue',
  data() {
    return {
      messages: ['buddy', 'guy', 'fwen'],
      current: 0,
    };
  },
  methods: {
    previous() {
      let target = this.current - 1;
      if (target < 0) {
        target = this.messages.length - 1;
      }
      this.current = target;
    },
    next() {
      let target = this.current + 1;
      if (target >= this.messages.length) {
        target = 0;
      }
      this.current = target;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.container h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  align-self: stretch;
  margin: 0;
  vertical-align: middle;
  line-height: 1;
}
.container > button {
  margin: auto 0.5rem;
  padding: 1rem;
  background-color: cornflowerblue;
  border: none;
  font-size: 1.5rem;
  color: white;
}
</style>
