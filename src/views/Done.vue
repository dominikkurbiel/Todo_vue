<template>
  <div class="about">
    <List :list="doneTodos"/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import List from '@/components/List';

export default {
  name: 'done',
  components: {
    List,
  },
  computed: {
    ...mapGetters([
      'doneTodos',
    ]),
  },
};
</script>