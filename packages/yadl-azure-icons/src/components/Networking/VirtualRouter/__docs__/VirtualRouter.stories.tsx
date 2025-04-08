import type { Meta, StoryObj } from "@storybook/react";
import VirtualRouter from "../VirtualRouter";

const meta: Meta<typeof VirtualRouter> = { title: "Azure/Networking/VirtualRouter", component: VirtualRouter };

export default meta;
type Story = StoryObj<typeof VirtualRouter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
