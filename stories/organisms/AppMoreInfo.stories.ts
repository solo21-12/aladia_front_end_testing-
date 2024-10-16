import type { Meta, StoryObj } from "@storybook/vue3";
import AppMoreInfo from "../../components/organisms/AppMoreInfo.vue";
import { useUserStore } from "@/stores/userStore";
import { defineComponent } from "vue";

const meta: Meta<typeof AppMoreInfo> = {
  title: "Organisms/AppMoreInfo",
  component: AppMoreInfo,
  tags: ["autodocs"], // Enable autodocs if needed
};

export default meta;
type Story = StoryObj<typeof AppMoreInfo>;

// Mock user data for userStore
const mockCurrentUser = {
  name: "Jane",
  surname: "Doe",
  email: "jane.doe@example.com",
  password: "password123",
  confirmPassword: "password123",
};

// Helper to setup the mock user store
const setupMockUserStore = () => {
  const userStore = useUserStore();
  userStore.currentUser = mockCurrentUser; // Assign the mocked user data
};

// Default story
export const Default: Story = {
  render: () =>
    defineComponent({
      setup() {
        setupMockUserStore(); // Apply the mocked userStore before rendering
        return {};
      },
      components: { AppMoreInfo },
      template: "<AppMoreInfo />", // Render the component
    }),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "The default state of the AppMoreInfo component with a mocked currentUser.",
      },
    },
  },
};
