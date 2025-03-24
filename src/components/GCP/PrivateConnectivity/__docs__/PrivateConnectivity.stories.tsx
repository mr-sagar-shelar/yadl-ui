import type { Meta, StoryObj } from "@storybook/react";
import PrivateConnectivity from "../PrivateConnectivity";

const meta: Meta<typeof PrivateConnectivity> = { title: "GCP/PrivateConnectivity", component: PrivateConnectivity };

export default meta;
type Story = StoryObj<typeof PrivateConnectivity>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
