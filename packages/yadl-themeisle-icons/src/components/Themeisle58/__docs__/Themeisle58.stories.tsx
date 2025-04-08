import type { Meta, StoryObj } from "@storybook/react";
import Themeisle58 from "../Themeisle58";

const meta: Meta<typeof Themeisle58> = { title: "Themeisle/Themeisle58", component: Themeisle58 };

export default meta;
type Story = StoryObj<typeof Themeisle58>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
