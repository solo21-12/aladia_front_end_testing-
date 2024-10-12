import type { Meta, StoryObj } from "@storybook/vue3";
import AppWelcome from "../components/molecules/AppWelcome.vue";

const meta: Meta<typeof AppWelcome> = {
  title: "Molecules/AppWelcome",
  component: AppWelcome,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppWelcome>;

// Default story
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "The default state of the AppWelcome component with no additional props.",
      },
    },
  },
};
