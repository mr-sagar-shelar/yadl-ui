import type { Meta, StoryObj } from "@storybook/react";
import CloudTrail from "../CloudTrail";

const meta: Meta<typeof CloudTrail> = { title: "AWS/ManagementGovernance/CloudTrail", component: CloudTrail };

export default meta;
type Story = StoryObj<typeof CloudTrail>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
