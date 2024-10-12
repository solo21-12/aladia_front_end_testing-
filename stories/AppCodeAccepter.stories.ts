import type { Meta, StoryObj } from "@storybook/vue3";
import AppCodeAccepter from "../components/organisms/AppCodeAccepter.vue";
import { useUserStore } from "@/stores/userStore";
import { defineComponent } from "vue";

const meta: Meta<typeof AppCodeAccepter> = {
  title: "Organisms/AppCodeAccepter",
  component: AppCodeAccepter,
  tags: ["autodocs"], // For autodocs generation
};

export default meta;
type Story = StoryObj<typeof AppCodeAccepter>;

// Mock user data
const mockCurrentUser = {
  name: "John Doe",
  email: "johndoe@example.com",
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
      components: { AppCodeAccepter },
      template: "<AppCodeAccepter />", // Render the component
    }),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "The default state of the AppCodeAccepter component with mocked currentUser.",
      },
    },
  },
};
