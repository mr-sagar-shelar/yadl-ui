import type { Preview } from "@storybook/react";

export const withTheme = (Story) => {
  return (
    <div
      style={{
        margin: 0,
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Story />
    </div>
  );
};

const preview: Preview = {
  decorators: [withTheme],
  initialGlobals: {
    theme: "dark",
    backgrounds: { value: "light" },
  },
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
