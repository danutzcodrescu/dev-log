<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <slot name="navbar-brand"></slot>
      <!-- <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>-->

      <!-- <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      </a>-->
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <slot name="navbar-start"></slot>
      </div>

      <div class="navbar-end">
        <slot name="navbar-end"></slot>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';
.navbar {
  background-color: $white;
  min-height: 3.25rem;
  position: relative;
  z-index: 30;
  display: flex;
  align-items: stretch;
  .navbar-item {
    display: flex;
    align-items: center;
    margin: 0 5px;
  }
  .navbar-brand {
    align-items: stretch;
    display: flex;
    flex-shrink: 0;
    min-height: 3.25rem;

    img {
      height: auto;
      max-width: 100%;
    }
  }

  .navbar-menu {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: space-between;
  }

  .navbar-start {
    display: flex;
    justify-content: flex-start;
  }

  .navbar-right {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
