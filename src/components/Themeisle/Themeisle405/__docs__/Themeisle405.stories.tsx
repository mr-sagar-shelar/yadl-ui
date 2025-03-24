import type { Meta, StoryObj } from "@storybook/react";
import Themeisle405 from "../Themeisle405";

const meta: Meta<typeof Themeisle405> = { title: "Themeisle/Themeisle405", component: Themeisle405 };

export default meta;
type Story = StoryObj<typeof Themeisle405>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
