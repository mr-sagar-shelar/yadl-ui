import type { Meta, StoryObj } from "@storybook/react";
import CDNProfiles from "../CDNProfiles";

const meta: Meta<typeof CDNProfiles> = { title: "Azure/Networking/CDNProfiles", component: CDNProfiles };

export default meta;
type Story = StoryObj<typeof CDNProfiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
