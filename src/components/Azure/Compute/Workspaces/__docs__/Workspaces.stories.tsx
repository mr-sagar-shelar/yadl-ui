import type { Meta, StoryObj } from "@storybook/react";
import Workspaces from "../Workspaces";

const meta: Meta<typeof Workspaces> = { title: "Azure/Compute/Workspaces", component: Workspaces };

export default meta;
type Story = StoryObj<typeof Workspaces>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
