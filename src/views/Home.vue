<template>
  <div class="home">
    <List :list="incompliteTodos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import List from '@/components/List';

export default {
  name: 'home',
  components: {
    List,
  },
  computed: {
    ...mapGetters([
      'incompliteTodos',
    ]),
    ...mapMutations([
      'completeTask'
    ])
  },
  methods: {
    complete(id) {
      console.log(id);
    }
  }
};
</script>
