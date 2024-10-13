import type { Meta, StoryObj } from "@storybook/vue3";
import AppFileUploader from "../../components/atoms/AppFileUploader.vue";

const meta: Meta<typeof AppFileUploader> = {
  title: "Atoms/AppFileUploader",
  component: AppFileUploader,
  tags: ["autodocs"], // Optional, for autodocs generation
};

export default meta;
type Story = StoryObj<typeof AppFileUploader>;

// Default story
export const Default: Story = {
  args: {
    defaultImage: "https://develop.aladia.io/_nuxt/image.ChQ3biW9.png", // Placeholder image URL
  },
};

// Story simulating an image upload
