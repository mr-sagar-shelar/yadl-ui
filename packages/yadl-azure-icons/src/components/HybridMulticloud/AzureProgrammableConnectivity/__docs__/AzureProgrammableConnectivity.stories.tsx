import type { Meta, StoryObj } from "@storybook/react";
import AzureProgrammableConnectivity from "../AzureProgrammableConnectivity";

const meta: Meta<typeof AzureProgrammableConnectivity> = { title: "Azure/HybridMulticloud/AzureProgrammableConnectivity", component: AzureProgrammableConnectivity };

export default meta;
type Story = StoryObj<typeof AzureProgrammableConnectivity>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
