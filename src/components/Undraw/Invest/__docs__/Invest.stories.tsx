import type { Meta, StoryObj } from "@storybook/react";
import Invest from "../Invest";

const meta: Meta<typeof Invest> = { title: "unDraw/Invest", component: Invest };

export default meta;
type Story = StoryObj<typeof Invest>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
