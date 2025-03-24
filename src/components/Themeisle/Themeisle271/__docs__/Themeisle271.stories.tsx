import type { Meta, StoryObj } from "@storybook/react";
import Themeisle271 from "../Themeisle271";

const meta: Meta<typeof Themeisle271> = { title: "Themeisle/Themeisle271", component: Themeisle271 };

export default meta;
type Story = StoryObj<typeof Themeisle271>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
