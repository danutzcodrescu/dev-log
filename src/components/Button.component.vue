<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
button {
  border-radius: 5px;
  padding: 5px;
  background-color: aliceblue;
  color: aqua;
  border-color: black;
  &:active {
    background-color: pink;
  }
  &.primary {
    color: blue;
  }
}
</style>

