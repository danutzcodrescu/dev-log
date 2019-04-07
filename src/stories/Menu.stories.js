import { storiesOf } from '@storybook/vue';
import Button from '../components/Button.component.vue';
import Menu from '../components/Menu.component.vue';

storiesOf('Menu', module)
  .add('basic menu', () => ({
    components: { Menu, Button },
    render() {
      return (
        <Menu>
          <a slot="navbar-brand" class="navbar-item" href="https://vuejs.org">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>
          <template slot="navbar-start">
            <a class="navbar-item">Home</a>

            <a class="navbar-item">Documentation</a>
            <a class="navbar-item">Contact</a>
          </template>
          <div class="navbar-item" slot="navbar-end">
            <div class="buttons">
              <Button class="primary">
                <strong>Sign up</strong>
              </Button>

              <Button class="success">Log in</Button>
            </div>
          </div>
        </Menu>
      );
    }
  }))
  .add('without brand', () => ({
    components: { Menu, Button },
    render() {
      return (
        <Menu>
          <template slot="navbar-start">
            <a class="navbar-item">Home</a>

            <a class="navbar-item">Documentation</a>
            <a class="navbar-item">Contact</a>
          </template>
          <div class="navbar-item" slot="navbar-end">
            <div class="buttons">
              <Button class="primary">
                <strong>Sign up</strong>
              </Button>

              <Button class="success">Log in</Button>
            </div>
          </div>
        </Menu>
      );
    }
  }));
