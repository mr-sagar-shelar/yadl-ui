import type { Meta, StoryObj } from "@storybook/react";
import Themeisle30 from "../Themeisle30";

const meta: Meta<typeof Themeisle30> = { title: "Themeisle/Themeisle30", component: Themeisle30 };

export default meta;
type Story = StoryObj<typeof Themeisle30>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
