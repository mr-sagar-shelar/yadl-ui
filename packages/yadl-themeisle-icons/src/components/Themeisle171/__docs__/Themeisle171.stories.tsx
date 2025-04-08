import type { Meta, StoryObj } from "@storybook/react";
import Themeisle171 from "../Themeisle171";

const meta: Meta<typeof Themeisle171> = { title: "Themeisle/Themeisle171", component: Themeisle171 };

export default meta;
type Story = StoryObj<typeof Themeisle171>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
