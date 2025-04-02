import type { Meta, StoryObj } from "@storybook/react";
import Solutions from "../Solutions";

const meta: Meta<typeof Solutions> = { title: "Azure/ManagementGovernance/Solutions", component: Solutions };

export default meta;
type Story = StoryObj<typeof Solutions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
