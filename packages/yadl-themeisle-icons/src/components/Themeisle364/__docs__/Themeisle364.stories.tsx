import type { Meta, StoryObj } from "@storybook/react";
import Themeisle364 from "../Themeisle364";

const meta: Meta<typeof Themeisle364> = { title: "Themeisle/Themeisle364", component: Themeisle364 };

export default meta;
type Story = StoryObj<typeof Themeisle364>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
