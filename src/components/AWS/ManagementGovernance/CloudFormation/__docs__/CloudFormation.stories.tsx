import type { Meta, StoryObj } from "@storybook/react";
import CloudFormation from "../CloudFormation";

const meta: Meta<typeof CloudFormation> = { title: "AWS/ManagementGovernance/CloudFormation", component: CloudFormation };

export default meta;
type Story = StoryObj<typeof CloudFormation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
