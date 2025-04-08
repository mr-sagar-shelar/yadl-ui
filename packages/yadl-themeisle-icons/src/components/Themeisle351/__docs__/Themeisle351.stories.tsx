import type { Meta, StoryObj } from "@storybook/react";
import Themeisle351 from "../Themeisle351";

const meta: Meta<typeof Themeisle351> = { title: "Themeisle/Themeisle351", component: Themeisle351 };

export default meta;
type Story = StoryObj<typeof Themeisle351>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
