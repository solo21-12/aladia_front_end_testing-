// AppText.stories.ts
import AppText from '../../components/atoms/AppText.vue';
import type { Meta, StoryFn } from '@storybook/vue3';


// AppText.stories.ts

export default {
  title: 'Atoms/AppText',
  component: AppText,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    isLink: { control: 'boolean' },
    link: { control: 'text' },
  },
} as Meta<typeof AppText>;

const Template: StoryFn<typeof AppText> = (args) => ({
  components: { AppText },
  setup() {
    return { args };
  },
  template: '<AppText v-bind="args" />',
});

// Default story for AppText component
export const Default = Template.bind({});
Default.args = {
  text: 'Create or access your account from here',
  isLink: false,
};

// Link story for AppText component
export const LinkText = Template.bind({});
LinkText.args = {
  text: 'Click here to learn more',
  isLink: true,
  link: '/learn-more',
};

