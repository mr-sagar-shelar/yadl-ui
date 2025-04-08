import type { Meta, StoryObj } from "@storybook/react";
import PublicIPAddresses from "../PublicIPAddresses";

const meta: Meta<typeof PublicIPAddresses> = { title: "Azure/Networking/PublicIPAddresses", component: PublicIPAddresses };

export default meta;
type Story = StoryObj<typeof PublicIPAddresses>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
