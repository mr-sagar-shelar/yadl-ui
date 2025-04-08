import type { Meta, StoryObj } from "@storybook/react";
import Analyze from "../Analyze";

const meta: Meta<typeof Analyze> = { title: "unDraw/Analyze", component: Analyze };

export default meta;
type Story = StoryObj<typeof Analyze>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
