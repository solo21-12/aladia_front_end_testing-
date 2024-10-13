import type { Meta, StoryObj } from "@storybook/vue3";
import AppNavBar from "../../components/organisms/AppNavBar.vue";

const meta: Meta<typeof AppNavBar> = {
  title: "Organisms/AppNavBar",
  component: AppNavBar,
  tags: ["autodocs"], // For generating autodocs
};

export default meta;
type Story = StoryObj<typeof AppNavBar>;

// Default story
export const Default: Story = {
  args: {
    isSignUpVisible: false,
  },
};

// Story for when sign-up is visible
export const SignUpVisible: Story = {
  args: {
    isSignUpVisible: true,
  },
};
