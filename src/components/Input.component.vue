<template>
  <div>
    <label :for="$attrs.name">{{$attrs.name}}</label>
    <input
      :class="inputClass"
      v-if="$attrs.type === undefined"
      type="text"
      v-bind="$attrs"
      @input="updateMethod"
    >
    <input v-else v-bind="$attrs" :class="inputClass" @input="updateMethod">
    <!-- <span v-if="inputClass === 'success'" class="icon sucess">
      <i></i>
    </span>
    <span v-else-if="inputClass === 'error'" class="icon error">
      <i></i>
    </span>-->
    <p v-if="message" :class="inputClass">{{message}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
  public inheritAttrs = false;
  @Prop({ type: String, default: '' })
  private inputClass?: string;
  @Prop({ type: String })
  private message?: string;

  public updateMethod(event: any) {
    this.$emit('input', event.target.value);
  }
}
</script>

<style scoped lang="scss">
@import '../styles/_global.config';
@import '../styles/_variables';
div {
  @extend %font_box;
  // position: relative;

  &.inline {
    display: grid;
    grid-template-columns: 4.2rem 1fr;
    grid-column-gap: 1rem;
    align-items: center;
    justify-items: center;

    label {
      margin-top: 7px;
      &:after {
        content: ':';
        margin-left: 5px;
      }
    }
  }

  label {
    text-transform: capitalize;
    color: $text-color;
    display: block;
    font-size: $font-size;
    font-weight: 600;
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
    // &:after {
    //   content: ':';
    //   margin: 0 3px;
    // }
  }

  input {
    outline: none;
    background-color: $white;
    border: $white-border;
    color: $text-color;
    box-shadow: $dark-box-shadow;
    max-width: 100%;
    width: 100%;
    line-height: 1.5;
    font-size: $font-size;
    // border: 1px solid transparent;
    border-radius: $border-radius;
    padding: $padding-top-bottom $padding-left-right;
  }

  input:active,
  input:focus {
    border: $input-border-active;
    box-shadow: $input-box-shadow-active;
  }

  input:hover {
    border: $input-border-hover;
  }

  input.error {
    @include input($input-border-error, $input-box-shadow-error);
  }

  input.success {
    @include input($input-border-success, $input-box-shadow-success);
  }

  p {
    display: block;
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }

  $classes: success, error;
  $colors: (
    success: $success-color,
    error: $error-color
  );

  @each $class in $classes {
    p.#{$class},
    span.#{$class} {
      color: map-get($colors, $class);
    }
  }
  // p.success,
  // span.sucess {
  //   color: $success-color;
  // }
  // p.error,
  // span.error {
  //   color: $error-color;
  // }

  // span.icon {
  //   height: 2.25em;
  //   pointer-events: none;
  //   position: absolute;
  //   top: 3px;
  //   width: 2.25em;
  //   z-index: 4;
  //   right: 0;
  //   text-align: center;
  //   i:before {
  //     display: inline-block;
  //     font-style: normal;
  //     font-variant: normal;
  //     text-rendering: auto;
  //     -webkit-font-smoothing: antialiased;
  //     font-family: 'Font Awesome 5 Free Solid', 'Font Awesome 5 Free';
  //     font-size: 24px;
  //     font-weight: 600;
  //   }
  //   i:before {
  //     content: '\f12a';
  //   }
  // }
}
</style>

