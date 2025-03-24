import type { Meta, StoryObj } from "@storybook/react";
import Themeisle18 from "../Themeisle18";

const meta: Meta<typeof Themeisle18> = { title: "Themeisle/Themeisle18", component: Themeisle18 };

export default meta;
type Story = StoryObj<typeof Themeisle18>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
