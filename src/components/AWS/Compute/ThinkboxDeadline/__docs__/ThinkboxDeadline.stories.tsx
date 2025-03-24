import type { Meta, StoryObj } from "@storybook/react";
import ThinkboxDeadline from "../ThinkboxDeadline";

const meta: Meta<typeof ThinkboxDeadline> = { title: "AWS/Compute/ThinkboxDeadline", component: ThinkboxDeadline };

export default meta;
type Story = StoryObj<typeof ThinkboxDeadline>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
