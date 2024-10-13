import type { Meta, StoryObj } from "@storybook/vue3";
import AppForgetPassword from "../../components/organisms/AppForgotPassword.vue";
import { useUserStore } from "@/stores/userStore";
import { defineComponent } from "vue";

const meta: Meta<typeof AppForgetPassword> = {
  title: "Organisms/AppForgetPassword",
  component: AppForgetPassword,
  tags: ["autodocs"], 
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof AppForgetPassword>;

// Mock user data for the userStore
const mockCurrentUser = {
  email: "johndoe@example.com",
};

const setupMockUserStore = (email = "") => {
  const userStore = useUserStore();
  userStore.currentUser.email = email; 
};

export const Default: Story = {
  render: () =>
    defineComponent({
      setup() {
        setupMockUserStore("johndoe@example.com"); 
        return {};
      },
      components: { AppForgetPassword },
      template: "<AppForgetPassword />", 
    }),
  args: {},
};

export const NoEmail: Story = {
  render: () =>
    defineComponent({
      setup() {
        setupMockUserStore(""); 
        return {};
      },
      components: { AppForgetPassword },
      template: "<AppForgetPassword />",
    }),
  args: {},
};

