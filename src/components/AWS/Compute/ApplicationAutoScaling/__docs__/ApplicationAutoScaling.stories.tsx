import type { Meta, StoryObj } from "@storybook/react";
import ApplicationAutoScaling from "../ApplicationAutoScaling";

const meta: Meta<typeof ApplicationAutoScaling> = { title: "AWS/Compute/ApplicationAutoScaling", component: ApplicationAutoScaling };

export default meta;
type Story = StoryObj<typeof ApplicationAutoScaling>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
