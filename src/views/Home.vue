<template>
  <div class="home">
    <form @submit.prevent="addNewTask">
      <input type="text" placeholder="Add task" v-model="newTaskText">
    </form>
    <List :list="incompliteTodos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapMutations } from 'vuex';
import List from '@/components/List';

export default {
  name: 'home',
  components: {
    List,
  },
  data() {
    return {
      newTaskText: '',
    }
  },
  computed: {
    ...mapGetters([
      'incompliteTodos',
    ]),
  },
  methods: {
    ...mapMutations([
      'COMPLETE_TASK',
      'ADD_TASK',
    ]),
    complete(id) {
      console.log(id);
    },
    addNewTask: function() {
      this.ADD_TASK(this.newTaskText);
      this.newTaskText = '';
    },

  }
};
</script>
