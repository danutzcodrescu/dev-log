<template>
  <div id="app">
    <Menu>
      <template slot="navbar-start">
        <router-link class="navbar-item nav-link" to="/">Home</router-link>
      <router-link class="navbar-item nav-link" to="/about">About</router-link>
      </template>
       
    </Menu>
     
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/components/Menu.component.vue'

@Component(({
  components: {
   Menu
  }
}))
export default class App extends Vue {}
</script>


<style lang="scss">
@import './styles/_variables.scss';
.container {
  padding: 20px;
}

.nav-link {
  font-size: 1.2rem;
  text-decoration: none;
  color: $text-color;
  padding: $padding-top-bottom $padding-left-right;
  &.router-link-exact-active {
    background-color: $black-transparent;
    color: $white;
  }
}

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
