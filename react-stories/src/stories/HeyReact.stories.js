import React from 'react';
import HeyReact from '../components/HeyReact';

export default {
  title: 'Hey',
  component: HeyReact,
  args: {
    color: 'black',
    backgroundColor: 'red',
  },
};

const Template = args => <HeyReact {...args} />;

export const Standard = Template.bind({});
Standard.args = { name: 'React' };
