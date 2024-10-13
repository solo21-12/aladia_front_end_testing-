import type { Meta, StoryObj } from "@storybook/vue3";
import AppLogin from "../../components/organisms/AppLogin.vue";

const meta: Meta<typeof AppLogin> = {
  title: "Organisms/AppLogin",
  component: AppLogin,
  tags: ["autodocs"], // For autodocs generation
};

export default meta;
type Story = StoryObj<typeof AppLogin>;

// Default story
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "The default state of the AppLogin component with no additional props passed.",
      },
    },
  },
};
