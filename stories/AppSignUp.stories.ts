import type { Meta, StoryObj } from "@storybook/vue3";
import AppSignUp from "../components/organisms/AppSignUp.vue";
import { useUserStore } from "@/stores/userStore";
import { defineComponent } from "vue";

// Define the meta for the component
const meta: Meta<typeof AppSignUp> = {
  title: "Organisms/AppSignUp",
  component: AppSignUp,
  tags: ["autodocs"], // For autodocs generation
  parameters: {
    layout: "centered", // Optional: Centers the story layout in the Storybook canvas
  },
};

export default meta;
type Story = StoryObj<typeof AppSignUp>;

// Mock user data for the userStore
const mockCurrentUser = {
  email: "johndoe@example.com",
  name: "John",
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
      components: { AppSignUp },
      template: "<AppSignUp />", // Render the component
    }),
  args: {},
};
