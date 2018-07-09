import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        text: 'Learn Vue.js',
        done: true,
      },
      {
        text: 'Go to gym',
        done: false,
      },
      {
        text: 'Watch netflix',
        done: false,
      },
    ],
  },
  mutations: {
    ADD_TASK: (state, task) => {
      const newTask = {
        text: task,
        done: false,
      };
      state.todos.push(newTask);
    },
    COMPLETE_TASK(state, item) {
      state.todos.map((todo, i) => {
        if (JSON.stringify(todo) === JSON.stringify(item)) {
          todo.done = true;
        }
      });
    },
  },
  actions: {

  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter(todo => todo.done);
    },
    incompliteTodos: (state) => {
      return state.todos.filter(todo => !todo.done);
    },
  },
});
