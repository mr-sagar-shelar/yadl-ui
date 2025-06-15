import type { Preview } from "@storybook/react";
import "./storybook.css";

export const withTheme = (Story, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  return (
    <div
      data-theme={theme}
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

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", icon: "circlehollow", title: "Light" },
        { value: "dark", icon: "circle", title: "Dark" },
      ],
      showName: true,
    },
  },
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
