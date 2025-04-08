import type { Meta, StoryObj } from "@storybook/react";
import VirtualEnclaves from "../VirtualEnclaves";

const meta: Meta<typeof VirtualEnclaves> = { title: "Azure/Other/VirtualEnclaves", component: VirtualEnclaves };

export default meta;
type Story = StoryObj<typeof VirtualEnclaves>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
