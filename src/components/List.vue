<template>
  <div class="list">
    <ul>
      <Item
        v-for="(item, index) in list"
        v-bind:key="index"
        v-bind:item="item"
        v-on:completeTask="doTask(item)"
      />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapMutations } from 'vuex';
import Item from './ItemList.vue';

export default {
  name: 'list',
  components: {
    Item,
  },
  props: {
    list: Array,
    completeTask: Function,
  },
  methods: {
    ...mapMutations([
      'COMPLETE_TASK'
    ]),
    doTask: function(item) {
      this.COMPLETE_TASK(item);
    }
  },
};
</script>


<style lang="scss" scoped>
  ul {
    margin: 0 auto;
    list-style-type: none;
    max-width: 600px;
    padding: 0;

    li {
      margin: 10px 0;
      padding: 20px;
      border: 1px solid green;
      text-align: left;
      border-radius: 5px;
    }
  }
</style>
