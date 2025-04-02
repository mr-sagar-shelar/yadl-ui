import type { Meta, StoryObj } from "@storybook/react";
import VirtualPrivateCloud from "../VirtualPrivateCloud";

const meta: Meta<typeof VirtualPrivateCloud> = { title: "AWS/NetworkingContentDelivery/VirtualPrivateCloud", component: VirtualPrivateCloud };

export default meta;
type Story = StoryObj<typeof VirtualPrivateCloud>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
