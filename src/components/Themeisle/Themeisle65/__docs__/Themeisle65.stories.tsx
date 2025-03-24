import type { Meta, StoryObj } from "@storybook/react";
import Themeisle65 from "../Themeisle65";

const meta: Meta<typeof Themeisle65> = { title: "Themeisle/Themeisle65", component: Themeisle65 };

export default meta;
type Story = StoryObj<typeof Themeisle65>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
