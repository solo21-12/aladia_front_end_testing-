// HeaderText.stories.ts
import AppHeaderText from '../../components/atoms/AppHeaderText.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Atoms/HeaderText',
  component: AppHeaderText,
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
  },
} as Meta<typeof AppHeaderText>;

const Template: StoryFn<typeof AppHeaderText> = (args) => ({
  components: { AppHeaderText },
  setup() {
    return { args };
  },
  template: '<HeaderText v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  header: 'Welcome to Our Application',
};

