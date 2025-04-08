import type { Preview } from "@storybook/react";
import "./storybook.css";

import React from "react";

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
        { value: "cupcake", icon: "circle", title: "Cupcake" },
        { value: "bumblebee", icon: "circle", title: "Bumblebee" },
        { value: "emerald", icon: "circle", title: "Emerald" },
        { value: "corporate", icon: "circle", title: "Corporate" },
        { value: "synthwave", icon: "circle", title: "Synthwave" },
        { value: "retro", icon: "circle", title: "Retro" },
        { value: "cyberpunk", icon: "circle", title: "Cyberpunk" },
        { value: "valentine", icon: "circle", title: "Valentine" },
        { value: "halloween", icon: "circle", title: "Halloween" },
        { value: "garden", icon: "circle", title: "Harden" },
        { value: "forest", icon: "circle", title: "Forest" },
        { value: "aqua", icon: "circle", title: "Aqua" },
        { value: "lofi", icon: "circle", title: "Lofi" },
        { value: "pastel", icon: "circle", title: "Pastel" },
        { value: "fantasy", icon: "circle", title: "Fantasy" },
        { value: "wireframe", icon: "circle", title: "Wireframe" },
        { value: "black", icon: "circle", title: "Black" },
        { value: "luxury", icon: "circle", title: "Luxury" },
        { value: "dracula", icon: "circle", title: "Dracula" },
        { value: "cmyk", icon: "circle", title: "Cmyk" },
        { value: "autumn", icon: "circle", title: "Autumn" },
        { value: "business", icon: "circle", title: "Ausiness" },
        { value: "acid", icon: "circle", title: "Acid" },
        { value: "lemonade", icon: "circle", title: "Lemonade" },
        { value: "night", icon: "circle", title: "Night" },
        { value: "coffee", icon: "circle", title: "Coffee" },
        { value: "winter", icon: "circle", title: "Winter" },
        { value: "dim", icon: "circle", title: "Dim" },
        { value: "nord", icon: "circle", title: "Nord" },
        { value: "sunset", icon: "circle", title: "Sunset" },
        { value: "caramellatte", icon: "circle", title: "Caramellatte" },
        { value: "abyss", icon: "circle", title: "Abyss" },
        { value: "silk", icon: "circle", title: "Silk" },
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
