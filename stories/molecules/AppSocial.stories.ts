import type { Meta, StoryObj } from "@storybook/vue3";
import AppSocial from "../../components/molecules/AppSocial.vue";

const meta: Meta<typeof AppSocial> = {
  title: "Molecules/AppSocial",
  component: AppSocial,
  tags: ["autodocs"], // For autodocs generation
};

export default meta;
type Story = StoryObj<typeof AppSocial>;

// Default story
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "The default configuration for the AppSocial component, typically showing social media buttons for authentication or sharing.",
      },
    },
  },
};
