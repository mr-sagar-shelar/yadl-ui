import type { Meta, StoryObj } from "@storybook/react";
import Themeisle250 from "../Themeisle250";

const meta: Meta<typeof Themeisle250> = { title: "Themeisle/Themeisle250", component: Themeisle250 };

export default meta;
type Story = StoryObj<typeof Themeisle250>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
