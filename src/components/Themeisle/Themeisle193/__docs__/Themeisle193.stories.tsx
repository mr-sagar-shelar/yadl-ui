import type { Meta, StoryObj } from "@storybook/react";
import Themeisle193 from "../Themeisle193";

const meta: Meta<typeof Themeisle193> = { title: "Themeisle/Themeisle193", component: Themeisle193 };

export default meta;
type Story = StoryObj<typeof Themeisle193>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
