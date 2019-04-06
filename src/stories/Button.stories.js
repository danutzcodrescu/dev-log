/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import Button from '../components/Button.component.vue';

storiesOf('Button', module)
  .add('basic button', () => ({
    components: { Button },
    template: '<Button>Test</Button>'
    // methods: { action: action('clicked') }
  }))
  .add('different classes', () => ({
    components: { Button },
    render() {
      return (
        <div style="display:flex;justify-content:space-around;">
          <Button class="primary">Primary</Button>
          <Button class="info">Info</Button>
          <Button class="success">Success</Button>
          <Button class="warning">Warning</Button>
          <Button class="danger">Danger</Button>
        </div>
      );
    }
  }));

// .add('with JSX', () => ({
//   components: { MyButton },
//   render() {
//     return <my-button onClick={this.action}>With JSX</my-button>;
//   },
//   methods: { action: linkTo('Button', 'with some emoji') }
// }))
// .add('with some emoji', () => ({
//   components: { MyButton },
//   template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
//   methods: { action: action('clicked') }
// }))
