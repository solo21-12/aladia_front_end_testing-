import type { Preview } from "@storybook/vue3";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "dark", // Set dark background as default
      values: [
        {
          name: "light",
          value: "#ffffff", // Light background color
        },
        {
          name: "dark",
          value: "#333333", // Dark background color
        },
      ],
    },
  },
};

export default preview;
