import type { Meta, StoryObj } from "@storybook/react";
import Policy from "../Policy";

const meta: Meta<typeof Policy> = { title: "Azure/ManagementGovernance/Policy", component: Policy };

export default meta;
type Story = StoryObj<typeof Policy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
