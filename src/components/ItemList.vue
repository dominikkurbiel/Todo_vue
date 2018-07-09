
<template>
  <li>
    {{item.text}}
    <button
      v-if="!item.done" 
      v-on:click="$emit('completeTask')"
    >
      Complete task
    </button>
  </li>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    item: Object,
    completeTask: Function,
  },
};
</script>

