import type { Meta, StoryObj } from "@storybook/react";
import AutoScaling from "../AutoScaling";

const meta: Meta<typeof AutoScaling> = { title: "AWS/ManagementGovernance/AutoScaling", component: AutoScaling };

export default meta;
type Story = StoryObj<typeof AutoScaling>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
