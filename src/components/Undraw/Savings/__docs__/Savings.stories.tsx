import type { Meta, StoryObj } from "@storybook/react";
import Savings from "../Savings";

const meta: Meta<typeof Savings> = { title: "unDraw/Savings", component: Savings };

export default meta;
type Story = StoryObj<typeof Savings>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
