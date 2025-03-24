import type { Meta, StoryObj } from "@storybook/react";
import Themeisle316 from "../Themeisle316";

const meta: Meta<typeof Themeisle316> = { title: "Themeisle/Themeisle316", component: Themeisle316 };

export default meta;
type Story = StoryObj<typeof Themeisle316>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
