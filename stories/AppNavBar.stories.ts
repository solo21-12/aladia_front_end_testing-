import { defineComponent, provide } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import AppNavBar from '../components/organisms/AppNavBar.vue';

// Mock components to avoid dependency issues
const MockAppJoinUsButton = {
  template: '<button @click="$emit(\'toggle-signup\')">Join Us</button>',
};

const MockAppSearchInput = {
  template: '<input type="text" placeholder="Search..." />',
};

const meta: Meta<typeof AppNavBar> = {
  title: 'Organisms/AppNavBar',
  component: AppNavBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppNavBar>;

// Mock Nuxt instance
const mockNuxtInstance = {
  $router: {
    push: () => {},
  },
  $store: {
    state: {},
    dispatch: () => {},
  },
};

// Default story
export const Default: Story = {
  render: () => ({
    components: { AppNavBar, MockAppJoinUsButton, MockAppSearchInput },
    setup() {
      provide('$nuxt', mockNuxtInstance); // Provide the mock Nuxt instance
      return {};
    },
    template: '<AppNavBar :isSignUpVisible="false" />',
  }),
};

