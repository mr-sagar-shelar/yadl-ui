import type { Meta, StoryObj } from "@storybook/react";
import Themeisle259 from "../Themeisle259";

const meta: Meta<typeof Themeisle259> = { title: "Themeisle/Themeisle259", component: Themeisle259 };

export default meta;
type Story = StoryObj<typeof Themeisle259>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
