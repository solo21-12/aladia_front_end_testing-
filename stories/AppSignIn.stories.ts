import type { Meta, StoryObj } from "@storybook/vue3";
import AppSignIn from "../components/organisms/AppSignIn.vue";

const meta: Meta<typeof AppSignIn> = {
  title: "Organisms/AppSignIn",
  component: AppSignIn,
  tags: ["autodocs"], // For generating autodocs
};

export default meta;
type Story = StoryObj<typeof AppSignIn>;

// Default story
export const Default: Story = {
  args: {
    // Add any props or data that you might want to pass to the component here
    // For example:
    // username: '',
    // password: '',
  },
};
