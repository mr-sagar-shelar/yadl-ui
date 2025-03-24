import type { Meta, StoryObj } from "@storybook/react";
import LoadBalancerHub from "../LoadBalancerHub";

const meta: Meta<typeof LoadBalancerHub> = { title: "Azure/Networking/LoadBalancerHub", component: LoadBalancerHub };

export default meta;
type Story = StoryObj<typeof LoadBalancerHub>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
