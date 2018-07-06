import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 0,
        text: 'Learn Vue.js',
        done: true,
      },
      {
        id: 1,
        text: 'Go to gym',
        done: false,
      },
      {
        id: 2,
        text: 'Watch netflix',
        done: false,
      },
    ],
  },
  mutations: {

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
