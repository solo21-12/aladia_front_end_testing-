import type { Meta, StoryObj } from "@storybook/vue3";
import AppSubmitButton from "../components/atoms/AppSubmitButton.vue";

const meta: Meta<typeof AppSubmitButton> = {
  title: "Atoms/AppSubmitButton",
  component: AppSubmitButton,
  tags: ["autodocs"], // For autodocs generation
};

export default meta;
type Story = StoryObj<typeof AppSubmitButton>;

// Default story
export const Default: Story = {
  args: {
    buttonText: "Submit",
    loading: false,
    onClick: () => alert("Submit Button Clicked"),
  },
};

// Loading story
export const Loading: Story = {
  args: {
    buttonText: "Submitting...",
    loading: true,
    onClick: () => alert("This should not be triggered"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "The button shows a spinner when loading is true, and clicking it does not trigger the onClick function.",
      },
    },
  },
};
