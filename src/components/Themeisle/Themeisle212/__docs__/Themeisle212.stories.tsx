import type { Meta, StoryObj } from "@storybook/react";
import Themeisle212 from "../Themeisle212";

const meta: Meta<typeof Themeisle212> = { title: "Themeisle/Themeisle212", component: Themeisle212 };

export default meta;
type Story = StoryObj<typeof Themeisle212>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
