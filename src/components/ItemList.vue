
<template>
  <li @click="clicked">{{item.text}}</li>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    item: Object,
    handleClick: Function,
  },
  methods: {
    clicked() {
      this.handleClick();
    },
  },
};
</script>

