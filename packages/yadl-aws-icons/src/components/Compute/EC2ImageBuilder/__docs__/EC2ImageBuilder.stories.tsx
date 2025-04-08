import type { Meta, StoryObj } from "@storybook/react";
import EC2ImageBuilder from "../EC2ImageBuilder";

const meta: Meta<typeof EC2ImageBuilder> = { title: "AWS/Compute/EC2ImageBuilder", component: EC2ImageBuilder };

export default meta;
type Story = StoryObj<typeof EC2ImageBuilder>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
