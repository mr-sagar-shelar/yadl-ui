import type { Meta, StoryObj } from "@storybook/react";
import AzureLighthouse from "../AzureLighthouse";

const meta: Meta<typeof AzureLighthouse> = { title: "Azure/ManagementGovernance/AzureLighthouse", component: AzureLighthouse };

export default meta;
type Story = StoryObj<typeof AzureLighthouse>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
