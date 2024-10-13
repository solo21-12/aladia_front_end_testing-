import AppMessage from "../../components/organisms/AppMessage.vue";

import type { Meta, StoryObj } from "@storybook/vue3";
import { useUserStore } from "@/stores/userStore";
import { defineComponent } from "vue";

const meta: Meta<typeof AppMessage> = {
  title: "Organisms/AppMessage",
  component: AppMessage,
  tags: ["autodocs"], // For autodocs generation
};

export default meta;
type Story = StoryObj<typeof AppMessage>;

// Mock user data for userStore
const mockCurrentUser = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  surname: "Doe",
  password: "password123",
  confirmPassword: "password123",
};

// Helper to setup the mock user store
const setupMockUserStore = () => {
  const userStore = useUserStore();
  userStore.currentUser = mockCurrentUser; // Assign the mocked user data
};

// Default story
export const Default: Story = {
  render: () =>
    defineComponent({
      setup() {
        setupMockUserStore(); // Apply the mocked userStore before rendering
        return {};
      },
      components: { AppMessage },
      template: "<AppMessage />", // Render the component
    }),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "The default state of the AppMessage component with a mocked currentUser.",
      },
    },
  },
};
