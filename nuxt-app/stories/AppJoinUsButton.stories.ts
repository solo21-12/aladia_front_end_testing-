import type { Meta, StoryObj } from "@storybook/vue3";
import AppJoinUsButton from "../components/atoms/AppJoinUsButton.vue";

const meta: Meta<typeof AppJoinUsButton> = {
  title: "Atoms/AppJoinUsButton",
  component: AppJoinUsButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppJoinUsButton>;

// Default story
export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector("button");

    // Simulate a click event to test the button action
    if (button) {
      await button.click();
    } else {
      console.error("Button element not found");
    }
  },
};
