import type { Meta, StoryObj } from "@storybook/react";
import EC2AutoScaling from "../EC2AutoScaling";

const meta: Meta<typeof EC2AutoScaling> = { title: "AWS/Compute/EC2AutoScaling", component: EC2AutoScaling };

export default meta;
type Story = StoryObj<typeof EC2AutoScaling>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
