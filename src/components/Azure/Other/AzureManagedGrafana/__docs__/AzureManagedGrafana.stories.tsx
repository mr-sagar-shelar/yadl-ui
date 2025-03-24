import type { Meta, StoryObj } from "@storybook/react";
import AzureManagedGrafana from "../AzureManagedGrafana";

const meta: Meta<typeof AzureManagedGrafana> = { title: "Azure/Other/AzureManagedGrafana", component: AzureManagedGrafana };

export default meta;
type Story = StoryObj<typeof AzureManagedGrafana>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
