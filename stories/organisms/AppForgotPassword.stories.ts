import type { Meta, StoryObj } from "@storybook/vue3";
import AppForgotPassword from "../../components/organisms/AppForgotPassword.vue";
import { useUserStore } from "@/stores/userStore";
import { defineComponent } from "vue";

// Define the meta for the component
const meta: Meta<typeof AppForgotPassword> = {
  title: "Organisms/AppForgotPassword",
  component: AppForgotPassword,
  tags: ["autodocs"], // For autodocs generation
  parameters: {
    layout: "centered", // Optional: Centers the story layout in the Storybook canvas
  },
};

export default meta;
type Story = StoryObj<typeof AppForgotPassword>;

// Mock user data for the userStore
const mockCurrentUser = {
  email: "", // Initially empty for default story
};

// Helper to setup the mock user store
const setupMockUserStore = (email = "") => {
  const userStore = useUserStore();
  userStore.currentUser.email = email; // Assign the mocked email
};



// Story for when the email is valid
export const Default: Story = {
  render: () =>
    defineComponent({
      setup() {
        setupMockUserStore("valid.email@example.com"); // Prepopulate a valid email
        return {};
      },
      components: { AppForgotPassword },
      template: "<AppForgotPassword />",
    }),
  args: {},
};

