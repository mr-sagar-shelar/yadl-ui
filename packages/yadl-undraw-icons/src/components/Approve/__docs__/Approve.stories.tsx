import type { Meta, StoryObj } from "@storybook/react";
import Approve from "../Approve";

const meta: Meta<typeof Approve> = { title: "unDraw/Approve", component: Approve };

export default meta;
type Story = StoryObj<typeof Approve>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
