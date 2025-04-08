import type { Meta, StoryObj } from "@storybook/react";
import CloudWatch from "../CloudWatch";

const meta: Meta<typeof CloudWatch> = { title: "AWS/ManagementGovernance/CloudWatch", component: CloudWatch };

export default meta;
type Story = StoryObj<typeof CloudWatch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
