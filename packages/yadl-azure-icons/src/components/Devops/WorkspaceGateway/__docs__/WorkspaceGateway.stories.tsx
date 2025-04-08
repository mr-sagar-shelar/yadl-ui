import type { Meta, StoryObj } from "@storybook/react";
import WorkspaceGateway from "../WorkspaceGateway";

const meta: Meta<typeof WorkspaceGateway> = { title: "Azure/Devops/WorkspaceGateway", component: WorkspaceGateway };

export default meta;
type Story = StoryObj<typeof WorkspaceGateway>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
