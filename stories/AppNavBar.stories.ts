import type { Meta, StoryObj } from "@storybook/vue3";
import AppNavBar from "../components/organisms/AppNavBar.vue";
// Import necessary store hooks if needed
// import { useYourStore } from "@/stores/yourStore"; // Uncomment and adjust if you're using a store

// Define the meta for the component
const meta: Meta<typeof AppNavBar> = {
  title: "Organisms/AppNavBar",
  component: AppNavBar,
  tags: ["autodocs"], // For autodocs generation
  
};

export default meta;
type Story = StoryObj<typeof AppNavBar>;

// Default story
export const Default: Story = {
  render: () => ({
    components: { AppNavBar },
    template: '<AppNavBar :isSignUpVisible="false" />', // Render the component with props
  }),
  args: {},
};

// Story for when sign-up is visible
export const SignUpVisible: Story = {
  render: () => ({
    components: { AppNavBar },
    template: '<AppNavBar :isSignUpVisible="true" />', // Render the component with props
  }),
  args: {},
};
