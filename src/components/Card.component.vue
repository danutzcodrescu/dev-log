<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #d3d3d3;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: inset 0 0 10px darkgrey;
}
</style>


