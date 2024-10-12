import AppBackButton from "../components/atoms/AppBackButton.vue";

import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Atoms/AppBackButton",
  component: AppBackButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof AppBackButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithCustomClickHandler: Story = {
  args: {
    onClick: () => alert("Back button clicked!"),
  },
};
