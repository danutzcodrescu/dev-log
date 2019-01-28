<template>
  <div>
    <label :for="name">{{name}}</label>
    <input
      v-if="type==='text'"
      :type="type"
      :name="name"
      :id="name"
      :required="required"
      :value="value"
    >
    <input
      v-else
      :type="type"
      :name="name"
      :id="name"
      :min="min ? min: false"
      :max="max ? max : false"
      :required="required"
      :value="value"
    >
    <p v-if="message">{{message}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
  @Prop({ type: String, required: true }) private name!: string;
  @Prop({
    type: String,
    default: 'text',
    validator: value => ['text', 'number', 'date', 'email'].includes(value)
  })
  private type!: string;
  @Prop({ type: String }) private min?: string;
  @Prop({ type: String }) private max?: string;
  @Prop({ type: Boolean, default: false }) private required!: boolean;
  @Prop({ type: String, default: '' }) private value!: string;
  @Prop({ type: String }) private message!: string;
}
</script>

<style scoped lang="scss">
@import '../styles/_global.config';
div {
  @extend %font_box;

  label {
    text-transform: capitalize;
    color: #363636;
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
    color: #363636;
    box-shadow: inset 0 1px 2px hsla(0, 0%, 4%, 0.1);
    max-width: 100%;
    width: 100%;
    line-height: 1.5;
    font-size: 1rem;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
  }

  // &:not(.error):not(.success) input:active,
  // &:not(.error):not(.success) input:focus {
  //   border: 1.25px solid #7957d5;
  //   box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);
  // }

  &:not(.error) input:hover {
    border: 1px solid #b5b5b5;
  }

  &.error input {
    border: 1px solid #ff3860;
    &:active,
    &:focus {
      box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);
    }
  }
  &.success input {
    border: 1px solid #23d160;
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
  .success p {
    color: #23d160;
  }
  .error p {
    color: #ff3860;
  }
}
</style>

