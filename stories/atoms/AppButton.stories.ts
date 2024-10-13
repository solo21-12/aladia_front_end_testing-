
import AppButton from '../../components/atoms/AppButton.vue'; // Adjust the import path as necessary
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
    title: 'Atoms/AppButton',
    component: AppButton,
    argTypes: {
      buttonVariant: {
        control: {
          type: 'select',
        },
        options: ['Gold', 'Gray'],
      },
      loading: { control: { type: 'boolean' } },
      isDisabled: { control: { type: 'boolean' } },
      buttonText: { control: { type: 'text' } },
      icon: { control: { type: 'text' } },
      onClick: { action: 'clicked' }, // action for button clicks
    },
  tags: ["autodocs"], // For autodocs generation

  } as Meta;
  
  const Template: StoryFn = (args) => ({
    components: { AppButton },
    setup() {
      return { args };
    },
    template: '<AppButton v-bind="args" @toggle-signup="onClick" @on-click="onClick" />',
  });
  
  export const GoldVariant = Template.bind({});
  GoldVariant.args = {
    buttonText: 'Join Us',
    buttonVariant: 'Gold',
    icon: 'fa-solid fa-user-plus', 
    loading: false,
    isDisabled: false,
  };
  
  export const GrayVariant = Template.bind({});
  GrayVariant.args = {
    buttonText: 'Enter',
    buttonVariant: 'Gray',
    icon: '',
    loading: false,
    isDisabled: false,
  };
  
  export const Loading = Template.bind({});
  Loading.args = {
    buttonText: 'Submitting...',
    buttonVariant: 'Gold',
    loading: true,
    isDisabled: false,
  };
  
  export const Disabled = Template.bind({});
  Disabled.args = {
    buttonText: 'Disabled',
    buttonVariant: 'Gray',
    loading: false,
    isDisabled: true,
  };
  
  export const CustomIcon = Template.bind({});
  CustomIcon.args = {
    buttonText: 'With Icon',
    buttonVariant: 'Gold',
    icon: 'fa-solid fa-check', 
    loading: false,
    isDisabled: false,
  };