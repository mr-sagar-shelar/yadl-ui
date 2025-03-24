import type { Meta, StoryObj } from "@storybook/react";
import Themeisle32 from "../Themeisle32";

const meta: Meta<typeof Themeisle32> = { title: "Themeisle/Themeisle32", component: Themeisle32 };

export default meta;
type Story = StoryObj<typeof Themeisle32>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
