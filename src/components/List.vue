<template>
  <div class="list">
    <ul>
      <Item
        v-for="item in list"
        v-bind:key="item.id"
        v-bind:item="item"
      />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from './ItemList.vue';

export default {
  name: 'list',
  components: {
    Item,
  },
  props: {
    list: Array,
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
