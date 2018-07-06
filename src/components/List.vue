<template>
  <div class="list">
    test
    <ul>
      <Item
        v-for="item in list"
        v-bind:key="item.id"
        v-bind:item="item"
        :handleClick="clicked">
      </Item>
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
  data() {
    return {
      list: [
        {
          id: 0,
          text: 'Mleko',
        },
        {
          id: 1,
          text: 'Masło',
        },
        {
          id: 2,
          text: 'Lody',
        },
      ],
    };
  },
  methods: {
    clicked() {
      console.log('clicked');
    },
  },
};
</script>
