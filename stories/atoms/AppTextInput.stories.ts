import type { Meta, StoryObj } from "@storybook/vue3";
import AppTextInput from "../../components/atoms/AppTextInput.vue";

const meta: Meta<typeof AppTextInput> = {
  title: "Atoms/AppTextInput",
  component: AppTextInput,
  tags: ["autodocs"], // For autodocs generation
};

export default meta;
type Story = StoryObj<typeof AppTextInput>;

// Default story
export const Default: Story = {
  args: {
    placeholder: "Enter your name",
    iconClass: "fa-solid fa-user",
    disabled: false,
    rules: [(value: string) => !!value || 'Name is required'],
    modelValue: '',
  },
};

// Password input story
export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
    iconClass: "fa-solid fa-lock",
    disabled: false,
    rules: [(value: string) => value.length >= 6 || 'Password must be at least 6 characters'],
    modelValue: '',
  },
};

// Customized input story
export const Customized: Story = {
  args: {
    placeholder: "Email address",
    iconClass: "fa-solid fa-envelope",
    maxlength: 50,
    disabled: false,
    rules: [
      (value: string) => !!value || 'Email is required',
      (value: string) => /\S+@\S+\.\S+/.test(value) || 'Please enter a valid email',
    ],
    modelValue: '',
  },
};

// Disabled input story
export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    iconClass: "fa-solid fa-ban",
    disabled: true,
    modelValue: '',
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the input in a disabled state, where user interaction is not possible.",
      },
    },
  },
};



