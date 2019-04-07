<template>
  <div>
    <CreateExercise/>
    <br>
    <ExerciseList/>
    <br>
    <ExerciseGroup/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CreateExercise from '@/components/CreateExercise.component.vue';
import ExerciseList from '@/components/ExerciseList.component.vue';
import ExerciseGroup from '@/components/ExerciseGroup.component.vue';

@Component({
  components: {
    CreateExercise,
    ExerciseList,
    ExerciseGroup
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
</style>

