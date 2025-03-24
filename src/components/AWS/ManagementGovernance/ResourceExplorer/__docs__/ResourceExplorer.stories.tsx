import type { Meta, StoryObj } from "@storybook/react";
import ResourceExplorer from "../ResourceExplorer";

const meta: Meta<typeof ResourceExplorer> = { title: "AWS/ManagementGovernance/ResourceExplorer", component: ResourceExplorer };

export default meta;
type Story = StoryObj<typeof ResourceExplorer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
