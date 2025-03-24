import type { Meta, StoryObj } from "@storybook/react";
import Themeisle6 from "../Themeisle6";

const meta: Meta<typeof Themeisle6> = { title: "Themeisle/Themeisle6", component: Themeisle6 };

export default meta;
type Story = StoryObj<typeof Themeisle6>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
