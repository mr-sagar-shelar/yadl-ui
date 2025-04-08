import type { Meta, StoryObj } from "@storybook/react";
import Themeisle34 from "../Themeisle34";

const meta: Meta<typeof Themeisle34> = { title: "Themeisle/Themeisle34", component: Themeisle34 };

export default meta;
type Story = StoryObj<typeof Themeisle34>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
