import type { Meta, StoryObj } from "@storybook/react";
import Themeisle381 from "../Themeisle381";

const meta: Meta<typeof Themeisle381> = { title: "Themeisle/Themeisle381", component: Themeisle381 };

export default meta;
type Story = StoryObj<typeof Themeisle381>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
