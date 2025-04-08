import type { Meta, StoryObj } from "@storybook/react";
import MeshApplications from "../MeshApplications";

const meta: Meta<typeof MeshApplications> = { title: "Azure/Compute/MeshApplications", component: MeshApplications };

export default meta;
type Story = StoryObj<typeof MeshApplications>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
