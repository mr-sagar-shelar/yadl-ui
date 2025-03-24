import type { Meta, StoryObj } from "@storybook/react";
import ManagedGrafana from "../ManagedGrafana";

const meta: Meta<typeof ManagedGrafana> = { title: "AWS/ManagementGovernance/ManagedGrafana", component: ManagedGrafana };

export default meta;
type Story = StoryObj<typeof ManagedGrafana>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
