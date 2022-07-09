import HeyVue from './HeyVue.vue';

export default {
  title: 'Example/Hey',
  component: HeyVue,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = args => ({
  components: { HeyVue },
  setup() {
    return { ...args };
  },
  template: '<hey-vue />',
});

export const Example = Template.bind({});
Example.args = {};
