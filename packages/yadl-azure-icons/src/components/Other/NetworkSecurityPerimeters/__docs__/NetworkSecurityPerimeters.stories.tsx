import type { Meta, StoryObj } from "@storybook/react";
import NetworkSecurityPerimeters from "../NetworkSecurityPerimeters";

const meta: Meta<typeof NetworkSecurityPerimeters> = { title: "Azure/Other/NetworkSecurityPerimeters", component: NetworkSecurityPerimeters };

export default meta;
type Story = StoryObj<typeof NetworkSecurityPerimeters>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
