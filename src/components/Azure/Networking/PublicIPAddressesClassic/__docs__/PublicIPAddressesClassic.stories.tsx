import type { Meta, StoryObj } from "@storybook/react";
import PublicIPAddressesClassic from "../PublicIPAddressesClassic";

const meta: Meta<typeof PublicIPAddressesClassic> = { title: "Azure/Networking/PublicIPAddressesClassic", component: PublicIPAddressesClassic };

export default meta;
type Story = StoryObj<typeof PublicIPAddressesClassic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
