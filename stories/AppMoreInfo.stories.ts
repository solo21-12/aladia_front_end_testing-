import { defineComponent, ref, provide } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import AppMoreInfo from '../components/organisms/AppMoreInfo.vue';

// Mock user store
const mockUserStore = {
  currentUser: {
    name: "Jane",
    surname: "Doe",
    email: "jane.doe@example.com",
    password: "password123",
    confirmPassword: "password123",
  },
  registerUser: () => {
    console.log('Mock register user called');
  },
};

// Setup a mock for the user store
const setupMockUserStore = () => {
  const store = ref(mockUserStore);
  provide('userStore', store);
};

const meta: Meta<typeof AppMoreInfo> = {
  title: 'Organisms/AppMoreInfo',
  component: AppMoreInfo,
  tags: ['autodocs'], // Enable autodocs if needed
};

export default meta;
type Story = StoryObj<typeof AppMoreInfo>;

// Default story
export const Default: Story = {
  render: () =>
    defineComponent({
      setup() {
        setupMockUserStore(); // Apply the mocked userStore before rendering
        return {};
      },
      components: { AppMoreInfo },
      template: '<AppMoreInfo />', // Render the component
    }),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'The default state of the AppMoreInfo component with a mocked currentUser.',
      },
    },
  },
};
