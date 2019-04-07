<template>
  <div class="card" v-if="exercises.length">
    Exercises:
    <p v-for="(value, key) in groupExercises" :key="key">
      {{key}}:
      <span>{{displayGroups(value)}}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Exercise, ExerciseState } from '../shared/interfaces';
import { State } from 'vuex-class';

@Component({})
export default class ExerciseGroup extends Vue {
  @State((state: ExerciseState) => state.exercises) public exercises!: Exercise[];

  public displayGroups(exercise: string[]) {
    return exercise.join(', ');
  }

  get groupExercises() {
    return this.exercises.reduce(
      (acc, value) => {
        if (!acc[value.name]) {
          acc[value.name] = [`${value.weight}kg x ${value.reps}`];
          return acc;
        }
        acc[value.name] = [
          ...acc[value.name],
          `${value.weight}kg x ${value.reps}`
        ];
        return acc;
      },
      {} as { [key: string]: string[] }
    );
  }
}
</script>

