/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Input from '../components/Input.component.vue';

storiesOf('Input', module)
  .add('with name', () => ({
    components: { Input },
    template: '<Input name="email" value="Random text" />'
    // methods: { action: action('clicked') }
  }))
  .add('different types', () => ({
    components: { Input },
    render() {
      return (
        <div>
          <Input name="email" type="email" />
          <br />
          <Input name="text" />
          <br />
          <Input name="number" type="number" />
          <br />
          <Input name="date" type="date" />
        </div>
      );
    }
  }))
  .add('different classes', () => ({
    components: { Input },
    render() {
      return (
        <div>
          <Input
            name="email"
            type="email"
            class="error"
            value="Mario Andretti"
          />
          <br />
          <Input name="name" class="success" value="Mario Andretti" />
        </div>
      );
    }
  }))
  .add('with message', () => ({
    components: { Input },
    render() {
      return (
        <div>
          <Input
            name="email"
            type="email"
            class="error"
            value="Mario Andretti"
            message="Completely messed up input!"
          />
          <br />
          <Input
            name="name"
            class="success"
            value="Mario Andretti"
            message="Success message"
          />
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
