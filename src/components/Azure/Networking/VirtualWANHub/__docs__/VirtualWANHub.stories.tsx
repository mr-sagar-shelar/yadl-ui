import type { Meta, StoryObj } from "@storybook/react";
import VirtualWANHub from "../VirtualWANHub";

const meta: Meta<typeof VirtualWANHub> = { title: "Azure/Networking/VirtualWANHub", component: VirtualWANHub };

export default meta;
type Story = StoryObj<typeof VirtualWANHub>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
