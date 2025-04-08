import type { Meta, StoryObj } from "@storybook/react";
import Themeisle160 from "../Themeisle160";

const meta: Meta<typeof Themeisle160> = { title: "Themeisle/Themeisle160", component: Themeisle160 };

export default meta;
type Story = StoryObj<typeof Themeisle160>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
