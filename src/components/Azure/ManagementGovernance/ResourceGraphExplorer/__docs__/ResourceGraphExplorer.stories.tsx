import type { Meta, StoryObj } from "@storybook/react";
import ResourceGraphExplorer from "../ResourceGraphExplorer";

const meta: Meta<typeof ResourceGraphExplorer> = { title: "Azure/ManagementGovernance/ResourceGraphExplorer", component: ResourceGraphExplorer };

export default meta;
type Story = StoryObj<typeof ResourceGraphExplorer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
