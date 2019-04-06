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
@import '../styles/_variables';
button {
  margin: 0.5em 0;
  font-size: $font-size;
  border-radius: $border-radius;
  background-color: $white;
  border: $white-border;
  color: $text-color;
  cursor: pointer;
  justify-content: center;
  padding: $padding-top-bottom $padding-left-right;
  // padding-left: 1em;
  // padding-right: 1em;
  // padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
  &:hover {
    border-color: $hover-color;
    color: $text-color;
  }
  &.primary {
    @include button($primary-color, $white, $primary-color-hover);
  }
  &.info {
    @include button($info-color, $white, $info-color-hover);
  }
  &.success {
    @include button($success-color, $white, $success-color-hover);
  }

  &.warning {
    @include button($warning-color, $black-transparent, $warning-color-hover);
  }
  &.danger {
    @include button($error-color, $white, $error-color-hover);
  }
}
</style>

