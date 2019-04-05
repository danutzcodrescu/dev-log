<template>
  <div>
    <label :for="name">{{name}}</label>
    <input :class="inputClass" v-if="$attrs.type === undefined" :type="text" v-bind="$attrs">
    <input v-else v-bind="$attrs" :class="inputClass">
    <span v-if="inputClass === 'success'" class="icon sucess">
      <i></i>
    </span>
    <span v-else-if="inputClass === 'error'" class="icon error">
      <i></i>
    </span>
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
}
</script>

<style scoped lang="scss">
@import '../styles/_global.config';
div {
  @extend %font_box;
  position: relative;

  $text-color: #363636;
  $hover-color: #b5b5b5;
  $success-color: #23d160;
  $error-color: #ff3860;

  label {
    text-transform: capitalize;
    color: $text-color;
    display: block;
    font-size: 1rem;
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
    background-color: #fff;
    border: 1px solid #dbdbdb;
    color: $text-color;
    box-shadow: inset 0 1px 2px hsla(0, 0%, 4%, 0.1);
    max-width: 100%;
    width: 100%;
    line-height: 1.5;
    font-size: 1rem;
    // border: 1px solid transparent;
    border-radius: 4px;
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
  }

  input:active,
  input:focus {
    border: 1.25px solid #7957d5;
    box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);
  }

  input:hover {
    border: 1px solid $hover-color;
  }

  input.error {
    border: 1px solid $error-color;
    &:active,
    &:focus {
      box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);
    }
  }

  input.success {
    border: 1px solid $success-color;
    &:active,
    &:focus {
      box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);
    }
  }

  p {
    display: block;
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
  p.success,
  span.sucess {
    color: $success-color;
  }
  p.error,
  span.error {
    color: $error-color;
  }

  span.icon {
    height: 2.25em;
    pointer-events: none;
    position: absolute;
    top: 3px;
    width: 2.25em;
    z-index: 4;
    right: 0;
    text-align: center;
    i:before {
      display: inline-block;
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      font-family: 'Font Awesome 5 Free Solid', 'Font Awesome 5 Free';
      font-size: 24px;
      font-weight: 600;
    }
    i:before {
      content: '\f12a';
    }
  }
}
</style>

