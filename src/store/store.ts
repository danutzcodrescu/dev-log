import { Exercise, ExerciseState } from '@/shared/interfaces';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store<ExerciseState>({
  state: {
    exercises: []
  },
  mutations: {
    ADD_EXERCISE(state, exercise: Exercise) {
      state.exercises.push(exercise);
    },
    DELETE_EXERCISE(state, id: string) {
      state.exercises = state.exercises.filter(exercise => exercise.id !== id);
    }
  },

  actions: {
    addExercise({ commit }, exercise: Exercise) {
      commit('ADD_EXERCISE', exercise);
    },
    deleteExercise({ commit }, id: string) {
      commit('DELETE_EXERCISE', id);
    }
  }
});

export default store;
