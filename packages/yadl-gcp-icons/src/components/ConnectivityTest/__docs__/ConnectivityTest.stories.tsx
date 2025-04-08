import type { Meta, StoryObj } from "@storybook/react";
import ConnectivityTest from "../ConnectivityTest";

const meta: Meta<typeof ConnectivityTest> = { title: "GCP/ConnectivityTest", component: ConnectivityTest };

export default meta;
type Story = StoryObj<typeof ConnectivityTest>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
