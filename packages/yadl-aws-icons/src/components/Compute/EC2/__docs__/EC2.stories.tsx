import type { Meta, StoryObj } from "@storybook/react";
import EC2 from "../EC2";

const meta: Meta<typeof EC2> = { title: "AWS/Compute/EC2", component: EC2 };

export default meta;
type Story = StoryObj<typeof EC2>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
