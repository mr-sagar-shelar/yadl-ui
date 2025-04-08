import type { Meta, StoryObj } from "@storybook/react";
import PublicIPPrefixes from "../PublicIPPrefixes";

const meta: Meta<typeof PublicIPPrefixes> = { title: "Azure/Networking/PublicIPPrefixes", component: PublicIPPrefixes };

export default meta;
type Story = StoryObj<typeof PublicIPPrefixes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
