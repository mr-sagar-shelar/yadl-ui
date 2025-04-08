import type { Meta, StoryObj } from "@storybook/react";
import NetworkManagers from "../NetworkManagers";

const meta: Meta<typeof NetworkManagers> = { title: "Azure/Other/NetworkManagers", component: NetworkManagers };

export default meta;
type Story = StoryObj<typeof NetworkManagers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
