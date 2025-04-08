import type { Meta, StoryObj } from "@storybook/react";
import Hosts from "../Hosts";

const meta: Meta<typeof Hosts> = { title: "Azure/Compute/Hosts", component: Hosts };

export default meta;
type Story = StoryObj<typeof Hosts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
