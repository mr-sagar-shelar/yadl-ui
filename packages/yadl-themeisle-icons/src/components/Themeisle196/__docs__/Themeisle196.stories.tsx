import type { Meta, StoryObj } from "@storybook/react";
import Themeisle196 from "../Themeisle196";

const meta: Meta<typeof Themeisle196> = { title: "Themeisle/Themeisle196", component: Themeisle196 };

export default meta;
type Story = StoryObj<typeof Themeisle196>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
