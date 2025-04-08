import type { Meta, StoryObj } from "@storybook/react";
import Themeisle462 from "../Themeisle462";

const meta: Meta<typeof Themeisle462> = { title: "Themeisle/Themeisle462", component: Themeisle462 };

export default meta;
type Story = StoryObj<typeof Themeisle462>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
