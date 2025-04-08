import type { Meta, StoryObj } from "@storybook/react";
import NAT from "../NAT";

const meta: Meta<typeof NAT> = { title: "Azure/Networking/NAT", component: NAT };

export default meta;
type Story = StoryObj<typeof NAT>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
