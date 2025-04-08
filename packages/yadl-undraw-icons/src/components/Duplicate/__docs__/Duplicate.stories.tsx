import type { Meta, StoryObj } from "@storybook/react";
import Duplicate from "../Duplicate";

const meta: Meta<typeof Duplicate> = { title: "unDraw/Duplicate", component: Duplicate };

export default meta;
type Story = StoryObj<typeof Duplicate>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
