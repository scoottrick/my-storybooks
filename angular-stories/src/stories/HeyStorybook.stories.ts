import { Meta, Story } from '@storybook/angular';
import { HeyStorybookComponent } from './hey-storybook.component';

export default {
  title: 'Hey',
  component: HeyStorybookComponent,
} as Meta;

export const Example: Story = () => ({
  props: {},
});
