import { Meta, Story } from '@storybook/angular';
import { HeyStorybookComponent } from './hey-storybook.component';

export default {
  title: 'Hey',
  component: HeyStorybookComponent,
} as Meta;

const Template: Story = args => ({ props: args });

export const Standard = Template.bind({});

export const Guy = Template.bind({});
Guy.args = { name: 'guy' };

export const Fwen = Template.bind({});
Fwen.args = { name: 'fwen' };
