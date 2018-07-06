<template>
  <div class="home">
    <p>{{message}}</p>
    <List />
    <img src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue';

export default {
  name: 'home',
  components: {
    List,
  },
  computed: {
    message() {
      return this.$store.state.message;
    },
  },
};
</script>
