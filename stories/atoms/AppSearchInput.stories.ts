import type { Meta, StoryObj } from "@storybook/vue3";
import AppSearchInput from "../../components/atoms/AppSearchInput.vue";

const meta: Meta<typeof AppSearchInput> = {
  title: "Atoms/AppSearchInput",
  component: AppSearchInput,
  tags: ["autodocs"], // For autodocs generation
};

export default meta;
type Story = StoryObj<typeof AppSearchInput>;

// Default story
export const WithValue: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector("input");

    // Simulate typing in the input
    if (input) {
      await input.focus();
      input.value = "JavaScript";
      await input.dispatchEvent(new Event("input"));
    } else {
      console.error("Input element not found");
    }

    // Optionally, log the current value for verification
    if (input) {
      console.log("Current input value:", input.value);
    }
  },
};
