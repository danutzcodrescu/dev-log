<template>
  <div class="container">
    <div class="card">
      <p>Create exercise</p>
      <form @submit="checkForm">
        <Input class="test" name="name"/>
        <Input class="test" name="weight" type="number" min="3"/>
        <Input class="test" name="reps" type="number" min="0"/>
        <Button type="submit" class="primary">Test</Button>
      </form>
    </div>
    <br>
    <div class="card" v-for="item in exercises">
      Weight: {{item.weight}}
      Reps: {{item.reps}}
      Date: {{item.date | date}}
      <button
        @click="deleteExercise(item.id)"
      >Delete</button>
    </div>

    <div class="card">Exercises:
      <p v-for="(value, key) in groupExercises">
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
  public checkForm(event: any) {
    event.preventDefault();
    const elem = {
      id: uuid(),
      weight: (event.target as any).weight.value,
      reps: (event.target as any).reps.value,
      date: new Date(),
      name: event.target.name.value
    };
    this.exercises = [...this.exercises, elem];
    event.target.reset();
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

