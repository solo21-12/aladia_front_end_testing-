import AppCodeInput from "../../components/atoms/AppCodeInput.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { userEvent } from "@storybook/test";

// Adjust the path according to your project structure

const meta: Meta<typeof AppCodeInput> = {
  title: "Atoms/AppCodeInput",
  component: AppCodeInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    code: "",
    index: 0,
  },
};

// Play function to simulate user interaction
export const WithUserInput: Story = {
  args: {
    code: "",
    index: 1,
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector("input");
    if (input) {
      // Simulate user typing a number
      await userEvent.type(input, "8");
    }
  },
};
