<template>
  <div class="container">
    <div class="card">
      <p>
        Create exercise
        <i class="fas fa-exclamation"/>
      </p>
      <form @submit.prevent="submitForm">
        <Input name="name" v-model="model.name"/>
        <Input name="weight" type="number" min="0" v-model.number="model.weight"/>
        <Input name="reps" type="number" min="1" v-model.number="model.reps"/>
        <Button type="submit" class="info">Test</Button>
      </form>
    </div>
    <br>
    <div class="card" v-for="item in exercises" :key="item.id">
      Name: {{item.name}}
      Weight: {{item.weight}}
      Reps: {{item.reps}}
      Date: {{item.date | date}}
      <button
        @click="deleteExercise(item.id)"
      >Delete</button>
    </div>

    <div class="card">
      Exercises:
      <p v-for="(value, key) in groupExercises" :key="key">
        {{key}}:
        <span>{{displayGroups(value)}}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Input from '@/components/Input.component.vue';
import Button from '@/components/Button.component.vue';
import uuid from 'uuid/v4';

interface Exercise {
  id: string;
  name: string;
  weight: number;
  reps: number;
  date: Date;
}

Vue.filter('date', (val: Date) => val.toLocaleDateString());

@Component({
  components: {
    HelloWorld,
    Input,
    Button
  }
})
export default class Home extends Vue {
  public exercises: Exercise[] = [];
  public model: { weight: number; reps: number; name: string };
  private initialValues = {
    weight: 0,
    reps: 1,
    name: ''
  };

  constructor() {
    super();
    this.model = { ...this.initialValues };
  }

  public submitForm() {
    const elem = {
      id: uuid(),
      weight: this.model.weight,
      reps: this.model.reps,
      date: new Date(),
      name: this.model.name
    };
    this.exercises = [...this.exercises, elem];
    this.model = { ...this.initialValues };
  }

  public deleteExercise(id: string) {
    this.exercises = this.exercises.filter(exercise => exercise.id !== id);
  }

  public displayGroups(exercises: string[]) {
    return exercises.join(', ');
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

<style lang="scss">
.test {
  input {
    max-width: 40px;
  }
}
</style>

