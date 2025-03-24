import type { Meta, StoryObj } from "@storybook/react";
import NetworkConnectivityCenter from "../NetworkConnectivityCenter";

const meta: Meta<typeof NetworkConnectivityCenter> = { title: "GCP/NetworkConnectivityCenter", component: NetworkConnectivityCenter };

export default meta;
type Story = StoryObj<typeof NetworkConnectivityCenter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
