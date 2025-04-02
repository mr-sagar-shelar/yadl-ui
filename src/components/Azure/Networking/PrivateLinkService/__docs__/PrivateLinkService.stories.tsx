import type { Meta, StoryObj } from "@storybook/react";
import PrivateLinkService from "../PrivateLinkService";

const meta: Meta<typeof PrivateLinkService> = { title: "Azure/Networking/PrivateLinkService", component: PrivateLinkService };

export default meta;
type Story = StoryObj<typeof PrivateLinkService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
