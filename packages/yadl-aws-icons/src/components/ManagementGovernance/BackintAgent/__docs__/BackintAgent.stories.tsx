import type { Meta, StoryObj } from "@storybook/react";
import BackintAgent from "../BackintAgent";

const meta: Meta<typeof BackintAgent> = { title: "AWS/ManagementGovernance/BackintAgent", component: BackintAgent };

export default meta;
type Story = StoryObj<typeof BackintAgent>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
