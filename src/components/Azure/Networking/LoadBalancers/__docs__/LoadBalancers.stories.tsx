import type { Meta, StoryObj } from "@storybook/react";
import LoadBalancers from "../LoadBalancers";

const meta: Meta<typeof LoadBalancers> = { title: "Azure/Networking/LoadBalancers", component: LoadBalancers };

export default meta;
type Story = StoryObj<typeof LoadBalancers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
