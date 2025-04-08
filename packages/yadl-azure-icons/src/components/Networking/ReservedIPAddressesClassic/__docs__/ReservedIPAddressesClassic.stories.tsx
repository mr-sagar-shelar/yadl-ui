import type { Meta, StoryObj } from "@storybook/react";
import ReservedIPAddressesClassic from "../ReservedIPAddressesClassic";

const meta: Meta<typeof ReservedIPAddressesClassic> = { title: "Azure/Networking/ReservedIPAddressesClassic", component: ReservedIPAddressesClassic };

export default meta;
type Story = StoryObj<typeof ReservedIPAddressesClassic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
