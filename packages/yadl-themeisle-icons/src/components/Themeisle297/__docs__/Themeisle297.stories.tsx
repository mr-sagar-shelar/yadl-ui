import type { Meta, StoryObj } from "@storybook/react";
import Themeisle297 from "../Themeisle297";

const meta: Meta<typeof Themeisle297> = { title: "Themeisle/Themeisle297", component: Themeisle297 };

export default meta;
type Story = StoryObj<typeof Themeisle297>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
