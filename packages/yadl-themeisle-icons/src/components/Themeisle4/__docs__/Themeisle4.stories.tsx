import type { Meta, StoryObj } from "@storybook/react";
import Themeisle4 from "../Themeisle4";

const meta: Meta<typeof Themeisle4> = { title: "Themeisle/Themeisle4", component: Themeisle4 };

export default meta;
type Story = StoryObj<typeof Themeisle4>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
