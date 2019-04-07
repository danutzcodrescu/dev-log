<template>
  <div class="container">
    <Card>
      <p>Create exercise</p>
      <form @submit.prevent="submitForm">
        <Input name="name" v-model="model.name"/>
        <Input name="weight" type="number" min="0" v-model.number="model.weight"/>
        <Input name="reps" type="number" min="1" v-model.number="model.reps"/>
        <Button type="submit" class="info">Test</Button>
      </form>
    </Card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import Input from '@/components/Input.component.vue';
import Button from '@/components/Button.component.vue';
import uuid from 'uuid/v4';
import { Exercise } from '../shared/interfaces';
import Card from './Card.component.vue';

Vue.filter('date', (val: Date) => val.toLocaleDateString());

@Component({
  components: {
    Input,
    Button,
    Card
  }
})
export default class CreateExercise extends Vue {
  @Action('addExercise') public addExercise!: (exercise: Exercise) => void;
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
    this.addExercise(elem);
    this.model = { ...this.initialValues };
  }
}
</script>

<style lang="sass" scoped>

</style>

