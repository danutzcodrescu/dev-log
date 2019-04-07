<template>
  <div class="container">
    <Card>
      <div v-for="item in exercises" :key="item.id">
        Name: {{item.name}}
        Weight: {{item.weight}}
        Reps: {{item.reps}}
        Date: {{item.date | date}}
        <button
          @click="deleteExercise(item.id)"
        >Delete</button>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { Exercise, ExerciseState } from '../shared/interfaces';
import Card from './Card.component.vue';

@Component({ components: { Card } })
export default class ExerciseList extends Vue {
  @State((state: ExerciseState) => state.exercises)
  public exercises!: Exercise[];
  @Action('deleteExercise') public deleteExer!: (id: string) => void;

  public deleteExercise(id: string) {
    this.deleteExer(id);
  }
}
</script>

