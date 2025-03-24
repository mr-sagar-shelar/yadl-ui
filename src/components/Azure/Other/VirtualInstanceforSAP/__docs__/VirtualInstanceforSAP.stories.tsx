import type { Meta, StoryObj } from "@storybook/react";
import VirtualInstanceforSAP from "../VirtualInstanceforSAP";

const meta: Meta<typeof VirtualInstanceforSAP> = { title: "Azure/Other/VirtualInstanceforSAP", component: VirtualInstanceforSAP };

export default meta;
type Story = StoryObj<typeof VirtualInstanceforSAP>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
